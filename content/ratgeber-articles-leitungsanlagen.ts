/**
 * 15.09.2024 – Leitungsanlagen (BauO / SBauVO NRW).
 * Quelle: Leitungsanlagen_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_LEITUNGSANLAGEN: RatgeberArticle[] = [
  {
    slug: "leitungsanlagen-bauo-sbauvo-nrw",
    title: "Leitungen im Treppenhaus und Flur: was in NRW wirklich zählt",
    excerpt:
      "Kabel im Hausflur, Lüftung durch die Brandwand, Installationsschacht über mehrere Geschosse – zwei getrennte Fragen: Durchbricht die Leitung ein geschütztes Bauteil, und liegt sie auf dem Rettungsweg? Gesetzliche Logik ohne Produktkatalog.",
    metaTitle: "Leitungen Treppenhaus Flur Brandschutz NRW | H&S+",
    metaDescription:
      "Leitungsanlagen Brandschutz NRW: Durchbruch feuerhemmende Wand, Leitungen im Treppenraum und Flur, Lüftungskanäle, Installationsschächte, Hochhaus und Versammlungsstätte.",
    keywords: [
      "Leitungen Treppenhaus Brandschutz",
      "Leitungsanlagen BauO NRW",
      "Kabel im Flur erlaubt",
      "Lüftung durch Brandwand",
      "Installationsschacht Brandschutz",
      "Leitungen Rettungsweg",
      "Durchbruch feuerhemmende Wand",
    ],
    sections: [
      {
        id: "frage",
        title: "Zwei Fragen – nicht eine",
        paragraphs: [
          "Ob eine Leitung brandschutzrechtlich passt, hängt nicht von der Leitungsart allein ab. Das Gesetz unterscheidet zwei Fälle: Führt die Leitung durch ein feuerwiderstandsfähiges Bauteil – Wand, Decke, Brandabschnitt? Und liegt sie in einem Raum, der Rettungsweg ist – notwendiger Treppenraum, Vorraum zum Freien oder notwendiger Flur?",
          "Der erste Fall geht um Brandausbreitung durch den Durchbruch. Der zweite geht um die Nutzbarkeit des Fluchtwegs im Brandfall. Kleine Gebäude und Wohnungen haben Erleichterungen beim Durchbruch – in Treppenhaus und Flur gelten die strengeren Regeln in jeder Gebäudeklasse.",
          "Im Gesetz heißt das Leitungsanlagen – nicht „Leistungsanlagen“. Lüftungskanäle und Installationsschächte folgen derselben Logik. Konkrete Abschottungsprodukte stehen nicht im Gesetzestext – dafür gibt es die Ausführungsebene: [Abschottungen auf der Baustelle](/ratgeber/abschottungen-durchbrueche-baustelle-koeln).",
        ],
      },
      {
        id: "durchbruch",
        title: "Durchbruch durch geschützte Bauteile",
        paragraphs: [
          "Wenn eine Leitung eine raumabschließende Wand oder Decke durchdringt, für die Feuerwiderstand vorgeschrieben ist, darf das nur, wenn Brandausbreitung ausreichend lang nicht zu befürchten ist – oder wenn Vorkehrungen getroffen sind. Das Gesetz nennt keine Schläuche, keine Zulassungsnummern, keine Millimeter.",
          "Erleichterung: In Gebäuden der Klassen 1 und 2, innerhalb einer Wohnung oder innerhalb derselben Nutzungseinheit mit höchstens 400 m² in nicht mehr als zwei Geschossen greift die volle Durchbruchspflicht nicht. Ab Gebäudeklasse 3 und bei getrennten Nutzungseinheiten wird es ernst – jeder Durchgang durch feuerhemmende oder feuerbeständige Bauteile braucht eine brandschutztechnische Antwort.",
          "Lüftungsleitungen haben dieselbe Überbrückungsfrage: Kanäle und Dämmungen müssen aus nichtbrennbaren Baustoffen sein – brennbar nur, wenn kein Brandbeitrag zu befürchten ist. Überbrücken sie feuerwiderstandsfähige Bauteile, gilt wieder: keine Brandausbreitung oder Vorkehrungen.",
        ],
        table: {
          caption: "Durchbruch – wann die volle Pflicht gilt",
          headers: ["Situation", "Anforderung", "Erleichterung"],
          rows: [
            ["Leitung durch feuerwiderstandsfähige Wand/Decke", "Keine Brandausbreitung oder Vorkehrungen", "GK 1–2, Wohnung, kleine NE ≤ 400 m² / 2 OG"],
            ["Lüftungskanal überbrückt Brandwand", "Nichtbrennbar; Überbrückung wie Durchbruch", "Gleiche GK/NE-Erleichterung"],
            ["Installationsschacht durch Geschoss", "Wie Leitung + Lüftungsregeln", "GK 4–5: Schacht oft genehmigungspflichtig"],
          ],
        },
      },
      {
        id: "rettungsweg",
        title: "Leitungen auf dem Rettungsweg",
        paragraphs: [
          "Strenger als in normalen Räumen: In notwendigen Treppenräumen, im Vorraum zwischen Treppenraum und Freien sowie in notwendigen Fluren sind Leitungsanlagen nur zulässig, wenn der Rettungsweg im Brandfall ausreichend lang nutzbar bleibt. Keine festen Abstandsmaße, keine erlaubte Kabelart im Gesetz – nur diese Funktionsprüfung.",
          "Die GK-Erleichterungen beim Durchbruch helfen hier nicht. Ein Zweifamilienhaus GK 2 kann bei Leitungen durch Wände milder sein – Kabel und Lüftung im Hausflur unterliegen trotzdem der Rettungsweg-Logik, sobald der Flur notwendiger Flur ist.",
          "Wo Treppenraum und Flur zusammenhängen: [Notwendige Treppe und Treppenraum](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw). Flurwände und Rauchabschnitte: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw). Bewegliche Gegenstände im Flur (Mülltonnen, Fahrräder) regelt das Gesetz anders – [Brandlasten im Flur](/ratgeber/brandlasten-notwendige-flure-bauo-nrw).",
        ],
        table: {
          caption: "Rettungsweg-Räume",
          headers: ["Raum", "Leitungen", "Lüftung"],
          rows: [
            ["Notwendiger Treppenraum", "Nur bei ausreichender Rettungswegnutzung", "Nichtbrennbar; Überbrückung mit Vorkehrungen"],
            ["Vorraum Treppenraum ↔ Freie", "Wie Treppenraum", "Entsprechend"],
            ["Notwendiger Flur", "Wie Treppenraum", "Nichtbrennbar"],
            ["Treppenraumerweiterung (Verkauf)", "Wie notwendiger Treppenraum", "SBauVO + BauO"],
          ],
        },
      },
      {
        id: "lueftung",
        title: "Lüftung, RLT und Abgas",
        paragraphs: [
          "Lüftungsanlagen müssen betriebssicher sein und den Betrieb von Feuerungsanlagen nicht stören. Lüftung und Abgas dürfen nicht in dieselbe Leitung münden – Ausnahme nur, wenn Betriebssicherheit und Brandschutz unbedenklich sind. Abluft ins Freie, keine Fremdeinrichtungen in Lüftungsleitungen.",
          "Raumlufttechnische Anlagen und Warmluftheizungen folgen denselben Material- und Überbrückungsregeln wie Lüftungsleitungen. In Hochhäusern darf die allgemeine Lüftung die Druckbelüftung der Sicherheitstreppenräume nicht beeinträchtigen.",
        ],
      },
      {
        id: "schaechte",
        title: "Installationsschächte und Genehmigung",
        paragraphs: [
          "Schächte und Kanäle für Leitungen sind brandschutzrechtlich Leitungen gleichgestellt – Durchbruch und Lüftungsmaterial gelten entsprechend. In Hochhäusern müssen Leitungen, die mehrere Geschosse verbinden, in Installationsschächten liegen; Elektro und Brennstoff getrennt; Revisionsöffnungen für Brandbekämpfung; Abschottungen in Geschosshöhe.",
          "Verfahren getrennt von Materiellem: Installationsschächte, die Geschosse überbrücken, brauchen in GK 4 und 5 eine Baugenehmigung – in GK 1 bis 3 sind sie genehmigungsfrei. Genehmigungsfrei heißt nicht brandschutzfrei: Durchbruch- und Rettungsweg-Regeln bleiben.",
        ],
      },
      {
        id: "sonderbau",
        title: "Versammlungsstätte, Hochhaus, Garage",
        paragraphs: [],
        table: {
          caption: "Sonderbau – Zusätze zur BauO",
          headers: ["Nutzung", "Was zusätzlich gilt"],
          rows: [
            ["Versammlungsstätte", "Leitungen hinter brennbarer Bekleidung nur in nichtbrennbaren Schächten; kleine VS-Räume ≤ 100 Personen/100 m²: schwerentflammbare Dämmung möglich; TR/Flur: Unterdecken nichtbrennbar"],
            ["Hochhaus", "Schächte Pflicht; Elektro/Brennstoff getrennt; feuerhemmende/feuerbeständige Abschottungen; Lüftung darf Druckbelüftung STR nicht stören"],
            ["Garage (geschlossen)", "Eigene Lüftungsregeln für geschlossene Mittel-/Großgaragen"],
          ],
        },
      },
      {
        id: "grenzfaelle",
        title: "Grenzfälle – ja oder nein?",
        paragraphs: [
          "Grenzfall ja: Zweifamilienhaus GK 2, neue Elektroleitung innerhalb einer Wohnung durch innere Trennwand – Durchbruch-Erleichterung greift. Grenzfall nein: Dieselbe Leitung im notwendigen Flur zum Treppenhaus – Rettungsweg-Prüfung unabhängig von GK.",
          "Grenzfall ja: Büro GK 3, Lüftungskanal durch feuerhemmende Brandabschnittswand mit nachgewiesener Vorkehrung gegen Brandausbreitung. Grenzfall nein: Kanal durch Brandwand ohne Nachweis – „wir dämmen ja mit Mineralwolle“ reicht gesetzlich nicht als alleinige Antwort.",
          "Grenzfall ja: Hochhaus, Elektroschacht mit Abschottungen alle 30 m feuerbeständig statt in jeder Geschossdecke feuerhemmend (SBauVO-Alternative). Grenzfall nein: Mehrgeschossiger Schacht in GK 5 ohne Genehmigung und ohne brandschutztechnischen Nachweis.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Planungsfälle",
        paragraphs: [
          "Umbau MFH: Kabeltrasse sichtbar im Hausflur geplant – zuerst klären, ob notwendiger Flur; dann Rettungswegnachweis, nicht nur Elektro-Norm. Behörde und Prüfsachverständiger fragen anders als der Elektriker.",
          "Neubau Gewerbe GK 4: Lüftungskanal quert mehrere Brandabschnitte – jede Durchdringung einzeln; Material nichtbrennbar; in Fluren und Treppenräumen zusätzlich Rettungsweg-Bewertung.",
          "Hotel / Versammlungsstätte: Leitungen in abgehängter Decke mit brennbarer Bekleidung – nur in nichtbrennbaren Installationsschächten oder -kanälen.",
          "Bestand: neuer Installationsschacht über drei Geschosse in GK 4 – Baugenehmigung und Konzept-Fortschreibung, nicht „nur Innenausbau“.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Leitungsanlagen – Prüfpunkte",
          headers: ["Nr.", "Frage", "Ergebnis"],
          rows: [
            ["1", "Durchbruch durch feuerwiderstandsfähiges Bauteil?", "Vorkehrungen oder Bewertung; GK 1–2/kleine NE prüfen"],
            ["2", "Verlegung in Treppenraum, Vorraum oder notwendigem Flur?", "Rettungswegnutzung im Brandfall"],
            ["3", "Installationsschacht statt Einzelleitung?", "Gleiche Logik wie Leitung + Lüftung"],
            ["4", "Lüftungskanal – Material und Überbrückung?", "Nichtbrennbar; Durchbruch wie oben"],
            ["5", "GK 1–2, Wohnung oder kleine NE?", "Erleichterung nur bei Durchbruch, nicht Rettungsweg"],
            ["6", "Schacht überbrückt Geschosse in GK 4–5?", "Genehmigung + materielle Anforderungen"],
            ["7", "Versammlungsstätte / Hochhaus / Garage?", "SBauVO-Zusätze"],
            ["8", "Lüftung in Abgasanlage?", "Unzulässig"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erklärt die gesetzliche Systematik zu Leitungs- und Lüftungsanlagen in der BauO NRW und ausgewählten SBauVO-Paragraphen – ohne DIN, VV TB oder Produktzulassungen. Wie Vorkehrungen im Einzelfall aussehen, klären Genehmigung, Konzept und Prüfsachverständiger. Ersetzt keine behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw", label: "Treppenraum" },
      { href: "/ratgeber/waende-notwendige-flure-bauo-nrw", label: "Flurwände" },
      { href: "/ratgeber/brandlasten-notwendige-flure-bauo-nrw", label: "Brandlasten Flur" },
      { href: "/ratgeber/abschottungen-durchbrueche-baustelle-koeln", label: "Abschottungen Praxis" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätte" },
    ],
    faq: [
      {
        question: "Darf ich Kabel im Hausflur verlegen?",
        answer:
          "Nur wenn der Flur kein notwendiger Flur ist – oder wenn nachgewiesen ist, dass der Rettungsweg im Brandfall ausreichend lang nutzbar bleibt. In Mehrfamilienhäusern ab GK 3 ist der Hausflur oft notwendiger Flur; dann gilt die strengere Regel unabhängig von der Leitungsart.",
      },
      {
        question: "Brauche ich bei jedem Durchbruch eine Abschottung?",
        answer:
          "Das Gesetz verlangt, dass Brandausbreitung ausreichend lang nicht zu befürchten ist – oder Vorkehrungen. Abschottungen sind die übliche Vorkehrung in der Praxis, aber nicht der einzige gesetzliche Begriff. In GK 1–2 und kleinen Nutzungseinheiten greift oft eine Erleichterung.",
      },
      {
        question: "Gilt das auch für Lüftungskanäle?",
        answer:
          "Ja. Lüftungsleitungen müssen aus nichtbrennbaren Baustoffen sein (Regelfall) und beim Überbrücken feuerwiderstandsfähiger Bauteile dieselbe Brandausbreitungs-Logik erfüllen. In Rettungsweg-Räumen zusätzlich die Nutzbarkeitsprüfung.",
      },
      {
        question: "Was ist der Unterschied zu Brandlasten im Flur?",
        answer:
          "Brandlasten betreffen bewegliche Gegenstände und fest eingebaute Baustoffe im Flur. Leitungsanlagen sind eine eigene Vorschrift: Durchbruch durch geschützte Bauteile und Lage auf dem Rettungsweg. Beides kann im selben Flur relevant sein.",
      },
      {
        question: "Sind Installationsschächte genehmigungsfrei?",
        answer:
          "In GK 1 bis 3 oft ja, wenn sie Geschosse überbrücken. In GK 4 und 5 genehmigungspflichtig – materielle Brandschutzanforderungen gelten in jedem Fall.",
      },
      {
        question: "Was gilt im Hochhaus?",
        answer:
          "Leitungen durch mehrere Geschosse in Schächten; Elektro und Brennstoff getrennt; Abschottungen und Revisionsöffnungen; Lüftung darf Druckbelüftung der Sicherheitstreppenräume nicht beeinträchtigen.",
      },
      {
        question: "Wo steht das im Gesetz?",
        answer:
          "Leitungsanlagen in der BauO NRW (Durchbruch und Rettungsweg-Räume), Lüftungsanlagen ergänzend; Installationsschächte gleichgestellt. Sonderbauten: SBauVO Versammlungsstätte und Hochhaus.",
      },
    ],
  },
];
