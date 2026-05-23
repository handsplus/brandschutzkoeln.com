import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { FaqJsonLdFromItems } from "@/components/seo/FaqJsonLdFromItems";
import { getAllRatgeberSlugs, getRatgeberArticle } from "@/content/ratgeber";
import { RatgeberArticleView } from "@/components/ratgeber/RatgeberArticleView";

const PUBLISHED = "2026-05-07";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllRatgeberSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getRatgeberArticle(slug);
  if (!article) return {};

  return createPageMetadata({
    title: article.metaTitle,
    absoluteTitle: true,
    description: article.metaDescription,
    keywords: article.keywords,
    path: `/ratgeber/${article.slug}`,
  });
}

export default async function RatgeberArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getRatgeberArticle(slug);
  if (!article) notFound();

  const path = `/ratgeber/${article.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Ratgeber", path: "/ratgeber" },
          { name: article.title, path },
        ]}
      />
      <PageGeoJsonLd
        name={article.title}
        path={path}
        description={article.metaDescription}
        serviceType={article.keywords}
      />
      <ArticleJsonLd
        title={article.title}
        description={article.metaDescription}
        path={path}
        datePublished={PUBLISHED}
      />
      <FaqJsonLdFromItems items={article.faq} />
      <RatgeberArticleView article={article} />
    </>
  );
}
