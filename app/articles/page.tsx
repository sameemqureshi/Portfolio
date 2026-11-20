'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { articles } from '../data';
import Navbar from '../components/Navbar';

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">Writing</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-100 mb-4">
            Articles &amp; Insights
          </h1>
          <p className="text-lg text-neutral-500 max-w-xl">
            Exploring AI infrastructure, software engineering, and practical system design.
          </p>
        </motion.header>

        <div className="border-t border-neutral-800">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/articles/${article.slug}`} className="group block">
                <div className="flex items-start gap-6 py-8 border-b border-neutral-800/60 hover:bg-neutral-950/50 transition-colors px-2 -mx-2">
                  <span className="font-mono text-sm text-neutral-600 pt-1 w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl font-semibold text-neutral-100 group-hover:text-cyan-400 transition-colors mb-2">
                      {article.title}
                    </h2>
                    <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    <p className="font-mono text-xs text-neutral-600">
                      {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-cyan-400 transition-colors mt-1 shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ArticlesPage;
