import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { DatenschutzContent } from "@/components/legal/DatenschutzContent";

export const metadata: Metadata = createPageMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung – H&S+ Brandschutz Köln. Informationen zu Hosting, Kontaktformular und Ihren Rechten nach DSGVO.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Datenschutz", path: "/datenschutz" },
        ]}
      />
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Datenschutz
          </h1>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="datenschutz-h1">
        <div className="container-narrow prose prose-stone max-w-none">
          <DatenschutzContent />
        </div>
      </section>
    </>
  );
}
