const RAPID_API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY!;

const RAPID_API_HOST =
  "judge0-ce.p.rapidapi.com";

const languageMap = {
  cpp: 54,
  c: 50,
  java: 62,
  python: 71,
  javascript: 63,
};

export async function executeCode(
  language: keyof typeof languageMap,
  code: string,
  input: string
) {
  const response = await fetch(
    `https://${RAPID_API_HOST}/submissions?base64_encoded=false&wait=true`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": RAPID_API_HOST,
      },
      body: JSON.stringify({
        language_id: languageMap[language],
        source_code: code,
        stdin: input,
      }),
    }
  );

  return await response.json();
}