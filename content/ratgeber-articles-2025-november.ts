/**
 * November 2025 – 4 Artikel (4/Monat).
 * Quellen: SBauVO NRW, BauPrüfVO, Betrieb.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_NOVEMBER: RatgeberArticle[] = [
  {
    slug: "sportstadien-blockbildung-sbauvo-nrw",
    title: "Sportstadien: Blockbildung und Abschrankung nach SBauVO",
    excerpt:
      "Sportstadien über 10.000 Plätze brauchen Abschrankung und Blockbildung – Stehplätze, Rettungswege und Einsatzplanung nach SBauVO Versammlungsstätten.",
    metaTitle: "Sportstadion Blockbildung SBauVO | H&S+",
    metaDescription:
      "Sportstadion Brandschutz NRW: Blockbildung §27 SBauVO, 10000 Plätze, Abschrankung Stehplätze, Rettungswege, Mehrzweckhalle.",
    keywords: [
      "Sportstadion Brandschutz",
      "Blockbildung",
      "Abschrankung Stehplätze",
      "SBauVO §27",
      "10000 Besucherplätze",
      "Stadion Rettungswege",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Großstadion als Sonderfall",
        paragraphs: [
          "§ 27 SBauVO NRW: Sportstadien mit mehr als 10.000 Besucherplätzen – Abschrankung und Blockbildung. Ergänzt [Mehrzweckhallen](/ratgeber/mehrzweckhallen-sportstaetten-sbauvo-nrw).",
          "Ziel: kontrollierte Räumung, keine unkontrollierten Massenbewegungen auf Stehflächen.",
          "Grenzfall ja: Arena 12.000 Plätze, Blockbildung im Konzept, Rettungswege 1,20 m, Lautsprecherzentrale, Feuerwehrzufahrt. Grenzfall nein: 11.000 Plätze ohne Blockbildungskonzept bei Stehplatzbetrieb.",
        ],
      },
      {
        id: "blockbildung",
        title: "Blockbildung und Abschrankung",
        paragraphs: [
          "Räumliche Gliederung der Steh- und Sitzbereiche – Zugänge und Fluchtwege je Block.",
          "Abschrankung vor Bühnen/Szenen auch unter 10.000 bei Stehflächen nach § 29.",
          "Abstimmung mit Veranstalter und Polizei.",
        ],
      },
      {
        id: "wege",
        title: "Rettungswege und Steigungen",
        paragraphs: [
          "Stufengänge Steigung/Auftritt nach SBauVO; Rettungswege min. 1,20 m.",
          "[Feuerwehrzufahrt](/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw) für Einsatz.",
          "[Versammlungsstätte baulich](/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw).",
        ],
      },
      {
        id: "betrieb",
        title: "Veranstaltungsbetrieb",
        paragraphs: [
          "Besucherstrommanagement, Öffnung Abschrankungen im Brandfall nur nach Konzept.",
          "[Brandsicherheitswache](/ratgeber/brandsicherheitswache-veranstaltung-sbauvo-nrw) bei Großevents.",
          "[VStätte Betrieb](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw).",
        ],
      },
      {
        id: "bestand",
        title: "Bestand und Umbau",
        paragraphs: [
          "Stadionumbau: Nutzerzahl neu, Blockbildung anpassen.",
          "[Sonderbau Bestand](/ratgeber/sonderbau-bestand-gebaeude-sbauvo-nrw) § 45.",
          "Temporäre Erweiterungen (Stehplatzbereiche) im Einzelfall prüfen.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Versammlungsstätte, Blockbildung und Konzept",
        paragraphs: [
          "Sportstadien und große Versammlungsstätten fallen unter SBauVO mit Anforderungen an Blockbildung, Rettungswege und Entfluchtung – das Brandschutzkonzept ist in NRW praktisch immer Pflicht. Abgrenzung: Bestuhlungsplan ist nicht dasselbe wie Blockbildungsnachweis; temporäre Bühnenbauwerke brauchen eigene Stellungnahme.",
          "Praxisfall Arena-Umbau: Neue VIP-Logen änderten Rettungswegführung – Konzeptfortschreibung und angepasste Feuerwehrpläne vor erstem Event. Typische Behördenforderung: Evakuierungszeiten und Brandsicherheitswachen bei Hochrisiko-Veranstaltungen.",
          "Veranstalter und Betreiber trennen Rollen schriftlich: Wer führt BSO Teil B, wer dokumentiert Übungen, wer koordiniert mit Feuerwehr?",
        ],
      },
      {
        id: "vertiefung",
        title: "Veranstaltungsbetrieb und Blockbildung",
        paragraphs: [
          "In Sportstadien entscheidet die Blockbildung über Rettungswegkapazität und Steuerung der Entfluchtung – in NRW wird das im Brandschutzkonzept und bei Hochrisiko-Spielen einzeln bewertet. Unterschied zur normalen Versammlungsstätte: dynamische Szenarien (Stehen, Pyrotechnik-Verbot, Sperrzonen) brauchen eigene Betriebsanweisungen.",
          "Praxisfall: Umbaumaßnahmen an Tribünen änderten Sichtachsen und Fluchtwegbreiten – Konzept und Feuerwehrplan mussten vor Saisonstart fortgeschrieben werden. Behördenforderung: Abstimmung mit Veranstalter, Ordnerdienst und Feuerwehr in einem gemeinsamen Einsatzplan.",
          "Dokumentation von Übungen, Personenstrom-Messungen und Mängeln pro Event – Schnittstelle [Brandsicherheitswache](/ratgeber/brandsicherheitswache-veranstaltung-sbauvo-nrw) und BSO Teil B.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst Sportstadion-Regeln der SBauVO zusammen. Veranstaltungssicherheitsrecht und Polizei ergänzen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/mehrzweckhallen-sportstaetten-sbauvo-nrw", label: "Mehrzweckhalle" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "VStätte baulich" },
      { href: "/ratgeber/brandsicherheitswache-veranstaltung-sbauvo-nrw", label: "Brandsicherheitswache" },
      { href: "/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw", label: "Zufahrt" },
      { href: "/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw", label: "Betrieb" },
    ],
    faq: [
      {
        question: "Ab wann Blockbildung Pflicht?",
        answer:
          "Sportstadien über 10.000 Besucherplätze nach § 27 SBauVO.",
      },
      {
        question: "Gilt das für Konzerte in der Arena?",
        answer:
          "Ja wenn Stadion-Tatbestand – Veranstaltungskonzept mit Behörde.",
      },
      {
        question: "Unterschied Abschrankung §29?",
        answer:
          "§ 29 Stehflächen vor Bühne – kann auch unter 10.000 Plätzen gelten.",
      },
      {
        question: "Nur Stehplätze?",
        answer:
          "Schwerpunkt Stehbereiche – Sitzblöcke ebenfalls in Evakuierungslogik.",
      },
      {
        question: "Brandsicherheitswache nötig?",
        answer:
          "Bei Großbühnen/Mehrzweckhallen über Schwellen – siehe eigener Ratgeber.",
      },
      {
        question: "Bestandsstadion?",
        answer:
          "§ 45 Übergang – Nachrüstung bei wesentlicher Änderung.",
      },
    ],
  },
  {
    slug: "brandsicherheitswache-veranstaltung-sbauvo-nrw",
    title: "Brandsicherheitswache bei Großveranstaltungen",
    excerpt:
      "Großbühnen, große Mehrzweckhallen und Szenen über 200 m² können eine anwesende Brandsicherheitswache der Feuerwehr erfordern – SBauVO Betrieb.",
    metaTitle: "Brandsicherheitswache Großveranstaltung | H&S+",
    metaDescription:
      "Brandsicherheitswache Feuerwehr: SBauVO Großbühne 200 m², Mehrzweckhalle 5000 Plätze, Veranstaltung, Anweisungen, VStätte.",
    keywords: [
      "Brandsicherheitswache",
      "Großveranstaltung Feuerwehr",
      "Großbühne Brandschutz",
      "SBauVO Veranstaltung",
      "Mehrzweckhalle 5000",
      "Szenenfläche Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Feuerwehr vor Ort bei Großevents",
        paragraphs: [
          "SBauVO NRW Versammlungsstätten Betrieb: bei Veranstaltungen auf Großbühnen oder Szenenflächen über 200 m² oder in Mehrzweckhallen über 5.000 Plätze mindestens eine Brandsicherheitswache der Feuerwehr anwesend – Anweisungen sind zu befolgen.",
          "Ergänzt [Mehrzweckhallen](/ratgeber/mehrzweckhallen-sportstaetten-sbauvo-nrw) und [VStätte Betrieb](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw).",
          "Grenzfall ja: Konzert in Halle 6.000 Plätze, Brandsicherheitswache bestellt, Lautsprecherzentrale verknüpft, Bühnenaufbau durch qualifiziertes Personal. Grenzfall nein: 6.000 Plätze ohne Wache, Behörde nicht informiert.",
        ],
      },
      {
        id: "tatbestand",
        title: "Wann ist sie vorgeschrieben?",
        paragraphs: [
          "Großbühne/Szenenfläche >200 m² oder Mehrzweckhalle >5.000 Plätze bei entsprechender Veranstaltung.",
          "Nicht jede kleine Vereinsveranstaltung – Einzelfall Nutzung und Raum.",
          "Genehmigung/Anzeige Veranstaltung mit Feuerwehr abstimmen.",
        ],
      },
      {
        id: "aufgaben",
        title: "Aufgaben der Wache",
        paragraphs: [
          "Überwachung Brandgefahren Bühnentechnik, Pyrotechnik-Schnittstelle, Zugänge für Löschangriff.",
          "Weisungsbefugnis gegenüber Veranstalter – Absagen/Räumung im Ernstfall.",
          "Koordination mit [Lautsprecherzentrale](/ratgeber/mehrzweckhallen-sportstaetten-sbauvo-nrw).",
        ],
      },
      {
        id: "buehne",
        title: "Bühnenaufbau und Personal",
        paragraphs: [
          "Auf-/Abbau bühnentechnischer Einrichtungen Großbühne: qualifiziertes Personal Pflicht.",
          "Heißarbeiten, Kabel, Brandlast – [Heißarbeiten](/ratgeber/heissarbeiten-brandwache-erlaubnisschein).",
          "Trennung Publikum/Bühne.",
        ],
      },
      {
        id: "planung",
        title: "Planung und Kosten",
        paragraphs: [
          "Veranstalter trägt Organisation und Kosten – früh mit Feuerwehr klären.",
          "[Feuerwehrzufahrt](/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw) und Einsatzräume.",
          "Konzept im Genehmigungsverfahren der Location.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Brandsicherheitswache und Veranstaltungen",
        paragraphs: [
          "Bei Veranstaltungen mit erhöhter Personenzahl verlangt die SBauVO in NRW häufig Brandsicherheitswachen – unabhängig von der BMA. Abgrenzung: Brandsicherheitswache ersetzt weder Feuerwehr noch den betrieblichen Brandschutzbeauftragten; Pyrotechnik braucht zusätzliche Fachaufsicht.",
          "Praxisfall Open-Air mit temporärer Bühne: Auflage: nachweislich qualifizierte Wachen, Funkgeräte und Abstimmung mit örtlicher Feuerwehr vor Freigabe. Genehmigungspraxis: Anzahl und Qualifikation hängen von Personenzahl, Raumtyp und Nutzungsdauer ab.",
          "Dokumentation: Einsatzplan, Briefing und Mängelprotokoll pro Veranstaltung – Fortschreibung in Veranstaltungskonzept.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO-Pflicht zur Brandsicherheitswache zusammen. Kommunale Gebühren und Verfügungen können abweichen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/mehrzweckhallen-sportstaetten-sbauvo-nrw", label: "Mehrzweckhalle" },
      { href: "/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw", label: "VStätte Betrieb" },
      { href: "/ratgeber/sportstadien-blockbildung-sbauvo-nrw", label: "Sportstadion" },
      { href: "/ratgeber/heissarbeiten-brandwache-erlaubnisschein", label: "Heißarbeiten" },
      { href: "/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw", label: "Zufahrt" },
    ],
    faq: [
      {
        question: "Ab wann Brandsicherheitswache?",
        answer:
          "Großbühne/Szene >200 m² oder Mehrzweckhalle >5.000 Plätze bei Veranstaltung.",
      },
      {
        question: "Wer bestellt die Wache?",
        answer:
          "Veranstalter/Betreiber in Abstimmung mit Feuerwehr – oft über Genehmigung.",
      },
      {
        question: "Kosten?",
        answer:
          "Typisch Veranstalter – kommunale Gebührenordnung.",
      },
      {
        question: "Kleine Bühne 150 m²?",
        answer:
          "Unter 200 m²-Schwelle – andere Anforderungen möglich, nicht automatisch Wache.",
      },
      {
        question: "Muss ich Anweisungen befolgen?",
        answer:
          "Ja – SBauVO verpflichtet zur Befolgung.",
      },
      {
        question: "Open Air?",
        answer:
          "Freiluft-VStätten eigene Regeln – Einzelfall mit Behörde.",
      },
    ],
  },
  {
    slug: "brandschutznachweis-din-18230-nrw",
    title: "Ingenieurmethodischer Nachweis: DIN 18230 und Alternativen",
    excerpt:
      "Wo Regelbau nicht passt, erlaubt die Praxis ingenieurmethodische Nachweise – Simulation, Abweichung und Abstimmung mit der Bauaufsicht in NRW.",
    metaTitle: "Ingenieurmethodischer Nachweis DIN 18230 | H&S+",
    metaDescription:
      "Ingenieurmethodischer Brandschutznachweis: DIN 18230, Simulation, Abweichung BauO, Konzept NRW, rechnerischer Nachweis.",
    keywords: [
      "ingenieurmethodischer Nachweis",
      "DIN 18230",
      "Brandschutznachweis Simulation",
      "Abweichung Brandschutz",
      "rechnerischer Nachweis",
      "Brandschutz Ingenieurmethode",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Wenn der Regelbau nicht reicht",
        paragraphs: [
          "BauO NRW und Handlungsempfehlung: Abweichungen vom Regelbau über ingenieurmethodischen Nachweis – z. B. DIN 18230-1 für baulichen Brandschutz in Sonderfällen.",
          "Nicht „billiger Brandschutz“, sondern gleichwertige Sicherheit nachvollziehbar berechnet.",
          "Grenzfall ja: Großraumbüro mit verlängertem Weg, Nachweis gleichwertige Räumungszeit, Behörde stimmt zu. Grenzfall nein: Weg über Maximum ohne Nachweis, „wird schon passen“.",
        ],
      },
      {
        id: "methoden",
        title: "DIN 18230 und Verfahren",
        paragraphs: [
          "DIN 18230-1: brandschutztechnische Anforderungen, rechnerische Verfahren.",
          "Brand-Simulation (CFD) in ausgewählten Fällen – Fachplaner mit Nachweis.",
          "[Konzept §9](/ratgeber/brandschutzkonzept-baupruefvo-nrw) trägt Methodenwahl.",
        ],
      },
      {
        id: "anwendung",
        title: "Typische Anwendungsfälle",
        paragraphs: [
          "Großraumbüro, atypische Grundrisse, [Gebäudeklassen-Grenzfälle](/ratgeber/gebaeudeklassen-grenzfaelle-nrw).",
          "Sonderbau ungeregelt mit komplexer Geometrie.",
          "Bestand mit eingeschränkter Nachrüstmöglichkeit – [Bestand](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw).",
        ],
      },
      {
        id: "behoerde",
        title: "Behörde und Dokumentation",
        paragraphs: [
          "Frühzeitige Abstimmung mit unterer Bauaufsicht – nicht erst bei Abnahme.",
          "[Feuerwehr Abstimmung](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw).",
          "Nachweis archivieren – [Dokumentation](/ratgeber/brandschutz-dokumentation-betrieb-nrw).",
        ],
      },
      {
        id: "grenzen",
        title: "Was die Methode nicht ersetzt",
        paragraphs: [
          "Kein Ersatz für Betrieb, BSO, Wartung.",
          "Keine automatische Genehmigung – behördenliche Bewertung nötig.",
          "Sonderbau-SBauVO-Tabellen bleiben wo anwendbar.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: DIN 18230 und Nachweisführung",
        paragraphs: [
          "DIN 18230 strukturiert brandschutztechnische Nachweise für bestimmte Anlagen und Betriebe – in der Praxis wird sie in NRW oft neben BauO-Nachweis und Sonderbau-Konzept verlangt. Abgrenzung: DIN 18230 ersetzt weder das genehmigte Brandschutzkonzept noch die PrüfVO; sie konkretisiert Dokumentation und Instandhaltung für definierte Anwendungsfälle.",
          "Praxisfall Industriebetrieb: Auftraggeber verlangte 18230-konforme Nachweisführung für Löschwasserversorgung – Lücke zwischen Genehmigung und Betrieb wurde erst bei SV-Prüfung sichtbar. Orientierungswert: Früh klären, welche Norm der Auftraggeber, Versicherer oder Behörde einfordert.",
          "Fortschreibung nach Anlagenänderung mit Versionierung – Schnittstelle zu [Prüfpflichten Sonderbau](/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber gibt Überblick zur Ingenieurmethode. Konkrete Nachweise nur durch qualifizierte Brandschutzplaner.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/gebaeudeklassen-grenzfaelle-nrw", label: "GK-Grenzfälle" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr" },
      { href: "/ratgeber/brandschutz-dokumentation-betrieb-nrw", label: "Dokumentation" },
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Sonderbau" },
    ],
    faq: [
      {
        question: "Was ist ingenieurmethodischer Nachweis?",
        answer:
          "Rechnerischer/fachlicher Nachweis gleichwertiger Brandsicherheit statt striktem Regelbau.",
      },
      {
        question: "DIN 18230 Pflicht?",
        answer:
          "Häufiges Verfahren in DE – konkrete Wahl im Konzept mit Behörde.",
      },
      {
        question: "Spart das Kosten?",
        answer:
          "Nicht automatisch – Planungsaufwand und Fachhonorar, ggf. weniger baulicher Aufwand.",
      },
      {
        question: "Ohne Behörde möglich?",
        answer:
          "Nein – Abweichung braucht behördliche Zustimmung.",
      },
      {
        question: "Für jedes Büro?",
        answer:
          "Nein – bei Regelbau meist Regeln BauO, Methode bei Grenz-/Sonderfällen.",
      },
      {
        question: "Simulation immer nötig?",
        answer:
          "Nein – nur wo begründet und behördlich akzeptiert.",
      },
    ],
  },
  {
    slug: "brandschutz-dokumentation-betrieb-nrw",
    title: "Brandschutz-Dokumentation im Betrieb: Nachweise archivieren",
    excerpt:
      "Genehmigungen, Prüfberichte, Konzepte und Übungsprotokolle müssen im Betrieb verfügbar sein – für Behörde, Versicherer und BSB.",
    metaTitle: "Brandschutz Dokumentation Betrieb | H&S+",
    metaDescription:
      "Brandschutz Dokumentation: Prüfberichte, Konzept, Genehmigung, BSB Archiv, PrüfVO, Sonderbau Nachweisführung NRW.",
    keywords: [
      "Brandschutz Dokumentation",
      "Prüfberichte archivieren",
      "Brandschutznachweis Betrieb",
      "BSB Dokumentation",
      "PrüfVO Nachweis",
      "Genehmigung Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Papier (und Dateien) retten im Ernstfall",
        paragraphs: [
          "Brandschutz endet nicht bei Abnahme – Betrieb braucht vollständige Dokumentation: Brandschutzkonzept, Genehmigungen, Prüfberichte, Betriebsanweisungen, Übungsnachweise.",
          "Bei [Brandschau](/ratgeber/brandschau-koeln-feuerwehr), Versicherungsschaden oder Prüfung fehlen sonst Belege.",
          "Grenzfall ja: Sonderbau mit Ordner PrüfVO-BMA-Sprinkler, aktuelles Konzept, Fluchtpläne, Übungsprotokoll 2024. Grenzfall nein: Nur Bauantrag von 2010, keine Prüfberichte, Fluchtplan veraltet.",
        ],
      },
      {
        id: "inhalt",
        title: "Was gehört ins Archiv?",
        paragraphs: [
          "Genehmigungsunterlagen, brandschutztechnische Stellungnahmen, [Konzept §9](/ratgeber/brandschutzkonzept-baupruefvo-nrw).",
          "[PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau)-Berichte, Wartungsverträge BMA/RWA/Sprinkler.",
          "Flucht- und Feuerwehrpläne, BSO, Gefährdungsbeurteilung.",
        ],
      },
      {
        id: "rollen",
        title: "Wer führt was?",
        paragraphs: [
          "[BSB](/ratgeber/bestellung-brandschutzbeauftragter-nrw) koordiniert oft Dokumentation.",
          "Facility Management: technische Prüfungen.",
          "Eigentümer: Genehmigungsoriginale, Umbau-Dokumentation.",
        ],
      },
      {
        id: "aktualisierung",
        title: "Aktualisierung bei Änderung",
        paragraphs: [
          "Umbau, Nutzungsänderung: Konzept fortschreiben – [Umbau](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
          "Neue Prüfberichte nach Frist – [Prüffristen](/ratgeber/prueffristen-brandschutz-dguv-205-040-ueberblick).",
          "Fluchtplan nach Umgestaltung.",
        ],
      },
      {
        id: "digital",
        title: "Digital und Zugriff",
        paragraphs: [
          "Digital archivieren mit Backup – im Brandfall auch physischer Zugriff für Feuerwehr sinnvoll.",
          "Schlüssel Depots für Prüfberichte-Anlagen.",
          "Übergabe bei Eigentümerwechsel.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Welche Unterlagen Behörden und Prüfer sehen wollen",
        paragraphs: [
          "Bei Wiederkehrenden Prüfungen und Schauen in NRW reicht „wir haben ein Konzept“ selten – Prüfer erwarten aktuelle BSO, Prüfbücher, Fortschreibungen nach Umbau und Nachweise der befähigten Personen. Abgrenzung: Genehmigungsunterlagen (BSK) sind nicht dasselbe wie Betriebsdokumentation; ASR-Aushänge ersetzen keine Prüfprotokolle.",
          "Praxisfall Logistikzentrum: Fehlende Zuordnung von Prüfberichten zu Anlagennummern führte zu Auflage – ein Anlagenregister mit Verantwortlichen löste das. Orientierungswert: Ein Ordner „Brandschutz Betrieb“ mit Index Konzept, Pläne, Prüfungen, Übungen, Unterweisungen.",
          "Nachweislogik für Geschäftsführung: Dokumentation ist Haftungs- und Versicherungsthema – lückenhafte Unterlagen erschweren Schadensregulierung nach Brand.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber listet Dokumentationspflichten betrieblich zusammen. Keine rechtliche Vollständigkeitsgarantie – Objekt und Sonderbau prüfen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept" },
      { href: "/ratgeber/bestellung-brandschutzbeauftragter-nrw", label: "BSB" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Fluchtplan" },
      { href: "/ratgeber/brandschau-koeln-feuerwehr", label: "Brandschau" },
    ],
    faq: [
      {
        question: "Welche Dokumente Pflicht?",
        answer:
          "Genehmigung, Konzept, Prüfberichte prüfpflichtiger Anlagen, BSO, Gefährdungsbeurteilung – objektabhängig.",
      },
      {
        question: "Wie lange aufbewahren?",
        answer:
          "Lebensdauer Anlage/Gebäude plus gesetzliche Fristen – nicht wegwerfen nach Abnahme.",
      },
      {
        question: "Wer prüft bei Brandschau?",
        answer:
          "Feuerwehr/Behörde kann Nachweise anfordern – Lücken führen zu Auflagen.",
      },
      {
        question: "Digital genug?",
        answer:
          "Ja mit Zugriffssicherung – im Einsatz auch Ausdrucke/Ordner vor Ort hilfreich.",
      },
      {
        question: "Nach Umbau?",
        answer:
          "Konzept und Pläne aktualisieren, neue Prüfungen dokumentieren.",
      },
      {
        question: "Mieterwechsel?",
        answer:
          "Übergabe Brandschutzunterlagen an neuen Betreiber vertraglich regeln.",
      },
    ],
  },
];
