import { getNewsArticles } from '@/lib/news';
import Link from 'next/link';
import { Calendar, User, Tag, Trash2 } from 'lucide-react';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Actualités',
  description: 'Les dernières actualités de mDevsLabs.'
};

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ tag?: string; tags?: string[]; start?: string; end?: string }> }) {
  const params = await searchParams;
  const articles = getNewsArticles();
  
  const selectedLabels = params.tags 
    ? (Array.isArray(params.tags) ? params.tags : [params.tags])
    : params.tag 
      ? [params.tag] 
      : [];
  
  const startDate = params.start || '';
  const endDate = params.end || '';
  
  const tags = Array.from(
    new Set(
      articles
        .map(article => article.label)
        .filter((label): label is string => typeof label === 'string')
    )
  ).sort();
  
  const filteredArticles = articles.filter(article => {
    const matchesLabel = selectedLabels.length === 0 || selectedLabels.some(label => article.label === label);
    const articleDate = article.date;
    const matchesStartDate = !startDate || articleDate >= startDate;
    const matchesEndDate = !endDate || articleDate <= endDate;
    return matchesLabel && matchesStartDate && matchesEndDate;
  });
  
  const sortedArticles = filteredArticles.sort((a, b) => b.date.localeCompare(a.date));
  
  const resetFilters = () => {
    const query = new URLSearchParams();
    if (startDate) query.set('start', startDate);
    if (endDate) query.set('end', endDate);
    return `/news${query.toString() ? '?' + query.toString() : ''}`;
  };
  
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

      <div className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Filtrer par étiquette</h2>
          </div>
          {(selectedLabels.length > 0 || startDate || endDate) && (
            <a
              href={resetFilters()}
              className="flex items-center gap-2 px-3 py-1 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Réinitialiser
            </a>
          )}
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => {
              const isSelected = selectedLabels.includes(tag);
              const nextLabels = isSelected 
                ? selectedLabels.filter(l => l !== tag)
                : [...selectedLabels, tag];
              const query = new URLSearchParams();
              nextLabels.forEach(l => query.append('tag', l));
              if (startDate) query.set('start', startDate);
              if (endDate) query.set('end', endDate);
              const href = `/news?${query.toString()}`;
              
              return (
                <Link
                  key={tag}
                  href={href}
                  className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${isSelected
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-white/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-500/50'
                  }`}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
          
          <form method="GET" className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Date de début</label>
              <input
                type="date"
                name="start"
                value={startDate}
                className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Date de fin</label>
              <input
                type="date"
                name="end"
                value={endDate}
                className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                Filtrer
              </button>
            </div>
          </form>
        </div>
      </div>

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