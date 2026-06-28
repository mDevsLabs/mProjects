# 🚀 mProjects (mDevsLabs)

Bienvenue sur le portail de gestion de projets et d'actualités de **mDevsLabs**. Ce projet est une application web moderne développée avec **Next.js 15** qui centralise nos actualités, nos outils internes et nos innovations, notamment nos deux projets phares : **mAI** et **mSearch**.

---

## 🌟 Fonctionnalités Clés

- 📰 **Fil d'actualités dynamique** : Les dernières annonces et nouveautés de mDevsLabs.
- 🛠️ **Catalogue de projets** :
  - **mAI** 🤖 : Assistant d'intelligence artificielle de nouvelle génération multiplateforme (Web, Windows, macOS, Linux).
  - **mSearch** 🔍 : Outil de recherche unifié ultra-rapide disponible sur Windows, macOS et Linux.
- ⌨️ **Menu de commandes global** (Command Menu) : Navigation rapide et efficace grâce à un menu interactif.
- 🌓 **Mode Sombre/Clair automatique** : Intégration soignée de `next-themes` avec un design épuré.
- 📈 **Activité GitHub en direct** : Visualisation des derniers commits et releases de nos dépôts.

---

## 🛠️ Stack Technique

Le projet repose sur les technologies modernes suivantes :

- **Framework** : [Next.js 15](https://nextjs.org/) (App Router, React 18)
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/) & [Vanilla CSS](https://developer.mozilla.org/fr/docs/Web/CSS)
- **Animations** : [Motion](https://motion.dev/) (anciennement Framer Motion) pour des micro-interactions fluides
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)

---

## 💻 Démarrage Local

### Prérequis

Assurez-vous d'avoir installé **Node.js** (version 20 ou supérieure conseillée) sur votre machine.

### Instructions

1. **Cloner le dépôt** :
   ```bash
   git clone <url-du-depot>
   cd mprojects
   ```

2. **Installer les dépendances** (en utilisant `npm`) :
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** :
   Créez un fichier `.env.local` à la racine et ajoutez vos clés nécessaires :
   ```env
   # Si requis par des intégrations d'IA
   GEMINI_API_KEY=votre_cle_gemini
   ```

4. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
   L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## 🚀 Déploiement Continu sur Vercel via GitHub Actions

Ce projet intègre un workflow de déploiement continu automatisé à l'aide de **GitHub Actions**.

### Structure du Workflow

Le fichier de configuration se trouve dans [.github/workflows/deploy-vercel.yml](file:///C:/Users/maria/Desktop/MATHIAS/Dossiers%20Mathias/mCompany/mProjects/.github/workflows/deploy-vercel.yml).
Il est configuré pour déployer une version de **preview** de l'application à chaque push sur la branche `canary` et à chaque Pull Request ouverte, synchronisée ou réouverte. La branche `main` est ainsi préservée des déploiements de preview automatiques.

### Configuration des Secrets sur GitHub

Pour que le déploiement fonctionne, vous devez ajouter les trois secrets suivants dans les paramètres de votre dépôt GitHub (`Settings > Secrets and variables > Actions`) :

1. `VERCEL_TOKEN` : Votre jeton d'accès Vercel.
2. `VERCEL_ORG_ID` : L'identifiant de votre organisation/compte Vercel.
3. `VERCEL_PROJECT_ID` : L'identifiant du projet Vercel associé.

*(Note : Tous les autres secrets qui n'appartenaient pas à ce projet ont été nettoyés du fichier de workflow).*

---

## 🔑 Comment obtenir vos tokens Vercel ?

Suivez ces étapes simples pour configurer votre intégration Vercel :

### 1. Obtenir le `VERCEL_TOKEN` (Jeton d'accès personnel)
1. Allez sur votre tableau de bord [Vercel](https://vercel.com).
2. Cliquez sur votre avatar en haut à droite et allez dans **Settings** (Paramètres du compte).
3. Dans la barre latérale gauche, cliquez sur **Tokens**.
4. Cliquez sur **Create** (Créer un nouveau token).
5. Donnez-lui un nom clair (ex : `GitHub Actions Deploy`), choisissez un périmètre d'accès approprié (Scope), et cliquez sur **Create**.
6. **Copiez le token généré** immédiatement (il ne sera plus affiché). Ce sera la valeur de `VERCEL_TOKEN`.

### 2. Obtenir le `VERCEL_ORG_ID` & `VERCEL_PROJECT_ID`
La méthode la plus simple pour récupérer ces identifiants est d'utiliser le CLI Vercel localement :
1. Dans votre terminal à la racine du projet, exécutez la commande suivante :
   ```bash
   npx vercel link
   ```
2. Connectez-vous à votre compte et suivez les instructions à l'écran pour lier le projet local à un projet sur Vercel.
3. Une fois lié, un dossier caché `.vercel` sera créé à la racine du projet, contenant un fichier `project.json`.
4. Ouvrez `.vercel/project.json` :
   - `orgId` correspond à votre `VERCEL_ORG_ID`.
   - `projectId` correspond à votre `VERCEL_PROJECT_ID`.
5. Ajoutez ces valeurs en tant que secrets dans GitHub, puis vous pourrez supprimer le dossier local `.vercel` de votre machine.

---

## 📄 Licence

Ce projet est privé et réservé à l'usage de **mDevsLabs**.
