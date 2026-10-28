import os
import re
import uuid
import json
import requests
from typing import Dict, Any

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

# ============================================================
# HOSTED AI CONFIG (Hugging Face Inference Providers)
# ============================================================
HF_TOKEN = os.getenv("HF_TOKEN", "")
HF_MODEL = os.getenv("HF_MODEL", "openai/gpt-oss-120b:fastest")
HF_API_URL = "https://router.huggingface.co/v1/chat/completions"
HF_TIMEOUT = 60

app = FastAPI(title="TLX TechVerse Real AI Interview")

allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
frontend_url = os.getenv("FRONTEND_URL", "").strip().rstrip("/")
if frontend_url:
    allowed_origins.append(frontend_url)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sessions: Dict[str, Dict[str, Any]] = {}


class StartRequest(BaseModel):
    resume_text: str = Field(min_length=30)


class AnswerRequest(BaseModel):
    session_id: str
    answer: str = Field(min_length=1)


class ReportRequest(BaseModel):
    session_id: str


def clean(value: str, limit: int = 2500) -> str:
    value = re.sub(r"[ \t]+", " ", value or "")
    value = re.sub(r"\n{3,}", "\n\n", value)
    return value.strip()[:limit]


def extract_resume_facts(resume: str) -> str:
    """
    Deterministic extraction. No AI call is used here.
    We only keep resume lines that are useful for interview questions.
    """
    lines = [
        re.sub(r"\s+", " ", x).strip()
        for x in resume.splitlines()
        if x.strip()
    ]

    important = []

    keywords = [
        "project", "experience", "intern", "education", "skill",
        "python", "java", "javascript", "typescript", "react",
        "next", "node", "sql", "mysql", "mongodb", "django",
        "flask", "machine learning", "data science", "power bi",
        "aws", "docker", "git", "certification", "achievement",
        "developed", "built", "implemented", "worked",
    ]

    for line in lines:
        low = line.lower()
        if any(k in low for k in keywords):
            if line not in important:
                important.append(line)

    # Also preserve the first few profile/education lines.
    important = lines[:8] + important

    # Remove duplicates while preserving order.
    seen = set()
    unique = []
    for line in important:
        if line not in seen:
            seen.add(line)
            unique.append(line)

    return "\n".join(unique[:35])[:6500]


def ollama(prompt: str) -> dict:
    """
    One short hosted-model call through Hugging Face Inference Providers.
    The function name is retained so the existing interview routes need no changes.
    """
    if not HF_TOKEN:
        raise RuntimeError("HF_TOKEN is not configured in the hosting environment.")

    payload = {
        "model": HF_MODEL,
        "stream": False,
        "messages": [
            {
                "role": "system",
                "content": (
                    "You are a realistic software placement interviewer. "
                    "Return only valid JSON. Ask exactly one short question. "
                    "Never invent anything not supported by the resume or "
                    "candidate answer. Never ask a random generic question."
                ),
            },
            {"role": "user", "content": prompt},
        ],
        "temperature": 0.15,
        "max_tokens": 350,
    }
    headers = {
        "Authorization": f"Bearer {HF_TOKEN}",
        "Content-Type": "application/json",
    }

    try:
        r = requests.post(
            HF_API_URL,
            headers=headers,
            json=payload,
            timeout=HF_TIMEOUT,
        )
    except requests.exceptions.Timeout:
        raise RuntimeError("Hosted AI timed out. Please try again.")
    except requests.exceptions.RequestException as e:
        raise RuntimeError(f"Could not connect to hosted AI: {e}")

    if not r.ok:
        detail = r.text[:500]
        if r.status_code in (401, 403):
            raise RuntimeError(
                "Hugging Face rejected HF_TOKEN or its Inference Providers permission. "
                f"API response: {detail}"
            )
        raise RuntimeError(f"Hugging Face API HTTP {r.status_code}: {detail}")

    try:
        content = r.json()["choices"][0]["message"]["content"].strip()
    except (ValueError, KeyError, IndexError, TypeError):
        raise RuntimeError(f"Hosted AI returned an unexpected response: {r.text[:300]}")

    if not content:
        raise RuntimeError("Hosted AI returned an empty response.")

    # Be tolerant of accidental markdown fences or extra text around JSON.
    content = re.sub(r"^```json\s*", "", content, flags=re.I)
    content = re.sub(r"\s*```$", "", content)
    start_json = content.find("{")
    end_json = content.rfind("}")

    if start_json == -1 or end_json <= start_json:
        raise RuntimeError(f"Hosted AI returned invalid JSON: {content[:250]}")

    try:
        return json.loads(content[start_json:end_json + 1])
    except json.JSONDecodeError as e:
        raise RuntimeError(f"Hosted AI returned invalid JSON: {e}")


def safe_question(data: dict) -> str:
    question = str(data.get("question", "")).strip()

    if not question:
        raise RuntimeError("Local AI did not return a question.")

    if len(question) > 280:
        raise RuntimeError("Local AI returned an overly long question.")

    return question


# ============================================================
# HEALTH
# ============================================================
@app.get("/health")
def health():
    configured = bool(HF_TOKEN)
    return {
        "ok": configured,
        "provider": "huggingface-inference-providers",
        "model": HF_MODEL,
        "configured": configured,
        "error": None if configured else "HF_TOKEN is not configured.",
    }

