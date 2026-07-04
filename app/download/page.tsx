"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Download, ExternalLink, Copy, Check, Sparkles } from "lucide-react";
import Image from "next/image";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { VscCode } from "react-icons/vsc";
import { FaChrome } from "react-icons/fa";

export default function DownloadPage() {
  const router = useRouter();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleDownloadAndRedirect = (downloadUrl: string, docSlug: string) => {
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    router.push(`/docs?doc=${docSlug}`);
  };

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
          Télécharger
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
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">mAI</h2>
                <p className="text-slate-600 text-sm mt-1 max-w-xl">
                  L&apos;assistant IA local de nouvelle génération pour booster votre productivité au quotidien.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
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
                <Sparkles className="w-4 h-4 text-slate-900" />
                Canal Canary
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
              <button
                onClick={() =>
                  handleDownloadAndRedirect(
                    "https://upload.fs.fr/ObQWvEwYTk.zip",
                    "guide-extension-vscode"
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 font-bold transition-all shadow-sm text-sm cursor-pointer"
              >
                <VscCode className="w-5 h-5 text-slate-900" />
                VS Code
              </button>
              <button
                onClick={() =>
                  handleDownloadAndRedirect(
                    "https://upload.fs.fr/Zn7FIHWR6M.zip",
                    "guide-extension-navigateur"
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 font-bold transition-all shadow-sm text-sm cursor-pointer"
              >
                <FaChrome className="w-5 h-5 text-slate-900" />
                Extension Navigateur
              </button>
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
          className="group bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start md:items-center gap-5">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] flex items-center justify-center p-3 shrink-0">
                <Image
                  src="/mai-1/mai-1-carre.png"
                  alt="mAI-1 logo"
                  width={80}
                  height={80}
                  sizes="80px"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">mAI-1</h2>
                <p className="text-slate-600 text-sm mt-1 max-w-xl">
                  Assistant IA local puissant et multimodal. Raisonnement complexe, génération de code et analyse d&apos;images.
                </p>
                <div className="mt-3 p-3.5 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs border border-slate-800 shadow-inner flex items-center justify-between gap-3 max-w-md">
                  <code className="text-slate-100 font-semibold">ollama run mDevsLabs/mAI-1</code>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => handleCopy("ollama run mDevsLabs/mAI-1", "mai-1", "mAI-1")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-md text-sm whitespace-nowrap"
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
          </div>
        </motion.section>

        {/* Section 4 : mAI-1-Light */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="group bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start md:items-center gap-5">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] flex items-center justify-center p-3 shrink-0">
                <Image
                  src="/mai-1-light/mai-1-light-carre.png"
                  alt="mAI-1-Light logo"
                  width={80}
                  height={80}
                  sizes="80px"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">mAI-1-Light</h2>
                <p className="text-slate-600 text-sm mt-1 max-w-xl">
                  Assistant IA local ultra-léger et ultra-rapide. Optimisé pour tourner sur n&apos;importe quelle machine.
                </p>
                <div className="mt-3 p-3.5 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs border border-slate-800 shadow-inner flex items-center justify-between gap-3 max-w-md">
                  <code className="text-slate-100 font-semibold">ollama run mDevsLabs/mAI-1-Light</code>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => handleCopy("ollama run mDevsLabs/mAI-1-Light", "mai-1-light", "mAI-1-Light")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-md text-sm whitespace-nowrap"
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
