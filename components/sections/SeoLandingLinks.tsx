import Link from "next/link";
import { SEO_LINKS } from "@/lib/constants";

const linkClass =
  "text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red";

/** Interne Verlinkung zu allen SEO-Landingpages – für Linkjuice & Nutzerführung. */
export function SeoLandingLinks({ className = "" }: { className?: string }) {
  return (
    <section className={`py-12 bg-stone-50 ${className}`} aria-labelledby="seo-landing-links">
      <div className="container-narrow">
        <h2 id="seo-landing-links" className="text-lg font-semibold text-stone-900">
          Brandschutz-Leistungen in Köln
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2" role="list">
          {SEO_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClass}>
                {label} →
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-stone-600">
          Hintergründe zur BauO NRW im{" "}
          <Link href="/ratgeber" className={linkClass}>
            Ratgeber
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
