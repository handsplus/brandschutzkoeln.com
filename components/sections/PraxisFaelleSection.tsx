import Link from "next/link";
import { PRAXISFAELLE } from "@/content/praxisfaelle";
import { SectionHeader } from "@/components/ui/SectionHeader";

const linkClass =
  "inline-flex items-center gap-1 text-sm font-medium text-brand-red hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red";

type PraxisFaelleSectionProps = {
  /** Kompaktere Darstellung auf Unterseiten */
  variant?: "default" | "compact";
  /** Hintergrundfarbe der Sektion */
  background?: "white" | "stone";
};

/**
 * Drei anonymisierte Praxisfälle – Trust ohne Mandatsdetails.
 */
export function PraxisFaelleSection({
  variant = "default",
  background = "white",
}: PraxisFaelleSectionProps) {
  const isCompact = variant === "compact";
  const bgClass = background === "stone" ? "bg-stone-50" : "bg-white";
  const cardSurface = background === "stone" ? "bg-white" : "bg-stone-50";

  return (
    <section
      className={`py-16 sm:py-20 ${bgClass} border-t border-stone-200`}
      aria-labelledby="praxisfaelle-heading"
      id="praxisfaelle"
    >
      <div className="container-wide">
        <SectionHeader
          id="praxisfaelle-heading"
          title="Aus der Praxis in Köln"
          subtitle={
            isCompact
              ? "Anonymisierte Fallbeispiele – so begleiten wir Genehmigungs- und Umbauvorhaben."
              : "Echte Abläufe aus abgeschlossenen Projekten: Ausgangslage, fachliche Begleitung und Ergebnis – ohne Objekt- oder Personennamen."
          }
          align="center"
        />

        <ul
          className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8"
          role="list"
        >
          {PRAXISFAELLE.map((fall) => (
            <li
              key={fall.id}
              className={`flex flex-col rounded-xl border border-stone-200 ${cardSurface} p-6 shadow-sm sm:p-7`}
            >
              <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-red ring-1 ring-stone-200">
                {fall.industry}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-stone-900">
                {fall.title}
              </h3>

              <dl className="mt-5 flex flex-1 flex-col gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-stone-900">Ausgangslage</dt>
                  <dd className="mt-1 text-stone-600 leading-relaxed">{fall.situation}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-stone-900">Unser Beitrag</dt>
                  <dd className="mt-1 text-stone-600 leading-relaxed">{fall.approach}</dd>
                </div>
                <div className="rounded-lg border border-brand-red/15 bg-white px-4 py-3">
                  <dt className="font-semibold text-stone-900">Ergebnis</dt>
                  <dd className="mt-1 text-stone-700 leading-relaxed">{fall.result}</dd>
                </div>
              </dl>

              <p className="mt-6 border-t border-stone-200 pt-4">
                <Link href={fall.ratgeberHref} className={linkClass}>
                  {fall.ratgeberLabel}
                  <span aria-hidden> →</span>
                </Link>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-stone-500 max-w-2xl mx-auto">
          Weitere Themen und Hintergründe finden Sie in unserem{" "}
          <Link
            href="/ratgeber"
            className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red"
          >
            Ratgeber zu BauO NRW und Brandschutz
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
