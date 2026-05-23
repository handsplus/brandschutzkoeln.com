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
  title: "Brandschutzhelfer Köln | Inhouse ASR A2.2",
  absoluteTitle: true,
  description:
    "Brandschutzhelfer Köln: Inhouse-Ausbildung nach ASR A2.2 mit Theorie, Löschübung & Nachweis. Termine flexibel – Schulung jetzt anfragen.",
  ogDescription:
    "Brandschutzhelfer-Ausbildung in Köln vor Ort: rechtskonform, praxisnah, mit Teilnahmenachweis für Ihren Betrieb.",
  keywords: [
    "Brandschutzhelfer Köln",
    "Brandschutzhelfer Ausbildung Köln",
    "Brandschutzschulung Köln",
    "ASR A2.2 Schulung",
  ],
  path: "/brandschutzhelfer-ausbildung-koeln",
});

export default function BrandschutzhelferAusbildungKoelnPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Brandschutzhelfer Ausbildung Köln", path: "/brandschutzhelfer-ausbildung-koeln" },
        ]}
      />
      <PageGeoJsonLd
        name="Brandschutzhelfer Ausbildung Köln"
        path="/brandschutzhelfer-ausbildung-koeln"
        description="Brandschutzhelfer-Ausbildung in Köln gemäß ASR A2.2 mit Theorie, praktischer Löschübung und Teilnahme-Nachweis."
        serviceName="Brandschutzhelfer-Ausbildung in Köln"
        serviceType={["Brandschutzhelfer Ausbildung", "ASR A2.2 Schulung", "Inhouse Brandschutztraining"]}
      />

      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Brandschutzhelfer Ausbildung Köln
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Wir schulen Ihre Mitarbeitenden als Brandschutzhelfer mit verständlicher Theorie und praxisnahen Übungen.
            Die Ausbildung kann in Köln direkt bei Ihnen vor Ort stattfinden.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="inhalte">
        <div className="container-narrow">
          <SectionHeader id="inhalte" title="Inhalte der Schulung" subtitle="Konkrete Handlungssicherheit statt reiner Theorie." />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>- Grundlagen vorbeugender und abwehrender Brandschutz</li>
            <li>- Verhalten im Brandfall und Alarmierungsabläufe</li>
            <li>- Einweisung in betriebliche Flucht- und Rettungswege</li>
            <li>- Praktische Löschübung mit Feuerlöscher</li>
            <li>- Teilnahme-Nachweis für Ihre Dokumentation</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="fuer-wen">
        <div className="container-narrow">
          <SectionHeader
            id="fuer-wen"
            title="Für welche Betriebe ist die Ausbildung sinnvoll?"
            subtitle="Grundsätzlich für alle Arbeitgeber - besonders bei erhöhter Gefährdung."
          />
          <p className="text-stone-600">
            Die ASR A2.2 verlangt eine ausreichende Anzahl geschulter Brandschutzhelfer. Der konkrete Bedarf hängt von
            Branche, Personenanzahl, Schichtbetrieb und Brandgefährdung ab. Wir unterstützen bei Einschätzung, Schulung
            und weiterer Umsetzung, z. B. über eine{" "}
            <Link href="/brandschutzordnung-koeln" className="text-brand-red font-medium hover:underline">
              passende Brandschutzordnung
            </Link>
            . Mehr zur{" "}
            <Link href="/ratgeber/flucht-und-rettungswege-bauo-nrw" className="text-brand-red font-medium hover:underline">
              Fluchtwegsicherung im Ratgeber
            </Link>
            .
          </p>
        </div>
      </section>

      <LandingFaqSection items={LANDING_FAQS["/brandschutzhelfer-ausbildung-koeln"]} />

      <CTA
        title="Brandschutzhelfer in Köln schulen lassen"
        description="Wir planen Ihre Schulung flexibel als Inhouse-Termin und stimmen Inhalte auf Ihren Betrieb ab."
        buttonLabel="Schulung anfragen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
