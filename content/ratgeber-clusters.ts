/**
 * Ratgeber-Cluster für thematische interne Verlinkung (nicht immer dieselben 4 Artikel).
 */

export type RatgeberCluster = {
  id: string;
  label: string;
  slugs: string[];
};

export const RATGEBER_CLUSTERS: RatgeberCluster[] = [
  {
    id: "gastronomie",
    label: "Gastronomie & Gewerbe",
    slugs: [
      "imbiss-ladenlokal-nutzungsaenderung-koeln",
      "eilbegehung-brandschutz-restaurant-gewerbe-koeln",
      "feuerloescher-gastronomie-koeln",
      "umbau-nutzungsaenderung-brandschutz",
    ],
  },
  {
    id: "praxis",
    label: "Praxis & Medizin",
    slugs: [
      "arztpraxen-zusammenlegen-brandschutz-koeln",
      "praxis-umbau-brandschutz-koeln",
      "zwischenbescheid-brandschutz-bauamt-koeln",
    ],
  },
  {
    id: "umbau",
    label: "Umbau & Nutzungsänderung",
    slugs: [
      "umbau-nutzungsaenderung-brandschutz",
      "sprinkler-trockenbau-nutzungsaenderung-bauo-nrw",
      "sprinkler-rueckbau-bma-nutzungsaenderung-koeln",
      "bestandsschutz-technische-sanierung-bauo-nrw",
      "lagerhalle-buero-umnutzung-koeln",
      "teilsanierung-buero-brandschutz-koeln",
      "feuerschutztueren-bestand-ertuechtigung-koeln",
      "kraftstoff-lagerung-halle-garage-brandschutz",
      "technische-betriebsgebaeude-brandschutz-nrw",
    ],
  },
  {
    id: "betrieb",
    label: "Betrieb & Organisation",
    slugs: [
      "bestellung-brandschutzbeauftragter-nrw",
      "aufgaben-brandschutzbeauftragter-koeln",
      "externer-brandschutzbeauftragter-koeln",
      "escape-room-brandschutzordnung-fluchtplan",
      "feuerwehrplan-fluchtplaene-pflicht-koeln",
      "feuerloescher-gastronomie-koeln",
      "brandschau-koeln-feuerwehr",
      "eilbegehung-brandschutz-restaurant-gewerbe-koeln",
    ],
  },
  {
    id: "plaene-bso",
    label: "Pläne & Brandschutzordnung",
    slugs: [
      "escape-room-brandschutzordnung-fluchtplan",
      "feuerwehrplan-fluchtplaene-pflicht-koeln",
      "fluchtplan-feuerwehrplan-aktualisieren-gewerbe",
      "flucht-und-rettungswege-bauo-nrw",
      "aufgaben-brandschutzbeauftragter-koeln",
    ],
  },
  {
    id: "behoerde",
    label: "Behörde & Genehmigung Köln",
    slugs: [
      "bauaufsicht-unterlagen-koeln",
      "bauantrag-brandschutz-unterlagen-koeln",
      "feuerwehr-abstimmung-vor-bauamt-bauo-nrw",
      "brandschau-koeln-feuerwehr",
      "zwischenbescheid-brandschutz-bauamt-koeln",
      "zweiter-rettungsweg-dachfenster-bauo-nrw",
      "loeschwasser-hydranten-gewerbe-koeln",
    ],
  },
  {
    id: "baustelle",
    label: "Baustelle & Abnahme",
    slugs: [
      "fachbauleitung-brandschutz-baustelle-koeln",
      "abschottungen-durchbrueche-baustelle-koeln",
      "brandschutz-abnahme-nach-umbau-koeln",
    ],
  },
  {
    id: "nrw-grundlagen",
    label: "BauO NRW Grundlagen",
    slugs: [
      "gebaeudeklassen-brandschutz-bauo-nrw",
      "sonderbauten-brandschutz",
      "sonderbauten-geregelt-ungeregelt-bauo-nrw",
      "brandschutzkonzept-wann-noetig",
      "flucht-und-rettungswege-bauo-nrw",
    ],
  },
];

const slugToClusterId = new Map<string, string>();
for (const cluster of RATGEBER_CLUSTERS) {
  for (const slug of cluster.slugs) {
    if (!slugToClusterId.has(slug)) {
      slugToClusterId.set(slug, cluster.id);
    }
  }
}

/** Cluster-Peers für einen Artikel (ohne sich selbst), max. limit. */
export function getClusterPeerSlugs(currentSlug: string, limit = 4): string[] {
  const clusterId = slugToClusterId.get(currentSlug);
  if (!clusterId) return [];

  const cluster = RATGEBER_CLUSTERS.find((c) => c.id === clusterId);
  if (!cluster) return [];

  return cluster.slugs.filter((s) => s !== currentSlug).slice(0, limit);
}

export function getClusterLabel(currentSlug: string): string | undefined {
  const clusterId = slugToClusterId.get(currentSlug);
  if (!clusterId) return undefined;
  return RATGEBER_CLUSTERS.find((c) => c.id === clusterId)?.label;
}
