/**
 * 29.08.2026 – Flucht- und Rettungsplan (Abgrenzung Feuerwehrplan, DIN 14095 Orientierung).
 * Quelle: Ausarbeitungen/Flucht_und_Rettungsplan_DIN_14095_NRW.html
 * Stil: ganze Sätze, lesefreundlich (kein abgehackter Telegrammstil).
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_FLUCHT_RETTUNGSPLAN: RatgeberArticle[] = [
  {
    slug: "flucht-und-rettungsplan-din-14095-nrw",
    title: "Flucht- und Rettungsplan: Was er leistet – und warum er kein Feuerwehrplan ist",
    excerpt:
      "Flucht- und Rettungspläne helfen Beschäftigten und Besuchern bei der Orientierung. Dieser Ratgeber erklärt die Abgrenzung zum Feuerwehrplan, wann Pläne nötig und nach Umbau zu aktualisieren sind – und was DIN 14095 dabei bedeutet.",
    metaTitle: "Flucht- und Rettungsplan NRW | DIN 14095 | H&S+",
    metaDescription:
      "Flucht- und Rettungsplan erklärt: Unterschied zum Feuerwehrplan, Aktualisierung nach Umbau, DIN 14095 als Gestaltungsregel. Für Betriebe in Köln und NRW – inkl. Leistungshinweis.",
    keywords: [
      "Flucht- und Rettungsplan",
      "Fluchtplan",
      "DIN 14095",
      "Feuerwehrplan Unterschied",
      "Rettungswegplan",
      "Fluchtwege Plan aktualisieren",
      "Brandschutz Köln",
    ],
    sections: [
      {
        id: "kurz",
        title: "Was ist ein Flucht- und Rettungsplan?",
        paragraphs: [
          "Ein Flucht- und Rettungsplan ist eine übersichtliche Darstellung der Fluchtwege, Ausgänge und wichtigen Einrichtungen für die Selbstrettung und Orientierung im Gebäude. Er richtet sich an Menschen, die das Gebäude nutzen – typischerweise Beschäftigte, Gäste oder Besucher – und hängt an geeigneten Stellen aus.",
          "Im Ernstfall beantwortet der Plan drei Fragen: Wo stehe ich? Wohin gehe ich? Welche Einrichtungen finde ich unterwegs, zum Beispiel Feuerlöscher oder den Sammelplatz? Er ersetzt weder die baulichen Rettungswege noch die Brandschutzordnung, sondern macht vorhandene Wege und Verhaltensregeln sichtbar.",
          "H&S+ bietet die Erstellung und Fortschreibung von Flucht- und Rettungsplänen für Betriebe in Köln und NRW an. Bauliche Grundlagen zu Rettungswegen: [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw).",
        ],
      },
      {
        id: "abgrenzung",
        title: "Unterschied zum Feuerwehrplan und zu verwandten Plänen",
        paragraphs: [
          "Viele Auftraggeber bestellen „Fluchtpläne“ und meinen damit manchmal Feuerwehrpläne – oder umgekehrt. Für Angebot, Genehmigung und Abnahme muss klar sein, welches Dokument gemeint ist.",
          "Der Flucht- und Rettungsplan dient der Orientierung und Selbstrettung der Nutzer. Der Feuerwehrplan dient dem Einsatz der Feuerwehr und ist in der SBauVO für bestimmte Sonderbauten im Einvernehmen mit der Brandschutzdienststelle vorgeschrieben. Wann Feuerwehrpläne Pflicht sind, erklärt der Ratgeber [Feuerwehrpläne](/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw).",
          "In Beherbergungsstätten verlangt § 57 Abs. 2 SBauVO zusätzlich Rettungswegpläne für Gäste in den Beherbergungsräumen. Das ist eine eigene Pflicht und kein Ersatz für Flucht- und Rettungspläne im übrigen Betrieb. Die Brandschutzordnung regelt Verhalten und Organisation und gehört oft parallel dazu – siehe [Brandschutzordnung](/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw).",
        ],
        table: {
          caption: "Vier Dokumente – unterschiedliche Zielgruppen",
          headers: ["Dokument", "Für wen?", "Zweck", "Typische Ebene"],
          rows: [
            [
              "Flucht- und Rettungsplan",
              "Beschäftigte, Besucher, Gäste",
              "Selbstrettung und Orientierung",
              "Arbeitsstättenrecht / ASR; Gestaltung oft DIN 14095",
            ],
            [
              "Feuerwehrplan",
              "Feuerwehr / Brandschutzdienststelle",
              "Einsatzwege und Anlagen für den Einsatz",
              "SBauVO-Betriebspflicht in bestimmten Sonderbauten",
            ],
            [
              "Rettungswegplan (Beherbergung)",
              "Gäste im Beherbergungsraum",
              "Aushang der Rettungswege",
              "§ 57 Abs. 2 SBauVO",
            ],
            [
              "Brandschutzordnung",
              "Beschäftigte / Betrieb",
              "Verhalten, Organisation, Alarmierung",
              "SBauVO / DIN 14096",
            ],
          ],
        },
      },
      {
        id: "gesetz",
        title: "Was BauO und SBauVO sagen – und was nicht",
        paragraphs: [
          "Die BauO NRW regelt Rettungswege baulich, unter anderem in den §§ 33 bis 36, verlangt aber keinen „Flucht- und Rettungsplan“ als eigenes Dokument mit diesem Namen. Die SBauVO verlangt in bestimmten Sonderbauten Feuerwehrpläne und bei Beherbergung Rettungswegpläne für Gäste. Das sind verwandte, aber nicht identische Pflichten.",
          "Wer nur BauO und SBauVO liest, findet deshalb keine vollständige Checkliste „Flucht- und Rettungsplan nach DIN 14095“. Für Arbeitsstätten und viele Gewerbebetriebe kommt die Erforderlichkeit aus dem Arbeitsschutz und der betrieblichen Gefährdungsbeurteilung – ergänzend zu den baurechtlichen Rettungswegen.",
        ],
      },
      {
        id: "praxis",
        title: "Wann Pläne in der Praxis nötig sind",
        paragraphs: [
          "In Arbeitsstätten verlangen die Arbeitsstättenverordnung und die technischen Regeln, insbesondere ASR A2.3 zu Fluchtwegen und Notausgängen, unter anderem, dass Fluchtwege erkennbar und nutzbar sind. Flucht- und Rettungspläne sind in der Praxis das übliche Mittel, diese Orientierung zu dokumentieren und auszuhängen – besonders bei verzweigten Grundrissen, mehreren Geschossen, Besucherverkehr oder Schichtbetrieb.",
          "Ob im Einzelfall ein Plan rechtlich zwingend ist, hängt von Nutzung, Größe, Gefährdung und Behördenlage ab. Unabhängig davon gilt: Fehlen erkennbare Wege oder stimmen Aushänge nicht mehr mit dem Gebäude überein, entstehen bei Begehungen, Brandschauen und Abnahmen regelmäßig Mängel.",
          "Wenn nach einem Umbau neue Trennwände oder andere Ausgänge bestehen, alte Pläne aber weiter aushängen, ist die Orientierung im Brandfall falsch. Wenn ein Betrieb meint, keine Pläne zu brauchen, weil die Wege „klar“ seien, fehlt oft genau die Gruppe, die den Grundriss nicht kennt – etwa Besucher oder Aushilfen.",
        ],
      },
      {
        id: "din",
        title: "Inhalt und Gestaltung nach DIN 14095",
        paragraphs: [
          "DIN 14095 ist eine technische Regel für die Gestaltung von Flucht- und Rettungsplänen. Dazu gehören unter anderem Lageplan, Sicherheitszeichen, die Kennzeichnung „Sie befinden sich hier“ und der Sammelplatz. Die Norm ist keine BauO-Vorschrift. In Konzepten und Angeboten sollte klar stehen, dass die Ausführung an DIN 14095 ausgerichtet wird.",
          "Typische Inhalte sind ein Grundrissausschnitt mit Standortkennzeichnung, Fluchtwege und Notausgänge, Brandschutzeinrichtungen soweit für die Orientierung nötig sowie Hinweise zum Verhalten und zum Sammelplatz. Maßstab, Farben und Symbole folgen der Norm und müssen zum realen Gebäude passen.",
          "Mehrere Pläne je Geschoss oder Bereich sind üblich, wenn ein Blatt die Orientierung nicht mehr leistet. Aushangorte sollen so gewählt sein, dass Personen den Plan finden, bevor sie in unübersichtliche Bereiche laufen.",
        ],
      },
      {
        id: "aktualisierung",
        title: "Aktualisierung nach Umbau und Nutzungsänderung",
        paragraphs: [
          "Flucht- und Rettungspläne müssen dem Ist-Zustand entsprechen. Nach Umbau, Nutzungsänderung, neuen Türen, geänderten Treppenräumen oder neuen Brandabschnitten sind die Pläne zu prüfen und bei Abweichung neu zu erstellen oder fortzuschreiben.",
          "Das gilt unabhängig davon, ob gleichzeitig ein Feuerwehrplan oder die Brandschutzordnung angepasst werden muss – oft sind mehrere Dokumente betroffen. Orientierung zu Umbau und Nutzungsänderung: [Umbau und Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Vor Auftrag, Abnahme oder Begehung helfen die folgenden Fragen, das richtige Dokument und den richtigen Aktualisierungsbedarf zu treffen.",
        ],
        table: {
          caption: "Flucht- und Rettungspläne prüfen",
          headers: ["Nr.", "Prüffrage", "Worauf achten?"],
          rows: [
            [
              "1",
              "Ist ein Flucht- und Rettungsplan gemeint – oder ein Feuerwehrplan?",
              "Zielgruppe und Zweck klären, bevor produziert oder angeboten wird.",
            ],
            [
              "2",
              "Hängen Pläne an geeigneten Stellen aus?",
              "Eingänge, Flure, Bereiche mit Besucherverkehr; lesbar und aktuell.",
            ],
            [
              "3",
              "Stimmt „Sie befinden sich hier“ mit dem Aushangort?",
              "Ein falscher Standort macht den Plan gefährlich statt hilfreich.",
            ],
            [
              "4",
              "Passen Wege und Ausgänge zum Ist-Gebäude?",
              "Nach Umbau und Nutzungsänderung besonders prüfen.",
            ],
            [
              "5",
              "Ist bei Beherbergung der Rettungswegplan nach § 57 Abs. 2 SBauVO vorhanden?",
              "Das ist eine eigene Pflicht und kein Ersatz für DIN-14095-Pläne im übrigen Betrieb.",
            ],
            [
              "6",
              "Ist ein Feuerwehrplan nach SBauVO zusätzlich nötig?",
              "Versammlung, Beherbergung ab Schwelle, Verkauf, Hochhaus – gesondert prüfen.",
            ],
            [
              "7",
              "Sind Brandschutzordnung und Unterweisung abgestimmt?",
              "Pläne, BSO und Übung müssen dieselbe Fluchtlogik erzählen.",
            ],
          ],
        },
      },
      {
        id: "grenzen",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Beitrag erklärt Zweck, Abgrenzung und Praxis von Flucht- und Rettungsplänen. Er ersetzt weder die Einzelfallprüfung noch die Abstimmung mit der Brandschutzdienststelle bei Feuerwehrplänen. DIN 14095 und ASR sind als Orientierung gekennzeichnet und keine BauO-Paragraphen.",
          "Verwandte Themen: [Feuerwehrpläne](/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw), [Brandschutzordnung](/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw), [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw", label: "Feuerwehrpläne wann Pflicht" },
      { href: "/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw", label: "Brandschutzordnung" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau / Nutzungsänderung" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne aktualisieren" },
      { href: "/brandschutzordnung-koeln", label: "Leistung Brandschutzordnung" },
      { href: "/kontakt", label: "Kontakt / Anfrage" },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Flucht- und Rettungsplan und Feuerwehrplan?",
        answer:
          "Der Flucht- und Rettungsplan dient der Orientierung und Selbstrettung von Nutzern des Gebäudes. Der Feuerwehrplan dient dem Einsatz der Feuerwehr und ist in der SBauVO für bestimmte Sonderbauten im Einvernehmen mit der Brandschutzdienststelle vorgeschrieben.",
      },
      {
        question: "Steht die Pflicht zum Flucht- und Rettungsplan in der BauO NRW?",
        answer:
          "Nein, nicht unter diesem Namen als allgemeiner BauO-Tatbestand. Baulich regelt die BauO die Rettungswege. Pläne für Beschäftigte folgen vor allem dem Arbeitsschutz und der betrieblichen Praxis; die Gestaltung orientiert sich oft an DIN 14095.",
      },
      {
        question: "Wann müssen Flucht- und Rettungspläne erneuert werden?",
        answer:
          "Immer dann, wenn sich der Ist-Zustand relevant ändert – zum Beispiel nach Umbau, neuen Trennwänden, anderen Ausgängen oder geänderter Nutzung. Veraltete Pläne sind ein typischer Mangel bei Begehungen.",
      },
      {
        question: "Reicht ein Plan für das ganze Gebäude?",
        answer:
          "Oft nicht. Je Geschoss oder Bereich sind eigene Blätter üblich, damit der Ausschnitt lesbar bleibt und der Standort „Sie befinden sich hier“ stimmt.",
      },
      {
        question: "Bietet H&S+ Flucht- und Rettungspläne an?",
        answer:
          "Ja. H&S+ organisiert Erstellung und Fortschreibung von Flucht- und Rettungsplänen für Betriebe in Köln und NRW – abgestimmt auf den Ist-Zustand und bei Bedarf parallel zu Brandschutzordnung und Feuerwehrplan.",
      },
    ],
  },
];
