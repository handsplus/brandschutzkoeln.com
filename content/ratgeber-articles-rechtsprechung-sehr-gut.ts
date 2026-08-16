/**
 * Juli 2026 – Rechtsprechung Brandschutz: nur sehr gute SEO-Artikel (≥450 Wörter).
 * Quellen: Ausbarbeitungen Brandwände/Nachbarschutz, Feuerwehrgerätehaus, BHKG;
 * Überblick 00_Rechtsprechung_Brandschutz_Ueberblick.html – Thema zuerst, Urteil Rechtskern.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_RECHTSPRECHUNG_SEHR_GUT: RatgeberArticle[] = [
  {
    slug: "brandwand-glasbaustein-fenster-bauo-nrw",
    title: "Glasbaustein oder Fenster in der Brandwand: was das Gesetz unterscheidet",
    excerpt:
      "Lichtdurchlässig heißt nicht öffenbar: Glasbausteine können in Brandwänden privilegiert sein – Kunststofffenster mit Dreh-Kipp-Funktion sind es nicht. Was Eigentümer und Planer vor dem Umbau prüfen müssen.",
    metaTitle: "Brandwand Glasbaustein vs Fenster NRW | H&S+",
    metaDescription:
      "Glasbaustein Brandwand NRW: Privileg lichtdurchlässiger nichtbrennbarer Teilflächen vs. öffenbares Fenster – § 30 BauO, Abweichung, Beseitigung.",
    keywords: [
      "Glasbaustein Brandwand",
      "Fenster Brandwand unzulässig",
      "Brandwand Öffnung Glasbaustein",
      "§ 30 BauO NRW Öffnungen",
      "lichtdurchlässige Brandwand",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Belichtung ja – Öffnung nein",
        paragraphs: [
          "Viele Eigentümer wollen Licht an der Grenzwand und tauschen Glasbausteine gegen moderne Kunststofffenster. Das Ergebnis wirkt wie ein üblicher Fenstertausch – brandschutzrechtlich ist es oft etwas anderes: aus einer privilegierten, nicht öffenbaren Teilfläche wird eine Öffnung.",
          "Brandwände sollen die Brandausbreitung auf Nachbargebäude verhindern und unter mechanischer Beanspruchung standsicher bleiben. Was geöffnet werden kann, durchbricht genau diese Funktion. Die gesetzliche Privilegierung gilt für lichtdurchlässige, nicht brennbare Baustoffe als Teilfläche – nicht für Dreh-Kipp-Fenster.",
          "Grenzfall ja: Bestehende Glasbausteinfläche in der Abschlusswand, nicht öffenbar, nichtbrennbar – typisch privilegierte Teilfläche nach Brandwand-Systematik. Grenzfall nein: Austausch gegen öffenbare Kunststofffenster ohne Genehmigung und ohne Abweichung.",
        ],
      },
      {
        id: "rechtskern",
        title: "Was Gerichte dazu sagen",
        paragraphs: [
          "In einem verwaltungsgerichtlichen Brandwand-Fall (VG Mainz 2023, Veröffentlichungsfassung) stand der Austausch von Glasbausteinen durch öffenbare Fenster im Zentrum. Das Gericht stellt klar: Glasbausteine sind nach der Brandwand-Norm privilegierte Teilflächen; zu öffnende Kunststofffenster sind es nicht.",
          "NRW-Übertragung über § 30 BauO NRW: An Gebäudeabschlusswänden zur Nachbargrenze (typisch bis 2,50 m, sofern kein öffentlich-rechtlich gesicherter 5-m-Abstand zum Nachbargebäude) gelten strenge Regeln zu Öffnungen. Bei Gebäudeklassen 1–3 kann statt einer klassischen Brandwand eine hochfeuerhemmende raumabschließende Wand zulässig sein – das Öffnungsverbot greift trotzdem.",
          "Vertiefung Einschreiten: [Beseitigungsverfügung Brandschutz](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw). Systematik Abweichung: [§ 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
        ],
      },
      {
        id: "bauo",
        title: "§ 30 BauO NRW – praktische Prüfung",
        paragraphs: [
          "Zuerst klären: Ist die Wand Brandwand bzw. gleichgestellte Abschlusswand? Steht sie auf oder nahe der Grenze? Ist 5 m zum Nachbargebäude durch Baulast oder vergleichbar gesichert?",
          "Dann: Welche Lichtflächen gibt es – Glasbaustein / nichtbrennbar und geschlossen, oder öffenbares Fenster? Spezielle gesetzliche Ausnahmen (z. B. Abschlüsse mit definierter Feuerwiderstandsfähigkeit in ausgedehnten Gebäuden) nur prüfen, wenn der Tatbestand wirklich passt – nicht als Wunschdenken.",
        ],
        table: {
          caption: "Licht in der Brandwand – Einordnung",
          headers: ["Element", "Typisch", "Folge"],
          rows: [
            ["Glasbaustein / nichtbrennbar, nicht öffenbar", "Privilegierte Teilfläche", "Oft zulässig, wenn Norm erfüllt"],
            ["Öffenbares Fenster (Kunststoff/Holz)", "Öffnung", "Grundsätzlich unzulässig"],
            ["Feuerbeständiger Abschluss mit Nachweis", "Spezialtatbestand", "Nur wenn Gesetz ausdrücklich erlaubt"],
            ["GK 1–3 hochfeuerhemmende Abschlusswand", "Erleichterung Feuerwiderstand", "Öffnungsverbot bleibt"],
          ],
        },
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung zum normalen Fenstertausch",
        paragraphs: [
          "Der genehmigungsfreie Fenstertausch betrifft vergleichbare Fenster in bestehender Öffnung – nicht das Umnutzen einer Brandwand-Teilfläche. Details: [Fenstertausch vs. Nutzungsänderung](/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw).",
          "Nicht verwechseln: innere Brandschutztüren (T30/T90) im Gebäude vs. Öffnungen in der Gebäudeabschluss-Brandwand zur Grenze.",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweis vor Umbau oder Legalisierung",
        paragraphs: [
          "Pläne mit Brandwand, Öffnungsmaßen, Baustoff der Lichtfläche, Gebäudeklasse, Abstand Nachbargebäude. Bei gewünschter Ausnahme: zuerst gesetzliche Öffnungstatbestände der Brandwand-Norm, dann erst § 69 mit SV-Bescheinigung.",
          "Nachbarzustimmung allein reicht nicht – [welcher Nachbar zählt](/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw).",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fehler auf der Baustelle",
        paragraphs: [
          "Handwerker bestellt „Fenster wie bisher“, meint aber Glasbausteinfläche. Energetische Sanierung ersetzt Lichtflächen ohne Brandschutzprüfung. Nachträglich wird argumentiert, „Licht muss sein“ – das ersetzt keine Norm.",
          "Rückbau ist oft zumutbar (wieder Glasbausteine) – deshalb halten Gerichte Beseitigungsverfügungen für verhältnismäßig.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Glasbaustein / Fenster in der Brandwand",
          headers: ["Nr.", "Frage", "Wenn problematisch"],
          rows: [
            ["1", "Abschlusswand an der Grenze / bis 2,50 m?", "§ 30 prüfen"],
            ["2", "5 m zum Nachbargebäude öffentlich-rechtlich gesichert?", "Sonst Brandwandpflicht"],
            ["3", "Lichtfläche öffenbar?", "Dann Öffnung, nicht Privileg"],
            ["4", "Genehmigung oder wirksame Abweichung?", "Sonst Illegalität"],
            ["5", "Rückbau auf Glasbaustein möglich?", "Beseitigung oft verhältnismäßig"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Das Ausgangsurteil wendet rheinland-pfälzisches Landesrecht an; die NRW-Arbeit läuft über Parallelität zu § 30, § 62, § 69 und § 82 BauO NRW. Kein Ersatz für die Prüfung Ihres konkreten Wandaufbaus und der Genehmigungslage.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw", label: "Fenstertausch vs. NU" },
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigungsverfügung" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/ratgeber/brandabschnitte-bauo-sbauvo-nrw", label: "Brandabschnitte" },
      { href: "/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw", label: "Welcher Nachbar?" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
    ],
    faq: [
      {
        question: "Darf ich Glasbausteine in der Brandwand haben?",
        answer:
          "Oft ja, wenn es sich um privilegierte lichtdurchlässige, nichtbrennbare Teilflächen nach der Brandwand-Norm handelt und sie nicht öffenbar sind. Maßgeblich ist der konkrete Normtext und die Einordnung der Wand.",
      },
      {
        question: "Warum sind Kunststofffenster problematisch?",
        answer:
          "Weil sie geöffnet werden können – damit sind sie Öffnungen. Die Privilegierung der Brandwand-Teilflächen zielt nicht auf öffenbare Fenster.",
      },
      {
        question: "Reicht eine feuerhemmende Verglasung?",
        answer:
          "Nur wenn ein gesetzlicher Spezialtatbestand oder eine wirksame Abweichung das trägt. Pauschal „Glas mit F-Klasse“ ersetzt nicht das Öffnungsverbot.",
      },
      {
        question: "Gilt das auch bei GK 2 und 3?",
        answer:
          "Ja. Die Erleichterung hochfeuerhemmend statt Brandwand senkt den Feuerwiderstand – nicht das Öffnungsregime.",
      },
      {
        question: "Was tun bei bereits eingebauten Fenstern?",
        answer:
          "Genehmigungslage und Abweichung prüfen; sonst droht Beseitigung. Früh fachlich und behördlich klären.",
      },
      {
        question: "Ist das 1:1 NRW-Rechtsprechung?",
        answer:
          "Der Leitfall ist RP; NRW-Praxis arbeitet mit § 30 und verwandten Normen sowie OVG-NRW-Linien zur passiven Duldung. Einzelfall und Behörde bleiben maßgeblich.",
      },
    ],
  },
  {
    slug: "brandwand-fenstertausch-nutzungsaenderung-bauo-nrw",
    title: "Fenstertausch an der Brandwand: wann daraus eine Nutzungsänderung wird",
    excerpt:
      "Verfahrensfreier Fenstertausch setzt vergleichbare Fenster voraus – nicht den Austausch privilegierter Brandwand-Teilflächen. Wann Sie einen Bauantrag brauchen und was ohne Genehmigung droht.",
    metaTitle: "Fenstertausch Brandwand Nutzungsänderung | H&S+",
    metaDescription:
      "Fenstertausch Brandwand NRW: § 62 verfahrensfrei vs. genehmigungspflichtige Nutzungsänderung der Abschlusswand – Glasbaustein, Fenster, Bauantrag.",
    keywords: [
      "Fenstertausch Brandwand",
      "Nutzungsänderung Brandwand",
      "verfahrensfreier Fenstertausch",
      "§ 62 BauO NRW Fenster",
      "Genehmigung Brandwand Öffnung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Zwei verschiedene Vorhaben – ein Wort „Fenster“",
        paragraphs: [
          "Im Alltag heißt alles „Fenstertausch“. Bauordnungsrechtlich trennt sich der Fall: (A) Austausch eines Fensters in einer bereits zulässigen Fensteröffnung gegen ein vergleichbares Element – oft verfahrensfrei. (B) Austausch einer Glasbaustein- oder anderen Brandwand-Teilfläche gegen ein öffenbares Fenster – das stellt neue Zulässigkeitsfragen und ist typisch genehmigungspflichtige Änderung der Brandwand.",
          "Ohne Bauantrag entsteht formelle Illegalität parallel zur materiellen (Öffnungsverbot). Gerichte behandeln das nicht als Instandsetzung.",
        ],
      },
      {
        id: "rechtskern",
        title: "Rechtsprechung: keine Vergleichbarkeit",
        paragraphs: [
          "Im Brandwand-Fall VG Mainz 2023: Genehmigungsfreiheit für Fenstertausch greift nicht, wenn Glasbausteine (privilegierte Teilflächen) durch öffenbare Kunststofffenster ersetzt werden. Es stellen sich gänzlich neue Zulässigkeitsfragen; Belichtung allein macht die Bauelemente nicht austauschbar.",
          "NRW: Verfahrensfreie Vorhaben in § 62 BauO NRW. Der bloße Austausch von Fenstern in bestehender Öffnung ist typischerweise verfahrensfrei – nicht das Aufbrechen oder Umnutzen einer Brandwand bzw. hochfeuerhemmenden Gebäudeabschlusswand.",
        ],
      },
      {
        id: "ablauf",
        title: "Richtiger Ablauf vor dem Handwerkerauftrag",
        list: [
          "Wandtyp klären: Brandwand / Abschlusswand / normale Außenwand?",
          "Bestand: Was war genehmigt – Fensteröffnung oder Glasbaustein?",
          "Geplantes Element: öffenbar? Baustoff? Größe?",
          "Bei Brandwand-Konflikt: Bauantrag oder Abweichung prüfen – nicht „schwarz“ tauschen",
          "Genehmigung / Freistellung abwarten, dann ausführen",
        ],
        paragraphs: [
          "Wer umgekehrt baut und hofft, die Behörde schweige, riskiert [Beseitigung](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw) und [keine Verwirkung](/ratgeber/duldung-verwirkung-brandschutz-bauaufsicht-nrw).",
        ],
      },
      {
        id: "abgrenzung",
        title: "Grenzfälle",
        paragraphs: [
          "Grenzfall ja: Fenster in bestehender, genehmigter Fensteröffnung einer normalen Außenwand (keine Brandwand) – klassischer Fenstertausch. Grenzfall nein: Glasbausteinfläche in der Grenzwand wird zu Dreh-Kipp-Fenstern ohne Antrag.",
          "Grenzfall ja: Rückbau illegaler Fenster auf Glasbausteine zur Wiederherstellung. Grenzfall nein: „Wir lassen die Fenster und beantragen später irgendwann“.",
        ],
      },
      {
        id: "nachweis",
        title: "Was in den Bauantrag gehört",
        paragraphs: [
          "Bestands- und Neuplan der Wand, Brandschutz-Eintrag, Gebäudeklasse, Abstände, ggf. Abweichungsantrag mit SV-Bescheinigung. Nachbarbeteiligung nicht nur der unmittelbaren Grenze – [Nachbarschutz](/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw).",
          "Schnittstelle: [Umbau Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz), [Bauantrag Unterlagen](/ratgeber/bauantrag-brandschutz-unterlagen-koeln).",
        ],
      },
      {
        id: "praxis",
        title: "Praxis aus dem Verfahren",
        paragraphs: [
          "Typisch: Energetische Sanierung oder Wohnwertsteigerung, Handwerkerangebot „Fenster erneuern“, kein Architekt mit Brandschutzblick. Die Bauaufsicht wird später über Nachbarbeschwerde oder Begehung aktiv.",
          "Selbst wenn die Behörde früher eine Verfügung zurücknimmt (z. B. falsche Feuerwiderstandsklasse), bedeutet das nicht, dass Öffnungen erlaubt wären – oft bleibt die Beseitigungspflicht dem Grunde nach bestehen.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog vor Auftrag",
        paragraphs: [],
        table: {
          caption: "Fenstertausch oder Nutzungsänderung?",
          headers: ["Nr.", "Frage", "Folge"],
          rows: [
            ["1", "Ist die Wand Brandwand/Abschlusswand?", "Ja → Sonderprüfung"],
            ["2", "War dort schon ein Fenster oder Glasbaustein?", "Unterschied entscheidet"],
            ["3", "Wird öffenbar eingebaut?", "Oft genehmigungspflichtig"],
            ["4", "Liegt §-62-Privileg wirklich vor?", "Sonst Bauantrag"],
            ["5", "Abweichung nötig?", "§ 69 + SV, nicht mündlich"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Verfahrensfreiheit ist einzelfallabhängig und landesrechtlich konkret. Dieser Ratgeber ersetzt keine Prüfung Ihres Bauvorhabens durch Planer und Behörde.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw", label: "Glasbaustein vs. Fenster" },
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigung" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "§ 69" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Nutzungsänderung" },
      { href: "/ratgeber/duldung-verwirkung-brandschutz-bauaufsicht-nrw", label: "Duldung / Verwirkung" },
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag" },
    ],
    faq: [
      {
        question: "Ist jeder Fenstertausch genehmigungsfrei?",
        answer:
          "Nein. Das Privileg setzt typischerweise den Austausch vergleichbarer Fenster in bestehender Öffnung voraus – nicht die Umnutzung einer Brandwand-Teilfläche.",
      },
      {
        question: "Was ist eine Nutzungsänderung der Brandwand?",
        answer:
          "Eine Änderung, die neue Zulässigkeitsfragen stellt – etwa öffenbare Fenster statt privilegierter Glasbausteine. Dann ist ein Genehmigungsverfahren nötig.",
      },
      {
        question: "Reicht eine Bauanzeige?",
        answer:
          "Nur wenn das Landesrecht das für Ihren Fall vorsieht. Brandwand-Öffnungen sind selten „Anzeige reicht“ – im Zweifel Bauantrag und Brandschutz klären.",
      },
      {
        question: "Haftet der Handwerker mit?",
        answer:
          "Bauherr und Eigentümer bleiben bauordnungsrechtlich in der Pflicht. Zivilrechtlich können weitere Ansprüche bestehen – getrennt vom behördlichen Verfahren.",
      },
      {
        question: "Kann ich nachträglich genehmigen lassen?",
        answer:
          "Manchmal über Legalisierung und Abweichung – riskanter und teurer als vorher. Ohne Zulassung bleibt der Zustand angreifbar.",
      },
      {
        question: "Wo steht das in der BauO NRW?",
        answer:
          "Verfahrensfreiheit § 62, Brandwände § 30, Abweichung § 69, Einschreiten § 82 – jeweils im konkreten Wortlaut und mit den Ausnahmen prüfen.",
      },
    ],
  },
  {
    slug: "duldung-verwirkung-brandschutz-bauaufsicht-nrw",
    title: "Zehn Jahre geduldet – trotzdem Beseitigung? Verwirkung im Brandschutz",
    excerpt:
      "Passive Untätigkeit der Bauaufsicht schafft kein Vertrauen. Ordnungsrechtliche Eingriffsbefugnisse verjähren nicht und werden nicht verwirkt – was Eigentümer wissen müssen.",
    metaTitle: "Duldung Verwirkung Brandschutz Bauaufsicht | H&S+",
    metaDescription:
      "Verwirkung Brandschutz NRW: passive Duldung, keine Verjährung, mündliche Absprache unwirksam – Bestandsschutz vs. Illegalität, § 82 BauO.",
    keywords: [
      "Verwirkung Bauaufsicht Brandschutz",
      "Duldung Brandschutz Beseitigung",
      "mündliche Zusage Bauamt",
      "Bestandsschutz illegale Öffnung",
      "OVG NRW passive Duldung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "„Die Behörde hat jahrelang nichts gesagt“",
        paragraphs: [
          "Eigentümer argumentieren oft: Die Öffnung steht seit vielen Jahren, die Bauaufsicht kannte sie, also sei Vertrauen entstanden. Gerichte und die NRW-Linie zur passiven Duldung sehen das anders: Gefahrenabwehr lässt sich nicht aussitzen.",
          "Das ist die harte Grenze zu [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw): Bestandsschutz schützt rechtmäßig errichtete Anlagen – nicht formell und materiell illegale Zustände. Wer auf Schweigen spekuliert, riskiert trotzdem [Beseitigung](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw).",
        ],
      },
      {
        id: "rechtskern",
        title: "Was die Rechtsprechung festhält",
        paragraphs: [
          "Im Brandwand-Fall VG Mainz 2023 (mit ausdrücklichem Bezug auf OVG NRW 10 B 617/09): Ordnungsrechtliche Eingriffsbefugnisse der Gefahrenabwehr können nicht verwirkt werden und unterliegen nicht der Verjährung. Lange Untätigkeit ist nur passive Duldung ohne Gestattungswirkung – die Behörde darf eine als rechtswidrig erkannte Praxis beenden.",
          "Mündliche „Absprache“ mit dem Sachbearbeiter: ohne schriftliche Zusicherung (§ 38 VwVfG) unwirksam. Fehlt ein Aktenvermerk, bleibt der Einwand schwach. Eigenmächtiger Einbau vor der behaupteten Zusage begründet kein schutzwürdiges Vertrauen – auch nicht, wenn später nur ein Teil der Öffnungen „besprochen“ worden sein soll.",
        ],
      },
      {
        id: "tabelle",
        title: "Einwand und Antwort",
        paragraphs: [],
        table: {
          caption: "Häufige Eigentümer-Argumente",
          headers: ["Einwand", "Typische Antwort"],
          rows: [
            ["Verwirkung nach 9–11 Jahren", "Eingriffsbefugnisse der Gefahrenabwehr nicht verwirkbar"],
            ["Verjährung der Beseitigung", "Bauordnungsrechtliche Eingriffe verjähren nicht"],
            ["Mündliche Zusage 2009", "Schriftform der Zusicherung; sonst unwirksam"],
            ["Lange Untätigkeit = Erlaubnis", "Nur passive Duldung, keine Gestattung"],
            ["Hohe Umbaukosten / Vertrauen", "PVC-Fenster oft zumutbar rückbaubar; Disposition prüfen"],
          ],
        },
      },
      {
        id: "abgrenzung",
        title: "Grenzfälle",
        paragraphs: [
          "Grenzfall ja: Rechtmäßig genehmigte Öffnung nach damaligem Recht, keine Nutzungsänderung – dann Bestandsschutz-/Vertrauensschutz-Prüfung anders. Grenzfall nein: Schwarz eingebaute Brandwandfenster, nur weil niemand eingeschritten ist.",
          "Aktive Duldung (klare behördliche Gestattung, Vermögensdisposition) ist etwas anderes als Schweigen – und selbst dann eng. Nicht mit mündlichem Flurgespräch verwechseln.",
        ],
      },
      {
        id: "praxis",
        title: "Was Sie tun sollten",
        paragraphs: [
          "Genehmigungsakte beschaffen, Ist-Zustand dokumentieren, Legalität prüfen. Bei Illegalität: Rückbau oder Abweichungs-/Genehmigungsverfahren – nicht auf Verwirkung spekulieren.",
          "Kauf von Bestand: Due Diligence auf Brandwand und Öffnungen. Verkäuferaussage „nie beanstandet“ ist kein Nachweis.",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweis-Logik",
        list: [
          "Alte Genehmigungen und Pläne",
          "Schriftliche Zusicherungen (falls überhaupt)",
          "Zeitpunkt Einbau vs. Behördenkontakt",
          "Ob Rückbau zumutbar ist",
        ],
        paragraphs: [
          "Parallel: [Beseitigungsverfügung](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw), [§ 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Vertrauensschutz und Verwirkung sind einzelfallabhängig. Dieser Ratgeber fasst die Linie zu passiver Duldung im Brandschutz zusammen – ohne Prozessgarantie im konkreten Verwaltungsstreit.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz" },
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigung" },
      { href: "/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw", label: "Fenstertausch" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "§ 69" },
      { href: "/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw", label: "Glasbaustein" },
      { href: "/ratgeber/bauaufsicht-unterlagen-koeln", label: "Bauakte" },
    ],
    faq: [
      {
        question: "Kann die Bauaufsicht nach 10 Jahren noch einschreiten?",
        answer:
          "Ja. Ordnungsrechtliche Eingriffsbefugnisse der Gefahrenabwehr werden nach der hier maßgeblichen Linie nicht verwirkt und verjähren nicht.",
      },
      {
        question: "Reicht eine mündliche Zusage des Sachbearbeiters?",
        answer:
          "In der Regel nein. Zusicherungen bedürfen der Schriftform; ohne Akte und Schriftstück bleibt der Einwand schwach.",
      },
      {
        question: "Was ist passive Duldung?",
        answer:
          "Schweigen oder Nicht-Einschreiten ohne Gestattungswirkung. Die Behörde darf den rechtswidrigen Zustand später beenden.",
      },
      {
        question: "Hilft Bestandsschutz § 59 BauO NRW?",
        answer:
          "Nur bei rechtmäßigem Bestand. Illegale Öffnungen fallen nicht darunter.",
      },
      {
        question: "Ist Rückbau immer zumutbar?",
        answer:
          "Bei Fenstern oft ja (z. B. wieder Glasbausteine). Das stärkt die Verhältnismäßigkeit der Beseitigung.",
      },
      {
        question: "Was bei Immobilienkauf?",
        answer:
          "Brandwand und Öffnungen in der Due Diligence prüfen – „nie beanstandet“ ersetzt keine Genehmigung.",
      },
    ],
  },
  {
    slug: "nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw",
    title: "Nachbarzustimmung Brandwand: warum der Grenznachbar oft nicht reicht",
    excerpt:
      "§ 69 verlangt die Würdigung aller öffentlich-rechtlich geschützten Nachbarbelange – auch des Gebäudes hinter der Zufahrt. Was das für Abweichungen und Baulasten heißt.",
    metaTitle: "Nachbarschutz Brandwand Abweichung NRW | H&S+",
    metaDescription:
      "Nachbarzustimmung Brandwand NRW: welcher Nachbar zählt, 5-m-Abstand, Baulast, § 69 – warum eine Unterschrift an der Grenze oft nicht genügt.",
    keywords: [
      "Nachbarzustimmung Brandwand",
      "Nachbarschutz Abweichung Brandschutz",
      "Baulast Brandwand 5 Meter",
      "§ 69 nachbarliche Belange",
      "übernächster Nachbar Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Eine Unterschrift – und trotzdem abgelehnt",
        paragraphs: [
          "Eigentümer holen die Zustimmung des unmittelbaren Grenznachbarn ein, manchmal sogar ein Baulastangebot – und wundern sich, wenn die Abweichung scheitert. Brandschutz schützt nicht nur den direkten Angrenzer, sondern die öffentlich-rechtlich geschützten Belange weiterer potenziell betroffener Gebäude.",
          "Das ist der Unterschied zwischen Nachbarfrieden und bauordnungsrechtlicher Abweichung.",
        ],
      },
      {
        id: "rechtskern",
        title: "Rechtsprechung: nicht nur der Angrenzer",
        paragraphs: [
          "VG Mainz 2023: Der unmittelbare Nachbar hatte zugestimmt und eine Baulast angeboten. Das Gericht lässt das nicht genügen – betroffen sei auch der Eigentümer des nächsten Gebäudes, das im Brandfall primär betroffen wäre und nicht zugestimmt habe. § 69 beziehe sich gerade nicht nur auf die Interessen der unmittelbaren Angrenzer.",
          "Der Gesetzgeber hält die Brandwand nur für verzichtbar, wenn 5 m Abstand zu bestehenden oder zulässigen Nachbargebäuden öffentlich-rechtlich gesichert ist. Eine Baulast „nur im Bereich der Fenster“ ersetzt das nicht.",
          "NRW: § 69 Abs. 1 BauO NRW – Würdigung öffentlich-rechtlich geschützter nachbarlicher Belange und der öffentlichen Belange des § 3. Privatrechtliche Einverständniserklärungen binden die Bauaufsicht nicht.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Grenzfälle",
        paragraphs: [
          "Grenzfall ja: Alle brandbetroffenen Nachbarn haben zugestimmt, 5-m-Abstand ist öffentlich-rechtlich gesichert, SV-Bescheinigung und Zweckerfüllung liegen vor. Grenzfall nein: Nur Grenznachbar unterschreibt, das Gebäude in 4 m hinter der Zufahrt schweigt.",
          "Nicht verwechseln: zivilrechtliche Nachbarvereinbarung vs. öffentlich-rechtliche Abweichungszulassung.",
        ],
      },
      {
        id: "baulast",
        title: "Baulast richtig denken",
        paragraphs: [
          "Eine Abstands-Baulast kann die Brandwandpflicht nur ersetzen, wenn sie den gesetzlichen Abstand zum Nachbargebäude tatsächlich sichert. Teillösungen „vor den Fenstern“ oder rein privatrechtliche Absprachen ohne Eintragung reichen nicht.",
          "Parallel: materielle Öffnungsfrage – [Glasbaustein vs. Fenster](/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw).",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweis im Abweichungsverfahren",
        list: [
          "Lageplan mit allen Gebäuden im relevanten Abstand",
          "Liste der brandbetroffenen Nachbarn (nicht nur Grenze)",
          "Schriftliche Zustimmungen / Baulaststand",
          "SV-Bescheinigung nach § 69 Abs. 1a wo einschlägig",
          "Öffentliche Belange Brandschutz (§ 3) begründet",
        ],
        paragraphs: [
          "Ohne diese Akte bleibt § 69 restriktiv – siehe [Abweichung § 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
        ],
      },
      {
        id: "praxis",
        title: "Praxis in dichter Bebauung",
        paragraphs: [
          "In Reihenhaus- und Blockrandlagen sind mehrere Gebäude im Brandfall betroffen. Wer nur den direkten Nachbarn „mitnimmt“, unterschätzt die Prüfung. Dichte Bebauung verstärkt zudem das öffentliche Interesse am Brandschutz.",
          "Bei Beseitigungsverfahren hilft Nachbarzustimmung allein ebenfalls nicht – [Beseitigung](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog Nachbarschutz",
        paragraphs: [],
        table: {
          caption: "Welcher Nachbar zählt?",
          headers: ["Nr.", "Frage", "Risiko wenn nein"],
          rows: [
            ["1", "Alle brandbetroffenen Gebäude identifiziert?", "Unvollständige Zustimmung"],
            ["2", "5 m Abstand öffentlich-rechtlich gesichert?", "Brandwand bleibt Pflicht"],
            ["3", "Baulast deckt den gesetzlichen Abstand?", "Teillast unzureichend"],
            ["4", "SV-Bescheinigung vorhanden?", "Abweichung formell schwach"],
            ["5", "Öffentliche Belange § 3 gewürdigt?", "Ablehnung trotz Nachbar-OK"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Nachbarschutz im Zivilrecht (BGB) und im Bauordnungsrecht laufen parallel. Dieser Ratgeber behandelt die öffentlich-rechtliche Abweichungs- und Brandwandlogik.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "§ 69 Hub" },
      { href: "/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw", label: "Glasbaustein" },
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigung" },
      { href: "/ratgeber/duldung-verwirkung-brandschutz-bauaufsicht-nrw", label: "Duldung" },
      { href: "/ratgeber/brandabschnitte-bauo-sbauvo-nrw", label: "Brandabschnitte" },
      { href: "/ratgeber/feuerwehrgeraetehaus-wohngebiet-baunvo-brandschutz", label: "FW-Gerätehaus WA" },
    ],
    faq: [
      {
        question: "Reicht die Zustimmung des direkten Nachbarn?",
        answer:
          "Oft nicht. Öffentlich-rechtlich geschützte Belange weiterer brandbetroffener Gebäude und öffentliche Belange des Brandschutzes müssen mitgewürdigt werden.",
      },
      {
        question: "Was bringt eine Baulast?",
        answer:
          "Nur wenn sie den gesetzlich geforderten Abstand zum Nachbargebäude tatsächlich sichert – nicht als symbolische Teillösung.",
      },
      {
        question: "Kann die Bauaufsicht trotz aller Zustimmungen ablehnen?",
        answer:
          "Ja, wenn öffentliche Belange oder formelle Voraussetzungen (z. B. SV-Bescheinigung) entgegenstehen.",
      },
      {
        question: "Wer ist „brandbetroffen“?",
        answer:
          "Gebäude, die bei Versagen der Brandwand im Brandfall primär gefährdet wären – Lageplan und Abstände entscheiden, nicht nur die Grundstücksgrenze.",
      },
      {
        question: "Privater Kaufvertrag mit Nachbar-OK?",
        answer:
          "Bindet die Parteien privatrechtlich – nicht die Bauaufsicht bei § 69.",
      },
      {
        question: "Gilt das nur für Brandwände?",
        answer:
          "Der Leitfall betrifft Brandwandöffnungen; die Logik „nicht nur der Angrenzer“ ist für nachbarschützende Brandschutzvorschriften allgemein relevant.",
      },
    ],
  },
  {
    slug: "feuerwehrgeraetehaus-wohngebiet-baunvo-brandschutz",
    title: "Feuerwehrgerätehaus im Wohngebiet: BauNVO, Nachbar und Brandschutz",
    excerpt:
      "Das BVerwG stellt klar: Ein Feuerwehrgerätehaus ist Anlage für Verwaltungen und im allgemeinen Wohngebiet gebietsverträglich, wenn es dem Brandschutz der Umgebung dient. Was Nachbarn und Kommunen daraus ableiten.",
    metaTitle: "Feuerwehrgerätehaus Wohngebiet BauNVO | H&S+",
    metaDescription:
      "Feuerwehrgerätehaus im WA: BauNVO Anlage für Verwaltungen, Gebietsverträglichkeit, Nachbarrechte, BHKG – Leitsätze BVerwG und NRW-Praxis.",
    keywords: [
      "Feuerwehrgerätehaus Wohngebiet",
      "Feuerwehrhaus BauNVO",
      "Anlage für Verwaltungen Feuerwehr",
      "Nachbarklage Feuerwehrgerätehaus",
      "Gebietsverträglichkeit Feuerwehr",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Hilfsfrist braucht Nähe – Nachbarn fürchten Lärm",
        paragraphs: [
          "Freiwillige Feuerwehren brauchen Standorte in der Nähe der zu schützenden Bebauung. Gleichzeitig wehren sich Nachbarn gegen Sirenen, Ausrückverkehr und „Gewerbe im Wohngebiet“. Das ist ein planungsrechtlicher Konflikt mit unmittelbarem Brandschutzbezug.",
          "Für Kommunen und Planer: Zulässigkeit im Baugebiet klären, bevor der Nachbarprozess die Zeitschiene sprengt.",
        ],
      },
      {
        id: "rechtskern",
        title: "Leitsätze des BVerwG (4 C 6.20)",
        paragraphs: [
          "Das Bundesverwaltungsgericht (Urteil vom 29.03.2022, NRW-Sachverhalt, Vorinstanz OVG Münster) hält fest: (1) Ein Feuerwehrgerätehaus ist eine Anlage für Verwaltungen im Sinne der BauNVO. (2) Dient es nach Größe und Ausstattung maßgeblich auch dem effektiven Brandschutz in der näheren Umgebung, ist es im allgemeinen Wohngebiet gebietsverträglich. (3) Ein Grundstücksnachbar hat keinen Anspruch auf eine ermessensfehlerfreie Entscheidung über die Erteilung einer Ausnahme in dem entschiedenen Kontext.",
          "BHKG-Bezug: Leistungsfähige Feuerwehren und örtlicher Brandschutz (§§ 2, 3 BHKG NRW) setzen räumliche Nähe voraus – das stützt die Gebietsverträglichkeit, ersetzt aber nicht Immissionsschutz und Rücksichtnahme.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Grenzfälle",
        paragraphs: [
          "Grenzfall ja: Ortsübliches Gerätehaus der Freiwilligen Feuerwehr, Ausrückbereich deckt das Wohngebiet, Dimensionierung passt. Grenzfall nein: Überdimensionierter Standort mit überörtlicher Ausbildung, Werkstatt und Logistik ohne Bezug zum WA – dann andere Gebietskategorie prüfen.",
          "BauNVO-Zulässigkeit ≠ bauordnungsrechtlicher Brandschutz des Gebäudes selbst (BauO/SBauVO) – beides parallel.",
        ],
      },
      {
        id: "nachbar",
        title: "Was Nachbarn trotzdem rügen können",
        paragraphs: [
          "Kein Anspruch auf fehlerfreie Ausnahme-Ermessensentscheidung heißt nicht: keine Rechte. Gebietscharakter, Rücksichtnahme und Immissionen (Ausrücken, Sondersignal, TA Lärm) bleiben prüfbar – getrennt vom Leitsatz zur Verwaltungsanlage.",
          "Nachbarschutz bei Brandwänden ist ein anderes Thema: [Nachbarschutz Brandwand](/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw).",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweise für Kommune und Genehmigung",
        list: [
          "Einordnung BauNVO / Bebauungsplan / § 34 BauGB",
          "Nutzungsbeschreibung: Fahrzeuge, Ausrückbereich, Personal",
          "Begründung Gebietsverträglichkeit / Brandschutz der Umgebung",
          "Schallschutz / Betriebszeiten wo gefordert",
          "Bauordnungsrechtlicher Brandschutznachweis des Gebäudes",
        ],
        paragraphs: [
          "Schnittstelle Zufahrt und Löschwasser: [Feuerwehrzufahrten](/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw), [BHKG Gemeinde](/ratgeber/bhkg-hilfsfristen-gemeinde-klagebefugnis-nrw).",
        ],
      },
      {
        id: "praxis",
        title: "Praxis",
        paragraphs: [
          "Früh Bürgerinformation und schalltechnische Klärung – parallel zur BauNVO-Argumentation. Wer nur „Brandschutz braucht Nähe“ sagt und Immissionen ignoriert, verliert Akzeptanz und Verfahren.",
          "Abstimmung mit der Brandschutzdienststelle bei eigenen Bauvorhaben bleibt ein anderes Verfahren – [Feuerwehr vor Bauamt](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog Standort",
        paragraphs: [],
        table: {
          caption: "Feuerwehrgerätehaus im WA",
          headers: ["Nr.", "Frage", "Bezug"],
          rows: [
            ["1", "Anlage für Verwaltungen?", "BauNVO"],
            ["2", "Dient dem Brandschutz der Umgebung?", "Größe/Ausstattung/Ausrückbereich"],
            ["3", "Gebietscharakter WA gewahrt?", "Nachbar / Planung"],
            ["4", "Immissionen / Rücksichtnahme geklärt?", "TA Lärm u. a."],
            ["5", "BauO-Brandschutz des Hauses?", "Konzept / SBauVO"],
            ["6", "BHKG-Aufgabe der Gemeinde?", "Leistungsfähige Feuerwehr"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Örtliche Bebauungspläne können Abweichendes regeln. Dieser Ratgeber fasst die bundesgerichtliche Linie zur WA-Zulässigkeit zusammen – ohne Ersatz für die konkrete Genehmigung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bhkg-hilfsfristen-gemeinde-klagebefugnis-nrw", label: "BHKG / Hilfsfristen" },
      { href: "/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw", label: "Zufahrten" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "FW vor Bauamt" },
      { href: "/ratgeber/loeschwasserversorgung-hydranten-verkehrsflaeche-dvgw-w405", label: "Löschwasser" },
      { href: "/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw", label: "Nachbar Brandwand" },
      { href: "/brandschutzberatung-koeln", label: "Beratung" },
    ],
    faq: [
      {
        question: "Ist jedes Feuerwehrhaus im WA zulässig?",
        answer:
          "Nein. Es muss als Anlage für Verwaltungen einordenbar und gebietsverträglich sein – insbesondere wenn es dem Brandschutz der Umgebung dient.",
      },
      {
        question: "Können Nachbarn den Standort verhindern?",
        answer:
          "Nachbarklagen sind möglich. Das BVerwG begrenzt den Anspruch auf ermessensfehlerfreie Ausnahme; Gebietscharakter und Immissionen bleiben prüfbar.",
      },
      {
        question: "Gilt das für Berufsfeuerwehr-Wachen?",
        answer:
          "Größere Wachen können andere Gebietstypen brauchen. Größe und Ausstattung entscheiden mit.",
      },
      {
        question: "Was ist mit Sirenenlärm?",
        answer:
          "Immissionsschutz und Rücksichtnahme – getrennt von der BauNVO-Einordnung als Verwaltungsanlage.",
      },
      {
        question: "Bezug BHKG?",
        answer:
          "Örtlicher Brandschutz und leistungsfähige Feuerwehren erklären die Standortnähe – siehe BHKG-Ratgeber zu Weisung und Klagebefugnis.",
      },
      {
        question: "Braucht das Gerätehaus ein Brandschutzkonzept?",
        answer:
          "Je nach Größe und Einordnung ja. Planungsrecht und Bauordnungsrecht laufen parallel.",
      },
    ],
  },
  {
    slug: "bhkg-hilfsfristen-gemeinde-klagebefugnis-nrw",
    title: "BHKG NRW: wann Gemeinden Brandschutz rügen dürfen – und wann nicht",
    excerpt:
      "Hilfsfristen sind in NRW weisungsfähig – die Gemeinde kann sie in der Planfeststellung nicht als Selbstverwaltungsrecht rügen. Was trotzdem wehrfähig bleibt und wie Vorhabenträger damit umgehen.",
    metaTitle: "BHKG Hilfsfristen Gemeinde Klagebefugnis | H&S+",
    metaDescription:
      "BHKG NRW Klagebefugnis: weisungsfreie Aufgaben, Hilfsfristen § 54, Löschwasser, Gemeinde vs. Planfeststellung – Leitlinie BVerwG für NRW-Praxis.",
    keywords: [
      "BHKG NRW Hilfsfristen",
      "Gemeinde Klagebefugnis Brandschutz",
      "weisungsfreie Aufgabe Feuerwehr",
      "§ 54 BHKG Weisung",
      "kommunaler Brandschutz Planfeststellung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Pflichtaufgabe nach Weisung – mit wehrfähigem Kern",
        paragraphs: [
          "In NRW ist Brandschutz Pflichtaufgabe der Gemeinde zur Erfüllung nach Weisung (§ 2 Abs. 2 BHKG). Das bedeutet nicht, dass die Gemeinde „den Brandschutz“ immer einklagen kann – und nicht, dass sie nie Rechte hat.",
          "Für Vorhabenträger, Kommunen und Gutachter: die Trennlinie weisungsfrei vs. weisungsgebunden entscheidet über Rügebefugnis in Planfeststellung und Bauleitplanung.",
        ],
      },
      {
        id: "rechtskern",
        title: "BVerwG 7 A 10.20 – die Leitlinie",
        paragraphs: [
          "Das Bundesverwaltungsgericht (23.06.2021): Nordrhein-westfälischen Gemeinden kommt hinsichtlich Brandschutz und Hilfeleistung eine wehrfähige Rechtsposition zu, wenn und soweit ein Bereich weisungsfreier Aufgabenwahrnehmung betroffen ist.",
          "Hilfsfristen: In NRW nicht schon gesetzlich abschließend geregelt; sie können Gegenstand einer Weisung nach § 54 Abs. 3 Satz 1 BHKG sein. Damit fehlt der Gemeinde die rügefähige Position, Hilfsfrist-Verletzungen als Selbstverwaltungsrecht geltend zu machen. Ähnlich Eintreffzeiten Rettungsdienst (ausdrückliches Weisungsrecht im RettG NRW).",
          "Löschwasserversorgung (§ 3 Abs. 2 Satz 2 BHKG): wehrfähig zweifelhaft, weil allgemeine Weisung möglich – im Leitfall oft offen gelassen, wenn Unklarheiten im Verfahren ausgeräumt wurden.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Grenzfälle",
        paragraphs: [
          "Grenzfall ja: Gemeinde rügt eine wesentliche Erschwerung weisungsfreier Aufgabenerfüllung mit Substanz (Standorte, Löschangriff, konkrete Entnahme) – nicht nur „Hilfsfrist wird reißend“. Grenzfall nein: Bloße Hilfsfrist-Behauptung ohne weisungsfreien Kern.",
          "Nachbargemeinde gegen Bebauungsplan mit besonderen Brandgefahren: eigene Linie (BVerwG 4 BN 18.21) – Antragsbefugnis als Trägerin der Feuerwehr prüfen, nicht mit 7 A 10.20 verwechseln.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis für Vorhabenträger und Kommunen",
        paragraphs: [
          "Früh Abstimmung mit der örtlichen Feuerwehr zu Löschwasser, Querungen, Rettungszugängen – schriftlich. Unklarheiten in Protokollen und Planunterlagen ausräumen, bevor gestritten wird.",
          "Bauvorhaben (nicht Planfeststellung): [Feuerwehrabstimmung](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw), [Löschwasser](/ratgeber/loeschwasserversorgung-hydranten-verkehrsflaeche-dvgw-w405), Standort Gerätehaus: [Feuerwehrgerätehaus WA](/ratgeber/feuerwehrgeraetehaus-wohngebiet-baunvo-brandschutz).",
        ],
      },
      {
        id: "nachweis",
        title: "Was in Gutachten und Stellungnahmen stehen muss",
        list: [
          "Welcher BHKG-Belang ist betroffen?",
          "Ist er weisungsfrei oder weisungsgebunden?",
          "Wesentliche Erschwerung substanziiert (nicht nur Schlagwort Hilfsfrist)",
          "Löschwasser: eigene Rüge oder einvernehmliche Planlösung?",
          "Dokumentation der Abstimmung mit der Feuerwehr",
        ],
        paragraphs: [
          "Wer nur „Brandschutz der Gemeinde“ schreibt, ohne die Weisungslinie, verliert in der Zulässigkeitsprüfung.",
        ],
      },
      {
        id: "tabelle",
        title: "Aufgaben und Wehrfähigkeit (Überblick)",
        paragraphs: [],
        table: {
          caption: "BHKG-Belange nach der Leitlinie",
          headers: ["Belang", "Norm / Bezug", "Wehrfähig?"],
          rows: [
            ["Hilfsfristen Feuerwehr", "Weisung § 54 Abs. 3 BHKG möglich", "Nein (typisch)"],
            ["Eintreffzeiten Rettungsdienst", "RettG NRW Weisung", "Nein"],
            ["Leistungsfähige Feuerwehr / Organisation", "weisungsfreier Kern möglich", "Ja, soweit weisungsfrei"],
            ["Löschwasser örtlich angemessen", "§ 3 Abs. 2 Satz 2; Weisung möglich", "Zweifelhaft / fallbezogen"],
            ["Konkrete Rettungszugänge / Entnahme", "Planabstimmung", "Oft über Sachaufklärung, nicht Hilfsfrist-Rüge"],
          ],
        },
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Gemeinde / Vorhabenträger",
          headers: ["Nr.", "Frage", "Wenn problematisch"],
          rows: [
            ["1", "Weisungsfreier Kern benannt?", "Rüge unzulässig"],
            ["2", "Nur Hilfsfrist behauptet?", "Nicht wehrfähig"],
            ["3", "Wesentliche Erschwerung belegt?", "Unsubstantiiert"],
            ["4", "Löschwasser / Zugang geklärt?", "Nachforderung / Streit"],
            ["5", "Abstimmung dokumentiert?", "Beweisproblem"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "BHKG und Planfeststellungsrecht sind komplex. Dieser Ratgeber ordnet die wehrfähige Gemeindeposition ein – ohne Prozessstrategie im Einzelfall und ohne Aussage zu jedem Belang außerhalb Brandschutz/Hilfeleistung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerwehrgeraetehaus-wohngebiet-baunvo-brandschutz", label: "FW-Gerätehaus WA" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "FW vor Bauamt" },
      { href: "/ratgeber/loeschwasserversorgung-hydranten-verkehrsflaeche-dvgw-w405", label: "Löschwasser" },
      { href: "/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw", label: "Zufahrten" },
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigung (BauO)" },
      { href: "/brandschutzberatung-koeln", label: "Beratung" },
    ],
    faq: [
      {
        question: "Was ist das BHKG NRW?",
        answer:
          "Das Gesetz über den Brandschutz, die Hilfeleistung und den Katastrophenschutz – Grundlage kommunaler Feuerwehr- und Gefahrenabwehraufgaben in NRW.",
      },
      {
        question: "Warum sind Hilfsfristen nicht rügbar?",
        answer:
          "Weil sie in NRW Gegenstand möglicher staatlicher Weisung nach § 54 Abs. 3 BHKG sein können – der weisungsfreie Kern der Selbstverwaltung ist dann nicht berührt.",
      },
      {
        question: "Kann die Gemeinde gar nichts rügen?",
        answer:
          "Doch – soweit ein weisungsfreier Aufgabenbereich wesentlich erschwert wird und das substanziiert dargelegt wird.",
      },
      {
        question: "Gilt das nur für Bahn-Planfeststellung?",
        answer:
          "Der Leitfall betraf Eisenbahn-Planfeststellung; die BHKG-Dogmatik zur wehrfähigen Position ist darüber hinaus für die kommunale Brandschutzrolle relevant.",
      },
      {
        question: "Was sollen Investoren tun?",
        answer:
          "Früh Feuerwehr und Löschwasser/Zugänge klären, Unklarheiten dokumentiert ausräumen – nicht auf einen Hilfsfrist-Streit spekulieren.",
      },
      {
        question: "Unterschied zu BauO-Beseitigung?",
        answer:
          "BHKG betrifft kommunale Gefahrenabwehr und Rügebefugnis; BauO §§ 69/82 betreffen bauliche Anlagen und Eigentümerpflichten – parallel, nicht identisch.",
      },
    ],
  },
];
