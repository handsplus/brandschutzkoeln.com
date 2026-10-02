/**
 * 18.09.2026 – Zweiter Rettungsweg Wohnungsbestand (Praxis-Hub).
 * Quelle: Ausarbeitungen/Zweiter_Rettungsweg_Wohnungsbestand_BauO_NRW.html
 * Ergänzt: innenhof, dachfenster, schiebleiter-Ausarbeitung, rettungswegfenster
 * Stil: ganze Sätze. Praxis: DG/Maisonette, energetische Sanierung Dach/Hoffassade.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_ZWEITER_RETTUNGSWEG_WOHNUNG_HUB: RatgeberArticle[] = [
  {
    slug: "zweiter-rettungsweg-wohnungsbestand-bauo-nrw",
    title: "Zweiter Rettungsweg im Wohnungsbestand: DG, Sanierung und Feuerwehr",
    excerpt:
      "Dachgeschoss, Maisonette oder energetische Sanierung von Dach und Hoffassade: Wie der zweite Rettungsweg im Wohnungsbestand geführt wird, was sich ändern darf und wann Stellungnahme oder Weiterführungs-Konzept nötig sind.",
    metaTitle: "Zweiter Rettungsweg Wohnungsbestand NRW | H&S+",
    metaDescription:
      "Zweiter Rettungsweg Wohnungsbestand: Dachgeschoss, Maisonette, Sanierung Dach/Hoffassade, Fenster und Feuerwehr. Verständlich für Köln und NRW.",
    keywords: [
      "zweiter Rettungsweg Wohnung",
      "Rettungsweg Dachgeschoss",
      "zweiter Rettungsweg Bestand",
      "Anleiterbarkeit Hoffassade",
      "energetische Sanierung Rettungsweg",
      "Rettungsweg Maisonette Köln",
    ],
    sections: [
      {
        id: "kurz",
        title: "Was der zweite Rettungsweg im Wohnen leistet",
        paragraphs: [
          "Jede Nutzungseinheit mit Aufenthaltsräumen braucht in jedem Geschoss mindestens zwei voneinander unabhängige Rettungswege (§ 33 Abs. 1 BauO NRW). Der erste Weg führt typischerweise über die notwendige Treppe zur öffentlichen Verkehrsfläche. Der zweite Weg muss voneinander unabhängig ins Freie führen – nicht zwingend bis zur Straße.",
          "Im Wohnungsbestand ist der zweite Weg oft über Fenster und Feuerwehr, über einen Hofausgang oder – in älteren Genehmigungen – über tragbare Leitern abgesichert. Ob das im Einzelfall noch trägt, muss man am Objekt und am genehmigten Stand prüfen.",
          "H&S+ erstellt Begehungen, Stellungnahmen und Konzepte zur Weiterführung der zweiten Rettungswege in Köln und NRW.",
        ],
      },
      {
        id: "faelle",
        title: "Typische Wohnungsfälle im Bestand",
        paragraphs: [
          "Zwei Muster prägen die aktuelle Praxis: die Dachgeschoss- oder Maisonette-Wohnung, bei der die Wegführung je Ebene unklar ist – und die energetische Sanierung von Dach und Hoffassade, bei der Ausstiege und Anleiterbarkeit mehrerer Wohnungen betroffen sein können.",
          "Ein drittes Muster ist der Altbau mit historischer Leiter-Lösung. Dort gelten enge Bestandsbedingungen; Neubau-Maßstäbe und Höhen über 8 m sind strenger.",
        ],
        table: {
          caption: "Falltypen und typische Leistung",
          headers: ["Fall", "Kernfrage", "Typische Leistung"],
          rows: [
            [
              "DG / Maisonette",
              "Beide Wege je Ebene nachvollziehbar?",
              "Begehung + Stellungnahme",
            ],
            [
              "Sanierung Dach / Hoffassade",
              "Weiterführung in Bauzeit und Endzustand?",
              "Konzept / Stellungnahme Weiterführung",
            ],
            [
              "Altbau mit Leiter-Genehmigung",
              "Gilt die historische Lösung noch?",
              "Bestandsauswertung + Abstimmung",
            ],
            [
              "Innenhof als zweiter Weg",
              "Sicherheitsprüfungen + Nachbarmauer?",
              "Nachweis / Stellungnahme",
            ],
          ],
        },
      },
      {
        id: "optionen",
        title: "Wege-Optionen: Treppe, Hof, Fenster, Leiter",
        paragraphs: [
          "Vier Optionen begegnen im Wohnungsbestand am häufigsten: eine zweite bauliche Führung, der Ausgang ins Freie bzw. in den Innenhof, das Fenster mit Feuerwehrrettung sowie historische Schiebleiter-Lösungen im Altbau. Sie dürfen nicht vermischt werden, ohne Genehmigungsstand und heutige Anforderungen zu prüfen.",
          "Soll der zweite Weg über Rettungsgeräte der Feuerwehr führen und liegt die Brüstungshöhe über 8 m, müssen Hubrettungsfahrzeuge verfügbar sein und die erforderlichen Flächen nach § 5 geschaffen werden können. Details: [Dachfenster als Rettungsweg](/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw) und [Innenhof](/ratgeber/zweiter-rettungsweg-innenhof-bauo-nrw).",
        ],
        table: {
          caption: "Vier Optionen im Überblick",
          headers: ["Option", "Kurzbeschreibung", "Vertiefung"],
          rows: [
            ["Zweite bauliche Führung", "Zweite Treppe oder unabhängiger Ausgang", "Flucht-/Rettungswege"],
            ["Ins Freie / Innenhof", "Hofausgang mit Sicherheitsprüfungen", "Innenhof-Ratgeber"],
            ["Fenster + Feuerwehr", "Rettungsgerät; ab > 8 m oft Hubrettung", "Dachfenster-Ratgeber"],
            ["Schiebleiter im Altbau", "Historische Lösung unter engen Bedingungen", "Bestandsausarbeitung"],
          ],
        },
      },
      {
        id: "sanierung",
        title: "Energetische Sanierung: Weiterführung der zweiten Wege",
        paragraphs: [
          "Wenn Dach und Hoffassade energetisch saniert werden, ändern sich oft Ausstiege, Dachflächenfenster, Gauben oder die Anleiterbarkeit. Die zentrale Frage lautet: Wie sind die zweiten Rettungswege heute geführt – und was ändert sich durch die Sanierung?",
          "Sinnvoll ist ein schriftliches Konzept oder eine Stellungnahme zur Weiterführung – inklusive Ortsbegehung und Sichtung der Vorabzüge. Optional kommt brandschutzfachliche Baubegleitung hinzu, wenn in der Ausführung Fragen zu Anleiterpunkten oder temporären Einschränkungen auftreten.",
          "Wer Fassade und Dach ändert, ohne die zweiten Wege mitzudenken, riskiert, dass die Feuerwehrrettung oder der Hofausstieg nach der Sanierung nicht mehr funktioniert – oder während der Bauphase ausfällt.",
        ],
      },
      {
        id: "leistung",
        title: "Stellungnahme, Konzept oder Begehung?",
        paragraphs: [
          "Bei einer einzelnen Dachgeschoss- oder Maisonette-Wohnung reicht oft Begehung plus brandschutztechnische Stellungnahme. Bei Sanierung von Dach und Hoffassade für mehrere Wohnungen ist ein Konzept zur Weiterführung der zweiten Wege der passende Rahmen.",
          "Wenn der angestrebte Weg die Regelanforderung nicht trifft, kann eine Abweichung nach § 69 nötig werden. Bestandsschutz nach § 59 ersetzt keine Prüfung, sobald sich Ausstieg oder Anleiterbarkeit ändern.",
        ],
      },
      {
        id: "grenzfall",
        title: "Grenzfall und häufige Fehler",
        paragraphs: [
          "Ein typisches Ja-Beispiel für eine Stellungnahme: Dachgeschoss- oder Maisonette-Wohnung, bei der die Führung der zweiten Rettungswege unklar ist und vor Umbau oder Behördenfrage dokumentiert werden soll. Ein typisches Ja-Beispiel für ein Weiterführungs-Konzept: energetische Sanierung von Dach und Hoffassade mit betroffenen Anleiterpunkten mehrerer Wohnungen.",
          "Ein typisches Nein-Beispiel für „einfach so belassen“: Fassade dämmen und Fenster tauschen, ohne Brüstung, Öffnung und Anleiterbarkeit zu prüfen. Ebenso riskant: einen Innenhof als zweiten Weg anzunehmen, ohne die Sicherheitsprüfungen und die mögliche Nachbarmauer mitzudenken.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Vor Begehung und Stellungnahme helfen die folgenden Fragen, den richtigen Umfang zu treffen.",
        ],
        table: {
          caption: "Vor dem zweiten Rettungsweg im Bestand",
          headers: ["Nr.", "Prüffrage", "Worauf achten?"],
          rows: [
            ["1", "Wie ist der erste Weg geführt?", "Treppe / Erschließung zur Straße."],
            ["2", "Wie ist der zweite Weg heute geführt?", "Hof, Fenster, Leiter, zweite Treppe?"],
            ["3", "DG / Maisonette: Wegelogik je Ebene?", "§ 33 je Geschoss mit Aufenthalt."],
            ["4", "Brüstungshöhe und Feuerwehrgerät?", "> 8 m → Hubrettung / Flächen."],
            ["5", "Ändert Sanierung Ausstieg oder Anleiterbarkeit?", "Dach, Hoffassade, Bauphase."],
            ["6", "Innenhof als zweiter Weg?", "Drei Prüfungen + Nachbarmauer."],
            ["7", "Gibt es Bestandsunterlagen?", "Alte Genehmigung / Leiterzusagen."],
            ["8", "Stellungnahme oder Weiterführungs-Konzept?", "Einzelwohnung vs. Gebäudesanierung."],
          ],
        },
      },
      {
        id: "grenzen",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Hub bündelt die Wohnungsbestand-Praxis. Vertiefungen: [Innenhof](/ratgeber/zweiter-rettungsweg-innenhof-bauo-nrw), [Dachfenster](/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw) und [Rettungswegfenster Bestand](/ratgeber/rettungswegfenster-groesse-bestand-bauo-nrw). Er ersetzt weder Feuerwehrabstimmung noch die Einzelfallprüfung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/zweiter-rettungsweg-innenhof-bauo-nrw", label: "2. Rettungsweg Innenhof" },
      { href: "/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw", label: "Dachfenster / Feuerwehr" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/rettungswegfenster-groesse-bestand-bauo-nrw", label: "Rettungswegfenster Bestand" },
      { href: "/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw", label: "Feuerwehrflächen" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/kontakt", label: "Kontakt / Anfrage" },
    ],
    faq: [
      {
        question: "Reicht ein Dachfenster als zweiter Rettungsweg?",
        answer:
          "Oft ja als Feuerwehrrettungsweg – wenn Öffnungsgröße, Brüstung und Erreichbarkeit passen und bei größeren Höhen Hubrettung sowie Aufstellflächen möglich sind.",
      },
      {
        question: "Muss der zweite Weg zur Straße führen?",
        answer:
          "Nicht zwingend. Ein Innenhof kann reichen, wenn die Sicherheitsprüfungen bestehen. Mindestens einer der Wege muss aber zur öffentlichen Verkehrsfläche führen.",
      },
      {
        question: "Was ändert eine Fassaden- oder Dachsanierung?",
        answer:
          "Sie kann Ausstiege und Anleiterbarkeit verändern. Deshalb ist vor Ausführung zu klären, wie die zweiten Wege während der Bauphase und im Endzustand weitergeführt werden.",
      },
      {
        question: "Gilt die alte Schiebleiter-Lösung noch?",
        answer:
          "Nur unter engen Bestandsbedingungen und oft nur, wenn die Feuerwehr die Rettung mit tragbaren Leitern im konkreten Fall bestätigt hat. Neubau-Maßstäbe und Höhen über 8 m sind strenger.",
      },
      {
        question: "Hilft H&S+ bei zweiten Rettungswegen im Wohnungsbestand?",
        answer:
          "Ja. H&S+ erstellt Begehungen, Stellungnahmen und Konzepte zur Weiterführung der zweiten Rettungswege – etwa bei Dachgeschosswohnungen und bei energetischer Sanierung von Dach und Hoffassade in Köln und NRW.",
      },
    ],
  },
];