# ============================================================
# START
# ============================================================
@app.post("/interview/start")
def start_interview(request: StartRequest):
    resume = clean(request.resume_text, 12000)
    facts = extract_resume_facts(resume)

    session_id = str(uuid.uuid4())

    sessions[session_id] = {
        "resume": resume,
        "facts": facts,
        "history": [],
        "stage": "introduction",
        "difficulty": 1,
    }

    # Natural interview opening. No AI call wasted here.
    return {
        "session_id": session_id,
        "question": "Good morning. Please introduce yourself.",
        "stage": "introduction",
        "difficulty": 1,
        "action": "continue",
        "mode": "ai",
    }


# ============================================================
# ANSWER -> NEXT QUESTION
# ONE AI CALL ONLY
# ============================================================
@app.post("/interview/answer")
def answer(request: AnswerRequest):
    session = sessions.get(request.session_id)

    if not session:
        raise HTTPException(
            status_code=404,
            detail="Interview session not found.",
        )

    answer_text = clean(request.answer, 2200)

    if not answer_text:
        raise HTTPException(
            status_code=400,
            detail="Answer is empty.",
        )

    history = session["history"]

    previous_question = (
        history[-1]["question"]
        if history
        else "Good morning. Please introduce yourself."
    )

    # Only a tiny amount of history is sent to the model.
    recent = history[-3:]

    recent_text = "\n".join(
        f"Q: {item['question']}\nA: {item['answer']}"
        for item in recent
    )

    prompt = f"""
INTERVIEW STAGE: {session["stage"]}
DIFFICULTY: {session["difficulty"]}

RESUME FACTS:
{session["facts"]}

RECENT INTERVIEW:
{recent_text or "No previous turns."}

PREVIOUS QUESTION:
{previous_question}

LATEST ANSWER:
{answer_text}

Generate the NEXT question.

REAL INTERVIEW RULES:
- Start from introduction, then naturally move to education/background,
  resume, projects, project deep-dive, technical skills, technical
  deep-dive, problem solving, behavioral and closing.
- If the latest answer is strong/specific, ask a deeper follow-up about
  that exact answer.
- If it is vague, ask a short clarification.
- If enough depth was covered, move naturally to the next resume topic.
- Use only facts actually present in RESUME FACTS or the candidate answer.
- Do not invent a project, technology or experience.
- Do not repeat the previous question.
- Do not ask a generic random question.
- Ask exactly ONE question.
- Keep it conversational and under 25 words.

Return exactly:
{{
  "question": "one interviewer question",
  "action": "follow_up",
  "stage": "project",
  "difficulty": 1
}}

stage must be one of:
introduction, background, resume, project, project_deep_dive,
technical, technical_deep_dive, problem_solving, behavioral, closing

action must be:
follow_up, deep_dive, continue, move_on, finish

difficulty: 1 to 5
"""

    try:
        data = ollama(prompt)
        question = safe_question(data)

    except Exception as e:
        # NEVER replace an AI failure with a dummy question.
        raise HTTPException(
            status_code=504,
            detail=str(e),
        )

    stage = str(data.get("stage", session["stage"]))
    allowed_stages = {
        "introduction",
        "background",
        "resume",
        "project",
        "project_deep_dive",
        "technical",
        "technical_deep_dive",
        "problem_solving",
        "behavioral",
        "closing",
    }

    if stage not in allowed_stages:
        stage = session["stage"]

    difficulty = max(
        1,
        min(5, int(data.get("difficulty", session["difficulty"]))),
    )

    action = str(data.get("action", "continue"))
    if action not in {
        "follow_up",
        "deep_dive",
        "continue",
        "move_on",
        "finish",
    }:
        action = "continue"

    # Save this turn only after AI successfully generated the next question.
    history.append({
        "question": previous_question,
        "answer": answer_text,
    })

    session["stage"] = stage
    session["difficulty"] = difficulty

    if action == "finish":
        question = "Thank you. That concludes the interview."

    return {
        "session_id": request.session_id,
        "question": question,
        "stage": stage,
        "difficulty": difficulty,
        "action": action,
        "mode": "ai",
        "progress": len(history) + 1,
    }


# ============================================================
# REPORT
# ============================================================
@app.post("/interview/report")
def report(request: ReportRequest):
    session = sessions.get(request.session_id)

    if not session:
        raise HTTPException(
            status_code=404,
            detail="Interview session not found.",
        )

    transcript = "\n".join(
        f"Q: {x['question']}\nA: {x['answer']}"
        for x in session["history"]
    )

    prompt = f"""
Create a short interview report from this resume and transcript.

RESUME FACTS:
{session["facts"]}

INTERVIEW:
{transcript[:9000]}

Return only:
{{
  "overallScore": 0,
  "technical": 0,
  "projectUnderstanding": 0,
  "communication": 0,
  "problemSolving": 0,
  "behavioral": 0,
  "strengths": ["..."],
  "improvements": ["..."],
  "recommendation": "Strong",
  "summary": "short summary"
}}

All scores must be 0-100.
"""

    try:
        return ollama(prompt)

    except Exception as e:
        raise HTTPException(
            status_code=504,
            detail=f"Could not generate report: {e}",
        )
