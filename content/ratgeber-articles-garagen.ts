/**
 * 30.08.2024 – Garagen SBauVO NRW Teil 5 (§§ 121–142).
 * Quelle: Garagen_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_GARAGEN: RatgeberArticle[] = [
  {
    slug: "mittelgrossgaragen-brandschutz-sbauvo-nrw",
    title: "Garagen Brandschutz NRW: Kleingarage bis Großgarage nach SBauVO Teil 5",
    excerpt:
      "Teil 5 SBauVO gilt für jede Garage – ohne Mindestgröße. Zwei Fragen: Nutzfläche Klein/Mittel/Groß – und offen oder geschlossen? GK-5-Bauteile, Rauchabschnitte, Rettungswege, BMA, Lüftung und Aufsicht statt BSB.",
    metaTitle: "Garagen Brandschutz NRW: SBauVO Teil 5 | H&S+",
    metaDescription:
      "Tiefgarage und Parkhaus NRW: Kleingarage, Mittelgarage, Großgarage – Rauchabschnitt, BMA, Lüftung, Rettungswege, Sicherheitsschleuse und Betrieb nach SBauVO.",
    keywords: [
      "Garagen Brandschutz NRW",
      "Mittelgarage SBauVO",
      "Großgarage Brandschutz",
      "Tiefgarage Brandschutz",
      "Parkhaus Anforderungen NRW",
      "Rauchabschnitt Garage",
      "SBauVO Teil 5 Garagen",
    ],
    sections: [
      {
        id: "frage",
        title: "Zwei Fragen – und eine Doppelschwelle",
        paragraphs: [
          "Ob und wie streng die Sonderbauverordnung für Garagen greift, hängt nicht von der Stellplatzanzahl allein ab. Zuerst zwei Prüfungen: Wie groß ist die **Nutzfläche** der Garage (Klein, Mittel, Groß)? Und ist die Garage **offen** oder **geschlossen**?",
          "Teil 5 SBauVO gilt für **alle** Stellplätze und Garagen (§ 121) – **ohne Mindestgröße**. Das ist nicht dasselbe wie **großer Sonderbau**: der folgt erst ab **mehr als 1.000 m² Nutzfläche** (§ 50 Abs. 2 BauO) mit [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig). Eine Mittelgarage mit 400 m² ist Sonderbau über Teil 5, braucht aber kein Konzept als großer Sonderbau.",
          "Abgrenzung Betrieb: Garagen haben in Teil 5 **keine** Brandschutzordnung, **keinen** Brandschutzbeauftragten und **keine** Feuerwehrplan-Pflicht – stattdessen **Aufsichtsperson** in allgemein zugänglichen geschlossenen Großgaragen (§ 139). Vergleich: [BSO](/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw), [BSB](/ratgeber/brandschutzbeauftragter-pflicht-sbauvo-nrw), [Feuerwehrpläne](/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw).",
        ],
      },
      {
        id: "einstufung",
        title: "Klein, Mittel, Groß – und Garagentypen",
        paragraphs: [],
        table: {
          caption: "Einstufung nach § 122 SBauVO",
          headers: ["Typ", "Nutzfläche", "Besonderes"],
          rows: [
            ["Kleingarage", "≤ 100 m²", "Teil 5, mildere Detailpflichten"],
            ["Mittelgarage", "> 100 – 1.000 m²", "Rauchabschnitte, Verbindungen, Rettungswege ab Mittel"],
            ["Großgarage", "> 1.000 m²", "Großer Sonderbau + §§ 132, 137, 139 u. a."],
            ["Offene Garage", "—", "≥ 1/3 Umfassungswand unverschließbar ins Freie; Querlüftung"],
            ["Geschlossene Garage", "—", "Strenger: Lüftung, BMA, SiBe, Rauchabschnitte"],
            ["Oberirdische Garage", "—", "Fußböden im Mittel ≤ 1,50 m unter Gelände"],
            ["Automatische Garage", "—", "Brandwände statt Rauchabschnitte; kein Personenverkehr"],
          ],
        },
      },
      {
        id: "gk5",
        title: "Gebäudeklasse 5 als Default",
        paragraphs: [
          "Soweit Teil 5 nichts Abweichendes regelt, gelten auf tragende, aussteifende und raumabschließende Bauteile von Garagen die Anforderungen der BauO NRW an **Gebäudeklasse 5** (§ 122 Abs. 14 Satz 1).",
          "Nicht anwendbar bei Garagen u. a.: § 30 Abs. 3 Satz 2, § 31 Abs. 4 Nr. 1–2, § 36 Abs. 1 Satz 2 Nr. 2, § 39 Abs. 1 Satz 3 Nr. 4, § 40 Abs. 1 Satz 2 Nr. 1 und 3, § 41 Abs. 5 Nr. 1 und 3 BauO – die üblichen GK-Erleichterungen greifen hier nicht.",
          "Einordnung Gesamtanlage: [Gesetzliche Einstufung](/ratgeber/gesetzliche-einstufung-gebaeude-bauo-nrw). Brandabschnitte allgemein: [§§ 29–30 BauO](/ratgeber/brandabschnitte-bauo-sbauvo-nrw).",
        ],
      },
      {
        id: "bauteile",
        title: "Bauteile und Rauchabschnitte",
        paragraphs: [
          "§ 127: Tragende Wände und Decken über, unter und zwischen Garagen **feuerbeständig** – Erleichterung oberirdisch bis 22 m über Gelände. § 128: Außenwände Mittel/Groß **nichtbrennbar** (Ausnahme eingeschossige oberirdische reine Garagen). § 129: Trennwände zu anderer Nutzung mindestens feuerhemmend; zu anderen Gebäuden **feuerbeständig**.",
          "Geschlossene Großgaragen (nicht automatisch): **Rauchabschnitte** feuerhemmend, nichtbrennbar – max. **5.000 m²** oberirdisch, **2.500 m²** sonst; **Verdopplung** mit Sprinkler in jedem Garagengeschoss. Automatische Garagen: **Brandwände**, Brandabschnitte max. **6.000 m³** Brutto-Rauminhalt; § 30 Abs. 2 Nr. 2 BauO nicht anwendbar.",
        ],
      },
      {
        id: "verbindung",
        title: "Verbindung zum Wohnbau – Sicherheitsschleusen",
        paragraphs: [
          "Flure, Treppenräume und Aufzugsvorräume (nicht nur für Garagennutzer) zu **geschlossenen** Mittel- und Großgaragen: nur über **Sicherheitsschleusen** – feuerbeständige Wände/Decken, Türen feuerhemmend, rauchdicht, selbstschließend, Aufschlag in Fluchtrichtung (§ 133).",
          "Zu **offenen** Garagen: Öffnungen mit feuerhemmenden, dichten, selbstschließenden Türen. **Automatische Garagen:** keine Verbindung zu anderen Räumen oder Gebäuden.",
          "Wohn-Tiefgaragen-Komplex: typischer Planungsfehler ist die direkte Öffnung des Hausflurs in die geschlossene Garage ohne Schleuse – [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw) und § 133 gemeinsam prüfen.",
        ],
      },
      {
        id: "rettungsweg",
        title: "Rettungswege",
        paragraphs: [],
        table: {
          caption: "§ 134 SBauVO – Rettungswege",
          headers: ["Anforderung", "Maß / Regel"],
          rows: [
            ["Zwei Rettungswege", "Jede Mittel-/Großgarage, jedes Geschoss"],
            ["Erleichterung oberirdisch", "Ein RW genügt, wenn Ausgang ins Freie ≤ 15 m"],
            ["Notwendiger Treppenraum", "Einstellplätze im Mittel > 3 m über Gelände: jede notw. Treppe im eigenen TR; § 35 Abs. 2 Satz 2 BauO nicht anwendbar"],
            ["Erreichbarkeit", "Offen: max. 50 m Luftlinie; geschlossen: max. 30 m zu TR oder Ausgang"],
            ["Großgarage", "Bodenmarkierungen + beleuchtete Wandhinweise zu Treppen/Ausgängen"],
            ["Türen", "Nicht versperrt; von innen leicht öffenbar (Betriebszeit)"],
          ],
        },
      },
      {
        id: "technik",
        title: "Beleuchtung, Lüftung, BMA, Löschanlagen",
        paragraphs: [
          "§ 135: Mittel/Groß – allgemeine Beleuchtung 1 Lux / 20 Lux. Geschlossene Großgaragen (Ausnahmen: eingeschossig mit festem Benutzerkreis): **Sicherheitsbeleuchtung** Rettungswege – Details: [Sicherheitsbeleuchtung](/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw). Gebäudefunk für Feuerwehr bei Störung (Ausnahme ≤ 1 UG und ≤ 2.500 m² NF).",
          "§ 136 geschlossene Mittel/Groß: maschinelle Abluft + Zuluft; CO-Halbstundenmittelwert max. **100 ppm** (SV-Gutachten nach Inbetriebnahme als Alternative); min. **6** bzw. **12 m³/h/m²**; zwei Ventilatoren, getrennte Stromkreise.",
          "§ 137: Geschlossene **Großgarage** – BMA mit selbsttätigen Meldern (Ausnahme: Sprinkler in **jedem** Geschoss). Geschlossene **Mittelgarage** – BMA wenn Verbindung zu BMA-pflichtigen Räumen. Weiter: [BMA-Pflicht](/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw).",
          "§ 138: Wandhydranten Typ F in unterirdischen Mittel-/Großgaragen nahe jedes TR; Sprinkler u. a. unterirdische Großgarage in Mehrzweckgebäude, automatische Garagen, > 20 Hebebühnen mit Grube; RWA in geschlossenen Großgaragen.",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb – Aufsicht statt BSB",
        paragraphs: [
          "§ 139: In allgemein zugänglichen **geschlossenen Großgaragen** ständig **Aufsichtsperson** – oder Monitorkontrolle mit unverzüglicher Erreichbarkeit. Beleuchtung 20 Lux in Betriebszeit; Lüftung und **CO-Warnanlagen** betriebsbereit; **Rauch- und Feuerverbot** mit Hinweisschild.",
          "Keine brennbaren Stoffe außerhalb Kfz (Ausnahmen: Reifen, Fahrradanhänger je Stellplatz). § 140: Kfz in Treppenräumen, Fluren, Kellergängen **verboten** – in anderen Räumen nur mit Gesamtkraftstoff ≤ 12 l unter Bedingungen.",
          "Nach Inbetriebnahme: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) für BMA, Sprinkler, RWA in geschlossenen Großgaragen. E-Fahrzeuge betrieblich: [E-Fahrzeuge Tiefgarage](/ratgeber/e-fahrzeuge-tiefgarage-brandgefahren-fbfhb-024).",
        ],
      },
      {
        id: "grenzfaelle",
        title: "Grenzfälle – ja oder nein?",
        paragraphs: [
          "Grenzfall ja: Geschlossene Tiefgarage 850 m² unter Wohnhaus – Mittelgarage, Rauchabschnitte § 132, Sicherheitsschleuse § 133, zwei Rettungswege § 134.",
          "Grenzfall nein: Einzelgarage 28 m² am EFH – Kleingarage, Teil 5 mit reduziertem Paket; trotzdem [Kraftstoff](/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz) und FeuVO bei Heizung prüfen.",
          "Grenzfall ja: Parkhaus 1.200 m² geschlossen – Großgarage, großer Sonderbau, BMA § 137, Aufsicht § 139, Konzept § 70.",
          "Grenzfall offen: Offene Mittelgarage 600 m² – keine geschlossenen Anforderungen zu Lüftung/BMA, aber Rettungswege und Verbindungen zu Wohnbau bleiben.",
          "Grenzfall ja: Automatische Parkgarage – Brandwände § 132 Abs. 3, keine §-134-Abs.-4-Rettungswege für Personen.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Garagen – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Frage", "Ergebnis"],
          rows: [
            ["1", "Stellplatz/Garage § 2 Abs. 8 BauO?", "Teil 5 SBauVO anwendbar"],
            ["2", "Nutzfläche?", "Klein ≤ 100 / Mittel ≤ 1.000 / Groß > 1.000 m²"],
            ["3", "Offen oder geschlossen?", "Geschlossen → Lüftung, BMA, ggf. SiBe"],
            ["4", "Automatische Garage?", "Brandwände; keine Personen-RW § 134 Abs. 4"],
            ["5", "NF > 1.000 m²?", "Großer Sonderbau → Konzept § 70"],
            ["6", "Rauchabschnitte § 132?", "5.000 / 2.500 m²; Verdopplung Sprinkler"],
            ["7", "Zwei Rettungswege je Geschoss?", "Erleichterung: 1 RW wenn Ausgang ≤ 15 m"],
            ["8", "Einstellplätze > 3 m über Gelände?", "Eigener notwendiger TR je Treppe"],
            ["9", "Verbindung Wohn/Büro?", "Sicherheitsschleuse wenn geschlossen"],
            ["10", "Lüftung / CO nachgewiesen?", "§ 136; 100 ppm oder maschinell"],
            ["11", "BMA erforderlich?", "Geschl. Groß; Mittel bei Verbindung"],
            ["12", "Sprinkler / Wandhydranten / RWA?", "§ 138 je nach Typ"],
            ["13", "Geschl. Großgarage öffentlich?", "Aufsichtsperson § 139"],
            ["14", "BSO / BSB / Feuerwehrplan?", "In Teil 5 nicht vorgesehen"],
            ["15", "Feuerwehrzufahrt § 5 BauO?", "Separates Thema – nicht § 123 Garagenverkehr"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erklärt BauO NRW und SBauVO NRW Teil 5 (§§ 121–142) – ohne PrüfVO NRW, VV TB, Stellplatzsatzungen oder GEG-Ladeinfrastruktur. Verkehrsbreite Garagenzufahrt (§ 123) ist nicht Feuerwehrzufahrt nach § 5 BauO – [Feuerwehr-Flächen](/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw). Ersetzt kein genehmigungsfähiges Brandschutzkonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw", label: "BMA Garagen" },
      { href: "/ratgeber/brandabschnitte-bauo-sbauvo-nrw", label: "Brandabschnitte" },
      { href: "/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw", label: "Treppenräume" },
      { href: "/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw", label: "Sicherheitsbeleuchtung" },
      { href: "/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw", label: "Feuerwehrzufahrten" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept ab 1.000 m²" },
      { href: "/ratgeber/e-fahrzeuge-tiefgarage-brandgefahren-fbfhb-024", label: "E-Fahrzeuge" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
    ],
    faq: [
      {
        question: "Ab wann gilt SBauVO Teil 5 für Garagen?",
        answer:
          "Für alle Stellplätze und Garagen nach § 2 Abs. 8 BauO – ohne Mindestgröße (§ 121 SBauVO). Die Einstufung Klein/Mittel/Groß steuert die Strenge der Detailanforderungen.",
      },
      {
        question: "Was ist der Unterschied zwischen Mittelgarage und großem Sonderbau?",
        answer:
          "Mittelgarage: Nutzfläche über 100 bis 1.000 m². Großer Sonderbau mit Konzeptpflicht: erst ab mehr als 1.000 m² Nutzfläche (§ 50 Abs. 2 BauO). Eine 800 m² Tiefgarage ist Mittelgarage, aber kein großer Sonderbau.",
      },
      {
        question: "Braucht eine geschlossene Großgarage eine BMA?",
        answer:
          "Ja – Brandmeldeanlage mit selbsttätigen Brandmeldern (§ 137 SBauVO), außer in jedem Garagengeschoss eine selbsttätige Feuerlöschanlage.",
      },
      {
        question: "Gibt es einen Brandschutzbeauftragten in Garagen?",
        answer:
          "Nein in SBauVO Teil 5. In allgemein zugänglichen geschlossenen Großgaragen: Aufsichtsperson oder Monitorkontrolle (§ 139). Das ist nicht dasselbe wie der BSB nach § 85/§ 118.",
      },
      {
        question: "Was ist eine offene Garage?",
        answer:
          "Mindestens ein Drittel der Umfassungswandfläche unverschließbar ins Freie; bei Mittel/Groß weitere Kriterien zu gegenüberliegenden Wänden und Querlüftung (§ 122 Abs. 2–5).",
      },
      {
        question: "Welche Rettungsweglängen gelten?",
        answer:
          "Geschlossen: max. 30 m Luftlinie zu Treppenraum oder Ausgang ins Freie. Offen: max. 50 m. Zwei unabhängige Rettungswege je Geschoss – oberirdisch Erleichterung bei Ausgang ≤ 15 m (§ 134).",
      },
      {
        question: "Gilt Gebäudeklasse 5 für jede Garage?",
        answer:
          "Soweit Teil 5 nichts anderes regelt, ja – feuerbeständige/fachplanerische Anforderungen wie GK 5 auf Bauteile (§ 122 Abs. 14), mit enumerierten Ausnahmen von BauO-Erleichterungen.",
      },
      {
        question: "Braucht jede Tiefgarage ein Brandschutzkonzept?",
        answer:
          "Nur als großer Sonderbau ab über 1.000 m² Nutzfläche oder bei genehmigungspflichtigem Vorhaben mit Sonderbau-Verfahren. Mittelgaragen brauchen den vollen SBauVO-Nachweis, aber nicht automatisch ein Konzept nach § 70.",
      },
    ],
  },
];
