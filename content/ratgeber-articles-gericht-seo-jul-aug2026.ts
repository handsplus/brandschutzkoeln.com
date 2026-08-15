/**
 * Juli 2026 – Recht & Praxis (Gerichtstriage): nur qualitativ ausreichende Artikel (≥450 Wörter).
 * Quelle: docs/quellen/Gerichtsbeschluesse-Brandschutz-Triage.md
 * Kurze Catch-up-Stubs (Jul/Aug 2026) entfernt – Qualität vor Kalenderfüllung.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_GERICHT_SEO_JUL_AUG2026: RatgeberArticle[] = [
  {
    slug: "beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw",
    title: "Beseitigungsverfügung Brandschutz: wann § 69 nicht mehr rettet",
    excerpt:
      "Fenster in der Brandwand, fehlende Abweichungszulassung, Frist und Zwangsgeld – wie bauaufsichtliches Einschreiten entsteht und was Eigentümer vor dem Bescheid klären müssen.",
    metaTitle: "Beseitigungsverfügung Brandschutz § 69 | H&S+",
    metaDescription:
      "Beseitigungsverfügung Brandschutz NRW: Brandwand, Abweichung § 69, SV-Bescheinigung, Nachbarschutz – was vor der Verfügung zu prüfen ist.",
    keywords: [
      "Beseitigungsverfügung Brandschutz",
      "bauaufsichtliche Verfügung Brandschutz",
      "Abweichung § 69 Brandwand",
      "Fenster Brandwand beseitigen",
      "SV-Bescheinigung Abweichung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Was eine Beseitigungsverfügung im Brandschutz bedeutet",
        paragraphs: [
          "Eine bauaufsichtliche Beseitigungsverfügung verpflichtet Eigentümer, einen rechtswidrigen Zustand zu beenden – typisch: Öffnungen in einer Brandwand verschließen, Anbauten entfernen oder Nachrüstungen herstellen. Im Brandschutz geht es oft um Abstandsflächen und Brandwände, weil diese dem Schutz von Nachbarn und der Feuerwehr dienen.",
          "Gerichte halten fest: Ohne wirksame Abweichungszulassung bleibt der materiell rechtswidrige Zustand angreifbar – selbst wenn der Nachbar zustimmt. Für NRW gilt parallel [§ 69 BauO NRW](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw): Zweck der Norm muss erreicht bleiben, öffentliche Belange und nachbarliche Interessen zählen.",
          "Grenzfall ja: Eigentümer beantragt früh Abweichung mit SV-Bescheinigung und ausgleichenden Maßnahmen, bevor die Bauaufsicht einschreitet. Grenzfall nein: Fenster in der Brandwand seit Jahren geduldet, keine Zulassung – Duldung ersetzt keine Abweichung.",
        ],
      },
      {
        id: "rechtskern",
        title: "Was die Rechtsprechung betont",
        paragraphs: [
          "In einem verwaltungsgerichtlichen Fall zur Beseitigung von Fenstern in einer Brandwand (VG Mainz 2023, Veröffentlichungsfassung) stand die Frage: Reicht Nachbarzustimmung für eine Abweichung – oder braucht es die Bescheinigung einer sachverständigen Person und die Beachtung öffentlicher Belange?",
          "Kern: Brandschutz und Brandwandrecht sind restriktiv; fehlende SV-Bescheinigung und entgegenstehende öffentliche bzw. nachbarliche Interessen können eine Abweichung scheitern lassen. Die NRW-Übertragung: § 69 Abs. 1 und Abs. 1a BauO NRW, MHKBD-Erlass zu § 69, Brandwände nach § 30 BauO NRW.",
          "Brandwände sollen Brandübertragung verhindern. Offene Fenster zur Nachbargrenze sind deshalb der klassische Konflikt – nicht jedes „Lichtloch“ lässt sich mit einer Abweichung retten.",
        ],
      },
      {
        id: "ablauf",
        title: "Ablauf: Anhörung, Verfügung, Zwang",
        paragraphs: [
          "Typisch: Anhörung zum beabsichtigten Einschreiten, dann Verfügung mit Frist zur Beseitigung und Androhung von Zwangsgeld. Wer erst dann reagiert, hat wenig Verhandlungsspielraum.",
          "Vor der Verfügung: Bestand und Genehmigungslage klären, Brandschutzlage planen, Abweichung oder Kompensation prüfen – [Bauaufsicht Unterlagen](/ratgeber/bauaufsicht-unterlagen-koeln), [Zwischenbescheid](/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln).",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweis-Logik vor dem Einschreiten",
        paragraphs: [
          "Option A: Materielle Anforderung erfüllen (Brandwand schließen). Option B: Abweichung § 69 mit SV-Bescheinigung und nachgewiesener Zweckerfüllung. Option C: ausgleichende Maßnahmen im Konzept bei Sonderbauten – nicht dasselbe wie § 69.",
          "Pläne Ist/Soll, Brandschutzstellungnahme oder Konzept, Nachbarbeteiligung dokumentieren – ohne Papier keine belastbare Verteidigung. § 69 Abs. 1a: Die SV-Bescheinigung kann den Zulassungsakt ersetzen, nicht die Schutzpflicht nach § 3 BauO.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fälle",
        paragraphs: [
          "Bestandsgebäude mit nachträglich eingesetzten Öffnungen zur Nachbargrenze: Bauaufsicht fordert feuerbeständigen Verschluss. Wohnungszusammenlegung ohne Brandwand-Nachweis: Verfügung droht parallel zum Bauantrag.",
          "Umbau mit „seit 20 Jahren so“: Vertrauensschutz greift nur bei rechtmäßiger Genehmigung. Bloße Duldung heilt keinen rechtswidrigen Zustand – siehe auch [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Vor bauaufsichtlichem Einschreiten",
          headers: ["Nr.", "Frage", "Wenn nein"],
          rows: [
            ["1", "Genehmigung / Bestandsschutz belegt?", "Einschreiten wahrscheinlich"],
            ["2", "Brandwand / § 30 erfüllt?", "Abweichung oder Beseitigung"],
            ["3", "§-69-Antrag oder SV-Bescheinigung?", "Keine wirksame Abweichung"],
            ["4", "Nachbarschutz und öffentliche Belange geprüft?", "Abweichung scheitert oft"],
            ["5", "Frist und Zwangsgeld im Bescheid?", "Sofort handeln, nicht aussitzen"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erklärt die Systematik bauaufsichtlicher Beseitigung und Abweichung – ohne Einzelfallberatung und ohne Wiedergabe vollständiger Urteile. Maßgeblich sind BauO NRW, zuständige Behörde und das konkrete Bescheidswerk.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz" },
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept / Stellungnahme" },
      { href: "/ratgeber/brandabschnitte-bauo-sbauvo-nrw", label: "Brandabschnitte" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Reicht die Zustimmung des Nachbarn für eine Brandschutz-Abweichung?",
        answer:
          "Oft nicht allein. Öffentliche Belange des Brandschutzes und – je nach Norm – eine SV-Bescheinigung können erforderlich sein. Nachbarzustimmung ersetzt keine materielle Zweckerfüllung der Brandwandvorschrift.",
      },
      {
        question: "Was passiert, wenn ich die Beseitigungsfrist versäume?",
        answer:
          "Typisch Zwangsgeld und erneute Fristen. Parallel kann der Zustand weiter rechtswidrig bleiben – eine verspätete Abweichung ist möglich, aber riskanter und teurer.",
      },
      {
        question: "Gilt das VG-Mainz-Muster 1:1 in NRW?",
        answer:
          "Nicht wortgleich – Landesbauordnungen unterscheiden sich. Die Logik (Brandwand restriktiv, Abweichung mit Voraussetzungen, Einschreiten möglich) überträgt sich auf BauO NRW § 69 und § 30.",
      },
      {
        question: "Ist Duldung über Jahre Bestandsschutz?",
        answer:
          "Nein. Bestandsschutz setzt rechtmäßigen Bestand voraus. Bloße Nicht-Einschreiten der Behörde heiligt keinen rechtswidrigen Zustand.",
      },
      {
        question: "Brauche ich ein Brandschutzkonzept oder reicht eine Stellungnahme?",
        answer:
          "Bei einfachen Abweichungen oft Stellungnahme plus SV-Bescheinigung; bei Sonderbauten und komplexen Kompensationen Konzept. Siehe Ratgeber Brandschutzkonzept wann nötig.",
      },
      {
        question: "Was ist mit Fenstern in der Brandwand konkret zu tun?",
        answer:
          "Entweder feuerbeständig verschließen oder eine wirksame Abweichung mit Nachweisen führen. Ohne Zulassung bleibt der Zustand angreifbar – unabhängig davon, wie lange die Fenster schon da sind.",
      },
    ],
  },
];
