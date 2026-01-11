import { articles } from '@/app/data';
import ArticleLayout from '@/app/components/ArticleLayout';
import { notFound } from 'next/navigation';

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

const ArticlePage = ({ params }: ArticlePageProps) => {
  const article = articles.find((art) => art.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout article={article}>
      {/* This is a placeholder for the actual article content. */}
      {/* The user only wanted links and previews for now. */}
      <p>This is a placeholder for the article content on "{article.title}".</p>
      <p>Full article coming soon!</p>
    </ArticleLayout>
  );
};

export default ArticlePage;
