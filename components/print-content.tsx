"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'motion/react';

interface PrintContentProps {
  title: string;
  content: string;
  author: string;
  date: string;
  description?: string;
}

export function PrintContent({ title, content, author, date, description }: PrintContentProps) {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return (
    <div 
      id="print-content"
      className={`max-w-4xl mx-auto p-8 font-sans ${isDark ? 'text-white bg-slate-950' : 'text-slate-900 bg-white'}`}
      style={{ whiteSpace: 'pre-wrap' }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
          <span>Par {author}</span>
          <span>{date}</span>
        </div>
        {description && (
          <p className="mt-4 text-lg leading-relaxed">{description}</p>
        )}
      </div>
      
      <div 
        className="prose max-w-none 
          prose-headings:text-slate-900 dark:prose-headings:text-white
          prose-p:text-slate-700 dark:prose-p:text-slate-300
          prose-a:text-orange-600 dark:prose-a:text-orange-400
          prose-strong:text-slate-900 dark:prose-strong:text-white
          prose-em:text-slate-700 dark:prose-em:text-slate-300"
        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br>') }}
      />
    </div>
  );
}

export { PrintContent as default };