/**
 * Batch 2 – 13 Ratgeber-Artikel (Handlungsvorlagen, anonymisiert).
 * Wird in ratgeber.ts eingefügt.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BATCH2: RatgeberArticle[] = [
  {
    slug: "feuerschutztueren-bestand-ertuechtigung-koeln",
    title: "Feuerschutztüren im Bestand: prüfen, ertüchtigen oder tauschen",
    excerpt:
      "T30/T30-RS aus den 1970ern: Selbstschließung, DIBt-Zulassung, Ertüchtigung vs. Austausch – aus einem Gutachten im Technikgebäude.",
    metaTitle: "Feuerschutztüren Bestand | T30 Köln",
    metaDescription:
      "Feuerschutztüren Bestand NRW: Ertüchtigung, Selbstschließung, DIBt. Rauchschutztüren T30-RS – Ratgeber H&S+.",
    keywords: [
      "Feuerschutztür Bestand",
      "T30 RS Ertüchtigung",
      "Brandschutzabschluss prüfen",
      "Feuerschutztür Selbstschließung",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall: Bestandstüren (GK 5, ca. 1973)",
        paragraphs: [
          "In einem abgeschlossenen Gutachten wurden feuerhemmende Brandschutzabschlüsse (T30, Bauzeit ca. 1973) in einem Technikgebäude der Gebäudeklasse 5 bewertet. Frage: Gleichwertiger Erhalt der Schutzwirkung – oder Austausch?",
          "Feststellungen: Kennzeichnung vorhanden, aber fehlende oder defekte Selbstschließung, aufgekeilte Flügel, beschädigte Schließfolgen, Bohrungen im Türblatt, Feststellanlagen außer Betrieb.",
        ],
      },
      {
        id: "begriffe",
        title: "T30, T30-RS und Rauchschutzabschluss",
        paragraphs: [
          "Feuerhemmend (F30/T30): begrenzt Brandübertragung über die Tür. Rauchschutztür (T30-RS): zusätzlich Rauchdichtheit im Brandfall – typisch in notwendigen Fluren und Treppenräumen (§ 36 BauO NRW).",
          "Im Bestand sind oft ältere DIN-Nachweise maßgeblich; Ertüchtigung muss zur ursprünglichen Zulassung (abZ/aBG) und zum Wandtyp passen – „ähnlicher“ Einbau ohne Nachweis hebt die Zulassung auf (DIBt-Hinweise).",
        ],
      },
      {
        id: "pruefung",
        title: "Was Gutachter und Betrieb prüfen",
        list: [
          "Feuerwiderstand und Rauchdichtheit: Blatt, Zarge, Einbau in klassifizierter Wand",
          "Selbstschließung und Schließfolge (ohne Fremdenergie bis Einrasten, EN 16034)",
          "Feststellanlagen: nur zulässig nach Hersteller/DIBt, nicht dauerhaft offen",
          "Leibung, Beschläge, Verglasung: Änderungen nur mit Zulassungsnachweis",
          "Kennzeichnung und Zulassungsplakette, Betriebskontrolle dokumentiert",
        ],
        paragraphs: [
          "Betriebsmängel (Tür keilt, Automatik aus) sind sofort zu beseitigen – unabhängig von Bestandsschutz § 59 BauO NRW.",
        ],
      },
      {
        id: "ertuechtigung",
        title: "Ertüchtigung vs. Austausch",
        paragraphs: [
          "Ertüchtigung: Obertürschließer, Schließfolge, Reparatur, zugelassene Füllungen nach Herstellerunterlage – wenn Blatt und Zarge den Nachweis tragen. Zulässige Änderungen am Produkt nur mit DIBt/Hersteller-Freigabe (ab 2010 strenger Katalog).",
          "Austausch: bei nicht mehr nachweisbarem Blatt, falscher Wandanschluss, oder wenn Ertüchtigung wirtschaftlich nicht sinnvoll. Neubau-Türen mit CE-Kennzeichnung und dokumentiertem Einbau.",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb und Kontrolle",
        paragraphs: [
          "Monatliche Sichtkontrolle (Tore/Klappen analog): schließt die Tür, keine Beschädigung, keine Haltekräfte im Offen-Zustand. Jährliche fachliche Prüfung nach DIN 18095 für bestimmte Anlagen. Bestandsliste mit Standort, Klasse, Prüffristen für Versicherer und Abnahme.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung zu Genehmigung und Umbau",
        paragraphs: [
          "Nur Türertüchtigung ohne Nutzungsänderung: oft internes Gutachten, kein neues BSK. Neue Öffnungen in Brandwänden oder geänderte Fluchtwege: Genehmigung und brandschutztechnischer Nachweis – siehe Umbau-Ratgeber.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "In der Praxis scheitern Ertüchtigungen oft an Betrieb und Nachrüstung – nicht am Blatt allein:",
        ],
        list: [
          "Tür dauerhaft offen oder aufgekeilt",
          "Nachgerüsteter Türschließer ohne Zulassung",
          "Bohrungen für Kabel ohne Herstellerfreigabe",
          "Feststellanlage deaktiviert",
          "Keine Dokumentation der Kontrollen",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Einzelfallbewertung – dieser Ratgeber ersetzt kein Gutachten und keine behördliche Festlegung. Bei Sonderbauten und Versammlungsstätten können strengere Anforderungen gelten.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz § 59" },
      { href: "/ratgeber/brandschutz-abnahme-nach-umbau-koeln", label: "Abnahme nach Umbau" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flure & T30-RS" },
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung" },
    ],
    faq: [
      {
        question: "Müssen alle alten T30-Türen ausgetauscht werden?",
        answer:
          "Nein. Viele lassen sich ertüchtigen, wenn Blatt, Zarge und Einbau den Nachweis tragen und Änderungen zulässig sind.",
      },
      {
        question: "Darf ich eine Feuerschutztür offen halten?",
        answer:
          "Nein im Betrieb – Selbstschließung muss funktionieren. Feststellanlagen nur nach Zulassung und nicht dauerhaft blockiert.",
      },
      {
        question: "Wer darf Feuerschutztüren bewerten?",
        answer:
          "Brandschutz-Sachverständige, Prüfingenieure oder qualifizierte Brandschutzplaner – je nach Auftrag und Verfahren.",
      },
      {
        question: "Was ist der Unterschied T30 und T30-RS?",
        answer:
          "T30-RS ist rauchdicht im Brandfall – Pflicht an vielen Fluchtwegen. Reines T30 reicht dort nicht.",
      },
      {
        question: "Brauche ich eine Baugenehmigung für Ertüchtigung?",
        answer:
          "Bei reinem Instandsetzen ohne baulische Änderung oft nein – bei neuen Durchbrüchen oder Nutzungsänderung ja.",
      },
      {
        question: "Was ist mit Feststellanlagen (Haltemagneten)?",
        answer:
          "Nur zulässig, wenn Hersteller und DIBt/Zulassung es für genau diese Tür erlauben – nicht dauerhaft deaktiviert. Im Brandfall muss schließen.",
      },
    ],
  },
  {
    slug: "brandschutz-abnahme-nach-umbau-koeln",
    title: "Brandschutz-Abnahme nach Umbau: typische Mängel",
    excerpt:
      "SV-Begehung nach Sanierung: Türen, Wände, FSD, Pläne – was blockiert Betrieb und Versicherung trotz Genehmigung.",
    metaTitle: "Brandschutz Abnahme Umbau | Köln",
    metaDescription:
      "Brandschutz-Abnahme nach Umbau: typische Mängel, Fachbauleitung, Pläne. Ratgeber H&S+ NRW.",
    keywords: [
      "Brandschutz Abnahme Umbau",
      "Sachverständiger Brandschutz Begehung",
      "Brandschutz Mängel Abnahme",
      "Bauzustandsbesichtigung Brandschutz",
    ],
    sections: [
      {
        id: "fall",
        title: "Was ist die Brandschutz-Abnahme?",
        paragraphs: [
          "Nach genehmigtem Umbau prüft oft ein Sachverständiger oder die Fachbauleitung Brandschutz stichprobenartig, ob das genehmigte Konzept umgesetzt ist – vor endgültiger Betriebsfreigabe, Versicherung oder Bauzustandsbesichtigung.",
          "Das ist nicht dasselbe wie die bauordnungsrechtliche Abnahme der Bauaufsicht, aber in der Praxis gleichzeitig relevant.",
        ],
      },
      {
        id: "maengel",
        title: "Häufige Feststellungen",
        paragraphs: [
          "Diese Mängel wiederholen sich in Abnahme-Begehungen – sie blockieren oft Betrieb und Versicherung, auch wenn die Baugenehmigung existiert:",
        ],
        list: [
          "Feuerschutzabschluss T30/T30-RS: nicht selbstschließend, beschädigt, verriegelt",
          "Wand F30 statt geforderter F90 – Nachweis oder Konzeptanpassung fehlt",
          "Planabweichung ohne dokumentierte brandschutztechnische Bewertung",
          "Feuerwehr-Schlüsseldepot (FSD) fehlt trotz Konzept",
          "Flucht- und Rettungspläne ASR A2.3 fehlen oder veraltet",
          "Feuerwehrplan DIN 14095 nicht fortgeschrieben",
          "Abschottungen ohne Ü-Kennzeichnung oder Dokumentation",
        ],
      },
      {
        id: "vorgehen",
        title: "Vor der Abnahme vorbereiten",
        list: [
          "Abnahme-Termin früh mit Fachbauleitung/SV und Konzeptautor",
          "Mängelliste aus Baustelle vor Einzug schließen",
          "Pläne, BMA-Abnahme, FSD, BSO aktualisieren",
          "Türen: Funktionsprüfung Selbstschließung",
          "Unterweisung und Gefährdungsbeurteilung dokumentieren",
        ],
        paragraphs: [
          "Eine Eilbegehung vor großen Investitionen reduziert Überraschungen – siehe verlinkter Ratgeber.",
        ],
      },
      {
        id: "rollen",
        title: "Wer ist wofür zuständig?",
        paragraphs: [
          "Fachbauleitung Brandschutz (§ 56 BauO NRW): stichprobenartige Kontrolle während der Ausführung, Bescheinigung. Sachverständiger: Abnahme gegenüber Konzept/Genehmigung. Bauaufsicht: formale Bauzustandsbesichtigung. Feuerwehr: Brandschau im Betrieb – separater Termin.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Diese Punkte verzögern die Nutzungsaufnahme oder führen zu Nachforderungen der Bauaufsicht:",
        ],
        list: [
          "Abnahme erst nach Einzug geplant",
          "Konzept liegt, Baustelle weicht ab – keine Nachträge",
          "Nur bauordnungsrechtliche Pläne, keine ASR-Fluchtpläne",
          "FSD „kommt später“",
        ],
      },
      {
        id: "nachweise",
        title: "Welche Unterlagen zur Abnahme mitbringen",
        paragraphs: [
          "Der Sachverständige vergleicht Ist mit Genehmigung und Konzept – nicht mit dem Bauantrag allein. Üblich sind: genehmigte Pläne und Konzept (einheitlicher Stand), BMA-Abnahmeprotokoll, Übersicht Abschottungen mit Plaketten, Protokolle Fachbauleitung, aktualisierte Feuerwehrpläne DIN 14095, ASR A2.3-Fluchtpläne, FSD-Montage, BSO Teil A/B.",
          "Fehlt ein Dokument, wird die Abnahme verschoben – auch wenn die Baugenehmigung schon erteilt ist.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Pflicht zur Abnahme hängt von Genehmigung, Sonderbau, Versicherer und Vertrag ab – nicht pauschal gesetzlich für jeden Umbau.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/fachbauleitung-brandschutz-baustelle-koeln", label: "Fachbauleitung" },
      { href: "/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln", label: "Feuerschutztüren" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne aktualisieren" },
      { href: "/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln", label: "Eilbegehung" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Genehmigung" },
    ],
    faq: [
      {
        question: "Ist eine Abnahme gesetzlich immer Pflicht?",
        answer:
          "Nicht für jeden Umbau formell. Bei Sonderbauten, BMA, Fachbauleitung-Anordnung oder Versicherer oft verbindlich erwartet.",
      },
      {
        question: "Was ist der Unterschied zur Brandschau?",
        answer:
          "Abnahme: Umsetzung des genehmigten Konzepts nach Bau. Brandschau: laufender Betrieb durch Feuerwehr.",
      },
      {
        question: "Reicht die Baugenehmigung für die Abnahme?",
        answer:
          "Nein. Die Genehmigung ist Soll – die Abnahme prüft Ist-Umsetzung inkl. Pläne und Türen.",
      },
      {
        question: "Wer behebt festgestellte Mängel?",
        answer:
          "Bauherr/Betreiber mit Handwerkern und Brandschutzplaner – Mängelliste mit Fristen abarbeiten.",
      },
      {
        question: "Brauche ich ASR-Fluchtpläne zur SV-Abnahme?",
        answer:
          "Zur bauordnungsrechtlichen Abnahme: Konzept und genehmigte Pläne. Für den Betrieb und Versicherer zusätzlich oft ASR A2.3-Pläne – beide Ebenen vor Nutzungsaufnahme abstimmen.",
      },
      {
        question: "Was, wenn die Wand nur F30 statt F90 ist?",
        answer:
          "Entweder bauliche Nachbesserung oder brandschutztechnische Bewertung/Konzeptanpassung mit Begründung – ohne Dokument kein Abschluss der Abnahme.",
      },
    ],
  },
  {
    slug: "brandschau-koeln-feuerwehr",
    title: "Brandschau: Ablauf und Abgrenzung (Feuerwehr)",
    excerpt:
      "Was die Berufsfeuerwehr bei der Brandschau prüft – Unterschied zu Bauaufsicht, Eilbegehung und Abnahme.",
    metaTitle: "Brandschau Köln | Feuerwehr",
    metaDescription:
      "Brandschau: Prüfpunkte, Fristen, FSD, Feuerwehrplan. Unterschied Bauaufsicht – Ratgeber H&S+.",
    keywords: [
      "Brandschau Ablauf",
      "Feuerwehr Brandschau Betrieb",
      "Brandschau Mängel",
      "Brandschau vs Bauaufsicht",
    ],
    sections: [
      {
        id: "was",
        title: "Was ist eine Brandschau?",
        paragraphs: [
          "Die Brandschau ist eine betriebliche Kontrolle durch die zuständige Feuerwehr (in Köln die Berufsfeuerwehr). Sie prüft, ob Fluchtwege, Löscher, Türen, BMA, Pläne und Zufahrten im Alltag funktionieren – nicht ob der Bauantrag vollständig war.",
          "Anlässe: Anzeige neuer Nutzung, Sonderbau, Wiederholung nach Mängeln, nach Vorfällen oder im Rahmen von Auflagen.",
        ],
      },
      {
        id: "themen",
        title: "Typische Prüfpunkte",
        paragraphs: [
          "Orientierung an Betrieb, Nutzung und vorliegenden Auflagen (Konzept, Genehmigung, frühere Mängel):",
        ],
        list: [
          "Flucht- und Rettungswege frei, gekennzeichnet, beleuchtet",
          "Feuerlöscher: Anzahl, Standort, Prüfplakette ASR A2.2",
          "Türen in Fluchtwegen: T30-RS, selbstschließend, nicht verriegelt",
          "BMA: Betrieb, Alarmierung, Unterweisung",
          "Feuerwehrplan DIN 14095, FSD, Zufahrt, Hydranten",
          "Heißarbeiten, brennbare Lager, Elektro",
        ],
      },
      {
        id: "abgrenzung",
        title: "Brandschau vs. andere Prüfungen",
        list: [
          "Bauaufsicht: Genehmigung, baulicher Nachweis § 33 – nicht Brandschau",
          "Zwischenbescheid: fehlende Genehmigungsunterlagen",
          "Eilbegehung: Arbeitgeber-Ist-Check vor Investition – kein Behördenakt",
          "Abnahme SV: Konzept-Umsetzung nach Umbau",
          "BG/SiFa: Arbeitsschutz ASR – parallel, nicht identisch",
        ],
        paragraphs: [
          "Drei Ebenen aus Ratgeber Pläne: BauO-Nachweis, Feuerwehrplan DIN 14095, ASR A2.3-Fluchtpläne – Brandschau prüft vor allem Betrieb und Einsatzvoraussetzungen.",
        ],
      },
      {
        id: "vorbereitung",
        title: "Vorbereitung auf die Brandschau",
        paragraphs: [
          "Die Brandschau prüft den laufenden Betrieb – nicht die Baustelle. Vor dem Termin sollten Sie diese Punkte abarbeiten:",
        ],
        list: [
          "Feuerwehrplan und FSD aktuell und zugänglich",
          "Mängel aus letzter Schau dokumentiert und erledigt",
          "Fluchtwege freiräumen, Löscher prüfen lassen",
          "BSO Teil A, Unterweisungsnachweise bereithalten",
          "Ansprechpartner Brandschutz benennen",
        ],
      },
      {
        id: "nachgang",
        title: "Nach Mängeln und Fristen",
        paragraphs: [
          "Mängel werden mit Frist gesetzt – schriftlich beantworten, Umsetzung nachweisen, Wiederholungsbesichtigung einplanen. Ignorieren gefährdet Betriebserlaubnis und Versicherung.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: typische Brandschau-Mängel",
        paragraphs: [
          "In wiederkehrenden Schauen (Gastronomie, Gewerbe, Verwaltung) tauchen dieselben Punkte auf: Fluchtwege als Lager, Löscher abgelaufen oder verdeckt, BMA-Störung nicht dokumentiert, Feuerwehrplan veraltet nach Umbau, FSD nicht erreichbar, T30-RS aufgekeilt.",
          "Nach einem Restaurant-Umbau ohne Planfortschreibung wurde die Schau verschoben – obwohl die Nutzungsänderung genehmigt war. Vor Investition hilft eine Eilbegehung (Arbeitgeber), nicht die Brandschau.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Ablauf und Schwerpunkte können je nach Bezirk variieren. Dieser Ratgeber ersetzt keine behördliche Anordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr vor dem Bauamt" },
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid" },
      { href: "/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln", label: "Feuerwehrplan & FSD" },
      { href: "/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln", label: "Eilbegehung Betrieb" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung" },
    ],
    faq: [
      {
        question: "Muss ich Mängel sofort beheben?",
        answer:
          "Sicherheitsrelevante Mängel sofort; andere innerhalb der gesetzten Frist. Dokumentation der Maßnahmen.",
      },
      {
        question: "Erstellt die Feuerwehr unsere Pläne?",
        answer:
          "Nein. Feuerwehrpläne erstellt/stimmt der Betrieb mit Fachplaner ab. Fluchtpläne nach ASR A2.3 sind Arbeitsschutz.",
      },
      {
        question: "Ist Brandschau dasselbe wie Genehmigung?",
        answer:
          "Nein. Genehmigung ist Bauaufsicht vor dem Betrieb. Brandschau ist Kontrolle im laufenden Betrieb.",
      },
      {
        question: "Was, wenn wir kein Sonderbau sind?",
        answer:
          "Brandschau kann trotzdem stattfinden – z. B. bei Anzeige, Beschwerden oder großen Besucherzahlen.",
      },
      {
        question: "Muss die Feuerwehr unsere BMA abnehmen?",
        answer:
          "Die BMA wird durch Prüfsachverständigen nach VDE 0833 abgenommen. Die Brandschau prüft Betrieb, Störmeldungen, Unterweisung und ob Anlagen zum Konzept passen.",
      },
      {
        question: "Was ist der Unterschied zu einer Eilbegehung?",
        answer:
          "Eilbegehung: freiwilliger Ist-Check des Betreibers vor Umbau/Investition. Brandschau: behördliche/feuerwehrliche Kontrolle im laufenden Betrieb mit Fristen.",
      },
    ],
  },
  {
    slug: "fachbauleitung-brandschutz-baustelle-koeln",
    title: "Fachbauleitung Brandschutz auf der Baustelle (§ 56 BauO NRW)",
    excerpt:
      "Anordnung, Bescheinigung, typische Mängel (Wände bis Decke, Abschottungen) – aus Neubau technischer Anlage.",
    metaTitle: "Fachbauleitung Brandschutz | § 56",
    metaDescription:
      "Fachbauleitung Brandschutz § 56 BauO NRW: Pflicht, Bescheinigung, Abschottungen. Ratgeber H&S+ NRW.",
    keywords: [
      "Fachbauleitung Brandschutz",
      "§ 56 BauO NRW",
      "Brandschutz Baustelle Kontrolle",
      "Bescheinigung Fachbauleitung",
    ],
    sections: [
      {
        id: "pflicht",
        title: "Wann ordnet die Behörde Fachbauleitung an?",
        paragraphs: [
          "Nach § 56 Abs. 2 BauO NRW kann die Bauaufsicht für bestimmte Gewerke Fachbauleitung anordnen – bei Sonderbauten, komplexer TGA, BMA/Sprinkler oder wenn das genehmigte Konzept aufwendige brandschutztechnische Details enthält.",
          "Fachbauleitung Brandschutz ist nicht dasselbe wie der Entwurf des Konzepts: Sie kontrolliert stichprobenartig die Ausführung auf der Baustelle und bestätigt das schriftlich.",
        ],
      },
      {
        id: "aufgaben",
        title: "Aufgaben der Fachbauleitung Brandschutz",
        paragraphs: [
          "Die Fachbauleitung dokumentiert stichprobenartig, ob die genehmigte brandschutztechnische Lösung auf der Baustelle umgesetzt wird:",
        ],
        list: [
          "Abgleich Ausführung mit genehmigtem Konzept und Plänen",
          "Kontrolle Trennwände, Decken, Türen, Abschottungen",
          "Baustellenbegehungen zu kritischen Phasen (Rohbau, TGA-Einbau)",
          "Mängelliste an Bauherr und ausführende Firmen",
          "Bescheinigung über stichprobenartige Kontrolle für die Bauaufsicht",
        ],
      },
      {
        id: "maengel",
        title: "Typische Feststellungen (Praxisfall)",
        paragraphs: [
          "In einem Neubau einer technischen Anlage (NRW) wurden in der Bescheinigungsanlage u. a. festgehalten:",
        ],
        list: [
          "Trennwände zu Technikräumen nicht vollständig bis Rohdecke geführt",
          "Durchführungen ohne wirksame Abschottung (Ü-Plakette fehlt)",
          "Leitungen in klassifizierten Wänden nicht nach MLAR/LAR",
          "Brandschutztüren falsch montiert oder durch Folgegewerke beschädigt",
        ],
      },
      {
        id: "ablauf",
        title: "Ablauf für Bauherr und Planer",
        list: [
          "Genehmigung und Konzept als verbindliche Grundlage",
          "Fachbauleitung früh beauftragen, Termine mit Rohbau/TGA fixieren",
          "Abschottungen vor Verkleidung dokumentieren",
          "Mängelliste vor SV-Abnahme schließen",
          "Bescheinigung an Bauaufsicht übergeben",
        ],
        paragraphs: [
          "Ohne frühe Fachbauleitung werden Abschottungsmängel oft erst bei Abnahme sichtbar – teure Nachbohrungen.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Fachbauleitung vs. Konzeptautor",
        paragraphs: [
          "Konzeptautor plant und nachweist. Fachbauleitung prüft Umsetzung. Doppelrolle ist möglich, muss aber transparent sein. Architekt/Bauleitung ersetzt keine brandschutztechnische Fachbauleitung.",
        ],
      },
      {
        id: "nachweise",
        title: "Ergebnis: Bescheinigung und Dokumentation",
        paragraphs: [
          "Die Bescheinigung nach § 56 BauO NRW bestätigt stichprobenartige Kontrolle – keine Vollabnahme aller Gewerke. Dazu gehören Begehungsprotokolle, Fotos vor Verkleidung, Mängellisten, Freigaben der Abschottungen.",
          "Ohne Bescheinigung kann die Bauaufsicht die formale Abnahme verzögern; der Sachverständige stellt bei der Abnahme oft dieselben Mängel fest, wenn die Fachbauleitung zu spät kam.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Wer Fachbauleitung führen darf, legt die Behörde fest (öffentlich bestellte SV, qualifizierte Ingenieure). Ohne Anordnung kann Fachbauleitung freiwillig sinnvoll sein – ersetzt dann keine behördliche Bescheinigung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abschottungen-durchbrueche-baustelle-koeln", label: "Abschottungen" },
      { href: "/ratgeber/brandschutz-abnahme-nach-umbau-koeln", label: "Abnahme nach Umbau" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau" },
    ],
    faq: [
      {
        question: "Wer darf Fachbauleitung Brandschutz führen?",
        answer:
          "Öffentlich bestellte oder anerkannte Sachverständige bzw. qualifizierte Brandschutz-Ingenieure – je nach Behördenanforderung.",
      },
      {
        question: "Ist Fachbauleitung immer Pflicht?",
        answer:
          "Nur wenn angeordnet oder vertraglich (z. B. Sonderbau, Versicherer). Freiwillige Begleitung ist empfehlenswert.",
      },
      {
        question: "Was passiert ohne Bescheinigung?",
        answer:
          "Bauaufsicht kann Abnahme verweigern oder Nachweise nachfordern – Verzögerung der Fertigstellung.",
      },
      {
        question: "Prüft die Fachbauleitung auch BMA?",
        answer:
          "Koordination ja – formale BMA-Abnahme erfolgt durch Prüfsachverständigen nach VDE 0833, nicht durch Fachbauleitung allein.",
      },
      {
        question: "Wann sind Begehungen vor Verkleidung Pflicht?",
        answer:
          "Vor Beplankung von F90-Wänden und Decken – Abschottungen und Türen sind danach nicht mehr prüfbar ohne Aufbruch.",
      },
      {
        question: "Kann der Konzeptautor die Fachbauleitung übernehmen?",
        answer:
          "Möglich, wenn Qualifikation und Unabhängigkeit geklärt sind. Getrennte Firmen erhöhen die Nachvollziehbarkeit gegenüber der Behörde.",
      },
    ],
  },
  {
    slug: "lagerhalle-buero-umnutzung-koeln",
    title: "Lagerhalle zu Büro: Brandschutz bei Umnutzung",
    excerpt:
      "Gewerbehalle → Büro: Sonderbau, § 33 Rettungswege, Löschwasser – Praxisfall Gewerbegebiet NRW.",
    metaTitle: "Lagerhalle Büro Umnutzung | Brandschutz",
    metaDescription:
      "Halle zu Büro: Brandschutzkonzept, Rettungswege, Löschwasser NRW. Ratgeber H&S+.",
    keywords: [
      "Lagerhalle Büro Brandschutz",
      "Gewerbehalle Umnutzung",
      "Brandschutzkonzept Halle",
      "Halle Rettungswege",
    ],
    sections: [
      {
        id: "fall",
        title: "Typisches Vorhaben",
        paragraphs: [
          "In einem Gewerbegebiet (NRW) war die Umnutzung einer Lagerhalle zu Büroflächen geplant. Ein vollständiges Brandschutzkonzept nach § 9 BauPrüfVO NRW umfasste Feuerwehrzufahrten, Löschwasser, Brandabschnitte, Rettungswege, Nutzerzahl und Alarmierung.",
          "Hallenumnutzungen sind genehmigungspflichtig – eine Stellungnahme allein reicht bei klarer Nutzungsänderung und Sonderbau-Einordnung selten.",
        ],
      },
      {
        id: "sonderbau",
        title: "Sonderbau und Gebäudeklasse",
        paragraphs: [
          "Große Hallen: oft GK 4/5 und Sonderbau (Lagerfläche, Industrie, ggf. Büro >3.000 m² Geschossfläche). Die Umnutzung ändert Personenströme, Brandlast (Trockenbau, Möbel) und Rettungsweglängen – neuer Nachweis nötig.",
        ],
      },
      {
        id: "schwerpunkte",
        title: "Konzept-Schwerpunkte",
        list: [
          "Zwei Rettungswege § 33 – Weglängen in der Halle kritisch",
          "Löschwasser Grund-/Objektschutz, Hydranten",
          "Brandabschnitte, Trennwände F90, Rauchabschnitte",
          "Entrauchung/RWA, Lüftung mit Brandschutzklappen",
          "BMA, Feuerlöscher ASR A2.2, Flucht- und Feuerwehrpläne",
        ],
        paragraphs: [
          "Feuerwehrabstimmung vor oder parallel zum Bauantrag – siehe Ratgeber Feuerwehr vor dem Bauamt.",
        ],
      },
      {
        id: "genehmigung",
        title: "Genehmigung und Betrieb",
        paragraphs: [
          "Bauantrag mit Konzept, einheitlichen Plänen, Betriebsbeschreibung. Nach Fertigstellung: BMA-Abnahme, Pläne, BSO, ggf. Brandschau. Trockenbau in der Halle: Abstimmung mit bestehender Sprinkleranlage falls vorhanden.",
        ],
      },
      {
        id: "abgrenzung-nachweis",
        title: "Konzept vs. Stellungnahme vs. § 64",
        paragraphs: [
          "Halle-zu-Büro mit Sonderbau-Tatbestand: in der Regel vollständiges Brandschutzkonzept nach § 9 BauPrüfVO NRW – keine kurze Stellungnahme allein. § 64 vereinfachtes Verfahren nur, wenn die Behörde Anlage 1 BauPrüfVO so einordnet (selten bei großen Hallen).",
          "Teilsanierung nur eines Bürotrakts im Bestand: ggf. Fortschreibung oder STN – abhängig vom Umfang der baulichen Änderung.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Bei Halle-zu-Büro-Umnutzungen wiederholen sich dieselben Planungslücken:",
        ],
        list: [
          "Nur Architekturplan ohne brandschutztechnische Eintragungen",
          "Ein Rettungsweg über lange Halle",
          "Löschwasser nicht nachgewiesen",
          "Sprinkler im Bestand ignoriert",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Jede Halle ist anders (OKF, Bestand, Nachbarbebauung). Einzelfall-Konzept erforderlich.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder STN?" },
      { href: "/ratgeber/loeschwasser-hydranten-gewerbe-koeln", label: "Löschwasser" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr-Abstimmung" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau § 50" },
    ],
    faq: [
      {
        question: "Reicht eine Stellungnahme statt Konzept?",
        answer:
          "Bei Halle-zu-Büro und Sonderbau in der Regel nein – vollständiges Brandschutzkonzept.",
      },
      {
        question: "Braucht die Halle Sprinkler?",
        answer:
          "Abhängig von Konzept, Versicherer und Nutzung – oft BMA plus Löscher, manchmal Sprinkler als Kompensation.",
      },
      {
        question: "Wie lang dürfen Fluchtwege sein?",
        answer:
          "Nach § 33 und Nutzung – in Hallen oft der kritische Punkt, ggf. zweiter Rettungsweg oder RWA.",
      },
      {
        question: "Was, wenn Sprinkler im Bestand der Halle liegt?",
        answer:
          "Bestehende Sprinkler im Konzept berücksichtigen: Trockenbau nicht blind bis Decke, Köpfe freihalten oder Fortschreibung bei Teilstilllegung – siehe Ratgeber Sprinkler & Trockenbau.",
      },
      {
        question: "Wann ist die Halle Sonderbau?",
        answer:
          "Z. B. Lagerfläche mit erhöhter Brandgefahr, Industrie, Büro >3.000 m² Geschossfläche – unabhängig von der Umnutzung. GK und Sonderbau getrennt prüfen.",
      },
      {
        question: "Wann brauche ich Entrauchung in der Halle?",
        answer:
          "Bei langen Fluchtwegen oder großen offenen Geschossen kann RWA/Entrauchung im Konzept nötig sein – Einzelfall nach § 33 und Nutzerzahl.",
      },
    ],
  },
  {
    slug: "sprinkler-rueckbau-bma-nutzungsaenderung-koeln",
    title: "Sprinkler stilllegen: BMA und Konzept-Fortschreibung",
    excerpt:
      "Produktion → IT: Sprinkler-Rückbau nur mit Fortschreibung, BMA Kat. 1 und Ersatzmaßnahmen im Konzept.",
    metaTitle: "Sprinkler Rückbau BMA | Umnutzung",
    metaDescription:
      "Sprinkler stilllegen bei Umnutzung: Fortschreibung § 9, BMA, Feuerwehr. Ratgeber H&S+ NRW.",
    keywords: [
      "Sprinkler stilllegen Umnutzung",
      "Sprinkler Rückbau BMA",
      "Brandschutzkonzept Fortschreibung",
      "BMA statt Sprinkler",
    ],
    sections: [
      {
        id: "fall",
        title: "Praxisfall: Produktion wird IT-Fläche",
        paragraphs: [
          "In einem abgeschlossenen Projekt sollte eine Produktionsfläche zu IT-Fläche umgenutzt werden. Die Sprinkleranlage im betroffenen Brandabschnitt sollte stillgelegt werden.",
          "Die Fortschreibung des Brandschutzkonzepts prüfte, ob BMA Kategorie 1 mit Aufschaltung zur Berufsfeuerwehr, angepasste Löscher und Rettungswege den entfallenden Sprinklerschutz ausgleichen.",
        ],
      },
      {
        id: "recht",
        title: "Warum Fortschreibung Pflicht ist",
        paragraphs: [
          "Sprinkler waren oft Teil des genehmigten brandschutztechnischen Konzepts. Stilllegung ohne Nachweis verschlechtert das Schutzniveau – Bauaufsicht, Feuerwehr und Versicherer erwarten eine dokumentierte Fortschreibung nach § 9 BauPrüfVO NRW mit Ersatzmaßnahmen.",
          "Technische Stilllegung nur durch Fachfirma; Leitungen stilllegen, Alarmierung anpassen, Pläne aktualisieren.",
        ],
      },
      {
        id: "massnahmen",
        title: "Typische Ersatzmaßnahmen",
        paragraphs: [
          "Ohne Sprinkler müssen Ersatzmaßnahmen im fortgeschriebenen Konzept nachvollziehbar sein. Ergänzt den Ratgeber Sprinkler & Trockenbau – dort Fokus Trockenbau bis Decke bei bestehendem Sprinkler.",
        ],
        list: [
          "BMA Kategorie 1 (Vollschutz), Handfeuermelder an Fluchtwegen",
          "Lüftung: Brandschutzklappen, BMA-Ansteuerung",
          "Feuerlöscher ASR A2.2 (LE für neue Nutzung/Fläche)",
          "Zwei Rettungswege, Weglängen im Abschnitt nachweisen",
          "Feuerwehrpläne und Laufkarten fortschreiben",
        ],
      },
      {
        id: "abgrenzung",
        title: "Teilstilllegung vs. Gesamtrückbau",
        paragraphs: [
          "Nur ein Brandabschnitt (z. B. ehemalige Produktion → IT): Fortschreibung mit Ersatzmaßnahmen in diesem Abschnitt; übrige Sprinklerbereiche unverändert dokumentieren.",
          "Kompletter Rückbau im Gebäude: neues Konzept-Niveau, BMA, Löschwasser und Rettungswege neu bewerten – nicht nur BMA „nachrüsten“.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Stilllegung oder Umbau ohne Konzeptfortschreibung führt häufig zu Beanstandungen:",
        ],
        list: [
          "Sprinklerköpfe abgedeckt oder Leitung leer ohne Genehmigung",
          "Nur BMA eingebaut, Konzept nicht fortgeschrieben",
          "Feuerwehr nicht informiert",
          "Trockenbau verdeckt Sprinkler ohne Prüfung",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Jede Stilllegung ist einzelfallbezogen. Produktionshallen mit hoher Brandlast brauchen oft andere Lösungen als Büro/IT.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw", label: "Sprinkler & Trockenbau" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept & Fortschreibung" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
    ],
    faq: [
      {
        question: "Darf ich Sprinkler einfach abschalten?",
        answer:
          "Nein. Nur mit Fortschreibung/Konzept und fachlicher Stilllegung.",
      },
      {
        question: "Brauche ich eine neue Baugenehmigung?",
        answer:
          "Stilllegung Sprinkler und BMA-Änderung sind bauliche/technische Änderungen – Fortschreibung und oft Genehmigung oder Anzeige.",
      },
      {
        question: "Reicht BMA ohne Sprinkler?",
        answer:
          "Nur wenn im fortgeschriebenen Konzept nachgewiesen und von Behörde/Feuerwehr akzeptiert.",
      },
      {
        question: "Was ist BMA Kategorie 1?",
        answer:
          "Vollautomatische Brandmeldeanlage mit Aufschaltung – typische Ersatzkomponente bei entfallendem Sprinkler in Teilbereichen.",
      },
      {
        question: "Muss die Feuerwehr die Stilllegung kennen?",
        answer:
          "Ja – Aufschaltung, Pläne und Konzept müssen zum neuen Schutzniveau passen. Sonst Konflikt bei Brandschau und Einsatz.",
      },
      {
        question: "Darf Trockenbau bis unter die Decke gebaut werden?",
        answer:
          "Nur wenn Sprinkler im Bereich stillgelegt oder Decke frei bleibt – siehe Ratgeber Sprinkler & Trockenbau; sonst Brandlast und verdeckte Köpfe.",
      },
    ],
  },
  {
    slug: "kraftstoff-lagerung-halle-garage-brandschutz",
    title: "Diesel und Kraftstoff in Halle oder Garage",
    excerpt:
      "Tankfahrzeug, Kanister, TRGS 510 – Abgrenzung Fahrzeugtank vs. lose Lagerung, SBauVO.",
    metaTitle: "Diesel Lagerung Halle | TRGS 510",
    metaDescription:
      "Kraftstoff Halle/Garage: Diesel TRGS 510, Tankfahrzeug. Einzelfall – Ratgeber H&S+ NRW.",
    keywords: [
      "Diesel Lagerung Halle",
      "Tankfahrzeug Garage",
      "TRGS 510 Diesel",
      "Kraftstoff Brandschutz",
    ],
    sections: [
      {
        id: "fall",
        title: "Typische Fragestellung",
        paragraphs: [
          "Darf ein Tankfahrzeug mit Diesel in einer Garage oder einem Technikraum abgestellt werden? In einem Praxisfall wurden SBauVO (Lagerung brennbarer Flüssigkeiten) und TRGS 510 gemeinsam mit dem baulichen Brandschutz geprüft.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Fahrzeugtank vs. lose Lagerung",
        paragraphs: [
          "Kraftstoff im Fahrzeugtank: andere Bewertung als lose Lagerung in Kanistern oder Techniktanks. TRGS 510: ab 200 l Diesel lose gelagert zusätzliche organisatorische Maßnahmen – gilt nicht für den Tankinhalt eines zugelassenen Fahrzeugs in der Kleingarage.",
          "Brennbare Flüssigkeiten in Technikräumen: Brandlast, Lüftung, Feuerlöscher, Abstand zu Zündquellen.",
        ],
      },
      {
        id: "bewertung",
        title: "Bewertungslogik (Praxisfall)",
        list: [
          "Belüftung, dichter Boden, Kennzeichnung, Rauchverbot",
          "Feuerlöscher passend zur Brandklasse B",
          "Keine Verwechslung mit Fettbrand-Küchentechnik",
          "Dokumentation in STN für Betrieb und Behörde",
        ],
        paragraphs: [
          "Ergebnis im Fall: Abstellung Tankfahrzeug bis 1.000 l unter genannten Voraussetzungen zulässig – nicht pauschal auf andere Objekte übertragbar.",
        ],
      },
      {
        id: "bauo",
        title: "Bauordnung und Sonderbau",
        paragraphs: [
          "Zusätzlich: Lagerung gefährlicher Stoffe kann Sonderbau- oder Genehmigungspflichten auslösen. Technikgebäude: oft GK 1, dennoch brandschutztechnische STN sinnvoll.",
        ],
      },
      {
        id: "nachweise",
        title: "STN vs. Konzept – was reicht?",
        paragraphs: [
          "Interne Freigabe (Werkstatt, Garage): oft brandschutztechnische Stellungnahme mit TRGS-Maßnahmen und Löschermatrix. Genehmigungspflichtige Lagerung oder Sonderbau: Brandschutzkonzept oder Fortschreibung mit Anhang Gefahrstoffe.",
          "Tankfahrzeug-Fall: Ergebnis in STN dokumentieren – nicht pauschal auf andere Standorte übertragen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Gefahrstoffrecht (TRGS, Wasserhaushaltsgesetz) und Baurecht parallel – dieser Ratgeber ersetzt keine Gefahrstoffberatung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/technische-betriebsgebaeude-brandschutz-nrw", label: "Technische Betriebsgebäude" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau" },
      { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Feuerlöscher" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder STN?" },
    ],
    faq: [
      {
        question: "Gilt 200 l auch für Fahrzeugtank?",
        answer:
          "TRGS 510-Regel für lose Lagerung – nicht für Kraftstoff im zugelassenen Fahrzeugtank. Einzelfall prüfen.",
      },
      {
        question: "Darf Diesel in der Werkstatt stehen?",
        answer:
          "Nur mit Gefährdungsbeurteilung, Belüftung, Löscher, ggf. STN und behördlicher Einordnung.",
      },
      {
        question: "Brauche ich ein Brandschutzkonzept?",
        answer:
          "Bei genehmigungspflichtigen Anlagen oder Sonderbau oft ja – kurze STN für interne Freigabe mindestens.",
      },
      {
        question: "Gilt SBauVO für Diesel in der Garage?",
        answer:
          "SBauVO-Teile zu brennbaren Flüssigkeiten können bei loser Lagerung greifen – Fahrzeugtank im zugelassenen Fahrzeug wird anders bewertet (siehe Abgrenzung).",
      },
      {
        question: "Welcher Feuerlöscher für Diesel?",
        answer:
          "Brandklasse B (Schaum/Pulver) – nicht mit Fettbrand-Löschern der Küche verwechseln; Menge nach ASR A2.2 und Gefährdungsbeurteilung.",
      },
      {
        question: "Darf ich Kanister im Technikraum lagern?",
        answer:
          "Lose Lagerung unterliegt TRGS 510 – ab 200 l Diesel gelten Zusatzmaßnahmen; nicht mit Fahrzeugtank verwechseln.",
      },
    ],
  },
  {
    slug: "abschottungen-durchbrueche-baustelle-koeln",
    title: "Abschottungen bei Durchbrüchen: Brandschutz auf der Baustelle",
    excerpt:
      "Ü-Zulassung, MLAR/LAR, Ü-Plakette – warum TGA-Durchbrüche die Brandwand zerstören und wie Fachbauleitung hilft.",
    metaTitle: "Abschottung Brandschutz | Durchbruch",
    metaDescription:
      "Abschottungen Durchbruch NRW: Zulassung, Dokumentation, Fachbauleitung. Ratgeber H&S+.",
    keywords: [
      "Abschottung Brandschutz",
      "Durchbruch F90 Abschottung",
      "Ü Plakette Abschottung",
      "MLAR Leitungsanlage",
    ],
    sections: [
      {
        id: "warum",
        title: "Warum Abschottungen scheitern",
        paragraphs: [
          "Trockenbau und TGA erzeugen viele Durchbrüche in F30/F90-Wänden und Decken. Ohne zugelassene Abschottung (allgemeine bauaufsichtliche Zulassung – Ü) verliert das Bauteil seine Funktion – klassischer Abnahme- und Versicherungsmangel.",
        ],
      },
      {
        id: "anforderungen",
        title: "Was je Durchführung erfüllt sein muss",
        list: [
          "Abschottungssystem passend zu Wand-/Deckenklasse und Medium (Kabel, Rohr, Kombi)",
          "Ü-Zulassung oder Einzelfallnachweis",
          "Ü-Plakette am Abschottungspunkt, Aufnahme in Dokumentation",
          "Leitungsführung nur im erforderlichen Mindestmaß (MLAR/LAR)",
          "Koordination mit Fachbauleitung vor Verkleidung",
        ],
        paragraphs: [
          "PU-Schaum oder „Montageschaum“ ohne Ü ist unzulässig – auch nicht provisorisch.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Baustellenfehler",
        paragraphs: [
          "Abschottungen sind unsichtbar, sobald die Beplankung geschlossen ist – deshalb vorher prüfen:",
        ],
        list: [
          "Kabelbündel ohne Systemabschottung",
          "Rohrdurchführung größer als zugelassen",
          "Abschottung beschädigt nach Folgegewerk",
          "Keine Fotodokumentation vor Beplankung",
        ],
      },
      {
        id: "ablauf",
        title: "Empfohlener Ablauf",
        paragraphs: [
          "Raumbuch mit allen Durchführungen planen → Abschottungssystem je Typ festlegen → Ausführung mit Fachfirma → Kontrolle Fachbauleitung → Ü-Plaketten und Übersichtsplan für Abnahme.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Provisorium vs. Ü-Abschottung",
        paragraphs: [
          "Bau-PU-Schaum oder Brandschutzklebeband ohne Ü ist auch vorübergehend unzulässig in klassifizierten Wänden. Provisorische Leitungsführung nur mit behördlich akzeptiertem Einzelfall – nicht als Dauerlösung bis „später“.",
          "MLAR/LAR: Leitungen nur dort führen, wo baulich erforderlich – jede zusätzliche Durchführung schwächt die Wand.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Jede Kombination Kabel/Rohr/Bauteil braucht das passende System aus der Zulassung – keine Pauschallösung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/fachbauleitung-brandschutz-baustelle-koeln", label: "Fachbauleitung" },
      { href: "/ratgeber/brandschutz-abnahme-nach-umbau-koeln", label: "Abnahme" },
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung" },
      { href: "/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw", label: "Trockenbau" },
    ],
    faq: [
      {
        question: "Reicht PU-Schaum für Kabel?",
        answer:
          "Nur mit passender Ü für genau diese Konstruktion und Feuerwiderstandsklasse – niemals pauschal.",
      },
      {
        question: "Wer dokumentiert Abschottungen?",
        answer:
          "Ausführende Firma und Fachbauleitung – Übersichtsplan mit Plaketten-Nummern für Abnahme.",
      },
      {
        question: "Gilt MLAR auch im Bestand?",
        answer:
          "Ja – Leitungsführung nur im erforderlichen Umfang; jede nachträgliche Durchführung braucht Ü-Abschottung.",
      },
      {
        question: "Gilt das auch im Bestand?",
        answer:
          "Ja – nachträgliche Durchbrüche in klassifizierten Wänden brauchen denselben Nachweis.",
      },
      {
        question: "Was ist eine Ü-Plakette?",
        answer:
          "Kennzeichnung am Abschottungspunkt mit Zulassungsnummer – Pflicht für Nachweis bei Abnahme und Versicherung.",
      },
      {
        question: "Wer haftet bei falscher Abschottung?",
        answer:
          "Bauherr und ausführende Firmen – deshalb Fachbauleitung und Fotodokumentation vor Verkleidung.",
      },
    ],
  },
  {
    slug: "loeschwasser-hydranten-gewerbe-koeln",
    title: "Löschwasser und Hydranten für Gewerbe",
    excerpt:
      "§ 14 BauO NRW, Grundschutz DVGW W 405, Objektschutz – Orientierung aus Campus- und Industrieprojekten.",
    metaTitle: "Löschwasser Hydranten Gewerbe",
    metaDescription:
      "Löschwasser Gewerbe NRW: 96 m³/h, Hydranten, Konzept. Ratgeber H&S+.",
    keywords: [
      "Löschwasser Gewerbe",
      "Löschwasserversorgung BauO",
      "Hydranten Abstand",
      "Objektschutz Löschwasser",
    ],
    sections: [
      {
        id: "grundlagen",
        title: "Anforderungen nach BauO NRW",
        paragraphs: [
          "§ 14 Abs. 2 BauO NRW: ausreichende Löschwasserversorgung für wirksame Löscharbeiten. Für viele Gewerbe- und Verwaltungsgebäude reicht der öffentliche Grundschutz (orientierend DVGW W 405: z. B. mindestens 96 m³/h über 2 Stunden in erreichbarer Entfernung).",
          "Große Industrie, Papier, Chemie oder weitläufige Campus: Objektschutz, eigene Flächenhydranten oder erhöhte Schüttungen – im Brandschutzkonzept nachweisen.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Grundschutz vs. Objektschutz vs. Sprinkler",
        paragraphs: [
          "Grundschutz: öffentliches Netz für Feuerwehr-Löscharbeiten außerhalb des Gebäudes. Objektschutz: zusätzliche Versorgung auf dem Grundstück (Hydranten, Behälter, Pumpen) bei Mangel oder Risiko.",
          "Sprinkler ersetzt den externen Löschwassernachweis nicht pauschal – im Konzept beide Ebenen klären (interne Löschwasseranlage vs. Feuerwehrversorgung).",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweis im Brandschutzkonzept",
        paragraphs: [
          "Der Löschwassernachweis gehört in das Konzept – nicht nur in die Feuerwehrkorrespondenz:",
        ],
        list: [
          "Karte mit Hydranten, Rohrnetz, Druck/Schüttung",
          "Abstand Gebäude zu Hydranten (oft max. ca. 150 m Wegstrecke – einzelfallabhängig)",
          "Feuerwehrzufahrt und Aufstellflächen",
          "Bei Mangel: technische Lösung (Löschwasserbehälter, Pumpen) oder Objektschutz",
        ],
      },
      {
        id: "praxis",
        title: "Praxisbeispiele (anonym)",
        paragraphs: [
          "Orientierungswerte aus Projekten – immer einzelfallbezogen nachrechnen:",
        ],
        list: [
          "Campus/Industrie: mehrere Hydranten im Umfeld, 96 m³/h bestätigt",
          "Papier/Industrie: 192 m³/h über 2 h für große Brandabschnitte",
          "Abstimmung mit Versorger und Feuerwehr dokumentieren",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Ohne belastbaren Nachweis stockt die Genehmigung oder die Brandschau:",
        ],
        list: [
          "Konzept ohne Löschwassernachweis",
          "Hydrant auf Plan, in Wirklichkeit nicht erreichbar",
          "Nur Sprinkler, kein externer Löschwassernachweis",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Kommunale Versorgungslage variiert. Früh Versorger und Feuerwehr einbinden.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/lagerhalle-buero-umnutzung-koeln", label: "Halle Umnutzung" },
      { href: "/ratgeber/technische-betriebsgebaeude-brandschutz-nrw", label: "Technikgebäude" },
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag Unterlagen" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau" },
    ],
    faq: [
      {
        question: "Muss jede Halle eigene Hydranten haben?",
        answer:
          "Nicht immer – Abhängigkeit von öffentlicher Versorgung und Risiko. Im Konzept nachweisen.",
      },
      {
        question: "Was ist Grundschutz?",
        answer:
          "Öffentliche Wasserversorgung für Feuerwehr – typisch 96 m³/h/2 h nach W 405 als Orientierung.",
      },
      {
        question: "Wer bestätigt die Versorgung?",
        answer:
          "Wasserversorger, ggf. Feuerwehr – Aufnahme ins Brandschutzkonzept.",
      },
      {
        question: "Was bedeutet 96 m³/h über 2 Stunden?",
        answer:
          "Orientierungswert DVGW W 405 für Grundschutz – kein Ersatz für die Einzelfallprüfung bei Sonderbauten oder großen Brandabschnitten.",
      },
      {
        question: "Braucht ein Büro in der Innenstadt Hydranten-Nachweis?",
        answer:
          "Ja, wenn im Konzept oder von der Behörde gefordert – auch bei guter städtischer Infrastruktur schriftlich belegen (Karte, Versorgerbescheid).",
      },
      {
        question: "Reicht ein Sprinkler für Löschwasser?",
        answer:
          "Nein pauschal – interne Anlage und Feuerwehr-Grundschutz sind getrennt im Konzept nachzuweisen.",
      },
    ],
  },
  {
    slug: "feuerwehrplan-fluchtplaene-pflicht-koeln",
    title: "Feuerwehrplan, FSD und Fluchtpläne: Pflicht und Abgrenzung",
    excerpt:
      "DIN 14095 vs. ASR A2.3 vs. BauO – wann welcher Plan Pflicht ist und warum Abnahme ohne FSD scheitert.",
    metaTitle: "Feuerwehrplan Fluchtplan Pflicht",
    metaDescription:
      "Feuerwehrplan DIN 14095, Fluchtplan ASR A2.3, FSD. Pflicht und Aktualisierung – H&S+.",
    keywords: [
      "Feuerwehrplan Pflicht",
      "Flucht- und Rettungsplan ASR A2.3",
      "FSD Feuerwehr",
      "DIN 14095",
    ],
    sections: [
      {
        id: "drei-ebenen",
        title: "Drei Planarten – nicht verwechseln",
        paragraphs: [
          "Ergänzt den ausführlichen Ratgeber „Pläne aktualisieren“ – Kurzüberblick:",
        ],
        list: [
          "BauO/Genehmigung: Rettungswege in Konzept und Grundrissen – kein ASR-Aushangplan",
          "DIN 14095 Feuerwehrplan: für Einsatzkräfte (Zufahrt, Hydranten, BMA, Brandabschnitte)",
          "ASR A2.3 Flucht- und Rettungsplan: für Beschäftigte/Besucher, aushängen, lagerichtig",
          "FSD: Schlüsseldepot für Feuerwehrzugang",
          "BSO DIN 14096: Verhalten, nicht Ersatz für Pläne",
        ],
      },
      {
        id: "pflicht",
        title: "Wann Pflicht?",
        paragraphs: [
          "Feuerwehrplan/FSD: bei Sonderbauten, BMA-Aufschaltung, behördlichen Auflagen und in vielen Konzepten vorgesehen. Flucht- und Rettungspläne: ASR A2.3 wenn Lage, Größe oder Publikumsverkehr es erfordern – nicht in jedem Ein-Zimmer-Büro.",
          "Genehmigung kann Feuerwehrpläne im BSK-Anhang verlangen; Arbeitsschutz verlangt ASR-Pläne unabhängig davon.",
        ],
      },
      {
        id: "wann-update",
        title: "Wann aktualisieren?",
        paragraphs: [
          "Nach Umbau, geänderter Raumaufteilung, neuer BMA, geänderten Fluchtwegen: alle betroffenen Planarten fort schreiben. In einem Abnahmefall fehlten Feuerwehrplan und FSD trotz genehmigtem Konzept – häufiger Mangel bei Teilsanierungen.",
        ],
      },
      {
        id: "nachweise",
        title: "Was wohin gehört (Kurz)",
        paragraphs: [
          "Genehmigung/BSK: Rettungswege, Brandabschnitte in Grundrissen. DIN 14095: Feuerwehrplan + Laufkarten + FSD-Montage. ASR A2.3: Flucht- und Rettungspläne aushängen, lagerichtig. BSO DIN 14096: Verhalten und Betrieb – ersetzt keine der Planarten.",
          "ASR A2.2 betrifft Feuerlöscher – nicht Fluchtpläne (häufige Verwechslung).",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Die drei Planarten werden oft vermischt – typische Mängel in der Praxis:",
        ],
        list: [
          "Nur ASR-Fluchtplan, kein Feuerwehrplan",
          "FSD nicht montiert",
          "Pläne widersprechen dem Konzept",
          "Keine lagerichtige Aufhängung ASR A2.3",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Feuerwehr erstellt die Pläne nicht – Betrieb/Fachplaner mit Abstimmung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne vertiefen" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege § 33" },
      { href: "/ratgeber/brandschau-koeln-feuerwehr", label: "Brandschau" },
      { href: "/brandschutzordnung-koeln", label: "BSO" },
    ],
    faq: [
      {
        question: "Erstellt die Feuerwehr unsere Pläne?",
        answer:
          "Nein. Flucht- und Rettungspläne: Betrieb/Planer. Feuerwehrpläne: Fachkraft mit Abstimmung.",
      },
      {
        question: "Reicht ein Fluchtplan für die Genehmigung?",
        answer:
          "Nein. Genehmigung braucht bauordnungsrechtlichen Rettungswegnachweis – oft in Konzept/Grundrissen.",
      },
      {
        question: "Was ist ein FSD?",
        answer:
          "Feuerwehr-Schlüsseldepot – ermöglicht Zugang im Einsatz. Oft Konzept-Pflicht.",
      },
      {
        question: "Braucht ein Ein-Personen-Büro ASR-Fluchtpläne?",
        answer:
          "ASR A2.3 abhängig von Gefährdungsbeurteilung und Besucherstrom – nicht pauschal nein. Feuerwehrplan/FSD oft trotzdem aus Konzept oder Auflage.",
      },
      {
        question: "Was ist der Unterschied ASR A2.2 und A2.3?",
        answer:
          "A2.2: Feuerlöscher. A2.3: Flucht- und Rettungspläne. Beide ergänzen bauordnungsrechtliche Pläne – ersetzen sie nicht.",
      },
      {
        question: "Muss ASR A2.3 zum genehmigten Konzept passen?",
        answer:
          "Ja – Aushangpläne und genehmigte Rettungswege dürfen nicht widersprechen; Abweichungen sind Mängel bei Schau und Abnahme.",
      },
    ],
  },
  {
    slug: "praxis-umbau-brandschutz-koeln",
    title: "Bildgebungspraxis umbauen: Brandschutz",
    excerpt:
      "MR/Kernspin, Wartezonen, Nähe Krankenhaus – Sonderbau, Konzept, § 69 Abweichungen.",
    metaTitle: "Praxis Umbau Brandschutz",
    metaDescription:
      "Röntgen/MRT Praxis Umbau: Sonderbau, Konzept, Rettungswege. Ratgeber H&S+ NRW.",
    keywords: [
      "Bildgebungspraxis Brandschutz",
      "Röntgenpraxis Umbau",
      "Praxis Sonderbau",
      "Brandschutzkonzept Praxis",
    ],
    sections: [
      {
        id: "fall",
        title: "Typisches Vorhaben",
        paragraphs: [
          "Umbau einer Bildgebungspraxis: neue Behandlungsräume, Wartezone, Anmeldung. Nachbarschaft zu einem Krankenhaus – Abstände, gemeinsame Erschließung und Brandübertragung sind brandschutzrelevant.",
          "Ergänzt den Ratgeber „Praxen zusammenlegen“ (nur Trennwand öffnen) – hier Umbau/Erweiterung mit Medizintechnik.",
        ],
      },
      {
        id: "sonderbau",
        title: "Sonderbau und Nutzung",
        paragraphs: [
          "Krankenhäuser sind Sonderbau. Nicht jede kleine Praxis – aber Bildgebung mit Patientenaufenthalt, Wartebereichen und Technik kann erhöhte Anforderungen und Konzeptpflicht auslösen. Nähe zum Klinikum: Abstimmung mit Krankenhausträger (Erschließung, Brandabschnitte).",
        ],
      },
      {
        id: "konzept",
        title: "Inhalt eines Praxis-Konzepts",
        paragraphs: [
          "Ein Praxis-Konzept für Bildgebung oder erweiterte Nutzung umfasst typischerweise:",
        ],
        list: [
          "Brandrisikoanalyse, Brandlasten Medizintechnik",
          "Rettungswege, Nutzerzahl, zweiter Rettungsweg",
          "Abweichungen § 69 BauO NRW bei Bedarf",
          "BMA, Löschwasser, Feuerwehrpläne",
          "Abstimmung Krankenhaus, Bauaufsicht, Feuerwehr",
        ],
      },
      {
        id: "abgrenzung",
        title: "Umbau vs. Zusammenlegung",
        paragraphs: [
          "Zusammenlegung zwei Praxen ohne neue Technik: oft STN zum Bestand. Umbau mit MR/CT: meist vollständiges BSK. Nicht verwechseln.",
        ],
      },
      {
        id: "nachweise",
        title: "Unterlagen für Genehmigung und Betrieb",
        paragraphs: [
          "Typisches Paket: Brandschutzkonzept mit Brandlasten Medizintechnik, Rettungswege, ggf. § 69-Abweichungen, BMA/Löschwasser, Feuerwehrplan, Abstimmung mit Krankenhausträger bei gemeinsamer Erschließung.",
          "Nach Eröffnung: ASR A2.3-Pläne, BSO, Unterweisung – getrennt vom bauordnungsrechtlichen Nachweis.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Strahlenschutz und Medizinprodukterecht sind separate Themen – Brandschutz nur ein Teil des Umbaus.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/arztpraxen-zusammenlegen-brandschutz-koeln", label: "Praxen zusammenlegen" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege § 33" },
    ],
    faq: [
      {
        question: "Ist jede Praxis ein Sonderbau?",
        answer:
          "Nicht jede – Krankenhäuser ja. Bildgebungspraxis: Einzelfall nach Größe, Patienten, Technik.",
      },
      {
        question: "Brauche ich Abweichungen?",
        answer:
          "§ 69 BauO NRW wenn bauliche Lösung von Norm abweicht – im Konzept begründen.",
      },
      {
        question: "Muss das Krankenhaus mit einbinden?",
        answer:
          "Bei räumlicher Nähe und gemeinsamer Erschließung fachlich und organisatorisch sinnvoll.",
      },
      {
        question: "Braucht Bildgebung immer BMA?",
        answer:
          "Nicht pauschal – abhängig von Konzept, Nutzerzahl und Versicherer. Oft BMA oder strengere Überwachung bei erhöhtem Risiko.",
      },
      {
        question: "Was ist mit Wartezonen?",
        answer:
          "Aufenthaltsräume zählen für Rettungswege und Nutzerzahl – Wartebereich im Umbau mit einplanen.",
      },
      {
        question: "Wann reicht eine STN statt BSK?",
        answer:
          "Bei klar abgegrenzten kleinen Umbauten ohne neue Großtechnik – Bildgebung mit MR/CT meist vollständiges Konzept.",
      },
    ],
  },
  {
    slug: "technische-betriebsgebaeude-brandschutz-nrw",
    title: "Technische Betriebsgebäude: Brandschutz",
    excerpt:
      "NEA, Trafostation, Diesel – GK 1, Sonderbau, F90-Trennung, Löschwasser Campus.",
    metaTitle: "Technische Betriebsgebäude Brandschutz",
    metaDescription:
      "NEA Trafostation Brandschutz NRW: Konzept, Diesel, Feuerwehrzufahrt. H&S+.",
    keywords: [
      "Technisches Betriebsgebäude",
      "Netzersatzanlage Brandschutz",
      "Trafostation Brandschutz",
      "NEA Brandschutzkonzept",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Baurechtliche Einordnung",
        paragraphs: [
          "Eingeschossige Technikgebäude mit nur gelegentlichem Aufenthalt (Wartung) oft Gebäudeklasse 1 – zugleich häufig Sonderbau (technische Betriebsgebäude, Anlagen mit Stoffen/Energie).",
          "Typisch: NEA mit Diesel-Tanks (doppelwandig, Lecküberwachung), Trafostation, Schalträume.",
        ],
      },
      {
        id: "konzept",
        title: "Typische Konzept-Inhalte",
        paragraphs: [
          "Technische Betriebsgebäude brauchen oft ein schlankes, aber vollständiges Konzept:",
        ],
        list: [
          "Feuerwehrzufahrt, Löschwasser (Campus/Hydranten)",
          "Innere F90-Trennung Aggregat-/Schaltraum",
          "Natürliche Lüftung, BMA nur wenn erforderlich",
          "Feuerlöscher ASR A2.2, Blitzschutz",
          "Diesel-Lagerung: TRGS/SBauVO – siehe Kraftstoff-Ratgeber",
          "Feuerwehrplan, BSO für Wartungspersonal",
        ],
      },
      {
        id: "bestand",
        title: "Bestand und technische Sanierung",
        paragraphs: [
          "Reine Leitungserneuerung ohne baulische Änderung: ggf. § 59 Bestandsschutz – Holzdecke etc. Neubau NEA-Container: vollständiges BSK und Genehmigung.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Campus mit NEA und Trafostation",
        paragraphs: [
          "In einem Campus-Projekt (NRW): eingeschossiges Technikgebäude GK 1, Sonderbau wegen NEA und Diesel-Vorratsbehältern. Konzept: Feuerwehrzufahrt, Hydranten-Nachweis im Umfeld, innere F90-Trennung Aggregat/Schaltraum, natürliche Lüftung, Feuerlöscher ASR A2.2, Feuerwehrplan für Wartungspersonal.",
          "Diesel-Lagerung über TRGS und Kraftstoff-Ratgeber abgestimmt – nicht pauschal auf andere Standorte übertragbar.",
        ],
      },
      {
        id: "abgrenzung-gk",
        title: "GK 1 vs. Sonderbau",
        paragraphs: [
          "Gebäudeklasse 1 bedeutet nicht wenig Brandschutz. Sonderbau-Tatbestand (technische Betriebsgebäude, Stoffe/Energie) kann hohe Anforderungen an Trennung, Löschwasser und Dokumentation auslösen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "IndBauR kann zusätzliche Anforderungen stellen – bei Industrieanlagen früh klären.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz", label: "Diesel Lagerung" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestand § 59" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "GK 1" },
      { href: "/ratgeber/loeschwasser-hydranten-gewerbe-koeln", label: "Löschwasser" },
    ],
    faq: [
      {
        question: "Brauchen NEA-Gebäude immer ein BSK?",
        answer:
          "Bei genehmigungspflichtigem Neubau in der Regel ja.",
      },
      {
        question: "Ist BMA immer nötig?",
        answer:
          "Nicht in jedem Technikgebäude ohne Aufenthaltsräume – Konzept/Behörde entscheidet.",
      },
      {
        question: "GK 1 – heißt das wenig Brandschutz?",
        answer:
          "Nein – GK steuert Bauteilanforderungen; Sonderbau und Technik können hohe Anforderungen bringen.",
      },
      {
        question: "Braucht ein NEA-Container Genehmigung?",
        answer:
          "Aufstellbare Technikgebäude sind oft genehmigungspflichtig – vollständiges BSK und Bauantrag, nicht nur interne STN.",
      },
      {
        question: "Wann ist BMA in Technikgebäuden nötig?",
        answer:
          "Wenn Aufenthaltsräume, Versicherer oder Konzept es verlangen – reine Wartungsflächen ohne Personen oft ohne BMA, aber mit Löschern und Feuerwehrplan.",
      },
      {
        question: "Wie wird Diesel im NEA nachgewiesen?",
        answer:
          "Über TRGS 510, brandschutztechnische Stellungnahme oder Konzept – siehe Kraftstoff-Ratgeber; Löschwasser separat im Campus-Nachweis.",
      },
    ],
  },
  {
    slug: "bauantrag-brandschutz-unterlagen-koeln",
    title: "Bauantrag: Brandschutz-Unterlagen-Checkliste",
    excerpt:
      "Konzept § 9, Pläne, Löschwasser, Betriebsbeschreibung – Vollständigkeit vor Zwischenbescheid.",
    metaTitle: "Bauantrag Brandschutz Unterlagen",
    metaDescription:
      "Brandschutz Bauantrag: Konzept, Pläne, Löschwasser. Checkliste NRW – H&S+.",
    keywords: [
      "Bauantrag Brandschutz Unterlagen",
      "Brandschutzkonzept einreichen",
      "Brandschutzpläne Genehmigung",
      "BauPrüfVO Konzept",
    ],
    sections: [
      {
        id: "paket",
        title: "Typisches Unterlagenpaket",
        paragraphs: [
          "Für genehmigungspflichtige Vorhaben in NRW gehören regelmäßig dazu:",
        ],
        list: [
          "Brandschutzkonzept nach § 9 BauPrüfVO NRW (Kap. 1–4, Anhänge)",
          "Brandschutzpläne / Visualisierung aller Geschosse",
          "Baubeschreibung, Betriebsbeschreibung (Nutzung, Personen, Gefahrstoffe)",
          "Nachweis Löschwasserversorgung",
          "Nachweise BMA, Sprinkler, Abschottungen soweit relevant",
          "Protokolle Planungsgespräche Feuerwehr/Bauamt",
        ],
      },
      {
        id: "abgrenzung",
        title: "Konzept vs. Stellungnahme vs. § 64",
        paragraphs: [
          "Sonderbau und große Gewerbe: fast immer vollständiges BSK. Kleine, klar abgegrenzte Umbauten: ggf. STN. § 64 vereinfachtes Verfahren nur bei passender Einordnung in Anlage 1 BauPrüfVO – Behörde entscheidet.",
          "Vollständigkeit und einheitlicher Planstand vermeiden Zwischenbescheid – siehe ausführlicher Ratgeber Bauaufsicht Unterlagen.",
        ],
      },
      {
        id: "ablauf",
        title: "Ablauf",
        paragraphs: [
          "Einreichung mit § 7 BauPrüfVO-Erklärung des Entwurfsverfassers, Fachbeteiligungen online, ggf. Zwischenbescheid, Nachreichung, Genehmigung mit Auflagen.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Zwischenbescheid vermeiden",
        paragraphs: [
          "Typische Nachforderungen: Löschwassernachweis fehlt, Konzept und Pläne widersprechen sich, Betriebsbeschreibung ohne Personenzahlen, Feuerwehr nicht dokumentiert. Einheitlicher Planstand vor Einreichung spart Wochen – siehe Ratgeber Zwischenbescheid und Bauaufsicht Unterlagen.",
        ],
      },
      {
        id: "checkliste",
        title: "Kurz-Checkliste vor Einreichung",
        paragraphs: [
          "Vor dem Bauantrag sollten Sie diese Fragen intern beantworten können:",
        ],
        list: [
          "Konzept und Pläne zeigen denselben Stand?",
          "Löschwasser nachgewiesen?",
          "Feuerwehr informiert/abgestimmt?",
          "Betriebsbeschreibung vollständig?",
          "Alle Geschosse und Schnitte beigefügt?",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Kommunale Verfahren (z. B. Vorgangsauskunft+) ändern nicht die inhaltlichen Pflichten – nur die Übermittlung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bauaufsicht-unterlagen-koeln", label: "Bauaufsicht ausführlich" },
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder STN?" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "§ 64 Imbiss" },
    ],
    faq: [
      {
        question: "Reicht nur eine Stellungnahme?",
        answer:
          "Bei genehmigungspflichtigen Sonderbauten meist nein – vollständiges Konzept.",
      },
      {
        question: "Wer erstellt das Konzept?",
        answer:
          "Brandschutz-Ingenieur/Sachverständiger – nicht die Feuerwehr.",
      },
      {
        question: "Was bei fehlendem Löschwasser?",
        answer:
          "Technische Ersatzlösung oder Objektschutz im Konzept nachweisen – sonst Zwischenbescheid.",
      },
      {
        question: "Müssen alle Geschosse im Brandschutzplan sein?",
        answer:
          "Ja – jeder Aufenthalts- und Nutzungsbereich, Schnitte und Brandabschnitte. Fehlende Geschosse sind häufige Zwischenbescheid-Ursache.",
      },
      {
        question: "Wer unterschreibt das Konzept?",
        answer:
          "Entwurfsverfasser nach § 7 BauPrüfVO NRW – Brandschutz-Ingenieur/Sachverständiger, nicht die Feuerwehr.",
      },
      {
        question: "Was ist eine Betriebsbeschreibung?",
        answer:
          "Nutzung, Personen, Gefahrstoffe, Öffnungszeiten – Grundlage für Sonderbau-Einordnung und Konzept.",
      },
    ],
  },
];
