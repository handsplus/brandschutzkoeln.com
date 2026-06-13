/**
 * Veröffentlichungsdaten Ratgeber.
 *
 * Bestehende Artikel (PUBLICATION_ORDER + 2026-Cluster): unverändert, März–Juni 2026.
 * Neue Artikel 2025: nur über PUBLICATION_2025_* – bestehende Slugs/Daten werden nicht angefasst.
 * Rhythmus: ca. 8 Artikel pro Monat (Jan–Apr 2025); ab Mai 2025 ca. 4 Artikel pro Monat (04., 11., 18., 25.).
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

/** Januar 2026 – Cluster Brandschadensanierung (VdS 2357). */
const JANUARY_2026_PUBLICATIONS: Record<string, string> = {
  "brandschadensanierung-ueberblick-vds-2357": "2026-01-04",
  "gefahrenbereiche-brandschadensanierung-vds-2357": "2026-01-08",
  "ablauf-brandschadensanierung-vds-2357": "2026-01-11",
  "aufgaben-auftraggeber-brandschadensanierung": "2026-01-15",
  "gefaehrdungsbeurteilung-sofortmassnahmen-brandschadensanierung": "2026-01-18",
  "arbeitssicherheitsplan-brandschadensanierung": "2026-01-22",
  "ausfuehrendes-unternehmen-brandschadensanierung-dguv": "2026-01-25",
  "entsorgung-schutzmassnahmen-brandschadensanierung": "2026-01-29",
};

/** Februar 2026 – Cluster Feuerlöscher & ASR A2.2. */
const FEBRUARY_2026_PUBLICATIONS: Record<string, string> = {
  "loeschmitteleinheiten-feuerloescher-arbeitsplatz-asr-a22": "2026-02-04",
  "brandklassen-loeschertypen-feuerloescher-din-en-2": "2026-02-09",
  "feuerloescher-pruefen-wartung-asr-a22": "2026-02-14",
  "feuerloescher-richtig-loeschen-technik": "2026-02-19",
  "feuerloescher-baustelle-asr-a22": "2026-02-26",
};

/** März 2026 – Cluster Prüffristen: DGUV 205-040 Grundlagen. */
const MARCH_2026_PUBLICATIONS: Record<string, string> = {
  "prueffristen-brandschutz-dguv-205-040-ueberblick": "2026-03-04",
  "wer-darf-brandschutzanlagen-pruefen": "2026-03-09",
  "wartung-inspektion-pruefung-brandschutz-din-31051": "2026-03-14",
  "pruefpflichten-sonderbauten-muster-pruefverordnung": "2026-03-19",
};

/** April 2026 – Cluster Prüffristen: Geräte-Fristen (DGUV-Zusatztabelle). */
const APRIL_2026_PUBLICATIONS: Record<string, string> = {
  "bma-prueffristen-brandmeldeanlage": "2026-04-04",
  "feuerschutzabschluesse-prueffristen-fstA": "2026-04-09",
  "rwa-entrauchung-prueffristen": "2026-04-14",
  "sprinkler-loeschanlagen-prueffristen": "2026-04-21",
};

/** Neue Ratgeber 2025 – ca. 8 Artikel/Monat; nächster Monat erst wenn der aktuelle voll ist (8/8). */
const ARTICLES_PER_MONTH_2025 = 8;

