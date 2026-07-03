# Project: mProjects New Pages (Télécharger & Documentation Bêta)

## Architecture & Layout
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4, Glassmorphism design system (`bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl`)
- **Icons & Motion**: `lucide-react`, `motion` (Framer Motion), `react-hot-toast`
- **Markdown Processing**: `react-markdown`, `gray-matter`, `fs` Node.js in `lib/docs.ts`
- **Client Text Utilities**: `normalizeText` in pure client module `lib/text-utils.ts` (zero `fs`/`path` dependencies)

## Code Layout
- `components/navbar.tsx` : Navigation menu with "Plus" dropdown items
- `app/download/page.tsx` : Page Télécharger with mAI, mSearch, mAI-1 & mAI-1-Light Ollama command copy blocks
- `docs/documentation/` : Directory containing 30 authentic hand-written markdown documentation files
- `lib/docs.ts` : Server-side helper utilities to parse, index, search, and load markdown documents
- `lib/text-utils.ts` : Client-safe text normalization utility
- `app/docs/page.tsx` : Page Documentation Bêta (Glassmorphism layout, sidebar with search, dynamic reading panel)
- `app/docs/DocsClient.tsx` : Client Component handling sidebar search, state, diacritic normalization via `lib/text-utils.ts`, and rendering

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Milestone 1: Navigation & Page Télécharger | `components/navbar.tsx`, `app/download/page.tsx` | None | DONE |
| 2 | Milestone 2: Documentations Markdown (~30 files) & System | `docs/documentation/*.md`, `lib/docs.ts` | None | DONE |
| 3 | Milestone 3: Page Documentation Bêta (UI & Search) | `app/docs/page.tsx`, `app/docs/DocsClient.tsx` | M2 | DONE |
| 4 | Milestone 4: Verification, Next.js Build & Forensic Audit | Full project check, `npm run build`, audit | M1, M2, M3 | DONE |

## Interface Contracts

### 1. Navigation Menu (`components/navbar.tsx`)
`navLinks` inside `Plus` subitems:
```typescript
{
  name: "Plus",
  href: "#",
  subitems: [
    {
      name: "Notes de version",
      href: "/changelog",
      subitems: [
        { name: "Tout", href: "/changelog" },
        { name: "mAI", href: "/changelog/mai" },
        { name: "mSearch", href: "/changelog/msearch" },
      ],
    },
    { name: "Télécharger", href: "/download" },
    {
      name: "API",
      href: "/api",
      subitems: [
        { name: "Documentation (Bêta)", href: "/docs" }
      ],
    },
  ],
}
```

### 2. Client Text Utilities (`lib/text-utils.ts`)
```typescript
export function normalizeText(str: string): string
```

### 3. Documentation Data Type (`lib/docs.ts`)
```typescript
export interface DocMetadata {
  slug: string;
  title: string;
  description: string;
  category: string;
  order?: number;
  tags?: string[];
  content: string;
}
```
Functions:
- `getAllDocs(): DocMetadata[]`
- `getDocBySlug(slug: string): DocMetadata | null`
- `searchDocs(query: string): DocMetadata[]`

### 4. Page Télécharger (`app/download/page.tsx`)
- Section mAI: Stable (`https://github.com/mDevsLabs/mAI/releases/latest`) & Canary (`https://github.com/mDevsLabs/mAI/releases?q=Canary&expanded=true`)
- Section mSearch: Stable (`https://github.com/mDevsLabs/mSearch/releases/latest`)
- Section mAI-1: `ollama run mDevsLabs/mAI-1` & `ollama run mDevsLabs/mAI-1-Light` with copy button & toast feedback.

### 5. Page Documentation (`app/docs/page.tsx` & `DocsClient.tsx`)
- Glassmorphism container
- Sidebar: Search input (accent-insensitive & multi-word), category accordion/list, document items filterable by title or content
- Main area: Header, metadata badges, clean `react-markdown` viewer
