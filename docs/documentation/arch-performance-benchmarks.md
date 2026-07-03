---
title: "Benchmarks de Performance & Latence"
description: "Mesures de débit tokens/seconde, temps de premier token (TTFT) et empreinte mémoire VRAM."
category: "Architecture"
order: 5
---

# Benchmarks de Performance & Latence ⏱️🏎️

Cette page compile les résultats de tests de performance effectués sur les différentes déclinaisons des modèles **mAI** dans divers environnements matériels.

---

## ⏱️ Débit d'Inférence (Tokens par Seconde - tk/s)

| Modèle | Hardware | Quantification | TTFT (ms) | Débit Inférence (tk/s) |
| --- | --- | --- | --- | --- |
| **mAI-1-Light (2B)** | Apple M2 Mac Studio | Q4_K_M | 45 ms | 112 tk/s |
| **mAI-1-Light (2B)** | NVIDIA RTX 4060 Ti | Q8_0 | 28 ms | 145 tk/s |
| **mAI-1 (12B)** | Apple M3 Max (64GB) | Q4_K_M | 120 ms | 48 tk/s |
| **mAI-1 (12B)** | NVIDIA RTX 4090 | Q8_0 | 35 ms | 82 tk/s |
| **mAI-Code (12B)** | 2x NVIDIA H100 | FP16 | 18 ms | 165 tk/s |

---

## 💡 Métriques Clés Expliquées

- **TTFT (Time-To-First-Token)** : Temps écoulé entre la réception de la requête HTTP et l'émission du tout premier token généré.
- **Débit de Génération (tk/s)** : Nombre de tokens générés par seconde lors de la phase de décodage.
- **Empreinte VRAM Peak** : Consommation maximale de mémoire vidéo incluant le KV-Cache pour une fenêtre de 32K tokens.
