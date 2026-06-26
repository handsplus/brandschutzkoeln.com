import { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { SITE, CONTACT, LEGAL } from "@/lib/constants";
import { DatenschutzContent } from "@/components/legal/DatenschutzContent";

export const metadata: Metadata = createPageMetadata({
  title: "Impressum",
  description:
    "Impressum – H&S+ Brandschutz Köln. Angaben gemäß § 5 TMG. Verantwortlich: Health and Safety +.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Start", path: "/" }, { name: "Impressum", path: "/impressum" }]} />
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Impressum</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-50" aria-labelledby="impressum">
        <div className="container-narrow prose prose-stone max-w-none">
          <h2 id="impressum" className="text-2xl font-bold text-stone-900">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-2 text-stone-600">
            <strong>{SITE.name}</strong>
            <br />
            Inhaber: {LEGAL.owner}
            <br />
            {LEGAL.addressStreet}
            <br />
            {LEGAL.addressZip} {LEGAL.addressCity}
          </p>

          <h3 className="mt-8 text-lg font-semibold text-stone-900">Kontakt</h3>
          <p className="mt-2 text-stone-600">
            Telefon:{" "}
            <a href={`tel:${CONTACT.phoneTel}`} className="text-brand-red hover:underline">
              {CONTACT.phone}
            </a>
            <br />
            E-Mail:{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-brand-red hover:underline">
              {CONTACT.email}
            </a>
          </p>
          <p className="mt-4 text-stone-600">
            Für eine unverbindliche Beratung:{" "}
            <Link href="/kontakt" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Kontaktformular
            </Link>
            {" · "}
            <Link href="/datenschutz" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Datenschutzerklärung
            </Link>
            {" · "}
            <Link href="/" className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red">
              Startseite
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" aria-labelledby="datenschutz">
        <div className="container-narrow prose prose-stone max-w-none">
          <DatenschutzContent />
        </div>
      </section>
    </>
  );
}
