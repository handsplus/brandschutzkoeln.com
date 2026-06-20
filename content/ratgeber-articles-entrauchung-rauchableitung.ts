/**
 * Juli 2026 – Hub: Entrauchung / Rauchableitung (BauO / SBauVO NRW).
 * Quelle: Entrauchung_Rauchableitung_BauO_SBauVO_NRW.html → docs/quellen/Entrauchung-Rauchableitung-BauO-SBauVO.md
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_ENTRAUCHUNG_RAUCHABLEITUNG: RatgeberArticle[] = [
  {
    slug: "entrauchung-rauchableitung-bauo-sbauvo-nrw",
    title: "Entrauchung und Rauchableitung NRW: BauO und SBauVO im Überblick",
    excerpt:
      "Entrauchen, Rauchableitung, Rauchabzugsanlage, Druckbelüftung – wo § 35 BauO Pflicht ist, wann §§ 16 und 75 SBauVO Schwellen setzen und warum § 105 keine Entrauchung ist.",
    metaTitle: "Entrauchung Rauchableitung NRW | H&S+",
    metaDescription:
      "Entrauchung BauO SBauVO NRW: § 35 Treppenraum, § 16 Versammlung, § 75 Verkauf, § 110 Hochhaus, § 105 Druckbelüftung Abgrenzung, Prüfkatalog gesetzlich.",
    keywords: [
      "Entrauchung BauO NRW",
      "Rauchableitung SBauVO",
      "§ 35 Abs 8 BauO",
      "§ 16 SBauVO Entrauchung",
      "Rauchabzugsanlage Versammlungsstätte",
      "Druckbelüftung § 105",
      "Treppenraum Rauchableitung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Was das Gesetz meint – und was nicht",
        paragraphs: [
          "Das Wort „Entrauchung“ steht selten im Gesetz. Maßgeblich ist die Funktion **entraucht werden können**: Rauch soll Brandbekämpfung und Rettung unterstützen. Daneben regelt das Gesetz **Rauchableitung** (natürliche Öffnungen mit Querschnitt und Bedienbarkeit) und **Rauchabzugsanlagen** (maschinell, mit Auslösung, Zuluft und Betriebszeit).",
          "§ 14 BauO NRW verlangt wirksame Löscharbeiten – die Entrauchungsvorschriften sind die konkrete Ausformung für bestimmte Bauteile und Sonderbauten. Für normale Büro-, Wohn- oder Lagerflächen ohne Sonderbau-Schwellen gibt es **keine** eigene SBauVO-Rauchableitung.",
          "Dieser Ratgeber fasst ausschließlich gesetzlich verbindliches Recht zusammen – ohne DIN EN 12101, VDI, PrüfVO oder ingenieurmethodischen Nachweis. Vertiefung Treppenraum: [Notwendige Treppenräume](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw). Betrieb und Intervalle: [RWA-Prüffristen](/ratgeber/rwa-entrauchung-prueffristen).",
        ],
      },
      {
        id: "begriffe",
        title: "Begriffe im Gesetz",
        paragraphs: [],
        table: {
          caption: "Entrauchung, Rauchableitung, Druckbelüftung",
          headers: ["Begriff", "Funktion", "Typische Norm"],
          rows: [
            ["entraucht werden können", "Rauch entfernen, Löscharbeiten/Rettung unterstützen", "§ 35 Abs. 7 BauO; §§ 16, 75, 110 SBauVO"],
            ["Rauchableitung", "Natürliche Öffnungen/Schächte mit gesetzlichen Querschnitten", "§ 35 Abs. 8; § 39 Abs. 3 BauO"],
            ["Rauchabzugsanlagen", "Maschinell: Auslösung, Zuluft, Temperatur, Betriebszeit", "§§ 16, 75 SBauVO"],
            ["Rauch- und Wärmeabzug", "Garagen-spezifisch", "§ 138 Abs. 4 SBauVO"],
            ["Druckbelüftung", "Überdruck – Rauch fernhalten, nicht abziehen", "§ 105 SBauVO"],
          ],
        },
      },
      {
        id: "bauo-allgemein",
        title: "BauO NRW – Pflichten für alle Gebäude",
        paragraphs: [
          "**§ 35 Abs. 7–8 – notwendiger Treppenraum:** Belüftung und Entrauchung. Je oberirdisches Geschoss Fenster ins Freie mit mindestens 0,50 m² freiem Querschnitt **oder** oben Rauchableitung mit mindestens 1 m² – bedienbar vom Erdgeschoss und obersten Treppenabsatz. GK 5 Außentreppe: Rauchableitung oben zwingend. GK 4/5 Treppe in Wohnungen: besondere Vorkehrungen soweit nötig.",
          "**§ 39 Abs. 3 – Aufzugs-Fahrschacht:** Rauchableitung mindestens 2,5 % der Schachtgrundfläche, mindestens 0,10 m²; selbsttätige Öffnung im Brandfall; windgeschützter Rauchaustritt. Details: [Aufzüge](/ratgeber/aufzuege-brandschutz-bauo-sbauvo-nrw).",
          "**§ 46 Abs. 2 – Keller ohne Fenster:** Mindestens eine Öffnung ins Freie zur Rauchableitung; gemeinsame Kellerlichtschächte für übereinanderliegende Keller unzulässig.",
          "**§ 41 BauO – Lüftung:** Regelt Leitungsführung durch feuerwiderstandsfähige Bauteile – keine Entrauchung im engeren Sinne. In Versammlungs-/Verkaufsstätten kann Lüftung jedoch als Rauchabzugsanlage betrieben werden (§ 16 Abs. 9 SBauVO), wenn maschinelle Anforderungen erfüllt sind.",
        ],
      },
      {
        id: "sbauvo-versammlung",
        title: "SBauVO § 16 – Versammlungsstätten",
        paragraphs: [
          "Teil 1 SBauVO: Versammlungsräume und Aufenthaltsräume jeweils **über 50 m²**, Magazine/Lager/Szenenflächen **über 200 m²**, Bühnen und notwendige Treppenräume müssen entraucht werden können.",
          "Natürliche Rauchableitung staffelt nach Fläche: bis 200 m² oft Fenster nach § 46 Abs. 2 BauO; bis 1.000 m² oben 1 % Grundfläche oder 2 % obere Außenwand plus Zuluft unten (max. 12 m² frei); darüber maschinelle Anlagen mit Geräten je 400 m² und Auslösegruppen je 1.600 m².",
          "Maschinell (Auszug): mindestens 10.000 m³/h je 400 m² Absaugstelle; Zuluft max. 3 m/s; 30 min bei 600 °C; selbsttätige und Hand-Auslösung; Kennzeichnung **RAUCHABZUG** und **ZULUFT**. Alternative bei Sprinkler plus BMA: Entlüftung nach § 16 Abs. 4.",
          "Grenzfall ja: Eventhalle 800 m² mit natürlicher Rauchableitung oben plus Zuluft unten nach § 16 Abs. 2. Grenzfall nein: 120 m² Versammlungsraum ohne Fenster und ohne indirekte Entrauchung – nur Treppenraum-Fenster reicht nicht für den VR.",
          "Baulich und Betrieb: [Versammlungsstätten baulich](/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw), [Versammlungsstätten Betrieb](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw).",
        ],
      },
      {
        id: "sbauvo-verkauf",
        title: "SBauVO § 75 – Verkaufsstätten",
        paragraphs: [
          "Teil 3 SBauVO: Verkaufsräume und Aufenthaltsräume jeweils **über 50 m²**, Lagerräume **über 200 m²**, **Ladenstraßen** und notwendige Treppenräume – Entrauchungspflicht wie bei Versammlungsstätten.",
          "§ 75 Abs. 2–9 entspricht im Wesentlichen § 16 SBauVO. Zusätzlich bei Ladenstraßen: je 20 m Länge ein Rauchabzugsgerät 1,5 m² aerodynamisch; je 80 m eine Auslösegruppe; Zuluft unten mindestens 12 m² bei einstufigen Ladenstraßen.",
          "Grenzfall ja: Einzelhandel 1.200 m² mit maschineller RWA nach § 75. Grenzfall nein: 45 m² Verkaufsraum – unter der 50-m²-Schwelle keine §-75-Pflicht (Treppenraum und Keller weiter nach BauO).",
          "Rettungswege im Detail: [Verkaufsstätten Rettungswege](/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw).",
        ],
      },
      {
        id: "hochhaus-garage",
        title: "Hochhaus § 110 und Großgarage § 138",
        paragraphs: [
          "**§ 110 SBauVO:** Jedes Geschoss und Installationsschächte müssen entraucht werden können – generisch, ohne die Detailausführung der §§ 16/75. Für Treppenräume und Fahrschächte gelten parallel § 35 Abs. 8 BauO bzw. § 39 Abs. 3 BauO. Ausformung im Einzelfall über Brandschutzkonzept (§ 70 BauO). Vertiefung: [Hochhaus Entrauchung](/ratgeber/hochhaus-entrauchung-sbauvo-nrw).",
          "**§ 138 Abs. 4 SBauVO – geschlossene Großgaragen:** Natürlich mindestens 1.000 cm² je Einstellplatz (max. 20 m vom Platz) **oder** maschinelle RWA: 1 h bei 300 °C, mindestens 10-facher Luftwechsel/h. Ausnahme bei Lüftung nach § 136 Abs. 2 oder Sprinkler plus maschineller Abluft § 136 Abs. 4.",
          "Grenzfall ja: Tiefgarage mit Sprinkler und Abluft nach § 136 Abs. 4 – § 138 Abs. 4 Satz 2 kann entfallen. Grenzfall nein: Offene Mittelgarage ohne geschlossenen Großgaragen-Charakter – andere SBauVO-Teile prüfen.",
        ],
      },
      {
        id: "druckbelueftung",
        title: "§ 105 SBauVO – keine Entrauchung",
        paragraphs: [
          "Druckbelüftungsanlagen erzeugen **Überdruck** in innenliegenden Sicherheitstreppenräumen, deren Vorräumen und Feuerwehraufzugsschächten – damit Feuer und Rauch **nicht eindringen**. Das ist Rauchfreihaltung, nicht Rauchabzug aus einem Brandraum.",
          "Mindest-Luftgeschwindigkeit durch geöffnete Türen: 2,0 m/s (Treppenraum) bzw. 0,75 m/s (FW-Aufzug-Vorraum). Auslösung durch BMA.",
          "Grenzfall ja: Hochhaus mit Druckbelüftung im STR plus Rauchableitung 1 m² im notwendigen Treppenraum – beides parallel, unterschiedliche Funktion. Grenzfall nein: Druckbelüftung im STR soll fehlende RWA in einem 600-m²-Versammlungsraum ersetzen – das leistet § 105 nicht.",
          "Sicherheitstreppenraum und Treppenhaus: [Notwendige Treppenräume](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw), [Aufzüge § 105](/ratgeber/aufzuege-brandschutz-bauo-sbauvo-nrw).",
        ],
      },
      {
        id: "uebersicht",
        title: "Wo greift welche Norm?",
        paragraphs: [],
        table: {
          caption: "Entrauchung nach Gebäude und Bauteil",
          headers: ["Bauteil / Nutzung", "Norm", "Detailgrad"],
          rows: [
            ["Notwendiger Treppenraum", "§ 35 Abs. 7–8 BauO", "Mittel – 0,5 m²/OG oder 1 m² oben"],
            ["Aufzugs-Fahrschacht", "§ 39 Abs. 3 BauO", "Mittel – 2,5 % / min. 0,10 m²"],
            ["Keller ohne Fenster", "§ 46 Abs. 2 BauO", "Grob – Öffnung ins Freie"],
            ["Versammlungsstätte", "§ 16 SBauVO", "Hoch – Schwellen 50/200 m²"],
            ["Verkaufsstätte", "§ 75 SBauVO", "Hoch – wie § 16 + Ladenstraßen"],
            ["Hochhaus-Geschosse", "§ 110 SBauVO", "Grob – Konzept ergänzt"],
            ["Geschlossene Großgarage", "§ 138 Abs. 4 SBauVO", "Mittel"],
            ["Büro, Wohnen, Schule (ohne Schwellen)", "nur BauO", "Gering – TR, Keller, Schacht"],
            ["STR / FW-Schacht", "§ 105 SBauVO", "Druckbelüftung, nicht RWA"],
          ],
        },
      },
      {
        id: "praxis",
        title: "Typische Planungsfälle",
        paragraphs: [
          "Arztpraxis-Umbau 2. OG: Bauaufsicht fordert Nachweis Entrauchung notwendiger Treppenraum (§ 35 Abs. 8) – Fenster 0,50 m² je OG oder Rauchöffnung 1 m² oben; parallel feuerhemmende Flurwände. Muster: [Arztpraxen zusammenlegen](/ratgeber/arztpraxen-zusammenlegen-brandschutz-koeln).",
          "Restaurant 120 Plätze, VR 180 m²: Versammlungsstätte – natürliche Rauchableitung nach § 16 Abs. 2; Küche und Abzugshaube sind Betriebsthema, nicht BauO-Entrauchung. Einordnung Sonderbau: [Sonderbauten geregelt/ungeregelt](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
          "Einzelhandel mit Ladenstraße 60 m: § 75 – Rauchabzugsgeräte je 20 m, Auslösegruppe je 80 m, Zuluft unten; BMA-Kopplung und Wartung in [RWA-Prüffristen](/ratgeber/rwa-entrauchung-prueffristen) dokumentieren.",
          "Wohnhochhaus Bestand: § 110 plus Druckbelüftung STR (§ 105) plus Geschoss-Entrauchung im Konzept – nicht mit einfachen Treppenraum-Fenstern verwechseln.",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweise im Verfahren",
        paragraphs: [
          "Für Genehmigung und Bestand: Pläne mit Rauchableitungsöffnungen, Querschnitten, Bedienstellen und – bei maschinellen Anlagen – Auslösung, Zuluft und Kennzeichnung. Bei Hochhäusern und komplexen Sonderbauten Ausformung im **Brandschutzkonzept** (§ 70 BauO) üblich.",
          "Stellungnahme oder Konzept reicht nicht ohne Pläne – [Brandschutzkonzept wann nötig](/ratgeber/brandschutzkonzept-wann-noetig). Wiederkehrende Prüfung: PrüfVO NRW und DGUV 205-040, nicht BauO/SBauVO.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Entrauchung – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Kriterium"],
          rows: [
            ["1", "Notwendiger Treppenraum?", "§ 35 Abs. 7–8 BauO", "Fenster 0,5 m²/OG oder Rauchableitung ≥ 1 m²"],
            ["2", "GK 5 Außentreppe?", "§ 35 Abs. 8 Satz 3", "Rauchableitung oben zwingend"],
            ["3", "Aufzug-Fahrschacht?", "§ 39 Abs. 3", "2,5 % / min. 0,10 m²; selbsttätig"],
            ["4", "Keller ohne Fenster?", "§ 46 Abs. 2", "Öffnung ins Freie"],
            ["5", "Versammlungsstätte Teil 1?", "§ 16 SBauVO", "Schwellen 50/200 m²"],
            ["6", "Verkaufsstätte Teil 3?", "§ 75 SBauVO", "Wie § 16; Ladenstraßen"],
            ["7", "Hochhaus?", "§ 110 SBauVO", "Jedes Geschoss + Schächte"],
            ["8", "Geschlossene Großgarage?", "§ 138 Abs. 4", "1.000 cm²/Platz oder maschinell"],
            ["9", "Maschinelle RWA VS/Verkauf?", "§§ 16, 75", "30 min / 600 °C; RAUCHABZUG/ZULUFT"],
            ["10", "Druckbelüftung statt Raum-RWA?", "§ 105 SBauVO", "Nur STR/FW-Schacht"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber erklärt die gesetzliche Systematik zu Entrauchung und Rauchableitung in BauO und SBauVO NRW – ohne technische Auslegung nach DIN EN 12101, ohne Prüfintervalle und ohne Gastronomie-Sonderthemen (Küche, IndBauR).",
          "Ersetzt keine behördliche Einordnung und keinen ingenieurmethodischen Nachweis maschineller Entrauchung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw", label: "Treppenraum § 35" },
      { href: "/ratgeber/hochhaus-entrauchung-sbauvo-nrw", label: "Hochhaus § 110" },
      { href: "/ratgeber/rwa-entrauchung-prueffristen", label: "RWA-Prüffristen" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätten" },
      { href: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw", label: "Verkaufsstätten" },
      { href: "/ratgeber/aufzuege-brandschutz-bauo-sbauvo-nrw", label: "Aufzüge § 39" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept / Stellungnahme" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege § 33" },
    ],
    faq: [
      {
        question: "Ist Druckbelüftung nach § 105 SBauVO Entrauchung?",
        answer:
          "Nein. § 105 erzeugt Überdruck in Sicherheitstreppenräumen, Vorräumen und Feuerwehraufzugsschächten, damit Rauch nicht eindringt. Rauchabzug aus einem Brandraum (Versammlungsraum, Verkaufsfläche) regeln §§ 16, 75 SBauVO bzw. für Treppenräume § 35 Abs. 8 BauO.",
      },
      {
        question: "Braucht jedes Büro oder jede Wohnung eine Rauchabzugsanlage?",
        answer:
          "Nein. Außerhalb der SBauVO-Schwellen (z. B. Versammlungsraum ≤ 50 m², Verkaufsraum ≤ 50 m²) gibt es keine gesetzliche Raumentrauchungspflicht. Für alle Gebäude gelten weiterhin Treppenraum-Entrauchung (§ 35), Keller ohne Fenster (§ 46 Abs. 2) und Aufzugsschächte (§ 39 Abs. 3).",
      },
      {
        question: "Wann greift § 16 SBauVO statt nur § 35 BauO?",
        answer:
          "§ 35 regelt den notwendigen Treppenraum für alle Gebäude. § 16 zusätzlich für Versammlungsstätten: Versammlungs- und Aufenthaltsräume über 50 m², Magazine über 200 m², Bühnen – mit detaillierten natürlichen und maschinellen Anforderungen. Beide Normen können parallel gelten.",
      },
      {
        question: "Wo stehen Prüf- und Wartungsfristen für RWA?",
        answer:
          "Nicht in BauO oder SBauVO. Wiederkehrende Prüfung regeln PrüfVO NRW und DGUV 205-040 – siehe Ratgeber RWA-Prüffristen. Gesetzliche Pflicht zur Anlage ≠ gesetzliche Prüffrist in derselben Norm.",
      },
      {
        question: "Was fehlt in BauO/SBauVO für Gastronomie und Küchen?",
        answer:
          "Kein eigenes Entrauchungskapitel für Restaurants. Einordnung über Sonderbau (Versammlungsstätte, Verkauf, Beherbergung) und Schwellen in §§ 16/75. Küchenabluft, IndBauR und DIN 18232 sind technische Nachweisthemen außerhalb dieser Gesetzesübersicht.",
      },
      {
        question: "Reicht ein Fenster im Treppenraum für die ganze Entrauchung?",
        answer:
          "Für den notwendigen Treppenraum ja – wenn je oberirdisches Geschoss mindestens 0,50 m² freier Querschnitt ins Freie öffenbar ist oder oben mindestens 1 m² Rauchableitung bedienbar ist. Für große Versammlungs- oder Verkaufsräume reicht das Treppenraum-Fenster nicht; dort gelten §§ 16 oder 75 SBauVO.",
      },
    ],
  },
];
