'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  FileDown,
  Linkedin,
  Mail,
  Layers,
  Terminal,
  Cpu,
  Cloud,
  CheckCircle2,
  GraduationCap,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { socialLinks, experience, education, skills, certifications, articles } from './data';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import ProjectsSection from './components/ProjectsSection';
import Preloader from './components/Preloader';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-cyan-500/30 font-sans relative">
      <Preloader />
      <Navbar />
      <ChatWidget />

      {/* Subtle ambient lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-950/20 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-purple-950/15 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-20">
        
        {/* HERO SECTION */}
        <header className="mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
              AI/ML/GenAI Engineer · Logitech
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-[0.95] mb-6">
              Sameem<br />Qureshi
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-300 max-w-3xl mb-8 tracking-tight"
          >
            Generative AI · Agentic Systems · MLOps
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-neutral-400 font-mono mb-10"
          >
            <span>Logitech (Jun 2025 – Present)</span>
            <span className="text-neutral-700">/</span>
            <span>IIT Madras (BS Data Science)</span>
            <span className="text-neutral-700">/</span>
            <span>Pune, India</span>
          </motion.div>

          {/* CTA & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-neutral-900"
          >
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Work</span>
                <ArrowDown className="w-4 h-4" />
              </Link>
              <a
                href="https://drive.google.com/file/d/1mNCvapei1m4LYmMwfFcg262nzn3OuTMt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-300 text-sm font-medium hover:border-neutral-700 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full border border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:text-cyan-400 hover:border-neutral-700 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </header>

        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          {...fadeInUp}
          className="mb-28 pt-8 border-t border-neutral-900"
        >
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
                Engineering Focus
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Bridging Models with Enterprise Reality
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-neutral-300 text-base md:text-lg font-light leading-relaxed">
              <p>
                At Logitech, I build core infrastructure for the <strong className="text-white font-medium">LogiQ Enterprise AI Ecosystem</strong> — spanning governed multi-provider LLM gateways, agentic applications, Model Context Protocol (MCP) integrations, and developer enablement tools.
              </p>
              <p>
                My focus centers on the hard engineering problems of production AI: low-latency streaming inference, hybrid vector/keyword retrieval, Tree-sitter code indexing, telemetry at scale, and end-to-end MLOps automation with strict governance.
              </p>
            </div>
          </div>
        </motion.section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="mb-32 pt-8">
          <div className="flex items-end justify-between mb-16 border-b border-neutral-800/80 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2 block">
                Career Timeline
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Work Experience
              </h2>
            </div>
            <span className="font-mono text-xs text-neutral-500">2024 — PRESENT</span>
          </div>

          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="relative pl-6 md:pl-10 border-l border-neutral-800"
              >
                {/* Timeline node */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-black" />

                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-mono text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-neutral-500 bg-neutral-900/60 border border-neutral-800 px-3 py-1 rounded-full shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-4 my-6">
                  {exp.highlights.map((item, hIdx) => {
                    const [headline, ...rest] = item.split(': ');
                    return (
                      <div key={hIdx} className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-neutral-100 font-medium">{headline}:</strong>{' '}
                            {rest.join(': ')}
                          </>
                        ) : (
                          item
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-mono rounded bg-neutral-900 border border-neutral-800/80 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SELECTED WORK (PROJECTS) */}
        <ProjectsSection />

        {/* TECHNICAL ARSENAL (SKILLS) */}
        <section id="skills" className="mb-32 pt-8">
          <div className="flex items-end justify-between mb-16 border-b border-neutral-800/80 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2 block">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Technical Stack
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* GenAI & ML */}
            <motion.div {...fadeInUp} className="p-6 md:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/60">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">GenAI, Agents &amp; ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.genai.map((item) => (
                  <span key={item} className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend & Tooling */}
            <motion.div {...fadeInUp} className="p-6 md:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/60">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">Backend &amp; Tooling</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((item) => (
                  <span key={item} className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Cloud & Infrastructure */}
            <motion.div {...fadeInUp} className="p-6 md:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/60">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-5 h-5 text-sky-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">Cloud &amp; Infrastructure</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((item) => (
                  <span key={item} className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* MLOps & Languages */}
            <motion.div {...fadeInUp} className="p-6 md:p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/60">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">MLOps, Observability &amp; Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.mlops.map((item) => (
                  <span key={item} className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="pt-3 border-t border-neutral-900 flex flex-wrap gap-2">
                {skills.languages.map((lang) => (
                  <span key={lang} className="px-2.5 py-0.5 text-xs font-mono rounded bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 font-semibold">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="mb-32 pt-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold tracking-tight text-white">Education</h2>
              </div>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeInUp}
                    className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-950/60"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-white text-base">{edu.degree}</p>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-900/60 px-2 py-0.5 rounded">
                        {edu.note}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm">{edu.institute}</p>
                    <p className="text-xs font-mono text-neutral-600 mt-2">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-bold tracking-tight text-white">Certifications</h2>
              </div>
              <motion.div
                {...fadeInUp}
                className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/60"
              >
                <ul className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* LinkedIn Endorsements CTA */}
              <div className="mt-6 p-6 rounded-2xl border border-neutral-800 bg-neutral-950/40 text-center">
                <p className="text-sm text-neutral-400 mb-4">
                  Connect on LinkedIn for recommendations, peer endorsements, and professional references.
                </p>
                <a
                  href="https://www.linkedin.com/in/sameemqureshi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-xs font-semibold hover:bg-[#004182] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>View LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES */}
        <section id="articles" className="mb-32 pt-8">
          <div className="flex items-end justify-between mb-16 border-b border-neutral-800/80 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2 block">
                Technical Writing
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Articles &amp; Architecture Notes
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((art) => (
              <motion.div
                key={art.slug}
                {...fadeInUp}
                className="group rounded-2xl border border-neutral-800/80 bg-neutral-950/60 p-6 md:p-8 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-3">
                    <span>{art.date}</span>
                    <span>{art.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6 line-clamp-3">
                    {art.description}
                  </p>
                </div>
                <Link
                  href={`/articles/${art.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section className="text-center py-20 border-t border-neutral-900">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 block">
            Initiate Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Let&apos;s Build Systems That Matter.
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-base md:text-lg font-light leading-relaxed">
            Interested in collaborating on high-throughput LLM platforms, agentic workflows, or enterprise MLOps architectures? Let&apos;s talk.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="mailto:qureshisameem01@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-neutral-950 font-semibold text-base hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              <span>qureshisameem01@gmail.com</span>
            </a>
          </div>
        </section>

        <footer className="text-center text-neutral-600 text-xs font-mono py-8 border-t border-neutral-950">
          <p>&copy; {new Date().getFullYear()} Sameem Qureshi. Engineered with Next.js, Framer Motion, and Tailwind CSS.</p>
        </footer>

      </div>
    </div>
  );
}
