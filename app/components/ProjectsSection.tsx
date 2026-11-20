'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<typeof projects[0] | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const previewPos = useRef({ x: 0, y: 0 });
  const previewRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(pointer: fine)').matches);

    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const updatePreview = () => {
      previewPos.current.x = lerp(previewPos.current.x, mousePos.current.x, 0.15);
      previewPos.current.y = lerp(previewPos.current.y, mousePos.current.y, 0.15);

      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${previewPos.current.x + 24}px, ${previewPos.current.y - 120}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePreview);
    };

    animationFrameId = requestAnimationFrame(updatePreview);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="projects" className="relative mb-32 pt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-800/80 pb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2 block">
            Featured Systems &amp; Deployments
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Selected Work
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-500 mt-4 md:mt-0 tracking-wider">
          01 — 0{projects.length} / PRODUCTION SYSTEMS
        </p>
      </div>

      {/* Floating Hover Preview (Desktop only) */}
      {isDesktop && (
        <div
          ref={previewRef}
          className="fixed top-0 left-0 pointer-events-none z-40 transition-opacity duration-300 hidden md:block"
          style={{ willChange: 'transform' }}
        >
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                className="w-72 h-48 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900/95 shadow-2xl backdrop-blur-md p-3 flex flex-col justify-between"
              >
                <div className="relative w-full h-28 rounded-lg overflow-hidden bg-neutral-950 flex items-center justify-center">
                  {hoveredProject.image ? (
                    <Image
                      src={hoveredProject.image}
                      alt={hoveredProject.title}
                      width={240}
                      height={120}
                      className="object-contain w-full h-full p-2"
                    />
                  ) : (
                    <div className="text-neutral-700 font-mono text-xs">NO PREVIEW</div>
                  )}
                </div>
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1">
                    {hoveredProject.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Numbered Editorial Index List */}
      <div className="divide-y divide-neutral-800/80 border-b border-neutral-800/80">
        {projects.map((project, idx) => {
          const indexFormatted = (idx + 1).toString().padStart(2, '0');

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                href={project.link}
                data-cursor-text="VIEW"
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 px-2 transition-all duration-300"
              >
                {/* Index + Title */}
                <div className="flex items-baseline gap-6 md:gap-12 flex-1">
                  <span className="font-mono text-sm md:text-base text-neutral-500 group-hover:text-cyan-400 transition-colors shrink-0">
                    {indexFormatted}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-3xl font-semibold text-neutral-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-2 line-clamp-2 max-w-2xl font-light">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Tags & Action */}
                <div className="flex items-center gap-4 mt-4 md:mt-0 pl-12 md:pl-0 shrink-0">
                  <span className="font-mono text-xs px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
                    {project.tags[0]}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-neutral-950 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
