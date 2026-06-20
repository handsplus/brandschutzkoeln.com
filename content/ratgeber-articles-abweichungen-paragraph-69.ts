/**
 * 25.11.2024 – Abweichungen § 69 BauO NRW (MHKBD-Erlass 05.12.2022).
 * Quelle: 20221209_erlass_zu_ss69_bereinigt.pdf
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_ABWEICHUNGEN_PARAGRAPH_69: RatgeberArticle[] = [
  {
    slug: "abweichungen-paragraph-69-erlass-bauo-nrw",
    title: "Von Brandschutzvorschriften abweichen: wann § 69 BauO NRW hilft",
    excerpt:
      "Altbau-Sanierung, Denkmal oder knapper Rettungsweg: Muss jede Vorschrift eins zu eins erfüllt werden – oder gibt es einen Ausweg? Wann § 69 greift, wann der Sachverständige bescheinigen darf und was mit Bestandsschutz zu tun hat.",
    metaTitle: "Abweichung Brandschutz § 69 BauO NRW | H&S+",
    metaDescription:
      "Brandschutz-Abweichung im Bestand: Wann § 69 BauO NRW eine Lösung erlaubt, wann Sachverständige bescheinigen dürfen und wann die Behörde zustimmen muss – verständlich für Umbau und Genehmigung.",
    keywords: [
      "§ 69 BauO NRW Abweichung",
      "Abweichung Brandschutz NRW",
      "MHKBD Erlass § 69",
      "Sachverständigenbescheinigung Abweichung",
      "bestehende Anlagen Modernisierung",
      "dringender Wohnbedarf Abweichung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Brauche ich eine Abweichung – oder reicht Bestand?",
        paragraphs: [
          "Beim Umbau eines älteren Gebäudes stellt sich früh die Frage: Muss jede Brandschutzvorschrift heute eins zu eins erfüllt werden – Flurwände, Treppenraum, Rettungsweglängen – oder gibt es Spielraum? Genau dafür gibt es § 69 BauO NRW: Er regelt, wann von materiellen Anforderungen der Bauordnung und der SBauVO abgewichen werden kann.",
          "Das ist nicht dasselbe wie [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw): § 59 begrenzt, wann die Behörde bei rechtmäßig bestehenden Anlagen Nachrüstung verlangen darf. § 69 eröffnet einen eigenen Weg – wenn Sie bewusst von einer Vorschrift abweichen wollen und die gesetzlichen Voraussetzungen erfüllt sind.",
          "Typische Situationen: energetische Sanierung mit Konflikt zu Flur- oder Treppenraumanforderungen, Umnutzung zu Wohnraum, Denkmalschutz mit abweichenden Bauteilen, oder ein Rettungsweg, der rechnerisch knapp wird. Dieser Ratgeber ordnet die Wege ein – mit Schwerpunkt Brandschutz. Grundlage ist die einheitliche NRW-Auslegung des MHKBD (Erlass 05.12.2022); die Normverweise im Artikel folgen dem Gesetzestext.",
        ],
      },
      {
        id: "pruefungsreihenfolge",
        title: "Erst prüfen: Brauche ich überhaupt § 69?",
        paragraphs: [
          "Nicht jede Abweichung vom Plan läuft über § 69. Bevor Sie einen Antrag stellen, lohnt eine kurze Einordnung – oft steckt die Lösung schon in der Vorschrift selbst.",
          "Manche Normen gelten von vornherein nicht für Ihren Fall (Formulierungen wie „dies gilt nicht, wenn …“ – vergleiche § 49 Abs. 3). Andere erlauben Abweichungen direkt im Gesetz („abweichend von … sind … zulässig, wenn …“ – vergleiche § 26 Abs. 3) – dann brauchen Sie keine gesonderte §-69-Entscheidung.",
          "Wieder andere Paragraphen haben eine eigene, speziellere Abweichungsregelung, die § 69 verdrängt („eine Abweichung kann zugelassen werden, wenn …“ – vergleiche § 6 Abs. 14, § 46 Abs. 1 Satz 2). Erst wenn keiner dieser Wege passt, kommt § 69 Abs. 1 in Betracht.",
        ],
        table: {
          caption: "Prüfungsreihenfolge bei geplanter Abweichung",
          headers: ["Stufe", "Prüffrage", "Folge"],
          rows: [
            ["1", "Tatbestandsausschluss in der Norm selbst?", "Kein § 69 nötig"],
            ["2", "Abweichung eigener Art in der Norm?", "Keine gesonderte §-69-Entscheidung"],
            ["3", "Speziellere Abweichungsregelung in der Norm?", "Diese Norm maßgeblich, nicht § 69 Abs. 1"],
            ["4", "Keiner der Fälle 1–3?", "§ 69 Abs. 1 Satz 1, 2 oder 3 prüfen"],
          ],
        },
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
          "Die Voraussetzungen des § 69 Abs. 1 Satz 1 (Berücksichtigung des Zwecks der jeweiligen Anforderung und Würdigung der öffentlich-rechtlich geschützten nachbarlichen Belange mit den öffentlichen Belangen) gelten für den gesamten § 69 Abs. 1 – also auch bei Satz 2 und Satz 3.",
          "Grundlegende Voraussetzung in allen Fallkonstellationen: Die Abweichung muss mit den öffentlichen Belangen vereinbar sein. Öffentliche Belange sind alle Interessen, die die betreffende Norm schützen soll – einschließlich Brandschutz nach § 3 BauO NRW.",
          "Bei bestehenden Gebäuden muss der Schutzzweck der Vorschrift nicht in gleichem Maße erfüllt werden. Der Zweck ist berücksichtigt, wenn mindestens das Schutzniveau des jeweiligen Gebäudes gewahrt bleibt und aufgrund der Abweichung keine konkrete Gefahr zu befürchten ist.",
          "Unter diesen Voraussetzungen können Abweichungen grundsätzlich von allen materiellen Vorschriften der BauO NRW zugelassen werden. Die Zulassung nach Satz 1 ist eine Ermessensentscheidung der Bauaufsichtsbehörde.",
        ],
      },
      {
        id: "abs1-satz2",
        title: "§ 69 Abs. 1 Satz 2 – gebundenes Ermessen bei Bestand",
        paragraphs: [
          "§ 69 Abs. 1 Satz 2 regelt Fälle, in denen bei bestehenden Anlagen Abweichungen von den §§ 4 bis 16 und 26 bis 49 zuzulassen sind. Liegen die Voraussetzungen vor, ist die Behörde gebunden – sie hat die Abweichung zuzulassen. Die Vorschrift gilt nicht beim Neubau.",
          "Nr. 1 – Modernisierung von Wohnungen und Wohngebäuden: bauliche Veränderungen zur nachhaltigen Einsparung nicht erneuerbarer Primär- oder Endenergie, zum nachhaltigen Klimaschutz, zur Reduzierung des Wasserverbrauchs oder zur dauerhaften Verbesserung der Wohnverhältnisse. Auch Umnutzung anderer Nutzungen (z. B. Büro, Gewerbe) zu Wohnraum mit baulichen Änderungen. Bei Mischgebäuden gilt Nr. 1 nur für die Wohnungen.",
          "Nr. 2 – Energetische Modernisierung und Maßnahmen zur Reduzierung von Wasser oder Energie bei bestehenden Anlagen, die nicht zu Wohnzwecken genutzt oder umgenutzt werden.",
          "Nr. 3 – Erhaltung und weitere Nutzung von Denkmälern: „Erhaltung“ im Sinne des § 7 DSchG NRW; „weitere Nutzung“ nicht eng – auch längere Zeit ungenutzte Denkmäler, die nach Umbau nutzbar wären. Erhaltung und weitere Nutzung müssen kumulativ vorliegen.",
        ],
        table: {
          caption: "§ 69 Abs. 1 Satz 2 – drei Tatbestände (nur Bestand)",
          headers: ["Nr.", "Tatbestand", "Abweichung von", "Entscheidung"],
          rows: [
            ["1", "Modernisierung Wohnung/Wohngebäude (inkl. Umnutzung zu Wohnraum)", "§§ 4–16, 26–49", "Zuzulassen (gebunden)"],
            ["2", "Energie-/Wassereinsparung (nicht Wohnzweck)", "§§ 4–16, 26–49", "Zuzulassen (gebunden)"],
            ["3", "Erhaltung und weitere Nutzung Denkmal", "§§ 4–16, 26–49", "Zuzulassen (gebunden)"],
          ],
        },
      },
      {
        id: "abs1-satz3",
        title: "§ 69 Abs. 1 Satz 3 – allgemeines Wohl, Wohnbedarf, Härte",
        paragraphs: [
          "§ 69 Abs. 1 Satz 3 regelt weitere Voraussetzungen, bei deren Vorliegen Abweichungen von den §§ 4 bis 16 und 26 bis 47 (bei Nutzungsänderungen auch von § 49) zugelassen werden können. Ermessensentscheidung – keine Beschränkung auf bestehende Anlagen.",
          "Gründe des allgemeinen Wohls umfassen alle öffentlichen Belange und Interessen – soziale, kulturelle, sportliche Einrichtungen, Sicherheit, Umweltschutz, Verkehrs-, Versorgungs- und Entsorgungsanlagen. Die Aufzählung in § 69 Abs. 1 Satz 5 ist nicht abschließend.",
          "Dringender Wohnbedarf bezieht sich auf die jeweilige Gemeinde. Er liegt vor, wenn der Bedarf nicht durch vorhandenen Bestand oder Baumöglichkeiten befriedigt werden kann – nachzuweisen durch objektive Umstände, z. B. angespannter Wohnungsmarkt.",
          "Das Vorhaben muss geeignet sein, zur Deckung des dringenden Wohnbedarfs beizutragen. Die Abweichung muss nicht das einzige Mittel sein – es genügt, wenn sie zur Wahrung der öffentlichen Interessen vernünftigerweise geboten ist.",
          "Nicht beabsichtigte Härte: nachhaltiger Eingriff in Rechte des Betroffenen mit erheblichem, über die allgemeinen Auswirkungen hinausgehendem Opfer – nur atypische Umstände mit offensichtlich unbilligen Ergebnissen.",
        ],
        table: {
          caption: "Nachweis angespannter Wohnungsmarkt (Erlass)",
          headers: ["Nr.", "Nachweismöglichkeit", "Quelle"],
          rows: [
            ["1", "Gemeinde als Gemeinde mit angespannten Wohnungsmärkten ausgewiesen", "Landesverordnung (z. B. Mieterschutzverordnung)"],
            ["2", "Gebiet mit erhöhtem Wohnungsbedarf benannt", "Wohnungsmarktgutachten des Landes (Gebietskulissen)"],
            ["3", "Eigene Darstellung durch die Gemeinde", "Wohnungsmarktbeobachtung der Gemeinde oder Dritte"],
          ],
        },
      },
      {
        id: "abs1a",
        title: "Sachverständige statt Behörde – wann das geht",
        paragraphs: [
          "In den Fällen des § 69 Abs. 1a Satz 2 bedarf es keiner Abweichungsentscheidung durch die Bauaufsichtsbehörde; ein Antrag nach § 69 Abs. 2 Satz 1 ist nicht erforderlich.",
          "Voraussetzungen kumulativ: Der oder die staatlich anerkannte Sachverständige für die Prüfung des Brandschutzes prüft und bescheinigt, dass das Vorhaben den Anforderungen an den Brandschutz entspricht (§ 68 Abs. 2 Nr. 3 i. V. m. § 68 Abs. 4). Zusätzlich bescheinigt er nach § 69 Abs. 2 Satz 3, dass die Voraussetzungen für die Abweichung vorliegen.",
          "Anwendungsbereich Brandschutz-SV: Wohngebäude GK 4 und 5; Gebäude GK 3 bis 5, die weder Wohngebäude noch Sonderbauten sind; Garagen mit Nutzfläche über 100 m² bis 1.000 m².",
          "§ 69 Abs. 2 Satz 3-Fälle: Errichtung oder Änderung von Anlagen außerhalb eines Baugenehmigungsverfahrens; Abweichungen von Vorschriften, die im Genehmigungsverfahren nicht von der Bauaufsichtsbehörde geprüft werden (§ 68 Abs. 2 Nr. 3, § 64 Abs. 1 Nr. 1 Buchst. d). Verfahrensfreie Vorhaben nach § 62 fallen nicht unter § 69 Abs. 1a (redaktioneller Fehler im Gesetzestext „Abs. 2 Satz 3“). Genehmigungsfreie Vorhaben nach § 63 ebenfalls nicht, wenn eine §-69-Abweichung nötig wäre (§ 63 Abs. 2 Nr. 4).",
          "Der SV wird von der Bauherrschaft beauftragt – nicht hoheitlich für die Behörde. Beteiligung der Angrenzer nach § 72 Abs. 1 bleibt hoheitliche Aufgabe der Behörde. Bescheinigung nach § 69 Abs. 1a kann der SV nicht ausstellen, wenn nachbarliche Belange beeinträchtigt sein könnten – dann Zulassung durch die Behörde.",
          "Forderungen der Brandschutzdienststelle zum abwehrenden Brandschutz hat der SV zwingend zu übernehmen (§ 16 Abs. 2 SV-VO). Die Bescheinigung ist spätestens mit Anzeige des Baubeginns vorzulegen; sinnvoll bereits vor Baugenehmigung. Sie wird nicht Bestandteil der Baugenehmigung.",
          "Verstöße gegen Brandschutz oder fehlerhafte Bescheinigung führen nicht zur Rechtswidrigkeit einer bereits erteilten Baugenehmigung – die Behörde hat bei Kenntnis Maßnahmen nach § 58 Abs. 2 einzuleiten (z. B. Nutzungsuntersagung, Baustopp). Die Bauherrschaft hat Wahlrecht: SV-Bescheinigung oder Antrag bei der Behörde.",
        ],
      },
      {
        id: "abs2",
        title: "§ 69 Abs. 2 – Verfahren",
        paragraphs: [
          "Die Abweichung soll möglichst zusammen mit der Baugenehmigung beantragt werden. Die Vorschriften, von denen abgewichen werden soll, sind genau zu bezeichnen. Es ist darzulegen, dass dem Zweck der Vorschrift bei Nichterfüllung der jeweiligen Anforderung in angemessenem Maße entsprochen wird.",
          "Auch Abweichungen nach § 69 Abs. 1 Satz 3 bedürfen einer Entscheidung der Bauaufsichtsbehörde – Antrag nach § 69 Abs. 2 ist erforderlich.",
        ],
      },
      {
        id: "brandschutz",
        title: "Brandschutz – typische Abweichungsfelder",
        paragraphs: [
          "§§ 26 bis 49 BauO NRW umfassen u. a. Brandverhalten und Feuerwiderstand (§§ 26–27), Brandabschnitte und Brandwände (§§ 29–30), Decken (§ 31), Rettungswege (§§ 33, 37), Treppen und Flure (§§ 34–36), Türen, Leitungen (§ 40), Lüftung (§ 41) und Sonderbauten-Verweis (§ 50).",
          "Bei Umbauten im Bestand greifen häufig § 69 Abs. 1 Satz 2 Nr. 1 oder 2 – z. B. wenn Flurwände, Treppenraumwände oder Rettungsweglängen nicht vollständig nach heutigem Standard umgesetzt werden können, ohne den Modernisierungszweck zu vereiteln.",
          "Für die Einordnung von Flurwänden und Türen: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw), [Brandschutztüren](/ratgeber/tuerarten-brandschutz-bauo-nrw), [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw).",
        ],
        table: {
          caption: "Brandschutz – wann welcher Weg?",
          headers: ["Situation", "Weg", "Norm"],
          rows: [
            ["Abweichung von TB-Planungsregel, gleiches Schutzniveau", "§ 88, keine Behördenentscheidung", "§ 88 Abs. 1"],
            ["Abweichung von MIndBauRL", "Nur § 69", "VV TB A 2.2.2"],
            ["Bestand, Modernisierung Wohnung", "§ 69 Abs. 1 Satz 2 Nr. 1, gebunden", "§ 69 Abs. 1 Satz 2"],
            ["GK 4/5-Wohngebäude, SV-Verfahren", "§ 69 Abs. 1a Bescheinigung", "§ 69 Abs. 1a; § 68 Abs. 2 Nr. 3"],
            ["Nachbarliche Belange betroffen", "Behördliche Zulassung, § 72 Angrenzer", "§ 69 Abs. 1; § 72"],
            ["Generalklausel, kein Satz-2-Tatbestand", "§ 69 Abs. 1 Satz 1, Ermessen", "§ 69 Abs. 1 Satz 1"],
          ],
        },
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Checkliste nach MHKBD-Erlass und BauO NRW – für Antragstellung und Genehmigungspraxis.",
        ],
        table: {
          caption: "Prüfpunkte Abweichung § 69",
          headers: ["Nr.", "Prüffrage", "Ergebnis"],
          rows: [
            ["1", "Tatbestandsausschluss oder Abweichung eigener Art in der Norm?", "§ 69 entfällt"],
            ["2", "Speziellere Abweichungsregelung in der Norm?", "Diese Norm anwenden"],
            ["3", "TB-Abweichung nach § 88 möglich?", "Kein §-69-Verfahren für TB-Teil"],
            ["4", "Bestehende Anlage, Modernisierung/Energie/Denkmal?", "§ 69 Abs. 1 Satz 2 prüfen"],
            ["5", "Allgemeines Wohl, Wohnbedarf oder Härte?", "§ 69 Abs. 1 Satz 3 prüfen"],
            ["6", "Öffentliche Belange / Zweck der Norm gewahrt?", "Voraussetzung aller Tatbestände"],
            ["7", "Schutzniveau des Gebäudes mindestens erhalten?", "Bei Bestand nach Erlass"],
            ["8", "SV-Verfahren Brandschutz möglich?", "§ 69 Abs. 1a statt Behördenantrag"],
            ["9", "Nachbarliche Belange betroffen?", "Keine SV-Bescheinigung; Behörde + § 72"],
            ["10", "Brandschutzdienststelle gehört?", "Bei Lösch-/Rettungsbezug"],
            ["11", "Vorschriften genau bezeichnet und Zweck dargelegt?", "§ 69 Abs. 2 Antrag"],
            ["12", "Bescheinigung vor Baubeginn vorgelegt?", "§ 69 Abs. 1a Frist"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber erklärt § 69 BauO NRW für die Genehmigungspraxis – nicht jede Abweichung wird bewilligt, und Sonderbauten oder nachbarliche Konflikte brauchen oft die volle Behördenprüfung. Verbindlich bleiben Gesetzestext und die Entscheidung der zuständigen Bauaufsichtsbehörde.",
          "Auslegungsgrundlage in NRW: [MHKBD-Erlass § 69](https://www.mhkbd.nrw/system/files/media/document/file/20221209_erlass_zu_ss69_bereinigt.pdf) (05.12.2022). Vertiefung Bestand: [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw), Umbau: [Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz § 59 und § 69" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau und Nutzungsänderung" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/waende-notwendige-flure-bauo-nrw", label: "Wände notwendiger Flure" },
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag Unterlagen" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr-Abstimmung" },
    ],
    faq: [
      {
        question: "Wann brauche ich eine Abweichung nach § 69?",
        answer:
          "Wenn das Vorhaben von einer materiellen BauO- oder SBauVO-Anforderung abweicht und weder ein Tatbestandsausschluss noch eine eigene oder speziellere Abweichungsregelung in der Norm greift. Zuerst die Prüfungsreihenfolge des MHKBD-Erlasses durchlaufen.",
      },
      {
        question: "Was ist der Unterschied zwischen § 69 Abs. 1 Satz 2 und Satz 3?",
        answer:
          "Satz 2 gilt nur bei bestehenden Anlagen (Modernisierung, Energie, Denkmal) und bindet die Behörde zur Zulassung. Satz 3 (allgemeines Wohl, dringender Wohnbedarf, Härte) ist Ermessen – auch beim Neubau möglich.",
      },
      {
        question: "Kann ein Sachverständiger die Abweichung bescheinigen?",
        answer:
          "Nach § 69 Abs. 1a ja, wenn der staatlich anerkannte SV für Brandschutz prüft und sowohl Brandschutz als auch Abweichungsvoraussetzungen bescheinigt – bei GK 4/5-Wohngebäuden u. a. Nicht bei beeinträchtigten nachbarlichen Belangen.",
      },
      {
        question: "Muss die Brandschutzdienststelle gehört werden?",
        answer:
          "Regelmäßig ja, wenn Löscharbeiten oder Rettung von Menschen und Tieren berührt werden – unabhängig davon, ob die Behörde oder ein SV prüft (MHKBD-Erlass).",
      },
      {
        question: "Gilt § 69 für genehmigungsfreie Vorhaben?",
        answer:
          "Verfahrensfreie Vorhaben nach § 62 fallen nicht unter § 69 Abs. 1a. Braucht das Vorhaben eine §-69-Abweichung, ist es nach § 63 Abs. 2 Nr. 4 nicht mehr genehmigungsfrei.",
      },
      {
        question: "Was passiert bei fehlerhafter SV-Bescheinigung?",
        answer:
          "Die Baugenehmigung wird dadurch nicht rückwirkend rechtswidrig. Bei Kenntnis der Behörde sind Maßnahmen nach § 58 Abs. 2 möglich (z. B. Nutzungsuntersagung, Baustopp).",
      },
      {
        question: "Wie unterscheidet sich § 69 von § 59?",
        answer:
          "§ 59 regelt Weiterbetrieb und Nachrüstung bei rechtmäßig bestehenden Anlagen ohne generelle Abweichungszulassung. § 69 eröffnet einen eigenen Tatbestand, von Vorschriften abzuweichen, wenn die gesetzlichen Voraussetzungen erfüllt sind.",
      },
    ],
  },
];
