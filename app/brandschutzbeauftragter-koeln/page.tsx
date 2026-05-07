import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Brandschutzbeauftragter Köln | Externe Unterstützung",
  description:
    "Brandschutzbeauftragter in Köln: externe fachliche Unterstützung für Organisation, Unterweisung, Begehung und Dokumentation im vorbeugenden Brandschutz.",
  ogDescription:
    "Externe Unterstützung als Brandschutzbeauftragter in Köln - praxisnah, rechtssicher und passend zu Ihrem Betrieb.",
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
            .
          </p>
        </div>
      </section>
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
