"use client";

import { motion } from "motion/react";
import { Users, Target, Rocket, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 relative z-10">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto px-4 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white mb-6">
            L&apos;équipe <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">mDevsLabs</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light">
            Une équipe passionnée qui développe des outils innovants, transparents et accessibles pour simplifier votre quotidien numérique. 🚀✨
          </p>
        </motion.div>
      </div>

      {/* Objectifs Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/60 dark:border-slate-800/60 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
        >
          <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
            <Target className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Notre Mission</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Fournir des solutions technologiques de pointe qui repoussent les limites de l'expérience utilisateur, tout en garantissant des performances exceptionnelles et une simplicité d'utilisation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/60 dark:border-slate-800/60 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
            <Rocket className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">L&apos;Innovation</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Nous croyons en un web plus rapide, plus intelligent et plus esthétique. Chaque projet que nous concevons intègre les dernières avancées pour vous offrir le meilleur de la technologie moderne.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/60 dark:border-slate-800/60 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
            <Heart className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">La Communauté</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            mDevsLabs est construit avec et pour notre communauté. Votre retour est essentiel dans notre processus de développement pour créer des outils qui répondent réellement à vos besoins.
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/5 dark:to-blue-500/5 backdrop-blur-xl border border-purple-500/20 dark:border-purple-500/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
        >
          <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white mb-4">
            Rejoignez l&apos;aventure
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            Découvrez tous nos projets actuels et ce que nous vous préparons pour l&apos;avenir.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform shadow-xl"
          >
            Explorer les projets
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
