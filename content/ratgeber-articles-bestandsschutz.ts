/**
 * Bestandsschutz im Brandschutz – BauO NRW (Ausarbeitung Juni 2026).
 * Quelle: Bestandsschutz_Brandschutz_BauO_NRW.html
 * Slug unverändert: bestandsschutz-technische-sanierung-bauo-nrw
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BESTANDSSCHUTZ: RatgeberArticle[] = [
  {
    slug: "bestandsschutz-technische-sanierung-bauo-nrw",
    title: "Bestandsschutz im Brandschutz – § 59 und § 69 BauO NRW",
    excerpt:
      "Die BauO NRW kennt keinen Paragraphen „Bestandsschutz“. Maßgeblich sind § 59 (bestehende Anlagen), § 69 (Abweichungen §§ 26–49) und behördliche Eingriffe. Normkette, Entscheidungstabellen und Prüfkatalog.",
    metaTitle: "Bestandsschutz Brandschutz NRW | § 59 BauO",
    metaDescription:
      "Bestandsschutz BauO NRW: § 59 bestehende Anlagen, § 69 Abweichungen Brandschutz, § 60 Abs. 2, § 82 – wann Nachrüstung, wann Weiterbetrieb. Gesetzliche Prüfpunkte.",
    keywords: [
      "Bestandsschutz BauO NRW",
      "§ 59 BauO Bestand",
      "§ 69 Abweichung Brandschutz",
      "bestehende Anlagen Brandschutz",
      "wesentliche Änderung BauO NRW",
      "Nutzungsänderung Bestand",
    ],
    sections: [
      {
        id: "systematik",
        title: "Systematik: kein § „Bestandsschutz“",
        paragraphs: [
          "Die BauO NRW kennt keinen Paragraphen „Bestandsschutz“. Maßgeblich ist das System um § 59 BauO NRW (bestehende Anlagen), ergänzt durch § 69 (Abweichungen), § 60 Abs. 2 (Eingriff trotz Genehmigungsfreiheit) und die behördlichen Eingriffsbefugnisse der §§ 58, 82 und 84 BauO NRW.",
          "Brandschutz-Anforderungen für Bestand sind die Vorschriften der §§ 26 bis 49 BauO NRW sowie aufgrund des Gesetzes erlassene Vorschriften (z. B. SBauVO NRW).",
          "Anlagen sind so anzuordnen, zu errichten, zu ändern und instand zu halten, dass Leben, Gesundheit und öffentliche Sicherheit nicht gefährdet werden – auch bei Nutzungsänderung (§ 3 Abs. 1 BauO NRW). Für rechtmäßig bestehende Anlagen begrenzt § 59 Abs. 1, wann die Behörde Nachrüstung verlangen darf.",
        ],
        list: [
          "§ 3 Abs. 1 – Dauerhafte Schutzpflicht, auch bei Nutzungsänderung",
          "§ 59 Abs. 1 – Weiterbetrieb: Nachrüstung nur bei Einzelfall-Gefahr für Leben und Gesundheit",
          "§ 59 Abs. 2 – Wesentliche Änderung: Nachrüstung im konstruktiven Zusammenhang",
          "§ 69 Abs. 1 – Abweichungen von §§ 26–49 bei bestehenden Anlagen",
          "§ 69 Abs. 1a – Sachverständigenbescheinigung Brandschutz statt Abweichungszulassung",
          "§ 60 Abs. 2 – Genehmigungsfreiheit schützt nicht vor Eingriffsbefugnissen",
          "§§ 82, 84 – Nutzungsuntersagung, Nutzungsverbot bis zur Prüfung",
        ],
      },
      {
        id: "rechtsfiguren",
        title: "Rechtsfiguren im Überblick",
        paragraphs: [
          "Die gesetzlichen Regelungen für rechtmäßig bestehende Anlagen – ohne umgangssprachliche Kurzbezeichnungen.",
        ],
        table: {
          caption: "Bestand und Brandschutz – Rechtsfiguren BauO NRW",
          headers: ["Rechtsfigur", "Norm", "Funktion"],
          rows: [
            [
              "Weiterbetrieb ohne Nachrüstung",
              "§ 59 Abs. 1",
              "Anpassung nur, wenn im Einzelfall wegen Abwehr von Gefahren für Leben und Gesundheit erforderlich",
            ],
            [
              "Nachrüstung bei wesentlicher Änderung",
              "§ 59 Abs. 2",
              "Nicht unmittelbar berührte, nicht vorschriftsmäßige Bauteile im konstruktiven Zusammenhang – ohne unverhältnismäßigen Mehraufwand",
            ],
            [
              "Abweichung von Brandschutzvorschriften",
              "§ 69 Abs. 1",
              "Abweichungen von §§ 26 bis 49 u. a. bei Modernisierung, Energieeinsparung, Nutzungsänderung, Denkmal",
            ],
            [
              "Sachverständigenbescheinigung",
              "§ 69 Abs. 1a",
              "Keine Abweichungszulassung nötig, wenn SV nach § 87 Abs. 2 Brandschutz oder Standsicherheit bescheinigt",
            ],
            [
              "Eingriffe trotz Genehmigungsfreiheit",
              "§ 60 Abs. 2",
              "Genehmigungsfreiheit entbindet nicht von öffentlich-rechtlichen Vorschriften; Eingriffsbefugnisse bleiben",
            ],
            [
              "Beseitigung / Nutzungsuntersagung",
              "§ 82 Abs. 3",
              "Nutzung im Widerspruch zu öffentlich-rechtlichen Vorschriften kann untersagt werden",
            ],
            [
              "Nachprüfung Bestand per Verordnung",
              "§ 87 Abs. 1",
              "Ermächtigung zur Erstreckung der Nachprüfungspflicht auf bestehende Anlagen (z. B. SBauVO NRW)",
            ],
          ],
        },
      },
      {
        id: "para59",
        title: "§ 59 BauO NRW – bestehende Anlagen",
        paragraphs: [
          "§ 59 Abs. 1: Entsprechen rechtmäßig bestehende Anlagen nicht den Vorschriften dieses Gesetzes oder aufgrund dieses Gesetzes erlassenen Vorschriften, so kann verlangt werden, dass die Anlagen angepasst werden, wenn dies im Einzelfall wegen der Abwehr von Gefahren für Leben und Gesundheit erforderlich ist. Ein alleiniger Bestandsmangel rechtfertigt keine pauschale Nachrüstung – die Behörde muss einen Einzelfall mit Gefahr für Leben und Gesundheit begründen.",
          "§ 59 Abs. 2: Sollen Anlagen wesentlich geändert werden, so kann gefordert werden, dass auch nicht unmittelbar berührte Teile in Einklang gebracht werden, wenn die nicht vorschriftsmäßigen Bauteile mit den Änderungen in einem konstruktiven Zusammenhang stehen und die Nachrüstung nicht berührter Teile keinen unverhältnismäßigen Mehraufwand verursacht. In diesem Zusammenhang sind angemessene Regelungen zur Barrierefreiheit zu treffen.",
        ],
        table: {
          caption: "Entscheidungstabelle § 59 BauO NRW",
          headers: ["Situation", "Rechtsfolge", "Norm"],
          rows: [
            [
              "Rechtmäßig bestehende Anlage, kein Vorhaben, Mangel gegenüber heutigem Recht",
              "Weiterbetrieb grundsätzlich möglich; Nachrüstung nur bei Einzelfall-Gefahr für Leben und Gesundheit",
              "§ 59 Abs. 1",
            ],
            [
              "Rechtmäßig bestehende Anlage, wesentliche Änderung geplant",
              "Nachrüstung nicht unmittelbar berührter Bauteile im konstruktiven Zusammenhang möglich",
              "§ 59 Abs. 2",
            ],
            [
              "Nachrüstung nicht berührter Teile verursacht unverhältnismäßigen Mehraufwand",
              "Keine Pflicht nach § 59 Abs. 2; ggf. Abweichung nach § 69",
              "§ 59 Abs. 2; § 69",
            ],
            [
              "Nutzungsänderung ohne wesentliche bauliche Änderung",
              "§ 59 Abs. 2 greift nicht unmittelbar; § 3 Abs. 1 Satz 3 und ggf. § 69; Eingriffe nach § 82 bei Widerspruch",
              "§ 3 Abs. 1; § 69; § 82",
            ],
          ],
        },
      },
      {
        id: "para69",
        title: "§ 69 BauO NRW – Abweichungen",
        paragraphs: [
          "§ 69 Abs. 1 Satz 1: Die Bauaufsichtsbehörde kann Abweichungen zulassen, wenn sie mit den öffentlichen Belangen, insbesondere § 3, vereinbar ist; wird der Zweck der Anforderung nachweisbar auch unter Zulassung der Abweichung erreicht, soll die Abweichung zugelassen werden. Vertiefung: [Abweichungen § 69 Erlass](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
          "§ 69 Abs. 1 Satz 2: Abweichungen von den §§ 4 bis 16 und § 26 bis § 49 sind bei bestehenden Anlagen zuzulassen zur Modernisierung von Wohnungen und Wohngebäuden (Baugenehmigung mindestens fünf Jahre zurück), zur Energie- oder Wassereinsparung, bei Nutzungsänderungen oder zur Erhaltung von Denkmälern.",
          "§§ 26–49 umfassen u. a. Brandverhalten (§ 26), Brandwände (§ 30), Rettungswege (§§ 33, 37), Treppen und Flure (§§ 34–36), Leitungen (§ 40), Lüftung (§ 41) und Sonderbauten-Verweis (§ 50).",
          "Abgrenzung: § 59 steuert den Weiterbetrieb ohne Vorhaben (Nachrüstung nur bei Einzelfall-Gefahr). § 69 eröffnet bei einem Vorhaben die Zulassung, von Vorschriften abzuweichen. Eine §-69-Abweichung schließt die Genehmigungsfreistellung aus (§ 63 Abs. 2 Nr. 4) – Abs. 1a rettet die Freistellung nicht.",
          "§ 69 Abs. 1a: Der Zulassung einer Abweichung bedarf es nicht, wenn sachverständige Personen nach § 87 Abs. 2 bescheinigen, dass das Vorhaben den Anforderungen an den Brandschutz oder an die Standsicherheit entspricht und das Vorliegen der Voraussetzungen für Abweichungen bescheinigt wird.",
        ],
        table: {
          caption: "Abweichung oder Sachverständigenbescheinigung",
          headers: ["Verfahren", "Voraussetzung", "Entscheidung", "Norm"],
          rows: [
            [
              "Abweichungsantrag",
              "Tatbestand § 69 Abs. 1 Satz 2; Antrag in Textform mit Begründung",
              "Bauaufsichtsbehörde",
              "§ 69 Abs. 1, 3, 4",
            ],
            [
              "Sachverständigenbescheinigung",
              "SV nach § 87 Abs. 2 bescheinigt Brandschutz/Standsicherheit und Abweichungsvoraussetzungen",
              "Keine behördliche Abweichungszulassung erforderlich",
              "§ 69 Abs. 1a",
            ],
          ],
        },
      },
      {
        id: "eingriffe",
        title: "Verfahren und behördliche Eingriffe",
        paragraphs: [
          "§ 60 Abs. 2: Genehmigungsfreiheit nach §§ 61 bis 63, 78 und 79 Abs. 1 Satz 1 sowie Beschränkung der Prüfung nach § 64 entbinden nicht von öffentlich-rechtlichen Vorschriften und lassen Eingriffsbefugnisse unberührt.",
          "§ 58 Abs. 4: Auch nach Baugenehmigung können Anforderungen gestellt werden, um nicht voraussehbare Gefahren abzuwenden – entsprechend bei genehmigungsfreien Anlagen.",
          "§ 82 Abs. 1: Werden Anlagen im Widerspruch zu öffentlich-rechtlichen Vorschriften errichtet, geändert oder beseitigt, kann die Einstellung der Arbeiten angeordnet werden.",
          "§ 82 Abs. 3: Werden Anlagen im Widerspruch errichtet oder geändert, kann Beseitigung angeordnet werden. Wird im Widerspruch genutzt, kann die Nutzung untersagt werden – unabhängig vom Bestandsalter und § 59 Abs. 1.",
          "§ 84 Abs. 5: Die Behörde kann verlangen, dass Anlagen erst benutzt werden, wenn sie oder ein beauftragter Sachverständiger sie geprüft hat.",
        ],
      },
      {
        id: "streu",
        title: "Weitere Normen mit Bestandsbezug",
        paragraphs: [
          "Zusätzliche gesetzliche Regelungen mit Brandschutzbezug für bestehende Anlagen.",
        ],
        table: {
          caption: "Streu-Normen – Bestand und Brandschutz",
          headers: ["Norm", "Kerninhalt", "Bestandsbezug"],
          rows: [
            [
              "§ 4 Abs. 2 Satz 2–4",
              "Bei bestehenden Gebäuden nicht für Außenwand- und Dachdämmung; entsprechend für zusammenhängende Bauteiländerungen",
              "Energetische Sanierung",
            ],
            [
              "§ 6 Abs. 11 Satz 3",
              "Darüber hinausgehende Abstandsänderungen können unter Würdigung der Belange des Brandschutzes zugelassen werden",
              "Dachgeschoss-Ausbau, gleichartige Kubatur",
            ],
            [
              "§ 39 Abs. 1 Satz 2",
              "Aufzugspflicht gilt nicht bei bestehenden Gebäuden unter genannten Voraussetzungen (Dachausbau, Aufstockung bis zwei Geschosse u. a.)",
              "Fahrschachtanforderungen § 39 Abs. 2 bleiben relevant",
            ],
            [
              "§ 44 Abs. 2",
              "Betrieb von Abfallschächten zum Inkrafttreten der Vorschrift kann widerruflich genehmigt werden",
              "Übergangsregelung Bestand",
            ],
            [
              "§ 87 Abs. 1",
              "Ermächtigung zur Erstreckung der Nachprüfungspflicht auf bestehende Anlagen durch Rechtsverordnung",
              "SBauVO NRW Sonderbauten",
            ],
          ],
        },
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Systematische Prüffragen für brandschutzrechtliche Bestandsfragen – ausschließlich auf Gesetzesgrundlage.",
        ],
        table: {
          caption: "Prüfpunkte Bestand und Brandschutz",
          headers: ["Nr.", "Prüffrage", "Norm / Kriterium", "Ergebnis bei „Ja“"],
          rows: [
            ["1", "Rechtmäßig bestehende Anlage?", "§ 59 Abs. 1", "§ 59-System anwendbar"],
            ["2", "Kein Bauvorhaben (nur Weiterbetrieb)?", "§ 59 Abs. 1", "Nachrüstung nur bei Einzelfall-Gefahr"],
            ["3", "Wesentliche Änderung geplant?", "§ 59 Abs. 2; §§ 60 ff.", "Erweiterte Nachrüstung möglich; Genehmigungspflicht prüfen"],
            ["4", "Nicht vorschriftsmäßige Bauteile im konstruktiven Zusammenhang?", "§ 59 Abs. 2", "Nachrüstung kann verlangt werden"],
            ["5", "Unverhältnismäßiger Mehraufwand bei Nachrüstung?", "§ 59 Abs. 2", "Keine Pflicht nach Abs. 2; ggf. § 69"],
            ["6", "Nutzungsänderung?", "§ 3 Abs. 1 Satz 3; § 69 Abs. 1 Satz 2 Nr. 3", "Schutzpflicht gilt; Abweichungstatbestand eröffnet"],
            ["7", "Tatbestand § 69 Abs. 1 Satz 2 (Modernisierung > 5 Jahre, Energie, Denkmal …)?", "§ 69 Abs. 1", "Abweichung von §§ 26–49 grundsätzlich zuzulassen"],
            ["8", "Sachverständigenbescheinigung nach § 87 Abs. 2?", "§ 69 Abs. 1a", "Keine behördliche Abweichungszulassung nötig"],
            ["9", "Nutzung im Widerspruch zu Vorschriften?", "§ 82 Abs. 3", "Nutzungsuntersagung möglich"],
            ["10", "Genehmigungsfrei, aber nicht vorschriftsmäßig?", "§ 60 Abs. 2; § 82", "Eingriffsbefugnisse bleiben"],
            ["11", "Sonderbau mit Nachprüfungspflicht per Verordnung?", "§ 87 Abs. 1; § 50; SBauVO", "Bestandsnachprüfung möglich"],
            ["12", "Außenwand-/Dachdämmung am Bestand?", "§ 4 Abs. 2 Satz 2–4", "Erleichterte Zulässigkeit"],
          ],
        },
      },
      {
        id: "para90",
        title: "Abgrenzung: § 90 BauO NRW",
        paragraphs: [
          "§ 90 BauO NRW: Vor dem Inkrafttreten eingeleitete Verfahren sind nach den damaligen Verfahrensvorschriften fortzuführen. Das regelt welches Verfahrensrecht gilt – keinen materiellen Bestandsschutz für brandschutztechnische Anforderungen.",
          "Materiell maßgeblich für bestehende Anlagen bleibt § 59 in Verbindung mit § 69 BauO NRW.",
        ],
      },
      {
        id: "beispiel",
        title: "Beispiel: technische Sanierung ohne baulische Änderung",
        paragraphs: [
          "Eingeschossiges Technikgebäude (Baujahr 1971): ausschließlich Austausch von Anlagenteilen im Inneren – ohne Änderung der baulichen Struktur, Nutzung oder Gebäudeklasse. Frage: Muss die Holzdecke an heutige Feuerwiderstandsanforderungen angepasst werden?",
          "Nach § 59 Abs. 1: Rechtmäßig bestehende Holzdecke – bei reinem Leitungstausch ohne Eingriff in die Decke keine pauschale Nachrüstungspflicht. Greift eine wesentliche Änderung (Decke öffnen, Nutzungswechsel, Teilsanierung mit Trockenbau), ist § 59 Abs. 2 oder ein Genehmigungsverfahren mit § 69 zu prüfen.",
          "Mehr zu baulichen Umbauten: [Teilsanierung Büro](/ratgeber/teilsanierung-buero-brandschutz-koeln), [Umbau und Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz). Technische Betriebsgebäude: [eigener Ratgeber](/ratgeber/technische-betriebsgebaeude-brandschutz-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst die gesetzlichen Vorschriften der BauO NRW zusammen – ohne VV TB NRW, DIN-Normen oder Verwaltungsvorschriften. Verbindlich sind Pläne, brandschutztechnischer Nachweis und Festlegung der Bauaufsicht. Arbeitsschutz (ArbStättV, ASR) gilt unabhängig von § 59.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "§ 69 Erlass & Entscheidungskette" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung (baulicher Umbau)" },
      { href: "/ratgeber/tuerarten-brandschutz-bauo-nrw", label: "Brandschutztüren Bestand" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme?" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten Bestand" },
      { href: "/ratgeber/technische-betriebsgebaeude-brandschutz-nrw", label: "Technische Betriebsgebäude" },
    ],
    faq: [
      {
        question: "Gibt es einen § Bestandsschutz in der BauO NRW?",
        answer:
          "Nein. Maßgeblich sind § 59 (bestehende Anlagen), § 69 (Abweichungen) und die Eingriffsbefugnisse der §§ 58, 60 Abs. 2, 82 und 84 BauO NRW.",
      },
      {
        question: "Wann darf die Behörde Nachrüstung verlangen?",
        answer:
          "§ 59 Abs. 1: nur im Einzelfall wegen der Abwehr von Gefahren für Leben und Gesundheit. § 59 Abs. 2: bei wesentlicher Änderung und konstruktivem Zusammenhang, sofern kein unverhältnismäßiger Mehraufwand.",
      },
      {
        question: "Was ist eine wesentliche Änderung nach § 59 Abs. 2?",
        answer:
          "Das Gesetz definiert den Begriff nicht abschließend. Relevant sind kumulativ: wesentliche Änderung, konstruktiver Zusammenhang nicht vorschriftsmäßiger Bauteile mit dem Vorhaben, kein unverhältnismäßiger Mehraufwand bei nicht berührten Teilen.",
      },
      {
        question: "Wann greift § 69 für Brandschutz?",
        answer:
          "Bei bestehenden Anlagen und Tatbeständen des § 69 Abs. 1 Satz 2 (u. a. Modernisierung mit Genehmigung ≥ 5 Jahre zurück, Energieeinsparung, Nutzungsänderung, Denkmal). Abweichungen von §§ 26 bis 49 können zugelassen werden.",
      },
      {
        question: "Was leistet § 69 Abs. 1a?",
        answer:
          "Sachverständige nach § 87 Abs. 2 können bescheinigen, dass das Vorhaben den Anforderungen an Brandschutz oder Standsicherheit entspricht – dann ist keine behördliche Abweichungszulassung erforderlich.",
      },
      {
        question: "Schützt Genehmigungsfreiheit den Bestand?",
        answer:
          "Nein. § 60 Abs. 2 BauO NRW: Genehmigungsfreiheit entbindet nicht von öffentlich-rechtlichen Vorschriften; Eingriffsbefugnisse bleiben.",
      },
      {
        question: "Muss bei Leitungstausch die Holzdecke ertüchtigt werden?",
        answer:
          "Nach § 59 Abs. 1 nicht pauschal, wenn die Decke unverändert bleibt und das Gebäude rechtmäßig bestand. Bei Eingriff in die Decke oder wesentlicher Änderung: § 59 Abs. 2 oder Genehmigungsverfahren.",
      },
      {
        question: "Was ist der Unterschied zu § 90 BauO NRW?",
        answer:
          "§ 90 regelt Verfahrensrecht bei Übergang der BauO 2018 – kein materieller Bestandsschutz. Materiell gilt § 59 mit § 69.",
      },
    ],
  },
];
