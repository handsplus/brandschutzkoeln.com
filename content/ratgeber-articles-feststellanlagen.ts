/**
 * 24.08.2026 – Feststellanlagen: Offenhalten von Brand-/Rauchschutztüren (NRW).
 * Quelle: Ausarbeitungen/Feststellanlagen_Offenhalten_BauO_SBauVO_NRW.html
 * Abgrenzung: Prüffristen bleiben in feuerschutzabschluesse-prueffristen-fstA.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_FESTSTELLANLAGEN: RatgeberArticle[] = [
  {
    slug: "feststellanlagen-offenhalten-brandschutz-nrw",
    title: "Feststellanlage: Wann Pflicht – und warum Keile an Brandschutztüren verboten sind",
    excerpt:
      "Selbstschließende Türen dauerhaft offen nur mit Feststellanlage. Was BauO/SBauVO verlangen, was § 65 Verkauf vorschreibt, was Keil und Kette kaputtmachen – getrennt von DIN-14677-Prüffristen.",
    metaTitle: "Feststellanlage: wann Pflicht? Keil verboten | H&S+",
    metaDescription:
      "Feststellanlage NRW: Offenhalten nur mit wirksamer Feststellung. § 65 SBauVO, selbstschließende Türen, Keil unzulässig. Bauart 1/2 und Prüfung verlinkt – Köln & NRW.",
    keywords: [
      "Feststellanlage",
      "Feststellanlagen",
      "Brandschutztür offenhalten",
      "Rauchschutztür Keil",
      "selbstschließende Tür",
      "DIN 14677",
      "FK für FstA",
      "Brandschutz Köln",
    ],
    sections: [
      {
        id: "kurz",
        title: "Was ist eine Feststellanlage?",
        paragraphs: [
          "Eine Feststellanlage hält einen selbstschließenden Feuerschutz- oder Rauchschutzabschluss im Normalbetrieb offen und gibt ihn bei Brand- oder Raucheinwirkung frei, sodass die Tür selbsttätig schließt.",
          "Ohne wirksame Feststellung widerspricht dauerhaftes Offenhalten dem Schutzziel der selbstschließenden Tür. Keil, Kette oder Kabelbinder sind kein Ersatz.",
          "Prüffristen und wer warten darf: [Feststellanlage prüfen](/ratgeber/feuerschutzabschluesse-prueffristen-fstA). Türqualitäten im Gesetz: [Türarten](/ratgeber/tuerarten-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "gesetz",
        title: "BauO: selbstschließend – nicht automatisch „FstA an jeder Tür“",
        paragraphs: [
          "BauO NRW und SBauVO verlangen an vielen Stellen dicht- und selbstschließende bzw. rauchdichte und selbstschließende Abschlüsse (u. a. §§ 29, 30, 35, 36 BauO).",
          "Die BauO schreibt nicht für jede selbstschließende Tür wörtlich „Feststellanlage Pflicht“. Sie verlangt die Schließfunktion. Wer die Tür dauerhaft offen braucht, muss das Schutzziel trotzdem erfüllen – praxisüblich und oft zulassungsbedingt nur über eine geeignete Feststellanlage.",
          "Ein typisches Ja-Beispiel: Im notwendigen Flur steht eine rauchdichte, selbstschließende Tür, und der Betrieb will sie aus betrieblichen Gründen offen halten. Dann braucht es eine wirksame Feststellanlage mit Freigabe bei Raucheinwirkung – kein Keil. Ein typisches Nein-Beispiel: Die Tür bleibt im Normalbetrieb geschlossen. Dann ist keine Feststellanlage nötig, weil nichts dauerhaft offengehalten wird.",
        ],
      },
      {
        id: "ausdruecklich",
        title: "Wo das Recht Feststellanlagen ausdrücklich nennt",
        paragraphs: [
          "Verkaufsstätten § 65 SBauVO: Öffnungen in inneren Brandwänden brauchen feuerbeständige, dicht- und selbstschließende Abschlüsse – und Feststellanlagen, die bei Raucheinwirkung selbsttätiges Schließen bewirken. Hier ist die Feststellanlage gesetzlich ausdrücklich.",
          "Schulbauten: SchulBauR NRW verlangt sinngemäß, selbstschließende Türen nur mit Feststellanlagen offenhalten, die bei Raucheinwirkung schließen; auch von Hand schließbar. Weitere Sonderbauten können Konzept, Genehmigung oder Betrieb ergänzen.",
          "Brandwand und Öffnungen: [Brandwände](/ratgeber/brandwaende-bauo-sbauvo-nrw), [Brandabschnitte](/ratgeber/brandabschnitte-bauo-sbauvo-nrw).",
        ],
      },
      {
        id: "erlaubt-verboten",
        title: "Erlaubt vs. verboten",
        paragraphs: [
          "Häufigster Mangel bei Begehungen und Brandschau: aufgekeilte RS-/Brandschutztüren – kurzfristig praktisch, brandschutzrechtlich ein Klassiker mit Frist.",
        ],
        table: {
          caption: "Offenhalten – was geht, was nicht",
          headers: ["Maßnahme", "Bewertung", "Kurzwhy"],
          rows: [
            [
              "Tür mit wirksamer Feststellanlage offen, Freigabe bei Rauch/Brand",
              "Zulässig (wenn vorgeschrieben/zugelassen)",
              "Schutzziel selbstschließend bleibt",
            ],
            [
              "Tür von Hand schließbar trotz Feststellung",
              "Erforderlich (typisch Zulassung / SchulBauR)",
              "Manuelle Schließung im Ernstfall",
            ],
            ["Keil, Kette, Kabelbinder, Möbel als Offenhalter", "Unzulässig", "Verhindert selbsttätiges Schließen"],
            [
              "Feststellung außer Betrieb, Tür trotzdem dauerhaft offen",
              "Unzulässig",
              "Keine wirksame Freigabe",
            ],
            [
              "Selbstschließende Tür im Normalbetrieb geschlossen",
              "Zulässig",
              "Keine Feststellanlage nötig",
            ],
          ],
        },
      },
      {
        id: "technik",
        title: "Bauart 1 und 2 (DIN 14677 – Orientierung, nicht BauO)",
        paragraphs: [
          "DIN 14677 regelt Instandhaltung von Feststellanlagen – das ist keine BauO-Rechtsquelle, aber für Betrieb und Wartung maßgeblich.",
          "Bauart 1: ohne Anbindung an eine Brandmeldeanlage (eigene Auslösung, z. B. Rauchmelder an der Tür) – jährliche Wartung durch FK für FstA. Bauart 2: mit BMA – FK für FstA und BMA-Qualifikation. Monatlich: Betreiber-Sichtkontrolle.",
          "Intervalle und Qualifikation ausführlich: [Feststellanlage prüfen](/ratgeber/feuerschutzabschluesse-prueffristen-fstA), [Wer darf prüfen](/ratgeber/wer-darf-brandschutzanlagen-pruefen).",
        ],
      },
      {
        id: "schnittstelle",
        title: "Tür, Melder, BMA, Umbau",
        paragraphs: [
          "Feststellanlage und Türabschluss müssen zusammenpassen (Zulassung aBG/abZ, Hersteller). Rauchauslösung örtlich und/oder über BMA – je nach Bauart.",
          "Nach Umbau (Bodenbelag, Renovierung) Schließfolge, Magnetlage und Freilauf prüfen – typische Störquellen. Verkauf § 65: Freigabe bei Raucheinwirkung.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Begehung und Planung",
          headers: ["Nr.", "Prüffrage", "Quelle", "Soll"],
          rows: [
            ["1", "Abschluss selbstschließend?", "BauO / SBauVO", "Nach Lage (TR, Flur, Brandwand …)"],
            ["2", "Dauerhaft offen gewünscht?", "Betrieb", "Nur mit Feststellanlage"],
            ["3", "Verkauf innere Brandwand?", "§ 65 SBauVO", "Feststellanlage bei Rauch ausdrücklich"],
            ["4", "Keil / Kette / Blockade?", "Schutzziel", "Sofort entfernen"],
            ["5", "Zulassung / aBG vorhanden?", "Zulassung", "Nachweis am Objekt"],
            ["6", "Bauart 1 oder 2?", "DIN 14677", "Wartungsqualifikation passend"],
            ["7", "Monatlich Betreiber / jährlich FK?", "DIN 14677", "Dokumentiert"],
            ["8", "Von Hand schließbar?", "Zulassung / SchulBauR", "Ja"],
          ],
        },
      },
      {
        id: "grenzen",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Schwerpunkt: Wann Offenhalten erlaubt ist und was das Gesetz ausdrücklich verlangt. Prüffristen und FK-Details: [Prüf-Ratgeber FstA](/ratgeber/feuerschutzabschluesse-prueffristen-fstA). DIN und Zulassung sind keine BauO-Paragraphen – im Konzept klar kennzeichnen.",
          "Bestand und Ertüchtigung: [Feuerschutztüren Bestand](/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerschutzabschluesse-prueffristen-fstA", label: "Feststellanlage prüfen" },
      { href: "/ratgeber/tuerarten-brandschutz-bauo-nrw", label: "Türarten BauO" },
      { href: "/ratgeber/brandwaende-bauo-sbauvo-nrw", label: "Brandwände" },
      { href: "/ratgeber/brandabschnitte-bauo-sbauvo-nrw", label: "Brandabschnitte" },
      { href: "/ratgeber/wer-darf-brandschutzanlagen-pruefen", label: "FK für FstA" },
      { href: "/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln", label: "Eilbegehung" },
      { href: "/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln", label: "Türen im Bestand" },
      { href: "/leistungen/brandschutzkonzept", label: "Brandschutzkonzept" },
    ],
    faq: [
      {
        question: "Darf eine Rauchschutztür dauerhaft offen stehen?",
        answer:
          "Nur mit wirksamer Feststellanlage in Betrieb – nicht mit Keil oder Kette. Sonst Verstoß gegen das Schutzziel selbstschließender Abschlüsse.",
      },
      {
        question: "Braucht jede selbstschließende Tür eine Feststellanlage?",
        answer:
          "Nein. Nur wenn sie dauerhaft offen gehalten werden soll – oder wenn eine Vorschrift (z. B. § 65 SBauVO Verkauf) sie ausdrücklich verlangt.",
      },
      {
        question: "Was ist der Unterschied zwischen selbstschließend und Feststellanlage?",
        answer:
          "Selbstschließend ist die Türpflicht. Die Feststellanlage ist die technische Lösung, offen zu halten, ohne diese Pflicht aufzugeben.",
      },
      {
        question: "Wann schreibt das Gesetz Feststellanlagen ausdrücklich vor?",
        answer:
          "Unter anderem in Verkaufsstätten bei Öffnungen in inneren Brandwänden (§ 65 SBauVO): Feststellanlagen, die bei Raucheinwirkung selbsttätiges Schließen bewirken.",
      },
      {
        question: "Wer darf Feststellanlagen warten?",
        answer:
          "FK für FstA nach DIN 14677 – bei Bauart 2 zusätzlich BMA-Qualifikation. Details im Ratgeber Feststellanlage prüfen.",
      },
      {
        question: "Reicht die monatliche Sichtkontrolle des Betreibers?",
        answer:
          "Nein. Sie ersetzt nicht die jährliche Wartung durch die Fachkraft für Feststellanlagen.",
      },
    ],
  },
];
