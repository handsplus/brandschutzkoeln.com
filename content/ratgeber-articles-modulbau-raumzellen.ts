/**
 * 10.11.2024 – Modulbau / Raumzellengebäude Brandschutz (BFM-01 MHKBG NRW).
 * Quelle: 2021_02_28_mhkbg_bfm-1_praxisleitfaden_modulbau.pdf (BFM-01, Nov. 2020)
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_MODULBAU_RAEUMZELLEN: RatgeberArticle[] = [
  {
    slug: "modulbau-raumzellen-brandschutz-bauo-nrw",
    title: "Modulbau in NRW: Brandschutz bei Containern und Raummodulen",
    excerpt:
      "Bürocontainer, Modul-Schule oder Unterkunft aus Raumzellen: Die BauO NRW gilt wie beim Massivbau – aber der Nachweis läuft anders. Zwei Prüfstränge, drei Zellentypen und wann ZiE und vorhabenbezogene Bauartgenehmigung nötig sind.",
    metaTitle: "Modulbau Brandschutz NRW Raumzellen | H&S+",
    metaDescription:
      "Modulbau Brandschutz NRW: BFM-01 zu Raumzellentypen, Bauprodukt vs. Bauart, Standsicherheit Eurocode, Raumabschluss ZiE/vBg – Container und Raummodule nach BauO NRW.",
    keywords: [
      "Modulbau Brandschutz NRW",
      "Raumzellengebäude BauO NRW",
      "Containerbau Genehmigung",
      "ZiE Raumzelle",
      "vorhabenbezogene Bauartgenehmigung",
      "BFM-01 Modulbau",
    ],
    sections: [
      {
        id: "frage",
        title: "Schnell gebaut – aber genehmigungsfest?",
        paragraphs: [
          "Modulbau boomt: Bürocontainer auf der Baustelle, Kita aus Raummodulen, temporäre Unterkünfte aus Containern. Wer nur an Montage und Lieferzeit denkt, unterschätzt oft den Brandschutz – und landet im Genehmigungsverfahren vor der Frage: Wo ist der Nachweis für Wände, Fugen und Modulverbände?",
          "Der Praxisleitfaden Modulbau (Baufachliche Mitteilung 01 des MHKBG NRW, Version 1.0, November 2020) macht klar: Für Raumzellengebäude gelten dieselben bauordnungsrechtlichen Regeln wie für Massiv- oder Holzbau. Verfahrens- und Anforderungsunterschiede gibt es nicht – nur andere Nachweiswege, weil Stahltragkonstruktionen und Modulverbände selten in den Technischen Baubestimmungen fertig abgebildet sind.",
          "Kernbotschaft für Planer und Bauherrschaft: Die einzelne Raumzelle ist ein Bauprodukt, das zusammengefügte Gebäude ist eine Bauart. Beides braucht eigene Verwendbarkeits- bzw. Anwendbarkeitsnachweise – besonders, wenn an Bauteile Feuerwiderstandsfähigkeit gestellt wird.",
        ],
      },
      {
        id: "typen",
        title: "Drei Raumzellentypen – ein Leitfaden",
        paragraphs: [
          "BFM-01 unterscheidet Stahltragkonstruktionen in drei Typen. Der Typ bestimmt Konstruktion und damit den Nachweisaufwand – nicht, ob die BauO NRW überhaupt gilt.",
        ],
        table: {
          caption: "Raumzellentypen nach BFM-01",
          headers: ["Typ", "Konstruktion", "Umgangssprache"],
          rows: [
            ["Typ 1", "Vorgefertigte Raumzelle aus Seefrachtcontainern", "Seecontainer"],
            ["Typ 2", "Stahltragkonstruktion, Stahlrahmen nach außen freiliegend", "Container"],
            ["Typ 3", "Stahltragkonstruktion, Stahlrahmen außenseitig beplankt", "Raummodul"],
          ],
        },
      },
      {
        id: "anforderungen",
        title: "Wann welche brandschutztechnischen Anforderungen?",
        paragraphs: [
          "Grundsätzlich gelten § 3 i. V. m. § 14 BauO NRW und die Konkretisierungen in §§ 5, 26 bis 36, 39 bis 42, 45 und 46 – in der VV TB NRW vor allem Abschnitt A 2.1 (Brandverhalten, Feuerwiderstandsfähigkeit, Außenwände, Trennwände, Decken, Treppen, Flure u. a.).",
          "In Gebäudeklassen 1 und 2 kann es Fälle geben, in denen außer mindestens normalentflammbaren Baustoffen keine brandschutztechnischen Anforderungen an Bauteile gestellt werden – dann entfällt der Nachweis von Feuerwiderstandsfähigkeit an der Raumzelle.",
          "Sobald die Gebäudeklasse, Nutzung oder Sonderbau-Tatbestände höhere Anforderungen auslösen, müssen tragende und aussteifende Bauteile (Standsicherheit im Brandfall) und raumabschließende Bauteile (Raumabschluss) nachgewiesen werden – in den Bauvorlagen durch Angabe der geforderten Feuerwiderstandsfähigkeit oder des Brandverhaltens.",
        ],
      },
      {
        id: "produkt-bauart",
        title: "Bauprodukt und Bauart – doppelter Nachweis",
        paragraphs: [
          "Einzelne Raumzellen werden werksseitig vorgefertigt und dauerhaft in bauliche Anlagen eingebaut – sie sind Bauprodukte nach § 2 Abs. 11 BauO NRW (§§ 18 bis 24: Verwendbarkeit).",
          "Das Zusammenfügen der Module auf der Baustelle ist eine Bauart nach § 2 Abs. 12 und § 17 BauO NRW (Anwendbarkeit: aBg beim DIBt oder vBg bei der obersten Bauaufsichtsbehörde).",
          "Liegt keine allgemeine bauaufsichtliche Zulassung (abZ) oder allgemeine Bauartgenehmigung (aBg) des DIBt vor und sind raumabschließende Anforderungen gestellt, sind in der Regel erforderlich: Zustimmung im Einzelfall (ZiE) für die werksmäßig hergestellten Raumzellen und vorhabenbezogene Bauartgenehmigung (vBg) für das Zusammenfügen auf der Baustelle.",
          "Langfristig empfiehlt BFM-01: abZ für Raumzellen plus aBg für die Bauart Raumzellengebäude beim DIBt – fünf Jahre gültig, bundesweit, verlängerbar. ZiE/vBg bleibt die vorhabenbezogene Einzelfall-Lösung.",
        ],
        table: {
          caption: "Nachweiswege Modulbau (national)",
          headers: ["Ebene", "Was", "Bevorzugt", "Vorhabenbezogen"],
          rows: [
            ["Bauprodukt", "Einzelne Raumzelle", "abZ (DIBt)", "ZiE (MHKBG)"],
            ["Bauart", "Raumzellengebäude (Verbund)", "aBg (DIBt)", "vBg (MHKBG)"],
          ],
        },
      },
      {
        id: "zwei-nachweise",
        title: "Zwei getrennte Prüfstränge",
        paragraphs: [
          "Feuerwiderstandsfähigkeit hat zwei Dimensionen – in Modulbau besonders wichtig, weil sie nicht in einem Nachweis verschmelzen:",
          "Fugen, die im Brandfall aufklaffen, sind ein typischer Schwachpunkt. DIN 4102-4 ist als TB für Bauarten mit Raumabschluss vorhanden, weicht aber in den meisten realen Modulkonstruktionen ab – dient dennoch als wichtige Grundlage in gutachterlichen Bewertungen.",
        ],
        list: [
          "Standsicherheit im Brandfall (tragende/aussteifende Bauteile): Nachweis über VV TB NRW und DIN EN 1993-1-2 (Eurocode 3 Brandfall) mit Brandbeanspruchungen nach DIN EN 1991-1-2 – tabellarisch (Ebene 1), vereinfacht (Ebene 2) oder allgemeines Rechenverfahren (Ebene 3). Eurocode-Nachweise decken nur die Tragfähigkeit – nicht den Raumabschluss.",
          "Raumabschluss im Brandfall (raumabschließende Bauteile): Brandausbreitung, Rauchdichtigkeit, Verbindungen und Fugen – besonders kritisch an Modulstoßfugen und Bekleidungsstößen. Hier fehlen für Raumzellengebäude als Stahltragkonstruktion abschließende TB oder aaR – deshalb ZiE/vBg mit gutachterlicher Stellungnahme einer PÜZ-Stelle.",
          "Integrität der brandschutztechnischen Bekleidung muss bei Standsicherheitsnachweisen vorausgesetzt werden – sie wird in der Eurocode-Bemessung nicht mit nachgewiesen.",
        ],
      },
      {
        id: "abweichungen",
        title: "Abweichungen und Erleichterungen",
        paragraphs: [
          "Abweichungen nach § 69 oder Erleichterungen nach § 50 BauO NRW können brandschutztechnisch nicht nur die Feuerwiderstandsdauer verkürzen – es müssen die Leistungskriterien (Standsicherheit, Raumabschluss) schutzzielorientiert erfüllt oder kompensiert werden (baulich, anlagentechnisch, organisatorisch).",
          "Das MHKBG sieht diesen Weg nur für bestimmte Gebäudetypen als zielführend: in der Regel wenige Geschosse, keine Übernachtung von Personen, atypischer Einzelfall. Naturbrandmodelle ersetzen das auf Feuerwiderstandsklassen ausgerichtete System der Gebäudeklassen nicht vollständig – Anwendung nur über § 69 bzw. § 50.",
          "Mehr dazu: [Abweichungen § 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
        ],
      },
      {
        id: "ce-eta",
        title: "CE-Kennzeichnung ersetzt den Bauordnungsnachweis nicht",
        paragraphs: [
          "Raumzellen nach EU-Bauproduktenverordnung (305/2011) oder mit European Technical Assessment (ETA) bleiben Bauprodukte. Nationale Anforderungen beim Inverkehrbringen behindern den Marktzugang nicht.",
          "Werden Module zu einer baulichen Anlage zusammengefügt, können bauordnungsrechtliche Anforderungen an die Bauteile des Gesamtgebäudes gestellt werden – unabhängig von der Leistungserklärung der Einzelzelle. Freiwillige Herstellerangaben sind nur verwertbar, wenn eine prüffähige technische Dokumentation mit unabhängiger Drittprüfung vorliegt.",
          "Für den Raumabschluss von Raumzellengebäden gibt es keine allgemein anerkannten Regeln – freiwillige CE-Leistungsangaben allein reichen nicht. Details: [Bauprodukte CE](/ratgeber/bauprodukte-ce-kennzeichnung-nrw).",
        ],
      },
      {
        id: "antrag",
        title: "ZiE und vBg – was einreichen?",
        paragraphs: [
          "Anträge bei der obersten Bauaufsichtsbehörde (Formulare auf mhkbd.nrw) – formal getrennt vom Baugenehmigungsverfahren der unteren Behörde, aber materiell Voraussetzung für den Übereinstimmungsnachweis.",
          "Bauherrschaft (§ 53 Abs. 1) und Unternehmerschaft (§ 55 Abs. 1) müssen Nachweise zu Bauprodukten und Bauarten bereithalten – bei CE-Produkten die Leistungserklärung.",
        ],
        list: [
          "Gutachterliche Stellungnahme einer PÜZ-Stelle (§ 25 BauO NRW) mit Prüfberichten: Einzelbauteile, Verbindungen, Durchführungen, Modulstoß, Verbindung der Zellen zur Anlage",
          "Auszug Liegenschaftskataster mit Nachbarn und Standort",
          "Grundrisse, Ansichten, Schnitte",
          "Ausführungsplanung (Werkstattpläne, Konstruktionspläne)",
          "Brandschutzkonzept mit bauordnungsrechtlichen Anforderungen",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog Modulbau",
        paragraphs: [],
        table: {
          caption: "Brandschutz-Checkliste Raumzellengebäude",
          headers: ["Nr.", "Prüffrage", "Folge"],
          rows: [
            ["1", "Raumzellentyp 1, 2 oder 3?", "Konstruktionsmerkmale für Nachweis"],
            ["2", "Gebäudeklasse/Nutzung ohne FWF-Anforderungen?", "Nur normalentflammbar"],
            ["3", "Feuerwiderstand an Bauteilen gefordert?", "Standsicherheit + ggf. Raumabschluss nachweisen"],
            ["4", "abZ/aBg des DIBt vorhanden?", "ZiE/vBg entfällt ggf."],
            ["5", "Raumabschluss erforderlich?", "ZiE (Zelle) + vBg (Verbund) typischerweise nötig"],
            ["6", "Standsicherheit im Brandfall?", "Eurocode 3 Brandfall (VV TB A 2.1.3.2)"],
            ["7", "Modulfugen und Bekleidungsstöße geprüft?", "Kernpunkt Raumabschluss-Nachweis"],
            ["8", "CE/ETA der Zelle?", "Zusätzliche bauordnungsrechtliche Nachweise nötig"],
            ["9", "Sonderbau (z. B. Unterkunft, viele Personen)?", "Verschärfte Anforderungen + Konzept"],
            ["10", "PÜZ-Stellungnahme für ZiE/vBg?", "Voraussetzung oberste BA"],
            ["11", "Baugenehmigung untere Behörde?", "Parallel zum ZiE/vBg-Verfahren"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst BFM-01 (Praxisleitfaden Modulbau, MHKBG NRW, November 2020) für die Genehmigungspraxis zusammen – keine Konstruktionsanleitung und kein Ersatz für ZiE, vBg oder Prüfingenieur-Brandschutz.",
          "Quelle: [BFM-01 Praxisleitfaden Modulbau](https://www.mhkbd.nrw/system/files/media/document/file/2021_02_28_mhkbg_bfm-1_praxisleitfaden_modulbau.pdf). Verwandt: [Gemeinschaftsunterkünfte](/ratgeber/brandschutz-gemeinschaftsunterkuenfte), [Gebäudeklassen](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw), [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
      { href: "/ratgeber/bauprodukte-ce-kennzeichnung-nrw", label: "CE-Kennzeichnung" },
      { href: "/ratgeber/brandschutz-gemeinschaftsunterkuenfte", label: "Gemeinschaftsunterkünfte" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag Unterlagen" },
    ],
    faq: [
      {
        question: "Gilt die BauO NRW für Containergebäude?",
        answer:
          "Ja. Raumzellengebäude unterliegen denselben Regeln wie Massivbau – einschließlich §§ 17 bis 25 zu Bauprodukten und Bauarten. BFM-01 bestätigt: keine Verfahrenserleichterung allein wegen Modulbau.",
      },
      {
        question: "Brauche ich ZiE und vBg?",
        answer:
          "Wenn raumabschließende brandschutztechnische Anforderungen bestehen und keine abZ/aBg des DIBt vorliegen: in der Regel ZiE für die Einzelzelle und vBg für den Modulverbund bei der obersten Bauaufsicht NRW.",
      },
      {
        question: "Was ist der Unterschied Standsicherheit und Raumabschluss?",
        answer:
          "Standsicherheit: Tragwerk hält im Brandfall (Eurocode-Nachweis). Raumabschluss: keine Brandausbreitung/Rauch durch Wände, Decken, Fugen – für Modulbau meist nur über ZiE/vBg mit Prüfberichten, nicht über Standard-TB allein.",
      },
      {
        question: "Reicht CE auf dem Modul?",
        answer:
          "Nein für das Gesamtgebäude. CE/ETA betrifft das Bauprodukt. Zusammengebaute Raumzellengebäude brauchen zusätzlich Erfüllung der BauO-Anforderungen – oft eigene Nachweise zum Raumabschluss.",
      },
      {
        question: "Welcher Raumzellentyp ist am einfachsten?",
        answer:
          "BFM-01 definiert nur Konstruktionstypen – keinen „einfacheren“ Genehmigungsweg. Typ 1 (Seecontainer), Typ 2 (freiliegendes Stahlgerüst) und Typ 3 (beplanktes Modul) unterscheiden sich in den Nachweisdetails, nicht in der grundsätzlichen BauO-Pflicht.",
      },
      {
        question: "Was bei GK 1 oder 2?",
        answer:
          "Unter Umständen nur Anforderung normalentflammbarer Baustoffe – dann kein Nachweis der Feuerwiderstandsfähigkeit an Bauteilen. Sobald höhere GK- oder Sonderbau-Anforderungen greifen, gelten die vollen Nachweise.",
      },
      {
        question: "Wer erstellt die gutachterliche Stellungnahme?",
        answer:
          "PÜZ-Stelle mit Anerkennung für die jeweiligen Prüfbereiche (PÜZ-Verzeichnis DIBt) – Bewertung von Bauteilen, Anschlüssen, Modulverbund und Raumabschluss auf Basis von Prüfberichten.",
      },
    ],
  },
];
