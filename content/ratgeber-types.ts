export type RatgeberTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type RatgeberSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
  table?: RatgeberTable;
};

export type RatgeberArticle = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** ISO-Datum (YYYY-MM-DD) für Artikel-Stand und Schema.org datePublished. */
  publishedAt?: string;
  sections: RatgeberSection[];
  relatedLinks: { href: string; label: string }[];
  faq: { question: string; answer: string }[];
};
