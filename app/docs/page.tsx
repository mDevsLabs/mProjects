import type { Metadata } from 'next';
import { getAllDocs } from '@/lib/docs';
import { DocsClient } from './DocsClient';

export const metadata: Metadata = {
  title: 'Documentation (Bêta) | mProjects',
  description: 'Hub de documentation technique pour les projets et modèles mDevsLabs.',
};

export default function DocsPage() {
  const initialDocs = getAllDocs();

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 md:py-8">
      <DocsClient initialDocs={initialDocs} />
    </div>
  );
}
