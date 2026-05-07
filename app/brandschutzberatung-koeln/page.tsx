import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Brandschutzberatung Köln | Fachberatung für Unternehmen",
  description:
    "Brandschutzberatung in Köln für Unternehmen, Immobilien und Bauvorhaben: Analyse, Maßnahmenplan und umsetzbare Empfehlungen nach BauO NRW und Arbeitsschutz.",
  ogDescription:
    "Praxisnahe Brandschutzberatung in Köln mit klaren Handlungsempfehlungen für Rechtssicherheit, Personenschutz und Werterhalt.",
  keywords: [
    "Brandschutzberatung Köln",
    "Brandschutz Berater Köln",
    "vorbeugender Brandschutz Köln",
  ],
  path: "/brandschutzberatung-koeln",
});

export default function BrandschutzberatungKoelnPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Brandschutzberatung Köln", path: "/brandschutzberatung-koeln" },
        ]}
      />
      <PageGeoJsonLd
        name="Brandschutzberatung Köln"
        path="/brandschutzberatung-koeln"
        description="Fachberatung im vorbeugenden Brandschutz in Köln mit Analyse, Priorisierung und Maßnahmenplanung."
        serviceName="Brandschutzberatung in Köln"
        serviceType={["Brandschutzberatung", "Risikoanalyse", "Maßnahmenplan"]}
      />
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Brandschutzberatung Köln</h1>
          <p className="mt-4 text-lg text-stone-600">
            Wir beraten zu betrieblichen, baulichen und organisatorischen Fragen des Brandschutzes in Köln - klar,
            priorisiert und mit Fokus auf praktikable Umsetzung.
          </p>
        </div>
      </section>
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="container-narrow">
          <SectionHeader
            title="Was Sie aus der Beratung mitnehmen"
            subtitle="Klare Prioritäten statt allgemeiner Hinweise."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>- Bewertung der aktuellen Brandschutzsituation</li>
            <li>- Priorisierte Maßnahmen mit Aufwand/Nutzen-Einschätzung</li>
            <li>- Empfehlungen zu Schulung, Organisation und Dokumentation</li>
            <li>- Orientierung für nächste Schritte mit Behörden und Versicherern</li>
          </ul>
          <p className="mt-6 text-stone-600">
            Je nach Bedarf begleiten wir Sie weiter mit{" "}
            <Link href="/brandschutzkonzept-koeln" className="text-brand-red font-medium hover:underline">
              Brandschutzkonzept
            </Link>{" "}
            oder{" "}
            <Link href="/brandschutzordnung-koeln" className="text-brand-red font-medium hover:underline">
              Brandschutzordnung
            </Link>
            .
          </p>
        </div>
      </section>
      <CTA
        title="Jetzt Brandschutzberatung in Köln anfragen"
        description="Sie erhalten eine fachliche Einschätzung und konkrete nächste Schritte für Ihr Objekt oder Unternehmen."
        buttonLabel="Beratung anfragen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
