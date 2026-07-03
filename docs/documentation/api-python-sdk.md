---
title: "SDK Python"
description: "Guide d'installation et exemples de code Python pour interagir avec les API mAI."
category: "API"
order: 2
---

# SDK Python mDevsLabs (`mdevslabs-python`) 🐍⚡

Le SDK officiel Python pour l'écosystème **mDevsLabs** fournit un wrapper moderne, fortement typé avec Pydantic v2 et compatible `asyncio`.

---

## 📦 Installation

```bash
pip install mdevslabs-python
```

---

## 💡 Exemple d'Utilisation Synchrone & Asynchrone

### Mode Synchrone

```python
from mdevslabs import mDevsClient

client = mDevsClient(base_url="http://localhost:11434")

response = client.generate(
    model="mai-1",
    prompt="Rédige une docstring Python pour une fonction de tri fusion."
)

print(response.text)
```

### Mode Asynchrone (Asyncio + Streaming)

```python
import asyncio
from mdevslabs import AsyncmDevsClient

async def main():
    async with AsyncmDevsClient() as client:
        stream = await client.chat.stream(
            model="mai-code",
            messages=[{"role": "user", "content": "Crée une classe FastAPI d'authentification."}]
        )
        async for chunk in stream:
            print(chunk.delta, end="", flush=True)

asyncio.run(main())
```
