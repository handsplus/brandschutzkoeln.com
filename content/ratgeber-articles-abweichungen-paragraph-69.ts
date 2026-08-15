/**
 * 25.11.2024 – Abweichungen § 69 BauO NRW.
 * Quellen: MHKBD-Erlass 05.12.2022; Abweichungen_Brandschutz_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_ABWEICHUNGEN_PARAGRAPH_69: RatgeberArticle[] = [
  {
    slug: "abweichungen-paragraph-69-erlass-bauo-nrw",
    title: "Von Brandschutzvorschriften abweichen: wann § 69 BauO NRW hilft",
    excerpt:
      "Altbau, Denkmal oder knapper Rettungsweg: Muss jede Vorschrift eins zu eins gelten? Erst prüfen, ob Erleichterung, Konzept-Kompensation oder § 88 reicht – dann § 69, SV-Bescheinigung oder Bestandsschutz. Entscheidungslogik für Umbau und Genehmigung.",
    metaTitle: "Abweichung Brandschutz § 69 BauO NRW | H&S+",
    metaDescription:
      "Brandschutz-Abweichung NRW: Wann § 69, wann ausgleichende Maßnahmen im Konzept, wann Erleichterung statt Antrag – plus SV-Bescheinigung und MHKBD-Erlass für Bestand und Umbau.",
    keywords: [
      "§ 69 BauO NRW Abweichung",
      "Abweichung Brandschutz NRW",
      "ausgleichende Maßnahmen Brandschutzkonzept",
      "MHKBD Erlass § 69",
      "Sachverständigenbescheinigung Abweichung",
      "Nutzungsänderung Abweichung Bestand",
      "dringender Wohnbedarf Abweichung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Brauche ich eine Abweichung – oder reicht ein anderer Weg?",
        paragraphs: [
          "Beim Umbau eines älteren Gebäudes stellt sich früh die Frage: Muss jede Brandschutzvorschrift heute eins zu eins erfüllt werden – Flurwände, Treppenraum, Rettungsweglängen – oder gibt es Spielraum? § 69 BauO NRW regelt **behördliche Zulassung**, von materiellen Anforderungen der BauO und SBauVO abzuweichen – wenn der Zweck der Norm trotzdem erreicht wird.",
          "Das ist nicht dasselbe wie [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw): § 59 begrenzt Nachrüstung bei rechtmäßig bestehenden Anlagen ohne Vorhaben. § 69 eröffnet einen **eigenen Weg bei einem Vorhaben**. Und wieder etwas anderes sind **ausgleichende Maßnahmen** im [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig) großer Sonderbauten (BauPrüfVO § 9) – Planungsinstrument, kein §-69-Antrag.",
          "Typische Situationen: energetische Sanierung mit Konflikt zu Flur- oder Treppenraumanforderungen, Nutzungsänderung, Denkmalschutz, Rettungsweg knapp. Dieser Ratgeber ordnet **alle Wege** ein – Gesetzessystematik plus NRW-Auslegung im [MHKBD-Erlass § 69](https://www.mhkbd.nrw/system/files/media/document/file/20221209_erlass_zu_ss69_bereinigt.pdf) (05.12.2022).",
        ],
      },
      {
        id: "instrumente",
        title: "Sieben Rechtsfiguren – nicht alles ist § 69",
        paragraphs: [],
        table: {
          caption: "Abweichung und verwandte Instrumente",
          headers: ["Figur", "Norm", "Funktion", "Abgrenzung"],
          rows: [
            [
              "Abweichung",
              "§ 69 BauO",
              "Behördliche Zulassung von konkreter BauO-/VO-Anforderung",
              "Einzelfall, Antrag oder SV-Bescheinigung",
            ],
            [
              "SV-Bescheinigung",
              "§ 69 Abs. 1a",
              "SV bescheinigt Brandschutz/Standsicherheit + Abweichungsvoraussetzungen",
              "Ersetzt Zulassungsakt, nicht Schutzpflicht § 3",
            ],
            [
              "Ausgleichende Maßnahmen",
              "BauPrüfVO § 9",
              "Im Konzept: Defizit + Kompensation = gleiches Schutzniveau",
              "Große Sonderbauten, Genehmigung – kein §-69-Verfahren",
            ],
            [
              "Alternative technische Lösung",
              "§ 3 Abs. 3",
              "Abweichung von Technikregeln (DIN, VV TB), nicht von Gesetzesnorm",
              "Gleiches Schutzniveau § 3 Abs. 1 – allein nicht für § 30 Brandwand",
            ],
            [
              "Gesetzliche Erleichterung",
              "§ 50; SBauVO",
              "Parlament/VO erlaubt abweichende Anforderung für Sonderbauten",
              "Kein Einzelfall-Ermessen",
            ],
            [
              "Einzelnorm-Zulassung",
              "z. B. § 30 Abs. 2",
              "Größere Brandabschnitte, wenn Nutzung es erfordert",
              "Eigene Öffnungsklausel, nicht § 69",
            ],
            [
              "Bestandsschutz Weiterbetrieb",
              "§ 59 Abs. 1",
              "Keine pauschale Nachrüstung bei Bestandsmängeln",
              "Ohne Vorhaben; mit Vorhaben ggf. § 69",
            ],
          ],
        },
      },
      {
        id: "entscheidungskette",
        title: "Entscheidungskette – in dieser Reihenfolge prüfen",
        paragraphs: [
          "Nicht jede Planungsabweichung läuft über § 69. Die folgende Kette vermeidet unnötige Anträge – ergänzt die Erlass-Prüfung in der nächsten Tabelle.",
        ],
        list: [
          "§ 3 Abs. 1 – Schutzpflicht Leben, Gesundheit, öffentliche Sicherheit (auch bei Nutzungsänderung)",
          "Norm erfüllt? §§ 26–49 BauO, SBauVO – dann kein Abweichungsbedarf",
          "Gesetzliche Erleichterung? § 50 BauO / SBauVO-Sonderbau-Regel – anwenden, kein § 69",
          "Einzelnorm-Zulassung? z. B. § 30 Abs. 2 größere Brandabschnitte, § 6 Abs. 11 Abstand",
          "Neubau großer Sonderbau? Ausgleichende Maßnahmen im Brandschutzkonzept (§ 70; BauPrüfVO § 9)",
          "Bestand / Vorhaben: Tatbestand § 69 Abs. 1 Satz 2 (Modernisierung, Energie, Nutzungsänderung, Denkmal)?",
          "Allgemeines Voraussetzung: § 69 Abs. 1 Satz 1 – Zweck der Norm + § 3 + nachbarliche Belange",
          "Verfahren: Abweichungsantrag Textform (§ 69 Abs. 3) oder SV-Bescheinigung (§ 69 Abs. 1a)",
          "Entscheidung: Gemeinde (örtliche Bauvorschrift, verfahrensfrei) oder Bauaufsicht – Frist 6 Wochen (§ 69 Abs. 2)",
        ],
        table: {
          caption: "Erlass-Prüfung vor § 69 Abs. 1 (MHKBD)",
          headers: ["Stufe", "Prüffrage", "Folge"],
          rows: [
            ["1", "Tatbestandsausschluss in der Norm selbst?", "Kein § 69 nötig"],
            ["2", "Abweichung eigener Art in der Norm?", "Keine gesonderte §-69-Entscheidung"],
            ["3", "Speziellere Abweichungsregelung in der Norm?", "Diese Norm maßgeblich"],
            ["4", "Keiner der Fälle 1–3?", "§ 69 Abs. 1 Satz 1, 2 oder 3 prüfen"],
          ],
        },
      },
      {
        id: "ausgleichende-massnahmen",
        title: "Ausgleichende Maßnahmen – nicht dasselbe wie § 69",
        paragraphs: [
          "BauPrüfVO § 9 verlangt im Brandschutzkonzept Angaben, **welchen materiellen Anforderungen nicht entsprochen wird** und **welche ausgleichenden Maßnahmen** stattdessen vorgesehen sind. Das ist Gesamtbewertung im Genehmigungsverfahren – Defizit plus Kompensation auf gleichem Schutzniveau.",
          "Bei **großen Sonderbauten** (Neubau, § 70 Abs. 2 BauO) kann das Konzept Abweichungen von Einzelnormen tragen, **ohne gesonderten §-69-Antrag** – die Baugenehmigung umfasst die Bewertung. Bei **Bestandsvorhaben** ohne großen Sonderbau greift § 69 parallel oder alternativ.",
          "Das Gesetz nennt keinen Katalog zulässiger Kompensationen (Sprinkler, zusätzliche TR, Rauchschutz etc.) – nur die schutzzielorientierte Prüfung. Wer darf das Konzept: [Brandschutzfachplaner-Rollen](/ratgeber/brandschutzfachplaner-rollen-bauo-nrw).",
        ],
        table: {
          caption: "§ 69 vs. ausgleichende Maßnahmen",
          headers: ["Merkmal", "§ 69 Abweichung", "Ausgleichende Maßnahmen (BSK)"],
          rows: [
            ["Anwendung", "Bestand, Nutzungsänderung, Modernisierung u. a.", "Große Sonderbauten, Genehmigung"],
            ["Verfahren", "Antrag oder SV § 69 Abs. 1a", "Konzept als Bauvorlage"],
            ["Entscheidung", "Behörde/Gemeinde oder SV", "Baugenehmigung inkl. Konzept"],
            ["Logik", "Abweichung von Einzelnorm", "Gesamtbewertung Defizit + Ausgleich"],
          ],
        },
      },
      {
        id: "erleichterungen",
        title: "Erleichterung oder Abweichung?",
        paragraphs: [
          "Wenn das Gesetz oder die SBauVO für einen Sonderbau bereits mildere Anforderungen erlaubt, brauchen Sie **kein §-69-Verfahren** – die Erleichterung ist parlamentsgesetzlich vorgesehen, kein Einzelfall-Ermessen.",
        ],
        table: {
          caption: "Wann § 69 entfällt",
          headers: ["Instrument", "Beispiel", "§ 69 nötig?"],
          rows: [
            ["SBauVO-Erleichterung", "GK-Erleichterungen Versammlungsstätte, Verkauf", "Nein"],
            ["Bestandserleichterung im Gesetz", "Keine Aufzugspflicht bei Dachgeschoss-Ausbau Bestand (§ 39 Abs. 1 Satz 2)", "Nein"],
            ["Einzelnorm-Zulassung", "Größere Brandabschnitte § 30 Abs. 2", "Nein"],
            ["§ 3 Abs. 3", "Alternative Lösung statt DIN-Regel, gleiches §-3-Niveau", "Nein für Gesetzesnorm"],
            ["§ 88 + VV TB", "TB-Planungsregel, gleiches Schutzniveau", "Nein für TB-Teil"],
            ["Abweichung Einzelfall", "Bestand: notwendiger TR fehlt, Zweck anders erreicht", "Ja"],
          ],
        },
      },
      {
        id: "para3-abs3",
        title: "§ 3 Abs. 3 – Technikregel, nicht Gesetzesnorm",
        paragraphs: [
          "§ 3 Abs. 3 erlaubt Abweichung von **allgemein anerkannten Regeln der Technik** (einschließlich VV TB), wenn eine andere Lösung die Belange des § 3 Abs. 1 **in gleicher Weise** erfüllt. Das betrifft Planungs- und Ausführungsregeln – nicht die materielle Mindestanforderung im Gesetz selbst.",
          "Steht die BauO eine konkrete Pflicht (z. B. feuerbeständige Brandwand § 30), reicht § 3 Abs. 3 allein nicht – es bedarf § 69, ausgleichender Maßnahmen im Konzept oder einer gesetzlichen Erleichterung/Einzelnorm-Zulassung.",
        ],
      },
      {
        id: "para88",
        title: "§ 88 vs. § 69 – Technische Baubestimmungen",
        paragraphs: [
          "§ 88 BauO NRW erlaubt Abweichungen von Planungs-, Bemessungs- und Ausführungsregelungen in Technischen Baubestimmungen, wenn mit einer anderen Lösung die Anforderungen in gleichem Maße erfüllt werden und die TB keine Abweichung ausschließt. Diese Abweichungen bedürfen grundsätzlich keiner Entscheidung der Bauaufsichtsbehörde.",
          "In der VV TB NRW (Tabelle A 2.2) sind brandschutzrelevante TB aufgeführt: Nr. A 2.2.1 – Abweichungen nach § 88 Abs. 1 Satz 3 möglich; Nr. A 2.2.2 – MIndBauRL, bei der § 88 Abs. 1 Satz 3 nicht gilt. Von MIndBauRL-Anforderungen kommen nur Abweichungen nach § 69 in Betracht.",
          "Abweichungen von bauordnungsrechtlichen Anforderungen im Zusammenhang mit TB-Abweichungen sind nur nach § 69 möglich. Eine nach § 88 Abs. 1 Satz 3 unzulässige Lösung kann nicht durch eine §-69-Abweichung von der TB zugelassen werden.",
          "Bei Abweichungen vom Brandschutz ist regelmäßig die Brandschutzdienststelle zu hören, soweit Löscharbeiten oder die Rettung von Menschen und Tieren berührt werden – unabhängig davon, ob die Bauaufsichtsbehörde prüft oder ein staatlich anerkannter Sachverständiger bescheinigt.",
        ],
      },
      {
        id: "abs1-satz1",
        title: "§ 69 Abs. 1 Satz 1 – Generalklausel",
        paragraphs: [
          "Die Voraussetzungen des § 69 Abs. 1 Satz 1 gelten für den gesamten § 69 Abs. 1 – also auch bei Satz 2 und Satz 3. Die Behörde kann abweichen, wenn unter Würdigung des **Zwecks der jeweiligen Anforderung**, der **nachbarlichen Belange** und der **öffentlichen Belange (§ 3)** die Abweichung vereinbar ist. Wird der Zweck nachweisbar auch mit Abweichung erreicht, **soll** sie zugelassen werden.",
          "Bei bestehenden Gebäuden muss der Schutzzweck nicht in gleichem Maße erfüllt werden (MHKBD-Erlass). Der Zweck ist berücksichtigt, wenn mindestens das Schutzniveau des jeweiligen Gebäudes gewahrt bleibt und keine konkrete Gefahr zu befürchten ist.",
          "Zulassung nach Satz 1 allein: **Ermessensentscheidung** – im Gegensatz zu Satz 2 („sind zuzulassen“).",
        ],
      },
      {
        id: "abs1-satz2",
        title: "§ 69 Abs. 1 Satz 2 – gebundenes Ermessen bei Bestand",
        paragraphs: [
          "Bei **bestehenden Anlagen** sind Abweichungen von den §§ 4 bis 16 und 26 bis 49 sowie von aufgrund der BauO erlassenen Vorschriften (**SBauVO eingeschlossen**) **zuzulassen**, wenn einer der Tatbestände vorliegt und Satz 1 erfüllt ist. Nicht beim Neubau.",
          "Nr. 1 – Modernisierung Wohnraum: Ausbau, Anbau, Nutzungsänderung, Aufstockung zur Verbesserung der Wohnverhältnisse oder Energie/Wasser/Klima – **Baugenehmigung oder Kenntnisgabe der Errichtung mindestens 5 Jahre zurück**. Auch Umnutzung zu Wohnraum; bei Mischgebäuden nur für Wohnungen.",
          "Nr. 2 – Energie-/Wassereinsparung bei Anlagen, die nicht zu Wohnzwecken genutzt oder umgenutzt werden.",
          "Nr. 3 – **Nutzungsänderung** (eigenständiger Tatbestand): z. B. Büro zu Gastronomie, Wohnung zu Praxis – häufigster Auslöser für Brandschutz-Abweichungen bei GK- und Sonderbau-Einordnung: [Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
          "Nr. 4 – Erhaltung und weitere Nutzung von Denkmälern (§ 7 DSchG NRW); beides kumulativ.",
        ],
        table: {
          caption: "§ 69 Abs. 1 Satz 2 – vier Tatbestände (nur Bestand)",
          headers: ["Nr.", "Tatbestand", "Besonderheit", "Entscheidung"],
          rows: [
            ["1", "Modernisierung Wohnung/Wohngebäude", "Genehmigung/Kenntnisgabe ≥ 5 Jahre", "Zuzulassen (gebunden)"],
            ["2", "Energie-/Wassereinsparung (nicht Wohnzweck)", "—", "Zuzulassen (gebunden)"],
            ["3", "Nutzungsänderung", "Keine weitere Einschränkung in Satz 2", "Zuzulassen (gebunden)"],
            ["4", "Denkmal – Erhaltung und weitere Nutzung", "Kumulativ", "Zuzulassen (gebunden)"],
          ],
        },
      },
      {
        id: "abs1-satz3",
        title: "§ 69 Abs. 1 Satz 3 – allgemeines Wohl, Wohnbedarf, Härte",
        paragraphs: [
          "Weitere Tatbestände: Abweichung **kann** zugelassen werden bei Gründen des **allgemeinen Wohls** (insbesondere dringender Wohnbedarf, Klimaschutz, Stadtentwicklung), zur **Erprobung neuer Bau- und Wohnformen** oder bei **offenbar nicht beabsichtigter Härte**. Ermessen – auch ohne Bestand; Satz 3 bis § 48, bei Nutzungsänderungen auch § 49.",
          "Dringender Wohnbedarf: Gemeindebezogen, objektiv nachweisbar (angespannter Wohnungsmarkt). Das Vorhaben muss zur Deckung beitragen – die Abweichung muss nicht das einzige Mittel sein.",
          "Nicht beabsichtigte Härte: atypisches, offensichtlich unbilliges Ergebnis – nicht planwidrige Ausnahme.",
        ],
        table: {
          caption: "Nachweis angespannter Wohnungsmarkt (Erlass)",
          headers: ["Nr.", "Nachweismöglichkeit", "Quelle"],
          rows: [
            ["1", "Gemeinde als Gemeinde mit angespannten Wohnungsmärkten ausgewiesen", "Landesverordnung (z. B. Mieterschutzverordnung)"],
            ["2", "Gebiet mit erhöhtem Wohnungsbedarf benannt", "Wohnungsmarktgutachten des Landes"],
            ["3", "Eigene Darstellung durch die Gemeinde", "Wohnungsmarktbeobachtung"],
          ],
        },
      },
      {
        id: "abs1a",
        title: "Sachverständige statt Behörde – wann das geht",
        paragraphs: [
          "§ 69 Abs. 1a: Der Zulassung bedarf es nicht, wenn sachverständige Personen nach § 87 Abs. 2 bescheinigen, dass das Vorhaben den Anforderungen an **Brandschutz oder Standsicherheit** entspricht **und** die Voraussetzungen für Abweichungen vorliegen.",
          "Anwendungsbereich Brandschutz-SV (Erlass): Wohngebäude GK 4 und 5; Gebäude GK 3–5, die weder Wohngebäude noch Sonderbauten sind; Garagen 100–1.000 m² NF. Nicht bei beeinträchtigten nachbarlichen Belangen – dann Behörde + § 72 Angrenzer.",
          "Verfahrensfreie Vorhaben nach § 62 fallen nicht unter § 69 Abs. 1a. **Genehmigungsfreistellung § 63:** Wenn eine §-69-Abweichung nötig wäre und nicht bereits zugelassen/bescheinigt ist, scheitert die Freistellung (§ 63 Abs. 2 Nr. 4).",
          "Bescheinigung spätestens mit Baubeginn; sinnvoll vor Genehmigung. Fehlerhafte Bescheinigung macht erteilte Genehmigung nicht rückwirkend rechtswidrig – Behörde kann nach § 58 Abs. 2 eingreifen. Wahlrecht: SV oder Behördenantrag.",
        ],
      },
      {
        id: "abs2",
        title: "§ 69 Abs. 2–3 – Verfahren, Frist, Antrag",
        paragraphs: [
          "Antrag **in Textform** mit **Begründung** (§ 69 Abs. 3). Gilt auch für Anlagen ohne Genehmigung und für Abweichungen von Vorschriften, die im Genehmigungsverfahren nicht geprüft werden.",
          "Zuständigkeit: Bei verfahrensfreien Bauvorhaben und **örtlichen Bauvorschriften** entscheidet die **Gemeinde**; im Übrigen Bauaufsichtsbehörde – bei örtlichen Bauvorschriften im Einvernehmen mit der Gemeinde.",
          "Entscheidungsfrist: **6 Wochen** nach vollständigem Antrag; Verlängerung um bis zu 6 Wochen aus wichtigen Gründen. Abweichung möglichst zusammen mit Baugenehmigung beantragen; betroffene Vorschriften genau bezeichnen und Zweckerreichung darlegen.",
        ],
      },
      {
        id: "para63-59",
        title: "§ 63, § 59, § 82 – Verfahren und Weiterbetrieb",
        paragraphs: [
          "**§ 63 Genehmigungsfreistellung:** Nur wenn das Vorhaben **keine Abweichung nach § 69** braucht – oder Zulassung/SV-Bescheinigung bereits vorliegt. Offene Abweichung blockiert die Freistellung.",
          "**§ 59 Abs. 1:** Rechtmäßig bestehende Anlage ohne Vorhaben – Nachrüstung nur bei Einzelfall-Gefahr für Leben/Gesundheit. Mit Vorhaben: § 69 für bewusste Abweichung von Neu-Anforderungen. **§ 59 Abs. 2:** Wesentliche Änderung kann Nachrüstung auslösen – § 69 als Ausweg bei unverhältnismäßigem Mehraufwand.",
          "**§ 82 Abs. 3:** Nutzungsuntersagung bei Widerspruch zu öffentlich-rechtlichen Vorschriften – Abweichung oder SV-Bescheinigung verhindert den Widerspruch; ohne Zulassung Eingriff möglich.",
        ],
      },
      {
        id: "brandschutz",
        title: "Brandschutz – typische Abweichungsfelder",
        paragraphs: [
          "Von §§ 26 bis 49 BauO und SBauVO-Vorschriften kann abgewichen werden – Auswahl brandschutzrelevanter Themen (korrekte Zuordnung BauO NRW 2018):",
          "§§ 26–27 Baustoffe, Feuerwiderstand tragender Bauteile · §§ 29–30 Brandabschnitte, Brandwände · § 31 abschließende Bauteile (Türen, RS) · § 32 Abschottungen · § 33 Flucht- und Rettungswege · §§ 34–36 notwendige Treppen, Treppenräume, Flure · § 37 zweiter Rettungsweg · §§ 40–41 Leitungen, Lüftung · § 50 Sonderbau inkl. SBauVO.",
          "Bei Umbauten greifen häufig Satz 2 Nr. 1, 2 oder **3 (Nutzungsänderung)** – wenn Flurwände, Treppenraum oder Rettungsweglängen nicht vollständig nach heutigem Standard umsetzbar sind. Vertiefung: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw), [Treppen und Treppenräume](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw), [Leitungen](/ratgeber/leitungsanlagen-bauo-sbauvo-nrw), [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw).",
        ],
        table: {
          caption: "Brandschutz – wann welcher Weg?",
          headers: ["Situation", "Weg", "Norm"],
          rows: [
            ["Gesetzliche SBauVO-Erleichterung", "Erleichterung anwenden", "§ 50; SBauVO"],
            ["Größere Brandabschnitte", "Einzelnorm-Zulassung", "§ 30 Abs. 2"],
            ["Neubau Sonderbau, Gesamtbewertung", "Ausgleichende Maßnahmen im BSK", "BauPrüfVO § 9"],
            ["TB-Planungsregel, gleiches Schutzniveau", "§ 88, keine Behördenentscheidung", "§ 88 Abs. 1"],
            ["MIndBauRL", "Nur § 69", "VV TB A 2.2.2"],
            ["Bestand, Nutzungsänderung", "§ 69 Abs. 1 Satz 2 Nr. 3, gebunden", "§ 69 Abs. 1 Satz 2"],
            ["Bestand, Modernisierung Wohnung ≥ 5 Jahre", "§ 69 Abs. 1 Satz 2 Nr. 1, gebunden", "§ 69 Abs. 1 Satz 2"],
            ["GK 4/5-Wohngebäude, SV-Verfahren", "§ 69 Abs. 1a Bescheinigung", "§ 69 Abs. 1a"],
            ["Nachbarliche Belange betroffen", "Behördliche Zulassung, § 72", "§ 69 Abs. 1"],
            ["Generalklausel", "§ 69 Abs. 1 Satz 1, Ermessen", "§ 69 Abs. 1 Satz 1"],
          ],
        },
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Checkliste Gesetzessystematik und MHKBD-Erlass – für Antragstellung und Genehmigungspraxis.",
        ],
        table: {
          caption: "Prüfpunkte Abweichung im Brandschutz",
          headers: ["Nr.", "Prüffrage", "Ergebnis"],
          rows: [
            ["1", "Konkrete Anforderung nicht erfüllt – welche?", "Abweichungsgegenstand definieren"],
            ["2", "Gesetzliche Erleichterung oder Einzelnorm-Zulassung?", "Kein § 69"],
            ["3", "Großer Sonderbau Neubau – ausgleichende Maßnahmen im BSK?", "Konzept statt §-69-Antrag"],
            ["4", "Nur Technikregel betroffen – § 3 Abs. 3 oder § 88?", "Kein § 69 für Gesetzesnorm"],
            ["5", "Tatbestandsausschluss / eigene Normabweichung / speziellere Regelung?", "§ 69 entfällt"],
            ["6", "Bestand + Modernisierung/Energie/Nutzungsänderung/Denkmal?", "§ 69 Abs. 1 Satz 2"],
            ["7", "Modernisierung Wohnraum – Genehmigung ≥ 5 Jahre?", "Nr. 1 Satz 2"],
            ["8", "Allgemeines Wohl, Wohnbedarf, Härte?", "§ 69 Abs. 1 Satz 3, Ermessen"],
            ["9", "Zweck der Norm + § 3 + Nachbarn gewahrt?", "Voraussetzung aller Tatbestände"],
            ["10", "SV-Bescheinigung § 69 Abs. 1a möglich?", "Statt Behördenantrag"],
            ["11", "Nachbarliche Belange betroffen?", "Keine SV-Bescheinigung"],
            ["12", "Genehmigungsfreistellung § 63 geplant?", "Abweichung vorher klären"],
            ["13", "Antrag Textform + Begründung?", "§ 69 Abs. 3"],
            ["14", "Brandschutzdienststelle gehört?", "Bei Lösch-/Rettungsbezug (Erlass)"],
            ["15", "Parallel § 59 Weiterbetrieb ohne Vorhaben?", "Kein §-69-Bedarf"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber erklärt § 69 BauO NRW und die Systematik verwandter Instrumente für die Genehmigungspraxis – nicht jede Abweichung wird bewilligt. Verbindlich bleiben Gesetzestext, [MHKBD-Erlass § 69](https://www.mhkbd.nrw/system/files/media/document/file/20221209_erlass_zu_ss69_bereinigt.pdf) und die Entscheidung der zuständigen Behörde.",
          "Vertiefung: [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw), [Umbau/Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz), [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigungsverfügung" },
      { href: "/ratgeber/sachverstaendigenbescheinigung-abweichung-brandschutz-nrw", label: "SV-Bescheinigung" },
      { href: "/ratgeber/brandwand-fenster-abweichung-nachbarschutz-bauo-nrw", label: "Brandwand Fenster" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz § 59" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept vs. Abweichung" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Nutzungsänderung" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/waende-notwendige-flure-bauo-nrw", label: "Wände notwendiger Flure" },
      { href: "/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw", label: "Treppen und Treppenräume" },
      { href: "/ratgeber/leitungsanlagen-bauo-sbauvo-nrw", label: "Leitungsanlagen" },
      { href: "/ratgeber/brandschutzfachplaner-rollen-bauo-nrw", label: "SV und Konzept" },
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag Unterlagen" },
    ],
    faq: [
      {
        question: "Wann brauche ich eine Abweichung nach § 69?",
        answer:
          "Wenn eine materielle BauO- oder SBauVO-Anforderung nicht erfüllt wird und weder Erleichterung, Einzelnorm-Zulassung, § 3 Abs. 3, § 88 noch ausgleichende Maßnahmen im Konzept greifen. Zuerst die Entscheidungskette durchlaufen.",
      },
      {
        question: "Was ist der Unterschied zu ausgleichenden Maßnahmen im Konzept?",
        answer:
          "Ausgleichende Maßnahmen nach BauPrüfVO § 9 sind Teil der Gesamtbewertung großer Sonderbauten in der Genehmigung – Defizit plus Kompensation. § 69 ist behördliche Einzelfall-Zulassung, typisch bei Bestand und Nutzungsänderung.",
      },
      {
        question: "Gilt Nutzungsänderung unter § 69 Abs. 1 Satz 2?",
        answer:
          "Ja – Nutzungsänderung ist eigener Tatbestand in Satz 2 bei bestehenden Anlagen (gebundene Zulassung bei erfüllter Voraussetzung). Nicht mit Satz 3 (Ermessen) verwechseln.",
      },
      {
        question: "Was ist der Unterschied zwischen § 69 Abs. 1 Satz 2 und Satz 3?",
        answer:
          "Satz 2 gilt nur bei bestehenden Anlagen (Modernisierung, Energie, Nutzungsänderung, Denkmal) und bindet zur Zulassung. Satz 3 (allgemeines Wohl, Wohnbedarf, Härte) ist Ermessen – auch beim Neubau.",
      },
      {
        question: "Kann ein Sachverständiger die Abweichung bescheinigen?",
        answer:
          "Nach § 69 Abs. 1a ja, wenn der staatlich anerkannte SV für Brandschutz prüft und sowohl Schutz als auch Abweichungsvoraussetzungen bescheinigt – bei GK 4/5-Wohngebäuden u. a. Nicht bei nachbarlichen Belangen.",
      },
      {
        question: "Blockiert § 69 die Genehmigungsfreistellung?",
        answer:
          "Ja. § 63 Abs. 2 Nr. 4: Freistellung nur, wenn keine Abweichung nach § 69 nötig ist oder sie bereits zugelassen bzw. per SV bescheinigt wurde.",
      },
      {
        question: "Muss die Brandschutzdienststelle gehört werden?",
        answer:
          "Regelmäßig ja, wenn Löscharbeiten oder Rettung berührt werden – unabhängig von Behörde oder SV (MHKBD-Erlass).",
      },
      {
        question: "Wie unterscheidet sich § 69 von § 59?",
        answer:
          "§ 59 regelt Weiterbetrieb ohne Vorhaben. § 69 eröffnet bei einem Vorhaben Zulassung, von Vorschriften abzuweichen, wenn die gesetzlichen Voraussetzungen erfüllt sind.",
      },
    ],
  },
];
