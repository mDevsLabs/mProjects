"use client";

import { motion } from "motion/react";
import { Shield, ArrowLeft, Lock, Eye, FileText, Globe } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
        <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-purple-100 text-purple-600">
          <Shield className="w-8 h-8" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-slate-900 mb-6">
          Politique de <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500">Confidentialité</span> 🛡️
        </h1>

        <p className="text-slate-500 font-light mb-10 text-base md:text-lg">
          Dernière mise à jour : 1er juillet 2026. Chez mDevsLabs, nous accordons une importance capitale à la protection de vos données personnelles et au respect de votre vie privée. Cette Politique de Confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez nos services mAI et mSearch.
        </p>

        <div className="space-y-8 text-slate-600">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-purple-500" />
              1. données Collectées
            </h2>
            <p className="leading-relaxed font-light">
              <strong>Informations Personnellement Indentifiables</strong> : Lorsque vous interagissez avec nos services, nous pouvons collecter des informations qui vous identifient personnellement, telles que votre nom, votre adresse e-mail (si vous nous contactez), et tout contenu que vous soumettez via nos services (messages de discussion, favoris, paramètres, etc.). Ces informations sont fournies par vous directement lorsque vous utilisez activement nos services.
            </p>
            <p className="leading-relaxed font-light mt-2">
              <strong>Données d'Utilisation et Métriques</strong> : Nous collectons automatiquement certaines données lorsque vous utilisez nos services, y compris votre adresse IP, le type de navigateur, le système d'exploitation, la durée de votre session, les pages que vous visitez, et le contenu des requêtes que vous effectuez auprès de nos API. Ces données nous aident à améliorer la stabilité des services, à diagnostiquer les problèmes et à comprendre les tendances d'utilisation.
            </p>
            <p className="leading-relaxed font-light mt-2">
              <strong>Données Techniques et de Performance</strong> : Les services mAI et mSearch collectent des métadonnées techniques telles que les paramètres de configuration du système, les versions des applications, et les journaux d'erreurs pour aider au débogage et à l'optimisation des performances.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-500" />
              2. Utilisation des Données
            </h2>
            <p className="leading-relaxed font-light">
              Les données collectées sont utilisées exclusivement pour améliorer la fonctionnalité des services, assurer leur stabilité et répondre à vos demandes de support. Plus précisément, nous utilisons vos informations pour :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm font-light">
              <li>Fournir et maintenir les fonctionnalités de base des services</li>
              <li>Personnaliser votre expérience (historique de discussion, paramètres de prédiction)</li>
              <li>Optimiser les performances et améliorer la stabilité du système</li>
              <li>Détecter, prévenir et résoudre les problèmes techniques</li>
              <li>Améliorer les modèles et fonctionnalités d'IA en utilisant des données d'entraînement anonymisées</li>
              <li>Répondre à vos questions et fournir un support client</li>
              <li>Surveiller la conformité aux conditions d'utilisation et aux réglementations applicables</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-500" />
              3. Partage et Divulgation des Données
            </h2>
            <p className="leading-relaxed font-light">
              Nous ne vendons pas et ne louons pas vos données personnelles à des tiers à des fins publicitaires. Cependant, nous pouvons partager vos informations dans les situations suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm font-light">
              <li>
                <strong>Avec votre consentement explicite</strong> : Nous partageons vos données uniquement lorsque vous nous avez donné une autorisation claire et spécifique pour ce faire.
              </li>
              <li>
                <strong>Prestataires de services</strong> : Nous engageons des entreprises tierces pour nous aider à fournir et à exploiter les services (telles que des services d'hébergement cloud, des outils de surveillance des applications, et des services d'intégration API), mais uniquement dans la mesure nécessaire pour qu'ils effectuent ces services en notre nom, et nous exigeons de ces tiers qu'ils protègent vos données conformément à notre politique.
              </li>
              <li>
                <strong>Conformité légale</strong> : Nous divulguerons vos informations si cela est nécessaire pour nous conformer à une obligation légale, réglementaire, ou à une demande gouvernementale valide, ou pour protéger nos droits, notre propriété ou notre sécurité.
              </li>
              <li>
                <strong>Transferts d'entreprise</strong> : En cas de fusion, d'acquisition ou de vente d'actifs, vos données personnelles peuvent être transférées à la nouvelle entité, sous réserve de maintenir le même niveau de protection que celui décrit dans cette politique.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              4. Sécurité des Données
            </h2>
            <p className="leading-relaxed font-light">
              mDevsLabs s'engage à protéger la sécurité de vos informations personnelles. Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre l'accès, la modification, la divulgation ou la destruction non autorisés, y compris :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm font-light">
              <li>Le chiffrement des données en transit via TLS/SSL</li>
              <li>Le stockage sécurisé et le contrôle d'accès aux données</li>
              <li>Des analyses régulières de la sécurité des applications</li>
              <li>Des procédures de réponse aux incidents et de gestion des violations</li>
              <li>Des formations régulières en matière de sécurité pour le personnel</li>
            </ul>
            <p className="leading-relaxed font-light mt-2">
              Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est 100 % sûre. Bien que nous nous efforcions de protéger vos informations personnelles, nous ne pouvons garantir leur sécurité absolue.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 text-orange-500" />
              5. Vos Droits (Conformément au RGPD)
            </h2>
            <p className="leading-relaxed font-light">
              Conformément au Règlement général sur la protection des données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm font-light">
              <li>
                <strong>Droit d'accès</strong> : Vous pouvez nous demander une copie de vos données personnelles.
              </li>
              <li>
                <strong>Droit de rectification</strong> : Vous pouvez demander la correction de toute information personnelle inexacte ou incomplète.
              </li>
              <li>
                <strong>Droit à la portabilité</strong> : Vous pouvez demander une version structurée et lisible par machine de vos données personnelles pour les transférer à un autre contrôleur.
              </li>
              <li>
                <strong>Droit de suppression</strong> : Vous pouvez demander que vos données personnelles soient effacées, sous réserve des exceptions applicables.
              </li>
              <li>
                <strong>Droit de retirer le consentement</strong> : Si nous nous appuyons sur votre consentement pour traiter vos données, vous pouvez retirer votre consentement à tout moment.
              </li>
              <li>
                <strong>Droit d'opposition</strong> : Vous pouvez vous opposer au traitement de vos données personnelles pour certaines finalités.
              </li>
              <li>
                <strong>Droit de déposer une réclamation</strong> : Si vous estimez que notre traitement de vos données personnelles viole le RGPD, vous avez le droit de déposer une réclamation auprès d'une autorité de contrôle.
              </li>
            </ul>
            <p className="leading-relaxed font-light mt-2">
              Pour exercer ces droits, veuillez nous contacter via notre serveur Discord (mDevsLabs) ou en utilisant les coordonnées fournies ci-dessous. Nous répondrons à votre demande dans un délai d'un mois, sauf si votre demande est complexe ou nombreuse, auquel cas nous vous informerons et étendrons le délai.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-500" />
              6. Conservation des Données
            </h2>
            <p className="leading-relaxed font-light">
              Nous ne conserverons vos données personnelles que pendant la durée nécessaire à la finalité pour laquelle elles ont été collectées, sauf si la loi nous oblige à les conserver plus longtemps. Plus précisément :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm font-light">
              <li>
                <strong>Historique de discussion et messages</strong> : Conservés jusqu'à ce que vous supprimiez votre compte et pendant une période de 30 jours après la suppression pour permettre la récupération en cas d'erreur.
              </li>
              <li>
                <strong>Données d'utilisation et analytiques</strong> : Conservées sous forme anonymisée pour une période allant jusqu'à 24 mois pour l'analyse des tendances et l'amélioration des services.
              </li>
              <li>
                <strong>Données techniques et de performance</strong> : Généralement conservées pendant une durée ne dépassant pas 6 mois après votre dernière interaction avec les services.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-500" />
              7. International Transfert de Données
            </h2>
            <p className="leading-relaxed font-light">
              Les services sont principalement hébergés en Europe. Cependant, vos données peuvent être transférées vers, stockées et traitées dans des pays autres que le vôtre. Ces pays peuvent avoir des réglementations différentes en matière de protection des données et de protection de la vie privée. En utilisant nos services, vous consentez au transfert de vos données vers et depuis ces pays, sous réserve de maintenir un niveau approprié de protection comme décrit dans cette politique.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-500" />
              8. Cookies et Technologies Similaires
            </h2>
            <p className="leading-relaxed font-light">
              Nos services peuvent utiliser des cookies, des balises web et d'autres technologies similaires pour améliorer l'expérience de navigation et collecter des données sur l'utilisation. Vous pouvez gérer vos préférences en matière de cookies via notre bannière de cookies et via les paramètres de votre navigateur.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-500" />
              9. Modifications de Cette Politique de Confidentialité
            </h2>
            <p className="leading-relaxed font-light">
              mDevsLabs se réserve le droit de mettre à jour cette Politique de Confidentialité périodiquement pour refléter les changements dans nos pratiques de protection de la vie privée, les évolutions technologiques, les mises à jour réglementaires, ou pour d'autres raisons commerciales légitimes. En cas de modifications significatives, nous vous en informerons via une notification dans les services ou par e-mail (si vous nous en avez fourni un), et mettrons à jour la date de "Dernière mise à jour". Votre utilisation continue des services après une telle modification constitue votre acceptation de la Politique mise à jour.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-purple-500" />
              10. Coordonnées pour les Demandes de Confidentialité
            </h2>
            <p className="leading-relaxed font-light">
              Si vous avez des questions, des préoccupations ou des demandes concernant cette Politique de Confidentialité, nos pratiques de protection de la vie privée, ou si vous souhaitez exercer l'un de vos droits RGPD, veuillez nous contacter via notre serveur Discord officiel (mDevsLabs) ou en utilisant les coordonnées fournies sur notre site web. Notre responsable de la protection de la vie privée répondra à toutes les demandes conformément à cette politique et aux réglementations applicables.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}