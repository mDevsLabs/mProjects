---
title: "Architecture de Snob"
description: "Détails techniques sur l'infrastructure cloud et la stack React/Firebase de Snob."
category: "Architecture"
order: 8
---

# Architecture Technique de Snob 🏗️

Snob est une application web moderne construite pour offrir des performances maximales et une expérience utilisateur fluide, sans aucun lag, même avec de multiples effets de particules à l'écran.

## Stack Technologique

- **Frontend** : Next.js 15 (App Router), React 19, TypeScript.
- **Styling** : Tailwind CSS avec configurations HSL avancées pour les thèmes dynamiques.
- **Animations** : `motion/react` (Framer Motion) pour des micro-interactions de prestige.
- **Backend & Base de données** : Firebase (Firestore, Auth, Storage) pour la sauvegarde en temps réel des profils et des scores.
- **Déploiement** : Vercel.

## Gestion de l'État (State Management)

Snob utilise un système hybride :
- **Context API** : Pour les états globaux du joueur (Snob Points, Niveau, Skins débloqués).
- **Hooks Locaux & Callbacks** : Pour la logique de la grille de jeu qui nécessite des mises à jour rapides (60 FPS).

## Optimisation des Particules

Les effets visuels (traînées, explosions de blocs) sont conçus pour être fluides. Les composants utilisent des éléments DOM optimisés pour éviter le garbage collection agressif qui pourrait créer des micro-saccades en pleine partie. Le rendu de la grille évite les re-renders inutiles via des mémos intelligents.
