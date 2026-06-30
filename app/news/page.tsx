import { getNewsArticles } from '@/lib/news';
import Link from 'next/link';
import { Calendar, User, Tag } from 'lucide-react';

export const metadata = {
  title: 'Actualités',
  description: 'Les dernières actualités de mDevsLabs.'
};

export default function NewsPage() {
  const articles = getNewsArticles();
  
  // Extract unique tags from articles
  const tags = Array.from(
    new Set(
      articles
        .filter(article => article.label)
        .map(article => article.label)
    )
  ).sort();
  
  // Sort articles by date (descending)
  const sortedArticles = articles.sort((a, b) => b.date.localeCompare(a.date));
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-10 md:mb-16 space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-slate-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
            Actualités
          </span>
        </h1>
        
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-light mt-2 md:mt-4">
          Toutes les annonces et nouveautés de mDevsLabs.
        </p>
      </div>

      {/* Tag Cloud Section */}
      {tags.length > 0 && (
        <div className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Filtrer par étiquette</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => {
              const count = articles.filter(a => a.label === tag).length;
              return (
                <Link
                  key={tag}
                  href={`/news?tag=${encodeURIComponent(tag)}`}
                  className="px-4 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-all text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-500/50"
                >
                  {tag} <span className="text-xs opacity-70 ml-1">({count})</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-8">
        {sortedArticles.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400">Aucune actualité pour le moment.</p>
        ) : (
          sortedArticles.map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`}>
              <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(249,115,22,0.2)] dark:hover:shadow-[0_8px_32px_0_rgba(249,115,22,0.2)] transition-all">
                {article.label && (
                  <div className="absolute top-6 right-6 md:top-8 md:right-8">
                    <span className="px-3 py-1 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                      {article.label}
                    </span>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors pr-24">{article.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{article.description}</p>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mt-auto">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  {article.label && (
                    <div className="flex items-center gap-1 ml-auto">
                      <Tag className="w-3 h-3" />
                      <span>{article.label}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
