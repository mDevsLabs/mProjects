"use client";

import { GitCommit, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export function GithubActivity({ repo, title = "Activité Récente" }: { repo?: string, title?: string }) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const url = repo
          ? `https://api.github.com/repos/${repo}/commits?per_page=5`
          : `https://api.github.com/users/mDevsLabs/events/public?per_page=10`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();

        let parsed = [];
        if (Array.isArray(data)) {
          if (repo) {
            parsed = data.map((c: any) => ({
              id: c.sha,
              message: c.commit?.message?.split('\n')[0] || 'No message',
              date: c.commit?.author?.date || new Date().toISOString(),
              url: c.html_url,
              author: c.commit?.author?.name || 'Unknown'
            })).slice(0, 5);
          } else {
            parsed = data.filter((e: any) => e.type === "PushEvent").flatMap((e: any) =>
              (e.payload?.commits || []).map((c: any) => ({
                id: c.sha,
                message: c.message?.split('\n')[0] || 'No message',
                date: e.created_at,
                url: `https://github.com/${e.repo?.name}/commit/${c.sha}`,
                author: e.actor?.display_login || 'Unknown'
              }))
            ).slice(0, 5);
          }
        }
        setItems(parsed);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, [repo]);

  return (
    <div className="w-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900">
        <GitCommit className="w-5 h-5 text-purple-500" />
        {title}
      </h3>
      <div className="flex flex-col gap-3 min-h-[100px]">
        {loading ? (
          <div className="flex justify-center items-center h-full text-slate-400">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        ) : items.length > 0 ? items.map((item: any) => (
          <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="group flex flex-col gap-1 text-sm p-3 rounded-2xl hover:bg-white/60 transition-colors">
            <span className="font-medium text-slate-800 group-hover:text-purple-600 transition-colors line-clamp-1">{item.message}</span>
            <span className="text-xs text-slate-500">{new Date(item.date).toLocaleDateString("fr-FR", { day: 'numeric', month: 'short', hour: '2-digit', minute:'2-digit' })} • par {item.author}</span>
          </a>
        )) : (
          <p className="text-sm text-slate-500 italic">Aucune activité récente trouvée.</p>
        )}
      </div>
    </div>
  );
}