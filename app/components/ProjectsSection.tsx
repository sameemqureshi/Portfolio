'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data';

const categories = ['All', 'RAG', 'LLM', 'NLP', 'Computer Vision', 'Full Stack'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => {
        if (activeCategory === 'Full Stack') return p.tags.includes('Vue.js') || p.tags.includes('Flask');
        if (activeCategory === 'Computer Vision') return p.tags.includes('Vision Language Models') || p.tags.includes('NVIDIA NeMo');
        return p.tags.some(tag => tag.includes(activeCategory));
      });

  return (
    <motion.section
      id="projects"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
          }
        }
      }}
      className="mb-20 pt-20"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <FolderGit2 className="w-7 h-7 text-amber-400" />
          Projects
        </h2>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <Filter className="w-4 h-4 text-slate-500 shrink-0" />
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                  : 'bg-slate-900/40 text-slate-400 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col h-full"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
              />

              <div className="relative h-48 w-full bg-slate-950/50 overflow-hidden border-b border-slate-800/50 group-hover:border-slate-700/50 transition-colors">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                {project.image ? (
                  <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={100}
                      height={100}
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                    <FolderGit2 className="w-12 h-12 opacity-20" />
                  </div>
                )}
              </div>

              <div className="relative p-6 md:p-8 flex flex-col gap-4 flex-1">
                <div className="flex w-full items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <Link
                    href={project.link}
                    className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:bg-cyan-500 hover:text-white transition-all shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-auto">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800/50">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded bg-slate-950/50 text-slate-400 border border-slate-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-[10px] font-medium rounded bg-slate-950/50 text-slate-500 border border-slate-800/50">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
