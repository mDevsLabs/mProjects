import { getNewsArticle, getNewsArticles } from '@/lib/news';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { ShareButtons, CommentSection } from './ArticleClient';

const formatDate = (dateStr: any) => {
  if (typeof dateStr !== 'string') return String(dateStr || '');
  if (!dateStr || dateStr.split('-').length !== 3) return dateStr;
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};

export async function generateStaticParams() {
  const articles = getNewsArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = getNewsArticle(resolvedParams.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/news" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/60 transition-all duration-300 mb-8">
        <ArrowLeft className="w-4 h-4" />
        Retour aux actualités
      </Link>

      <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-8 md:p-12 relative">
        {article.label && (
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-slate-800 text-xs font-bold uppercase tracking-wider">
              {article.label}
            </span>
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-10 pb-10 border-b border-black/5">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(article.date)}</span>
          </div>
        </div>

        <div className="prose max-w-none prose-headings:text-slate-900 prose-a:text-orange-500 prose-img:rounded-xl prose-p:mb-4 prose-p:leading-relaxed">
          <Markdown
            components={{
              p: ({ node: _node, ...props }) => <p className="whitespace-pre-line mb-4 leading-relaxed" {...props} />
            }}
          >
            {article.content}
          </Markdown>
        </div>
      </div>

      <ShareButtons title={article.title} description={article.description} />

      <CommentSection articleSlug={resolvedParams.slug} />
    </div>
  );
}