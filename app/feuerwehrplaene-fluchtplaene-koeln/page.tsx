import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";
import { LandingFaqSection } from "@/components/sections/LandingFaqSection";
import { RatgeberDeepenSection } from "@/components/sections/RatgeberDeepenSection";
import { LANDING_FAQS } from "@/content/landing-faqs";

export const metadata: Metadata = createPageMetadata({
  title: "Feuerwehrpläne und Fluchtpläne Köln | H&S+",
  absoluteTitle: true,
  description:
    "Feuerwehrpläne nach DIN 14095 und Flucht- und Rettungspläne nach ASR A2.3: Erstellung, Prüfung und Fortschreibung in Köln und NRW. H&S+.",
  ogDescription:
    "Feuerwehrpläne und Fluchtpläne für Betriebe in Köln und NRW – normgerecht, abgestimmt auf Konzept und Betrieb.",
  keywords: [
    "Feuerwehrplan Köln",
    "Fluchtplan Köln",
    "Flucht- und Rettungsplan Köln",
    "Feuerwehrpläne erstellen",
    "DIN 14095",
    "ASR A2.3",
  ],
  path: "/feuerwehrplaene-fluchtplaene-koeln",
});

export default function FeuerwehrplaeneFluchtplaeneKoelnPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          {
            name: "Feuerwehrpläne und Fluchtpläne Köln",
            path: "/feuerwehrplaene-fluchtplaene-koeln",
          },
        ]}
      />
      <PageGeoJsonLd
        name="Feuerwehrpläne und Fluchtpläne Köln"
        path="/feuerwehrplaene-fluchtplaene-koeln"
        description="Erstellung, Prüfung und Fortschreibung von Feuerwehrplänen und Flucht- und Rettungsplänen in Köln und NRW."
        serviceName="Feuerwehrpläne und Fluchtpläne"
        serviceType={[
          "Feuerwehrplan",
          "Flucht- und Rettungsplan",
          "DIN 14095",
          "ASR A2.3",
        ]}
      />

      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Feuerwehrpläne und Fluchtpläne
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Erstellung, Überprüfung und Fortschreibung von Feuerwehrplänen nach DIN 14095 und
            Flucht- und Rettungsplänen nach ASR A2.3. In Köln und NRW.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="zwei-planarten">
        <div className="container-narrow">
          <SectionHeader
            id="zwei-planarten"
            title="Zwei Planarten, klar getrennt"
            subtitle="Einsatzkräfte und Betrieb brauchen unterschiedliche Unterlagen."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>
              <strong className="text-stone-900">Feuerwehrplan (DIN 14095):</strong> Einsatzunterlage
              für die Feuerwehr mit Lage, Zugängen, Brandschutzeinrichtungen und relevanten
              Gefahren. Oft aus dem genehmigten Brandschutzkonzept vorgesehen.
            </li>
            <li>
              <strong className="text-stone-900">Flucht- und Rettungsplan (ASR A2.3):</strong>{" "}
              Orientierung für Beschäftigte und Besucher, lagerichtig an den Aufenthaltsorten.
              Arbeitsschutz, nicht Einsatzleitung.
            </li>
          </ul>
          <p className="mt-6 text-stone-600">
            Der bauordnungsrechtliche Rettungswegnachweis gehört ins Konzept bzw. in die
            Stellungnahme. Er ist kein Ersatz für diese beiden Planarten. Abgrenzung zur{" "}
            <Link
              href="/brandschutzordnung-koeln"
              className="text-brand-red font-medium hover:underline"
            >
              Brandschutzordnung
            </Link>
            : die BSO regelt Verhalten und Zuständigkeiten, nicht die Planzeichnung.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="wann">
        <div className="container-narrow">
          <SectionHeader
            id="wann"
            title="Wann Pläne nötig oder zu aktualisieren sind"
            subtitle="Neubau, Umbau und laufender Betrieb."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>Auflage aus Baugenehmigung, Brandschau oder Versicherer</li>
            <li>Umbau, Nutzungsänderung oder geänderte Fluchtwege</li>
            <li>Neue Brandschutzeinrichtungen, Zugänge oder Sammelplätze</li>
            <li>Veraltete oder widersprüchliche Pläne gegenüber dem genehmigten Stand</li>
            <li>Einführung oder Fortschreibung der Brandschutzordnung</li>
          </ul>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="leistung-ablauf">
        <div className="container-narrow">
          <SectionHeader
            id="leistung-ablauf"
            title="Was wir liefern"
            subtitle="Von den Grundrissen bis zur Fortschreibung."
          />
          <ol className="list-decimal space-y-3 pl-5 text-stone-600">
            <li>Grundrisse und Nutzungsdaten erfassen, Abgleich mit genehmigtem Stand</li>
            <li>Fluchtwege, Rettungswege und brandschutzrelevante Einrichtungen einzeichnen</li>
            <li>Feuerwehrpläne und Fluchtpläne normgerecht erstellen und kennzeichnen</li>
            <li>Überprüfung und Fortschreibung bei baulichen oder organisatorischen Änderungen</li>
          </ol>
          <p className="mt-6 text-stone-600">
            Ergänzend:{" "}
            <Link
              href="/brandschutzkonzept-koeln"
              className="text-brand-red font-medium hover:underline"
            >
              Brandschutzkonzept und Stellungnahme
            </Link>
            ,{" "}
            <Link
              href="/brandschutzordnung-koeln"
              className="text-brand-red font-medium hover:underline"
            >
              Brandschutzordnung
            </Link>
            .
          </p>
        </div>
      </section>

      <RatgeberDeepenSection
        className="bg-white py-16 sm:py-20"
        links={[
          {
            href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe",
            label: "Fluchtplan, Feuerwehrplan, BSO – drei Ebenen",
          },
          {
            href: "/ratgeber/flucht-und-rettungswege-bauo-nrw",
            label: "Flucht- und Rettungswege BauO NRW",
          },
          {
            href: "/ratgeber/maisonette-zweiter-rettungsweg-dachgeschoss-koeln",
            label: "Praxisfall Maisonette 2. Rettungsweg",
          },
        ]}
      />

      <LandingFaqSection items={LANDING_FAQS["/feuerwehrplaene-fluchtplaene-koeln"]} />

      <CTA
        title="Feuerwehrpläne oder Fluchtpläne erstellen lassen"
        description="Kurz Objekt und Anlass schildern – wir sagen Ihnen, welche Planart nötig ist und wie der Ablauf aussieht."
        buttonLabel="Anfrage stellen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
