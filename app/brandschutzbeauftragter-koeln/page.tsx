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
  title: "Brandschutzbeauftragter Köln | Extern H&S+",
  absoluteTitle: true,
  description:
    "Brandschutzbeauftragter Köln: Begehungen, Unterweisung, Dokumentation & Maßnahmen – extern und praxisnah. Jetzt Erstberatung anfragen.",
  ogDescription:
    "Externer Brandschutzbeauftragter in Köln: Organisation und Umsetzung im Betrieb – passend zu Ihrer Branche.",
  keywords: [
    "Brandschutzbeauftragter Köln",
    "externer Brandschutzbeauftragter Köln",
    "Brandschutzbeauftragter Unternehmen",
  ],
  path: "/brandschutzbeauftragter-koeln",
});

export default function BrandschutzbeauftragterKoelnPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Brandschutzbeauftragter Köln", path: "/brandschutzbeauftragter-koeln" },
        ]}
      />
      <PageGeoJsonLd
        name="Brandschutzbeauftragter Köln"
        path="/brandschutzbeauftragter-koeln"
        description="Fachliche Unterstützung als externer Brandschutzbeauftragter in Köln für Organisation und Umsetzung im Betrieb."
        serviceName="Brandschutzbeauftragter in Köln"
        serviceType={["Brandschutzbeauftragter", "Brandschutzorganisation", "Unterweisung"]}
      />
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Brandschutzbeauftragter Köln</h1>
          <p className="mt-4 text-lg text-stone-600">
            Wir unterstützen Unternehmen in Köln beim Aufbau und der Pflege einer wirksamen Brandschutzorganisation -
            von Unterweisung und Begehung bis zur Dokumentation und Maßnahmenverfolgung.
          </p>
        </div>
      </section>
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="container-narrow">
          <SectionHeader
            title="Leistungsumfang in der Praxis"
            subtitle="Passend zu Branche, Größe und Gefährdungsprofil Ihres Betriebs."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>- Regelmäßige Begehungen und Maßnahmenableitung</li>
            <li>- Unterstützung bei Unterweisungen und Notfallorganisation</li>
            <li>- Abstimmung mit Verantwortlichen, Behörden und Versicherern</li>
            <li>- Dokumentation und Fortschreibung der Brandschutzunterlagen</li>
          </ul>
          <p className="mt-6 text-stone-600">
            Häufig ergänzt durch{" "}
            <Link href="/brandschutzordnung-koeln" className="text-brand-red font-medium hover:underline">
              Brandschutzordnungen
            </Link>{" "}
            und{" "}
            <Link href="/brandschutzhelfer-ausbildung-koeln" className="text-brand-red font-medium hover:underline">
              Brandschutzhelfer-Schulungen
            </Link>
            .             Ratgeber:{" "}
            <Link href="/ratgeber/bestellung-brandschutzbeauftragter-nrw" className="text-brand-red font-medium hover:underline">
              BSB bestellen
            </Link>
            ,{" "}
            <Link href="/ratgeber/aufgaben-brandschutzbeauftragter-koeln" className="text-brand-red font-medium hover:underline">
              Aufgaben des BSB
            </Link>
            ,{" "}
            <Link href="/ratgeber/umbau-nutzungsaenderung-brandschutz" className="text-brand-red font-medium hover:underline">
              Brandschutz bei Umbau
            </Link>
            .
          </p>
        </div>
      </section>
      <LandingFaqSection items={LANDING_FAQS["/brandschutzbeauftragter-koeln"]} />
      <CTA
        title="Externe Unterstützung als Brandschutzbeauftragter"
        description="Wir klären in einer Erstberatung, welche Leistungen für Ihren Betrieb sinnvoll sind."
        buttonLabel="Erstberatung starten"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
