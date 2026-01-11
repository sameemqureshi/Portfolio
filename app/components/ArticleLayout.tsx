import React from 'react';
import Link from 'next/link';

interface ArticleLayoutProps {
  children: React.ReactNode;
  article: {
    title: string;
    date: string;
    author: string;
    description: string;
    slug: string;
  };
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ children, article }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          By {article.author} on {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}
        </p>
        <div className="article-content">
          {children}
        </div>
        <div className="mt-8">
          <Link href="/articles" className="text-blue-500 hover:underline">
            &larr; Back to Articles
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleLayout;
