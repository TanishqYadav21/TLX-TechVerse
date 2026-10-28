import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

const ai = apiKey
  ? new GoogleGenAI({ apiKey })
  : null;

const TTS_MODEL = "gemini-3.1-flash-tts-preview";

function pcmToWav(
  pcm: Buffer,
  sampleRate = 24000,
  channels = 1,
  bitsPerSample = 16
) {
  const header = Buffer.alloc(44);

  const byteRate =
    sampleRate *
    channels *
    (bitsPerSample / 8);

  const blockAlign =
    channels *
    (bitsPerSample / 8);

  header.write("RIFF", 0);
  header.writeUInt32LE(
    36 + pcm.length,
    4
  );

  header.write("WAVE", 8);

  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(
    channels,
    22
  );

  header.writeUInt32LE(
    sampleRate,
    24
  );

  header.writeUInt32LE(
    byteRate,
    28
  );

  header.writeUInt16LE(
    blockAlign,
    32
  );

  header.writeUInt16LE(
    bitsPerSample,
    34
  );

  header.write("data", 36);

  header.writeUInt32LE(
    pcm.length,
    40
  );

  return Buffer.concat([
    header,
    pcm,
  ]);
}

export async function POST(
  request: Request
) {
  try {
    if (!ai) {
      return NextResponse.json(
        {
          error:
            "GEMINI_API_KEY is missing.",
        },
        { status: 500 }
      );
    }

    const body =
      await request.json();

    const text =
      typeof body?.text ===
      "string"
        ? body.text.trim()
        : "";

    if (!text) {
      return NextResponse.json(
        {
          error:
            "Text is required.",
        },
        { status: 400 }
      );
    }

    const safeText =
      text.slice(0, 1200);

    const response =
      await ai.models.generateContent({
        model: TTS_MODEL,

        contents: `
Speak this as a professional placement interviewer.

Voice style:
- Natural
- Calm
- Confident
- Warm
- Professional
- Medium pace
- Clear pronunciation
- Short natural pauses
- Do not sound robotic
- Do not sound overly dramatic

Text:

${safeText}
        `.trim(),

        config: {
          responseModalities: [
            "AUDIO",
          ],

          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: "Kore",
              },
            },
          },
        },
      });

    const parts =
      response.candidates?.[0]
        ?.content?.parts || [];

    const audioPart =
      parts.find(
        (part: any) =>
          part.inlineData?.data
      );

    if (
      !audioPart?.inlineData?.data
    ) {
      return NextResponse.json(
        {
          error:
            "Gemini did not return audio.",
        },
        { status: 502 }
      );
    }

    const pcmBuffer =
      Buffer.from(
        audioPart.inlineData.data,
        "base64"
      );

    /*
     * Gemini TTS returns PCM.
     * Convert PCM → WAV so the browser
     * can play it reliably.
     */
    const wavBuffer =
      pcmToWav(
        pcmBuffer,
        24000,
        1,
        16
      );

    return new NextResponse(
      wavBuffer as any,
      {
        status: 200,
        headers: {
          "Content-Type":
            "audio/wav",
          "Content-Length":
            wavBuffer.length.toString(),
          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error: any) {
    console.error(
      "TTS ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "TTS generation failed.",
      },
      { status: 500 }
    );
  }
}