/** Januar 2025 – Slot 1/8 */
const JANUARY_2025_PUBLICATIONS: Record<string, string> = {
  "brandbegrenzungsdecken-lithiumbatterie": "2025-01-04",
  "co2-feuerloescher-raeume-erstickungsgefahr": "2025-01-08",
  "brandschutz-gemeinschaftsunterkuenfte": "2025-01-11",
  "alarmierung-evakuierung-betrieb": "2025-01-15",
  "brandschutzhelfer-ausbildung-anforderungen": "2025-01-18",
  "leichtschaum-loeschanlagen-personenschutz": "2025-01-22",
  "aerosol-loeschanlagen-personenschutz": "2025-01-25",
  "loeschgas-loeschanlagen-personenschutz": "2025-01-29",
};
const FEBRUARY_2025_PUBLICATIONS: Record<string, string> = {
  "selbstentzuendung-putzlappen-metallspane": "2025-02-04",
  "pulver-loeschanlagen-personenschutz": "2025-02-08",
  "betrieblicher-brandschutz-praxis-ueberblick": "2025-02-11",
  "heissarbeiten-brandwache-erlaubnisschein": "2025-02-15",
  "brandgase-rauch-brandfall": "2025-02-18",
  "brandursachen-betrieb-praevention": "2025-02-22",
  "batteriespeicher-lithium-ionen-brandgefahren": "2025-02-25",
  "sonderbau-anlagen-pruefung-maengel-nrw": "2025-02-28",
};
const MARCH_2025_PUBLICATIONS: Record<string, string> = {
  "fehlalarme-brandmeldeanlage-mehrfachsensor": "2025-03-04",
  "sprinkler-verzinkung-wasserstoffgefahr": "2025-03-08",
  "spezial-loeschanlagen-gefaehrdungsbeurteilung": "2025-03-11",
  "photovoltaik-brandrisiken-dach-anlage": "2025-03-15",
  "ladestation-stapler-brandgefahren": "2025-03-18",
  "versammlungsstaetten-betrieb-sbauvo-nrw": "2025-03-22",
  "feuerschutzabschluesse-bestand-nrw": "2025-03-25",
  "explosionsschutz-brandschutz-schnittstelle": "2025-03-29",
};
const APRIL_2025_PUBLICATIONS: Record<string, string> = {
  "industriebau-lagerhalle-indbaur-nrw": "2025-04-04",
  "pruefvo-nrw-wiederkehrende-pruefung-sonderbau": "2025-04-08",
  "trgs-800-brandschutz-gefahrstoffe-betrieb": "2025-04-11",
  "feuerungsanlagen-feuvo-nrw-betrieb": "2025-04-15",
  "e-fahrzeuge-tiefgarage-brandgefahren-fbfhb-024": "2025-04-18",
  "bauprodukte-ce-kennzeichnung-nrw": "2025-04-22",
  "schulen-schulbaurichtlinie-nrw": "2025-04-25",
  "pflegeeinrichtung-sonderbau-nrw": "2025-04-29",
};
const MAY_2025_PUBLICATIONS: Record<string, string> = {
  "mittelgrossgaragen-brandschutz-sbauvo-nrw": "2025-05-04",
  "hochhaus-brandschutz-sbauvo-nrw": "2025-05-11",
  "brandschutzkonzept-baupruefvo-nrw": "2025-05-18",
  "verkaufsstaetten-rettungswege-sbauvo-nrw": "2025-05-25",
};
const JUNE_2025_PUBLICATIONS: Record<string, string> = {
  "beherbergungsstaetten-hotel-sonderbau-nrw": "2025-06-04",
  "versammlungsstaetten-baulich-sbauvo-nrw": "2025-06-11",
  "genehmigungsfrei-garage-freischank-bauo-nrw": "2025-06-18",
  "feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw": "2025-06-25",
};
const JULY_2025_PUBLICATIONS: Record<string, string> = {
  "elektrische-betriebsraeume-sbauvo-nrw": "2025-07-04",
  "dguv-205-001-gefaehrdungsbeurteilung-brandschutz": "2025-07-11",
  "baupavo-nrw-bauarten-verwendbarkeitsnachweis": "2025-07-18",
  "kita-krankenhaus-sonderbau-ungeregelt-nrw": "2025-07-25",
};
const AUGUST_2025_PUBLICATIONS: Record<string, string> = {
  "mehrzweckhallen-sportstaetten-sbauvo-nrw": "2025-08-04",
  "hochhaus-betriebsvorschriften-sbauvo-nrw": "2025-08-11",
  "sonderbau-bestand-gebaeude-sbauvo-nrw": "2025-08-18",
  "gaststaette-sonderbau-ungeregelt-nrw": "2025-08-25",
};
const SEPTEMBER_2025_PUBLICATIONS: Record<string, string> = {
  "grossraumbuero-sonderbau-ungeregelt-nrw": "2025-09-04",
  "rauchabschnitt-t30-rs-praxis-bauo-nrw": "2025-09-11",
  "bma-brandfallsteuerung-aufzug-sbauvo-nrw": "2025-09-18",
  "loeschwasser-rueckhalt-konzept-nrw": "2025-09-25",
};
const OCTOBER_2025_PUBLICATIONS: Record<string, string> = {
  "sicherheitsbeleuchtung-rettungswege-bauo-nrw": "2025-10-04",
  "geeg-uvo-anlagentechnik-brandschutz-nrw": "2025-10-11",
  "fluktuationshaus-evakuierung-nrw": "2025-10-18",
  "gebaeudeklassen-grenzfaelle-nrw": "2025-10-25",
};
const NOVEMBER_2025_PUBLICATIONS: Record<string, string> = {
  "sportstadien-blockbildung-sbauvo-nrw": "2025-11-04",
  "brandsicherheitswache-veranstaltung-sbauvo-nrw": "2025-11-11",
  "brandschutznachweis-din-18230-nrw": "2025-11-18",
  "brandschutz-dokumentation-betrieb-nrw": "2025-11-25",
};
const DECEMBER_2025_PUBLICATIONS: Record<string, string> = {
  "feuerloescher-entsorgung-pfas-abfall": "2025-12-04",
  "hochhaus-entrauchung-sbauvo-nrw": "2025-12-11",
  "brandschutzuebung-betrieb-nrw": "2025-12-18",
  "wassergefaehrdende-stoffe-lager-lau-nrw": "2025-12-25",
};

const PUBLICATION_2025: Record<string, string> = {
  ...JANUARY_2025_PUBLICATIONS,
  ...FEBRUARY_2025_PUBLICATIONS,
  ...MARCH_2025_PUBLICATIONS,
  ...APRIL_2025_PUBLICATIONS,
  ...MAY_2025_PUBLICATIONS,
  ...JUNE_2025_PUBLICATIONS,
  ...JULY_2025_PUBLICATIONS,
  ...AUGUST_2025_PUBLICATIONS,
  ...SEPTEMBER_2025_PUBLICATIONS,
  ...OCTOBER_2025_PUBLICATIONS,
  ...NOVEMBER_2025_PUBLICATIONS,
  ...DECEMBER_2025_PUBLICATIONS,
};

/** Redaktionelle Aktualisierung – überschreibt die Verteilungsliste. */
const PUBLICATION_DATE_OVERRIDES: Record<string, string> = {
  "gebaeudeklassen-brandschutz-bauo-nrw": "2026-06-12",
  ...PUBLICATION_2025,
  ...JANUARY_2026_PUBLICATIONS,
  ...FEBRUARY_2026_PUBLICATIONS,
  ...MARCH_2026_PUBLICATIONS,
  ...APRIL_2026_PUBLICATIONS,
};

export function getRatgeberPublishedAt(slug: string): string | undefined {
  return PUBLICATION_DATE_OVERRIDES[slug] ?? SLUG_TO_DATE.get(slug);
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
