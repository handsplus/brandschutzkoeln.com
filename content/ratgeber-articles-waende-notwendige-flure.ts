/**
 * 02.12.2024 – Wände notwendiger Flure (§ 36 BauO NRW).
 * Quelle: Waende_Notwendige_Flure_BauO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_WAENDE_NOTWENDIGE_FLURE: RatgeberArticle[] = [
  {
    slug: "waende-notwendige-flure-bauo-nrw",
    title: "Wände notwendiger Flure: welche Anforderungen nach § 36 BauO NRW?",
    excerpt:
      "Notwendige Flure sind Rettungswege – ihre Wände müssen nach § 36 Abs. 4 BauO NRW feuerhemmend sein, im Keller mit feuerbeständigem Tragwerk feuerbeständig. Übersicht: wann Flurwände Pflicht sind, Rauchabschnitte, Türen und Sonderbauten.",
    metaTitle: "Wände notwendiger Flure § 36 BauO NRW | H&S+",
    metaDescription:
      "Wände notwendiger Flure BauO NRW: § 36 Abs. 4 feuerhemmend, Keller feuerbeständig, Rauchabschnitte, Türen, Bekleidung § 36 Abs. 6 – wann notwendige Flure Pflicht sind.",
    keywords: [
      "Wände notwendiger Flure",
      "notwendiger Flur BauO NRW",
      "§ 36 BauO NRW Flurwand",
      "feuerhemmende Flurwand",
      "Rauchabschnitt notwendiger Flur",
      "Flurwand Keller feuerbeständig",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Was ist ein notwendiger Flur?",
        paragraphs: [
          "Flure, über die Rettungswege aus Aufenthaltsräumen oder aus Nutzungseinheiten mit Aufenthaltsräumen zu Ausgängen in notwendige Treppenräume oder ins Freie führen, sind notwendige Flure (§ 36 Abs. 1 Satz 1 BauO NRW). Sie müssen so angeordnet und ausgebildet sein, dass die Nutzung im Brandfall ausreichend lang möglich ist.",
          "Ein normaler Hausflur ist nur dann ein notwendiger Flur, wenn er diese Rettungsweg-Funktion erfüllt. Wohnungsflure innerhalb einer Wohnung, Flure in kleinen Nutzungseinheiten der Gebäudeklassen 1 und 2 oder Flure ohne Rettungsweg-Funktion unterliegen nicht den Wandanforderungen des § 36 Abs. 4.",
          "Schwerpunkt dieses Ratgebers: die Wände notwendiger Flure – Feuerwiderstandsfähigkeit, Führung, Öffnungen, Bekleidungen und Schnittstellen zu Treppenräumen. Gesetzliche TR-Systematik: [Notwendige Treppe und Treppenraum](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw). Maßgeblich: § 36 Abs. 3 bis 6 BauO NRW. Brandlasten (gebunden und beweglich): [Brandlasten im notwendigen Flur](/ratgeber/brandlasten-notwendige-flure-bauo-nrw). Grundlagen: [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw), [Brandschutztüren](/ratgeber/tuerarten-brandschutz-bauo-nrw).",
        ],
        list: [
          "§ 33 Abs. 1 – zwei Rettungswege ins Freie",
          "§ 33 Abs. 2 – beide Wege dürfen im Geschoss über denselben notwendigen Flur führen",
          "§ 35 Abs. 1 – notwendige Treppe im Treppenraum",
          "§ 36 Abs. 1 – Nutzbarkeit im Brandfall ausreichend lang",
          "§ 36 Abs. 4 – Wände feuerhemmend (Keller: feuerbeständig)",
          "§ 26 Abs. 3 – Feuerwiderstandsfähigkeit raumabschließender Bauteile",
        ],
      },
      {
        id: "wann",
        title: "Wann sind notwendige Flure – und Flurwände – erforderlich?",
        paragraphs: [
          "Spalte „Norm“ verweist auf die BauO NRW 2018.",
        ],
        table: {
          caption: "Wann gelten Wandanforderungen nach § 36 Abs. 4?",
          headers: ["Situation", "Notwendiger Flur?", "Norm", "Folge für Wände"],
          rows: [
            [
              "Rettungsweg über Flur zu Treppenraum oder ins Freie",
              "Ja",
              "§ 36 Abs. 1 Satz 1",
              "§ 36 Abs. 4 gilt",
            ],
            [
              "Wohngebäude GK 1 oder 2",
              "Nein (Ausnahme)",
              "§ 36 Abs. 1 Satz 2 Nr. 1",
              "Keine §-36-Flurwände",
            ],
            [
              "Sonstige Gebäude GK 1 oder 2 (außer Keller)",
              "Nein (Ausnahme)",
              "§ 36 Abs. 1 Satz 2 Nr. 2",
              "Keine §-36-Flurwände",
            ],
            [
              "Innerhalb NE ≤ 200 m² (GK 1/2)",
              "Nein",
              "§ 36 Abs. 1 Satz 2 Nr. 3",
              "Kein notwendiger Flur innerhalb der NE",
            ],
            [
              "Innerhalb Wohnung",
              "Nein",
              "§ 36 Abs. 1 Satz 2 Nr. 3",
              "Wohnungsflur ≠ notwendiger Flur",
            ],
            [
              "Büro-/Verwaltungs-NE ≤ 400 m² mit Trennwänden § 29 Abs. 2 Nr. 1 und eigenem Rettungsweg je Teil",
              "Nein (für Teil)",
              "§ 36 Abs. 1 Satz 2 Nr. 4",
              "Trennwände nach § 29 statt Flurwände § 36",
            ],
            [
              "Geschoss mit mehr als vier Wohnungen",
              "Ja – Flure anzuordnen",
              "§ 35 Abs. 4",
              "§ 36 Abs. 4 greift",
            ],
            [
              "GK 3, 4 oder 5 (ohne GK-1/2-Ausnahme)",
              "Regel: wo Rettungsweg über Flur",
              "§ 36; § 35 Abs. 4",
              "Volle Wandanforderungen",
            ],
          ],
        },
      },
      {
        id: "waende",
        title: "Kernanforderungen an Flurwände (§ 36 Abs. 4)",
        paragraphs: [
          "Die Wände notwendiger Flure müssen als raumabschließende Bauteile feuerhemmend sein; in Kellergeschossen, deren tragende und aussteifende Bauteile feuerbeständig sein müssen, feuerbeständig. Die Wände sind bis an die Rohdecke zu führen – oder bis an die Unterdecke, wenn die Unterdecke feuerhemmend ist und ein vergleichbarer Raumabschluss sichergestellt ist. Türen in diesen Wänden müssen dicht schließen. Öffnungen zu Lagerbereichen im Kellergeschoss: feuerhemmende, dicht und selbstschließende Abschlüsse.",
          "Gemeint sind alle raumabschließenden Wände des Flurkörpers – zu Wohnungen, Büros, Gewerbe, Lager, zum notwendigen Treppenraum und ggf. innere Längswände bei Rauchabschnitts-Trennung. Nicht gemeint: Trennwände nach § 29, die keinen notwendigen Flur bilden.",
        ],
        table: {
          caption: "Anforderungen an Wände notwendiger Flure – § 36 Abs. 4",
          headers: ["Nr.", "Anforderung", "Gesetzlicher Wortlaut", "Norm"],
          rows: [
            ["1", "Raumabschließend", "Als raumabschließende Bauteile", "§ 36 Abs. 4 Satz 1"],
            ["2", "Feuerhemmend (oberirdisch)", "Feuerhemmend", "§ 36 Abs. 4 Satz 1; § 26 Abs. 3"],
            [
              "3",
              "Feuerbeständig (Keller)",
              "In Kellergeschossen, deren tragende und aussteifende Bauteile feuerbeständig sein müssen, feuerbeständig",
              "§ 36 Abs. 4 Satz 1",
            ],
            ["4", "Führung bis Rohdecke", "Bis an die Rohdecke zu führen", "§ 36 Abs. 4 Satz 2"],
            [
              "5",
              "Alternative Unterdecke",
              "Bis an die Unterdecke, wenn feuerhemmend und vergleichbarer Raumabschluss",
              "§ 36 Abs. 4 Satz 2",
            ],
            ["6", "Türen zu Nutzungsräumen", "Dicht schließen", "§ 36 Abs. 4 Satz 3"],
            [
              "7",
              "Öffnung zu Lager (Keller)",
              "Feuerhemmende, dicht und selbstschließende Abschlüsse",
              "§ 36 Abs. 4 Satz 4",
            ],
          ],
        },
      },
      {
        id: "rauchabschnitt",
        title: "Rauchabschnittswände (§ 36 Abs. 3)",
        paragraphs: [
          "Notwendige Flure sind durch nichtabschließbare, rauchdichte und selbstschließende Abschlüsse in Rauchabschnitte zu unterteilen. Die Rauchabschnitte sollen nicht länger als 30 Meter sein. Abschlüsse bis an die Rohdecke – oder bis an feuerhemmende Unterdecke. Flure mit nur einer Fluchtrichtung zum Sicherheitstreppenraum: maximal 15 Meter. Die Regeln gelten nicht für offene Gänge nach § 36 Abs. 5.",
          "Das Gesetz differenziert Türanforderungen nach Funktion: Rauchabschnitt (nichtabschließbar, rauchdicht, selbstschließend), Flurwand zu Räumen (dicht schließend nach Abs. 4), Treppenraum → Flur (rauchdicht und selbstschließend nach § 35 Abs. 6 Nr. 2).",
        ],
        table: {
          caption: "Flurwand vs. Rauchabschnitts-Abschluss",
          headers: ["Element", "Anforderung", "Norm"],
          rows: [
            [
              "Rauchabschnitts-Abschluss (Querwand)",
              "Nichtabschließbar, rauchdicht, selbstschließend; bis Rohdecke oder feuerhemmende Unterdecke",
              "§ 36 Abs. 3",
            ],
            [
              "Flurperimeter-Wand",
              "Feuerhemmend bzw. im Keller feuerbeständig; Türen dicht schließend",
              "§ 36 Abs. 4",
            ],
            [
              "Tür Treppenraum → Flur",
              "Rauchdicht und selbstschließend",
              "§ 35 Abs. 6 Nr. 2",
            ],
          ],
        },
      },
      {
        id: "offene-gaenge",
        title: "Offene Gänge und Bekleidungen",
        paragraphs: [
          "Für Wände und Brüstungen notwendiger Flure mit nur einer Fluchtrichtung, die als offene Gänge vor den Außenwänden angeordnet sind, gilt § 36 Abs. 4 entsprechend. Fenster in diesen Außenwänden sind ab einer Brüstungshöhe von 0,90 Meter zulässig (§ 36 Abs. 5). Rauchabschnitts-Regeln nach Abs. 3 gelten hier nicht.",
          "§ 36 Abs. 6: In notwendigen Fluren und offenen Gängen müssen Bekleidungen, Putze, Unterdecken und Dämmstoffe aus nichtbrennbaren Baustoffen bestehen; Wände und Decken aus brennbaren Baustoffen brauchen eine Bekleidung aus nichtbrennbaren Baustoffen in ausreichender Dicke; Fußbodenbeläge mindestens schwerentflammbar.",
        ],
      },
      {
        id: "schnittstellen",
        title: "Schnittstellen: Treppenraum, Trennwände, Decken, Leitungen",
        paragraphs: [
          "Wände notwendiger Treppenräume (§ 35 Abs. 2): GK 5 Bauart Brandwand; GK 4 hochfeuerhemmend; GK 3 feuerhemmend – höhere Anforderung als die Flurwand selbst in GK 4/5.",
          "Vorraum zwischen Treppenraum und Freiem (wenn Ausgang nicht unmittelbar ins Freie): Wände wie Treppenraum; rauchdichte und selbstschließende Abschlüsse zum Flur; keine Öffnungen zu anderen Räumen (§ 35 Abs. 3 Satz 2).",
          "Trennwände nach § 29 sind erforderlich zwischen Nutzungseinheiten – ausgenommen notwendige Flure. Wo kein notwendiger Flur nötig ist (§ 36 Abs. 1 Satz 2 Nr. 4), übernehmen Trennwände nach § 29 die brandschutzliche Trennung.",
          "Decken zwischen Geschossen: feuerhemmend (GK 2/3), hochfeuerhemmend (GK 4), feuerbeständig (GK 5); im Keller feuerbeständig (GK 3–5) nach § 31. § 36 Abs. 4 Satz 2 regelt ergänzend die Führung der Flurwand an die Decke.",
          "Leitungen in notwendigen Fluren nur zulässig, wenn Rettungswegnutzung im Brandfall ausreichend lang möglich ist. Lüftungsleitungen sowie Bekleidungen und Dämmstoffe aus nichtbrennbaren Baustoffen. Vertiefung: [Leitungsanlagen](/ratgeber/leitungsanlagen-bauo-sbauvo-nrw).",
        ],
      },
      {
        id: "gk",
        title: "Gebäudeklassen",
        paragraphs: [
          "Für die Flurwand selbst nennt § 36 Abs. 4 unabhängig von der Gebäudeklasse „feuerhemmend“ (oberirdisch) bzw. „feuerbeständig“ (Keller mit feuerbeständigem Tragwerk). Höhere GK-Anforderungen betreffen vor allem den Treppenraum (§ 35 Abs. 2), nicht die Flurwand-Feuerwiderstandsklasse.",
        ],
        table: {
          caption: "Gebäudeklassen – notwendiger Flur und Flurwände",
          headers: ["GK", "Notwendiger Flur?", "Flurwand oberirdisch", "Flurwand Keller", "Treppenraumwand"],
          rows: [
            ["GK 1–2 Wohngebäude", "In der Regel nein", "—", "—", "Treppen ohne Treppenraum zulässig"],
            ["GK 1–2 sonstig (Keller)", "Möglich", "Feuerhemmend", "Feuerhemmend", "Feuerhemmend"],
            ["GK 3", "Ja", "Feuerhemmend", "Feuerbeständig", "Feuerhemmend"],
            ["GK 4", "Ja", "Feuerhemmend", "Feuerbeständig", "Hochfeuerhemmend"],
            ["GK 5", "Ja", "Feuerhemmend", "Feuerbeständig", "Bauart Brandwand"],
          ],
        },
      },
      {
        id: "sonderbau",
        title: "Sonderbauten",
        paragraphs: [
          "In Sonderbauten können Fluranforderungen über § 36 BauO NRW hinausgehen.",
        ],
        table: {
          caption: "Sonderbauten – verschärfte Fluranforderungen",
          headers: ["Sonderbau", "Norm", "Wandanforderung"],
          rows: [
            [
              "Verkaufsstätten – Kundenflure",
              "§ 72 Abs. 2 SBauVO",
              "Wände und Decken feuerbeständig (ohne SEL) bzw. mindestens feuerhemmend (mit SEL)",
            ],
            [
              "Beherbergungsstätten",
              "§ 52 SBauVO",
              "Stichflur max. 15 m; Fußbodendämmung abweichend zu § 36 Abs. 6 Nr. 1 unter Bedingungen",
            ],
          ],
        },
      },
      {
        id: "katalog",
        title: "Anforderungskatalog Flurwände",
        paragraphs: [],
        table: {
          caption: "Welche Wand wo – gesetzliche Pflichten",
          headers: ["Nr.", "Wandtyp / Lage", "Pflicht", "Norm"],
          rows: [
            [
              "1",
              "Flurwand zu Aufenthaltsraum / NE",
              "Raumabschließend, feuerhemmend; bis Rohdecke; Türen dicht schließend",
              "§ 36 Abs. 4",
            ],
            ["2", "Flurwand Keller (feuerbeständiges Kellertragwerk)", "Feuerbeständig", "§ 36 Abs. 4 Satz 1"],
            [
              "3",
              "Flurwand zu Lagerbereich (Keller)",
              "Öffnung: feuerhemmend, dicht, selbstschließend",
              "§ 36 Abs. 4 Satz 4",
            ],
            [
              "4",
              "Querwand Rauchabschnitt",
              "Nichtabschließbar, rauchdicht, selbstschließend; bis Rohdecke",
              "§ 36 Abs. 3",
            ],
            ["5", "Tür zum Treppenraum", "Rauchdicht und selbstschließend", "§ 35 Abs. 6 Nr. 2"],
            [
              "6",
              "Offener Gang vor Außenwand",
              "§ 36 Abs. 4 entsprechend; Fenster ab 0,90 m Brüstung",
              "§ 36 Abs. 5",
            ],
            ["7", "Bekleidung Flurwand", "Nichtbrennbar bzw. Brandschutzbekleidung", "§ 36 Abs. 6"],
            ["8", "Leitungsdurchführung", "Nur wenn Rettungswegnutzung ausreichend lang möglich", "§ 40 Abs. 2"],
            [
              "9",
              "Verkaufsstätte Kundenflur",
              "Feuerbeständig (ohne SEL) / feuerhemmend (mit SEL)",
              "§ 72 Abs. 2 SBauVO",
            ],
            [
              "10",
              "Kein notwendiger Flur (GK 1/2 Wohnhaus)",
              "§ 36 Abs. 4 entfällt; ggf. § 29",
              "§ 36 Abs. 1 Satz 2",
            ],
          ],
        },
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Checkliste für Planung und Genehmigung – ausschließlich auf Gesetzesgrundlage.",
        ],
        table: {
          caption: "Prüfpunkte Wände notwendiger Flure",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis bei „Ja“"],
          rows: [
            ["1", "Rettungsweg über diesen Flur?", "§ 36 Abs. 1; § 33", "Notwendiger Flur → § 36 Abs. 4"],
            ["2", "Ausnahme GK 1/2, Wohnung, NE ≤ 200/400 m²?", "§ 36 Abs. 1 Satz 2", "Kein notwendiger Flur"],
            ["3", "Keller mit feuerbeständigem Tragwerk?", "§ 36 Abs. 4; § 27 Abs. 3", "Flurwände feuerbeständig"],
            ["4", "Flur oberirdisch?", "§ 36 Abs. 4 Satz 1", "Flurwände feuerhemmend"],
            ["5", "Flurwände bis Rohdecke?", "§ 36 Abs. 4 Satz 2", "Pflicht oder Unterdecke-Alternative"],
            ["6", "Türen in Flurwänden zu Nutzungsräumen?", "§ 36 Abs. 4 Satz 3", "Dicht schließen"],
            ["7", "Öffnungen zu Lager im Keller?", "§ 36 Abs. 4 Satz 4", "Feuerhemmend, dicht, selbstschließend"],
            ["8", "Flurlänge > 30 m (Stichflur > 15 m)?", "§ 36 Abs. 3", "Rauchabschnitts-Abschlüsse"],
            ["9", "Tür zum notwendigen Treppenraum?", "§ 35 Abs. 6 Nr. 2", "Rauchdicht und selbstschließend"],
            ["10", "Offener Gang vor Außenwand?", "§ 36 Abs. 5", "Abs. 4 entsprechend; keine Rauchabschnitte Abs. 3"],
            ["11", "Bekleidungen, Dämmstoffe an Flurwänden?", "§ 36 Abs. 6", "Nichtbrennbar bzw. ausreichende Bekleidung"],
            ["12", "Leitungs-/Lüftungsdurchführungen?", "§§ 40 Abs. 2, 41 Abs. 2", "Nur bei ausreichender Rettungswegnutzung"],
            ["13", "Verkaufsstätte (Sonderbau)?", "§ 72 Abs. 2 SBauVO", "Flurwände ggf. feuerbeständig"],
            ["14", "Beherbergungsstätte?", "§ 52 SBauVO", "Stichflur 15 m; Sonderregel Fußbodendämmung"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst § 36 und Schnittstellen aus BauO NRW und SBauVO-Auszügen zusammen – ohne VV TB NRW, DIN-Normen oder Minutensklassen (F30/F90). Feuerwiderstandswerte ergeben sich aus den Technischen Baubestimmungen, nicht aus dem Gesetzestext. Verbindlich sind Grundrisse und Festlegung der Bauaufsicht.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/leitungsanlagen-bauo-sbauvo-nrw", label: "Leitungsanlagen" },
      { href: "/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw", label: "Treppenraum § 35" },
      { href: "/ratgeber/brandabschnitte-bauo-sbauvo-nrw", label: "Brandabschnitte § 30" },
      { href: "/ratgeber/brandlasten-notwendige-flure-bauo-nrw", label: "Brandlasten im Flur" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/tuerarten-brandschutz-bauo-nrw", label: "Brandschutztüren im Flur" },
      { href: "/ratgeber/gebaeudeklasse-3-brandschutz-bauo-nrw", label: "GK 3 Flure" },
      { href: "/ratgeber/gebaeudeklasse-4-brandschutz-bauo-nrw", label: "GK 4 Flure" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
    ],
    faq: [
      {
        question: "Wann ist ein Flur ein notwendiger Flur?",
        answer:
          "Wenn Rettungswege aus Aufenthaltsräumen oder NE mit Aufenthaltsräumen über ihn zu notwendigen Treppenräumen oder ins Freie führen (§ 36 Abs. 1 Satz 1 BauO NRW).",
      },
      {
        question: "Welche Feuerwiderstandsfähigkeit haben Flurwände?",
        answer:
          "§ 36 Abs. 4: feuerhemmend als raumabschließende Bauteile; in Kellergeschossen mit feuerbeständigem Tragwerk feuerbeständig. Unabhängig von GK für die Flurwand selbst – GK betrifft vor allem den Treppenraum (§ 35 Abs. 2).",
      },
      {
        question: "Müssen Flurwände bis zur Rohdecke geführt werden?",
        answer:
          "Grundsätzlich ja (§ 36 Abs. 4 Satz 2). Alternative: bis Unterdecke, wenn feuerhemmend und vergleichbarer Raumabschluss.",
      },
      {
        question: "Welche Tür zwischen Flur und Treppenraum?",
        answer:
          "§ 35 Abs. 6 Nr. 2: rauchdicht und selbstschließend – nicht nur „dicht schließend“ wie Türen zu Nutzungsräumen (§ 36 Abs. 4 Satz 3).",
      },
      {
        question: "Wann brauche ich Rauchabschnitts-Abschlüsse?",
        answer:
          "§ 36 Abs. 3: Rauchabschnitte sollen max. 30 m lang sein (15 m bei Stichflur zum Sicherheitstreppenraum). Abschlüsse: nichtabschließbar, rauchdicht, selbstschließend.",
      },
      {
        question: "Gilt § 36 in einem Zweifamilienhaus?",
        answer:
          "In Wohngebäuden GK 1 und 2 sind notwendige Flure nicht erforderlich (§ 36 Abs. 1 Satz 2 Nr. 1) – dann entfallen auch Flurwände nach Abs. 4.",
      },
      {
        question: "Was gilt in Verkaufsstätten?",
        answer:
          "§ 72 Abs. 2 SBauVO NRW: Wände und Decken notwendiger Kundenflure feuerbeständig (ohne SEL) bzw. mindestens feuerhemmend (mit SEL) – verschärft gegenüber § 36 Abs. 4 BauO NRW.",
      },
    ],
  },
];
