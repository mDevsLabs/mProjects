![mAI-1](https://upload.fs.fr/YdirFBxLxC.png)

# mAI-1 🚀

**mAI-1** est un assistant IA local puissant, multimodal et orienté productivité, propulsé par **Google Gemma 4 12B Unified** et conçu pour tourner avec **Ollama**.

> mAI-1 = la version complète de la famille mAI : plus capable que `mAI-1-Light`, meilleure pour le raisonnement, le code, les agents, les documents longs et l’analyse d’images. Local-first, pas besoin d’envoyer tes données dans le cloud 🧠🔐

---

## ✨ Fonctionnalités

- 🧠 **Raisonnement avancé** : tâches complexes, planification, analyse, multi-step reasoning.
- 💻 **Code & dev assistant** : génération, refactoring, debug, scripts, API, docs techniques.
- 👁️ **Multimodal** : texte + image via Ollama.
- 🧩 **Agent-ready** : compatible avec les usages tool/function calling selon l’intégration.
- 📚 **Long contexte** : jusqu’à 256K tokens côté modèle Ollama, selon mémoire disponible.
- 🧾 **RAG-ready** : idéal pour recherche documentaire, synthèse et extraction.
- 🌍 **Multilingue** : utilisable en français, anglais et de nombreuses autres langues.
- 🔐 **Local-first** : fonctionne en local via Ollama.
- ⚙️ **Pensé pour workstation/laptop puissant** : bon équilibre entre performance et praticité.

---

## 🧬 Base du modèle

| Élément | Valeur |
| :--- | :--- |
| **Nom** | `mAI-1` |
| **Nom Ollama recommandé** | `mai-1` |
| **Base Ollama** | `gemma4:12b` |
| **Modèle source** | Google Gemma 4 12B Unified |
| **Famille** | Gemma 4 |
| **Créateur** | Google DeepMind |
| **Paramètres** | ~11.9B |
| **Taille Ollama approximative** | ~7.6 GB |
| **Quantization Ollama** | `Q4_K_M` |
| **Contexte Ollama** | jusqu’à 256K tokens |
| **Entrées Ollama** | Texte + image |
| **Sortie** | Texte |
| **Licence** | Apache 2.0 |
| **Mémoire conseillée** | 16 GB VRAM ou mémoire unifiée pour une bonne expérience |

> Note : Gemma 4 12B est annoncé avec une architecture multimodale unifiée. Dans Ollama, le tag `gemma4:12b` expose principalement les usages texte + image. Le support audio dépend du runtime et de l’intégration utilisée.

---

## 🚀 Installation rapide

### 1. Installer Ollama

Télécharge Ollama :

```bash
https://ollama.com/download
