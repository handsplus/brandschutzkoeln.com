/**
 * 05.10.2024 – Brandmeldeanlage und Alarmierung (BauO / SBauVO / BauPrüfVO NRW).
 * Quelle: Brandmeldeanlage_Alarmierung_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BRANDMELDEANLAGE: RatgeberArticle[] = [
  {
    slug: "brandmeldeanlage-wann-pflicht-sbauvo-nrw",
    title: "Brandmeldeanlage: wann das Gesetz sie verlangt – und was Rauchwarnmelder sind",
    excerpt:
      "Die BauO NRW kennt keine allgemeine BMA-Pflicht – nur Rauchwarnmelder in Wohnungen. Pflichten zu Brandmelde- und Alarmierungstechnik stehen in der SBauVO für bestimmte Sonderbauten. Schwellen, Abgrenzungen und Prüfkatalog.",
    metaTitle: "Brandmeldeanlage Pflicht SBauVO NRW | H&S+",
    metaDescription:
      "BMA Pflicht NRW: keine allgemeine BauO-Pflicht, § 47 Rauchwarnmelder, SBauVO §§ 20, 55, 79, 107, 137. Alarmierung, Leitstelle, Prüfkatalog.",
    keywords: [
      "Brandmeldeanlage Pflicht NRW",
      "BMA SBauVO",
      "Alarmierungseinrichtung",
      "Rauchwarnmelder BauO",
      "§ 79 Verkaufsstätte BMA",
      "Hochhaus Brandmeldeanlage",
    ],
    sections: [
      {
        id: "frage",
        title: "Gibt es eine allgemeine BMA-Pflicht?",
        paragraphs: [
          "In Genehmigungsunterlagen und Betriebsfragen wird oft pauschal gefragt: „Brauchen wir eine Brandmeldeanlage?“ – im Landesrecht NRW lautet die gesetzliche Antwort zunächst: nicht für jedes Gebäude.",
          "§ 14 BauO NRW formuliert das Brandschutzziel (Rettung von Menschen, wirksame Löscharbeiten) – ohne den Begriff Brandmeldeanlage oder Alarmierung. Eine allgemeine Pflicht zur Installation einer BMA für normale Gebäude steht nicht in der BauO NRW.",
          "Gesetzliche Pflichten zu Brandmeldeanlagen, Alarmierungseinrichtungen und Alarmierungsanlagen stehen überwiegend in der SBauVO NRW für bestimmte Sonderbauten (Versammlungsstätte, Beherbergung, Verkauf, Hochhaus, Garage). Voraussetzung ist der Sonderbau-Tatbestand nach § 50 BauO NRW.",
        ],
      },
      {
        id: "begriffe",
        title: "BMA, Alarmierung, Rauchwarnmelder – nicht verwechseln",
        table: {
          caption: "Gesetzliche Begriffe im Überblick",
          headers: ["Begriff", "Funktion", "Norm (Auswahl)", "Abgrenzung"],
          rows: [
            [
              "Brandmeldeanlage (BMA)",
              "Brandfrüherkennung, Meldung an Zentrale und Leitstelle",
              "SBauVO §§ 20, 55, 79, 107, 137",
              "Zentrale Anlage – nicht Einzel-Rauchwarnmelder",
            ],
            [
              "Alarmierungseinrichtungen",
              "Warnung und Anweisung an Personen im Gebäude",
              "SBauVO §§ 55, 79",
              "Beherbergung, Verkauf – Gäste, Kunden, Betriebsangehörige",
            ],
            [
              "Alarmierungsanlagen (+ Lautsprecher)",
              "Akustische/optische Gefahrenalarmierung, Durchsagen",
              "SBauVO §§ 20, 107",
              "Versammlungsstätten, Hochhäuser",
            ],
            [
              "Brandmelder- und Alarmzentrale",
              "Zentrale Bedienung und Anzeige für Feuerwehr",
              "SBauVO §§ 20, 107",
              "Feuerwehrleicht zugänglicher Raum",
            ],
            [
              "Rauchwarnmelder",
              "Einzelgerät zur Rauchfrüherkennung",
              "§ 47 Abs. 3 BauO; § 55 SBauVO",
              "Keine BMA – keine Leitstellenpflicht im Gesetz",
            ],
            [
              "Brandfallsteuerung Aufzüge",
              "Aufzug bei Brandmeldung in sicheres Geschoss, Stillsetzung",
              "SBauVO §§ 20, 55, 79, 107",
              "Folgefunktion der BMA – kein Ersatz für Alarmierung",
            ],
          ],
        },
        paragraphs: [
          "Brandmeldung und Alarmierung sind getrennte Aufgaben: Die BMA erkennt Brand und leitet an die einheitliche Leitstelle weiter. Alarmierungseinrichtungen und -anlagen warnen die Personen im Gebäude. Das Gesetz verlangt häufig beides – in eigenen Satzteilen.",
        ],
      },
      {
        id: "rauchwarnmelder",
        title: "§ 47 Abs. 3 BauO – Rauchwarnmelder in Wohnungen",
        paragraphs: [
          "In Wohnungen müssen Schlafräume und Kinderzimmer sowie Flure, über die Rettungswege von Aufenthaltsräumen führen, jeweils mindestens einen Rauchwarnmelder haben. Er muss so eingebaut oder angebracht und betrieben werden, dass Brandrauch frühzeitig erkannt und gemeldet wird.",
          "Die Betriebsbereitschaft hat die unmittelbar besitzhabende Person sicherzustellen, es sei denn, die Eigentümerin oder der Eigentümer übernimmt die Verpflichtung selbst.",
          "Das ist keine Brandmeldeanlage: § 47 Abs. 3 verlangt keine Anbindung an eine Brandmelderzentrale oder Leitstelle. In Hochhäusern genügen in Wohnungen nach § 107 Abs. 1 Satz 2 SBauVO diese Rauchwarnmelder – statt BMA-Melder in Wohnungen.",
        ],
      },
      {
        id: "versammlung",
        title: "Versammlungsstätten – §§ 20, 24 SBauVO",
        paragraphs: [
          "§ 20 SBauVO: Versammlungsstätten mit Versammlungsräumen von insgesamt mehr als 1.000 m² Grundfläche müssen Brandmeldeanlagen mit selbsttätigen und nichtselbsttätigen Brandmeldern (Handfeuermelder) haben.",
          "Zusätzlich: Alarmierungs- und Lautsprecheranlagen zur Warnung von Besuchern, Mitwirkenden und Betriebsangehörigen; Brandmelder- und Alarmzentrale in feuerwehrleicht zugänglichem Raum; Brandfallsteuerung der Aufzüge (Ausnahme: Zugang nur über notwendigen Treppenraum); Falschalarmsicherung; Weiterleitung zur einheitlichen Leitstelle.",
          "§ 20 Abs. 3: Versammlungsstätten mit Foyers oder Hallen, durch die Rettungswege aus anderen Versammlungsräumen führen, müssen BMA und Alarmierungs-/Lautsprecheranlagen haben – unabhängig von der 1.000-m²-Schwelle.",
          "§ 24 SBauVO: Großbühnen und Räume mit besonderen Brandgefahren – BMA mit selbsttätigen und nichtselbsttätigen Meldern; Alarm optisch und akustisch an der Brandsicherheitswache erkennbar.",
          "Vertiefung: [Versammlungsstätten baulich](/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw).",
        ],
      },
      {
        id: "beherbergung",
        title: "Beherbergungsstätten – § 55 SBauVO",
        paragraphs: [
          "Alle Beherbergungsstätten: Alarmierungseinrichtungen, durch die im Gefahrenfall Betriebsangehörige und Gäste gewarnt werden können.",
          "≤ 60 Gastbetten: Jeder Beherbergungsraum mindestens einen Rauchwarnmelder – keine BMA. Alarmierungseinrichtungen vorhanden, aber ohne gesetzliche Selbstauslösung bei Rauch in Flur/Beherbergungsraum.",
          "> 60 Gastbetten: Brandmeldeanlagen mit selbsttätigen Brandmeldern (Rauch in notwendigen Fluren und Beherbergungsräumen) und Handfeuermeldern zur Alarmierung der zuständigen Stelle. Alarmierungseinrichtungen müssen bei Rauch in Flur/Beherbergungsraum auch selbsttätig auslösen. Falschalarmsicherung; Leitstelle; Brandfallsteuerung Aufzüge.",
          "Vertiefung: [Hotels und Beherbergung](/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw).",
        ],
        table: {
          caption: "§ 55 – Gastbetten und Technik",
          headers: ["Gastbetten", "Alarmierung", "BMA", "Rauchwarnmelder"],
          rows: [
            ["≤ 60", "Ja (Gefahrenfall)", "Nein", "Ja – je Beherbergungsraum"],
            ["> 60", "Ja – auch selbsttätig bei Rauch", "Ja – selbsttätig + Hand + Leitstelle", "Entfällt zugunsten BMA"],
          ],
        },
      },
      {
        id: "verkauf",
        title: "Verkaufsstätten – § 79 SBauVO",
        paragraphs: [
          "In allen Verkaufsstätten i. S. d. SBauVO müssen vorhanden sein: Brandmeldeanlagen mit Handfeuermeldern zur unmittelbaren Alarmierung der einheitlichen Leitstelle; Alarmierungseinrichtungen zur Warnung aller Betriebsangehörigen und Anweisungen an Kundinnen und Kunden.",
          "Ohne selbsttätige Feuerlöschanlagen (SELFA): zusätzlich Brandmeldeanlagen mit selbsttätigen Brandmeldern zur Leitstelle – mit Falschalarmsicherung.",
          "Aufzüge: Brandfallsteuerung durch selbsttätige BMA (Ausnahme: Zugang nur über notwendigen Treppenraum).",
          "Systematik: Alarmierung + Handfeuermelder immer; selbsttätige BMA kommt ohne SELFA hinzu.",
          "Vertiefung: [Verkaufsstätten Rettungswege](/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw).",
        ],
      },
      {
        id: "hochhaus",
        title: "Hochhäuser – §§ 107, 115 SBauVO",
        paragraphs: [
          "§ 107 SBauVO: Hochhäuser müssen Brandmeldeanlagen mit selbsttätigen Brandmeldern haben, die alle Räume, Installationsschächte, feuerwiderstandsfähige Installationskanäle, Hohlräume von Systemböden und Unterdecken vollständig überwachen. In Wohnungen genügen Rauchwarnmelder nach § 47 Abs. 3 BauO.",
          "Geschoss-Alarmierung: Bei Rauch selbsttätige Alarmierung im betroffenen Geschoss – in jedem Raum wahrnehmbar. Alarmierungsanlagen sind Pflicht; ab mehr als 60 m Gebäudehöhe zusätzlich Lautsprecheranlagen. Brandmelder- und Alarmzentrale feuerwehrleicht zugänglich; Falschalarmsicherung; Leitstelle; Brandfallsteuerung Aufzüge.",
          "§ 115 SBauVO – Erleichterung: Bei Hochhäusern mit nicht mehr als 60 m Höhe können Brandmeldeanlagen entfallen, wenn SELFA und Alarmierungsanlagen vorhanden sind, ab 1. OG nur Büro-/Verwaltungsnutzung, NE mit feuerhemmenden Trennwänden Rohdecke zu Rohdecke, NE ≤ 1.600 m² (oder Teileinheiten), selbsttätige Druckbelüftung und Aufzugs-Brandfallsteuerung sichergestellt. Die Erleichterung betrifft nur die BMA – Alarmierungsanlagen bleiben Pflicht.",
          "Vertiefung: [Hochhaus Brandschutz](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
        ],
      },
      {
        id: "garage",
        title: "Garagen – § 137 SBauVO",
        paragraphs: [
          "Geschlossene Großgaragen: Brandmeldeanlagen mit selbsttätigen Brandmeldern – Ausnahme: SELFA in jedem Garagengeschoss, dann keine BMA-Pflicht.",
          "Geschlossene Mittelgaragen: BMA nur, wenn Verbindung zu baulichen Anlagen oder Räumen besteht, für die BMA erforderlich sind – Art der Melder richtet sich nach dem verbundenen Gebäude.",
          "Brandmeldungen zur einheitlichen Leitstelle. § 137 regelt keine Alarmierungseinrichtungen für Personen im Sinne der Verkaufs-/Beherbergungsnormen.",
          "Vertiefung: [Mittel- und Großgaragen](/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw).",
        ],
      },
      {
        id: "nicht-pflicht",
        title: "Keine gesetzliche BMA-Pflicht in SBauVO für",
        paragraphs: [],
        list: [
          "Krankenhäuser, Schulen, reine Bürogebäude, Wohnheime, Kindertageseinrichtungen, Industriebauwerke – sofern nicht zugleich Versammlungsstätte, Beherbergung, Verkaufsstätte, Hochhaus oder Garage im Sinne der jeweiligen SBauVO-Teile",
          "Normale Wohngebäude ohne Sonderbau-Tatbestand (nur § 47 Abs. 3 Rauchwarnmelder in Wohnungen)",
          "DIN 14675, VdS-Richtlinien, kommunale TAB – nicht Inhalt dieses Ratgebers",
        ],
      },
      {
        id: "gemeinsam",
        title: "Gemeinsame Anforderungen",
        table: {
          caption: "Wiederkehrende Pflichten bei selbsttätiger BMA",
          headers: ["Anforderung", "Inhalt", "Normen (Auswahl)"],
          rows: [
            [
              "Einheitliche Leitstelle",
              "Brandmeldungen unmittelbar und selbsttätig zur einheitlichen Leitstelle",
              "§§ 20, 55, 79, 107, 137 SBauVO",
            ],
            [
              "Falschalarmsicherung",
              "Selbsttätige BMA gegen Falschalarme sichern",
              "§§ 20, 55, 79, 107 SBauVO",
            ],
            [
              "Handfeuermelder",
              "Nichtselbsttätige Brandmelder zur manuellen Meldung",
              "§§ 20, 24, 55, 79 SBauVO",
            ],
            [
              "Brandfallsteuerung Aufzüge",
              "Aufzug in sicheres Geschoss, danach Stillsetzung",
              "§§ 20, 55, 79, 107 SBauVO",
            ],
            [
              "Brandmelder- und Alarmzentrale",
              "Zentrale Bedienung/Anzeige, feuerwehrleicht zugänglich",
              "§§ 20, 107 SBauVO",
            ],
          ],
        },
        paragraphs: [
          "Schnittstellen Aufzug, RWA, Feststellanlagen: [BMA Brandfallsteuerung](/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw).",
        ],
      },
      {
        id: "konzept-pruefung",
        title: "BauPrüfVO § 9 und PrüfVO",
        paragraphs: [
          "Bei großen Sonderbauten (§ 70 Abs. 2 BauO NRW) muss das Brandschutzkonzept u. a. Alarmierungseinrichtungen und -anlagen, Lage und Anordnung von Brandmeldeanlagen mit Unterzentralen und Feuerwehrtableaus sowie funktionale Steuerungszusammenhänge enthalten (BauPrüfVO NRW § 9).",
          "PrüfVO technische Anlagen Sonderbauten NRW: wiederkehrende Prüfung von Brandmelde- und Alarmierungsanlagen in Sonderbauten – in Hochhäusern wiederkehrend nur elektrische Anlagen außerhalb von Wohnungen, in Garagen nur in geschlossenen Großgaragen.",
          "Betriebliche Intervalle (DIN VDE, DGUV): [BMA-Prüffristen](/ratgeber/bma-prueffristen-brandmeldeanlage). Gesetzliche Sonderbau-Prüfung: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau). Konzeptinhalt: [BauPrüfVO § 9](/ratgeber/brandschutzkonzept-baupruefvo-nrw).",
        ],
      },
      {
        id: "uebersicht",
        title: "Übersicht: wann BMA und/oder Alarmierung?",
        paragraphs: [],
        table: {
          caption: "Gesetzliche Schwellen – BMA und Alarmierung",
          headers: ["Gebäudeart", "Schwelle", "BMA", "Alarmierung", "Norm"],
          rows: [
            ["Wohnung (allgemein)", "Schlafräume, Kinderzimmer, Flure zu RW", "Nein", "Rauchwarnmelder (lokal)", "§ 47 Abs. 3 BauO"],
            ["Versammlungsstätte", "VR > 1.000 m² GF; oder Foyer/Halle als RW", "Ja (selbsttätig + Hand)", "Alarmierungs- und Lautsprecheranlagen", "§ 20 SBauVO"],
            ["Großbühne", "Großbühnen, Räume mit besonderer Brandgefahr", "Ja", "Optisch/akustisch an Brandsicherheitswache", "§ 24 SBauVO"],
            ["Beherbergung", "Alle / > 60 Gastbetten", "> 60: Ja; ≤ 60: Rauchwarnmelder", "Ja; > 60: auch selbsttätig bei Rauch", "§ 55 SBauVO"],
            ["Verkaufsstätte", "Alle Verkaufsstätten SBauVO", "Hand immer; selbsttätig ohne SELFA", "Alarmierungseinrichtungen immer", "§ 79 SBauVO"],
            ["Hochhaus", "Gebäudehöhe > 22 m", "Ja (außer § 115-Erleichterung)", "Alarmierungsanlagen; > 60 m: + Lautsprecher", "§§ 107, 115 SBauVO"],
            ["Geschlossene Großgarage", "Alle; Ausnahme SELFA je Geschoss", "Ja (mit Ausnahme)", "– (nicht in § 137)", "§ 137 SBauVO"],
            ["Bürogebäude (kein SBauVO-Typ)", "–", "Nein (gesetzlich)", "Nein (gesetzlich)", "–"],
          ],
        },
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Brandmeldeanlage – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            ["1", "Sonderbau mit SBauVO-Teil zu BMA?", "§ 50 BauO; SBauVO", "Ohne Tatbestand: keine BMA-Pflicht aus BauO/SBauVO"],
            ["2", "Versammlungsstätte: VR > 1.000 m² oder Foyer/Halle als RW?", "§ 20 SBauVO", "BMA + Alarmierungs-/Lautsprecheranlagen + Zentrale"],
            ["3", "Beherbergung: wie viele Gastbetten?", "§ 55 SBauVO", "≤ 60: Rauchwarnmelder + Alarmierung; > 60: BMA + selbsttätige Alarmierung"],
            ["4", "Verkaufsstätte: SELFA vorhanden?", "§ 79 SBauVO", "Ohne SELFA: zusätzlich selbsttätige BMA; Alarmierung + Hand immer"],
            ["5", "Hochhaus ≤ 60 m, nur Büronutzung ab 1. OG?", "§ 115 SBauVO", "BMA kann entfallen, wenn alle Bedingungen erfüllt"],
            ["6", "Hochhaus > 60 m?", "§ 107 SBauVO", "BMA + Alarmierungsanlagen + Lautsprecheranlagen"],
            ["7", "Geschlossene Großgarage mit SELFA je Geschoss?", "§ 137 SBauVO", "BMA-Pflicht entfällt"],
            ["8", "Weiterleitung zur Leitstelle?", "§§ 20, 55, 79, 107, 137 SBauVO", "Bei selbsttätiger BMA: unmittelbar und selbsttätig"],
            ["9", "Aufzüge vorhanden?", "SBauVO Brandfallsteuerung", "Brandfallsteuerung durch BMA – außer Zugang nur über STR"],
            ["10", "Großer Sonderbau – Konzept?", "§ 70; BauPrüfVO § 9", "BMA und Alarmierung dokumentieren"],
            ["11", "Rauchwarnmelder vs. BMA?", "§ 47 BauO; § 55 SBauVO", "Rauchwarnmelder = Einzelgerät ohne Leitstellenpflicht"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst nur BauO NRW, SBauVO NRW, BauPrüfVO NRW und PrüfVO technische Anlagen Sonderbauten zusammen – ohne DIN 14675, VdS-Richtlinien, VV TB oder kommunale TAB der Feuerwehr. Versicherer, Konzept und Behörde können darüber hinausgehende Anforderungen stellen.",
          "Organisatorische Alarmierung und Evakuierung im Betrieb: [Alarmierung & Evakuierung](/ratgeber/alarmierung-evakuierung-betrieb) – andere Rechtsgrundlage (Arbeitsschutz). Sonderbau-Einordnung: [Sonderbauten](/ratgeber/sonderbauten-brandschutz).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Prüffristen" },
      { href: "/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw", label: "Brandfallsteuerung Aufzug" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw", label: "Verkaufsstätten" },
      { href: "/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw", label: "Beherbergung" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätten" },
      { href: "/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw", label: "Garagen" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept § 9" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
    ],
    faq: [
      {
        question: "Braucht jedes Gebäude eine Brandmeldeanlage?",
        answer:
          "Nein. Die BauO NRW kennt keine allgemeine BMA-Pflicht. Gesetzliche Pflichten stehen in der SBauVO für bestimmte Sonderbauten (Versammlung, Beherbergung > 60 Betten, Verkauf, Hochhaus, Großgarage). Normale Büros und Wohnhäuser ohne Sonderbau-Tatbestand: gesetzlich keine BMA.",
      },
      {
        question: "Was ist der Unterschied zwischen BMA und Rauchwarnmelder?",
        answer:
          "Rauchwarnmelder (§ 47 Abs. 3 BauO): Einzelgerät in Wohnungen, keine Leitstellenpflicht. BMA: zentrale Anlage mit Melderzentrale, oft Aufschaltung zur einheitlichen Leitstelle – nur wo SBauVO es verlangt.",
      },
      {
        question: "Braucht jedes Hotel eine BMA?",
        answer:
          "Nein. ≤ 60 Gastbetten: Rauchwarnmelder je Beherbergungsraum plus Alarmierungseinrichtungen – keine BMA. > 60 Gastbetten: BMA mit selbsttätigen Meldern, Handfeuermeldern und selbsttätiger Alarmierung bei Rauch (§ 55 SBauVO).",
      },
      {
        question: "Was gilt in der Verkaufsstätte?",
        answer:
          "Immer: Handfeuermelder zur Leitstelle und Alarmierungseinrichtungen. Ohne SELFA zusätzlich selbsttätige BMA mit Falschalarmsicherung (§ 79 SBauVO).",
      },
      {
        question: "Kann ein Hochhaus ohne BMA genehmigt werden?",
        answer:
          "Unter § 115 SBauVO möglich bei ≤ 60 m Höhe, SELFA, Alarmierungsanlagen, Büronutzung ab 1. OG, feuerhemmende NE-Trennwände ≤ 1.600 m² und gesicherter Druckbelüftung/Aufzugs-Brandfallsteuerung. Alarmierungsanlagen bleiben Pflicht.",
      },
      {
        question: "Gilt das in der Tiefgarage?",
        answer:
          "Geschlossene Großgaragen: BMA mit selbsttätigen Meldern (§ 137 SBauVO), außer SELFA in jedem Garagengeschoss. Mittelgaragen nur bei Verbindung zu BMA-pflichtigen Räumen.",
      },
      {
        question: "Wer prüft die BMA?",
        answer:
          "Gesetzlich in Sonderbauten: PrüfVO NRW (Prüfsachverständiger). Betrieblich zusätzlich DIN VDE 0833-1, DGUV – siehe BMA-Prüffristen-Artikel.",
      },
    ],
  },
];
