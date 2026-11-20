'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative z-10 text-center max-w-md"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 text-neutral-500 text-xs font-mono mb-8">
          <Terminal className="w-3.5 h-3.5" />
          404 not found
        </div>

        <h1 className="text-7xl md:text-9xl font-bold text-cyan-400 mb-4">
          404
        </h1>

        <p className="text-xl text-neutral-300 font-medium mb-3">Page not found</p>
        <p className="text-neutral-500 mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono font-medium text-black bg-cyan-400 hover:bg-cyan-300 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </motion.div>
    </div>
  );
}
