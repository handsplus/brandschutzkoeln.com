/**
 * 29.09.2024 – Sicherheitsstromversorgung (BauO / SBauVO / BauPrüfVO NRW).
 * Quelle: Sicherheitsstromversorgung_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_SICHERHEITSSTROMVERSORGUNG: RatgeberArticle[] = [
  {
    slug: "sicherheitsstromversorgung-wann-pflicht-sbauvo-nrw",
    title: "Sicherheitsstromversorgung: wann das Gesetz sie verlangt – und was mitversorgt werden muss",
    excerpt:
      "Die BauO NRW kennt keine allgemeine Sicherheitsstrom-Pflicht. Nur vier SBauVO-Paragraphen verlangen Sicherheitsstromversorgungsanlagen für bestimmte Sonderbauten – mit unterschiedlichen „insbesondere“-Katalogen und Hochhaus-Sonderregeln.",
    metaTitle: "Sicherheitsstromversorgung Pflicht SBauVO NRW | H&S+",
    metaDescription:
      "Sicherheitsstromversorgung NRW: keine BauO-Pflicht, SBauVO §§ 14, 54, 80, 109. Versorgungsumfang, 3 Stunden Hochhaus, Prüfkatalog. Abgrenzung Beleuchtung.",
    keywords: [
      "Sicherheitsstromversorgung Pflicht NRW",
      "Sicherheitsstrom SBauVO",
      "§ 109 SBauVO Hochhaus",
      "§ 14 SBauVO Versammlungsstätte",
      "Ersatzstromversorgung Brandschutz",
      "Notstrom Sonderbau NRW",
    ],
    sections: [
      {
        id: "frage",
        title: "Gibt es eine allgemeine Sicherheitsstrom-Pflicht?",
        paragraphs: [
          "Bei Stromausfall müssen Sicherheitsbeleuchtung, Brandmeldeanlage, Sprinkler oder Druckbelüftung weiterlaufen – dafür braucht es eine Sicherheitsstromversorgung. Ob das Gesetz sie verlangt, ist enger gefasst als viele Planer annehmen.",
          "§ 14 BauO NRW formuliert das Brandschutzziel – ohne den Begriff Sicherheitsstromversorgung. Eine allgemeine Pflicht zur Installation einer Sicherheitsstromversorgungsanlage für normale Gebäude steht nicht in der BauO NRW.",
          "Gesetzliche Pflichten stehen ausschließlich in der SBauVO NRW für bestimmte Sonderbauten: §§ 14, 54, 80 und 109. Für Garagen gibt es keinen eigenen Paragraphen zur Sicherheitsstromversorgung.",
        ],
      },
      {
        id: "begriff",
        title: "Begriff und Funktion",
        paragraphs: [
          "Einheitliche gesetzliche Funktion (§§ 14, 54, 80, 109 SBauVO): Sicherheitsstromversorgungsanlagen haben bei Ausfall der allgemeinen Stromversorgung den Betrieb der sicherheitstechnischen Anlagen und Einrichtungen zu übernehmen.",
          "Sicherheitstechnische Anlagen sind die im jeweiligen „insbesondere“-Katalog genannten Einrichtungen – nicht jede elektrische Anlage des Gebäudes. Nur gesetzlich vorgeschriebene Anlagen müssen über Sicherheitsstrom versorgt werden.",
          "Ersatzstromversorgungsanlagen (Batterien, Stromerzeugungsaggregate) und Funktionserhalt der Leitungen sind im Brandschutzkonzept nach BauPrüfVO § 9 zu dokumentieren – nicht im Wortlaut der SBauVO-Paragraphen detailliert.",
        ],
        table: {
          caption: "Begriffe im Überblick",
          headers: ["Begriff", "Rolle", "Abgrenzung"],
          rows: [
            [
              "Sicherheitsstromversorgungsanlage",
              "Strom bei Netzausfall für sicherheitstechnische Anlagen",
              "Pflicht nur §§ 14, 54, 80, 109 SBauVO",
            ],
            [
              "Sicherheitstechnische Anlagen",
              "„insbesondere“-Katalog je Sonderbau-Typ",
              "Beleuchtung, BMA, SELFA, RWA … je nach Paragraph",
            ],
            [
              "Allgemeine Stromversorgung",
              "Regelnetz des Gebäudes",
              "Ausfall löst Umschaltung auf Sicherheitsstrom aus",
            ],
          ],
        },
      },
      {
        id: "versammlung",
        title: "§ 14 SBauVO – Versammlungsstätten",
        paragraphs: [
          "Versammlungsstätten müssen eine Sicherheitsstromversorgungsanlage haben, die bei Ausfall der Stromversorgung den Betrieb der sicherheitstechnischen Anlagen übernimmt, insbesondere: Sicherheitsbeleuchtung, selbsttätige Feuerlöschanlagen, Druckerhöhungsanlagen für Löschwasser, Rauchabzugsanlagen, Brandmeldeanlagen, Alarmierungsanlagen und Gebäudefunkanlagen.",
          "Anwendungsbereich: Teil 1 SBauVO – Versammlungsstätten nach § 50 BauO NRW (z. B. VR > 200 Personen, Freianlagen, Stadien). § 14 steht im Abschnitt Technische Anlagen zusammen mit Blitzschutz.",
          "Keine gesetzliche Mindestdauer in § 14 – anders als Hochhaus § 109. Wo Notlicht Pflicht ist: [Sicherheitsbeleuchtung](/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw) (§ 15 SBauVO).",
        ],
      },
      {
        id: "beherbergung",
        title: "§ 54 SBauVO – Beherbergungsstätten",
        paragraphs: [
          "Beherbergungsstätten müssen Sicherheitsstromversorgungsanlagen haben, die bei Ausfall der allgemeinen Stromversorgung den Betrieb der sicherheitstechnischen Anlagen übernehmen, insbesondere: Sicherheitsbeleuchtung, Alarmierungseinrichtungen, Brandmeldeanlagen und Gebäudefunkanlagen.",
          "Anwendungsbereich: Teil 2 SBauVO – Beherbergungsstätten mit mehr als 12 Gastbetten (§ 47 SBauVO). Schmalerer Katalog als Versammlungsstätte, Verkauf oder Hochhaus: keine SELFA, kein Rauchabzug, keine Druckerhöhungsanlage im „insbesondere“-Verzeichnis.",
          "Vertiefung: [Beherbergung](/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw), [BMA-Pflicht](/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw).",
        ],
      },
      {
        id: "verkauf",
        title: "§ 80 SBauVO – Verkaufsstätten",
        paragraphs: [
          "Verkaufsstätten müssen Sicherheitsstromversorgungsanlagen haben, die bei Ausfall der allgemeinen Stromversorgung den Betrieb der sicherheitstechnischen Anlagen übernehmen, insbesondere: Sicherheitsbeleuchtung, Beleuchtung der Stufen und Hinweise auf Ausgänge, selbsttätige Feuerlöschanlagen, Rauchabzugsanlagen, Schließeinrichtungen für Feuerschutzabschlüsse (z. B. Rolltore), Brandmeldeanlagen, Alarmierungsanlagen, Druckerhöhungsanlagen und Gebäudefunkanlagen.",
          "Anwendungsbereich: Teil 3 SBauVO – Verkaufsstätten mit Verkaufsräumen oder Ladenstraßen > 2.000 m² (§ 60 SBauVO). Breitester Katalog neben Hochhaus – inklusive Feuerschutzabschlüsse und expliziter Stufen-/Ausgangshinweis-Beleuchtung.",
          "Vertiefung: [Verkaufsstätten](/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw).",
        ],
      },
      {
        id: "hochhaus",
        title: "§ 109 SBauVO – Hochhäuser (inkl. § 114)",
        paragraphs: [
          "Hochhäuser müssen Sicherheitsstromversorgungsanlagen haben, die bei Ausfall der allgemeinen Stromversorgung für mindestens drei Stunden den Betrieb der sicherheitstechnischen Gebäudeausrüstung übernehmen, insbesondere: Sicherheitsbeleuchtung, selbsttätige Feuerlöschanlagen und Druckerhöhungsanlagen, Rauchabzugsanlagen, Druckbelüftungsanlagen, Brandmeldeanlagen, Alarmierungsanlagen, Aufzüge und Gebäudefunkanlagen für die Feuerwehr.",
          "Leitungsnetze der Sicherheitsstromversorgung müssen mindestens bis zur geschossweisen Unterverteilung so beschaffen oder geschützt sein, dass sie bei Brand ihre Funktionsfähigkeit für mindestens 90 Minuten behalten.",
          "§ 114 SBauVO: Feste, flüssige oder gasförmige Brennstoffe dürfen nicht in Geschossen über dem Erdgeschoss gelagert werden – Ausnahme: Tagesvorrat für den Betrieb der Sicherheitsstromversorgungsanlagen.",
          "Einzige gesetzliche Betriebsdauer im Landesrecht: nur § 109 nennt ausdrücklich 3 Stunden Versorgung und 90 Minuten Leitungsfunktionserhalt. Für Versammlung, Beherbergung und Verkauf regelt das Gesetz die Dauer nicht.",
          "Vertiefung: [Hochhaus Brandschutz](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
        ],
      },
      {
        id: "weitere",
        title: "§ 24 Großbühne und Garagen",
        paragraphs: [
          "§ 24 SBauVO (Großbühnen): Beleuchtung an Auslösevorrichtungen der Rauchabzugs- und Sprühwasserlöschanlagen sowie am Handfeuermelder an der Brandsicherheitswache muss an die Sicherheitsstromversorgung angeschlossen sein – Anschluss an die Sicherheitsstromversorgungsanlage der Versammlungsstätte nach § 14.",
          "Garagen (Teil 5): § 135 SBauVO regelt Sicherheitsbeleuchtung für geschlossene Großgaragen (mit Ausnahmen) – aber keinen eigenen Paragraphen „Sicherheitsstromversorgungsanlagen“. Eine gesetzliche Sicherheitsstrom-Pflicht für Garagen lässt sich aus BauO/SBauVO nicht unmittelbar ableiten.",
        ],
      },
      {
        id: "nicht-pflicht",
        title: "Keine gesetzliche Pflicht für",
        paragraphs: [],
        list: [
          "Krankenhäuser, Schulen, Bürogebäude, Wohnheime, Industriebauwerke – sofern nicht zugleich Versammlungsstätte, Beherbergung, Verkaufsstätte oder Hochhaus im Sinne der SBauVO-Teile",
          "Garagen (nur Sicherheitsbeleuchtung nach § 135, kein Sicherheitsstrom-Paragraph)",
          "DIN VDE 0100-560, DIN EN 50171, VdS-Richtlinien – nicht Inhalt dieses Ratgebers",
        ],
      },
      {
        id: "kataloge",
        title: "Versorgungsumfang im Vergleich",
        paragraphs: [],
        table: {
          caption: "„insbesondere“-Kataloge – was mitversorgt werden muss",
          headers: ["Anlage", "§ 14 VS", "§ 54 Hotel", "§ 80 Verkauf", "§ 109 Hochhaus"],
          rows: [
            ["Sicherheitsbeleuchtung", "Ja", "Ja", "Ja (+ Stufen, Ausgangshinweise)", "Ja"],
            ["Selbsttätige Feuerlöschanlagen", "Ja", "—", "Ja", "Ja"],
            ["Druckerhöhungsanlagen (Löschwasser)", "Ja", "—", "Ja", "Ja"],
            ["Rauchabzugsanlagen", "Ja", "—", "Ja", "Ja"],
            ["Druckbelüftungsanlagen", "—", "—", "—", "Ja"],
            ["Brandmeldeanlagen", "Ja", "Ja", "Ja", "Ja"],
            ["Alarmierung(s)anlagen", "Ja", "Ja", "Ja", "Ja"],
            ["Gebäudefunkanlagen", "Ja", "Ja", "Ja", "Ja (für Feuerwehr)"],
            ["Feuerschutzabschlüsse (Rolltore)", "—", "—", "Ja", "—"],
            ["Aufzüge", "—", "—", "—", "Ja"],
            ["Mindestdauer Versorgung", "nicht genannt", "nicht genannt", "nicht genannt", "3 Stunden"],
            ["Leitungs-Funktionserhalt Brand", "nicht genannt", "nicht genannt", "nicht genannt", "90 Minuten"],
          ],
        },
      },
      {
        id: "uebersicht",
        title: "Übersicht: wann Sicherheitsstrom gesetzlich?",
        paragraphs: [],
        table: {
          caption: "Schwellen und Normen",
          headers: ["Gebäudeart", "Schwelle", "Norm", "Besonderheit"],
          rows: [
            ["Versammlungsstätte", "§ 50 BauO (z. B. VR > 200 Pers.)", "§ 14 SBauVO", "Breiter Katalog; keine Zeitangabe"],
            ["Beherbergung", "> 12 Gastbetten", "§ 54 SBauVO", "Engerer Katalog"],
            ["Verkaufsstätte", "Verkaufsfläche > 2.000 m²", "§ 80 SBauVO", "Inkl. Rolltore, Stufenbeleuchtung"],
            ["Hochhaus", "Gebäudehöhe > 22 m", "§ 109 SBauVO", "3 h Versorgung; 90 min Leitung; Aufzüge"],
            ["Garage", "—", "—", "Kein Sicherheitsstrom-Paragraph"],
            ["Normales Gebäude", "—", "—", "Keine gesetzliche Pflicht"],
          ],
        },
      },
      {
        id: "konzept-pruefung",
        title: "BauPrüfVO § 9 und PrüfVO",
        paragraphs: [
          "Bei großen Sonderbauten (§ 70 Abs. 2 BauO NRW) muss das Brandschutzkonzept die Sicherheitsstromversorgung mit Angaben zur Bemessung, Lage und brandschutztechnischen Ausbildung des Aufstellraums, Ersatzstromversorgungsanlagen (Batterien, Aggregate) und zum Funktionserhalt der elektrischen Leitungsanlagen enthalten (BauPrüfVO NRW § 9).",
          "PrüfVO technische Anlagen Sonderbauten NRW: wiederkehrende Prüfung von Sicherheitsbeleuchtungs- und Sicherheitsstromversorgungsanlagen – in Hochhäusern wiederkehrend nur elektrische Anlagen außerhalb von Wohnungen.",
          "Konzept: [BauPrüfVO § 9](/ratgeber/brandschutzkonzept-baupruefvo-nrw). Prüfung: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Sicherheitsstromversorgung – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            ["1", "Sonderbau mit SBauVO-Sicherheitsstrom-Paragraph?", "§ 50 BauO; §§ 14, 54, 80, 109", "Ohne Tatbestand: keine Pflicht"],
            ["2", "Welcher SBauVO-Teil?", "§§ 14, 54, 80, 109", "Maßgeblicher „insbesondere“-Katalog"],
            ["3", "Welche sicherheitstechnischen Anlagen vorgeschrieben?", "jeweiliger SBauVO-Teil", "Nur vorgeschriebene Anlagen mitversorgen"],
            ["4", "Hochhaus?", "§ 109 SBauVO", "3 Stunden Versorgung; 90 Minuten Leitungsfunktionserhalt"],
            ["5", "Brennstofflagerung über EG für Aggregat?", "§ 114 SBauVO", "Tagesvorrat für Sicherheitsstrom zulässig"],
            ["6", "Großer Sonderbau – Konzept?", "§ 70; BauPrüfVO § 9", "Bemessung, Aufstellraum, Ersatzstrom dokumentieren"],
            ["7", "Wiederkehrende Prüfung?", "PrüfVO § 1", "Sicherheitsstromversorgungsanlagen prüfpflichtig"],
            ["8", "Garage mit Sicherheitsbeleuchtung?", "§ 135 SBauVO", "Beleuchtung ja – kein § Sicherheitsstrom"],
            ["9", "Abgrenzung Sicherheitsbeleuchtung?", "§§ 15, 54, 77, 108", "Raumlisten im Beleuchtungs-Ratgeber"],
            ["10", "Abgrenzung BMA/Alarmierung?", "§§ 20, 55, 79, 107", "Nur mitversorgen, wenn gesetzlich vorgeschrieben"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst nur BauO NRW, SBauVO NRW, BauPrüfVO NRW und PrüfVO zusammen – ohne DIN VDE 0100-560, DIN EN 50171 oder VdS-Richtlinien. Bemessung von Batteriekapazität und Aggregatleistung regelt das Gesetz nicht.",
          "Wo Notlichtleuchten hingehören: [Sicherheitsbeleuchtung](/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw). Wann BMA und Alarmierung Pflicht sind: [Brandmeldeanlage](/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw", label: "Sicherheitsbeleuchtung" },
      { href: "/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw", label: "BMA-Pflicht" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw", label: "Verkaufsstätten" },
      { href: "/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw", label: "Beherbergung" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätten" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept § 9" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/elektrische-betriebsraeume-sbauvo-nrw", label: "Elektrische Betriebsräume" },
    ],
    faq: [
      {
        question: "Braucht jedes Gebäude eine Sicherheitsstromversorgung?",
        answer:
          "Nein. Die BauO NRW kennt keine allgemeine Pflicht. Gesetzlich nur bei Versammlungsstätte (§ 14), Beherbergung > 12 Betten (§ 54), Verkauf > 2.000 m² (§ 80) und Hochhaus > 22 m (§ 109 SBauVO).",
      },
      {
        question: "Was ist der Unterschied zur Sicherheitsbeleuchtung?",
        answer:
          "Sicherheitsbeleuchtung (§§ 15, 54, 77, 108, 135): wo Leuchten Pflicht sind. Sicherheitsstromversorgung (§§ 14, 54, 80, 109): welche Anlagen bei Netzausfall weiterlaufen müssen – inklusive Beleuchtung, BMA, SELFA u. a.",
      },
      {
        question: "Wie lange muss Sicherheitsstrom bereitstehen?",
        answer:
          "Nur § 109 SBauVO (Hochhaus) nennt ausdrücklich 3 Stunden Versorgungsdauer und 90 Minuten Funktionserhalt der Leitungen bei Brand. Für Versammlung, Hotel und Verkauf steht keine Mindestdauer im Gesetz.",
      },
      {
        question: "Gilt das in der Tiefgarage?",
        answer:
          "Geschlossene Großgaragen können Sicherheitsbeleuchtung nach § 135 SBauVO brauchen – aber keinen eigenen Sicherheitsstrom-Paragraph in der SBauVO.",
      },
      {
        question: "Müssen Aufzüge über Sicherheitsstrom laufen?",
        answer:
          "Nur im Hochhaus nach § 109 SBauVO im „insbesondere“-Katalog. Nicht in Versammlungsstätte, Beherbergung oder Verkauf im gesetzlichen Katalog.",
      },
      {
        question: "Darf Diesel für das Aggregat im Obergeschoss lagern?",
        answer:
          "§ 114 SBauVO: Brennstoffe grundsätzlich nicht über dem Erdgeschoss – Ausnahme Tagesvorrat für den Betrieb der Sicherheitsstromversorgungsanlage.",
      },
      {
        question: "Wer prüft die Anlage?",
        answer:
          "In Sonderbauten: PrüfVO NRW mit Prüfsachverständigem. Technische Ausführung und Wartung zusätzlich nach DIN VDE – nicht Gegenstand dieses Ratgebers.",
      },
    ],
  },
];
