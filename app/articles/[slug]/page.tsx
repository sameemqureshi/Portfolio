import { articles } from '@/app/data';
import ArticleLayout from '@/app/components/ArticleLayout';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles.find((art) => art.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Sameem Qureshi`,
    description: article.description,
  };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  const article = articles.find((art) => art.slug === params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleLayout article={article} />;
};

export default ArticlePage;
