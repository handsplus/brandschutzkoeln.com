/**
 * Juni 2026 – Türarten / Abschluss-Anforderungen Brandschutz (BauO NRW, SBauVO Auszug).
 * Quelle: Tuerarten_Brandschutz_BauO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_TUERARTEN_JUN2026: RatgeberArticle[] = [
  {
    slug: "tuerarten-brandschutz-bauo-nrw",
    title: "Welche Brandschutztür wo? Türarten nach BauO NRW",
    excerpt:
      "Treppenraum zur Wohnung, Flur zum Keller oder Brandwand: Die BauO NRW staffelt Abschlüsse nach Einbauort – feuerhemmend, rauchdicht, selbstschließend oder dichtschließend. Übersichtstabelle mit §-Verweis.",
    metaTitle: "Brandschutztür: welche Tür wo? BauO NRW | H&S+",
    metaDescription:
      "Brandschutztür BauO NRW: Treppenraum, notwendiger Flur, Brandwand – welche Abschlüsse wo gefordert sind. Gesetzesbegriffe mit §-Verweis; T30-RS ist Produktbezeichnung, kein BauO-Begriff.",
    keywords: [
      "Brandschutztür BauO NRW",
      "welche Brandschutztür wo",
      "T30-RS Tür",
      "Rauchschutztür notwendiger Flur",
      "Tür Treppenraum Wohnung",
      "feuerhemmend rauchdicht selbstschließend",
      "Brandschutzabschluss NRW",
      "Türarten Brandschutz",
    ],
    sections: [
      {
        id: "frage",
        title: "Welche Tür brauche ich – und wo?",
        paragraphs: [
          "Die häufigste Frage bei Umbau, Neubau oder Mängelbescheid: Welche Tür muss zwischen Treppenraum und Wohnung stehen – und welche zum Keller oder Lager? In Plänen und Baumärkten liest man T30, T30-RS oder T90. Im Gesetz selbst stehen andere Begriffe: feuerhemmend, feuerbeständig, rauchdicht, dichtschließend, selbstschließend.",
          "Die BauO NRW regelt Türen nicht als Handelsprodukt, sondern als Abschlüsse von Öffnungen in raumabschließenden Bauteilen. Bauteile werden nach Feuerwiderstandsfähigkeit unterschieden in feuerbeständige, hochfeuerhemmende und feuerhemmende Bauteile (§ 26 BauO NRW). Welche Anforderungskombination gilt, hängt vom Einbauort ab – vor allem von der Verbindung: Treppenraum zu Wohnung, zu Flur, zu Lager oder zu Brandwand.",
          "Die technische Umsetzung – Bauprodukt, Prüfzeugnis, Kennzeichnung – folgt aus den Technischen Baubestimmungen (VV TB NRW). Dieser Ratgeber fasst ausschließlich die Anforderungen aus BauO NRW und SBauVO-Auszügen zusammen; verlinkt zur [Flucht- und Rettungsweg-Planung](/ratgeber/flucht-und-rettungswege-bauo-nrw) und zu den [Gebäudeklassen](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "uebersicht",
        title: "Übersichtstabelle: Welche Tür wohin?",
        paragraphs: [
          "Die Zuordnung hängt vom Einbauort ab. Spalte „Norm“ verweist auf die jeweilige Vorschrift der BauO NRW 2018.",
        ],
        table: {
          caption: "Brandschutztüren nach Einbauort – BauO NRW",
          headers: ["Einbauort", "Gesetzliche Anforderung", "Norm"],
          rows: [
            [
              "Innere Brandwand",
              "Feuerbeständig, dicht und selbstschließend",
              "§ 30 Abs. 6",
            ],
            [
              "Ersatzwand statt Brandwand",
              "Dicht und selbstschließend; Feuerwiderstandsfähigkeit der Wand",
              "§ 30 Abs. 6",
            ],
            [
              "Trennwand zwischen Nutzungseinheiten",
              "Feuerhemmend, dicht und selbstschließend",
              "§ 29 Abs. 5",
            ],
            [
              "Öffnung in feuerwiderstandsfähiger Decke",
              "Abschluss mit Feuerwiderstandsfähigkeit der Decke",
              "§ 31 Abs. 6",
            ],
            [
              "Treppenraum → Keller, Lager, Werkstatt, NE > 200 m²",
              "Feuerhemmend, rauchdicht und selbstschließend",
              "§ 35 Abs. 6 Nr. 1",
            ],
            [
              "Treppenraum → notwendiger Flur",
              "Rauchdicht und selbstschließend",
              "§ 35 Abs. 6 Nr. 2",
            ],
            [
              "Treppenraum → sonstige Räume (ohne Wohnung)",
              "Dicht und selbstschließend",
              "§ 35 Abs. 6 Nr. 3",
            ],
            [
              "Treppenraum → Wohnung",
              "Dichtschließend",
              "§ 35 Abs. 6 Nr. 4",
            ],
            [
              "Vorraum Treppenraum → Flur (wenn Ausgang nicht ins Freie)",
              "Rauchdicht und selbstschließend",
              "§ 35 Abs. 3 Satz 2 Nr. 3",
            ],
            [
              "Notwendiger Flur – Rauchabschnitt",
              "Nichtabschließbar, rauchdicht und selbstschließend",
              "§ 36 Abs. 1",
            ],
            [
              "Türen in Wänden des notwendigen Flures",
              "Dicht schließend",
              "§ 36 Abs. 1",
            ],
            [
              "Notwendiger Flur → Lager im Keller",
              "Feuerhemmend, dicht und selbstschließend",
              "§ 36 Abs. 1",
            ],
            [
              "Müll- / Abfall-Aufstellraum",
              "Feuerhemmend, dicht und selbstschließend",
              "§ 44",
            ],
            [
              "Fahrschachttür",
              "Brandausbreitungsschutz des Fahrschachts wahren",
              "§ 39",
            ],
            [
              "Eingangstür Wohnung (Verkehrsfläche)",
              "Lichte Breite mindestens 0,90 m (keine BS-Klasse)",
              "§ 37 Abs. 3",
            ],
          ],
        },
      },
      {
        id: "profile",
        title: "Anforderungskombinationen im Gesetz",
        paragraphs: [
          "Im Wortlaut der BauO NRW und SBauVO NRW kommen diese Kombinationen für Abschlüsse vor – ohne Buchstaben- oder Produktbezeichnungen:",
          "Feuerbeständig, dicht und selbstschließend – höchste Anforderung an den Abschluss selbst; in inneren Brandwänden (§ 30 Abs. 6). Feuerhemmend, dicht und selbstschließend – Trennwände zwischen Nutzungseinheiten (§ 29 Abs. 5) und Müllräume (§ 44). Feuerhemmend, rauchdicht und selbstschließend – Treppenraum zu Keller, Lager, Werkstatt oder Nutzungseinheit über 200 Quadratmeter (§ 35 Abs. 6 Nr. 1).",
          "Rauchdicht und selbstschließend – Treppenraum zum notwendigen Flur (§ 35 Abs. 6 Nr. 2) und Vorraum zum Flur (§ 35 Abs. 3 Satz 2 Nr. 3). Dicht und selbstschließend – Treppenraum zu sonstigen Räumen ohne Wohnungscharakter (§ 35 Abs. 6 Nr. 3). Dichtschließend – Treppenraum zur Wohnung (§ 35 Abs. 6 Nr. 4). Nichtabschließbar, rauchdicht und selbstschließend – Rauchabschnittstüren im notwendigen Flur (§ 36 Abs. 1). Dicht schließend – übrige Türen in Flurwänden (§ 36 Abs. 1).",
          "Abschlüsse entsprechend der Feuerwiderstandsfähigkeit der Wand oder Decke – generische Regel für Öffnungen in feuerwiderstandsfähigen Bauteilen. Fahrschachttüren – Sonderbauart: Öffnung darf den Brandausbreitungsschutz des Fahrschachts nicht beeinträchtigen.",
        ],
      },
      {
        id: "treppenraum",
        title: "Treppenraum: die wichtigste Staffelung",
        paragraphs: [
          "§ 35 Abs. 6 BauO NRW ist die zentrale Vorschrift für Brandschutztüren im notwendigen Treppenraum. Im Gesetzestext heißt es dort ausdrücklich „Feuerschutz- und Rauchschutzabschlüsse“ – die Staffelung nach Verbindungspartner steht in Nr. 1 bis 4.",
          "Zum Kellergeschoss, nicht ausgebauten Dachraum, Werkstätten, Läden, Lagern und Nutzungseinheiten über 200 Quadratmeter (ohne Wohnungen): mindestens feuerhemmende, rauchdichte und selbstschließende Abschlüsse (Nr. 1). Zum notwendigen Flur (Nr. 2): rauchdichte und selbstschließende Abschlüsse – ohne ausdrückliches Feuerhemmend im Gesetzestext.",
          "Zu sonstigen Räumen und Nutzungseinheiten ohne Wohnungscharakter (Nr. 3): dicht und selbstschließend. Zur Wohnung (Nr. 4): mindestens dichtschließend – ohne ausdrückliche Rauch- oder Feuerhemmungsanforderung im Gesetzestext.",
          "Führt der Treppenraumausgang nicht unmittelbar ins Freie, gilt für den Vorraum § 35 Abs. 3 Satz 2 BauO NRW: mindestens so breit wie die Treppenläufe, Wände mit den Anforderungen an Treppenraumwände, rauchdichte und selbstschließende Abschlüsse zum notwendigen Flur, ohne Öffnungen zu anderen Räumen (außer zum notwendigen Flur).",
          "Lichtdurchlässige Seitenteile und Oberlichte in Feuerschutz- und Rauchschutzabschlüssen sind zulässig, wenn der Abschluss insgesamt nicht breiter als 2,50 Meter ist (§ 35 Abs. 6 Satz 2 BauO NRW).",
        ],
      },
      {
        id: "flur",
        title: "Notwendiger Flur und Rauchabschnitte",
        paragraphs: [
          "Notwendige Flure sind in Rauchabschnitte zu unterteilen – maximal 30 Meter Länge, bei Fluchtrichtung zum Sicherheitstreppenraum maximal 15 Meter (§ 36 Abs. 1 BauO NRW). Die Trennung erfolgt mit nichtabschließbaren, rauchdichten und selbstschließenden Abschlüssen.",
          "Türen in den Wänden des notwendigen Flures müssen dicht schließen. Öffnungen zu Lagerbereichen im Kellergeschoss: feuerhemmende, dicht und selbstschließende Abschlüsse.",
          "In Wohngebäuden der Gebäudeklassen 1 und 2 sind notwendige Flure nach § 36 Abs. 1 BauO NRW nicht erforderlich – u. a. in sonstigen Gebäuden GK 1 und 2 (außer Kellergeschoss), innerhalb von Nutzungseinheiten bis 200 Quadratmeter, innerhalb von Wohnungen sowie in Büro-/Verwaltungs-NE bis 400 Quadratmeter (mit weiteren Voraussetzungen). Dann entfallen auch Rauchabschnittstüren. Ab Gebäudeklasse 3 gelten die vollen Fluranforderungen; Details je Klasse im Ratgeber [GK 3](/ratgeber/gebaeudeklasse-3-brandschutz-bauo-nrw) bis [GK 5](/ratgeber/gebaeudeklasse-5-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "waende",
        title: "Brandwände, Trennwände und Decken",
        paragraphs: [
          "Öffnungen in inneren Brandwänden sind nur in begrenzter Zahl und Größe zulässig – mit feuerbeständigen, dicht und selbstschließenden Abschlüssen (§ 30 Abs. 6 BauO NRW). In äußeren Brandwänden sind Öffnungen grundsätzlich unzulässig. Wände anstelle von Brandwänden (Ersatzwände in GK 1–4): Abschlüsse dicht und selbstschließend mit Feuerwiderstand der Wand.",
          "Trennwände nach § 29 BauO NRW zwischen Nutzungseinheiten: Öffnungen nur bei erforderlicher Zahl und Größe, mit feuerhemmenden, dicht und selbstschließenden Abschlüssen. In Wohngebäuden GK 1 und 2 entfallen Trennwände nach § 29 Abs. 6 – und damit auch diese Türpflicht zwischen Wohnungen.",
          "Öffnungen in feuerwiderstandsfähigen Decken: Abschlüsse mit der Feuerwiderstandsfähigkeit der Decke; in GK 1 und 2 nur innerhalb derselben Nutzungseinheit bis 400 Quadratmeter in höchstens zwei Geschossen (§ 31 Abs. 6).",
        ],
      },
      {
        id: "sonderfaelle",
        title: "Fahrschacht, Müllraum und Breite",
        paragraphs: [
          "Fahrschachttüren und andere Öffnungen in Fahrschachtwänden müssen den Brandausbreitungsschutz des Fahrschachts wahren (§ 39 BauO NRW). Die Wand selbst ist je nach Gebäudeklasse feuerhemmend bis feuerbeständig – der Abschluss muss dazu passen. Rauchaustrittsöffnungen im Fahrschacht brauchen einen Abschluss, der im Brandfall selbsttätig öffnet.",
          "Müll- und Abfall-Aufstellräume in GK 3 bis 5: feuerhemmende, dicht und selbstschließende Abschlüsse vom Gebäudeinnern zum Aufstellraum (§ 44 Satz 2 BauO NRW); weitere Voraussetzungen des § 44 beachten.",
          "§ 37 BauO NRW enthält keine Brandschutzklassen, aber wichtige Türmaße: Eingangstüren von Wohnungen aus allgemein zugänglichen Verkehrsflächen mindestens 0,90 Meter lichte Breite. Aufzugstüren für Rollstuhl und Krankentrage ebenfalls mindestens 0,90 Meter – ab mehr als fünf Obergeschossen mit Aufzugspflicht.",
        ],
      },
      {
        id: "sonderbau",
        title: "Sonderbauten: wenn die SBauVO strenger ist",
        paragraphs: [
          "Bei Sonderbauten gelten BauO NRW und ergänzend SBauVO NRW. Die spezielleren Vorschriften der SBauVO gehen vor.",
          "Versammlungsstätten (§ 9 SBauVO): an feuerbeständigen Innenwänden und inneren Brandwänden mindestens feuerhemmend, rauchdicht und selbstschließend; an feuerhemmenden Innenwänden mindestens rauchdicht und selbstschließend. Selbstschließende Türen dürfen offengehalten werden, wenn Feststellanlagen bei Raucheinwirkung selbsttätig schließen und die Tür von Hand schließbar bleibt. Rettungswegtüren: in Fluchtrichtung aufschlagen, keine Schwellen, von innen jederzeit leicht öffenbar, keine Schiebetüren außer genehmigte automatische.",
          "Beherbergungsstätten (§ 53 SBauVO): feuerhemmende, rauchdichte und selbstschließende Türen in Öffnungen von notwendigen Treppenräumen zu anderen Räumen (außer Flur) und von notwendigen Fluren im Kellergeschoss zu gästefremden Räumen; rauchdichte und selbstschließende Türen von notwendigen Treppenräumen zu Fluren und von Fluren zu Beherbergungs- und Gasträumen.",
          "Verkaufsstätten (§ 53 SBauVO): ohne Sprinkleranlage (SELT) mindestens feuerhemmend, rauchdicht und selbstschließend; mit SELT rauchdicht und selbstschließend – jeweils mit Ausnahme für Türen ins Freie. Großbühnen (§ 22 SBauVO): Türen in der Trennwand zwischen Bühnen- und Zuschauerhaus feuerbeständig und selbstschließend. Industriebau (§ 65 SBauVO): Öffnungen in Trennwänden in Brandabschnitten mindestens feuerhemmend, dicht und selbstschließend.",
          "Mehr zur Einordnung: [Sonderbauten](/ratgeber/sonderbauten-brandschutz) und [Versammlungsstätten](/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw).",
        ],
      },
      {
        id: "gk-ausnahmen",
        title: "Gebäudeklassen: wann Türpflichten entfallen",
        paragraphs: [
          "§ 29 Abs. 6 BauO NRW: Trennwände nach § 29 Abs. 1 bis 5 gelten nicht für Wohngebäude der Gebäudeklassen 1 und 2 – damit entfällt auch die Pflicht zu feuerhemmenden, dichten und selbstschließenden Abschlüssen zwischen Nutzungseinheiten.",
          "§ 35 Abs. 2 BauO NRW: notwendige Treppen ohne eigenen Treppenraum sind in Gebäuden der Gebäudeklassen 1 und 2 unter den dort genannten Voraussetzungen zulässig – dann greift die Staffelung nach § 35 Abs. 6 für Treppenraumtüren nicht.",
          "§ 31 Abs. 6 BauO NRW: Öffnungen in feuerwiderstandsfähigen Decken nur in GK 1 und 2, innerhalb derselben Nutzungseinheit bis 400 Quadratmeter in höchstens zwei Geschossen; sonst Beschränkung auf erforderliche Zahl und Größe.",
        ],
      },
      {
        id: "feststellung",
        title: "Feststellanlagen und offen gehaltene Türen",
        paragraphs: [
          "Selbstschließende Türen dürfen in Sonderbauten offen gehalten werden, wenn Feststellanlagen bei Raucheinwirkung selbsttätig schließen – und die Tür von Hand schließbar bleibt (SBauVO § 9 Versammlungsstätten, § 53 Verkaufsstätten analog).",
          "Für allgemeine Gebäude nach BauO NRW regelt der Gesetzestext das Offenhalten selbstschließender Türen nicht – die Zulässigkeit von Feststellanlagen folgt aus den Technischen Baubestimmungen (VV TB NRW). Ohne zulässige Feststellanlage müssen selbstschließende Türen schließen.",
        ],
      },
      {
        id: "beispiele",
        title: "Einbauorte im Überblick",
        paragraphs: [
          "Mehrfamilienhaus GK 3: Treppenraum zur Wohnung dichtschließend (§ 35 Abs. 6 Nr. 4); zum Keller feuerhemmend, rauchdicht und selbstschließend (Nr. 1); zum Flur rauchdicht und selbstschließend (Nr. 2). Rauchabschnittstüren im Flur nichtabschließbar (§ 36 Abs. 1).",
          "Umbau Büro im Bestand: neue Trennwand zwischen Nutzungseinheiten – feuerhemmende, dicht und selbstschließende Tür; Durchbruch in Deckenöffnung mit Abschluss entsprechend Decken-FW.",
          "Hotel / Beherbergung: SBauVO § 53 verschärft gegenüber reiner Wohnnutzung – nicht mit Wohnhaus-Türstaffelung verwechseln.",
          "Falscher Türtyp im Lageplan: Behörde beanstandet fehlende Rauchdichtheit oder falsche Feuerwiderstandsklasse – Nachweis über Prüfzeugnis und Einbauort, nicht über Baumarkt-Bezeichnung.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst die Tür- und Abschlussanforderungen aus BauO NRW und SBauVO-Auszügen zusammen – ohne vollständige VV TB NRW, DIN 18093 oder produktspezifische Prüfzeugnisse. Verbindlich sind Grundrisse, brandschutztechnischer Nachweis und Festlegung der Bauaufsicht. Die Übersicht ersetzt keine Planung durch Prüfingenieur oder Sachverständigen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/gebaeudeklasse-3-brandschutz-bauo-nrw", label: "GK 3 Flure" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätten" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau Bestand" },
    ],
    faq: [
      {
        question: "Welche Tür zwischen Treppenraum und notwendigem Flur?",
        answer:
          "Nach § 35 Abs. 6 Nr. 2 BauO NRW: rauchdicht und selbstschließend. Feuerhemmend ist in Nr. 2 nicht gefordert – anders als in Nr. 1 (Keller, Lager, Werkstatt, Nutzungseinheit über 200 m²): dort feuerhemmend, rauchdicht und selbstschließend.",
      },
      {
        question: "Welche Tür zwischen Treppenraum und Wohnung?",
        answer:
          "Nach § 35 Abs. 6 Nr. 4 BauO NRW: mindestens dichtschließend. Rauchdichtheit oder Feuerhemmung sind in Nr. 4 nicht ausdrücklich gefordert.",
      },
      {
        question: "Was bedeutet T30-RS?",
        answer:
          "Technische Bezeichnung für einen feuerhemmenden Abschluss mit Rauchschutzfunktion – nicht ein Begriff aus BauO NRW. Im Gesetzestext stehen feuerhemmend, feuerbeständig, rauchdicht, dicht und selbstschließend.",
      },
      {
        question: "Brauche ich T30 oder T90?",
        answer:
          "Maßgeblich ist der Einbauort: feuerbeständig an inneren Brandwänden (§ 30 Abs. 6); feuerhemmend an Trennwänden (§ 29 Abs. 5), Treppenraum zu Keller/Lager (§ 35 Abs. 6 Nr. 1) und Lageröffnungen im Flur (§ 36 Abs. 1). T30 und T90 sind Produktkennzeichnungen, keine Gesetzesbegriffe.",
      },
      {
        question: "Was ist eine nichtabschließbare Rauchschutztür?",
        answer:
          "Abschluss in notwendigen Fluren zur Rauchabschnitt-Trennung: nichtabschließbar, rauchdicht und selbstschließend (§ 36 BauO NRW).",
      },
      {
        question: "Darf eine Brandschutztür offen stehen?",
        answer:
          "Nur mit genehmigter Feststellanlage, die bei Rauch selbsttätig schließt – nicht mit Keil oder Klobürste. Ohne Feststellung müssen selbstschließende Türen schließen.",
      },
      {
        question: "Gilt § 35 auch im Zweifamilienhaus?",
        answer:
          "In GK 1 und 2 können Erleichterungen greifen: kein notwendiger Treppenraum unter den Voraussetzungen des § 35 Abs. 2, keine Trennwände zwischen Wohnungen (§ 29 Abs. 6), kein notwendiger Flur (§ 36 Abs. 1). Ab GK 3 gilt die volle Staffelung nach § 35 Abs. 6.",
      },
      {
        question: "Was gilt in Versammlungsstätten?",
        answer:
          "SBauVO § 9: an feuerbeständigen Innenwänden und inneren Brandwänden mindestens feuerhemmend, rauchdicht und selbstschließend; an feuerhemmenden Innenwänden mindestens rauchdicht und selbstschließend. Rettungswegtüren: in Fluchtrichtung aufschlagen, keine Schwellen, von innen jederzeit leicht öffenbar.",
      },
      {
        question: "Wer legt den Türtyp im Genehmigungsverfahren fest?",
        answer:
          "Entwurfsverfassende oder Prüfingenieur/Sachverständiger im brandschutztechnischen Nachweis – anhand Einbauort, Gebäudeklasse, Nutzung und ggf. Sonderbau. Bauprodukt und Prüfzeugnis müssen zur gesetzlichen Anforderung passen.",
      },
    ],
  },
];
