"use client";

import { motion } from "motion/react";
import { ArrowRight, Layers, Github, Instagram, Youtube } from "lucide-react";
import { SiOllama } from "react-icons/si";
import Link from "next/link";
import { MaiModal } from "@/components/mai-modal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter mb-6 leading-[0.9] md:leading-[0.85] uppercase text-slate-900">
          Just build
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mb-12 font-light px-4">
          Le portail centralisé pour suivre l&apos;évolution, lire les notes de
          versions et découvrir les fonctionnalités des outils mDevsLabs.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0 mb-12">
          <Link href="/projects" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-3xl md:rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-slate-900 font-semibold flex items-center justify-center gap-2 hover:bg-white/60 transition-colors shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
            >
              Explorer les projets
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <Link href="/changelog" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-3xl md:rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-slate-900 font-semibold flex items-center justify-center gap-2 hover:bg-white/50 transition-colors shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]"
            >
              Voir le Changelog
              <Layers className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>

        <div className="flex items-center gap-4 mt-8 flex-wrap justify-center">
          {[
            { name: "GitHub", href: "https://github.com/mDevsLabs", icon: <Github className="w-5 h-5" />, bg: "bg-white/40 hover:bg-white/60 text-slate-900" },
            { name: "Discord", href: "https://discord.gg/invite/fV7zwdGPpY", icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
            ), bg: "bg-[#5865F2] hover:bg-[#4752C4] text-white" },
            { name: "X", href: "https://x.com/mDevsLabs", icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.076H5.036z" />
                </svg>
            ), bg: "bg-black hover:bg-slate-900 text-white" },
            { name: "Instagram", href: "https://instagram.com/mDevsLabs", icon: <Instagram className="w-5 h-5" />, bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 hover:opacity-90 text-white" },
            { name: "YouTube", href: "https://youtube.com/@mDevsLabs", icon: <Youtube className="w-5 h-5" />, bg: "bg-[#FF0000] hover:bg-[#CC0000] text-white" },
            { name: "Ollama", href: "https://ollama.com/mDevsLabs", icon: <SiOllama className="w-5 h-5" />, bg: "bg-black hover:bg-slate-900 text-white" },
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200, damping: 15 }}
              className={`group relative p-3 backdrop-blur-md border border-white/60 shadow-sm rounded-full transition-all ${social.bg}`}
            >
              {social.icon}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none px-2 py-1 bg-slate-900 text-white text-xs font-medium rounded shadow-lg whitespace-nowrap">
                {social.name}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
      <MaiModal />
    </div>
  );
}