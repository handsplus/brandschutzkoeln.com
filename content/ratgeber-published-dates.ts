/**
 * Veröffentlichungsdaten Ratgeber: 11.03.2026 – 08.06.2026.
 * Artikel gleichmäßig über den Zeitraum verteilt; neue Beiträge am Ende der Reihenfolge.
 * Reihenfolge = redaktionelle Veröffentlichungsfolge (Grundlagen → Spezial → Batch 2).
 */
import type { RatgeberArticle } from "./ratgeber-types";

const START = new Date(2026, 2, 11);
const END = new Date(2026, 5, 8);

const PUBLICATION_ORDER: string[] = [
  "gebaeudeklassen-brandschutz-bauo-nrw",
  "sonderbauten-brandschutz",
  "sonderbauten-geregelt-ungeregelt-bauo-nrw",
  "brandschutzkonzept-wann-noetig",
  "flucht-und-rettungswege-bauo-nrw",
  "umbau-nutzungsaenderung-brandschutz",
  "bauaufsicht-unterlagen-koeln",
  "sprinkler-trockenbau-nutzungsaenderung-bauo-nrw",
  "feuerwehr-abstimmung-vor-bauamt-bauo-nrw",
  "escape-room-brandschutzordnung-fluchtplan",
  "zweiter-rettungsweg-dachfenster-bauo-nrw",
  "fluchtplan-feuerwehrplan-aktualisieren-gewerbe",
  "arztpraxen-zusammenlegen-brandschutz-koeln",
  "zwischenbescheid-brandschutz-bauamt-koeln",
  "imbiss-ladenlokal-nutzungsaenderung-koeln",
  "eilbegehung-brandschutz-restaurant-gewerbe-koeln",
  "feuerloescher-gastronomie-koeln",
  "teilsanierung-buero-brandschutz-koeln",
  "bestandsschutz-technische-sanierung-bauo-nrw",
  "feuerschutztueren-bestand-ertuechtigung-koeln",
  "brandschutz-abnahme-nach-umbau-koeln",
  "brandschau-koeln-feuerwehr",
  "fachbauleitung-brandschutz-baustelle-koeln",
  "lagerhalle-buero-umnutzung-koeln",
  "sprinkler-rueckbau-bma-nutzungsaenderung-koeln",
  "kraftstoff-lagerung-halle-garage-brandschutz",
  "abschottungen-durchbrueche-baustelle-koeln",
  "loeschwasser-hydranten-gewerbe-koeln",
  "feuerwehrplan-fluchtplaene-pflicht-koeln",
  "praxis-umbau-brandschutz-koeln",
  "technische-betriebsgebaeude-brandschutz-nrw",
  "bauantrag-brandschutz-unterlagen-koeln",
  "bestellung-brandschutzbeauftragter-nrw",
  "aufgaben-brandschutzbeauftragter-koeln",
  "externer-brandschutzbeauftragter-koeln",
  "brandschutzberatung-koeln-auflagen-risiken",
];

function toIso(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const MS_PER_DAY = 86400000;
const TOTAL_DAYS = Math.round((END.getTime() - START.getTime()) / MS_PER_DAY);

/** Gleichmäßige Verteilung von START bis END, jeder Tag höchstens ein Artikel. */
function buildPublicationDates(count: number): string[] {
  if (count <= 0) return [];
  if (count === 1) return [toIso(START)];

  const dates: string[] = [];
  const usedOffsets = new Set<number>();

  for (let i = 0; i < count; i++) {
    let offset = Math.round((i / (count - 1)) * TOTAL_DAYS);
    while (usedOffsets.has(offset) && offset < TOTAL_DAYS) offset++;
    if (usedOffsets.has(offset)) {
      for (offset = TOTAL_DAYS; offset >= 0; offset--) {
        if (!usedOffsets.has(offset)) break;
      }
    }
    usedOffsets.add(offset);
    const d = new Date(START);
    d.setDate(d.getDate() + offset);
    dates.push(toIso(d));
  }

  return dates;
}

const PUBLICATION_DATES = buildPublicationDates(PUBLICATION_ORDER.length);

/** Index i → Datum zwischen 11.03.2026 und 08.06.2026. */
export function ratgeberPublishedAtByIndex(index: number): string {
  return PUBLICATION_DATES[index] ?? PUBLICATION_DATES[PUBLICATION_DATES.length - 1]!;
}

const SLUG_TO_DATE = new Map<string, string>(
  PUBLICATION_ORDER.map((slug, i) => [slug, ratgeberPublishedAtByIndex(i)]),
);

export function getRatgeberPublishedAt(slug: string): string | undefined {
  return SLUG_TO_DATE.get(slug);
}

export function applyRatgeberPublishedDates(articles: RatgeberArticle[]): RatgeberArticle[] {
  return articles.map((article) => ({
    ...article,
    publishedAt: getRatgeberPublishedAt(article.slug) ?? article.publishedAt,
  }));
}

export const RATGEBER_PUBLICATION_ORDER = PUBLICATION_ORDER;

export const RATGEBER_PUBLICATION_RANGE = {
  start: toIso(START),
  end: toIso(END),
  totalDays: TOTAL_DAYS,
  articleCount: PUBLICATION_ORDER.length,
} as const;
