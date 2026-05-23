import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";
import { LandingFaqSection } from "@/components/sections/LandingFaqSection";
import { LANDING_FAQS } from "@/content/landing-faqs";

export const metadata: Metadata = createPageMetadata({
  title: "Brandschutzberatung Köln | H&S+ Erstberatung",
  absoluteTitle: true,
  description:
    "Brandschutzberatung Köln: Ist-Analyse, priorisierte Maßnahmen nach BauO NRW. Für Gewerbe, Immobilien & Umbau – unverbindliche Erstberatung.",
  ogDescription:
    "Fachliche Brandschutzberatung in Köln mit klaren nächsten Schritten. Jetzt Erstberatung anfragen.",
  keywords: [
    "Brandschutzberatung",
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
            </Link>
            ,{" "}
            <Link href="/brandschutzordnung-koeln" className="text-brand-red font-medium hover:underline">
              Brandschutzordnung
            </Link>{" "}
            oder als{" "}
            <Link href="/brandschutzbeauftragter-koeln" className="text-brand-red font-medium hover:underline">
              externer Brandschutzbeauftragter
            </Link>
            . Hintergründe zur BauO NRW im{" "}
            <Link href="/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw" className="text-brand-red font-medium hover:underline">
              Ratgeber Gebäudeklassen
            </Link>
            .
          </p>
        </div>
      </section>
      <LandingFaqSection items={LANDING_FAQS["/brandschutzberatung-koeln"]} />
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
