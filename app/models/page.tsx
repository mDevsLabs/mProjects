"use client";

import { motion } from "motion/react";
import { ExternalLink, Cpu, Eye, EyeOff, Layers, Calendar, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const models = [
  {
    id: "mai-1",
    name: "mAI-1",
    num: "01",
    badge: "12B • Vision • 256K",
    description:
      "Assistant IA local puissant, multimodal et orienté productivité. Propulsé par Google Gemma 4 12B Unified, conçu pour le raisonnement, le code et l'analyse d'images.",
    tagline: "La version complète et surpuissante de la famille mAI.",
    parameters: "12B",
    vision: true,
    context: "256K tokens",
    releaseDate: "11/07/2026",
    bannerImage: "/mai-1/mai-1.png",
    squareImage: "/mai-1/mai-1-carre.png",
    color: "from-purple-500 to-indigo-600",
    shadowHover: "hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.25)]",
    borderHover: "hover:border-purple-500/40",
    tags: ["12B Paramètres", "Vision Multimodale", "Contexte 256K", "Local-first"],
  },
  {
    id: "mai-1-light",
    name: "mAI-1-Light",
    num: "02",
    badge: "3B • Rapide • 128K",
    description:
      "Assistant IA local ultra-léger et rapide. Propulsé par IBM Granite 4.1 3B, adapté aux machines modestes pour les réponses instantanées et le travail quotidien.",
    tagline: "Vitesse, efficacité et légèreté sur n'importe quel ordinateur.",
    parameters: "3B",
    vision: false,
    context: "128K tokens",
    releaseDate: "11/07/2026",
    bannerImage: "/mai-1-light/mai-1-light.png",
    squareImage: "/mai-1-light/mai-1-light-carre.png",
    color: "from-blue-500 to-cyan-500",
    shadowHover: "hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.25)]",
    borderHover: "hover:border-blue-500/40",
    tags: ["3B Paramètres", "Texte Uniquement", "Contexte 128K", "Léger & Rapide"],
  },
];

export default function ModelsPage() {
  return (
    <div className="flex flex-col gap-10 md:gap-16">
      {/* Hero Section */}
      <div className="text-left space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-slate-900"
        >
          Modèles <br className="hidden sm:block" />
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
          Explorez nos modèles de langage open-weights exécutables localement via Ollama. Performance, confidentialité et autonomie.
        </motion.p>
      </div>

      {/* Grid des modèles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {models.map((model, index) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className={`group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-6 md:p-8 ${model.borderHover} transition-all duration-300 overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] ${model.shadowHover} flex flex-col justify-between`}
          >
            {/* Numéro décoratif */}
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <div className="text-7xl font-black italic tracking-tighter select-none text-slate-900">
                {model.num}
              </div>
            </div>

            <div className="relative z-10">
              {/* En-tête avec image carrée et titre */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] flex items-center justify-center p-2.5 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={model.squareImage}
                    alt={`${model.name} square logo`}
                    width={80}
                    height={80}
                    sizes="80px"
                    className="w-full h-full object-cover rounded-xl drop-shadow-md"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    {model.name}
                  </h2>
                  <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mt-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {model.tagline}
                  </p>
                </div>
              </div>

              {/* Image Bannière */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 border border-white/60 shadow-sm group-hover:shadow-md transition-all">
                <Image
                  src={model.bannerImage}
                  alt={`${model.name} banner`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white font-medium shadow">
                    {model.badge}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {model.description}
              </p>

              {/* Spécifications techniques rapides */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/50">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <Cpu className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Paramètres : <strong>{model.parameters}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  {model.vision ? (
                    <Eye className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                  <span>Vision : <strong>{model.vision ? "Oui (Multimodal)" : "Non (Texte)"}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <Layers className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Contexte : <strong>{model.context}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Sortie : <strong>{model.releaseDate}</strong></span>
                </div>
              </div>

              {/* Badges de tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {model.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-sm text-slate-800 uppercase font-bold tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions / Liens */}
            <div className="relative z-10 pt-4 border-t border-black/5 flex items-center justify-between">
              <Link
                href={`/models/${model.id}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-md group-hover:shadow-lg text-sm"
              >
                Découvrir {model.name}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
