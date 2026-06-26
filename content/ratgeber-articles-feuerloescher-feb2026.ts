/**
 * Februar 2026 – Ratgeber-Cluster Feuerlöscher & ASR A2.2.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_FEUERLOESCHER_FEB2026: RatgeberArticle[] = [
  {
    slug: "loeschmitteleinheiten-feuerloescher-arbeitsplatz-asr-a22",
    title: "Löschmitteleinheiten (LE) am Arbeitsplatz nach ASR A2.2",
    excerpt:
      "Wie viele Feuerlöscher Sie nach ASR A2.2 brauchen: LE-Tabelle nach Grundfläche, Mindestanforderung 6 LE pro Gerät, Laufwege und erhöhte Brandgefährdung – mit Rechenbeispielen für Büro und Gewerbe.",
    metaTitle: "Wie viele Feuerlöscher brauche ich? LE-Tabelle | H&S+",
    metaDescription:
      "Löschmitteleinheiten nach ASR A2.2: LE-Tabelle nach Grundfläche, mindestens 6 LE pro Löscher, max. 20 m Laufweg – inkl. Rechenbeispiel für Ihren Arbeitsplatz.",
    keywords: [
      "Löschmitteleinheiten ASR A2.2",
      "Feuerlöscher Anzahl Arbeitsplatz",
      "LE Tabelle Feuerlöscher",
      "Grundausstattung Feuerlöscher",
      "Feuerlöscher Laufweg",
    ],
    sections: [
      {
        id: "grundlage",
        title: "Arbeitsschutz – nicht Bauordnung",
        paragraphs: [
          "Die Ausstattung mit Feuerlöscheinrichtungen ist Pflicht des **Arbeitgebers** nach Arbeitsstättenverordnung (ArbStättV) und **ASR A2.2 „Maßnahmen gegen Brände“** – unabhängig von Baugenehmigung oder Gebäudeklasse. Die Bauaufsicht kann Löscher indirekt über Konzept oder Stellungnahme erwähnen; im laufenden Betrieb prüfen Berufsgenossenschaft und Sicherheitsfachkräfte die ASR-A2.2-Umsetzung.",
          "Maßzahl sind **Löschmitteleinheiten (LE)**, nicht „ein Gerät pro Etage“. Jedes tragbare Gerät in der Grundausstattung hat **mindestens 6 LE** – kleinere Geräte dürfen für die Pflichtermittlung nicht angerechnet werden.",
        ],
      },
      {
        id: "tabelle",
        title: "LE-Tabelle nach Grundfläche (Orientierung ASR A2.2)",
        paragraphs: [
          "Für Arbeitsstätten mit **normaler Brandgefährdung** gilt die Bemessung nach Grundfläche des Arbeitsbereichs (einschließlich Baustelleneinrichtungen wie Bürocontainer und Werkstatt auf der Baustelle):",
        ],
        list: [
          "bis 50 m² → **6 LE**",
          "bis 100 m² → **9 LE**",
          "bis 200 m² → **12 LE**",
          "bis 300 m² → **15 LE**",
          "bis 400 m² → **18 LE**",
          "bis 500 m² → **21 LE**",
          "bis 600 m² → **24 LE**",
          "bis 700 m² → **27 LE**",
          "bis 800 m² → **30 LE**",
          "bis 900 m² → **33 LE**",
          "bis 1.000 m² → **36 LE**",
          "jede weitere 250 m² → **+ 6 LE**",
        ],
      },
      {
        id: "laufweg",
        title: "Standort und Laufweg",
        paragraphs: [
          "Der Weg zum nächsten Feuerlöscher soll **möglichst maximal 20 m** betragen (ASR A2.2). Löscher müssen **jederzeit betriebsbereit** und **sichtbar** sein – nicht hinter Türen, Regalen oder Fahrzeugen. Der Tragegriff sollte etwa **0,80 bis 1,20 m** über dem Boden liegen; bei schlechter Sicht ist Kennzeichnung nach ASR A1.3 (z. B. F005) erforderlich.",
          "Flucht- und Rettungswege und Zugänge für die Feuerwehr müssen **freigehalten** und gekennzeichnet werden – Löscher dürfen Wege nicht blockieren.",
        ],
      },
      {
        id: "erhoeht",
        title: "Erhöhte Brandgefährdung",
        paragraphs: [
          "Bei **erhöhter Brandgefährdung** reicht die Grundtabelle allein nicht. Typisch: Werkstätten mit Kfz-Reparatur, Schreinerei, Metallbearbeitung, Elektroinstallation, offene Flammen oder größere Mengen brennbarer Stoffe. Dann sind **zusätzliche Löscher** oder andere Löschmittel, ggf. **Brandmeldeanlagen** und engere Laufwege erforderlich – festzulegen in der **Gefährdungsbeurteilung**.",
          "In der **Gastronomie** (Küche, Frittieren) gelten eigene Schwerpunkte – siehe [Feuerlöscher Gastronomie](/ratgeber/feuerloescher-gastronomie-koeln) mit Fettbrandlöscher Klasse F.",
        ],
      },
      {
        id: "beispiel",
        title: "Rechenbeispiele",
        paragraphs: [
          "**Büro 85 m²**, normale Brandgefährdung: Tabelle → **9 LE** nötig. Ein 6-LE-Löscher reicht nicht; üblich sind zwei Geräte à 6 LE (= 12 LE) an gegenüberliegenden Punkten für Laufwege unter 20 m.",
          "**Lagerhalle 320 m²**, normale Brandgefährdung: Tabelle → **15 LE**. Drei 6-LE-Geräte (18 LE) oder Kombination mit Wandhydranten, sofern ASR A2.2-Voraussetzungen erfüllt (Schulung, keine Verrauchung der Fluchtwege).",
          "**Schreinerei 120 m²** mit Hobelmaschinen und Holzstaub: erhöhte Brandgefährdung – Grund-LE plus Zusatzgeräte und Brandschutzhelfer in der Gefährdungsbeurteilung festlegen.",
        ],
      },
      {
        id: "dokumentation",
        title: "Nachweis im Betrieb",
        paragraphs: [
          "Vorhalten: Standortliste mit LE und Brandklassen, Gefährdungsbeurteilung Brandschutz, Prüfprotokolle und Plaketten, Eintrag in Flucht- und Rettungsplänen nach ASR A2.3. Bei BG- oder Versicherungsprüfung fehlen diese Unterlagen oft, obwohl Geräte montiert sind.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Die LE-Tabelle ist Orientierung nach ASR A2.2 – maßgeblich ist Ihre Gefährdungsbeurteilung. Sonderbauten und Versicherungsauflagen können höhere Anforderungen stellen. Welcher Löschertyp zu welcher Brandklasse passt: [Brandklassen & Löschertypen](/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2", label: "Brandklassen & Löschertypen" },
      { href: "/ratgeber/feuerloescher-pruefen-wartung-asr-a22", label: "Prüfung & Wartung" },
      { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Feuerlöscher Gastronomie" },
      { href: "/ratgeber/feuerloescher-baustelle-asr-a22", label: "Feuerlöscher Baustelle" },
      { href: "/brandschutzhelfer-ausbildung-koeln", label: "Brandschutzhelfer" },
    ],
    faq: [
      {
        question: "Reicht ein 6-LE-Feuerlöscher für 80 m² Büro?",
        answer:
          "Nein. Ab 51 m² sind 9 LE erforderlich – mindestens zwei 6-LE-Geräte (12 LE) sind üblich, um Laufwege und Verteilung zu erfüllen.",
      },
      {
        question: "Dürfen Wandhydranten angerechnet werden?",
        answer:
          "Nur wenn Voraussetzungen der ASR A2.2 erfüllt sind: ausreichende Schulung der Beschäftigten, keine Verrauchung der Fluchtwege beim Einsatz, Wartung nach Vorgabe.",
      },
      {
        question: "Was ist der Unterschied LE und Liter?",
        answer:
          "LE ist die normierte Löschleistung nach DIN EN 3 – unabhängig vom Füllvolumen. Ein 6-kg-ABC-Pulverlöscher hat typischerweise 6 LE.",
      },
      {
        question: "Gilt die Tabelle auch für Homeoffice?",
        answer:
          "ASR A2.2 gilt für Arbeitsstätten des Arbeitgebers. Reine Telearbeit zu Hause folgt anderen Regeln – beim Besuch im Betrieb oder bei gemeinsam genutzten Flächen greift ASR A2.2.",
      },
      {
        question: "Wer bemessen die LE?",
        answer:
          "Der Arbeitgeber auf Basis der Gefährdungsbeurteilung – fachlich oft Sicherheitsfachkraft, Brandschutzbeauftragter oder externer Berater.",
      },
    ],
  },
  {
    slug: "brandklassen-loeschertypen-feuerloescher-din-en-2",
    title: "Brandklassen A bis F: Welcher Feuerlöscher passt?",
    excerpt:
      "Brandklassen nach DIN EN 2 und die Eignung von Pulver-, Schaum-, CO₂-, Wasser- und Fettbrandlöschern – Übersichtstabelle und typische Fehlwahl im Betrieb.",
    metaTitle: "Brandklassen A–F: Welcher Löschertyp? | H&S+",
    metaDescription:
      "Brandklassen A bis F erklärt: Welcher Feuerlöscher (Pulver, Schaum, CO₂, Fett) für welches Brandrisiko passt – Übersicht nach DIN EN 2 und ASR A2.2.",
    keywords: [
      "Brandklassen Feuerlöscher",
      "ABC Pulverlöscher",
      "Brandklasse B Schaum",
      "Fettbrandlöscher Klasse F",
      "DIN EN 2 Brandklassen",
    ],
    sections: [
      {
        id: "klassen",
        title: "Brandklassen nach DIN EN 2",
        paragraphs: [
          "Feuerlöscher werden nach **Brandklassen** ausgewählt – nicht nach „Pulver oder Schaum“ allein. Die Klassen beschreiben das brennbare Material:",
        ],
        list: [
          "**Klasse A:** feste, glutbildende Stoffe (Holz, Papier, Textilien)",
          "**Klasse B:** flüssige oder flüssig werdende Stoffe (Benzin, Öle, Lacke)",
          "**Klasse C:** gasförmige Stoffe, auch unter Druck",
          "**Klasse D:** brennbare Metalle (nur mit Spezialpulver und Pulverbrause)",
          "**Klasse F:** Speiseöle und -fette (Fettbrand in Küchen)",
        ],
      },
      {
        id: "matrix",
        title: "Löschertypen und Eignung (Übersicht)",
        paragraphs: [
          "Welcher Löschertyp für welche Klasse geeignet ist (vereinfachte Orientierung nach ASR A2.2 / Merkblatt A 021):",
        ],
        list: [
          "**ABC-Pulverlöscher:** Klassen **A, B, C** – vielseitig, aber Rückstände (Elektronik, Küche mit offenem Fett oft ungeeignet)",
          "**BC-Pulverlöscher:** Klassen **B, C**",
          "**Schaumlöscher:** Klassen **A, B** – gut bei Flüssigkeiten, weniger Rückstand als Pulver",
          "**Wasserlöscher:** Klasse **A** – nicht für brennende Flüssigkeiten oder Elektrik",
          "**CO₂-Löscher:** Klasse **B** – Elektronik, keine Rückstände; auf schwebenden Einrichtungen/Wasserfahrzeugen eingeschränkt",
          "**Fettbrandlöscher:** Klassen **A, B, F** – Pflicht an Fritteusen/Grills, nicht durch Pulver ersetzbar",
          "**Metallbrand-Pulver:** Klasse **D** – nur für brennbare Metalle",
        ],
      },
      {
        id: "fehlwahl",
        title: "Typische Fehlwahl",
        paragraphs: [
          "**Pulver in der Küche** statt Fettbrandlöscher – Fettbrand wird durch Wasser und falschen Löscher verschlimmert. **Wasser auf Brandklasse B** – explosionsähnliche Reaktion. **ABC-Pulver in Serverraum** – Rückstände zerstören Technik; oft CO₂ oder geeignetes Gaslöscher-System. **Ein Löscher für alles** – bei gemischter Brandlast (Werkstatt: Holz + Öl + Elektrik) mehrere Typen oder abgestimmte Kombination.",
        ],
      },
      {
        id: "auswahl",
        title: "Auswahl im Betrieb",
        paragraphs: [
          "Schritt 1: Brandlasten in der **Gefährdungsbeurteilung** erfassen. Schritt 2: LE nach Grundfläche ([LE-Tabelle](/ratgeber/loeschmitteleinheiten-feuerloescher-arbeitsplatz-asr-a22)). Schritt 3: Pro Standort den **passenden Löschertyp** für die dortige Brandlast wählen. Schritt 4: Beschriftung und Plan nach ASR A2.3.",
          "Gastronomie: [eigener Ratgeber](/ratgeber/feuerloescher-gastronomie-koeln) mit Klasse F.",
        ],
      },
      {
        id: "kennzeichnung",
        title: "Kennzeichnung am Gerät",
        paragraphs: [
          "Am Löscher müssen Brandklassen-Piktogramme und LE erkennbar sein. Beschäftigte müssen in der Unterweisung wissen, welcher Löscher für welchen Bereich gilt – Brandschutzhelfer nach ASR A2.2 vertiefen die Handhabung.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Baustelle und Betrieb",
        paragraphs: [
          "Brandklassen A bis F: Welcher Feuerlöscher passt? nach ASR A2.2 verlangt in NRW nachweisbare Prüf- und Wartungsintervalle – auf Baustellen zusätzlich Abstimmung mit SiGeKo und Heißarbeit. Abgrenzung: Handfeuerlöscher ersetzen keinen baulichen Brandschutz; Prüfplakette ersetzt keine Unterweisung.",
          "Praxisfall: Leihgeräte ohne Prüfnachweis auf der Baustelle – Baustellenkontrolle stoppte Arbeiten bis Nachweis vorlag. Orientierungswert: Register mit Standort, Typ, Prüfdatum und Prüfer je Löscher.",
          "Nachweis in der BSO Teil B und bei Übergabe an Betreiber – Schnittstelle [Brandklassen](/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Die Matrix ersetzt keine stoffspezifische Gefährdungsbeurteilung. Sonderstoffe (Lithium, Metallpulver) können Klasse D oder Sonderlöscher erfordern.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/loeschmitteleinheiten-feuerloescher-arbeitsplatz-asr-a22", label: "LE berechnen" },
      { href: "/ratgeber/feuerloescher-richtig-loeschen-technik", label: "Richtig löschen" },
      { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Gastronomie & Fettbrand" },
      { href: "/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz", label: "Brennbare Flüssigkeiten" },
    ],
    faq: [
      {
        question: "Ist ABC-Pulver immer die beste Wahl?",
        answer:
          "Nein. Es ist vielseitig, hinterlässt aber Rückstände und ist für Fettbrände in der Küche ungeeignet. Schaum oder Fettbrandlöscher sind dort oft besser.",
      },
      {
        question: "Darf CO₂ auf dem Schiff eingesetzt werden?",
        answer:
          "Auf schwimmenden und schwebenden Einrichtungen ist CO₂ nach den einschlägigen Regeln eingeschränkt – andere Löscher wählen.",
      },
      {
        question: "Was ist Brandklasse F?",
        answer:
          "Speiseöle und -fette bei hohen Temperaturen (Fritteusen). Nur Fettbrandlöscher oder spezielle Systeme – kein Wasser, kein normales Pulver.",
      },
      {
        question: "Brauche ich Klasse D im normalen Betrieb?",
        answer:
          "Nur bei brennbaren Metallen (Aluminiumspäne, Magnesium) – dann Spezialpulver mit Pulverbrause, nicht ABC.",
      },
      {
        question: "Wo steht die Pflicht zur Auswahl?",
        answer:
          "In der Gefährdungsbeurteilung nach ArbStättV und ASR A2.2 – der Arbeitgeber muss passende Löschmittel bereitstellen.",
      },
    ],
  },
  {
    slug: "feuerloescher-pruefen-wartung-asr-a22",
    title: "Feuerlöscher prüfen: Intervall, Plakette und Nach Benutzung",
    excerpt:
      "Wie oft Feuerlöscher nach ASR A2.2 und Herstellervorgaben geprüft werden müssen, was die Prüfplakette bedeutet und warum benutzte Geräte sofort wartet werden müssen.",
    metaTitle: "Feuerlöscher Prüfung: Intervall & Plakette | H&S+",
    metaDescription:
      "Feuerlöscher prüfen lassen: mindestens alle 2 Jahre, Prüfplakette lesen, nach Benutzung sofort warten – Pflichten nach ASR A2.2 für Arbeitgeber erklärt.",
    keywords: [
      "Feuerlöscher Prüfung",
      "Feuerlöscher Prüfplakette",
      "Feuerlöscher Wartung Intervall",
      "ASR A2.2 Prüfung",
      "Feuerlöscher alle 2 Jahre",
    ],
    sections: [
      {
        id: "pflicht",
        title: "Prüfpflicht des Arbeitgebers",
        paragraphs: [
          "Feuerlöscheinrichtungen müssen **jederzeit betriebsbereit** sein. Der Arbeitgeber stellt das sicher – in der Regel durch **regelmäßige Prüfung** durch Sachkundige und **Betriebskontrollen** durch den Betrieb. Grundlage: **ASR A2.2**, ergänzt durch **BetrSichV** und Herstellerangaben.",
        ],
      },
      {
        id: "intervall",
        title: "Prüfintervall: mindestens alle 2 Jahre",
        paragraphs: [
          "Nach ASR A2.2 und Merkblatt A 021: Feuerlöscher sind **mindestens alle zwei Jahre** nach Herstellervorgaben zu prüfen. In feuchter Umgebung, auf Baustellen oder in der Küche können **kürzere Intervalle** sinnvoll oder in der Gefährdungsbeurteilung vorgeschrieben sein.",
          "Zusätzlich: **monatliche oder wöchentliche Sichtkontrolle** im Betrieb (Plombe, Druck, Zugänglichkeit, Beschädigung) – dokumentieren.",
        ],
      },
      {
        id: "plakette",
        title: "Prüfplakette und Protokoll",
        paragraphs: [
          "Nach bestandener Prüfung erhält das Gerät eine **Prüfplakette** mit Datum und Prüfstelle. Abgelaufene Plaketten ohne Nachprüfung sind ein häufiger Mangel bei BG- und Versicherungskontrollen – das Gerät gilt dann nicht als nachweisbar betriebsbereit.",
          "Prüfprotokoll aufbewahren: Standort, LE, Ergebnis, Mängel, Maßnahmen. In [Eilbegehungen](/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln) werden abgelaufene Plaketten regelmäßig festgestellt.",
        ],
      },
      {
        id: "nach-benutzung",
        title: "Nach Benutzung: nicht zurückhängen",
        paragraphs: [
          "Wurde ein Löscher auch nur **teilweise entladen**, darf er **nicht wieder in die Halterung** – auch wenn „noch etwas drin“ ist. Sofort **warten oder austauschen** lassen. Ein halbentladenes Gerät ist im Brandfall unzuverlässig.",
          "Das gehört zur Unterweisung der Beschäftigten und Brandschutzhelfer.",
        ],
      },
      {
        id: "maengel",
        title: "Typische Mängel bei der Prüfung",
        list: [
          "Druck zu niedrig oder Manometer defekt",
          "Plombe gebrochen oder Verschluss undicht",
          "Rost, Verbeulung, beschädigter Schlauch oder Strahlrohr",
          "Falsche oder fehlende Kennzeichnung der Brandklassen",
          "Halterung lose oder Löscher nicht sichtbar erreichbar",
        ],
        paragraphs: [
          "Festgestellte Mängel sind **unverzüglich** zu beheben oder das Gerät zu ersetzen.",
        ],
      },
      {
        id: "sachkunde",
        title: "Wer darf prüfen?",
        paragraphs: [
          "Die **fachkundige Prüfung** nach DIN EN 3 / Herstellervorgaben führt eine befähigte Person oder Firma durch – nicht der Hausmeister ohne Qualifikation. Wartung und Füllung nur mit zugelassenen Stoffen und Verfahren.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Baustelle und Betrieb",
        paragraphs: [
          "Feuerlöscher prüfen: Intervall, Plakette und Nach Benutzung nach ASR A2.2 verlangt in NRW nachweisbare Prüf- und Wartungsintervalle – auf Baustellen zusätzlich Abstimmung mit SiGeKo und Heißarbeit. Abgrenzung: Handfeuerlöscher ersetzen keinen baulichen Brandschutz; Prüfplakette ersetzt keine Unterweisung.",
          "Praxisfall: Leihgeräte ohne Prüfnachweis auf der Baustelle – Baustellenkontrolle stoppte Arbeiten bis Nachweis vorlag. Orientierungswert: Register mit Standort, Typ, Prüfdatum und Prüfer je Löscher.",
          "Nachweis in der BSO Teil B und bei Übergabe an Betreiber – Schnittstelle [Brandklassen](/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber beschreibt die betriebliche Prüfpflicht nach ASR A2.2. Fest eingebaute Anlagen (Sprinkler, Wandhydranten) unterliegen eigenen Prüfzyklen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/loeschmitteleinheiten-feuerloescher-arbeitsplatz-asr-a22", label: "LE & Anzahl" },
      { href: "/ratgeber/feuerloescher-richtig-loeschen-technik", label: "Richtig löschen" },
      { href: "/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln", label: "Eilbegehung" },
      { href: "/brandschutzhelfer-ausbildung-koeln", label: "Brandschutzhelfer" },
    ],
    faq: [
      {
        question: "Reicht die Prüfplakette ohne Protokoll?",
        answer:
          "Die Plakette zeigt das letzte Prüfdatum am Gerät. Zusätzlich sollten Prüfprotokolle im Betrieb archiviert werden – für BG und Versicherer.",
      },
      {
        question: "Was kostet die Prüfung?",
        answer:
          "Abhängig von Anzahl, Standorten und Region – oft pauschal pro Gerät. Wartung nach Benutzung zusätzlich.",
      },
      {
        question: "Darf ich selbst prüfen?",
        answer:
          "Sichtkontrollen ja. Die fachkundige Wartungsprüfung nach DIN EN 3 erfordert Sachkunde – üblicherweise externer Dienstleister.",
      },
      {
        question: "Gilt 2 Jahre auch auf der Baustelle?",
        answer:
          "Ja, plus häufigere Sichtkontrollen wegen Beschädigungsrisiko – siehe [Feuerlöscher Baustelle](/ratgeber/feuerloescher-baustelle-asr-a22).",
      },
      {
        question: "Was bei abgelaufener Plakette während einer Kontrolle?",
        answer:
          "Gerät sperren oder ersetzen, Nachprüfung veranlassen. Weiterbetrieb ohne Plakette ist nicht nachweisbar.",
      },
    ],
  },
  {
    slug: "feuerloescher-richtig-loeschen-technik",
    title: "Feuerlöscher richtig benutzen: Technik und Sicherheitsabstände",
    excerpt:
      "Verhalten im Brandfall, 112 und Löschtechnik nach Merkblatt A 021: Windrichtung, Brandgut statt Flammen, stoßweises Löschen, Abstände bei Elektrik bis 1.000 V.",
    metaTitle: "Feuerlöscher richtig benutzen: 6 Schritte | H&S+",
    metaDescription:
      "Feuerlöscher richtig benutzen: Brandfall-Ablauf mit 112, Löschtechnik, stoßweises Löschen aufs Brandgut, Elektrik-Abstände (1 m / 3 m) – für Brandschutzhelfer und Betrieb.",
    keywords: [
      "Feuerlöscher richtig benutzen",
      "Feuerlöscher Technik",
      "Löschen Windrichtung",
      "Feuerlöscher Elektrik Abstand",
      "Brandschutzhelfer Löschtechnik",
    ],
    sections: [
      {
        id: "brandfall",
        title: "Verhalten im Brandfall – vor dem Löschen",
        paragraphs: [
          "Ruhe bewahren, anwesende Personen warnen und die Feuerwehr alarmieren: nächsten Brandmelder betätigen oder 112 wählen. Die Leitstelle fragt typischerweise: Wo ist etwas passiert? Was ist passiert? Wer ruft an? Wie viele Verletzte? Warten Sie auf Rückfragen – die Leitstelle beendet das Gespräch, nicht Sie.",
          "Erst danach – und nur bei einem kleinen Entstehungsbrand ohne Eigengefährdung – kommt der Löschversuch infrage. Bei starker Rauchentwicklung, schneller Brandausbreitung oder unsicherem Rückzugsweg: flüchten, andere warnen, Sammelplatz aufsuchen. Aufzüge im Brandfall nicht benutzen.",
        ],
      },
      {
        id: "voraussetzung",
        title: "Nur bei sicherem Eigenschutz",
        paragraphs: [
          "Erstbekämpfung ist sinnvoll bei kleinen Entstehungsbränden – wenn Eigenschutz, Fluchtwege und Alarmierung gesichert sind. Brandschutzhelfer nach ASR A2.2 sind dafür ausgebildet; andere Beschäftigte nur nach Unterweisung.",
        ],
      },
      {
        id: "bedienung",
        title: "Grundbedienung (Beispiel Drucklöscher)",
        paragraphs: [
          "Vor dem Einsatz mit den vorhandenen Geräten vertraut machen – Typen unterscheiden sich. Typische Schritte: Sicherung entfernen, Betätigung (Hebel oder Schlagknopf), Löschpistole oder Strahlrohr auf das Brandgut richten.",
        ],
      },
      {
        id: "sechs-schritte",
        title: "Regeln für die Löschtechnik",
        paragraphs: [
          "Windrichtung beachten und genügend Abstand halten. Ziel ist das Brandgut, nicht die Flammen in der Luft. Stoßweise löschen – nur so viel Löschmittel wie nötig; Reserve im Gerät für mögliche Wiederentzündung einplanen.",
        ],
        list: [
          "Wind: mit dem Wind löschen – Rauch und Flammen nicht ins Gesicht",
          "Flächenbrand: von vorn nach hinten über die brennende Fläche",
          "Tropfen- und Fließbrände: von oben nach unten",
          "Mehrere Löscher: wenn möglich gleichzeitig – nicht nacheinander mit zu wenig Mittel",
          "Nachglühen: Brandstelle beobachten, auf Wiederentzündung achten",
          "Nach Einsatz: Gerät nicht zurückhängen – Wartung veranlassen (siehe [Prüfung](/ratgeber/feuerloescher-pruefen-wartung-asr-a22))",
        ],
      },
      {
        id: "elektrik",
        title: "Abstände bei elektrischen Anlagen bis 1.000 V",
        paragraphs: [
          "Bei elektrischen Anlagen bis 1.000 V gelten Mindestabstände beim Löschen (Merkblatt A 021):",
        ],
        list: [
          "Wasser (Voller Strahl) / Schaum: 3,0 m Abstand",
          "Wasser (Sprühstrahl) / Pulver / CO₂: 1,0 m Abstand",
        ],
      },
      {
        id: "kleidung",
        title: "Brennende Kleidung – kein Laufverhalten",
        paragraphs: [
          "Personen mit brennender Kleidung nicht rennen lassen (Luftzug verstärkt Flammen). Zu Boden bringen, mit Decke oder Löscher von 2–3 m Entfernung ablöschen – nicht ins Gesicht sprühen. Keine Löschdecken für brennende Kleidung verwenden (Merkblatt A 021) – Ablöschen oder Duschen, je nach Situation.",
        ],
      },
      {
        id: "unterweisung",
        title: "Übung und Brandschutzhelfer",
        paragraphs: [
          "Alle Beschäftigten müssen Standort und Grundhandhabung kennen. Brandschutzhelfer üben die Technik praktisch in der Ausbildung nach ASR A2.2 – Ausbildung: [Brandschutzhelfer Köln](/brandschutzhelfer-ausbildung-koeln).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber ersetzt keine praktische Übung. Welcher Löschertyp für welche Brandklasse: [Brandklassen](/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzhelfer-ausbildung-koeln", label: "Brandschutzhelfer Ausbildung" },
      { href: "/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2", label: "Brandklassen" },
      { href: "/ratgeber/feuerloescher-pruefen-wartung-asr-a22", label: "Nach Benutzung warten" },
      { href: "/ratgeber/escape-room-brandschutzordnung-fluchtplan", label: "BSO & Alarmplan" },
    ],
    faq: [
      {
        question: "Was sage ich der Leitstelle bei 112?",
        answer:
          "Ort (Adresse, Stockwerk), Was brennt, Ihr Name, Verletzte – kurz und sachlich. Auf Rückfragen warten; die Leitstelle beendet das Gespräch.",
      },
      {
        question: "Wie starte ich einen Pulverlöscher?",
        answer:
          "Sicherung entfernen, Betätigung je nach Gerät (Hebel, Druckknopf), Strahlrohr auf Brandgrund richten, im Nährbereich beginnen.",
      },
      {
        question: "Darf ich mit Wasser auf Steckdosen löschen?",
        answer:
          "Nur mit ausreichendem Abstand und nur bei ausgeschalteter Anlage bzw. mit Sprühstrahl-Geräten nach Tabelle – sonst Lebensgefahr.",
      },
      {
        question: "Wann ist der Brand gelöscht?",
        answer:
          "Wenn keine Flammen und kein Glut mehr sichtbar sind – trotzdem Nachglühen beobachten und Feuerwehr informieren.",
      },
      {
        question: "Reicht ein 6-LE-Löscher für jeden Brand?",
        answer:
          "Nur bei sehr kleinen Entstehungsbränden. Größere Brandlasten erfordern mehrere Geräte oder Feuerwehr.",
      },
      {
        question: "Muss ich nach Übung mit Löscher warten lassen?",
        answer:
          "Ja, sobald das Mittel auch nur teilweise entladen wurde – Gerät nicht weiterbetreiben.",
      },
    ],
  },
  {
    slug: "feuerloescher-baustelle-asr-a22",
    title: "Feuerlöscher auf der Baustelle nach ASR A2.2",
    excerpt:
      "Besondere Anforderungen an Feuerlöscher auf Baustellen: LE für Baustelleneinrichtungen, erhöhte Brandgefährdung bei Hoch- und Untertagebau, Prüfung und Abstimmung mit Fachbauleitung.",
    metaTitle: "Feuerlöscher Baustelle: Pflicht & LE | ASR A2.2 | H&S+",
    metaDescription:
      "Feuerlöscher auf der Baustelle: LE für Bürocontainer und Werkstatt, Zusatzanforderungen bei Hoch- und Tiefbau – Pflichten nach ASR A2.2 für Bauleitung und AG.",
    keywords: [
      "Feuerlöscher Baustelle",
      "Baustelle Brandschutz ASR A2.2",
      "Baustelleneinrichtung Feuerlöscher",
      "Brandschutz Baustelle LE",
      "Fachbauleitung Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Baustelle = Arbeitsstätte",
        paragraphs: [
          "Baustellen und Baustelleneinrichtungen (Bürocontainer, Sanitärcontainer, Werkstatt, Materiallager) sind **Arbeitsstätten** im Sinne der ArbStättV. **ASR A2.2** gilt auch hier – unabhängig vom Bauhauptgewerbe-Vertrag. Verantwortlich ist der **Arbeitgeber** der jeweiligen Beschäftigten (oft Subunternehmer); der **AG/Bauherr** koordiniert über SiGe-Plan und Gefährdungsbeurteilung.",
        ],
      },
      {
        id: "le",
        title: "LE für Baustelleneinrichtungen",
        paragraphs: [
          "Für Container-Büros, Aufenthaltsräume und Werkstätten auf der Baustelle gilt dieselbe **LE-Tabelle nach Grundfläche** wie im Betrieb – siehe [LE am Arbeitsplatz](/ratgeber/loeschmitteleinheiten-feuerloescher-arbeitsplatz-asr-a22). Ein 20-m²-Bürocontainer braucht mindestens **6 LE** (ein 6-LE-Gerät); größere Einrichtungen entsprechend mehr.",
          "Löscher müssen **transportfest** montiert oder standfest abgestellt und vor Witterung geschützt sein, soweit erforderlich.",
        ],
      },
      {
        id: "erhoeht",
        title: "Erhöhte Brandgefährdung auf Baustellen",
        paragraphs: [
          "Merkblatt A 021: Bei **Hochbau**, **Tiefbau** und **erhöhter Brandgefährdung** sind **zusätzliche Löschmittel** und Maßnahmen erforderlich – z. B. bei Heißarbeiten, Schweißen, Lagerung brennbarer Baustoffe, provisorischer Elektrik.",
          "Heißarbeiten: Feuerwache, Löschbereitschaft, Absperrung – oft in Betriebsanweisung und SiGe-Plan geregelt. Schnittstelle [Fachbauleitung Brandschutz](/ratgeber/fachbauleitung-brandschutz-baustelle-koeln) und [Abschottungen auf der Baustelle](/ratgeber/abschottungen-durchbrueche-baustelle-koeln).",
        ],
      },
      {
        id: "pruefung",
        title: "Prüfung und Beschädigung",
        paragraphs: [
          "Baustellen-Löscher sind **Beschädigungs- und Diebstahlrisiko** ausgesetzt. **Häufigere Sichtkontrollen** und **zweijährliche fachkundige Prüfung** bleiben Pflicht – siehe [Prüfung & Wartung](/ratgeber/feuerloescher-pruefen-wartung-asr-a22). Nach Sturz oder Entladung: sofort außer Betrieb.",
        ],
      },
      {
        id: "koordination",
        title: "SiGe-Plan und Unterweisung",
        paragraphs: [
          "Im **SiGe-Plan** (Baustellenverordnung) können Standorte von Löschern, Heißarbeit-Regeln und Notfalltelefonnummern festgelegt sein. **Unterweisung** aller Beschäftigten bei Baubeginn: Standort Löscher, Alarm, Sammelplatz.",
          "Bauordnungsrechtliche Brandschutz-Anforderungen am Rohbau (Brandabschnitte, T30-RS) sind getrennt – [Fachbauleitung](/ratgeber/fachbauleitung-brandschutz-baustelle-koeln).",
        ],
      },
      {
        id: "fehler",
        title: "Typische Baustellen-Mängel",
        list: [
          "Kein Löscher im Container-Büro „weil nur kurz da“",
          "Ein Löscher für gesamte große Baustelle ohne Laufweg-Logik",
          "Heißarbeit ohne Löschbereitschaft",
          "Abgelaufene Plakette nach Transport zwischen Bauabschnitten",
        ],
        paragraphs: [],
      },
      {
        id: "vertiefung",
        title: "Praxis: Baustelle und Betrieb",
        paragraphs: [
          "Feuerlöscher auf der Baustelle nach ASR A2.2 nach ASR A2.2 verlangt in NRW nachweisbare Prüf- und Wartungsintervalle – auf Baustellen zusätzlich Abstimmung mit SiGeKo und Heißarbeit. Abgrenzung: Handfeuerlöscher ersetzen keinen baulichen Brandschutz; Prüfplakette ersetzt keine Unterweisung.",
          "Praxisfall: Leihgeräte ohne Prüfnachweis auf der Baustelle – Baustellenkontrolle stoppte Arbeiten bis Nachweis vorlag. Orientierungswert: Register mit Standort, Typ, Prüfdatum und Prüfer je Löscher.",
          "Nachweis in der BSO Teil B und bei Übergabe an Betreiber – Schnittstelle [Brandklassen](/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2).",
        ],
      },
      {
        id: "betrieb-nachweis",
        title: "Praxis: Baustelle und Betrieb",
        paragraphs: [
          "Feuerlöscher auf der Baustelle nach ASR A2.2 nach ASR A2.2 verlangt in NRW nachweisbare Prüf- und Wartungsintervalle – auf Baustellen zusätzlich Abstimmung mit SiGeKo und Heißarbeit. Abgrenzung: Handfeuerlöscher ersetzen keinen baulichen Brandschutz; Prüfplakette ersetzt keine Unterweisung.",
          "Praxisfall: Leihgeräte ohne Prüfnachweis auf der Baustelle – Baustellenkontrolle stoppte Arbeiten bis Nachweis vorlag. Orientierungswert: Register mit Standort, Typ, Prüfdatum und Prüfer je Löscher.",
          "Nachweis in der BSO Teil B und bei Übergabe an Betreiber – Schnittstelle [Brandklassen](/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Konkrete LE und Zusatzanforderungen hängen von Baustellengröße, Verfahren und Gefährdungsbeurteilung ab. Dieser Ratgeber ersetzt keinen SiGe-Plan.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/fachbauleitung-brandschutz-baustelle-koeln", label: "Fachbauleitung" },
      { href: "/ratgeber/loeschmitteleinheiten-feuerloescher-arbeitsplatz-asr-a22", label: "LE-Tabelle" },
      { href: "/ratgeber/feuerloescher-pruefen-wartung-asr-a22", label: "Prüfung" },
      { href: "/ratgeber/abschottungen-durchbrueche-baustelle-koeln", label: "Abschottungen Baustelle" },
    ],
    faq: [
      {
        question: "Wer stellt Löscher auf der Baustelle bereit?",
        answer:
          "Der Arbeitgeber der Beschäftigten im jeweiligen Bereich – praktisch oft Koordination über Bauleitung und SiGe-Koordinator.",
      },
      {
        question: "Braucht jeder Container einen Löscher?",
        answer:
          "Jede Aufenthalts- und Arbeitsstätte nach LE-Tabelle – ein kleiner Bürocontainer mit 15 m² braucht mindestens 6 LE am erreichbaren Standort.",
      },
      {
        question: "Gilt ASR A2.2 auch während der Rohbauphase?",
        answer:
          "Ja für Arbeitsbereiche und Einrichtungen. Baulicher Brandschutz am Gebäude folgt BauO NRW und Fachbauleitung – ergänzend, nicht statt ASR A2.2.",
      },
      {
        question: "Sind Feuerlöscher auf Dächern nötig?",
        answer:
          "Wenn dort dauerhaft gearbeitet wird (z. B. Dachabdichtung mit Heißarbeit), ja – Gefährdungsbeurteilung und Heißarbeit-Konzept.",
      },
      {
        question: "Was bei Baustellenende?",
        answer:
          "Löscher zurückgeben oder auf nächste Baustelle mit dokumentierter Prüfung – nicht mit abgelaufener Plakette weiterverwenden.",
      },
    ],
  },
];
