/**
 * Fünf anonymisierte Praxisfälle für Trust-Sektionen (ohne Mandantennamen, Adressen, Aktenzeichen).
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

export const PRAXISFAELLE_FEATURED_IDS = [
  "gastronomie-nutzungsaenderung",
  "arztpraxis-zusammenlegung",
  "studio-sonderbau-sprinkler",
] as const;

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
  {
    id: "imbiss-ladenlokal-nutzungsaenderung",
    industry: "Gastronomie / Gewerbe",
    title: "Ladenlokal in Köln – Umnutzung zum Imbiss",
    situation:
      "Ebenerdiges Ladenlokal (ca. 65 m²) sollte Imbiss mit Fritteuse und Holzkohlegrill werden – deutlich höhere Brandlast als im früheren Einzelhandel; Nutzungsänderung mit Eingriffen an Trennwänden und Küchentechnik.",
    approach:
      "Brandschutztechnische Stellungnahme zu Küchenbereichen, feuerhemmenden Trennwänden zum Nachbarn (§ 29 BauO NRW), Fluchtweg und technisch-organisatorischen Maßnahmen – ohne Sonderbau-Pflicht unter der Gaststätten-Schwelle.",
    result:
      "Genehmigungsfähiges Unterlagenpaket für die Bauaufsicht – Stellungnahme und Pläne auf einem Stand, ohne pauschales Voll-Brandschutzkonzept.",
    ratgeberHref: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln",
    ratgeberLabel: "Ladenlokal zum Imbiss",
  },
  {
    id: "buero-teilsanierung-bma",
    industry: "Gewerbe / Verwaltung",
    title: "Verwaltungsgebäude – Teilsanierung mit BMA-Neuplanung",
    situation:
      "Großes Bürogebäude (GK 5, Baujahr 1978): Umbau rund die Hälfte der BGF – Trockenbau, neue Türen, Technik und vollständige Erneuerung der Brandmeldeanlage; Nutzung blieb Büro/Verwaltung.",
    approach:
      "Brandschutztechnische Stellungnahme als Leitfaden für Architektur und TGA – Fluchtwege (ASR A2.3), Abschottungen, BMA-Konzept und Abgleich mit Sonderbau-Bestand; im Fall kein neues Behörden-Voll-BSK.",
    result:
      "Nachvollziehbare Nachweise für Sanierungsabschnitt und BMA-Abnahme – Pläne und Abschottungen auf GK-5-Niveau ohne pauschales Gesamt-Konzept.",
    ratgeberHref: "/ratgeber/teilsanierung-buero-brandschutz-koeln",
    ratgeberLabel: "Teilsanierung Büro",
  },
];
