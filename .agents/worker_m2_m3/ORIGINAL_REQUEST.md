## 2026-07-03T09:40:00Z
Bonjour Worker 🛠️!
Votre mission est d'implémenter les **Jalons 2 & 3 (Milestones 2 & 3) : Dossier de Documentation (~30 fichiers MD réels), Système `lib/docs.ts`, et Page Documentation Bêta (`app/docs/`)** pour le site `mProjects`.

Votre répertoire d'agent dédié pour les métadonnées et rapports est : `c:\Users\maria\Desktop\MATHIAS\Dossiers Mathias\mCompany\mProjects\.agents\worker_m2_m3`.

### Avertissement d'intégrité (Obligatoire) :
> DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

---

### Tâches à accomplir :

#### 1. Création & Organisation des ~30 Fichiers Markdown (`docs/documentation/`)
- Créer un dossier dédié `docs/documentation/` à la racine de la codebase.
- Copier/renommer pour plus de clarté les fichiers MD existants utiles et en rédiger de nouveaux afin d'atteindre **environ 30 fichiers de documentation réels** rédigés à la main (sans script de génération automatique de texte).
- Les sujets doivent couvrir de façon realistic et technique les écosystèmes et projets de **mDevsLabs** :
  - **Applications & Outils** : `mAI`, `mSearch`, `mProjects`, `mDevsLabs CLI`, `mDevsLabs Cloud`, `mDevsLabs Studio`, `mDevsLabs Agent Framework`, etc.
  - **Modèles d'IA** : `mAI-1`, `mAI-1-Light`, `mAI-Code`, `mAI-Vision`, `mAI-Embeddings`, `mAI-Reasoning`, `mAI-Audio`, etc.
  - **Guides & Tutoriels** : Installation avec Ollama, Configuration Docker, Déploiement Cloud, Intégration API REST & SDK Python/TypeScript, Fine-tuning, Prompt Engineering, Gestion de mémoire contextuelle, Sécurité & Confidentialité, etc.
  - **Architecture & Spécifications** : Architecture Système, Spécifications des Endpoints API, Traitement RAG (Retrieval-Augmented Generation), Indexation Vectorielle, Format de stockage des Modèles, Benchmarks de performance, Notes de sécurité, etc.
- Chaque fichier `.md` doit inclure un frontmatter YAML propre :
  ```markdown
  ---
  title: "Titre clair du document"
  description: "Description concise du contenu"
  category: "Applications" | "Modèles d'IA" | "Guides" | "Architecture" | "API"
  order: 1
  ---
  ```

#### 2. Module `lib/docs.ts` (Gestionnaire de Documentation)
- Créer `lib/docs.ts` pour lire les fichiers `.md` de `docs/documentation/` via `fs` et `gray-matter`.
- Implémenter et exporter :
  - `DocMetadata` (interface avec `slug`, `title`, `description`, `category`, `order`, `content`).
  - `getAllDocs()`: Récupère la liste de tous les documents triés par catégorie et par ordre/titre.
  - `getDocBySlug(slug: string)`: Récupère un document spécifique par son slug.
  - `searchDocs(query: string)`: Filtre les documents par recherche insensible à la casse sur le titre, la description, la catégorie et le contenu markdown.

#### 3. Page Documentation Bêta (`app/docs/page.tsx` & `app/docs/DocsClient.tsx`)
- Développer la route `/docs` avec un wrapper Server Component (`app/docs/page.tsx`) chargeant les documents et un Client Component (`app/docs/DocsClient.tsx`) pour l'interactivité.
- **UI Glassmorphism** : Appliquer le design system existant (`bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl`).
- **Sidebar Latérale** :
  - Champ de recherche fonctionnel en temps réel avec icône de recherche (`Search` de `lucide-react`).
  - Groupement par catégories (ex: Applications, Modèles d'IA, Guides, Architecture, API).
  - Liste interactive des titres des documents avec indicateur du document sélectionné.
  - Filtrage instantané au fur et à mesure de la saisie par titre ou contenu.
- **Volet Principal de Lecture** :
  - En-tête du document avec titre, badge de catégorie, description et temps de lecture / ordre.
  - Rendu propre du markdown via `react-markdown` configuré avec le style glassmorphism et typographique (titres `h1-h4`, listes `ul/ol`, blocs de code `pre/code` avec styling sombre glassmorphism, tableaux `table/th/td`, citations `blockquote`, liens).
  - Gestion des cas où la recherche ne retourne aucun résultat ("Aucun document trouvé").

#### 4. Vérification Build & Compilation
- Lancer le build Next.js (`npm run build` ou `npx next build`).
- S'assurer que le build réussit avec zéro erreur TypeScript ou de compilation (`✓ Compiled successfully`).

Rédiger votre rapport dans `.agents/worker_m2_m3/handoff.md` et informer le parent (`e58085ed-801f-4120-ad9a-92a1d3629430`).
