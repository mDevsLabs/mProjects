"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Cookie } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 z-50 mx-auto max-w-2xl px-4"
        >
          <div className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border border-white/60 dark:border-slate-800/60 rounded-3xl shadow-[0_20px_60px_0_rgba(31,38,135,0.15)] dark:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Gestion des cookies
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                  Cela inclut des cookies essentiels pour le fonctionnement du site, ainsi que des cookies d'analyse pour comprendre comment vous interagissez avec notre contenu et des cookies publicitaires pour vous montrer des offres pertinentes.
                  Vous pouvez accepter tous les cookies ou les refuser. En savoir plus dans notre politique de confidentialité.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                  >
                    J'accepte tout
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-6 py-3 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    Refuser
                  </button>
                  <Link
                    href="/legal/privacy"
                    className="px-6 py-3 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 font-medium hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors inline-flex items-center"
                  >
                    Politique de confidentialité
                  </Link>
                </div>
              </div>
              
              <button
                onClick={handleDecline}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
