/**
 * 05.09.2024 – Brandschutzordnung (BauO / SBauVO NRW).
 * Quelle: Brandschutzordnung_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BRANDSCHUTZORDNUNG: RatgeberArticle[] = [
  {
    slug: "brandschutzordnung-pflicht-sbauvo-nrw",
    title: "Brandschutzordnung Pflicht NRW: wann Sie eine BSO wirklich brauchen",
    excerpt:
      "Nicht jedes Gebäude braucht eine Brandschutzordnung. Zwei Fragen: Greifen § 42, § 57, § 86 oder § 117 SBauVO – und braucht ihr nur BSO, zusätzlich Räumungskonzept oder nur Rettungswegplan? Gesetzliche Schwellen ohne DIN 14096.",
    metaTitle: "Brandschutzordnung Pflicht NRW | H&S+",
    metaDescription:
      "Brandschutzordnung Pflicht NRW: Versammlungsstätte, Hotel, Verkauf, Hochhaus – wann BSO nach SBauVO gilt, Mindestinhalt, Aushang und Unterweisung.",
    keywords: [
      "Brandschutzordnung Pflicht NRW",
      "BSO Pflicht Sonderbau",
      "Brandschutzordnung erstellen",
      "§ 42 SBauVO Brandschutzordnung",
      "§ 86 SBauVO Verkaufsstätte",
      "§ 117 SBauVO Hochhaus",
      "Brandschutzordnung Hotel",
    ],
    sections: [
      {
        id: "frage",
        title: "Zwei Fragen – und eine Abgrenzung",
        paragraphs: [
          "Ob eine Brandschutzordnung (BSO) gesetzlich vorgeschrieben ist, hängt nicht davon ab, ob jemand „eine BSO nach DIN 14096“ erwartet. Das Landesrecht stellt zuerst zwei Prüfungen: Greift für eure Nutzung einer der vier SBauVO-Betriebsparagraphen – Versammlungsstätte, Beherbergung, Verkauf oder Hochhaus? Und reicht die BSO allein, braucht ihr zusätzlich ein Räumungskonzept oder nur einen Rettungswegplan im Gästezimmer?",
          "Die BauO NRW schreibt keine BSO für alle Gebäude vor. Sie ermächtigt über § 50 Abs. 1 Satz 3 den Verordnungsgeber, Betriebspflichten für Sonderbauten zu regeln. Konkrete BSO-Pflichten stehen in der SBauVO – für den laufenden Betrieb, getrennt vom Brandschutzkonzept in der Genehmigung.",
          "Wichtige Abgrenzung: Die **gesetzliche BSO** nach SBauVO ist nicht dasselbe wie eine **DIN-14096-Gliederung** (Teil A/B/C) in der Praxis – und nicht dasselbe wie Feuerwehrpläne, Fluchtpläne nach ASR A2.3 oder das genehmigte Brandschutzkonzept. DIN 14096 kann die Umsetzung strukturieren; Rechtskern sind §§ 42, 57, 86 und 117 SBauVO NRW.",
        ],
      },
      {
        id: "abgrenzung",
        title: "BSO – und was daneben liegt",
        paragraphs: [],
        table: {
          caption: "Planarten und Konzepte im Betrieb",
          headers: ["Institut", "Phase", "Funktion", "Norm"],
          rows: [
            [
              "Brandschutzordnung (BSO)",
              "Betrieb",
              "Organisatorische Vorschrift: Aufgaben, Verhalten, Räumung, ggf. BSB",
              "§§ 42, 57, 86, 117 SBauVO",
            ],
            [
              "Räumungskonzept",
              "Betrieb",
              "Gesonderte Darstellung ab Schwellen (VS > 1.000 / Verkauf > 5.000 m²)",
              "§§ 42, 86 SBauVO",
            ],
            [
              "Feuerwehrpläne",
              "Betrieb",
              "Für die örtliche Feuerwehr – parallel, rechtlich eigenständig",
              "§§ 42, 57, 86, 117 SBauVO",
            ],
            [
              "Rettungswegplan",
              "Betrieb",
              "Aushang im Beherbergungsraum für Gäste – keine BSO",
              "§ 57 Abs. 2 SBauVO",
            ],
            [
              "Brandschutzkonzept",
              "Genehmigung",
              "Große Sonderbauten; enthält betriebliche Maßnahmen inkl. BSO",
              "§ 70 Abs. 2 BauO; BauPrüfVO § 9",
            ],
            [
              "Sicherheitskonzept",
              "Betrieb",
              "Ordnungsdienst VS > 5.000 Plätze; kann Räumung enthalten",
              "§ 43 SBauVO",
            ],
          ],
        },
      },
      {
        id: "pflicht",
        title: "Wann die BSO Pflicht ist",
        paragraphs: [
          "Vier Fälle in der SBauVO NRW – alle anderen Nutzungen (normales Wohnen, Büro ohne Sonderbau-Merkmal, Garage, viele Schulen/Krankenhäuser ohne parallele Einschlägigkeit) haben aus diesen Paragraphen **keine** BSO-Pflicht. Schulen und Kliniken können Sonderbau sein – dann andere Regeln, nicht pauschal „rechtsfrei“: [Sonderbauten geregelt/ungeregelt](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
          "Versammlungsstätte Teil 1: BSO für alle erfassten Tatbestände (Versammlungsräume > 200 Besucher, Freianlagen, Stadien nach § 1 SBauVO) – mit **Aushang**. Ausnahmen § 1 Abs. 4 (Gottesdienst, Unterricht, Museum u. a.) prüfen.",
          "Beherbergung: BSO ab **mehr als 60 Gastbetten** (§ 57 Abs. 3). Bei 13 bis 60 Betten: **keine** BSO nach Abs. 3, aber Rettungswegplan und Brandhinweise in jedem Beherbergungsraum (§ 57 Abs. 2). Unterweisung nach § 57 Abs. 4 gilt für Beherbergungsstätten des Teil 2 – bei Hotels ohne BSO-Pflicht bezieht sich „Brandschutzordnung“ in der Belehrung auf das organisatorische Regelwerk des Betriebs, nicht auf eine nach Abs. 3 zu erstellende BSO.",
          "Verkaufsstätte Teil 3 ab **mehr als 2.000 m²** Verkaufsfläche (§ 60): BSO für alle Verkaufsstätten des Teil 3 (§ 86 Abs. 1). Räumungskonzept gesondert ab Verkaufsräumen **> 5.000 m²**.",
          "Hochhaus ab **> 22 m** Gebäudehöhe: BSO für alle Hochhäuser (§ 117 Abs. 1) – mit **Aushang**. Verantwortlich: Eigentümer/in (§ 118); Pflichten können schriftlich auf Betreiber/in übertragbar werden.",
        ],
        table: {
          caption: "BSO-Pflicht nach Nutzung",
          headers: ["Nutzung", "BSO?", "Schwelle", "Aushang?", "Verantwortlich"],
          rows: [
            ["Versammlungsstätte Teil 1", "Ja", "§ 1 SBauVO", "Ja", "Betreiber/in"],
            ["Beherbergung", "Ja", "> 60 Gastbetten", "—", "Betreiber/in"],
            ["Beherbergung 13–60 Betten", "Nein", "Rettungswegplan § 57 Abs. 2", "Im Zimmer", "—"],
            ["Verkaufsstätte Teil 3", "Ja", "> 2.000 m² Verkaufsfläche", "—", "Betreiber/in"],
            ["Hochhaus", "Ja", "Höhe > 22 m", "Ja", "Eigentümer/in"],
            ["Sonstiges Gebäude", "Nein", "—", "—", "—"],
          ],
        },
      },
      {
        id: "mindestinhalt",
        title: "Was mindestens in die BSO muss",
        paragraphs: [
          "Das Gesetz nennt kein DIN-Format und keine Stufen A/B/C – nur Mindestinhalte je Sonderbau. In der Versammlungsstätte und im Verkauf: Erforderlichkeit und Aufgaben des Brandschutzbeauftragten bzw. der Selbsthilfekräfte; Räumungsmaßnahmen unter besonderer Berücksichtigung von Menschen mit Behinderungen. Im Hochhaus zusätzlich explizit: Maßnahmen im Brandfall und Verhalten bei Brand.",
          "§ 117 verweist auf „Brandschutzbeauftragte, sofern nach § 118 Abs. 1 erforderlich“ – im Gesetzestext so formuliert; die **Bestellpflicht** des BSB liegt in § 118 Abs. 2: [BSB-Pflicht SBauVO](/ratgeber/brandschutzbeauftragter-pflicht-sbauvo-nrw).",
        ],
        table: {
          caption: "Mindestinhalt – Vergleich der vier Paragraphen",
          headers: ["Inhalt", "§ 42 VS", "§ 57 Hotel", "§ 86 Verkauf", "§ 117 Hochhaus"],
          rows: [
            ["BSB / Kräfte für Brandschutz", "Erforderlichkeit + Aufgaben", "—", "BSB + Selbsthilfe", "Aufgaben, sofern § 118"],
            ["Räumung / Behinderungen", "Ja", "—", "Ja", "Ja"],
            ["Verhalten bei Brand", "Über Unterweisung", "Über Unterweisung", "In BSO", "Explizit in BSO"],
            ["Maßnahmen im Brandfall", "—", "—", "—", "Explizit"],
            ["Räumungskonzept gesondert", "> 1.000 Besucher", "—", "> 5.000 m² VR", "—"],
          ],
        },
      },
      {
        id: "verfahren",
        title: "Einvernehmen, Aushang, Unterweisung",
        paragraphs: [
          "Alle vier Paragraphen verlangen die Aufstellung **im Einvernehmen mit der Brandschutzdienststelle** – nicht allein durch den Betreiber. Das ist Verfahrensvoraussetzung, nicht bloße Höflichkeit.",
          "Aushangpflicht: nur Versammlungsstätte (§ 42 Abs. 1) und Hochhaus (§ 117 Abs. 1). Verkauf und Hotel > 60 Betten: gesetzlich kein Aushang der BSO genannt – Unterweisung und organisatorische Umsetzung trotzdem Pflicht.",
          "Unterweisung: bei Arbeitsbeginn und danach **mindestens einmal jährlich** über BSO, Brandverhalten, Löscheinrichtungen und Alarmierung (§ 42 Abs. 2; § 57 Abs. 4; § 86 Abs. 2). Nur Versammlungsstätte: Niederschrift über Unterweisung, Bauaufsichtsbehörde auf Verlangen; Brandschutzdienststelle darf teilnehmen.",
          "Parallel und zusätzlich prüfen: [Feuerwehrpläne](/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw) in denselben vier Fällen – eigenständige Pflicht, kein Ersatz für die BSO.",
        ],
      },
      {
        id: "konzept",
        title: "Brandschutzkonzept und Betrieb",
        paragraphs: [
          "Bei großen Sonderbauten ist mit den Bauvorlagen ein Brandschutzkonzept einzureichen (§ 70 Abs. 2 BauO). BauPrüfVO § 9 verlangt darin betriebliche Maßnahmen – Brandschutzordnung, Räumung, Räumungssignale. Das adressiert die BSO schon in der Planung.",
          "Die SBauVO-Betriebspflichten gelten **zusätzlich** im laufenden Betrieb – unabhängig davon, ob das Konzept bereits eine BSO skizziert hat. Konzept, Genehmigungsauflage und §-42/57/86/117-Pflicht müssen zusammenpassen, sind aber verschiedene Rechtsebenen.",
        ],
      },
      {
        id: "bestand",
        title: "Bestand und Übergangsfristen",
        paragraphs: [],
        table: {
          caption: "Bestandsregelungen",
          headers: ["Nutzung", "Norm", "Frist / Hinweis"],
          rows: [
            ["Versammlungsstätte", "§ 45 SBauVO", "§ 42 Abs. 1–2 innerhalb von 2 Jahren umsetzen"],
            ["Verkaufsstätte", "§ 90 SBauVO", "§ 86 Abs. 1–2 innerhalb von 2 Jahren umsetzen"],
            ["Beherbergung", "§ 58 SBauVO", "§ 57 anwendbar; BSO folgt aus laufendem Betrieb"],
            ["Hochhaus", "§ 119 SBauVO", "Betriebsvorschriften ein Jahr nach Inkrafttreten auf Bestand"],
          ],
        },
      },
      {
        id: "grenzfaelle",
        title: "Grenzfälle – ja oder nein?",
        paragraphs: [
          "Grenzfall ja: Konzertsaal 350 Plätze – BSO + Aushang + Feuerwehrpläne; ab 1.001 Besucher zusätzlich Räumungskonzept (sofern nicht im Sicherheitskonzept § 43).",
          "Grenzfall nein: Hotel 48 Gastbetten – keine BSO nach § 57 Abs. 3; Rettungswegplan pro Zimmer Pflicht; jährliche Unterweisung des Personals dennoch.",
          "Grenzfall ja: Einkaufsmarkt 2.400 m² – BSO mit BSB-Aufgaben und Selbsthilfe; Feuerwehrpläne parallel.",
          "Grenzfall nein: Bürogebäude GK 4 ohne Sonderbau-Tatbestand – keine SBauVO-BSO; ASR A2.3-Fluchtpläne und ggf. DGUV-Organisation sind andere Ebenen.",
          "Grenzfall ja: Wohnhochhaus 24 m – BSO + Aushang; BSB nur wenn § 118 Abs. 2 greift (nicht bei Ausnahme 30 m / 200 m² NE).",
          "Grenzfall offen: Schule mit Versammlungsstätten-Charakter (Aula > 200) – Teil 1 prüfen; sonst ungeregelt Sonderbau ohne diese BSO-Paragraphen.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Betriebsfälle",
        paragraphs: [
          "Neueröffnung Eventlocation: BSO im Einvernehmen mit Brandschutzdienststelle, Aushang sichtbar, Unterweisung Personal mit Niederschrift, Feuerwehrpläne an örtliche Feuerwehr – vor erstem Ticketverkauf.",
          "Hotelumbau von 55 auf 65 Betten: ab Überschreitung 60 Gastbetten BSO + Feuerwehrpläne neu; Rettungswegpläne in Zimmern bleiben parallel.",
          "Shopping-Center 6.000 m² Verkaufsfläche: BSO plus gesondertes Räumungskonzept; BSB und Selbsthilfekräfte in BSO verankern.",
          "WEG Hochhaus: Eigentümergemeinschaft verantwortlich für BSO-Aushang; Facility Manager kann Pflichten übernehmen, wenn schriftlich und mit Gebäudekenntnis.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Brandschutzordnung – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Frage", "Ergebnis"],
          rows: [
            ["1", "Sonderbau mit § 42/57/86/117?", "Ohne Treffer: keine SBauVO-BSO"],
            ["2", "Versammlungsstätte Teil 1?", "BSO + Aushang; Räumungskonzept ab > 1.000"],
            ["3", "Beherbergung > 60 Gastbetten?", "BSO Pflicht; ≤ 60: Rettungswegplan"],
            ["4", "Verkauf > 2.000 m²?", "BSO; Räumungskonzept ab > 5.000 m² VR"],
            ["5", "Hochhaus > 22 m?", "BSO + Aushang"],
            ["6", "Einvernehmen Brandschutzdienststelle?", "Voraussetzung für rechtmäßige BSO"],
            ["7", "Aushang (VS / Hochhaus)?", "Pflicht prüfen"],
            ["8", "Jährliche Unterweisung?", "§ 42/57/86 – Niederschrift nur VS"],
            ["9", "Mindestinhalt BSB, Räumung, Behinderungen?", "Je nach Paragraph"],
            ["10", "Feuerwehrpläne parallel?", "Eigenständige Pflicht"],
            ["11", "Bestand – 2-Jahres-Frist abgelaufen?", "§ 45 / § 90"],
            ["12", "Verwechslung mit Konzept oder DIN 14096?", "Getrennte Ebenen"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erklärt die **gesetzliche BSO-Pflicht nach BauO NRW, SBauVO NRW und BauPrüfVO NRW** – ohne DIN 14096, VFDB-Muster oder VV TB. Wie eine BSO inhaltlich gegliedert wird, klären Brandschutzdienststelle und Genehmigung. Praxisstandard DIN 14096 und Betriebshilfe DGUV: [BSB bestellen](/ratgeber/bestellung-brandschutzbeauftragter-nrw), [Escape Room BSO-Praxis](/ratgeber/escape-room-brandschutzordnung-fluchtplan). Ersetzt keine behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw", label: "Feuerwehrpläne" },
      { href: "/ratgeber/brandschutzbeauftragter-pflicht-sbauvo-nrw", label: "BSB Pflicht" },
      { href: "/ratgeber/gesetzliche-einstufung-gebaeude-bauo-nrw", label: "Sonderbau-Einstufung" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätte" },
      { href: "/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw", label: "Beherbergung" },
      { href: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw", label: "Verkaufsstätten" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw", label: "Garagen (keine BSO)" },
      { href: "/brandschutzordnung-koeln", label: "BSO erstellen (Leistung)" },
    ],
    faq: [
      {
        question: "Braucht jedes Gebäude eine Brandschutzordnung?",
        answer:
          "Nein. Eine allgemeine BSO-Pflicht steht nicht in der BauO NRW. Gesetzlich verbindlich sind BSO nach §§ 42, 57 Abs. 3, 86 und 117 SBauVO – für Versammlungsstätten, Beherbergung > 60 Gastbetten, Verkaufsstätten > 2.000 m² und Hochhäuser > 22 m.",
      },
      {
        question: "Ist DIN 14096 gesetzlich Pflicht?",
        answer:
          "Nein. DIN 14096 (Teil A/B/C) ist Praxisstandard zur Gliederung – nicht Rechtskern. Maßgeblich sind die Mindestinhalte in den SBauVO-Paragraphen und das Einvernehmen mit der Brandschutzdienststelle.",
      },
      {
        question: "Was ist der Unterschied zur Feuerwehrplan-Pflicht?",
        answer:
          "BSO und Feuerwehrpläne werden oft in denselben vier Sonderbau-Fällen verlangt – aber rechtlich getrennt. Die BSO regelt Organisation und Verhalten; Feuerwehrpläne dienen der örtlichen Feuerwehr. Beides parallel prüfen.",
      },
      {
        question: "Braucht ein Hotel mit 40 Betten eine BSO?",
        answer:
          "Nein nach § 57 Abs. 3. Ab 13 Betten gelten andere Pflichten (z. B. Sicherheitsbeleuchtung); in jedem Beherbergungsraum Rettungswegplan und Brandhinweise (§ 57 Abs. 2). BSO erst ab mehr als 60 Gastbetten.",
      },
      {
        question: "Muss die BSO ausgehängt werden?",
        answer:
          "Gesetzlich ausdrücklich nur bei Versammlungsstätten (§ 42) und Hochhäusern (§ 117). Bei Verkauf und Hotel > 60 Betten: Unterweisungspflicht, aber kein Aushang der BSO im Gesetzestext genannt.",
      },
      {
        question: "Wann brauche ich ein Räumungskonzept?",
        answer:
          "Gesondert bei Versammlungsstätten für mehr als 1.000 Besucher (§ 42) und bei Verkaufsräumen über 5.000 m² (§ 86) – sofern die Maßnahmen nicht bereits im Sicherheitskonzept nach § 43 stehen.",
      },
      {
        question: "Reicht das Brandschutzkonzept aus der Genehmigung?",
        answer:
          "Nein als alleiniger Betriebsnachweis. Das Konzept adressiert die BSO in der Planung; die SBauVO-Betriebspflichten gelten zusätzlich im laufenden Betrieb – inklusive Einvernehmen, Unterweisung und ggf. Aushang.",
      },
      {
        question: "Wer ist verantwortlich?",
        answer:
          "Versammlungsstätte, Beherbergung, Verkauf: Betreiber/in oder Beauftragte. Hochhaus: Eigentümer/in (§ 118); schriftliche Übertragung auf Betreiber/in möglich, Verantwortung Eigentümer bleibt.",
      },
    ],
  },
];
