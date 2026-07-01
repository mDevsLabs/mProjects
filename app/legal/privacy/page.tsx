"use client";

import { motion } from "motion/react";
import { Shield, ArrowLeft, Lock, Eye, FileText } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
        <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
          <Shield className="w-8 h-8" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white mb-6">
          Politique de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Confidentialité</span> 🛡️
        </h1>

        <p className="text-slate-500 dark:text-slate-400 font-light mb-10 text-base md:text-lg">
          Dernière mise à jour : 1er juillet 2026. Chez mDevsLabs, nous accordons une importance capitale à la protection de vos données personnelles et au respect de votre vie privée.
        </p>

        <div className="space-y-8 text-slate-600 dark:text-slate-300">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-purple-500" />
              1. Collecte des informations
            </h2>
            <p className="leading-relaxed font-light">
              Nous collectons uniquement les informations strictement nécessaires à la fourniture de nos services. Cela inclut par exemple les détails de configuration pour les projets mAI et mSearch lorsque vous interagissez avec nos API. Aucune information superflue n'est collectée sans votre consentement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-500" />
              2. Utilisation des données
            </h2>
            <p className="leading-relaxed font-light">
              Vos données sont utilisées exclusivement pour améliorer votre expérience utilisateur, assurer la sécurité de nos services et répondre à vos demandes de support. Nous ne vendons ni ne partageons vos données à des tiers à des fins publicitaires.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-500" />
              3. Vos droits
            </h2>
            <p className="leading-relaxed font-light">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données personnelles. Vous pouvez exercer ces droits à tout moment en nous contactant via notre serveur Discord ou par e-mail.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
