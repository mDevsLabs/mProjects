---
title: "Déploiement GitHub & Vercel"
description: "Comment publier et héberger le site mProjects avec GitHub et Vercel."
category: "Guides"
order: 13
---

# Déploiement GitHub & Vercel 🌐🚀

Le site **mProjects** est conçu pour être hébergé de manière continue et automatisée grâce à l'intégration de **GitHub** et **Vercel**.

---

## 📦 1. Publier sur GitHub

1. **Créer un dépôt** sur votre compte GitHub (ex: `mProjects`).
2. **Lier votre projet local** :
   ```bash
   git init
   git remote add origin https://github.com/votre-compte/mProjects.git
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

---

## ⚡ 2. Déploiement Continu sur Vercel

1. Rendez-vous sur votre console **Vercel** et cliquez sur **Add New > Project**.
2. Importez le dépôt GitHub de votre projet.
3. Configurez les variables d'environnement si nécessaire (ex: clés API).
4. Cliquez sur **Deploy**. Chaque push sur votre branche `main` déclenchera automatiquement une nouvelle mise en production optimisée !
