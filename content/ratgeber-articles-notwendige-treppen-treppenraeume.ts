/**
 * 20.09.2024 – Notwendige Treppe und Treppenräume (BauO / SBauVO NRW).
 * Quelle: Treppen_Treppenraeume_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_NOTWENDIGE_TREPPEN_TREPPENRAEUME: RatgeberArticle[] = [
  {
    slug: "notwendige-treppen-treppenraeume-bauo-sbauvo-nrw",
    title: "Notwendiger Treppenraum NRW: wann § 35 BauO Pflicht ist",
    excerpt:
      "Notwendige Treppe (§ 34) und notwendiger Treppenraum (§ 35) sind der vertikale Rettungsweg – vor dem Flur (§ 36). Normkette § 33–36, GK-Matrix, Ausnahmen, Sicherheitstreppenraum und SBauVO-Ergänzungen gesetzlich.",
    metaTitle: "Treppenraum NRW § 35 BauO Pflicht | H&S+",
    metaDescription:
      "Notwendige Treppe und Treppenraum NRW: § 34 und § 35 BauO, Sicherheitstreppenraum § 33, GK-Matrix, SBauVO VS/Verkauf/Hochhaus. Prüfkatalog gesetzlich.",
    keywords: [
      "Notwendiger Treppenraum NRW",
      "Treppenraum BauO NRW",
      "§ 35 BauO NRW",
      "notwendige Treppe",
      "Sicherheitstreppenraum",
      "§ 34 BauO NRW",
      "Treppenhaus Brandschutz",
    ],
    sections: [
      {
        id: "frage",
        title: "Treppe, Treppenraum, Flur – drei Ebenen",
        paragraphs: [
          "Die notwendige Treppe (§ 34 BauO NRW) ist das vertikale Verbindungselement – Zugänglichkeit und erster Rettungsweg. Der notwendige Treppenraum (§ 35) ist der geschützte Raum, in dem die Treppe im Regelfall liegen muss. Der notwendige Flur (§ 36) verbindet horizontal Aufenthaltsräume mit Treppenraum oder Freien.",
          "Die Normkette lautet § 33 → § 34 → § 35 → § 36. Zuerst Rettungswegplanung, dann Treppe, dann Treppenraum, dann Flur. Der Sicherheitstreppenraum (§ 33 Abs. 4) kann den zweiten Rettungsweg ersetzen – ersetzt aber nicht die notwendige Treppe.",
          "Dieser Ratgeber fasst ausschließlich gesetzlich verbindliches Recht zusammen – ohne VV TB, DIN oder Planungshandbücher. Tür-Staffelung im Detail: [Brandschutztüren](/ratgeber/tuerarten-brandschutz-bauo-nrw). Flurwände: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw).",
        ],
      },
      {
        id: "begriffe",
        title: "Gesetzliche Begriffe",
        paragraphs: [],
        table: {
          caption: "Treppe und Treppenraum im Gesetz",
          headers: ["Begriff", "Funktion", "Norm"],
          rows: [
            ["Notwendige Treppe", "Zugang je Geschoss/Dachraum; erster Rettungsweg über Treppe", "§ 34 BauO"],
            ["Notwendiger Treppenraum", "Geschützter Raum für die notwendige Treppe", "§ 35 Abs. 1"],
            ["Sicherheitstreppenraum", "Feuer/Rauch dürfen nicht eindringen; Ersatz 2. Rettungsweg", "§ 33 Abs. 4; § 99 SBauVO"],
            ["Treppenraumerweiterung", "Erweiterung am TR (Verkaufsstätten)", "§ 71 SBauVO"],
            ["Schachteltreppe", "Zwei Treppen in einem TR (Versammlungsstätten)", "§ 8 SBauVO"],
          ],
        },
      },
      {
        id: "normkette",
        title: "Normkette § 33 – § 36",
        paragraphs: [
          "§ 33 Abs. 1: Mindestens zwei voneinander unabhängige Rettungswege je Nutzungseinheit mit Aufenthaltsräumen – beide dürfen im Geschoss über denselben notwendigen Flur führen. § 33 Abs. 2: Erster Weg über notwendige Treppe, wenn NE nicht zu ebener Erde; zweiter Weg über weitere Treppe oder Feuerwehrgeräte.",
        ],
        list: [
          "§ 33 BauO NRW – Rettungswege, Sicherheitstreppenraum, Hubrettung ab 8 m",
          "§ 34 BauO NRW – Notwendige Treppe: Pflicht, Tragwerk, Breite, Handlauf",
          "§ 35 BauO NRW – Notwendiger Treppenraum: Schutz, Wände, Türen, Rauchableitung",
          "§ 36 BauO NRW – Notwendiger Flur: horizontaler Rettungsweg, Rauchabschnitte",
        ],
      },
      {
        id: "paragraph-34",
        title: "§ 34 BauO NRW – Notwendige Treppe",
        paragraphs: [
          "Jedes nicht zu ebener Erde liegende Geschoss und der benutzbare Dachraum brauchen mindestens eine notwendige Treppe. Rampen mit flacher Neigung sind zulässig; Roll- und einschiebbare Treppen unzulässig – Ausnahme GK 1–2: einschiebbare Treppen/Leitern zum Dachraum ohne Aufenthaltsraum.",
          "Notwendige Treppen in einem Zuge zu allen angeschlossenen Geschossen; Verbindung zu Dachraumtreppen. Erleichterung GK 1–3 und Außentreppe nach § 35 Abs. 1 Satz 3 Nr. 2. Nutzbare Breite für größten Verkehr; fester Handlauf; beidseitige Handläufe/Zwischenhandläufe soweit nötig. Absätze 3–5 gelten nicht für Treppen innerhalb von Wohnungen.",
        ],
        table: {
          caption: "§ 34 – Kernanforderungen",
          headers: ["Thema", "Pflicht", "Ausnahme"],
          rows: [
            ["Mindestens eine Treppe", "Je Geschoss/Dachraum nicht zu ebener Erde", "Rampen statt Treppe"],
            ["Roll-/einschiebbare Treppen", "Unzulässig", "GK 1–2: Dachraum ohne Aufenthaltsraum"],
            ["Durchgehende Führung", "Ein Zug, Verbindung Dachraum", "GK 1–3; Außentreppe"],
            ["Tragende Teile", "GK-abhängig (siehe Matrix)", "Nicht in Wohnungen"],
          ],
        },
      },
      {
        id: "paragraph-35",
        title: "§ 35 BauO NRW – Notwendiger Treppenraum",
        paragraphs: [
          "Jede notwendige Treppe muss in einem eigenen, durchgehenden Treppenraum liegen – so angeordnet und ausgebildet, dass die Nutzung im Brandfall ausreichend lang möglich ist.",
          "Ohne eigenen Treppenraum zulässig: in Gebäuden GK 1 und 2; Verbindung höchstens zwei Geschosse innerhalb derselben NE von insgesamt nicht mehr als 200 m² mit anderem Rettungsweg je Geschoss; als Außentreppe bei sicherer Nutzung im Brandfall; innerhalb von Wohnungen.",
          "Von jeder Stelle eines Aufenthaltsraums und Kellergeschosses: Ausgang in TR oder ins Freie in höchstens 35 m. Übereinanderliegende Keller: jeweils mindestens zwei Ausgänge. Mehrere TR: möglichst entgegengesetzt, kurze Rettungswege. Jeder TR: unmittelbarer Ausgang ins Freie – sonst Vorraum nach Abs. 3.",
          "Öffnungen im TR (§ 35 Abs. 6): zu Keller, Lager, NE > 200 m² feuerhemmend, rauchdicht, selbstschließend; zum notwendigen Flur rauchdicht und selbstschließend; zu Wohnungen dichtschließend. Details: [Türarten](/ratgeber/tuerarten-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "gk-matrix",
        title: "Gebäudeklassen-Matrix",
        paragraphs: [
          "Außentreppen (§ 35 Abs. 1 Satz 3 Nr. 2): tragende Teile GK 3–5 aus nichtbrennbaren Baustoffen; in GK 5 Rauchableitung an oberster Stelle (§ 35 Abs. 8 Satz 3).",
        ],
        table: {
          caption: "Treppe und Treppenraum nach GK",
          headers: ["GK", "Treppenraum?", "Treppe § 34 Abs. 3", "TR-Wand § 35 Abs. 2"],
          rows: [
            ["1–2", "Regelfall ja; Ausnahmen § 35 Abs. 1 Satz 3", "Keine erhöhten Anforderungen", "Feuerhemmend (wenn TR)"],
            ["3", "Ja (Ausnahme: Außentreppe, Wohnung)", "Nichtbrennbar oder feuerhemmend", "Feuerhemmend"],
            ["4", "Ja", "Nichtbrennbar", "Hochfeuerhemmend"],
            ["5", "Ja", "Feuerhemmend + nichtbrennbar", "Bauart Brandwand"],
          ],
        },
      },
      {
        id: "rauch-beleuchtung",
        title: "Rauchableitung, Belüftung, Beleuchtung",
        paragraphs: [
          "Notwendige Treppenräume müssen belüftet und entrauchbar sein: je oberirdisches Geschoss Fenster mindestens 0,50 m² freier Querschnitt ins Freie – oder Rauchöffnung oben mindestens 1 m², bedienbar vom EG und oberstem Treppenabsatz.",
          "Gesamtübersicht Entrauchung (SBauVO §§ 16/75/110, § 105-Abgrenzung): [Entrauchung Hub](/ratgeber/entrauchung-rauchableitung-bauo-sbauvo-nrw). Zu beleuchten; fensterlose TR in Gebäuden > 13 m Höhe (§ 2 Abs. 3 Satz 2): Sicherheitsbeleuchtung (§ 35 Abs. 7). SBauVO-Zusätze: [Sicherheitsbeleuchtung Pflicht](/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw).",
          "Bekleidungen, Putze, Dämmstoffe, Einbauten in TR aus nichtbrennbaren Baustoffen; Bodenbeläge mindestens schwerentflammbar (§ 35 Abs. 5).",
        ],
      },
      {
        id: "sicherheitstreppenraum",
        title: "Sicherheitstreppenraum",
        paragraphs: [
          "Ein zweiter Rettungsweg entfällt, wenn Rettung über einen sicher erreichbaren Treppenraum möglich ist, in den Feuer und Rauch nicht eindringen können (§ 33 Abs. 4). Notwendige Flure mit nur einer Fluchtrichtung zum STR: maximal 15 m (§ 36 Abs. 3 Satz 5).",
          "Hochhäuser § 99 SBauVO: bis 60 m Höhe kann ein STR zwei TR ersetzen; über 60 m alle TR als STR; innenliegende oberirdische TR grundsätzlich als STR; Keller-TR getrennt von oberirdischen; Vorräume, offene Gänge, feste Verglasung; Abstand Türen mindestens 3 m. Druckbelüftung § 105 SBauVO. Vertiefung: [Hochhaus](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
        ],
      },
      {
        id: "sbauvo",
        title: "SBauVO NRW – Sonderbau-Ergänzungen",
        paragraphs: [],
        table: {
          caption: "SBauVO zu Treppen und Treppenräumen",
          headers: ["Sonderbau", "Norm", "Ergänzung zu BauO"],
          rows: [
            ["Versammlungsstätte", "§ 8 SBauVO", "Schachteltreppen; feuerbeständig; lichte Breite max. 2,40 m; geschlossene Stufen; keine Wendeltreppe für Besucher"],
            ["Verkaufsstätte", "§§ 70, 71, 75", "Treppen feuerbeständig; TR-Wände Brandwand; Treppenraumerweiterung max. 35 m"],
            ["Beherbergung", "§ 52 SBauVO", "Treppen in einem Zug; TR-Wände Brandwand (Erleichterung ≤ 30 Betten); Stichflur max. 15 m"],
            ["Hochhaus", "§§ 98, 99, 100", "Rettungsweg min. 1,20 m; STR-Regeln; getrennte Wege Keller/OG"],
            ["Garage", "§ 134 SBauVO", "TR bei Einstellplätzen > 3 m über Gelände; Erreichbarkeit TR max. 30/50 m"],
          ],
        },
      },
      {
        id: "schnittstellen",
        title: "Aufzug, Leitungen, Lüftung",
        paragraphs: [
          "Leitungen und Lüftung in Treppenraum und Flur haben eigene Zulässigkeitsregeln – getrennt vom Durchbruch durch Brandwände. Gesetzliche Übersicht: [Leitungsanlagen](/ratgeber/leitungsanlagen-bauo-sbauvo-nrw). Ausführung Abschottungen: [Baustelle](/ratgeber/abschottungen-durchbrueche-baustelle-koeln).",
        ],
        table: {
          caption: "Schnittstellen zum Treppenraum",
          headers: ["Thema", "Pflicht", "Norm"],
          rows: [
            ["Aufzug ohne Fahrschacht im TR", "Zulässig außer Hochhaus; GK 1–2 u. a.; sicher umkleidet", "§ 39 Abs. 1"],
            ["Fahrschachtwände", "GK 5 feuerbeständig; GK 4 hochfeuerhemmend; GK 3 feuerhemmend", "§ 39 Abs. 2"],
            ["Leitungen im TR", "Nur wenn Rettungswegnutzung im Brandfall ausreichend lang", "§ 40 Abs. 2"],
            ["Lüftung im TR", "Nichtbrennbare Leitungen/Bekleidungen", "§ 41 Abs. 2–3"],
            ["Brandfallsteuerung Aufzug", "Bei Sonderbauten (Ausnahme: Zugang nur über TR)", "§§ 20, 55, 79, 107 SBauVO"],
          ],
        },
      },
      {
        id: "grenzfaelle",
        title: "Grenzfälle – ja oder nein?",
        paragraphs: [
          "Grenzfall ja: Zweifamilienhaus GK 2, Treppe ohne eigenen Treppenraum nach § 35 Abs. 1 Satz 3 – wenn Ausnahmetatbestand erfüllt (GK 1–2 und/oder ≤ 2 OG, ≤ 200 m², zweiter RW je Geschoss). Grenzfall nein: Mehrfamilienhaus GK 3 – notwendiger Treppenraum Pflicht; feuerhemmende TR-Wände.",
          "Grenzfall ja: Außentreppe GK 4 als notwendige Treppe ohne TR – wenn Nutzung im Brandfall sicher. Grenzfall nein: Außentreppe GK 5 – Rauchableitung an oberster Stelle zusätzlich (§ 35 Abs. 8 Satz 3).",
          "Grenzfall ja: Büro GK 4 mit STR nach § 33 Abs. 4 – ein TR kann zweiten Rettungsweg ersetzen, wenn STR-Anforderungen erfüllt. Grenzfall nein: Rolltreppe als notwendige Treppe – unzulässig (§ 34 Abs. 1).",
        ],
      },
      {
        id: "praxis",
        title: "Typische Planungsfälle",
        paragraphs: [
          "Neubau MFH GK 4 mit vier Wohnungen pro Geschoss: notwendiger TR mit hochfeuerhemmenden Wänden, Rauchableitung 1 m², notwendige Flure ab mehr als vier Wohnungen (§ 35 Abs. 4); Flurplanung mit [Brandlasten](/ratgeber/brandlasten-notwendige-flure-bauo-nrw).",
          "Gewerbebau GK 3, zwei Mietparteien à 180 m²: TR feuerhemmend; Türen TR–Flur rauchdicht; zwei Rettungswege über zwei TR oder TR plus Feuerwehr-Fenster – [Feuerwehr-Abstimmung](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw).",
          "Verkaufsstätte > 2.000 m²: § 71 SBauVO – TR-Wände Brandwand, Treppenraumerweiterungen; parallel [Rettungswege Verkauf](/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw).",
          "Umbau Dachgeschoss: neue notwendige Treppe/Dachraumzugang prüfen; GK-Wechsel kann TR-Wandanforderungen verschärfen – [Gebäudeklassen](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Treppen und Treppenräume – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            ["1", "Geschoss/Dachraum nicht zu ebener Erde?", "§ 34 Abs. 1", "Notwendige Treppe"],
            ["2", "Erster RW über Treppe (NE nicht zu ebener Erde)?", "§ 33 Abs. 2", "Treppe mit Rettungswegqualität"],
            ["3", "GK 1–2 oder ≤ 2 OG/200 m² mit anderem RW?", "§ 35 Abs. 1 Satz 3", "TR entbehrlich"],
            ["4", "Außentreppe?", "§ 35 Abs. 1 Satz 3 Nr. 2", "Ohne TR wenn sicher; GK 5: Rauchöffnung"],
            ["5", "TR-Wand-Feuerwiderstand?", "§ 35 Abs. 2", "GK 3–5 staffeln"],
            ["6", "Ausgang TR ins Freie?", "§ 35 Abs. 1 Satz 7; Abs. 3", "Sonst Vorraum"],
            ["7", "Entfernung Aufenthaltsraum → TR/Freie?", "§ 35 Abs. 1 Satz 4", "Max. 35 m"],
            ["8", "Rauchableitung / Fenster TR?", "§ 35 Abs. 8", "0,50 m²/OG oder 1 m² oben"],
            ["9", "Fensterloser TR, Höhe > 13 m?", "§ 35 Abs. 7", "Sicherheitsbeleuchtung"],
            ["10", "STR statt 2. RW?", "§ 33 Abs. 4; § 36 Abs. 3", "Feuer/Rauch dicht; Flur max. 15 m"],
            ["11", "Aufzug im TR?", "§ 39 Abs. 1", "Nicht in Hochhaus"],
            ["12", "Sonderbau VS/Verkauf/Hotel/Hochhaus/Garage?", "SBauVO Teil G", "Zusatznormen prüfen"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber erklärt die gesetzliche Systematik zu §§ 33–35 BauO NRW und einschlägigen SBauVO-Paragraphen – ohne Technische Baubestimmungen oder konkrete Millimeter-Breiten, sofern das Gesetz sie nicht nennt.",
          "Horizontaler Rettungsweg und Flurwände: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw). Grundlagen Rettungswege: [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw). Ersetzt keine behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/leitungsanlagen-bauo-sbauvo-nrw", label: "Leitungen TR/Flur" },
      { href: "/ratgeber/waende-notwendige-flure-bauo-nrw", label: "Flur § 36" },
      { href: "/ratgeber/tuerarten-brandschutz-bauo-nrw", label: "Türen im TR" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw", label: "Sicherheitsbeleuchtung" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus § 99" },
      { href: "/ratgeber/aufzuege-brandschutz-bauo-sbauvo-nrw", label: "Aufzüge § 39" },
      { href: "/ratgeber/brandlasten-notwendige-flure-bauo-nrw", label: "Brandlasten Flur" },
    ],
    faq: [
      {
        question: "Braucht jedes Gebäude einen notwendigen Treppenraum?",
        answer:
          "Ab GK 3 grundsätzlich ja für jede notwendige Treppe. In GK 1–2 und bei weiteren Tatbeständen (≤ 2 OG/200 m², Außentreppe, Wohnung) kann die Treppe ohne eigenen Treppenraum zulässig sein (§ 35 Abs. 1 Satz 3).",
      },
      {
        question: "Was ist der Unterschied zwischen notwendiger Treppe und Treppenraum?",
        answer:
          "§ 34 regelt die Treppe als Verbindungselement (Tragwerk, Breite, Handlauf). § 35 regelt den geschützten Raum um die Treppe (Wände, Türen, Rauchableitung, Ausgänge).",
      },
      {
        question: "Wann ersetzt ein Sicherheitstreppenraum den zweiten Rettungsweg?",
        answer:
          "Wenn Feuer und Rauch nicht in den Treppenraum eindringen können (§ 33 Abs. 4). Das ist nicht dasselbe wie ein normaler notwendiger Treppenraum – besonders in Hochhäusern detailliert in § 99 SBauVO.",
      },
      {
        question: "Wie weit darf der Weg zum Treppenraum sein?",
        answer:
          "Von jeder Stelle eines Aufenthaltsraums oder Kellergeschosses max. 35 m zu einem notwendigen Treppenraum oder ins Freie (§ 35 Abs. 1 Satz 4).",
      },
      {
        question: "Welche Tür zwischen Treppenraum und Wohnung?",
        answer:
          "Mindestens dichtschließend (§ 35 Abs. 6 Nr. 4). Zum Keller oder NE > 200 m²: feuerhemmend, rauchdicht und selbstschließend. Zum Flur: rauchdicht und selbstschließend.",
      },
      {
        question: "Darf eine Rolltreppe notwendige Treppe sein?",
        answer:
          "Nein. Einschiebbare Treppen und Rolltreppen sind als notwendige Treppen unzulässig (§ 34 Abs. 1) – Ausnahme nur GK 1–2 zum Dachraum ohne Aufenthaltsraum.",
      },
      {
        question: "Wann braucht ein fensterloser Treppenraum Sicherheitsbeleuchtung?",
        answer:
          "In Gebäuden mit einer Höhe nach § 2 Abs. 3 Satz 2 von mehr als 13 m (§ 35 Abs. 7 Satz 2). Zusätzlich können SBauVO-Pflichten greifen.",
      },
    ],
  },
];
