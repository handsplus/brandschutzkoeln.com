/**
 * März/April 2026 – Ratgeber-Cluster Prüffristen im Brandschutz (DGUV Information 205-040).
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_PRUEFFRISTEN_MAR_APR2026: RatgeberArticle[] = [
  {
    slug: "prueffristen-brandschutz-dguv-205-040-ueberblick",
    title: "Prüffristen im Brandschutz: Überblick nach DGUV 205-040",
    excerpt:
      "Welches Rechtsgebiet für welche Anlage gilt: ArbStättV und ASR, BetrSichV, Muster-Prüfverordnung, Versicherer und DGUV – und warum dieselbe BMA mehrere Prüfzyklen hat.",
    metaTitle: "Prüffristen Brandschutz: Rechtsgebiete | DGUV 205-040 | H&S+",
    metaDescription:
      "Prüffristen im Brandschutz erklärt: ArbStättV, BetrSichV, Muster-Prüfverordnung, Versicherer – welches Gesetz für BMA, Löscher, RWA und Sprinkler gilt und warum Fristen parallel laufen.",
    keywords: [
      "Prüffristen Brandschutz",
      "DGUV 205-040",
      "Brandschutz Prüfung Intervall",
      "ArbStättV Brandschutz",
      "Muster Prüfverordnung",
    ],
    sections: [
      {
        id: "dguv",
        title: "Was ist DGUV Information 205-040?",
        paragraphs: [
          "Die **DGUV Information 205-040 „Prüffristen im Brandschutz“** (Webcode p205040) bündelt **Orientierungswerte** für wiederkehrende Prüfungen, Wartungen und Instandhaltungen brandschutzrelevanter Anlagen. Sie trifft **keine eigenständigen Pflichtfestlegungen** – maßgeblich bleiben Gesetze, Verordnungen, Normen, Herstellervorgaben und Versicherungsbedingungen.",
          "Der Nutzen: In den **neun Zusatztabelle**n stehen Anlagentyp, Intervall, Prüfinhalt und Quelle nebeneinander – so sehen Betreiber, Brandschutzbeauftragte und Facility Manager, welche Fristen **parallel** laufen können.",
        ],
      },
      {
        id: "rechtsgebiete",
        title: "Fünf Rechtsgebiete – oft gleichzeitig",
        paragraphs: [
          "Dieselbe Anlage kann mehreren Prüfregimen unterliegen. Die DGUV-Info ordnet sie in Rechtsgebiete ein:",
        ],
        list: [
          "**Arbeitsschutz (ArbStättV, ASR):** Feuerlöscher, Sichtkontrollen, organisatorische Maßnahmen – Pflicht des **Arbeitgebers**",
          "**Betriebssicherheit (BetrSichV):** Druckbehälter, fahrbare Löscher, Aufzüge – **befähigte Person** oder ZÜS",
          "**Bauaufsicht / Muster-Prüfverordnung:** Sonderbauten – **Sachverständiger für baurechtliche Prüfungen (SV-Bau)** alle 3–5 Jahre",
          "**Versicherer (SV-V):** Technische Schutzwirkung – z. B. Sprinkler, BMA mit erhöhten Anforderungen",
          "**Errichter / Fachfirmen:** Inspektion und Wartung nach DIN VDE, VdS – **EFK** (Errichter/Fachfirma für Brandmeldeanlagen) oder Errichter",
        ],
      },
      {
        id: "kategorien",
        title: "Neun Anlagenkategorien in den Zusatztabelle",
        paragraphs: [
          "Die Tabellen decken den typischen Gebäudebetrieb ab:",
        ],
        list: [
          "Feuerlöscheinrichtungen – siehe [Feuerlöscher prüfen](/ratgeber/feuerloescher-pruefen-wartung-asr-a22) (Feb-Cluster)",
          "Brandbekämpfungseinrichtungen (Löschwasser, Hydranten)",
          "Löschanlagen (Sprinkler, Schaum, Gaslöschung)",
          "Branderkennung und Alarmierung (BMA, SAA, ENS)",
          "Rauch- und Feuerschutzabschlüsse",
          "Rauch- und Wärmeabzugsanlagen (RWA, RDA)",
          "Einrichtungen zur Flucht und Rettung (Feuerwehraufzug, Notleiter)",
          "Brandvermeidungsanlagen (Sauerstoffreduzierung)",
          "Organisatorische Maßnahmen (Pläne, BSO)",
        ],
      },
      {
        id: "parallel",
        title: "Warum mehrere Fristen für eine BMA?",
        paragraphs: [
          "Eine Brandmeldeanlage im Sonderbau hat typischerweise: **tägliche/vierteljährliche Betriebsbereitschaft** (vom Betreiber), **jährliche Begehung** (SK oder EFK nach DIN VDE 0833-1), **Inspektion und Wartung** durch EFK, **alle 3–5 Jahre SV-Bau** nach Muster-Prüfverordnung und ggf. **SV-V** nach Versicherungsklauseln.",
          "Fehler in der Praxis: Nur die Wartungsrechnung des Errichters liegt vor – die **baurechtliche Prüfung** ist überfällig. Oder umgekehrt: SV-Bau-Protokoll existiert, aber **Betriebskontrollen** fehlen in der Dokumentation.",
        ],
      },
      {
        id: "dokumentation",
        title: "Prüfbuch und Nachweisführung",
        paragraphs: [
          "Für Sonderbauten verlangt die Muster-Prüfverordnung ein **Prüfbuch** mit Anlagenverzeichnis, Prüfberichten und Mängelliste. Für Arbeitsschutz: Prüfprotokolle, Plaketten, Gefährdungsbeurteilung. Versicherer erwarten separate Schutzwirkungsnachweise.",
          "Der [Brandschutzbeauftragte](/ratgeber/aufgaben-brandschutzbeauftragter-koeln) koordiniert die Fristen – ersetzt aber nicht die fachkundige Prüfung durch SK, bP, EFK oder SV-Bau.",
        ],
      },
      {
        id: "nrw",
        title: "NRW: BauPrüfVO und Brandschau",
        paragraphs: [
          "In NRW setzt die **BauPrüfverordnung** die Muster-Prüfverordnung (ARGEBAU) um. Die **Feuerwehr-Brandschau** prüft Einsatzvoraussetzungen – sie ersetzt weder EFK-Wartung noch SV-Bau-Prüfung. Details: [Brandschau](/ratgeber/brandschau-koeln-feuerwehr) und [Prüfpflichten Sonderbauten](/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Intervalle in DGUV 205-040 sind **Orientierung** – Abweichungen durch Behörde, Versicherer oder Hersteller sind möglich. Dieser Ratgeber ersetzt keine behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/wer-darf-brandschutzanlagen-pruefen", label: "Wer darf prüfen?" },
      { href: "/ratgeber/wartung-inspektion-pruefung-brandschutz-din-31051", label: "Wartung vs. Prüfung" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "Sonderbau-Prüfung" },
      { href: "/ratgeber/feuerloescher-pruefen-wartung-asr-a22", label: "Feuerlöscher prüfen" },
      { href: "/ratgeber/aufgaben-brandschutzbeauftragter-koeln", label: "Aufgaben BSB" },
    ],
    faq: [
      {
        question: "Sind DGUV-Informationen gesetzlich bindend?",
        answer:
          "Nein. Sie geben Empfehlungen und Orientierung. Bindend sind Gesetze, Verordnungen, Normen und konkrete Auflagen.",
      },
      {
        question: "Welche Frist ist bei Konflikt maßgeblich?",
        answer:
          "Die strengere bzw. für das jeweilige Rechtsgebiet einschlägige Regel – oft mehrere parallel. Alle erfüllen.",
      },
      {
        question: "Gilt DGUV 205-040 auch für Wohngebäude?",
        answer:
          "Teilweise: Rauchwarnmelder, Feuerlöscher im Gemeinschaftseigentum. Sonderbau-Prüfungen betreffen vor allem gewerbliche und öffentliche Gebäude.",
      },
      {
        question: "Wo finde ich die Tabellen?",
        answer:
          "Als Zusatztabelle zur DGUV Information 205-040 (DGUV Webcode p205040) – neun Excel-Tabellen nach Anlagenkategorie.",
      },
      {
        question: "Brauche ich für jedes Gebäude alle neun Tabellen?",
        answer:
          "Nein. Nur für vorhandene Anlagen – ein Büro ohne Sprinkler braucht keine Sprinkler-Fristen, aber ggf. Löscher und Fluchtpläne.",
      },
    ],
  },
  {
    slug: "wer-darf-brandschutzanlagen-pruefen",
    title: "Wer darf Brandschutzanlagen prüfen? SK, bP, EFK und Sachverständige",
    excerpt:
      "Sachkundiger, befähigte Person, Errichter/Fachfirma, SV-Bau und SV-Versicherer – welche Rolle welche Prüfung durchführt und warum der Hausmeister nicht für alles reicht.",
    metaTitle: "Wer darf Brandschutz prüfen? SK, bP, SV-Bau | H&S+",
    metaDescription:
      "Brandschutz prüfen lassen: Sachkundiger vs. befähigte Person vs. EFK vs. SV-Bau – wer BMA, Feuerlöscher, Sprinkler und Feststellanlagen prüfen darf, erklärt nach DGUV 205-040.",
    keywords: [
      "befähigte Person Brandschutz",
      "Sachkundiger Brandschutz",
      "SV-Bau Prüfung",
      "EFK Brandmeldeanlage",
      "wer darf Feuerlöscher prüfen",
    ],
    sections: [
      {
        id: "problem",
        title: "Das Verwechslungsproblem",
        paragraphs: [
          "In Prüfprotokollen und Angeboten werden Rollen oft vermischt: Der **Hausmeister** macht Sichtkontrolle, der **Löscherdienst** die Wartung, der **BMA-Errichter** Inspektion – und alle drei Jahre kommt der **Sachverständige** für den Sonderbau. Ohne klare Zuordnung fehlen Nachweise bei BG-, Versicherungs- oder Behördenkontrollen.",
        ],
      },
      {
        id: "betreiber",
        title: "B – Betreiber / vP – verantwortliche Person",
        paragraphs: [
          "**B (Betreiber)** oder **vP (vom Arbeitgeber bestellte verantwortliche Person)** führt **Betriebskontrollen** durch: Sichtprüfung, Funktionskontrolle im Rahmen der Bedienung, Dokumentation. Beispiele aus DGUV 205-040: monatliche Sichtkontrolle an Löschwasseranlagen, vierteljährliche BMA-Betriebsbereitschaft, halbjährliche Sichtkontrolle natürlicher RWA.",
          "Das ist **keine** Ersatz-Wartung durch Fachfirmen – aber Pflicht zur Erkennung offensichtlicher Mängel.",
        ],
      },
      {
        id: "sk",
        title: "SK – Sachkundiger",
        paragraphs: [
          "Der **Sachkundige** hat die erforderliche **Fachkenntnis** für eine bestimmte Prüfaufgabe – z. B. jährliche Instandhaltung Feuerlöscher nach ASR A2.2, Wartung Rauchschutztüren, Begehung BMA (alternativ EFK), Aktualität von Flucht- und Rettungsplänen alle 2 Jahre.",
          "Qualifikation hängt von der Aufgabe ab: Brandschutzhelfer-Ausbildung reicht **nicht** automatisch für BMA-Wartung oder SV-Bau-Prüfungen.",
        ],
      },
      {
        id: "bp",
        title: "bP – befähigte Person (BetrSichV)",
        paragraphs: [
          "Die **befähigte Person** prüft überwachungsbedürftige Anlagen nach **BetrSichV** – z. B. innere Prüfung und Festigkeitsprüfung bei Druckgeräten in Feuerlöschern, Prüfung an Feuerschutzabschlüssen an Förderanlagen. Sie muss die erforderlichen Fachkenntnisse, Erfahrung und Zuverlässigkeit nachweisen.",
          "Abgrenzung SK: Oft dieselbe Person/Firma – rechtlich andere Grundlage (Arbeitsschutz vs. Produktsicherheit).",
        ],
      },
      {
        id: "efk",
        title: "EFK / E – Errichter und Fachfirmen",
        paragraphs: [
          "**EFK (Errichter/Fachfirma für Brandmeldeanlagen)** oder **E (Errichter)** führt **Inspektion, Wartung und Instandsetzung** nach DIN VDE 0833-1, VdS 2095 oder VdS CEA 4001 durch. Typisch: jährliche BMA-Inspektion, zweijährliche Wartung, fünfjährliche erweiterte Inspektion Sprinkler.",
          "Der Errichter ist **nicht** automatisch SV-Bau für die baurechtliche Wirkprinzip-Prüfung.",
        ],
      },
      {
        id: "sv",
        title: "SV-Bau und SV-V – Sachverständige",
        paragraphs: [
          "**SV-Bau** (Sachverständiger für baurechtliche Prüfungen): Wirksamkeit und Betriebssicherheit nach **Muster-Prüfverordnung** – typisch alle **3 Jahre** (RWA, BMA-Zusammenwirkung) oder **5 Jahre** (Sprinkler, Löschwasser). In NRW über **BauPrüfVO**.",
          "**SV-V** (Versicherungssachverständiger): Technische Schutzwirkung nach **Versicherungsklauseln** – kann kürzere Intervalle verlangen als der Gesetzgeber.",
        ],
      },
      {
        id: "fstA",
        title: "FK für FstA und eP – Feststellanlagen",
        paragraphs: [
          "Für **Feststellanlagen** nach DIN 14677: **FK für FstA** (Fachkraft für Feststellanlagen) für Wartung, **eP** (eingewiesene Person) oder FK für Inspektion. Monatliche Sichtkontrolle Freilauftürschließer: **Betreiber (B)**. Details: [Feuerschutzabschlüsse Prüffristen](/ratgeber/feuerschutzabschluesse-prueffristen-fstA).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Qualifikationsanforderungen sind anlagenspezifisch. Im Zweifel Prüfumfang und Rolle im Vertrag und Prüfbericht benennen lassen – nicht nur „Wartung BMA“ pauschal beauftragen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/prueffristen-brandschutz-dguv-205-040-ueberblick", label: "Prüffristen Überblick" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Prüffristen" },
      { href: "/ratgeber/feuerloescher-pruefen-wartung-asr-a22", label: "Feuerlöscher prüfen" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "SV-Bau Sonderbau" },
      { href: "/ratgeber/feuerschutzabschluesse-prueffristen-fstA", label: "Feststellanlagen" },
    ],
    faq: [
      {
        question: "Darf der Hausmeister Feuerlöscher prüfen?",
        answer:
          "Sichtkontrollen ja. Die fachkundige Wartungsprüfung alle 2 Jahre erfordert Sachkunde nach DIN EN 3 – üblicherweise externer Dienstleister.",
      },
      {
        question: "Ist der BMA-Errichter auch SV-Bau?",
        answer:
          "Nicht automatisch. EFK-Wartung und SV-Bau-Prüfung sind getrennte Aufgaben mit unterschiedlicher Qualifikation.",
      },
      {
        question: "Was ist ZÜS?",
        answer:
          "Zugelassene Überwachungsstelle – prüft Druckgeräte nach BetrSichV, z. B. Sprinkler-Druckbehälter alle 5/10 Jahre.",
      },
      {
        question: "Brauche ich für jede Anlage einen eigenen Sachverständigen?",
        answer:
          "Ein SV-Bau kann mehrere Anlagen in einem Prüfbericht abdecken – wenn Qualifikation und Prüfumfang passen.",
      },
      {
        question: "Wer prüft Flucht- und Rettungspläne?",
        answer:
          "Aktualität alle 2 Jahre durch Sachkundigen nach DIN ISO 23601 – siehe [Feuerwehrplan & Fluchtpläne](/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln).",
      },
    ],
  },
  {
    slug: "wartung-inspektion-pruefung-brandschutz-din-31051",
    title: "Wartung, Inspektion, Prüfung: Begriffe nach DIN 31051",
    excerpt:
      "Was Instandhaltung, Inspektion, Wartung und Prüfung in der Brandschutz-Praxis bedeuten – und warum „wir warten die BMA jährlich“ nicht die baurechtliche Prüfung ersetzt.",
    metaTitle: "Wartung vs. Inspektion vs. Prüfung | DIN 31051 | H&S+",
    metaDescription:
      "Instandhaltung nach DIN 31051 im Brandschutz: Unterschied zwischen Inspektion, Wartung, Prüfung und Instandsetzung – mit Beispielen für BMA, Sprinkler und Feuerlöscher.",
    keywords: [
      "Instandhaltung DIN 31051",
      "Inspektion Wartung Prüfung",
      "BMA Wartung Inspektion",
      "Brandschutz Instandhaltung",
      "erweiterte Inspektion Sprinkler",
    ],
    sections: [
      {
        id: "din",
        title: "DIN 31051 als gemeinsame Sprache",
        paragraphs: [
          "Die **DIN 31051 „Grundlagen der Instandhaltung“** definiert Begriffe für den Lebenszyklus technischer Anlagen. In DGUV 205-040 und VdS-/VDE-Regeln werden diese Begriffe für **Prüfinhalte** verwendet – Verwechslung führt zu Lücken in Prüfbüchern.",
        ],
      },
      {
        id: "begriffe",
        title: "Die vier Stufen",
        list: [
          "**Inspektion:** systematischer Zustandsvergleich mit Grenzwerten – feststellen, ob Abweichungen vorliegen (z. B. jährliche BMA-Inspektion durch EFK)",
          "**Wartung:** Maßnahmen zur **Verzögerung** des Abbaus des Ist-Zustands – Verschleißteile, Einstellungen (z. B. zweijährliche BMA-Wartung)",
          "**Instandsetzung:** Wiederherstellung des Soll-Zustands nach Störung oder Mangel",
          "**Prüfung (im baurechtlichen Sinn):** Wirksamkeit und Betriebssicherheit durch **SV-Bau** – umfassender als eine Wartungsrechnung",
        ],
        paragraphs: [
          "Zusätzlich: **Sichtkontrolle** und **Funktionsprüfung** durch Betreiber – keine Instandhaltung im engeren Sinn, aber Pflicht.",
        ],
      },
      {
        id: "bma",
        title: "Beispiel BMA nach DIN VDE 0833-1",
        paragraphs: [
          "Laut DGUV-Tabelle: **Begehungen** (SK oder EFK), **Inspektion** (EFK, jährlich), **Wartung** (EFK, zweijährlich), **Instandsetzung** (EFK nach Bedarf). Parallel: **SV-Bau** alle 3–5 Jahre für Wirksamkeit im Sonderbau.",
          "„Wartungsvertrag BMA“ deckt oft Inspektion und Wartung ab – **nicht** automatisch die baurechtliche Sachverständigenprüfung.",
        ],
      },
      {
        id: "sprinkler",
        title: "Beispiel Sprinkler nach VdS CEA 4001",
        paragraphs: [
          "**Instandhaltung** (jährlich, Errichter), **erweiterte Instandhaltung** (zweijährlich), **Inspektion** (5 Jahre), **erweiterte Inspektion** (5 Jahre versetzt). Betreiber: **Sichtkontrolle und Funktionsprüfung** nach Erfordernis.",
          "Versicherer (**SV-V**): Technische Schutzwirkung in eigenen Intervallen. Details: [Sprinkler-Prüffristen](/ratgeber/sprinkler-loeschanlagen-prueffristen).",
        ],
      },
      {
        id: "loescher",
        title: "Beispiel Feuerlöscher",
        paragraphs: [
          "**Sichtkontrolle** (Betreiber, vierteljährlich), **Instandhaltung** inkl. Inneres (SK, 2 Jahre). Keine klassische DIN-31051-Trennung in der Praxis – aber: Sichtkontrolle ≠ Wartungsprüfung. Siehe [Feuerlöscher prüfen](/ratgeber/feuerloescher-pruefen-wartung-asr-a22).",
        ],
      },
      {
        id: "vertrag",
        title: "Wartungsvertrag richtig lesen",
        paragraphs: [
          "Prüfen Sie im Vertrag: Welche **Prüfinhalte** sind enthalten? Werden **Protokolle** für Prüfbuch und Behörde erstellt? Gibt es **Reaktionszeiten** bei Störungen? Fehlt die **erweiterte Inspektion**, ist der Vertrag trotz jährlicher Rechnung lückenhaft.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Normen und Herstellervorgaben können die DIN-31051-Begriffe spezifischer definieren. Maßgeblich ist stets die für die Anlage einschlägige Regel.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/prueffristen-brandschutz-dguv-205-040-ueberblick", label: "Rechtsgebiete" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Fristen" },
      { href: "/ratgeber/sprinkler-loeschanlagen-prueffristen", label: "Sprinkler-Fristen" },
      { href: "/ratgeber/feuerloescher-pruefen-wartung-asr-a22", label: "Feuerlöscher" },
      { href: "/ratgeber/wer-darf-brandschutzanlagen-pruefen", label: "Prüfende Rollen" },
    ],
    faq: [
      {
        question: "Reicht jährliche BMA-Wartung für den Sonderbau?",
        answer:
          "Nein. Zusätzlich ist die baurechtliche Prüfung durch SV-Bau nach Muster-Prüfverordnung erforderlich – typisch 3–5 Jahre.",
      },
      {
        question: "Was ist erweiterte Inspektion bei Sprinkler?",
        answer:
          "Umfangreichere Prüfung des Rohrnetzes und Komponenten – im DGUV-Schema alle 5 Jahre durch Errichter, zusätzlich zu jährlicher Instandhaltung.",
      },
      {
        question: "Ist Sichtkontrolle Wartung?",
        answer:
          "Nein. Sie ist Betriebskontrolle durch den Betreiber – ergänzt, ersetzt nicht die fachkundige Instandhaltung.",
      },
      {
        question: "Wer definiert den Umfang der Inspektion?",
        answer:
          "Die einschlägige Norm (z. B. DIN VDE 0833-1, VdS CEA 4001) und der Wartungsvertrag.",
      },
      {
        question: "Muss jede Instandsetzung dokumentiert werden?",
        answer:
          "Ja – für Prüfbuch, Nachweisführung und ggf. Versicherung. Störungen und Reparaturen gehören in die Anlagenhistorie.",
      },
    ],
  },
  {
    slug: "pruefpflichten-sonderbauten-muster-pruefverordnung",
    title: "Prüfpflichten in Sonderbauten: Muster-Prüfverordnung",
    excerpt:
      "Wann SV-Bau-Prüfungen für BMA, RWA, Sprinkler und Lüftung fällig werden, was Wirkprinzip-Prüfung bedeutet und wie das Prüfbuch in NRW geführt wird.",
    metaTitle: "Sonderbau Prüfpflicht: Muster-PrüfVO | NRW | H&S+",
    metaDescription:
      "Prüfpflicht Sonderbau: Muster-Prüfverordnung für BMA, RWA, Sprinkler – SV-Bau-Intervalle, Prüfbuch, Wirkprinzip-Prüfung und Umsetzung in NRW über BauPrüfVO.",
    keywords: [
      "Muster Prüfverordnung",
      "Sonderbau Prüfung",
      "SV-Bau Brandschutz",
      "Prüfbuch Sonderbau",
      "Wirkprinzip Prüfung BMA",
    ],
    sections: [
      {
        id: "grundlage",
        title: "Baurechtliche Prüfung – eigenes Rechtsgebiet",
        paragraphs: [
          "Sonderbauten nach Landesbauordnung unterliegen **wiederkehrenden Prüfungen** durch einen **Sachverständigen für baurechtliche Prüfungen (SV-Bau)**. Grundlage: **Muster-Prüfverordnung** der ARGEBAU-Länderarbeitsgemeinschaft – in NRW als **BauPrüfverordnung (BauPrüfVO)** umgesetzt.",
          "Diese Prüfung prüft **Wirksamkeit und Betriebssicherheit** – nicht die jährliche EFK-Wartung und nicht die Feuerwehr-Brandschau.",
        ],
      },
      {
        id: "anlagen",
        title: "Welche Anlagen sind prüfpflichtig?",
        paragraphs: [
          "Typische prüfpflichtige Anlagen in Sonderbauten (Auswahl nach DGUV 205-040):",
        ],
        list: [
          "**Brandmeldeanlagen** – Wirksamkeit, ggf. Wirkprinzip-Prüfung (Zusammenwirkung mit RWA, Aufzug, Feststellanlagen)",
          "**Rauch- und Wärmeabzugsanlagen** – natürliche und maschinelle RWA, Rauchschutzdruckanlagen",
          "**Sprinkler- und Löschanlagen** – alle 5 Jahre",
          "**Löschwasseranlagen** mit Druckerhöhung – alle 3 Jahre",
          "**Rauchschutzabschlüsse** und **Feststellanlagen** im bauaufsichtlichen Kontext",
          "**Sicherheitsbeleuchtung, Aufzüge, Lüftung** – je nach Landesverordnung",
        ],
      },
      {
        id: "intervalle",
        title: "Typische SV-Bau-Intervalle",
        paragraphs: [
          "Aus DGUV-Zusatztabelle (Orientierung – Landesrecht kann abweichen):",
        ],
        list: [
          "BMA – Wirksamkeit: **5 Jahre**; Wirkprinzip-Prüfung: **5 Jahre**",
          "Natürliche RWA – **3 Jahre**",
          "Maschinelle RWA – **3 Jahre**",
          "Rauchschutzdruckanlage – **3 Jahre**",
          "Sprinkler / Schaum / Sprühwasser – **5 Jahre**",
          "Löschwasseranlage nass – **3 Jahre**",
        ],
      },
      {
        id: "pruefbuch",
        title: "Prüfbuch und Mängelverfolgung",
        paragraphs: [
          "Der Betreiber führt ein **Prüfbuch** mit Anlagenverzeichnis, Prüfberichten, Mängeln und Fristen zur Beseitigung. Der SV-Bau dokumentiert festgestellte Mängel – **schwerwiegende Mängel** können zur Nutzungseinschränkung führen.",
          "Abgrenzung: [Brandschau](/ratgeber/brandschau-koeln-feuerwehr) der Feuerwehr prüft Einsatzbedingungen – Ergebnisse gehören in die Gesamtdokumentation, ersetzen aber nicht SV-Bau-Berichte.",
        ],
      },
      {
        id: "wirkprinzip",
        title: "Wirkprinzip-Prüfung bei BMA",
        paragraphs: [
          "Prüft das **bestimmungsgemäße Zusammenwirken** von Anlagen: Meldet die BMA, schließt die Feststellanlage, startet RWA, steuert Aufzug und Entrauchung korrekt? Dafür braucht es **abgestimmte Prüfabläufe** mit FK für FstA und EFK – nicht nur Einzelkomponententests.",
        ],
      },
      {
        id: "nrw",
        title: "NRW und Köln",
        paragraphs: [
          "Einordnung als Sonderbau: [Sonderbauten](/ratgeber/sonderbauten-brandschutz). Genehmigung und Nachweise: [Bauantrag Unterlagen](/ratgeber/bauantrag-brandschutz-unterlagen-koeln). Nach Umbau: [Abnahme](/ratgeber/brandschutz-abnahme-nach-umbau-koeln) – SV-Bau-Termine früh planen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Konkrete Fristen und Anlagenkatalog folgen der Landes-Prüfverordnung und der Baugenehmigung. Dieser Ratgeber ersetzt keine behördliche Festlegung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/brandschau-koeln-feuerwehr", label: "Brandschau" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Fristen" },
      { href: "/ratgeber/rwa-entrauchung-prueffristen", label: "RWA-Fristen" },
      { href: "/ratgeber/prueffristen-brandschutz-dguv-205-040-ueberblick", label: "Überblick DGUV" },
    ],
    faq: [
      {
        question: "Wer beauftragt den SV-Bau?",
        answer:
          "Der Betreiber/Gebäudeeigentümer – oft über den Brandschutzbeauftragten oder Facility Manager.",
      },
      {
        question: "Gilt die Prüfpflicht auch im Bestand?",
        answer:
          "Ja, wenn das Gebäude als Sonderbau eingestuft ist und prüfpflichtige Anlagen hat – unabhängig vom Baujahr.",
      },
      {
        question: "Was passiert bei Mängeln?",
        answer:
          "Beseitigungsfrist im Prüfbericht. Bei Gefahr im Verzug können Behörden Maßnahmen anordnen.",
      },
      {
        question: "Ist die Erstabnahme die gleiche Prüfung?",
        answer:
          "Nein. Erstabnahme bei Inbetriebnahme; wiederkehrende Prüfung im Betrieb in festen Intervallen.",
      },
      {
        question: "Brauchen normale Büros SV-Bau?",
        answer:
          "Nur wenn Sonderbau-Tatbestand und prüfpflichtige Anlagen vorliegen – viele Büros unter 3.000 m² sind kein Sonderbau, können aber BMA haben (ohne Muster-PrüfVO-Pflicht).",
      },
    ],
  },
  {
    slug: "bma-prueffristen-brandmeldeanlage",
    title: "BMA prüfen: Prüffristen für Brandmeldeanlagen",
    excerpt:
      "Betriebsbereitschaft, Begehung, Inspektion, Wartung und SV-Bau für Brandmeldeanlagen – Intervalle nach DIN VDE 0833-1 und DGUV 205-040 mit Melder-Austauschfristen.",
    metaTitle: "BMA Prüffristen: Inspektion & Wartung | VDE 0833 | H&S+",
    metaDescription:
      "Brandmeldeanlage prüfen: vierteljährliche Betriebsbereitschaft, jährliche Inspektion, 2-jährige Wartung, SV-Bau alle 5 Jahre – Fristen nach DIN VDE 0833-1 und DGUV 205-040.",
    keywords: [
      "BMA Prüffrist",
      "Brandmeldeanlage Wartung",
      "DIN VDE 0833-1 Inspektion",
      "BMA Prüfung Intervall",
      "Brandmelder austauschen",
    ],
    sections: [
      {
        id: "ueberblick",
        title: "Mehrere Ebenen parallel",
        paragraphs: [
          "Eine **Brandmeldeanlage (BMA)** hat im Betrieb typischerweise **vier Ebenen**: Betriebskontrolle (Betreiber), Begehung/Inspektion/Wartung (SK oder **EFK**), **SV-Bau** (Sonderbau) und ggf. **SV-V** (Versicherung). Die DGUV-Tabelle „Branderkennungs- und Alarmierungsanlagen“ listet die Intervalle nach DIN VDE 0833-1 und VdS 2095.",
        ],
      },
      {
        id: "betrieb",
        title: "Betriebsbereitschaft – nach Erfordernis / vierteljährlich",
        paragraphs: [
          "**vP (verantwortliche Person):** Bedienung und Betriebsbereitschaft der BMA – Störungsmeldungen, Beschäftigteninformation, Dokumentation im Brandfallbuch. In vielen Betrieben **vierteljährlich** oder häufiger nach Gefährdungsbeurteilung.",
        ],
      },
      {
        id: "begehung",
        title: "Begehungen – jährlich",
        paragraphs: [
          "**SK oder EFK:** Begehung der Anlage – sichtbare Mängel, Melderzugänglichkeit, Beschriftung, Leitungen. Bei BMA nach **VdS 2095** alternativ **SK oder E (Errichter)**.",
        ],
      },
      {
        id: "instandhaltung",
        title: "Inspektion, Wartung, Instandsetzung",
        list: [
          "**Inspektion (EFK):** jährlich – systematischer Zustandsabgleich",
          "**Wartung (EFK):** zweijährlich – Verschleiß, Einstellung, Funktionsprüfungen mit Messmitteln",
          "**Instandsetzung (EFK):** nach Bedarf – nach Störung oder Mangel",
        ],
        paragraphs: [
          "Wartungsverträge sollten Inspektion und Wartung **getrennt ausweisen** – wichtig für Prüfbuch und Audits.",
        ],
      },
      {
        id: "melder",
        title: "Melder-Austausch nach DIN 14675-1",
        paragraphs: [
          "Punktförmige Melder **ohne Verschmutzungskompensation:** Austausch nach **8 Jahren** (EFK). **Mit Verschmutzungskompensation:** nach **12 Jahren**. Das ist unabhängig von der jährlichen Inspektion – Planung im Instandhaltungsbudget.",
        ],
      },
      {
        id: "sonderbau",
        title: "SV-Bau und Wirkprinzip – 5 Jahre",
        paragraphs: [
          "Im Sonderbau: **Wirksamkeit und Betriebssicherheit** sowie **Wirkprinzip-Prüfung** (Zusammenwirkung mit RWA, Feststellanlagen, Aufzug) – **SV-Bau**, typisch **5 Jahre**. **Funktionale Kette der Brandfallsteuerung** nach DIN 14675-1: **EFK**, 5 Jahre.",
          "Details: [Prüfpflichten Sonderbauten](/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung).",
        ],
      },
      {
        id: "verwandt",
        title: "SAA, BWA, ENS – Kurzüberblick",
        paragraphs: [
          "**Sprachalarmierung (SAA):** analog BMA nach DIN VDE 0833-1/0833-4. **Brandwarnanlage (BWA):** Inspektion jährlich, Wartung 2-jährig nach DIN VDE V 0826-2. **ENS:** jährliche Inspektion durch SK nach DIN EN 50849.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Konkrete Intervalle können von Abnahme, Versicherer und VdS-Klassifizierung abweichen. BMA nach VdS 2095 mit erhöhten Anforderungen: zusätzlich **SV-V** alle 5 Jahre.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/wartung-inspektion-pruefung-brandschutz-din-31051", label: "Wartung vs. Inspektion" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "SV-Bau Sonderbau" },
      { href: "/ratgeber/feuerschutzabschluesse-prueffristen-fstA", label: "Feststellanlagen" },
      { href: "/ratgeber/rwa-entrauchung-prueffristen", label: "RWA" },
      { href: "/ratgeber/sprinkler-rueckbau-bma-nutzungsaenderung-koeln", label: "BMA bei Umbau" },
    ],
    faq: [
      {
        question: "Reicht der Wartungsvertrag für die BMA?",
        answer:
          "Für EFK-Leistungen ja – wenn Inspektion, Wartung und Protokollierung vertraglich und tatsächlich erbracht werden. SV-Bau ist separat.",
      },
      {
        question: "Wie oft muss die BMA ausgelöst werden?",
        answer:
          "Vollprüfung mit Alarm nur in Abstimmung mit Betrieb und ggf. Feuerwehr – Inspektion nutzt Testmodi nach Norm.",
      },
      {
        question: "Was kostet die jährliche BMA-Inspektion?",
        answer:
          "Abhängig von Melderanzahl, Gebäudestruktur und Vertrag – Richtwerte nur über Angebot des EFK.",
      },
      {
        question: "Müssen Rauchwarnmelder in Wohnungen zur BMA?",
        answer:
          "Nein. Stand-alone-Rauchwarnmelder: jährliche Sicht- und Funktionsprüfung durch Betreiber (B) nach DIN 14676.",
      },
      {
        question: "Wann BMA nach Umbau neu abnehmen?",
        answer:
          "Bei wesentlicher Änderung der Schutzziel-Erreichung – siehe [Abnahme nach Umbau](/ratgeber/brandschutz-abnahme-nach-umbau-koeln).",
      },
    ],
  },
  {
    slug: "feuerschutzabschluesse-prueffristen-fstA",
    title: "Feuerschutzabschlüsse prüfen: Türen, Feststellanlagen und Vorhänge",
    excerpt:
      "Jährliche Wartung Rauchschutztüren, monatliche Kontrolle Feststellanlagen, FK für FstA nach DIN 14677 – Prüffristen aus DGUV 205-040 mit Abgrenzung zum Bestands-Artikel.",
    metaTitle: "Feuerschutztür Prüffrist: Feststellanlage | DIN 14677 | H&S+",
    metaDescription:
      "Rauchschutztür und Feststellanlage prüfen: jährliche SK-Wartung, monatliche Betreiberkontrolle, FK für FstA – Prüffristen nach DIN 14677 und DGUV 205-040.",
    keywords: [
      "Feuerschutztür Prüfung",
      "Feststellanlage Wartung",
      "DIN 14677 Prüffrist",
      "Rauchschutztür prüfen",
      "FK Feststellanlagen",
    ],
    sections: [
      {
        id: "ueberblick",
        title: "Abschlüsse – bauaufsichtlich und betrieblich",
        paragraphs: [
          "**Feuer- und Rauchschutzabschlüsse** sichern Brandabschnitte und Rauchabschnitte. Ihre Funktion hängt von **Schließfolge, Dichtung, Beschlägen und Feststellanlagen** ab. DGUV 205-040 fasst Prüffristen für Türen, Feststellanlagen, Vorhänge und Sonderfälle zusammen.",
          "Ergänzend zu baulicher [Ertüchtigung im Bestand](/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln) gelten **betriebliche Prüfzyklen**.",
        ],
      },
      {
        id: "tueren",
        title: "Rauch- und Brandschutztüren – jährlich",
        paragraphs: [
          "**Rauchschutztüren** und **Brandschutztüren:** **Sicht- und Funktionsprüfung** jährlich durch **Sachkundigen** nach Zulassung und Hersteller-Bedienungsanleitung.",
          "**Feuer- und Rauchschutzabschlüsse nach DIN 18095:** **Wartung** jährlich durch SK gemäß Herstellervorgaben.",
        ],
      },
      {
        id: "feststellung",
        title: "Feststellanlagen und Freilauftürschließer",
        list: [
          "**Freilauftürschließer / Offenhaltung:** monatlich **Betreiber (B)**, jährlich **SK** – Sicht und Funktion nach ASR A1.7 / abZ oder aBG",
          "**DIN 14677 Bauart 1** (ohne BMA): jährliche **Wartung** durch **FK für FstA**",
          "**DIN 14677 Bauart 2** (mit BMA): jährliche **Wartung** durch **FK für FstA und BMA**",
          "**Inspektion** (Bauart 1 und 2): **eP** oder FK für FstA – Intervall nach DIN 14677 Instandhaltung",
        ],
        paragraphs: [
          "FK für FstA ist **nicht** beliebig der Hausmeister – Qualifikation nach DIN 14677 und Herstellerschulung.",
        ],
      },
      {
        id: "vorhaenge",
        title: "Rauch- und Brandschutzvorhänge",
        paragraphs: [
          "**Sicht- und Funktionsprüfung:** **Betreiber (B)** nach Herstellervorgaben. **Prüfung und Wartung:** **Hersteller oder Fachfirma** jährlich – insbesondere bei motorischen Vorhängen in Einkaufszentren und Industriehallen.",
        ],
      },
      {
        id: "foerder",
        title: "Feuerschutzabschlüsse an Förderanlagen",
        paragraphs: [
          "Im Zuge **bahngebundener Förderanlagen:** monatlich Betreiber-Sichtkontrolle, jährlich **bP oder Fachfirma** für Prüfung und Wartung – oft in Logistik und Produktion relevant.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Mängel",
        list: [
          "Türen durch Kabelbinder oder Keile blockiert",
          "Feststellmagnet verdeckt durch Renovierung",
          "Schließfolge gestört nach Bodenbelagswechsel",
          "Dichtungen verschlissen, Türschließer zu schwach eingestellt",
          "Keine Dokumentation der FK-Wartung",
        ],
        paragraphs: [
          "In [Eilbegehungen](/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln) und Brandschauen werden blockierte Rauchschutztüren häufig beanstandet.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Herstellervorgaben und Zulassung (abZ/aBG) können strengere Intervalle verlangen. Sanierung und Einbau: [Feuerschutztüren Bestand](/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln", label: "Türen im Bestand" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA & Bauart 2" },
      { href: "/ratgeber/wer-darf-brandschutzanlagen-pruefen", label: "FK für FstA" },
      { href: "/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln", label: "Eilbegehung" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
    ],
    faq: [
      {
        question: "Darf eine Rauchschutztür dauerhaft offen stehen?",
        answer:
          "Nur mit wirksamer Feststellanlage in Betrieb – nicht mit Keil oder Kette. Sonst Verstoß gegen Schutzziel.",
      },
      {
        question: "Wer darf Feststellanlagen warten?",
        answer:
          "FK für FstA (ggf. mit BMA-Qualifikation bei Bauart 2) – nicht ohne Schulung und Erfahrung.",
      },
      {
        question: "Wie oft Freilauftürschließer prüfen?",
        answer:
          "Monatlich Betreiber, jährlich Sachkundiger – laut DGUV-Tabelle.",
      },
      {
        question: "Brauchen Brandschutztüren ohne Feststellung eine FK?",
        answer:
          "Jährliche SK-Prüfung ja; FK nur bei Feststellanlage nach DIN 14677.",
      },
      {
        question: "Was ist der Unterschied Wartung und Inspektion bei FstA?",
        answer:
          "Wartung: Erhaltung des Soll-Zustands. Inspektion: systematische Feststellung des Ist-Zustands – beide nach DIN 14677 durch qualifiziertes Personal.",
      },
    ],
  },
  {
    slug: "rwa-entrauchung-prueffristen",
    title: "RWA und Entrauchung prüfen: Prüffristen für Rauchabzug",
    excerpt:
      "Natürliche und maschinelle RWA, Treppenraumentrauchung, Aufzugschacht und Rauchschutzdruckanlagen – Intervalle nach VdS, DIN 18232 und DGUV 205-040.",
    metaTitle: "RWA Prüffrist: Entrauchung & RDA | VdS 3830 | H&S+",
    metaDescription:
      "RWA prüfen: halbjährliche Sichtkontrolle, jährliche Funktionsprüfung, SV-Bau alle 3 Jahre – Fristen für natürliche und maschinelle Rauchabzugsanlagen nach DGUV 205-040.",
    keywords: [
      "RWA Prüffrist",
      "Rauchabzugsanlage Wartung",
      "Entrauchung prüfen",
      "Rauchschutzdruckanlage Prüfung",
      "DIN 18232 Instandhaltung",
    ],
    sections: [
      {
        id: "ueberblick",
        title: "RWA-Familie – nicht alles gleich",
        paragraphs: [
          "Unter Rauch- und Wärmeabzugsanlagen fallen unterschiedliche Systeme: natürliche RWA (Dachöffnungen, RWA-Türen), maschinelle Entrauchung, Treppenraumentrauchung, Aufzugschachtentrauchung und Rauchschutzdruckanlagen (RDA). Jede hat eigene Normen und Intervalle in DGUV 205-040.",
        ],
      },
      {
        id: "nra",
        title: "Natürliche RWA (NRA)",
        list: [
          "Halbjährlich: Sichtkontrolle durch Betriebspersonal (P)",
          "Jährlich: Sichtkontrolle und Funktionsprüfung durch SK – VdS 3830, DIN 18232-2, DIN EN 12101-2, LBO",
          "3-jährlich: Wirksamkeit und Betriebssicherheit – SV-Bau (Sonderbau)",
        ],
        paragraphs: [
          "Typisch: RWA-Öffnungen auf Fluchtwegen, in atrien und Hallen – Funktionsprüfung mit Auslösung und Öffnungsnachweis.",
        ],
      },
      {
        id: "treppen",
        title: "Treppenraumentrauchung",
        paragraphs: [
          "Öffnungen zur Rauchableitung in Treppenräumen: jährliche Sichtkontrolle und Funktionsprüfung durch SK nach Landesbauordnungen und VdS 2221 – häufig in Verbindung mit [zweitem Rettungsweg](/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw).",
        ],
      },
      {
        id: "maschinell",
        title: "Maschinelle Rauchabzugsanlagen",
        paragraphs: [
          "Maschinische Anlagen erfordern messende Prüfungen – nicht nur „Motor läuft“. Die Intervalle stapeln sich mit der Anlagenalterung:",
        ],
        list: [
          "Halbjährlich: Sichtkontrolle und Funktionsprüfung (SK) – VDMA 24177, DIN 18232-3, DIN EN 12101-3",
          "Jährlich: Inspektion (SK)",
          "3-jährlich: Volumenstrommessung (P/Fachfirma)",
          "3-jährlich: SV-Bau Wirksamkeit",
          "Lagerüberprüfung Ventilatoren: alle 3 Jahre, dann 8/11/14/17/20 Jahre (E)",
        ],
      },
      {
        id: "rda",
        title: "Rauchschutzdruckanlagen (RDA)",
        paragraphs: [
          "Funktionsprüfung: B/P (Betreiber). Notstromversorgung: monatlich B/P. Wartung und Instandsetzung: jährlich SK oder Errichter (bei Personenschutz verkürzte Intervalle möglich). SV-Bau: 3 Jahre nach Muster-Prüfverordnung.",
          "RDA in Sicherheitstreppenräumen und Krankenhäusern – Ausfall wird schnell zum Personenschutz-Thema.",
        ],
      },
      {
        id: "aufzug",
        title: "Aufzugschachtentrauchung",
        paragraphs: [
          "Jährliche Sichtkontrolle und Funktionsprüfung durch SK nach VdS 2895 – Abstimmung mit Aufzugswartung und BMA-Brandfallsteuerung.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Prüforganisation und typische Mängel",
        paragraphs: [
          "In Betriebsbegehungen in NRW fehlen RWA-Protokolle häufiger als bei BMA – obwohl Entrauchung lebensrettend ist. Abgrenzung: Sichtkontrolle durch Betrieb ersetzt keine jährliche SK-Funktionsprüfung; SV-Bau im Sonderbau ist nicht dasselbe wie Herstellerwartung.",
          "Praxisfall Versammlungsstätte: RWA-Öffnung klemmte nach Winter – letzte Funktionsprüfung 14 Monate zurück. Behördenforderung: Terminplan mit Verantwortlichen und Ersatzteilliste. Orientierungswert: RWA-Probelauf vor Saisonstart bei VS und Hallenbädern.",
          "Anlagenbuch mit Prüfberichten, Mängeln und Freigaben führen – Schnittstelle zum genehmigten Entrauchungskonzept.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Hydraulische Berechnung und Nachweis aus Planungsphase werden durch Instandhaltung nicht ersetzt. Nach Umbau: [Entrauchung im Konzept](/ratgeber/umbau-nutzungsaenderung-brandschutz) prüfen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "SV-Bau" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Steuerung" },
      { href: "/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw", label: "Treppenraum NRW" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/feuerschutzabschluesse-prueffristen-fstA", label: "Rauchschutzabschlüsse" },
    ],
    faq: [
      {
        question: "Muss die RWA jedes Jahr voll ausgelöst werden?",
        answer:
          "Funktionsprüfung nach Norm und Hersteller – oft mit Testmodus. Vollauslösung in Abstimmung mit Betrieb und Alarmkette.",
      },
      {
        question: "Wer darf RWA warten?",
        answer:
          "Sachkundiger mit Erfahrung auf dem konkreten System – oft Entrauchungs-Fachfirma, nicht beliebiger Elektriker.",
      },
      {
        question: "Gilt RWA nur in Sonderbauten?",
        answer:
          "Natürliche RWA auch in normalen Gebäuden nach LBO. SV-Bau-Prüfung typisch im Sonderbau-Kontext.",
      },
      {
        question: "Was ist der Unterschied RWA und RDA?",
        answer:
          "RWA führt Rauch ab; RDA (Rauchschutzdruckanlage) hält Treppenräume überdruckig – andere Norm (DIN EN 12101-6).",
      },
      {
        question: "Wie dokumentiere ich Prüfungen?",
        answer:
          "Prüfbuch Sonderbau, Wartungsprotokolle, Mängelliste mit Fristen – gleiche Logik wie bei BMA.",
      },
      {
        question: "Was passiert, wenn die SV-Bau-Prüfung der RWA überfällig ist?",
        answer:
          "Im Sonderbau kann die Aufsicht Nutzungseinschränkungen verlangen oder die Prüfung nachholen lassen. Versicherer und Behörden werten überfällige SV-Prüfungen als Organisationsmangel – unabhängig von der täglichen Sichtkontrolle.",
      },
    ],
  },
  {
    slug: "sprinkler-loeschanlagen-prueffristen",
    title: "Sprinkler und Löschanlagen prüfen: Prüffristen nach VdS",
    excerpt:
      "Sprinkler, Sprühwasser- und Schaum-Löschanlagen: Betriebskontrolle, Instandhaltung, Inspektion, SV-Bau und Druckbehälter – Intervalle aus DGUV 205-040 und VdS CEA 4001.",
    metaTitle: "Sprinkler Prüffrist: Wartung & Inspektion | VdS | H&S+",
    metaDescription:
      "Sprinkleranlage prüfen: tägliche Sichtkontrolle, jährliche Instandhaltung, 5-jährige Inspektion, SV-Bau und Druckbehälter – Prüffristen nach VdS CEA 4001 und DGUV 205-040.",
    keywords: [
      "Sprinkler Prüffrist",
      "Sprinkleranlage Wartung",
      "VdS CEA 4001 Inspektion",
      "Löschanlage prüfen",
      "Sprinkler SV-Bau",
    ],
    sections: [
      {
        id: "ueberblick",
        title: "Löschanlagen – mehrjährige Taktung",
        paragraphs: [
          "**Sprinkler-, Sprühwasser- und Schaum-Löschanlagen** haben die **längsten Prüfzyklen** im Brandschutz – dafür umfangreiche **5-, 10- und 25-Jahres-Prüfungen**. Grundlage in DGUV 205-040: **VdS CEA 4001** (Sprinkler), **VdS 2109** (Sprühwasser), **VdS 2108** (Schaum). Ergänzend: [Sprinkler und Trockenbau](/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw).",
        ],
      },
      {
        id: "sprinkler-betrieb",
        title: "Sprinkler – Betrieb und Instandhaltung",
        paragraphs: [
          "Die DGUV-Tabelle „Löschanlagen“ für Sprinkler nach **VdS CEA 4001** – Auszug der wichtigsten Intervalle:",
        ],
        list: [
          "**Nach Erfordernis (vP):** Sichtkontrolle und Funktionsprüfung – Pumpen, Ventile, Druck",
          "**Jährlich (E/Errichter):** Instandhaltung",
          "**2-jährlich (E):** erweiterte Instandhaltung",
          "**5-jährlich (E):** Inspektion und erweiterte Inspektion (versetzt)",
          "**5-jährlich (SV-Bau):** Wirksamkeit und Betriebssicherheit im Sonderbau",
          "**5-jährlich (ZÜS):** innere Prüfung Druckbehälter – BetrSichV",
          "**10-jährlich (ZÜS):** Festigkeitsprüfung Druckbehälter",
        ],
      },
      {
        id: "altanlagen",
        title: "Altanlagenprüfungen – 12,5 und 25 Jahre",
        paragraphs: [
          "Bei älteren Anlagen kommen **SV-V-Prüfungen** hinzu: Trockenrohrnetz (**12,5 Jahre**), Wasserbehälter (**20 Jahre**), umfangreiche Altanlagenprüfung (**25 Jahre**). Betreiber historischer Fabrikhallen unterschätzen diese Fristen oft.",
        ],
      },
      {
        id: "spruehwasser-schaum",
        title: "Sprühwasser und Schaum",
        paragraphs: [
          "Ähnliche Struktur wie Sprinkler nach **VdS 2109** bzw. **VdS 2108** – bei Schaum zusätzlich Nachweis der **Schaummittelkonzentration** in der erweiterten Instandhaltung. **SV-Bau:** 5 Jahre. Druckbehälter: ZÜS nach BetrSichV.",
        ],
      },
      {
        id: "loeschwasser",
        title: "Löschwasseranlagen und Hydranten",
        paragraphs: [
          "Aus Tabelle **Brandbekämpfungseinrichtungen:** Löschwasseranlagen nass/nass-trocken – monatlich **Betreiber-Sichtkontrolle**, jährlich **SK-Instandhaltung**, **3-jährlich SV-Bau**, **5-jährlich** Druckprüfung Löschschlauch, **10/25-jährlich** Leitungsprüfungen nach DIN 14462. Siehe [Löschwasser Hydranten](/ratgeber/loeschwasser-hydranten-gewerbe-koeln).",
        ],
      },
      {
        id: "versicherung",
        title: "SV-V – Versicherungsschutz",
        paragraphs: [
          "**Technische Schutzwirkung** durch **SV-V** – bei Sprinkler typisch parallel zu Errichter-Instandhaltung. Versicherer kann **kürzere Fristen** als VdS-Minimum verlangen; Vollschutz setzt erfüllte Klauseln voraus.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Hydraulischer Nachweis und Planung ersetzen keine Instandhaltung – umgekehrt deckt Wartung keine baulichen Änderungen (Trockenbau, Umnutzung). Nach Umbau: Fachplaner und SV-Bau einbinden.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw", label: "Sprinkler & Trockenbau" },
      { href: "/ratgeber/loeschwasser-hydranten-gewerbe-koeln", label: "Löschwasser & Hydranten" },
      { href: "/ratgeber/wartung-inspektion-pruefung-brandschutz-din-31051", label: "Inspektion vs. Wartung" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "SV-Bau" },
      { href: "/ratgeber/sprinkler-rueckbau-bma-nutzungsaenderung-koeln", label: "Sprinkler bei Umbau" },
    ],
    faq: [
      {
        question: "Muss jeder Sprinklerkopf jährlich ausgelöst werden?",
        answer:
          "Nein. Instandhaltung nach VdS-Programm – stichprobenartige Funktionsprüfungen und Komponententests, nicht vollständige Nasslöschung aller Köpfe.",
      },
      {
        question: "Was passiert bei versetzter 5-Jahres-Inspektion?",
        answer:
          "Inspektion und erweiterte Inspektion sind beide 5-jährlich, aber zeitlich versetzt – beide Termine müssen im Prüfbuch nachweisbar sein.",
      },
      {
        question: "Brauche ich Sprinkler-Wartung ohne Versicherung?",
        answer:
          "Bei genehmigungspflichtiger Anlage ja – baurechtlich und nach VdS. Versicherung verschärft ggf. Anforderungen.",
      },
      {
        question: "Wer prüft Sprinkler-Druckbehälter?",
        answer:
          "Zugelassene Überwachungsstelle (ZÜS) nach BetrSichV – nicht der Sprinkler-Errichter allein.",
      },
      {
        question: "Gilt das auch für kleine Sprinkler in einem Lager?",
        answer:
          "Ja, wenn eine genehmigte Löschanlage vorliegt – Umfang nach Anlagengröße und VdS, nicht nach „klein“ im Betrieb.",
      },
    ],
  },
];
