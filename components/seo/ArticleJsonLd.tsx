import { siteUrl } from "@/lib/seo";
import { SITE } from "@/lib/constants";

type ArticleJsonLdProps = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
};

export function ArticleJsonLd({ title, description, path, datePublished }: ArticleJsonLdProps) {
  const url = `${siteUrl}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    inLanguage: "de-DE",
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
