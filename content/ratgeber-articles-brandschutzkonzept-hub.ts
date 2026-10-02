/**
 * 01.09.2026 – Brandschutzkonzept (Hub): Pflicht, Inhalt, Konzept vs. Stellungnahme.
 * Quelle: Ausarbeitungen/Brandschutzkonzept_BauO_BauPruefVO_NRW.html
 * Ergänzt (nicht ersetzt): brandschutzkonzept-wann-noetig, brandschutzkonzept-baupruefvo-nrw
 * Stil: ganze Sätze.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BRANDSCHUTZKONZEPT_HUB: RatgeberArticle[] = [
  {
    slug: "brandschutzkonzept-bauo-sbauvo-nrw",
    title: "Brandschutzkonzept NRW: Wann Pflicht – und wann reicht eine Stellungnahme?",
    excerpt:
      "Bei großen Sonderbauten ist ein Brandschutzkonzept Bauvorlage. Dieser Ratgeber erklärt die Pflicht nach § 50 und § 70 BauO NRW, die Inhalte nach BauPrüfVO § 9 und die Abgrenzung zur brandschutztechnischen Stellungnahme – in ganzen Sätzen für Köln und NRW.",
    metaTitle: "Brandschutzkonzept NRW: Pflicht & Inhalt | H&S+",
    metaDescription:
      "Brandschutzkonzept NRW: großer Sonderbau, § 70 BauO, BauPrüfVO § 9, Konzept oder Stellungnahme. Verständlich für Genehmigung in Köln und NRW.",
    keywords: [
      "Brandschutzkonzept NRW",
      "Brandschutzkonzept Pflicht",
      "BauPrüfVO § 9",
      "großer Sonderbau Brandschutz",
      "brandschutztechnische Stellungnahme",
      "Brandschutzkonzept Köln",
    ],
    sections: [
      {
        id: "kurz",
        title: "Was ist ein Brandschutzkonzept?",
        paragraphs: [
          "Ein Brandschutzkonzept ist die zusammenhängende Darstellung, wie ein Vorhaben die Schutzziele des Brandschutzes erreicht. Es verbindet bauliche Maßnahmen – zum Beispiel Brandwände, Rettungswege und Abschlüsse – mit anlagentechnischen und betrieblichen Maßnahmen zu einer nachvollziehbaren Gesamtbewertung.",
          "Bei großen Sonderbauten nach § 50 Abs. 2 BauO NRW ist mit den Bauvorlagen ein Brandschutzkonzept einzureichen (§ 70 Abs. 2). Das Konzept ist damit eine Bauvorlage im Genehmigungsverfahren und kein freiwilliger Anhang.",
          "H&S+ erstellt Brandschutzkonzepte und brandschutztechnische Stellungnahmen für Vorhaben in Köln und NRW. Zur Einstufung von Gebäudeklasse und Sonderbau: [Gesetzliche Einstufung](/ratgeber/gesetzliche-einstufung-gebaeude-bauo-nrw).",
        ],
      },
      {
        id: "pflicht",
        title: "Wann ist ein Brandschutzkonzept Pflicht?",
        paragraphs: [
          "Die Pflicht knüpft an den großen Sonderbau nach § 50 Abs. 2 BauO NRW. Absatz 1 beschreibt den Rahmen für Sonderbauten wegen besonderer Art oder Nutzung; Absatz 2 nennt abschließend die großen Sonderbauten, unter anderem Hochhäuser über 22 m und bestimmte Versammlungs-, Verkaufs- und Beherbergungsbauten.",
          "Die SBauVO kann schon unterhalb der Schwellen des § 50 Abs. 2 gelten. Dann greifen Sonderbauvorschriften, ohne dass zwingend ein Brandschutzkonzept nach § 70 Abs. 2 geschuldet ist. Umgekehrt verlangt ein großer Sonderbau das Konzept als Bauvorlage – unabhängig von späteren Betriebspflichten.",
          "Ein typisches Ja-Beispiel: Neubau oder wesentliche Änderung eines Hotels, das als großer Sonderbau einzuordnen ist – dann gehört ein Brandschutzkonzept zu den Bauvorlagen. Ein typisches Nein-Beispiel für genau diese Konzeptpflicht: eine klar begrenzte Innenänderung in einem bestehenden Büro ohne Sonderbau-Tatbestand, bei der die Bauaufsicht nur eine Stellungnahme zu den geänderten Wänden verlangt.",
          "Weitere Orientierung: [Brandschutzkonzept – wann nötig](/ratgeber/brandschutzkonzept-wann-noetig).",
        ],
      },
      {
        id: "stellungnahme",
        title: "Konzept oder brandschutztechnische Stellungnahme?",
        paragraphs: [
          "In der Praxis entscheiden Bauherr, Entwurfsverfasser und Bauaufsicht oft zwischen vollständigem Konzept und einer brandschutztechnischen Stellungnahme. Das Konzept ist die Gesamtbewertung für den großen Sonderbau oder das gesamte Vorhaben. Die Stellungnahme beantwortet eine abgegrenzte Frage – zum Beispiel, ob eine geänderte Trennwand den genehmigten Brandschutz verschlechtert.",
          "Die Bauaufsicht entscheidet, welches Dokument sie akzeptiert. Wer vorschnell nur eine Kurzstellungnahme liefert, obwohl ein großer Sonderbau vorliegt, riskiert Nachforderungen und Verzögerung. Wer unnötig ein Vollkonzept schreibt, wo eine Stellungnahme reicht, verteuert das Verfahren. Die Einordnung gehört deshalb an den Anfang jeder Beauftragung.",
        ],
        table: {
          caption: "Zwei Dokumente – unterschiedliche Rolle",
          headers: ["Dokument", "Typische Rolle", "Wann sinnvoll?"],
          rows: [
            [
              "Brandschutzkonzept",
              "Gesamtbewertung baulich, anlagentechnisch und betrieblich",
              "Großer Sonderbau; Neubau oder Umbau mit umfassender Brandschutzfrage; Fortschreibung des Gesamtkonzepts",
            ],
            [
              "Brandschutztechnische Stellungnahme",
              "Begrenzte Fachaussage zu einer klaren Änderung",
              "Bestandsobjekt mit genehmigtem Gesamtkonzept; lokale Umbauten; Nachforderung zu einem Teilaspekt",
            ],
          ],
        },
      },
      {
        id: "inhalte",
        title: "Was muss hinein – BauPrüfVO § 9",
        paragraphs: [
          "BauPrüfVO § 9 beschreibt das Brandschutzkonzept als zielorientierte Gesamtbewertung des baulichen und abwehrenden Brandschutzes. Es muss die relevanten Themenfelder abdecken – von Feuerwehrflächen und Löschwasser über Brand- und Rauchabschnitte und Rettungswege bis zu Nutzerzahl, anlagentechnischem Brandschutz, Betrieb und Abweichungen.",
          "Angaben gehören in einen schriftlichen Erläuterungsbericht und in eine zeichnerische Darstellung. Nur Text ohne Pläne oder nur Pläne ohne nachvollziehbare Begründung reichen für eine §-9-konforme Einreichung typischerweise nicht aus.",
          "Die detaillierte Pflichtliste und die Rolle des Prüfingenieurs vertieft der Ratgeber [Brandschutzkonzept BauPrüfVO § 9](/ratgeber/brandschutzkonzept-baupruefvo-nrw).",
        ],
        table: {
          caption: "Themenfelder im Überblick",
          headers: ["Themenfeld", "Inhalt (Kern)"],
          rows: [
            ["Feuerwehr", "Zufahrten, Durchfahrten, Aufstell- und Bewegungsflächen"],
            ["Löschwasser", "Menge, Versorgung, Hydranten, ggf. Rückhaltung"],
            ["Abschottungen", "Brand- und Rauchabschnitte, Feuerwiderstand, Brandverhalten"],
            ["Rettungswege", "Lage, Bemessung, Kennzeichnung, Sicherheitsbeleuchtung"],
            ["Personen", "Nutzerzahl, Mobilität, Grundzüge der Evakuierung"],
            ["Anlagen", "BMA, Löschen, Entrauchung/Druck, Sicherheitsstrom, Steuerungen"],
            ["Betrieb / Abweichungen", "Betriebliche Maßnahmen; Abweichungen mit Ausgleich"],
          ],
        },
      },
      {
        id: "verfahren",
        title: "Einreichung und Prüfingenieur",
        paragraphs: [
          "Dem Bauantrag ist das Brandschutzkonzept in der vorgeschriebenen Anzahl beizufügen, in der Praxis oft dreifach neben den übrigen Bauvorlagen. Sonderbauten können zusätzliche Angaben brauchen – zum Beispiel Flächenberechnungen bei Verkaufsstätten oder die Zuordnung von Gastbetten bei Beherbergung.",
          "Der Prüfingenieur für Brandschutz prüft Vollständigkeit und Richtigkeit des Konzepts und bezieht die Brandschutzdienststelle ein. Wer das Konzept selbst erstellt hat, prüft es nicht selbst; die Unabhängigkeit muss gewahrt bleiben. Das ist etwas anderes als die wiederkehrende Prüfung technischer Anlagen nach PrüfVO.",
        ],
      },
      {
        id: "maengel",
        title: "Typische Mängel bei der Einreichung",
        paragraphs: [
          "Häufig fehlen Nutzerzahl und Evakuierungslogik, besonders bei Nutzungsänderungen. Löschwasser und Hydranten werden manchmal als „extern geklärt“ behauptet, ohne nachvollziehbaren Nachweis. Technische Anlagen stehen in Gewerkeplänen, sind aber im Konzept nicht funktional verknüpft – etwa Brandmeldeanlage, Druckbelüftung und Aufzugsteuerung.",
          "Abweichungen von BauO oder SBauVO ohne dokumentierte Ausgleichsmaßnahmen führen zu Nachforderungen. Ebenso problematisch sind Konzepte, die den Bestand als genehmigt voraussetzen, ohne den Bezug zum geltenden Genehmigungsstand herzustellen. Zu Abweichungen: [Abweichung § 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Vor Beauftragung und Einreichung helfen die folgenden Fragen, das richtige Dokument und den richtigen Umfang zu treffen.",
        ],
        table: {
          caption: "Vor dem Brandschutzkonzept",
          headers: ["Nr.", "Prüffrage", "Worauf achten?"],
          rows: [
            ["1", "Liegt ein großer Sonderbau nach § 50 Abs. 2 vor?", "Dann Konzeptpflicht nach § 70 Abs. 2 prüfen."],
            ["2", "Greift die SBauVO schon unterhalb dieser Schwelle?", "Sonderbauvorschriften und Konzeptpflicht nicht vermischen."],
            ["3", "Reicht eine Stellungnahme zur abgegrenzten Änderung?", "Mit Bauaufsicht und Entwurfsverfasser klären."],
            ["4", "Sind die Themenfelder der BauPrüfVO § 9 abgedeckt?", "Feuerwehr, Löschwasser, Abschnitte, Wege, Anlagen, Betrieb, Abweichungen."],
            ["5", "Gibt es Text und Zeichnung?", "Beide Teile müssen zusammenpassen."],
            ["6", "Sind Abweichungen mit Ausgleich beschrieben?", "Ohne Nachweis riskant."],
            ["7", "Ist die Prüfingenieur-Prüfung vorgesehen?", "Unabhängigkeit und Brandschutzdienststelle beachten."],
            ["8", "Passt das Konzept zum Genehmigungs- oder Ist-Stand?", "Besonders bei Umbau und Nutzungsänderung."],
          ],
        },
      },
      {
        id: "grenzen",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Beitrag bündelt Pflicht, Abgrenzung zur Stellungnahme und den Inhalt nach BauPrüfVO § 9. Er ersetzt weder die Einzelfallprüfung noch die Prüfung durch den Prüfingenieur. Vertiefungen: [wann nötig](/ratgeber/brandschutzkonzept-wann-noetig) und [Pflichtinhalte § 9](/ratgeber/brandschutzkonzept-baupruefvo-nrw).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Wann Konzept nötig?" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Inhalte BauPrüfVO § 9" },
      { href: "/ratgeber/gesetzliche-einstufung-gebaeude-bauo-nrw", label: "Gebäudeeinstufung" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/ratgeber/brandschutzfachplaner-rollen-bauo-nrw", label: "Brandschutzfachplaner" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau / Nutzungsänderung" },
      { href: "/leistungen/brandschutzkonzept", label: "Leistung Brandschutzkonzept" },
      { href: "/kontakt", label: "Kontakt / Anfrage" },
    ],
    faq: [
      {
        question: "Wann brauche ich ein Brandschutzkonzept in NRW?",
        answer:
          "Bei großen Sonderbauten nach § 50 Abs. 2 BauO NRW ist mit den Bauvorlagen ein Brandschutzkonzept einzureichen (§ 70 Abs. 2). Ob Ihr Vorhaben darunterfällt, hängt von Nutzung und Schwellen ab und sollte früh geklärt werden.",
      },
      {
        question: "Reicht eine Stellungnahme statt eines Konzepts?",
        answer:
          "Oft ja bei klar abgegrenzten Bestandsänderungen, wenn ein genehmigtes Gesamtkonzept existiert und die Bauaufsicht das akzeptiert. Bei großem Sonderbau oder umfassender Neubewertung ist in der Regel das Konzept nötig.",
      },
      {
        question: "Was muss inhaltlich in ein Brandschutzkonzept?",
        answer:
          "BauPrüfVO § 9 verlangt eine zielorientierte Gesamtbewertung mit Angaben unter anderem zu Feuerwehrflächen, Löschwasser, Brand- und Rauchabschnitten, Rettungswegen, Nutzerzahl, anlagentechnischem Brandschutz und betrieblichen Maßnahmen.",
      },
      {
        question: "Wer prüft das Brandschutzkonzept?",
        answer:
          "Im Genehmigungsverfahren prüft der Prüfingenieur für Brandschutz Vollständigkeit und Richtigkeit und bezieht die Brandschutzdienststelle ein. Das ist etwas anderes als die wiederkehrende Prüfung technischer Anlagen nach PrüfVO.",
      },
      {
        question: "Erstellt H&S+ Brandschutzkonzepte?",
        answer:
          "Ja. H&S+ erstellt Brandschutzkonzepte und brandschutztechnische Stellungnahmen für Vorhaben in Köln und NRW – abgestimmt auf BauO, SBauVO und die Anforderungen der Bauaufsicht.",
      },
    ],
  },
];
