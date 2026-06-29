import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { getChangelogs } from "@/lib/changelog";
import { getNewsArticles } from "@/lib/news";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "mProjects - Just build",
    template: "%s | mProjects - Just build",
  },
  description:
    "Portail de suivi des versions et documentation pour les projets de mDevsLabs.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/mprojects.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const changelogs = getChangelogs();
  const news = getNewsArticles();

  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body
        className="antialiased font-sans min-h-screen flex flex-col pt-24 overflow-x-hidden relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100"
      >
        <Navbar changelogs={changelogs} news={news} />
        {/* Background Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12 md:pb-32 pt-6 z-10">
          {children}
        </main>

        <footer className="relative mt-auto mb-4 w-[95%] max-w-5xl mx-auto md:fixed md:bottom-4 md:left-1/2 md:-translate-x-1/2 z-50 rounded-3xl md:rounded-full border border-black/10 dark:border-white/10 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md shadow-sm px-4 md:px-8 py-3 flex items-center justify-center transition-all duration-300">
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
            {new Date().getFullYear()} © All rights reserved | mProjects | Official Website
          </p>
        </footer>

        {/* Footer Decorative */}
        <footer className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-400 z-50"></footer>
      </body>
    </html>
  );
}
