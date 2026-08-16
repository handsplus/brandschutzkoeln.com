/**
 * März/April 2026 – Ratgeber-Cluster Prüffristen im Brandschutz (DGUV Information 205-040).
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_PRUEFFRISTEN_MAR_APR2026: RatgeberArticle[] = [
  {
    slug: "prueffristen-brandschutz-dguv-205-040-ueberblick",
    title: "Prüffristen im Brandschutz: Überblick nach DGUV 205-040",
    excerpt:
      "Welches Rechtsgebiet für welche Anlage gilt: ArbStättV und ASR, BetrSichV, PrüfVO NRW, Versicherer und DGUV – und warum dieselbe BMA mehrere Prüfzyklen hat.",
    metaTitle: "Prüffristen Brandschutz: Rechtsgebiete | DGUV 205-040 | H&S+",
    metaDescription:
      "Prüffristen im Brandschutz: ArbStättV, BetrSichV, PrüfVO NRW (3/6 Jahre), Versicherer und DGUV 205-040 – welches Regime für BMA, Löscher, RWA und Sprinkler gilt.",
    keywords: [
      "Prüffristen Brandschutz",
      "DGUV 205-040",
      "Brandschutz Prüfung Intervall",
      "ArbStättV Brandschutz",
      "PrüfVO NRW",
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
          "**Bauaufsicht / PrüfVO NRW:** technische Anlagen in erfassten Gebäuden – **Prüfsachverständige**, wiederkehrend max. **3 Jahre** (Nr. 1–8) bzw. **6 Jahre** (Nr. 9–11)",
          "**Versicherer (SV-V):** Technische Schutzwirkung – z. B. Sprinkler, BMA mit erhöhten Anforderungen",
          "**Errichter / Fachfirmen:** Inspektion und Wartung nach DIN VDE, VdS – **EFK** oder Errichter (Instandhaltung, nicht PrüfVO-Frist)",
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
          "Eine Brandmeldeanlage im erfassten Gebäude hat typischerweise: **Betriebsbereitschaft** (Betreiber), **jährliche Begehung/Inspektion und Wartung** (SK oder EFK nach DIN VDE 0833 – Instandhaltung), **wiederkehrend max. 3 Jahre Prüfsachverständiger** nach PrüfVO NRW (Nr. 8) und ggf. **SV-V** nach Versicherungsklauseln.",
          "Fehler in der Praxis: Nur die Wartungsrechnung des Errichters liegt vor – die **PrüfVO-Prüfung** ist überfällig. Oder umgekehrt: Prüfsachverständigen-Protokoll existiert, aber **Betriebskontrollen** fehlen in der Dokumentation. Leitseite: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
        ],
      },
      {
        id: "dokumentation",
        title: "Prüfbuch und Nachweisführung",
        paragraphs: [
          "Für Anlagen nach PrüfVO NRW: Prüfunterlagen, Berichte und Mängelnachweise beim Betreiber (§ 2 Abs. 2). Für Arbeitsschutz: Prüfprotokolle, Plaketten, Gefährdungsbeurteilung. Versicherer erwarten separate Schutzwirkungsnachweise.",
          "Der Brandschutzbeauftragte koordiniert die Fristen – ersetzt aber nicht die fachkundige Prüfung durch SK, bP, EFK oder Prüfsachverständige.",
        ],
      },
      {
        id: "nrw",
        title: "NRW: PrüfVO, BauPrüfVO und Brandschau",
        paragraphs: [
          "In NRW ist die betriebliche Prüfsachverständigen-Prüfung die **PrüfVO NRW** (3/6 Jahre nach Anlagentyp) – nicht die BauPrüfVO. Die **BauPrüfVO** regelt Bauvorlagen und Brandschutzkonzept in der Genehmigung. Die Brandschau der Feuerwehr prüft Einsatzvoraussetzungen – sie ersetzt weder EFK-Wartung noch die PrüfVO-Prüfung. Details: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) und [Sonderbau-Prüfung](/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung).",
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
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/wer-darf-brandschutzanlagen-pruefen", label: "Wer darf prüfen?" },
      { href: "/ratgeber/wartung-inspektion-pruefung-brandschutz-din-31051", label: "Wartung vs. Prüfung" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "Sonderbau-Prüfung" },
      { href: "/ratgeber/feuerloescher-pruefen-wartung-asr-a22", label: "Feuerlöscher prüfen" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
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
          "**Prüfsachverständige** nach PrüfVO NRW: Wirksamkeit und Betriebssicherheit technischer Anlagen – wiederkehrend max. **3 Jahre** für Nr. 1–8 (u. a. BMA Nr. 8, selbsttätige Löschanlagen Nr. 2, maschinelle RWA Nr. 6) und max. **6 Jahre** für Nr. 9–11 (u. a. natürliche RWA Nr. 10, nicht-selbsttätige Löschanlagen Nr. 11). Die BauPrüfVO ist nicht die Umsetzungs-VO der Muster-PrüfVO und regelt keine Betriebsprüfung. Leitseite: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
          "**SV-V** (Versicherungssachverständiger): Technische Schutzwirkung nach **Versicherungsklauseln** – kann kürzere Intervalle verlangen als der Gesetzgeber. Errichter-Intervalle (z. B. 5-jährige erweiterte Inspektion Sprinkler nach VdS) sind **Instandhaltung**, nicht die PrüfVO-Frist.",
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
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/prueffristen-brandschutz-dguv-205-040-ueberblick", label: "Prüffristen Überblick" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Prüffristen" },
      { href: "/ratgeber/feuerloescher-pruefen-wartung-asr-a22", label: "Feuerlöscher prüfen" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "Sonderbau-Prüfung" },
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
          "Laut DGUV-Tabelle: **Begehungen** (SK oder EFK), **Inspektion** (EFK, jährlich), **Wartung** (EFK, zweijährlich), **Instandsetzung** (EFK nach Bedarf). Parallel – wenn Teil 1 greift: bauordnungsrechtliche Prüfung durch Prüfsachverständige nach [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau); BMA (Nr. 8) wiederkehrend max. **3 Jahre**, nicht 3–5 Jahre und nicht Muster-PrüfVO/BauPrüfVO.",
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
        id: "vertiefung",
        title: "Praxis: Prüfkalender und Nachweise",
        paragraphs: [
          "Wartung, Inspektion, Prüfung: Begriffe nach DIN 31051 verlangen in NRW einen schriftlichen Prüfkalender mit Verantwortlichen (B, SK, FK, SV-Bau) – nicht nur den Wartungsvertrag in der Schublade. Abgrenzung: Inspektion durch Sachkundigen ersetzt nicht die Sachverständigenprüfung im Sonderbau.",
          "Praxisfall: Protokolle lückenhaft nach Personalwechsel – Behörde verlangte Nachweis der eingewiesenen Personen und Übergabe des Anlagenbuchs. Orientierungswert: Jährliche Terminplanung mit BMA-, RWA- und Türen-Fristen in einem Dokument.",
          "Nachweis im Betrieb: Mängelliste mit Fristen, Freigabe nach Reparatur und Konzeptverweis bei wesentlichen Änderungen – Fortschreibung nach Umbau Pflicht.",
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
          "Nein. Instandhaltung nach DIN/DGUV ersetzt nicht die bauordnungsrechtliche Prüfung durch Prüfsachverständige nach PrüfVO NRW. BMA (Nr. 8) wiederkehrend max. 3 Jahre, wenn Teil 1 greift – nicht Muster-PrüfVO und nicht 3–5 Jahre. Siehe [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
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
    title: "Sonderbau-Prüfung NRW: PrüfVO – nicht BauPrüfVO",
    excerpt:
      "Betriebliche Prüfsachverständigen-Prüfung = PrüfVO NRW (3/6 Jahre). BauPrüfVO = Bauvorlagen und Brandschutzkonzept. Muster-PrüfVO anderer Länder ist kein NRW-Recht.",
    metaTitle: "Sonderbau-Prüfung: PrüfVO NRW 3/6 Jahre | H&S+",
    metaDescription:
      "Sonderbau-Prüfung NRW: PrüfVO 3 Jahre (Nr. 1–8 inkl. BMA/Sprinkler), 6 Jahre (Nr. 9–11). BauPrüfVO ≠ betriebsprüfende Verordnung. Muster-PrüfVO anderer Länder nicht übernehmen.",
    keywords: [
      "Muster Prüfverordnung",
      "Sonderbau Prüfung",
      "PrüfVO NRW",
      "Prüfbuch Sonderbau",
      "Prüfsachverständiger Brandschutz",
    ],
    sections: [
      {
        id: "grundlage",
        title: "Welche Verordnung gilt in NRW für die Anlagenprüfung?",
        paragraphs: [
          "Die wiederkehrende Prüfung technischer Anlagen durch Prüfsachverständige richtet sich in NRW nach der PrüfVO NRW – nicht nach der BauPrüfVO. Die BauPrüfVO regelt Bauvorlagen und das Brandschutzkonzept in der Genehmigung. Die Muster-Prüfverordnung der ARGEBAU ist Orientierungsvorlage anderer Länder; sie ist in NRW nicht „als BauPrüfVO umgesetzt“.",
          "PrüfVO begründet keine Einbaupflicht: Sie prüft vorhandene oder bauordnungsrechtlich geforderte Anlagen. Ob Teil 1 greift, ergibt sich aus dem Gebäudekatalog § 1 und ggf. Anordnung. Leitseite: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
        ],
      },
      {
        id: "intervalle",
        title: "Intervalle nach Anlagentyp – 3 und 6 Jahre",
        paragraphs: [
          "Wiederkehrend nicht mehr als drei Jahre für Anlagen Nr. 1–8 (u. a. selbsttätige Feuerlöschanlagen, maschinelle RWA, Brandmelde- und Alarmierungsanlagen). Nicht mehr als sechs Jahre für Nr. 9–11 (elektrische Anlagen soweit erfasst, natürliche Rauchabzugsanlagen, nicht-selbsttätige Feuerlöschanlagen).",
        ],
        table: {
          caption: "PrüfVO NRW – wiederkehrende Fristen (Teil 1)",
          headers: ["Nr.", "Anlage", "Wiederkehrend"],
          rows: [
            ["2", "ortsfeste selbsttätige Feuerlöschanlagen (z. B. Sprinkler)", "max. 3 Jahre"],
            ["8", "Brandmelde- und Alarmierungsanlagen", "max. 3 Jahre"],
            ["3–7", "u. a. maschinelle RWA, Sicherheitsbeleuchtung (soweit Nr. 1–8)", "max. 3 Jahre"],
            ["9–10", "elektrische Anlagen / natürliche RWA (soweit erfasst)", "max. 6 Jahre"],
            ["11", "ortsfeste nicht-selbsttätige Feuerlöschanlagen", "max. 6 Jahre"],
          ],
        },
      },
      {
        id: "abgrenzung",
        title: "BauPrüfVO, DGUV, Muster-PrüfVO",
        paragraphs: [
          "BauPrüfVO: Genehmigungsunterlagen und Konzept – keine Ersatzregel für Betriebsprüfungen nach PrüfVO. DGUV 205-040 / DIN / VdS: Instandhaltung und Arbeitsschutz – parallel, aber nicht die bauordnungsrechtliche Prüfsachverständigen-Frist.",
          "Teil 2 § 10 PrüfVO (Behördenprüfung Gebäude) ist etwas anderes als Teil 1 (Anlagen). Bei Beherbergung greift § 10 erst bei mehr als 60 Betten.",
        ],
      },
      {
        id: "pruefbuch",
        title: "Unterlagen und Mängel",
        paragraphs: [
          "Betreiber: Prüfunterlagen, Mängelbeseitigung, Berichte, Aufbewahrung – siehe § 2 Abs. 2 PrüfVO. Schwerwiegende Mängel können zur Nutzungseinschränkung führen. Die Brandschau der Feuerwehr ersetzt die Prüfsachverständigen-Prüfung nicht.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Landesrecht und Baugenehmigung entscheiden. Kein Ersatz für Prüfbericht oder behördliche Festlegung. Verwechslung BauPrüfVO/PrüfVO ist ein häufiger Planungsfehler.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW Leitseite" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Fristen" },
      { href: "/ratgeber/sprinkler-loeschanlagen-prueffristen", label: "Sprinkler-Fristen" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "BauPrüfVO / Konzept" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Ist die BauPrüfVO die PrüfVO für Sonderbauten?",
        answer:
          "Nein. BauPrüfVO = Bauvorlagen und Brandschutzkonzept. Betriebliche Prüfsachverständigen-Prüfung = PrüfVO NRW.",
      },
      {
        question: "Wie oft BMA und Sprinkler nach PrüfVO?",
        answer:
          "Beide unter Nr. 1–8: wiederkehrend nicht mehr als 3 Jahre, wenn Teil 1 greift. Nicht-selbsttätige Löschanlagen (Nr. 11): max. 6 Jahre.",
      },
      {
        question: "Darf ich Muster-PrüfVO-Fristen aus anderen Ländern übernehmen?",
        answer:
          "Nicht als NRW-Recht. In NRW gelten PrüfVO-Fristen 3/6 Jahre nach Anlagentyp – nicht pauschal „SV-Bau 5 Jahre“.",
      },
      {
        question: "Wer beauftragt den Prüfsachverständigen?",
        answer:
          "Der Betreiber auf eigene Kosten (§ 2 Abs. 2 PrüfVO) – oft über Facility oder Brandschutzbeauftragten.",
      },
      {
        question: "Gilt die Prüfpflicht auch im Bestand?",
        answer:
          "Ja, wenn das Gebäude im Katalog § 1 steht oder Prüfung angeordnet ist und prüfpflichtige Anlagen vorhanden sind.",
      },
      {
        question: "Brauchen normale Büros diese Prüfung?",
        answer:
          "Nur wenn Katalogtatbestand oder Anordnung greift – nicht allein weil eine BMA freiwillig vorhanden ist.",
      },
    ],
  },
  {
    slug: "bma-prueffristen-brandmeldeanlage",
    title: "BMA-Prüffristen NRW: Wie oft prüfen – 3 Jahre PrüfVO?",
    excerpt:
      "In NRW wiederkehrend max. 3 Jahre für Brandmelde- und Alarmierungsanlagen (PrüfVO § 1 Abs. 1 Satz 2 Nr. 8). DIN VDE 0833 / DIN 14675 / DGUV = Instandhaltung – nicht die bauordnungsrechtliche Frist.",
    metaTitle: "BMA prüfen NRW: PrüfVO 3 Jahre | H&S+",
    metaDescription:
      "BMA-Prüffristen NRW: wiederkehrend max. 3 Jahre nach PrüfVO (Nr. 8). Wartung nach DIN VDE 0833 / DGUV zusätzlich – nicht als bauordnungsrechtliche Frist.",
    keywords: [
      "BMA Prüffrist",
      "Brandmeldeanlage Wartung",
      "PrüfVO NRW BMA",
      "BMA Prüfung Intervall",
      "DIN VDE 0833-1 Inspektion",
    ],
    sections: [
      {
        id: "ueberblick",
        title: "Wie oft muss die BMA in NRW geprüft werden?",
        paragraphs: [
          "Bauordnungsrechtlich: Brandmelde- und Alarmierungsanlagen = PrüfVO § 1 Abs. 1 Satz 2 Nr. 8 → wiederkehrend nicht mehr als 3 Jahre (§ 2 Abs. 1 Satz 3), wenn Teil 1 greift. Nicht „SV-Bau typisch 5 Jahre“.",
          "Zusätzlich: Instandhaltung nach DIN VDE 0833 / DIN 14675 und DGUV 205-040 (Betriebskontrolle, Begehung, Inspektion, Wartung) – klar getrennt von der PrüfVO-Frist. Details Katalog und Betreiberpflichten: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
        ],
        table: {
          caption: "BMA – zwei Ebenen",
          headers: ["Ebene", "Frist / Takt", "Rechtsquelle"],
          rows: [
            ["Prüfsachverständiger (wirksam/betriebssicher)", "max. 3 Jahre wiederkehrend", "PrüfVO NRW Nr. 8"],
            ["Betriebskontrolle / Begehung / Inspektion / Wartung", "nach DIN/DGUV (z. B. jährlich / 2-jährlich)", "DIN VDE 0833, DIN 14675, DGUV 205-040"],
            ["Versicherung (falls vereinbart)", "nach Klausel (z. B. SV-V)", "nicht PrüfVO"],
          ],
        },
      },
      {
        id: "instandhaltung",
        title: "Instandhaltung – nicht die PrüfVO-Frist",
        paragraphs: [
          "Typisch parallel: Betriebskontrolle durch verantwortliche Person; jährliche Begehung/Inspektion durch SK oder EFK; Wartung nach Norm (oft zweijährlich). Melder-Austauschfristen nach DIN 14675-1 gehören zur Instandhaltung – nicht zur PrüfVO-Intervallregel.",
          "Grenzfall ja: PrüfVO-Bericht alle 3 Jahre plus laufende EFK-Wartung. Grenzfall nein: Nur Wartungsrechnung, obwohl das Objekt im PrüfVO-Katalog steht.",
        ],
      },
      {
        id: "sonderbau",
        title: "Wann greift Teil 1 überhaupt?",
        paragraphs: [
          "Nur in Gebäuden nach § 1 Abs. 1 Satz 1 PrüfVO bzw. bei Anordnung – nicht in jedem Gewerbe mit BMA. Die PrüfVO verlangt keine BMA; sie prüft vorhandene/geforderte Anlagen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Versicherung und VdS können zusätzliche Fristen verlangen – das ändert die PrüfVO-3-Jahres-Regel nicht. Kein Ersatz für Prüfbericht.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW Leitseite" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "Sonderbau-Prüfung" },
      { href: "/ratgeber/sprinkler-loeschanlagen-prueffristen", label: "Sprinkler-Fristen" },
      { href: "/ratgeber/wartung-inspektion-pruefung-brandschutz-din-31051", label: "Wartung vs. Inspektion" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Alle 5 Jahre SV-Bau – gilt das in NRW für BMA?",
        answer:
          "Nein. Nach PrüfVO NRW gilt für Brandmelde- und Alarmierungsanlagen (Nr. 8) wiederkehrend max. 3 Jahre – nicht 5.",
      },
      {
        question: "Ersetzt DIN VDE 0833 die PrüfVO?",
        answer:
          "Nein. DIN/DGUV regeln Instandhaltung. PrüfVO ist die baurechtliche Prüfsachverständigen-Prüfung.",
      },
      {
        question: "Reicht der Wartungsvertrag?",
        answer:
          "Für EFK-Instandhaltung ggf. ja. Die PrüfVO-Prüfung ist separat, wenn Teil 1 greift.",
      },
      {
        question: "Muss jede BMA nach PrüfVO geprüft werden?",
        answer:
          "Nur wenn das Gebäude im Katalog § 1 steht oder Prüfung angeordnet ist. Freiwillige BMA allein begründet keine PrüfVO-Pflicht.",
      },
      {
        question: "Müssen Rauchwarnmelder in Wohnungen zur BMA?",
        answer:
          "Nein. Stand-alone-Rauchwarnmelder: Sicht- und Funktionsprüfung nach DIN 14676 – keine PrüfVO-BMA.",
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
          "Feuer- und Rauchschutzabschlüsse sichern Brandabschnitte und Rauchabschnitte. Ihre Funktion hängt von Schließfolge, Dichtung, Beschlägen und Feststellanlagen ab. DGUV 205-040 fasst Prüffristen für Türen, Feststellanlagen, Vorhänge und Sonderfälle zusammen.",
          "Ergänzend zu baulicher [Ertüchtigung im Bestand](/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln) gelten betriebliche Prüfzyklen.",
        ],
      },
      {
        id: "tueren",
        title: "Rauch- und Brandschutztüren – jährlich",
        paragraphs: [
          "Rauchschutztüren und Brandschutztüren: Sicht- und Funktionsprüfung jährlich durch Sachkundigen nach Zulassung und Hersteller-Bedienungsanleitung.",
          "Feuer- und Rauchschutzabschlüsse nach DIN 18095: Wartung jährlich durch SK gemäß Herstellervorgaben.",
        ],
      },
      {
        id: "feststellung",
        title: "Feststellanlagen und Freilauftürschließer",
        list: [
          "Freilauftürschließer / Offenhaltung: monatlich Betreiber (B), jährlich SK – Sicht und Funktion nach ASR A1.7 / abZ oder aBG",
          "DIN 14677 Bauart 1 (ohne BMA): jährliche Wartung durch FK für FstA",
          "DIN 14677 Bauart 2 (mit BMA): jährliche Wartung durch FK für FstA und BMA",
          "Inspektion (Bauart 1 und 2): eP oder FK für FstA – Intervall nach DIN 14677 Instandhaltung",
        ],
        paragraphs: [
          "FK für FstA ist nicht beliebig der Hausmeister – Qualifikation nach DIN 14677 und Herstellerschulung.",
        ],
      },
      {
        id: "vorhaenge",
        title: "Rauch- und Brandschutzvorhänge",
        paragraphs: [
          "Sicht- und Funktionsprüfung: Betreiber (B) nach Herstellervorgaben. Prüfung und Wartung: Hersteller oder Fachfirma jährlich – insbesondere bei motorischen Vorhängen in Einkaufszentren und Industriehallen.",
        ],
      },
      {
        id: "foerder",
        title: "Feuerschutzabschlüsse an Förderanlagen",
        paragraphs: [
          "Im Zuge bahngebundener Förderanlagen: monatlich Betreiber-Sichtkontrolle, jährlich bP oder Fachfirma für Prüfung und Wartung – oft in Logistik und Produktion relevant.",
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
        id: "vertiefung",
        title: "Praxis: Prüfkalender und Nachweise",
        paragraphs: [
          "In NRW werden Feststellanlagen und Rauchschutztüren bei Schau und Betriebsbegehung regelmäßig auf gültige Wartungsnachweise geprüft – fehlende FK-Protokolle führen zu Auflagen. Abgrenzung: Monatliche Betreiber-Sichtkontrolle ersetzt keine jährliche SK-Wartung nach DIN 14677.",
          "Praxisfall Bürogebäude: Dauerhaft geklemmte RS-Türen ohne genehmigte Feststellung – Mängel mit kurzer Frist. Nachweis: Wartungsbuch je Tür mit Standort, Hersteller und Prüfdatum führen.",
          "Vertiefung Bestand: [Feuerschutzabschlüsse Bestand](/ratgeber/feuerschutzabschluesse-bestand-nrw) – Ertüchtigung und Prüfzyklen getrennt bewerten.",
        ],
      },
      {
        id: "betrieb-nachweis",
        title: "Praxis: Prüfkalender und Nachweise",
        paragraphs: [
          "In NRW werden Feststellanlagen und Rauchschutztüren bei Schau und Betriebsbegehung regelmäßig auf gültige Wartungsnachweise geprüft – fehlende FK-Protokolle führen zu Auflagen. Abgrenzung: Monatliche Betreiber-Sichtkontrolle ersetzt keine jährliche SK-Wartung nach DIN 14677.",
          "Praxisfall Bürogebäude: Dauerhaft geklemmte RS-Türen ohne genehmigte Feststellung – Mängel mit kurzer Frist. Nachweis: Wartungsbuch je Tür mit Standort, Hersteller und Prüfdatum führen.",
          "Vertiefung Bestand: [Feuerschutzabschlüsse Bestand](/ratgeber/feuerschutzabschluesse-bestand-nrw) – Ertüchtigung und Prüfzyklen getrennt bewerten.",
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
      "RWA prüfen: Instandhaltung nach VDMA/DIN; PrüfVO NRW maschinelle RWA max. 3 Jahre (Nr. 6), natürliche RWA max. 6 Jahre (Nr. 10).",
    keywords: [
      "RWA Prüffrist",
      "Rauchabzugsanlage Wartung",
      "Entrauchung prüfen",
      "PrüfVO NRW RWA",
      "DIN 18232 Instandhaltung",
    ],
    sections: [
      {
        id: "ueberblick",
        title: "RWA-Familie – nicht alles gleich",
        paragraphs: [
          "Unter Rauch- und Wärmeabzugsanlagen fallen unterschiedliche Systeme: natürliche RWA (Dachöffnungen, RWA-Türen), maschinelle Entrauchung, Treppenraumentrauchung, Aufzugschachtentrauchung und Rauchschutzdruckanlagen (RDA). DGUV 205-040 und VDMA/DIN regeln die **Instandhaltung**. In NRW gilt die bauordnungsrechtliche Prüfung nach [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau): maschinelle RWA (Nr. 6) max. **3 Jahre**, natürliche RWA (Nr. 10) max. **6 Jahre**.",
        ],
      },
      {
        id: "nra",
        title: "Natürliche RWA (NRA)",
        list: [
          "Halbjährlich: Sichtkontrolle durch Betriebspersonal (P) – Instandhaltung",
          "Jährlich: Sichtkontrolle und Funktionsprüfung durch SK – VdS 3830, DIN 18232-2, DIN EN 12101-2",
          "PrüfVO NRW Nr. 10: Wirksamkeit/Betriebssicherheit wiederkehrend max. 6 Jahre (wenn Teil 1 greift)",
        ],
        paragraphs: [
          "Typisch: RWA-Öffnungen auf Fluchtwegen, in Atrien und Hallen – Funktionsprüfung mit Auslösung und Öffnungsnachweis. Die 6-Jahres-Frist ist nicht die jährliche SK-Wartung.",
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
          "Maschinische Anlagen erfordern messende Prüfungen – nicht nur „Motor läuft“. Instandhaltung (VDMA/DIN) und PrüfVO laufen parallel:",
        ],
        list: [
          "Halbjährlich: Sichtkontrolle und Funktionsprüfung (SK) – VDMA 24177, DIN 18232-3, DIN EN 12101-3",
          "Jährlich: Inspektion (SK)",
          "3-jährlich: Volumenstrommessung (P/Fachfirma) – Instandhaltung",
          "PrüfVO NRW Nr. 6: wiederkehrend max. 3 Jahre (Prüfsachverständiger)",
          "Lagerüberprüfung Ventilatoren: alle 3 Jahre, dann 8/11/14/17/20 Jahre (E) – Instandhaltung",
        ],
      },
      {
        id: "rda",
        title: "Rauchschutzdruckanlagen (RDA)",
        paragraphs: [
          "Funktionsprüfung: B/P (Betreiber). Notstromversorgung: monatlich B/P. Wartung und Instandsetzung: jährlich SK oder Errichter (bei Personenschutz verkürzte Intervalle möglich). Bauordnungsrechtlich: Prüfsachverständige nach PrüfVO NRW – typisch unter den 3-Jahres-Anlagen (Nr. 1–8), nicht „Muster-Prüfverordnung“.",
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
          "In Betriebsbegehungen in NRW fehlen RWA-Protokolle häufiger als bei BMA – obwohl Entrauchung lebensrettend ist. Abgrenzung: Sichtkontrolle durch Betrieb ersetzt keine jährliche SK-Funktionsprüfung; die PrüfVO-Prüfung ist nicht dasselbe wie Herstellerwartung.",
          "Praxisfall Versammlungsstätte: RWA-Öffnung klemmte nach Winter – letzte Funktionsprüfung 14 Monate zurück. Behördenforderung: Terminplan mit Verantwortlichen und Ersatzteilliste. Orientierungswert: RWA-Probelauf vor Saisonstart bei VS und Hallenbädern.",
          "Anlagenbuch mit Prüfberichten, Mängeln und Freigaben führen – Schnittstelle zum genehmigten Entrauchungskonzept.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Prüfkalender und Nachweise",
        paragraphs: [
          "RWA und Entrauchung prüfen: Prüffristen für Rauchabzug verlangen in NRW einen schriftlichen Prüfkalender mit Verantwortlichen (B, SK, FK, SV-Bau) – nicht nur den Wartungsvertrag in der Schublade. Abgrenzung: Inspektion durch Sachkundigen ersetzt nicht die Sachverständigenprüfung im Sonderbau.",
          "Praxisfall: Protokolle lückenhaft nach Personalwechsel – Behörde verlangte Nachweis der eingewiesenen Personen und Übergabe des Anlagenbuchs. Orientierungswert: Jährliche Terminplanung mit BMA-, RWA- und Türen-Fristen in einem Dokument.",
          "Nachweis im Betrieb: Mängelliste mit Fristen, Freigabe nach Reparatur und Konzeptverweis bei wesentlichen Änderungen – Fortschreibung nach Umbau Pflicht.",
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
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "Sonderbau-Prüfung" },
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
          "Natürliche RWA auch in normalen Gebäuden nach BauO. Die PrüfVO-Prüfung greift nur, wenn Katalog § 1 oder Anordnung greift.",
      },
      {
        question: "Was ist der Unterschied RWA und RDA?",
        answer:
          "RWA führt Rauch ab; RDA (Rauchschutzdruckanlage) hält Treppenräume überdruckig – andere Norm (DIN EN 12101-6).",
      },
      {
        question: "Wie oft Prüfsachverständiger für RWA in NRW?",
        answer:
          "Maschinelle RWA (Nr. 6): wiederkehrend max. 3 Jahre. Natürliche RWA (Nr. 10): max. 6 Jahre. VDMA/DIN-Wartung ist zusätzlich.",
      },
      {
        question: "Was passiert, wenn die PrüfVO-Prüfung der RWA überfällig ist?",
        answer:
          "Die Aufsicht kann Nutzungseinschränkungen verlangen oder die Prüfung nachholen lassen. Überfällige Prüfsachverständigen-Termine sind Organisationsmangel – unabhängig von der täglichen Sichtkontrolle.",
      },
    ],
  },
  {
    slug: "sprinkler-loeschanlagen-prueffristen",
    title: "Sprinkler-Prüffristen NRW: 3 Jahre selbsttätig, 6 Jahre nicht-selbsttätig?",
    excerpt:
      "Ortsfeste selbsttätige Feuerlöschanlagen (Nr. 2) wiederkehrend max. 3 Jahre nach PrüfVO; nicht-selbsttätige (Nr. 11) max. 6 Jahre. VdS CEA 4001 / DGUV = Instandhaltung.",
    metaTitle: "Sprinkler prüfen NRW: PrüfVO 3 Jahre | H&S+",
    metaDescription:
      "Sprinkler-Prüffristen NRW: selbsttätige Anlagen max. 3 Jahre (PrüfVO Nr. 2), nicht-selbsttätige max. 6 Jahre (Nr. 11). VdS/DGUV-Wartung zusätzlich, getrennt.",
    keywords: [
      "Sprinkler Prüffrist",
      "Sprinkleranlage Wartung",
      "PrüfVO NRW Sprinkler",
      "Löschanlage prüfen",
      "VdS CEA 4001",
    ],
    sections: [
      {
        id: "ueberblick",
        title: "Wie oft müssen Sprinkler in NRW geprüft werden?",
        paragraphs: [
          "Bauordnungsrechtlich: ortsfeste selbsttätige Feuerlöschanlagen = PrüfVO § 1 Abs. 1 Satz 2 Nr. 2 → wiederkehrend nicht mehr als 3 Jahre. Ortsfeste nicht-selbsttätige Feuerlöschanlagen = Nr. 11 → nicht mehr als 6 Jahre. Nicht „SV-Bau 5-jährlich“ als NRW-Bauordnungsfrist.",
          "VdS CEA 4001 und DGUV 205-040 bleiben für Instandhaltung (Betriebskontrolle, jährliche/erweiterte Instandhaltung, Inspektionen) – klar getrennt. Leitseite: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
        ],
        table: {
          caption: "Löschanlagen – PrüfVO vs. Instandhaltung",
          headers: ["Anlage", "PrüfVO wiederkehrend", "Instandhaltung"],
          rows: [
            ["selbsttätig (z. B. Sprinkler)", "max. 3 Jahre (Nr. 2)", "VdS CEA 4001 / DGUV – parallel"],
            ["nicht-selbsttätig (z. B. Wandhydranten)", "max. 6 Jahre (Nr. 11)", "DGUV / Normen – parallel"],
            ["Druckbehälter", "nicht PrüfVO-Anlagenfrist", "ZÜS / BetrSichV"],
          ],
        },
      },
      {
        id: "instandhaltung",
        title: "VdS / DGUV – parallel, nicht Ersatz",
        paragraphs: [
          "Typisch nach VdS CEA 4001: Sichtkontrolle nach Erfordernis, jährliche Instandhaltung, erweiterte Instandhaltung, mehrjährige Inspektionen. Das ersetzt die Prüfsachverständigen-Prüfung nach PrüfVO nicht – und umgekehrt.",
          "Grenzfall ja: 3-Jahres-PrüfVO-Bericht plus laufende Errichter-Instandhaltung. Grenzfall nein: Nur „5-Jahres-SV“ nach Muster anderer Länder ohne PrüfVO-Termin.",
        ],
      },
      {
        id: "altanlagen",
        title: "Altanlagen und Versicherung",
        paragraphs: [
          "Versicherung und VdS können Altanlagen- und Schutzwirkungsprüfungen verlangen (längere Zyklen). Das ändert die PrüfVO-3-/6-Jahres-Regel nicht. Druckbehälter: ZÜS nach BetrSichV.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "PrüfVO prüft vorhandene/geforderte Anlagen – keine Einbaupflicht. Ob Teil 1 greift: Gebäudekatalog § 1. Nach Umbau Fachplaner und Prüfsachverständigen einbinden.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW Leitseite" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "Sonderbau-Prüfung" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Fristen" },
      { href: "/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw", label: "Sprinkler & Trockenbau" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Alle 5 Jahre SV-Bau für Sprinkler – gilt das in NRW?",
        answer:
          "Nein als PrüfVO-Frist. Selbsttätige Löschanlagen (Nr. 2): max. 3 Jahre wiederkehrend. Nicht-selbsttätige (Nr. 11): max. 6 Jahre.",
      },
      {
        question: "Ersetzt VdS CEA 4001 die PrüfVO?",
        answer:
          "Nein. VdS/DGUV = Instandhaltung. PrüfVO = baurechtliche Prüfung durch Prüfsachverständige.",
      },
      {
        question: "Muss jeder Sprinklerkopf jährlich ausgelöst werden?",
        answer:
          "Nein. Instandhaltung nach VdS-Programm – stichprobenartige Funktionsprüfungen, nicht vollständige Nasslöschung aller Köpfe.",
      },
      {
        question: "Wer prüft Sprinkler-Druckbehälter?",
        answer:
          "Zugelassene Überwachungsstelle (ZÜS) nach BetrSichV – getrennt von der PrüfVO-Anlagenprüfung.",
      },
      {
        question: "Gilt das auch für kleine Anlagen?",
        answer:
          "Wenn Teil 1 greift und eine ortsfeste selbsttätige Löschanlage vorliegt: ja – Umfang nach Anlagentyp, nicht nach „klein“ im Betrieb.",
      },
    ],
  },

];
