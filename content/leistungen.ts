/**
 * Alle Brandschutz-Leistungen mit Beschreibung, Nutzen, Rechtsgrundlagen, Ablauf und Ergebnis.
 * Wird auf /leistungen und für Teaser auf der Startseite genutzt.
 */

export interface Leistung {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  nutzen: string[];
  rechtsgrundlagen?: string[];
  ablauf?: string[];
  ergebnis: string;
  /** SEO-Landingpage für interne Verlinkung */
  seoHref?: string;
  seoLabel?: string;
}

export const LEISTUNGEN: Leistung[] = [
  {
    id: "stellungnahmen-konzepte",
    title: "Erstellung von brandschutztechnischen Stellungnahmen und Konzepten",
    shortDescription:
      "Brandschutzkonzept, brandschutztechnische Stellungnahme und Fortschreibung nach BauO NRW und BauPrüfVO NRW.",
    description:
      "Wir erstellen brandschutztechnische Stellungnahmen und Brandschutzkonzepte nach BauO NRW und BauPrüfVO NRW – für Genehmigung, Umbau, Nutzungsänderung und Sonderbauten (§ 50 BauO NRW, SBauVO NRW). Einreichfähige Unterlagen, Abstimmung mit Bauaufsicht, Feuerwehr und Versicherer.",
    nutzen: [
      "Planungssicherheit für Bauherren und Architekten",
      "Nachvollziehbare Unterlagen für Genehmigung und Abnahme",
      "Klare Abgrenzung: Stellungnahme, Vollkonzept oder Fortschreibung nach § 9 BauPrüfVO NRW",
    ],
    rechtsgrundlagen: [
      "BauO NRW",
      "BauPrüfVO NRW (§ 9 Nachweis, § 7 Entwurfsverfasser)",
      "Sonderbauverordnung NRW (SBauVO) bei geregeltem Sonderbau",
      "Vorgaben der Feuerversicherer",
    ],
    ablauf: [
      "Auftragsklärung und Bereitstellung der Planunterlagen",
      "Analyse der Nutzung und der baulichen Gegebenheiten",
      "Erstellung der Stellungnahme bzw. des Konzepts",
      "Abstimmung mit Bauherr und Planern, ggf. Behördenvortrag",
    ],
    ergebnis:
      "Einreichungsfähige Stellungnahme, Brandschutzkonzept oder Fortschreibung nach § 9 BauPrüfVO NRW inkl. Pläne und Anlagen.",
    seoHref: "/brandschutzkonzept-koeln",
    seoLabel: "Brandschutzkonzept Köln",
  },
  {
    id: "brandschutzordnung",
    title: "Erstellung und Fortschreibung von Brandschutzordnungen",
    shortDescription: "Brandschutzordnung nach DIN 14096: Teil A, B und C – Erstellung und Fortschreibung.",
    description:
      "Nach DIN 14096 erstellen und fortschreiben wir Ihre Brandschutzordnung (Teil A, B, C) – Verhalten im Brandfall, Zuständigkeiten und betriebliche Organisation. Abgestimmt auf Nutzung, Fluchtwege und Sammelplätze. ASR A2.2 (Feuerlöscher, Brandschutzhelfer) binden wir ergänzend ein, sofern erforderlich.",
    nutzen: [
      "Rechtssichere Dokumentation der Brandschutzorganisation",
      "Klare Verhaltensregeln für alle Beschäftigten und Nutzer",
      "Grundlage für Unterweisungen und Evakuierungsübungen",
    ],
    rechtsgrundlagen: [
      "DIN 14096 (Brandschutzordnung Teil A, B, C)",
      "ArbSchG",
      "ASR A2.2 (Feuerlöscher, Brandschutzhelfer – ergänzend)",
      "DGUV Vorschriften",
    ],
    ablauf: [
      "Begehung und Erfassung der Objektgegebenheiten",
      "Festlegung der Brandschutzorganisation (Fluchtwege, Sammelplätze, Meldewege)",
      "Erstellung der Teile A (allgemein), B (für alle Nutzer) und C (für betriebliche Führungskräfte)",
      "Abnahme und Einführung, ggf. Fortschreibung bei Änderungen",
    ],
    ergebnis:
      "Eine vollständige, an Ihr Objekt angepasste Brandschutzordnung inkl. Aushang (Teil A) und Handlungsanweisungen für den Brandfall.",
    seoHref: "/brandschutzordnung-koeln",
    seoLabel: "Brandschutzordnung Köln",
  },
  {
    id: "evakuierungskonzept",
    title: "Erstellung und Fortschreibung von Evakuierungskonzepten",
    shortDescription: "Strukturierte Evakuierungskonzepte für sichere Räumung im Ernstfall.",
    description:
      "Ein Evakuierungskonzept definiert Abläufe, Verantwortlichkeiten und Maßnahmen für die Räumung des Gebäudes. Wir erstellen und fortschreiben Evakuierungskonzepte, die zu Ihrer Nutzung und Ihren Räumlichkeiten passen.",
    nutzen: [
      "Schnelle und geordnete Räumung im Brandfall",
      "Klare Rollen (z. B. Evakuierungshelfer) und Abläufe",
      "Erfüllung arbeitsschutz- und bauaufsichtlicher Anforderungen",
    ],
    rechtsgrundlagen: ["ArbSchG", "ASR A2.2", "BauO NRW", "Arbeitsstättenverordnung"],
    ablauf: [
      "Erfassung der Nutzung, Fluchtwege und Sammelplätze",
      "Festlegung von Evakuierungswegen und Alarmierung",
      "Definition von Verantwortlichkeiten und Ablauf",
      "Dokumentation und Einbindung in Brandschutzordnung und Übungen",
    ],
    ergebnis:
      "Ein schlüssiges Evakuierungskonzept als Bestandteil Ihrer Brandschutzorganisation, inkl. Fortschreibung bei Änderungen.",
  },
  {
    id: "feuerwehr-fluchtplaene",
    title: "Erstellung, Überprüfung und Fortschreibung von Feuerwehrplänen sowie Flucht- und Rettungsplänen",
    shortDescription: "Feuerwehrpläne und Flucht- und Rettungspläne nach Norm für Einsatzkräfte und Nutzer.",
    description:
      "Drei Ebenen werden getrennt: bauordnungsrechtlicher Rettungswegnachweis in Konzept und Plänen; Feuerwehrpläne nach DIN 14095 für die Einsatzleitung; Flucht- und Rettungspläne nach ASR A2.3 für Beschäftigte und Besucher. Wir erstellen, prüfen und fortschreiben die betroffenen Planarten.",
    nutzen: [
      "Feuerwehrplan und FSD für die Einsatzleitung",
      "Flucht- und Rettungspläne für den Betrieb (Arbeitsschutz)",
      "Abgleich mit genehmigtem Brandschutzkonzept – keine widersprüchlichen Pläne",
    ],
    rechtsgrundlagen: [
      "BauO NRW (Rettungswege im Nachweis)",
      "DIN 14095 (Feuerwehrplan)",
      "ASR A2.3 (Flucht- und Rettungsplan)",
      "ArbStättV",
    ],
    ablauf: [
      "Grundrisse und Nutzungsdaten erfassen",
      "Fluchtwege, Rettungswege und brandschutzrelevante Einrichtungen einzeichnen",
      "Pläne normgerecht erstellen und kennzeichnen",
      "Regelmäßige Überprüfung und Fortschreibung bei Änderungen",
    ],
    ergebnis:
      "Aktuelle Feuerwehrpläne und Flucht- und Rettungspläne in der erforderlichen Anzahl und Aufhängung.",
  },
  {
    id: "beurteilung-brandgefaehrdung",
    title: "Beurteilung von Brandgefährdungen an Arbeitsplätzen",
    shortDescription: "Systematische Beurteilung der Brandgefährdung gemäß Arbeitsschutz.",
    description:
      "Der Arbeitgeber muss Brandgefährdungen an Arbeitsplätzen beurteilen. Wir unterstützen Sie bei der systematischen Beurteilung und leiten daraus erforderliche Maßnahmen ab.",
    nutzen: [
      "Rechtssichere Erfüllung der Beurteilungspflicht",
      "Transparenz über Brandrisiken und Gegenmaßnahmen",
      "Grundlage für Unterweisungen und Brandschutzorganisation",
    ],
    rechtsgrundlagen: ["ArbSchG", "ASR A2.2", "DGUV Vorschrift 1"],
    ablauf: [
      "Erfassung der Arbeitsplätze und Tätigkeiten",
      "Identifikation von Zündquellen, brennbaren Stoffen und sonstigen Einflussfaktoren",
      "Beurteilung und Dokumentation",
      "Ableitung und Priorisierung von Maßnahmen",
    ],
    ergebnis:
      "Dokumentierte Beurteilung der Brandgefährdung mit konkreten Maßnahmenempfehlungen.",
  },
  {
    id: "brand-explosionsgefahren",
    title: "Ermittlung von Brand- und Explosionsgefahren",
    shortDescription: "Ermittlung und Bewertung von Brand- und Explosionsgefahren nach Gefahrstoffrecht.",
    description:
      "Wo brennbare Stoffe oder explosionsfähige Atmosphären vorkommen können, sind Brand- und Explosionsgefahren zu ermitteln. Wir unterstützen Sie bei der fachgerechten Ermittlung und beim Explosionsschutzdokument.",
    nutzen: [
      "Sicherheit im Umgang mit brennbaren und explosionsfähigen Stoffen",
      "Erfüllung der Anforderungen aus Gefahrstoff- und Arbeitsschutzrecht",
      "Grundlage für technische und organisatorische Schutzmaßnahmen",
    ],
    rechtsgrundlagen: ["GefStoffV", "BetrSichV", "TRBS", "ASR A2.2"],
    ablauf: [
      "Erfassung der Stoffe, Prozesse und Räume",
      "Ermittlung und Bewertung der Gefahren",
      "Erstellung bzw. Fortschreibung des Explosionsschutzdokuments",
      "Ableitung von Maßnahmen und Überprüfungsintervallen",
    ],
    ergebnis:
      "Ermittlung und Dokumentation der Brand- und Explosionsgefahren inkl. erforderlicher Maßnahmen.",
  },
  {
    id: "behoerdliche-anordnungen",
    title: "Unterstützung bei der Umsetzung behördlicher Anordnungen",
    shortDescription: "Umsetzung behördlicher Brandschutz-Auflagen – fachlich bis zur Abnahme.",
    description:
      "Behördliche Anordnungen und Nachforderungen der Bauaufsicht oder Feuerwehr setzen wir fachlich um: Auslegung der Auflagen, Maßnahmenplan, Dokumentation – bis zur Abnahme. Bezug zu BauO NRW und bestehendem Nachweis (Konzept, BSO, Pläne).",
    nutzen: [
      "Sichere und rechtssichere Erfüllung der Auflagen",
      "Schnellere Abnahme durch klare Umsetzungsplanung",
      "Vermeidung von Nachforderungen und Verzögerungen",
    ],
    rechtsgrundlagen: ["BauO NRW", "Behördliche Bescheide und Auflagen"],
    ablauf: [
      "Sichtung der Anordnung und Fristen",
      "Umsetzungsplan und Priorisierung",
      "Fachliche Begleitung bei Maßnahmen (baulich, anlagentechnisch, organisatorisch)",
      "Dokumentation und Vorbereitung der Abnahme",
    ],
    ergebnis:
      "Umsetzung der behördlichen Anordnungen mit Nachweis und Abnahme.",
  },
  {
    id: "brandschutzhelfer-ausbildung",
    title: "Ausbildung von Brandschutzhelfern (gemäß ASR A2.2)",
    shortDescription: "Normgerechte Ausbildung Ihrer Brandschutzhelfer in Theorie und Praxis.",
    description:
      "Brandschutzhelfer müssen in ausreichender Anzahl vorhanden und ausgebildet sein. Wir schulen Ihre Mitarbeiter nach ASR A2.2 in Theorie und Praxis inkl. Handhabung von Feuerlöscheinrichtungen.",
    nutzen: [
      "Erfüllung der gesetzlichen Anforderung an Brandschutzhelfer",
      "Sichere Erstbekämpfung und Unterstützung bei der Evakuierung",
      "Praxistaugliche Übung mit Löschgeräten",
    ],
    rechtsgrundlagen: ["ASR A2.2", "ArbSchG", "DGUV Information 205-023"],
    ablauf: [
      "Festlegung der erforderlichen Anzahl Brandschutzhelfer",
      "Theoretischer Teil: Rechtsgrundlagen, Brandlehre, Verhalten im Brandfall",
      "Praktischer Teil: Handhabung von Feuerlöschern und ggf. Wandhydranten",
      "Teilnahmebescheinigung und Empfehlung zur Wiederholungsschulung",
    ],
    ergebnis:
      "Ausgebildete Brandschutzhelfer mit Nachweis und aktualisierter Brandschutzorganisation.",
    seoHref: "/brandschutzhelfer-ausbildung-koeln",
    seoLabel: "Brandschutzhelfer-Ausbildung Köln",
  },
  {
    id: "feuerversicherer-anordnungen",
    title: "Umsetzung behördlicher Anordnungen sowie Erfüllung der Anforderungen des Feuerversicherers",
    shortDescription: "Erfüllung von Auflagen aus Behörde und Feuerversicherung.",
    description:
      "Neben der Behörde können auch Feuerversicherer Auflagen und Anforderungen stellen. Wir unterstützen Sie dabei, beide Anforderungsgeber fachgerecht zu bedienen und Doppelarbeit zu vermeiden.",
    nutzen: [
      "Vollständige Erfüllung von Behörde und Versicherer",
      "Vermeidung von Leistungseinschränkungen im Schadenfall",
      "Ein Ansprechpartner für alle brandschutztechnischen Nachweise",
    ],
    rechtsgrundlagen: ["BauO NRW", "VdS-Richtlinien", "Vertragliche Versicherungsbedingungen"],
    ablauf: [
      "Zusammenstellung aller Auflagen und Anforderungen",
      "Abgleich und priorisierte Umsetzungsplanung",
      "Umsetzung und Dokumentation",
      "Nachweis gegenüber Behörde und Versicherer",
    ],
    ergebnis:
      "Nachweis der Erfüllung behördlicher und versicherertechnischer Anforderungen.",
  },
  {
    id: "neubau-umbau-nutzungsaenderung",
    title: "Einhaltung von Brandschutzbestimmungen bei Neu-, Um- und Erweiterungsbauten, Nutzungsänderungen, Anmietungen und Beschaffungen",
    shortDescription: "Brandschutz bei Neubau, Umbau und Nutzungsänderung – Konzept, Abnahme, Betrieb.",
    description:
      "Bei Neubau, Umbau, Nutzungsänderung, Anmietung oder Beschaffung erstellen wir den passenden brandschutztechnischen Nachweis (Konzept, Stellungnahme, Fortschreibung) nach BauO NRW und begleiten bis Abnahme – inkl. Übergabe in den Betrieb (Brandschutzordnung, Pläne).",
    nutzen: [
      "Rechtssichere Planung und Umsetzung",
      "Keine bösen Überraschungen bei Abnahme oder Betriebsprüfung",
      "Einheitliche Anforderungen aus Bauordnung und Arbeitsschutz",
    ],
    rechtsgrundlagen: ["BauO NRW", "ArbStättV", "ASR", "Vorgaben Feuerversicherer"],
    ablauf: [
      "Frühzeitige Einbindung in die Planung",
      "Brandschutzkonzept / Stellungnahme",
      "Begleitung der Umsetzung und Abnahme",
      "Übergabe in den Betrieb (Brandschutzordnung, Pläne, Unterweisungen)",
    ],
    ergebnis:
      "Brandschutzrechtlich abgesichertes Projekt mit durchgängiger Dokumentation.",
  },
  {
    id: "feuerloescheinrichtungen",
    title: "Ausstattung der Arbeitsstätten mit Feuerlöscheinrichtungen und Auswahl der Löschmittel",
    shortDescription: "Richtige Auswahl und Anordnung von Feuerlöschern und Löschmittel nach Gefahrenbereichen.",
    description:
      "Arbeitsstätten müssen mit geeigneten Feuerlöscheinrichtungen ausgestattet sein. Wir ermitteln den Bedarf, wählen die Löschmittel passend zu Ihren Gefahren aus und prüfen die sachgerechte Anordnung.",
    nutzen: [
      "Rechtkonforme und zweckmäßige Ausstattung",
      "Optimale Löschwirkung durch passende Löschmittel",
      "Grundlage für Unterweisungen und Brandschutzhelfer",
    ],
    rechtsgrundlagen: ["ASR A2.2", "ArbStättV", "DIN EN 3", "TRBS"],
    ablauf: [
      "Beurteilung der Brandgefährdung und der Räume",
      "Berechnung bzw. Festlegung der erforderlichen Anzahl und Art",
      "Vorschlag für Aufstellorte und Kennzeichnung",
      "Abnahme und Dokumentation, ggf. Einbindung in Prüfintervalle",
    ],
    ergebnis:
      "Konzept und Nachweis der Ausstattung mit Feuerlöscheinrichtungen inkl. Löschmittelauswahl.",
  },
  {
    id: "evakuierungsuebungen",
    title: "Planen, Organisieren und Durchführen von Evakuierungsübungen",
    shortDescription: "Praktische Evakuierungsübungen zur Überprüfung Ihrer Abläufe und Wege.",
    description:
      "Evakuierungsübungen zeigen, ob Fluchtwege und Abläufe im Ernstfall funktionieren. Wir planen und führen Evakuierungsübungen durch, werten sie aus und leiten Verbesserungen ab.",
    nutzen: [
      "Überprüfung der Evakuierungsabläufe unter realistischen Bedingungen",
      "Sensibilisierung der Nutzer und Stärkung der Brandschutzorganisation",
      "Nachweis für Behörden und Versicherer",
    ],
    rechtsgrundlagen: ["ASR A2.2", "ArbSchG", "Brandschutzordnung"],
    ablauf: [
      "Abstimmung mit Ihnen über Ziel, Umfang und Termin",
      "Vorbereitung (Sammelplätze, Rollen, Alarmierung)",
      "Durchführung der Übung und Beobachtung",
      "Nachbesprechung, Protokoll und Maßnahmenplan",
    ],
    ergebnis:
      "Durchgeführte Evakuierungsübung mit Protokoll und Empfehlungen zur Optimierung.",
  },
  {
    id: "brandschauen-begehungen",
    title: "Teilnahme an behördlichen Brandschauen und Durchführung interner Brandschutzbegehungen",
    shortDescription: "Fachliche Begleitung bei Brandschauen und regelmäßige interne Begehungen.",
    description:
      "Bei behördlichen Brandschauen begleiten wir Sie fachlich. Zusätzlich führen wir interne Brandschutzbegehungen durch, um Mängel frühzeitig zu erkennen und abzustellen.",
    nutzen: [
      "Sichere Vorbereitung und Begleitung bei der Behörde",
      "Laufende Überprüfung des brandschutztechnischen Zustands",
      "Rechtzeitige Mängelbeseitigung vor Auflagen",
    ],
    rechtsgrundlagen: ["BauO NRW", "ASR A2.2", "Brandschutzordnung"],
    ablauf: [
      "Abstimmung mit Ihnen über Umfang und Termin",
      "Begehung mit Prüfliste (Fluchtwege, Kennzeichnung, Löscher, Anlagen usw.)",
      "Dokumentation und Mängelbericht",
      "Priorisierung und Unterstützung bei der Mängelbeseitigung",
    ],
    ergebnis:
      "Protokoll der Begehung mit Mängelliste und Handlungsempfehlungen.",
  },
  {
    id: "maengel-massnahmen",
    title: "Melden von Mängeln, Vorschlagen von Maßnahmen und Überwachung der Mängelbeseitigung",
    shortDescription: "Systematische Mängelerfassung und Nachverfolgung der Beseitigung.",
    description:
      "Brandschutzmängel müssen erkannt, gemeldet und beseitigt werden. Wir erfassen Mängel, schlagen geeignete Maßnahmen vor und unterstützen Sie bei der Überwachung der Beseitigung bis zur Abnahme.",
    nutzen: [
      "Vollständige und nachvollziehbare Mängeldokumentation",
      "Rechtzeitige und fachgerechte Beseitigung",
      "Nachweis für Behörden und Versicherer",
    ],
    rechtsgrundlagen: ["ASR A2.2", "Brandschutzordnung", "Betriebliche Vorgaben"],
    ablauf: [
      "Mängelerfassung (Begehung, Prüfberichte, Anordnungen)",
      "Mängelbericht mit Priorisierung und Maßnahmenvorschlägen",
      "Abstimmung mit Ihnen über Umsetzung und Fristen",
      "Überprüfung der Beseitigung und Freigabe",
    ],
    ergebnis:
      "Lückenlose Mängeldokumentation und Nachweis der Beseitigung.",
  },
  {
    id: "unterweisung-fuehrungskraefte",
    title: "Unterstützung der Führungskräfte bei regelmäßigen Unterweisungen im Brandschutz",
    shortDescription: "Unterstützung bei der Planung und Durchführung von Brandschutzunterweisungen.",
    description:
      "Beschäftigte müssen regelmäßig im Brandschutz unterwiesen werden. Wir unterstützen Führungskräfte mit Unterweisungsmaterialien, Ablaufplänen und ggf. bei der Durchführung.",
    nutzen: [
      "Rechtssichere und praxisnahe Unterweisungen",
      "Entlastung der Führungskräfte durch vorbereitete Inhalte",
      "Einheitlicher Standard in allen Bereichen",
    ],
    rechtsgrundlagen: ["ArbSchG", "ASR A2.2", "Brandschutzordnung"],
    ablauf: [
      "Abstimmung über Zielgruppe, Umfang und Intervall",
      "Bereitstellung von Unterweisungsunterlagen (Inhalte, Ablauf)",
      "Optional: Durchführung oder Co-Moderation",
      "Dokumentation der durchgeführten Unterweisungen",
    ],
    ergebnis:
      "Durchgeführte Unterweisungen mit dokumentiertem Nachweis.",
  },
  {
    id: "aus-fortbildung-besondere-aufgaben",
    title: "Aus- und Fortbildung von Beschäftigten mit besonderen Aufgaben im Brandfall (z. B. Brandschutzhelfer gemäß ASR A2.2)",
    shortDescription: "Aus- und Fortbildung für Brandschutzhelfer und weitere besondere Aufgaben.",
    description:
      "Neben der Grundausbildung zum Brandschutzhelfer bieten wir Fortbildungen und Schulungen für weitere Rollen an (z. B. Evakuierungshelfer, Brandschutzbeauftragte). Alle Schulungen orientieren sich an den anerkannten Regeln.",
    nutzen: [
      "Aktuelle und normgerechte Qualifikation Ihrer Mitarbeiter",
      "Sicherer Umgang mit Aufgaben im Brandfall",
      "Erfüllung der Anforderungen aus ASR A2.2 und Brandschutzordnung",
    ],
    rechtsgrundlagen: ["ASR A2.2", "DGUV Information 205-023", "DIN 14096"],
    ablauf: [
      "Festlegung der erforderlichen Rollen und Teilnehmer",
      "Durchführung der Aus- bzw. Fortbildung (Theorie und Praxis)",
      "Teilnahmebescheinigung und Empfehlung zu Wiederholungsintervallen",
      "Optional: Einbindung in Ihre Brandschutzordnung",
    ],
    ergebnis:
      "Qualifizierte Beschäftigte mit Nachweis und aktualisierter Brandschutzorganisation.",
  },
  {
    id: "beratung-baulich-anlagentechnisch-organisatorisch",
    title: "Beratung im baulichen, anlagentechnischen und organisatorischen Brandschutz",
    shortDescription: "Umfassende Brandschutzberatung für alle drei Säulen des Brandschutzes.",
    description:
      "Brandschutz besteht aus baulichem, anlagentechnischem und organisatorischem Brandschutz. Wir beraten Sie in allen drei Bereichen – von der ersten Idee über die Planung bis zur Betriebsphase.",
    nutzen: [
      "Ein Ansprechpartner für alle Brandschutzthemen",
      "Abgestimmte Maßnahmen über alle Gewerke hinweg",
      "Rechtssicherheit und Wirtschaftlichkeit",
    ],
    rechtsgrundlagen: ["BauO NRW", "ArbSchG", "ASR", "DIN-Normen", "VdS-Richtlinien"],
    ablauf: [
      "Klärung Ihrer Fragestellung und Ziele",
      "Analyse der bestehenden Situation (Bau, Anlagen, Organisation)",
      "Beratung und Konzeptempfehlung",
      "Optional: Begleitung bei der Umsetzung",
    ],
    ergebnis:
      "Klare, umsetzbare Empfehlungen im baulichen, anlagentechnischen und organisatorischen Brandschutz.",
    seoHref: "/brandschutzberatung-koeln",
    seoLabel: "Brandschutzberatung Köln",
  },
];

