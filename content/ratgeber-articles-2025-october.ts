/**
 * Oktober 2025 – 4 Artikel (4/Monat).
 * Quellen: BauO NRW, GEG-UVO NRW, Handlungsempfehlung.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_OCTOBER: RatgeberArticle[] = [
  {
    slug: "sicherheitsbeleuchtung-rettungswege-bauo-nrw",
    title: "Sicherheitsbeleuchtung an Rettungswegen nach BauO NRW",
    excerpt:
      "Sicherheitsbeleuchtung sichert Rettungswege bei Stromausfall – Anforderungen nach BauO NRW, Abgrenzung zu Notbeleuchtung und Schnittstelle BMA/BSO.",
    metaTitle: "Sicherheitsbeleuchtung Rettungswege NRW | H&S+",
    metaDescription:
      "Sicherheitsbeleuchtung NRW: Rettungswege BauO, Notbeleuchtung, Zentralbatterie, Prüfung, Sonderbau, Fluchtwegbeleuchtung.",
    keywords: [
      "Sicherheitsbeleuchtung",
      "Rettungsweg Beleuchtung",
      "Notbeleuchtung BauO",
      "Fluchtwegbeleuchtung",
      "Zentralbatterie Notlicht",
      "Sicherheitsbeleuchtung Prüfung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Beleuchtung wenn das Netz ausfällt",
        paragraphs: [
          "BauO NRW und DIN EN 1838: Sicherheitsbeleuchtung auf Rettungswegen bei Ausfall der allgemeinen Beleuchtung – Antipanikbeleuchtung und Fluchtwegkennzeichnung.",
          "Unterschied Notbeleuchtung (Arbeitsplätze ASR) und sicherheitstechnische Beleuchtung (Rettungswege BauO) – beide können parallel nötig sein.",
          "Grenzfall ja: Bürogebäude GK 4, Sicherheitsbeleuchtung Flur und Treppe, Zentralbatterie, jährliche Funktionsprüfung dokumentiert. Grenzfall nein: Defekte Notlichtleuchten in Rettungsweg, keine Wartung, Nutzer im Dunkeln bei Störung.",
        ],
      },
      {
        id: "anforderungen",
        title: "Wo ist sie Pflicht?",
        paragraphs: [
          "Abhängig von Gebäudeklasse, Nutzung und Rettungsweglänge – im Brandschutzkonzept und Bauantrag.",
          "Sonderbauten: oft verschärft – [Versammlungsstätte](/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw), [Hochhaus](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
          "[Flucht und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw) als Grundlage.",
        ],
      },
      {
        id: "technik",
        title: "Einzel- und Zentralbatterie",
        paragraphs: [
          "Einzelbatterieleuchten oder Zentralbatterieanlage mit Überwachung.",
          "Kopplung BMA: teils automatische Einschaltung bei Netzausfall/Brand.",
          "[PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) bei Sonderbau.",
        ],
      },
      {
        id: "betrieb",
        title: "Wartung und BSO",
        paragraphs: [
          "Regelmäßige Funktions- und Dauerprüfung – Dokumentation für Behörde und Versicherer.",
          "BSO: Nutzer wissen, dass grüne Piktogramme und Notlicht zum Ausgang führen.",
          "[Alarmierung Evakuierung](/ratgeber/alarmierung-evakuierung-betrieb).",
        ],
      },
      {
        id: "umbau",
        title: "Umbau und Bestand",
        paragraphs: [
          "Umbau Rettungsweg: Leuchten neu planen, Leuchtdichte nach Norm.",
          "[Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw) kann Nachrüstung staffeln.",
          "LED-Umrüstung: Nachweis Kompatibilität mit Zentralbatterie.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst Sicherheitsbeleuchtung an Rettungswegen zusammen. Elektrofachplanung und DIN EN 50172 ergänzen. Er ersetzt keinen Installationsnachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Evakuierung" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "VStätte" },
      { href: "/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw", label: "BMA-Kopplung" },
    ],
    faq: [
      {
        question: "Sicherheits- oder Notbeleuchtung?",
        answer:
          "Sicherheitsbeleuchtung = Rettungswege (BauO); Notbeleuchtung oft Arbeitsplätze (ASR) – beides prüfen.",
      },
      {
        question: "Wie oft prüfen?",
        answer:
          "Monatlich Kurztest, jährlich Dauerprüfung – typisch nach DIN EN 50172.",
      },
      {
        question: "Pflicht in jedem Büro?",
        answer:
          "Abhängig von GK und Rettungsweg – nicht pauschal jedes Einzelbüro.",
      },
      {
        question: "Zentralbatterie oder Einzel?",
        answer:
          "Planungsentscheidung – Wartung und Überwachung unterschiedlich.",
      },
      {
        question: "Sonderbau strenger?",
        answer:
          "Oft ja – Konzept und SBauVO können Zusatzanforderungen haben.",
      },
      {
        question: "Was bei Umbau?",
        answer:
          "Neue Rettungswegführung = Anpassung Sicherheitsbeleuchtung im Genehmigungsverfahren.",
      },
    ],
  },
  {
    slug: "geeg-uvo-anlagentechnik-brandschutz-nrw",
    title: "GEG-UVO NRW: Anlagentechnik und Brandschutz-Schnittstellen",
    excerpt:
      "Die GEG-UVO NRW regelt Umsetzung des Gebäudeenergiegesetzes – mit Schnittstellen zu Brandschutz bei Heizung, Lüftung, Solar und technischen Anlagen.",
    metaTitle: "GEG-UVO NRW Brandschutz | H&S+",
    metaDescription:
      "GEG-UVO NRW Anlagentechnik: Brandschutz Schnittstelle, Lüftung, Heizung, Photovoltaik, technische Anlagen, Umsetzungsverordnung.",
    keywords: [
      "GEG-UVO NRW",
      "Gebäudeenergiegesetz Umsetzung",
      "Anlagentechnik Brandschutz",
      "Lüftung Brandschutz",
      "Heizungsanlage Brandschutz",
      "GEG Schnittstelle",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Energie und Brandschutz im selben Gebäude",
        paragraphs: [
          "GEG-UVO NRW setzt das Gebäudeenergiegesetz landesrechtlich um – technische Anlagen (Heizung, Lüftung, Kälte, Solar) berühren Brandschutz bei Aufstellung, Durchdringungen und Betrieb.",
          "Nicht Energiegesetz ersetzt Brandschutz – parallele Prüfung BauO/SBauVO und GEG.",
          "Grenzfall ja: PV-Dach mit Brandschutznachweis Durchdringung, Lüftungskanal mit Abschottung, Heizungsraum feuerabschottend. Grenzfall nein: Lüftungsöffnung ohne Brandschutz in Trennwand, Technik im Rettungsweg.",
        ],
      },
      {
        id: "anlagen",
        title: "Typische Anlagen und Konflikte",
        paragraphs: [
          "Wärmepumpen, Brennwertkessel: Aufstellraum, Abstände, [Feuerungsanlagen](/ratgeber/feuerungsanlagen-feuvo-nrw-betrieb) parallel.",
          "[Photovoltaik](/ratgeber/photovoltaik-brandrisiken-dach-anlage): Dachdurchdringung, Kabelwege.",
          "[Elektrische Betriebsräume](/ratgeber/elektrische-betriebsraeume-sbauvo-nrw) bei großen E-Anlagen.",
        ],
      },
      {
        id: "lueftung",
        title: "Lüftung und Brandfall",
        paragraphs: [
          "Lüftungsanlagen: Abschottungen, Verriegelung bei Brand – Kopplung BMA.",
          "RWA und Lüftung koordinieren – nicht gegeneinander planen.",
          "[BMA Brandfallsteuerung](/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw).",
        ],
      },
      {
        id: "genehmigung",
        title: "Genehmigung und Nachweis",
        paragraphs: [
          "Energetische Sanierung und Neubau: GEG-Nachweis plus Brandschutz bei wesentlicher Änderung.",
          "[Umbau](/ratgeber/umbau-nutzungsaenderung-brandschutz) triggert Konzept.",
          "[BauPAVO](/ratgeber/baupavo-nrw-bauarten-verwendbarkeitsnachweis) für Bauprodukte.",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb und Wartung",
        paragraphs: [
          "Wartung Heizung/Lüftung dokumentieren – Filter, Kanäle, keine Brandlast in Technikzentralen.",
          "[DGUV Gefährdungsbeurteilung](/ratgeber/dguv-205-001-gefaehrdungsbeurteilung-brandschutz).",
          "Filter und Staub in Lüftung als Brandrisiko.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber skizziert GEG-UVO-Brandschutz-Schnittstellen. Energieberater und Brandschutzplaner gemeinsam einbinden – keine Einzeldisziplin.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerungsanlagen-feuvo-nrw-betrieb", label: "Feuerungsanlagen" },
      { href: "/ratgeber/photovoltaik-brandrisiken-dach-anlage", label: "Photovoltaik" },
      { href: "/ratgeber/elektrische-betriebsraeume-sbauvo-nrw", label: "Betriebsräume" },
      { href: "/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw", label: "Lüftung Brandfall" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau" },
    ],
    faq: [
      {
        question: "Ersetzt GEG-UVO Brandschutz?",
        answer:
          "Nein – parallele Anforderungen, Schnittstellen bei Anlagen.",
      },
      {
        question: "PV und Brandschutz?",
        answer:
          "Dachdurchführungen, Wechselrichter-Aufstellung, Kabelabschottung – beides prüfen.",
      },
      {
        question: "Wärmepumpe im Flur?",
        answer:
          "In der Regel nein – Aufstellort und Brandschutz im Konzept.",
      },
      {
        question: "Sanierung nur energetisch?",
        answer:
          "Bei wesentlicher Änderung Brandschutz mitprüfen – nicht nur GEG.",
      },
      {
        question: "Lüftung ohne Abschottung?",
        answer:
          "Durchdringungen feuerwiderstandsfähig abschotten – BauO-Pflicht.",
      },
      {
        question: "Wer koordiniert?",
        answer:
          "Architekt/Fachplaner Heizung/Lüftung mit Brandschutzplaner und Bauaufsicht.",
      },
    ],
  },
  {
    slug: "fluktuationshaus-evakuierung-nrw",
    title: "Fluktuationshaus: Evakuierung bei wechselnder Nutzerzahl",
    excerpt:
      "Campus und Großraumbüros mit täglich wechselnden Personen brauchen angepasste Evakuierung – Sammelstellen, Beschilderung, BSO und Konzeptpraxis.",
    metaTitle: "Fluktuationshaus Evakuierung Büro | H&S+",
    metaDescription:
      "Fluktuationshaus Großraumbüro: Evakuierung Campus, wechselnde Nutzer, Sammelstelle, BSO, Brandschutzkonzept, Sonderbau NRW.",
    keywords: [
      "Fluktuationshaus",
      "Campus Evakuierung",
      "Großraumbüro Flucht",
      "wechselnde Nutzer Brandschutz",
      "Sammelstelle Büro",
      "Evakuierung Sonderbau",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Viele Menschen, wenig Übersicht",
        paragraphs: [
          "Fluktuationshaus: Gebäude mit hoher täglicher Nutzerwechselzahl – typisch Campus, Großraumbüro, Co-Working. [Großraumbüro Sonderbau](/ratgeber/grossraumbuero-sonderbau-ungeregelt-nrw) trifft oft zu.",
          "Evakuierung schwieriger als in Fabrik mit fester Belegschaft – Besucher, externe Dienstleister, Homeoffice-Spitzen.",
          "Grenzfall ja: Campus 450 Personen Tagesmaximum, Beschilderung zwei Treppen, Sammelstellen je Gebäudeteil, jährliche Übung mit Facility. Grenzfall nein: 500 Tagesnutzer ohne aktualisierte Sammelstellen und ohne Unterweisung für Wechselpersonal.",
        ],
      },
      {
        id: "konzept",
        title: "Konzeptinhalte Evakuierung",
        paragraphs: [
          "Nutzerzahl Spitze und Verteilung je Geschoss – nicht nur Mietvertrag-Fläche.",
          "Rettungswege: zwei unabhängige Wege, Weglängen, barrierefreie Alternativen wo vorgeschrieben.",
          "[§9 Konzept](/ratgeber/brandschutzkonzept-baupruefvo-nrw) und [Alarmierung](/ratgeber/alarmierung-evakuierung-betrieb).",
        ],
      },
      {
        id: "organisation",
        title: "BSO und Unterweisung",
        paragraphs: [
          "[BSB](/ratgeber/bestellung-brandschutzbeauftragter-nrw), Brandschutzhelfer, Evakuierungsbeauftragte je Etage.",
          "Wechselnde Mieter: Unterweisung bei Einzug, Fluchtplan sichtbar.",
          "Besuchermanagement: Empfang kennt Sammelstelle.",
        ],
      },
      {
        id: "technik",
        title: "Alarmierung und Beschilderung",
        paragraphs: [
          "BMA/Sprachalarmierung: verständliche Durchsagen mehrsprachig wenn nötig.",
          "Fluchtwegpläne aktuell – [Fluchtplan aktualisieren](/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe).",
          "Aufzüge: keine Evakuierung über Personenaufzug im Brand.",
        ],
      },
      {
        id: "uebung",
        title: "Übungen",
        paragraphs: [
          "Regelmäßige Evakuierungsübungen – dokumentiert, mit Schwachstellen-Maßnahmen.",
          "Dezember-Thema [Brandschutzübung](/ratgeber/brandschutzuebung-betrieb-nrw) ergänzend.",
          "Hochhaus: [Betriebsvorschriften](/ratgeber/hochhaus-betriebsvorschriften-sbauvo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst Fluktuationshaus-Evakuierung zusammen. Kein Ersatz für behördlich anerkanntes Evakuierungskonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/grossraumbuero-sonderbau-ungeregelt-nrw", label: "Großraumbüro" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Alarmierung" },
      { href: "/ratgeber/bestellung-brandschutzbeauftragter-nrw", label: "BSB" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Fluchtplan" },
      { href: "/ratgeber/brandschutzuebung-betrieb-nrw", label: "Übungen" },
    ],
    faq: [
      {
        question: "Was ist ein Fluktuationshaus?",
        answer:
          "Gebäude mit hoher täglicher Wechselzahl an Nutzern – Campus, Großraumbüro.",
      },
      {
        question: "Andere Evakuierung als Fabrik?",
        answer:
          "Ja – weniger feste Strukturen, mehr Besucher, stärkere Beschilderung und Übungen.",
      },
      {
        question: "Wie zähle ich Nutzer?",
        answer:
          "Spitzenbelegung realistisch – Badges, Zutritt, Konzept mit Behörde.",
      },
      {
        question: "Co-Working?",
        answer:
          "Fluktuationscharakter – Mieterwechsel und Unterweisung beachten.",
      },
      {
        question: "Mehrere Gebäude?",
        answer:
          "Sammelstellen je Gebäude, ggf. gemeinsame Steuerzentrale.",
      },
      {
        question: "Übung Pflicht?",
        answer:
          "Betrieblich und oft versicherungs-/behördenrelevant – regelmäßig durchführen.",
      },
    ],
  },
  {
    slug: "gebaeudeklassen-grenzfaelle-nrw",
    title: "Gebäudeklassen-Grenzfälle: Handlungsempfehlung in der Praxis",
    excerpt:
      "An Grenzen der Gebäudeklassen 4 und 5 entscheiden Handlungsempfehlung und Konzept – typische Streitpunkte bei Höhe, Fläche und Nutzung in NRW.",
    metaTitle: "Gebäudeklassen Grenzfälle NRW | H&S+",
    metaDescription:
      "Gebäudeklassen Grenzfälle NRW: Handlungsempfehlung, GK 4 GK 5, Höhe Geschossfläche, Brandschutzkonzept, BauO Abgrenzung.",
    keywords: [
      "Gebäudeklassen Grenzfälle",
      "Handlungsempfehlung Brandschutz",
      "GK 4 GK 5",
      "Gebäudeklasse Höhe",
      "Geschossfläche Gebäudeklasse",
      "Brandschutz Abgrenzung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Wenn die Klasse nicht eindeutig ist",
        paragraphs: [
          "BauO NRW definiert Gebäudeklassen nach Nutzung, Höhe und Geschossfläche – Grenzfälle löst oft die Handlungsempfehlung Brandschutz NRW (BFM) mit.",
          "Falsche GK führt zu unterdimensioniertem Brandschutz oder überzogenen Kosten.",
          "Grenzfall ja: Gebäude 21,8 m Höhe, GK-Abgrenzung und Sonderbau Hochhaus parallel prüfen, Konzept begründet. Grenzfall nein: „GK 3“ ohne Prüfung bei 22 m und 3.200 m² Nutzfläche.",
        ],
      },
      {
        id: "kriterien",
        title: "Höhe, Fläche, Nutzung",
        paragraphs: [
          "Höhe: ab 7 m / 13 m / 22 m unterschiedliche Klassen und Sonderbau Hochhaus.",
          "Geschossfläche und Nutzung: Büro, Wohnen, Versammlung unterschiedlich.",
          "[Gebäudeklassen Überblick](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "sonderbau",
        title: "Sonderbau statt oder zusätzlich",
        paragraphs: [
          "Sonderbau-Tatbestand unabhängig von GK – [Systematik](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
          "GK 5 mit Sonderbau: strengere Anforderungen kumulieren.",
          "Handlungsempfehlung: Abstimmung mit unterer Bauaufsichtsbehörde.",
        ],
      },
      {
        id: "konzept",
        title: "Konzept und Nachweis",
        paragraphs: [
          "Bei Grenzfällen: begründete Einordnung im [Brandschutzkonzept](/ratgeber/brandschutzkonzept-baupruefvo-nrw).",
          "Ingenieurmethodischer Nachweis möglich – [DIN 18230](/ratgeber/brandschutznachweis-din-18230-nrw).",
          "Nicht nur Bauantrag-Formular.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Streitpunkte",
        paragraphs: [
          "Aufstockung: neue GK und Hochhaus?",
          "Anbau: Gesamtgebäude neu bewerten.",
          "Nutzerzahl VStätte vs. Bürofläche.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erläutert Grenzfälle – keine verbindliche GK-Festlegung. Behörde und Konzeptentscheidung maßgeblich.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Sonderbau" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/brandschutznachweis-din-18230-nrw", label: "Ingenieurmethode" },
    ],
    faq: [
      {
        question: "Was ist die Handlungsempfehlung?",
        answer:
          "Landesweite Orientierung für Bauaufsicht und Fachplaner zu Grenzfällen – nicht Gesetz, aber praxisrelevant.",
      },
      {
        question: "22 m immer Hochhaus?",
        answer:
          "Über 22 m: SBauVO Hochhaus – parallel zur GK.",
      },
      {
        question: "Kann ich GK absichtlich niedrig wählen?",
        answer:
          "Nein – falsche Einordnung ist genehmigungs- und haftungsrelevant.",
      },
      {
        question: "Sonderbau ohne GK-Wechsel?",
        answer:
          "Möglich – Sonderbau ist eigener Tatbestand.",
      },
      {
        question: "Wer entscheidet Grenzfall?",
        answer:
          "Untere Bauaufsichtsbehörde auf Basis Konzept.",
      },
      {
        question: "Ingenieurmethode bei Grenzfall?",
        answer:
          "Möglich wo zulässig – siehe eigenen Ratgeber.",
      },
    ],
  },
];
