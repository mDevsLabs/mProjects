"use client";

import { useEffect, useState } from "react";
import { Star, Tag, Loader2 } from "lucide-react";

interface RepoStats {
  stars: number;
  release: string | null;
}

export function GithubRepoStats({ repo }: { repo: string }) {
  const [stats, setStats] = useState<RepoStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        const headers: HeadersInit = {};
        if (token) {
          headers["Authorization"] = `token ${token}`;
        }

        // Fetch repo basic info (for stars) and latest release
        const [repoRes, releaseRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${repo}`, { headers }),
          fetch(`https://api.github.com/repos/${repo}/releases/latest`, { headers })
        ]);

        let stars = 0;
        let release: string | null = null;

        if (repoRes.ok) {
          const repoData = await repoRes.json();
          stars = repoData.stargazers_count || 0;
        }

        if (releaseRes.ok) {
          const releaseData = await releaseRes.json();
          release = releaseData.tag_name || null;
        }

        setStats({ stars, release });
      } catch (error) {
        console.error("Failed to fetch GitHub repo stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [repo]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>Chargement des stats...</span>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-white/50 backdrop-blur-md border border-white/60 px-2.5 py-1 rounded-full shadow-sm">
        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        <span>{stats.stars.toLocaleString()} Stars</span>
      </div>
      {stats.release && (
        <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-white/50 backdrop-blur-md border border-white/60 px-2.5 py-1 rounded-full shadow-sm">
          <Tag className="w-3.5 h-3.5 text-purple-500" />
          <span>Release: {stats.release}</span>
        </div>
      )}
    </div>
  );
}
