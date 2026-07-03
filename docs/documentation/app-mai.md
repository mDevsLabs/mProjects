---
title: "mAI"
description: "Présentation complète et architecture de l'assistant mAI propulsé par Gemma 4 et Ollama."
category: "Applications"
order: 1
---

# mAI - Assistant IA Local & Multimodal 🧠✨

**mAI** est le flagship de l'écosystème **mDevsLabs**. Il s'agit d'un assistant IA local, hautement sécurisé, capable de traiter du texte, du code, des documents complexes et des données visuelles directement sur votre poste de travail.

---

## 🌟 Caractéristiques Principales

- **Conception Local-First** : Vos données restent à 100% sur votre machine. Aucune télémétrie ou donnée sensible n'est envoyée vers des serveurs tiers.
- **Moteur Multimodal** : Capacité native d'analyse d'images, de diagrammes et d'images techniques grâce aux encodeurs visuels mAI-Vision.
- **Intégration Ollama & Llama.cpp** : Moteur d'inférence basé sur `ollama` avec quantification automatique (GGUF Q4_K_M et Q8_0).
- **Agent Framework Intégré** : Support natif du *tool calling* pour exécuter des fonctions Python, interroger des bases de données ou exécuter du code isolé.

---

## 🏗️ Architecture Technique

```
┌───────────────────────────────────────────────────────────┐
│                    mAI Client Interface                   │
└─────────────────────────────┬─────────────────────────────┘
                              │ API REST / WebSockets
┌─────────────────────────────▼─────────────────────────────┐
│                   mDevsLabs Agent Core                    │
├─────────────────────────────┬─────────────────────────────┤
│   Inference Controller      │     Memory & RAG Pipeline   │
└──────────────┬──────────────┴──────────────┬──────────────┘
               │                             │
┌──────────────▼──────────────┐┌─────────────▼──────────────┐
│       Ollama Engine         ││     Vector Store (HNSW)    │
└─────────────────────────────┘└────────────────────────────┘
```

---

## 💻 Exemple de Lancement Rapide

Vous pouvez démarrer mAI directement depuis le terminal via Ollama :

```bash
# Télécharger et lancer l'assistant mAI
ollama run mdevslabs/mai:latest

# Exemple de prompt
> Explique-moi le fonctionnement des transformateurs attentionnels en 3 points.
```

---

## ⚙️ Configuration Recommandée

| Composant | Configuration Minimale | Configuration Recommandée |
| --- | --- | --- |
| **RAM** | 16 Go DDR4 | 32 Go DDR5 |
| **GPU** | NVIDIA RTX 3060 (8 Go VRAM) | NVIDIA RTX 4080/4090 (16+ Go VRAM) |
| **Stockage** | 20 Go SSD NVMe | 50 Go SSD NVMe PCIe 4.0 |
| **OS** | Linux / macOS / Windows WSL2 | Ubuntu 22.04 LTS / macOS Sonoma |

---

## 🔒 Confidentialité & Alignement

mAI intègre un garde-fou éthique local sans censurer les usages scientifiques et techniques. Toutes les requêtes sont filtrées par un module d'audit local pour prévenir l'injection de prompts non désirée.
