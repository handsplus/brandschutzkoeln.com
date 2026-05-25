import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { LeistungsTeaser } from "@/components/ui/LeistungsTeaser";
import { CTA } from "@/components/ui/CTA";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { PraxisFaelleSection } from "@/components/sections/PraxisFaelleSection";
import { getLeistungenTeaser } from "@/content/leistungen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqSection } from "@/components/sections/FaqSection";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { RatgeberDeepenSection } from "@/components/sections/RatgeberDeepenSection";
import { SITE } from "@/lib/constants";

export default function HomePage() {
  const teaserItems = getLeistungenTeaser();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Start", path: "/" }]} />
      <FaqJsonLd />
      <Hero
        variant="dark"
        badges={[SITE.heroBadge1, SITE.heroBadge2]}
        title="Brandschutz Köln für Ihr Unternehmen und Bauvorhaben"
        titleHighlight="für Ihr Unternehmen und Bauvorhaben"
        description={`Brandschutz beginnt mit Expertise: Professionelle Leistungen gemäß BauO NRW, ArbSchG und ASR A2.2 in Köln und Umgebung. Wir sorgen für Sicherheit, Rechtskonformität und einen reibungslosen Betrieb – als ${SITE.expertRolePlural} für Ihre fachliche Begleitung.`}
        ctaLabel="Angebot anfordern"
        ctaHref="/kontakt"
        secondaryCtaLabel="Unsere Leistungen"
        secondaryCtaHref="/leistungen"
        showContactStrip
        asH1
      />

      {/* Warum professioneller Brandschutz */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="warum-brandschutz">
        <div className="container-narrow">
          <SectionHeader
            id="warum-brandschutz"
            title="Warum professioneller Brandschutz unverzichtbar ist"
            align="center"
            subtitle="Rechtssicherheit, Personenschutz und Werterhalt – mit dem richtigen Partner an Ihrer Seite."
          />
          <div className="prose prose-stone mx-auto max-w-3xl text-stone-600">
            <p>
              Brandschutz ist gesetzliche Pflicht und unternehmerische Verantwortung zugleich.
              Die Bauordnung, der Arbeitsschutz und die Anforderungen der Feuerversicherer
              verlangen klare Konzepte, dokumentierte Abläufe und geschulte Mitarbeiter.
              Ein professioneller Brandschutzpartner unterstützt Sie dabei, alle Anforderungen
              zu erfüllen – ohne böse Überraschungen bei Begehungen, Versicherungen oder im
              Ernstfall. In Köln und Umgebung setzen wir genau dort an: mit Expertise,
              regionaler Kenntnis und dem Fokus auf Ihre Sicherheit. Informieren Sie sich über
              unsere <Link href="/leistungen" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">Leistungen</Link>, über{" "}
              <Link href="/brandschutz-koeln" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">Brandschutz in Köln</Link> oder
              {" "}<Link href="/kontakt" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">fordern Sie ein Angebot an</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Leistungen-Teaser */}
      <LeistungsTeaser
        items={teaserItems}
        moreHref="/leistungen"
        moreLabel="Alle Leistungen ansehen"
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

      <section className="py-12 bg-stone-50" aria-labelledby="haeufig-gesucht">
        <div className="container-narrow">
          <SectionHeader
            id="haeufig-gesucht"
            title="Häufig gesuchte Themen in Köln"
            subtitle="Leistungen und Ratgeber zu BauO NRW und Brandschutz."
            align="center"
          />
          <p className="mt-4 text-center">
            <Link href="/ratgeber" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Zum Ratgeber: BauO NRW &amp; Brandschutz →
            </Link>
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2" role="list">
            <li><Link href="/brandschutzberatung-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Brandschutzberatung Köln</Link></li>
            <li><Link href="/brandschutzkonzept-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Brandschutzkonzept Köln</Link></li>
            <li><Link href="/brandschutzordnung-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Brandschutzordnung Köln</Link></li>
            <li><Link href="/brandschutzhelfer-ausbildung-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Brandschutzhelfer Köln</Link></li>
            <li><Link href="/brandschutzbeauftragter-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Brandschutzbeauftragter Köln</Link></li>
            <li><Link href="/ratgeber/teilsanierung-buero-brandschutz-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Teilsanierung Büro (Ratgeber)</Link></li>
            <li><Link href="/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Sprinkler &amp; Trockenbau (Ratgeber)</Link></li>
            <li><Link href="/ratgeber/escape-room-brandschutzordnung-fluchtplan" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Escape Room &amp; BSO (Ratgeber)</Link></li>
            <li><Link href="/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Imbiss &amp; Nutzungsänderung (Ratgeber)</Link></li>
            <li><Link href="/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Eilbegehung Restaurant (Ratgeber)</Link></li>
            <li><Link href="/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Bestandsschutz TGA (Ratgeber)</Link></li>
            <li><Link href="/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Feuerschutztüren Bestand (Ratgeber)</Link></li>
            <li><Link href="/ratgeber/brandschau-koeln-feuerwehr" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Brandschau Köln (Ratgeber)</Link></li>
            <li><Link href="/ratgeber/lagerhalle-buero-umnutzung-koeln" className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-brand-red font-medium hover:bg-stone-100">Lagerhalle Umnutzung (Ratgeber)</Link></li>
          </ul>
        </div>
      </section>

      {/* Vertrauenselemente */}
      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="vertrauen">
        <div className="container-wide">
          <SectionHeader
            id="vertrauen"
            title="Ihr Partner für Brandschutz in Köln"
            subtitle="Erfahrung, Fachkompetenz und regionale Verankerung – dafür steht H&S+."
            align="center"
          />
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-stone-900">Erfahrung</h3>
              <p className="mt-2 text-stone-600">
                Langjährige Praxis in Brandschutzkonzepten, Brandschutzordnungen und
                Schulungen – für Gewerbe, Industrie, Büros, Hotels und Immobilien.
              </p>
            </li>
            <li className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-stone-900">Fachkompetenz</h3>
              <p className="mt-2 text-stone-600">
                BauO NRW, ArbSchG, ASR A2.2, DGUV und Vorgaben der Feuerversicherer –
                wir kennen die Regeln und setzen sie verständlich und umsetzbar um.
              </p>
            </li>
            <li className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-stone-900">Regionale Verankerung</h3>
              <p className="mt-2 text-stone-600">
                Köln und Umgebung sind unser Fokus. Wir kennen die örtlichen Behörden,
                typischen Anforderungen und unterstützen Sie vor Ort.
              </p>
            </li>
          </ul>
          <p className="mt-8 text-center text-sm text-stone-600">
            <Link href="/ueber-uns" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Mehr über uns erfahren
            </Link>
          </p>
        </div>
      </section>

      {/* Google-Bewertungen: 5 Sterne, Beispiel, Link zu weiteren Bewertungen */}
      <ReviewsSection />

      <FaqSection />

      <CTA
        title="Jetzt unverbindliches Angebot anfordern"
        description="Beschreiben Sie kurz Ihr Vorhaben – wir melden uns mit einer passenden Brandschutz-Lösung für Ihr Unternehmen."
        buttonLabel="Angebot anfordern"
        buttonHref="/kontakt"
        variant="accent"
      />
    </>
  );
}
