import Link from "next/link";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { HomepageLeistungenTeaserItem } from "@/content/leistungen";

export interface LeistungsTeaserItem {
  title: string;
  description: string;
  href?: string;
}

export interface LeistungsTeaserProps {
  /** Zwei Hauptleistungen (Konzept, BSO) – groß oben */
  featured: HomepageLeistungenTeaserItem[];
  /** Ergänzende Leistungen – kompakter darunter */
  secondary?: HomepageLeistungenTeaserItem[];
  /** Flache Liste (Legacy) – wenn gesetzt, ohne featured/secondary-Layout */
  items?: LeistungsTeaserItem[];
  title?: string;
  subtitle?: string;
  moreHref?: string;
  moreLabel?: string;
  className?: string;
  /** Optionale Anker-ID der Sektion */
  sectionId?: string;
}

function TeaserCard({
  item,
  featured = false,
}: {
  item: HomepageLeistungenTeaserItem | LeistungsTeaserItem;
  featured?: boolean;
}) {
  const content = (
    <>
      <h3 className={cn("font-semibold text-stone-900", featured && "text-lg sm:text-xl")}>
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-stone-600">{item.description}</p>
      {item.href ? (
        <span className="mt-3 inline-flex items-center text-sm font-medium text-brand-red">
          Mehr erfahren
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      ) : null}
    </>
  );

  const cardClass = cn(
    "rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-brand-red focus-within:ring-offset-2",
    featured ? "border-brand-red/30 sm:p-8" : "border-stone-200"
  );

  if (item.href) {
    return (
      <Link href={item.href} className={cardClass}>
        {content}
      </Link>
    );
  }
  return <div className={cardClass}>{content}</div>;
}

/**
 * Startseiten-Teaser: zwei Hauptleistungen + ergänzende Leistungen, Link zur Übersicht.
 */
export function LeistungsTeaser({
  featured,
  secondary = [],
  items,
  title = "Leistungen im Überblick",
  subtitle = "Brandschutzkonzept, Stellungnahme und Brandschutzordnung – in Köln und NRW.",
  moreHref = "/leistungen",
  moreLabel = "Alle Leistungen ansehen",
  className,
  sectionId,
}: LeistungsTeaserProps) {
  const useLegacy = items && items.length > 0;

  return (
    <section
      id={sectionId}
      className={cn("py-16 sm:py-20 bg-stone-50 scroll-mt-24", className)}
      aria-labelledby="leistungen-teaser-title"
    >
      <div className="container-wide">
        <SectionHeader id="leistungen-teaser-title" title={title} subtitle={subtitle} align="center" />

        {useLegacy ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items!.map((item) => (
              <TeaserCard key={item.title} item={item} />
            ))}
          </div>
        ) : (
          <>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {featured.map((item) => (
                <TeaserCard key={item.href} item={item} featured />
              ))}
            </div>
            {secondary.length > 0 ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {secondary.map((item) => (
                  <TeaserCard key={item.href} item={item} />
                ))}
              </div>
            ) : null}
          </>
        )}

        {moreHref ? (
          <div className="mt-10 text-center">
            <Link
              href={moreHref}
              className="inline-flex items-center font-medium text-brand-red hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              {moreLabel}
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
