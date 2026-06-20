/**
 * 10.10.2024 – Brandabschnitte (BauO / SBauVO / BauPrüfVO NRW).
 * Quelle: Brandabschnitte_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BRANDABSCHNITTE: RatgeberArticle[] = [
  {
    slug: "brandabschnitte-bauo-sbauvo-nrw",
    title: "Brandabschnitte: wann das Gesetz sie verlangt – und wie sie sich von Rauchabschnitten unterscheiden",
    excerpt:
      "Brandabschnitt ist kein eigener Begriff mit pauschaler Höchstfläche – er entsteht durch feuerbeständige Brandwände nach § 30 BauO NRW. Abgrenzung zu Rauchabschnitt und Trennwand, SBauVO-Größen und Prüfkatalog.",
    metaTitle: "Brandabschnitte BauO NRW § 30 | H&S+",
    metaDescription:
      "Brandabschnitte NRW: § 30 Brandwände 40 m, 10.000 m³, SBauVO § 65 Verkauf, § 132 Garage. Abgrenzung Rauchabschnitt § 36. Gesetzlicher Prüfkatalog.",
    keywords: [
      "Brandabschnitt BauO NRW",
      "§ 30 BauO Brandwand",
      "innere Brandwand",
      "Brandabschnitt Größe",
      "Rauchabschnitt Abgrenzung",
      "Verkaufsstätte Brandabschnitt SBauVO",
    ],
    sections: [
      {
        id: "frage",
        title: "Was ist ein Brandabschnitt im Gesetz?",
        paragraphs: [
          "In Planunterlagen und Konzepten tauchen farbige Flächen als „Brandabschnitt 0“ oder „BA 1“ auf – im Landesrecht NRW ist das Ergebnis einer brandschutztechnischen Unterteilung, kein eigenständiger Bauteiltyp mit pauschaler Höchstgrundfläche für alle Gebäude.",
          "§ 30 Abs. 1 BauO NRW: Brandwände müssen als raumabschließende Bauteile zum Abschluss von Gebäuden (Gebäudeabschlusswand) oder zur Unterteilung von Gebäuden in Brandabschnitte (innere Brandwand) ausreichend lang die Brandausbreitung auf andere Gebäude oder Brandabschnitte verhindern.",
          "Ein Brandabschnitt ist damit das Ergebnis der Gebäudeunterteilung durch feuerbeständige Brandwände (bzw. zulässige Ersatzwände). Ziel: Begrenzung der Brandausbreitung (§ 14 BauO NRW). Die Größenbegrenzung folgt aus den Tatbeständen des § 30 Abs. 2 und aus sonderbauart-spezifischen Regeln der SBauVO – nicht aus einer einheitlichen Flächentabelle für alle Nutzungen.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Brandabschnitt, Rauchabschnitt, Trennwand – drei Ebenen",
        table: {
          caption: "Drei Abschottungsebenen im Gesetz",
          headers: ["Abschottung", "Zweck", "Norm", "Wand (Kern)", "Tür/Öffnung (Kern)"],
          rows: [
            [
              "Brandabschnitt",
              "Brandausbreitung (Feuer) stoppen",
              "§ 30 BauO; SBauVO § 65, § 132 Abs. 2",
              "Feuerbeständige Brandwand",
              "Feuerbeständig, dicht, selbstschließend (§ 30 Abs. 10)",
            ],
            [
              "Rauchabschnitt",
              "Rauchausbreitung entlang Rettungswegen begrenzen",
              "§ 36 Abs. 3 BauO; SBauVO § 132 Abs. 1",
              "Rauchabschnitts-Abschluss bis Rohdecke (nicht zwingend Brandwand)",
              "Nichtabschließbar, rauchdicht, selbstschließend (Flur)",
            ],
            [
              "Trennwand",
              "Brandausbreitung zwischen Räumen/Nutzungseinheiten",
              "§ 29 BauO",
              "Feuerhemmend bis feuerbeständig",
              "Feuerhemmend, dicht, selbstschließend (§ 29 Abs. 5)",
            ],
          ],
        },
        paragraphs: [
          "Ein notwendiger Flur kann durch Rauchabschnittswände unterteilt sein (max. 30 m), ohne dass damit ein Brandabschnitt nach § 30 entsteht. Umgekehrt kann ein Gebäude in Brandabschnitte unterteilt sein, ohne dass jeder Flurabschnitt gleichzeitig ein Rauchabschnitt nach § 36 ist. Beide Systeme können nebeneinander wirksam werden.",
          "Rauchabschnitte im Flur: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw). Türen: [Brandschutztüren](/ratgeber/tuerarten-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "paragraph-30",
        title: "§ 30 BauO NRW – wann Brandwände nötig sind",
        paragraphs: [
          "Brandwände sind erforderlich: (1) als Gebäudeabschlusswand an der Nachbargrenze (mit Ausnahmen und Abstandsregeln im Wortlaut), (2) als innere Brandwand zur Unterteilung ausgedehnter Gebäude in Abständen von nicht mehr als 40 m, (3) als innere Brandwand zur Unterteilung landwirtschaftlich oder vergleichbar genutzter Gebäude in Brandabschnitte von nicht mehr als 10.000 m³ Brutto-Rauminhalt, (4) als Gebäudeabschluss- und innere Brandwand zwischen Wohn- und landwirtschaftlich genutzten Gebäudeteilen.",
          "Gemeinsame Brandwände sind zulässig. In den Fällen Nr. 2 und 3 können größere Abstände gestattet werden, wenn die Nutzung es erfordert und Bedenken wegen des Brandschutzes nicht bestehen (§ 30 Abs. 2 Satz 3) – behördliche Einzelfallentscheidung, ggf. mit § 69 BauO NRW.",
          "Brandwände müssen feuerbeständig sein und aus nichtbrennbaren Baustoffen bestehen (§ 30 Abs. 3 Satz 1).",
        ],
        table: {
          caption: "§ 30 Abs. 2 – Tatbestände und Größenlogik",
          headers: ["Tatbestand", "Art", "Größen-/Abstandsregel", "Besonderheit"],
          rows: [
            ["Nr. 1 – Nachbargrenze", "Gebäudeabschlusswand", "Abstand < 2,50 m zur Nachbargrenze (Ausnahmen im Gesetz)", "Trennung zum Nachbargrundstück"],
            ["Nr. 2 – Ausgedehnte Gebäude", "Innere Brandwand", "Alle 40 m (größere Abstände nach Satz 3 möglich)", "Typisch große Industrie-/Gewerbebauten ohne SBauVO-Sonderregel"],
            ["Nr. 3 – Landwirtschaft", "Innere Brandwand", "Max. 10.000 m³ Brutto-Rauminhalt je Abschnitt", "Rauminhaltsmaß statt Längenmaß"],
            [
              "Nr. 4 – Wohnen/Landwirtschaft",
              "Gebäudeabschluss- und innere Brandwand",
              "Funktionale Trennung der Nutzungsteile",
              "Ersatz feuerhemmende Wand wenn landw. Teil ≤ 2.000 m³ (Abs. 4 Satz 2)",
            ],
          ],
        },
      },
      {
        id: "ausfuehrung",
        title: "Ausführung: Ersatzwände, Dach, Versatz, Öffnungen",
        paragraphs: [
          "Ersatzwände anstelle von Brandwänden (§ 30 Abs. 3 Satz 2): GK 4 – hochfeuerhemmend unter mechanischer Beanspruchung; GK 1–3 – hochfeuerhemmende Wände oder Gebäudeabschlusswände mit bestimmter Schichtfolge. Bei Nr. 4 Abs. 2: feuerhemmende Wände zulässig, wenn Brutto-Rauminhalt des landwirtschaftlichen Teils ≤ 2.000 m³.",
          "Brandwände müssen bis zur Bedachung durchgehen und in allen Geschossen übereinander angeordnet sein. Geschossweise versetzte Wände nur, wenn alle Voraussetzungen des § 30 Abs. 4 Satz 2 erfüllt sind – u. a. feuerbeständige Decken ohne Öffnungen, feuerbeständige tragende Bauteile, feuerbeständige Außenwände im Versatzbereich.",
          "Dachabschluss § 30 Abs. 5: 0,30 m über die Bedachung oder feuerbeständige Auskragungsplatte 0,50 m; GK 1–3 mindestens bis unter die Dachhaut. Eck-Trennung § 30 Abs. 6: Abstand mindestens 3 m von der inneren Ecke (Ausnahmen bei Winkel > 120° oder öffnungsloser Außenwand).",
          "Öffnungen § 30 Abs. 10: in Brandwänden grundsätzlich unzulässig; in inneren Brandwänden nur in erforderlicher Zahl und Größe – Abschlüsse feuerbeständig, dicht und selbstschließend. Strenger als § 29 Abs. 5 (Trennwände: nur feuerhemmende Abschlüsse).",
        ],
      },
      {
        id: "sbauvo-verkauf",
        title: "SBauVO – Verkaufsstätten (§§ 64, 65, 73)",
        paragraphs: [
          "§ 65 SBauVO NRW: Verkaufsstätten durch innere Brandwände in Brandabschnitte zu unterteilen. Fläche je Geschoss: mit SELT im EG max. 10.000 m², sonstige mit SELT max. 5.000 m², EG ohne SELT max. 3.000 m², sonstige ohne SELT max. 1.500 m² – wenn nicht mehr als drei Geschosse und Gesamtfläche aller Geschosse innerhalb eines Brandabschnitts max. 3.000 m².",
          "Mit SELT können Verkaufsstätten auch durch Ladenstraßen unterteilt werden (mindestens 10 m breit, Brandlastenfreihaltung 5 m u. a.). Öffnungen in inneren Brandwänden: feuerbeständige, dicht- und selbstschließende Abschlüsse mit Feststellanlagen bei Raucheinwirkung.",
          "§ 64 SBauVO: Lagerräume > 100 m² und Werkräume mit erhöhter Brandgefahr ohne SELT durch feuerbeständige Wände zu trennen; Abschnitte max. 500 m² – kleinere Abschnitte innerhalb von Lagern/Werkstätten, kumulativ zu § 65.",
          "§ 73 SBauVO: In jedem Brandabschnitt mindestens zwei getrennte Ausgänge, davon mindestens einer unmittelbar oder über eigene Außentreppe ins Freie.",
          "Vertiefung: [Verkaufsstätten Rettungswege](/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw).",
        ],
      },
      {
        id: "sbauvo-garagen",
        title: "SBauVO – Garagen (§ 132)",
        paragraphs: [
          "Geschlossene Großgaragen (außer automatische): feuerhemmende Wände aus nichtbrennbaren Baustoffen in Rauchabschnitte – Nutzfläche max. 5.000 m² (oberirdisch) bzw. 2.500 m² (sonst), verdoppelt mit SELT. Das sind Rauchabschnitte, keine Brandabschnitte nach § 30.",
          "Automatische Garagen: Brandwände in Brandabschnitte von höchstens 6.000 m³ Brutto-Rauminhalt. § 30 Abs. 2 Nr. 2 BauO ist auf Garagen nicht anzuwendbar.",
          "Hochhäuser und Versammlungsstätten haben in der SBauVO keinen eigenen Paragraphen „Brandabschnitte“ mit Flächenbegrenzung – maßgeblich § 30 (40-m-Regel bei ausgedehnten Gebäuden) und die Bauteilanforderungen der jeweiligen SBauVO-Teile. Industriebauwerke: § 30 Abs. 2 Nr. 2, ergänzt durch Sonderbau-Vorschriften nach § 50 BauO.",
        ],
      },
      {
        id: "konzept",
        title: "BauPrüfVO § 9 – Darstellung im Brandschutzkonzept",
        paragraphs: [
          "Bei großen Sonderbauten (§ 70 Abs. 2 BauO NRW) muss das Brandschutzkonzept u. a. das System der äußeren und inneren Abschottungen in Brandabschnitte beziehungsweise Brandbekämpfungsabschnitte sowie der Rauchabschnitte mit Angaben zur Feuerwiderstandsfähigkeit der Bauteile enthalten (BauPrüfVO NRW § 9).",
          "Brandbekämpfungsabschnitt ist ein Konzept-Begriff (BauPrüfVO § 9) – im Brandschutzkonzept zu dokumentieren, nicht identisch mit jedem Brandabschnitt nach § 30.",
          "Wer Konzepte aufstellt: [Brandschutzfachplaner-Rollen](/ratgeber/brandschutzfachplaner-rollen-bauo-nrw). Wann Konzept nötig: [Brandschutzkonzept wann nötig](/ratgeber/brandschutzkonzept-wann-noetig).",
        ],
      },
      {
        id: "groessen",
        title: "Übersicht: gesetzliche Größenbegrenzungen",
        paragraphs: [],
        table: {
          caption: "Brand- und Rauchabschnitte – Schwellen im Gesetz",
          headers: ["Gebäudeart / Tatbestand", "Art", "Größenbegrenzung", "Norm", "Bauteil"],
          rows: [
            ["Ausgedehnte Gebäude (allgemein)", "Brandabschnitt", "Innere Brandwand alle 40 m", "§ 30 Abs. 2 Nr. 2 BauO", "Feuerbeständige Brandwand"],
            ["Landwirtschaft/vergleichbar", "Brandabschnitt", "Max. 10.000 m³ Brutto-Rauminhalt", "§ 30 Abs. 2 Nr. 3 BauO", "Innere Brandwand"],
            ["Verkaufsstätte EG mit SELT", "Brandabschnitt", "Max. 10.000 m²/Geschoss; Gesamt max. 3.000 m²", "§ 65 SBauVO", "Innere Brandwand oder Ladenstraße"],
            ["Verkaufsstätte sonstig mit SELT", "Brandabschnitt", "Max. 5.000 m²/Geschoss; Gesamt max. 3.000 m²", "§ 65 SBauVO", "Innere Brandwand oder Ladenstraße"],
            ["Verkaufsstätte EG ohne SELT", "Brandabschnitt", "Max. 3.000 m²/Geschoss", "§ 65 SBauVO", "Innere Brandwand"],
            ["Verkaufsstätte sonstig ohne SELT", "Brandabschnitt", "Max. 1.500 m²/Geschoss", "§ 65 SBauVO", "Innere Brandwand"],
            ["Verkauf – Lager/Werkraum ohne SELT", "Abschnitt", "Max. 500 m² je Abschnitt", "§ 64 SBauVO", "Feuerbeständige Trennwand"],
            ["Geschlossene Großgarage (nicht automatisch)", "Rauchabschnitt", "5.000 / 2.500 m²; verdoppelt mit SELT", "§ 132 Abs. 1 SBauVO", "Feuerhemmende Wand"],
            ["Automatische Garage", "Brandabschnitt", "Max. 6.000 m³ Brutto-Rauminhalt", "§ 132 Abs. 2 SBauVO", "Brandwand"],
            ["Notwendiger Flur", "Rauchabschnitt", "Max. 30 m (Stichflur zum STR: 15 m)", "§ 36 Abs. 3 BauO", "Rauchdichter Abschluss"],
          ],
        },
      },
      {
        id: "nicht-im-gesetz",
        title: "Was das Gesetz nicht regelt",
        paragraphs: [],
        list: [
          "Legaldefinition „Brandabschnitt“ mit pauschaler Höchst-Grundfläche für alle Gebäudearten",
          "Praxisbezeichnungen wie „Brandabschnitt 0“ oder DIN-F30/F90-Klassen im Gesetzestext",
          "VV TB, DIN-Normen und Muster-Richtlinien",
          "IndBauR-Tabellen (technische Baubestimmung – separates Regelwerk)",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Brandabschnitte – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            ["1", "Ist das Gebäude „ausgedehnt“ im Sinne des § 30?", "§ 30 Abs. 2 Nr. 2", "Innere Brandwand spätestens alle 40 m"],
            ["2", "Landwirtschaftliche/vergleichbare Nutzung?", "§ 30 Abs. 2 Nr. 3, 4", "Max. 10.000 m³; ggf. Trennung Wohn-/Wirtschaftsteil"],
            ["3", "Verkaufsstätte SBauVO Teil 3?", "§ 65 SBauVO", "Eigene Flächengrenzen – nicht nur 40-m-Regel"],
            ["4", "Automatische Garage?", "§ 132 Abs. 2 SBauVO", "Brandabschnitte max. 6.000 m³; § 30 Abs. 2 Nr. 2 entfällt"],
            ["5", "Geschlossene Großgarage (nicht automatisch)?", "§ 132 Abs. 1 SBauVO", "Rauchabschnitte – nicht Brandabschnitte § 30"],
            ["6", "Feuerwiderstandsklasse der Abschottungswand?", "§ 30 Abs. 3", "Brandwand feuerbeständig; Ersatzwände GK-abhängig"],
            ["7", "Öffnungen in innerer Brandwand?", "§ 30 Abs. 10", "Nur erforderlich; Abschlüsse feuerbeständig, dicht, selbstschließend"],
            ["8", "Geschossweise versetzte Brandwand?", "§ 30 Abs. 4", "Nur wenn alle fünf Voraussetzungen erfüllt"],
            ["9", "Brandwand bis Dach geführt?", "§ 30 Abs. 5", "0,30 m über Bedachung oder Auskragungsplatte; GK 1–3 bis unter Dachhaut"],
            ["10", "Flur länger als 30 m?", "§ 36 Abs. 3", "Rauchabschnitte – nicht automatisch Brandabschnitt § 30"],
            ["11", "Großer Sonderbau – Konzept?", "§ 70; BauPrüfVO § 9", "System Brand-/Rauchabschnitte darstellen"],
            ["12", "Abgrenzung zu Trennwand § 29?", "§ 29 vs. § 30", "Trennwand = Raum/NE; Brandwand = Gebäude-/BA-Trennung"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst nur BauO NRW, SBauVO NRW und BauPrüfVO NRW zusammen – ohne VV TB, DIN-Normen oder IndBauR. Größere Abstände nach § 30 Abs. 2 Satz 3 und Abweichungen nach § 69 BauO NRW sind behördliche Einzelfallentscheidungen.",
          "Praxis zu T30-RS und Planungsfehlern: [Rauchabschnitt Praxis](/ratgeber/rauchabschnitt-t30-rs-praxis-bauo-nrw) – ergänzend, nicht als gesetzliche Gesamtübersicht. Industriehallen: [IndBauR](/ratgeber/industriebau-lagerhalle-indbaur-nrw).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/waende-notwendige-flure-bauo-nrw", label: "Rauchabschnitte im Flur" },
      { href: "/ratgeber/tuerarten-brandschutz-bauo-nrw", label: "Brandschutztüren" },
      { href: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw", label: "Verkaufsstätten" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
      { href: "/ratgeber/rauchabschnitt-t30-rs-praxis-bauo-nrw", label: "T30-RS Praxis" },
      { href: "/ratgeber/industriebau-lagerhalle-indbaur-nrw", label: "IndBauR Hallen" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "§ 69 Abweichungen" },
    ],
    faq: [
      {
        question: "Gibt es eine pauschale Höchstfläche für Brandabschnitte?",
        answer:
          "Nein in § 30 BauO für alle Gebäude. Maßgeblich sind Tatbestände: 40 m bei ausgedehnten Gebäuden, 10.000 m³ bei landwirtschaftlicher Nutzung, plus SBauVO-Sonderregeln (z. B. § 65 Verkauf 1.500–10.000 m² je Geschoss).",
      },
      {
        question: "Was ist der Unterschied zwischen Brand- und Rauchabschnitt?",
        answer:
          "Brandabschnitt (§ 30): feuerbeständige Brandwand stoppt Feuerübertragung. Rauchabschnitt (§ 36 Abs. 3): rauchdichte Abschlüsse im Flur begrenzen Rauch entlang Rettungswegen (max. 30 m). Beides kann parallel gelten.",
      },
      {
        question: "Alle wie viele Meter braucht eine innere Brandwand?",
        answer:
          "Bei ausgedehnten Gebäuden nach § 30 Abs. 2 Nr. 2: spätestens alle 40 m – größere Abstände nur nach behördlicher Gestattung (Satz 3). Verkaufsstätten folgen § 65 SBauVO mit Flächengrenzen.",
      },
      {
        question: "Reicht eine T30-RS-Tür für eine Brandwand?",
        answer:
          "§ 30 Abs. 10 verlangt in inneren Brandwänden feuerbeständige, dicht- und selbstschließende Abschlüsse – strenger als feuerhemmende Trennwandtüren nach § 29. T30-RS allein ist keine gesetzliche Kurzform für Brandwand-Abschlüsse.",
      },
      {
        question: "Was gilt in der Tiefgarage?",
        answer:
          "Geschlossene Großgaragen (nicht automatisch): Rauchabschnitte nach § 132 Abs. 1 SBauVO (feuerhemmende Wände). Automatische Garagen: Brandabschnitte mit Brandwänden max. 6.000 m³ (§ 132 Abs. 2).",
      },
      {
        question: "Ist eine Trennwand nach § 29 dasselbe wie eine Brandwand?",
        answer:
          "Nein. § 29 trennt Nutzungseinheiten und Räume innerhalb eines Geschosses (feuerhemmend bis feuerbeständig je Tatbestand). § 30 Brandwände unterteilen Gebäude in Brandabschnitte (feuerbeständig).",
      },
      {
        question: "Muss das im Brandschutzkonzept stehen?",
        answer:
          "Bei großen Sonderbauten (§ 70) ja – BauPrüfVO § 9 verlangt das System der Brand- und Rauchabschnitte mit Feuerwiderstandsfähigkeiten.",
      },
    ],
  },
];
