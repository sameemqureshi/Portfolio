import { articles } from '@/app/data';
import ArticleLayout from '@/app/components/ArticleLayout';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((art) => art.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Sameem Qureshi`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleLayout article={article} />;
}
