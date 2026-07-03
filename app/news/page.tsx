import { getNewsArticles } from '@/lib/news';
import Link from 'next/link';
import { Calendar, User, Tag, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: 'Actualités',
  description: 'Les dernières actualités de mDevsLabs.'
};

const formatDate = (dateStr: any) => {
  if (typeof dateStr !== 'string') return String(dateStr || '');
  if (!dateStr || dateStr.split('-').length !== 3) return dateStr;
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};

const isValidDateFormat = (d: string) => /^\d{4}-\d{2}-\d{2}$/.test(d);

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ tag?: string | string[]; start?: string; end?: string; q?: string }> }) {
  const params = await searchParams;
  const articles = getNewsArticles();
  
  const rawTag = params.tag;
  const selectedLabels = rawTag
    ? (Array.isArray(rawTag) ? rawTag : [rawTag])
    : [];
  
  const startDate = params.start || '';
  const endDate = params.end || '';
  const searchQuery = params.q || '';
  
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
    const matchesStartDate = !startDate || (isValidDateFormat(articleDate) && articleDate >= startDate);
    const matchesEndDate = !endDate || (isValidDateFormat(articleDate) && articleDate <= endDate);
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.label && article.label.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLabel && matchesStartDate && matchesEndDate && matchesSearch;
  });
  
  const sortedArticles = filteredArticles.sort((a, b) => b.date.localeCompare(a.date));
  
  const resetFilters = () => '/news';
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-10 md:mb-16 space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-slate-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
            Actualités
          </span>
        </h1>
        
        <p className="text-slate-500 text-base md:text-lg font-light mt-2 md:mt-4">
          Toutes les annonces et nouveautés de mDevsLabs.
        </p>
      </div>

      <div className="mb-12 pb-8 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-bold text-slate-900">Filtrer par étiquette</h2>
          </div>
          {(selectedLabels.length > 0 || startDate || endDate || searchQuery) && (
            <a
              href={resetFilters()}
              className="flex items-center gap-2 px-3 py-1 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Réinitialiser
            </a>
          )}
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex-1 flex flex-wrap gap-2">
            {tags.map(tag => {
              const isSelected = selectedLabels.includes(tag);
              const nextLabels = isSelected 
                ? selectedLabels.filter(l => l !== tag)
                : [...selectedLabels, tag];
              const query = new URLSearchParams();
              nextLabels.forEach(l => query.append('tag', l));
              if (startDate) query.set('start', startDate);
              if (endDate) query.set('end', endDate);
              if (searchQuery) query.set('q', searchQuery);
              const href = `/news?${query.toString()}`;
              
              return (
                <Link
                  key={tag}
                  href={href}
                  className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${isSelected
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white/40 backdrop-blur-md border-white/60 text-slate-700 hover:text-orange-500 hover:border-orange-500/50'
                  }`}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
          
          <form method="GET" className="flex flex-col sm:flex-row items-end gap-4 lg:pt-0 lg:border-t-0 border-t border-slate-200 pt-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Rechercher</label>
              <input
                type="text"
                name="q"
                defaultValue={searchQuery}
                placeholder="Mot-clé..."
                className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {selectedLabels.map(label => (
              <input key={label} type="hidden" name="tag" value={label} />
            ))}
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Date de début</label>
              <input
                type="date"
                name="start"
                defaultValue={startDate}
                className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Date de fin</label>
              <input
                type="date"
                name="end"
                defaultValue={endDate}
                className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedArticles.length === 0 ? (
          <p className="text-slate-500 col-span-full">Aucune actualité pour le moment.</p>
        ) : (
          sortedArticles.map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`}>
              <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-4 md:p-6 flex flex-col relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(249,115,22,0.2)] transition-all min-h-[320px] md:min-h-[350px]">
                {article.image && (
                  <div className="relative h-40 md:h-48 mb-4 rounded-2xl overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                {article.label && (
                  <div className="absolute top-4 right-4 md:top-5 md:right-5">
                    <span className="px-3 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-slate-800 text-xs font-bold uppercase tracking-wider">
                      {article.label}
                    </span>
                  </div>
                )}
                <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors leading-tight">{article.title}</h2>
                <div className="space-y-2 mb-4 flex-1">
                  <ReactMarkdown
                    components={{
                      p: (props: any) => <p className="mb-2 text-slate-600 text-sm md:text-base leading-relaxed max-h-24 md:max-h-32 overflow-hidden">{props.children}</p>,
                      strong: (props: any) => <strong className="text-slate-800 font-semibold">{props.children}</strong>,
                      em: (props: any) => <em className="text-slate-700">{props.children}</em>,
                      br: () => <br />,
                    }}
                  >
                    {article.description}
                  </ReactMarkdown>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 md:w-4 h-4" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 h-4" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}