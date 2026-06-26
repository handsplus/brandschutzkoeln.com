/**
 * Januar 2026 – Ratgeber-Cluster Brandschadensanierung (VdS 2357, DGUV 101-004, TRGS 524).
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BRANDSCHADENSANIERUNG_JAN2026: RatgeberArticle[] = [
  {
    slug: "brandschadensanierung-ueberblick-vds-2357",
    title: "Brandschadensanierung: Überblick nach VdS 2357",
    excerpt:
      "Was Brandschadensanierung an der kalten Brandstelle bedeutet, welche Regelwerke gelten und welche Gefahren durch Ruß, Schadstoffe und biologische Belastung entstehen – der Einstieg vor Ablauf und Pflichten.",
    metaTitle: "Was ist Brandschadensanierung? | VdS 2357 | H&S+",
    metaDescription:
      "Brandschadensanierung erklärt: Was an der kalten Brandstelle passiert, welche Gefahren durch Ruß und Schadstoffe drohen und welche Regelwerke gelten – VdS 2357, DGUV 101-004, TRGS 524.",
    keywords: [
      "Brandschadensanierung",
      "VdS 2357",
      "kalte Brandstelle",
      "DGUV 101-004",
      "TRGS 524",
      "kontaminierte Bereiche",
    ],
    sections: [
      {
        id: "was-ist",
        title: "Was ist Brandschadensanierung?",
        paragraphs: [
          "Brandschadensanierung umfasst alle Maßnahmen an der **kalten Brandstelle**, um Schäden an Gebäuden und Anlagen zu beseitigen – nach dem Einsatz der Feuerwehr und der Sicherung des Objekts. Dazu gehören Ursachen- und Schadensfeststellung, Sofortmaßnahmen, Entfernung von Brandgut und kontaminiertem Löschwasser, Reinigung brandschadensbedingter Verunreinigungen sowie der Abbau betroffener Bauteile.",
          "Anders als der vorbeugende oder abwehrende Brandschutz im laufenden Betrieb geht es hier um **Arbeiten in kontaminierten Bereichen**: Ruß, Kondensate, Brandrückstände aus Lagerbeständen, Baustoffe (z. B. Asbest, Mineralfasern) und biologische Arbeitsstoffe können Gesundheitsschäden verursachen. Deshalb gelten strenge Regeln für Einstufung, Schutz und Entsorgung.",
        ],
      },
      {
        id: "regelwerke",
        title: "Welche Regelwerke gelten?",
        paragraphs: [
          "Für die fachliche Einordnung sind vor allem diese Werke maßgeblich:",
        ],
        list: [
          "**VdS 2357** – Leitfaden zur Brandschadensanierung (Ablauf, Gefahrenbereiche, Schutzmaßnahmen)",
          "**DGUV Regel 101-004** – Arbeiten in kontaminierten Bereichen (Sachkunde, Organisation)",
          "**TRGS 524** – Schutzmaßnahmen für Tätigkeiten in kontaminierten Bereichen",
          "Ergänzend: **Gefahrstoffverordnung**, **Biostoffverordnung**, **DGUV Vorschrift 1** (Grundsätze der Prävention)",
        ],
      },
      {
        id: "umfang",
        title: "Typische Leistungen in der Sanierung",
        list: [
          "Begehungen zur Ursachen- und Schadensfeststellung",
          "Sicherung und Trocknung (Sofortmaßnahmen)",
          "Entfernung von Brandgut und kontaminiertem Löschwasser",
          "Reinigung von Verunreinigungen – von Wischreinigung bis Materialentfernung",
          "Abbau und Demontage betroffener Bauteile",
          "Dokumentation für Versicherer, Entsorgung und Abnahme",
        ],
        paragraphs: [
          "Der Umfang hängt vom Brandbild, der Nutzung des Gebäudes und der Einstufung in **Gefahrenbereiche (GB 0 bis GB 3)** ab – nicht von der sichtbaren Rußfläche allein.",
        ],
      },
      {
        id: "gefahren",
        title: "Gefährdungen für Beschäftigte und Beteiligte",
        paragraphs: [
          "Bei der Sanierung können Menschen durch **Gefahrstoffe** und **biologische Arbeitsstoffe** gesundheitlich geschädigt werden. Brandnebenprodukte sind in Ruß und Kondensaten gebunden; zusätzlich kommen Stoffe aus Produktions- oder Lagerbeständen, alter Baustoffe und Feuchteschäden hinzu.",
          "Eine **Gefährdungsbeurteilung** ist Pflicht. Ohne Einstufung des Schadensortes in Gefahren- und Arbeitsbereiche dürfen keine Beseitigungsarbeiten nach VdS 2357 beginnen – im Zweifel gelten die Anforderungen des **Gefahrenbereichs 3**.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung zu anderen Brandschutz-Themen",
        paragraphs: [
          "**Brandschutzkonzept / Baugenehmigung** belegen die bauliche Genehmigungsfähigkeit – sie ersetzen keine Sanierung nach Brand. **Brandschutzbeauftragter** organisiert den laufenden Betrieb, nicht die Schadensbeseitigung in kontaminierten Zonen. **Feuerwehr-Brandschau** prüft Einsatz- und bauordnungsrechtliche Voraussetzungen im Betrieb – nicht den Sanierungsablauf nach VdS 2357.",
          "Nach einem Brand im Gewerbebetrieb können alle Ebenen nacheinander relevant werden: zuerst Sanierung und Sicherung, danach Fortschreibung von [Brandschutzordnung und Plänen](/ratgeber/escape-room-brandschutzordnung-fluchtplan) und ggf. [Umbau-Nachweise](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Mehrfamilienhaus mit Dachstuhlbrand",
        paragraphs: [
          "Typischer Ablauf: Nach dem Löschen wird das Objekt gesichert, die Versicherung informiert und eine Erstbegehung durchgeführt. Der Schadensort wird in Gefahrenbereiche eingeteilt – bei ausgedehntem Ruß und älteren Baustoffen oft GB 2 oder GB 3. Erst dann folgen Sanierungs- und Entsorgungskonzept, Arbeits- und Sicherheitsplan (A+S-Plan) und die eigentliche Schadenbeseitigung durch ein qualifiziertes Unternehmen.",
          "Häufiger Fehler: Sofort mit Abbruch oder Trocknung starten, ohne Einstufung und ohne Schutzmaßnahmen – das gefährdet Handwerker und kann Entsorgungs- und Versicherungsnachweise erschweren.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber gibt einen Überblick nach VdS 2357 und DGUV 101-004. Er ersetzt keine Gefährdungsbeurteilung, kein Sanierungskonzept und keine Rechtsberatung im Einzelfall. Verbindlich sind Brandgutachten, Versicherungsbedingungen und die Festlegung durch Fachkundige.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gefahrenbereiche-brandschadensanierung-vds-2357", label: "Gefahrenbereiche GB 0–3" },
      { href: "/ratgeber/ablauf-brandschadensanierung-vds-2357", label: "Ablaufschema VdS 2357" },
      { href: "/ratgeber/aufgaben-auftraggeber-brandschadensanierung", label: "Aufgaben des Auftraggebers" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandssanierung BauO NRW" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Was ist die „kalte Brandstelle“?",
        answer:
          "Die Brandstelle nach Beendigung des aktiven Brandes und der ersten Sicherung – bevor die fachgerechte Schadenbeseitigung nach VdS 2357 beginnt. Hier liegen Ruß, Löschwasser und kontaminierte Materialien.",
      },
      {
        question: "Ist Brandschadensanierung immer ein kontaminierter Bereich?",
        answer:
          "Nicht immer. Gefahrenbereich 0 (kleine Brände mit begrenzter Verunreinigung) kann anders behandelt werden. Ab Gefahrenbereich 1 gilt der Schadensort als kontaminierter Bereich im Sinne von DGUV 101-004 und TRGS 524.",
      },
      {
        question: "Wer darf Brandschadensanierung durchführen?",
        answer:
          "Das ausführende Unternehmen braucht Sachkunde nach DGUV Regel 101-004. Der Auftraggeber muss vorab Gefahrenbereiche einstufen und Konzept sowie A+S-Plan bereitstellen lassen.",
      },
      {
        question: "Brauche ich nach einem Brand ein neues Brandschutzkonzept?",
        answer:
          "Nicht automatisch. Bei Wiederherstellung oder Umbau im Bestand kann ein Konzept oder eine Stellungnahme nötig sein – abhängig vom Schaden und der Nutzung. Sanierung und baurechtlicher Nachweis sind getrennte Stränge.",
      },
      {
        question: "Was kostet Brandschadensanierung?",
        answer:
          "Abhängig von Brandbild, Gefahrenbereich, Fläche und Entsorgung. Die Einstufung in GB 0–3 und das Sanierungskonzept bestimmen den Aufwand – pauschale Quadratmeterpreise sind selten aussagekräftig.",
      },
    ],
  },
  {
    slug: "gefahrenbereiche-brandschadensanierung-vds-2357",
    title: "Gefahrenbereiche GB 0 bis GB 3 bei Brandschadensanierung",
    excerpt:
      "Wie der Schadensort nach VdS 2357 in Gefahrenbereiche 0 bis 3 eingeteilt wird, ab wann ein kontaminierter Bereich vorliegt und warum ohne Einstufung GB-3-Maßnahmen gelten.",
    metaTitle: "Gefahrenbereiche GB 0–3 | VdS 2357 | H&S+",
    metaDescription:
      "Gefahrenbereiche bei Brandschadensanierung: GB 0 bis GB 3 nach VdS 2357 erklärt – wann ein kontaminierter Bereich vorliegt und welche Maßnahmen dann Pflicht sind.",
    keywords: [
      "Gefahrenbereich Brandschadensanierung",
      "GB 0 GB 1 GB 2 GB 3",
      "VdS 2357 Tabelle 1",
      "kontaminierter Bereich Brand",
      "Schadensort Einstufung",
    ],
    sections: [
      {
        id: "warum",
        title: "Warum Gefahrenbereiche vor der Sanierung?",
        paragraphs: [
          "Vor jeder Schadenbeseitigung muss der Schadensort in **Gefahren- und Arbeitsbereiche** eingeteilt werden. Die Einstufung nach **VdS 2357, Tabelle 1** bestimmt technische, organisatorische und persönliche Schutzmaßnahmen – und ob Entsorgung als Hausmüll oder als Sonderabfall erfolgt.",
          "Ohne Einstufung gilt die Faustregel: Es sind die Maßnahmen des **Gefahrenbereichs 3** anzuwenden. Das schützt Beschäftigte, ist aber oft teurer als eine sachgerechte Einordnung nach Erstbegehung.",
        ],
      },
      {
        id: "gb0",
        title: "Gefahrenbereich 0 (GB 0)",
        paragraphs: [
          "GB 0 umfasst **kleine Brände mit begrenzter Verunreinigung** – typisch ein überschaubarer Brandherd mit lokalem Ruß, ohne breite Ausbreitung gefährlicher Stoffe. Im Ablaufschema nach VdS 2357 kann die Entsorgung hier als **Hausmüll** erfolgen, sofern die Einstufung und das Entsorgungskonzept das zulassen.",
          "Abgrenzung: Ein vermeintlich „kleiner“ Küchenbrand kann bei Kunststoffen, Löschpulver und Feuchte dennoch GB 1 oder höher auslösen – die Erstbegehung durch Fachkundige ist entscheidend.",
        ],
      },
      {
        id: "gb1-3",
        title: "Gefahrenbereiche 1 bis 3",
        paragraphs: [
          "GB 1 bis GB 3 werden anhand der **verbrannten Güter**, des **Brandbildes** und der **Schadstoffbelastung** festgelegt. Je höher der Gefahrenbereich, desto strenger sind Abschottung, Schutzkleidung, Entsorgung und arbeitsmedizinische Vorsorge.",
        ],
        list: [
          "**GB 1:** erhöhte Belastung, kontaminierter Bereich – Grundschutzmaßnahmen nach VdS 2357 Tab. 1",
          "**GB 2:** deutliche Kontamination, oft ältere Baustoffe oder größere Rußflächen",
          "**GB 3:** hohe Belastung oder unklare Schadstofflage – strengste Schutz- und Entsorgungsanforderungen",
        ],
      },
      {
        id: "kontaminiert",
        title: "Ab wann liegt ein kontaminierter Bereich vor?",
        paragraphs: [
          "Ab **Gefahrenbereich 1** gilt der Schadensort als **kontaminierter Bereich** im Sinne von DGUV Regel 101-004 und TRGS 524. Dann gelten Sachkundeanforderungen an ausführende Unternehmen, Gefährdungsbeurteilungen, Schutzmaßnahmen und ggf. arbeitsmedizinische Vorsorge.",
          "GB 0 ist die Ausnahme für klar begrenzte Fälle – nicht die Standardannahme nach einem strukturellen Gebäudebrand.",
        ],
      },
      {
        id: "einstufung",
        title: "Wer stuft ein und worauf achten?",
        paragraphs: [
          "Die **Einstufung obliegt dem Auftraggeber** – in der Praxis durch beauftragte Sachverständige oder qualifizierte Brandschadensanierer auf Basis der Erstbegehung. Bewertet werden unter anderem:",
        ],
        list: [
          "Ausmaß und Verteilung von Ruß und Kondensaten",
          "Verbrannte Stoffe (Kunststoffe, Lacke, Lagerware, Elektronik)",
          "Verdacht auf Asbest, Mineralfasern (KMF) oder andere Altbaustoffe",
          "Biologische Belastung durch Feuchte und Löschwasser",
          "Zugänglichkeit und notwendige Arbeitsbereiche",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler bei der Einstufung",
        list: [
          "„Sieht nicht so schlimm aus“ – Einstufung ohne Probenahme oder Fachbegehung",
          "GB 0 angenommen, obwohl der Dachstuhl oder Technikraum betroffen ist",
          "Keine schriftliche Dokumentation der Gefahrenbereiche für Versicherer und Handwerker",
          "Unterschiedliche Gefahrenbereiche im Gebäude, aber nur eine Zone für alles definiert",
        ],
        paragraphs: [
          "Falsche Einstufung gefährdet Gesundheit und kann Versicherungs- und Entsorgungsnachweise invalidieren.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Die konkrete Zuordnung zu GB 0–3 erfolgt im Einzelfall nach VdS 2357 Tab. 1. Dieser Ratgeber ersetzt keine Erstbegehung und keine laborseitige Schadstoffanalytik, wenn diese erforderlich ist.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschadensanierung-ueberblick-vds-2357", label: "Überblick Brandschadensanierung" },
      { href: "/ratgeber/ablauf-brandschadensanierung-vds-2357", label: "Ablaufschema" },
      { href: "/ratgeber/entsorgung-schutzmassnahmen-brandschadensanierung", label: "Entsorgung & Schutz" },
      { href: "/ratgeber/gefaehrdungsbeurteilung-sofortmassnahmen-brandschadensanierung", label: "Gefährdungsbeurteilung" },
    ],
    faq: [
      {
        question: "Was passiert, wenn keine Einstufung erfolgt?",
        answer:
          "Es gelten die Maßnahmen des Gefahrenbereichs 3 – maximaler Schutz, höchster Aufwand. Eine frühe Fachbegehung spart oft Kosten und reduziert Risiken.",
      },
      {
        question: "Kann ein Raum GB 1 und der Flur GB 0 sein?",
        answer:
          "Ja. Gefahren- und Arbeitsbereiche werden räumlich differenziert. Der A+S-Plan muss Zonen, Übergänge und Schutzmaßnahmen je Bereich beschreiben.",
      },
      {
        question: "Ist GB 0 immer Hausmüll?",
        answer:
          "Nicht automatisch. GB 0 erlaubt vereinfachte Entsorgung nur, wenn das Sanierungs- und Entsorgungskonzept das nach Prüfung festlegt.",
      },
      {
        question: "Wer dokumentiert die Gefahrenbereiche?",
        answer:
          "Der Auftraggeber – auf Basis der Erstbegehung und des Sanierungskonzepts. Das ausführende Unternehmen arbeitet nach dieser Einstufung und ergänzt die Gefährdungsbeurteilung für seine Tätigkeiten.",
      },
      {
        question: "Brauche ich Probenahme bei jedem Brand?",
        answer:
          "Bei Verdacht auf Asbest, KMF, PCB oder unklarer Chemikalienbelastung ja. Bei einfachen GB-0-Fällen kann eine qualifizierte Sichtbegehung ausreichen – im Zweifel Proben ziehen.",
      },
    ],
  },
  {
    slug: "ablauf-brandschadensanierung-vds-2357",
    title: "Ablaufschema Brandschadensanierung nach VdS 2357",
    excerpt:
      "Der Ablauf in sechs Phasen: Meldung, Erstbegehung, Konzept, Schadenbeseitigung, Abnahme und Entsorgung – die Reihenfolge nach VdS 2357, die Sie nicht vertauschen dürfen.",
    metaTitle: "Brandschadensanierung Ablauf: 6 Phasen | VdS 2357 | H&S+",
    metaDescription:
      "Der Ablauf in 6 Phasen: Meldung, Erstbegehung, Konzept, Schadenbeseitigung, Abnahme, Entsorgung – Reihenfolge nach VdS 2357, die Sie einhalten müssen.",
    keywords: [
      "Ablauf Brandschadensanierung",
      "VdS 2357 Ablaufschema",
      "Erstbegehung Brand",
      "Schadenbeseitigung Brand",
      "Abnahme Brandschadensanierung",
    ],
    sections: [
      {
        id: "ueberblick",
        title: "Das Ablaufschema in Kurzform",
        paragraphs: [
          "VdS 2357 strukturiert die Brandschadensanierung in aufeinander aufbauende Phasen. **Auftraggeber** und **ausführendes Unternehmen** haben getrennte, klar definierte Aufgaben – Überschneidungen sind über Schnittstellen im Sanierungskonzept und A+S-Plan geregelt.",
        ],
        list: [
          "1. Meldung an Versicherer, Sicherung des Schadensortes",
          "2. Erstbegehung und Einstufung in Gefahren- und Arbeitsbereiche",
          "3. Bei GB 1–3: Sofortmaßnahmen, Sanierungs- und Entsorgungskonzept, A+S-Plan",
          "4. Gefährdungsbeurteilung und Schutzmaßnahmen (ausführendes Unternehmen)",
          "5. Schadenbeseitigung",
          "6. Abnahme, ggf. Ergebniskontrolle, Entsorgung nach Konzept",
        ],
      },
      {
        id: "phase1",
        title: "Phase 1: Sicherung und Erstbegehung",
        paragraphs: [
          "Unmittelbar nach dem Brand: Objekt sichern (Strom, Wasser, Einsturzgefahr, Zutritt), Versicherer informieren, keine unsachgemäße Entsorgung. Die **Erstbegehung** dient der Ursachen- und Schadensfeststellung und der **Einstufung in Gefahrenbereiche** – sie ist Aufgabe des Auftraggebers bzw. seiner Fachleute.",
          "Bei **GB 0** kann der Pfad zur vereinfachten Entsorgung (Hausmüll) eröffnet werden, wenn das Konzept das bestätigt. Bei **GB 1–3** folgen zwingend Konzept, A+S-Plan und qualifizierte Schadenbeseitigung.",
        ],
      },
      {
        id: "phase2",
        title: "Phase 2: Konzept und Planung",
        paragraphs: [
          "Für GB 1–3 erstellt der Auftraggeber (über Fachkundige) ein **Sanierungs- und Entsorgungskonzept** sowie einen **Arbeits- und Sicherheitsplan (A+S-Plan)**. Darin: Gefahrenbereiche, Arbeitsabläufe, Schnittstellen, Entsorgungswege, Abschottungen, Reinigungsstufen.",
          "Das **ausführende Unternehmen** erstellt auf dieser Basis die **betriebsspezifische Gefährdungsbeurteilung** und legt Schutzmaßnahmen fest – siehe [Aufgaben des ausführenden Unternehmens](/ratgeber/ausfuehrendes-unternehmen-brandschadensanierung-dguv).",
        ],
      },
      {
        id: "phase3",
        title: "Phase 3: Schadenbeseitigung",
        paragraphs: [
          "Unter Schadenbeseitigung versteht VdS 2357 die eigentlichen Sanierungsarbeiten: Entfernen von Brandgut, Trocknung, Reinigung, Demontage, ggf. Wiederaufbau-Vorbereitung. Technische, organisatorische und persönliche Schutzmaßnahmen richten sich nach der Gefahrenbereich-Einstufung (Tab. 1).",
          "Arbeiten in kontaminierten Bereichen dürfen nur mit **Sachkunde nach DGUV 101-004** und geeigneter PSA erfolgen.",
        ],
      },
      {
        id: "phase4",
        title: "Phase 4: Abnahme und Entsorgung",
        paragraphs: [
          "Nach Abschluss: **Abnahme** und ggf. **Ergebniskontrolle** (z. B. Reinigungs- oder Schadstoffmessung). **Reststoffe und Abfälle** werden gemäß Entsorgungskonzept entsorgt – von Hausmüll (GB 0) bis Sonderabfall (GB 1–3).",
          "Dokumentation für Versicherer, spätere Vermietung oder Wiederinbetriebnahme aufbewahren.",
        ],
      },
      {
        id: "koordination",
        title: "Mehrere Firmen auf der Baustelle",
        paragraphs: [
          "Wenn mehrere Unternehmen gleichzeitig in einem kontaminierten Bereich arbeiten, ist ein **Koordinator mit Entscheidungsbefugnis** zu benennen – typisch der generalunternehmerische Sanierer oder ein vom Auftraggeber benannter SiGe-Koordinator. Er koordiniert Zonen, Zeiten und Schutzmaßnahmen.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Reihenfolge nicht vertauschen",
        paragraphs: [
          "Typischer Fehler: Handwerker beginnen mit Trocknung oder Abbruch, bevor Gefahrenbereiche und A+S-Plan stehen – dann müssen Arbeiten unterbrochen und Schutz nachgerüstet werden. Zweiter Fehler: Entsorgung ohne Konzept – Sonderabfall landet im Restmüll, Versicherer lehnen Kosten ab.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Das Ablaufschema ist ein Leitfaden nach VdS 2357. Versicherer, Behörden und Mietverhältnisse können zusätzliche Schritte verlangen. Dieser Ratgeber ersetzt kein individuelles Sanierungskonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/aufgaben-auftraggeber-brandschadensanierung", label: "Aufgaben Auftraggeber" },
      { href: "/ratgeber/arbeitssicherheitsplan-brandschadensanierung", label: "A+S-Plan" },
      { href: "/ratgeber/gefahrenbereiche-brandschadensanierung-vds-2357", label: "Gefahrenbereiche" },
      { href: "/ratgeber/brandschutz-abnahme-nach-umbau-koeln", label: "Abnahme nach Umbau" },
    ],
    faq: [
      {
        question: "Wann darf mit der Schadenbeseitigung begonnen werden?",
        answer:
          "Bei GB 1–3 erst nach Sanierungs- und Entsorgungskonzept, A+S-Plan und Gefährdungsbeurteilung des ausführenden Unternehmens. Sofortmaßnahmen (Sicherung, Strom, Leckagen) sind davon getrennt und unverzüglich.",
      },
      {
        question: "Wer führt die Abnahme durch?",
        answer:
          "Der Auftraggeber – oft mit Versicherer, Sachverständigem oder Messdienst. Bei Mietobjekten zusätzlich Abstimmung mit Vermieter und Nutzern.",
      },
      {
        question: "Was sind Sofortmaßnahmen?",
        answer:
          "Sicherung des Objekts, Schadensbegrenzung, Trocknung wo sinnvoll, Absperrung – ohne die eigentliche kontaminierte Schadenbeseitigung zu ersetzen.",
      },
      {
        question: "Gilt VdS 2357 gesetzlich?",
        answer:
          "VdS 2357 ist ein anerkannter Leitfaden; verbindlich sind DGUV-Regeln, TRGS und die Gefährdungsbeurteilung. VdS 2357 ist in der Praxis der maßgebliche fachliche Standard.",
      },
      {
        question: "Wie lange dauert eine Brandschadensanierung?",
        answer:
          "Von wenigen Tagen (GB 0, lokaler Schaden) bis Monate bei GB 3, Strukturschaden und Sonderabfall. Das Konzept sollte einen Zeitplan mit Meilensteinen enthalten.",
      },
    ],
  },
  {
    slug: "aufgaben-auftraggeber-brandschadensanierung",
    title: "Aufgaben des Auftraggebers bei Brandschadensanierung",
    excerpt:
      "Was Eigentümer und Unternehmer nach einem Brand selbst verantworten – Versicherung, Erstbegehung, Einstufung und Konzept beauftragen, ohne Pflichten an die Sanierungsfirma abzugeben.",
    metaTitle: "Eigentümer nach Brand: Ihre Pflichten | VdS 2357 | H&S+",
    metaDescription:
      "Was Eigentümer und Unternehmer nach einem Brand selbst verantworten: Versicherung, Erstbegehung, Einstufung, Konzept beauftragen – ohne Pflichten an die Sanierungsfirma abzugeben.",
    keywords: [
      "Auftraggeber Brandschadensanierung",
      "Eigentümer Pflichten nach Brand",
      "Erstbegehung Brand",
      "Sanierungskonzept Brand",
      "Versicherung Brandschaden",
    ],
    sections: [
      {
        id: "verantwortung",
        title: "Wer ist Auftraggeber?",
        paragraphs: [
          "Auftraggeber ist, wer die Sanierungsarbeiten in Auftrag gibt – in der Regel **Eigentümer**, **Vermieter** oder **Unternehmer** des betroffenen Objekts. Er trägt die Verantwortung für die Vorbereitung der Sanierung, auch wenn Versicherer und Sanierungsfirmen fachlich unterstützen.",
          "Die Pflichten ergeben sich aus VdS 2357, Arbeitsschutzrecht und dem Versicherungsvertrag – nicht nur aus dem Werkvertrag mit dem Handwerker.",
        ],
      },
      {
        id: "sofort",
        title: "Sofortmaßnahmen und Meldung",
        list: [
          "Schadensort absichern (Zutritt, Einsturz, Elektrik, Gas)",
          "Feuerwehr und ggf. Polizei informiert; Versicherer unverzüglich melden",
          "Keine unsachgemäße Beseitigung von Brandgut oder Löschwasser",
          "Dokumentation mit Fotos für Versicherer – ohne Gesundheitsrisiko in GB 1–3",
        ],
        paragraphs: [
          "Sofortmaßnahmen sind **nicht** die vollständige Schadenbeseitigung – sie begrenzen Folgeschäden, bis Fachleute die Einstufung vornehmen.",
        ],
      },
      {
        id: "erstbegehung",
        title: "Erstbegehung und Einstufung",
        paragraphs: [
          "Der Auftraggeber veranlasst die **Erstbegehung** zur Ursachen- und Schadensfeststellung und die **Einstufung des Schadensortes in Gefahren- und Arbeitsbereiche** nach VdS 2357. Das ist Voraussetzung für jedes weitere Vorgehen bei GB 1–3.",
          "Ohne diese Schritte haftet der Auftraggeber, wenn Beschäftigte ohne Schutz arbeiten oder Abfälle falsch entsorgt werden.",
        ],
      },
      {
        id: "konzept",
        title: "Sanierungs- und Entsorgungskonzept",
        paragraphs: [
          "Für GB 1–3 erstellt der Auftraggeber (über Fachkundige) ein **Sanierungs- und Entsorgungskonzept**. Es beschreibt Umfang, Reihenfolge, Reinigungsstufen, Abbruch, Entsorgungswege und Schnittstellen zu Versicherer und Behörden.",
          "Das Konzept ist die Grundlage für Ausschreibung, Angebote und den **Arbeits- und Sicherheitsplan** – siehe [A+S-Plan](/ratgeber/arbeitssicherheitsplan-brandschadensanierung).",
        ],
      },
      {
        id: "as-plan",
        title: "Arbeits- und Sicherheitsplan (A+S-Plan)",
        paragraphs: [
          "Der **A+S-Plan** wird durch Fachkundige im Auftrag des Auftraggebers erstellt. Er konkretisiert Gefahrenbereiche, Arbeitszonen, Absperrungen, Lüftung, Entsorgung vor Ort und Anforderungen an ausführende Unternehmen.",
          "Der A+S-Plan ist **nicht** optional bei GB 1–3 – er ist die verbindliche Schnittstelle zwischen Auftraggeber und Sanierer.",
        ],
      },
      {
        id: "abnahme",
        title: "Abnahme und Dokumentation",
        paragraphs: [
          "Nach Schadenbeseitigung: **Abnahme** und ggf. **Ergebniskontrolle** (Messung, Sichtprüfung). Entsorgungsnachweise aufbewahren. Bei Gewerbebetrieben: Abstimmung mit [Brandschutzbeauftragtem](/ratgeber/aufgaben-brandschutzbeauftragter-koeln) und Fortschreibung von BSO und Plänen vor Wiedereröffnung.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler von Auftraggebern",
        list: [
          "Sanierer beauftragen, ohne selbst Einstufung und Konzept zu veranlassen",
          "Versicherer erst nach Beginn der Arbeiten informieren",
          "Mietern oder Nachbarn Zutritt ohne Schutzmaßnahmen ermöglichen",
          "Entsorgung dem „günstigsten“ Containerdienst überlassen ohne Konzept",
        ],
        paragraphs: [],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber beschreibt Pflichten nach VdS 2357. Versicherungsbedingungen, Mietrecht und baurechtliche Genehmigungen können zusätzliche Anforderungen stellen. Keine Rechtsberatung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/ablauf-brandschadensanierung-vds-2357", label: "Ablaufschema" },
      { href: "/ratgeber/arbeitssicherheitsplan-brandschadensanierung", label: "A+S-Plan" },
      { href: "/ratgeber/gefaehrdungsbeurteilung-sofortmassnahmen-brandschadensanierung", label: "Gefährdungsbeurteilung" },
      { href: "/ratgeber/brandschutzberatung-koeln-auflagen-risiken", label: "Brandschutzberatung" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Kann ich die Sanierung komplett an die Versicherung abgeben?",
        answer:
          "Die Versicherung reguliert oft den Schaden, aber Auftraggeberpflichten (Einstufung, Konzept, A+S-Plan) bleiben beim Eigentümer bzw. Betreiber – auch wenn Fachfirmen beauftragt werden.",
      },
      {
        question: "Muss ich als Vermieter den A+S-Plan erstellen?",
        answer:
          "Wer die Sanierung veranlasst, ist Auftraggeber – bei Mietobjekten oft der Eigentümer, bei Gewerbemiete ggf. der Mieter je nach Vertrag. Verantwortlichkeiten im Mietvertrag klären.",
      },
      {
        question: "Wer darf die Erstbegehung durchführen?",
        answer:
          "Qualifizierte Brandschadensanierer, Sachverständige oder Ingenieure mit Erfahrung in kontaminierten Bereichen – nicht der Hausmeister ohne Sachkunde.",
      },
      {
        question: "Brauche ich bei GB 0 auch ein Konzept?",
        answer:
          "Ein vollständiges Konzept wie bei GB 3 ist oft nicht nötig – aber eine dokumentierte Einstufung und Entsorgungsfestlegung sollte auch bei GB 0 vorliegen.",
      },
      {
        question: "Was passiert bei Verzug?",
        answer:
          "Folgeschäden durch Feuchte, Schimmel und Korrosion vergrößern den Gefahrenbereich. Versicherer können Kosten nur begrenzt übernehmen, wenn Sofortmaßnahmen unterblieben.",
      },
    ],
  },
  {
    slug: "gefaehrdungsbeurteilung-sofortmassnahmen-brandschadensanierung",
    title: "Gefährdungsbeurteilung und Sofortmaßnahmen nach Brand",
    excerpt:
      "Sofortmaßnahmen in den ersten 48 Stunden nach Brand: Sicherung, Meldung, Feuchte begrenzen – und was erst nach der GB-Einstufung erlaubt ist.",
    metaTitle: "Sofortmaßnahmen nach Brand: Was ist erlaubt? | H&S+",
    metaDescription:
      "Sofortmaßnahmen in den ersten 48 Stunden: Sicherung, Meldung, Feuchte begrenzen – und was Sie erst nach der GB-Einstufung dürfen. Gefährdungsbeurteilung kurz erklärt.",
    keywords: [
      "Gefährdungsbeurteilung Brandschadensanierung",
      "Sofortmaßnahmen nach Brand",
      "TRGS 524 Gefährdungsbeurteilung",
      "Schadensort sichern",
      "Brand Folgeschäden vermeiden",
    ],
    sections: [
      {
        id: "zwei-ebenen",
        title: "Zwei Ebenen: Sofort und geplant",
        paragraphs: [
          "Nach einem Brand gibt es **unverzügliche Sofortmaßnahmen** (Sicherung, Schadensbegrenzung) und die **vorbereitende Gefährdungsbeurteilung** für die kontaminierte Schadenbeseitigung. Beides darf nicht vermischt werden: Trocknungsgeräte in GB-3-Zonen ohne Abschottung oder Abbruch ohne PSA sind keine Sofortmaßnahmen.",
        ],
      },
      {
        id: "sofortmassnahmen",
        title: "Sofortmaßnahmen – typische Maßnahmen",
        list: [
          "Absperren des Schadensortes, Zutritt nur für Einsatzkräfte und Fachleute",
          "Strom, Gas und Wasser sichern; Einsturzgefahr bewerten",
          "Löschwasser und Feuchte begrenzen (Leckagen, Abpumpen – mit Entsorgungsplan)",
          "Versicherer und ggf. Behörden informieren",
          "Erste Dokumentation ohne unnötige Exposition in kontaminierten Zonen",
        ],
        paragraphs: [
          "Sofortmaßnahmen dienen der **Schadensbegrenzung**, nicht dem vollständigen Wiederaufbau.",
        ],
      },
      {
        id: "gbf",
        title: "Gefährdungsbeurteilung vor Schadenbeseitigung",
        paragraphs: [
          "Vor Arbeiten in kontaminierten Bereichen (ab GB 1) ist eine **Gefährdungsbeurteilung** nach Arbeitsschutzrecht und TRGS 524 erforderlich. Der **Auftraggeber** stuft den Schadensort ein; das **ausführende Unternehmen** beurteilt die Gefährdungen seiner konkreten Tätigkeiten auf Basis des A+S-Plans.",
          "Inhalt: Gefahrstoffe und biologische Arbeitsstoffe, Exposition, Schutzmaßnahmen (technisch, organisatorisch, persönlich), arbeitsmedizinische Vorsorge, Unterweisung.",
        ],
      },
      {
        id: "schutz",
        title: "Schutzmaßnahmen nach Gefahrenbereich",
        paragraphs: [
          "Technische, organisatorische und persönliche Schutzmaßnahmen werden anhand der **Gefahrenbereich-Einstufung** nach VdS 2357 Tab. 1 festgelegt. Je höher der GB, desto strenger Abschottung, Unterdruck/Lüftung, PSA und Entsorgung vor Ort.",
          "Ohne Einstufung: Maßnahmen wie **GB 3** anwenden.",
        ],
      },
      {
        id: "vorsorge",
        title: "Arbeitsmedizinische Vorsorge",
        paragraphs: [
          "Bei Arbeiten in kontaminierten Bereichen kann **arbeitsmedizinische Vorsorge** (Pflicht- oder Angebotsvorsorge) über den Betriebsarzt erforderlich sein – inklusive ggf. **Biomonitoring**. Das ausführende Unternehmen organisiert die Vorsorge für seine Beschäftigten; der Auftraggeber muss Zutritt und Informationen ermöglichen.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung zur betrieblichen Gefährdungsbeurteilung",
        paragraphs: [
          "Die allgemeine **Gefährdungsbeurteilung nach ASR A2.2** im laufenden Betrieb deckt nicht automatisch die Sanierung nach Brand ab. Nach einem Schaden entsteht eine **neue, temporäre Gefährdungssituation** – separate Beurteilung und Dokumentation sind nötig.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Sanierung und Dokumentation",
        paragraphs: [
          "Bei Gefährdungsbeurteilung und Sofortmaßnahmen nach Brand in NRW greifen Arbeitsschutz, Gefahrstoffrecht und Brandschutz gleichzeitig – ein gemeinsames Sanierungskonzept verhindert Widersprüche zwischen Gewerbeaufsicht und Bauaufsicht. Abgrenzung: BSO ersetzt keine Gefährdungsbeurteilung nach DGUV; Entsorgungsnachweis ersetzt kein Freigabeprotokoll.",
          "Praxisfall: Asbesthaltige Reste neben aktiver Produktion – Behörde verlangte Sperrzonen, Unterdruck und dokumentierte Freigabe vor Wiederinbetriebnahme. Typische Behördenforderung: ASP und Brandschutzplaner früh einbinden.",
          "Nachweis: Arbeitssicherheitsplan, GBU-Abschnitt und Übergabeprotokoll an den Betreiber – nicht nur Rechnung des Entsorgers.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Konkrete Maßnahmen hängen vom Einzelfall ab. Laboranalysen, Asbestgutachten und behördliche Auflagen können zusätzlich erforderlich sein.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gefahrenbereiche-brandschadensanierung-vds-2357", label: "Gefahrenbereiche" },
      { href: "/ratgeber/entsorgung-schutzmassnahmen-brandschadensanierung", label: "Schutzmaßnahmen" },
      { href: "/ratgeber/ausfuehrendes-unternehmen-brandschadensanierung-dguv", label: "Ausführendes Unternehmen" },
      { href: "/ratgeber/bestellung-brandschutzbeauftragter-nrw", label: "BSB & Gefährdungsbeurteilung" },
    ],
    faq: [
      {
        question: "Darf ich selbst mit dem Aufräumen beginnen?",
        answer:
          "In GB 0 mit geringer Belastung und nach kurzer Einweisung ggf. ja. Ab GB 1 nur mit Sachkunde, PSA und Plan – sonst Gesundheitsrisiko und Haftung.",
      },
      {
        question: "Wer erstellt die Gefährdungsbeurteilung?",
        answer:
          "Das ausführende Unternehmen für seine Arbeiten; der Auftraggeber liefert Einstufung, Konzept und A+S-Plan als Grundlage.",
      },
      {
        question: "Was ist Biomonitoring?",
        answer:
          "Ärztliche Überwachung der Exposition gegenüber Schadstoffen – z. B. Blut- oder Urintests bei bestimmten Gefahrstoffen. Kann bei GB 2/3 relevant sein.",
      },
      {
        question: "Reicht eine Gefährdungsbeurteilung für alle Gewerke?",
        answer:
          "Jedes ausführende Unternehmen braucht eine auf seine Tätigkeit bezogene Beurteilung. Der Koordinator stellt Konsistenz auf der Baustelle sicher.",
      },
      {
        question: "Wann ist Trocknung eine Sofortmaßnahme?",
        answer:
          "Wenn Feuchteschäden unmittelbar begrenzt werden müssen – aber Geräte, Zonen und Entsorgung des Kondensats müssen zum Gefahrenbereich passen.",
      },
    ],
  },
  {
    slug: "arbeitssicherheitsplan-brandschadensanierung",
    title: "Arbeits- und Sicherheitsplan (A+S-Plan) bei Brandschadensanierung",
    excerpt:
      "Was in den Arbeits- und Sicherheitsplan nach VdS 2357 gehört: Zonenplan, Absperrungen, Entsorgungswege und Pflichtinhalte für GB 1–3 – das zentrale Baustellendokument.",
    metaTitle: "A+S-Plan nach Brand: Inhalte & Pflichten | VdS 2357 | H&S+",
    metaDescription:
      "Was in den Arbeits- und Sicherheitsplan gehört: Zonenplan, Absperrungen, Entsorgungswege und Pflichtinhalte für GB 1–3 – das zentrale Baustellendokument nach VdS 2357.",
    keywords: [
      "Arbeits- und Sicherheitsplan Brand",
      "A+S-Plan Brandschadensanierung",
      "VdS 2357 A+S-Plan",
      "Sanierungskonzept Brand",
      "SiGe Plan Brand",
    ],
    sections: [
      {
        id: "was",
        title: "Was ist der A+S-Plan?",
        paragraphs: [
          "Der **Arbeits- und Sicherheitsplan (A+S-Plan)** ist das zentrale Planungsdokument für die Brandschadensanierung bei **Gefahrenbereichen 1 bis 3**. Er beschreibt, **wo** und **wie** gearbeitet wird, welche **Gefahrenbereiche und Arbeitszonen** gelten und welche **Schutz- und Entsorgungsmaßnahmen** einzuhalten sind.",
          "Er wird vom **Auftraggeber** durch Fachkundige erstellt und ist Voraussetzung für die Beauftragung und die Gefährdungsbeurteilung des ausführenden Unternehmens.",
        ],
      },
      {
        id: "inhalt",
        title: "Typische Inhalte",
        list: [
          "Grundriss/Schnitt mit Gefahrenbereichen GB 0–3 und Arbeitszonen",
          "Reihenfolge der Sanierungsschritte (Abbruch, Reinigung, Trocknung, Entsorgung)",
          "Absperrungen, Beschilderung, Zutrittsregeln",
          "Lüftung, Unterdruck, Filter – je nach GB",
          "Entsorgungswege: Sammelstellen, Container, Sonderabfall",
          "Schnittstellen zu Versicherer, Messungen, Abnahme",
          "Anforderungen an ausführende Unternehmen (Sachkunde, PSA, Unterweisung)",
        ],
        paragraphs: [],
      },
      {
        id: "bezug",
        title: "Bezug zu Sanierungskonzept und Gefährdungsbeurteilung",
        paragraphs: [
          "Das **Sanierungs- und Entsorgungskonzept** legt das „Was“ und „Wozu“ fest – der A+S-Plan das „Wo“ und „Wie“ auf der Baustelle. Die **Gefährdungsbeurteilung** des Sanierers bezieht sich auf den A+S-Plan und konkretisiert Schutzmaßnahmen für die eigenen Beschäftigten.",
          "Alle drei Dokumente müssen zusammenpassen; Widersprüche führen zu Baustellenstillstand und Haftungsfragen.",
        ],
      },
      {
        id: "wer",
        title: "Wer erstellt den A+S-Plan?",
        paragraphs: [
          "Fachkundige im Auftrag des **Auftraggebers** – typisch Brandschadensanierer mit DGUV-101-004-Qualifikation, Sachverständige oder spezialisierte Planer. Der Auftraggeber bleibt verantwortlich, auch wenn die Versicherung einen Dienstleister vorschlägt.",
        ],
      },
      {
        id: "koordination",
        title: "Koordination bei mehreren Gewerken",
        paragraphs: [
          "Der A+S-Plan benennt **Zuständigkeiten und Zeiten**, wenn mehrere Firmen im kontaminierten Bereich arbeiten. Ein **Koordinator mit Entscheidungsbefugnis** passt den Plan bei Änderungen an (neue Schadstofffunde, Wetter, Verzögerungen).",
        ],
      },
      {
        id: "fehler",
        title: "Typische Mängel im A+S-Plan",
        list: [
          "Nur Fließtext ohne Lageplan und Zonen",
          "Entsorgung „extern“ ohne konkrete Wege und Containerstandorte",
          "Keine Regelung für Nachbarn, Mieter oder gemeinsame Flure",
          "Plan veraltet nach Umbau der Abschottung während der Sanierung",
        ],
        paragraphs: [],
      },
      {
        id: "vertiefung",
        title: "Praxis: Sanierung und Dokumentation",
        paragraphs: [
          "Bei Arbeits- und Sicherheitsplan (A+S-Plan) bei Brandschadensanierung in NRW greifen Arbeitsschutz, Gefahrstoffrecht und Brandschutz gleichzeitig – ein gemeinsames Sanierungskonzept verhindert Widersprüche zwischen Gewerbeaufsicht und Bauaufsicht. Abgrenzung: BSO ersetzt keine Gefährdungsbeurteilung nach DGUV; Entsorgungsnachweis ersetzt kein Freigabeprotokoll.",
          "Praxisfall: Asbesthaltige Reste neben aktiver Produktion – Behörde verlangte Sperrzonen, Unterdruck und dokumentierte Freigabe vor Wiederinbetriebnahme. Typische Behördenforderung: ASP und Brandschutzplaner früh einbinden.",
          "Nachweis: Arbeitssicherheitsplan, GBU-Abschnitt und Übergabeprotokoll an den Betreiber – nicht nur Rechnung des Entsorgers.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Der A+S-Plan ist kein Brandschutzkonzept im baurechtlichen Sinne und kein Ersatz für Genehmigungen bei Wiederaufbau. Er regelt Arbeitssicherheit und Sanierungsablauf nach VdS 2357.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/aufgaben-auftraggeber-brandschadensanierung", label: "Aufgaben Auftraggeber" },
      { href: "/ratgeber/ablauf-brandschadensanierung-vds-2357", label: "Ablaufschema" },
      { href: "/ratgeber/fachbauleitung-brandschutz-baustelle-koeln", label: "Fachbauleitung Baustelle" },
      { href: "/ratgeber/gefaehrdungsbeurteilung-sofortmassnahmen-brandschadensanierung", label: "Gefährdungsbeurteilung" },
    ],
    faq: [
      {
        question: "Brauche ich einen A+S-Plan bei GB 0?",
        answer:
          "Bei klar begrenztem GB 0 oft vereinfacht oder im Sanierungskonzept integriert. Bei GB 1–3 ist ein eigenständiger A+S-Plan Pflichtbestandteil.",
      },
      {
        question: "Ist der A+S-Plan dasselbe wie ein SiGe-Plan?",
        answer:
          "Verwandt in der Koordinationsidee, aber fachlich auf kontaminierte Brandschadensanierung nach VdS 2357 ausgerichtet – nicht identisch mit der Baustellen-SiGe nach Baustellenverordnung, kann aber parallel nötig sein.",
      },
      {
        question: "Muss der Versicherer den Plan genehmigen?",
        answer:
          "Versicherer fordern oft das Konzept und den A+S-Plan vor Kostenfreigabe. Rechtlich bindend für Arbeitsschutz ist die Gefährdungsbeurteilung und Einhaltung von TRGS 524.",
      },
      {
        question: "Wer aktualisiert den Plan bei Änderungen?",
        answer:
          "Der Auftraggeber über die planenden Fachkundigen – der Koordinator auf der Baustelle meldet Abweichungen.",
      },
      {
        question: "Kann H&S+ einen A+S-Plan erstellen?",
        answer:
          "Im Rahmen der fachlichen Begleitung und Beratung nach Abstimmung des Umfangs – abhängig von Objekt und Gefahrenbereich. Erstberatung zur Einordnung: Kontaktformular.",
      },
    ],
  },
  {
    slug: "ausfuehrendes-unternehmen-brandschadensanierung-dguv",
    title: "Aufgaben des ausführenden Unternehmens nach DGUV 101-004",
    excerpt:
      "Worauf Sie bei der Sanierungsfirma achten: Sachkunde DGUV 101-004, PSA, Unterweisung und eigene Gefährdungsbeurteilung – Checkliste für die Auftragsvergabe.",
    metaTitle: "Sanierungsfirma prüfen: DGUV 101-004 | H&S+",
    metaDescription:
      "Worauf Sie bei der Sanierungsfirma achten: Sachkunde DGUV 101-004, PSA, Unterweisung und eigene Gefährdungsbeurteilung – Checkliste für die Auftragsvergabe nach Brand.",
    keywords: [
      "ausführendes Unternehmen Brandschadensanierung",
      "DGUV 101-004 Sachkunde",
      "TRGS 524 Sanierung",
      "Brandschadensanierung Firma",
      "PSA kontaminierte Bereiche",
    ],
    sections: [
      {
        id: "rolle",
        title: "Rolle des ausführenden Unternehmens",
        paragraphs: [
          "Das **ausführende Unternehmen** führt die Schadenbeseitigung nach VdS 2357 technisch aus. Es arbeitet auf Basis von Einstufung, Sanierungskonzept und **A+S-Plan** des Auftraggebers und erstellt die **betriebsspezifische Gefährdungsbeurteilung** für seine Tätigkeiten.",
        ],
      },
      {
        id: "sachkunde",
        title: "Sachkunde und Fachkunde",
        paragraphs: [
          "Das Unternehmen muss über **Sachkunde für Arbeiten in kontaminierten Bereichen** nach **DGUV Regel 101-004** verfügen. Die Anforderungen der **Anhänge 6 A/B** erfüllen zugleich die Vorgaben der **TRGS 524, Anhang 2 A/B** für Sachkunde bzw. Fachkunde.",
          "Ohne nachweisbare Qualifikation dürfen keine Arbeiten in GB 1–3 ausgeführt werden.",
        ],
      },
      {
        id: "aufgaben",
        title: "Pflichten des Unternehmens",
        list: [
          "Arbeitsverfahren festlegen und **Gefährdungsbeurteilung** durchführen",
          "Technische, organisatorische und **persönliche Schutzmaßnahmen** (PSA) bereitstellen",
          "**Betriebsanweisungen** für die konkreten Tätigkeiten erstellen",
          "Beschäftigte über Gefahren **unterweisen** und Ersthelfer organisieren",
          "Mit **A+S-Plan** und Koordinator abstimmen, wenn mehrere Firmen arbeiten",
        ],
        paragraphs: [],
      },
      {
        id: "psa",
        title: "Persönliche Schutzausrüstung",
        paragraphs: [
          "PSA richtet sich nach Gefahrenbereich und Tätigkeit – von Atemschutz und Schutzanzug bis zu Handschuhen und Augenschutz. Der Auftraggeber stellt Zutritt und Informationen bereit; das Unternehmen wählt und unterhält die PSA und dokumentiert Unterweisung und Einsatz.",
        ],
      },
      {
        id: "koordinator",
        title: "Koordinator bei mehreren Firmen",
        paragraphs: [
          "Arbeiten mehrere Unternehmen gleichzeitig im kontaminierten Bereich, ist ein **Koordinator mit Entscheidungsbefugnis** zu benennen. Er löst Konflikte bei Zonen, Lüftung und Zeiten – der Sanierer muss seine Planung mit ihm abstimmen.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Was das Unternehmen nicht ersetzt",
        paragraphs: [
          "Es ersetzt nicht die **Pflichten des Auftraggebers** (Einstufung, Konzept, A+S-Plan). Es erstellt kein **baurechtliches Brandschutzkonzept** für Genehmigungen – das bleibt Planer/Sachverständiger. Es übernimmt nicht die **Versicherungsregulierung**.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Sanierung und Dokumentation",
        paragraphs: [
          "Bei Aufgaben des ausführenden Unternehmens nach DGUV 101-004 in NRW greifen Arbeitsschutz, Gefahrstoffrecht und Brandschutz gleichzeitig – ein gemeinsames Sanierungskonzept verhindert Widersprüche zwischen Gewerbeaufsicht und Bauaufsicht. Abgrenzung: BSO ersetzt keine Gefährdungsbeurteilung nach DGUV; Entsorgungsnachweis ersetzt kein Freigabeprotokoll.",
          "Praxisfall: Asbesthaltige Reste neben aktiver Produktion – Behörde verlangte Sperrzonen, Unterdruck und dokumentierte Freigabe vor Wiederinbetriebnahme. Typische Behördenforderung: ASP und Brandschutzplaner früh einbinden.",
          "Nachweis: Arbeitssicherheitsplan, GBU-Abschnitt und Übergabeprotokoll an den Betreiber – nicht nur Rechnung des Entsorgers.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Anforderungen können je nach Schadstofflage und Landesrecht differieren. Nachweise (Zertifikate, Unterweisungslisten) sollten vor Auftragserteilung geprüft werden.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/entsorgung-schutzmassnahmen-brandschadensanierung", label: "Schutz & Entsorgung" },
      { href: "/ratgeber/arbeitssicherheitsplan-brandschadensanierung", label: "A+S-Plan" },
      { href: "/ratgeber/gefaehrdungsbeurteilung-sofortmassnahmen-brandschadensanierung", label: "Gefährdungsbeurteilung" },
      { href: "/ratgeber/aufgaben-auftraggeber-brandschadensanierung", label: "Aufgaben Auftraggeber" },
    ],
    faq: [
      {
        question: "Darf ein normaler Malerbetrieb die Sanierung übernehmen?",
        answer:
          "Nur bei GB 0 mit geringer Belastung und nachweisbarer Kompetenz. Ab GB 1 ist Sachkunde nach DGUV 101-004 erforderlich – typisch spezialisierte Brandschadensanierer.",
      },
      {
        question: "Was ist der Unterschied Sachkunde und Fachkunde?",
        answer:
          "Sachkunde befähigt zur Ausführung unter Anleitung bzw. für definierte Tätigkeiten; Fachkunde umfasst höhere Verantwortung (Planung, Beurteilung). TRGS 524 und DGUV 101-004 regeln die Stufen in Anhängen.",
      },
      {
        question: "Muss das Unternehmen einen Betriebsarzt haben?",
        answer:
          "Für eigene Beschäftigte muss arbeitsmedizinische Vorsorge organisiert werden – oft über den BG-Arzt oder einen betriebsärztlichen Dienst.",
      },
      {
        question: "Wer haftet bei Verstößen?",
        answer:
          "Auftraggeber und ausführendes Unternehmen können parallel in der Verantwortung stehen – Auftraggeber für Vorbereitung, Unternehmen für sichere Ausführung.",
      },
      {
        question: "Brauche ich ein generalunternehmerisches Sanierungsunternehmen?",
        answer:
          "Bei komplexen Schäden sinnvoll: ein Hauptauftragnehmer koordiniert Gewerke und hält A+S-Plan ein. Bei kleinem GB-0-Schaden können Einzelgewerke mit klarer Einstufung ausreichen.",
      },
    ],
  },
  {
    slug: "entsorgung-schutzmassnahmen-brandschadensanierung",
    title: "Entsorgung und Schutzmaßnahmen bei Brandschadensanierung",
    excerpt:
      "Wie Brandgut und Ruß nach VdS 2357 entsorgt werden, welche Schutzmaßnahmen je Gefahrenbereich gelten und warum Entsorgungskonzept und TRGS 524 zusammengehören.",
    metaTitle: "Entsorgung nach Brand | Schutzmaßnahmen | H&S+",
    metaDescription:
      "Entsorgung nach Brand: Hausmüll vs. Sonderabfall nach GB 0–3, Schutzmaßnahmen nach VdS 2357 Tab. 1 und Pflichten im Entsorgungskonzept.",
    keywords: [
      "Entsorgung Brandschadensanierung",
      "Sonderabfall Brand",
      "Schutzmaßnahmen VdS 2357",
      "TRGS 524 Schutzmaßnahmen",
      "Brandgut entsorgen",
    ],
    sections: [
      {
        id: "entsorgung",
        title: "Entsorgung nach Gefahrenbereich",
        paragraphs: [
          "Die Entsorgung ist Teil des **Sanierungs- und Entsorgungskonzepts** – nicht Nebensache. Bei **GB 0** kann Entsorgung als **Hausmüll** möglich sein, wenn das Konzept das nach Prüfung festlegt. Bei **GB 1–3** fallen **Sonderabfälle** (Ruß, kontaminierte Bauteile, Filter, PSA) nach Abfallrecht an.",
          "Falsche Entsorgung kann Bußgelder, Versicherungsablehnung und Haftung auslösen.",
        ],
      },
      {
        id: "schutz",
        title: "Schutzmaßnahmen nach VdS 2357 Tab. 1",
        paragraphs: [
          "Technische, organisatorische und persönliche Schutzmaßnahmen werden an der **Gefahrenbereich-Einstufung** ausgerichtet:",
        ],
        list: [
          "**Technisch:** Abschottung, Unterdruck/Lüftung mit Filtern, Nassreinigung wo sinnvoll",
          "**Organisatorisch:** Zutrittsregeln, Unterweisung, Arbeitszeiten, Koordination",
          "**Persönlich:** PSA – Atemschutz, Schutzanzug, Handschuhe je nach GB und Stoffen",
        ],
      },
      {
        id: "loeschwasser",
        title: "Kontaminiertes Löschwasser",
        paragraphs: [
          "Löschwasser kann **Schadstoffe und biologische Belastung** enthalten. Nicht unkontrolliert in Kanalisation oder Hof ablaufen lassen – im Entsorgungskonzept festlegen (Abpumpen, Zwischenlager, Entsorgungsnachweis).",
        ],
      },
      {
        id: "dokumentation",
        title: "Nachweise für Versicherer und Behörden",
        paragraphs: [
          "Entsorgungsbelege, Begleitscheine für Sonderabfall, Protokolle der Reinigungsstufen und ggf. Messberichte gehören zur **Abnahme**. Ohne Nachweise wird die Sanierung aus Sicht der Versicherung oft nicht als abgeschlossen gewertet.",
        ],
      },
      {
        id: "reinigung",
        title: "Reinigungsstufen",
        paragraphs: [
          "VdS 2357 unterscheidet Reinigungsgrade – von grober Beseitigung bis feiner Dekontamination. Die erforderliche Stufe hängt vom späteren Nutzungsziel ab (Wohnen, Gewerbe, Weiterverkauf). Zu frühe „fertig“-Meldung ohne Messung kann bei Mietern zu Haftung führen.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Container und Nachbarn",
        paragraphs: [
          "Container für Sonderabfall nur an Standorten aus dem A+S-Plan; Zufahrt und Nachbarschaft abstimmen. Mischcontainer mit Hausmüll und Ruß aus GB 2 sind ein klassischer Compliance-Verstoß.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Sanierung und Dokumentation",
        paragraphs: [
          "Bei Entsorgung und Schutzmaßnahmen bei Brandschadensanierung in NRW greifen Arbeitsschutz, Gefahrstoffrecht und Brandschutz gleichzeitig – ein gemeinsames Sanierungskonzept verhindert Widersprüche zwischen Gewerbeaufsicht und Bauaufsicht. Abgrenzung: BSO ersetzt keine Gefährdungsbeurteilung nach DGUV; Entsorgungsnachweis ersetzt kein Freigabeprotokoll.",
          "Praxisfall: Asbesthaltige Reste neben aktiver Produktion – Behörde verlangte Sperrzonen, Unterdruck und dokumentierte Freigabe vor Wiederinbetriebnahme. Typische Behördenforderung: ASP und Brandschutzplaner früh einbinden.",
          "Nachweis: Arbeitssicherheitsplan, GBU-Abschnitt und Übergabeprotokoll an den Betreiber – nicht nur Rechnung des Entsorgers.",
        ],
      },
      {
        id: "betrieb-nachweis",
        title: "Praxis: Sanierung und Dokumentation",
        paragraphs: [
          "Bei Entsorgung und Schutzmaßnahmen bei Brandschadensanierung in NRW greifen Arbeitsschutz, Gefahrstoffrecht und Brandschutz gleichzeitig – ein gemeinsames Sanierungskonzept verhindert Widersprüche zwischen Gewerbeaufsicht und Bauaufsicht. Abgrenzung: BSO ersetzt keine Gefährdungsbeurteilung nach DGUV; Entsorgungsnachweis ersetzt kein Freigabeprotokoll.",
          "Praxisfall: Asbesthaltige Reste neben aktiver Produktion – Behörde verlangte Sperrzonen, Unterdruck und dokumentierte Freigabe vor Wiederinbetriebnahme. Typische Behördenforderung: ASP und Brandschutzplaner früh einbinden.",
          "Nachweis: Arbeitssicherheitsplan, GBU-Abschnitt und Übergabeprotokoll an den Betreiber – nicht nur Rechnung des Entsorgers.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Abfallrecht (KrWG, GewAbfV) und lokale Entsorgungsvorschriften können zusätzliche Anforderungen stellen. Asbest und KMF unterliegen eigenen Regeln.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gefahrenbereiche-brandschadensanierung-vds-2357", label: "Gefahrenbereiche" },
      { href: "/ratgeber/ausfuehrendes-unternehmen-brandschadensanierung-dguv", label: "Ausführendes Unternehmen" },
      { href: "/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz", label: "Gefahrstoffe im Betrieb" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Wiederaufbau & Genehmigung" },
    ],
    faq: [
      {
        question: "Darf verbrannter Möbelmüll in die Restmülltonne?",
        answer:
          "Bei GB 0 und expliziter Freigabe im Konzept ggf. ja. Bei GB 1–3 in der Regel nein – Sonderabfall oder behandelter Abfallweg.",
      },
      {
        question: "Wer organisiert die Container?",
        answer:
          "Meist das ausführende Unternehmen im Auftrag des Auftraggebers – gemäß Entsorgungskonzept und A+S-Plan.",
      },
      {
        question: "Was kostet Sonderabfallentsorgung?",
        answer:
          "Deutlich höher als Hausmüll – abhängig von Menge und Schadstoffklasse. Im Sanierungskonzept sollte eine Kostenkalkulation enthalten sein.",
      },
      {
        question: "Brauche ich eine Messung nach der Reinigung?",
        answer:
          "Bei GB 2/3 und Wohnnutzung oft ja (Ruß, PAH, ggf. Asbest). Im Konzept und bei Abnahme festlegen.",
      },
      {
        question: "Was passiert mit kontaminierter PSA?",
        answer:
          "Einweg-PSA wird als Sonderabfall entsorgt; Mehrweg nach Herstellervorgaben reinigen oder entsorgen – dokumentieren.",
      },
    ],
  },
];
