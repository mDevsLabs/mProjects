---
title: "Architecture"
description: "Vue d'ensemble des modules, microservices et flux de données de la suite mDevsLabs."
category: "Architecture"
order: 1
---

# Architecture Système globale de mDevsLabs 🏛️🔄

L'architecture globale de l'écosystème **mDevsLabs** repose sur une découpe modulable en microservices isolés garantissant flexibilité, scalabilité et résilience.

---

## 📐 Vue d'Ensemble des Composants

```
┌─────────────────────────────────────────────────────────────────┐
│                     Front-end & User Layer                      │
│      mProjects Web (Next.js)  │  mDevsLabs Studio  │  CLI       │
└────────────────────────────────┬────────────────────────────────┘
                                 │
┌────────────────────────────────▼────────────────────────────────┐
│                     API Gateway & Auth Layer                    │
│            JWT Verification / Rate Limiting / CORS              │
└────────────────────────────────┬────────────────────────────────┘
                                 │
        ┌────────────────────────┴────────────────────────┐
        │                                                 │
┌───────▼────────────────────────┐      ┌─────────────────▼───────────────┐
│     Inference Engine (mAI)     │      │     Search & RAG (mSearch)     │
│   Ollama / Llama.cpp backend   │      │   HNSW Dense Vector Store      │
└────────────────────────────────┘      └─────────────────────────────────┘
```

---

## 🛠️ Microservices Principaux

1. **mAI Inference Core** : Serveur d'inférence de modèles LLM et multimodaux.
2. **mSearch Vector Service** : Moteur de recherche sémantique et hybride.
3. **Agent Manager** : Orchestrateur de tâches asynchrones, d'outils externes et de communication inter-agents.
4. **mProjects Portal** : Portail web et centre de documentation interactif.
