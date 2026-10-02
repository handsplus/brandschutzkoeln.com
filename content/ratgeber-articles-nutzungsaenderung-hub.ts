/**
 * 10.09.2026 – Nutzungsänderung Brandschutz (Hub).
 * Quelle: Ausarbeitungen/Nutzungsaenderung_Brandschutz_BauO_NRW.html
 * Ergänzt (nicht ersetzt): umbau-nutzungsaenderung-brandschutz, imbiss-ladenlokal-nutzungsaenderung-koeln
 * Stil: ganze Sätze.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_NUTZUNGSAENDERUNG_HUB: RatgeberArticle[] = [
  {
    slug: "nutzungsaenderung-brandschutz-bauo-nrw",
    title: "Nutzungsänderung Brandschutz: Wann Genehmigung und neuer Nachweis nötig sind",
    excerpt:
      "Eine Umnutzung ändert oft Personenströme und Brandlast – auch wenn die Optik kaum wechselt. Dieser Ratgeber erklärt Genehmigung, Gebäudeklasse und Sonderbau sowie Konzept oder Stellungnahme für Umbau und Nutzungsänderung in NRW.",
    metaTitle: "Nutzungsänderung Brandschutz NRW | H&S+",
    metaDescription:
      "Nutzungsänderung Brandschutz NRW: Genehmigung, Sonderbau § 50, Bestandsschutz § 59, Konzept oder Stellungnahme. Verständlich für Umbau und Umnutzung in Köln.",
    keywords: [
      "Nutzungsänderung Brandschutz",
      "Umbau Brandschutz NRW",
      "brandschutztechnische Stellungnahme",
      "Brandschutzkonzept Nutzungsänderung",
      "Laden Imbiss Genehmigung",
      "Nutzungsänderung Köln",
    ],
    sections: [
      {
        id: "kurz",
        title: "Was eine Nutzungsänderung brandschutzrechtlich bedeutet",
        paragraphs: [
          "Brandschutzrechtlich zählt die tatsächliche Nutzung: Aufenthaltsräume, Personenzahl, Gefahrstoffe, Öffnungszeiten und Erschließung. Die Marketing-Bezeichnung allein entscheidet nicht. Ein Ladenlokal mit Mitnahmeverkauf ist ein anderes Risikoprofil als ein Imbiss mit Frittieren und Grill – auch bei ähnlicher Fläche.",
          "Die Schutzpflicht aus § 3 Abs. 1 BauO NRW gilt dauerhaft, auch bei Nutzungsänderung. Zusätzlich entscheiden die Verfahrensvorschriften und bei bestehenden Anlagen § 59, was nachgerüstet oder neu nachgewiesen werden muss.",
          "H&S+ erstellt brandschutztechnische Stellungnahmen und Brandschutzkonzepte für Umnutzungen in Köln und NRW.",
        ],
      },
      {
        id: "genehmigung",
        title: "Genehmigung, Anzeige oder „nur Gewerbe“?",
        paragraphs: [
          "Ob ein Vorhaben genehmigungspflichtig ist, richtet sich nach Art und Umfang der baulichen Änderung und der Nutzung. Rein betriebliche Maßnahmen ohne baulichen Eingriff – zum Beispiel eine neue Brandschutzordnung – sind nicht dasselbe wie ein Umbau mit neuen Wänden, Abluft oder geänderter Nutzung.",
          "Eine Gewerbeanmeldung ersetzt keine Baugenehmigung, wenn Küche, Trennwände, Abluft oder Personenzahl neu sind. Genehmigungsfreiheit entbindet nicht von der Einhaltung der öffentlich-rechtlichen Anforderungen. Bei kleinen Gewerbevorhaben ohne Sonderbau-Komplexität kommt in der Praxis das vereinfachte Verfahren nach § 64 in Betracht – die Entscheidung trifft die Bauaufsicht.",
          "Vertiefung zu Ablauf und Nachweisen: [Umbau und Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
        ],
      },
      {
        id: "einordnung",
        title: "Gebäudeklasse und Sonderbau neu prüfen",
        paragraphs: [
          "Die Gebäudeklasse folgt aus Höhe, Nutzungseinheiten und Flächen. Sonderbau nach § 50 ist eine getrennte Prüfung: Ein Umbau kann einen Sonderbau-Tatbestand neu erfüllen, ohne dass sich die Gebäudeklasse ändert.",
          "Bei großem Sonderbau nach § 50 Abs. 2 ist mit den Bauvorlagen oft ein Brandschutzkonzept einzureichen. Ein kleiner Imbiss mit wenigen Sitzplätzen liegt typischerweise unter der Schwelle Schank- und Speisegaststätte mit mehr als 200 Gastplätzen – das entbindet nicht von BauO-Anforderungen, nur von dieser Konzeptpflicht.",
        ],
        table: {
          caption: "Zwei Prüfebenen vor dem Umbau",
          headers: ["Prüfebene", "Was sich ändern kann", "Folge"],
          rows: [
            [
              "Gebäudeklasse",
              "OKF, Nutzungseinheiten, Flächengrenzen",
              "Andere Feuerwiderstände und Abschlüsse",
            ],
            [
              "Sonderbau § 50",
              "Besondere Art/Nutzung oder große Schwellen",
              "SBauVO und ggf. Konzeptpflicht",
            ],
          ],
        },
      },
      {
        id: "nachweis",
        title: "Konzept oder brandschutztechnische Stellungnahme?",
        paragraphs: [
          "Das Brandschutzkonzept ist die Gesamtbewertung für den großen Sonderbau oder die umfassende Neubewertung. Die brandschutztechnische Stellungnahme beantwortet eine abgegrenzte Frage – typisch bei kleinem Gewerbeumbau mit begrenzten Eingriffen und genehmigtem Bestand als Basis.",
          "Die Bauaufsicht entscheidet, welches Dokument sie akzeptiert. Wer vorschnell nur eine Kurzstellungnahme liefert, obwohl ein großer Sonderbau vorliegt, riskiert Nachforderungen. Wer unnötig ein Vollkonzept schreibt, verteuert das Verfahren.",
          "Zur Abgrenzung: [Brandschutzkonzept Hub](/ratgeber/brandschutzkonzept-bauo-sbauvo-nrw).",
        ],
        table: {
          caption: "Welches Dokument bei Umnutzung?",
          headers: ["Dokument", "Typische Rolle", "Wann sinnvoll?"],
          rows: [
            [
              "Brandschutzkonzept",
              "Gesamtbewertung",
              "Großer Sonderbau; wesentliche Umnutzung mit neuer Gesamteinordnung",
            ],
            [
              "Stellungnahme",
              "Abgegrenzte Fachaussage",
              "Kleiner Gewerbeumbau; begrenzte Eingriffe; Bestand als Basis",
            ],
            [
              "Fortschreibung",
              "Aktualisierung einzelner Punkte",
              "Nur wenn ein aktuelles Vollkonzept existiert",
            ],
          ],
        },
      },
      {
        id: "bestand",
        title: "Bestandsschutz § 59 – was er leistet und was nicht",
        paragraphs: [
          "§ 59 Abs. 1 begrenzt pauschale Nachrüstung im Weiterbetrieb rechtmäßig bestehender Anlagen. Nachrüstung kann verlangt werden, wenn dies im Einzelfall wegen der Abwehr von Gefahren für Leben und Gesundheit erforderlich ist.",
          "Bei wesentlicher Änderung kann § 59 Abs. 2 verlangen, dass auch konstruktiv zusammenhängende Teile angepasst werden – sofern kein unverhältnismäßiger Mehraufwand entsteht. Bestandsschutz ist kein Freibrief für stille Umnutzung.",
          "Vertiefung: [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw).",
        ],
      },
      {
        id: "grenzfall",
        title: "Typfall Gastronomie und Grenzfall",
        paragraphs: [
          "Ein typisches Ja-Beispiel: Ladenlokal wird Imbiss mit Küche, Grill und Gastbereich. Dann ist eine Nutzungsänderung mit brandschutztechnischem Nachweis naheliegend – oft als Stellungnahme, wenn kein großer Sonderbau vorliegt. Trennwände, Küchengefährdung und Abluft gehören in die Bewertung.",
          "Ein typisches Nein-Beispiel für „Vollkonzept wegen Sonderbau“: derselbe kleine Imbiss mit wenigen Sitzplätzen und klar unter 200 Gastplätzen. Das entbindet nicht von BauO-Anforderungen und Genehmigung – nur von der Konzeptpflicht des großen Sonderbaus.",
          "Dokumentierter Praxisfall: [Ladenlokal zum Imbiss](/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln). Gelegentliche Veranstaltungen in Hallen sind ein eigener Fall und keine dauerhafte Umnutzung zur Eventlocation.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Vor Planung und Antrag helfen die folgenden Fragen, Verfahren und Nachweisart zu treffen.",
        ],
        table: {
          caption: "Vor der Nutzungsänderung",
          headers: ["Nr.", "Prüffrage", "Worauf achten?"],
          rows: [
            ["1", "Ändert sich die tatsächliche Nutzung?", "Personen, Gefahr, Öffnung – nicht nur Firmierung."],
            ["2", "Ist das Vorhaben genehmigungspflichtig?", "Gewerbe ersetzt keine Baugenehmigung."],
            ["3", "Bleibt die Gebäudeklasse gleich?", "OKF, NE, Flächengrenzen."],
            ["4", "Wird ein Sonderbau-Tatbestand neu erfüllt?", "§ 50 Abs. 1 und Abs. 2 getrennt."],
            ["5", "Stellungnahme oder Konzept?", "Umfang und Bauaufsicht klären."],
            ["6", "Gibt es genehmigte Bestandsunterlagen?", "BSK, Genehmigung, Fluchtpläne."],
            ["7", "Greift § 59 Abs. 2?", "Wesentliche Änderung, Zusammenhang, Aufwand."],
            ["8", "BSO und Fluchtpläne mitziehen?", "Bei geänderten Personenströmen typisch ja."],
          ],
        },
      },
      {
        id: "grenzen",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Hub bündelt die Entscheidungslogik. Vertiefungen: [Umbau und Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz), [Imbiss-Praxisfall](/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln) und [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw). Er ersetzt weder die Bauaufsicht noch die Einzelfallprüfung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung (Detail)" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Praxisfall Laden → Imbiss" },
      { href: "/ratgeber/brandschutzkonzept-bauo-sbauvo-nrw", label: "Brandschutzkonzept" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz" },
      { href: "/ratgeber/gesetzliche-einstufung-gebaeude-bauo-nrw", label: "Gebäudeeinstufung" },
      { href: "/ratgeber/veranstaltung-gelegentliche-nutzungsaenderung-bauo-nrw", label: "Gelegentliche Veranstaltung" },
      { href: "/ratgeber/brandschutzordnung-din-14096-nrw", label: "Brandschutzordnung" },
      { href: "/kontakt", label: "Kontakt / Anfrage" },
    ],
    faq: [
      {
        question: "Brauche ich bei jeder Umnutzung ein Brandschutzkonzept?",
        answer:
          "Nein. Ein Vollkonzept ist typisch bei großem Sonderbau oder umfassender Neubewertung. Bei begrenzten Gewerbeumbauten reicht oft eine brandschutztechnische Stellungnahme – sofern die Bauaufsicht das akzeptiert.",
      },
      {
        question: "Reicht die Gewerbeanmeldung?",
        answer:
          "Nein, wenn sich Nutzung oder baulicher Zustand ändern. Die Gewerbeanmeldung ersetzt keine Baugenehmigung und keinen Brandschutznachweis.",
      },
      {
        question: "Schützt der Bestandsschutz vor Nachrüstung?",
        answer:
          "§ 59 begrenzt pauschale Nachrüstung im Weiterbetrieb. Bei Änderung und Nutzungsänderung gelten die aktuellen Anforderungen im betroffenen Bereich; bei wesentlicher Änderung kann der Zusammenhang erweitert nachgezogen werden.",
      },
      {
        question: "Wann wird aus Laden ein Sonderbau?",
        answer:
          "Unter anderem, wenn Schwellen des § 50 Abs. 2 greifen – zum Beispiel Schank- und Speisegaststätte mit mehr als 200 Gastplätzen im Gebäude. Kleine Imbisse liegen darunter oft nicht, brauchen aber trotzdem Nachweis und Genehmigung.",
      },
      {
        question: "Hilft H&S+ bei Nutzungsänderungen?",
        answer:
          "Ja. H&S+ erstellt brandschutztechnische Stellungnahmen und Brandschutzkonzepte für Umbau und Nutzungsänderung in Köln und NRW – abgestimmt auf BauO, Bauaufsicht und den genehmigten Bestand.",
      },
    ],
  },
];
