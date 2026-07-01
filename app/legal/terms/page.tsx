"use client";

import { motion } from "motion/react";
import { Scale, ArrowLeft, ShieldAlert, Cpu, Search } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 shadow-sm text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour à l'accueil
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/60 dark:border-slate-800/60 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
      >
        <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          <Scale className="w-8 h-8" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white mb-6">
          Conditions Générales <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">d'Utilisation</span> ⚖️
        </h1>

        <p className="text-slate-500 dark:text-slate-400 font-light mb-10 text-base md:text-lg">
          Dernière mise à jour : 1er juillet 2026. Conditions d'utilisation applicables aux projets mAI et mSearch développés par mDevsLabs.
        </p>

        <div className="space-y-8 text-slate-600 dark:text-slate-300">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-500" />
              1. Utilisation de mAI
            </h2>
            <p className="leading-relaxed font-light">
              Le service mAI utilise des technologies d'intelligence artificielle pour traiter vos requêtes et générer des réponses. En utilisant mAI, vous vous engagez à ne pas utiliser l'outil à des fins malveillantes, illégales ou abusives, et à respecter les règles de notre communauté.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-500" />
              2. Utilisation de mSearch
            </h2>
            <p className="leading-relaxed font-light">
              mSearch est un navigateur minimaliste et sécurisé. Les résultats de recherche sont fournis sans altération commerciale ni manipulation publicitaire. Vous acceptez d'utiliser mSearch dans le respect des lois relatives aux droits d'auteur et à la cybersécurité.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-orange-500" />
              3. Limitation de responsabilité
            </h2>
            <p className="leading-relaxed font-light">
              mDevsLabs fournit ses projets à titre expérimental et communautaire. Bien que nous fassions de notre mieux pour assurer la stabilité et l'exactitude des informations, nous ne pouvons être tenus responsables d'éventuels dysfonctionnements, pertes de données ou erreurs générées par les modèles d'IA.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
