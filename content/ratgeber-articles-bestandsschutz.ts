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
          "Anlagen sind so anzuordnen, zu errichten, zu ändern und instand zu halten, dass die öffentliche Sicherheit und Ordnung – insbesondere Leben und Gesundheit – nicht gefährdet werden (§ 3 Satz 1 BauO NRW). Für rechtmäßig bestehende Anlagen begrenzt § 59 Abs. 1, wann die Behörde Nachrüstung verlangen darf.",
        ],
        list: [
          "§ 3 Satz 1 – Dauerhafte Schutzpflicht (Leben, Gesundheit, öffentliche Sicherheit)",
          "§ 59 Abs. 1 – Weiterbetrieb: Nachrüstung nur bei erheblichen Gefahren für Leben und Gesundheit",
          "§ 59 Abs. 2 – Wesentliche Änderung: Anforderungen an unberührte Teile nur zur Gefahrenabwehr; Brandschutz-Restbestand auf § 33 beschränkt",
          "§ 59 Abs. 3 – Modernisierungsvorhaben",
          "§ 69 Abs. 1 – Abweichungen sollen zugelassen werden, wenn mit § 3 Satz 1 vereinbar; besonders Weiternutzung Bestand",
          "§ 69 Abs. 1 Satz 6 – Sachverständigenbescheinigung statt Abweichungszulassung",
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
              "Anpassung nur, wenn im Einzelfall zur Abwehr erheblicher Gefahren für Leben und Gesundheit erforderlich",
            ],
            [
              "Nachrüstung bei wesentlicher Änderung",
              "§ 59 Abs. 2",
              "Anforderungen an unberührte Teile nur zur Gefahrenabwehr; Brandschutznachweis Restbestand beschränkt auf § 33",
            ],
            [
              "Modernisierungsvorhaben",
              "§ 59 Abs. 3",
              "Eigene Regelung für Modernisierung bestehender Anlagen",
            ],
            [
              "Abweichung von Brandschutzvorschriften",
              "§ 69 Abs. 1",
              "Soll-Zulassung bei Vereinbarkeit mit öffentlichen Belangen, insbesondere § 3 Satz 1 – besonders Weiternutzung bestehender Gebäude",
            ],
            [
              "Sachverständigenbescheinigung",
              "§ 69 Abs. 1 Satz 6",
              "Keine Abweichungszulassung nötig, wenn die sachverständige Person die Voraussetzungen bescheinigt",
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
          "§ 59 Abs. 1: Rechtmäßig bestehende Anlagen musst du nur anpassen, wenn das im Einzelfall zur Abwehr erheblicher Gefahren für Leben und Gesundheit erforderlich ist. Ein alleiniger Bestandsmangel rechtfertigt keine pauschale Nachrüstung – die Behörde muss den Einzelfall mit erheblicher Gefahr begründen.",
          "§ 59 Abs. 2: Änderst du wesentlich, dürfen an unberührte Teile nur Anforderungen zur Gefahrenabwehr gestellt werden; beim Brandschutz beschränkt sich der Nachweis für den verbleibenden Bestand auf die Rettungswege nach § 33. Die früheren Kriterien „konstruktiver Zusammenhang“ und „unverhältnismäßiger Mehraufwand“ gelten so nicht mehr.",
          "§ 59 Abs. 3 regelt Modernisierungsvorhaben gesondert.",
        ],
        table: {
          caption: "Entscheidungstabelle § 59 BauO NRW",
          headers: ["Situation", "Rechtsfolge", "Norm"],
          rows: [
            [
              "Rechtmäßig bestehende Anlage, kein Vorhaben, Mangel gegenüber heutigem Recht",
              "Weiterbetrieb grundsätzlich möglich; Nachrüstung nur bei erheblichen Gefahren für Leben und Gesundheit im Einzelfall",
              "§ 59 Abs. 1",
            ],
            [
              "Rechtmäßig bestehende Anlage, wesentliche Änderung geplant",
              "Anforderungen an unberührte Teile nur zur Gefahrenabwehr; Brandschutz-Restbestand: Nachweis auf § 33 beschränkt",
              "§ 59 Abs. 2",
            ],
            [
              "Modernisierungsvorhaben am Bestand",
              "Eigene Regelung nach § 59 Abs. 3; Abweichung nach § 69 prüfen",
              "§ 59 Abs. 3; § 69",
            ],
            [
              "Nutzungsänderung ohne wesentliche bauliche Änderung",
              "§ 59 Abs. 2 greift nicht unmittelbar; Schutzpflicht § 3 Satz 1 und ggf. § 69; Eingriffe nach § 82 bei Widerspruch",
              "§ 3 Satz 1; § 69; § 82",
            ],
          ],
        },
      },
      {
        id: "para69",
        title: "§ 69 BauO NRW – Abweichungen",
        paragraphs: [
          "Seit 01.09.2026 soll die Bauaufsicht Abweichungen zulassen, wenn sie mit den öffentlichen Belangen, insbesondere § 3 Satz 1, vereinbar sind – besonders bei der Weiternutzung bestehender Gebäude (§ 69 Abs. 1 Satz 2 Nr. 1). Vertiefung: [Abweichungen § 69 Erlass](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
          "§§ 26–49 umfassen u. a. Brandverhalten (§ 26), Brandwände (§ 30), Rettungswege (§§ 33, 37), Treppen und Flure (§§ 34–36), Leitungen (§ 40), Lüftung (§ 41) und Sonderbauten-Verweis (§ 50).",
          "Abgrenzung: § 59 steuert den Weiterbetrieb ohne Vorhaben (Nachrüstung nur bei erheblichen Gefahren im Einzelfall). § 69 eröffnet bei einem Vorhaben die Zulassung, von Vorschriften abzuweichen. Eine Abweichung schließt die Genehmigungsfreistellung nicht mehr aus; die Abweichung beantragst du gesondert (§ 69 Abs. 2).",
          "§ 69 Abs. 1 Satz 6: Der Zulassung einer Abweichung bedarf es in den Fällen des § 68 Abs. 6 oder des § 69 Abs. 2 Satz 2 Halbsatz 1 nicht, wenn die sachverständige Person die Voraussetzungen der Abweichung bescheinigt.",
        ],
        table: {
          caption: "Abweichung oder Sachverständigenbescheinigung",
          headers: ["Verfahren", "Voraussetzung", "Entscheidung", "Norm"],
          rows: [
            [
              "Abweichungsantrag",
              "Vereinbarkeit mit öffentlichen Belangen (§ 3 Satz 1); Antrag gesondert",
              "Bauaufsichtsbehörde",
              "§ 69 Abs. 1, Abs. 2",
            ],
            [
              "Sachverständigenbescheinigung",
              "Sachverständige Person bescheinigt die Abweichungsvoraussetzungen",
              "Keine behördliche Abweichungszulassung erforderlich",
              "§ 69 Abs. 1 Satz 6",
            ],
          ],
        },
      },
      {
        id: "eingriffe",
        title: "Verfahren und behördliche Eingriffe",
        paragraphs: [
          "§ 60 Abs. 2: Genehmigungsfreiheit nach §§ 61 bis 63, 78 und 79 Abs. 1 Satz 1 sowie Beschränkung der Prüfung nach § 64 entbinden nicht von öffentlich-rechtlichen Vorschriften und lassen Eingriffsbefugnisse unberührt.",
          "Nachträgliche Anforderungen an rechtmäßig bestehende Anlagen sind nur nach § 59 Abs. 1 möglich – also wenn sie im Einzelfall zur Abwehr erheblicher Gefahren für Leben und Gesundheit erforderlich sind. § 58 Abs. 4 regelt seit der Neufassung die Rechtsnachfolge, nicht mehr nachträgliche Gefahrabwehr-Befugnisse nach Genehmigung.",
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
            ["2", "Kein Bauvorhaben (nur Weiterbetrieb)?", "§ 59 Abs. 1", "Nachrüstung nur bei erheblichen Gefahren im Einzelfall"],
            ["3", "Wesentliche Änderung geplant?", "§ 59 Abs. 2; §§ 60 ff.", "Unberührte Teile nur zur Gefahrenabwehr; Brandschutz-Rest auf § 33"],
            ["4", "Gefahrenabwehr an unberührten Teilen erforderlich?", "§ 59 Abs. 2", "Anforderungen an Restbestand möglich"],
            ["5", "Modernisierungsvorhaben?", "§ 59 Abs. 3", "Abs. 3 prüfen; ggf. § 69"],
            ["6", "Nutzungsänderung?", "§ 3 Satz 1; § 69 Abs. 1", "Schutzpflicht gilt; Abweichung prüfen"],
            ["7", "Abweichung mit öffentlichen Belangen (§ 3 Satz 1) vereinbar – Weiternutzung Bestand?", "§ 69 Abs. 1", "Abweichung soll zugelassen werden; Freistellung nicht ausgeschlossen"],
            ["8", "Sachverständigenbescheinigung der Abweichungsvoraussetzungen?", "§ 69 Abs. 1 Satz 6", "Keine behördliche Abweichungszulassung nötig"],
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
          "Nach § 59 Abs. 1: Rechtmäßig bestehende Holzdecke – bei reinem Leitungstausch ohne Eingriff in die Decke keine pauschale Nachrüstungspflicht, solange keine erheblichen Gefahren für Leben und Gesundheit im Einzelfall vorliegen. Greift eine wesentliche Änderung (Decke öffnen, Nutzungswechsel, Teilsanierung mit Trockenbau), ist § 59 Abs. 2 (unberührte Teile nur zur Gefahrenabwehr; Brandschutz-Rest auf § 33) oder ein Genehmigungsverfahren mit § 69 zu prüfen.",
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
          "§ 59 Abs. 1: nur im Einzelfall zur Abwehr erheblicher Gefahren für Leben und Gesundheit. § 59 Abs. 2: bei wesentlicher Änderung Anforderungen an unberührte Teile nur zur Gefahrenabwehr; Brandschutznachweis für den Restbestand beschränkt auf § 33. Modernisierung: § 59 Abs. 3.",
      },
      {
        question: "Was gilt bei wesentlicher Änderung nach § 59 Abs. 2?",
        answer:
          "An unberührte Teile dürfen nur Anforderungen gestellt werden, die im Einzelfall zur Gefahrenabwehr nötig sind. Beim Brandschutz beschränkt sich der Nachweis für den verbleibenden Bestand auf die Rettungswege nach § 33. Die alten Kriterien „konstruktiver Zusammenhang“ und „unverhältnismäßiger Mehraufwand“ gelten seit 01.09.2026 nicht mehr.",
      },
      {
        question: "Wann greift § 69 für Brandschutz?",
        answer:
          "Seit 01.09.2026 soll die Bauaufsicht Abweichungen zulassen, wenn sie mit den öffentlichen Belangen, insbesondere § 3 Satz 1, vereinbar sind – besonders bei der Weiternutzung bestehender Gebäude (§ 69 Abs. 1 Satz 2 Nr. 1). Eine Abweichung schließt die Genehmigungsfreistellung nicht mehr aus.",
      },
      {
        question: "Was leistet § 69 Abs. 1 Satz 6?",
        answer:
          "Der Zulassung einer Abweichung bedarf es in den Fällen des § 68 Abs. 6 oder des § 69 Abs. 2 Satz 2 Halbsatz 1 nicht, wenn die sachverständige Person die Voraussetzungen der Abweichung bescheinigt.",
      },
      {
        question: "Schützt Genehmigungsfreiheit den Bestand?",
        answer:
          "Nein. § 60 Abs. 2 BauO NRW: Genehmigungsfreiheit entbindet nicht von öffentlich-rechtlichen Vorschriften; Eingriffsbefugnisse bleiben.",
      },
      {
        question: "Muss bei Leitungstausch die Holzdecke ertüchtigt werden?",
        answer:
          "Nach § 59 Abs. 1 nicht pauschal, wenn die Decke unverändert bleibt, das Gebäude rechtmäßig bestand und keine erheblichen Gefahren für Leben und Gesundheit im Einzelfall vorliegen. Bei Eingriff in die Decke oder wesentlicher Änderung: § 59 Abs. 2 oder Genehmigungsverfahren mit § 69.",
      },
      {
        question: "Was ist der Unterschied zu § 90 BauO NRW?",
        answer:
          "§ 90 regelt Verfahrensrecht bei Übergang der BauO 2018 – kein materieller Bestandsschutz. Materiell gilt § 59 mit § 69.",
      },
    ],
  },
];
