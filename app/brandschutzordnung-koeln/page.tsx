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
  title: "Brandschutzordnung Köln | Teil A, B, C",
  absoluteTitle: true,
  description:
    "Brandschutzordnung nach DIN 14096: Teil A, B und C – Erstellung und Fortschreibung. Köln und Umgebung, auch NRW. H&S+.",
  ogDescription:
    "Brandschutzordnung: Verhalten im Brandfall, betriebliche Organisation, Aushang und Fortschreibung.",
  keywords: [
    "Brandschutzordnung Köln",
    "Brandschutzordnung Teil A B C",
    "DIN 14096",
    "Brandschutzordnung erstellen",
  ],
  path: "/brandschutzordnung-koeln",
});

export default function BrandschutzordnungKoelnPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Brandschutzordnung Köln", path: "/brandschutzordnung-koeln" },
        ]}
      />
      <PageGeoJsonLd
        name="Brandschutzordnung Köln"
        path="/brandschutzordnung-koeln"
        description="Erstellung und Fortschreibung von Brandschutzordnungen nach DIN 14096 in Köln und NRW."
        serviceName="Brandschutzordnung"
        serviceType={["Brandschutzordnung", "DIN 14096", "Betrieblicher Brandschutz"]}
      />

      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Brandschutzordnung
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Zweiter Schwerpunkt unserer Leistungen: Brandschutzordnungen nach DIN 14096 – Erstellung, Einführung
            und Fortschreibung. Standort Köln und Umgebung; Betreuung weiterer Standorte in NRW nach Projektumfang.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="teile">
        <div className="container-narrow">
          <SectionHeader
            id="teile"
            title="Teil A, B und C nach DIN 14096"
            subtitle="Was die BSO regelt – und was nicht."
          />
          <div className="space-y-4 text-stone-600">
            <p>
              Die Brandschutzordnung (BSO) organisiert das Verhalten und die Zuständigkeiten im Brandfall. Sie
              ist nicht dasselbe wie ein bauordnungsrechtliches Brandschutzkonzept und nicht dasselbe wie
              Flucht- und Rettungspläne nach ASR A2.3.
            </p>
            <ul className="space-y-3" role="list">
              <li>
                <strong className="text-stone-900">Teil A (Aushang):</strong> Verhalten im Brandfall für alle
                Personen im Gebäude – sichtbar an Fluchtwegen.
              </li>
              <li>
                <strong className="text-stone-900">Teil B:</strong> Pflichten und Maßnahmen für Beschäftigte
                und Nutzer des Betriebs.
              </li>
              <li>
                <strong className="text-stone-900">Teil C:</strong> Aufgaben für Personen mit besonderen
                Brandschutzaufgaben (z. B. Brandschutzhelfer, Evakuierungshelfer, Führungskräfte).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="plaene-abgrenzung">
        <div className="container-narrow">
          <SectionHeader
            id="plaene-abgrenzung"
            title="BSO, Fluchtplan und Feuerwehrplan"
            subtitle="Drei getrennte Dokumente."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>
              <strong className="text-stone-900">Brandschutzordnung (DIN 14096):</strong> Organisation und
              Verhalten – Pflichten, Alarmierung, Zuständigkeiten.
            </li>
            <li>
              <strong className="text-stone-900">Flucht- und Rettungsplan (ASR A2.3):</strong> Orientierung für
              Beschäftigte und Besucher, lagerichtig – Arbeitsschutz.
            </li>
            <li>
              <strong className="text-stone-900">Feuerwehrplan (DIN 14095):</strong> Einsatzunterlagen für die
              Feuerwehr – oft aus dem genehmigten Konzept vorgesehen.
            </li>
          </ul>
          <p className="mt-6 text-stone-600">
            Feuerlöscher und Brandschutzhelfer-Ausbildung folgen ASR A2.2 – wir binden beides in die BSO ein,
            wenn es zu Ihrem Betrieb passt.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="wann">
        <div className="container-narrow">
          <SectionHeader
            id="wann"
            title="Wann eine BSO nötig oder sinnvoll ist"
            subtitle="Neubau, Umbau und laufender Betrieb."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>Neuer Betrieb, neue Nutzung oder Erweiterung der Flächen</li>
            <li>Nach Umbau: geänderte Fluchtwege, Räume, Zuständigkeiten</li>
            <li>Auflage aus Behörde, Versicherer oder interner Compliance</li>
            <li>Vorbereitung von Unterweisungen, Brandschutzhelfer-Schulung, Evakuierungsübung</li>
            <li>Nach Brandschau oder Mängeln im organisatorischen Brandschutz</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="leistung-ablauf">
        <div className="container-narrow">
          <SectionHeader
            id="leistung-ablauf"
            title="Was wir liefern"
            subtitle="Von der Begehung bis zur Fortschreibung."
          />
          <ol className="list-decimal space-y-3 pl-5 text-stone-600">
            <li>Begehung: Nutzung, Fluchtwege, Sammelplätze, bestehende Dokumentation</li>
            <li>Erstellung Teil A, B, C – verständlich und umsetzbar für Ihren Betrieb</li>
            <li>Abstimmung mit Verantwortlichen; Einführung und Aushang Teil A</li>
            <li>Fortschreibung bei Umbau, Personaländerung oder neuen Auflagen</li>
          </ol>
          <p className="mt-6 text-stone-600">
            Ergänzend:{" "}
            <Link href="/brandschutzhelfer-ausbildung-koeln" className="text-brand-red font-medium hover:underline">
              Brandschutzhelfer-Ausbildung
            </Link>
            ,{" "}
            <Link href="/brandschutzkonzept-koeln" className="text-brand-red font-medium hover:underline">
              Brandschutzkonzept
            </Link>
            .
          </p>
        </div>
      </section>

      <RatgeberDeepenSection
        className="bg-stone-50 py-16 sm:py-20"
        links={[
          { href: "/ratgeber/escape-room-brandschutzordnung-fluchtplan", label: "BSO und Fluchtpläne (Beispiel Gewerbe)" },
          { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne aktualisieren – drei Ebenen" },
          { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Feuerlöscher und Betrieb (Gastronomie)" },
        ]}
      />

      <LandingFaqSection items={LANDING_FAQS["/brandschutzordnung-koeln"]} />

      <CTA
        title="Brandschutzordnung erstellen oder fortschreiben"
        description="Kurze Schilderung Ihres Objekts – wir sagen Ihnen, welche Teile nötig sind und wie der Ablauf aussieht."
        buttonLabel="Anfrage stellen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
