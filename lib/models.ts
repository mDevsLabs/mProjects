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
