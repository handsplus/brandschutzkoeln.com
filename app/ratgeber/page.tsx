import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";
import { RATGEBER_ARTICLES } from "@/content/ratgeber";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ratgeber Brandschutz & BauO NRW | H&S+ Köln",
  description:
    "Ratgeber zu Brandschutz und Bauordnung NRW: verständliche Erläuterungen zu Gebäudeklassen, Sonderbauten, Konzepten und Fluchtwegen – für Unternehmen in Köln.",
  ogDescription:
    "Fachlicher Ratgeber: Brandschutz, BauO NRW und Praxis in Köln – von H&S+ Brandschutzsachverständigen.",
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
            Verständliche Erläuterungen zu Bauordnung, Brandschutz und typischen Pflichten – mit Bezug zur
            Praxis in Köln und Umgebung. Für konkrete Leistungen siehe{" "}
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
            subtitle="Sechs Themen zum Einstieg – regelmäßig erweiterbar."
          />
          <ul className="mt-8 space-y-4" role="list">
            {RATGEBER_ARTICLES.map((article) => (
              <li key={article.slug}>
                <article className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h2 className="text-lg font-semibold text-stone-900">
                    <Link href={`/ratgeber/${article.slug}`} className={linkClass}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-stone-600">{article.excerpt}</p>
                  <p className="mt-4">
                    <Link href={`/ratgeber/${article.slug}`} className={`text-sm ${linkClass}`}>
                      Artikel lesen →
                    </Link>
                  </p>
                </article>
              </li>
            ))}
          </ul>
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
