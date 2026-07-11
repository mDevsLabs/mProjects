---
title: "mAI CLI"
description: "Guide d'installation npm et référence complète des commandes du terminal pour le mAI CLI."
category: "Applications"
order: 1.5
---

# mAI CLI - Interface en ligne de commande 💻✨

Le **mAI CLI** est l'outil indispensable pour interagir, piloter et intégrer les services mAI directement depuis votre terminal. Conçu pour les développeurs et les administrateurs système, il permet de gérer vos agents, modèles, et communications avec la passerelle locale mAI.

---

## 📦 Installation

Le mAI CLI est publié sous forme de paquet npm officiel. L'installation et la mise à jour s'effectuent exclusivement via **npm**.

### Installation globale (Recommandé)
Pour avoir accès à la commande `mai` n'importe où dans votre terminal :
```bash
npm i -g @mdevs/mai-cli
```

### Installation locale
Si vous préférez l'utiliser uniquement au sein d'un projet spécifique :
```bash
npm i @mdevs/mai-cli
```
Vous pourrez ensuite l'exécuter avec `npx mai`.

---

## 🚀 Utilisation de base

```bash
mai [options] [command]
```

### Options globales :
- `-V, --version` : Affiche le numéro de version installé.
- `-h, --help` : Affiche l'aide globale ou l'aide d'une commande spécifique.

---

## 🛠️ Référence des commandes

### Gestion de la connexion et de la session

- **`login [options]`** : Connecte le CLI à votre compte mAI via le navigateur (Device Code Flow) ou configure votre serveur de clés API.
- **`logout`** : Déconnecte votre compte et supprime de façon sécurisée les jetons et identifiants locaux.
- **`connect [options]`** : Établit la connexion avec la passerelle de périphérique (device gateway) et se met à l'écoute des appels d'outils.
- **`disconnect`** : Interrompt la liaison avec la passerelle de périphérique (alias rapide de la commande `connect stop`).
- **`status [options]`** : Vérifie l'état actuel de votre connexion avec la passerelle de périphérique.

---

### Gestion des périphériques et fichiers

- **`device`** : Administre et liste les périphériques connectés.
- **`file`** : Gère les fichiers locaux et distants synchronisés avec mAI.
- **`kb`** : Administre les bases de connaissances (Knowledge Bases), les dossiers de données et les index.

---

### Moteurs et Modèles d'IA

- **`model`** : Gère, configure et télécharge les modèles d'intelligence artificielle locaux.
- **`provider`** : Configure et supervise les fournisseurs d'IA (Ollama, Hugging Face, etc.).
- **`generate | gen`** : Lance des requêtes de génération de contenu (texte, image, vidéo ou synthèse vocale).

---

### Agents, Skills et Sessions

- **`agent`** : Configure, instancie et administre vos agents IA.
- **`agent-group`** : Organise vos agents en groupes de travail collaboratif.
- **`agent-signal`** : Inspecte et déclenche les événements et signaux provenant des agents.
- **`bot`** : Configure les intégrations de robots conversationnels (chatbots).
- **`skill`** : Gère les compétences (skills) et plugins chargeables par vos agents.
- **`task`** : Planifie et supervise les tâches exécutées en arrière-plan par vos agents.
- **`session-group`** : Organise et archive vos historiques de sessions.
- **`thread`** : Permet de gérer les fils de discussion de vos messages.
- **`topic`** : Configure et structure les thèmes et sujets de vos fils.
- **`message`** : Gère vos messages envoyés et reçus.
- **`memory`** : Administre les souvenirs à long terme et la mémoire utilisateur des agents.

---

### Utilitaires avancés et CLI tiers

- **`hetero`** : Exécute des CLI d'agents tiers ou hétérogènes (tels que Claude Code ou Codex) en diffusant leur flux de sortie en temps réel.
- **`verify`** : Supervise et contrôle la livraison de l'exécution des agents (selon critères, rubriques de vérification, plans et résultats).
- **`whoami [options]`** : Affiche les informations de l'utilisateur connecté actuellement.
- **`usage [options]`** : Consulte les statistiques d'utilisation détaillées de votre compte.
- **`eval`** : Pilote les flux d'évaluation et de test des performances de vos agents.
- **`migrate`** : Importe et migre vos données issues d'outils tiers (OpenClaw, ChatGPT, Claude, etc.).
- **`update [options]`** : Met à jour mAI CLI vers la dernière version stable publiée.
- **`completion [shell]`** : Génère le script d'autocomplétion pour votre terminal (bash, zsh, powershell).
- **`man [command...]`** : Affiche le manuel d'utilisation complet du CLI ou d'une commande spécifique.
- **`help [command]`** : Affiche l'aide détaillée pour n'importe quelle commande spécifiée.
