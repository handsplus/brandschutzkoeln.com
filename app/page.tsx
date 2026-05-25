import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { LeistungsTeaser } from "@/components/ui/LeistungsTeaser";
import { CTA } from "@/components/ui/CTA";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { PraxisFaelleSection } from "@/components/sections/PraxisFaelleSection";
import { getHomepageLeistungenTeaser } from "@/content/leistungen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqSection } from "@/components/sections/FaqSection";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { RatgeberDeepenSection } from "@/components/sections/RatgeberDeepenSection";
import { SITE } from "@/lib/constants";

const HAEFIG_GESUCHT_LINKS = [
  { href: "/leistungen", label: "Alle Leistungen" },
  { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
  { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung Köln" },
  { href: "/brandschutz-koeln", label: "Brandschutz in Köln" },
  { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme? (Ratgeber)" },
  { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung (Ratgeber)" },
  { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
  { href: "/brandschutzhelfer-ausbildung-koeln", label: "Brandschutzhelfer Köln" },
  { href: "/ratgeber", label: "Alle Ratgeber-Artikel" },
] as const;

export default function HomePage() {
  const { featured, secondary } = getHomepageLeistungenTeaser();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Start", path: "/" }]} />
      <FaqJsonLd />
      <Hero
        variant="dark"
        badges={[SITE.heroBadge1, SITE.heroBadge2]}
        title="Brandschutzkonzept und Brandschutzordnung in Köln"
        headlineLines={[
          { text: "Brandschutzkonzept und" },
          { text: "Brandschutzordnung in Köln", highlight: "Köln" },
        ]}
        description="Wir erstellen brandschutztechnische Konzepte und Stellungnahmen nach BauO NRW sowie Brandschutzordnungen nach DIN 14096 – in Köln und NRW."
        ctaLabel="Angebot anfragen"
        ctaHref="/kontakt"
        tertiaryCtaLabel="Kostenlose Erstberatung"
        tertiaryCtaHref="/kontakt"
        showContactStrip
        asH1
      />

      <LeistungsTeaser
        featured={featured}
        secondary={secondary}
        title="Leistungen im Überblick"
        subtitle="Konzept und Stellungnahme für Genehmigung und Umbau · Brandschutzordnung für Ihren Betrieb – in Köln und NRW."
      />

      <PraxisFaelleSection />

      <RatgeberDeepenSection
        className="py-16 sm:py-20 bg-white"
        links={[
          { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Wann Konzept, wann Stellungnahme?" },
          { href: "/ratgeber/bauaufsicht-unterlagen-koeln", label: "Unterlagen für Bauaufsicht und Genehmigung" },
          { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Fluchtplan, Feuerwehrplan, BSO – drei Ebenen" },
          { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau nach § 50 BauO NRW" },
        ]}
      />

      <section className="py-12 bg-stone-50 border-t border-stone-200" aria-labelledby="haeufig-gesucht">
        <div className="container-narrow">
          <SectionHeader
            id="haeufig-gesucht"
            title="Direkt zu Leistungen und Ratgeber"
            subtitle="Die wichtigsten Einstiege – ohne lange Suche."
            align="center"
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2" role="list">
            {HAEFIG_GESUCHT_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-lg border border-stone-200 bg-white px-4 py-3 text-brand-red font-medium hover:bg-stone-50 focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="vertrauen">
        <div className="container-wide">
          <SectionHeader
            id="vertrauen"
            title="Warum H&S+"
            subtitle="Fachlich, regional, mit Fokus auf Nachweise und betrieblichen Brandschutz."
            align="center"
          />
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-semibold text-stone-900">Konzept &amp; Ordnung</h3>
              <p className="mt-2 text-stone-600 text-sm">
                Brandschutzkonzepte und Stellungnahmen für Bauaufsicht und Feuerwehr; Brandschutzordnungen nach
                DIN 14096 – abgestimmt auf Nutzung und Fluchtwege.
              </p>
            </li>
            <li className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-semibold text-stone-900">BauO NRW &amp; Praxis</h3>
              <p className="mt-2 text-stone-600 text-sm">
                Genehmigung, Umbau, Sonderbau, behördliche Auflagen – mit nachvollziehbaren Unterlagen, nicht nur
                allgemeinen Hinweisen.
              </p>
            </li>
            <li className="rounded-xl border border-stone-200 bg-stone-50 p-6 sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-stone-900">Köln &amp; NRW</h3>
              <p className="mt-2 text-stone-600 text-sm">
                In Köln und NRW – Schwerpunkt Konzept, Stellungnahme und Brandschutzordnung.
              </p>
            </li>
          </ul>
          <p className="mt-8 text-center text-sm text-stone-600">
            <Link href="/ueber-uns" className="text-brand-red font-medium hover:underline">
              Über uns
            </Link>
            {" · "}
            <Link href="/kontakt" className="text-brand-red font-medium hover:underline">
              Kontakt
            </Link>
          </p>
        </div>
      </section>

      <ReviewsSection />

      <FaqSection />

      <CTA
        title="Erstberatung zu Konzept, Stellungnahme oder Brandschutzordnung"
        description="Kurz Ihr Vorhaben schildern – wir melden uns mit Einschätzung und den nächsten Schritten."
        buttonLabel="Jetzt anfragen"
        buttonHref="/kontakt"
        variant="accent"
      />
    </>
  );
}
