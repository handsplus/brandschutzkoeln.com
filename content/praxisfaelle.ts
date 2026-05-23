/**
 * Anonymisierte Praxisfälle für Trust-Sektionen (ohne Mandantennamen, Adressen, Aktenzeichen).
 */

export type Praxisfall = {
  id: string;
  /** Kurzes Branchen-Label */
  industry: string;
  title: string;
  situation: string;
  approach: string;
  result: string;
  ratgeberHref: string;
  ratgeberLabel: string;
};

export const PRAXISFAELLE: Praxisfall[] = [
  {
    id: "gastronomie-nutzungsaenderung",
    industry: "Gastronomie",
    title: "Restaurant in Köln – Nutzungsänderung nach Planabweichung",
    situation:
      "Bestehende Baugenehmigung für eine Schank- und Speisegaststätte (GK 5); die bauliche Abnahme war wegen Abweichungen beim Innenausbau in Leichtbauweise ausgesetzt.",
    approach:
      "Brandschutztechnische Neubewertung nur der geänderten Innenwände – als Ergänzung zum genehmigten Gesamtkonzept, mit Begehung und klarer Einordnung: keine Verschlechterung des Brandschutzes.",
    result:
      "Neue Baugenehmigung für die angepasste Ausführung – Stellungnahme Bestandteil der Genehmigung, Abnahme kann fortgeführt werden.",
    ratgeberHref: "/ratgeber/umbau-nutzungsaenderung-brandschutz",
    ratgeberLabel: "Umbau & Nutzungsänderung",
  },
  {
    id: "arztpraxis-zusammenlegung",
    industry: "Medizin / Praxis",
    title: "Gemeinschaftspraxis im Bestand – Zusammenlegung im 2. OG",
    situation:
      "Zwei benachbarte Arztpraxen in einem Wohn- und Geschäftshaus (GK 5) sollten zusammengeführt werden; die Bauaufsicht forderte brandschutztechnische Klärung.",
    approach:
      "Stellungnahme zu den durch die Zusammenlegung verursachten Änderungen – ergänzend zum bestehenden, genehmigten Gesamtkonzept des Objekts.",
    result:
      "Baugenehmigung nach fachlicher Nacharbeit im Genehmigungsverfahren – ohne Eingriff in Treppenhaus und zentrale Brandschutzanlagen.",
    ratgeberHref: "/ratgeber/arztpraxen-zusammenlegen-brandschutz-koeln",
    ratgeberLabel: "Arztpraxen zusammenlegen",
  },
  {
    id: "studio-sonderbau-sprinkler",
    industry: "Gewerbe / Sonderbau",
    title: "Besucherintensives Studio in der Untergeschoss-Ebene",
    situation:
      "Nutzungsänderung zu einem besucherintensiven Betrieb mit hoher Personenzahl, bestehende Sprinkleranlage der Tiefgarage, geplanter Trockenbau bis zur Decke.",
    approach:
      "Brandschutzkonzept nach § 50 BauO NRW, Abgleich Sprinklerwirkung und Trockenbau-Varianten, Klärung mit Bestand und Erschließung.",
    result:
      "Nachvollziehbare brandschutztechnische Grundlage für Genehmigung und Umsetzung – ohne pauschale Komplettsanierung der Sprinkleranlage.",
    ratgeberHref: "/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw",
    ratgeberLabel: "Sprinkler & Trockenbau",
  },
];
