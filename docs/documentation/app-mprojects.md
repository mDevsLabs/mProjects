---
title: "mProjects"
description: "Portail centralisé de suivi des versions, actualités et documentation technique."
category: "Applications"
order: 3
---

# mProjects - Hub de Projets & Documentation mDevsLabs 🌐⚡

**mProjects** est la vitrine web et le hub de documentation centralisé pour l'ensemble des initiatives technologiques de **mDevsLabs**. Construit sur **Next.js 15**, **Tailwind CSS v4** et un design system **Glassmorphism**, mProjects regroupe les actualités, le suivi des changelogs, la présentation des modèles et la documentation technique interactive.

---

## 🎯 Objectifs du Projet

- **Transparence & Suivi** : Publier les mises à jour en temps réel via des changelogs structurés par produit (`mAI`, `mSearch`, etc.).
- **Centre de Documentation** : Offrir une expérience de lecture rapide, avec recherche instantanée et navigation par catégorie.
- **Accès aux Modèles** : Mettre en avant les caractéristiques des modèles d'IA développés par mDevsLabs et leurs liens de téléchargement Ollama/HuggingFace.

---

## 🎨 Design System Glassmorphism

Le site utilise des styles CSS sur-mesure combinant flou d'arrière-plan (*backdrop-blur*) et bordures semi-transparentes :

```tsx
<div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-6">
  <h2 className="text-xl font-bold text-slate-900">Glassmorphism Card</h2>
  <p className="text-slate-600">Interface élégante et moderne inspirée des systèmes de pointe.</p>
</div>
```

---

## ⚡ Stack Technologique

- **Framework** : Next.js 15 App Router
- **Style** : Tailwind CSS v4 + Framer Motion / Motion
- **Parsing MD** : `gray-matter` & `react-markdown`
- **Icônes** : `lucide-react` & `react-icons`
- **Recherche Instantanée** : Client-side search filtrée à la volée.
