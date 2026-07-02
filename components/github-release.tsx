"use client";

import { useEffect, useState } from "react";
import { Tag } from "lucide-react";

export function GithubRelease({
  repo,
  showPreRelease = false,
}: {
  repo: string;
  showPreRelease?: boolean;
}) {
  const [latestRelease, setLatestRelease] = useState<string | null>(null);
  const [latestPreRelease, setLatestPreRelease] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const [latestRes, allRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${repo}/releases/latest`),
          showPreRelease ? fetch(`https://api.github.com/repos/${repo}/releases`) : Promise.resolve(null),
        ]);

        if (latestRes.ok) {
          const latestData = await latestRes.json();
          setLatestRelease(latestData.tag_name);
        }

        if (allRes && allRes.ok) {
          const allData = await allRes.json();
          const preRelease = allData.find((r: any) => r.prerelease);
          if (preRelease) {
            setLatestPreRelease(preRelease.tag_name);
          }
        }
      } catch (error) {
        console.error("Failed to fetch GitHub releases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, [repo, showPreRelease]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-slate-500 animate-pulse">
        <div className="w-4 h-4 bg-slate-300 rounded-full"></div>
        Chargement des versions...
      </div>
    );
  }

  if (!latestRelease && !latestPreRelease) return null;

  return (
    <div className="flex flex-wrap items-center gap-3 mt-4">
      {latestRelease && (
        <a
          href={`https://github.com/${repo}/releases/latest`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-white/60 transition-colors"
        >
          <Tag className="w-3 h-3" />
          Latest: {latestRelease}
        </a>
      )}
      {showPreRelease && latestPreRelease && (
        <a
          href={`https://github.com/${repo}/releases/tag/${latestPreRelease}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-purple-600 text-xs font-bold uppercase tracking-wider hover:bg-white/60 transition-colors"
        >
          <Tag className="w-3 h-3" />
          Pre-release: {latestPreRelease}
        </a>
      )}
    </div>
  );
}