import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";
import { RATGEBER_ARTICLES } from "@/content/ratgeber";
import { formatRatgeberStandLabel } from "@/lib/ratgeber-article-meta";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ratgeber Brandschutz & BauO NRW | H&S+ Köln",
  absoluteTitle: true,
  description:
    "Ratgeber BauO NRW & Brandschutz: Gebäudeklassen, Sonderbauten, Konzepte, Fluchtwege. Praxiswissen für Köln – mit passenden Leistungen von H&S+.",
  ogDescription:
    "Brandschutz-Ratgeber zu Bauordnung NRW und Köln – von Gebäudeklassen bis Bauaufsicht.",
  keywords: [
    "Ratgeber Brandschutz",
    "BauO NRW Brandschutz",
    "Brandschutz Köln Ratgeber",
    "Brandschutzberatung Köln",
  ],
  path: "/ratgeber",
});

const linkClass =
  "text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red";

export default function RatgeberPage() {
  const articlesByDate = [...RATGEBER_ARTICLES].sort((a, b) =>
    (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""),
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ratgeber Brandschutz und BauO NRW",
    itemListElement: RATGEBER_ARTICLES.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/ratgeber/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Ratgeber", path: "/ratgeber" },
        ]}
      />
      <PageGeoJsonLd
        name="Ratgeber Brandschutz und BauO NRW"
        path="/ratgeber"
        description="Übersicht der Ratgeber-Artikel zu Brandschutz und Bauordnung NRW für Köln und Umgebung."
        serviceType={["Brandschutz Ratgeber", "BauO NRW", "Brandschutz Köln"]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Ratgeber Brandschutz &amp; BauO NRW
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Verständliche Erläuterungen zu Bauordnung, Brandschutz und typischen Pflichten – viele Artikel
            stützen sich auf anonymisierte Projekte aus Köln und Umgebung (ohne Mandatsdetails). Für
            Leistungen siehe{" "}
            <Link href="/leistungen" className={linkClass}>
              Leistungen
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="ratgeber-liste">
        <div className="container-narrow">
          <SectionHeader
            id="ratgeber-liste"
            title="Alle Artikel"
            subtitle={`${RATGEBER_ARTICLES.length} Artikel zu BauO NRW und Praxisfällen – regelmäßig erweitert.`}
          />
          <ul className="mt-8 space-y-4" role="list">
            {articlesByDate.map((article) => (
              <li key={article.slug}>
                <article className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <p className="text-sm text-stone-500">{formatRatgeberStandLabel(article.publishedAt)}</p>
                  <h2 className="mt-1 text-lg font-semibold text-stone-900">
                    <Link href={`/ratgeber/${article.slug}`} className={linkClass}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-stone-600">{article.excerpt}</p>
                  <p className="mt-4 flex flex-wrap gap-4 text-sm">
                    <Link href={`/ratgeber/${article.slug}`} className={linkClass}>
                      Artikel lesen →
                    </Link>
                    {article.relatedLinks[0] ? (
                      <Link href={article.relatedLinks[0].href} className={linkClass}>
                        {article.relatedLinks[0].label} →
                      </Link>
                    ) : null}
                  </p>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-stone-600">
            Konkrete Umsetzung:{" "}
            <Link href="/brandschutzberatung-koeln" className={linkClass}>
              Brandschutzberatung Köln
            </Link>
            ,{" "}
            <Link href="/brandschutzhelfer-ausbildung-koeln" className={linkClass}>
              Brandschutzhelfer Schulung
            </Link>
            .
          </p>
        </div>
      </section>

      <CTA
        title="Fragen zu Ihrem Vorhaben?"
        description="Wir übersetzen die Bauordnung in umsetzbare Schritte für Ihr Unternehmen oder Objekt."
        buttonLabel="Erstberatung anfragen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
