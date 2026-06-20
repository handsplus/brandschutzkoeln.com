/**
 * 05.11.2024 – Sicherheitsbeleuchtung (BauO / SBauVO NRW).
 * Quelle: Sicherheitsbeleuchtung_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_SICHERHEITSBELEUCHTUNG: RatgeberArticle[] = [
  {
    slug: "sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw",
    title: "Sicherheitsbeleuchtung: wann das Gesetz sie verlangt – und wann nicht",
    excerpt:
      "Überraschend für viele Planer: Die BauO NRW schreibt keine Sicherheitsbeleuchtung vor. Pflicht gibt es nur in der SBauVO NRW – und nur für fünf Sonderbau-Arten. Übersicht mit Räumen, Schwellen und Prüfkatalog.",
    metaTitle: "Sicherheitsbeleuchtung Pflicht NRW SBauVO | H&S+",
    metaDescription:
      "Sicherheitsbeleuchtung NRW: keine Pflicht in BauO – nur SBauVO §§ 15, 54, 77, 108, 135 für Versammlungsstätte, Hotel, Verkauf, Hochhaus, Garage. Gesetzliche Raumliste.",
    keywords: [
      "Sicherheitsbeleuchtung Pflicht NRW",
      "Sicherheitsbeleuchtung BauO NRW",
      "§ 15 SBauVO Sicherheitsbeleuchtung",
      "§ 108 SBauVO Hochhaus",
      "Fluchtwegbeleuchtung Gesetz",
      "Rettungsweg Beleuchtung",
      "wann Sicherheitsbeleuchtung Pflicht",
    ],
    sections: [
      {
        id: "frage",
        title: "Pflicht in jedem Flur? Nein – nur in der SBauVO",
        paragraphs: [
          "Wer Rettungswege plant, denkt schnell an Notlichtleuchten im Flur und an der Treppe. Viele Genehmigungsunterlagen enthalten Sicherheitsbeleuchtung – auch in Büros oder kleinen Gewerbebauten. Gesetzlich im Landesrecht NRW ist das aber enger gefasst als viele erwarten.",
          "Die BauO NRW verlangt in § 14 Rettung von Menschen bei Brand und regelt in §§ 33 bis 36 Rettungswege, notwendige Flure und Treppenräume – ohne eine Vorschrift zur Sicherheitsbeleuchtung. Gesetzliche Pflichten ergeben sich ausschließlich aus der SBauVO NRW – und dort nur für bestimmte Sonderbau-Arten.",
          "Für „normale“ Gebäude ohne Versammlungsstätte, Beherbergung, große Verkaufsfläche, Hochhaus oder geschlossene Großgarage gibt es im untersuchten Landesrecht keine baurechtliche Sicherheitsbeleuchtungspflicht. Arbeitsschutz (ASR) und Betriebsregeln sind ein separates Thema – dieser Ratgeber folgt nur BauO und SBauVO.",
        ],
      },
      {
        id: "systematik",
        title: "Wo die Pflicht herkommt",
        list: [
          "§ 14 BauO NRW – Brandschutz allgemein: kein Wort „Sicherheitsbeleuchtung“",
          "§§ 33–36 BauO NRW – Rettungswege, Flure, Treppen: Feuerwiderstand, keine Beleuchtung",
          "§ 50 BauO NRW – Sonderbau-Tatbestände lösen SBauVO-Anwendung aus",
          "SBauVO NRW – fünf Paragraphen mit eigenständiger Pflicht: §§ 15, 54, 77, 108, 135",
        ],
        paragraphs: [
          "Keine gesetzliche SBauVO-Pflicht für Krankenhäuser, Schulen, Bürogebäude, Wohnheime, Kitas, Regallager oder Stoff-Sonderbauten – sofern sie nicht zugleich Versammlungsstätte, Beherbergung, Verkaufsstätte, Hochhaus oder Garage im Sinne der jeweiligen SBauVO-Teile sind.",
        ],
      },
      {
        id: "uebersicht",
        title: "Fünf Sonderbau-Arten – fünf Regelungen",
        table: {
          caption: "Wann Sicherheitsbeleuchtung baurechtlich Pflicht ist",
          headers: ["Gebäude / Nutzung", "SBauVO-Teil", "Pflicht?", "Norm"],
          rows: [
            ["Versammlungsstätte (VR > 200 Pers.; Freianlagen; Stadien > 5.000)", "Teil 1", "Ja – umfassend", "§ 15 SBauVO"],
            ["Beherbergung (> 12 Gastbetten)", "Teil 2", "Ja – Rettungswegkette", "§ 54 SBauVO"],
            ["Verkaufsstätte (> 2.000 m² Verkaufsfläche)", "Teil 3", "Ja – siehe Raumliste", "§ 77 SBauVO"],
            ["Hochhaus (Höhe > 22 m)", "Teil 4", "Ja – Rettungswege, Aufzug", "§ 108 SBauVO"],
            ["Geschlossene Großgarage (Ausnahmen)", "Teil 5", "Bedingt – Rettungswege", "§ 135 SBauVO"],
            ["Büro, Wohnung, Werkstatt, Schule ohne SBauVO-Merkmal", "—", "Nein (baurechtlich NRW)", "—"],
          ],
        },
        paragraphs: [
          "Beherbergung ist Sonderbau nach § 50 BauO NRW erst ab mehr als 30 Betten – die SBauVO Teil 2 gilt bereits ab mehr als 12 Gastbetten (§ 47 SBauVO). Hotels mit 13 bis 29 Betten unterliegen den SBauVO-Pflichten, ohne dass zwingend der Sonderbau-Tatbestand des § 50 BauO NRW erfüllt sein muss.",
        ],
      },
      {
        id: "versammlungsstaette",
        title: "§ 15 SBauVO – Versammlungsstätten (breiteste Regelung)",
        paragraphs: [
          "Teil 1 gilt bei Versammlungsräumen für mehr als 200 Besucher, Freianlagen mit Szenenflächen/Tribünen für mehr als 1.000 bzw. 5.000 Besucher, Sportstadien für mehr als 5.000 Besucher. Ausnahmen Teil 1: Gottesdiensträume, Unterrichtsräume in Schulen, Ausstellungsräume in Museen, Fliegende Bauten (§ 1 Abs. 4 SBauVO).",
          "Zweck § 15 Abs. 1: Arbeitsvorgänge auf Bühnen und Szenenflächen sicher abschließen; Besucher, Mitwirkende und Betriebsangehörige finden sich bei vollständigem Versagen der Allgemeinbeleuchtung bis zu öffentlichen Verkehrsflächen zurecht.",
          "§ 14 SBauVO: Sicherheitsstromversorgung für die Sicherheitsbeleuchtung bei Stromausfall. § 36 Abs. 4: Während Personenaufenthalt in vorgeschriebenen Räumen muss Sicherheitsbeleuchtung in Betrieb sein, soweit kein ausreichendes Tageslicht – Ordnungswidrigkeit § 46 SBauVO.",
        ],
        table: {
          caption: "§ 15 Abs. 2 – Pflicht-Räume (gesetzliche Auflistung)",
          headers: ["Nr.", "Raum / Bereich", "Besonderheit"],
          rows: [
            ["1", "Notwendige Treppenräume", "—"],
            ["2", "Räume zwischen Treppenräumen und Ausgängen ins Freie", "—"],
            ["3", "Notwendige Flure", "—"],
            ["4", "Versammlungsräume", "—"],
            ["5", "Übrige Besucherräume (Foyers, Garderoben, Toiletten)", "Beispiele im Gesetz"],
            ["6", "Bühnen und Szenenflächen", "—"],
            ["7", "Räume für Mitwirkende/Beschäftigte > 20 m²", "Ausnahme: Büroräume"],
            ["8", "Elektrische Betriebsräume, haustechnische Räume, Scheinwerfer-/Bildwerferräume", "—"],
            ["9", "Freianlagen, Sportstadien, Freisportanlagen", "Nur bei Nutzung während der Dunkelheit"],
            ["10", "Sicherheitszeichen von Ausgängen und Rettungswegen", "Beleuchtung der Zeichen"],
            ["11", "Stufen", "Stufenbeleuchtung; Ausnahmen Abs. 3"],
          ],
        },
        list: [
          "§ 15 Abs. 3: Verdunkelte Versammlungsräume/Bühnen – Bereitschaftsschaltung",
          "Ausgänge, Gänge und Stufen im Versammlungsraum bei Verdunklung unabhängig von übriger Sicherheitsbeleuchtung erkennbar",
          "Keine Stufenbeleuchtung bei Gängen mit auswechselbarer Bestuhlung sowie bei Sportstadien/Freisportanlagen mit Sicherheitsbeleuchtung",
        ],
      },
      {
        id: "beherbergung",
        title: "§ 54 SBauVO – Beherbergungsstätten",
        paragraphs: [
          "Teil 2 ab mehr als 12 Gastbetten. Sicherheitsbeleuchtung in notwendigen Fluren und Treppenräumen, in Räumen zwischen Treppenräumen und Ausgängen ins Freie, für Sicherheitszeichen auf Ausgänge und für Stufen in notwendigen Fluren.",
          "Schmalerer Umfang als Versammlungsstätte: keine Pflicht in Gasträumen oder Besucherbereichen außerhalb der Rettungswegkette – Schwerpunkt Fluchtwegbeleuchtung. § 54 regelt zugleich Sicherheitsstromversorgung.",
          "Mehr zur Nutzung: [Beherbergungsstätten](/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw). Grundlagen Flure: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw).",
        ],
      },
      {
        id: "verkauf",
        title: "§ 77 SBauVO – Verkaufsstätten",
        paragraphs: [
          "Teil 3 ab mehr als 2.000 m² Verkaufsfläche. Zweck § 77 Abs. 1: Besucher und Betriebsangehörige finden sich bei Versagen der Allgemeinbeleuchtung bis zu öffentlichen Verkehrsflächen zurecht.",
        ],
        table: {
          caption: "§ 77 Abs. 2 – Pflicht-Räume",
          headers: ["Bereich", "Schwelle / Ausnahme"],
          rows: [
            ["Notwendige Treppenräume", "immer"],
            ["Räume zwischen Treppenräumen und Ausgängen ins Freie", "immer"],
            ["Notwendige Flure", "immer"],
            ["Verkaufsräume und übrige Besucherräume", "Toiletten erst ab > 50 m²"],
            ["Räume für Beschäftigte", "ab > 20 m², ausgenommen Büroräume"],
            ["Elektrische Betriebsräume und haustechnische Räume", "immer"],
            ["Sicherheitszeichen von Ausgängen und Rettungswegen", "Beleuchtung der Zeichen"],
            ["Stufen", "Stufenbeleuchtung"],
          ],
        },
      },
      {
        id: "hochhaus",
        title: "§ 108 SBauVO – Hochhäuser",
        paragraphs: [
          "Alle Hochhäuser (Gebäudehöhe > 22 m nach § 50 Abs. 2 Nr. 1 BauO NRW). Sicherheitsbeleuchtung geht bei Ausfall der Allgemeinbeleuchtung selbsttätig in Betrieb – in Rettungswegen, Vorräumen von Aufzügen und für Sicherheitszeichen von Rettungswegen.",
          "Engerer Umfang als Versammlungsstätte/Verkauf: keine Pflicht in Aufenthalts- oder Nutzungsräumen außerhalb der Rettungswege. „Rettungswege“ verweist auf die BauO-Kette §§ 33–36.",
          "§ 109 SBauVO: Sicherheitsstromversorgung mindestens 3 Stunden für u. a. Sicherheitsbeleuchtung. § 120 SBauVO: Ordnungswidrigkeit, wenn § 108 Abs. 1 nicht eingehalten wird – Sicherheitsbeleuchtung ständig in Betrieb.",
          "Vertiefung: [Hochhaus SBauVO](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
        ],
      },
      {
        id: "garagen",
        title: "§ 135 SBauVO – Garagen",
        paragraphs: [
          "Teil 5 gilt für alle Garagen – Sicherheitsbeleuchtung aber nur teilweise. Mittel- und Großgaragen: allgemeine elektrische Beleuchtung mit 1 Lux bzw. 20 Lux an Nutzflächen und Rettungswegen (§ 135 Abs. 1) – keine Sicherheitsbeleuchtung im engeren Sinne.",
          "Geschlossene Großgaragen – ausgenommen eingeschossige Großgaragen mit festem Benutzerkreis – müssen zur Beleuchtung der Rettungswege Sicherheitsbeleuchtung haben (§ 135 Abs. 2). Abs. 1 und 2 gelten nicht für automatische Garagen.",
          "Kleingaragen (≤ 100 m² Nutzfläche): keine Sicherheitsbeleuchtungspflicht nach § 135. Offene Garagen: nur allgemeine Beleuchtung, keine Sicherheitsbeleuchtung.",
        ],
      },
      {
        id: "betrieb",
        title: "Betriebspflichten im Gesetz",
        paragraphs: [
          "Versammlungsstätten § 36 Abs. 4: Sicherheitsbeleuchtung in Betrieb bei Personenaufenthalt, soweit kein ausreichendes Tageslicht.",
          "Hochhäuser § 108 Abs. 1 i. V. m. § 120 SBauVO: Sicherheitsbeleuchtung ständig in Betrieb halten.",
        ],
      },
      {
        id: "nicht-im-gesetz",
        title: "Was das Gesetz nicht regelt",
        paragraphs: [],
        list: [
          "Keine Systemwahl (Zentralbatterie, Einzelleuchte, dynamische Leitsysteme)",
          "Keine Beleuchtungsstärken für Sicherheitsbeleuchtung (außer Garagen-Allgemeinbeleuchtung 1/20 Lux in § 135 Abs. 1)",
          "Keine Einschaltzeiten, Wartungsintervalle oder Prüffristen im Gesetzestext",
          "Keine Legaldefinition „Sicherheitsbeleuchtung“ in § 2 BauO oder SBauVO",
          "Keine DIN EN 1838, DIN VDE 0108 oder VV TB im Gesetz – Ausführungstechnik separat",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Sicherheitsbeleuchtung – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            ["1", "SBauVO-Teil anwendbar?", "§ 50 BauO; §§ 1, 47, 60, 92, 121 SBauVO", "Ohne Einschlägigkeit: keine baurechtliche Pflicht"],
            ["2", "Versammlungsstätte?", "§ 1; § 15 SBauVO", "Ja – Raumliste Abs. 2"],
            ["3", "Beherbergung > 12 Gastbetten?", "§ 47; § 54 SBauVO", "Ja – Flure, Treppen, Übergang, Schilder, Stufen"],
            ["4", "Verkaufsstätte > 2.000 m²?", "§ 60; § 77 SBauVO", "Ja – analog VS, Toiletten ab 50 m²"],
            ["5", "Hochhaus > 22 m?", "§ 50 Abs. 2 Nr. 1; § 108 SBauVO", "Ja – Rettungswege, Aufzugsvorräume, Zeichen"],
            ["6", "Geschlossene Großgarage?", "§ 135 Abs. 2 SBauVO", "Ja – nur Rettungswege"],
            ["7", "Notwendiger Flur / Treppenraum?", "§§ 15, 54, 77, 108 SBauVO", "In allen vier Typen Pflicht, wenn Teil gilt"],
            ["8", "Büro der Beschäftigten > 20 m²?", "§ 15 Abs. 2; § 77 Abs. 2", "Ausgenommen"],
            ["9", "Freisportanlage nur tags?", "§ 15 Abs. 2 Nr. 9", "Pflicht nur bei Dunkelnutzung"],
            ["10", "Verdunkelter Versammlungsraum?", "§ 15 Abs. 3", "Bereitschaftsschaltung; Ausgänge unabhängig erkennbar"],
            ["11", "Personenaufenthalt (Versammlungsstätte)?", "§ 36 Abs. 4 SBauVO", "In Betrieb ohne ausreichendes Tageslicht"],
            ["12", "Hochhaus im Betrieb?", "§ 108 Abs. 1; § 120 SBauVO", "Ständig in Betrieb"],
            ["13", "Sicherheitsstromversorgung?", "§§ 14, 54, 80, 109 SBauVO", "Erforderlich je Sonderbau-Typ"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst nur BauO NRW und SBauVO NRW zusammen – ohne ArbStättV, ASR, DIN VDE 0108 oder PrüfVO NRW. In der Praxis können zusätzliche Anforderungen aus Konzepten, Versicherungen oder Arbeitsschutz entstehen; baurechtlich maßgeblich für die Pflichtfrage bleibt die SBauVO-Einschlägigkeit.",
          "Stromversorgung bei Netzausfall: [Sicherheitsstromversorgung](/ratgeber/sicherheitsstromversorgung-wann-pflicht-sbauvo-nrw) (§§ 14, 54, 80, 109 SBauVO). Grundlagen Rettungswege: [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw), [Sonderbauten](/ratgeber/sonderbauten-brandschutz).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sicherheitsstromversorgung-wann-pflicht-sbauvo-nrw", label: "Sicherheitsstrom" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/waende-notwendige-flure-bauo-nrw", label: "Notwendige Flure" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätten" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw", label: "Verkaufsstätten" },
      { href: "/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw", label: "Beherbergung" },
    ],
    faq: [
      {
        question: "Schreibt die BauO NRW Sicherheitsbeleuchtung vor?",
        answer:
          "Nein. § 14 und §§ 33–36 BauO NRW enthalten keine Beleuchtungspflicht. Maßgeblich sind §§ 15, 54, 77, 108 und 135 SBauVO NRW – jeweils nur für bestimmte Sonderbau-Arten.",
      },
      {
        question: "Braucht ein Bürogebäude Sicherheitsbeleuchtung?",
        answer:
          "Baurechtlich in NRW nicht, sofern kein Hochhaus (> 22 m) und keine andere SBauVO-Einschlägigkeit vorliegt. Büroräume der Beschäftigten sind in Versammlungsstätten und Verkaufsstätten sogar ausdrücklich von der Raumliste ausgenommen.",
      },
      {
        question: "Ab wann im Hotel?",
        answer:
          "SBauVO Teil 2 ab mehr als 12 Gastbetten (§ 47, § 54 SBauVO) – Flure, Treppenräume, Übergangsräume, Ausgangsschilder, Stufen in Fluren.",
      },
      {
        question: "Was gilt im Hochhaus?",
        answer:
          "§ 108 SBauVO: Sicherheitsbeleuchtung in Rettungswegen, Aufzugsvorräumen und an Sicherheitszeichen – selbsttätig bei Stromausfall, ständig in Betrieb (§ 120 SBauVO).",
      },
      {
        question: "Und in der Tiefgarage?",
        answer:
          "Nur in geschlossenen Großgaragen (§ 135 Abs. 2) – nicht in Kleingaragen, offenen Garagen oder automatischen Garagen. Allgemeinbeleuchtung 1/20 Lux ist etwas anderes als Sicherheitsbeleuchtung.",
      },
      {
        question: "Regelt das Gesetz Zentralbatterie oder Einzelleuchten?",
        answer:
          "Nein. Systemwahl, Lux-Werte (außer Garagen-Allgemeinbeleuchtung) und Prüffristen stehen nicht im Gesetzestext – technische Regeln sind separat.",
      },
      {
        question: "Muss Sicherheitsbeleuchtung tagsüber leuchten?",
        answer:
          "Versammlungsstätten § 36 Abs. 4: in Betrieb bei Personenaufenthalt, soweit kein ausreichendes Tageslicht. Hochhaus § 108: ständig in Betrieb.",
      },
    ],
  },
];
