/**
 * Juli 2026 – Rechtsprechung Brandschutz: SEO/GEO-Serie (≥450 Wörter).
 * Quellen: Ausbarbeitungen Brandwände/Nachbarschutz, Feuerwehrgerätehaus, BHKG.
 * Beseitigung bleibt in ratgeber-articles-gericht-seo-jul-aug2026.ts – keine Slug-Duplikate.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_RECHTSPRECHUNG_SEHR_GUT: RatgeberArticle[] = [
  {
    slug: "brandwand-glasbaustein-fenster-bauo-nrw",
    title: "Glasbaustein oder Fenster in der Brandwand: was das Gesetz unterscheidet",
    excerpt:
      "Lichtdurchlässig heißt nicht öffenbar: Glasbausteine können privilegiert sein – Dreh-Kipp-Fenster sind Öffnungen. Was vor dem Umbau zu prüfen ist.",
    metaTitle: "Glasbaustein Brandwand vs Fenster NRW | H&S+",
    metaDescription:
      "Glasbaustein Brandwand: lichtdurchlässig und nicht öffenbar ≠ Fenster. Was § 30 BauO NRW erlaubt und was Beseitigung riskiert.",
    keywords: [
      "Glasbaustein Brandwand",
      "Fenster Brandwand erlaubt",
      "Brandwand Öffnung Glasbaustein",
      "§ 30 BauO NRW Öffnungen",
      "lichtdurchlässige Brandwand",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Darf ein Fenster in der Brandwand stehen?",
        paragraphs: [
          "Nein – ein öffenbares Fenster ist eine Öffnung und durchbricht die Brandwandfunktion. Glasbausteine können als lichtdurchlässige, nichtbrennbare, nicht öffenbare Teilfläche privilegiert sein; Kunststofffenster mit Dreh-Kipp-Funktion sind es nicht.",
          "Viele Eigentümer tauschen Glasbausteine gegen moderne Fenster und meinen einen normalen Fenstertausch. Brandschutzrechtlich entsteht oft erst die unzulässige Öffnung. Ob der Tausch genehmigungsfrei ist: [Fenstertausch Brandwand](/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw).",
        ],
      },
      {
        id: "rechtskern",
        title: "Was Gerichte dazu sagen",
        paragraphs: [
          "VG Mainz 3 K 39/23.MZ (06.12.2023, Rheinland-Pfalz): Glasbausteine sind nach der Brandwand-Norm privilegierte Teilflächen; zu öffnende Kunststofffenster sind es nicht. Das ist kein NRW-Urteil – die NRW-Übertragung läuft über § 30 BauO NRW (Gebäudeabschlusswände, Öffnungsregime) und bei Ausnahmen über § 69 BauO NRW.",
          "An Abschlusswänden zur Nachbargrenze (typisch bis 2,50 m, sofern kein öffentlich-rechtlich gesicherter 5-m-Abstand) gelten strenge Regeln. Bei GK 1–3 kann statt Brandwand eine hochfeuerhemmende Wand zulässig sein – das Öffnungsverbot bleibt. Einschreiten: [Beseitigungsverfügung](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw).",
        ],
      },
      {
        id: "bauo",
        title: "§ 30 BauO NRW – praktische Prüfung",
        paragraphs: [
          "Zuerst: Ist die Wand Brandwand bzw. gleichgestellte Abschlusswand? Grenze / Abstand Nachbargebäude? Dann: Lichtfläche öffenbar oder geschlossen und nichtbrennbar?",
        ],
        table: {
          caption: "Licht in der Brandwand – Ja/Nein",
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
        id: "nachweis",
        title: "Nachweis vor Umbau oder Legalisierung",
        paragraphs: [
          "Pläne mit Brandwand, Öffnungsmaßen, Baustoff der Lichtfläche, Gebäudeklasse, Abstand Nachbargebäude. Ausnahme zuerst in der Brandwand-Norm suchen, dann erst § 69 – bei Nachbarn keine 1a-Bescheinigung, Bauaufsicht entscheidet; Freistellung § 63 und Abweichung schließen sich aus. Hub: [§ 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
          "Nachbarzustimmung allein reicht nicht – [welcher Nachbar zählt](/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw).",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fehler",
        paragraphs: [
          "Handwerker bestellt „Fenster wie bisher“, meint aber Glasbausteinfläche. Energetische Sanierung ersetzt Lichtflächen ohne Brandschutzprüfung. Rückbau auf Glasbausteine ist oft zumutbar – deshalb halten Gerichte Beseitigungen für verhältnismäßig.",
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
          "VG Mainz 3 K 39/23.MZ wendet rheinland-pfälzisches Recht an – kein NRW-Urteil. Die NRW-Arbeit läuft über Parallelität zu § 30 und § 69 BauO NRW. Kein Ersatz für die Prüfung Ihres Wandaufbaus und keine Rechtsberatung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw", label: "Fenstertausch vs. NU" },
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigungsverfügung" },
      { href: "/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw", label: "Welcher Nachbar?" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Darf ich ein Fenster in der Brandwand einbauen?",
        answer:
          "Grundsätzlich nein – öffenbare Fenster sind Öffnungen. Die Brandwand soll Brandübertragung verhindern; was geöffnet werden kann, durchbricht diese Funktion.",
      },
      {
        question: "Sind Glasbausteine in der Brandwand erlaubt?",
        answer:
          "Oft ja, wenn es lichtdurchlässige, nichtbrennbare, nicht öffenbare Teilflächen nach der Brandwand-Norm sind. Maßgeblich sind Normtext und Einordnung der Wand.",
      },
      {
        question: "Warum sind Kunststofffenster problematisch?",
        answer:
          "Weil sie geöffnet werden können. Die Privilegierung zielt auf geschlossene Teilflächen – nicht auf Dreh-Kipp-Fenster.",
      },
      {
        question: "Reicht feuerhemmende Verglasung statt Brandwand-Privileg?",
        answer:
          "Nur wenn ein gesetzlicher Spezialtatbestand oder eine wirksame Abweichung das trägt. Pauschal „Glas mit F-Klasse“ ersetzt nicht das Öffnungsverbot.",
      },
      {
        question: "Gilt das auch bei Gebäudeklasse 2 und 3?",
        answer:
          "Ja. Hochfeuerhemmend statt Brandwand senkt den Feuerwiderstand – nicht das Öffnungsregime.",
      },
      {
        question: "Ist VG Mainz ein NRW-Urteil?",
        answer:
          "Nein – Rheinland-Pfalz. NRW-Praxis arbeitet mit § 30 und § 69 BauO NRW. Einzelfall und Behörde bleiben maßgeblich.",
      },
    ],
  },
  {
    slug: "brandwand-fenstertausch-nutzungsaenderung-bauo-nrw",
    title: "Fenstertausch an der Brandwand: wann daraus eine Nutzungsänderung wird",
    excerpt:
      "§ 62 greift nicht, wenn privilegierte Brandwand-Teilflächen durch öffenbare Fenster ersetzt werden. Wann Sie einen Bauantrag brauchen.",
    metaTitle: "Fenstertausch Brandwand genehmigungsfrei? | H&S+",
    metaDescription:
      "Fenstertausch Brandwand: § 62 greift nicht bei Glasbaustein zu Fenster. Wann Nutzungsänderung und Bauantrag nötig sind.",
    keywords: [
      "Fenstertausch Brandwand genehmigungsfrei",
      "Nutzungsänderung Brandwand",
      "verfahrensfreier Fenstertausch",
      "§ 62 BauO NRW Fenster",
      "Genehmigung Brandwand Öffnung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Ist Fenstertausch an der Brandwand genehmigungsfrei?",
        paragraphs: [
          "Nein – nicht, wenn Sie privilegierte Brandwand-Teilflächen (z. B. Glasbausteine) durch öffenbare Fenster ersetzen. § 62 BauO NRW setzt typischerweise vergleichbare Fenster in bestehender Öffnung voraus; neue Zulässigkeitsfragen machen daraus eine genehmigungspflichtige Änderung.",
          "Im Alltag heißt alles „Fenstertausch“. Bauordnungsrechtlich trennt sich Fall A (Fenster gegen Fenster in zulässiger Öffnung – oft verfahrensfrei) von Fall B (Glasbausteinfläche wird zu Dreh-Kipp – typisch Bauantrag). Was materiell erlaubt ist: [Glasbaustein vs. Fenster](/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw).",
        ],
      },
      {
        id: "rechtskern",
        title: "Was Gerichte dazu sagen",
        paragraphs: [
          "VG Mainz 3 K 39/23.MZ (06.12.2023, Rheinland-Pfalz): Genehmigungsfreiheit für Fenstertausch greift nicht, wenn Glasbausteine durch öffenbare Kunststofffenster ersetzt werden – es stellen sich gänzlich neue Zulässigkeitsfragen. Belichtung allein macht die Bauelemente nicht austauschbar. Kein NRW-Urteil – NRW-Übertragung über § 62, § 30 und § 69 BauO NRW.",
          "Ohne Antrag entstehen formelle und materielle Illegalität parallel. Einschreiten: [Beseitigungsverfügung](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw). Abweichung: [§ 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw) – Freistellung und Abweichung schließen sich aus; Abs. 1a rettet § 63 nicht.",
        ],
      },
      {
        id: "ablauf",
        title: "Richtiger Ablauf vor dem Handwerkerauftrag",
        list: [
          "Wandtyp klären: Brandwand / Abschlusswand / normale Außenwand?",
          "Bestand: Was war genehmigt – Fensteröffnung oder Glasbaustein?",
          "Geplantes Element: öffenbar? Baustoff? Größe?",
          "Bei Brandwand-Konflikt: Bauantrag oder Abweichung – nicht „schwarz“ tauschen",
          "Genehmigung abwarten, dann ausführen",
        ],
        paragraphs: [
          "Wer umgekehrt baut und hofft, die Behörde schweige, riskiert Beseitigung und keine Verwirkung – [Duldung](/ratgeber/duldung-verwirkung-brandschutz-bauaufsicht-nrw).",
        ],
      },
      {
        id: "abgrenzung",
        title: "Grenzfälle",
        paragraphs: [
          "Grenzfall ja: Fenster in bestehender, genehmigter Fensteröffnung einer normalen Außenwand – klassischer Fenstertausch. Grenzfall nein: Glasbausteinfläche in der Grenzwand wird zu Dreh-Kipp ohne Antrag.",
        ],
        table: {
          caption: "Fenstertausch oder Nutzungsänderung?",
          headers: ["Nr.", "Frage", "Folge"],
          rows: [
            ["1", "Ist die Wand Brandwand/Abschlusswand?", "Ja → Sonderprüfung"],
            ["2", "War dort schon ein Fenster oder Glasbaustein?", "Unterschied entscheidet"],
            ["3", "Wird öffenbar eingebaut?", "Oft genehmigungspflichtig"],
            ["4", "Liegt §-62-Privileg wirklich vor?", "Sonst Bauantrag"],
            ["5", "Abweichung nötig?", "§ 69 + Behörde/SV, nicht mündlich"],
            ["6", "Freistellung trotz Abweichung?", "Ausgeschlossen (§ 63 Abs. 2 Nr. 4)"],
          ],
        },
      },
      {
        id: "nachweis",
        title: "Was in den Bauantrag gehört",
        paragraphs: [
          "Bestands- und Neuplan der Wand, Brandschutz-Eintrag, Gebäudeklasse, Abstände, ggf. Abweichungsantrag. Nachbarbeteiligung nicht nur der Grenze – [Nachbarschutz](/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw). Unterlagen: [Bauantrag](/ratgeber/bauantrag-brandschutz-unterlagen-koeln).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "VG Mainz ist RP-Recht. Verfahrensfreiheit ist einzelfallabhängig. Dieser Ratgeber ersetzt keine Prüfung Ihres Bauvorhabens und keine Rechtsberatung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw", label: "Glasbaustein vs. Fenster" },
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigung" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Nutzungsänderung" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Ist Fenstertausch an der Brandwand genehmigungsfrei?",
        answer:
          "Nein, wenn privilegierte Teilflächen (z. B. Glasbausteine) durch öffenbare Fenster ersetzt werden. § 62 setzt typischerweise vergleichbare Fenster in bestehender Öffnung voraus.",
      },
      {
        question: "Wann wird daraus eine Nutzungsänderung?",
        answer:
          "Wenn neue Zulässigkeitsfragen entstehen – etwa öffenbare Fenster statt privilegierter Glasbausteine. Dann ist ein Genehmigungsverfahren nötig.",
      },
      {
        question: "Reicht eine Bauanzeige?",
        answer:
          "Nur wenn das Landesrecht das für Ihren Fall vorsieht. Brandwand-Öffnungen sind selten „Anzeige reicht“ – im Zweifel Bauantrag.",
      },
      {
        question: "Kann ich nachträglich genehmigen lassen?",
        answer:
          "Manchmal über Legalisierung und Abweichung – riskanter und teurer als vorher. Ohne Zulassung bleibt der Zustand angreifbar.",
      },
      {
        question: "Wo steht das in der BauO NRW?",
        answer:
          "Verfahrensfreiheit § 62, Brandwände § 30, Abweichung § 69, Einschreiten § 82 – jeweils im konkreten Wortlaut prüfen.",
      },
      {
        question: "Was ist mit Freistellung und Abweichung?",
        answer:
          "Eine Abweichung nach § 69 schließt die Genehmigungsfreistellung aus. Abs. 1a rettet § 63 nicht.",
      },
    ],
  },
  {
    slug: "duldung-verwirkung-brandschutz-bauaufsicht-nrw",
    title: "Zehn Jahre geduldet – trotzdem Beseitigung? Verwirkung im Brandschutz",
    excerpt:
      "Passive Duldung heilt nicht: Ordnungsrechtliche Eingriffsbefugnisse verjähren und verwirken nicht. Was Eigentümer wissen müssen.",
    metaTitle: "Duldung Verwirkung Brandschutz NRW | H&S+",
    metaDescription:
      "Seit Jahren geduldet Brandschutz: passive Duldung heilt nicht, keine Verwirkung der Bauaufsicht. OVG-NRW-Linie und § 82 BauO.",
    keywords: [
      "seit Jahren geduldet Brandschutz",
      "Verwirkung Bauaufsicht Brandschutz",
      "Duldung Brandschutz Beseitigung",
      "mündliche Zusage Bauamt",
      "OVG NRW passive Duldung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Schützt jahrelange Duldung vor Beseitigung?",
        paragraphs: [
          "Nein. Passive Untätigkeit der Bauaufsicht ist nur passive Duldung ohne Gestattungswirkung. Ordnungsrechtliche Eingriffsbefugnisse der Gefahrenabwehr verjähren nicht und werden nicht verwirkt – die Behörde darf einen als rechtswidrig erkannten Zustand später beenden.",
          "Das ist die harte Grenze zum [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw): Bestandsschutz schützt rechtmäßig errichtete Anlagen – nicht illegale Öffnungen. Wer auf Schweigen spekuliert, riskiert trotzdem [Beseitigung](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw).",
        ],
      },
      {
        id: "rechtskern",
        title: "Was Gerichte dazu sagen",
        paragraphs: [
          "VG Mainz 3 K 39/23.MZ (06.12.2023, Rheinland-Pfalz) mit ausdrücklichem Bezug auf OVG NRW 10 B 617/09: Ordnungsrechtliche Eingriffsbefugnisse der Gefahrenabwehr können nicht verwirkt werden und unterliegen nicht der Verjährung. Lange Untätigkeit ist nur passive Duldung. Das VG-Urteil ist RP-Recht; die Verwirkungs-Linie ist NRW-OVG und überträgt sich auf Einschreiten nach § 82 BauO NRW.",
          "Mündliche „Absprache“ mit dem Sachbearbeiter: ohne schriftliche Zusicherung (§ 38 VwVfG) unwirksam. Eigenmächtiger Einbau vor der behaupteten Zusage begründet kein schutzwürdiges Vertrauen.",
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
            ["Mündliche Zusage", "Schriftform der Zusicherung; sonst unwirksam"],
            ["Lange Untätigkeit = Erlaubnis", "Nur passive Duldung, keine Gestattung"],
            ["Hohe Umbaukosten", "Fenster oft zumutbar rückbaubar; Disposition prüfen"],
          ],
        },
      },
      {
        id: "abgrenzung",
        title: "Grenzfälle",
        paragraphs: [
          "Grenzfall ja: Rechtmäßig genehmigte Öffnung nach damaligem Recht – dann Bestandsschutz-/Vertrauensschutz anders. Grenzfall nein: Schwarz eingebaute Brandwandfenster, nur weil niemand eingeschritten ist.",
          "Aktive Duldung (klare schriftliche Gestattung) ist etwas anderes als Schweigen – und selbst dann eng. Materielle Öffnungsfrage: [Glasbaustein](/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw).",
        ],
      },
      {
        id: "praxis",
        title: "Was Sie tun sollten",
        paragraphs: [
          "Genehmigungsakte beschaffen, Ist-Zustand dokumentieren, Legalität prüfen. Bei Illegalität: Rückbau oder Abweichungsverfahren – nicht auf Verwirkung spekulieren. Hub Abweichung: [§ 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Vertrauensschutz und Verwirkung sind einzelfallabhängig. Urteil und OVG-Linie ersetzen keine Prozessgarantie und keine Rechtsberatung im konkreten Verwaltungsstreit.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigung" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz" },
      { href: "/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw", label: "Fenstertausch" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Schützt jahrelange Duldung vor Beseitigung?",
        answer:
          "Nein. Passive Untätigkeit ist nur Duldung ohne Gestattungswirkung. Die Behörde darf den rechtswidrigen Zustand später beenden.",
      },
      {
        question: "Kann die Bauaufsicht nach 10 Jahren noch einschreiten?",
        answer:
          "Ja. Ordnungsrechtliche Eingriffsbefugnisse der Gefahrenabwehr werden nach der hier maßgeblichen Linie nicht verwirkt und verjähren nicht.",
      },
      {
        question: "Reicht eine mündliche Zusage des Sachbearbeiters?",
        answer:
          "In der Regel nein. Zusicherungen bedürfen der Schriftform; ohne Akte bleibt der Einwand schwach.",
      },
      {
        question: "Was ist passive Duldung?",
        answer:
          "Schweigen oder Nicht-Einschreiten ohne Gestattungswirkung – keine Erlaubnis und kein Bestandsschutz.",
      },
      {
        question: "Hilft Bestandsschutz § 59 BauO NRW?",
        answer:
          "Nur bei rechtmäßigem Bestand. Illegale Öffnungen fallen nicht darunter.",
      },
      {
        question: "Was bei Immobilienkauf beachten?",
        answer:
          "Brandwand und Öffnungen in der Due Diligence prüfen – „nie beanstandet“ ersetzt keine Genehmigung.",
      },
    ],
  },
  {
    slug: "nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw",
    title: "Nachbarzustimmung Brandwand: warum der Grenznachbar oft nicht reicht",
    excerpt:
      "Bei § 69 zählen öffentlich-rechtlich geschützte Belange aller Betroffenen – nicht nur die Unterschrift an der Grenze.",
    metaTitle: "Nachbarzustimmung Brandwand § 69 NRW | H&S+",
    metaDescription:
      "Nachbarzustimmung Brandwand: nicht nur der Grenznachbar. Welche Belange § 69 verlangt und warum eine Unterschrift oft nicht reicht.",
    keywords: [
      "Nachbarzustimmung Brandwand",
      "§ 69 Nachbar Brandschutz",
      "Nachbarschutz Abweichung Brandschutz",
      "Baulast Brandwand 5 Meter",
      "übernächster Nachbar Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Reicht die Zustimmung des Grenznachbarn für § 69?",
        paragraphs: [
          "Oft nein. § 69 BauO NRW verlangt die Würdigung aller öffentlich-rechtlich geschützten nachbarlichen Belange und der öffentlichen Belange des § 3 – nicht nur die Unterschrift des unmittelbaren Angrenzers.",
          "Eigentümer holen die Zustimmung des Grenznachbarn ein und wundern sich, wenn die Abweichung scheitert. Brandschutz schützt auch Gebäude, die im Brandfall hinter der Zufahrt oder im Abstand betroffen wären.",
        ],
      },
      {
        id: "rechtskern",
        title: "Was Gerichte dazu sagen",
        paragraphs: [
          "VG Mainz 3 K 39/23.MZ (06.12.2023, Rheinland-Pfalz): Der unmittelbare Nachbar hatte zugestimmt und eine Baulast angeboten – das genügte nicht; betroffen war auch der Eigentümer des nächsten Gebäudes ohne Zustimmung. Kein NRW-Urteil – NRW-Übertragung über § 69 Abs. 1 BauO NRW (nachbarliche Belange) und § 30 (5-m-Abstand).",
          "Privatrechtliche Einverständniserklärungen binden die Bauaufsicht nicht. Bei nachbarlichen Belangen keine SV-Bescheinigung nach Abs. 1a – die Behörde entscheidet. Brandschutzdienststelle hören, wenn Löschen/Retten berührt sind. Hub: [§ 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
        ],
      },
      {
        id: "baulast",
        title: "Baulast und 5-Meter-Abstand",
        paragraphs: [
          "Eine Abstands-Baulast ersetzt die Brandwandpflicht nur, wenn sie den gesetzlichen Abstand zum Nachbargebäude tatsächlich sichert. Teillösungen „vor den Fenstern“ reichen nicht. Materielle Öffnungsfrage: [Glasbaustein vs. Fenster](/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw).",
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
            ["4", "Nachbarliche Belange → behördliche Entscheidung?", "Keine 1a-Bescheinigung"],
            ["5", "Öffentliche Belange § 3 gewürdigt?", "Ablehnung trotz Nachbar-OK"],
          ],
        },
      },
      {
        id: "praxis",
        title: "Praxis in dichter Bebauung",
        paragraphs: [
          "In Reihenhaus- und Blockrandlagen sind mehrere Gebäude im Brandfall betroffen. Wer nur den direkten Nachbarn „mitnimmt“, unterschätzt die Prüfung. Bei Beseitigung hilft Nachbar-OK allein ebenfalls nicht – [Beseitigung](/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "VG Mainz ist RP-Recht. Zivilrechtlicher Nachbarschutz (BGB) und Bauordnungsrecht laufen parallel. Keine Rechtsberatung im Einzelfall.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "§ 69 Hub" },
      { href: "/ratgeber/beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw", label: "Beseitigung" },
      { href: "/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw", label: "Glasbaustein" },
      { href: "/ratgeber/duldung-verwirkung-brandschutz-bauaufsicht-nrw", label: "Duldung" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Reicht die Zustimmung des direkten Nachbarn für § 69?",
        answer:
          "Oft nicht. Öffentlich-rechtlich geschützte Belange weiterer brandbetroffener Gebäude und öffentliche Belange des Brandschutzes müssen mitgewürdigt werden.",
      },
      {
        question: "Was bringt eine Baulast an der Grenze?",
        answer:
          "Nur wenn sie den gesetzlich geforderten Abstand zum Nachbargebäude tatsächlich sichert – nicht als symbolische Teillösung.",
      },
      {
        question: "Kann die Bauaufsicht trotz aller Zustimmungen ablehnen?",
        answer:
          "Ja, wenn öffentliche Belange oder formelle Voraussetzungen entgegenstehen. Bei Nachbarn entscheidet die Behörde – keine 1a-Bescheinigung.",
      },
      {
        question: "Wer ist brandbetroffen?",
        answer:
          "Gebäude, die bei Versagen der Brandwand im Brandfall primär gefährdet wären – Lageplan und Abstände entscheiden, nicht nur die Grundstücksgrenze.",
      },
      {
        question: "Privater Kaufvertrag mit Nachbar-OK?",
        answer:
          "Bindet die Parteien privatrechtlich – nicht die Bauaufsicht bei § 69.",
      },
      {
        question: "Ist VG Mainz NRW-Recht?",
        answer:
          "Nein – Rheinland-Pfalz. Die Logik „nicht nur der Angrenzer“ überträgt sich auf § 69 BauO NRW.",
      },
    ],
  },
  {
    slug: "feuerwehrgeraetehaus-wohngebiet-baunvo-brandschutz",
    title: "Feuerwehrgerätehaus im Wohngebiet: BauNVO, Nachbar und Brandschutz",
    excerpt:
      "BVerwG: Feuerwehrgerätehaus ist Anlage für Verwaltungen und im WA gebietsverträglich, wenn es dem Brandschutz der Umgebung dient.",
    metaTitle: "Feuerwehrgerätehaus Wohngebiet BauNVO | H&S+",
    metaDescription:
      "Feuerwehrgerätehaus im Wohngebiet: BauNVO Anlage für Verwaltungen, Gebietsverträglichkeit. Leitsätze BVerwG 4 C 6.20 und NRW-Praxis.",
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
        title: "Darf ein Feuerwehrgerätehaus im Wohngebiet stehen?",
        paragraphs: [
          "Ja – nach dem BVerwG ist ein Feuerwehrgerätehaus eine Anlage für Verwaltungen und im allgemeinen Wohngebiet gebietsverträglich, wenn es nach Größe und Ausstattung maßgeblich dem Brandschutz der näheren Umgebung dient.",
          "Freiwillige Feuerwehren brauchen Standorte nahe der Bebauung; Nachbarn fürchten Sirenen und Ausrückverkehr. Das ist Planungsrecht mit Brandschutzbezug – getrennt von Brandwand-Fällen.",
        ],
      },
      {
        id: "rechtskern",
        title: "Was Gerichte dazu sagen",
        paragraphs: [
          "BVerwG 4 C 6.20 (Urteil vom 29.03.2022; NRW-Sachverhalt, Vorinstanz OVG Münster): (1) Feuerwehrgerätehaus = Anlage für Verwaltungen (BauNVO). (2) Dient es dem effektiven Brandschutz der Umgebung, ist es im WA gebietsverträglich. (3) Kein Nachbaranspruch auf ermessensfehlerfreie Ausnahme-Entscheidung in dem entschiedenen Kontext.",
          "NRW-Übertragung: BauNVO + BHKG (§§ 2, 3 – leistungsfähige Feuerwehren, örtlicher Brandschutz). Hilfsfristen und Gemeindeklage: [BHKG Hilfsfristen](/ratgeber/bhkg-hilfsfristen-gemeinde-klagebefugnis-nrw).",
        ],
      },
      {
        id: "abgrenzung",
        title: "Grenzfälle",
        paragraphs: [
          "Grenzfall ja: Ortsübliches Gerätehaus der Freiwilligen Feuerwehr, Ausrückbereich deckt das Wohngebiet. Grenzfall nein: Überdimensionierter Standort mit überörtlicher Logistik ohne WA-Bezug.",
          "BauNVO-Zulässigkeit ≠ bauordnungsrechtlicher Brandschutz des Gebäudes selbst – beides parallel.",
        ],
        table: {
          caption: "Feuerwehrgerätehaus im WA",
          headers: ["Nr.", "Frage", "Bezug"],
          rows: [
            ["1", "Anlage für Verwaltungen?", "BauNVO"],
            ["2", "Dient dem Brandschutz der Umgebung?", "Größe/Ausstattung/Ausrückbereich"],
            ["3", "Gebietscharakter WA gewahrt?", "Nachbar / Planung"],
            ["4", "Immissionen / Rücksichtnahme geklärt?", "TA Lärm u. a."],
            ["5", "BauO-Brandschutz des Hauses?", "Konzept / SBauVO"],
          ],
        },
      },
      {
        id: "nachbar",
        title: "Was Nachbarn trotzdem rügen können",
        paragraphs: [
          "Kein Anspruch auf fehlerfreie Ausnahme heißt nicht: keine Rechte. Gebietscharakter, Rücksichtnahme und Immissionen bleiben prüfbar. Brandwand-Nachbarschutz ist ein anderes Thema: [Nachbarschutz Brandwand](/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw).",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweise für Kommune und Genehmigung",
        list: [
          "Einordnung BauNVO / Bebauungsplan / § 34 BauGB",
          "Nutzungsbeschreibung: Fahrzeuge, Ausrückbereich, Personal",
          "Begründung Gebietsverträglichkeit",
          "Schallschutz wo gefordert",
          "Bauordnungsrechtlicher Brandschutznachweis des Gebäudes",
        ],
        paragraphs: [
          "Zufahrt und Löschwasser: [Feuerwehrzufahrten](/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Örtliche Bebauungspläne können Abweichendes regeln. BVerwG 4 C 6.20 ersetzt keine konkrete Genehmigung und keine Rechtsberatung. Kein Mainz-Brandwand-Fall.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bhkg-hilfsfristen-gemeinde-klagebefugnis-nrw", label: "BHKG / Hilfsfristen" },
      { href: "/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw", label: "Zufahrten" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "FW vor Bauamt" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Darf ein Feuerwehrgerätehaus im Wohngebiet stehen?",
        answer:
          "Ja, wenn es als Anlage für Verwaltungen einordenbar und gebietsverträglich ist – insbesondere wenn es dem Brandschutz der Umgebung dient (BVerwG 4 C 6.20).",
      },
      {
        question: "Können Nachbarn den Standort verhindern?",
        answer:
          "Nachbarklagen sind möglich. Das BVerwG begrenzt den Anspruch auf ermessensfehlerfreie Ausnahme; Gebietscharakter und Immissionen bleiben prüfbar.",
      },
      {
        question: "Gilt das für große Berufsfeuerwehr-Wachen?",
        answer:
          "Größere Wachen können andere Gebietstypen brauchen. Größe und Ausstattung entscheiden mit.",
      },
      {
        question: "Was ist mit Sirenenlärm?",
        answer:
          "Immissionsschutz und Rücksichtnahme – getrennt von der BauNVO-Einordnung als Verwaltungsanlage.",
      },
      {
        question: "Welches Urteil ist maßgeblich?",
        answer:
          "BVerwG 4 C 6.20 vom 29.03.2022 (NRW-Sachverhalt). Nicht verwechseln mit VG Mainz zu Brandwandöffnungen.",
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
      "Hilfsfristen sind in NRW weisungsfähig – die Gemeinde kann sie nicht als Selbstverwaltungsrecht rügen. Was trotzdem wehrfähig bleibt.",
    metaTitle: "Gemeinde Klagebefugnis Brandschutz BHKG | H&S+",
    metaDescription:
      "Gemeinde Klagebefugnis Brandschutz: Hilfsfristen weisungsfähig, wehrfähiger Kern weisungsfrei. Leitlinie BVerwG 7 A 10.20 zum BHKG NRW.",
    keywords: [
      "Gemeinde Klagebefugnis Brandschutz",
      "Hilfsfristen BHKG",
      "BHKG NRW Hilfsfristen",
      "weisungsfreie Aufgabe Feuerwehr",
      "§ 54 BHKG Weisung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Darf die Gemeinde Hilfsfristen in der Planfeststellung rügen?",
        paragraphs: [
          "Nein – nicht als Selbstverwaltungsrecht. Hilfsfristen können in NRW Gegenstand einer Weisung nach § 54 Abs. 3 Satz 1 BHKG sein; der wehrfähige Kern der Gemeinde liegt nur bei weisungsfreier Aufgabenwahrnehmung.",
          "Brandschutz ist Pflichtaufgabe nach Weisung (§ 2 Abs. 2 BHKG). Das heißt nicht „nie Rechte“ und nicht „immer einklagbar“. Für Vorhabenträger entscheidet die Trennlinie weisungsfrei vs. weisungsgebunden.",
        ],
      },
      {
        id: "rechtskern",
        title: "Was Gerichte dazu sagen",
        paragraphs: [
          "BVerwG 7 A 10.20 (Urteil vom 23.06.2021): Nordrhein-westfälischen Gemeinden kommt hinsichtlich Brandschutz und Hilfeleistung eine wehrfähige Rechtsposition zu, soweit ein Bereich weisungsfreier Aufgabenwahrnehmung betroffen ist. Hilfsfristen: nicht abschließend gesetzlich geregelt, Weisung möglich → keine rügefähige Position als Selbstverwaltung. Ähnlich Eintreffzeiten Rettungsdienst (RettG NRW).",
          "Löschwasserversorgung (§ 3 Abs. 2 Satz 2 BHKG): wehrfähig zweifelhaft, weil allgemeine Weisung möglich – im Leitfall oft offen gelassen, wenn Unklarheiten ausgeräumt wurden. Standort Gerätehaus: [Feuerwehrgerätehaus WA](/ratgeber/feuerwehrgeraetehaus-wohngebiet-baunvo-brandschutz).",
        ],
      },
      {
        id: "tabelle",
        title: "Aufgaben und Wehrfähigkeit",
        paragraphs: [],
        table: {
          caption: "BHKG-Belange nach der Leitlinie",
          headers: ["Belang", "Norm / Bezug", "Wehrfähig?"],
          rows: [
            ["Hilfsfristen Feuerwehr", "Weisung § 54 Abs. 3 BHKG möglich", "Nein (typisch)"],
            ["Eintreffzeiten Rettungsdienst", "RettG NRW Weisung", "Nein"],
            ["Leistungsfähige Feuerwehr / Organisation", "weisungsfreier Kern möglich", "Ja, soweit weisungsfrei"],
            ["Löschwasser örtlich angemessen", "§ 3 Abs. 2 Satz 2; Weisung möglich", "Zweifelhaft / fallbezogen"],
            ["Konkrete Rettungszugänge / Entnahme", "Planabstimmung", "Über Sachaufklärung, nicht Hilfsfrist-Rüge"],
          ],
        },
      },
      {
        id: "praxis",
        title: "Praxis für Vorhabenträger und Kommunen",
        paragraphs: [
          "Früh Abstimmung mit der Feuerwehr zu Löschwasser, Querungen, Rettungszugängen – schriftlich. Unklarheiten ausräumen, bevor gestritten wird. Bauvorhaben: [Feuerwehrabstimmung](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw), [Löschwasser](/ratgeber/loeschwasserversorgung-hydranten-verkehrsflaeche-dvgw-w405).",
        ],
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
          "BVerwG 7 A 10.20 betrifft BHKG und Planfeststellung – kein Brandwand-/§-69-Fall. Keine Prozessstrategie und keine Rechtsberatung im Einzelfall. BVerwG 7 B 8.24 (Eisenbahn/Brandschutz) wird hier nicht als eigener Ratgeber geführt.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerwehrgeraetehaus-wohngebiet-baunvo-brandschutz", label: "FW-Gerätehaus WA" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "FW vor Bauamt" },
      { href: "/ratgeber/loeschwasserversorgung-hydranten-verkehrsflaeche-dvgw-w405", label: "Löschwasser" },
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Darf die Gemeinde Hilfsfristen als Selbstverwaltung rügen?",
        answer:
          "Nein. Hilfsfristen können in NRW Gegenstand staatlicher Weisung nach § 54 Abs. 3 BHKG sein – dann fehlt die wehrfähige Position (BVerwG 7 A 10.20).",
      },
      {
        question: "Wann hat die Gemeinde eine wehrfähige Position?",
        answer:
          "Soweit ein weisungsfreier Aufgabenbereich des Brandschutzes/der Hilfeleistung wesentlich erschwert wird und das substanziiert dargelegt wird.",
      },
      {
        question: "Was ist das BHKG NRW?",
        answer:
          "Das Gesetz über den Brandschutz, die Hilfeleistung und den Katastrophenschutz – Grundlage kommunaler Feuerwehr- und Gefahrenabwehraufgaben in NRW.",
      },
      {
        question: "Gilt das nur für Bahn-Planfeststellung?",
        answer:
          "Der Leitfall betraf Eisenbahn-Planfeststellung; die Dogmatik zur wehrfähigen Position ist darüber hinaus für die kommunale Brandschutzrolle relevant.",
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
