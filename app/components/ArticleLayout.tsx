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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar />

      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-4 leading-snug">
            {article.title}
          </h1>
          <p className="text-lg text-slate-400 mb-6 leading-relaxed">{article.description}</p>
          <div className="flex items-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
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

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-12" />

        {article.content && article.content.length > 0 ? (
          <div className="space-y-8">
            {article.content.map((block, i) => (
              <div key={i}>
                {block.type === 'intro' ? (
                  <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-cyan-500/50 pl-5 italic">
                    {block.text}
                  </p>
                ) : (
                  <div>
                    {block.heading && (
                      <h2 className="text-xl font-semibold text-slate-100 mb-3">{block.heading}</h2>
                    )}
                    <p className="text-slate-300 leading-relaxed">{block.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-400">Content coming soon.</p>
        )}

        <div className="mt-16 pt-8 border-t border-slate-800">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ArticleLayout;
