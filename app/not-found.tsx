'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-md"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-slate-500 text-xs font-mono mb-8">
          <Terminal className="w-3.5 h-3.5" />
          404 not found
        </div>

        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          404
        </h1>

        <p className="text-xl text-slate-300 font-medium mb-3">Page not found</p>
        <p className="text-slate-500 mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </motion.div>
    </div>
  );
}
