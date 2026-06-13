/**
 * September 2025 – 4 Artikel (4/Monat).
 * Quellen: BauO NRW, SBauVO NRW, Brandschutzkonzept.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_SEPTEMBER: RatgeberArticle[] = [
  {
    slug: "grossraumbuero-sonderbau-ungeregelt-nrw",
    title: "Großraumbüros und Campus: Sonderbau ohne SBauVO-Büroteil",
    excerpt:
      "Bürogebäude über 7.000 m² oder mit mehr als 400 Personen sind Sonderbau – in NRW ohne eigenen SBauVO-Büroteil, aber mit Konzept, Evakuierung und Fluktuationshaus-Logik.",
    metaTitle: "Großraumbüro Sonderbau NRW | H&S+",
    metaDescription:
      "Großraumbüro Campus Sonderbau NRW: 7000 m², 400 Personen, ungeregelt, Fluktuationshaus, Evakuierung, Brandschutzkonzept Büro.",
    keywords: [
      "Großraumbüro Sonderbau",
      "Campus Brandschutz",
      "Büro 7000 m²",
      "400 Personen Sonderbau",
      "Fluktuationshaus",
      "Büro Brandschutzkonzept NRW",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Schwellen Büro-Sonderbau",
        paragraphs: [
          "§ 50 Abs. 2 BauO NRW: Bürogebäude mit mehr als 7.000 m² Geschossfläche oder mit mehr als 400 Personen im Gebäude sind Sonderbau. NRW-SBauVO enthält keinen Büro-Teil – Einordnung „ungeregelt“.",
          "Campus mit mehreren Gebäuden: Personen und Flächen je Gebäude und ggf. Gesamtanlage – [Systematik](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
          "Grenzfall ja: Bürokomplex 8.200 m², Konzept mit Nutzerzahl, zwei unabhängige Rettungswege je Geschoss, BMA, BSO, Fluktuationshaus-Evakuierung. Grenzfall nein: 7.500 m² angenommen, aber 520 Personen ohne angepasstes Konzept.",
        ],
      },
      {
        id: "fluktuation",
        title: "Fluktuationshaus und Nutzerzahl",
        paragraphs: [
          "Handlungsempfehlung und Konzeptpraxis: hohe tägliche Nutzerfluktuation („Fluktuationshaus“) – Evakuierung über mehrere Treppen, Beschilderung, Sammelstellen.",
          "Verknüpfung [Fluktuationshaus](/ratgeber/fluktuationshaus-evakuierung-nrw) und [Alarmierung](/ratgeber/alarmierung-evakuierung-betrieb).",
          "Homeoffice und Schichtbetrieb ändern Spitzenbelegung – Konzept aktualisieren.",
        ],
      },
      {
        id: "konzept",
        title: "Konzeptinhalte Büro",
        paragraphs: [
          "[§9 BauPrüfVO](/ratgeber/brandschutzkonzept-baupruefvo-nrw): Nutzerzahl, Rettungswege, Brandabschnitte, BMA, ggf. RWA.",
          "Serverräume: [elektrische Betriebsräume](/ratgeber/elektrische-betriebsraeume-sbauvo-nrw).",
          "Kantine/Veranstaltung im Gebäude: Gaststätten- oder VStätten-Tatbestand zusätzlich.",
        ],
      },
      {
        id: "betrieb",
        title: "BSO und Facility",
        paragraphs: [
          "[BSB](/ratgeber/bestellung-brandschutzbeauftragter-nrw) und Brandschutzorganisation im Betrieb.",
          "Rettungswege: keine Aktenlager, keine temporären Bürozellen in Fluren.",
          "[DGUV Gefährdungsbeurteilung](/ratgeber/dguv-205-001-gefaehrdungsbeurteilung-brandschutz) ergänzend.",
        ],
      },
      {
        id: "umbau",
        title: "Open Space und Nutzungsänderung",
        paragraphs: [
          "Umbau zu Großraum: Brandabschnitte und Weglängen neu bewerten.",
          "[Umbau](/ratgeber/umbau-nutzungsaenderung-brandschutz) triggert oft Konzept-Fortschreibung.",
          "Co-Working mit wechselnden Mietern: Zugang Rettungswege und Unterweisung.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst Büro-Sonderbau in NRW zusammen. Einzelbüro unter Schwelle kann GK 4/5 sein – nicht pauschal Sonderbau. Er ersetzt kein Konzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/fluktuationshaus-evakuierung-nrw", label: "Fluktuationshaus" },
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Geregelt/ungeregelt" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Evakuierung" },
      { href: "/ratgeber/bestellung-brandschutzbeauftragter-nrw", label: "BSB" },
    ],
    faq: [
      {
        question: "7.000 m² oder 400 Personen – was zählt?",
        answer:
          "Beide Schwellen unabhängig – Überschreitung einer reicht für Sonderbau.",
      },
      {
        question: "Gilt das für jedes Stockwerk?",
        answer:
          "Geschossfläche und Personen im Gebäude – nicht einzelnes Büro.",
      },
      {
        question: "Was ist ein Fluktuationshaus?",
        answer:
          "Gebäude mit hoher täglicher Nutzerwechselzahl – besondere Evakuierungsanforderungen im Konzept.",
      },
      {
        question: "Brauche ich BMA?",
        answer:
          "Konzept- und behördenabhängig – bei Großraumbüro häufig, nicht pauschal ohne Nachweis.",
      },
      {
        question: "Campus mehrere Gebäude?",
        answer:
          "Je Gebäude Sonderbau prüfen; Verbindungsgänge und Gesamtnutzerzahl im Konzept.",
      },
      {
        question: "Unterschied Hochhaus?",
        answer:
          "Über 22 m zusätzlich SBauVO Hochhaus – parallel zu Büro-Sonderbau.",
      },
    ],
  },
  {
    slug: "rauchabschnitt-t30-rs-praxis-bauo-nrw",
    title: "Rauchabschnitte und T30-RS: Praxis für Brandabschnitte",
    excerpt:
      "Brand- und Rauchabschnitte strukturieren Gebäude – T30-RS, feuerbeständige Wände und typische Planungsfehler bei Büro, Praxis und Gewerbe nach BauO NRW.",
    metaTitle: "Rauchabschnitt T30-RS BauO NRW | H&S+",
    metaDescription:
      "Rauchabschnitt Brandabschnitt NRW: T30-RS, feuerbeständig, Praxis Büro, Rettungsweg, BauO Abschnittsbildung.",
    keywords: [
      "Rauchabschnitt",
      "T30-RS",
      "Brandabschnitt BauO",
      "feuerbeständige Wand",
      "Rauchschutztür",
      "Brandabschnitt Praxis",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Abschnitte begrenzen Brandausbreitung",
        paragraphs: [
          "BauO NRW und DIN 4102-4: Gebäude in Brand- und Rauchabschnitte gliedern – unterschiedliche Feuerwiderstandsklassen (F30–F90, T30–T90).",
          "Rauchabschnitt: Rauchausbreitung begrenzen; Brandabschnitt: Brandübertragung – in der Praxis oft kombiniert (T30-RS).",
          "Grenzfall ja: Arztpraxis in Bürogebäude, T30-RS zu Flur, Feststellanlage, keine Durchbrüche ohne Abschottung. Grenzfall nein: Praxis ohne Abschluss zum gemeinsamen Flur, „nur Mietwand“.",
        ],
      },
      {
        id: "klassen",
        title: "T30-RS und feuerbeständig",
        paragraphs: [
          "T30-RS: 30 Minuten Feuerwiderstand, rauchdicht, selbstschließend – typisch für Abschlüsse zu Rettungswegen.",
          "Feuerbeständige Wände (F90): größere Brandabschnitte, z. B. Treppenräume, Schächte.",
          "[Feuerschutzabschlüsse Bestand](/ratgeber/feuerschutzabschluesse-bestand-nrw) bei Nachrüstung.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Anwendungen",
        paragraphs: [
          "Praxis, Kanzlei, kleines Gewerbe im MFH/Büro: eigener Rauchabschnitt zum geschützten Flur.",
          "Küche Gastronomie: höhere Anforderungen, [Gaststätte](/ratgeber/gaststaette-sonderbau-ungeregelt-nrw).",
          "Verkaufsstätte: [Brandabschnitt](/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw).",
        ],
      },
      {
        id: "fehler",
        title: "Häufige Mängel",
        paragraphs: [
          "Feststellanlagen dauerhaft aus, Keile in Türen.",
          "Durchbrüche für Kabel/Lüftung ohne zugelassene Abschottung.",
          "Glastrennwände ohne Brandschutznachweis als Abschluss.",
        ],
      },
      {
        id: "planung",
        title: "Planung und Nachweis",
        paragraphs: [
          "Abschnittsbildung im Brandschutzkonzept und Lageplan – nicht nur im Brandschutzkonzept-Anhang versteckt.",
          "Abstimmung mit [BauPAVO](/ratgeber/baupavo-nrw-bauarten-verwendbarkeitsnachweis) für Bauprodukte.",
          "Umbau: [Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz) prüft Abschnitte neu.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erläutert Abschnittslogik in der Praxis. Konkrete Anforderungen je Gebäudeklasse und Nutzung sind konzept- und behördenabhängig.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerschutzabschluesse-bestand-nrw", label: "Feuerschutzabschlüsse" },
      { href: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw", label: "Verkaufsstätte" },
      { href: "/ratgeber/baupavo-nrw-bauarten-verwendbarkeitsnachweis", label: "BauPAVO" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau" },
    ],
    faq: [
      {
        question: "Was bedeutet T30-RS?",
        answer:
          "Feuerwiderstand 30 Minuten, rauchdicht (RS), selbstschließend – typische Rauchschutztür.",
      },
      {
        question: "Braucht jede Praxis T30-RS?",
        answer:
          "Wenn Rettungsweg über gemeinsamen Flur – in der Regel ja im Konzept.",
      },
      {
        question: "Darf Feststellanlage offen bleiben?",
        answer:
          "Nur im genehmigten Brandfall – nicht dauerhaft.",
      },
      {
        question: "Unterschied Brand- und Rauchabschnitt?",
        answer:
          "Brandabschnitt: Feuerübertragung; Rauchabschnitt: Rauch – oft kombinierte Anforderungen.",
      },
      {
        question: "Gilt das im Bestand?",
        answer:
          "Bei Umbau/Nutzungsänderung oft Nachrüstung – [Bestand](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw).",
      },
      {
        question: "Wer plant Abschnitte?",
        answer:
          "Brandschutzkonzept mit Architekt/Fachplaner – Behörde prüft.",
      },
    ],
  },
  {
    slug: "bma-brandfallsteuerung-aufzug-sbauvo-nrw",
    title: "BMA und Aufzugs-Brandfallsteuerung in Sonderbauten",
    excerpt:
      "Brandmeldeanlagen koppeln mit Aufzügen, RWA und Türen – Brandfallsteuerung nach SBauVO und DIN, typische Schnittstellen in Hochhaus und Versammlungsstätte.",
    metaTitle: "BMA Aufzug Brandfallsteuerung | H&S+",
    metaDescription:
      "BMA Brandfallsteuerung Aufzug: SBauVO, Feuerwehraufzug, RWA, Feststellanlagen, Sonderbau PrüfVO, DIN 14675.",
    keywords: [
      "BMA Brandfallsteuerung",
      "Aufzug Brandfall",
      "Feuerwehraufzug BMA",
      "Brandmeldeanlage Sonderbau",
      "RWA Kopplung",
      "Feststellanlage BMA",
    ],
    sections: [
      {
        id: "einordnung",
        title: "BMA als Zentrale im Brandfall",
        paragraphs: [
          "In vielen Sonderbauten: BMA löst Brandfallsteuerung aus – Aufzüge, RWA, Feststellanlagen, ggf. Lüftung und Türen.",
          "SBauVO Hochhaus § 111, Versammlungsstätten zentrale Bedienung – technische Kopplung im Konzept und Prüfbericht.",
          "Grenzfall ja: Hochhaus, BMA-Probe dokumentiert, Aufzüge fahren in Brandetage, RWA öffnet, Feststellanlagen schließen. Grenzfall nein: BMA ohne Wartung, Aufzug fährt bei Meldung weiter, Steuerung ausgeklemmt.",
        ],
      },
      {
        id: "aufzug",
        title: "Aufzüge und Feuerwehraufzug",
        paragraphs: [
          "Personenaufzüge: in der Regel Brandfallsteuerung – keine Nutzerbeförderung bei Brand.",
          "Feuerwehraufzug: gesonderte Anforderungen, [Hochhaus](/ratgeber/hochhaus-brandschutz-sbauvo-nrw).",
          "Schnittstelle BMA ↔ Aufzugssteuerung in Prüfprotokoll.",
        ],
      },
      {
        id: "rwa",
        title: "RWA, Lüftung, Türen",
        paragraphs: [
          "Rauch- und Wärmeabzug: BMA-Meldung öffnet Klappen, schließt Zuluft.",
          "Feststellanlagen: Schließung bei Brandmeldung – nicht dauerhaft offen.",
          "Versammlungsstätten >1.000 m²: zentrale Bedienung zusätzlich zu örtlichen Schaltern.",
        ],
      },
      {
        id: "pruefung",
        title: "PrüfVO und Wartung",
        paragraphs: [
          "[PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau): BMA und gekoppelte Anlagen wiederkehrend prüfen.",
          "Probealarm mit dokumentierter Funktion aller Schnittstellen.",
          "Änderungen an Steuerung: Konzept und Prüfung anpassen.",
        ],
      },
      {
        id: "planung",
        title: "Planung und Grenzfälle",
        paragraphs: [
          "Neubau: Brandfall-Matrix im Konzept – welche Melder lösen was aus.",
          "Bestand: Nachrüstung bei wesentlicher Änderung – [Sonderbau Bestand](/ratgeber/sonderbau-bestand-gebaeude-sbauvo-nrw).",
          "Kleine Objekte ohne BMA: manuelle Steuerung und andere Nachweise.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst BMA-Brandfallsteuerung in Sonderbauten zusammen. DIN 14675 und Herstellerunterlagen ergänzen. Er ersetzt keine Prüfung durch Sachkundige.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/hochhaus-betriebsvorschriften-sbauvo-nrw", label: "Hochhaus Betrieb" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "VStätte baulich" },
      { href: "/ratgeber/feuerschutzabschluesse-bestand-nrw", label: "Feststellanlagen" },
    ],
    faq: [
      {
        question: "Muss jeder Sonderbau BMA haben?",
        answer:
          "Konzeptabhängig – viele Typen ja, kleine Objekte teils manuelle Lösung.",
      },
      {
        question: "Fährt Aufzug bei Brand zur Etage?",
        answer:
          "Brandfallsteuerung verhindert Personenbeförderung – Feuerwehraufzug gesondert.",
      },
      {
        question: "Wer prüft Kopplung?",
        answer:
          "PrüfVO-pflichtige Sachkundige für BMA und ggf. Aufzug/RWA gemeinsam dokumentieren.",
      },
      {
        question: "Was bei geänderter Steuerung?",
        answer:
          "Neue Funktionsprüfung und Konzept-Fortschreibung.",
      },
      {
        question: "Zentrale Bedienung Pflicht?",
        answer:
          "Ab bestimmten Größen in VStätten und Sonderbauten – Konzept prüfen.",
      },
      {
        question: "RWA ohne BMA?",
        answer:
          "Manuelle oder andere Auslösung möglich – seltener in großen Sonderbauten.",
      },
    ],
  },
  {
    slug: "loeschwasser-rueckhalt-konzept-nrw",
    title: "Löschwasser und Rückhalteanlagen im Brandschutzkonzept",
    excerpt:
      "Löschwasserversorgung und Rückhalte für Löschwasser bzw. Kontaminanten gehören in viele Konzepte – §9 BauPrüfVO, Schnittstelle LAU und Betrieb.",
    metaTitle: "Löschwasser Rückhalte Brandschutz | H&S+",
    metaDescription:
      "Löschwasser Brandschutzkonzept: Versorgung, Rückhalteanlage, §9 BauPrüfVO, LAU, Industrie Lager, Sonderbau NRW.",
    keywords: [
      "Löschwasser",
      "Rückhalteanlage",
      "Brandschutzkonzept Löschwasser",
      "Löschwasserversorgung",
      "LAU Brandschutz",
      "Kontaminanten Rückhalt",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Löschwasser im Konzept",
        paragraphs: [
          "§ 9 BauPrüfVO: Brandschutzkonzept kann Löschwasserversorgung und -bedarf ausweisen – besonders Industrie, Lager, Sonderbauten mit erhöhtem Risiko.",
          "Feuerwehrplanung: ausreichend Druck und Menge – öffentliches Netz oder Löschwasserbehälter.",
          "Grenzfall ja: Chemielager, Konzept mit Löschwassermenge, Rückhaltebecken für Löschwasser, LAU-Schnittstelle. Grenzfall nein: Löschwasser nur „vom Hydranten“ ohne Nachweis bei Hochrisiko-Lager.",
        ],
      },
      {
        id: "versorgung",
        title: "Versorgung und Hydranten",
        paragraphs: [
          "Öffentliche Versorgung: Hydrantenreichweite, Druck – Abstimmung mit Feuerwehr.",
          "Eigene Behälter/Pumpen bei unzureichender Versorgung.",
          "[Feuerwehrzufahrt](/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw) für TLF-Zugang.",
        ],
      },
      {
        id: "rueckhalt",
        title: "Rückhalteanlagen",
        paragraphs: [
          "Löschwasser mit Gefahrstoffen: Rückhalt vor Einleitung – LAU, wassergefährdende Stoffe.",
          "Dimensionierung im Konzept mit Mengenabschätzung.",
          "Verknüpfung [Wassergefährdende Stoffe](/ratgeber/wassergefaehrdende-stoffe-lager-lau-nrw).",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb und Wartung",
        paragraphs: [
          "Rückhaltebecken freihalten, Abpumpung im Einsatzfall planen.",
          "Dokumentation in Betriebsanweisung und BSO.",
          "Umbau Lager: Konzept und Rückhalt neu bewerten.",
        ],
      },
      {
        id: "sonderbau",
        title: "Sonderbau und Industrie",
        paragraphs: [
          "Garagen, Verkaufsstätten, Produktion: unterschiedliche Löschwasserlogik.",
          "[Mittelgroße Garagen](/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw) eigene Regeln.",
          "Kraftstofflager: zusätzliche Anforderungen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst Löschwasser/Rückhalt in Konzepten zusammen. LAU-Genehmigung und Gewässerschutz sind parallel – Fachplaner Wasser/Brandschutz.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw", label: "Feuerwehrzufahrt" },
      { href: "/ratgeber/wassergefaehrdende-stoffe-lager-lau-nrw", label: "Wassergefährdende Stoffe" },
      { href: "/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw", label: "Garagen" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzeptpflicht" },
    ],
    faq: [
      {
        question: "Ist Löschwasser immer im Konzept?",
        answer:
          "Bei relevantem Risiko und Sonderbau häufig – nicht jedes Büro.",
      },
      {
        question: "Was ist eine Rückhalteanlage?",
        answer:
          "Auffang von Löschwasser/Kontaminanten vor Gewässer/Erdreich.",
      },
      {
        question: "Wer dimensioniert?",
        answer:
          "Brandschutz- und Fachplaner mit LAU/Industrie-Know-how.",
      },
      {
        question: "Reicht öffentlicher Hydrant?",
        answer:
          "Nachweis Druck/Menge/Reichweite – bei Mangel Ersatzlösung.",
      },
      {
        question: "LAU immer nötig?",
        answer:
          "Bei wassergefährdenden Stoffen und Einleitung – parallel LAU-Verfahren.",
      },
      {
        question: "Garage Tiefgarage?",
        answer:
          "SBauVO Garagen plus Löschwasser im Konzept – siehe Garagen-Ratgeber.",
      },
    ],
  },
];
