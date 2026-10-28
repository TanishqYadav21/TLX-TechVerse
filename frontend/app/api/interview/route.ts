import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const MODEL = "gemini-3.6-flash";
const MAX_QUESTIONS = 12;

type HistoryItem = {
  question: string;
  answer: string;
  category?: string;
};

type RequestBody = {
  action: "start" | "next" | "report" | "practice";
  resumeText: string;
  interviewType?: "live" | "practice";
  question?: string;
  answer?: string;
  history?: HistoryItem[];
};

function cleanText(text: string, max = 14000) {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, max);
}

function cleanAnswer(text: string) {
  return text.trim().slice(0, 1600);
}

function parseJSON(text: string) {
  let value = text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "");

  try {
    return JSON.parse(value);
  } catch {
    const start = value.indexOf("{");
    const end = value.lastIndexOf("}");

    if (start !== -1 && end > start) {
      return JSON.parse(value.slice(start, end + 1));
    }

    throw new Error("Invalid AI response.");
  }
}

function getStage(history: HistoryItem[]) {
  const n = history.length;

  if (n === 0) return "Introduction";
  if (n === 1) return "Background";
  if (n === 2) return "Resume";
  if (n === 3) return "Skills";
  if (n <= 5) return "Projects";
  if (n <= 8) return "Technical";
  if (n <= 10) return "Behavioral";
  return "Closing";
}

/* =====================================================
   LOCAL FALLBACK
===================================================== */

function makeFallbackQuestion(
  resume: string,
  history: HistoryItem[]
) {
  const stage = getStage(history);

  const lower = resume.toLowerCase();

  const asked = new Set(
    history.map((x) =>
      x.question.toLowerCase()
    )
  );

  const projectMatch =
    resume.match(
      /(?:project|projects)\s*[:\-]?\s*([^\n]+)/i
    );

  const skill =
    lower.includes("python")
      ? "Python"
      : lower.includes("java")
      ? "Java"
      : lower.includes("javascript")
      ? "JavaScript"
      : lower.includes("node")
      ? "Node.js"
      : lower.includes("react")
      ? "React"
      : lower.includes("mongodb")
      ? "MongoDB"
      : lower.includes("sql")
      ? "SQL"
      : "the technical skills mentioned in your resume";

  const project =
    projectMatch?.[1]?.trim() ||
    "one of the projects mentioned in your resume";

  const questions: Record<
    string,
    Array<{
      question: string;
      category: string;
      difficulty: string;
    }>
  > = {
    Introduction: [
      {
        question:
          "Good morning. Please introduce yourself.",
        category: "General",
        difficulty: "Easy",
      },
    ],

    Background: [
      {
        question:
          "Can you briefly tell me about your BCA and your career goals?",
        category: "HR",
        difficulty: "Easy",
      },
    ],

    Resume: [
      {
        question:
          "Can you briefly walk me through your resume?",
        category: "General",
        difficulty: "Easy",
      },
    ],

    Skills: [
      {
        question:
          `I see ${skill} on your resume. How comfortable are you with it?`,
        category: "Technical",
        difficulty: "Easy",
      },
    ],

    Projects: [
      {
        question:
          `Can you briefly explain ${project}?`,
        category: "Project",
        difficulty: "Easy",
      },
      {
        question:
          "What was your specific role in this project?",
        category: "Project",
        difficulty: "Medium",
      },
    ],

    Technical: [
      {
        question:
          `What is one important concept you learned while working with ${skill}?`,
        category: "Technical",
        difficulty: "Medium",
      },
      {
        question:
          "Tell me about one technical problem you faced and how you solved it.",
        category: "Technical",
        difficulty: "Medium",
      },
      {
        question:
          "How would you improve one technical part of your project?",
        category: "Technical",
        difficulty: "Hard",
      },
    ],

    Behavioral: [
      {
        question:
          "Tell me about a difficult situation you faced while working on a project.",
        category: "Behavioral",
        difficulty: "Medium",
      },
      {
        question:
          "How do you handle learning a technology you do not know?",
        category: "HR",
        difficulty: "Easy",
      },
    ],

    Closing: [
      {
        question:
          "Why should we consider you for this role?",
        category: "HR",
        difficulty: "Medium",
      },
    ],
  };

  const candidates =
    questions[stage] || questions.Closing;

  const unused =
    candidates.find(
      (item) =>
        !asked.has(
          item.question.toLowerCase()
        )
    );

  return (
    unused ||
    candidates[0]
  );
}

