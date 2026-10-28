import requests
import time

url = "http://127.0.0.1:11434/api/chat"

data = {
    "model": "llama3.2:1b",
    "stream": False,
    "format": "json",
    "messages": [
        {
            "role": "user",
            "content": "Return JSON only with one short question about Python."
        }
    ],
    "options": {
        "temperature": 0.1,
        "num_ctx": 1024,
        "num_predict": 50
    }
}

print("Testing Ollama...")
start = time.time()

response = requests.post(
    url,
    json=data,
    timeout=60
)

elapsed = time.time() - start

print("TIME:", round(elapsed, 2), "seconds")
print("STATUS:", response.status_code)
print("RESPONSE:", response.text)