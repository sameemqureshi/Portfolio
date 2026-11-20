'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { projects } from '../../data';

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
  // Find next project for seamless B1 navigation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-cyan-500/30 font-sans relative">
      {/* Background ambient gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-950/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-cyan-400 transition-colors mb-16 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Systems</span>
        </Link>

        {/* Title Card Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            {project.desc}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-neutral-900">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-200 font-medium text-sm hover:border-neutral-700 hover:text-white transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Service</span>
              </a>
            )}
          </div>
        </motion.header>

        {/* Hero Visual Media */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full h-72 md:h-[420px] relative rounded-3xl overflow-hidden mb-16 border border-neutral-800 bg-neutral-950 flex items-center justify-center p-8"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-8 drop-shadow-2xl opacity-90"
            />
          </motion.div>
        )}

        {/* Narrative Deep Dive */}
        {project.content && (
          <div className="space-y-16 text-neutral-300">
            {/* System Overview */}
            <section className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block">
                01 / ARCHITECTURE OVERVIEW
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                System Objective &amp; Scope
              </h2>
              <p className="text-lg font-light leading-relaxed text-neutral-300">
                {project.content.overview}
              </p>
            </section>

            {/* Key Features Breakdown */}
            <section className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block">
                02 / TECHNICAL HIGHLIGHTS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Key Engineering Capabilities
              </h2>
              <div className="grid gap-4">
                {project.content.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base font-light text-neutral-200 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Engineering Challenges & Solutions */}
            <section className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-amber-400 font-mono text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Technical Challenge</span>
                  </div>
                  <p className="text-sm md:text-base font-light leading-relaxed text-neutral-300">
                    {project.content.challenges}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-sm md:text-base font-light leading-relaxed text-neutral-300">
                    {project.content.solutions}
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* B1 Pattern: Next Project Transition */}
        <div className="mt-24 pt-12 border-t border-neutral-900">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4">
            Next System
          </span>
          <Link
            href={nextProject.link}
            className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 hover:bg-neutral-900/40 transition-all"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                {nextProject.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-2 font-light">
                {nextProject.desc}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-mono text-neutral-400 group-hover:text-cyan-400 shrink-0">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
