/**
 * 20.08.2024 – Aufzüge BauO NRW § 39 · SBauVO Hochhaus/Sonderbauten.
 * Quelle: Aufzuege_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_AUFZUEGE: RatgeberArticle[] = [
  {
    slug: "aufzuege-brandschutz-bauo-sbauvo-nrw",
    title: "Aufzüge Brandschutz NRW: Fahrschacht, Hochhaus und Brandfallsteuerung",
    excerpt:
      "Grundnorm für jeden Aufzug: Fahrschacht, GK-Wände, Rauchableitung. Zwei Fragen: Normales Gebäude oder Hochhaus/Sonderbau – und eigener Schacht oder Aufzug im Treppenraum?",
    metaTitle: "Aufzüge Brandschutz NRW: Fahrschacht | H&S+",
    metaDescription:
      "Aufzug Fahrschacht NRW: Brandschutz nach BauO, Hochhaus Feuerwehraufzug, Brandfallsteuerung, Aufzugspflicht ab 4 OG, Aufzug im Treppenraum.",
    keywords: [
      "Aufzüge Brandschutz NRW",
      "Fahrschacht Brandschutz",
      "Feuerwehraufzug Hochhaus",
      "Aufzug Treppenraum",
      "Brandfallsteuerung Aufzug",
      "Aufzugspflicht 4 Geschosse",
      "Aufzug Hochhaus SBauVO",
    ],
    sections: [
      {
        id: "frage",
        title: "Zwei Fragen – BauO für alle, SBauVO für Sonderfälle",
        paragraphs: [
          "Die Bauordnung regelt Aufzüge als technische Gebäudeausrüstung für alle Gebäude mit Innenaufzug – Fahrschacht, Bauteile, Lüftung, ggf. Aufzugspflicht. Die Sonderbauverordnung ergänzt für bestimmte Sonderbautypen, vor allem Hochhäuser: Feuerwehraufzüge, Brandfallsteuerung, Aufzugsvorräume, Sicherheitsbeleuchtung in Vorräumen und Sicherheitsstrom für Aufzüge.",
          "Zuerst prüfen: Liegt ein normaler Personenaufzug vor (im Wesentlichen § 39 BauO) – oder greifen Hochhaus- oder Sonderbau-Regeln (Teil 4 SBauVO, Brandfallsteuerung in Versammlungsstätte, Beherbergung, Verkaufsstätte)? Zweite Frage: Eigener Fahrschacht oder zulässige Ausnahme – Aufzug im notwendigen Treppenraum?",
          "Für Büro- und Wohngebäude ohne Sonderbau-Merkmal gilt im Wesentlichen nur die BauO. Feuerwehraufzüge, drei Stunden Sicherheitsstrom für Aufzüge und Pflicht-Aufzugsvorräume nach § 111 SBauVO sind Hochhaus-Themen – nicht jeder Aufzug in NRW.",
        ],
      },
      {
        id: "einordnung",
        title: "Aufzugarten und Normen",
        paragraphs: [],
        table: {
          caption: "Rechtsgrundlagen Aufzüge",
          headers: ["Thema", "Norm", "Gilt für"],
          rows: [
            ["Personenaufzüge allgemein", "§ 39 BauO", "Alle Gebäude mit Innenaufzug"],
            ["Feuerwehraufzüge", "§§ 103–104 SBauVO", "Nur Hochhäuser (> 22 m)"],
            ["Brandfallsteuerung", "§§ 20, 55, 79, 107 SBauVO", "VS, Beherbergung, Verkauf, Hochhaus"],
            ["Aufzugsvorräume, 2 Aufzüge/Geschoss", "§ 111 SBauVO", "Hochhäuser"],
            ["SiBe in Aufzugsvorräumen", "§ 108 SBauVO", "Hochhäuser"],
            ["Sicherheitsstrom Aufzüge", "§ 109 SBauVO", "Nur Hochhäuser – min. 3 Stunden"],
          ],
        },
      },
      {
        id: "fahrschacht",
        title: "§ 39 BauO – Fahrschacht und Rauchableitung",
        paragraphs: [
          "Aufzüge im Innern von Gebäuden brauchen eigene Fahrschächte, um Brandausbreitung in andere Geschosse ausreichend lang zu verhindern. Pro Schacht höchstens drei Aufzüge.",
          "Fahrschächte sind zu lüften; Rauchaustrittsöffnung mindestens 2,5 Prozent der Schachtgrundfläche, mindestens 0,10 m² – mit Abschluss, der im Brandfall selbsttätig öffnet und von geeigneter Stelle bedienbar ist. Windgeschützte Lage des Rauchaustritts.",
          "Fahrschachttüren und andere Öffnungen dürfen den Brandausbreitungsschutz des Schachts nicht beeinträchtigen. Details zu Türen: [Brandschutztüren](/ratgeber/tuerarten-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "gk-waende",
        title: "Fahrschachtwände nach Gebäudeklasse",
        paragraphs: [],
        table: {
          caption: "§ 39 Abs. 2 – Fahrschachtwände",
          headers: ["Gebäudeklasse", "Fahrschachtwände", "Baustoff"],
          rows: [
            ["GK 5", "feuerbeständig", "nichtbrennbar"],
            ["GK 4", "hochfeuerhemmend", "—"],
            ["GK 3", "feuerhemmend", "—"],
            ["GK 1–2", "feuerhemmend (§ 31)", "Aufzug ohne Schacht im TR zusätzlich zulässig"],
          ],
        },
      },
      {
        id: "treppenraum",
        title: "Aufzug ohne Fahrschacht / im Treppenraum",
        paragraphs: [],
        table: {
          caption: "§ 39 Abs. 1 Satz 2 – Ausnahmen",
          headers: ["Fall", "Zulässig?", "Hinweis"],
          rows: [
            ["Aufzug im notwendigen Treppenraum", "Ja – sicher umkleidet", "Nicht in Hochhäusern"],
            ["Aufzug ohne Schacht in GK 1–2", "Ja", "Zusätzlich zu TR-Fall"],
            ["Geschossüberbrückung / offene Geschosse", "Ja – sicher umkleidet", "Einzelfall prüfen"],
            ["Aufzug ohne Schacht in GK 3–5", "Nur in genannten Sonderfällen", "Nicht pauschal"],
            ["Brandfallsteuerung entfällt", "Ja", "Zugang ausschließlich über notwendigen TR"],
          ],
        },
      },
      {
        id: "pflicht",
        title: "Aufzugspflicht und Abmessungen",
        paragraphs: [
          "Gebäude außer EFH/ZFH mit mehr als drei oberirdischen Geschossen: Aufzüge in ausreichender Zahl. Bei Aufzugspflicht: barrierefrei von öffentlicher Verkehrsfläche und allen Wohnungen erreichbar.",
          "Mehr als fünf oberirdische Geschosse: mindestens ein Aufzug für Krankentrage, Rollstuhl und Lasten – Haltestellen in allen Geschossen (Ausnahmen oberstes OG/Keller bei besonderen Schwierigkeiten). Fahrkorb Krankentrage min. 1,10 × 2,10 m; Rollstuhl min. 1,10 × 1,40 m; Türbreite min. 0,90 m.",
          "Bestandserleichterung § 39 Abs. 4 Satz 2: Keine Aufzugspflicht bei Dachgeschoss-Ausbau, Aufstockung bis zwei Geschosse oder Herstellung nur unter besonderen Schwierigkeiten – [§ 69 Bestand](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw). Vor Aufzügen ausreichende Bewegungsfläche.",
        ],
      },
      {
        id: "hochhaus",
        title: "Hochhaus: Feuerwehraufzug und Personenaufzüge",
        paragraphs: [
          "§ 103: Feuerwehraufzüge mit Haltestellen in jedem Geschoss – jede Stelle des Geschosses in höchstens 50 m Lauflinie von einem FW-Aufzug-Vorraum erreichbar. Eigene Fahrschächte, in die Feuer und Rauch nicht eindringen können; Vorraum nahe notwendigem Treppenraum; Notbedienung, Kennzeichnung, Krankentrage-Fahrkorb, Sichtöffnung min. 600 cm², ortsfeste Leitern, Türen vom Schacht aus öffenbar.",
          "§ 104: Vorräume min. 6 m², Abstand Fahrschachttür zur Flurtür min. 3 m. FW-Aufzug und Personenaufzug dürfen gemeinsamen Vorraum haben, wenn FW-Anforderungen erfüllt.",
          "§ 111: Jedes Geschoss mit Aufenthaltsräumen von mindestens zwei Aufzügen; Vorräume vor Fahrschachttüren mit Hinweis „Im Brandfall Aufzug nicht benutzen“ und Geschossnummer. Erleichterung § 115: Hochhaus ≤ 30 m – kein Feuerwehraufzug unter Voraussetzungen; ≤ 60 m – gemeinsame Vorräume STR/FW-Aufzug (min. 6 m²). FW-Eingang: [Feuerwehrzufahrten](/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw). Vertiefung: [Hochhaus](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
        ],
      },
      {
        id: "brandfall",
        title: "Brandfallsteuerung",
        paragraphs: [
          "In Versammlungsstätten (§ 20), Beherbergung > 60 Gastbetten (§ 55), Verkaufsstätten Teil 3 (§ 79) und allen Hochhäusern (§ 107): Brandfallsteuerung, ausgelöst durch BMA. Aufzüge fahren in sicheres Geschoss (Ausgang ins Freie oder unbelastetes Geschoss), danach Stillsetzung.",
          "Ausnahme: Aufzüge im notwendigen Treppenraum mit Zugang ausschließlich über den TR – keine Brandfallsteuerung nach SBauVO. Garagen, normale Wohn-/Bürogebäude ohne Sonderbau-BMA: keine gesetzliche Brandfallsteuerung.",
          "FW-Aufzug-Vorräume: Gegensprechanlage zur Brandmelder- und Alarmzentrale (§ 107). Technische Kopplung BMA ↔ Aufzug: [BMA Brandfallsteuerung](/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw). Pflichtmatrix BMA: [BMA wann Pflicht](/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw).",
        ],
      },
      {
        id: "technik",
        title: "SiBe, Sicherheitsstrom, Druckbelüftung",
        paragraphs: [
          "§ 108 SBauVO: Sicherheitsbeleuchtung in Rettungswegen und Aufzugsvorräumen – nur Hochhäuser. Allgemeine Gebäude ohne Sonderbau: keine gesetzliche SiBe in Aufzugsvorräumen. [Sicherheitsbeleuchtung](/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw).",
          "§ 109 SBauVO: Sicherheitsstromversorgung mindestens 3 Stunden – nur Hochhäuser, u. a. für Aufzüge; Leitungen 90 Minuten Funktionserhalt im Brand. [Sicherheitsstrom](/ratgeber/sicherheitsstromversorgung-wann-pflicht-sbauvo-nrw).",
          "§ 105 SBauVO: Druckbelüftung für Feuerwehraufzugsschächte und Vorräume – BMA-Auslösung, min. 0,75 m/s durch geöffnete Vorraumtür. Brandfallsteuerung auch bei §-115-Erleichterungen sicherstellen.",
        ],
      },
      {
        id: "negativ",
        title: "Was BauO und SBauVO nicht regeln",
        paragraphs: [
          "Keine technischen Ausführungsdetails (Geschwindigkeit, Notruf-GSM) – außerhalb BauO/SBauVO.",
          "Keine wiederkehrenden Prüfungen in BauO/SBauVO – [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) separat.",
          "Keine Feuerwehraufzüge außerhalb von Hochhäusern; keine Sicherheitsstrom-Pflicht für Aufzüge außer Hochhaus.",
          "Keine Brandfallsteuerung in Garagen, Schulen oder Krankenhäusern ohne entsprechenden SBauVO-BMA-Tatbestand.",
          "Keine Aufzugsvorraum-Pflicht nach § 111 außerhalb von Hochhäusern.",
        ],
      },
      {
        id: "grenzfaelle",
        title: "Grenzfälle – ja oder nein?",
        paragraphs: [
          "Grenzfall ja: MFH 5 OG, GK 3 – Aufzugspflicht, Fahrschacht feuerhemmend, Rauchableitung 0,10 m², Rollstuhl-Aufzug 1,10 × 1,40 m.",
          "Grenzfall nein: Bürohaus 4 OG, GK 4 – kein Hochhaus, keine Brandfallsteuerung, kein FW-Aufzug – nur § 39.",
          "Grenzfall ja: Wohnhochhaus 26 m – FW-Aufzug § 103, zwei Aufzüge/Geschoss § 111, Brandfallsteuerung § 107, SiBe Vorräume § 108.",
          "Grenzfall ja: Aufzug sicher umkleidet im notwendigen TR, kein Hochhaus – zulässig; Brandfallsteuerung entfällt bei TR-only-Zugang.",
          "Grenzfall nein: Personenaufzug direkt aus Hausflur in GK 4 ohne Fahrschacht – nicht zulässig (nur TR/GK 1–2/Sonderfälle).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Aufzüge – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Frage", "Kriterium"],
          rows: [
            ["1", "Aufzug im Gebäudeinnern?", "§ 39 BauO"],
            ["2", "Eigener Fahrschacht (max. 3/Schacht)?", "§ 39 Abs. 1"],
            ["3", "Ohne Schacht – Ausnahme?", "TR / GK 1–2 / offene Geschosse; nicht Hochhaus"],
            ["4", "Fahrschachtwände passend zur GK?", "§ 39 Abs. 2"],
            ["5", "Rauchableitung Schacht?", "≥ 2,5 % / min. 0,10 m²; selbsttätige Öffnung"],
            ["6", "Aufzugspflicht > 3 OG?", "§ 39 Abs. 4; Bestand prüfen"],
            ["7", "> 5 OG: Rollstuhl/Krankentrage?", "Abmessungen, Türbreite 0,90 m"],
            ["8", "Hochhaus > 22 m?", "Teil 4 SBauVO zusätzlich"],
            ["9", "Feuerwehraufzug erforderlich?", "§ 103; Ausnahme ≤ 30 m § 115"],
            ["10", "FW-Aufzug: 50 m, Vorraum 6 m²?", "§§ 103–104"],
            ["11", "Zwei Aufzüge je Geschoss?", "§ 111 Hochhaus"],
            ["12", "Brandfallsteuerung?", "§§ 20, 55, 79, 107; Ausnahme TR-only"],
            ["13", "SiBe Aufzugsvorraum?", "§ 108 – nur Hochhaus"],
            ["14", "Sicherheitsstrom 3 h?", "§ 109 – nur Hochhaus"],
            ["15", "Druckbelüftung FW-Schacht?", "§ 105"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erklärt BauO NRW und SBauVO NRW für Aufzüge – ohne Aufzugsverordnung, ProdSG, DIN EN 81, VDE oder Wartungsfristen. Schnittstelle Treppenraum: [Notwendige Treppen](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw). Gebäudeklassen im Detail: [GK-Übersicht](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw). Ersetzt kein genehmigungsfähiges Brandschutzkonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw", label: "Treppenräume" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw", label: "BMA-Pflicht" },
      { href: "/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw", label: "BMA ↔ Aufzug" },
      { href: "/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw", label: "Sicherheitsbeleuchtung" },
      { href: "/ratgeber/sicherheitsstromversorgung-wann-pflicht-sbauvo-nrw", label: "Sicherheitsstrom" },
      { href: "/ratgeber/tuerarten-brandschutz-bauo-nrw", label: "Fahrschachttüren" },
      { href: "/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw", label: "Feuerwehrzufahrten" },
    ],
    faq: [
      {
        question: "Braucht jeder Aufzug einen eigenen Fahrschacht?",
        answer:
          "Grundsätzlich ja für Innenaufzüge (§ 39 BauO). Ausnahmen: sicher umkleideter Aufzug im notwendigen Treppenraum (nicht Hochhaus), GK 1–2, Geschossüberbrückung oder offene Geschosse – max. drei Aufzüge pro Schacht.",
      },
      {
        question: "Darf ein Aufzug im Treppenraum stehen?",
        answer:
          "Ja außer in Hochhäusern – sicher umkleidet im notwendigen Treppenraum. Zugang ausschließlich über den TR: Brandfallsteuerung nach SBauVO entfällt.",
      },
      {
        question: "Ab wann ist ein Aufzug Pflicht?",
        answer:
          "Mehr als drei oberirdische Geschosse (ohne EFH/ZFH) – Aufzüge in ausreichender Zahl, barrierefrei. Ab fünf OG mindestens ein Aufzug für Rollstuhl und Krankentrage mit definierten Abmessungen.",
      },
      {
        question: "Wann braucht ein Hochhaus einen Feuerwehraufzug?",
        answer:
          "Grundsätzlich alle Hochhäuser (§ 103 SBauVO). Erleichterung: Hochhaus ≤ 30 m Höhe unter Voraussetzungen des § 115 Abs. 1 – dann kein Feuerwehraufzug.",
      },
      {
        question: "Wann ist Brandfallsteuerung gesetzlich Pflicht?",
        answer:
          "Versammlungsstätten, Beherbergung > 60 Gastbetten, Verkaufsstätten Teil 3 und alle Hochhäuser – BMA-Auslösung. Normale Wohn-/Bürogebäude ohne Sonderbau: keine gesetzliche Brandfallsteuerung.",
      },
      {
        question: "Gilt Sicherheitsstrom für jeden Aufzug?",
        answer:
          "Nein. Gesetzliche Sicherheitsstromversorgung für Aufzüge nur in Hochhäusern (§ 109 SBauVO) – mindestens 3 Stunden.",
      },
      {
        question: "Welche Feuerwiderstandsklasse für Fahrschachtwände?",
        answer:
          "GK 5 feuerbeständig und nichtbrennbar; GK 4 hochfeuerhemmend; GK 3 feuerhemmend (§ 39 Abs. 2 BauO). Fahrschachttüren dürfen den Schutz nicht untergraben.",
      },
      {
        question: "Was regelt die SBauVO nicht für Aufzüge?",
        answer:
          "Keine Produktnormen, keine Wartungsintervalle, keine Feuerwehraufzüge außerhalb von Hochhäusern, keine Brandfallsteuerung in normalen Mehrfamilienhäusern ohne Sonderbau-Tatbestand.",
      },
    ],
  },
];
