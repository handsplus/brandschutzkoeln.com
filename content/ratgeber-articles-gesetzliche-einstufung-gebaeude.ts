/**
 * 22.09.2024 – Gesetzliche Einstufung von Gebäuden (BauO / SBauVO NRW).
 * Quelle: Gesetzliche_Einstufung_Gebaeude_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_GESETZLICHE_EINSTUFUNG_GEBAEUDE: RatgeberArticle[] = [
  {
    slug: "gesetzliche-einstufung-gebaeude-bauo-nrw",
    title: "Gebäude einordnen: Gebäudeklasse, Sonderbau und SBauVO – in welcher Reihenfolge?",
    excerpt:
      "Am Anfang jeder brandschutzrechtlichen Bewertung stehen vier parallele Ebenen: Gebäudeklasse für jedes Gebäude, Sonderbau-Rahmen, großer Sonderbau mit Schwellen und SBauVO-Teile – kumulativ, nicht austauschbar.",
    metaTitle: "Gebäudeeinstufung BauO NRW: GK & Sonderbau | H&S+",
    metaDescription:
      "Gebäude einordnen NRW: § 2 Gebäudeklasse, § 50 Sonderbau, § 50 Abs. 2 Katalog, SBauVO sechs Teile. Prüfkette, Schwellen, Abgrenzung Industriebau.",
    keywords: [
      "Gebäudeeinstufung BauO NRW",
      "Gebäudeklasse Sonderbau",
      "§ 50 Abs 2 Sonderbau",
      "großer Sonderbau Brandschutzkonzept",
      "SBauVO Anwendungsbereich",
      "Sonderbau geregelt ungeregelt",
    ],
    sections: [
      {
        id: "frage",
        title: "Vier Ebenen – nicht verwechseln",
        paragraphs: [
          "Vor Fluchtwegen, BMA oder Brandabschnitten stellt sich eine vorgelagerte Frage: Wie ist das Gebäude im Landesrecht eingeordnet? Vier Ebenen wirken parallel und kumulativ – keine ersetzt die andere.",
          "Gebäudeklasse 1–5 (§ 2 Abs. 3 BauO NRW) gilt für jedes Gebäude und steuert die allgemeinen Anforderungen der §§ 26–49. Sonderbau (§ 50 Abs. 1) ist der Rahmen für besondere Art oder Nutzung. Großer Sonderbau (§ 50 Abs. 2) ist ein abschließender Katalog mit Schwellen – mit Brandschutzkonzept-Pflicht (§ 70). SBauVO-Sonderbauarten (sechs Teile) liefern zusätzliche Detailvorschriften – teils mit niedrigeren Schwellen als § 50 Abs. 2.",
        ],
        table: {
          caption: "Vier Einstufungsebenen",
          headers: ["Ebene", "Norm", "Frage", "Wirkung (Kurz)"],
          rows: [
            ["Gebäudeklasse 1–5", "§ 2 Abs. 3 BauO", "Wie groß/hoch (Höhe, NE, Flächen)?", "Allgemeine BauO §§ 26–49"],
            ["Sonderbau", "§ 50 Abs. 1", "Besondere Art oder Nutzung?", "Rahmen für Sonderanforderungen; SBauVO-Anwendung"],
            ["Großer Sonderbau", "§ 50 Abs. 2", "Nummerierter Tatbestand mit Schwelle?", "Brandschutzkonzept § 70; BauPrüfVO § 9"],
            ["SBauVO-Sonderbauart", "§§ 1, 47, 60, 92, 121, 143", "Einer der sechs SBauVO-Teile?", "Zusätzliche BMA, Rettungswege, Brandabschnitte …"],
          ],
        },
      },
      {
        id: "verwechslungen",
        title: "Häufige Verwechslungen",
        paragraphs: [],
        list: [
          "„Industriebau“ ist in der geltenden BauO NRW kein eigener Paragraphentitel – Einordnung über Gebäudeklasse, § 30 Abs. 2 Nr. 2 (40 m), Regallager > 9 m, Stoffe mit Explosions-/Brandgefahr (§ 50 Abs. 2 Nr. 20/21)",
          "Sonderbau ≠ Gebäudeklasse 5: kleine Versammlungsstätte kann GK 3 und zugleich SBauVO Teil 1 sein",
          "Großer Sonderbau ≠ SBauVO: Hotel mit 20 Gastbetten ist kein großer Sonderbau (> 30 Betten), aber SBauVO Teil 2 gilt ab > 12 Gastbetten (§ 47 SBauVO)",
          "§ 50 Abs. 1 ist kein Typenkatalog – die abschließende Aufzählung mit Schwellen steht in § 50 Abs. 2",
        ],
      },
      {
        id: "pruefkette",
        title: "Bewertungsreihenfolge",
        paragraphs: [
          "Zuerst Nutzung und Maße klären (§ 52 Grundpflichten; § 60 Genehmigungspflicht). Dann Verfahrensebene: Sonderbauten nach § 50 sind von Genehmigungsfreiheit nach § 62 grundsätzlich ausgenommen.",
          "Parallel: Gebäudeklasse ermitteln (§ 2 Abs. 3) und Sonderbau-Einordnung (§ 50 / SBauVO). Danach prüfen: großer Sonderbau nach § 50 Abs. 2? Schließlich konkrete Anforderungen aus BauO + SBauVO + ggf. Konzept ableiten (§ 68 Prüfung/Bescheinigung).",
          "Merksatz: Nutzung und Maße → Gebäudeklasse und Sonderbau parallel → großer Sonderbau → Anforderungen. Ein Hochhaus kann zugleich GK 5 und großer Sonderbau Nr. 1 sein.",
        ],
      },
      {
        id: "gebaeudeklasse",
        title: "§ 2 BauO – Gebäudeklassen 1–5",
        paragraphs: [
          "GK 1: freistehend, Höhe ≤ 7 m, max. 2 NE, gesamt ≤ 400 m², oder land-/forstwirtschaftlich vergleichbar. GK 2: wie GK 1, nicht freistehend. GK 3: sonstige Gebäude ≤ 7 m. GK 4: Höhe ≤ 13 m, jede NE ≤ 400 m²/Geschoss. GK 5: sonstige Gebäude einschließlich unterirdischer Gebäude.",
          "Höhe: Fußbodenoberkante des höchstgelegenen Geschosses mit möglichem Aufenthaltsraum über Geländeoberkante im Mittel. Nutzungseinheit: Brutto-Grundflächen, Keller außer Betracht. Geschoss oberirdisch wenn Deckenoberkante > 1,60 m über Gelände.",
          "Die Gebäudeklasse bestimmt Erleichterungen (GK 1–3) und Verschärfungen (GK 4–5) in §§ 26–49. Vertiefung: [Gebäudeklassen GK 1–5](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw), Einzelartikel GK 1–5.",
        ],
      },
      {
        id: "sonderbau-rahmen",
        title: "§ 50 Abs. 1 – Sonderbau-Rahmen",
        paragraphs: [
          "An Anlagen und Räume besonderer Art oder Nutzung (Sonderbauten) können besondere Anforderungen gestellt und Erleichterungen gestattet werden – insbesondere zu Brandschutzanlagen, Bauvorlagen (Brandschutzkonzept), Brandschutzbeauftragten, Gebäudefunkanlagen.",
          "§ 50 Abs. 1 definiert den Rechtsrahmen, nicht die konkreten Tatbestände. Die Ausgestaltung erfolgt durch Rechtsverordnungen (SBauVO NRW) und behördliche Einzelfallentscheidungen.",
          "Abgrenzung: Absatz 2 nennt abschließend große Sonderbauten. Absatz 1 bleibt Oberbegriff – auch wenn SBauVO-Schwellen erfüllt sind, aber § 50 Abs. 2 noch nicht (z. B. Beherbergung mit 15 Gastbetten: SBauVO ja, großer Sonderbau nein).",
        ],
      },
      {
        id: "grosser-sonderbau",
        title: "§ 50 Abs. 2 – Große Sonderbauten (Katalog)",
        paragraphs: [
          "Mit den Bauvorlagen für große Sonderbauten (§ 50 Abs. 2) ist ein Brandschutzkonzept einzureichen (§ 70 Abs. 2 BauO NRW; Inhalt BauPrüfVO § 9). Wann Konzept nötig: [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig).",
        ],
        table: {
          caption: "§ 50 Abs. 2 – Tatbestände (Auswahl)",
          headers: ["Nr.", "Tatbestand", "Schwelle", "SBauVO-Teil"],
          rows: [
            ["1", "Hochhäuser", "Höhe > 22 m", "Teil 4"],
            ["2", "Bauliche Anlagen", "Höhe > 30 m", "—"],
            ["3", "Gebäude Grundfläche", "Größtes Geschoss > 1.600 m²", "—"],
            ["4", "Verkaufsstätten", "Verkaufsräume/Ladenstraßen > 2.000 m²", "Teil 3"],
            ["5", "Büro-/Verwaltungsgebäude", "Geschossfläche > 3.000 m²", "—"],
            ["6–9", "Versammlungsstätten / Sport Freien", "VR > 200; Freianlagen > 1.000/5.000", "Teil 1"],
            ["10", "Gaststätten", "> 200 Gastplätze Gebäude / > 1.000 Freien", "Teil 1 (wenn VS)"],
            ["11", "Beherbergung", "> 30 Betten", "Teil 2 ab > 12 Betten"],
            ["14", "Krankenhäuser", "ohne Größenschwelle", "—"],
            ["15–16", "Wohnheime, Schulen", "ohne Größenschwelle (Ausnahmen)", "—"],
            ["20", "Regallager", "Lagerguthöhe > 9 m", "—"],
            ["21", "Stoff-Sonderbauten", "Explosions-/erhöhte Brandgefahr", "—"],
            ["22", "Garagen", "Nutzfläche > 1.000 m²", "Teil 5 (alle Garagen)"],
          ],
        },
      },
      {
        id: "sbauvo",
        title: "SBauVO – sechs Teile und Schwellen-Differenzen",
        table: {
          caption: "SBauVO-Zuordnung",
          headers: ["Teil", "Sonderbauart", "Anwendungsbereich", "Abweichung zu § 50 Abs. 2"],
          rows: [
            ["1", "Versammlungsstätten", "VR > 200; Freianlagen; Stadien > 5.000", "Schwellen = Abs. 2 Nr. 6–9"],
            ["2", "Beherbergung", "> 12 Gastbetten (§ 47 SBauVO)", "Niedrigere Schwelle als Nr. 11 (> 30 Betten)"],
            ["3", "Verkaufsstätten", "Verkaufsfläche > 2.000 m²", "Schwelle = Nr. 4"],
            ["4", "Hochhäuser", "§ 50 Abs. 2 Nr. 1 (> 22 m)", "Höhe nach § 2 Abs. 3 Satz 2"],
            ["5", "Garagen", "Alle Stellplätze/Garagen (§ 121 SBauVO)", "SBauVO auch unter 1.000 m²; großer Sonderbau erst > 1.000 m²"],
            ["6", "Elektrische Betriebsräume", "Aufstellen elektrischer Anlagen", "Raumbezogen, nicht Gebäudegesamt"],
          ],
        },
        paragraphs: [
          "§ 92 SBauVO: Teil 4 regelt besondere Anforderungen für Hochhäuser gemäß § 50 Abs. 2 Nr. 1. Die SBauVO-Teile sind Ausfüllung des § 50 Abs. 1-Rahmens für bestimmte Sonderbauarten.",
          "Geregelt vs. ungeregelt: [Sonderbauten geregelt/ungeregelt](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
        ],
      },
      {
        id: "ohne-sbauvo",
        title: "Sonderbauten ohne SBauVO-Teil",
        paragraphs: [
          "Zahlreiche § 50 Abs. 2-Tatbestände haben keinen eigenen SBauVO-Teil. Maßgeblich: BauO §§ 26–49 je Gebäudeklasse; Brandschutzkonzept bei großem Sonderbau; ggf. Rechtsverordnungen nach § 87 BauO NRW.",
        ],
        table: {
          caption: "Ungeregelt im SBauVO-Sinne – gesetzlicher Einstieg",
          headers: ["Sonderbauart", "Typische Nutzung", "Brandschutz-Einstieg", "SBauVO"],
          rows: [
            ["Krankenhäuser (Nr. 14)", "Klinik, Reha", "BauO je GK; Konzept § 70", "Kein Teil"],
            ["Schulen (Nr. 16)", "Unterricht", "BauO; Unterrichtsräume Ausnahme SBauVO Teil 1", "Kein Teil"],
            ["Wohnheime, Kitas (Nr. 15)", "Heim, Tageseinrichtung", "BauO; Konzept bei großem Sonderbau", "Kein Teil"],
            ["Regallager > 9 m (Nr. 20)", "Logistik", "§ 30 (40 m); Konzept § 70", "Kein Teil"],
            ["Stoffe (Nr. 21)", "Chemie, Lager", "§§ 29, 31 + Konzept § 70", "Kein Teil"],
            ["Produktion/Werk („Industrie“)", "Fertigung, Halle", "GK + § 30 Abs. 2 Nr. 2; ggf. Nr. 20/21", "Kein Teil – kein Legalbegriff Industriebauwerk"],
            ["Büro > 3.000 m² (Nr. 5)", "Großverwaltung", "BauO GK 4/5; Konzept § 70", "Kein Teil"],
          ],
        },
      },
      {
        id: "folgen",
        title: "Folgen für Genehmigung und Brandschutz",
        paragraphs: [],
        table: {
          caption: "Einstufung und Nachweis",
          headers: ["Einstufung", "Verfahren", "Brandschutz-Nachweis", "Norm"],
          rows: [
            ["Normales Gebäude (kein § 50)", "§§ 60 ff.; ggf. § 62 genehmigungsfrei", "SV-Bescheinigung § 68 Abs. 2; Erleichterung GK 1–3 Wohnen § 68 Abs. 4", "§§ 60, 62, 68"],
            ["Sonderbau mit SBauVO", "Genehmigungspflichtig; § 62 ausgenommen", "BauO + SBauVO; bei großem Sonderbau zusätzlich Konzept", "§ 50; SBauVO; § 70"],
            ["Großer Sonderbau § 50 Abs. 2", "Reguläres/vereinfachtes Verfahren", "Brandschutzkonzept zwingend; BauPrüfVO § 9", "§ 70 Abs. 2"],
            ["Sonderbau § 68 Abs. 5", "Behördliche Prüfung", "Brandschutz durch Bauaufsicht (Ausnahme Garagen 100–1.000 m² mit natürlicher Lüftung)", "§ 68 Abs. 5"],
            ["Bestand", "Nutzungsänderung, Modernisierung", "§ 59 Bestandsschutz; Abweichungen § 69", "§§ 59, 69"],
          ],
        },
      },
      {
        id: "beispiel",
        title: "Kumulation: Hochregallager in Produktionsgebäude",
        paragraphs: [
          "Gebäudeklasse 5 (Höhe > 13 m oder NE > 400 m²) → volle BauO-Anforderungen.",
          "Großer Sonderbau § 50 Abs. 2 Nr. 20 (Regallager > 9 m) und/oder Nr. 21 (Stoffe) → Brandschutzkonzept.",
          "Kein SBauVO-Teil für Industrie/Regallager → § 30 Abs. 2 Nr. 2 (Brandwände alle 40 m). Raumebene: §§ 29, 31 für Räume mit Explosions-/erhöhter Brandgefahr.",
          "Vertiefung: [Brandabschnitte § 30](/ratgeber/brandabschnitte-bauo-sbauvo-nrw), [Räume Brand-/Explosionsgefahr](/ratgeber/raeume-brand-explosionsgefahr-bauo-nrw).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Gesetzliche Einstufung – Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            ["1", "Gebäude i. S. d. § 2 Abs. 3?", "§ 2 BauO", "Ja → Gebäudeklasse 1–5 ermitteln"],
            ["2", "Welche Gebäudeklasse?", "§ 2 Abs. 3", "GK 1–5 → §§ 26–49"],
            ["3", "Besondere Art oder Nutzung?", "§ 50 Abs. 1", "Rahmen; SBauVO-Anwendungsbereiche prüfen"],
            ["4", "SBauVO-Teil 1–6 anwendbar?", "§§ 1, 47, 60, 92, 121, 143", "Zusätzliche SBauVO-Pflichten"],
            ["5", "Tatbestand § 50 Abs. 2?", "§ 50 Abs. 2", "Ja → großer Sonderbau → Konzept § 70"],
            ["6", "„Industriebau“ gesetzlicher Typ?", "§ 50 BauO", "Nein – GK, Fläche, Stoffe, Regallager"],
            ["7", "Hochhaus > 22 m oder nur hohes Gebäude?", "§ 50 Abs. 2 Nr. 1; § 2", "> 22 m: SBauVO Teil 4 + großer Sonderbau"],
            ["8", "Beherbergung: SBauVO oder nur BauO?", "§ 47 SBauVO; § 50 Abs. 2 Nr. 11", "> 12 Betten SBauVO; > 30 Betten großer Sonderbau"],
            ["9", "Genehmigungsfrei § 62?", "§ 62 BauO", "Nicht für Sonderbauten nach § 50"],
            ["10", "Wer prüft Brandschutz?", "§ 68 Abs. 2–5", "SV, Entwurfsverfasser oder Behörde je GK/Vorhaben"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst nur BauO NRW, SBauVO NRW und BauPrüfVO NRW zusammen – ohne VV TB, DIN-Normen oder MHKBG-Auslegungshilfen. Einzelne Gebäudeklassen und Sonderbau-Arten sind in vertiefenden Ratgebern behandelt.",
          "Praxis-Sonderbau: [Sonderbauten Brandschutz](/ratgeber/sonderbauten-brandschutz). Fachplaner und Konzept: [Brandschutzfachplaner](/ratgeber/brandschutzfachplaner-rollen-bauo-nrw).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Geregelt/ungeregelt" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzeptpflicht" },
      { href: "/ratgeber/gebaeudeklassen-grenzfaelle-nrw", label: "GK-Grenzfälle" },
      { href: "/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw", label: "Beherbergung" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/kita-krankenhaus-sonderbau-ungeregelt-nrw", label: "Kita/Krankenhaus" },
    ],
    faq: [
      {
        question: "Was prüfe ich zuerst – Gebäudeklasse oder Sonderbau?",
        answer:
          "Parallel: Gebäudeklasse (§ 2) gilt immer; Sonderbau (§ 50/SBauVO) zusätzlich bei besonderer Nutzung. Beides wirkt kumulativ auf die Anforderungen.",
      },
      {
        question: "Was ist der Unterschied zwischen Sonderbau und großem Sonderbau?",
        answer:
          "§ 50 Abs. 1 ist der Rahmen. § 50 Abs. 2 listet abschließend große Sonderbauten mit Schwellen – mit zwingendem Brandschutzkonzept (§ 70). SBauVO kann schon bei niedrigeren Schwellen greifen.",
      },
      {
        question: "Ist jedes Gewerbegebäude ein Sonderbau?",
        answer:
          "Nein. Produktionshallen sind nur Sonderbau, wenn ein § 50 Abs. 2-Tatbestand erfüllt ist (z. B. Geschoss > 1.600 m², Regallager > 9 m, Stoffe). Sonst normale Einordnung über Gebäudeklasse.",
      },
      {
        question: "Ab wann braucht ein Hotel ein Brandschutzkonzept?",
        answer:
          "SBauVO Teil 2 ab mehr als 12 Gastbetten. Großer Sonderbau mit Konzeptpflicht ab mehr als 30 Betten (§ 50 Abs. 2 Nr. 11).",
      },
      {
        question: "Gilt die SBauVO für jede Garage?",
        answer:
          "Ja – Teil 5 für alle Garagen (§ 121 SBauVO). Großer Sonderbau mit Konzept erst ab mehr als 1.000 m² Nutzfläche (Nr. 22).",
      },
      {
        question: "Kann ein Gebäude genehmigungsfrei sein und trotzdem Sonderbau?",
        answer:
          "Nein. Sonderbauten nach § 50 sind von Genehmigungsfreiheit nach § 62 grundsätzlich ausgenommen.",
      },
      {
        question: "Was bedeutet GK 5 allein für den Brandschutz?",
        answer:
          "GK 5 steuert verschärfte BauO-Anforderungen (§§ 26–49) – ersetzt aber keine Sonderbau- oder SBauVO-Pflichten bei einschlägiger Nutzung.",
      },
    ],
  },
];
