"use client";

import { motion } from "motion/react";
import { GitCommit, Star, Zap, type LucideIcon } from "lucide-react";
import Markdown from "react-markdown";
import type { ChangelogsByProject } from "@/lib/changelog";

const iconMap: Record<string, LucideIcon> = {
  Star,
  Zap,
  GitCommit,
};

export default function ChangelogView({
  changelogs,
  filterProject,
}: {
  changelogs: ChangelogsByProject;
  filterProject?: "mai" | "msearch";
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-left mb-10 md:mb-16 space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-slate-900"
        >
          Notes de <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500">
            Version
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-base md:text-lg font-light mt-2 md:mt-4"
        >
          Suivez l&apos;évolution et les dernières mises à jour de nos projets.
        </motion.p>
      </div>

      <div className="flex flex-col gap-12">
        {/* mAI Changelog */}
        {(!filterProject || filterProject === "mai") && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-purple-600">mAI</span> Changelog
            </h2>
            <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden">
              <div className="space-y-10 md:space-y-8 flex-1">
                {changelogs?.mAI?.map((change, i) => {
                  const Icon = iconMap[change.icon as string] || Star;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="border-l-2 border-slate-200 pl-4 md:pl-6 py-2 relative group"
                    >
                      <div className="absolute -left-[9px] top-1.5 flex items-center justify-center w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform"></div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest w-fit">
                          {change.version} • {change.date}
                        </span>
                        <div
                          className={`flex items-center gap-1 px-2 py-1 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm text-xs font-medium w-fit ${change.color}`}
                        >
                          <Icon className="w-3 h-3" />
                          <span>
                            {change.type === "feature"
                              ? "Nouveauté"
                              : "Amélioration"}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {change.title}
                      </h3>

                      <div className="prose prose-sm prose-slate max-w-none text-slate-600 prose-headings:text-slate-800 prose-a:text-purple-600 prose-strong:text-slate-800 prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:rounded prose-blockquote:border-l-purple-500 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-3 prose-blockquote:not-italic prose-blockquote:text-slate-600">
                        <Markdown>{change.description}</Markdown>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* mSearch Changelog */}
        {(!filterProject || filterProject === "msearch") && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-blue-600">mSearch</span> Changelog
            </h2>
            <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden">
              <div className="space-y-10 md:space-y-8 flex-1">
                {changelogs?.mSearch?.map((change, i) => {
                  const Icon = iconMap[change.icon as string] || Star;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="border-l-2 border-slate-200 pl-4 md:pl-6 py-2 relative group"
                    >
                      <div className="absolute -left-[9px] top-1.5 flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform"></div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <span className="text-[10px] px-2 py-1 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest w-fit">
                          {change.version} • {change.date}
                        </span>
                        <div
                          className={`flex items-center gap-1 px-2 py-1 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm text-xs font-medium w-fit ${change.color}`}
                        >
                          <Icon className="w-3 h-3" />
                          <span>
                            {change.type === "feature"
                              ? "Nouveauté"
                              : "Amélioration"}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {change.title}
                      </h3>

                      <div className="prose prose-sm prose-slate max-w-none text-slate-600 prose-headings:text-slate-800 prose-a:text-purple-600 prose-strong:text-slate-800 prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:rounded prose-blockquote:border-l-purple-500 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-3 prose-blockquote:not-italic prose-blockquote:text-slate-600">
                        <Markdown>{change.description}</Markdown>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
