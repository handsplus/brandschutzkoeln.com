import Link from "next/link";

/**
 * Sichtbare Brücke Ratgeber → Leistungsseiten (SEO-Hebel laut GSC 10/2026):
 * Ratgeber holen Klicks, Leistungs-URLs stehen oft auf Position 30–50.
 */
const PRIMARY = [
  {
    href: "/brandschutzberatung-koeln",
    title: "Brandschutzberatung Köln",
    text: "Einschätzung zu Auflagen, Genehmigung und nächstem Schritt für Ihr Objekt.",
  },
  {
    href: "/brandschutzkonzept-koeln",
    title: "Brandschutzkonzept Köln",
    text: "Prüffähiges Konzept oder Stellungnahme nach BauO / BauPrüfVO NRW.",
  },
  {
    href: "/brandschutzbeauftragter-koeln",
    title: "Brandschutzbeauftragter",
    text: "Bestellung, Organisation und Unterstützung im laufenden Betrieb.",
  },
] as const;

const SECONDARY = [
  { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung" },
  { href: "/brandschutzhelfer-ausbildung-koeln", label: "Brandschutzhelfer-Ausbildung" },
  { href: "/leistungen", label: "Alle Leistungen" },
  { href: "/kontakt", label: "Kontakt / Erstgespräch" },
] as const;

export function RatgeberLeistungsBruecke() {
  return (
    <aside
      className="rounded-xl border-2 border-brand-red/25 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="ratgeber-leistungs-bruecke"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">
        Nächster Schritt
      </p>
      <h2 id="ratgeber-leistungs-bruecke" className="mt-2 text-xl font-bold text-stone-900 sm:text-2xl">
        Von der Einordnung zur Leistung
      </h2>
      <p className="mt-3 max-w-2xl text-stone-600">
        Dieser Ratgeber erklärt den Hintergrund. Wenn Sie eine konkrete Beratung, ein Konzept
        oder betriebliche Organisation brauchen, finden Sie hier die passenden Angebote von
        Health and Safety&nbsp;+ in Köln und NRW.
      </p>

      <ul className="mt-6 grid gap-4 sm:grid-cols-3" role="list">
        {PRIMARY.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex h-full flex-col rounded-lg border border-stone-200 bg-stone-50 p-4 transition-shadow hover:border-brand-red/40 hover:shadow-md focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              <span className="font-semibold text-stone-900">{item.title}</span>
              <span className="mt-2 flex-1 text-sm text-stone-600">{item.text}</span>
              <span className="mt-3 text-sm font-medium text-brand-red">Zur Leistungsseite →</span>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm" role="list">
        {SECONDARY.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-medium text-brand-red hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              {item.label} →
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
