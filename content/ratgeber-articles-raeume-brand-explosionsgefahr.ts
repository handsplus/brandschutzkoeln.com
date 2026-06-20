/**
 * 20.11.2024 – Räume mit erhöhter Brand- und Explosionsgefahr (BauO NRW).
 * Quelle: Raeume_erhoehte_Brand_Explosionsgefahr_BauO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_RAEUME_BRAND_EXPLOSIONSGEFAHR: RatgeberArticle[] = [
  {
    slug: "raeume-brand-explosionsgefahr-bauo-nrw",
    title: "Wann braucht ein Raum feuerbeständige Wände und Decken?",
    excerpt:
      "Technikraum, Lager mit brennbaren Stoffen oder Produktion mit Explosionsgefahr: Die BauO NRW nennt keine Raumliste – aber strenge Rechtsfolgen. Wann feuerbeständige Kapselung, wann Sonderbau und was GK 1/2 ausnimmt.",
    metaTitle: "Brand- und Explosionsgefahr Räume BauO NRW | H&S+",
    metaDescription:
      "Räume mit erhöhter Brand- und Explosionsgefahr BauO NRW: § 29 feuerbeständige Trennwände, § 31 Decken, § 50 Sonderbau, § 102 SBauVO Hochhaus – gesetzliche Kriterien ohne Praxis-Katalog.",
    keywords: [
      "erhöhte Brandgefahr Raum BauO NRW",
      "Explosionsgefahr Raum",
      "§ 29 Abs. 2 Nr. 2 BauO NRW",
      "feuerbeständige Trennwand",
      "Sonderbau Stoffe § 50",
      "§ 31 Abs. 4 Decken",
    ],
    sections: [
      {
        id: "frage",
        title: "Kein Heizraum im Gesetz – aber harte Rechtsfolgen",
        paragraphs: [
          "In Plänen und Gutachten taucht der Begriff schnell auf: „Raum mit erhöhter Brand- und Explosionsgefahr“. Gemeint ist dann oft ein Technikraum, ein Lager mit brennbaren Stoffen oder ein Bereich mit explosionsfähigen Gemischen. Die BauO NRW listet aber keine Raumtypen auf – weder Heizraum noch Lackierkabine noch Umspannstation.",
          "Stattdessen knüpft das Gesetz an die Nutzung: Gibt es in einem räumlich abgrenzbaren Bereich Stoffe mit Explosionsgefahr und/oder erhöhter Brandgefahr, folgen verschärfte bauliche Anforderungen – feuerbeständige Trennwände, feuerbeständige Decken unter und über dem Raum, ggf. Sonderbau für die gesamte Anlage.",
          "§ 2 BauO NRW definiert Aufenthaltsraum, Feuerstätte, Nutzungseinheit und Geschoss – aber nicht „erhöhte Brandgefahr“ oder „Explosionsgefahr“. Die Zuordnung ist eine tatbestandliche Feststellung im Genehmigungsverfahren auf Grundlage der tatsächlichen Nutzung und der dort umgegangenen oder gelagerten Stoffe.",
          "Dieser Ratgeber fasst ausschließlich BauO NRW und SBauVO-Auszüge zusammen – ohne VV TB, Muster-Richtlinien, Gefahrstoffrecht oder Minutenklassen (F90, T30). Verwandte Normen: [Sonderbauten](/ratgeber/sonderbauten-brandschutz), [Gebäudeklassen](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw), [Explosionsschutz-Schnittstelle](/ratgeber/explosionsschutz-brandschutz-schnittstelle).",
        ],
      },
      {
        id: "wortlaut",
        title: "Zwei Formulierungen im Gesetz",
        paragraphs: [
          "Der Begriff erscheint in der BauO NRW in zwei Zusammenhängen: raumbezogen (Einzelraum → Wände und Decken) und stoffbezogen (gesamte Anlage → Sonderbau). In der SBauVO NRW gibt es eine dritte Variante für Hochhäuser – nur mit „erhöhter Brandgefahr“, ohne das Wort Explosions.",
        ],
        table: {
          caption: "Formulierungen und Bezugsebene",
          headers: ["Formulierung", "Bezugsebene", "Norm"],
          rows: [
            [
              "Räume mit Explosions- oder erhöhter Brandgefahr",
              "Einzelner Raum → Trennwände; Decken unter und über",
              "§ 29 Abs. 2 Nr. 2, § 31 Abs. 4",
            ],
            [
              "Stoffe mit Explosions- oder erhöhter Brandgefahr; Umgang oder Lagerung",
              "Gesamte bauliche Anlage → Sonderbau",
              "§ 50 Abs. 1",
            ],
            [
              "Räume mit erhöhter Brandgefahr",
              "Hochhaus: Höchst-Grundfläche",
              "§ 102 SBauVO",
            ],
          ],
        },
      },
      {
        id: "ebenen",
        title: "Drei Ebenen: Raum, Gebäude, Hochhaus",
        paragraphs: [
          "Raumebene (§§ 29, 31): Räume mit Explosions- oder erhöhter Brandgefahr müssen durch feuerbeständige Trennwände abgeschlossen werden. Die Decken unter und über diesen Räumen müssen feuerbeständig sein – eine geschossübergreifende raumabschließende Hülle (Zweck: Brandausbreitung und Explosionsfolgen sollen den Raum nicht ungehindert in angrenzende Bereiche übertragen, vgl. § 14, § 26 Abs. 3).",
          "Gebäudeebene (§ 50 Abs. 1): Ist die Nutzung einer gesamten baulichen Anlage durch Umgang oder Lagerung entsprechender Stoffe verbunden, ist sie Sonderbau – unabhängig von Flächenschwellen anderer Sonderbau-Tatbestände. Folge: Sonderbauvorschriften der BauO NRW und SBauVO NRW.",
          "Hochhaus-Ebene (§ 102 SBauVO): Grundfläche von Räumen mit erhöhter Brandgefahr höchstens 400 m²; in Hochhäusern nach § 115 SBauVO ohne selbsttätige Feuerlöschanlage höchstens 200 m². Auch hier keine Legaldefinition, welche Räume gemeint sind.",
        ],
      },
      {
        id: "kriterien",
        title: "Gesetzlich ableitbare Prüfmerkmale",
        paragraphs: [
          "Das Gesetz gibt kein abschließendes Verzeichnis von Räumen vor. Aus dem Wortlaut lassen sich nur diese Merkmale ableiten:",
        ],
        table: {
          caption: "Wann ein Raum unter den Begriff fallen kann",
          headers: ["Nr.", "Merkmal", "Grundlage"],
          rows: [
            ["1", "Räumlich abgrenzbarer Bereich innerhalb eines Geschosses", "§ 29 Abs. 1, Abs. 2 Nr. 2"],
            [
              "2",
              "Nutzung mit Stoffen, die Explosionsgefahr und/oder erhöhte Brandgefahr mit sich bringen",
              "§ 50 Abs. 1 (Umgang oder Lagerung)",
            ],
            ["3", "Gefährdung durch die bestimmte Nutzung des Raums bzw. der Anlage geprägt", "§ 50 Abs. 1 („verbunden ist“)"],
            ["4", "„Erhöht“ setzt Steigerung gegenüber Regelzustand voraus – nicht quantifiziert im Gesetz", "Keine Definition in § 2"],
            ["5", "Explosionsgefahr und erhöhte Brandgefahr sind selbständige Alternativen („oder“)", "§ 29 Abs. 2 Nr. 2"],
          ],
        },
        list: [
          "Die Gebäudeklasse steuert nicht, ob ein Raum unter den Begriff fällt – nur Ausnahmen von den Rechtsfolgen (siehe Rechtsfolgen-Tabelle).",
        ],
      },
      {
        id: "rechtsfolgen",
        title: "Was das Gesetz verlangt",
        paragraphs: [
          "Für Räume mit Explosions- oder erhöhter Brandgefahr nennt § 26 Abs. 2 ausdrücklich die Stufe feuerbeständig – die höchste im Gesetz genannte Kategorie für Trennwände und Decken. Konkrete Minutensklassen stehen nicht im Gesetzestext; sie folgen aus den Technischen Baubestimmungen (§ 3 Abs. 2 BauO NRW).",
        ],
        table: {
          caption: "Rechtsfolgen bei Brand- und Explosionsgefahr",
          headers: ["Rechtsfolge", "Anforderung", "Norm", "Ausnahmen"],
          rows: [
            [
              "Trennwand zum Abschluss des Raums",
              "Feuerbeständig",
              "§ 29 Abs. 2 Nr. 2, Abs. 3",
              "Führung bis Rohdecke bzw. im Dachraum bis unter Dachhaut (Abs. 4); Öffnungen nur erforderlich, feuerhemmend, dicht und selbstschließend (Abs. 5)",
            ],
            [
              "Decken unter und über dem Raum",
              "Feuerbeständig",
              "§ 31 Abs. 4",
              "Wohngebäude GK 1 und 2; Trennung landwirtschaftlich/vergleichbar genutzter Teil und Wohnteil",
            ],
            [
              "Gesamte bauliche Anlage",
              "Sonderbau",
              "§ 50 Abs. 1",
              "Unabhängig von anderen Sonderbau-Schwellen; SBauVO NRW ergänzend",
            ],
            [
              "Grundfläche des Raums (Hochhaus)",
              "Max. 400 m²; max. 200 m² bei § 115 ohne SEL",
              "§ 102 SBauVO",
              "Nur Hochhäuser",
            ],
            [
              "§ 29 insgesamt",
              "Keine Anwendung",
              "§ 29 Abs. 6",
              "Wohngebäude GK 1 und 2 – Trennwandpflicht nach Abs. 2 entfällt",
            ],
          ],
        },
      },
      {
        id: "normkette",
        title: "Normkette",
        paragraphs: [
          "Vom allgemeinen Brandschutzauftrag bis zur konkreten Kapselung und Sonderbau-Einstufung:",
        ],
        list: [
          "§ 3 Abs. 1 – Allgemeine Schutzpflicht",
          "§ 14 – Brandschutz: Vorbeugung, Rettung, Löscharbeiten",
          "§ 26 Abs. 3 – Feuerwiderstandsfähigkeit raumabschließender Bauteile",
          "§ 29 Abs. 2 Nr. 2 – Tatbestand: feuerbeständiger Abschluss",
          "§ 31 Abs. 4 – Feuerbeständige Decken unter und über dem Raum",
          "§ 50 Abs. 1 – Sonderbau bei Stoff-Nutzung",
          "§ 102 SBauVO – Flächenbegrenzung im Hochhaus",
        ],
      },
      {
        id: "flure",
        title: "Verhältnis zu notwendigen Fluren",
        paragraphs: [
          "§ 29 Abs. 2 Nr. 1 schließt notwendige Flure von der Trennwandpflicht zwischen Nutzungseinheiten aus. Nr. 2 (Brand-/Explosionsgefahr-Räume) ist davon nicht ausgenommen: Gefährliche Räume müssen auch gegenüber Fluren, die Rettungswege sind, durch feuerbeständige Trennwände abgeschlossen werden – sofern § 29 insgesamt anwendbar ist.",
          "Öffnungen in diesen Trennwänden: nur in erforderlicher Zahl und Größe, mit feuerhemmenden, dichten und selbstschließenden Abschlüssen (§ 29 Abs. 5). Details zu Flurwänden: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw), zu Türen: [Brandschutztüren](/ratgeber/tuerarten-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "abgrenzung",
        title: "Nicht verwechseln mit § 42, § 44 und BHKG",
        paragraphs: [
          "§ 44 BauO NRW – Aufbewahrung fester Abfallstoffe: In GK 3 bis 5 nur in Räumen mit Trennwänden und Decken in Feuerwiderstandsfähigkeit der tragenden Wände, feuerhemmenden Öffnungsabschlüssen, Entleerung vom Freien und ständiger Lüftung. Der Gesetzestext verwendet nicht die Formulierung „Explosions- oder erhöhter Brandgefahr“ – eigener, abschließender Nutzungstatbestand.",
          "§ 42 BauO NRW – Feuerungsanlagen und brennbare Stoffe: Feuerstätten nur, wenn nach Art, Lage, Größe, Beschaffenheit und Nutzung keine Gefahren entstehen; Behälter und Rohrleitungen für brennbare Gase und Flüssigkeiten brandsicher; feste Brennstoffe gefahrlos lagern. Nicht dieselbe Tatbestandswirkung wie § 29 Abs. 2 Nr. 2 – kann dieselben Räume betreffen, verschiedene Anforderungssysteme.",
          "§ 50 Abs. 1 nennt zusätzlich Regallager mit Oberkante Lagerguthöhe über 9 m als eigenständigen Sonderbau – ohne Bezug auf Explosions- oder Brandgefahr-Stoffe. Regallager und Stoff-Sonderbau können unabhängig voneinander greifen.",
          "§§ 26 und 27 BHKG NRW (Brandverhütungsschau, Brandsicherheitswachen) verwenden verwandte Formulierungen, regeln aber Betriebs- und Veranstaltungsüberwachung – nicht die baurechtliche Raumklassifikation. Für die Frage im Baurecht sind §§ 29, 31, 50 BauO NRW maßgeblich.",
        ],
      },
      {
        id: "nicht-im-gesetz",
        title: "Was das Gesetz nicht regelt",
        paragraphs: [
          "Wer im Genehmigungsverfahren prüft, ob ein Raum unter den Begriff fällt, findet im Gesetz bewusst keine Checkliste mit Raumbezeichnungen. Folgendes steht ausdrücklich nicht in der BauO NRW:",
        ],
        list: [
          "Keine Auflistung bestimmter Raumtypen (Heizraum, Umspannraum, Lackierkabine, Keller, Technikraum …)",
          "Keine Bezugnahme auf Gefahrstoffverordnung, Betriebssicherheitsverordnung oder TRGS im BauO-Wortlaut",
          "Keine Mengen-, Temperatur- oder Entzündlichkeitsschwellen zur Abgrenzung „erhöht“ (außer SBauVO-Grundflächen im Hochhaus)",
          "Keine Legaldefinition in § 2 BauO NRW",
          "Kein eigener SBauVO-Raumkatalog für Stoff-Sonderbauten nach § 50",
          "Keine Minutenklassen im Gesetz – nur feuerbeständig, hochfeuerhemmend, feuerhemmend",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Checkliste für Planung und Genehmigung – nur auf Gesetzeswortlaut.",
        ],
        table: {
          caption: "Prüfpunkte Brand- und Explosionsgefahr",
          headers: ["Nr.", "Prüffrage", "Norm", "Folge bei „Ja“"],
          rows: [
            [
              "1",
              "Umgang oder Lagerung von Stoffen mit Explosions- und/oder erhöhter Brandgefahr im Raum?",
              "§ 29 Abs. 2 Nr. 2; § 50 Abs. 1",
              "Raum unter § 29 Abs. 2 Nr. 2; ggf. Anlage = Sonderbau",
            ],
            ["2", "Wohngebäude GK 1 oder 2?", "§ 29 Abs. 6", "§ 29 nicht anwendbar"],
            ["3", "§ 29 anwendbar?", "§ 29 Abs. 2 Nr. 2, Abs. 3", "Trennwand feuerbeständig"],
            ["4", "Trennwand bis Rohdecke / im Dachraum bis unter Dachhaut?", "§ 29 Abs. 4", "Pflicht"],
            ["5", "Öffnungen in Trennwand?", "§ 29 Abs. 5", "Nur erforderlich; feuerhemmend, dicht, selbstschließend"],
            ["6", "Kein Wohngebäude GK 1/2 (Decken-Ausnahme)?", "§ 31 Abs. 4", "Decken unter und über feuerbeständig"],
            ["7", "Landwirtschaftlicher Teil neben Wohnteil?", "§ 31 Abs. 4", "Feuerbeständige Decke zwischen Teilen"],
            ["8", "Stoff-Nutzung auf Anlagenebene?", "§ 50 Abs. 1", "Sonderbau → SBauVO prüfen"],
            ["9", "Hochhaus?", "§ 102 SBauVO", "Grundfläche max. 400 m² (200 m² bei § 115 ohne SEL)"],
            ["10", "Feste Abfallstoffe in GK 3–5 im Gebäude?", "§ 44", "Eigener Tatbestand – nicht § 29 Nr. 2"],
            ["11", "Feuerstätten oder brennbare Gase/Flüssigkeiten/feste Brennstoffe?", "§ 42; § 2", "Eigene Anforderungen parallel prüfen"],
            ["12", "Brandverhütungsschau oder Brandsicherheitswache?", "§§ 26, 27 BHKG", "Parallelrecht – ändert nicht Baurecht"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Die konkrete Zuordnung „Ist Raum X betroffen?“ ist eine Feststellung im Genehmigungsverfahren – auf Grundlage von Nutzung und Stoffen, nicht auf Grund einer Raumbezeichnung im Plan. Verbindlich sind Grundrisse und die Entscheidung der Bauaufsichtsbehörde.",
          "Gefahrstoffrecht, Betriebssicherheit und [Kraftstofflagerung](/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz) laufen parallel zum Baurecht – sie ersetzen die baulichen Anforderungen der §§ 29, 31 und 50 nicht.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten § 50" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/industriebau-lagerhalle-indbaur-nrw", label: "Industriebau NRW" },
      { href: "/ratgeber/explosionsschutz-brandschutz-schnittstelle", label: "Explosionsschutz" },
      { href: "/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz", label: "Kraftstofflagerung" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus SBauVO" },
    ],
    faq: [
      {
        question: "Listet die BauO NRW bestimmte Raumtypen auf?",
        answer:
          "Nein. § 2 BauO NRW definiert den Begriff nicht. Maßgeblich sind Nutzung und Stoffe im Raum – keine Bezeichnung wie „Heizraum“ oder „Technikraum“ im Gesetz.",
      },
      {
        question: "Welche Wände und Decken sind nötig?",
        answer:
          "§ 29 Abs. 2 Nr. 2 und Abs. 3: feuerbeständige Trennwände zum Abschluss. § 31 Abs. 4: feuerbeständige Decken unter und über dem Raum – Ausnahme Wohngebäude GK 1 und 2.",
      },
      {
        question: "Wann wird die ganze Anlage Sonderbau?",
        answer:
          "§ 50 Abs. 1: Wenn die Nutzung der gesamten baulichen Anlage durch Umgang oder Lagerung von Stoffen mit Explosions- oder erhöhter Brandgefahr verbunden ist – unabhängig von anderen Sonderbau-Schwellen.",
      },
      {
        question: "Gilt das in einem Zweifamilienhaus?",
        answer:
          "§ 29 Abs. 6: In Wohngebäuden GK 1 und 2 gelten die Absätze 1 bis 5 nicht – keine Trennwandpflicht nach § 29, einschließlich Nr. 2. § 31 Abs. 4 enthält dieselbe Decken-Ausnahme für GK 1/2-Wohngebäude.",
      },
      {
        question: "Was ist der Unterschied zu § 44 Abfallräumen?",
        answer:
          "§ 44 regelt Aufbewahrung fester Abfallstoffe mit eigenen Anforderungen – ohne die Formulierung Explosions- oder erhöhter Brandgefahr. Eigenständiger Tatbestand, nicht identisch mit § 29 Abs. 2 Nr. 2.",
      },
      {
        question: "Gilt § 102 SBauVO auch für Explosionsgefahr?",
        answer:
          "§ 102 SBauVO spricht nur von „Räumen mit erhöhter Brandgefahr“ – Flächenobergrenze 400 m² (200 m² bei Hochhaus § 115 ohne SEL). Keine gesonderte Explosions-Formulierung in dieser Norm.",
      },
      {
        question: "Reicht Gefahrstoffrecht statt BauO?",
        answer:
          "Nein. TRGS, BetrSichV und Explosionsschutzdokument regeln Arbeitssicherheit – parallel zum baurechtlichen Kapselungsschutz nach §§ 29, 31 und 50 BauO NRW.",
      },
    ],
  },
];