/* =====================================================
   GEMINI
===================================================== */

async function askGemini(
  prompt: string,
  systemInstruction: string
) {
  if (!ai) {
    throw new Error("NO_API_KEY");
  }

  try {
    const response =
      await ai.models.generateContent({
        model: MODEL,
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.6,
          maxOutputTokens: 500,
        },
      });

    const text =
      response.text?.trim();

    if (!text) {
      throw new Error(
        "EMPTY_RESPONSE"
      );
    }

    return text;
  } catch (error) {
    console.error(
      "Gemini unavailable:",
      error
    );

    throw error;
  }
}

/* =====================================================
   AI QUESTION
===================================================== */

async function generateQuestion(
  resume: string,
  history: HistoryItem[],
  currentQuestion?: string,
  latestAnswer?: string
) {
  const stage =
    getStage(history);

  const recent =
    history
      .slice(-4)
      .map(
        (item, i) =>
          `Q${i + 1}: ${item.question}
A${i + 1}: ${cleanAnswer(item.answer)}`
      )
      .join("\n\n");

  const system = `
You are a real human placement interviewer.

Interview stage:
${stage}

Follow this order strictly:

Introduction
Background
Resume
Skills
Projects
Technical
Behavioral/HR
Closing

RULES:
- Ask exactly ONE question.
- Keep it short.
- Maximum 20-25 words.
- Never combine multiple questions.
- Never randomly jump between topics.
- Stay connected to the resume.
- Never invent resume information.
- Use the candidate's previous answer for cross-questions.
- If the candidate makes a technical claim, ask about that claim.
- If they mention a project, ask about their actual role or implementation.
- If the answer is vague, ask one clarification.
- Do not repeat an already asked question.
- Sound like a real interviewer.

Return ONLY JSON:

{
  "question": "short question",
  "category": "General | HR | Technical | Project | Behavioral",
  "difficulty": "Easy | Medium | Hard",
  "followUp": true,
  "stage": "${stage}"
}
`;

  const prompt = `
RESUME:
${resume}

RECENT INTERVIEW:
${recent}

CURRENT QUESTION:
${currentQuestion || ""}

LATEST ANSWER:
${latestAnswer || ""}

Ask the next natural question.
`;

  return parseJSON(
    await askGemini(
      prompt,
      system
    )
  );
}

/* =====================================================
   GET
===================================================== */

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "AI Interview API",
    model: MODEL,
  });
}

/* =====================================================
   POST
===================================================== */

