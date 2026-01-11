
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { articles } from '../data';
import Navbar from '../components/Navbar';

const ArticlesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Articles & Insights
          </h1>
          <p className="text-lg text-slate-400">
            Exploring AI, software development, and practical engineering.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
          initial="initial"
          animate="animate"
        >
          {articles.map((article) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <Link href={`/articles/${article.slug}`}>
                <div className="p-6 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors cursor-pointer group rounded-2xl">
                  <h2 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">{article.title}</h2>
                  <p className="text-slate-400 text-sm mb-4">
                    {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by {article.author}
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-4 line-clamp-2">{article.description}</p>
                  <span className="text-cyan-400 font-medium flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default ArticlesPage;
