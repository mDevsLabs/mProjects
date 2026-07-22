import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllMaiDocs } from '@/lib/mai-docs';
import { DocsClient } from '../DocsClient';

export const metadata: Metadata = {
  title: 'Documentation mAI | mProjects',
  description: 'Documentation spéciale et architecture détaillée pour mAI.',
};

export default function MaiDocsPage() {
  const initialDocs = getAllMaiDocs();

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 md:py-8">
      <Suspense fallback={<div className="p-8 text-center text-slate-500">Chargement de la documentation mAI...</div>}>
        <DocsClient initialDocs={initialDocs} titleSpan="mAI" />
      </Suspense>
    </div>
  );
}