/** Teaser für Startseite: Schwerpunkte Konzept oder Stellungnahme, BSO, Umbau, behördliche Auflagen, Beratung. */
const LEISTUNGEN_TEASER_IDS = [
  "stellungnahmen-konzepte",
  "brandschutzordnung",
  "neubau-umbau-nutzungsaenderung",
  "behoerdliche-anordnungen",
  "beratung-baulich-anlagentechnisch-organisatorisch",
] as const;

/** Kürzere Teaser-Titel und Texte für die Startseite. */
const LEISTUNGEN_TEASER_TITLES: Partial<Record<(typeof LEISTUNGEN_TEASER_IDS)[number], string>> = {
  "stellungnahmen-konzepte": "Brandschutzkonzept & Stellungnahme",
  brandschutzordnung: "Brandschutzordnung",
  "neubau-umbau-nutzungsaenderung": "Neubau, Umbau & Nutzungsänderung",
  "behoerdliche-anordnungen": "Behördliche Auflagen",
  "beratung-baulich-anlagentechnisch-organisatorisch": "Brandschutzberatung",
};

const LEISTUNGEN_TEASER_COPY: Partial<Record<(typeof LEISTUNGEN_TEASER_IDS)[number], string>> = {
  "stellungnahmen-konzepte":
    "Konzept, brandschutztechnische Stellungnahme und Fortschreibung nach BauO NRW – für Genehmigung, Umbau und Sonderbau.",
  brandschutzordnung: "Teil A, B und C nach DIN 14096 – Erstellung, Aushang und Fortschreibung.",
  "neubau-umbau-nutzungsaenderung":
    "Nachweis und Begleitung von der Planung bis zur Abnahme und Übergabe in den Betrieb.",
  "behoerdliche-anordnungen":
    "Umsetzung von Auflagen und Nachforderungen der Bauaufsicht oder Feuerwehr bis zur Abnahme.",
  "beratung-baulich-anlagentechnisch-organisatorisch":
    "Beratung baulich, anlagentechnisch und organisatorisch – ein Ansprechpartner.",
};

