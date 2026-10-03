/**
 * 17.08.2026 – Sicherheitstreppenraum (BauO / SBauVO NRW).
 * Quelle: Ausarbeitungen/Sicherheitstreppenraum_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_SICHERHEITSTREPPENRAUM: RatgeberArticle[] = [
  {
    slug: "sicherheitstreppenraum-bauo-sbauvo-nrw",
    title: "Sicherheitstreppenraum NRW: Wann ersetzt er den 2. Rettungsweg?",
    excerpt:
      "Sicherheitstreppenraum nach § 33 Abs. 4 BauO NRW: Feuer und Rauch dürfen nicht eindringen. Er ersetzt den zweiten Rettungsweg – nicht die notwendige Treppe. Hochhaus: SBauVO § 99 und Druckbelüftung § 105.",
    metaTitle: "Sicherheitstreppenraum NRW: § 33 Abs. 4 BauO | H&S+",
    metaDescription:
      "Sicherheitstreppenraum NRW: Definition, zweiter Rettungsweg, Flur 15 m, Hochhaus § 99/§ 105. Prüfkatalog für Planung und Genehmigung in Köln und NRW.",
    keywords: [
      "Sicherheitstreppenraum",
      "Sicherheitstreppenraum NRW",
      "§ 33 Abs. 4 BauO NRW",
      "zweiter Rettungsweg ersetzen",
      "SBauVO § 99",
      "Druckbelüftung Hochhaus",
      "Brandschutz Köln",
      "Vorraum Treppenraum",
    ],
    sections: [
      {
        id: "kurz",
        title: "Was ist ein Sicherheitstreppenraum?",
        paragraphs: [
          "Ein Sicherheitstreppenraum (STR) ist ein Treppenraum, in den Feuer und Rauch nicht eindringen können. Nach § 33 Abs. 4 BauO NRW kann er den zweiten Rettungsweg entbehrlich machen – wenn er sicher erreichbar ist.",
          "Er ersetzt nicht die notwendige Treppe (§ 34) und nicht den ersten Rettungsweg. Der STR ist eine besondere Qualitätsstufe des Treppenraums, kein Synonym für „notwendiger Treppenraum“ (§ 35).",
          "Normkette und Treppenraum-Pflicht: [Notwendige Treppe / Treppenraum](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw). Rettungsweg-Grundlagen: [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw).",
        ],
      },
      {
        id: "begriffe",
        title: "Treppe, Treppenraum, Sicherheitstreppenraum",
        paragraphs: [],
        table: {
          caption: "Drei Begriffe – nicht vermischen",
          headers: ["Begriff", "Funktion", "Norm"],
          rows: [
            ["Notwendige Treppe", "Vertikale Verbindung; oft erster Rettungsweg", "§ 34 BauO"],
            ["Notwendiger Treppenraum", "Geschützter Raum um die notwendige Treppe", "§ 35 BauO"],
            ["Sicherheitstreppenraum", "Feuer/Rauch dürfen nicht eindringen; kann 2. Rettungsweg ersetzen", "§ 33 Abs. 4; § 99 SBauVO"],
          ],
        },
      },
      {
        id: "paragraph-33",
        title: "§ 33 Abs. 4 BauO NRW – zweiter Rettungsweg",
        paragraphs: [
          "Wortlaut: Ein zweiter Rettungsweg ist nicht erforderlich, wenn die Rettung über einen sicher erreichbaren Treppenraum möglich ist, in den Feuer und Rauch nicht eindringen können (Sicherheitstreppenraum) – oder bei zu ebener Erde liegenden Räumen mit unmittelbarem Ausgang ins Freie in höchstens 15 m von jeder Stelle.",
          "Abs. 4 steht in der Rettungsweg-Systematik (§ 33), nicht in den Treppenraum-Bauarten (§ 35). Wirkung: Ausnahme vom zweiten Rettungsweg – nicht vom ersten und nicht von der notwendigen Treppe.",
          "Grenzfall ja: Büro mit nachgewiesenem STR und Stichflur ≤ 15 m – zweiter Weg über Feuerwehrfenster entfällt. Grenzfall nein: „Feuerbeständiger Treppenraum“ ohne Schutzzielnachweis – das allein ist kein STR.",
        ],
      },
      {
        id: "erreichbar",
        title: "„Sicher erreichbar“ und Flurlängen",
        paragraphs: [
          "§ 33 Abs. 4 verlangt einen sicher erreichbaren STR. Die BauO verknüpft das mit den Flur- und Treppenraumregeln:",
          "Notwendige Flure mit nur einer Fluchtrichtung zum Sicherheitstreppenraum: maximal 15 m (§ 36 Abs. 3 Satz 5). Parallel gilt die allgemeine 35-m-Regel: von jeder Stelle eines Aufenthaltsraums oder Kellers Ausgang in einen notwendigen Treppenraum oder ins Freie in höchstens 35 m (§ 35 Abs. 1).",
          "Flurwände und Brandlasten: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw), [Brandlasten in Fluren](/ratgeber/brandlasten-notwendige-flure-bauo-nrw).",
        ],
      },
      {
        id: "ausserhalb-hochhaus",
        title: "Außerhalb von Hochhäusern",
        paragraphs: [
          "§ 33 Abs. 4 gilt allgemein – nicht nur für Hochhäuser. Die BauO nennt für Standardgebäude vor allem das Schutzziel; eine fertige Checkliste wie Vorraum plus Druckbelüftung steht dort nicht.",
          "Ob Feuer und Rauch nicht eindringen können, ist außerhalb des Hochhaus-Teils der SBauVO im Einzelfall nachzuweisen – typisch im Brandschutzkonzept oder in der Stellungnahme, Abstimmung mit Bauaufsicht und Brandschutzdienststelle in Köln und NRW.",
        ],
      },
      {
        id: "hochhaus",
        title: "Hochhaus ab 22 m – wann greift die SBauVO?",
        paragraphs: [
          "Hochhäuser sind große Sonderbauten nach § 50 Abs. 2 Nr. 1 BauO NRW: Höhe nach § 2 Abs. 3 Satz 2 von mehr als 22 m (Fußbodenoberkante des höchsten Geschosses mit möglichem Aufenthaltsraum). Gebäudeklasse 5 allein ist nicht dasselbe wie Hochhaus.",
          "Dann greifen u. a. §§ 98–100 und § 105 SBauVO – Vertiefung: [Hochhaus Brandschutz NRW](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
        ],
      },
      {
        id: "paragraph-99",
        title: "SBauVO § 99 – Anzahl, Vorraum, Belichtung",
        paragraphs: [
          "Bis 60 m Höhe genügt an Stelle von zwei notwendigen Treppenräumen ein Sicherheitstreppenraum. Über 60 m müssen alle notwendigen Treppenräume als Sicherheitstreppenräume ausgebildet sein. Innenliegende notwendige Treppenräume oberirdischer Geschosse müssen als STR ausgebildet sein – bis 30 m können zwei innenliegende notwendige Treppenräume den STR ersetzen.",
          "Notwendige Treppenräume von Kellern dürfen mit denen oberirdischer Geschosse nicht in Verbindung stehen; innenliegende STR dürfen durchgehend sein.",
          "Innenliegend: Vorraum, in den Feuer und Rauch nicht eindringen können. Außenliegend: offener Gang im freien Luftstrom. Belichtung nur mit fester Verglasung. Ohne selbsttätige Feuerlöschanlage: vor den Vorräumen notwendige Flure; Abstand von der Tür zum STR oder notwendigen Treppenraum zu anderen Türen mindestens 3 m.",
        ],
        table: {
          caption: "Hochhaus-Matrix Sicherheitstreppenraum",
          headers: ["Höhe", "STR / Treppenräume (§ 99)", "Zusatz"],
          rows: [
            ["≤ 30 m", "Zwei innenliegende notwendige TR können den STR ersetzen", "Sonst innenliegende TR oberirdisch als STR"],
            ["≤ 60 m", "Ein STR statt zwei notwendiger Treppenräume", "Vorräume / offene Gänge; ggf. § 105"],
            ["> 60 m", "Alle notwendigen Treppenräume als STR", "Vorräume / offene Gänge; § 105"],
          ],
        },
      },
      {
        id: "umfeld-98-100",
        title: "Hochhaus-Umfeld: §§ 98 und 100",
        paragraphs: [
          "Der STR steht nicht isoliert. In Hochhäusern u. a.: Mindestbreite Rettungswege 1,20 m; Ausgang zu notwendigem Treppenraum, Vorraum des STR oder ins Freie in höchstens 35 m; getrennte Rettungswege aus Obergeschossen und Kellern ins Freie (§§ 98 / 99). Notwendige Flure: § 100 SBauVO.",
          "15 m Stichflur (BauO) und 35 m Ausgang (Hochhaus-SBauVO) sind verschiedene Prüfungen – beide können einschlägig sein.",
        ],
      },
      {
        id: "druckbelueftung",
        title: "Druckbelüftung § 105 SBauVO",
        paragraphs: [
          "Hochhäuser müssen getrennte lüftungstechnische Anlagen (Druckbelüftungsanlagen) für innenliegende Sicherheitstreppenräume und deren Vorräume haben (§ 105).",
          "Das ist die technische Konkretisierung des Schutzziels für innenliegende STR in Hochhäusern. Den Wortlaut und die Anlagenstruktur im Konzept klar darstellen – Auslösung und Prüfung typisch über Brandmeldeanlage und PrüfVO; siehe auch [Hochhaus](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog Sicherheitstreppenraum",
        paragraphs: [],
        table: {
          caption: "Planung und Nachweis – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Soll"],
          rows: [
            ["1", "STR statt 2. Rettungsweg?", "§ 33 Abs. 4", "Sicher erreichbar; Feuer/Rauch nicht eindringen"],
            ["2", "Notwendige Treppe / 1. Weg gesichert?", "§ 33 Abs. 2; § 34", "Ja – STR ersetzt keine Treppe"],
            ["3", "Sackflur nur zum STR?", "§ 36 Abs. 3 S. 5", "≤ 15 m"],
            ["4", "Ausgang zu TR / Freies?", "§ 35 Abs. 1", "≤ 35 m"],
            ["5", "Hochhaus (> 22 m)?", "§ 50 Abs. 2 Nr. 1", "Dann §§ 98–100 / § 105"],
            ["6", "Höhe ≤ 30 / ≤ 60 / > 60 m?", "§ 99 SBauVO", "Matrix anwenden"],
            ["7", "Innenliegender STR?", "§ 99", "Vorraum gegen Feuer/Rauch"],
            ["8", "Außenliegender STR?", "§ 99", "Offener Gang, freier Luftstrom"],
            ["9", "Belichtung?", "§ 99", "Nur feste Verglasung"],
            ["10", "Ohne selbsttätige Löschanlage?", "§ 99", "Flure vor Vorräumen; Türabstand ≥ 3 m"],
            ["11", "Druckbelüftung innenliegend?", "§ 105", "Getrennte Anlagen STR und Vorräume"],
            ["12", "HH: Ausgang ≤ 35 m zu TR/Vorraum/Freies?", "§ 98", "Ja"],
          ],
        },
      },
      {
        id: "grenzen",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Nur BauO NRW und SBauVO NRW – keine VV TB und keine DIN. Der Artikel ersetzt kein Brandschutzkonzept und keine behördliche Entscheidung.",
          "Verwandt: [Notwendige Treppenräume](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw), [Hochhaus](/ratgeber/hochhaus-brandschutz-sbauvo-nrw), [Dachfenster als 2. Rettungsweg](/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw", label: "Notwendige Treppenräume" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus Brandschutz" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw", label: "Dachfenster 2. Weg" },
      { href: "/ratgeber/waende-notwendige-flure-bauo-nrw", label: "Flure § 36" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätten baulich" },
      { href: "/ratgeber/entrauchung-rauchableitung-bauo-sbauvo-nrw", label: "Entrauchung" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept" },
    ],
    faq: [
      {
        question: "Was ist ein Sicherheitstreppenraum?",
        answer:
          "Ein Treppenraum, in den Feuer und Rauch nicht eindringen können. Nach § 33 Abs. 4 BauO NRW kann er den zweiten Rettungsweg ersetzen, wenn er sicher erreichbar ist.",
      },
      {
        question: "Ersetzt der Sicherheitstreppenraum die notwendige Treppe?",
        answer:
          "Nein. Er betrifft den zweiten Rettungsweg. Die notwendige Treppe (§ 34) und der erste Rettungsweg bleiben.",
      },
      {
        question: "Ist jeder feuerbeständige Treppenraum ein Sicherheitstreppenraum?",
        answer:
          "Nein. § 35 regelt den notwendigen Treppenraum. Der STR verlangt zusätzlich das Schutzziel aus § 33 Abs. 4 und in Hochhäusern die SBauVO-Konkretisierung (Vorraum/offener Gang, Druckbelüftung).",
      },
      {
        question: "Gilt der Sicherheitstreppenraum nur in Hochhäusern?",
        answer:
          "Die Ausnahme des § 33 Abs. 4 gilt allgemein. Die detaillierten Hochhaus-Anforderungen stehen in der SBauVO (§§ 98–100, § 105) für Gebäude über 22 m.",
      },
      {
        question: "Wann gelten 15 m, wann 35 m?",
        answer:
          "15 m: Stichflur mit nur einer Fluchtrichtung zum Sicherheitstreppenraum (§ 36 Abs. 3 Satz 5). 35 m: allgemeine Regel zum notwendigen Treppenraum oder ins Freie (§ 35 Abs. 1); in Hochhäusern zusätzlich Ausgang zu TR/Vorraum STR/Freies nach § 98 SBauVO.",
      },
      {
        question: "Ab wann ist ein Gebäude in NRW ein Hochhaus?",
        answer:
          "Wenn die Höhe nach § 2 Abs. 3 Satz 2 BauO NRW mehr als 22 m beträgt (§ 50 Abs. 2 Nr. 1) – Fußbodenoberkante des höchsten Geschosses mit möglichem Aufenthaltsraum.",
      },
      {
        question: "Braucht jeder innenliegende Sicherheitstreppenraum Druckbelüftung?",
        answer:
          "In Hochhäusern: ja nach § 105 SBauVO für innenliegende Sicherheitstreppenräume und deren Vorräume (getrennte Druckbelüftungsanlagen).",
      },
    ],
  },
];
