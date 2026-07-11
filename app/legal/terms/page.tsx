"use client";

import { motion } from "motion/react";
import { Scale, ArrowLeft, ShieldAlert, Cpu, Search, FileText, Lock, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/60 transition-all duration-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour à l'accueil
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
      >
        <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-blue-100 text-blue-600">
          <Scale className="w-8 h-8" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-slate-900 mb-6">
          Conditions Générales <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500">d&apos;Utilisation</span> ⚖️
        </h1>

        <p className="text-slate-500 font-light mb-10 text-base md:text-lg">
          Dernière mise à jour : 1er juillet 2026. Conditions d'utilisation applicables aux projets mAI et mSearch développés par mDevsLabs.
        </p>

        <div className="space-y-8 text-slate-600">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-500" />
              1. Acceptation des Conditions
            </h2>
            <p className="leading-relaxed font-light">
              En accédant ou en utilisant les services mAI et mSearch, vous acceptez d'être lié par ces Conditions Générales d'Utilisation. Si vous n'acceptez pas l'intégralité de ces conditions, vous ne pouvez pas accéder aux services ni les utiliser.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-500" />
              2. Description des Services
            </h2>
            <p className="leading-relaxed font-light">
              <strong>mAI</strong> est un assistant personnel alimenté par l'intelligence artificielle qui fournit des réponses, de l'aide et des suggestions basées sur les technologies d'apprentissage automatique avancées. Le service peut inclure l'accès aux dernières avancées en traitement du langage naturel, génération de texte, compréhension de la parole et d'autres fonctionnalités d'IA.
            </p>
            <p className="leading-relaxed font-light mt-2">
              <strong>mSearch</strong> est un navigateur web minimaliste et sécurisé qui intègre une barre de recherche unifiée avec divers moteurs de recherche. Le navigateur inclut un bloqueur de publicités et de traqueurs intégré pour protéger votre vie privée en ligne.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-orange-500" />
              3. Limitation de Responsabilité
            </h2>
            <p className="leading-relaxed font-light">
              mDevsLabs fournit ses projets à titre expérimental et communautaire. Bien que nous fassions de notre mieux pour assurer la stabilité et l'exactitude des informations, nous ne pouvons être tenus responsables d'éventuels dysfonctionnements, pertes de données ou erreurs générées par les modèles d'IA. Les services sont fournis "tels quels" sans garanties d'aucune sorte, express ou implicite.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-500" />
              4. Données et Propriété Intellectuelle
            </h2>
            <p className="leading-relaxed font-light">
              Toutes les données, y compris mais sans s'y limiter, votre historique de conversation, vos paramètres et vos préférences, vous appartiennent. mDevsLabs conserve une copie uniquement pour améliorer l'expérience utilisateur et développer le service.
            </p>
            <p className="leading-relaxed font-light mt-2">
              Sauf indication contraire, tous les contenus et fonctionnalités inclus dans les projets, ainsi que toute amélioration, correction de bugs ou version ultérieure, sont la propriété exclusive de mDevsLabs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-purple-500" />
              5. Confidentialité et Sécurité
            </h2>
            <p className="leading-relaxed font-light">
              La protection de vos données personnelles est d'une grande importance pour nous. Nous traitons vos informations conformément à nos politiques de confidentialité et aux réglementations applicables. Les services stockent certains attributs de données pour améliorer la personnalisation et la sécurité. Vous donnez votre consentement exprès pour que ces données soient utilisées conformément à ces politiques.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-blue-500" />
              6. Liens Externes et Intégrations
            </h2>
            <p className="leading-relaxed font-light">
              Les services peuvent contenir des liens vers des sites web tiers et des intégrations avec des services tiers (tels que LobeHub pour mAI et Min Browser pour mSearch). mDevsLabs n'est pas responsable du contenu, des politiques de confidentialité ou des pratiques de ces sites tiers.
            </p>
            <p className="leading-relaxed font-light mt-2">
              mDevsLabs n'exerce aucun contrôle sur et ne s'assume aucune responsabilité d'aucune sorte liée à ces ressources tierces. Votre utilisation des services contient une délégation de confiance à ces autres sites web. Vous reconnaissez et acceptez qu'il est de votre responsabilité de prendre toutes les mesures pour protéger votre vie privée et sécuriser votre système lors du téléchargement et de l'utilisation de ces intégrations tierces.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-500" />
              7. Conditions d'Utilisation Acceptables
            </h2>
            <p className="leading-relaxed font-light">
              En utilisant ces services, vous vous engagez à ne pas violer les droits de propriété intellectuelle ou de savoir-faire de mDevsLabs ou de tiers ; ne pas utiliser les services à des fins illégales, malveillantes ou nuisibles ; ne pas interférer avec le fonctionnement des services ou tenter d'y accéder sans autorisation ; ne pas représenter quelqu'un d'autre lors de l'utilisation des services ; ne pas transmettre de contenu illégal, diffamatoire, haineux ou autrement répréhensible ; ne pas utiliser les services à des fins publicitaires ou promotionnelles sans consentement ; ne pas essayer de contourner toute mesure de sécurité ou de protection ; et ne pas utiliser les services de manière abusive ou excessive.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 text-orange-500" />
              8. Clôture du Compte
            </h2>
            <p className="leading-relaxed font-light">
              Vous pouvez arrêter d'utiliser les services et fermer votre compte à tout moment en accédant aux paramètres du service et en suivant la procédure de fermeture de compte. Après la clôture, votre accès aux services sera révoqué et vous perdrez tous les droits d'utilisation des services.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}