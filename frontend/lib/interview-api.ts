const INTERVIEW_API =
  process.env.NEXT_PUBLIC_INTERVIEW_API ||
  "http://localhost:8000";

export async function startRealInterview(
  resumeText: string
) {
  const response = await fetch(
    `${INTERVIEW_API}/interview/start`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resume_text: resumeText,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

export async function submitRealInterviewAnswer(
  sessionId: string,
  answer: string
) {
  const response = await fetch(
    `${INTERVIEW_API}/interview/answer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: sessionId,
        answer,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

export async function getRealInterviewReport(
  sessionId: string
) {
  const response = await fetch(
    `${INTERVIEW_API}/interview/report`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: sessionId,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}