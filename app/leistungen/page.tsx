import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageGeoJsonLd } from "@/components/seo/PageGeoJsonLd";
import { LEISTUNGEN } from "@/content/leistungen";
import { LandingFaqSection } from "@/components/sections/LandingFaqSection";
import { SeoLandingLinks } from "@/components/sections/SeoLandingLinks";
import { LANDING_FAQS } from "@/content/landing-faqs";
import { SEO_LINKS } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Brandschutz Leistungen Köln | H&S+ Übersicht",
  absoluteTitle: true,
  description:
    "Brandschutz Leistungen Köln: Konzepte, Ordnungen, Pläne, Brandschutzhelfer & Beratung. Alle Leistungen von H&S+ – Erstberatung anfragen.",
  ogDescription:
    "Übersicht Brandschutz-Leistungen in Köln: von Konzept bis Schulung, praxisnah und rechtssicher.",
  keywords: [
    "Brandschutz Leistungen Köln",
    "Brandschutzkonzept Köln",
    "Brandschutzordnung Köln",
    "Feuerwehrplan Köln",
    "Brandschutzhelfer Ausbildung Köln",
  ],
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Start", path: "/" }, { name: "Leistungen", path: "/leistungen" }]} />
      <PageGeoJsonLd
        name="Leistungen Brandschutz Köln"
        path="/leistungen"
        description="Brandschutz-Leistungen in Köln: Brandschutzkonzepte, Brandschutzordnungen, Feuerwehrpläne, Brandschutzhelfer-Ausbildung und fachliche Begleitung."
        serviceName="Brandschutz-Leistungen in Köln"
        serviceType={[
          "Brandschutzberatung",
          "Brandschutzkonzept",
          "Brandschutzordnung",
          "Feuerwehrplan",
          "Brandschutzhelfer-Ausbildung",
        ]}
      />
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Leistungen
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Unser Leistungsspektrum im Brandschutz – von der Konzepterstellung bis zur
            Schulung und Begleitung vor Ort. Mehr zu den Anforderungen in der Region finden Sie unter{" "}
            <Link href="/brandschutz-koeln" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Brandschutz in Köln
            </Link>
            . Häufig gesuchte Themen:{" "}
            <Link href="/brandschutzkonzept-koeln" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Brandschutzkonzept Köln
            </Link>
            ,{" "}
            <Link href="/brandschutzordnung-koeln" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Brandschutzordnung Köln
            </Link>{" "}
            und{" "}
            <Link href="/brandschutzhelfer-ausbildung-koeln" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Brandschutzhelfer-Ausbildung Köln
            </Link>
            . Hintergründe zur BauO NRW finden Sie im{" "}
            <Link href="/ratgeber" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Ratgeber
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="leistungen-ueberblick">
        <div className="container-wide">
          <SectionHeader
            id="leistungen-ueberblick"
            title="Alle Brandschutz-Leistungen im Überblick"
            subtitle="Jede Leistung mit Kurzbeschreibung, Nutzen, Rechtsgrundlagen, Ablauf und Ergebnis."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">
            {SEO_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-lg border border-brand-red/20 bg-white px-4 py-3 text-brand-red font-medium hover:bg-stone-50 focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red"
                >
                  {label} →
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-12 space-y-12" role="list">
            {LEISTUNGEN.map((leistung) => (
              <li
                key={leistung.id}
                id={leistung.id}
                className="scroll-mt-24 rounded-xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">
                  {leistung.title}
                </h2>
                <p className="mt-3 text-stone-600">{leistung.description}</p>
                {leistung.seoHref ? (
                  <p className="mt-3">
                    <Link href={leistung.seoHref} className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
                      {leistung.seoLabel ?? "Mehr zu dieser Leistung in Köln"} →
                    </Link>
                  </p>
                ) : null}

                <h3 className="mt-6 font-semibold text-stone-900">Nutzen für Sie</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-600" role="list">
                  {leistung.nutzen.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>

                {leistung.rechtsgrundlagen && leistung.rechtsgrundlagen.length > 0 && (
                  <>
                    <h3 className="mt-6 font-semibold text-stone-900">Rechtliche Grundlagen</h3>
                    <p className="mt-2 text-stone-600">
                      {leistung.rechtsgrundlagen.join(", ")}
                    </p>
                  </>
                )}

                {leistung.ablauf && leistung.ablauf.length > 0 && (
                  <>
                    <h3 className="mt-6 font-semibold text-stone-900">Typischer Ablauf</h3>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 text-stone-600" role="list">
                      {leistung.ablauf.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ol>
                  </>
                )}

                <h3 className="mt-6 font-semibold text-stone-900">Ergebnis / Output</h3>
                <p className="mt-2 text-stone-600">{leistung.ergebnis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LandingFaqSection items={LANDING_FAQS["/leistungen"]} />
      <SeoLandingLinks className="border-t border-stone-200" />
      <p className="container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center text-stone-600 text-sm mb-8">
        Sie möchten mehr über uns erfahren?{" "}
        <Link href="/ueber-uns" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
          Über uns
        </Link>
        {" "}·{" "}
        <Link href="/brandschutz-koeln" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
          Brandschutz in Köln
        </Link>
      </p>
      <CTA
        title="Passende Leistung für Ihr Anliegen?"
        description="Wir beraten Sie gern unverbindlich – ob Konzept, Ordnung, Plan oder Schulung."
        buttonLabel="Erstberatung anfordern"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
