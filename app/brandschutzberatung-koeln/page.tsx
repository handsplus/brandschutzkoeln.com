import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";
import { LandingFaqSection } from "@/components/sections/LandingFaqSection";
import { LANDING_FAQS } from "@/content/landing-faqs";

const linkClass =
  "text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red";

export const metadata: Metadata = createPageMetadata({
  title: "Brandschutzberatung Köln | H&S+ Erstberatung",
  absoluteTitle: true,
  description:
    "Brandschutzberatung Köln: kostenlose Erstberatung, Ist-Analyse und priorisierte Maßnahmen nach BauO NRW. Für Gewerbe, Immobilien und Umbau in Köln und NRW.",
  ogDescription:
    "Kostenlose Erstberatung Brandschutz in Köln – fachliche Einschätzung und nächste Schritte für Ihr Objekt.",
  keywords: [
    "Brandschutzberatung",
    "Brandschutzberatung Köln",
    "Brandschutz Berater Köln",
    "vorbeugender Brandschutz Köln",
    "Brandschutz Erstberatung Köln",
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
        description="Fachberatung im vorbeugenden Brandschutz in Köln mit kostenloser Erstberatung, Analyse und Priorisierung."
        serviceName="Brandschutzberatung in Köln"
        serviceType={["Brandschutzberatung", "Risikoanalyse", "Maßnahmenplan"]}
      />
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <p className="inline-flex rounded-full bg-brand-red/10 px-3 py-1 text-sm font-semibold text-brand-red">
            Kostenlose Erstberatung
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Brandschutzberatung Köln
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Wir ordnen Ihre Situation ein: Objekt, Nutzung, Dokumentation und offene Fragen zu Behörde oder Versicherer.
            Sie erhalten priorisierte Empfehlungen zu baulichem, technischem und organisatorischem Brandschutz – klar und
            umsetzbar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-redDark focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              Kostenlose Erstberatung anfragen
            </Link>
            <Link
              href="/ratgeber/brandschutzberatung-koeln-auflagen-risiken"
              className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 hover:bg-stone-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              Ratgeber: Auflagen vermeiden
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="wann-beratung">
        <div className="container-narrow">
          <SectionHeader
            id="wann-beratung"
            title="Wann eine Brandschutzberatung sinnvoll ist"
            subtitle="Immer sinnvoll – die Erstberatung ist kostenlos und unverbindlich."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>
              <strong className="text-stone-900">Planung:</strong> Neubau, Umbau oder Nutzungsänderung – wenn unklar
              ist, was als Nächstes nötig ist
            </li>
            <li>
              <strong className="text-stone-900">Behördenpost:</strong> Zwischenbescheid, Auflagen oder Nachforderungen
              – Fristen und Prioritäten sortieren
            </li>
            <li>
              <strong className="text-stone-900">Bestand:</strong> fehlende oder veraltete Unterlagen, vor einer
              Investition oder Brandschutzbegehung
            </li>
            <li>
              <strong className="text-stone-900">Versicherer oder Vermieter:</strong> wenn Nachweise oder Maßnahmen
              verlangt werden
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <SectionHeader
            title="Was Sie aus der Beratung mitnehmen"
            subtitle="Klare Prioritäten statt allgemeiner Hinweise."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>Einordnung von Ist-Stand, Nutzung und Genehmigungslage</li>
            <li>Priorisierte Maßnahmen mit Aufwand-Nutzen-Einschätzung</li>
            <li>Empfehlungen zu Organisation, Schulung und Dokumentation</li>
            <li>Konkrete nächste Schritte mit Behörden, Feuerwehr oder Versicherern</li>
          </ul>
          <p className="mt-6 text-stone-600">
            Ausführlich im Ratgeber{" "}
            <Link href="/ratgeber/brandschutzberatung-koeln-auflagen-risiken" className={linkClass}>
              Brandschutzberatung: Auflagen vermeiden
            </Link>
            . Hintergründe zur BauO NRW:{" "}
            <Link href="/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw" className={linkClass}>
              Gebäudeklassen
            </Link>
            ,{" "}
            <Link href="/ratgeber/umbau-nutzungsaenderung-brandschutz" className={linkClass}>
              Umbau & Nutzungsänderung
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="erstberatung-ablauf">
        <div className="container-narrow">
          <SectionHeader
            id="erstberatung-ablauf"
            title="So läuft die kostenlose Erstberatung"
            subtitle="Unverbindlich – per Formular, Telefon oder WhatsApp."
          />
          <ol className="mt-2 space-y-4 text-stone-600" role="list">
            <li>
              <strong className="text-stone-900">1. Anfrage:</strong> Sie schildern Objekt, Nutzung und Anliegen – kurz
              reicht für den Einstieg.
            </li>
            <li>
              <strong className="text-stone-900">2. Einschätzung:</strong> Wir melden uns mit fachlicher Einordnung und
              den nächsten Schritten.
            </li>
            <li>
              <strong className="text-stone-900">3. Entscheidung bei Ihnen:</strong> Tiefergehende Beratung oder
              Folgeleistungen nur, wenn Sie das wünschen – kein automatischer Konzeptauftrag.
            </li>
          </ol>
          <p className="mt-6 text-sm text-stone-500">
            Bei Bedarf begleiten wir Sie weiter – z. B. mit{" "}
            <Link href="/brandschutzkonzept-koeln" className={linkClass}>
              Brandschutzkonzept
            </Link>
            ,{" "}
            <Link href="/brandschutzordnung-koeln" className={linkClass}>
              Brandschutzordnung
            </Link>{" "}
            oder als{" "}
            <Link href="/brandschutzbeauftragter-koeln" className={linkClass}>
              externer Brandschutzbeauftragter
            </Link>
            .
          </p>
        </div>
      </section>

      <LandingFaqSection items={LANDING_FAQS["/brandschutzberatung-koeln"]} />
      <CTA
        title="Kostenlose Erstberatung anfragen"
        description="Fachliche Einschätzung und konkrete nächste Schritte für Ihr Objekt oder Unternehmen – unverbindlich."
        buttonLabel="Jetzt anfragen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
