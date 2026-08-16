/**
 * Juli 2026 – Recht & Praxis: Beseitigungsverfügung (Einstieg der Serie).
 * Quelle: docs/quellen/Gerichtsbeschluesse-Brandschutz-Triage.md
 * Kurze Catch-up-Stubs entfernt – Qualität vor Kalenderfüllung.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_GERICHT_SEO_JUL_AUG2026: RatgeberArticle[] = [
  {
    slug: "beseitigungsverfuegung-brandschutz-abweichung-bauo-nrw",
    title: "Beseitigungsverfügung Brandschutz: wann § 69 nicht mehr rettet",
    excerpt:
      "Ohne wirksame Abweichung bleibt ein rechtswidriger Brandwandzustand angreifbar. Anhörung, Frist, Zwangsgeld – was Eigentümer vor dem Bescheid klären müssen.",
    metaTitle: "Beseitigungsverfügung Brandschutz NRW | H&S+",
    metaDescription:
      "Beseitigungsverfügung Brandschutz: ohne Abweichung § 69 angreifbar, Anhörung–Frist–Zwangsgeld. VG Mainz-Logik, NRW-Übertragung BauO.",
    keywords: [
      "Beseitigungsverfügung Brandschutz",
      "Fenster Brandwand beseitigen",
      "bauaufsichtliche Verfügung Brandschutz",
      "Abweichung § 69 Brandwand",
      "Zwangsgeld Bauaufsicht",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Muss ich Fenster in der Brandwand beseitigen?",
        paragraphs: [
          "Ja – wenn die Öffnung materiell rechtswidrig ist und keine wirksame Abweichung nach § 69 BauO NRW vorliegt. Bloße Nachbarzustimmung oder jahrelange Untätigkeit der Behörde ersetzen keine Zulassung.",
          "Eine Beseitigungsverfügung verpflichtet Eigentümer, den rechtswidrigen Zustand zu beenden: typisch Öffnungen in der Brandwand schließen, Anbauten entfernen oder Nachrüstungen herstellen. Der Ablauf ist Anhörung → Verfügung mit Frist → Zwangsgeld bei Versäumnis.",
          "Grenzfall ja: Früh Abweichung mit SV-Bescheinigung und Zweckerfüllung, bevor die Bauaufsicht einschreitet. Grenzfall nein: Fenster seit Jahren „geduldet“, keine Zulassung – Einschreiten bleibt möglich.",
        ],
      },
      {
        id: "rechtskern",
        title: "Was Gerichte dazu sagen",
        paragraphs: [
          "VG Mainz 3 K 39/23.MZ (Urteil vom 06.12.2023, Rheinland-Pfalz): Ohne wirksame Abweichungszulassung bleibt der rechtswidrige Brandwandzustand angreifbar; Nachbarzustimmung allein rettet nicht. Das ist kein NRW-Urteil – die NRW-Übertragung läuft über § 30, § 69 und § 82 BauO NRW sowie den MHKBD-Erlass zu § 69 (Verwaltungsvorschrift, kein Gesetz).",
          "Für NRW gilt: Zweck der Brandwandvorschrift, öffentliche Belange (§ 3) und öffentlich-rechtlich geschützte Nachbarbelange müssen gewahrt sein. Bei nachbarlichen Belangen keine SV-Bescheinigung nach § 69 Abs. 1a – die Bauaufsicht entscheidet. Brandschutzdienststelle hören, wenn Löschen oder Retten berührt sind. Eine Abweichung schließt die Genehmigungsfreistellung aus (§ 63 Abs. 2 Nr. 4); Abs. 1a rettet die Freistellung nicht.",
        ],
      },
      {
        id: "ablauf",
        title: "Ablauf: Anhörung, Verfügung, Zwang",
        paragraphs: [
          "Typisch: Anhörung zum beabsichtigten Einschreiten, dann Verfügung mit Frist zur Beseitigung und Androhung von Zwangsgeld. Wer erst dann reagiert, hat wenig Verhandlungsspielraum.",
          "Vor der Verfügung: Genehmigungslage und Pläne klären, Brandschutzlage planen, Abweichung oder Verschluss prüfen – in Köln und NRW über die untere Bauaufsicht. Orientierung: [Bauaufsicht Unterlagen](/ratgeber/bauaufsicht-unterlagen-koeln).",
        ],
      },
      {
        id: "nachweis",
        title: "Drei Optionen vor dem Einschreiten",
        paragraphs: [
          "Option A: Materielle Anforderung erfüllen (Brandwand feuerbeständig schließen). Option B: Abweichung § 69 mit Nachweis der Zweckerfüllung – bei Nachbarn behördlich, sonst ggf. SV nach Abs. 1a. Option C: ausgleichende Maßnahmen im Konzept bei großen Sonderbauten – nicht dasselbe wie § 69.",
          "Was die Öffnung rechtlich ist und ob ein „Fenstertausch“ überhaupt § 62 greift: [Glasbaustein vs. Fenster](/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw), [Fenstertausch / Nutzungsänderung](/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw). Hub: [Abweichung § 69](/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw).",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fälle",
        paragraphs: [
          "Bestandsgebäude mit nachträglich eingesetzten Öffnungen zur Nachbargrenze: Bauaufsicht fordert Verschluss. Wohnungszusammenlegung ohne Brandwand-Nachweis: Verfügung droht parallel zum Bauantrag.",
          "„Seit 20 Jahren so“: Vertrauensschutz greift nur bei rechtmäßiger Genehmigung – Details zu Duldung: [Duldung / Verwirkung](/ratgeber/duldung-verwirkung-brandschutz-bauaufsicht-nrw).",
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
            ["1", "Genehmigung / rechtmäßiger Bestand belegt?", "Einschreiten wahrscheinlich"],
            ["2", "Brandwand / § 30 erfüllt?", "Abweichung oder Beseitigung"],
            ["3", "Wirksame §-69-Zulassung (Behörde oder 1a ohne Nachbarn)?", "Zustand bleibt angreifbar"],
            ["4", "Brandschutzdienststelle gehört (Löschen/Retten)?", "Abweichung riskant"],
            ["5", "Freistellung § 63 geplant trotz Abweichung?", "Freistellung ausgeschlossen"],
            ["6", "Frist / Zwangsgeld im Bescheid?", "Sofort handeln, nicht aussitzen"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "VG Mainz 3 K 39/23.MZ ist rheinland-pfälzisches Landesrecht – kein NRW-Urteil. Die Übersicht überträgt die Logik auf BauO NRW; sie ersetzt keine Rechtsberatung und keine Entscheidung der zuständigen Behörde im Einzelfall.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw", label: "Abweichung § 69" },
      { href: "/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw", label: "Glasbaustein vs. Fenster" },
      { href: "/ratgeber/duldung-verwirkung-brandschutz-bauaufsicht-nrw", label: "Duldung / Verwirkung" },
      { href: "/ratgeber/brandwand-fenstertausch-nutzungsaenderung-bauo-nrw", label: "Fenstertausch / NU" },
      { href: "/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw", label: "Welcher Nachbar?" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Muss ich Fenster in der Brandwand beseitigen?",
        answer:
          "Ja, wenn sie materiell rechtswidrig sind und keine wirksame Abweichung nach § 69 BauO NRW vorliegt. Ohne Zulassung bleibt der Zustand angreifbar – unabhängig davon, wie lange die Fenster schon da sind.",
      },
      {
        question: "Was ist eine Beseitigungsverfügung im Brandschutz?",
        answer:
          "Ein Bescheid der Bauaufsicht, der Eigentümer verpflichtet, einen rechtswidrigen Zustand zu beenden – typisch Öffnungen in der Brandwand zu schließen. Oft mit Frist und Androhung von Zwangsgeld.",
      },
      {
        question: "Was passiert, wenn ich die Beseitigungsfrist versäume?",
        answer:
          "Typisch Zwangsgeld und erneute Fristen. Parallel bleibt der Zustand rechtswidrig – eine verspätete Abweichung ist möglich, aber riskanter und teurer.",
      },
      {
        question: "Reicht Nachbarzustimmung gegen die Verfügung?",
        answer:
          "Allein meist nicht. Für die Abweichungslogik und welche Nachbarn zählen: [Nachbarschutz Brandwand](/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw). Die Verfügung selbst hängt an der Rechtswidrigkeit des Zustands.",
      },
      {
        question: "Ist VG Mainz 3 K 39/23 ein NRW-Urteil?",
        answer:
          "Nein – Rheinland-Pfalz. Die Logik (Brandwand restriktiv, Abweichung mit Voraussetzungen, Einschreiten möglich) überträgt sich auf BauO NRW § 30, § 69 und § 82.",
      },
      {
        question: "Kann ich parallel Freistellung und Abweichung fahren?",
        answer:
          "Nein. Eine Abweichung nach § 69 schließt die Genehmigungsfreistellung aus (§ 63 Abs. 2 Nr. 4). Die SV-Bescheinigung nach Abs. 1a rettet die Freistellung nicht.",
      },
      {
        question: "Was vor der Anhörung tun?",
        answer:
          "Genehmigungslage und Pläne sichern, Option Verschluss oder §-69-Verfahren prüfen, Brandschutzdienststelle einbinden wenn Rettung/Löschen berührt ist – nicht erst nach dem Bescheid reagieren.",
      },
    ],
  },
];
