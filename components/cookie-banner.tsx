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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-3xl px-3"
        >
          <div className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-white/60 dark:border-slate-800/60 rounded-xl shadow-lg px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <Cookie className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                    Nous utilisons des cookies pour votre expérience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handleAcceptAll}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                >
                  Accepter
                </button>
                <button
                  onClick={handleDecline}
                  className="px-3 py-1.5 rounded-lg bg-white/60 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  Refuser
                </button>
                <Link
                  href="/legal/privacy"
                  className="px-3 py-1.5 rounded-lg bg-white/40 dark:bg-slate-900/40 border border-white/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 text-xs font-medium hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors"
                >
                  Confidentialité
                </Link>
                <button
                  onClick={handleDecline}
                  className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
