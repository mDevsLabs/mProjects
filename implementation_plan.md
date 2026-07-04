# Plan d'implémentation - Améliorations GitHub & Comparateur de Modèles

Ce plan décrit les modifications à apporter au projet pour intégrer l'API GitHub dynamique (étoiles, statut des releases) et le comparateur de modèles interactif.

## 1. 🐙 Intégration Dynamique de l'API GitHub
Nous allons créer ou modifier un composant pour charger et afficher dynamiquement :
* Le nombre d'étoiles (stars) de chaque dépôt (`mDevsLabs/mAI` et `mDevsLabs/mSearch`).
* La dernière version de la release.
* Utilisation du token `process.env.NEXT_PUBLIC_GITHUB_TOKEN` pour l'authentification des requêtes de l'API publique.

### Fichiers impactés
* [NEW] [github-repo-stats.tsx](file:///c:/Users/maria/Desktop/MATHIAS/Dossiers%20Mathias/mCompany/mProjects/components/github-repo-stats.tsx) : Nouveau composant pour charger les étoiles et les releases.
* [MODIFY] [page.tsx](file:///c:/Users/maria/Desktop/MATHIAS/Dossiers%20Mathias/mCompany/mProjects/app/projects/page.tsx) : Intégration du composant dans les cartes de projets.

---

## 2. 📊 Comparateur de Modèles Côte-à-Côte
Nous allons ajouter une section de comparaison interactive dans la page des modèles. Les développeurs pourront comparer :
* **mAI-1** et **mAI-1-Light**
* Avec **Llama-3 (8B)**, **Gemma-2 (9B)** et **Granite-3.1 (8B)**.
* Critères : Vitesse d'inférence (t/s), Score MMLU (%), Taille en RAM (Go) et Cas d'usage principaux.

### Fichiers impactés
* [MODIFY] [page.tsx](file:///c:/Users/maria/Desktop/MATHIAS/Dossiers%20Mathias/mCompany/mProjects/app/models/page.tsx) : Ajout d'une section interactive avec filtres ou tableau comparatif dynamique.

---

## 3. 💡 Idées d'ajouts dans chaque page (sans implémentation)
Nous listerons des idées innovantes dans la réponse finale pour chaque page de l'application.

## 🛠️ Plan de Vérification
* Lancer `npm run build` pour valider la compilation.
