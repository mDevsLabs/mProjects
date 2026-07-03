"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Download, ExternalLink, Copy, Check, Terminal, Sparkles } from "lucide-react";
import Image from "next/image";
import { toast } from "react-hot-toast";

export default function DownloadPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (command: string, key: string, label: string) => {
    navigator.clipboard.writeText(command);
    setCopiedKey(key);
    toast.success(`Commande ${label} copiée !`);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-10 md:gap-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-left space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-slate-900"
        >
          Télécharger <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500">
            mDevsLabs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-base md:text-lg font-light mt-2 md:mt-4 max-w-2xl"
        >
          Retrouvez les liens de téléchargement et commandes d&apos;installation officielles pour nos applications et modèles IA.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {/* Section 1 : mAI */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start md:items-center gap-5">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] flex items-center justify-center p-3 shrink-0">
                <Image
                  src="/mai.png"
                  alt="mAI logo"
                  width={80}
                  height={80}
                  sizes="80px"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Assistant IA Multimodal
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">mAI</h2>
                <p className="text-slate-600 text-sm mt-1 max-w-xl">
                  L&apos;assistant IA local de nouvelle génération pour booster votre productivité au quotidien.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a
                href="https://github.com/mDevsLabs/mAI/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-md text-sm"
              >
                <Download className="w-4 h-4" />
                Canal Stable
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
              <a
                href="https://github.com/mDevsLabs/mAI/releases?q=Canary&expanded=true"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 font-bold transition-all shadow-sm text-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-500" />
                Canal Canary
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Section 2 : mSearch */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="group bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start md:items-center gap-5">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] flex items-center justify-center p-3 shrink-0">
                <Image
                  src="/msearch.PNG"
                  alt="mSearch logo"
                  width={80}
                  height={80}
                  sizes="80px"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Moteur de Recherche Rapide
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">mSearch</h2>
                <p className="text-slate-600 text-sm mt-1 max-w-xl">
                  Un outil de recherche unifié, ultra-rapide et respectueux de votre vie privée.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a
                href="https://github.com/mDevsLabs/mSearch/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-md text-sm"
              >
                <Download className="w-4 h-4" />
                Canal Stable
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Section 3 : mAI-1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-6 md:p-8 space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-black/5 pb-4">
            <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Modèles IA Locaux (Ollama)
              </h2>
              <p className="text-slate-600 text-sm">
                Exécutez nos modèles Open-Weights localement via la ligne de commande Ollama.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sous-partie mAI-1 */}
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-white/70 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-white/60 border border-white/80 shadow-sm flex items-center justify-center p-2 shrink-0">
                    <Image
                      src="/mai-1/mai-1-carre.png"
                      alt="mAI-1 logo"
                      width={56}
                      height={56}
                      sizes="56px"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">mAI-1</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-bold uppercase">
                        12B • Vision • 256K
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs mb-4 leading-relaxed">
                  Assistant IA local puissant et multimodal. Raisonnement complexe, génération de code et analyse d&apos;images.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner flex items-center justify-between gap-3">
                  <code className="text-purple-300 font-semibold">ollama run mDevsLabs/mAI-1</code>
                </div>
              </div>

              <button
                onClick={() => handleCopy("ollama run mDevsLabs/mAI-1", "mai-1", "mAI-1")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
              >
                {copiedKey === "mai-1" ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    Copié !
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copier la commande
                  </>
                )}
              </button>
            </div>

            {/* Sous-partie mAI-1-Light */}
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-white/70 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-white/60 border border-white/80 shadow-sm flex items-center justify-center p-2 shrink-0">
                    <Image
                      src="/mai-1-light/mai-1-light-carre.png"
                      alt="mAI-1-Light logo"
                      width={56}
                      height={56}
                      sizes="56px"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">mAI-1-Light</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold uppercase">
                        3B • Rapide • 128K
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs mb-4 leading-relaxed">
                  Assistant IA local ultra-léger et ultra-rapide. Optimisé pour tourner sur n&apos;importe quelle machine.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner flex items-center justify-between gap-3">
                  <code className="text-blue-300 font-semibold">ollama run mDevsLabs/mAI-1-Light</code>
                </div>
              </div>

              <button
                onClick={() => handleCopy("ollama run mDevsLabs/mAI-1-Light", "mai-1-light", "mAI-1-Light")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
              >
                {copiedKey === "mai-1-light" ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    Copié !
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copier la commande
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
