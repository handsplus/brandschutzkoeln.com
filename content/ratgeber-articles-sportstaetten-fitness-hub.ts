/**
 * 15.09.2026 – Sportstätten / Fitnessstudios Brandschutz (Praxis-Hub).
 * Quelle: Ausarbeitungen/Sportstaetten_Fitnessstudios_Brandschutz_NRW.html
 * Ergänzt (nicht ersetzt): mehrzweckhallen-sportstaetten-sbauvo-nrw, versammlungsstaetten-*
 * Stil: ganze Sätze. Praxiscluster aus in Arbeit (Fitness, Padel, Indoor).
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_SPORTSTAETTEN_FITNESS_HUB: RatgeberArticle[] = [
  {
    slug: "sportstaetten-fitnessstudios-brandschutz-nrw",
    title: "Sportstätten und Fitnessstudios: Brandschutz, Konzept und Nutzungsänderung",
    excerpt:
      "Fitnessstudio, Padelhalle oder Sporthalle – wann Sonderbau und Versammlungsstätte greifen, wann Nutzungsänderung ein Konzept braucht und wann Stellungnahme oder Begehung reichen. Praxis für Köln und NRW.",
    metaTitle: "Fitnessstudio & Sporthalle Brandschutz NRW | H&S+",
    metaDescription:
      "Sportstätten und Fitnessstudios Brandschutz NRW: Sonderbau, Nutzungsänderung, Konzept oder Stellungnahme. Verständlich für Padelhalle, Studio und Bestand in Köln.",
    keywords: [
      "Fitnessstudio Brandschutz",
      "Sporthalle Brandschutz",
      "Padelhalle Brandschutzkonzept",
      "Sportstätte Sonderbau NRW",
      "Fitnessstudio Nutzungsänderung",
      "Brandschutz Fitness Köln",
    ],
    sections: [
      {
        id: "kurz",
        title: "Welche Objekte gemeint sind",
        paragraphs: [
          "Gemeint sind vor allem kommerzielle und vereinsnahe Sportnutzungen mit regelmäßigem Publikumsverkehr: Fitnessstudios und Boutique-Studios, Indoor-Sportanlagen sowie Padel- oder Sporthallen – oft als Umnutzung bestehender Hallen oder Gewerbeflächen.",
          "Nicht im Fokus sind reine Schulsporthallen ohne öffentliche Veranstaltungsnutzung und große Mehrzweckarenen mit Konzert- oder Stadionbetrieb. Dafür gibt es den Ratgeber zu Mehrzweckhallen und Sportstätten.",
          "H&S+ unterstützt Fitnessstudios und Sportstätten in Köln und NRW mit Konzepten, Stellungnahmen und Begehungen.",
        ],
      },
      {
        id: "einordnung",
        title: "Sonderbau und Versammlungsstätte – Einordnung",
        paragraphs: [
          "Die Gebäudeklasse steuert den baulichen Brandschutz. Ob zusätzlich Sonderbau nach § 50 vorliegt, ist eine eigene Prüfung. Versammlungsstätten und bestimmte Sportnutzungen können Sonderbau sein, ohne dass das Marketing „Fitness“ darauf hinweist.",
          "In der SBauVO Teil 1 zählen überdachte Versammlungsstätten mit Versammlungsräumen für mehr als 200 Besucher zu den klassischen Tatbeständen. Ob ein Studio oder eine Halle darunterfällt, hängt von der tatsächlichen Belegung ab – nicht vom Firmennamen.",
          "Große Mehrzweck- und Stadionregeln sind ein anderer Maßstab: [Mehrzweckhallen und Sportstätten](/ratgeber/mehrzweckhallen-sportstaetten-sbauvo-nrw).",
        ],
        table: {
          caption: "Objekttypen in der Praxis",
          headers: ["Objekttyp", "Häufige Einordnung", "Typischer Nachweis"],
          rows: [
            [
              "Boutique- / Fitnessstudio",
              "Oft kein großer Sonderbau",
              "Stellungnahme, Begehung, Fortschreibung",
            ],
            [
              "Padel- / Sporthalle aus Halle",
              "Nutzungsänderung; Sonderbau prüfen",
              "Brandschutzkonzept für Genehmigung",
            ],
            [
              "Große Mehrzweckhalle / Arena",
              "SBauVO Teil 1 Spezialregeln",
              "Konzept + Betriebspflichten",
            ],
            [
              "Bestehende Fitnesskette",
              "Genehmigter Bestand",
              "Begehung, Stellungnahme, Fortschreibung",
            ],
          ],
        },
      },
      {
        id: "nutzungsaenderung",
        title: "Nutzungsänderung: Halle oder Laden wird Sport",
        paragraphs: [
          "Ein wiederkehrendes Muster: Eine Logistik- oder Gewerbehalle soll Sporthalle werden, oder eine Gewerbefläche wird Boutique-Studio. Dann ändern sich Personenströme und oft die bauordnungsrechtliche Einordnung – auch wenn die Gebäudehülle gleich bleibt.",
          "Vor Planung gehören drei Fragen in den Antrag: Bleibt die Gebäudeklasse gleich? Wird ein Sonderbau- oder Versammlungstatbestand neu erfüllt? Reicht eine Stellungnahme, oder braucht die Bauaufsicht ein Brandschutzkonzept?",
          "Entscheidungshilfe allgemein: [Nutzungsänderung Brandschutz](/ratgeber/nutzungsaenderung-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "nachweis",
        title: "Konzept, Stellungnahme oder Begehung?",
        paragraphs: [
          "Ein Brandschutzkonzept ist typisch bei Umnutzung zur Sporthalle und bei Genehmigung mit Gesamtnachweis. Eine Stellungnahme beantwortet abgegrenzte Fragen im genehmigten Bestand. Eine Begehung klärt Ist-Zustand und Mängel – etwa bei bestehenden Fitnessketten.",
          "Die Bauaufsicht entscheidet im Genehmigungsfall über den akzeptierten Umfang. Wer bei klarer Hallen-Umnutzung nur eine Kurzstellungnahme liefert, riskiert Nachforderung. Wer bei einer kleinen Bestandsfrage unnötig ein Vollkonzept schreibt, verteuert das Verfahren.",
          "Zur Abgrenzung Konzept vs. Stellungnahme: [Brandschutzkonzept](/ratgeber/brandschutzkonzept-bauo-sbauvo-nrw).",
        ],
        table: {
          caption: "Welche Leistung wann?",
          headers: ["Leistung", "Wann typisch?", "Was sie leistet"],
          rows: [
            [
              "Brandschutzkonzept",
              "Umnutzung Sporthalle; Genehmigung",
              "Gesamtbewertung",
            ],
            [
              "Stellungnahme",
              "Abgegrenzte Umbaufrage im Studio",
              "Fachaussage zur Teiländerung",
            ],
            [
              "Begehung",
              "Bestandskette / laufender Betrieb",
              "Ist-Zustand und Prioritäten",
            ],
            [
              "BSO / Fluchtpläne",
              "Betrieb nach Genehmigung",
              "Verhalten und Orientierung",
            ],
          ],
        },
      },
      {
        id: "praxis",
        title: "Typische Brandschutzfragen im Studio und in der Halle",
        paragraphs: [
          "In Fitness- und Sporthallen wiederholen sich dieselben Themen: Rettungswege bei hoher Momentbelegung, Abtrennung von Technik- und Lagerräumen, Brandlast durch Geräte, Entrauchung in großen Volumina sowie Alarmierung, falls vorhanden oder verlangt.",
          "Betriebsseitig gehören Brandschutzordnung und Flucht- und Rettungspläne dazu, sobald Wege und Sammelplätze feststehen. Nach Umbau in Umkleiden oder Kursräumen müssen Aushänge zum Ist-Zustand passen.",
        ],
      },
      {
        id: "grenzfall",
        title: "Grenzfall und häufige Fehler",
        paragraphs: [
          "Ein typisches Ja-Beispiel für ein Brandschutzkonzept: Nutzungsänderung einer Halle zur Padel- oder Sporthalle mit Genehmigungsvorlage – Personenzahl und Wege müssen neu bewertet werden. Ein typisches Nein-Beispiel für „Vollkonzept als großer Mehrzweck-/Stadionfall“: ein Boutique-Studio mit begrenzter Fläche und genehmigtem Bestand, bei dem nur eine abgegrenzte Änderung bewertet wird – dort reicht oft eine Stellungnahme oder eine Begehung.",
          "Häufige Fehler: Marketing startet vor Klärung von Sonderbau und Nachweis; Eventnutzung mit Zuschauern wird in der Genehmigung nicht mitgedacht; Fluchtpläne und BSO bleiben nach Umbau unverändert.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Vor Angebot und Bauantrag helfen die folgenden Fragen, Einordnung und Nachweisart zu treffen.",
        ],
        table: {
          caption: "Vor dem Sport-Vorhaben",
          headers: ["Nr.", "Prüffrage", "Worauf achten?"],
          rows: [
            ["1", "Welche Nutzung genau – Training, Kurs, Zuschauer, Event?", "Personenzahl schriftlich."],
            ["2", "Liegt eine Nutzungsänderung vor?", "Halle/Gewerbe → Sport."],
            ["3", "Sonderbau / Versammlungsstätte?", "§ 50 und SBauVO – nicht nur „Fitness“."],
            ["4", "Konzept, Stellungnahme oder Begehung?", "Umfang und Bauaufsicht."],
            ["5", "Gibt es ein genehmigtes Bestands-BSK?", "Fortschreibung nur mit Basis."],
            ["6", "Rettungswege bei Maximalbelegung?", "Kurszeiten / Peak mitdenken."],
            ["7", "BSO und Fluchtpläne aktuell?", "Nach Umbau fortschreiben."],
            ["8", "Große Mehrzweck-/Stadionregeln nötig?", "Nur bei entsprechenden Maßstäben."],
          ],
        },
      },
      {
        id: "grenzen",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Hub bündelt die Praxis für Fitness und kleinere bis mittlere Sportstätten. Spezialregeln für große Mehrzweckhallen und Stadien: [Mehrzweckhallen](/ratgeber/mehrzweckhallen-sportstaetten-sbauvo-nrw). Er ersetzt weder die Bauaufsicht noch die Einzelfallprüfung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/mehrzweckhallen-sportstaetten-sbauvo-nrw", label: "Mehrzweckhallen / SBauVO" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätten baulich" },
      { href: "/ratgeber/nutzungsaenderung-brandschutz-bauo-nrw", label: "Nutzungsänderung" },
      { href: "/ratgeber/brandschutzkonzept-bauo-sbauvo-nrw", label: "Brandschutzkonzept" },
      { href: "/ratgeber/flucht-und-rettungsplan-din-14095-nrw", label: "Flucht- und Rettungsplan" },
      { href: "/ratgeber/brandschutzordnung-din-14096-nrw", label: "Brandschutzordnung" },
      { href: "/kontakt", label: "Kontakt / Anfrage" },
    ],
    faq: [
      {
        question: "Braucht jedes Fitnessstudio ein Brandschutzkonzept?",
        answer:
          "Nein. Ein Vollkonzept ist typisch bei Umnutzung zur Sporthalle, bei Sonderbau mit Genehmigungspflicht oder wenn die Bauaufsicht einen Gesamtnachweis verlangt. Bei begrenzten Bestandsfragen reicht oft eine Stellungnahme oder eine Begehung.",
      },
      {
        question: "Ist eine Padelhalle automatisch Versammlungsstätte?",
        answer:
          "Das hängt von Besucherzahl, Nutzung und Raum ab. Die Umnutzung zur Sporthalle löst jedenfalls eine neue brandschutztechnische Bewertung aus – oft als Konzept im Genehmigungsverfahren.",
      },
      {
        question: "Was ist der Unterschied zu Mehrzweckhallen und Arenen?",
        answer:
          "Mehrzweckhallen und Stadien haben in der SBauVO zusätzliche Betriebs- und Infrastrukturregeln. Fitnessstudios und kleinere Sporthallen brauchen zuerst Einordnung, Nutzungsänderung und den passenden Nachweisumfang.",
      },
      {
        question: "Muss ich Brandschutzordnung und Fluchtpläne mitmachen?",
        answer:
          "Sobald der Betrieb Personen führt und Wege feststehen, gehören organisatorischer Brandschutz und Orientierung dazu. Nach Umbau müssen Aushänge zum Ist-Zustand passen.",
      },
      {
        question: "Hilft H&S+ bei Fitness und Sporthallen?",
        answer:
          "Ja. H&S+ erstellt Brandschutzkonzepte, Stellungnahmen und Begehungsberichte für Fitnessstudios und Sportstätten in Köln und NRW – inklusive Fortschreibung von Plänen und Brandschutzordnung wo nötig.",
      },
    ],
  },
];
