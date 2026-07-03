import { getNewsArticles } from '@/lib/news';
import Link from 'next/link';
import { Calendar, User, Trash2, Search } from 'lucide-react';
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

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ start?: string; end?: string; q?: string; author?: string }> }) {
  const params = await searchParams;
  const articles = getNewsArticles();
  
  const startDate = params.start || '';
  const endDate = params.end || '';
  const searchQuery = params.q || '';
  const authorFilter = params.author || '';
  
  const authors = Array.from(
    new Set(
      articles.map(article => article.author)
    )
  ).sort();
  
  const filteredArticles = articles.filter(article => {
    const articleDate = article.date;
    const matchesStartDate = !startDate || (isValidDateFormat(articleDate) && articleDate >= startDate);
    const matchesEndDate = !endDate || (isValidDateFormat(articleDate) && articleDate <= endDate);
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAuthor = !authorFilter || article.author === authorFilter;
    return matchesStartDate && matchesEndDate && matchesSearch && matchesAuthor;
  });
  
  const sortedArticles = filteredArticles.sort((a, b) => b.date.localeCompare(a.date));
  
  const resetFilters = () => '/news';
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-6 md:mb-8 space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-slate-900">
          Actualités
        </h1>
        
        <p className="text-slate-500 text-base md:text-lg font-light mt-2 md:mt-4">
          Toutes les annonces et nouveautés de mDevsLabs.
        </p>
      </div>

      <div className="mb-6 pb-6 border-b border-slate-200">
        <form method="GET" className="space-y-4">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="q"
              defaultValue={searchQuery}
              placeholder="Rechercher dans les actualités..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-sm"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-end gap-4 lg:pt-0 lg:border-t-0 border-t border-slate-200 pt-4">
            <div className="w-full sm:w-auto">
              <label className="block text-xs font-medium text-slate-600 mb-1">Date de début</label>
              <input
                type="date"
                name="start"
                defaultValue={startDate}
                className="w-full sm:w-auto px-3 py-2 rounded-xl border border-white/60 bg-white/40 backdrop-blur-md text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-sm"
              />
            </div>
            <div className="w-full sm:w-auto">
              <label className="block text-xs font-medium text-slate-600 mb-1">Date de fin</label>
              <input
                type="date"
                name="end"
                defaultValue={endDate}
                className="w-full sm:w-auto px-3 py-2 rounded-xl border border-white/60 bg-white/40 backdrop-blur-md text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-sm"
              />
            </div>
            <div className="w-full sm:w-auto">
              <label className="block text-xs font-medium text-slate-600 mb-1">Auteur</label>
              <select
                name="author"
                defaultValue={authorFilter}
                className="w-full sm:w-auto px-3 py-2 rounded-xl border border-white/60 bg-white/40 backdrop-blur-md text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-sm"
              >
                <option value="">Tous les auteurs</option>
                {authors.map(author => (
                  <option key={author} value={author}>{author}</option>
                ))}
              </select>
            </div>
            <div className="w-full sm:w-auto flex gap-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all shadow-md"
              >
                Filtrer
              </button>
              {(startDate || endDate || searchQuery || authorFilter) && (
                <a
                  href={resetFilters()}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-white/40 backdrop-blur-md border border-white/60 rounded-xl transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Réinitialiser
                </a>
              )}
            </div>
          </div>
        </form>
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