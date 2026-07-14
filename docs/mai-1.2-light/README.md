![mAI-1.2-Light](https://upload.fs.fr/YFFKJ4rkMB.png)

# mAI-1.2-Light ⚡

**mAI-1.2-Light** est un assistant d'intelligence artificielle local, rapide et multimodal. Optimisé pour s'exécuter efficacement via **Ollama**, il prend en charge le traitement conjoint de textes et d'images.

> **Objectif** : Mettre à disposition un modèle performant et accessible, capable d'analyser des documents visuels et de répondre aux requêtes quotidiennes. Idéal pour la productivité, le développement informatique, la synthèse de documents et l'analyse d'images, tout en garantissant la confidentialité des données grâce à une exécution locale (Local-first).

---

## ⚙️ Spécifications clés

- **Taille** : 3 milliards de paramètres (3B).
- **Contexte** : Fenêtre de contexte native étendue à **256K tokens**.
- **Vision** : Prise en charge native de la vision multimodale.

---

## ✨ Fonctionnalités

- ⚡ **Légèreté & Rapidité** : Optimisé pour s'exécuter localement sans surcharge système majeure.
- 📸 **Vision Multimodale** : Analyse et traitement d'images (captures d'écran, graphiques, documents numérisés).
- 🧠 **Assistance générale** : Réponses aux questions, rédaction de contenus, reformulation et aide à la création.
- 🧾 **Synthèse & Extraction** : Analyse approfondie de notes, d'articles, de journaux système (logs) et d'images.
- 💻 **Développement** : Aide à la génération de code, explication de scripts, refactoring et assistance au débogage.
- 🔎 **Intégration RAG** : Prêt pour les architectures de génération augmentée par récupération (RAG).
- 🌍 **Support multilingue** : Français, anglais, espagnol, allemand, japonais, portugais, arabe, italien, coréen, chinois, etc.
- 🔐 **Confidentialité** : Exécution 100 % locale pour une sécurité totale de vos données.

---

## 📊 Benchmarks de performance

Aperçu des performances du modèle sur les tâches de référence : 

![Benchmarks mAI-1.2-Light](https://upload.fs.fr/0hN2V7LWC6.png)

---

## 🚀 Guide d'installation rapide

### 1. Installer Ollama

Téléchargez et installez Ollama depuis la plateforme officielle :

[https://ollama.com/download](https://ollama.com/download)

### 2. Exécuter le modèle

Une fois Ollama installé, lancez le modèle dans votre terminal avec la commande suivante :

```bash
ollama run mDevsLabs/mAI-1.2-Light
```