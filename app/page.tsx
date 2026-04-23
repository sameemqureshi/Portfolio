'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Brain,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  FileDown,
  ArrowDown
} from 'lucide-react';
import Link from 'next/link';
import { socialLinks, experience, education, skills, certifications, articles } from './data';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 font-sans">
      <Navbar />
      <ChatWidget />
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Header / Hero */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Open to Opportunities Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tight mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Sameem Qureshi
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-slate-300 font-light flex items-center gap-2 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Terminal className="w-5 h-5 text-cyan-500" />
              Building Production-Ready AI Systems
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                AI/ML/LLM Gen AI Engineer @ Logitech · May 2024 – Present
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                IIT Madras · BS in Data Science & Applications
              </span>
            </motion.div>

            {/* Hero CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all hover:scale-105 active:scale-95"
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </Link>
              <a
                href="https://drive.google.com/file/d/1wfNauWCljH4p8Q6bFLjoDa12Xgwl5kvj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-300 bg-slate-900/60 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white transition-all hover:scale-105 active:scale-95"
              >
                <FileDown className="w-4 h-4" />
                View Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-start gap-4 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex gap-4 self-end">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5, color: '#22d3ee' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-900/50 rounded-full border border-slate-800 text-slate-400 hover:border-cyan-500/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-xs text-slate-500 text-right w-full">
              Pune, India
            </div>
          </motion.div>
        </motion.header>

        {/* About Section */}
        <motion.section
          id="about"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20 pt-20"
        >
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
                Building Practical AI Systems
              </span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I design and ship AI systems that bridge research-grade models with real-world developer workflows. My recent work
              focuses on <strong>LLM-powered developer tooling</strong>, <strong>retrieval-augmented generation (RAG) pipelines</strong>, and scalable backend
              infrastructure.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              From VS Code extensions and code intelligence to data-heavy analytics projects, I enjoy working end-to-end: data
              ingestion, modeling, evaluation, and productionization.
            </p>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20 pt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-emerald-400" />
            Work Experience
          </h2>

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="rounded-3xl bg-slate-900/40 border border-slate-800 p-6 md:p-8 mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <p className="text-sm text-slate-500">{exp.period}</p>
                  <h3 className="text-xl font-semibold text-slate-100">{exp.role}</h3>
                  <p className="text-slate-400">{exp.company}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end max-w-md">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-950/70 border border-slate-800 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="list-disc list-outside pl-5 space-y-2 text-sm md:text-[0.95rem] text-slate-300">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>

        {/* Projects Section (extracted client component) */}
        <ProjectsSection />

        {/* Education & Certifications Grid */}
        <motion.section
          id="education"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20 pt-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
             {/* Education */}
             <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold text-slate-100">{edu.degree}</p>
                        <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded">{edu.note}</span>
                      </div>
                      <p className="text-slate-400 text-sm mb-1">{edu.institute}</p>
                      <p className="text-xs text-slate-600">{edu.period}</p>
                    </motion.div>
                  ))}
                </div>
             </div>

             {/* Certifications */}
             <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-amber-300" />
                  Certifications
                </h2>
                <motion.div
                  variants={fadeInUp}
                  className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 h-full"
                >
                  <ul className="space-y-3 text-sm text-slate-300">
                    {certifications.map((cert, i) => (
                      <li key={i} className="flex items-start gap-3">
                         <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                         <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
             </div>
          </div>
        </motion.section>

        {/* Recommendations (LinkedIn) */}
        <motion.section
          id="testimonials"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20 pt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <Linkedin className="w-7 h-7 text-[#0A66C2]" />
            Recommendations
          </h2>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-[#0A66C2]/30 transition-colors text-center"
          >
            <p className="text-slate-300 mb-6 max-w-lg mx-auto">
              Read what colleagues and mentors have to say about working with me on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/sameemqureshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0A66C2] rounded-full hover:bg-[#004182] transition-all hover:scale-105 active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
              View LinkedIn Recommendations
            </a>
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20 pt-20"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3"
            variants={fadeInUp}
          >
            <Sparkles className="w-7 h-7 text-fuchsia-400" />
            Technical Arsenal
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInLeft}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                 {[...skills.programming, ...skills.web].map((skill, index) => (
                   <motion.span
                     key={skill}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.03, duration: 0.3 }}
                     whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.2 } }}
                     className="px-3 py-1 text-sm rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50 cursor-default"
                   >
                     {skill}
                   </motion.span>
                 ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">AI, ML & Data</h3>
              <div className="flex flex-wrap gap-2">
                 {[...skills.ml, ...skills.data].map((skill, index) => (
                   <motion.span
                     key={skill}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.03, duration: 0.3 }}
                     whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.2 } }}
                     className="px-3 py-1 text-sm rounded-md bg-slate-800/50 text-emerald-400/80 border border-slate-700/50 cursor-default"
                   >
                     {skill}
                   </motion.span>
                 ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                 {skills.cloud.map((skill, index) => (
                   <motion.span
                     key={skill}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.03, duration: 0.3 }}
                     whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.2 } }}
                     className="px-3 py-1 text-sm rounded-md bg-slate-800/50 text-sky-400/80 border border-slate-700/50 cursor-default"
                   >
                     {skill}
                   </motion.span>
                 ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                 {skills.tools.map((skill, index) => (
                   <motion.span
                     key={skill}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.03, duration: 0.3 }}
                     whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.2 } }}
                     className="px-3 py-1 text-sm rounded-md bg-slate-800/50 text-fuchsia-400/80 border border-slate-700/50 cursor-default"
                   >
                     {skill}
                   </motion.span>
                 ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Articles Section */}
        <motion.section
          id="articles"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20 pt-20"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3"
            variants={fadeInUp}
          >
            <Sparkles className="w-7 h-7 text-yellow-400" />
            Recent Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(0, 4).map((article) => (
              <Link href={`/articles/${article.slug}`} key={article.slug} className="block">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="group rounded-2xl bg-slate-900/40 border border-slate-800 p-6 h-full hover:border-slate-700 transition-colors cursor-pointer"
                >
                  <p className="text-sm text-slate-500 mb-2">{article.date}</p>
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-yellow-400 transition-colors mb-2">{article.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-2">{article.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Contact / Footer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-16 border-t border-slate-900"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s Build Something Impactful
          </motion.h2>
          <motion.p
            className="text-slate-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I&apos;m currently seeking opportunities to apply my skills in building intelligent systems. If you have a challenging problem to solve, I&apos;d love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="mailto:qureshisameem01@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all hover:scale-105 active:scale-95 group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Link>
          </motion.div>
        </motion.section>

        {/* Footer Credits */}
        <div className="text-center text-slate-600 text-sm pb-8">
          <p>&copy; {new Date().getFullYear()} Sameem Qureshi. Built with Next.js, Tailwind, & Framer Motion.</p>
        </div>
      </div>
    </div>
  );
}
