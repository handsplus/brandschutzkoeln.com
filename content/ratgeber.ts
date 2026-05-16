/**
 * Ratgeber-Artikel: BauO NRW & Brandschutz (eigene Formulierungen, praxisnah für Köln).
 */

export type RatgeberSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type RatgeberArticle = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  sections: RatgeberSection[];
  relatedLinks: { href: string; label: string }[];
  faq: { question: string; answer: string }[];
};

export const RATGEBER_ARTICLES: RatgeberArticle[] = [
  {
    slug: "gebaeudeklassen-brandschutz-bauo-nrw",
    title: "Gebäudeklassen und Brandschutz nach BauO NRW",
    excerpt:
      "Die Gebäudeklasse bestimmt viele brandschutztechnische Anforderungen. Was GK 1 bis 5 für Ihr Objekt bedeutet – verständlich erklärt.",
    metaTitle: "Gebäudeklassen Brandschutz BauO NRW | Ratgeber",
    metaDescription:
      "Gebäudeklassen 1–5 und Brandschutz nach BauO NRW: Einordnung, typische Anforderungen und was Betriebe in Köln praktisch beachten sollten.",
    keywords: [
      "Gebäudeklasse Brandschutz",
      "BauO NRW Gebäudeklassen",
      "Brandschutz Gebäudeklasse",
      "Brandschutz Köln",
    ],
    sections: [
      {
        id: "was-sind-gk",
        title: "Was sind Gebäudeklassen?",
        paragraphs: [
          "Die Bauordnung für das Land Nordrhein-Westfalen (BauO NRW) teilt Gebäude in fünf Gebäudeklassen (GK 1 bis GK 5) ein. Die Einstufung hängt von Nutzung, Größe, Höhe und der Zahl möglicher Aufenthaltsräume ab – nicht vom „Gefühl“, wie gefährlich ein Betrieb ist.",
          "Für den Brandschutz ist die Gebäudeklasse zentral: Sie steuert unter anderem Anforderungen an tragende Bauteile, Fluchtwege, Brandabschnitte und die Notwendigkeit besonderer Nachweise.",
        ],
      },
      {
        id: "ueberblick",
        title: "Überblick GK 1 bis GK 5",
        paragraphs: [
          "Je höher die Gebäudeklasse, desto strenger sind in der Regel die baulichen und organisatorischen Brandschutzanforderungen. In der Praxis entscheidet oft die Nutzung (z. B. Versammlungsstätte, Pflege, Industrie) über die Einordnung.",
        ],
        list: [
          "GK 1: kleinere, weniger komplexe Gebäude mit begrenzter Personenzahl",
          "GK 2 und 3: mittlere Komplexität, häufig Gewerbe und Büros",
          "GK 4 und 5: größere oder höhere Gebäude mit erhöhtem Schutzbedarf",
          "Sonderbauten: können zusätzliche Anforderungen auslösen (eigener Regelungskomplex)",
        ],
      },
      {
        id: "praxis",
        title: "Was das für Betriebe in Köln bedeutet",
        paragraphs: [
          "Bei Neubau, Umbau oder Nutzungsänderung prüft die Bauaufsicht, ob die geplante Nutzung zur Gebäudeklasse passt und welche brandschutztechnischen Nachweise erforderlich sind. Fehlen belastbare Unterlagen, verzögert sich die Genehmigung oder entstehen teure Nachforderungen.",
          "Wir unterstützen Sie dabei, die brandschutzrechtliche Einordnung nachvollziehbar darzustellen und passende Konzepte oder Stellungnahmen vorzubereiten.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/brandschutz-koeln", label: "Brandschutz in Köln" },
    ],
    faq: [
      {
        question: "Wer legt die Gebäudeklasse fest?",
        answer:
          "Die Einordnung erfolgt anhand der BauO NRW anhand objektbezogener Merkmale. In Genehmigungsverfahren bewertet die Bauaufsicht die geplante Nutzung und Dimensionierung.",
      },
      {
        question: "Kann sich die Gebäudeklasse durch Umbau ändern?",
        answer:
          "Ja. Nutzungsänderungen, Vergrößerungen oder neue Aufenthaltsräume können eine andere Einordnung und damit neue Brandschutzanforderungen auslösen.",
      },
    ],
  },
  {
    slug: "sonderbauten-brandschutz",
    title: "Sonderbauten: Was das für den Brandschutz bedeutet",
    excerpt:
      "Sonderbauten gehen über „normale“ Gebäude hinaus. Welche Pflichten entstehen und wann ein Brandschutzkonzept nötig wird.",
    metaTitle: "Sonderbauten Brandschutz BauO NRW | Ratgeber",
    metaDescription:
      "Sonderbauten nach BauO NRW: Abgrenzung, typische Brandschutzanforderungen und praktische Umsetzung für Unternehmen in Köln.",
    keywords: ["Sonderbau Brandschutz", "Sonderbauten BauO NRW", "Brandschutz Sonderbau Köln"],
    sections: [
      {
        id: "definition",
        title: "Was ist ein Sonderbau?",
        paragraphs: [
          "Sonderbauten sind bauliche Anlagen, die aufgrund ihrer Nutzung, Größe oder besonderen Gefährdung über den allgemeinen Standard hinausgehen. Beispiele sind Versammlungsstätten, Krankenhäuser, Hochhäuser, Industrieanlagen mit erhöhter Brandlast oder verkaufsflächenintensive Objekte.",
          "Für diese Anlagen gelten ergänzende brandschutztechnische Anforderungen – oft in Verbindung mit einem Brandschutzkonzept und abgestimmten Nachweisen gegenüber Bauaufsicht und Feuerwehr.",
        ],
      },
      {
        id: "anforderungen",
        title: "Typische brandschutztechnische Themen",
        list: [
          "Brandabschnitte und Feuerwiderstandsklassen",
          "Sicherheitsbeleuchtung und Alarmierung",
          "Flucht- und Rettungswege für viele Personen",
          "Löschwasserversorgung und Zufahrten",
          "Organisatorischer Brandschutz (Rollen, Übungen, Ordnungen)",
        ],
        paragraphs: [
          "Welche Maßnahmen konkret gefordert werden, hängt vom Einzelfall ab. Eine pauschale Checkliste ersetzt keine fachliche Beurteilung.",
        ],
      },
      {
        id: "koeln",
        title: "Praxis in Köln und Umgebung",
        paragraphs: [
          "In Köln treffen vielfältige Nutzungen auf dichte Bebauung und hohe Nutzungsmischung. Sonderbauten werden in der Regel besonders sorgfältig geprüft. Frühzeitige fachliche Begleitung reduziert Risiken in Genehmigung und Betrieb.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept erstellen lassen" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
    ],
    faq: [
      {
        question: "Ist jedes Gewerbegebäude ein Sonderbau?",
        answer: "Nein. Die Einordnung hängt von den Kriterien der BauO NRW ab, nicht allein von der Branche.",
      },
      {
        question: "Brauchen Sonderbauten immer ein Brandschutzkonzept?",
        answer:
          "Häufig ja oder zumindest erweiterte Nachweise. Im Einzelfall klären wir, welche Unterlagen erforderlich sind.",
      },
    ],
  },
  {
    slug: "brandschutzkonzept-wann-noetig",
    title: "Wann brauche ich ein Brandschutzkonzept?",
    excerpt:
      "Nicht jedes Vorhaben braucht ein vollständiges Konzept – aber viele Änderungen lösen Pflichten aus. Die wichtigsten Auslöser.",
    metaTitle: "Wann Brandschutzkonzept nötig? BauO NRW | Ratgeber",
    metaDescription:
      "Wann ist ein Brandschutzkonzept nach BauO NRW erforderlich? Auslöser bei Neubau, Umbau und Nutzungsänderung – mit Praxishinweisen für Köln.",
    keywords: [
      "Brandschutzkonzept Pflicht",
      "Brandschutzkonzept wann",
      "Brandschutzkonzept Köln",
      "BauO NRW Brandschutzkonzept",
    ],
    sections: [
      {
        id: "ausloeser",
        title: "Häufige Auslöser",
        list: [
          "Neubau oder Erweiterung mit genehmigungspflichtigen Anforderungen",
          "Nutzungsänderung (z. B. Lager zu Produktion, Büro zu Praxis)",
          "Erhöhung der Personenanzahl oder Veränderung der Fluchtwegsituation",
          "Sonderbauten und besondere Gefährdungen",
          "Auflagen von Bauaufsicht, Feuerwehr oder Versicherer",
        ],
        paragraphs: [
          "Ein Brandschutzkonzept beschreibt, wie die brandschutzrechtlichen Anforderungen für ein konkretes Vorhaben erfüllt werden – baulich, anlagentechnisch und organisatorisch.",
        ],
      },
      {
        id: "inhalt",
        title: "Was ein Konzept typischerweise enthält",
        paragraphs: [
          "Je nach Vorhaben umfasst ein Konzept unter anderem Gefährdungsbeurteilungen, Maßnahmen zu Fluchtwegen, Brandabschnitten, technischen Anlagen, Betriebsorganisation und Abstimmungen mit Beteiligten. Ziel ist eine nachvollziehbare, prüffähige Gesamtdarstellung.",
        ],
      },
      {
        id: "vorgehen",
        title: "Empfohlenes Vorgehen",
        paragraphs: [
          "Vor Investitionen oder Baubeginn sollten Sie klären, ob und welcher Nachweis erforderlich ist. Das spart Zeit, Kosten und Konflikte im Genehmigungsverfahren. Wir erstellen Konzepte und Stellungnahmen für Köln und Umgebung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Leistung: Brandschutzkonzept Köln" },
      { href: "/kontakt", label: "Unverbindliche Erstberatung" },
    ],
    faq: [
      {
        question: "Reicht eine Brandschutzordnung statt eines Konzepts?",
        answer:
          "Nein. Die Ordnung regelt den Betrieb; das Konzept belegt die Erfüllung baulicher und technischer Anforderungen im Vorhaben. Beides kann parallel nötig sein.",
      },
    ],
  },
  {
    slug: "flucht-und-rettungswege-bauo-nrw",
    title: "Flucht- und Rettungswege nach BauO NRW",
    excerpt:
      "Fluchtwege sind Lebensrettung im Ernstfall. Was die BauO NRW fordert und was Betriebe organisatorisch sicherstellen müssen.",
    metaTitle: "Flucht- und Rettungswege BauO NRW | Ratgeber",
    metaDescription:
      "Flucht- und Rettungswege nach BauO NRW: Anforderungen, Kennzeichnung, Nutzungssicherung und Umsetzung im Betrieb in Köln.",
    keywords: [
      "Fluchtweg Brandschutz",
      "Rettungsweg BauO NRW",
      "Fluchtweg Gewerbe",
      "Brandschutz Köln",
    ],
    sections: [
      {
        id: "grundlagen",
        title: "Grundlagen",
        paragraphs: [
          "Fluchtwege müssen jederzeit nutzbar, erkennbar und ausreichend dimensioniert sein. Die BauO NRW regelt dies in Verbindung mit technischen Regeln und der konkreten Gebäude-/Nutzungssituation.",
          "Rettungswege dienen zusätzlich der Einsatzkräfte. Blockierte Wege, fehlende Kennzeichnung oder dauerhaft zugestellte Türen sind häufige Mängel bei Begehungen.",
        ],
      },
      {
        id: "betrieb",
        title: "Organisatorische Pflichten im Betrieb",
        list: [
          "Fluchtwege freihalten (keine Lagerung, keine Stellflächen)",
          "Türen in Fluchtrichtung sichern, wo erforderlich",
          "Beleuchtung und Kennzeichnung instand halten",
          "Mitarbeitende unterweisen (Teil der Brandschutzordnung)",
          "Regelmäßige Begehungen und Dokumentation",
        ],
        paragraphs: [
          "Flucht- und Rettungspläne machen Wege für Beschäftigte und Besucher verständlich. Wir erstellen Pläne und begleiten die betriebliche Umsetzung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung Köln" },
      { href: "/leistungen", label: "Alle Leistungen" },
    ],
    faq: [
      {
        question: "Wer darf Flucht- und Rettungspläne erstellen?",
        answer:
          "Pläne sollten fachlich korrekt und betriebsspezifisch sein. Wir erstellen Pläne auf Grundlage der Objektbegehung und der geltenden Vorgaben.",
      },
    ],
  },
  {
    slug: "umbau-nutzungsaenderung-brandschutz",
    title: "Brandschutz bei Umbau und Nutzungsänderung",
    excerpt:
      "Umbauten ändern oft heimlich die Brandgefährdung. So vermeiden Sie Genehmigungsstaus und teure Nachrüstungen.",
    metaTitle: "Umbau Nutzungsänderung Brandschutz | Ratgeber",
    metaDescription:
      "Brandschutz bei Umbau und Nutzungsänderung in NRW: Pflichten, typische Fehler und sinnvolle Schritte für Unternehmen in Köln.",
    keywords: [
      "Nutzungsänderung Brandschutz",
      "Umbau Brandschutz Köln",
      "Brandschutz Genehmigung Umbau",
    ],
    sections: [
      {
        id: "risiko",
        title: "Warum Umbauten kritisch sind",
        paragraphs: [
          "Viele Unternehmen investieren zuerst in Technik oder Einbauten – und prüfen erst später, ob die Nutzung noch zur ursprünglichen brandschutzrechtlichen Einordnung passt. Flächenverschiebungen, neue Wände oder geänderte Personenströme können neue Anforderungen auslösen.",
        ],
      },
      {
        id: "schritte",
        title: "Sinnvolle Schritte vor dem Umbau",
        list: [
          "Ist-Zustand brandschutztechnisch erfassen",
          "Geplante Nutzung und Personenanzahl definieren",
          "Prüfen, ob Genehmigung oder Anzeige erforderlich ist",
          "Frühzeitig Konzept oder Stellungnahme einplanen",
          "Unterlagen für Bauaufsicht und Versicherer vorbereiten",
        ],
        paragraphs: [
          "In Köln lohnt sich die Abstimmung vor Baubeginn besonders bei Mietobjekten und Mischnutzungen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept" },
      { href: "/brandschutzbeauftragter-koeln", label: "Brandschutzbeauftragter" },
    ],
    faq: [
      {
        question: "Gilt die alte Genehmigung nach Umbau weiter?",
        answer:
          "Nur, wenn die Nutzung und bauliche Änderungen weiterhin den ursprünglichen Voraussetzungen entsprechen. Bei wesentlichen Änderungen sind neue Nachweise nötig.",
      },
    ],
  },
  {
    slug: "bauaufsicht-unterlagen-koeln",
    title: "Bauaufsicht und Unterlagen in Köln",
    excerpt:
      "Welche brandschutztechnischen Unterlagen in Köln typischerweise eingereicht werden – und wie Sie das Verfahren entlasten.",
    metaTitle: "Bauaufsicht Köln Brandschutz Unterlagen | Ratgeber",
    metaDescription:
      "Brandschutzunterlagen für die Bauaufsicht in Köln: Konzept, Pläne, Nachweise – was wann sinnvoll ist und wie wir Sie unterstützen.",
    keywords: [
      "Bauaufsicht Köln Brandschutz",
      "Brandschutz Unterlagen",
      "Brandschutz Köln Behörde",
    ],
    sections: [
      {
        id: "rollen",
        title: "Rollen von Bauaufsicht und Feuerwehr",
        paragraphs: [
          "Die Bauaufsicht prüft die Einhaltung der Bauordnung NRW bei genehmigungsbedürftigen Vorhaben. Die Feuerwehr Köln wirkt insbesondere bei brandschutztechnischen Fragestellungen und Begehungen mit. Beide erwarten vollständige, nachvollziehbare Unterlagen.",
          "Wir bereiten Inhalte fachlich auf – die behördliche Entscheidung liegt bei den zuständigen Stellen.",
        ],
      },
      {
        id: "unterlagen",
        title: "Typische Unterlagen",
        list: [
          "Brandschutzkonzept oder brandschutztechnische Stellungnahme",
          "Flucht- und Rettungspläne",
          "Brandschutzordnung (Teil A/B/C)",
          "Nachweise zu Anlagentechnik (z. B. RWA, BMA – je nach Objekt)",
          "Dokumentation von Begehungen und Maßnahmen",
        ],
        paragraphs: [
          "Welche Unterlagen im Einzelfall nötig sind, hängt vom Vorhaben ab. Wir strukturieren die Unterlagen so, dass Prüfer den roten Faden schnell erkennen.",
        ],
      },
      {
        id: "unterstuetzung",
        title: "So unterstützen wir Sie",
        paragraphs: [
          "Von der Erstberatung über Konzepte und Pläne bis zur Begleitung bei Rückfragen: Sie haben einen Ansprechpartner für brandschutztechnische Inhalte. Details zu unseren Leistungen finden Sie unter Leistungen und Brandschutz in Köln.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutz-koeln", label: "Brandschutz in Köln" },
      { href: "/kontakt", label: "Kontakt aufnehmen" },
    ],
    faq: [
      {
        question: "Übernehmen Sie behördliche Aufgaben?",
        answer:
          "Nein. Wir erstellen fachliche Unterlagen und beraten. Entscheidungen trifft die zuständige Behörde.",
      },
    ],
  },
];

export function getRatgeberArticle(slug: string): RatgeberArticle | undefined {
  return RATGEBER_ARTICLES.find((a) => a.slug === slug);
}

export function getAllRatgeberSlugs(): string[] {
  return RATGEBER_ARTICLES.map((a) => a.slug);
}
