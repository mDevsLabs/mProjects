import fs from 'fs';
import path from 'path';

export type ModelInfo = {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  parameters: string;
  vision: boolean;
  context: string;
  releaseDate: string;
  bannerImage: string;
  squareImage: string;
  ollamaTag: string;
  readmeContent: string;
};

const modelsData: Omit<ModelInfo, 'readmeContent'>[] = [
  // ─── Série mAI-1.2 (nouvelle génération) ───────────────────────────────────
  {
    id: 'mai-1.2-light',
    name: 'mAI-1.2-Light',
    tagline: 'Assistant IA local ultra-rapide et multimodal. Légèreté maximale, vision intégrée et productivité au quotidien.',
    badge: '3B • Vision • 256K',
    parameters: '3B',
    vision: true,
    context: '256K',
    releaseDate: '22/07/2026',
    bannerImage: '/mai-1.2-light/mai-1.2-light.png',
    squareImage: '/mai-1.2-light/mai-1.2-light.png',
    ollamaTag: 'mDevsLabs/mAI-1.2-Light',
  },
  {
    id: 'mai-1.2-apex',
    name: 'mAI-1.2-Apex',
    tagline: 'Le top tier de la famille mAI. Performances maximales, vision multimodale et raisonnement avancé.',
    badge: '9B • Vision • 256K',
    parameters: '9B',
    vision: true,
    context: '256K',
    releaseDate: '22/07/2026',
    bannerImage: '/mai-1.2-apex/mai-1.2-apex.png',
    squareImage: '/mai-1.2-apex/mai-1.2-apex.png',
    ollamaTag: 'mDevsLabs/mAI-1.2-Apex',
  },
  {
    id: 'mai-1.2-opal',
    name: 'mAI-1.2-Opal',
    tagline: 'Le sweet spot parfait entre rapidité et intelligence. Multimodal, équilibré et fluide pour toutes vos tâches.',
    badge: '33B • Vision • 256K',
    parameters: '33B',
    vision: true,
    context: '256K',
    releaseDate: '22/07/2026',
    bannerImage: '/mai-1.2-opal/mai-1.2-opal.png',
    squareImage: '/mai-1.2-opal/mai-1.2-opal.png',
    ollamaTag: 'mDevsLabs/mAI-1.2-Opal',
  },
  // ─── Série mAI-1 (première génération) ────────────────────────────────────
  {
    id: 'mai-1',
    name: 'mAI-1',
    tagline: 'Assistant IA local multimodal puissant de 12B paramètres pour le raisonnement, le code et l\'analyse d\'images.',
    badge: '12B • Multimodal • 256K',
    parameters: '12B',
    vision: true,
    context: '256K',
    releaseDate: '11/07/2026',
    bannerImage: '/mai-1/mai-1.png',
    squareImage: '/mai-1/mai-1-carre.png',
    ollamaTag: 'mDevsLabs/mAI-1',
  },
  {
    id: 'mai-1-light',
    name: 'mAI-1-Light',
    tagline: 'Assistant IA local ultraléger et rapide de 3B paramètres, optimisé pour les machines modestes.',
    badge: '3B • Ultra Rapide • 128K',
    parameters: '3B',
    vision: false,
    context: '128K',
    releaseDate: '11/07/2026',
    bannerImage: '/mai-1-light/mai-1-light.png',
    squareImage: '/mai-1-light/mai-1-light-carre.png',
    ollamaTag: 'mDevsLabs/mAI-1-Light',
  },
];

const docsDirectory = path.join(process.cwd(), 'docs');

export function getModels(): ModelInfo[] {
  return modelsData.map((model) => {
    const readmePath = path.join(docsDirectory, model.id, 'README.md');
    let readmeContent = '';
    if (fs.existsSync(readmePath)) {
      readmeContent = fs.readFileSync(readmePath, 'utf8');
    }
    return {
      ...model,
      readmeContent,
    };
  });
}

export function getModelById(id: string): ModelInfo | null {
  const model = modelsData.find((m) => m.id === id);
  if (!model) return null;

  const readmePath = path.join(docsDirectory, model.id, 'README.md');
  let readmeContent = '';
  if (fs.existsSync(readmePath)) {
    readmeContent = fs.readFileSync(readmePath, 'utf8');
  }

  return {
    ...model,
    readmeContent,
  };
}
