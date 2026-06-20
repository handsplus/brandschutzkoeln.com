/**
 * 15.11.2024 – Rettungswegfenster Bestand (MHKBD-Runderlass 25.11.2019).
 * Quelle: runderlassrw-fenster2019-11-25ber._0.pdf
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_RETTUNGSWEGFENSTER_RUNDERLASS: RatgeberArticle[] = [
  {
    slug: "rettungswegfenster-groesse-bestand-bauo-nrw",
    title: "Rettungswegfenster im Bestand: wann kleinere Maße noch reichen",
    excerpt:
      "Altbau mit Fenstern 60×90 oder 80×100 statt 90×120? Der NRW-Runderlass sagt, wann der zweite Rettungsweg über die Feuerwehr trotzdem gilt – und wann Fenstertausch ohne Genehmigung möglich ist.",
    metaTitle: "Rettungswegfenster Bestand NRW § 37 | H&S+",
    metaDescription:
      "Rettungswegfenster zu klein im Bestand: MHKBD-Runderlass NRW zu § 37 Abs. 5 und § 33 Abs. 2 – 0,80×1,00 m, Einzelfallprüfung, Fenstertausch ohne wesentliche Änderung.",
    keywords: [
      "Rettungswegfenster Bestand",
      "Fenster zweiter Rettungsweg NRW",
      "§ 37 Abs. 5 BauO NRW",
      "Fenstergröße Rettungsweg",
      "Runderlass Fenster MHKBD",
      "0,90 x 1,20 Rettungswegfenster",
    ],
    sections: [
      {
        id: "frage",
        title: "Fenster zu klein – fällt der zweite Rettungsweg weg?",
        paragraphs: [
          "Wer ein älteres Gebäude kauft, saniert oder die Nutzung ändert, stößt schnell auf das Problem: Die Fenster zur Straße sind kleiner als heute vorgeschrieben – oft 0,60 m × 0,90 m im Lichten, manchmal 0,80 m × 1,00 m. Trotzdem dient eines davon seit Jahrzehnten als zweiter Rettungsweg über die Feuerwehr.",
          "Nach § 37 Abs. 5 BauO NRW müssen Fensteröffnungen, die als mit Rettungsgeräten der Feuerwehr erreichbare Stelle nach § 33 Abs. 2 dienen, im Lichten mindestens 0,90 m × 1,20 m groß sein. Die Unterkante darf grundsätzlich nicht höher als 1,20 m über der Fußbodenoberkante liegen. Die Orientierung der Maße (breit × hoch oder hoch × breit) ist freigestellt.",
          "In rechtmäßig bestehenden Gebäuden halten viele Fenster diese Maße nicht ein – bis 1975 reichten für Fernster teils nur 0,60 m × 0,90 m. Ob der zweite Rettungsweg deshalb wegfällt, hängt davon ab, ob die Feuerwehr das Fenster noch als Rettungswegfenster nutzen kann. Dafür hat das MHKBD mit Runderlass vom 25.11.2019 (Az. 615-100/37.5) eine einheitliche NRW-Linie gezogen.",
          "Dieser Ratgeber fasst den Runderlass zusammen – ergänzend zu [Flucht- und Rettungswegen](/ratgeber/flucht-und-rettungswege-bauo-nrw), [Dachfenster als zweiter Weg](/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw) und [Feuerwehr-Abstimmung](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw).",
        ],
      },
      {
        id: "gesetz",
        title: "Was das Gesetz verlangt – und was der Runderlass ergänzt",
        paragraphs: [
          "§ 33 Abs. 2 Satz 2 BauO NRW: Der zweite Rettungsweg kann eine weitere notwendige Treppe oder eine mit Rettungsgeräten der Feuerwehr erreichbare Stelle der Nutzungseinheit sein. § 37 Abs. 5 konkretisiert die Fenstermaße für diese erreichbare Stelle.",
          "Der Runderlass gilt nur für rechtmäßig bestehende Gebäude mit Fenstern, die die §-37-Abs.-5-Maße nicht einhalten. Für Neubau und wesentliche Änderungen gelten die jeweils geltenden Vorschriften ohne die Bestandserleichterung.",
        ],
        table: {
          caption: "Fenstermaße – Gesetz (Neubau) vs. Runderlass (Bestand)",
          headers: ["Situation", "Lichtes Maß", "Unterkante", "Quelle"],
          rows: [
            ["Neubau / wesentliche Änderung", "Mindestens 0,90 m × 1,20 m i.L.", "Max. 1,20 m über FBOK", "§ 37 Abs. 5 BauO NRW"],
            ["Bestand ≥ 0,80 m × 1,00 m i.L.", "Grundsätzlich noch nutzbar", "Nach § 37 Abs. 5", "Runderlass 25.11.2019"],
            ["Bestand 0,60 × 0,90 bis 0,80 × 1,00 m", "Einzelfallprüfung", "Nach § 37 Abs. 5", "Runderlass 25.11.2019"],
            ["Bestand < 0,60 m × 0,90 m i.L.", "Nicht als Rettungswegfenster nutzbar", "—", "Runderlass 25.11.2019"],
          ],
        },
      },
      {
        id: "einzelfall",
        title: "Zwischen 60×90 und 80×100: die Einzelfallprüfung",
        paragraphs: [
          "Liegen Fensteröffnungen – einschließlich Einzelöffnungen bei Fenstern mit nicht öffenbaren Mittelpfosten – im Lichten zwischen 0,60 m × 0,90 m und 0,80 m × 1,00 m, ist zu prüfen, ob sie als Rettungsfenster geeignet sind. Maßgebliche Kriterien nach dem Runderlass:",
          "Unter 0,60 m × 0,90 m i.L. ist davon auszugehen, dass die Feuerwehr das Fenster nicht als Rettungswegfenster nutzen kann.",
        ],
        list: [
          "Lage des Fensters: ebenerdig oder nicht ebenerdig",
          "Ob die Feuerwehr das Fenster noch als anleiterbare Stelle nutzen kann – ggf. Anleiterprobe",
          "Erreichbarkeit über tragbare Leitern und/oder Hubrettungsgeräte der Feuerwehr (in der Regel Drehleitern)",
          "Ob gerades Anleitern möglich ist oder versetzt angeleitert werden muss",
          "Welche lichte Gesamtöffnungsbreite bei Fenstern mit Mittelpfosten vorhanden ist",
        ],
      },
      {
        id: "fenstertausch",
        title: "Fenster austauschen – ohne wesentliche Änderung",
        paragraphs: [
          "Der Austausch von Fenstern in rechtmäßig bestehenden Gebäuden ist keine wesentliche Änderung im Sinne des Genehmigungsrechts, wenn sich das Maß der Öffnung nicht verändert. Das Fenster unterliegt damit dem Bestandsschutz – ein Wechsel auf moderne Verglasung oder Rahmen ohne Vergrößerung der Lichtöffnung löst nicht automatisch die Neubau-Anforderung 0,90 m × 1,20 m aus.",
          "Vergrößert oder verkleinert sich die lichte Öffnung, ist das keine bloße Erhaltungsmaßnahme mehr – dann gelten die aktuellen Vorschriften. Einordnung: [Bestandsschutz](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw), [Umbau und Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
        ],
      },
      {
        id: "ablauf",
        title: "Was Sie in der Praxis tun sollten",
        paragraphs: [
          "Der Runderlass richtet sich an Bauaufsichtsbehörden – für Bauherrschaft und Planer heißt das: Fenstermaße, Lage und Erreichbarkeit dokumentieren und die örtliche Feuerwehr früh einbinden, wenn der zweite Rettungsweg über ein Fenster läuft.",
          "Bei Maßen zwischen 0,60 × 0,90 und 0,80 × 1,00 m reicht eine bloße Grundrissangabe oft nicht – eine Anleiterprobe oder schriftliche Stellungnahme der Brandschutzdienststelle ist der übliche Weg zur Absicherung.",
          "Ab Brüstungshöhen über 8 m kommt § 33 Abs. 5 BauO NRW hinzu: Rettung nur mit Hubrettungsfahrzeugen, wenn die Feuerwehr diese einsetzen kann – unabhängig von der Fenstergröße. Details: [Dachfenster-Ratgeber](/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Rettungswegfenster – Prüfpunkte nach Gesetz und Runderlass",
          headers: ["Nr.", "Prüffrage", "Ergebnis"],
          rows: [
            ["1", "Dient das Fenster als zweiter Rettungsweg nach § 33 Abs. 2 Satz 2?", "§ 37 Abs. 5 maßgeblich"],
            ["2", "Neubau oder wesentliche Änderung?", "0,90 × 1,20 m i.L. Pflicht – Runderlass entfällt"],
            ["3", "Rechtmäßig bestehendes Gebäude?", "Runderlass 25.11.2019 anwendbar"],
            ["4", "Lichtes Maß ≥ 0,80 m × 1,00 m?", "Grundsätzlich noch als Rettungswegfenster nutzbar"],
            ["5", "Maß zwischen 0,60×0,90 und 0,80×1,00 m?", "Einzelfallprüfung – Kriterien Runderlass"],
            ["6", "Maß < 0,60 m × 0,90 m?", "Feuerwehr kann Fenster nicht nutzen"],
            ["7", "Unterkante > 1,20 m über FBOK?", "§ 37 Abs. 5 – gesondert prüfen"],
            ["8", "Mittelpfosten – lichte Gesamtöffnungsbreite?", "In Einzelfallprüfung einbeziehen"],
            ["9", "Fenstertausch ohne Änderung der Lichtöffnung?", "Keine wesentliche Änderung"],
            ["10", "Brüstung > 8 m?", "§ 33 Abs. 5 – Hubrettungsfahrzeug erforderlich"],
            ["11", "Stellungnahme Feuerwehr vorhanden?", "Für Genehmigung und Bestandsnachweis"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Der Runderlass ersetzt keine Anleiterprobe und keine behördliche Festlegung im Einzelfall. Er gilt in NRW einheitlich für die Auslegung durch Bauaufsichtsbehörden – im Einvernehmen mit dem Ministerium des Innern.",
          "Quelle: [MHKBD-Runderlass Fenster 25.11.2019](https://www.mhkbd.nrw/system/files/media/document/file/runderlassrw-fenster2019-11-25ber._0.pdf) (ersetzt Runderlass 13.12.2017 zu § 40 Abs. 4 der früheren Fassung).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw", label: "Dachfenster Rettungsweg" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr vor Bauamt" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz" },
      { href: "/ratgeber/zweiter-rettungsweg-innenhof-bauo-nrw", label: "Zweiter Weg Innenhof" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
    ],
    faq: [
      {
        question: "Welche Mindestgröße hat ein Rettungswegfenster?",
        answer:
          "Nach § 37 Abs. 5 BauO NRW: mindestens 0,90 m × 1,20 m im Lichten, Unterkante max. 1,20 m über FBOK. Im rechtmäßigen Bestand gelten nach NRW-Runderlass abweichende Stufen – ab 0,80 × 1,00 m grundsätzlich noch nutzbar.",
      },
      {
        question: "Reichen 60×90-Fenster im Altbau noch?",
        answer:
          "Nicht automatisch. Unter 0,60 × 0,90 m i.L. gilt der Runderlass als nicht nutzbar. Zwischen 0,60 × 0,90 und 0,80 × 1,00 m ist eine Einzelfallprüfung nötig – oft mit Anleiterprobe.",
      },
      {
        question: "Kann ich Fenster tauschen, ohne die Öffnung zu vergrößern?",
        answer:
          "Ja. Der Runderlass: Austausch ohne Änderung des Öffnungsmaßes ist keine wesentliche Änderung – Bestandsschutz für die Lichtöffnung bleibt.",
      },
      {
        question: "Gilt der Runderlass für Neubauten?",
        answer:
          "Nein. Bei neu zu errichtenden Gebäuden und wesentlichen Änderungen gelten die jeweils geltenden Vorschriften – 0,90 × 1,20 m nach § 37 Abs. 5.",
      },
      {
        question: "Was zählt bei Fenstern mit Mittelpfosten?",
        answer:
          "Auch Einzelöffnungen von Fenstern mit nicht öffenbaren Mittelpfosten fallen unter die Prüfung. Maßgeblich ist unter anderem die lichte Gesamtöffnungsbreite.",
      },
      {
        question: "Brauche ich die Feuerwehr dazu?",
        answer:
          "Für die Feststellung, ob ein Fenster als zweiter Rettungsweg über Rettungsgeräte taugt, ist die Feuerwehr bzw. Brandschutzdienststelle maßgeblich – besonders bei Grenzmaßen und Anleiterproben.",
      },
    ],
  },
];
