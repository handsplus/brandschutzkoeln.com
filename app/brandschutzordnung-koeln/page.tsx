import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Brandschutzordnung Köln | Teil A, B, C",
  description:
    "Brandschutzordnung in Köln erstellen oder aktualisieren: Teil A, B und C nach DIN 14096 für Unternehmen, Immobilien und Sondernutzungen.",
  ogDescription:
    "Professionelle Brandschutzordnung für Köln: klare Regeln für Verhalten im Brandfall, Verantwortlichkeiten und betriebliche Organisation.",
  keywords: [
    "Brandschutzordnung Köln",
    "Brandschutzordnung Teil A B C",
    "DIN 14096 Köln",
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
        description="Erstellung und Aktualisierung von Brandschutzordnungen nach DIN 14096 in Köln."
        serviceName="Brandschutzordnung in Köln"
        serviceType={["Brandschutzordnung", "DIN 14096", "Betrieblicher Brandschutz"]}
      />

      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Brandschutzordnung Köln</h1>
          <p className="mt-4 text-lg text-stone-600">
            Eine aktuelle Brandschutzordnung legt fest, wie sich Personen im Brandfall verhalten und wer welche
            Aufgaben übernimmt. Wir erstellen Teil A, B und C praxisgerecht für Ihren Betrieb.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="teile">
        <div className="container-narrow">
          <SectionHeader id="teile" title="Teil A, B und C verständlich umgesetzt" subtitle="DIN 14096 praxistauglich für den Alltag." />
          <ul className="space-y-4 text-stone-600" role="list">
            <li>
              <strong className="text-stone-900">Teil A:</strong> Verhalten im Brandfall für alle Personen im Gebäude
            </li>
            <li>
              <strong className="text-stone-900">Teil B:</strong> Pflichten und Maßnahmen für Beschäftigte
            </li>
            <li>
              <strong className="text-stone-900">Teil C:</strong> Aufgaben für Personen mit besonderen Brandschutzaufgaben
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="einsatz">
        <div className="container-narrow">
          <SectionHeader
            id="einsatz"
            title="Wann die Aktualisierung sinnvoll ist"
            subtitle="Nicht nur bei Neubau, sondern auch bei Veränderungen im Betrieb."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>- Nach Umbauten, Flächenveränderungen oder neuer Nutzung</li>
            <li>- Bei geänderten Fluchtwegen, Meldewegen oder Zuständigkeiten</li>
            <li>- Nach behördlichen Hinweisen oder Brandschau</li>
            <li>- Zur Vorbereitung von Unterweisungen und Übungen</li>
          </ul>
          <p className="mt-6 text-stone-600">
            Passend dazu bieten wir auch{" "}
            <Link href="/brandschutzhelfer-ausbildung-koeln" className="text-brand-red font-medium hover:underline">
              Brandschutzhelfer-Ausbildung in Köln
            </Link>{" "}
            an.
          </p>
        </div>
      </section>

      <CTA
        title="Brandschutzordnung in Köln erstellen lassen"
        description="Wir prüfen Ihren Bedarf und erstellen eine rechtssichere, verständliche und umsetzbare Brandschutzordnung."
        buttonLabel="Beratung anfragen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
