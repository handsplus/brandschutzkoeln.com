/**
 * Ratgeber-Artikel: BauO NRW & Brandschutz (eigene Formulierungen, praxisnah für Köln).
 */

import { RATGEBER_ARTICLES_BATCH2 } from "./ratgeber-articles-batch2";

export type { RatgeberArticle, RatgeberSection } from "./ratgeber-types";
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES: RatgeberArticle[] = [
  {
    slug: "gebaeudeklassen-brandschutz-bauo-nrw",
    title: "Gebäudeklassen und Brandschutz nach BauO NRW",
    excerpt:
      "GK 1 bis 5 nach BauO NRW: Einordnung nach Höhe und Nutzungseinheiten, typische Feuerwiderstände der Bauteile und was das für Rettungswege und Genehmigung bedeutet.",
    metaTitle: "Gebäudeklassen NRW | Brandschutz BauO | H&S+",
    metaDescription:
      "Gebäudeklassen 1–5 BauO NRW: Kriterien, Feuerwiderstand feuerhemmend bis feuerbeständig, Steck- vs. Drehleiter. Praxis Köln – H&S+ berät.",
    keywords: [
      "Gebäudeklassen NRW",
      "Gebäudeklasse Brandschutz",
      "BauO NRW Gebäudeklassen",
      "Brandschutz Gebäudeklasse",
      "Brandschutz Köln",
      "feuerhemmend feuerbeständig",
    ],
    sections: [
      {
        id: "was-sind-gk",
        title: "Was sind Gebäudeklassen?",
        paragraphs: [
          "Die Bauordnung für das Land Nordrhein-Westfalen (BauO NRW) teilt Gebäude in fünf Gebäudeklassen (GK 1 bis GK 5) ein. Die Einstufung ist nutzungsneutral – sie hängt vor allem von Gebäudehöhe, Zahl und Größe der Nutzungseinheiten sowie davon ab, ob ein Gebäude freistehend ist.",
          "Für den Brandschutz ist die Gebäudeklasse zentral: Sie bestimmt typische Anforderungen an tragende und nichttragende Bauteile, Brand- und Rauchwände, Decken, Rettungswege und oft den Umfang der Nachweise im Genehmigungsverfahren.",
          "Wichtig: Die Gebäudeklasse ist nicht dasselbe wie „Sonderbau“. Ein Gewerbebetrieb kann GK 3 sein und trotzdem Sonderbau-Anforderungen auslösen – beides muss geprüft werden.",
        ],
      },
      {
        id: "hoehe",
        title: "Gebäudehöhe (OKF) – woran gemessen wird",
        paragraphs: [
          "Maßgeblich ist die Höhe der Fußbodenoberkante (OKF) des höchsten Geschosses, in dem ein Aufenthaltsraum möglich ist – gemessen ab der Geländeoberfläche im Mittel (§ 2 Abs. 3 BauO NRW).",
          "Kellergeschosse zählen bei der Flächenberechnung der Nutzungseinheiten in der Regel nicht mit (Brutto-Grundflächen ohne Keller). Das erklärt, warum ein kompakter zweigeschossiger Gewerbebau anders eingestuft werden kann als ein scheinbar „niedriges“ Gebäude mit ausgebautem Dachgeschoss voller Aufenthaltsräume.",
        ],
      },
      {
        id: "einordnung",
        title: "Einordnung GK 1 bis GK 5 (BauO NRW)",
        paragraphs: [
          "Die folgende Übersicht fasst die gesetzlichen Einstufungskriterien zusammen. Im Einzelfall prüft die Bauaufsicht das konkrete Vorhaben.",
        ],
        list: [
          "GK 1a – freistehend: Höhe bis 7 m, höchstens 2 Nutzungseinheiten, Summe der Brutto-Grundflächen aller NE höchstens 400 m² (ohne Keller)",
          "GK 1b – land- oder forstwirtschaftliche Nutzung (und vergleichbare Nutzungen): eigene Zuordnung innerhalb GK 1",
          "GK 2 – nicht freistehend: dieselben Grenzen wie GK 1a (bis 7 m, höchstens 2 NE, insgesamt höchstens 400 m²)",
          "GK 3 – sonstige Gebäude mit Höhe bis 7 m, die nicht GK 1 oder 2 sind (z. B. mehr NE, größere Gesamtfläche, höhere Komplexität)",
          "GK 4 – Höhe bis 13 m und jede Nutzungseinheit höchstens 400 m² in einem Geschoss (ohne Keller)",
          "GK 5 – alle übrigen Gebäude, einschließlich unterirdischer Bauwerke (z. B. Höhe über 13 m oder mindestens eine NE über 400 m² in einem Geschoss)",
        ],
      },
      {
        id: "brandschutz-bauteile",
        title: "Typische brandschutztechnische Anforderungen an Bauteile",
        paragraphs: [
          "Je höher die Gebäudeklasse, desto höher sind in der Regel die geforderten Feuerwiderstandsklassen der baulichen Bauteile (z. B. feuerhemmend F 30, hochfeuerhemmend F 60, feuerbeständig F 90). Die genauen Werte stehen in den Anlagen zur BauO NRW und hängen von der Bauteilart ab (Wand, Decke, Dach, Brandwand).",
          "Die nachfolgende Darstellung ist eine Praxisübersicht – keine Ersatz-Berechnung für ein Genehmigungsverfahren:",
        ],
        list: [
          "GK 1 / GK 2: innenliegende Wände und Decken in der Regel feuerhemmend; bei GK 2 zusätzlich Anforderungen an trennende Wände zwischen Nutzungseinheiten (stärkerer Schutz zur Nachbar-Nutzung)",
          "GK 3: feuerhemmende Innenbauteile; an kritischen Stellen (z. B. tragende Wände, Brandwände) häufig feuerbeständig; Außenwände und Trennwände mit gestaffelten Anforderungen innen/außen",
          "GK 4: Decken und innenliegende Wände oft hochfeuerhemmend; tragende Außenwände und Brandwände feuerbeständig; Wände unter zusätzlicher mechanischer Beanspruchung verstärkt",
          "GK 5: tragende und aussteifende Bauteile, Decken und Brandwände in der Regel feuerbeständig; Brandwände unter mechanischer Beanspruchung ebenfalls feuerbeständig",
        ],
      },
      {
        id: "feuerwehr",
        title: "Feuerwehr-Einsatz und Rettungswege (Praxisbezug)",
        paragraphs: [
          "Die Gebäudeklasse hängt eng mit der Rettung von Personen über die Feuerwehr zusammen. Vereinfacht gilt in der Praxis oft:",
        ],
        list: [
          "GK 1 bis GK 3 (Gebäudehöhe bis 7 m): Rettung über Steckleitern und Innenangriffe häufig im Vordergrund – die Einsatzplanung ist „niedrig“",
          "GK 4 und GK 5 (bis 13 m bzw. darüber): für die Personenrettung von außen wird planerisch eher mit Drehleitern gerechnet; Rettungswege und Anleitbarkeit müssen nachvollziehbar sein",
        ],
      },
      {
        id: "feuerwehr-einordnung",
        title: "Einordnung für Planung und Genehmigung",
        paragraphs: [
          "Die Steck- und Drehleiter-Regel ist eine vereinfachte Orientierung, kein Ersatz für brandschutztechnische Planung. Sie erklärt aber, warum bei Geschäftshäusern und Mehrfamilienhäusern (häufig GK 4/5) die Anforderungen an Rettungswege und Feuerwehrzufahrten strenger sind als bei einem kleinen freistehenden Gebäude.",
        ],
      },
      {
        id: "praxis-koeln",
        title: "Was das in Köln bedeutet",
        paragraphs: [
          "In Köln sind Geschäfts- und Wohnhäuser mit Gewerbe im Erdgeschoss (Mischnutzung, oft GK 5) sowie kleinere Gewerbe- und Gastronomieobjekte (häufig GK 3 bis 5) typisch. Bei Nutzungsänderungen – etwa Laden zu Restaurant, Praxiszusammenlegung, Studio im Untergeschoss – kann sich die Gebäudeklasse nicht ändern, aber die Sonderbau-Regeln oder der Nachweis-Umfang schon.",
          "Wir ordnen im Genehmigungsverfahren ein, welche Bauteile und Nachweise für Ihr Vorhaben relevant sind, und bereiten Stellungnahmen oder Konzepte vor.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Abweichungen, Bestandsschutz, Denkmalschutz und Sonderbauten können strengere oder abweichende Lösungen erfordern. Für verbindliche Auskünfte ist immer das konkrete Bauvorhaben mit Plänen und Nutzungsbeschreibung maßgeblich – nicht allein eine allgemeine Gebäudeklassen-Tabelle.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Wer legt die Gebäudeklasse fest?",
        answer:
          "Die Einordnung folgt aus § 2 Abs. 3 BauO NRW anhand von Höhe, Nutzungseinheiten und Freistehendheit. Im Genehmigungsverfahren bewertet die Bauaufsicht die eingereichten Unterlagen.",
      },
      {
        question: "Kann sich die Gebäudeklasse durch Umbau ändern?",
        answer:
          "Die Klasse selbst ändert sich nur, wenn sich Höhe, Zahl oder Größe der Nutzungseinheiten ändern. Umbauten können aber neue brandschutztechnische Anforderungen oder Sonderbau-Pflichten auslösen – auch innerhalb derselben GK.",
      },
      {
        question: "Was bedeutet feuerhemmend vs. feuerbeständig?",
        answer:
          "Feuerhemmend (z. B. F 30) hält Feuer für eine begrenzte Zeit stand. Feuerbeständig (z. B. F 90) für länger – typisch bei höheren Gebäudeklassen für tragende Bauteile und Brandwände. Die genaue Zuordnung steht in den Anlagen zur BauO NRW.",
      },
      {
        question: "Ist ein Zweifamilienhaus immer GK 2?",
        answer:
          "Ein nicht freistehendes Zweifamilienhaus mit zwei Nutzungseinheiten und höchstens 400 m² Gesamtfläche (ohne Keller) und Höhe bis 7 m fällt unter GK 2. Freistehend mit denselben Grenzen wäre es GK 1a.",
      },
      {
        question: "Ab wann ist ein Gebäude GK 5?",
        answer:
          "Wenn es nicht in GK 1 bis 4 passt – typisch ab mehr als 13 m Höhe (OKF) oder wenn mindestens eine Nutzungseinheit in einem Geschoss größer als 400 m² ist. Viele Geschäftshäuser in Köln sind GK 5.",
      },
    ],
  },
  {
    slug: "sonderbauten-brandschutz",
    title: "Sonderbauten: Was das für den Brandschutz bedeutet",
    excerpt:
      "Sonderbauten gehen über „normale“ Gebäude hinaus. Welche Pflichten entstehen und wann ein Brandschutzkonzept nötig wird.",
    metaTitle: "Sonderbauten Brandschutz | BauO NRW | H&S+",
    metaDescription:
      "Sonderbauten nach BauO NRW: Abgrenzung, Brandschutzanforderungen & Konzeptpflicht. Praxis in Köln – H&S+ berät und erstellt Konzepte.",
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
      { href: "/brandschutzbeauftragter-koeln", label: "Brandschutzbeauftragter Köln" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen im Überblick" },
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
    title: "Wann brauche ich ein Brandschutzkonzept – oder reicht eine Stellungnahme?",
    excerpt:
      "Konzept, Stellungnahme oder Bestandsschutz: wann welcher Nachweis bei Umbau, Teilsanierung und Nutzungsänderung in NRW sinnvoll ist.",
    metaTitle: "Wann Brandschutzkonzept? Stellungnahme | H&S+",
    metaDescription:
      "Brandschutzkonzept vs. Stellungnahme: Auslöser bei Neubau, Umbau, Teilsanierung & Nutzungsänderung in Köln/NRW. Ratgeber von H&S+.",
    keywords: [
      "Brandschutzkonzept Pflicht",
      "Brandschutzkonzept wann",
      "Brandschutzkonzept Köln",
      "BauO NRW Brandschutzkonzept",
    ],
    sections: [
      {
        id: "unterschied",
        title: "Konzept und Stellungnahme – nicht dasselbe",
        paragraphs: [
          "Ein  nach BauPrüfVO ist das umfassende Dokument für genehmigungsbedürftige oder sonderbau-relevante Vorhaben: Fluchtwege, Bauteile, Technik, Löschwasser, betriebliche Maßnahmen – strukturiert für Bauaufsicht und Fachbeteiligte.",
          "Eine  beantwortet konkrete Fragen: Ist das Vorhaben mit Bestand und BauO NRW vereinbar? Welche Maßnahmen sind nötig? Sie kann intern oder als Ergänzung zum Antrag dienen – ersetzt aber nicht automatisch ein behördlich verlangtes Konzept.",
        ],
      },
      {
        id: "ausloeser",
        title: "Häufige Auslöser für ein vollständiges Konzept",
        list: [
          "Neubau oder Erweiterung mit genehmigungspflichtigen Anforderungen",
          "Nutzungsänderung (z. B. Lager zu Produktion, Laden zu Imbiss, zwei Praxen zusammenlegen)",
          "Erhöhung der Personenanzahl oder Verschlechterung der Fluchtwegsituation",
          "Sonderbauten und besondere Gefährdungen (§ 50 BauO NRW)",
          "Nachforderung der Bauaufsicht oder Zwischenbescheid",
        ],
        paragraphs: [
          "Sobald Nutzung, Personenzahl oder brandschutzrelevante Bauteile wesentlich geändert werden, früh klären – nicht erst nach dem Zwischenbescheid.",
        ],
      },
      {
        id: "ohne-konzept",
        title: "Wann oft keine vollständige Konzeptpflicht",
        paragraphs: [
          "Bei  ohne Nutzungsänderung (z. B. Büromodernisierung, BMA-Erneuerung) reicht häufig eine begleitende Stellungnahme plus Fachplanung – die Pflichten in den umbauten Bereichen bleiben dennoch vollumfänglich.",
          "Bei  ohne Eingriff in tragende oder raumabschließende Bauteile kann der  (§ 59 BauO NRW) greifen, wenn keine neuen Gefahren entstehen.",
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
        title: "Empfohlenes Vorgehen in Köln",
        list: [
          "Vor Baubeginn: Genehmigungsbedürftigkeit und Sonderbau-Einordnung klären",
          "Unterlagenpaket abstimmen: Konzept, Stellungnahme, Pläne, ggf. BMA-Planung",
          "Betriebliche Dokumentation (BSO, Fluchtpläne, Löscher) parallel aktualisieren",
        ],
        paragraphs: [
          "Wir begleiten Vorhaben von der Ersteinschätzung bis zur behördlichen Vorlage – ob Konzept, Stellungnahme oder Eilbegehung als Einstieg.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Leistung: Brandschutzkonzept Köln" },
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung Büro" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz TGA" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten & Brandschutz" },
    ],
    faq: [
      {
        question: "Kann eine Stellungnahme ein Brandschutzkonzept ersetzen?",
        answer:
          "Nur wenn die Bauaufsicht das Vorhaben so akzeptiert. Bei genehmigungspflichtigen Sonderbauten oder klarer Nutzungsänderung ist in der Regel ein vollständiges Konzept erforderlich.",
      },
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
    metaTitle: "Flucht- und Rettungswege NRW | BauO | H&S+",
    metaDescription:
      "Flucht- und Rettungswege nach BauO NRW: Pflichten, Kennzeichnung & Betrieb in Köln. Pläne & Ordnung von H&S+ – jetzt anfragen.",
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
      { href: "/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw", label: "Zweiter Rettungsweg über Dachfenster" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Fluchtpläne aktualisieren" },
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
    metaTitle: "Umbau & Nutzungsänderung | Brandschutz | H&S+",
    metaDescription:
      "Brandschutz bei Umbau & Nutzungsänderung in Köln/NRW: Pflichten, Fehler vermeiden, Genehmigung sichern. H&S+ begleitet Ihr Vorhaben.",
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
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung Büro" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme?" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Ladenlokal zum Imbiss (Praxis)" },
      { href: "/ratgeber/lagerhalle-buero-umnutzung-koeln", label: "Lagerhalle zu Büro" },
      { href: "/ratgeber/brandschau-koeln-feuerwehr", label: "Brandschau Köln" },
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
    metaTitle: "Bauaufsicht Köln | Brandschutz Unterlagen | H&S+",
    metaDescription:
      "Brandschutzunterlagen für die Bauaufsicht Köln: Konzept, Pläne, Nachweise. Was wann nötig ist – H&S+ bereitet fachlich vor.",
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
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag-Checkliste" },
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid Brandschutz" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
    ],
    faq: [
      {
        question: "Übernehmen Sie behördliche Aufgaben?",
        answer:
          "Nein. Wir erstellen fachliche Unterlagen und beraten. Entscheidungen trifft die zuständige Behörde.",
      },
    ],
  },
  {
    slug: "sprinkler-trockenbau-nutzungsaenderung-bauo-nrw",
    title: "Sprinkler und Trockenbau bei Nutzungsänderung",
    excerpt:
      "Bestehende Sprinkleranlage und neuer Trockenbau bis zur Decke – ein häufiger Konflikt bei Umbauten. Was BauO NRW und die Praxis verlangen.",
    metaTitle: "Sprinkler Trockenbau Nutzungsänderung | BauO NRW",
    metaDescription:
      "Sprinkleranlage im Bestand und Trockenbau bei Nutzungsänderung: Spray-Muster, Varianten, Sonderbau § 50 BauO NRW. Praxisratgeber für Köln & NRW.",
    keywords: [
      "Sprinkler Nutzungsänderung",
      "Trockenbau Sprinkler Brandschutz",
      "Sonderbau BauO NRW",
      "Brandschutzkonzept Nutzungsänderung Köln",
    ],
    sections: [
      {
        id: "falltyp",
        title: "Typischer Fall aus der Praxis",
        paragraphs: [
          "In einem aktuellen Projekt in Köln soll eine große Fläche in einem zweiten Untergeschoss eines Wohn- und Gewerbekomplexes von einer Park-/Nebennutzfläche zu einem besucherintensiven Studio umgebaut werden – mit bis zu etwa 110 Personen gleichzeitig. Die Fläche war früher bereits in die bestehende Sprinkleranlage der Tiefgarage einbezogen worden. Geplant sind Trockenbauwände vor allem für Umkleiden und Nebenräume, idealerweise bis zur Deckenhöhe von rund 3,60 m.",
          "Die zentrale Frage lautet nicht, ob grundsätzlich ein Brandschutzkonzept nötig ist – das ist bei dieser Nutzungsänderung in der Regel klar –, sondern ob der Bestand „Sprinkler vorhanden“ mit dem geplanten Trockenbau vereinbar ist, ohne die gesamte Sprinklerzentrale zu ersetzen.",
        ],
      },
      {
        id: "recht",
        title: "Rechtliche Einordnung (BauO NRW)",
        paragraphs: [
          "Die Nutzung ist öffentlich zugänglich und personenreich, fällt aber nicht unter die Versammlungsstättenverordnung, wenn dauerhaft weniger als 200 Personen gleichzeitig anwesend sind. Maßgeblich sind die allgemeinen Anforderungen der BauO NRW; häufig greift § 50 BauO NRW (Sonderbauten) mit erhöhten Anforderungen an Fluchtwege, Entrauchung und Nachweise.",
          "Für die Sprinkleranlage gilt: Eine Nutzungsänderung allein begründet nicht automatisch, dass eine neue vollständige Sprinklerpflicht entsteht. Entscheidend ist, ob der vorhandene Sprinklerschutz nach dem Umbau weiterhin wirksam ist – technisch und nach den Regeln der Sachversicherung bzw. VdS/DIN EN 12845.",
        ],
      },
      {
        id: "konflikt",
        title: "Warum Trockenbau bis Decke kritisch werden kann",
        paragraphs: [
          "Sprinklerköpfe sind für eine bestimmte Raumgeometrie und offene Flächen ausgelegt. Schließt Trockenbau die Sprinkler-Abdachfläche (Spray-Muster) ein oder verändert er die Raumzellen so stark, dass der Schutz nicht mehr dem Planungszustand entspricht, entsteht ein fachliches Problem – unabhängig davon, ob die Pumpe und das Riser noch funktionieren.",
        ],
        list: [
          "Variante A: Punktuelle Ergänzung von Sprinklerköpfen in betroffenen Zellen (kein Systemersatz)",
          "Variante B: Trockenbau nur bis ca. 2,50 m, oberer Lüftungs-/Sprinklerwirkraum bleibt offen",
          "Variante C: Vollhöhenwände mit nachgewiesener ausreichender Durchdringung (Fachplaner Sprinkler/VdS)",
          "Immer: schriftliche Bestätigung durch Instandhaltung oder Fachplaner Sprinkler",
        ],
      },
      {
        id: "komplex",
        title: "Mehrere Gebäudeteile und fehlendes Gesamtkonzept",
        paragraphs: [
          "In größeren Komplexen mit gemeinsamer Tiefgarage fehlt oft ein aktuelles brandschutztechnisches Gesamtkonzept des Eigentümers. Für eine Nutzungsänderung in einem Teilbereich müssen Brandabschnitt, Erschließung über Treppenräume und Abstimmung mit dem Bestand geklärt werden – bevor der Bauantrag eingereicht wird.",
          "Wir empfehlen: Vor-Ort-Termin, maßstäblicher Umbauplan, Abgleich mit Sprinklerunterlagen und frühzeitige Einbindung von Entrauchung/Lüftung, wenn viele Personen in Untergeschossen untergebracht werden.",
        ],
      },
      {
        id: "varianten",
        title: "Varianten im Überblick (Praxis)",
        paragraphs: [
          "In der Stellungnahme werden die Lösungswege gegenübergestellt – nicht pauschal „alles neu“, sondern passend zum Bestand:",
        ],
        list: [
          "Variante A: Zusätzliche Sprinklerköpfe in neuen Raumzellen (kein Ersatz der Zentrale)",
          "Variante B: Trockenbau nur bis ca. 2,50 m – Sprinklerwirkraum an der Decke bleibt offen",
          "Variante C: Vollhöhenwände nur mit nachgewiesener Durchdringung (Fachplaner Sprinkler/VdS)",
          "Immer: schriftliche Bestätigung der Instandhaltung oder des Fachplaners Sprinkler für das Genehmigungspaket",
        ],
      },
      {
        id: "checkliste",
        title: "Checkliste vor dem Bauantrag",
        list: [
          "Nutzung und maximale Personenzahl schriftlich festhalten",
          "Maßstäbliche Pläne Ist und geplant (UG, Schnitte, Deckenhöhen)",
          "Bestehende Sprinklerunterlagen und Einbindung Tiefgarage klären",
          "Variante Sprinkler/Trockenbau fachlich festlegen und bestätigen lassen",
          "Flucht- und Rettungswege zum Bestand abgleichen",
          "Entrauchung/Lüftung bei personenreichen UG-Nutzungen einplanen",
          "Brandschutzkonzept oder Stellungnahme als Ergänzung zum Bestandskonzept",
          "Abstimmung mit Eigentümer/Gemeinschaft bei Mietkomplexen",
        ],
        paragraphs: [
          "Wer diese Punkte vor der Einreichung klärt, vermeidet teure Planänderungen nach Zwischenbescheid oder ausgesetzter Abnahme.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Muss bei Nutzungsänderung immer die Sprinkleranlage erneuert werden?",
        answer:
          "Nein. Oft reicht der Nachweis, dass der Bestand nach Umbau weiterhin wirksam schützt – oder eine punktuelle Anpassung. Eine pauschale Komplettsanierung ist selten die erste Lösung.",
      },
      {
        question: "Wer bestätigt den Sprinklerschutz bei Trockenbau?",
        answer:
          "In der Regel die Instandhaltungsfirma oder ein Fachplaner Sprinkler. Diese Bestätigung gehört in das Genehmigungs- bzw. Konzeptpaket.",
      },
      {
        question: "Wann ist ein Sonderbau nach § 50 BauO NRW zu erwarten?",
        answer:
          "Bei personenreichen, öffentlich zugänglichen Nutzungen – auch unterhalb der Schwelle der Versammlungsstättenverordnung. Dann sind Fluchtwege, Entrauchung und Nachweise oft anspruchsvoller als bei einfachem Gewerbe.",
      },
      {
        question: "Was passiert ohne Gesamtkonzept des Gebäudekomplexes?",
        answer:
          "Die Bauaufsicht kann Nachweise zu Brandabschnitten, Erschließung und technischen Anlagen verlangen. Ein aktuelles Übersichtskonzept des Eigentümers beschleunigt Genehmigung und Abnahme deutlich.",
      },
    ],
  },
  {
    slug: "feuerwehr-abstimmung-vor-bauamt-bauo-nrw",
    title: "Feuerwehr-Abstimmung vor dem Bauamt",
    excerpt:
      "Warum eine schriftliche Stellungnahme der Feuerwehr vor der Einreichung beim Bauordnungsamt Zeit spart – Ablauf und typische Inhalte.",
    metaTitle: "Feuerwehr Abstimmung vor Bauamt | BauO NRW",
    metaDescription:
      "Feuerwehr vor Bauamt: sinnvoller Ablauf bei Brandschutzkonzepten nach BauO NRW. Vorab-Paket, § 33 BauO NRW – Praxis für Köln, Bonn & NRW.",
    keywords: [
      "Feuerwehr Brandschutz Genehmigung",
      "Brandschutzkonzept Feuerwehr",
      "Bauamt Brandschutz Einreichung",
      "Brandschutz Köln Feuerwehr",
    ],
    sections: [
      {
        id: "grund",
        title: "Warum die Reihenfolge wichtig ist",
        paragraphs: [
          "Bei vielen Vorhaben – besonders im Bestand mit zweitem Rettungsweg über Rettungsgeräte der Feuerwehr – ist die Feuerwehr fachlich beteiligt. Wer ein brandschutztechnisches Konzept zuerst beim Bauordnungsamt einreicht und die Feuerwehr-Stellungnahme erst auf behördliche Rückfrage nachreicht, riskiert Verzögerungen oder widersprüchliche Bewertungen.",
          "In der Praxis hat sich bewährt: Zuerst die Feuerwehr fachlich einbinden, schriftliche Stellungnahme abwarten, Konzept finalisieren – danach gemeinsam mit dem Bauantrag beim Bauordnungsamt einreichen.",
        ],
      },
      {
        id: "ablauf",
        title: "Empfohlener Ablauf in vier Phasen",
        list: [
          "Phase 1: Vorab-Paket an die zuständige Feuerwehr (Kurzdarstellung, Pläne, Fotos, geplante Rettungswege, ggf. Kostenübernahmeerklärung)",
          "Phase 2: Schriftliche Stellungnahme der Feuerwehr abwarten und im Projektordner ablegen",
          "Phase 3: Brandschutzkonzept/Stellungnahme anpassen (Status „abgestimmt mit FW vom …“)",
          "Phase 4: Einreichung über Entwurfsverfasser/Bauherr beim Bauordnungsamt inkl. FW-Unterlage",
        ],
        paragraphs: [
          "Dieser Ablauf ist nicht nur für Köln relevant, sondern für Genehmigungsverfahren in ganz NRW, sobald § 33 BauO NRW (Rettungswege, Feuerwehrzufahrten, Anleitbarkeit) im Raum steht.",
        ],
      },
      {
        id: "inhalt",
        title: "Was im Vorab-Paket enthalten sein sollte",
        paragraphs: [
          "Je nach Vorhaben gehören eine verständliche Nutzungsbeschreibung, Schnitte, Lagepläne, Darstellung der Rettungswege (1. und 2. RW), Hinweise zum Bestand und eine klare Fragestellung an die Feuerwehr in das Paket. Bei Dachgeschoss- oder Spitzbodenmaßnahmen sind Anleiterbarkeit, Öffnungsmaße und Abstände zur Traufkante zentral.",
        ],
        list: [
          "Kurzbeschreibung des Vorhabens und der Nutzung",
          "Pläne Ist und geplant, Fotos vom Bestand",
          "Darstellung beider Rettungswege ins Freie",
          "Hinweis auf Genehmigungsfähigkeit nur unter Voraussetzungen (transparent)",
          "Ansprechpartner und Kostenübernahme, falls erforderlich",
        ],
      },
      {
        id: "koeln",
        title: "Köln und Umgebung",
        paragraphs: [
          "In Köln wirkt die Feuerwehr bei brandschutztechnischen Fragestellungen mit; die Bauaufsicht prüft die Einhaltung der BauO NRW. Beide erwarten nachvollziehbare, vollständige Unterlagen. Wer die Abstimmung strukturiert vorbereitet, entlastet Architekten, Bauherren und Behörden gleichermaßen.",
        ],
      },
      {
        id: "checkliste-fw",
        title: "Checkliste: Vorab-Paket an die Feuerwehr",
        list: [
          "Kurzbeschreibung Nutzung, Personenzahl, Öffnungszeiten",
          "Lageplan und Grundrisse Ist/geplant (maßstäblich)",
          "Schnitte mit Rettungswegen und ggf. Dachfenster",
          "Fotos vom Bestand (Rettungswege, Zufahrt, Hindernisse)",
          "Darstellung 1. und 2. Rettungsweg ins Freie",
          "Fragestellung an die Feuerwehr (klar formuliert)",
          "Kontakt Entwurfsverfasser / Bauherr",
          "Ggf. Erklärung zur Kostenübernahme der Prüfung",
        ],
        paragraphs: [
          "Erst wenn die schriftliche Stellungnahme vorliegt, wird das Brandschutzkonzept finalisiert und mit dem Bauantrag eingereicht – so vermeiden Sie widersprüchliche Bewertungen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Kann ich das Konzept ohne Feuerwehr-Stellungnahme einreichen?",
        answer:
          "Nur, wenn im Konzept keine FW-Abstimmung als Voraussetzung genannt wird. Steht dort eine Abstimmung – sollte die Stellungnahme vor der finalen Einreichung vorliegen.",
      },
      {
        question: "Gilt das auch für reine Gewerbeumbauten in Köln?",
        answer:
          "Ja, sobald Rettungswege, Personenanzahl oder Sonderbau-Themen die Feuerwehr berühren. Der Ablauf ist übertragbar, die zuständige Stelle kann je nach Gemeinde variieren.",
      },
      {
        question: "Wie lange dauert die Feuerwehr-Stellungnahme?",
        answer:
          "Das variiert stark nach Auslastung und Komplexität. Planen Sie Vorlauf ein und reichen Sie vollständige Unterlagen ein – unvollständige Pakete verzögern den Prozess.",
      },
      {
        question: "Was passiert, wenn Feuerwehr und Bauamt unterschiedlich bewerten?",
        answer:
          "Deshalb die Reihenfolge: zuerst Feuerwehr, dann angepasstes Konzept, dann Bauamt. So sind alle Unterlagen konsistent.",
      },
    ],
  },
  {
    slug: "escape-room-brandschutzordnung-fluchtplan",
    title: "Escape Room und besucherintensive Nutzung: BSO & Pläne",
    excerpt:
      "Viele Gäste, verwinkelte Wege, Untergeschoss – was Escape Rooms und ähnliche Betriebe in Köln brandschutzlich beachten müssen.",
    metaTitle: "Escape Room Brandschutzordnung | Fluchtplan Köln",
    metaDescription:
      "Escape Room Brandschutz: BSO nach DIN 14096, Flucht- und Rettungspläne, Brandschutzbeauftragter. Organisatorischer Brandschutz in Köln – Praxisleitfaden.",
    keywords: [
      "Escape Room Brandschutz",
      "Brandschutzordnung Escape Room",
      "Fluchtplan Köln Gewerbe",
      "Brandschutzbeauftragter Köln",
    ],
    sections: [
      {
        id: "besonderheit",
        title: "Was diese Nutzung besonders macht",
        paragraphs: [
          "Escape Rooms, Erlebnis-Locations oder Lounges in Untergeschossen kombinieren hohe Besucherfrequenz mit mehreren Spielbereichen und nicht selbstverständlichen Fluchtwegen. Gäste kennen das Objekt nicht – im Brandfall zählen klare Pläne, Beschilderung und geschultes Personal.",
          "Baulich und technisch gilt das genehmigte Brandschutzkonzept (inkl. Entrauchung, Alarmierung, Türen). Organisatorisch sind Brandschutzordnung nach DIN 14096 und aktuelle Flucht- und Rettungspläne die Basis.",
        ],
      },
      {
        id: "bso",
        title: "Brandschutzordnung Teil A, B und C",
        list: [
          "Teil A: Aushang für alle (auch Gäste) – Verhalten im Brandfall, kurz und sichtbar",
          "Teil B: für ortskundiges Personal ohne besondere Brandschutzaufgaben",
          "Teil C: Aufgaben für Brandschutzhelfer, Leitung, Evakuierung",
        ],
        paragraphs: [
          "Die BSO muss mit dem genehmigten Konzept, den Fluchtplänen und ggf. dem Lüftungs-/Entrauchungskonzept übereinstimmen. Bei mehreren Ebenen oder Spielbereichen sind oft acht bis zehn lagebezogene Pläne sinnvoll – nach Begehung und Ist-Aufnahme.",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb und Betreuung",
        paragraphs: [
          "Besucherintensive Betriebe profitieren von einem externen Brandschutzbeauftragten: Begehungen, Unterweisungen, Dokumentation, Abstimmung mit Behörden und Versicherern. Regelmäßige Übungen und die Fortschreibung der Ordnung bei Umbauten sind Pflicht, nicht Kür.",
          "In Köln und Umgebung unterstützen wir bei BSO, Plänen und laufender Betreuung – als Paket oder einzeln, abgestimmt auf Ihr Objekt.",
        ],
      },
      {
        id: "praxis",
        title: "Praxishinweis aus der Mandatsarbeit",
        paragraphs: [
          "Typisch ist ein Gesamtpaket: Erstellung der BSO, Flucht- und Rettungspläne nach Begehung, erstes Jahr Betreuung durch Brandschutzbeauftragten. Entscheidend ist, dass Pläne und Ordnung dieselbe Ist-Situation beschreiben – sonst scheitert die Nachweisführung bei Kontrollen.",
        ],
      },
      {
        id: "begehung",
        title: "Ablauf: Begehung und Plananzahl",
        paragraphs: [
          "Bei besucherintensiven Nutzungen im Untergeschoss mit mehreren Spiel- oder Gastbereichen ist nach der Ist-Aufnahme oft eine  sinnvoll – in der Praxis häufig im Bereich von  für unterschiedliche Bereiche und Ebenen.",
          "Die Begehung klärt: Wo sind tatsächliche Fluchtwege? Wo sind Verriegelungen, Verschlüsse oder Einengungen? Stimmen Alarmierung, Beschilderung und genehmigtes Konzept (Entrauchung, Türen) noch überein? Erst danach werden BSO Teil A–C und die Pläne auf denselben Stand gebracht.",
        ],
        list: [
          "Ist-Aufnahme mit Betriebsleitung (Fotos kritischer Stellen)",
          "Abgleich mit genehmigtem Brandschutzkonzept und Entrauchung",
          "Flucht- und Rettungspläne je Bereich/Ebene",
          "BSO DIN 14096 Teil A (Aushang), B und C (Personal)",
          "Abstimmung Brandschutzbeauftragter / Unterweisungen",
          "Fortschreibung bei Umbau oder neuen Spielbereichen",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung Köln" },
      { href: "/brandschutzbeauftragter-koeln", label: "Brandschutzbeauftragter Köln" },
      { href: "/leistungen", label: "Fluchtpläne & Leistungen" },
      { href: "/kontakt", label: "Beratung anfragen" },
    ],
    faq: [
      {
        question: "Reicht ein Fluchtplan ohne Brandschutzordnung?",
        answer:
          "Nein. Der Plan zeigt Wege; die BSO regelt Verhalten, Verantwortlichkeiten und organisatorische Maßnahmen. Beides gehört zusammen.",
      },
      {
        question: "Wie oft muss die BSO überprüft werden?",
        answer:
          "Nach DIN 14096 mindestens alle zwei Jahre durch eine fachkundige Person – bei Nutzungsänderungen früher.",
      },
      {
        question: "Braucht jeder Spielbereich einen eigenen Plan?",
        answer:
          "Oft ja, wenn Wege, Türen oder Sammelstellen je Bereich unterschiedlich sind. Die genaue Anzahl ergibt sich aus Begehung und Nutzung – nicht aus einer Pauschale.",
      },
      {
        question: "Was ist bei Escape Rooms in Köln besonders kritisch?",
        answer:
          "Unbekannte Gäste, ggf. Verriegelungen und Untergeschosslage. Bauliches Konzept, Pläne, BSO und geschultes Personal müssen zusammenpassen – Behörde und Versicherer achten darauf.",
      },
    ],
  },
  {
    slug: "zweiter-rettungsweg-dachfenster-bauo-nrw",
    title: "Zweiter Rettungsweg über Dachfenster und Feuerwehr",
    excerpt:
      "Wann ein zweiter Rettungsweg über Rettungsgeräte der Feuerwehr nach § 33 BauO NRW zulässig ist – und was bei Spitzboden und Bestand zu beachten ist.",
    metaTitle: "Zweiter Rettungsweg Dachfenster | § 33 BauO NRW",
    metaDescription:
      "Zweiter Rettungsweg über Dachfenster & Feuerwehr nach § 33 BauO NRW: Anleiterbarkeit, GK 5, Spitzboden im Bestand. Ratgeber für Köln & NRW.",
    keywords: [
      "Zweiter Rettungsweg BauO NRW",
      "Rettungsweg Dachfenster Feuerwehr",
      "§ 33 BauO NRW Rettungsweg",
      "Spitzboden Brandschutz Genehmigung",
    ],
    sections: [
      {
        id: "grundlage",
        title: "Rechtliche Grundlage",
        paragraphs: [
          "Nach § 33 BauO NRW benötigen Nutzungseinheiten mit Aufenthaltsräumen in der Regel zwei voneinander unabhängige Rettungswege ins Freie. Der erste führt häufig über eine notwendige Treppe. Der zweite kann eine weitere Treppe oder – unter Voraussetzungen – eine mit Rettungsgeräten der Feuerwehr erreichbare Stelle sein, sofern keine Bedenken gegen die Personenrettung bestehen.",
        ],
      },
      {
        id: "dachfenster",
        title: "Dachflächenfenster als zweiter Rettungsweg",
        paragraphs: [
          "In der Praxis kommt das bei Wohnungen im Dachgeschoss oder Spitzboden vor: Ein straßenseitiges Dachflächenfenster mit ausreichender Lichtöffnung und Anleiterbarkeit von der öffentlichen Verkehrsfläche kann den zweiten Rettungsweg bilden – nach Begehung und Abstimmung mit der Feuerwehr.",
        ],
        list: [
          "Öffnungsmaße und Erreichbarkeit vom Innenraum",
          "Anleiterbarkeit ohne Hindernisse (z. B. Baumkronen – ggf. Baumpflege festhalten)",
          "Brüstungshöhe und Abstand zur Traufkante",
          "Schriftliche FW-Stellungnahme vor Bauamts-Einreichung",
        ],
      },
      {
        id: "spitzboden",
        title: "Spitzboden und interne Treppe (§ 34 BauO NRW)",
        paragraphs: [
          "Eine interne Treppe zwischen Dachgeschoss und Spitzboden innerhalb derselben Wohnung unterliegt § 34 BauO NRW – nicht den gleichen Anforderungen wie eine notwendige Gebäudetreppe. Eine Abweichung von der DIN 18065 im Bestand betrifft vor allem die Gebrauchstauglichkeit, solange die Rettungswegsituation der Wohnung insgesamt stimmt.",
          "Bei Legalisierungen im Bestand gilt: Keine Verschlechterung des Brandschutzes gegenüber dem unveränderten Gebäude; außerhalb der betroffenen Wohneinheit sollten keine brandschutzrelevanten Bauteile verändert werden.",
        ],
      },
      {
        id: "gk5",
        title: "Gebäudeklasse 5 und Geschäftshäuser",
        paragraphs: [
          "Geschäfts- und Wohnhäuser mit Gewerbe im Erdgeschoss und Wohnnutzung darüber sind oft der Gebäudeklasse 5 zuzuordnen. Dachmaßnahmen – etwa Zusammenführung von Dachkammern zu einer Wohneinheit – werden dann nur für den Dachbereich beurteilt; übrige Geschosse können ausdrücklich „kein Antragsgegenstand“ sein.",
          "Für Genehmigungsfähigkeit sind zwei unabhängige Rettungswege und die dokumentierte Feuerwehr-Abstimmung zentrale Bausteine.",
        ],
      },
      {
        id: "begehung",
        title: "Begehung mit Feuerwehr: Was vor Ort geklärt wird",
        paragraphs: [
          "Der zweite Rettungsweg über Rettungsgeräte ist keine Formsache. In der Praxis werden vor Ort geprüft: Erreichbarkeit vom Innenraum, Lichtöffnung, Abstände zur Traufkante, Hindernisse auf der öffentlichen Verkehrsfläche (z. B. Baumkronen – ggf. Baumpflege dokumentieren) und die Anleiterbarkeit von der Straße aus.",
          "Ohne diese Begehung und schriftliche Stellungnahme sollte das Konzept nicht final beim Bauamt eingereicht werden.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Ersetzt ein Dachfenster immer die zweite Treppe?",
        answer:
          "Nein. Es hängt von Gebäudeklasse, Nutzung, Anleiterbarkeit und der Bewertung durch Feuerwehr und Bauaufsicht ab. Eine Einzelfallprüfung ist nötig.",
      },
      {
        question: "Was ist bei Legalisierung eines bereits ausgebauten Spitzbodens wichtig?",
        answer:
          "Nachweis, dass zwei Rettungswege vorhanden sind und der Bestand außerhalb der Wohnung unverändert bleibt. Oft ist eine brandschutztechnische Stellungnahme ausreichend.",
      },
      {
        question: "Welche Rolle spielt Denkmalschutz im Bestand?",
        answer:
          "Bei denkmalgeschützten Gebäuden können zusätzliche Auflagen gelten. Die brandschutztechnische Lösung muss Bestandsschutz und Rettungswege zusammen denkbar machen – früh abstimmen.",
      },
      {
        question: "Muss der 2. Rettungsweg auch bei kleinen Dachwohnungen geprüft werden?",
        answer:
          "Sobald Aufenthaltsräume betroffen sind, gelten die Anforderungen der BauO NRW grundsätzlich. Die konkrete Ausgestaltung ist einzelfallbezogen.",
      },
    ],
  },
  {
    slug: "fluchtplan-feuerwehrplan-aktualisieren-gewerbe",
    title: "Flucht- und Feuerwehrpläne aktualisieren",
    excerpt:
      "Alte Pläne, geänderte Nutzung, neue Wege – wann Gewerbe und Industrie Flucht- und Feuerwehrpläne erneuern sollten.",
    metaTitle: "Fluchtplan aktualisieren | Feuerwehrplan Gewerbe",
    metaDescription:
      "Flucht- und Feuerwehrpläne aktualisieren: wann nötig, Ablauf mit Begehung, Abgleich mit BauO NRW & Betrieb in Köln. H&S+ erstellt und prüft Pläne.",
    keywords: [
      "Fluchtplan aktualisieren",
      "Feuerwehrplan Gewerbe",
      "Flucht- und Rettungsplan Köln",
      "Brandschutzplan Prüfung",
    ],
    sections: [
      {
        id: "wann",
        title: "Wann eine Aktualisierung fällig ist",
        list: [
          "Umbau, neue Wände oder geänderte Fluchtwege",
          "Nutzungsänderung oder höhere Personenanzahl",
          "Pläne älter als die aktuelle Betriebsorganisation (z. B. über fünf Jahre)",
          "Hinweise von Behörde, Feuerwehr oder Versicherer",
          "Nach Mängeln bei Begehung oder Unfall",
        ],
        paragraphs: [
          "Flucht- und Rettungspläne müssen den Ist-Zustand widerspiegeln. Feuerwehrpläne ergänzen die Darstellung um Informationen für Einsatzkräfte. Wer beides vernachlässigt, gefährdet nicht nur die Rechtssicherheit, sondern im Ernstfall Menschenleben.",
        ],
      },
      {
        id: "ablauf",
        title: "Sinnvoller Ablauf",
        paragraphs: [
          "Zuerst Begehung vor Ort: Fluchtwege, Kennzeichnung, Türen, Sammelstellen, Besonderheiten der Nutzung. Danach Abgleich mit Brandschutzordnung und genehmigtem Konzept. Pläne werden lagebezogen erstellt, mit Betrieb besprochen und nach Anpassungen freigegeben.",
          "In Industrie- und Produktionsbereichen sind oft mehrere Gebäudeteile oder Hallen betroffen – die Stückzahl der Pläne ergibt sich aus der Begehung, nicht aus einer Pauschale.",
        ],
      },
      {
        id: "recht",
        title: "Rechtliche Einordnung",
        paragraphs: [
          "Arbeitsschutz (ArbSchG, ASR A2.2) und bauordnungsrechtliche Anforderungen (BauO NRW) verlangen erkennbare Fluchtwege und Unterweisung. Pläne sind das sichtbare Bindeglied zwischen baulichem Brandschutz und dem, was Beschäftigte und Besucher im Brandfall tun müssen.",
        ],
      },
      {
        id: "koeln",
        title: "Unterstützung in Köln und Umgebung",
        paragraphs: [
          "Wir prüfen Bestandspläne, erstellen Aktualisierungen nach Begehung und stimmen Inhalte mit Ihrer Brandschutzorganisation ab. Auf Wunsch kombinieren wir das mit Brandschutzbeauftragten-Leistungen oder einer BSO-Fortschreibung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln", label: "Feuerwehr- & Fluchtpläne" },
      { href: "/leistungen", label: "Alle Leistungen inkl. Pläne" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung Köln" },
      { href: "/ratgeber/brandschau-koeln-feuerwehr", label: "Brandschau Köln" },
    ],
    faq: [
      {
        question: "Reicht ein alter Plan, wenn sich wenig geändert hat?",
        answer:
          "Formal oft problematisch. Selbst kleine Änderungen (umgestellte Regale, neue Türen) können die Fluchtrichtung verändern. Kurze Begehung klärt den Bedarf.",
      },
      {
        question: "Was ist der Unterschied zwischen Fluchtplan und Feuerwehrplan?",
        answer:
          "Fluchtpläne richten sich an Personen im Gebäude. Feuerwehrpläne enthalten zusätzliche Informationen für Einsatzkräfte (Zufahrten, Hydranten, Bauteile). Beide sollten zum gleichen Stand gehören.",
      },
    ],
  },
  {
    slug: "arztpraxen-zusammenlegen-brandschutz-koeln",
    title: "Arztpraxen zusammenlegen: Brandschutz und Baugenehmigung in Köln",
    excerpt:
      "Zwei Praxen im 2. OG zu einer Gemeinschaftspraxis – was bei Brandschutz, Bestand und Baugenehmigung in Köln zu beachten ist.",
    metaTitle: "Arztpraxen zusammenlegen Köln | Brandschutz",
    metaDescription:
      "Arztpraxen zusammenlegen in Köln: Brandschutz, Nutzungsänderung GK 5, Bestand & Baugenehmigung. Praxisratgeber BauO NRW – H&S+ begleitet fachlich.",
    keywords: [
      "Arztpraxis zusammenlegen Brandschutz",
      "Nutzungsänderung Arztpraxis Köln",
      "Baugenehmigung Praxis Köln",
      "Brandschutz Gemeinschaftspraxis",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall aus der Praxis",
        paragraphs: [
          "In einem abgeschlossenen Genehmigungsverfahren in Köln (2025/2026) sollten zwei benachbarte Arztpraxen im 2. Obergeschoss eines Wohn- und Geschäftshauses aus den 1970er Jahren zu einer gemeinsamen Orthopädiepraxis zusammengelegt werden. Geplant war eine Öffnung in einer nichttragenden Trennwand – ohne Eingriffe in Treppenhaus, Flure oder technische Brandschutzanlagen.",
          "Das Gebäude ist der Gebäudeklasse 5 zuzuordnen. Für die Genehmigung war entscheidend, dass das Vorhaben das bestehende, bereits behördlich abgestimmte Brandschutzkonzept nicht berührt – und die Rettungswegsituation für die zusammengelegte Nutzung nachvollziehbar bleibt.",
        ],
      },
      {
        id: "brandschutz",
        title: "Brandschutztechnische Kernthemen",
        list: [
          "Zwei ehemalige Nutzungseinheiten (ca. 166 m² straßenseitig, ca. 87 m² zum Innenhof) werden zu einer Einheit (ca. 253 m²)",
          "Öffnung in der Trennwand mit feuerhemmendem, dicht- und selbstschließendem Abschluss",
          "Hofseitige Einheit erhält über die Verbindung Zugang zu straßenseitigen Fenstern – relevant für Rettungswege",
          "Notwendiger Flur und notwendiger Treppenraum bleiben unverändert",
          "Bestehende Druckbelüftung des Treppenraums und Rauchschutzabschlüsse zum Flur bleiben Bestand",
        ],
        paragraphs: [
          "Die brandschutztechnische Stellungnahme bezog sich nur auf die durch die Zusammenlegung verursachten Änderungen und ergänzte ein älteres, genehmigtes Gesamtkonzept des Objekts.",
        ],
      },
      {
        id: "unterlagen",
        title: "Welche Unterlagen die Bauaufsicht erwartet",
        list: [
          "Bauantrag mit einheitlichen, übereinstimmenden Plänen (EG, 1. OG, 2. OG, Schnitte)",
          "Lageplan mit Grundstücksgrenzen (BauPrüfVO)",
          "Baubeschreibung und Betriebsbeschreibung",
          "Brandschutztechnische Stellungnahme oder vollständiges Brandschutzkonzept",
          "Nachweis zum Bestand: Entrauchung Treppenraum (§ 35 Abs. 8 BauO NRW), Flurwände (§ 36 Abs. 4 BauO NRW)",
        ],
        paragraphs: [
          "In Köln läuft vieles über die Vorgangsauskunft+; Fristen aus Zwischenbescheiden sind strikt einzuhalten. Mehr zum Ablauf bei Mängeln lesen Sie im Ratgeber zum Zwischenbescheid.",
        ],
      },
      {
        id: "ergebnis",
        title: "Was man aus dem Verfahren lernen kann",
        paragraphs: [
          "Auch „kleine“ Umbauten können eine vollständige brandschutztechnische Prüfung auslösen – besonders in Bestandsgebäuden mit Mischnutzung (Gewerbe, Praxen, Wohnen). Wer früh das alte Brandschutzkonzept einbezieht und den Bestand (Treppenraum, Flure) sauber dokumentiert, spart Monate im Verfahren.",
          "Die Baugenehmigung wurde nach Nachreichung der Stellungnahme und Beantwortung eines Zwischenbescheids erteilt – mit Auflagen zur Umsetzung der brandschutztechnischen Vorgaben und zur Bauzustandsbesichtigung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid Brandschutz" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Brauche ich immer ein vollständiges Brandschutzkonzept?",
        answer:
          "Nicht immer. Oft reicht eine brandschutztechnische Stellungnahme zum konkreten Umbau, wenn ein genehmigtes Gesamtkonzept existiert und der Bestand nachvollziehbar ist.",
      },
      {
        question: "Muss die Öffnung zwischen den Praxen brandschutztechnisch abgeschottet werden?",
        answer:
          "Ja. Die Verbindung ist in der Regel mit einem feuerhemmenden, dicht- und selbstschließenden Abschluss zu versehen – passend zur Nutzung und zum Bestand.",
      },
    ],
  },
  {
    slug: "zwischenbescheid-brandschutz-bauamt-koeln",
    title: "Zwischenbescheid der Bauaufsicht: Brandschutz-Mängel verstehen",
    excerpt:
      "Die Bauaufsicht teilt Mängel mit – was ein Zwischenbescheid bedeutet, typische Brandschutz-Nachforderungen und wie Sie reagieren.",
    metaTitle: "Zwischenbescheid Brandschutz Köln | Bauamt",
    metaDescription:
      "Zwischenbescheid Bauaufsicht Köln: Brandschutz-Mängel, Fristen, Nachweise § 35/36 BauO NRW. So wird Ihr Antrag genehmigungsfähig – Ratgeber H&S+.",
    keywords: [
      "Zwischenbescheid Bauamt",
      "Brandschutz Baugenehmigung Köln",
      "Bauaufsicht Mängel Brandschutz",
      "Brandschutznachweis Köln",
    ],
    sections: [
      {
        id: "was-ist",
        title: "Was ist ein Zwischenbescheid?",
        paragraphs: [
          "Ein Zwischenbescheid (häufig „Vervollständigung“ oder Mängelbescheid) bedeutet: Ihr Bauantrag ist eingegangen, aber noch nicht genehmigungsfähig. Die Bauaufsicht listet fehlende oder unzureichende Unterlagen auf und setzt eine Frist – in Köln oft über die Vorgangsauskunft+.",
          "Das ist kein Ablehnungsbescheid. Wer die Mängel fachlich und vollständig nachreicht, kann in der Regel in das Genehmigungsverfahren zurückkehren. Wird die Frist versäumt, gilt der Antrag oft als zurückgenommen.",
        ],
      },
      {
        id: "typisch",
        title: "Typische Brandschutz-Mängel in Köln",
        paragraphs: [
          "In einem realen Verfahren zur Zusammenlegung von Arztpraxen im 2. OG forderte die Bauaufsicht Köln unter anderem:",
        ],
        list: [
          "Brandschutzeintragungen in allen Plänen oder ein Brandschutzkonzept eines Sachverständigen",
          "Nachweis: notwendiger Treppenraum mit Rauchableitung nach § 35 Abs. 8 BauO NRW (Fenster mind. 0,50 m² freier Querschnitt)",
          "Nachweis: Wände des notwendigen Flurs feuerhemmend nach § 36 Abs. 4 BauO NRW",
          "Grundrisse EG und 1. OG zur Prüfung des ersten Rettungsweges (§ 33 Abs. 2 BauO NRW)",
          "Überarbeiteter Lageplan (Grundstücksgrenzen, Lesbarkeit)",
          "Hinweise zu Barrierefreiheit (§ 49 BauO NRW) oder Nachweis der Unverhältnismäßigkeit im Bestand",
        ],
      },
      {
        id: "antwort",
        title: "Wie Sie fachlich antworten",
        paragraphs: [
          "Bei Bestandsgebäuden lohnt sich der Bezug auf frühere Genehmigungen und ein bestehendes Brandschutzkonzept: Was wurde damals genehmigt (Entrauchung, Flure, Rettungswege)? Wird das aktuelle Vorhaben diese Anlagen nicht verändern? Dann kann Bestandsschutz nach § 83 BauO NRW relevant sein – die endgültige Bewertung trifft die Behörde.",
          "Eine strukturierte Stellungnahme mit Verweis auf Pläne, Fotos der Begehung und klare Abgrenzung „Antragsgegenstand / nicht Antragsgegenstand“ hilft der Prüferin, schneller zu entscheiden.",
        ],
      },
      {
        id: "ablauf",
        title: "Empfohlener Ablauf nach dem Bescheid",
        list: [
          "Mängelliste Punkt für Punkt abarbeiten (Brandschutz, Planer, Statik getrennt)",
          "Fehlende Nachweise beschaffen (z. B. Protokoll Druckbelüftung, Fotos Treppenraum/Flur)",
          "Stellungnahme Sachverständiger aktualisieren oder neu erstellen",
          "Unterlagen fristgerecht in der Vorgangsauskunft+ einreichen inkl. Übereinstimmungserklärung nach § 7 BauPrüfVO",
          "Status der Fachbeteiligungen (Brandschutz, ggf. Feuerwehr) online verfolgen",
        ],
        paragraphs: [
          "Parallel kann es sinnvoll sein, das historische Brandschutzkonzept und behördliche Altgenehmigungen zu sichten – nicht alles muss neu erfunden werden.",
        ],
      },
      {
        id: "timeline",
        title: "Typischer Verlauf (Praxis Köln)",
        paragraphs: [
          "In einem abgeschlossenen Verfahren zur Praxiszusammenlegung im 2. OG lagen  – mit Zwischenbescheid, Nachreichung der brandschutztechnischen Stellungnahme und Beantwortung der Mängelliste dazwischen.",
          "Das ist kein Garantiewert, zeigt aber: Wer Fristen in der Vorgangsauskunft+ ernst nimmt und fachlich vollständig nachreicht, kann auch bei Bestandsgebäuden zum Ziel kommen.",
        ],
        list: [
          "Monat 0: Bauantrag mit ersten Plänen",
          "Zwischenbescheid mit Brandschutz-Mängelliste",
          "Nachreichung: Stellungnahme, EG/1.OG-Grundrisse, Lageplan, Bestandsnachweise",
          "Fachliche Prüfung und ggf. Rückfragen",
          "Baugenehmigung mit Auflagen zur Umsetzung",
        ],
      },
      {
        id: "koeln",
        title: "Besonderheiten in Köln",
        paragraphs: [
          "Das Bauaufsichtsamt der Stadt Köln prüft brandschutztechnische Inhalte streng und erwartet nachvollziehbare Unterlagen. Wer mit einem erfahrenen Brandschutzpartner früh die Schnittstelle zwischen Architektur, Bestand und Behörde plant, reduziert Zwischenbescheide auf das technisch Notwendige.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Ist ein Zwischenbescheid dasselbe wie eine Ablehnung?",
        answer:
          "Nein. Er fordert zur Nachbesserung auf. Erst wenn Fristen verstreichen oder Mängel nicht behoben werden können, droht ein negatives Ergebnis.",
      },
      {
        question: "Muss ich jeden Brandschutz-Mangel selbst beantworten?",
        answer:
          "Sie können einen Sachverständigen oder Brandschutz-Ingenieur beauftragen. Die Stellungnahme geht in der Regel im Namen des Bauherrn an die Behörde, oft über den Entwurfsverfasser.",
      },
      {
        question: "Wie lange dauert es nach dem Zwischenbescheid bis zur Genehmigung?",
        answer:
          "Das hängt von Vollständigkeit, Fachbeteiligungen und Auslastung der Behörde ab. In einem Praxisfall in Köln lagen Antrag und Genehmigung etwa neun Monate auseinander – mit fachlicher Nacharbeit dazwischen.",
      },
    ],
  },
  {
    slug: "imbiss-ladenlokal-nutzungsaenderung-koeln",
    title: "Vom Ladenlokal zum Imbiss: Nutzungsänderung in Köln",
    excerpt:
      "Laden wird Imbiss – was BauO NRW, Brandschutz und das vereinfachte Genehmigungsverfahren in der Praxis bedeuten.",
    metaTitle: "Ladenlokal zum Imbiss | Nutzungsänderung Köln",
    metaDescription:
      "Nutzungsänderung Ladenlokal zu Imbiss in Köln: Brandschutz, Küche/Grill, § 64 BauO NRW & Stellungnahme. Praxisratgeber von H&S+.",
    keywords: [
      "Nutzungsänderung Imbiss Köln",
      "Ladenlokal Imbiss Genehmigung",
      "Brandschutz Gastronomie Köln",
      "vereinfachtes Baugenehmigungsverfahren",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall: Ladenlokal wird Imbiss",
        paragraphs: [
          "In einem abgeschlossenen Projekt in Köln sollte ein ehemaliges Ladenlokal (ca. 65 m²) in ein Imbissgeschäft umgewandelt werden. Geplant waren zwei Küchenbereiche (u. a. Backen, Frittieren, Spüle), eine Grillstation mit Holzkohle sowie ein kleiner Gastbereich mit Stehtischen – der überwiegende Teil der Fläche dient der Zubereitung und dem Verkauf zum Mitnehmen.",
          "Solche Vorhaben sind in Köln häufig: überschaubare Fläche, aber erhöhte Brandlast durch Küchentechnik und Fett. Die Bauaufsicht prüft deshalb Nutzung, Rettungswege und brandschutztechnische Nachweise – oft über eine brandschutztechnische Stellungnahme oder ein Konzept.",
        ],
      },
      {
        id: "recht",
        title: "Vereinfachtes Verfahren und Gebäudeklasse",
        paragraphs: [
          "Je nach Größe, Nutzung und Lage kann ein vereinfachtes Baugenehmigungsverfahren nach § 64 BauO NRW in Betracht kommen (Anlage I/2 zur BauPrüfVO). Entscheidend sind die konkrete Einordnung durch die Bauaufsicht, die Gebäudeklasse und ob Sonderbau-Aspekte greifen.",
          "Für kleinere Gewerbenutzungen mit begrenztem Publikumsverkehr ist die Einordnung oft anders als bei großen Restaurants – trotzdem gelten Anforderungen an Fluchtwege, Abschottung, technische Anlagen und den organisatorischen Brandschutz im Betrieb.",
        ],
      },
      {
        id: "brandschutz",
        title: "Brandschutztechnische Schwerpunkte beim Imbiss",
        list: [
          "Brandlast Küche: Fritteusen, Grill, Fett – Fettbrandlöscher und sichere Abläufe",
          "Rauch- und Wärme: Entrauchung/Abluft je nach Konzept und Genehmigung",
          "Fluchtwege: Einengungen vermeiden, Notausgänge kennzeichnen",
          "Feuerlöscher: ausreichend LE nach ASR A2.2, Prüfplaketten aktuell",
          "Gastbereich: oft weniger als 20 m² – trotzdem klare Rettungswegführung",
          "Stellungnahme: Nutzung, Räume, Öffnungszeiten, Maßnahmen dokumentieren",
        ],
        paragraphs: [
          "Die Stellungnahme beschreibt das Vorhaben verständlich für die Prüferin: Welche Räume sind Küche, Gast, Lager, Büro? Wo sind Fluchtwege und Türen? Welche technischen und organisatorischen Maßnahmen sind vorgesehen?",
        ],
      },
      {
        id: "unterlagen",
        title: "Welche Unterlagen Sie einplanen sollten",
        list: [
          "Bauantrag bzw. Antrag vereinfachtes Verfahren mit einheitlichen Plänen",
          "Baubeschreibung und Betriebsbeschreibung (Öffnungszeiten, Abläufe)",
          "Brandschutztechnische Stellungnahme oder Konzept",
          "Lageplan mit Grundstücksgrenzen",
          "Nachweise zu Fluchtwegen, Türen, ggf. Rauchschutz",
        ],
        paragraphs: [
          "Wer früh einen Brandschutzpartner einbindet, vermeidet teure Planänderungen nach einem Zwischenbescheid. Mehr dazu in unserem Ratgeber zum Zwischenbescheid.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Feuerlöscher in der Gastronomie" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung Köln" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
    ],
    faq: [
      {
        question: "Braucht ein kleiner Imbiss immer eine Baugenehmigung?",
        answer:
          "Oft ja bei Nutzungsänderung oder baulichen Anpassungen. Ob vereinfachtes Verfahren oder Vollverfahren – die Bauaufsicht entscheidet. Im Zweifel vor Baubeginn klären.",
      },
      {
        question: "Ist ein Grill mit Holzkohle im Laden problematisch?",
        answer:
          "Erhöhte Brandlast und Fettbrandrisiko – in der Stellungnahme und im Betrieb sind besondere Maßnahmen (Fettbrandlöscher, Abluft, Reinigung, Unterweisung) üblich.",
      },
    ],
  },
  {
    slug: "eilbegehung-brandschutz-restaurant-gewerbe-koeln",
    title: "Eilbegehung Brandschutz: Restaurant und Gewerbe in Köln",
    excerpt:
      "Kurzfristige Ersteinschätzung vor Ort – was bei einer Eilbegehung geprüft wird und welche Sofortmaßnahmen typisch sind.",
    metaTitle: "Eilbegehung Brandschutz Köln | Restaurant",
    metaDescription:
      "Eilbegehung Brandschutz in Köln: Fluchtwege, Feuerlöscher, Küche. Was Betriebe aus einem Praxisfall lernen – H&S+ berät vor Ort.",
    keywords: [
      "Eilbegehung Brandschutz",
      "Brandschutz Restaurant Köln",
      "Brandschutzbegehung Gewerbe",
      "Brandschutzberatung vor Ort Köln",
    ],
    sections: [
      {
        id: "was",
        title: "Was ist eine Eilbegehung?",
        paragraphs: [
          "Eine Eilbegehung ist eine kurzfristige, fokussierte Sichtprüfung des Ist-Zustands – ohne vollständiges Gutachten, aber mit klarer schriftlicher Dokumentation. Typisch vor Behördenterminen, nach Mängelhinweisen, bei Übernahme eines Betriebs oder wenn schnell Klarheit über den Handlungsbedarf nötig ist.",
          "Sie ersetzt keine Baugenehmigung und kein vollständiges Brandschutzkonzept. Sie schafft aber eine belastbare Erstbewertung und eine priorisierte Maßnahmenliste.",
        ],
      },
      {
        id: "praxis",
        title: "Was in einem Restaurant-Projekt auffiel",
        paragraphs: [
          "Bei einer Eilbegehung eines Restaurants in Köln (ca. 90 m² Nutzfläche, Gastraum, Küche mit Fritteusen, Nebenräume, Treppenraum, Toilette im Untergeschoss) wurden unter anderem folgende Punkte festgestellt:",
        ],
        list: [
          "Feuerlöscher vorhanden, aber Prüfplaketten teils abgelaufen – ordnungsgemäßer Prüfstatus nicht nachgewiesen",
          "Fluchtwege und Nebenbereiche teils durch Gegenstände eingeengt",
          "Für die Fläche und Nutzung: mindestens ca. 9 Löschmitteleinheiten (LE) bei normaler Brandgefährdung (Orientierung ASR A2.2)",
          "Empfehlung: zusätzlich Fettbrandlöscher (Brandklasse F) an der Frittiertelle",
          "Rauchwarnmelder im Untergeschoss empfohlen (akustisch gut hörbar im Betrieb)",
          "Jährliche Unterweisung und dokumentierte Wegekontrollen",
        ],
      },
      {
        id: "sofort",
        title: "Sofortmaßnahmen (typisch nach Eilbegehung)",
        list: [
          "Abgelaufene Prüfplaketten: Feuerlöscher fachgerecht prüfen oder austauschen lassen",
          "Fluchtwege sofort freiräumen (keine Lagerung in Wegen und Treppen)",
          "Fettbrandlöscher an heißen Küchenstellen bereitstellen",
          "Rauchwarnmelder im UG prüfen bzw. ergänzen",
          "Kurzunterweisung Personal: Wege, Alarm, Feuerlöscher",
          "Mängelliste mit Fristen intern dokumentieren",
        ],
        paragraphs: [
          "Die Eilbegehung ersetzt keine Genehmigung – sie schafft aber eine belastbare Grundlage für die nächsten Schritte (Konzept, Sanierung, Behörde).",
        ],
      },
      {
        id: "ablauf",
        title: "Typischer Ablauf einer Eilbegehung",
        list: [
          "Kurze Vorbereitung: Fläche, Nutzung, Beschäftigte, Öffnungszeiten",
          "Begehung mit Betriebsleitung: Fluchtwege, Löscher, Türen, Küche, Elektro sichtbar",
          "Fotodokumentation kritischer Stellen (datenschutzkonform)",
          "Schriftlicher Kurzbericht mit Sofort- und mittelfristigen Maßnahmen",
          "Optional: Folgeauftrag Konzept, BSO, Fluchtpläne, Unterweisung",
        ],
        paragraphs: [
          "Der Bericht dient intern, gegenüber Versicherern oder als Grundlage für ein Sanierungsprogramm. Bei behördlichen Auflagen sollte er mit der konkreten Forderung abgeglichen werden.",
        ],
      },
      {
        id: "koeln",
        title: "Wann sich eine Eilbegehung in Köln lohnt",
        paragraphs: [
          "Für Gastronomie, Einzelhandel, Praxen und kleinere Gewerbebetriebe in Köln und Umgebung ist die Eilbegehung ein schneller Einstieg – bevor größere Investitionen in Umbau oder Genehmigung anstehen. Wir führen Begehungen durch und leiten daraus Konzepte, Ordnungen oder Maßnahmenpläne ab.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung Köln" },
      { href: "/kontakt", label: "Eilbegehung anfragen" },
    ],
    faq: [
      {
        question: "Wie schnell kann eine Eilbegehung stattfinden?",
        answer:
          "Je nach Verfügbarkeit oft innerhalb weniger Tage. Der Bericht folgt in der Regel kurz nach der Begehung.",
      },
      {
        question: "Reicht eine Eilbegehung für die Bauaufsicht?",
        answer:
          "Selten als alleiniger Nachweis. Für behördliche Verfahren sind meist Konzept, Pläne oder eine formale Stellungnahme nötig. Die Eilbegehung hilft aber bei der Vorbereitung.",
      },
    ],
  },
  {
    slug: "feuerloescher-gastronomie-koeln",
    title: "Feuerlöscher in der Gastronomie: Prüfung, Anzahl, Fettbrand",
    excerpt:
      "Wie viele Feuerlöscher ein Imbiss oder Restaurant braucht, warum die Prüfplakette wichtig ist und wann ein Fettbrandlöscher Pflicht ist.",
    metaTitle: "Feuerlöscher Gastronomie Köln | Prüfung & LE",
    metaDescription:
      "Feuerlöscher Restaurant & Imbiss Köln: Löschmitteleinheiten, Prüfung, Fettbrandlöscher nach ASR A2.2. Praxisnah erklärt von H&S+.",
    keywords: [
      "Feuerlöscher Restaurant Köln",
      "Feuerlöscher Gastronomie",
      "Fettbrandlöscher Imbiss",
      "Feuerlöscher Prüfung Gewerbe",
    ],
    sections: [
      {
        id: "pflicht",
        title: "Warum Feuerlöscher in Küchen und Gasträumen Pflicht sind",
        paragraphs: [
          "Arbeitgeber müssen wirksame Bekämpfungsmittel für Entstehungsbrände bereitstellen (ASR A2.2, ArbSchG). In Gastronomie und Imbissen ist die Brandgefährdung wegen Fett, Fritteusen und offener Flammen höher als in reinen Büros – die Ausstattung muss das abbilden.",
          "In der Praxis reicht „irgendein Löscher irgendwo“ nicht: Anzahl (Löschmitteleinheiten), Standorte, Sichtbarkeit, Prüfstatus und die richtige Löscherart (z. B. Fettbrand) müssen zusammenpassen.",
        ],
      },
      {
        id: "anzahl",
        title: "Wie viele Löscher – Löschmitteleinheiten (LE)",
        paragraphs: [
          "Die ASR A2.2 orientiert sich an Löschmitteleinheiten (LE), nicht pauschal an „ein Löscher pro Raum“. Die Anzahl hängt von Fläche, Brandgefährdung und Löschergröße ab. Bei normaler Brandgefährdung wird häufig mit mindestens 1 LE pro 10 m² gerechnet – im Einzelfall abweichend.",
        ],
        list: [
          "Ca. 65 m² Imbiss: mindestens etwa 6–7 LE Grundausstattung (Orientierungswert)",
          "Ca. 90 m² Restaurant: mindestens etwa 9 LE – in der Praxis oft 2× 6-LE-Löscher (12 LE) für gute Verteilung",
          "Küche zusätzlich: mindestens ein Fettbrandlöscher (Klasse F) nahe der Frittiertelle",
          "Tragegriff maximal ca. 1,20 m über Fertigfußboden, Standorte kennzeichnen (DIN 67510)",
        ],
      },
      {
        id: "pruefung",
        title: "Prüfplakette und Wartung",
        paragraphs: [
          "In einem Kölner Restaurant-Projekt waren Löscher zwar montiert, die Prüfkennzeichnungen jedoch abgelaufen. Ohne gültige Prüfung ist der ordnungsgemäße Zustand im Ernstfall und bei Kontrollen nicht nachweisbar.",
          "Löscher müssen durch eine Fachfirma in festen Intervallen geprüft werden; unbrauchbare Geräte sind auszutauschen. Standortliste und Wartungsnachweise gehören in die Betriebsdokumentation – idealerweise ergänzt um eine Brandschutzordnung.",
        ],
      },
      {
        id: "fettbrand",
        title: "Fettbrand: niemals mit Wasser",
        paragraphs: [
          "In Imbissen und Döner-/Grillbetrieben ist der Fettbrand das zentrale Risiko. Wasser verschlimmert die Situation. Neben dem Fettbrandlöscher sind Unterweisung, Notfallplan (Teil A der BSO) und klare Abläufe in der Küche entscheidend – wie in einer professionellen Brandschutzordnung für Gastronomie üblich.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Imbiss & Nutzungsänderung" },
      { href: "/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln", label: "Eilbegehung vor Ort" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung Köln" },
      { href: "/brandschutzhelfer-ausbildung-koeln", label: "Brandschutzhelfer-Ausbildung" },
    ],
    faq: [
      {
        question: "Reicht ein Pulverlöscher in der Küche?",
        answer:
          "Für Fritteusen und Fett ist ein Fettbrandlöscher (F) vorgesehen. Pulver- oder Schaumlöscher ergänzen je nach Konzept den Gastbereich – fachlich abstimmen.",
      },
      {
        question: "Wer darf Feuerlöscher prüfen?",
        answer:
          "Die wiederkehrende Prüfung durch eine befähigte Fachkraft bzw. Fachfirma. Das Austauschen montierter Löscher nach Prüfung ist Teil des Wartungskonzepts.",
      },
    ],
  },
  {
    slug: "teilsanierung-buero-brandschutz-koeln",
    title: "Teilsanierung Büro und Verwaltung: Brandschutz-Checkliste",
    excerpt:
      "Umbau in Teilen des Gebäudes – BMA, Fluchtwege, Feuerlöscher und Pläne: Was bei einer Teilsanierung ohne Nutzungsänderung zu prüfen ist.",
    metaTitle: "Teilsanierung Büro Brandschutz | Köln",
    metaDescription:
      "Brandschutz bei Teilsanierung Büro/Verwaltung in Köln: BMA, ASR Fluchtwege, Feuerlöscher, Pläne. Praxis-Checkliste von H&S+ – Beratung anfragen.",
    keywords: [
      "Teilsanierung Brandschutz",
      "Büroumbau Brandschutz Köln",
      "Brandmeldeanlage Erneuerung",
      "Fluchtwege Umbau ASR",
      "Brandschutz Verwaltungsgebäude",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall: Teilsanierung statt Komplettumbau",
        paragraphs: [
          "In einem abgeschlossenen Beratungsprojekt in Köln stand die Teilsanierung eines großen Büro- und Verwaltungsgebäudes an (Baujahr 1978, mehrere Geschosse, mehrere hundert Mitarbeitende am Standort). Umbauten betrafen etwa die Hälfte der Bruttogrundfläche: neuer Trockenbau, Türen, Technik, Umkleiden im Kellergeschoss, Sanierung von WC-Bereichen und eine vollständige Neuplanung der Brandmeldeanlage (BMA).",
          "Laut Planungsunterlagen war  vorgesehen – dennoch greifen BauO NRW, Arbeitsschutz (ASR) und betrieblicher Brandschutz in den betroffenen Zonen. Die Einordnung als Gebäudeklasse 5 und Sonderbau erhöht die Sorgfalt bei Nachweisen und Abstimmungen.",
        ],
      },
      {
        id: "konzept",
        title: "Brandschutzkonzept oder Stellungnahme?",
        paragraphs: [
          "Ob ein vollständiges Brandschutzkonzept für die Bauaufsicht nötig ist, hängt von Art und Umfang der baulichen Änderung sowie von einer möglichen Nutzungsänderung ab. Eine reine Teilsanierung  wesentliche Nutzungsänderung löst nicht automatisch ein Genehmigungsverfahren mit umfangreichem Konzept aus – ersetzt aber nicht die Pflicht, in den umbauten Bereichen alle brandschutzrechtlichen Anforderungen einzuhalten.",
          "Praktisch arbeiten Betreiber und Planer oft mit einer  als Leitfaden für TGA, Architektur und Ausführung. Wird die Nutzung wesentlich geändert oder sind Sonderbau-Anforderungen neu zu begründen, ist ein formelles Brandschutzkonzept naheliegend.",
        ],
      },
      {
        id: "bma",
        title: "Brandmeldeanlage (BMA) im Bestand erneuern",
        list: [
          "Flächendeckende automatische Brandmelder in maßgeblichen Bereichen",
          "Handfeuermelder entlang der Flucht- und Rettungswege",
          "Zonierung und Alarmierung (ggf. Sprachalarm) fachlich festlegen",
          "Planung durch qualifizierte BMA-Planer, Abstimmung mit Elektro, RLT, Aufzug, GLT",
          "Inbetriebnahme nur nach Abnahme durch Prüfsachverständigen (DIN VDE 0833-1)",
        ],
        paragraphs: [
          "Die BMA ist kein „Nebengewerk“: Verzögerungen bei der Sachverständigenabnahme verzögern die Nutzungsaufnahme. Termine früh mit Fachplanung und Errichter abstimmen.",
        ],
      },
      {
        id: "bau",
        title: "Baulicher Brandschutz bei Trockenbau und Durchbrüchen",
        list: [
          "Feuerwiderstand und Rauchdichtheit von neuen und geänderten Wänden/Decken nachweisen (Raumbuch, Wandlisten)",
          "Durchdringungen in brandschutzrelevanten Bauteilen nur im erforderlichen Mindestmaß, mit zugelassenen Abschottungen",
          "Übergänge Bestand/Neu bei KMF-Decken und gemischten Bauteilen abstimmen",
          "Brandschutztüren und Lüftungsarbeiten im KG mit Elektro und BMA koordinieren",
        ],
        paragraphs: [
          "Jeder Durchbruch in eine klassifizierte Wand ist dokumentationspflichtig. Ohne Nachweis drohen Nachforderungen in der Abnahme oder bei Versicherern.",
        ],
      },
      {
        id: "flucht",
        title: "Fluchtwege: lichte Breiten nach ASR A2.3",
        paragraphs: [
          "Für Arbeitsstätten (Büro/Verwaltung) regeln ASR A2.3 und BauO NRW die Fluchtwege. Maßgeblich ist die  des jeweiligen Hauptfluchtwegs – nicht pauschal die Gesamtbelegung des Gebäudes, wenn mehrere unabhängige Wege existieren.",
          "Die lichten Mindestbreiten steigen mit der Personenzahl (z. B. ab 100 Personen im Einzugsgebiet: mindestens etwa 1,00 m bei Durchgängen/Türen, 1,20 m bei Hauptfluchtwegen – verbindlich ist stets die gültige ASR-Fassung). Der Umbau darf vorhandene Breiten, Weglängen und einen zweiten Rettungsweg .",
        ],
        list: [
          "Einzugsgebiete im Plan definieren und dokumentieren",
          "Notausstiege und Wege aller Geschosse nach Umbau abgleichen",
          "Fluchtwegepläne mit Personenzahlen und Breitennachweis aktualisieren",
        ],
      },
      {
        id: "loescher",
        title: "Feuerlöscher und Pläne nicht vergessen",
        paragraphs: [
          "Durch neue Trennwände und verschobene Fluchtwege sind Bestands-Feuerlöscher nach ASR A2.2 neu zu bewerten: Laufwege (typisch höchstens etwa 20 m, bei erhöhter Brandgefährdung etwa 10 m), Löschmitteleinheiten je Nutzung und Fläche, Brandklassen (Büro, Teeküche/Fett, Technik).",
          "Flucht- und Rettungspläne (ASR A1.3/A2.3) sowie Feuerwehrpläne nach DIN 14095 sind nach wesentlichen Änderungen fortzuschreiben und mit der Feuerwehr abzustimmen, soweit erforderlich.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne aktualisieren" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
    ],
    faq: [
      {
        question: "Brauche ich bei Teilsanierung immer ein Brandschutzkonzept für die Behörde?",
        answer:
          "Nicht immer. Entscheidend sind Umfang der baulichen Änderung, Sonderbau-Status und ob eine Nutzungsänderung vorliegt. Eine interne oder begleitende Stellungnahme hilft oft bei der Umsetzung – unabhängig vom Genehmigungsverfahren.",
      },
      {
        question: "Muss die BMA bei jedem Büroumbau erneuert werden?",
        answer:
          "Nur wenn geplant oder wenn Bestand und Umbau es erfordern. Wird sie erneuert, sind Fachplanung, Abstimmung mit anderen Gewerken und die Sachverständigenabnahme verbindlich einzuplanen.",
      },
    ],
  },
  {
    slug: "bestandsschutz-technische-sanierung-bauo-nrw",
    title: "Bestandsschutz: technische Sanierung ohne bauliche Änderung",
    excerpt:
      "Wann Bestand nach § 59 BauO NRW geschützt ist – und warum eine Holzdecke bei reiner TGA-Maßnahme oft nicht nachgerüstet werden muss.",
    metaTitle: "Bestandsschutz Brandschutz | TGA Sanierung",
    metaDescription:
      "Bestandsschutz BauO NRW: technische Erneuerung ohne Nutzungsänderung. Wann keine Nachrüstung nötig ist – Ratgeber H&S+ Köln.",
    keywords: [
      "Bestandsschutz BauO NRW",
      "technische Sanierung Brandschutz",
      "Bestand Brandschutz Nachrüstung",
      "Holzdecke Bestand Brandschutz",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall: nur Anlagen tauschen, Gebäude bleibt gleich",
        paragraphs: [
          "In einem abgeschlossenen Projekt ging es um ein  (Baujahr 1971) einer technischen Betriebsanlage. Geplant war ausschließlich die Erneuerung von Anlagenteilen im Inneren (u. a. Austausch einer Leitung mit geringerer Nennweite) –  Änderung der baulichen Struktur, der Nutzung oder der Gebäudeklasse.",
          "Die Frage der Betreiber: Muss im Zuge der Maßnahme auch die  an heutige Neubauanforderungen angepasst werden?",
        ],
      },
      {
        id: "recht",
        title: "§ 59 und § 14 BauO NRW im Bestand",
        paragraphs: [
          "Nach § 59 BauO NRW bleiben  bauliche Anlagen grundsätzlich zulässig, solange durch Änderungen  entstehen und sich  ergibt.",
          "§ 14 BauO NRW verlangt weiterhin Vorbeugung gegen Brand und Rauch sowie die Möglichkeit von Rettung und Löscharbeiten – im Bestand werden die Anforderungen an  Bauteile (§§ 26 ff. BauO NRW) jedoch  angewendet, solange kein auslösender Tatbestand vorliegt.",
        ],
        list: [
          "Keine wesentliche bauliche Änderung",
          "Keine Nutzungsänderung",
          "Kein Eingriff in tragende oder raumabschließende Bauteile",
          "Keine erhöhte Brandlast durch die Maßnahme",
        ],
      },
      {
        id: "holzdecke",
        title: "Holzdecke und andere Bestandsbauteile",
        paragraphs: [
          "Eine Holzdecke, die Bestandteil des  ist, muss nicht deshalb ertüchtigt werden, weil technische Leitungen erneuert werden – wenn die Decke  wird und  mit der Anlagenmaßnahme besteht.",
          "Auslöser für Nachrüstung wären z. B. wesentliche Umbauten, Nutzungsänderung, Eingriffe in die Decke als raumabschließendes Bauteil oder eine nachweisbare Verschlechterung des Brandschutzniveaus.",
        ],
      },
      {
        id: "grenzen",
        title: "Grenzen des Bestandsschutzes",
        list: [
          "Neue Öffnungen, Durchbrüche oder Trennwände → brandschutztechnisch bewerten",
          "Geänderte Personenzahl oder Nutzung → oft neues Konzept/Stellungnahme",
          "Behördliche Auflagen oder Mängelbeseitigung → unabhängig vom Bestandsschutz",
          "Arbeitsschutz (ASR): Feuerlöscher, Fluchtwege, Unterweisung – immer aktuell halten",
        ],
        paragraphs: [
          "Bestandsschutz entbindet nicht von betrieblichem Brandschutz und Arbeitssicherheit. Eine interne brandschutztechnische Stellungnahme dokumentiert die Einordnung für Betrieb, Versicherer und interne Freigaben.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung mit baulichen Eingriffen" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
    ],
    faq: [
      {
        question: "Gilt Bestandsschutz auch in Köln anders als im Rest von NRW?",
        answer:
          "Die BauO NRW gilt einheitlich im Land. Die konkrete Behördenpraxis kann variieren – deshalb bei grenzwertigen Fällen früh abstimmen.",
      },
      {
        question: "Brauche ich trotzdem eine schriftliche Stellungnahme?",
        answer:
          "Gesetzlich nicht immer, aber sinnvoll für interne Freigabe, Versicherer und Abstimmung mit TGA-Planern – besonders bei älteren Beständen und gemischten Bauteilen.",
      },
    ],
  },
  ...RATGEBER_ARTICLES_BATCH2,
];

export function getRatgeberArticle(slug: string): RatgeberArticle | undefined {
  return RATGEBER_ARTICLES.find((a) => a.slug === slug);
}

export function getAllRatgeberSlugs(): string[] {
  return RATGEBER_ARTICLES.map((a) => a.slug);
}