export async function POST(
  request: Request
) {
  try {
    const body =
      (await request.json()) as RequestBody;

    if (
      !body.resumeText ||
      body.resumeText.trim().length < 50
    ) {
      return NextResponse.json(
        {
          error:
            "Please upload a readable resume first.",
        },
        { status: 400 }
      );
    }

    const resume =
      cleanText(body.resumeText);

    const history =
      body.history || [];

    /* =================================================
       START
    ================================================= */

    if (body.action === "start") {
      const fallback =
        makeFallbackQuestion(
          resume,
          []
        );

      try {
        const question =
          await generateQuestion(
            resume,
            []
          );

        return NextResponse.json(
          question
        );
      } catch {
        return NextResponse.json({
          ...fallback,
          fallback: true,
        });
      }
    }

    /* =================================================
       NEXT
    ================================================= */

    if (body.action === "next") {
      if (
        !body.question ||
        !body.answer
      ) {
        return NextResponse.json(
          {
            error:
              "Question and answer are required.",
          },
          { status: 400 }
        );
      }

      if (
        history.length >=
        MAX_QUESTIONS
      ) {
        return NextResponse.json({
          finish: true,
        });
      }

      const fallback =
        makeFallbackQuestion(
          resume,
          history
        );

      try {
        const question =
          await generateQuestion(
            resume,
            history,
            body.question,
            body.answer
          );

        return NextResponse.json(
          question
        );
      } catch {
        return NextResponse.json({
          ...fallback,
          fallback: true,
        });
      }
    }

    /* =================================================
       REPORT
    ================================================= */

    if (body.action === "report") {
      if (!history.length) {
        return NextResponse.json(
          {
            error:
              "No interview answers found.",
          },
          { status: 400 }
        );
      }

      const transcript =
        history
          .slice(0, MAX_QUESTIONS)
          .map(
            (item, index) =>
              `Q${index + 1}: ${item.question}
A${index + 1}: ${cleanAnswer(
                item.answer
              )}`
          )
          .join("\n\n");

      try {
        const system = `
You are a professional placement interviewer.

Evaluate the candidate based ONLY on their resume and answers.

Return ONLY JSON:

{
  "overallScore": 0,
  "recommendation": "Strong Hire | Hire | Consider | Needs Improvement",
  "summary": "short summary",
  "scores": {
    "technical": 0,
    "projects": 0,
    "communication": 0,
    "problemSolving": 0,
    "hrBehavioral": 0
  },
  "strengths": ["short point"],
  "improvements": ["short point"],
  "weakAnswers": [
    {
      "question": "question",
      "issue": "issue",
      "betterApproach": "better approach"
    }
  ],
  "recommendedTopics": ["topic"],
  "finalFeedback": "short recruiter feedback"
}

All scores must be 0-100.
`;

        const result =
          await askGemini(
            `
RESUME:
${resume}

INTERVIEW:
${transcript}
`,
            system
          );

        return NextResponse.json(
          parseJSON(result)
        );
      } catch {
        /*
         * Local fallback report
         */

        const total =
          history.length;

        const answered =
          history.filter(
            (x) =>
              x.answer.trim()
                .length > 20
          ).length;

        const score = Math.min(
          100,
          Math.round(
            (answered /
              Math.max(total, 1)) *
              100
          )
        );

        return NextResponse.json({
          overallScore: score,

          recommendation:
            score >= 80
              ? "Hire"
              : score >= 60
              ? "Consider"
              : "Needs Improvement",

          summary:
            "Your interview was completed successfully. Continue practicing resume-based technical and HR questions.",

          scores: {
            technical: score,
            projects: score,
            communication: score,
            problemSolving: score,
            hrBehavioral: score,
          },

          strengths: [
            "Completed the interview.",
            "Answered questions from your resume.",
          ],

          improvements: [
            "Give concise and structured answers.",
            "Support technical answers with examples.",
          ],

          weakAnswers: [],

          recommendedTopics: [
            "Resume projects",
            "Technical fundamentals",
            "HR interview questions",
          ],

          finalFeedback:
            "Keep practicing with short, structured answers and be ready to explain every skill and project listed on your resume.",

          fallback: true,
        });
      }
    }

    /* =================================================
       PRACTICE
    ================================================= */

    if (body.action === "practice") {
      try {
        const system = `
You are a placement preparation coach.

Create resume-based interview questions.

Return ONLY JSON:

{
  "questions": [
    {
      "question": "short question",
      "category": "Technical | Project | HR | Behavioral | General",
      "difficulty": "Easy | Medium | Hard",
      "sampleAnswer": "concise answer",
      "answerStrategy": "concise strategy",
      "followUps": ["short follow-up"]
    }
  ]
}

Do not invent information.
Keep questions short.
`;

        const result =
          await askGemini(
            `
RESUME:
${resume}

Create a useful practice bank.
`,
            system
          );

        return NextResponse.json(
          parseJSON(result)
        );
      } catch {
        return NextResponse.json({
          questions: [
            {
              question:
                "Please introduce yourself.",
              category: "General",
              difficulty: "Easy",
              sampleAnswer:
                "Give a brief introduction covering your education, skills, projects and career goal.",
              answerStrategy:
                "Keep your introduction under one minute.",
              followUps: [
                "What are your strongest technical skills?",
              ],
            },
            {
              question:
                "Explain one project mentioned in your resume.",
              category: "Project",
              difficulty: "Easy",
              sampleAnswer:
                "Explain the purpose, your role, technologies and result.",
              answerStrategy:
                "Use a clear project structure.",
              followUps: [
                "What was the biggest challenge in that project?",
              ],
            },
            {
              question:
                "What technical skill are you most confident in?",
              category: "Technical",
              difficulty: "Easy",
              sampleAnswer:
                "Name one actual skill from your resume and give a practical example.",
              answerStrategy:
                "Support the skill with something you built.",
              followUps: [
                "Where did you use that skill?",
              ],
            },
          ],
          fallback: true,
        });
      }
    }

    return NextResponse.json(
      {
        error:
          "Invalid interview action.",
      },
      { status: 400 }
    );
  } catch (error: any) {
    console.error(
      "INTERVIEW API ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Interview request failed.",
      },
      { status: 500 }
    );
  }
}