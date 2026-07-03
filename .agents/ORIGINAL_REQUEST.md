# Original User Request

## Initial Request — 2026-07-03T09:34:10Z

Créer deux nouvelles pages (Télécharger et Documentation) dans le site mProjects en TypeScript/Next.js en reprenant l'interface glassmorphism existante.

Working directory: `c:\Users\maria\Desktop\MATHIAS\Dossiers Mathias\mCompany\mProjects`
Integrity mode: development

## Requirements

### R1. Page Télécharger (Download)
- Ajouter l'accès à cette page dans le menu déroulant "Plus", positionnée sous "Notes de version" et au-dessus de "API".
- La page doit contenir trois sections stylisées en glassmorphism :
  1. **mAI** : Deux boutons :
     - "Canal Stable" (fond noir, texte blanc) redirigeant vers : `https://github.com/mDevsLabs/mAI/releases/latest`
     - "Canal Canary" (fond blanc, texte noir) redirigeant vers : `https://github.com/mDevsLabs/mAI/releases?q=Canary&expanded=true`
  2. **mSearch** : Un bouton :
     - "Canal Stable" (fond noir, texte blanc) redirigeant vers : `https://github.com/mDevsLabs/mSearch/releases/latest`
  3. **mAI-1** : Deux sous-parties avec des commandes à copier/télécharger (inspiré de l'interface de la page Modèles) :
     - Partie mAI-1 avec la commande : `ollama run mDevsLabs/mAI-1`
     - Partie mAI-1-Light avec la commande : `ollama run mDevsLabs/mAI-1-Light`

### R2. Page Documentation (Bêta)
- Ajouter l'accès à cette page dans le menu déroulant "Plus", sous "API" (ou en bas de liste).
- Créer un nouveau dossier pour stocker la documentation. Y copier et renommer pour plus de clarté les fichiers markdown existants ou en rédiger de nouveaux afin d'atteindre environ 30 fichiers de documentation réels (concernant les applications, modèles d'IA de mDevsLabs, etc.), rédigés à la main sans script de génération de texte automatique.
- Concevoir une interface en glassmorphism comprenant :
  - Une barre latérale (sidebar) listant les documents par leurs titres.
  - Une barre de recherche fonctionnelle dans la sidebar pour filtrer les documents par titre ou contenu.
  - Un volet principal de lecture affichant le contenu du markdown sélectionné, rendu proprement.

## Acceptance Criteria

### UI et Navigation
- [ ] Les pages "Télécharger" et "Documentation" sont intégrées de façon fluide dans la navigation existante (menu déroulant "Plus").
- [ ] L'interface glassmorphism utilise les mêmes composants et styles visuels que le reste du site.
- [ ] Les boutons de téléchargement et les liens externes fonctionnent correctement.
- [ ] Les commandes Ollama sur la page Télécharger peuvent être copiées en un clic.
- [ ] La page de documentation affiche la barre latérale avec les titres et permet la recherche et le rendu dynamique des fichiers markdown.

### Qualité du Code
- [ ] Le build Next.js réussit sans aucune erreur TypeScript ou de compilation.
- [ ] Les ~30 fichiers markdown de documentation sont présents dans le dossier dédié.
