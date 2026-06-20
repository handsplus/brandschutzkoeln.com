/**
 * 29.10.2024 – Feuerwehrpläne (BauO / SBauVO NRW).
 * Quelle: Feuerwehrplaene_Wann_Pflicht_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_FEUERWEHRPLAENE: RatgeberArticle[] = [
  {
    slug: "feuerwehrplaene-wann-pflicht-sbauvo-nrw",
    title: "Feuerwehrpläne: wann das Gesetz sie verlangt – und wann nicht",
    excerpt:
      "Die BauO NRW kennt keine Feuerwehrplan-Pflicht. Gesetzlich verlangt die SBauVO NRW Feuerwehrpläne nur in vier Nutzungen – mit unterschiedlichen Schwellen. Übersicht mit Verfahren, Abgrenzung und Prüfkatalog.",
    metaTitle: "Feuerwehrplan Pflicht NRW SBauVO | H&S+",
    metaDescription:
      "Feuerwehrpläne NRW: keine Pflicht in BauO – nur SBauVO §§ 42, 57, 86, 117 für Versammlungsstätte, Hotel >60 Betten, Verkauf, Hochhaus. Einvernehmen Brandschutzdienststelle.",
    keywords: [
      "Feuerwehrplan Pflicht NRW",
      "Feuerwehrpläne BauO NRW",
      "§ 42 SBauVO Feuerwehrplan",
      "§ 117 SBauVO Hochhaus",
      "wann Feuerwehrplan Pflicht",
      "Brandschutzdienststelle Einvernehmen",
    ],
    sections: [
      {
        id: "frage",
        title: "Pflicht in jedem Sonderbau? Nein – nur in vier SBauVO-Fällen",
        paragraphs: [
          "Bei Brandschutznachweisen und Brandschau-Mappe tauchen Feuerwehrpläne fast überall auf – viele Planer gehen deshalb von einer allgemeinen Gesetzespflicht aus. Im Landesrecht NRW ist das enger gefasst.",
          "Die BauO NRW verlangt in § 14 wirksame Löscharbeiten und regelt in §§ 33 bis 36 Rettungswege – ohne eine Vorschrift zu Feuerwehrplänen. Gesetzliche Pflichten ergeben sich ausschließlich aus der SBauVO NRW in vier Betriebsvorschriften.",
          "Überall gilt dieselbe Rechtsfolge: Feuerwehrpläne sind im Einvernehmen mit der Brandschutzdienststelle anzufertigen und der örtlichen Feuerwehr zur Verfügung zu stellen. Für Krankenhäuser, Schulen, Büros, Garagen und die meisten übrigen Sonderbauten gibt es in der SBauVO NRW keine Feuerwehrplan-Pflicht.",
        ],
      },
      {
        id: "verfahren",
        title: "Verfahren: Einvernehmen und Zurverfügungstellung",
        list: [
          "§ 14 BauO NRW – Brandschutz allgemein: kein Tatbestand „Feuerwehrplan“",
          "§§ 33–36 BauO NRW – Rettungswege: baulicher Nachweis, keine Planpflicht für die Feuerwehr",
          "SBauVO NRW – Betriebspflichten in §§ 42, 57, 86, 117",
          "BHKG NRW § 25 – Brandschutzdienststelle wahrnimmt Belange des Brandschutzes in Genehmigung und nach baurechtlichen Vorschriften",
        ],
        paragraphs: [
          "Das Gesetz definiert „Feuerwehrplan“ nicht und nennt keinen Inhaltskatalog (Geschosse, Symbole, Maßstab, Anzahl Planblätter). Umfang und Ausgestaltung ergeben sich aus dem Einvernehmen mit der Brandschutzdienststelle. Übermittlungsweg und Aktualisierung regelt der Gesetzestext nicht näher – die Pflicht besteht ab Betrieb der Anlage.",
          "DIN 14095, FwDV oder Muster-Feuerwehrpläne sind Ausführungstechnik – nicht Grundlage dieser gesetzlichen Übersicht.",
        ],
      },
      {
        id: "uebersicht",
        title: "Vier Nutzungen – vier Paragraphen",
        table: {
          caption: "Wann Feuerwehrpläne baurechtlich Pflicht sind",
          headers: ["Nutzung / Gebäudetyp", "Schwelle (SBauVO)", "Pflicht?", "Norm", "Verantwortlich"],
          rows: [
            [
              "Versammlungsstätte",
              "Teil 1: VR > 200 Pers.; Freianlagen; Stadien > 5.000 (§ 1 SBauVO)",
              "Ja – ohne weitere Größenschwelle in § 42",
              "§ 42 SBauVO",
              "Betreiber(in) oder Beauftragte",
            ],
            [
              "Beherbergungsstätte",
              "Teil 2 ab > 12 Gastbetten; Feuerwehrplan erst ab > 60 Gastbetten",
              "Ja – nur > 60 Gastbetten",
              "§ 57 Abs. 3 SBauVO",
              "Betreiber(in) oder Beauftragte",
            ],
            [
              "Verkaufsstätte",
              "Teil 3: Verkaufsfläche > 2.000 m² (§ 60 SBauVO)",
              "Ja – alle erfassten Verkaufsstätten",
              "§ 86 SBauVO",
              "Betreiber(in)",
            ],
            [
              "Hochhaus",
              "Gebäudehöhe > 22 m (§ 50 Abs. 2 Nr. 1 BauO NRW)",
              "Ja – alle Hochhäuser",
              "§ 117 Abs. 2 SBauVO",
              "Eigentümer(in); ggf. Betreiber(in)",
            ],
            [
              "Garagen, Krankenhäuser, Schulen, Büros, übrige Sonderbauten",
              "—",
              "Nein (in SBauVO nicht geregelt)",
              "—",
              "—",
            ],
          ],
        },
        paragraphs: [
          "Beherbergung: Teil 2 SBauVO gilt ab mehr als 12 Gastbetten – Feuerwehrpläne aber erst ab mehr als 60 Gastbetten. Hotels mit 13 bis 60 Betten haben andere Pflichten (z. B. Rettungswegplan im Beherbergungsraum § 57 Abs. 2), aber keinen Feuerwehrplan nach § 57 Abs. 3.",
        ],
      },
      {
        id: "versammlungsstaette",
        title: "§ 42 SBauVO – Versammlungsstätten",
        paragraphs: [
          "Teil 1 gilt bei Versammlungsräumen für mehr als 200 Besucher, Freianlagen mit Szenenflächen/Tribünen für mehr als 1.000 bzw. 5.000 Besucher, Sportstadien für mehr als 5.000 Besucher. Ausnahmen § 1 Abs. 4: Gottesdiensträume, Schulunterrichtsräume, Museumsausstellungsräume, Fliegende Bauten.",
          "Im selben Paragraphen stehen vor der Feuerwehrplan-Pflicht die Pflicht zur Brandschutzordnung und ggf. zum Räumungskonzept (Abs. 1) – rechtlich getrennte, aber zusammenhängende Betriebspflichten.",
          "Räumungskonzept gesondert bei Versammlungsstätten für mehr als 1.000 Besucher (§ 42 Abs. 1 Satz 2), sofern nicht im Sicherheitskonzept nach § 43. Sicherheitskonzept Pflicht bei mehr als 5.000 Besucherplätzen (§ 43).",
          "Bestehende Versammlungsstätten: Kapitel 4 einschließlich § 42 ist anwendbar. Brandschutzordnung und organisatorische Maßnahmen nach § 42 Abs. 1 und 2 sind innerhalb von zwei Jahren umzusetzen (§ 45 SBauVO). Die Feuerwehrplan-Pflicht folgt aus dem laufenden Betrieb nach § 42.",
        ],
        list: [
          "Wortlaut: Im Einvernehmen mit der Brandschutzdienststelle sind Feuerwehrpläne anzufertigen und der örtlichen Feuerwehr zur Verfügung zu stellen.",
        ],
      },
      {
        id: "beherbergung",
        title: "§ 57 SBauVO – Beherbergungsstätten",
        paragraphs: [
          "Für Beherbergungsstätten mit mehr als 60 Gastbetten sind im Einvernehmen mit der Brandschutzdienststelle eine Brandschutzordnung zu erstellen und Feuerwehrpläne anzufertigen, die der örtlichen Feuerwehr zur Verfügung zu stellen sind (§ 57 Abs. 3).",
          "§ 57 Abs. 2 – verwandte, aber andere Pflicht: In jedem Beherbergungsraum sind an dessen Ausgang ein Rettungswegplan und Hinweise zum Verhalten bei einem Brand anzubringen. Das gilt in jeder Beherbergungsstätte des Teil 2 – unabhängig von der 60-Gastbetten-Schwelle. Rettungswegplan für Gäste ≠ Feuerwehrplan für die Feuerwehr.",
          "Beherbergungen mit 13 bis 60 Gastbetten: keine Feuerwehrplan-Pflicht nach § 57 Abs. 3, aber Teil 2 SBauVO gilt dennoch (z. B. Sicherheitsbeleuchtung § 54 ab mehr als 12 Betten).",
          "Mehr zur Nutzung: [Beherbergungsstätten](/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw).",
        ],
      },
      {
        id: "verkauf",
        title: "§ 86 SBauVO – Verkaufsstätten",
        paragraphs: [
          "Teil 3 ab mehr als 2.000 m² Verkaufsfläche (§ 60 SBauVO). Vorangehend in § 86 Abs. 1: Pflicht zur Brandschutzordnung; Räumungskonzept gesondert bei Verkaufsräumen mit mehr als 5.000 m². Feuerwehrplan-Pflicht gilt für alle Verkaufsstätten des Teil 3 – ohne zusätzliche Flächenschwelle innerhalb des § 86.",
          "§ 90 SBauVO: §§ 83–86 gelten auch für bestehende Verkaufsstätten.",
          "Wortlaut: Im Einvernehmen mit der Brandschutzdienststelle sind Feuerwehrpläne anzufertigen und der örtlichen Feuerwehr zur Verfügung zu stellen.",
        ],
      },
      {
        id: "hochhaus",
        title: "§ 117 SBauVO – Hochhäuser",
        paragraphs: [
          "Alle Hochhäuser (Gebäudehöhe > 22 m). § 117 Abs. 1: Brandschutzordnung im Einvernehmen mit der Brandschutzdienststelle aufstellen und durch Aushang bekannt machen. § 117 Abs. 2: Feuerwehrpläne im Einvernehmen anfertigen und der örtlichen Feuerwehr zur Verfügung stellen.",
          "Verantwortlich für die Einhaltung: Eigentümerin/Eigentümer (§ 118 Abs. 1); Pflichten können schriftlich auf Betreiberin/Betreiber übertragen werden (§ 118 Abs. 3). Brandschutzbeauftragte ab bestimmter Größe/Nutzung (§ 118 Abs. 2) – gesonderte Pflicht, nicht identisch mit Feuerwehrplan. Gesetzliche Bestellpflicht: [Brandschutzbeauftragter SBauVO](/ratgeber/brandschutzbeauftragter-pflicht-sbauvo-nrw).",
          "Vertiefung: [Hochhaus SBauVO](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
        ],
      },
      {
        id: "abgrenzung",
        title: "Kein Feuerwehrplan – aber verwandte Pflichten",
        table: {
          caption: "Abgrenzung zu anderen Planarten und Konzepten",
          headers: ["Institut", "Norm", "Abgrenzung"],
          rows: [
            [
              "Rettungswegplan (Beherbergungsraum)",
              "§ 57 Abs. 2 SBauVO",
              "Aushang für Gäste – in jeder Beherbergungsstätte Teil 2, unabhängig von 60-Gastbetten-Schwelle",
            ],
            [
              "Brandschutzordnung",
              "§§ 42, 57, 86, 117 SBauVO",
              "Organisatorische Betriebsvorschrift – oft parallel, rechtlich eigenständig",
            ],
            [
              "Räumungskonzept",
              "§§ 42, 86 SBauVO",
              "Ab Besucher-/Flächenschwellen – nicht dasselbe wie Feuerwehrplan",
            ],
            [
              "Brandschutzkonzept (Genehmigung)",
              "§ 54 Abs. 3 BauO NRW",
              "Sonderbau im Genehmigungsverfahren – kein Ersatz für §-42/117-Betriebspflicht",
            ],
            [
              "Feuerwehrpläne im bautechnischen Nachweis",
              "VO zum Bauantrag",
              "Kann in Genehmigungen verlangt werden – andere Rechtsebene als SBauVO-Betriebspflicht",
            ],
            [
              "Flucht- und Rettungspläne (Arbeitsschutz)",
              "ASR A2.3",
              "Für Beschäftigte/Besucher – kein Feuerwehrplan, kein Gesetzestext BauO/SBauVO",
            ],
          ],
        },
        paragraphs: [
          "Abgrenzung der Planarten im Betrieb: [Flucht- vs. Feuerwehrplan](/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe). Gesetzliche Brandschutzordnung: [BSO Pflicht SBauVO](/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw). Sicherheitsbeleuchtung – separates Thema: [Sicherheitsbeleuchtung](/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw).",
        ],
      },
      {
        id: "nicht-im-gesetz",
        title: "Was das Gesetz nicht regelt",
        paragraphs: [],
        list: [
          "Kein Inhaltskatalog (Geschosse, Symbole, Maßstab, Anzahl Planblätter)",
          "Keine Aktualisierungsfristen oder Prüfzyklen für Feuerwehrpläne",
          "Keine Pflicht zur Aufbewahrung an einer bestimmten Stelle im Gebäude (anders als Brandschutzordnung: Aushang)",
          "Keine explizite Ordnungswidrigkeit für fehlende Feuerwehrpläne in den genannten Paragraphen",
          "Keine Legaldefinition „Feuerwehrplan“ in § 2 BauO oder SBauVO",
          "Keine allgemeine Pflicht für Nicht-Sonderbauten in der BauO NRW",
          "Keine DIN 14095, FwDV oder VV TB im Gesetzestext",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Feuerwehrpläne – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            [
              "1",
              "Versammlungsstätte nach § 1 SBauVO (Teil 1)?",
              "§ 42 SBauVO",
              "Feuerwehrplan Pflicht – im Einvernehmen, örtlicher Feuerwehr",
            ],
            [
              "2",
              "Beherbergungsstätte mit > 60 Gastbetten?",
              "§ 57 Abs. 3 SBauVO",
              "Ja – plus Brandschutzordnung",
            ],
            [
              "3",
              "Beherbergung mit 13–60 Gastbetten?",
              "§ 57 Abs. 2 SBauVO",
              "Kein Feuerwehrplan – aber Rettungswegplan im Beherbergungsraum",
            ],
            [
              "4",
              "Verkaufsstätte mit > 2.000 m² Verkaufsfläche?",
              "§ 60; § 86 SBauVO",
              "Feuerwehrplan Pflicht",
            ],
            ["5", "Hochhaus (Höhe > 22 m)?", "§ 50 BauO; § 117 SBauVO", "Feuerwehrplan Pflicht (Abs. 2)"],
            [
              "6",
              "Garage, Schule, Krankenhaus, Büro ohne obige Merkmale?",
              "—",
              "Keine SBauVO-Feuerwehrplan-Pflicht",
            ],
            [
              "7",
              "Einvernehmen mit Brandschutzdienststelle hergestellt?",
              "§§ 42, 57, 86, 117 SBauVO",
              "Verfahrensvoraussetzung für rechtmäßige Anfertigung",
            ],
            [
              "8",
              "Pläne der örtlichen Feuerwehr vor?",
              "Wortlaut aller vier §§",
              "Rechtsfolge: zur Verfügung stellen",
            ],
            [
              "9",
              "Brandschutzordnung parallel vor?",
              "§§ 42, 57, 86, 117 SBauVO",
              "Eigenständige Pflicht – zusätzlich prüfen",
            ],
            [
              "10",
              "VS > 1.000 / Verkauf > 5.000 m²?",
              "§ 42; § 86 SBauVO",
              "Zusätzlich Räumungskonzept prüfen (nicht = Feuerwehrplan)",
            ],
            [
              "11",
              "Bestandsanlage vor Inkrafttreten SBauVO 2016?",
              "§§ 45, 58, 90 SBauVO",
              "Betriebspflichten gelten; ggf. Übergangsfristen für BSO (§ 45: 2 Jahre für § 42 Abs. 1–2)",
            ],
            [
              "12",
              "Wer ist verantwortlich?",
              "§§ 42, 57, 86, 118 SBauVO",
              "VS/Beherbergung/Verkauf: Betreiber(in); Hochhaus: Eigentümer(in), ggf. Betreiber(in)",
            ],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst nur BauO NRW, SBauVO NRW und zur Einordnung BHKG NRW § 25 zusammen – ohne DIN 14095, FwDV, VO zum Bauantrag oder PrüfVO NRW. In Genehmigungsverfahren und Konzepten können Feuerwehrpläne zusätzlich verlangt werden; das ist eine andere Rechtsebene als die SBauVO-Betriebspflicht.",
          "Technische Ausgestaltung und Aktualisierung nach Umbau: [Pläne aktualisieren](/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe). FSD und Fluchtpläne: [Feuerwehrplan & Fluchtpläne Köln](/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw", label: "BSO Pflicht SBauVO" },
      { href: "/ratgeber/brandschutzbeauftragter-pflicht-sbauvo-nrw", label: "BSB Pflicht SBauVO" },
      { href: "/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw", label: "Feuerwehr-Flächen § 5" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Flucht- vs. Feuerwehrplan" },
      { href: "/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln", label: "FSD & Fluchtpläne" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätten" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw", label: "Verkaufsstätten" },
      { href: "/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw", label: "Beherbergung" },
      { href: "/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw", label: "Sicherheitsbeleuchtung" },
    ],
    faq: [
      {
        question: "Schreibt die BauO NRW Feuerwehrpläne vor?",
        answer:
          "Nein. § 14 und §§ 33–36 BauO NRW enthalten keine Feuerwehrplan-Pflicht. Maßgeblich sind §§ 42, 57, 86 und 117 SBauVO NRW – jeweils nur für bestimmte Nutzungen.",
      },
      {
        question: "Braucht jedes Hotel Feuerwehrpläne?",
        answer:
          "Nein. Feuerwehrpläne nach § 57 Abs. 3 SBauVO erst ab mehr als 60 Gastbetten. Bei 13 bis 60 Betten gilt der Rettungswegplan im Beherbergungsraum (§ 57 Abs. 2), aber kein Feuerwehrplan.",
      },
      {
        question: "Gilt die Pflicht für Krankenhäuser oder Schulen?",
        answer:
          "Nicht aus den untersuchten SBauVO-Paragraphen. Weder Teil Krankenhaus noch Schul-Sonderbau enthält eine Feuerwehrplan-Betriebspflicht – sofern keine parallele Einschlägigkeit (z. B. Versammlungsstätte, Hochhaus) vorliegt.",
      },
      {
        question: "Was bedeutet „im Einvernehmen mit der Brandschutzdienststelle“?",
        answer:
          "Anfertigung und inhaltliche Abstimmung mit der Brandschutzdienststelle nach BHKG NRW § 25 – nicht alleinige Entscheidung des Betreibers. Umfang und Ausgestaltung der Pläne ergeben sich daraus.",
      },
      {
        question: "Ist der Feuerwehrplan dasselbe wie der Fluchtplan?",
        answer:
          "Nein. Feuerwehrpläne dienen der örtlichen Feuerwehr (SBauVO-Betriebspflicht in vier Fällen). Flucht- und Rettungspläne nach ASR A2.3 dienen Beschäftigten und Besuchern – separates Regelwerk.",
      },
      {
        question: "Wer ist im Hochhaus verantwortlich?",
        answer:
          "Eigentümerin/Eigentümer (§ 118 Abs. 1 SBauVO); Pflichten können schriftlich auf Betreiberin/Betreiber übertragen werden (§ 118 Abs. 3).",
      },
      {
        question: "Regelt das Gesetz DIN 14095?",
        answer:
          "Nein. Inhalt, Symbole, Maßstab und Prüfzyklen stehen nicht im Gesetzestext – technische Regeln sind separat.",
      },
    ],
  },
];
