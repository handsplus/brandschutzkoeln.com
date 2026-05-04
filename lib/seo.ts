import type { Metadata } from "next";

/** Kanonische URL (Apex, ASCII – muss mit Vercel übereinstimmen: Production = brandschutzkoeln.com, www per 308 dorthin) */
const siteUrl = "https://brandschutzkoeln.com";

export interface PageSeoOptions {
  title: string;
  description: string;
  ogDescription?: string;
  keywords?: string[];
  path?: string;
  noIndex?: boolean;
}

/** Maximale Länge Meta-Description (empfohlen für Snippets). */
const MAX_DESCRIPTION_LENGTH = 160;

/** Erzeugt Metadata inkl. Open Graph für eine Seite. */
export function createPageMetadata({
  title,
  description,
  ogDescription,
  keywords,
  path = "",
  noIndex = false,
}: PageSeoOptions): Metadata {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  const trimmedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.slice(0, MAX_DESCRIPTION_LENGTH - 3).trim() + "…"
      : description;
  const trimmedOgDescription = ogDescription
    ? ogDescription.length > MAX_DESCRIPTION_LENGTH
      ? ogDescription.slice(0, MAX_DESCRIPTION_LENGTH - 3).trim() + "…"
      : ogDescription
    : trimmedDescription;
  return {
    title,
    description: trimmedDescription,
    keywords,
    openGraph: {
      title,
      description: trimmedOgDescription,
      url,
      locale: "de_DE",
      type: "website",
      siteName: "Brandschutz Köln – H&S+",
    },
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

export { siteUrl };