const LEISTUNGEN_TEASER_FEATURED: (typeof LEISTUNGEN_TEASER_IDS)[number][] = [
  "stellungnahmen-konzepte",
  "brandschutzordnung",
];

const LEISTUNGEN_TEASER_SECONDARY: (typeof LEISTUNGEN_TEASER_IDS)[number][] = [
  "neubau-umbau-nutzungsaenderung",
  "behoerdliche-anordnungen",
  "beratung-baulich-anlagentechnisch-organisatorisch",
];

export type HomepageLeistungenTeaserItem = {
  title: string;
  description: string;
  href: string;
};

export type HomepageLeistungenTeaser = {
  featured: HomepageLeistungenTeaserItem[];
  secondary: HomepageLeistungenTeaserItem[];
};

function mapTeaserItem(id: (typeof LEISTUNGEN_TEASER_IDS)[number]): HomepageLeistungenTeaserItem {
  const l = LEISTUNGEN.find((x) => x.id === id)!;
  return {
    title: LEISTUNGEN_TEASER_TITLES[id] ?? l.title,
    description: LEISTUNGEN_TEASER_COPY[id] ?? l.shortDescription,
    href: l.seoHref ?? `/leistungen#${l.id}`,
  };
}

/** Startseite: zwei Schwerpunkt-Karten + drei ergänzende Leistungen. */
export function getHomepageLeistungenTeaser(): HomepageLeistungenTeaser {
  return {
    featured: LEISTUNGEN_TEASER_FEATURED.map(mapTeaserItem),
    secondary: LEISTUNGEN_TEASER_SECONDARY.map(mapTeaserItem),
  };
}

/** @deprecated Nutze getHomepageLeistungenTeaser – flache Liste für Abwärtskompatibilität. */
export function getLeistungenTeaser(): HomepageLeistungenTeaserItem[] {
  const { featured, secondary } = getHomepageLeistungenTeaser();
  return [...featured, ...secondary];
}
