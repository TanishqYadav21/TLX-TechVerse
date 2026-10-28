# Real AI Interview Backend

FastAPI + local Ollama interview engine. The live interview is resume-aware and adaptive: strong answers can cause deeper follow-ups, weak answers can cause clarification, and the backend controls the interview order so the model cannot randomly jump between topics.

Run on Windows:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Set `OLLAMA_MODEL` to a local model you have installed. The example is `qwen3:8b`.

Endpoints:
- POST `/interview/start` with `{ "resume_text": "..." }`
- POST `/interview/answer` with `{ "session_id": "...", "answer": "..." }`
- POST `/interview/report` with `{ "session_id": "..." }`
- GET `/health`

A local model avoids cloud API request quotas. It is not literally infinite: speed and quality depend on your computer's CPU/GPU/RAM and the selected model.
