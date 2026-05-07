import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Brandschutzkonzept Köln | Erstellung & Begleitung",
  description:
    "Brandschutzkonzept in Köln erstellen lassen: rechtssichere Unterlagen für Neubau, Umbau und Nutzungsänderung nach BauO NRW - inklusive behördlicher Begleitung.",
  ogDescription:
    "Professionelles Brandschutzkonzept in Köln: von der Bestandsaufnahme bis zur einreichfähigen Dokumentation für Bauaufsicht, Feuerwehr und Versicherer.",
  keywords: [
    "Brandschutzkonzept Köln",
    "Brandschutz Konzept Köln",
    "Brandschutzkonzept erstellen Köln",
    "BauO NRW Brandschutzkonzept",
  ],
  path: "/brandschutzkonzept-koeln",
});

export default function BrandschutzkonzeptKoelnPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Brandschutzkonzept Köln", path: "/brandschutzkonzept-koeln" },
        ]}
      />
      <PageGeoJsonLd
        name="Brandschutzkonzept Köln"
        path="/brandschutzkonzept-koeln"
        description="Erstellung von Brandschutzkonzepten in Köln für Neubau, Umbau und Nutzungsänderung mit praxisnaher Umsetzung und behördlicher Begleitung."
        serviceName="Brandschutzkonzept in Köln"
        serviceType={["Brandschutzkonzept", "Brandschutzplanung", "Behördenbegleitung"]}
      />

      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Brandschutzkonzept Köln</h1>
          <p className="mt-4 text-lg text-stone-600">
            Ein belastbares Brandschutzkonzept schafft Planungssicherheit und ist oft Grundlage für Genehmigung,
            Umbau oder Nutzungsänderung. Wir erstellen nachvollziehbare Konzepte für Köln und Umgebung.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="wann-notwendig">
        <div className="container-narrow">
          <SectionHeader
            id="wann-notwendig"
            title="Wann ist ein Brandschutzkonzept erforderlich?"
            subtitle="Typische Fälle aus der Praxis in Köln."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>- Neubau oder Erweiterung von Gewerbe- und Sonderbauten</li>
            <li>- Nutzungsänderung (z. B. Büro zu Praxis, Lager zu Produktion)</li>
            <li>- Auflagen durch Bauaufsicht, Feuerwehr oder Versicherer</li>
            <li>- Sanierungs- und Bestandsprojekte mit neuen Anforderungen</li>
          </ul>
          <p className="mt-6 text-stone-600">
            Details zu weiteren Leistungen finden Sie auf der Seite{" "}
            <Link href="/leistungen" className="text-brand-red font-medium hover:underline">
              Leistungen
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="ablauf">
        <div className="container-narrow">
          <SectionHeader id="ablauf" title="So läuft die Erstellung ab" subtitle="Strukturiert, nachvollziehbar und umsetzbar." />
          <ol className="list-decimal space-y-3 pl-5 text-stone-600">
            <li>Bestandsaufnahme und Klärung der Zielanforderungen</li>
            <li>Abgleich mit BauO NRW, Nutzung und objektspezifischen Risiken</li>
            <li>Erstellung der Unterlagen inkl. Maßnahmen und Schutzzielen</li>
            <li>Unterstützung bei Rückfragen von Behörde, Feuerwehr oder Prüfstellen</li>
          </ol>
        </div>
      </section>

      <CTA
        title="Brandschutzkonzept für Ihr Projekt in Köln"
        description="Senden Sie uns Ihr Vorhaben - wir sagen Ihnen, welche Unterlagen sinnvoll und erforderlich sind."
        buttonLabel="Jetzt unverbindlich anfragen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
