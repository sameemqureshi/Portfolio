import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Navbar from './Navbar';

interface Section {
  type: string;
  heading?: string;
  text: string;
}

interface ArticleLayoutProps {
  article: {
    title: string;
    date: string;
    author: string;
    description: string;
    slug: string;
    content?: Section[];
  };
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ article }) => {
  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-cyan-500/30">
      <Navbar />

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-28 md:py-36">
        <Link
          href="/#articles"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-snug">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-6 font-light leading-relaxed">
            {article.description}
          </p>
          <div className="flex items-center gap-6 text-xs font-mono text-neutral-500 border-y border-neutral-900 py-3">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </header>

        {article.content && article.content.length > 0 ? (
          <div className="space-y-10 text-neutral-300">
            {article.content.map((block, i) => (
              <div key={i}>
                {block.type === 'intro' ? (
                  <p className="text-lg md:text-xl text-neutral-200 leading-relaxed border-l-2 border-cyan-400 pl-5 italic font-light">
                    {block.text}
                  </p>
                ) : (
                  <div className="space-y-3">
                    {block.heading && (
                      <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        {block.heading}
                      </h2>
                    )}
                    <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-neutral-500 font-mono text-sm">Content coming soon.</p>
        )}

        <div className="mt-20 pt-8 border-t border-neutral-900">
          <Link
            href="/#articles"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Writing</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ArticleLayout;
