import { getNewsArticles } from '@/lib/news';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

export const metadata = {
  title: 'Actualités',
  description: 'Les dernières actualités de mDevsLabs.'
};

export default function NewsPage() {
  const articles = getNewsArticles();
  
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

      <div className="flex flex-col gap-8">
        {articles.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400">Aucune actualité pour le moment.</p>
        ) : (
          articles.map((article) => (
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
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
