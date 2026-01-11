'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Tag, Calendar } from 'lucide-react';

interface ProjectContentProps {
  project: {
    title: string;
    desc: string;
    tags: string[];
    link: string;
    github?: string;
    demo?: string;
    color: string;
    slug: string;
    image?: string;
    content?: {
      overview: string;
      features: string[];
      challenges: string;
      solutions: string;
    };
  };
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 font-sans">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {project.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full h-64 md:h-96 relative rounded-3xl overflow-hidden mb-8 border border-slate-800 bg-slate-900/50"
            >
               <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
               <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-8 drop-shadow-2xl"
                  />
               </div>
            </motion.div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300 mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {project.desc}
          </p>
        </motion.header>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-16 border-b border-slate-800 pb-12"
        >
          {project.demo && (
            <Link href={project.demo} target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-950 font-medium hover:bg-cyan-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium hover:border-slate-600 transition-colors">
              <Github className="w-4 h-4" />
              View Source
            </Link>
          )}
        </motion.div>

        {/* Case Study Content */}
        {project.content ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none text-slate-300"
          >
            <h3>Overview</h3>
            <p>{project.content.overview}</p>

            <h3>Key Features</h3>
            <ul>
              {project.content.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>

            <h3>Technical Implementation</h3>
            <p>
              The system architecture relies heavily on {project.tags.slice(0, 3).join(', ')}. 
              By choosing this stack, we ensured that the application remains robust and maintainable.
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-8 not-prose">
              <h4 className="text-slate-100 font-semibold mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-cyan-400" />
                Technology Deep Dive
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <h3>Challenges & Solutions</h3>
            <p>
              <strong>Challenge:</strong> {project.content.challenges}
            </p>
            <p>
              <strong>Solution:</strong> {project.content.solutions}
            </p>

            <h3>Conclusion</h3>
            <p>
              This project demonstrates the capability to deliver high-quality software solutions 
              that solve real-world problems. It highlights proficiency in both frontend and backend technologies, 
              as well as a deep understanding of user experience.
            </p>
          </motion.div>
        ) : (
          <div className="text-slate-500 italic">Detailed case study content coming soon...</div>
        )}
      </div>
    </div>
  );
}
