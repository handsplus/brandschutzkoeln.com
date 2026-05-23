export type RatgeberSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type RatgeberArticle = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  sections: RatgeberSection[];
  relatedLinks: { href: string; label: string }[];
  faq: { question: string; answer: string }[];
};
