/**
 * 25.08.2024 – Elektrische Betriebsräume SBauVO NRW Teil 6 (§§ 143–149).
 * Quelle: Elektrische_Betriebsraeume_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_ELEKTRISCHE_BETRIEBSRAEUME: RatgeberArticle[] = [
  {
    slug: "elektrische-betriebsraeume-sbauvo-nrw",
    title:
      "Elektrische Betriebsräume NRW: wann SBauVO Teil 6 für Trafos, Notstrom und Batterien greift",
    excerpt:
      "Teil 6 gilt raumbezogen – nicht für jeden Verteilerraum. Zwei Fragen: Liegt eine §-143-Anlage im Gebäude vor – und welche Fallgruppe (Mittelspannung, Aggregat, Batterie)? Feuerbeständig, Funktionserhalt, keine BSO.",
    metaTitle: "Elektrische Betriebsräume SBauVO NRW | H&S+",
    metaDescription:
      "Transformatorraum, Batterieraum, Notstrom-Diesel: SBauVO Teil 6 §§ 143–149 – Mittelspannung, Funktionserhalt, Ölauffang und Abgrenzung NSHV/USV.",
    keywords: [
      "Elektrischer Betriebsraum NRW",
      "SBauVO Teil 6",
      "Transformatorraum Brandschutz",
      "Batterieraum SBauVO",
      "Mittelspannung Gebäude",
      "Notstrom Raum Brandschutz",
      "Technikraum Sonderbau",
    ],
    sections: [
      {
        id: "frage",
        title: "Zwei Fragen – raumbezogen, nicht gebäudebezogen",
        paragraphs: [
          "Teil 6 SBauVO regelt die bauliche Unterbringung bestimmter elektrischer Großanlagen in Gebäuden (§ 143) – nicht die Einstufung des Gesamtgebäudes als Sonderbau. Zuerst prüfen: Liegt eine der drei Anlagengruppen des § 143 in einem Gebäude vor? Dann: Welche Fallgruppe (Nr. 1, 2 oder 3) – daraus folgen § 147, § 148 oder § 149.",
          "Ein elektrischer Betriebsraum allein begründet keinen großen Sonderbau (§ 50 Abs. 2 BauO). Konzeptpflicht nach § 70 kommt nur vom Gebäude-Tatbestand – Teil 6 ist zusätzlicher Raumnachweis. Soweit Teil 6 nichts Abweichendes regelt, gelten die allgemeinen BauO-Anforderungen (Gebäudeklasse, Rettungswege, Bauteile) – anders als bei Garagen gibt es keinen GK-5-Pauschalverweis.",
          "Teil 6 enthält keine Brandschutzordnung, keinen Brandschutzbeauftragten, keine Feuerwehrplan-Pflicht und kein Betriebskapitel – nur Bauvorschriften für Räume und Aufstellung. Vergleich: [Garagen](/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw), [BSO](/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw), [BSB](/ratgeber/brandschutzbeauftragter-pflicht-sbauvo-nrw).",
        ],
      },
      {
        id: "anwendung",
        title: "Anwendungsbereich § 143 – drei Fallgruppen",
        paragraphs: [],
        table: {
          caption: "Wann Teil 6 SBauVO gilt (nur in Gebäuden)",
          headers: ["Nr.", "Anlage", "Schwelle", "Spezialparagraf"],
          rows: [
            ["1", "Transformatoren und Schaltanlagen", "Nennspannung > 1 kV (Mittelspannung)", "§ 147"],
            [
              "2",
              "Ortsfeste Stromerzeugungsaggregate",
              "Nur für bauordnungsrechtlich vorgeschriebene sicherheitstechnische Anlagen",
              "§ 148",
            ],
            [
              "3",
              "Zentrale Batterieanlagen",
              "Ebenfalls nur für bauordnungsrechtlich vorgeschriebene sicherheitstechnische Anlagen",
              "§ 149",
            ],
          ],
        },
      },
      {
        id: "nicht-erfasst",
        title: "Was Teil 6 nicht erfasst",
        paragraphs: [
          "Niederspannungs-Transformatoren und Schaltanlagen ≤ 1 kV (Hausanschluss-Trafos, NSHV) – außerhalb § 143 Nr. 1.",
          "USV-Einzelgeräte, dezentrale SiBe-Leuchten ohne zentrale Batterieanlage nach § 143 Nr. 3.",
          "Stromerzeugungsaggregate ohne bauordnungsrechtliche Sicherheitsstrom-Pflicht (reine Netzersatzversorgung).",
          "Anlagen außerhalb von Gebäuden (Freiluft-Trafos, Container außen) – Teil 6 gilt nur „in Gebäuden“.",
          "PV-Wechselrichter-Räume, Rechenzentrum-USV, Gewerbe-Li-Ion-Speicher ohne §-143-Tatbestand – ggf. [Batteriespeicher Li-Ion](/ratgeber/batteriespeicher-lithium-ionen-brandgefahren) und Sonderbau getrennt prüfen.",
          "Elektrotechnische Schutzanforderungen (Erdung, Berührungsschutz, Schaltfeldbau) – außerhalb BauO/SBauVO.",
        ],
      },
      {
        id: "begriff",
        title: "Elektrischer Betriebsraum § 144 – Exklusivnutzung",
        paragraphs: [
          "Betriebsräume für elektrische Anlagen sind Räume, die ausschließlich zur Unterbringung von Einrichtungen im Sinne des § 143 dienen (§ 144). Mischraum mit Lager, Büro oder Fremdtechnik ist kein elektrischer Betriebsraum i. S. d. SBauVO – prüfungsrelevant bei Umbauten.",
          "§ 145 Abs. 1: Innerhalb von Gebäuden müssen §-143-Anlagen in jeweils eigenen elektrischen Betriebsräumen untergebracht sein.",
        ],
      },
      {
        id: "ausnahmen",
        title: "Ausnahmen von § 145 – wann kein eigener Raum",
        paragraphs: [],
        table: {
          caption: "Kein elektrischer Betriebsraum nach § 145",
          headers: ["Fallgruppe", "Ausnahme", "Norm"],
          rows: [
            [
              "§ 143 Nr. 1 (MS)",
              "Freistehendes Gebäude oder brandwandgeschützter Gebäudeteil nur für MS-Anlagen",
              "§ 145 Abs. 2",
            ],
            [
              "§ 143 Nr. 2 (Aggregat)",
              "Aufstellung in Aufstellraum für Feuerstätten oder Heizraum",
              "§ 145 Abs. 3",
            ],
            ["§ 143 Nr. 3 (Batterie)", "Keine Ausnahme – stets eigener Raum", "—"],
          ],
        },
      },
      {
        id: "allgemein",
        title: "Allgemeine Raumanforderungen § 146",
        paragraphs: [],
        table: {
          caption: "§ 146 – für alle elektrischen Betriebsräume",
          headers: ["Thema", "Anforderung"],
          rows: [
            ["Erreichbarkeit", "Im Gefahrenfall von allgemein zugänglichen Räumen oder Freien leicht und sicher"],
            ["Türen", "Nach außen aufschlagend; jederzeit ungehindert verlassbar"],
            ["Treppenräume", "Nicht unmittelbar von notwendigen Treppenräumen zugänglich"],
            ["Rettungsweg im Raum", "Bis zum Ausgang max. 35 m"],
            ["Raumgröße / Höhe", "Ordentlicher Betrieb; lichte Höhe min. 2 m; über Gängen min. 1,80 m"],
            ["Lüftung", "Wirksame Be- und Entlüftung nach betrieblichen Anforderungen"],
            [
              "Fremdleitungen",
              "Nur betriebsnotwendige Leitungen – Ausnahme: SiBe-Leitungen aus Batterieanlage (Nr. 3)",
            ],
          ],
        },
      },
      {
        id: "mittelspannung",
        title: "Mittelspannung § 147 – strengster Raumabschluss",
        paragraphs: [
          "Für § 143 Nr. 1: Raumabschließende Bauteile (außer Außenwände) feuerbeständig; Raumabschluss darf durch Kurzschlusslichtbogen-Druckstoß nicht gefährdet werden.",
          "Türen mindestens feuerhemmend, selbstschließend, rauchdicht, im Wesentlichen nichtbrennbar; ins Freie: selbstschließend, nichtbrennbar; außen Hochspannungswarnschild.",
          "Öl-Trafos (Mineralöl oder synthetische Flüssigkeit, Brennpunkt < 300 °C): mindestens ein Ausgang ins Freie oder über Vorraum (Vorraum nur mit Schaltraum verbindbar). Öl-Trafos nicht in Geschossen > 4 m unter Gelände und nicht über dem Erdgeschoss.",
          "Lüftung aus dem Freien, eigene Leitungen; Durchführung anderer Räume feuerbeständig; Schutzgitter an Freiluftöffnungen. Fußböden nichtbrennbar, Ölauffang unter Transformatoren; bei max. 3 Trafos à 1.000 l: undurchlässige Wände, Boden und hohe Türschwellen.",
        ],
      },
      {
        id: "aggregat-batterie",
        title: "Aggregat § 148 und Batterie § 149 – Funktionserhalt",
        paragraphs: [
          "§ 148 (ortsfeste Stromerzeugungsaggregate) und § 149 (zentrale Batterieanlagen): Raumabschluss in Feuerwiderstandsdauer entsprechend dem erforderlichen Funktionserhalt der versorgten sicherheitstechnischen Anlagen – nicht pauschal feuerbeständig wie § 147.",
          "Lüftung und Fußböden sinngemäß nach § 147 Abs. 5 und 6; Lüftungsleitungen durch andere Räume mit gleicher Feuerwiderstandsfähigkeit. Aggregat: Raum frostfrei oder beheizbar (§ 148 Abs. 3). Batterie: Schild „Batterieraum“; bei geschlossenen Zellen ESD-fähiger Fußboden.",
          "Ob sicherheitstechnische Anlagen bauordnungsrechtlich vorgeschrieben sind, ergibt sich aus Gebäudeklasse und Sonderbau – typisch [Sicherheitsbeleuchtung](/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw), [BMA](/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw), RWA, Sprinkler, Aufzug-Notbetrieb. Auslöser prüfen: [Sicherheitsstromversorgung](/ratgeber/sicherheitsstromversorgung-wann-pflicht-sbauvo-nrw). Schnittstelle Rettungswege: [Treppenräume](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw).",
        ],
      },
      {
        id: "vergleich",
        title: "Vergleich der drei Anlagentypen",
        paragraphs: [],
        table: {
          caption: "§ 147 vs. § 148 vs. § 149",
          headers: ["Kriterium", "Nr. 1 MS", "Nr. 2 Aggregat", "Nr. 3 Batterie"],
          rows: [
            ["Eigener Betriebsraum", "Ja (Ausnahme § 145 Abs. 2)", "Ja (Ausnahme Heizraum § 145 Abs. 3)", "Immer ja"],
            ["Raumabschluss", "Feuerbeständig", "Funktionserhalt", "Funktionserhalt"],
            ["Türen", "Feuerhemmend, rauchdicht + Warnschild", "Wie Raumabschluss", "Wie Raumabschluss + „Batterieraum“"],
            ["Besonderheiten", "Ölauffang, Geschossverbot Öl-Trafos", "Frostfrei/beheizbar", "ESD-Boden geschlossene Zellen"],
          ],
        },
      },
      {
        id: "grenzfaelle",
        title: "Grenzfälle – ja oder nein?",
        paragraphs: [
          "Grenzfall ja: 20-kV-Trafostation im Kellergeschoss Gewerbe – § 143 Nr. 1, § 147 feuerbeständig, Ausgang ins Freie, Ölauffang, keine Fremdleitungen.",
          "Grenzfall nein: NSHV 400 V im Technikflur – ≤ 1 kV, kein § 143; anderer Nachweis über Gebäudeklasse und [Leitungsanlagen](/ratgeber/leitungsanlagen-bauo-sbauvo-nrw).",
          "Grenzfall ja: Zentrale SiBe-Batterie für Versammlungsstätte – § 143 Nr. 3, § 149 Funktionserhalt, SiBe-Leitungen im Raum erlaubt (§ 146 Satz 5).",
          "Grenzfall nein: Dieselaggregat nur für Kühlung/IT ohne bauordnungsrechtliche SiBe-Pflicht – kein § 143 Nr. 2.",
          "Grenzfall ja: Freistehendes MS-Trafogebäude nur für Schaltanlage – § 145 Abs. 2, § 147 am Aufstellort dennoch.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Elektrische Betriebsräume – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Frage", "Kriterium"],
          rows: [
            ["1", "§ 143-Anlage in Gebäude?", "MS > 1 kV / SiBe-Aggregat / zentrale SiBe-Batterie"],
            ["2", "Fallgruppe Nr. 1, 2 oder 3?", "§ 147, § 148 oder § 149"],
            ["3", "Ausnahme § 145 Abs. 2–3?", "Freistehend/Brandwand oder Heizraum"],
            ["4", "Raum ausschließlich § 143?", "§ 144 Exklusivnutzung"],
            ["5", "Erreichbarkeit, Türen nach außen?", "§ 146"],
            ["6", "Kein Zugang von notwendigem TR?", "§ 146"],
            ["7", "Rettungsweg im Raum ≤ 35 m?", "§ 146"],
            ["8", "Fremdleitungen ausgeschlossen?", "§ 146 – Ausnahme SiBe aus Batterie"],
            ["9", "MS: feuerbeständiger Abschluss?", "§ 147 Abs. 1 inkl. Kurzschlussdruck"],
            ["10", "MS: Türen, Öl-Trafos, Lüftung?", "§ 147 Abs. 2–6"],
            ["11", "Aggregat: Funktionserhalt, frostfrei?", "§ 148"],
            ["12", "Batterie: Funktionserhalt, Schild, ESD?", "§ 149"],
            ["13", "Großer Sonderbau Gebäude?", "Konzept § 70 zusätzlich"],
            ["14", "BSO / BSB / Feuerwehrplan?", "In Teil 6 nicht vorgesehen"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erklärt BauO NRW und SBauVO NRW Teil 6 (§§ 143–149) – ohne PrüfVO NRW, VDE, DIN EN oder TAB. Elektrotechnische Planung und baulicher Nachweis bleiben getrennt. [Technische Betriebsgebäude](/ratgeber/technische-betriebsgebaeude-brandschutz-nrw) für freistehende Technikbauten ergänzend. Ersetzt kein genehmigungsfähiges Brandschutzkonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sicherheitsstromversorgung-wann-pflicht-sbauvo-nrw", label: "Sicherheitsstrom" },
      { href: "/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw", label: "Sicherheitsbeleuchtung" },
      { href: "/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw", label: "BMA" },
      { href: "/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw", label: "Treppenräume" },
      { href: "/ratgeber/leitungsanlagen-bauo-sbauvo-nrw", label: "Leitungsanlagen" },
      { href: "/ratgeber/batteriespeicher-lithium-ionen-brandgefahren", label: "Li-Ion-Speicher" },
      { href: "/ratgeber/technische-betriebsgebaeude-brandschutz-nrw", label: "Technikgebäude" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
    ],
    faq: [
      {
        question: "Braucht jeder Verteilerraum einen SBauVO-Betriebsraum?",
        answer:
          "Nein. Teil 6 gilt nur für die drei Anlagengruppen des § 143 in Gebäuden – nicht für NSHV ≤ 1 kV, normale Technikräume oder PV-Wechselrichter ohne Tatbestand.",
      },
      {
        question: "Was ist der Unterschied zwischen § 147 und § 148/149?",
        answer:
          "Mittelspannung (§ 147): Raumabschluss feuerbeständig – unabhängig von SiBe. Aggregat und Batterie (§ 148/149): Feuerwiderstand entspricht dem Funktionserhalt der versorgten bauordnungsrechtlich vorgeschriebenen sicherheitstechnischen Anlagen.",
      },
      {
        question: "Gilt USV automatisch unter Teil 6?",
        answer:
          "Nein. Dezentrale USV oder Einzelbatterien sind nicht § 143 Nr. 3. Nur zentrale Batterieanlagen für bauordnungsrechtlich vorgeschriebene sicherheitstechnische Anlagen lösen § 149 aus.",
      },
      {
        question: "Dürfen Fremdkabel im Traforaum liegen?",
        answer:
          "Grundsätzlich nein (§ 146). Ausnahme: Installationen zur Sicherheitsstromversorgung aus der Batterieanlage in Räumen nach § 143 Nr. 3.",
      },
      {
        question: "Warum Ölauffang und Geschossverbot bei Öl-Trafos?",
        answer:
          "Mineralöl- oder flüssigkeitsgekühlte Transformatoren (Brennpunkt < 300 °C): Brand- und Umweltrisiko – Ausgang ins Freie, keine Lage > 4 m unter Gelände oder über EG (§ 147 Abs. 3–4).",
      },
      {
        question: "Gibt es BSB oder BSO für elektrische Betriebsräume?",
        answer:
          "Nein in SBauVO Teil 6 – anders als Garagen, Versammlungsstätten oder Hochhäuser. Nur bauliche Raum- und Aufstellvorschriften.",
      },
      {
        question: "Wann reicht ein freistehendes Trafogebäude ohne Betriebsraum?",
        answer:
          "§ 145 Abs. 2: MS-Anlagen in freistehendem Gebäude oder brandwandgeschütztem Gebäudeteil, der nur diese Anlagen enthält – § 147 gilt am Aufstellort dennoch.",
      },
      {
        question: "Zusammenhang mit Li-Ion-Gewerbespeichern?",
        answer:
          "§ 149 betrifft zentrale sicherheitstechnische Batterieanlagen nach BauO/SBauVO – nicht jeden Li-Ion-Speicher. Gewerbespeicher zusätzlich Gefährdungsbeurteilung und ggf. Sonderbau getrennt prüfen.",
      },
    ],
  },
];
