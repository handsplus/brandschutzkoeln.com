/**
 * 20.08.2026 – Brandwände: Arten und Anforderungen (BauO / SBauVO NRW).
 * Quelle: Ausarbeitungen/Brandwaende_Arten_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BRANDWAENDE_ARTEN: RatgeberArticle[] = [
  {
    slug: "brandwaende-bauo-sbauvo-nrw",
    title: "Brandwand NRW: Arten, Gebäudeabschlusswand und innere Brandwand",
    excerpt:
      "Brandwand nach § 30 BauO NRW: Gebäudeabschlusswand vs. innere Brandwand, Ersatzwände, Dach, Öffnungen. Abgrenzung zu „Brandschutzwand“, Trennwand und Rauchabschnitt – für Planung in Köln und NRW.",
    metaTitle: "Brandwand NRW: Arten & § 30 BauO | H&S+",
    metaDescription:
      "Brandwand NRW erklärt: Gebäudeabschlusswand, innere Brandwand, Ersatzwände, 40 m, Öffnungen § 30 Abs. 10. Unterschied zu Trennwand und Rauchabschnitt – Köln & NRW.",
    keywords: [
      "Brandwand",
      "Brandwand NRW",
      "innere Brandwand",
      "Gebäudeabschlusswand",
      "§ 30 BauO NRW",
      "Brandschutzwand",
      "Brandabschnitt Brandwand",
      "Brandschutz Köln",
    ],
    sections: [
      {
        id: "kurz",
        title: "Was ist eine Brandwand – und was eine „Brandschutzwand“?",
        paragraphs: [
          "Eine Brandwand ist nach § 30 Abs. 1 BauO NRW ein raumabschließendes Bauteil, das zum Abschluss von Gebäuden (Gebäudeabschlusswand) oder zur Unterteilung in Brandabschnitte (innere Brandwand) die Brandausbreitung auf andere Gebäude oder Brandabschnitte ausreichend lang verhindert.",
          "„Brandschutzwand“ ist umgangssprachlich. Im Genehmigungsverfahren zählen die gesetzlichen Figuren: Brandwand (§ 30), Trennwand (§ 29), Rauchabschnittswände in notwendigen Fluren (§ 36). Wer die falsche Figur wählt, plant oft die falsche Tür- und Öffnungsqualität.",
          "Der Brandabschnitt ist das Ergebnis der Unterteilung – nicht dasselbe wie die Brandwand selbst. Vertiefung Abschnitte und Größen: [Brandabschnitte](/ratgeber/brandabschnitte-bauo-sbauvo-nrw).",
        ],
      },
      {
        id: "arten",
        title: "Die Arten im Überblick",
        paragraphs: [
          "Merksatz: Gebäudeabschlusswand = nach außen (Nachbar/Anbau). Innere Brandwand = nach innen in Brandabschnitte. Beide heißen im Gesetz Brandwände – die Art steuert Tatbestand und oft die Öffnungspraxis.",
        ],
        table: {
          caption: "Brandwand-Arten nach BauO NRW",
          headers: ["Art", "Funktion", "Typische Lage", "Norm"],
          rows: [
            [
              "Gebäudeabschlusswand",
              "Abschluss; Brandausbreitung zum Nachbargrundstück/-gebäude verhindern",
              "Grenze, Anbau",
              "§ 30 Abs. 1, Abs. 2 Nr. 1 und 4",
            ],
            [
              "Innere Brandwand",
              "Unterteilung innerhalb des Gebäudes in Brandabschnitte",
              "Durch das Gebäude, typisch alle Geschosse",
              "§ 30 Abs. 1, Abs. 2 Nr. 2–4",
            ],
            ["Gemeinsame Brandwand", "Eine Wand für mehrere Gebäude/Teile", "Grenzbebauung / Anbau", "§ 30 Abs. 2 Satz 2"],
            [
              "Ersatzwand",
              "Gesetzlich zulässige Abschwächung je Gebäudeklasse/Tatbestand",
              "Wie Brandwand, anderer Aufbau",
              "§ 30 Abs. 3 Satz 2",
            ],
            [
              "Geschossweise versetzte innere Wand",
              "Alternative zur durchgehenden inneren Brandwand",
              "Versatz Geschoss zu Geschoss",
              "§ 30 Abs. 4 Satz 2",
            ],
          ],
        },
      },
      {
        id: "wann",
        title: "Wann ist welche Brandwand erforderlich?",
        paragraphs: [
          "Prüflogik: (1) Nachbargrenze/Anbau → Gebäudeabschlusswand. (2) Ausgedehntes Gebäude → innere Brandwand alle ≤ 40 m. (3) Landwirtschaft/vergleichbar → innere Brandwand, Brandabschnitte ≤ 10.000 m³ Brutto-Rauminhalt. (4) Wohnen + Landwirtschaft → Abschluss- und/oder innere Brandwand. (5) Sonderbau → SBauVO prüfen.",
          "Grenzfall ja: Gewerbehalle 80 m Länge ohne SBauVO-Sonderregel – innere Brandwand spätestens alle 40 m, sofern nicht größere Abstände gestattet. Grenzfall nein: „feuerbeständige Trennwand“ zwischen zwei Büros im selben Geschoss – das ist § 29, keine innere Brandwand.",
        ],
        table: {
          caption: "§ 30 Abs. 2 – Tatbestände",
          headers: ["Tatbestand", "Art", "Maß / Regel", "Besonderheit"],
          rows: [
            [
              "Nr. 1 – Nachbargrenze",
              "Gebäudeabschlusswand",
              "An oder < 2,50 m zur Nachbargrenze (Ausnahmen im Gesetz)",
              "Kleine Gebäude ohne Aufenthaltsräume/Feuerstätten ≤ 50 m³ ausgenommen",
            ],
            [
              "Nr. 2 – Ausgedehnte Gebäude",
              "Innere Brandwand",
              "≤ 40 m Abstand",
              "Größere Abstände nach Satz 3 möglich (Behörde)",
            ],
            [
              "Nr. 3 – Landwirtschaft",
              "Innere Brandwand",
              "≤ 10.000 m³ Brutto-Rauminhalt je Brandabschnitt",
              "Rauminhaltsmaß; Satz 3 möglich",
            ],
            [
              "Nr. 4 – Wohnen/Landwirtschaft",
              "Abschluss- und innere Brandwand",
              "Funktionale Trennung der Nutzungsteile",
              "Ersatz feuerhemmende Wand, wenn landw. Teil ≤ 2.000 m³",
            ],
          ],
        },
      },
      {
        id: "feuerwiderstand",
        title: "Feuerwiderstand und Ersatzwände",
        paragraphs: [
          "Regel (§ 30 Abs. 3 Satz 1): Brandwände müssen auch unter zusätzlicher mechanischer Beanspruchung feuerbeständig sein und aus nichtbrennbaren Baustoffen bestehen.",
          "Ersatzwände (§ 30 Abs. 3 Satz 2): GK 4 bei Nr. 1–3 – hochfeuerhemmend unter mechanischer Beanspruchung; GK 1–3 – hochfeuerhemmende Wände oder spezielle Gebäudeabschlusswände (innen→außen / außen→innen gestaffelt). Bei Nr. 4 und landwirtschaftlichem Teil ≤ 2.000 m³: feuerhemmende Wände zulässig.",
          "Ersatzwand heißt nicht beliebige „Brandschutzwand“ – Tatbestand und Gebäudeklasse müssen passen und im Konzept klar benannt sein.",
        ],
      },
      {
        id: "dach-versatz",
        title: "Dach, Durchgang, Versatz, Ecke",
        paragraphs: [
          "Brandwände müssen bis zur Bedachung durchgehen und in allen Geschossen übereinander liegen (§ 30 Abs. 4). Geschossweise versetzte innere Wände nur, wenn alle Voraussetzungen des Abs. 4 Satz 2 erfüllt sind – u. a. feuerbeständige Decken ohne Öffnungen, feuerbeständige Unterstützung und Außenwände im Versatzbereich.",
          "Dachabschluss § 30 Abs. 5: 0,30 m über die Bedachung oder feuerbeständige Auskragungsplatte beiderseits 0,50 m; GK 1–3 mindestens bis unter die Dachhaut. Brennbare Dachteile dürfen nicht über die Brandwand hinweggeführt werden.",
          "Eck-Trennung § 30 Abs. 6: Abstand der Brandwand von der inneren Ecke mindestens 3 m – Ausnahmen bei Winkel > 120° oder öffnungsloser Außenwand auf 5 m (feuerbeständig bzw. bei GK 1–4 hochfeuerhemmend).",
        ],
      },
      {
        id: "oeffnungen",
        title: "Öffnungen und Abschlüsse",
        paragraphs: [
          "§ 30 Abs. 10: Öffnungen in Brandwänden sind unzulässig. In inneren Brandwänden nur in erforderlicher Zahl und Größe – Abschlüsse feuerbeständig, dicht und selbstschließend. Feuerbeständige Verglasungen in inneren Brandwänden ebenfalls nur begrenzt.",
          "Strenger als Trennwände (§ 29 Abs. 5: dort oft feuerhemmende Abschlüsse). Öffenbare Fenster in der Brandwand sind ein klassischer Mangel.",
          "Rechtsprechung und Nachbarschutz: [Glasbaustein vs. Fenster](/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw), [Fenstertausch](/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw), [Nachbarschutz](/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw). Türen: [Türarten](/ratgeber/tuerarten-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "abgrenzung",
        title: "Brandwand vs. Trennwand vs. Rauchabschnitt",
        paragraphs: [
          "Brandwand (§ 30) = Bauteil für Gebäudeabschluss oder Brandabschnitte. Brandabschnitt = Ergebnis der Unterteilung. Trennwand (§ 29) = Räume/Nutzungseinheiten im Geschoss. Rauchabschnitt (§ 36 Abs. 3) = Rauchbegrenzung, typisch im notwendigen Flur – nicht automatisch Brandwand.",
          "Ein Flur mit Rauchabschnitten (max. 30 m) erzeugt keinen Brandabschnitt nach § 30. Details Flur: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw).",
        ],
        table: {
          caption: "Vier Begriffe – nicht vermischen",
          headers: ["Begriff", "Kern", "Öffnung/Tür (Kern)", "Norm"],
          rows: [
            ["Brandwand", "Feuerbeständig, nichtbrennbar (oder Ersatz)", "Grundsätzlich unzulässig; innere: feuerbeständig, dicht, selbstschließend", "§ 30"],
            ["Brandabschnitt", "Ergebnis der Unterteilung", "—", "§ 30; SBauVO"],
            ["Trennwand", "Raum/NE im Geschoss", "Typisch feuerhemmend, dicht, selbstschließend", "§ 29"],
            ["Rauchabschnitt", "Rauchbegrenzung (z. B. Flur)", "Rauchdicht, selbstschließend", "§ 36 Abs. 3"],
          ],
        },
      },
      {
        id: "sbauvo",
        title: "SBauVO: Verkauf und Garage",
        paragraphs: [
          "Verkaufsstätten (§ 65 SBauVO): innere Brandwände mit eigenen Flächengrenzen; Öffnungen mit feuerbeständigen Abschlüssen und Feststellanlagen bei Raucheinwirkung; unter Voraussetzungen Ladenstraßen statt Brandwand.",
          "Automatische Garagen (§ 132 Abs. 2): Brandwände, Brandabschnitte max. 6.000 m³ Brutto-Rauminhalt; § 30 Abs. 2 Nr. 2 BauO gilt für Garagen nicht. Geschlossene Großgaragen (§ 132 Abs. 1): typisch Rauchabschnitte mit feuerhemmenden Wänden – nicht dasselbe wie Brandwand-Brandabschnitte.",
          "Im Brandschutzkonzept (BauPrüfVO § 9) sind äußere und innere Abschottungen in Brandabschnitte bzw. Brandbekämpfungsabschnitte sowie Rauchabschnitte darzustellen.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog Brandwand",
        paragraphs: [],
        table: {
          caption: "Planung und Nachweis",
          headers: ["Nr.", "Prüffrage", "Norm", "Soll"],
          rows: [
            ["1", "Gebäudeabschluss oder innere Unterteilung?", "§ 30 Abs. 1", "Art klar benennen"],
            ["2", "Welcher Tatbestand Abs. 2 Nr. 1–4?", "§ 30 Abs. 2", "Nachbar / 40 m / Landwirtschaft / Wohn+Landw."],
            ["3", "Volle Brandwand oder Ersatzwand?", "§ 30 Abs. 3", "Feuerbeständig+nichtbrennbar bzw. GK-Ersatz korrekt"],
            ["4", "Durchgehend bis Dach / übereinander?", "§ 30 Abs. 4", "Ja – oder Versatz mit allen Voraussetzungen"],
            ["5", "Dachabschluss 0,30 m / Platte / GK 1–3?", "§ 30 Abs. 5", "Erfüllt"],
            ["6", "Ecksituation ≥ 3 m?", "§ 30 Abs. 6", "Oder Ausnahme Winkel / öffnungslose Wand"],
            ["7", "Öffnungen?", "§ 30 Abs. 10", "Nur innere, begrenzt; Abschlüsse feuerbeständig"],
            ["8", "Verwechslung mit Trennwand / Rauchabschnitt?", "§ 29 / § 36", "Norm und Türqualität stimmen"],
            ["9", "Sonderbau Verkauf / Garage?", "SBauVO §§ 65, 132", "SBauVO-Regeln prüfen"],
            ["10", "Konzeptpflicht großer Sonderbau?", "BauPrüfVO § 9", "Abschottungen dargestellt"],
          ],
        },
      },
      {
        id: "grenzen",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Nur BauO NRW, SBauVO NRW und BauPrüfVO NRW – keine VV TB und keine DIN. Ersetzt kein Brandschutzkonzept und keine behördliche Entscheidung.",
          "Verwandt: [Brandabschnitte](/ratgeber/brandabschnitte-bauo-sbauvo-nrw), [Abweichung § 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw), [Beseitigungsverfügung](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandabschnitte-bauo-sbauvo-nrw", label: "Brandabschnitte" },
      { href: "/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw", label: "Glasbaustein / Fenster" },
      { href: "/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw", label: "Fenstertausch Brandwand" },
      { href: "/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw", label: "Nachbarschutz Brandwand" },
      { href: "/ratgeber/tuerarten-brandschutz-bauo-nrw", label: "Türarten" },
      { href: "/ratgeber/waende-notwendige-flure-bauo-nrw", label: "Flurwände / Rauchabschnitt" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept" },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Brandwand und Brandschutzwand?",
        answer:
          "„Brandschutzwand“ ist umgangssprachlich. Im Gesetz zählen Brandwand (§ 30), Trennwand (§ 29) und Rauchabschnittswände (§ 36) – mit unterschiedlichen Anforderungen an Feuerwiderstand und Öffnungen.",
      },
      {
        question: "Was ist eine innere Brandwand?",
        answer:
          "Eine Brandwand innerhalb des Gebäudes, die es in Brandabschnitte unterteilt (§ 30 Abs. 1). Typisch durchgehend durch die Geschosse.",
      },
      {
        question: "Was ist eine Gebäudeabschlusswand?",
        answer:
          "Die Brandwand zum Abschluss des Gebäudes – insbesondere an der Nachbargrenze oder zwischen angebauten Gebäudeteilen mit unterschiedlicher Nutzung.",
      },
      {
        question: "Dürfen in einer Brandwand Türen oder Fenster sein?",
        answer:
          "Grundsätzlich nein. In inneren Brandwänden nur in erforderlicher Zahl und Größe, mit feuerbeständigen, dicht- und selbstschließenden Abschlüssen. Öffenbare Fenster sind typischerweise unzulässig.",
      },
      {
        question: "Wann greift die 40-m-Regel?",
        answer:
          "Als innere Brandwand zur Unterteilung ausgedehnter Gebäude in Abständen von nicht mehr als 40 m (§ 30 Abs. 2 Nr. 2). Größere Abstände können gestattet werden. Verkauf und Garagen haben eigene SBauVO-Regeln.",
      },
      {
        question: "Ist jede feuerbeständige Wand eine Brandwand?",
        answer:
          "Nein. Feuerbeständigkeit allein reicht nicht. Es müssen Tatbestand, mechanische Beanspruchung, Baustoffe, Führung bis zum Dach und Öffnungsregeln des § 30 (oder Ersatzwandregeln) erfüllt sein.",
      },
    ],
  },
];
