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
  title: "Brandschutzkonzept Köln | Erstellung H&S+",
  absoluteTitle: true,
  description:
    "Brandschutzkonzept und brandschutztechnische Stellungnahme in Köln und NRW: Neubau, Umbau, Nutzungsänderung, Sonderbau nach BauO NRW. Einreichfähige Unterlagen – Erstberatung unverbindlich.",
  ogDescription:
    "Brandschutzkonzept und Stellungnahme: von Bestandsaufnahme bis Abstimmung mit Bauaufsicht und Feuerwehr.",
  keywords: [
    "Brandschutzkonzept Köln",
    "brandschutztechnische Stellungnahme",
    "Brandschutz Konzept NRW",
    "Brandschutzkonzept erstellen",
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
        description="Erstellung von Brandschutzkonzepten und brandschutztechnischen Stellungnahmen für Neubau, Umbau und Nutzungsänderung nach BauO NRW."
        serviceName="Brandschutzkonzept und Stellungnahme"
        serviceType={["Brandschutzkonzept", "Brandschutztechnische Stellungnahme", "Behördenbegleitung"]}
      />

      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Brandschutzkonzept und Stellungnahme
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Schwerpunkt unserer Arbeit: brandschutztechnische Konzepte und Stellungnahmen nach BauO NRW und
            BauPrüfVO NRW – für Genehmigung, Umbau und Nutzungsänderung. Standort Köln und Umgebung; Projekte
            in NRW (z. B. Bonn, Rhein-Sieg, Bergisches Land) nach Absprache.
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="konzept-stn">
        <div className="container-narrow">
          <SectionHeader
            id="konzept-stn"
            title="Konzept, Stellungnahme oder Fortschreibung?"
            subtitle="Welcher Nachweis zu Ihrem Vorhaben passt."
          />
          <div className="space-y-4 text-stone-600">
            <p>
              <strong className="text-stone-900">Brandschutzkonzept (Vollnachweis):</strong> typisch bei
              genehmigungspflichtigen Neubauten, Umbauten, Nutzungsänderungen und Sonderbauten nach § 50 BauO NRW.
              Enthält Darstellung der brandschutztechnischen Lösung (Rettungswege, Brandabschnitte, Anlagentechnik,
              Löschwasser, ggf. Abweichungen § 69), Abstimmung mit Plänen und Anhängen für Feuerwehr und Bauaufsicht.
            </p>
            <p>
              <strong className="text-stone-900">Brandschutztechnische Stellungnahme (STN):</strong> bei klar
              abgegrenzten, überschaubaren Änderungen am Bestand – wenn die Behörde kein vollständiges Konzept verlangt.
              Beispiele: begrenzte Nutzungsanpassung, Einordnung einzelner Maßnahmen, interne Freigaben.
            </p>
            <p>
              <strong className="text-stone-900">Fortschreibung nach § 9 BauPrüfVO NRW:</strong> wenn sich Nutzung,
              Technik oder Schutzniveau ändert (z. B. Sprinkler stilllegen, Teilbereich umnutzen) – der bestehende
              Nachweis wird angepasst, nicht von vorn neu erfunden.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="wann-notwendig">
        <div className="container-narrow">
          <SectionHeader
            id="wann-notwendig"
            title="Typische Anlässe"
            subtitle="Wann Bauherren und Planer uns beauftragen."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>Neubau, Erweiterung oder Umbau von Gewerbe-, Verwaltungs- und Sonderbauten</li>
            <li>Nutzungsänderung (z. B. Lager zu Büro, Ladenlokal zu Gastronomie, Praxiserweiterung)</li>
            <li>Sonderbau nach § 50 BauO NRW – mit oder ohne eigenen SBauVO-Teil</li>
            <li>Zwischenbescheid oder Nachforderung der Bauaufsicht (unvollständiges Paket)</li>
            <li>Abstimmung mit Feuerwehr vor oder parallel zum Bauantrag</li>
            <li>Auflagen von Versicherer oder Fachbauleitung Brandschutz (§ 56 BauO NRW)</li>
          </ul>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20" aria-labelledby="ergebnis">
        <div className="container-narrow">
          <SectionHeader
            id="ergebnis"
            title="Was Sie von uns erhalten"
            subtitle="Nachvollziehbare Unterlagen – einheitlicher Planstand."
          />
          <ul className="space-y-3 text-stone-600" role="list">
            <li>Brandschutzkonzept oder STN mit Kap. Nutzung, baulicher und anlagentechnischer Brandschutz</li>
            <li>Abgestimmte Brandschutzpläne / Visualisierung (Geschosse, Schnitte, Brandabschnitte)</li>
            <li>Betriebsbeschreibung, Nutzerzahlen, Löschwassernachweis soweit erforderlich</li>
            <li>Dokumentation der Feuerwehrabstimmung und ggf. Versorger (Löschwasser)</li>
            <li>Begleitung bei Rückfragen der Bauaufsicht – fachlich, nicht anwaltlich</li>
          </ul>
          <p className="mt-6 text-stone-600">
            Flucht- und Rettungspläne nach ASR A2.3 sowie Feuerwehrpläne nach DIN 14095 sind ein eigenes Thema –
            sie ergänzen den bauordnungsrechtlichen Nachweis, ersetzen ihn aber nicht. Siehe{" "}
            <Link href="/leistungen#feuerwehr-fluchtplaene" className="text-brand-red font-medium hover:underline">
              Leistung Pläne
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="ablauf">
        <div className="container-narrow">
          <SectionHeader id="ablauf" title="Ablauf" subtitle="Strukturiert von der Anfrage bis zur Einreichung." />
          <ol className="list-decimal space-y-3 pl-5 text-stone-600">
            <li>Kurzbesprechung: Vorhaben, Pläne, Fristen, behördlicher Stand</li>
            <li>Bestandsaufnahme und Einordnung (GK, Sonderbau, erforderlicher Nachweis)</li>
            <li>Erstellung Konzept/STN/Fortschreibung inkl. Pläne und Text</li>
            <li>Abstimmung mit Ihnen, Architektur, ggf. Feuerwehr und Bauaufsicht</li>
            <li>Übergabe einreichungsfähiges Paket; bei Bedarf Nachträge nach Zwischenbescheid</li>
          </ol>
        </div>
      </section>

      <RatgeberDeepenSection
        className="bg-stone-50 py-16 sm:py-20"
        links={[
          { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Wann Konzept, wann Stellungnahme?" },
          { href: "/ratgeber/bauaufsicht-unterlagen-koeln", label: "Unterlagen für Bauaufsicht und Genehmigung" },
          { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau nach § 50 BauO NRW" },
          { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau und Nutzungsänderung" },
        ]}
      />

      <LandingFaqSection items={LANDING_FAQS["/brandschutzkonzept-koeln"]} />

      <CTA
        title="Konzept oder Stellungnahme für Ihr Projekt"
        description="Beschreiben Sie kurz Ihr Vorhaben – wir sagen Ihnen, welcher Nachweis sinnvoll ist und was wir dafür benötigen."
        buttonLabel="Jetzt unverbindlich anfragen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
