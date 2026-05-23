/**
 * Batch 2 – 13 Ratgeber-Artikel (Handlungsvorlagen, anonymisiert).
 * Wird in ratgeber.ts eingefügt.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BATCH2: RatgeberArticle[] = [
  {
    slug: "feuerschutztueren-bestand-ertuechtigung-koeln",
    title: "Feuerschutztüren im Bestand: prüfen, sanieren oder tauschen",
    excerpt:
      "T30-Türen aus den 1970er-Jahren – wann Ertüchtigung reicht, typische Mängel und was Gutachter prüfen.",
    metaTitle: "Feuerschutztüren Bestand | T30 sanieren Köln",
    metaDescription:
      "Feuerschutztüren im Bestand Köln/NRW: Prüfung, Ertüchtigung, Selbstschließung. Praxisratgeber von H&S+ – Beratung anfragen.",
    keywords: [
      "Feuerschutztür Bestand",
      "T30 Tür sanieren",
      "Feuerschutztür prüfen Köln",
      "Brandschutztür Ertüchtigung",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall: Bestandstüren in einem Technikgebäude",
        paragraphs: [
          "In einem abgeschlossenen Gutachten in Köln wurden **15 ein- und zweiflügelige Feuerschutzabschlüsse** (feuerhemmend, Bauzeit ca. 1973) in einem **technischen Betriebsgebäude** bewertet. Frage: Gleichwertiger Erhalt der Schutzwirkung – oder Austausch?",
          "Die Türen waren gekennzeichnet, wiesen aber **Gebrauchsspuren**, teils **fehlende Selbstschließung**, defekte Schließfolgen oder Bohrungen in den Türblättern auf.",
        ],
      },
      {
        id: "recht",
        title: "Was geprüft wird",
        list: [
          "Feuerwiderstand und Dichtheit im Bestand (damalige DIN-Normen vs. heutige Nutzung)",
          "Selbstschließung, Schließfolge, Feststellanlagen",
          "Leibung, Beschläge, Kennzeichnung (ASR A1.3)",
          "Ertüchtigung mit zugelassenen Systemen vs. kompletter Tausch",
        ],
        paragraphs: [
          "Ohne Nutzungsänderung kann Bestandsschutz greifen – **Verschlechterung** der Türen (offen stehend, beschädigt) ist dennoch zu beseitigen.",
        ],
      },
      {
        id: "massnahmen",
        title: "Typische Maßnahmen",
        paragraphs: [
          "Sanierung: Obertürschließer, Schließfolgeregelung, Reparatur von Beschädigungen, ggf. Füllungen nach Herstellerzulassung. Austausch: wenn Türblatt oder Zarge den Nachweis nicht mehr trägt.",
          "Dokumentation für Betrieb und Versicherer: Bestandsliste, Prüf- und Wartungsintervalle.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz" },
      { href: "/ratgeber/brandschutz-abnahme-nach-umbau-koeln", label: "Abnahme nach Umbau" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
    ],
    faq: [
      {
        question: "Müssen alle alten T30-Türen ausgetauscht werden?",
        answer:
          "Nein. Viele lassen sich ertüchtigen, wenn Blatt und Einbau den Nachweis tragen. Ein Gutachter oder Brandschutz-Ingenieur bewertet im Einzelfall.",
      },
      {
        question: "Wer darf Feuerschutztüren bewerten?",
        answer:
          "Brandschutz-Sachverständige, Prüfingenieure oder erfahrene Brandschutzplaner – abhängig vom Verfahren und Auftraggeber.",
      },
    ],
  },
  {
    slug: "brandschutz-abnahme-nach-umbau-koeln",
    title: "Brandschutz-Abnahme nach Umbau: typische Mängel",
    excerpt:
      "Nach Sanierung prüft oft ein Sachverständiger die Umsetzung des Konzepts – diese Mängel tauchen häufig auf.",
    metaTitle: "Brandschutz Abnahme Umbau | Köln",
    metaDescription:
      "Brandschutz-Abnahme nach Umbau in Köln: Türen, Wände, Pläne. Typische Mängel aus der Praxis – H&S+ begleitet Vorhaben.",
    keywords: [
      "Brandschutz Abnahme",
      "Brandschutz Umbau Köln",
      "Sachverständiger Brandschutz",
      "Brandschutz Mängel",
    ],
    sections: [
      {
        id: "fall",
        title: "Begehung nach Umbau – was passiert",
        paragraphs: [
          "Nach einem Umbau in Köln diente eine **Begehung** dazu, die **Umsetzung des Brandschutzkonzepts** stichprobenartig zu prüfen, bevor der Betrieb final freigegeben wird.",
        ],
      },
      {
        id: "maengel",
        title: "Häufige Feststellungen",
        paragraphs: [
          "Bei Abnahme-Begehungen tauchen wiederholt ähnliche Mängel auf – siehe Liste.",
          "Solche Punkte verzögern keine Genehmigung allein, blockieren aber Betrieb, Versicherung und behördliche Erwartungen.",
        ],
        list: [
          "Feuerschutzabschluss gekennzeichnet als T30, aber **nicht selbstschließend** oder beschädigt",
          "Wand mit **Glasbausteinen** statt geforderter feuerbeständiger Trennung – Nachweis fehlt",
          "Planabweichung, die brandschutztechnisch **unschädlich** sein kann – muss dokumentiert werden",
          "**Feuerwehrplan** oder Schlüsseldepot (FSD) noch nicht vorhanden",
          "**Flucht- und Rettungsplan** fehlt, obwohl Arbeitsstätten-Pflicht greift",
        ],
      },
      {
        id: "vorgehen",
        title: "So vermeiden Sie Nacharbeit",
        paragraphs: [
          "Empfohlene Schritte vor der finalen Freigabe:",
          "Eine Eilbegehung vor Investitionen hilft, Abnahme-Mängel zu reduzieren.",
        ],
        list: [
          "Abnahme-Termin früh mit Fachbauleitung oder SV planen",
          "Mängelliste abarbeiten vor Einzug",
          "Pläne und Kennzeichnung aktualisieren",
          "Schulung und BSO nicht vergessen",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln", label: "Eilbegehung vor Ort" },
      { href: "/ratgeber/fachbauleitung-brandschutz-baustelle-koeln", label: "Fachbauleitung Baustelle" },
      { href: "/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln", label: "Feuerwehr- & Fluchtpläne" },
    ],
    faq: [
      {
        question: "Ist eine Abnahme gesetzlich immer Pflicht?",
        answer:
          "Nicht immer formell, aber bei genehmigten Sonderbauten, BMA oder Versicherer-Auflagen oft vertraglich oder behördlich erwartet.",
      },
    ],
  },
  {
    slug: "brandschau-koeln-feuerwehr",
    title: "Brandschau in Köln: Ablauf und typische Themen",
    excerpt:
      "Die Feuerwehr prüft den Betrieb – was bei einer Brandschau besprochen wird und wie Sie sich vorbereiten.",
    metaTitle: "Brandschau Köln | Feuerwehr Brandschutz",
    metaDescription:
      "Brandschau in Köln: Ablauf, Mängel, Fristen. Was Betriebe wissen sollten – Ratgeber von H&S+ Brandschutz Köln.",
    keywords: [
      "Brandschau Köln",
      "Feuerwehr Brandschau",
      "Brandschutz Betrieb Köln",
      "Brandschau Mängel",
    ],
    sections: [
      {
        id: "was",
        title: "Was ist eine Brandschau?",
        paragraphs: [
          "Die **Brandschau** (über die zuständige Feuerwehr, in Köln die Berufsfeuerwehr) prüft, ob ein Betrieb den **betrieblichen und baulichen Brandschutz** im Alltag umsetzt – oft nach Anzeige, bei Sonderbauten oder nach Vorfällen.",
          "Sie ersetzt kein vollständiges Brandschutzkonzept für die Bauaufsicht, ergänzt aber die behördliche und betriebliche Sicht.",
        ],
      },
      {
        id: "themen",
        title: "Typische Prüfpunkte",
        paragraphs: [
          "Die Feuerwehr orientiert sich an Betrieb, Nutzung und vorliegenden Auflagen – diese Punkte werden häufig angesprochen:",
        ],
        list: [
          "Flucht- und Rettungswege frei, gekennzeichnet, beleuchtet",
          "Feuerlöscher: Anzahl, Standort, **Prüfplakette**",
          "Türen entlang Fluchtwege: schließbar, nicht verriegelt",
          "Brandmeldeanlage, Alarmierung, Unterweisungen",
          "Feuerwehrplan, Zufahrt, Hydranten (soweit relevant)",
          "Heißarbeiten, Lagerung brennbarer Stoffe, elektrische Anlagen",
        ],
      },
      {
        id: "unterschied",
        title: "Brandschau vs. Bauaufsicht vs. Zwischenbescheid",
        paragraphs: [
          "Die **Bauaufsicht** entscheidet über Genehmigungen und bauliche Nachweise. Die **Feuerwehr** fokussiert Betrieb und Schutz der Einsatzkräfte. Ein **Zwischenbescheid** der Bauaufsicht betrifft Genehmigungsmängel – siehe eigenen Ratgeber.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid Bauaufsicht" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr vor dem Bauamt" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung Köln" },
    ],
    faq: [
      {
        question: "Muss ich Mängel aus der Brandschau sofort beheben?",
        answer:
          "Oft mit Frist – ernst nehmen, dokumentieren und fachlich umsetzen. Wiederholungsbesichtigung ist üblich.",
      },
    ],
  },
  {
    slug: "fachbauleitung-brandschutz-baustelle-koeln",
    title: "Fachbauleitung Brandschutz auf der Baustelle (§ 56 BauO NRW)",
    excerpt:
      "Bei genehmigungspflichtigen Bauen kontrolliert die Fachbauleitung Brandschutz die Umsetzung – Pflichten und typische Baustellenmängel.",
    metaTitle: "Fachbauleitung Brandschutz | Baustelle Köln",
    metaDescription:
      "Fachbauleitung Brandschutz § 56 BauO NRW: Pflicht, Bescheinigung, Abschottungen. Praxisratgeber für Köln – H&S+.",
    keywords: [
      "Fachbauleitung Brandschutz",
      "§ 56 BauO NRW Brandschutz",
      "Brandschutz Baustelle",
      "Abschottung Baustelle",
    ],
    sections: [
      {
        id: "pflicht",
        title: "Wann ist Fachbauleitung nötig?",
        paragraphs: [
          "Nach § 56 Abs. 2 BauO NRW kann die Bauaufsicht **Fachbauleitung** für bestimmte Gewerke anordnen – häufig **Brandschutz** bei Sonderbauten und technischen Anlagen.",
          "Am Ende steht oft eine **Bescheinigung** über stichprobenartige Kontrolle während der Ausführung.",
        ],
      },
      {
        id: "maengel",
        title: "Typische Feststellungen auf der Baustelle",
        list: [
          "Trennwände zu Technikräumen nicht **feuerbeständig** bis Rohdecke geführt",
          "Durchführungen ohne **zugelassene Abschottung** (Ü-Plakette fehlt)",
          "Leitungsführung in klassifizierten Wänden nicht nach MLAR/LAR",
          "Türen falsch eingebaut oder Beschädigung durch Folgegewerke",
        ],
        paragraphs: [
          "In einem Praxisfall (Neubau technische Anlage, Köln) wurden genau diese Punkte in der Anlage zur Bescheinigung festgehalten.",
        ],
      },
      {
        id: "ablauf",
        title: "Ablauf für Bauherr und Planer",
        paragraphs: [
          "Empfohlene Reihenfolge für genehmigungspflichtige Vorhaben:",
        ],
        list: [
          "Brandschutzkonzept und Genehmigung als Grundlage",
          "Fachbauleitung früh beauftragen, Termine mit Rohbau/TGA abstimmen",
          "Mängelliste vor Abnahme schließen",
          "Bescheinigung für Bauaufsicht und Dokumentation",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abschottungen-durchbrueche-baustelle-koeln", label: "Abschottungen & Durchbrüche" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
      { href: "/brandschutzkonzept-koeln", label: "Konzept erstellen lassen" },
    ],
    faq: [
      {
        question: "Wer darf Fachbauleitung Brandschutz führen?",
        answer:
          "Öffentlich bestellte oder anerkannte Sachverständige bzw. qualifizierte Brandschutz-Ingenieure – je nach Anforderung der Behörde.",
      },
    ],
  },
  {
    slug: "lagerhalle-buero-umnutzung-koeln",
    title: "Lagerhalle mit Büronutzung umbauen: Brandschutz in Köln",
    excerpt:
      "Umnutzung Gewerbehalle – Rettungswege, Nutzerzahl, Löschwasser und Sonderbau-Einordnung in Köln.",
    metaTitle: "Lagerhalle Büro Umnutzung | Brandschutz Köln",
    metaDescription:
      "Lagerhalle zu Büro umbauen in Köln: Brandschutzkonzept, Fluchtwege, Sonderbau. Ratgeber von H&S+ – Erstberatung.",
    keywords: [
      "Lagerhalle Umnutzung Köln",
      "Halle Büro Brandschutz",
      "Gewerbehalle Umbau Brandschutz",
      "Brandschutzkonzept Halle",
    ],
    sections: [
      {
        id: "fall",
        title: "Typisches Vorhaben",
        paragraphs: [
          "In Köln (Gewerbegebiet) war die **Umnutzung einer Lagerhalle mit Büroanteil** geplant. Ein vollständiges **Brandschutzkonzept** nach § 9 BauPrüfVO bildete Feuerwehrzufahrten, Löschwasser, Brandabschnitte, Rettungswege, Nutzerzahl und Alarmierung ab.",
        ],
      },
      {
        id: "schwerpunkte",
        title: "Brandschutz-Schwerpunkte",
        paragraphs: [
          "In Konzepten für Hallenumnutzungen werden typischerweise folgende Bereiche vertieft:",
        ],
        list: [
          "Einordnung: Gebäudeklasse, ggf. **Sonderbau** § 50 BauO NRW",
          "Zwei **Rettungswege** und Weglängen – oft kritisch in Hallen",
          "Löschwasser und Hydranten im Umfeld",
          "Rauch- und Wärmeabzug, Lüftung brandschutztechnisch",
          "Feuerlöscher, ggf. BMA, Flucht- und Feuerwehrpläne",
        ],
      },
      {
        id: "genehmigung",
        title: "Genehmigung und Betrieb",
        paragraphs: [
          "Umnutzung ist in der Regel **genehmigungspflichtig**. Frühzeitig Konzept und Bauantrag einplanen – Abstimmung mit Feuerwehr Köln bei Sonderbauten üblich.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Wann ein Konzept nötig ist" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
    ],
    faq: [
      {
        question: "Reicht eine Stellungnahme statt eines Konzepts?",
        answer:
          "Bei klarer Umnutzung und Sonderbau-Einordnung meist nicht – die Bauaufsicht verlangt ein vollständiges Konzept.",
      },
    ],
  },
  {
    slug: "sprinkler-rueckbau-bma-nutzungsaenderung-koeln",
    title: "Sprinkler zurückbauen bei Umnutzung: wann eine BMA nötig ist",
    excerpt:
      "Wenn Sprinkler entfallen – Brandschutzkonzept fort schreiben, BMA Vollschutz und Feuerlöscher neu bewerten.",
    metaTitle: "Sprinkler Rückbau Umnutzung | BMA Köln",
    metaDescription:
      "Sprinkler stilllegen bei Umnutzung: BMA, Konzept-Fortschreibung, Feuerwehr Köln. Praxisratgeber H&S+.",
    keywords: [
      "Sprinkler Rückbau",
      "Sprinkler stilllegen Umnutzung",
      "BMA statt Sprinkler",
      "Brandschutz Nutzungsänderung",
    ],
    sections: [
      {
        id: "fall",
        title: "Praxisfall: Produktion wird IT-Fläche",
        paragraphs: [
          "In einem abgeschlossenen Projekt sollte ein **Druck-/Technikbereich** zu **IT- und Montagefläche** umgenutzt werden. Die **Sprinkleranlage** im betroffenen Brandabschnitt sollte **zurückgebaut** werden.",
          "Die Fortschreibung des Brandschutzkonzepts prüfte, ob der Schutz durch **automatische Brandmelder (BMA Vollschutz)** mit Aufschaltung zur Feuerwehr Köln und angepasste Feuerlöscher ausreicht.",
        ],
      },
      {
        id: "massnahmen",
        title: "Typische Ersatz- und Begleitmaßnahmen",
        paragraphs: [
          "Wenn Sprinkler entfallen, sind Ersatzmaßnahmen im Konzept nachzuweisen:",
          "Sprinkler-Rückbau ohne Konzept-Fortschreibung ist riskant – Versicherer und Bauaufsicht erwarten einen nachvollziehbaren Ausgleich.",
        ],
        list: [
          "BMA Kategorie 1 (Vollschutz), Handmelder an Fluchtwegen",
          "Lüftung mit Brandschutzklappen, Ansteuerung über BMA",
          "Feuerlöscher nach ASR A2.2 (z. B. erhöhte LE-Zahl für die Fläche)",
          "Zwei Rettungswege, max. ca. 35 m Weglänge im betroffenen Abschnitt",
          "Feuerwehrpläne fortschreiben, PrüfVO für BMA beachten",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw", label: "Sprinkler & Trockenbau" },
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung Büro" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept & Stellungnahme" },
    ],
    faq: [
      {
        question: "Darf ich Sprinkler einfach abschalten?",
        answer:
          "Nein. Nur mit behördlich anerkanntem Konzept/Fortschreibung und technischer Stilllegung durch Fachfirma.",
      },
    ],
  },
  {
    slug: "kraftstoff-lagerung-halle-garage-brandschutz",
    title: "Diesel und Kraftstoff in Halle oder Garage: Brandschutz",
    excerpt:
      "Tank auf Fahrzeug, Kanister oder Technik – SBauVO, TRGS und betriebliche Regeln im Überblick.",
    metaTitle: "Diesel Lagerung Halle | Brandschutz Garage",
    metaDescription:
      "Kraftstoff in Halle/Garage: Diesel, TRGS 510, Feuerlöscher. Brandschutz-Ratgeber für Köln/NRW – H&S+.",
    keywords: [
      "Diesel Lagerung Halle",
      "Kraftstoff Garage Brandschutz",
      "Tankfahrzeug Halle",
      "TRGS 510 Lagerung",
    ],
    sections: [
      {
        id: "fall",
        title: "Typische Fragestellung",
        paragraphs: [
          "Darf ein **Tankfahrzeug mit ca. 1.000 l Diesel** in einer **Wagenhalle** abgestellt werden? In einem Praxisfall wurde das unter **Garagenrecht (SBauVO NRW)** und **TRGS 510** geprüft.",
        ],
      },
      {
        id: "bewertung",
        title: "Bewertungslogik (vereinfacht)",
        list: [
          "Kraftstoff **im** Fahrzeug vs. lose Lagerung – unterschiedliche Anforderungen",
          "Ab **100 kg** Diesel: zusätzliche organisatorische Maßnahmen (TRGS 510)",
          "Belüftung, dichter Boden, Kennzeichnung, Rauchverbot",
          "Feuerlöscher und Fettbrand-Risiko an Technik getrennt betrachten",
        ],
        paragraphs: [
          "Ergebnis im Fall: Abstellung bis 1.000 l unter genannten Voraussetzungen zulässig – **Einzelfallentscheidung**, nicht pauschal übertragbar.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Feuerlöscher & Fettbrand" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/brandschutzberatung-koeln", label: "Beratung anfragen" },
    ],
    faq: [
      {
        question: "Gilt die 200-l-Regel für Kleingaragen?",
        answer:
          "Für lose Lagerung in Kleingaragen – nicht für Kraftstoff im Fahrzeugtank. Fachlich immer Einzelfall prüfen.",
      },
    ],
  },
  {
    slug: "abschottungen-durchbrueche-baustelle-koeln",
    title: "Abschottungen und Durchbrüche: Brandschutz auf der Baustelle",
    excerpt:
      "Jede Durchführung in einer klassifizierten Wand braucht Nachweis – typische Fehler und MLAR-Anforderungen.",
    metaTitle: "Abschottung Brandschutz | Durchbruch Köln",
    metaDescription:
      "Brandschutz-Abschottungen bei Durchbrüchen in Köln/NRW: Zulassung, Ü-Plakette, Baustelle. Ratgeber H&S+.",
    keywords: [
      "Abschottung Brandschutz",
      "Durchbruch feuerhemmend",
      "MLAR Abschottung",
      "Brandschutz Baustelle",
    ],
    sections: [
      {
        id: "warum",
        title: "Warum Abschottungen scheitern",
        paragraphs: [
          "Trockenbau und TGA erzeugen viele **Durchdringungen**. Ohne zugelassene Abschottung verliert die Wand ihre **Feuerwiderstandsklasse** – im Abnahme- und Versicherungsfall ein klassisches Problem.",
        ],
      },
      {
        id: "anforderungen",
        title: "Was erfüllt sein muss",
        paragraphs: [
          "Für jede Durchführung in einem klassifizierten Bauteil gelten mindestens:",
        ],
        list: [
          "Abschottung passend zur Wand-/Deckenklasse (z. B. F90)",
          "Allgemeine bauaufsichtliche Zulassung (Ü) oder Einzelfall",
          "Kennzeichnung der Abschottung, Dokumentation",
          "Leitungsführung nur im erforderlichen Mindestmaß",
          "Koordination mit Fachbauleitung Brandschutz",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/fachbauleitung-brandschutz-baustelle-koeln", label: "Fachbauleitung" },
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung Büro" },
      { href: "/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw", label: "Trockenbau & Sprinkler" },
    ],
    faq: [
      {
        question: "Reicht PU-Schaum für Kabel?",
        answer:
          "Nur mit passender Zulassung für die konkrete Konstruktion und Feuerwiderstandsklasse – niemals pauschal.",
      },
    ],
  },
  {
    slug: "loeschwasser-hydranten-gewerbe-koeln",
    title: "Löschwasser und Hydranten für Gewerbe und Industrie",
    excerpt:
      "Grundschutz, Objektschutz, Hydrantenabstände – was Betreibe in Köln einplanen sollten.",
    metaTitle: "Löschwasser Hydranten | Gewerbe Köln",
    metaDescription:
      "Löschwasser Versorgung Gewerbe Köln: Hydranten, DVGW W 405, Industrie. Ratgeber H&S+ Brandschutz.",
    keywords: [
      "Löschwasser Gewerbe",
      "Hydranten Köln",
      "Löschwasserversorgung BauO",
      "Brandschutz Industrie",
    ],
    sections: [
      {
        id: "grundlagen",
        title: "Anforderungen nach BauO NRW",
        paragraphs: [
          "§ 14 BauO NRW verlangt eine **ausreichende Löschwasserversorgung**. Für viele Gewerbeobjekte reicht der **öffentliche Hydranten-Grundschutz** (orientierend DVGW W 405: z. B. 96 m³/h über 2 h).",
          "Große Hallen oder Industrie können **höhere Mengen** oder **Objektschutz** (eigene Hydranten) erfordern.",
        ],
      },
      {
        id: "praxis",
        title: "Praxisbeispiele (anonym)",
        paragraphs: [
          "Orientierungswerte aus abgeschlossenen Projekten – im Einzelfall immer nachrechnen:",
          "Für kleine Gewerbebetriebe in Köln ist oft der **öffentliche Anschluss** entscheidend – im Konzept dokumentieren.",
        ],
        list: [
          "Campus/Industrie: mehrere Hydranten im 300-m-Umfeld, 96 m³/h bestätigt",
          "Papier/Industrie: 192 m³/h über 2 h für große Brandabschnitte – Einzelfall",
          "Nachweis in Konzept und Abstimmung mit Versorger/Feuerwehr",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag & Unterlagen" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept" },
    ],
    faq: [
      {
        question: "Muss jede Halle eigene Hydranten haben?",
        answer:
          "Nicht immer. Abhängig von Größe, Nutzung und öffentlicher Versorgung – im Brandschutzkonzept nachweisen.",
      },
    ],
  },
  {
    slug: "feuerwehrplan-fluchtplaene-pflicht-koeln",
    title: "Feuerwehrplan, FSD und Fluchtpläne: wann sie Pflicht sind",
    excerpt:
      "DIN 14095, ASR A2.3, Schlüsseldepot – welche Pläne Betriebe vorhalten und aushängen müssen.",
    metaTitle: "Feuerwehrplan Fluchtplan | Pflicht Köln",
    metaDescription:
      "Feuerwehrplan DIN 14095, Fluchtplan ASR, FSD in Köln. Wann Pflicht – Ratgeber H&S+ für Gewerbe.",
    keywords: [
      "Feuerwehrplan Pflicht",
      "Fluchtplan Pflicht",
      "DIN 14095 Feuerwehrplan",
      "Flucht- und Rettungsplan",
    ],
    sections: [
      {
        id: "arten",
        title: "Welche Pläne es gibt",
        paragraphs: [
          "Betriebe sollten diese Planarten unterscheiden und aktuell halten:",
        ],
        list: [
          "**Flucht- und Rettungspläne** (ASR A1.3/A2.3) – für Beschäftigte, aushängen",
          "**Feuerwehrpläne** nach DIN 14095 – für Einsatzkräfte, Abstimmung Feuerwehr",
          "**Feuerwehr-Schlüsseldepot (FSD)** – Zugang im Einsatzfall",
          "Betriebsinterne Brandschutzordnung (Teil A/B)",
        ],
      },
      {
        id: "wann",
        title: "Wann Aktualisierung nötig ist",
        paragraphs: [
          "Nach **Umbau**, geänderter Raumaufteilung, neuer BMA oder geänderten Fluchtwegen sind Pläne fortzuschreiben. In einem Abnahmefall fehlten Feuerwehrplan und FSD trotz Konzept – häufiger Mangel.",
          "Teilsanierungen in Bürogebäuden: Pläne mit **Personenzahl je Einzugsgebiet** und Fluchtwegbreiten abgleichen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne aktualisieren" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Fluchtwege BauO" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung" },
    ],
    faq: [
      {
        question: "Erstellt die Feuerwehr Köln unsere Pläne?",
        answer:
          "Fluchtpläne erstellt der Betrieb/Fachplaner. Feuerwehrpläne werden mit der Feuerwehr abgestimmt; Erstellung durch Fachkraft.",
      },
    ],
  },
  {
    slug: "praxis-umbau-brandschutz-koeln",
    title: "Arzt- und Bildgebungspraxis umbauen: Brandschutz",
    excerpt:
      "Umbau mit MR/Kernspin, Wartezonen – Sonderbau, Abstände zum Krankenhaus und Abweichungen.",
    metaTitle: "Praxis Umbau Brandschutz | Köln",
    metaDescription:
      "Praxis/Röntgen Umbau Brandschutz Köln: Sonderbau, Konzept, Abstände. Ratgeber H&S+ – Beratung.",
    keywords: [
      "Praxis Umbau Brandschutz",
      "Röntgenpraxis Brandschutz",
      "Arztpraxis Brandschutz Köln",
      "Brandschutzkonzept Praxis",
    ],
    sections: [
      {
        id: "fall",
        title: "Typisches Vorhaben",
        paragraphs: [
          "Ein **Bildgebungs-/Röntgenbereich** sollte umgebaut werden: neue **MR-Kabine**, Wartezone, Anmeldung. Das Gebäude stand in **Nähe zu einem Klinikbau** – Abstände und Verbindungen brandschutzrelevant.",
        ],
      },
      {
        id: "konzept",
        title: "Inhalt eines Praxis-Konzepts",
        paragraphs: [
          "Ein vollständiges Konzept für Praxisumbauten umfasst unter anderem die Punkte in der Liste.",
          "Ergänzt den Ratgeber zum Zusammenlegen von Praxen – hier Fokus Umbau/Erweiterung.",
        ],
        list: [
          "Brandrisikoanalyse, Brandlasten Medizintechnik",
          "Rettungswege, Nutzerzahl, ggf. zweiter Rettungsweg",
          "Abweichungsanträge § 69 BauO NRW bei Bedarf",
          "BMA, Löschwasser, Feuerwehrpläne",
          "Abstimmung mit Krankenhausträger und Bauaufsicht",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/arztpraxen-zusammenlegen-brandschutz-koeln", label: "Praxen zusammenlegen" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
      { href: "/brandschutzkonzept-koeln", label: "Konzept Köln" },
    ],
    faq: [
      {
        question: "Ist jede Praxis ein Sonderbau?",
        answer:
          "Oft ja oder mit erhöhten Anforderungen – abhängig von Größe, Nutzung und Patientenaufenthalt.",
      },
    ],
  },
  {
    slug: "technische-betriebsgebaeude-brandschutz-nrw",
    title: "Technische Betriebsgebäude: Brandschutz und Sonderbau",
    excerpt:
      "Trafostation, Notstrom, NEA – GK 1, keine Aufenthaltsräume, Diesel-Lagerung und Feuerwehrzufahrt.",
    metaTitle: "Technische Betriebsgebäude | Brandschutz",
    metaDescription:
      "Brandschutz technische Betriebsgebäude NRW: NEA, Trafostation, Sonderbau. Ratgeber H&S+.",
    keywords: [
      "Technisches Betriebsgebäude Brandschutz",
      "Trafostation Brandschutz",
      "Netzersatzanlage Brandschutz",
      "Sonderbau Technik",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Baurechtliche Einordnung",
        paragraphs: [
          "Eingeschossige Gebäude **ohne Aufenthaltsräume** (nur Wartung, wenige Personen) werden oft **GK 1** zugeordnet, zugleich als **Sonderbau** mit angepassten Anforderungen.",
          "Typisch: **Trafostation**, **Notstrom-Diesel**, unterirdische **Kraftstofftanks** (doppelwandig, Lecküberwachung).",
        ],
      },
      {
        id: "massnahmen",
        title: "Typische Konzept-Inhalte",
        paragraphs: [
          "In technischen Betriebsgebäuden werden häufig folgende Maßnahmen beschrieben:",
        ],
        list: [
          "Feuerwehrzufahrt und Löschwasser (Campus/Hydranten)",
          "Innere Trennung F90 zwischen Aggregat- und Schaltraum",
          "Natürliche Lüftung, keine BMA wenn nicht erforderlich",
          "Feuerlöscher nach ASR A2.2, Blitzschutz",
          "Feuerwehrplan fort schreiben, BSO für Wartung",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/loeschwasser-hydranten-gewerbe-koeln", label: "Löschwasser" },
    ],
    faq: [
      {
        question: "Brauchen NEA-Container immer ein vollständiges BSK?",
        answer:
          "Bei genehmigungspflichtigem Neubau ja – Umfang richtet sich nach Sonderbau und Technik.",
      },
    ],
  },
  {
    slug: "bauantrag-brandschutz-unterlagen-koeln",
    title: "Bauantrag und Brandschutz: Unterlagen-Checkliste für Köln",
    excerpt:
      "Was neben Plänen ins Genehmigungsverfahren gehört – Konzept, Betriebsbeschreibung, Visualisierung.",
    metaTitle: "Bauantrag Brandschutz Köln | Unterlagen",
    metaDescription:
      "Brandschutz Unterlagen Bauantrag Köln: Konzept, Anlagen I/7/I/8, Löschwasser. Checkliste H&S+.",
    keywords: [
      "Bauantrag Brandschutz Köln",
      "Brandschutz Unterlagen",
      "Brandschutzkonzept einreichen",
      "Bauaufsicht Köln",
    ],
    sections: [
      {
        id: "paket",
        title: "Typisches Unterlagenpaket",
        paragraphs: [
          "Für genehmigungspflichtige Vorhaben in Köln gehören in der Regel dazu:",
        ],
        list: [
          "Brandschutzkonzept nach § 9 BauPrüfVO NRW",
          "Brandschutzpläne / Visualisierung (Geschosse, Schnitte)",
          "Baubeschreibung, Betriebsbeschreibung gewerbliche Anlage",
          "Nachweis Löschwasserversorgung",
          "Ggf. Nachweise Abschottungen, BMA, Sprinkler",
          "Protokolle Feuerwehr/Bauamt (Planungsgespräche)",
        ],
      },
      {
        id: "ablauf",
        title: "Ablauf in Köln",
        paragraphs: [
          "Bauaufsichtsamt Köln prüft mit ggf. **Fachstelle Brandschutz** und Feuerwehr. Vollständigkeit spart Monate – siehe auch Ratgeber Zwischenbescheid.",
          "Vereinfachtes Verfahren § 64 BauO NRW nur bei klarer Einordnung (z. B. kleine Gewerbenutzung).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bauaufsicht-unterlagen-koeln", label: "Bauaufsicht Köln" },
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid" },
      { href: "/brandschutzkonzept-koeln", label: "Konzept erstellen" },
    ],
    faq: [
      {
        question: "Reicht nur eine Stellungnahme zum Bauantrag?",
        answer:
          "Bei genehmigungspflichtigen Sonderbauten in der Regel nein – vollständiges Konzept erforderlich.",
      },
    ],
  },
];
