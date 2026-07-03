---
title: "Framework"
description: "Framework de connecteurs d'API, outils d'exécution (tool calls) et orchestration."
category: "API"
order: 4
---

# mDevsLabs Agent Framework 🤖🤝

Le **mDevsLabs Agent Framework** est la bibliothèque d'orchestration permettant de créer des équipes d'agents IA autonomes coopérant pour résoudre des tâches complexes.

---

## 🏗️ Modèle d'Agent Autonome

Un agent dans le framework est défini par :
1. **Un Rôle & Une Persona** (`system_prompt`).
2. **Une Liste d'Outils Autorisés** (`tools`).
3. **Un Moteur de Raisonnement** (`mAI-Reasoning`).
4. **Une Mémoire d'Échange** (`memory_store`).

---

## 💻 Exemple de Code d'un Agent Multi-Outils

```python
from mdevslabs.agents import Agent, Tool, Runner

def get_current_weather(location: str) -> str:
    return f"Le temps à {location} est ensoleillé avec 22°C."

weather_tool = Tool.from_function(get_current_weather)

assistant = Agent(
    name="AssistantMeteo",
    model="mai-1",
    tools=[weather_tool],
    instructions="Réponds aux questions météo en utilisant l'outil get_current_weather."
)

result = Runner.run_sync(assistant, "Quel temps fait-il à Paris ?")
print(result.final_output)
```
