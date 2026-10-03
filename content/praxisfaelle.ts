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
  "maisonette-zweiter-rettungsweg",
  "autohaus-nutzungsaenderung",
] as const;

export const PRAXISFAELLE: Praxisfall[] = [
  {
    id: "gastronomie-nutzungsaenderung",
    industry: "Gastronomie",
    title: "Restaurant in Köln – Nutzungsänderung nach Planabweichung",
    situation:
      "Bestehende Baugenehmigung für eine Schank- und Speisegaststätte mit bis zu 200 Gastplätzen (GK 5). Die bauliche Abnahme war wegen Abweichungen beim Erdgeschoss-Grundriss und Innenausbau in Leichtbauweise ausgesetzt.",
    approach:
      "Brandschutztechnische Neubewertung der geänderten Ausführung als Ergänzung zum genehmigten Gesamtkonzept, mit Begehung und klarer Einordnung: keine Verschlechterung des Brandschutzes.",
    result:
      "Baugenehmigung für die geänderte Bauausführung erteilt. Die brandschutztechnische Stellungnahme ist Anlage und damit Bestandteil der Genehmigung; die bauliche Abnahme kann fortgeführt werden.",
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
    id: "maisonette-zweiter-rettungsweg",
    industry: "Wohnen / Dachgeschoss",
    title: "Maisonette Köln: zweiter Rettungsweg oben",
    situation:
      "Maisonette-Wohnung im Dachgeschoss in Köln mit zwei Ebenen. Unten Treppenraum und Gauben, oben Dachflächenfenster. Zu klären war, ob der zweite Rettungsweg den Anforderungen der BauO NRW genügt.",
    approach:
      "Ortsbegehung mit Aufmaß und brandschutztechnische Stellungnahme zu § 33 und § 37 BauO NRW, einschließlich Erreichbarkeit der Anleiterstelle und Abgleich mit dem Runderlass zur Fenstergröße.",
    result:
      "Brandschutztechnische Stellungnahme als Gutachten für den Bauherrn bzw. Eigentümer: Zwei Rettungswege nur unten genügen für die obere Ebene nicht. Hinterhoffenster ohne Aufstellflächen sind ungeeignet; das Badfenster erfüllt § 37 Abs. 5 BauO NRW nicht.",
    ratgeberHref: "/ratgeber/maisonette-zweiter-rettungsweg-dachgeschoss-koeln",
    ratgeberLabel: "Maisonette 2. Rettungsweg",
  },
  {
    id: "autohaus-nutzungsaenderung",
    industry: "Gewerbe / Autohaus",
    title: "Gewerbehalle: Sporthalle zu Autohaus",
    situation:
      "Zweigeschossige Gewerbehalle in NRW: bisher Sport- und Trainingnutzung, beantragt Autohaus mit Ausstellung und Verkauf. Die Bauaufsicht forderte nach Brandschutzbeteiligung Nachbesserungen zu Gebäudeklasse, Betriebsbeschreibung, Trennung der Geschosse und Rettungswegen.",
    approach:
      "Brandschutztechnische Stellungnahme zu den Nachforderungspunkten mit Ortsbegehung, klarer Betriebsbeschreibung (Ausstellung ohne Werkstatt) und Bewertung der Außentreppen aus dem Obergeschoss.",
    result:
      "Baugenehmigung für die Nutzungsänderung erhalten. Die brandschutztechnische Stellungnahme mit Feststellungen zu Gebäudeklasse, Nutzung, Trennung der Geschosse, Rettungswegen und abwehrendem Brandschutz ist Bestandteil der Genehmigungsunterlagen.",
    ratgeberHref: "/ratgeber/autohaus-nutzungsaenderung-brandschutz-nrw",
    ratgeberLabel: "Sporthalle zu Autohaus",
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
