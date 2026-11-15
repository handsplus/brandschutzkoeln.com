/**
 * 17.10.2024 – Brandschutzfachplaner / Rollen (BauO / BauPrüfVO NRW).
 * Quelle: Brandschutzfachplaner_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BRANDSCHUTZFACHPLANER: RatgeberArticle[] = [
  {
    slug: "brandschutzfachplaner-rollen-bauo-nrw",
    title: "Brandschutzfachplaner: was das Gesetz wirklich regelt – und welche Rollen es stattdessen kennt",
    excerpt:
      "Der Begriff „Brandschutzfachplaner“ steht nicht in der BauO NRW. Gesetzlich gibt es Fachplaner, Konzept-Ersteller nach § 54 Abs. 3, Sachverständige und Prüfingenieure – mit unterschiedlichen Aufgaben. Übersicht mit Prüfkatalog.",
    metaTitle: "Brandschutzfachplaner Rollen BauO NRW | H&S+",
    metaDescription:
      "Brandschutzfachplaner NRW: kein Legalbegriff – § 54 Fachplaner, § 54 Abs. 3 Konzept, § 68 SV-Bescheinigung, Prüfingenieur BauPrüfVO. Wer darf was?",
    keywords: [
      "Brandschutzfachplaner NRW",
      "Brandschutzplaner Pflicht",
      "§ 54 BauO Fachplaner",
      "§ 68 BauO Sachverständiger",
      "Prüfingenieur Brandschutz",
      "wer darf Brandschutzkonzept",
    ],
    sections: [
      {
        id: "frage",
        title: "„Brandschutzfachplaner“ – ein Praxisbegriff, kein Gesetzestitel",
        paragraphs: [
          "In Genehmigungsunterlagen, Ausschreibungen und Beratungsgesprächen heißt es schnell „Brandschutzfachplaner beauftragen“. In der BauO NRW und der SBauVO NRW kommt diese Bezeichnung nicht vor – weder als Berufsbezeichnung noch als Pflichtrolle.",
          "Das Landesrecht regelt stattdessen funktionale Rollen: Fachplanerinnen und Fachplaner (§ 54 Abs. 2 BauO NRW), einen besonderen Personenkreis für Brandschutzkonzepte (§ 54 Abs. 3), sachverständige Personen für Prüfung und Bescheinigung (§§ 68, 87 BauO NRW) sowie Prüfingenieurinnen und Prüfingenieure (BauPrüfVO NRW). In der Praxis wird „Brandschutzfachplaner“ meist einer oder mehreren dieser Rollen zugeordnet.",
          "Es gibt keine gesetzliche Pflicht, für jedes Bauvorhaben einen Brandschutz-Fachplaner zu beauftragen – und keine einheitliche Ausbildungs- oder Kammerregelung speziell für diesen Praxisbegriff.",
        ],
      },
      {
        id: "mapping",
        title: "Praxisbegriff → gesetzliche Rolle",
        table: {
          caption: "Wer im Brandschutz welche gesetzliche Funktion hat",
          headers: ["Praxisbegriff", "Gesetzliche Rolle", "Norm", "Kernaufgabe"],
          rows: [
            [
              "Brandschutzfachplaner (Planung)",
              "Fachplaner/in für Brandschutz",
              "§ 54 Abs. 2 BauO",
              "Brandschutzliche Fachplanungsunterlagen im Auftrag der Entwurfsverfasserin / des Entwurfsverfassers",
            ],
            [
              "Brandschutzkonzept-Ersteller",
              "Personenkreis § 54 Abs. 3",
              "§ 54 Abs. 3; § 70; BauPrüfVO § 9",
              "Aufstellung des Brandschutzkonzepts (insbesondere Sonderbauten)",
            ],
            [
              "Brandschutznachweis-Prüfer",
              "Sachverständige Person § 87 Abs. 2",
              "§ 68 Abs. 2; § 87 Abs. 2 BauO",
              "Prüfung bautechnischer Nachweise, Bescheinigung Brandschutz-Anforderungen",
            ],
            [
              "Prüfingenieur Brandschutz",
              "Prüfingenieur/in",
              "BauPrüfVO §§ 21, 23, 28",
              "Prüfung, Bescheinigung, stichprobenhafte Bauüberwachung (wenn anerkannt)",
            ],
            [
              "Entwurfsverfasser mit Brandschutz-Kompetenz",
              "Entwurfsverfasser/in (bauvorlageberechtigt)",
              "§§ 54 Abs. 1, 67, 68 Abs. 2 Satz 2 BauO",
              "Gesamtentwurf; bei GK 1–3 und Kleingaragen Erklärung zur Brandschutz-Einhaltung",
            ],
          ],
        },
        paragraphs: [],
      },
      {
        id: "normkette",
        title: "Normkette: vom Bauvorhaben zur Bescheinigung",
        list: [
          "§ 52 BauO – Bauherrschaft und Beteiligte müssen öffentlich-rechtliche Vorschriften einhalten",
          "§ 53 BauO – Bauherrschaft bestellt geeignete Beteiligte nach §§ 54–56",
          "§§ 54, 67 BauO – Entwurfsverfassende erstellen Bauvorlagen; Fachplaner für Teilgebiete",
          "§ 68 BauO – Bautechnische Nachweise Brandschutz und Bescheinigungen sachverständiger Personen",
          "§ 70 BauO – Bei großen Sonderbauten: Brandschutzkonzept als Bauvorlage",
          "§ 84 BauO – Sachverständige kontrollieren stichprobenhaft die Bauausführung",
        ],
        paragraphs: [
          "Wann welches Dokument nötig ist: [Brandschutzkonzept wann nötig](/ratgeber/brandschutzkonzept-wann-noetig). Abweichungen mit SV-Bescheinigung: [§ 69 BauO NRW](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
        ],
      },
      {
        id: "paragraph-54",
        title: "§ 54 BauO NRW – Entwurfsverfasser, Fachplaner, Konzept",
        paragraphs: [
          "Abs. 1: Die Entwurfsverfasserin oder der Entwurfsverfasser muss nach Sachkunde und Erfahrung geeignet sein und trägt die Gesamtverantwortung für Vollständigkeit und Brauchbarkeit des Entwurfs – einschließlich Brandschutz, auch wenn Fachplaner Teilplanungen liefern.",
          "Abs. 2 – systematischer Kern für „Brandschutzfachplaner“: Hat die Entwurfsverfasserin oder der Entwurfsverfasser auf einzelnen Fachgebieten nicht die erforderliche Sachkunde, sind geeignete Fachplanerinnen und Fachplaner heranzuziehen. Diese sind für ihre Unterlagen verantwortlich. Für das ordnungsgemäße Ineinandergreifen aller Fachplanungen bleibt die Entwurfsverfasserin oder der Entwurfsverfasser verantwortlich. Maßstab: Sachkunde und Erfahrung – keine brandspezifische Listung im Gesetz.",
          "Abs. 3 – Brandschutzkonzepte stellen sachverständige Personen nach § 87 Abs. 2 für die Prüfung des Brandschutzes, öffentlich bestellte und vereidigte Sachverständige für vorbeugenden Brandschutz oder Personen auf, die im Einzelfall nach Sachkunde und Erfahrung vergleichbar geeignet sind. Für Konzepte nennt das Gesetz diesen Personenkreis – vergleichbare Eignung ist die Ausnahme und solltest du vorab mit der Bauaufsicht abstimmen.",
          "Abs. 4 (Vergleich): Für Standsicherheit gibt es „qualifizierte Tragwerksplaner“ mit detaillierter Regelung – für Brandschutz existiert keine parallel ausformulierte „qualifizierte Brandschutzplaner“-Norm in § 54, stattdessen Abs. 3 (Konzept) und § 68 (Prüfung/Bescheinigung).",
        ],
      },
      {
        id: "paragraph-68",
        title: "§ 68 BauO NRW – Nachweise und Bescheinigungen",
        paragraphs: [
          "Abs. 1: Die Einhaltung der Anforderungen an Brand-, Wärme- und Schallschutz ist nach Maßgabe der Verordnung nach § 87 Abs. 4 nachzuweisen (bautechnische Nachweise – BauPrüfVO NRW).",
          "Abs. 2 Satz 2: Bei Gebäuden der GK 1–3 und bei Kleingaragen reicht die Erklärung der Entwurfsverfassenden, dass dein Vorhaben die Brandschutzanforderungen erfüllt.",
          "Abs. 2 Satz 3: Bei GK 4 und 5 ohne Sonderbau sowie bei Mittelgaragen stellen Prüfsachverständige für Brandschutz die Bescheinigung aus.",
          "Abs. 2 Satz 5: Bei Sonderbauten und Großgaragen bedient sich die Bauaufsicht einer Prüfingenieurin oder eines Prüfingenieurs für Brandschutz.",
          "§ 68 regelt die Prüfung und Bescheinigung – nicht die Beauftragung eines Fachplaners. Planung und Prüfung können bei verschiedenen Personen liegen.",
        ],
        table: {
          caption: "Wann Erklärung – wann Prüfsachverständige – wann Prüfingenieur?",
          headers: ["Vorhaben", "Brandschutz-Nachweis?", "Norm", "Wer?"],
          rows: [
            [
              "Gebäude GK 1–3 und Kleingaragen",
              "Erklärung der Entwurfsverfassenden",
              "§ 68 Abs. 2 Satz 2",
              "Entwurfsverfassende – gilt für alle GK 1–3, nicht nur Wohngebäude",
            ],
            [
              "GK 4/5 ohne Sonderbau und Mittelgaragen",
              "Bescheinigung vor Genehmigung",
              "§ 68 Abs. 2 Satz 3",
              "Prüfsachverständige für Brandschutz",
            ],
            [
              "Sonderbauten und Großgaragen",
              "Prüfung durch Bauaufsicht mit Prüfingenieur",
              "§ 68 Abs. 2 Satz 5",
              "Bauaufsicht bedient sich Prüfingenieurin/Prüfingenieur Brandschutz",
            ],
          ],
        },
      },
      {
        id: "konzept",
        title: "§ 70 BauO und BauPrüfVO § 9 – Brandschutzkonzept",
        paragraphs: [
          "§ 70 Abs. 2 BauO NRW: Mit den Bauvorlagen für große Sonderbauten (§ 50 Abs. 2) ist ein Brandschutzkonzept einzureichen.",
          "BauPrüfVO NRW § 9 Satz 1: Das Brandschutzkonzept ist eine zielorientierte Gesamtbewertung des baulichen und abwehrenden Brandschutzes bei Sonderbauten durch den in § 54 Abs. 3 BauO NRW bestimmten Personenkreis.",
          "Das Konzept muss u. a. Feuerwehrzufahrten, Löschwasser, Brand- und Rauchabschnitte, Rettungswege, Nutzerzahl/Evakuierung, Haustechnik, Lüftung, Rauchabzug, Alarmierung und Feuerlöschanlagen umfassen. Bei großen Sonderbauten darf auf die Vorlage nicht verzichtet werden (BauPrüfVO § 1).",
        ],
      },
      {
        id: "pruefingenieur",
        title: "§ 87 BauO und BauPrüfVO – Sachverständige und Prüfingenieure",
        paragraphs: [
          "§ 87 Abs. 2 BauO NRW ermächtigt die oberste Bauaufsichtsbehörde, Vorschriften über Sachverständige zu erlassen, die im Auftrag der Bauherrschaft bauordnungsrechtliche Anforderungen prüfen und bescheinigen – Fachbereiche, Anerkennungsvoraussetzungen und Aufgabenerledigung in separater Verordnung.",
          "BauPrüfVO § 23: Staatlich anerkannte Sachverständige für die Prüfung des Brandschutzes werden auf Antrag als Prüfingenieurin oder Prüfingenieur anerkannt. Detailvoraussetzungen für staatlich anerkannte SV Brandschutz stehen in der separaten Sachverständigen-Verordnung.",
          "BauPrüfVO § 22: Prüfingenieurinnen und Prüfingenieure für Brandschutz aus anderen Ländern gelten in NRW als anerkannt, wenn sie mindestens zehn Jahre Erfahrung in brandschutztechnischer Planung und Ausführung von Gebäuden – insbesondere Sonderbauten mit höherem Schwierigkeitsgrad – oder deren Prüfung haben.",
        ],
        table: {
          caption: "Drei Qualifikationswege für Brandschutzkonzepte (§ 54 Abs. 3)",
          headers: ["Nr.", "Personenkreis", "Rechtsgrundlage", "Anmerkung"],
          rows: [
            [
              "1",
              "Sachverständige Personen nach § 87 Abs. 2 für die Prüfung des Brandschutzes",
              "§ 54 Abs. 3; § 87 Abs. 2 BauO",
              "Gesetzlicher Wortlaut; Prüfung und Konzept-Erstellung möglich",
            ],
            [
              "2",
              "Ö.b.u.v. SV für vorbeugenden Brandschutz",
              "§ 54 Abs. 3; § 36 GewO",
              "Bundesrechtliche Bestellung",
            ],
            [
              "3",
              "Einzelvergleichbar geeignete Personen",
              "§ 54 Abs. 3 Alt. 3",
              "Einzelfall; Sachkunde vergleichbar zu Nr. 1/2",
            ],
          ],
        },
      },
      {
        id: "beteiligte",
        title: "Weitere Beteiligte im Verfahren",
        table: {
          caption: "Rollen mit Brandschutz-Bezug",
          headers: ["Rolle", "Bezug Brandschutz", "Norm"],
          rows: [
            ["Bauherrschaft", "Bestellt Entwurfsverfassende, Bauleitung; reicht Bescheinigungen ein", "§ 53 BauO"],
            [
              "Entwurfsverfassende (bauvorlageberechtigt)",
              "Gesamtentwurf; bei GK 1–3 und Kleingaragen: Erklärung Brandschutz-Konformität",
              "§§ 54 Abs. 1, 67, 68 Abs. 2 Satz 2",
            ],
            [
              "Bauleiter/in",
              "Überwacht ordnungsgemäße Ausführung; bei fehlender Sachkunde: Fachbauleiter/in",
              "§ 56 BauO",
            ],
            [
              "Bauvorlageberechtigung",
              "Architekt/in oder eingetragene Ingenieurin/Ingenieur – Voraussetzung für Entwurfsverfasser, nicht brandspezifisch",
              "§ 67 BauO",
            ],
            [
              "Brandschutz-Bescheinigung",
              "Prüfsachverständige bzw. Erklärung der Entwurfsverfassenden nach § 68 Abs. 2 – Stufe richtet sich nach Gebäudeklasse und Sonderbau",
              "§ 68 Abs. 2 BauO",
            ],
          ],
        },
        paragraphs: [],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung zu anderen Brandschutz-Personen",
        table: {
          caption: "Was kein „Brandschutzfachplaner“ im Genehmigungsverfahren ist",
          headers: ["Rolle", "Rechtsgrundlage", "Abgrenzung"],
          rows: [
            [
              "Brandschutzbeauftragte/r",
              "§ 50 Abs. 2 Nr. 22 BauO; SBauVO Betrieb",
              "Betriebsphase großer Sonderbauten – keine Planungsrolle im Genehmigungsverfahren",
            ],
            [
              "Brandschutzdienststelle",
              "BHKG NRW § 25",
              "Behörde – Stellungnahmen bei Einvernehmen, keine Fachplanung",
            ],
            [
              "Brandschutzingenieurwesen (SBauVO)",
              "z. B. § 65, § 115 SBauVO",
              "Nur Nachweismethode – kein Planerberuf",
            ],
            [
              "Qualifizierte Tragwerksplaner/in",
              "§ 54 Abs. 4 BauO",
              "Nur Standsicherheit – parallele Sonderregelung",
            ],
            [
              "Prüfingenieur/in (allgemein)",
              "BauPrüfVO",
              "Kann Brandschutz-, Statik-, Schall-, Wärme-Prüfung umfassen – je nach Anerkennung",
            ],
          ],
        },
        paragraphs: [],
        list: [
          "Nicht als Planerrolle in BauO/SBauVO geregelt: Brandschutzkoordinator (Baustelle), SiGeKo, Fachkraft für Rauchwarnmelder – andere Rechtsgrundlagen möglich",
        ],
      },
      {
        id: "rollenmatrix",
        title: "Rollenmatrix: Wer darf was?",
        paragraphs: [],
        table: {
          caption: "Aufgaben im Brandschutz – gesetzliche Zuordnung",
          headers: ["Nr.", "Aufgabe", "Wer (gesetzlich)?", "Norm", "Wann?"],
          rows: [
            [
              "1",
              "Brandschutz-Fachplanung im Entwurf",
              "Fachplaner/in (geeignet) oder Entwurfsverfasser/in",
              "§ 54 Abs. 1–2",
              "Vorbereitung Bauvorhaben",
            ],
            [
              "2",
              "Brandschutzkonzept erstellen",
              "Sachverständige Personen nach § 87 Abs. 2, ö.b.u.v. SV GewO § 36, vergleichbar Geeignete",
              "§ 54 Abs. 3; § 70",
              "Große Sonderbauten",
            ],
            [
              "3",
              "Bautechnische Nachweise Brandschutz",
              "Nach VO § 87 Abs. 4 (BauPrüfVO)",
              "§ 68 Abs. 1",
              "Genehmigungspflichtige Vorhaben",
            ],
            [
              "4",
              "Bescheinigung Brandschutz GK 4/5 und Mittelgaragen",
              "Prüfsachverständige für Brandschutz",
              "§ 68 Abs. 2 Satz 3",
              "Vor Baugenehmigung",
            ],
            [
              "5",
              "Erklärung Brandschutz (GK 1–3, Kleingaragen)",
              "Entwurfsverfassende",
              "§ 68 Abs. 2 Satz 2",
              "Alle Gebäude GK 1–3 und Kleingaragen",
            ],
            [
              "6",
              "Prüfung Sonderbauten und Großgaragen",
              "Bauaufsicht mit Prüfingenieur Brandschutz",
              "§ 68 Abs. 2 Satz 5",
              "Im Genehmigungsverfahren",
            ],
            [
              "7",
              "Stichprobenhafte Bauausführungskontrolle",
              "Beauftragte sachverständige Personen / Prüfsachverständige",
              "§ 68; § 84",
              "Ab Baubeginn / Fertigstellung",
            ],
          ],
        },
      },
      {
        id: "nicht-im-gesetz",
        title: "Was das Gesetz nicht regelt",
        paragraphs: [],
        list: [
          "Pflicht zur Beauftragung eines Brandschutz-Fachplaners für jedes Bauvorhaben",
          "Einheitliche Ausbildung, Prüfung oder Berufsbezeichnung „Brandschutzfachplaner“",
          "Kammerzugehörigkeit oder Listeneintragung speziell für „Brandschutzfachplaner“",
          "Pauschale gesetzliche Trennung von Planung und Prüfung durch einen Fachplaner-Begriff",
          "VdS 3547, Planungshandbücher und übliche Verwaltungspraxis im Gesetzestext",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Brandschutzfachplaner – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            ["1", "Ist „Brandschutzfachplaner“ gesetzlich definiert?", "BauO, SBauVO", "Nein – nur Fachplaner, SV, Prüfingenieur/in"],
            ["2", "Braucht das Vorhaben ein Brandschutzkonzept?", "§ 70; § 50 Abs. 2", "Nur große Sonderbauten – sonst ggf. nur Nachweise"],
            [
              "3",
              "Wer darf das Brandschutzkonzept aufstellen?",
              "§ 54 Abs. 3",
              "Sachverständige Personen nach § 87 Abs. 2, ö.b.u.v. SV oder vergleichbar Geeignete",
            ],
            [
              "4",
              "Wer erstellt brandschutzliche Fachplanungsunterlagen?",
              "§ 54 Abs. 2",
              "Fachplaner/in mit Sachkunde – oder Entwurfsverfasser/in",
            ],
            [
              "5",
              "Ist Prüfsachverständigen-Bescheinigung Brandschutz vor Genehmigung nötig?",
              "§ 68 Abs. 2 Satz 2–5",
              "GK 1–3 / Kleingaragen: Erklärung; GK 4/5 / Mittelgarage: Prüfsachverständige; Sonderbau / Großgarage: Prüfingenieur",
            ],
            [
              "6",
              "Darf Entwurfsverfasser/in Brandschutz allein erklären?",
              "§ 68 Abs. 2 Satz 2",
              "Ja – Erklärung für alle Gebäude GK 1–3 und Kleingaragen",
            ],
            [
              "7",
              "Müssen Planer und Prüfer verschiedene Personen sein?",
              "—",
              "Keine pauschale gesetzliche Trennung; Anerkennungsrecht kann Regeln enthalten",
            ],
            [
              "8",
              "Wer ist für Ineinandergreifen aller Fachplanungen verantwortlich?",
              "§ 54 Abs. 2 Satz 3",
              "Immer Entwurfsverfasserin / Entwurfsverfasser",
            ],
            ["9", "Ist Bauvorlageberechtigung = Brandschutzfachplaner?", "§ 67 BauO", "Nein – allgemeine Berechtigung, nicht brandspezifisch"],
            [
              "10",
              "Sonderbau: wer prüft Brandschutz bei Genehmigung?",
              "§ 68 Abs. 2 Satz 5",
              "Bauaufsicht bedient sich Prüfingenieurin/Prüfingenieur für Brandschutz",
            ],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst BauO NRW, BauPrüfVO NRW und zur Abgrenzung SBauVO zusammen – ohne Kammerlisten, Anerkennungsdetails aus Sachverständigen-Verordnungen, VV TB oder VdS. Technische Nachweisführung ergibt sich aus BauPrüfVO und Technischen Baubestimmungen.",
          "Wann Konzept vs. Stellungnahme: [Brandschutzkonzept wann nötig](/ratgeber/brandschutzkonzept-wann-noetig). Genehmigungsunterlagen: [Bauantrag Köln](/ratgeber/bauantrag-brandschutz-unterlagen-koeln). BSB vs. Planung: [Aufgaben Brandschutzbeauftragter](/ratgeber/aufgaben-brandschutzbeauftragter-koeln).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept wann nötig?" },
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag Unterlagen" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "§ 69 Abweichungen" },
      { href: "/ratgeber/brandschutzbeauftragter-pflicht-sbauvo-nrw", label: "BSB Pflicht SBauVO" },
      { href: "/ratgeber/aufgaben-brandschutzbeauftragter-koeln", label: "BSB vs. Planer" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr-Abstimmung" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten § 50" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
    ],
    faq: [
      {
        question: "Gibt es in der BauO NRW den Begriff Brandschutzfachplaner?",
        answer:
          "Nein. Das Gesetz kennt Fachplaner (§ 54 Abs. 2), Konzept-Ersteller nach § 54 Abs. 3, Sachverständige (§§ 68, 87) und Prüfingenieurinnen/Prüfingenieure (BauPrüfVO) – nicht die Praxisbezeichnung „Brandschutzfachplaner“.",
      },
      {
        question: "Muss ich für jedes Vorhaben einen Brandschutzplaner beauftragen?",
        answer:
          "Nein – keine gesetzliche Pflicht für jedes Bauvorhaben. Bei fehlender Sachkunde des Entwurfsverfassers sind geeignete Fachplaner heranzuziehen (§ 54 Abs. 2). Bei Gebäuden der GK 1–3 und bei Kleingaragen reicht die Erklärung der Entwurfsverfassenden (§ 68 Abs. 2 Satz 2).",
      },
      {
        question: "Wer darf ein Brandschutzkonzept erstellen?",
        answer:
          "Nur der Personenkreis des § 54 Abs. 3 BauO NRW: sachverständige Personen nach § 87 Abs. 2 für die Prüfung des Brandschutzes, öffentlich bestellte und vereidigte Sachverständige für vorbeugenden Brandschutz oder im Einzelfall vergleichbar geeignete Personen. Konzept-Pflicht bei großen Sonderbauten (§ 70).",
      },
      {
        question: "Was ist der Unterschied zwischen Fachplaner und Sachverständigem?",
        answer:
          "Fachplaner/in (§ 54 Abs. 2) erstellt Fachplanungsunterlagen. Sachverständige Person (§ 68, § 87) prüft und bescheinigt die Einhaltung der Anforderungen – vor Genehmigung und bei Bauausführung. Rollen können bei verschiedenen Personen liegen.",
      },
      {
        question: "Ist Bauvorlageberechtigung dasselbe wie Brandschutzfachplaner?",
        answer:
          "Nein. Bauvorlageberechtigung (§ 67) ist die allgemeine Voraussetzung für Entwurfsverfasser – nicht brandschutzspezifisch. Brandschutz erfordert zusätzlich Sachkunde als Fachplaner, Konzept-Ersteller oder Prüfer.",
      },
      {
        question: "Wer prüft Brandschutz bei Sonderbauten in der Genehmigung?",
        answer:
          "Bei Sonderbauten und Großgaragen prüft die Bauaufsicht den Brandschutz und bedient sich dabei einer Prüfingenieurin oder eines Prüfingenieurs für Brandschutz (§ 68 Abs. 2 Satz 5). Bei GK 4/5 ohne Sonderbau bescheinigen Prüfsachverständige für Brandschutz (§ 68 Abs. 2 Satz 3).",
      },
      {
        question: "Kann der Brandschutzbeauftragte das Konzept erstellen?",
        answer:
          "Der BSB ist Betriebsperson nach § 50 Abs. 2 Nr. 22 BauO und SBauVO – keine Planungsrolle im Genehmigungsverfahren. Konzept und Nachweis obliegen § 54 Abs. 3 bzw. Fachplanung und SV-Prüfung.",
      },
    ],
  },
];
