/**
 * 24.10.2024 – Brandlasten in notwendigen Fluren (BauO / SBauVO NRW).
 * Quelle: Brandlasten_Notwendige_Flure_BauO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BRANDLASTEN_NOTWENDIGE_FLURE: RatgeberArticle[] = [
  {
    slug: "brandlasten-notwendige-flure-bauo-nrw",
    title: "Brandlasten im notwendigen Flur: was das Gesetz regelt – und was nicht",
    excerpt:
      "Mülltonnen, Fahrräder, Dekoration im Hausflur: Viele glauben, das verbietet die BauO pauschal. Tatsächlich steuert das Gesetz Brandlasten funktional – gebundene Baustoffe ja, bewegliche Gegenstände erst in der SBauVO bei Sonderbauten.",
    metaTitle: "Brandlasten notwendiger Flur BauO NRW | H&S+",
    metaDescription:
      "Brandlasten im notwendigen Flur NRW: § 36 Abs. 6 Baustoffe, keine MJ/m²-Pflicht, bewegliche Gegenstände nur SBauVO § 83/57/116. Gesetzlicher Prüfkatalog.",
    keywords: [
      "Brandlast notwendiger Flur",
      "Mülltonne Flur BauO",
      "Fahrrad Hausflur Brandschutz",
      "§ 36 Abs. 6 BauO NRW",
      "§ 83 SBauVO Flur Dekoration",
      "Rettungsweg freihalten Gesetz",
    ],
    sections: [
      {
        id: "frage",
        title: "Darf im Flur abgestellt werden? Das Gesetz ist enger als die Hausordnung",
        paragraphs: [
          "In Mehrfamilienhäusern, Büros und Gewerbeobjekten ist der Streit um Mülltonnen, Fahrräder und Kartons im Flur alltäglich. Viele Planer und Betreiber gehen von einer pauschalen Bauordnungspflicht aus, den Flur „brandlastfrei“ zu halten – mit Brandlasttabellen oder MJ/m².",
          "Im Landesrecht NRW ist das anders strukturiert: Der Begriff „Brandlast“ ist für notwendige Flure weder definiert noch als Kennzahl geregelt. Das Gesetz steuert Brandlasten funktional über die Nutzbarkeit als Rettungsweg (§ 36 Abs. 1 BauO NRW) und über Baustoffanforderungen an fest eingebaute Bestandteile (§ 36 Abs. 6, § 26 BauO NRW).",
          "Bewegliche Gegenstände – Dekorationen, Abstellungen, Hindernisse – regelt die BauO für notwendige Flure nicht allgemein. Konkrete Verbote und Freihaltungspflichten stehen in der SBauVO NRW bei bestimmten Sonderbauten im Betrieb.",
        ],
      },
      {
        id: "zwei-ebenen",
        title: "Zwei Ebenen: gebunden und beweglich",
        list: [
          "§ 36 Abs. 1 – Schutzziel: Nutzung im Brandfall ausreichend lang möglich (kein Brandlast-Maß)",
          "§ 36 Abs. 6 + § 26 – gebundene Brandlast: Bekleidungen, Putze, Dämmstoffe, Fußboden",
          "§§ 40, 41 – Leitungs- und Lüftungsanlagen in Flurwänden",
          "§ 44 – Abfall nur in dafür bestimmten, abgeschotteten Räumen (GK 3–5)",
          "SBauVO NRW – bewegliche Brandlast und Freihalten nur bei Sonderbauten im Betrieb",
        ],
        paragraphs: [
          "Feuerhemmende Flurwände nach § 36 Abs. 4 schützen den Flur vor Brand aus angrenzenden Räumen – nicht vor Brandlast im Flur selbst. Leitungen und Lüftung: [Leitungsanlagen](/ratgeber/leitungsanlagen-bauo-sbauvo-nrw). Vertikaler Rettungsweg: [Notwendige Treppe und Treppenraum](/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw). Details zu Wänden und Türen: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw).",
        ],
      },
      {
        id: "normkette",
        title: "Normkette vom Rettungsweg zur Brandlast",
        paragraphs: [
          "§ 33 BauO NRW – Rettungswege aus Aufenthaltsräumen; ohne Rettungsweg-Funktion kein notwendiger Flur und keine §-36-Materialanforderungen.",
          "§ 36 Abs. 1 – Oberziel: weder fest eingebaute noch bewegliche Stoffe dürfen den Fluchtweg so gefährden, dass die Nutzbarkeit im Brandfall verfehlt wird.",
          "§ 26 – Baustoffklassen (nichtbrennbar, schwerentflammbar, normalentflammbar); leichtentflammbare Baustoffe grundsätzlich unzulässig.",
          "§ 36 Abs. 6 – Spezialnorm für Bekleidungen, Putze, Unterdecken, Dämmstoffe und Fußbodenbeläge im notwendigen Flur.",
          "§§ 40, 41 – Leitungen in Fluren nur unter engen Voraussetzungen; Lüftungsleitungen aus nichtbrennbaren Baustoffen (Regelfall).",
          "SBauVO NRW – bewegliche Brandlast wird dort ausdrücklich adressiert, wo erhöhtes Risiko und Betriebsverantwortung bestehen.",
        ],
      },
      {
        id: "gebunden",
        title: "Gebundene Brandlast – § 36 Abs. 6 BauO NRW",
        paragraphs: [
          "In notwendigen Fluren sowie in offenen Gängen nach § 36 Abs. 5 müssen Bekleidungen, Putze, Unterdecken und Dämmstoffe aus nichtbrennbaren Baustoffen bestehen. Wände und Decken aus brennbaren Baustoffen brauchen eine Bekleidung aus nichtbrennbaren Baustoffen in ausreichender Dicke. Fußbodenbeläge müssen mindestens schwerentflammbar sein.",
          "Die Norm betrifft den fest eingebauten Flurkörper – Wände, Decke/Unterdecke, Boden – nicht bewegliche Einrichtungsgegenstände.",
          "§ 36 Abs. 2 knüpft die Breite an den größten zu erwartenden Verkehr, nicht an eine Brandlast-Tabelle. Abgestellte Gegenstände, die die nutzbare Breite verringern, werden nicht ausdrücklich verboten – das Schutzziel folgt aus Abs. 1.",
          "§ 36 Abs. 4 Satz 4: Öffnungen zu Lagerbereichen im Kellergeschoss müssen feuerhemmende, dicht und selbstschließende Abschlüsse haben. Das Gesetz behandelt Lager mit erhöhter Brandlast als gefährliche Nachbarn des Flurs – nicht Lagerung im Flur selbst.",
        ],
      },
      {
        id: "schnittstellen",
        title: "Abfall, Leitungen, Lager – Schnittstellen BauO",
        paragraphs: [
          "§ 44 BauO NRW: Feste Abfallstoffe dürfen innerhalb von Gebäuden vorübergehend aufbewahrt werden; in Gebäuden der GK 3 bis 5 nur in dafür bestimmten Räumen mit Trennwänden und Decken wie tragende Wände, feuerhemmenden Abschlüssen, Entleerung vom Freien und ständiger Lüftung. Abfall = bewegliche Brandlast – das Gesetz verlangt eigene, abgeschottete Räume, nicht die Aufbewahrung in notwendigen Fluren.",
          "§ 40 Abs. 2: Leitungsanlagen in notwendigen Fluren nur zulässig, wenn Nutzung als Rettungsweg im Brandfall ausreichend lang möglich ist.",
          "§ 41 Abs. 2: Lüftungsleitungen sowie Bekleidungen und Dämmstoffe aus nichtbrennbaren Baustoffen (Regelfall).",
          "§ 49 BauO NRW („erhöhte Brandlast“ für Löschwasser) und § 65 SBauVO („Brandlasten freigehalten“ auf Ladenstraßen) haben keinen Bezug zu notwendigen Fluren allgemein.",
        ],
      },
      {
        id: "beweglich-bauo",
        title: "Bewegliche Gegenstände – was die BauO nicht sagt",
        list: [
          "Kein allgemeines Verbot, Gegenstände in notwendigen Fluren abzustellen",
          "Kein Verbot von Mülltonnen, Fahrrädern, Möbeln oder Lagerung im Flur im Wortlaut",
          "Kein Begriff „Hindernis“ in der BauO für notwendige Flure",
          "Keine Legaldefinition „Brandlast“ oder Brandlastdichte (MJ/m²) für Flure",
          "Kein Katalog brennbarer Gegenstände, die im Flur stehen dürfen oder nicht",
        ],
        paragraphs: [
          "Für normale Gebäude ohne SBauVO-Betriebspflichten regelt das Landesrecht die bewegliche Brandlast in notwendigen Fluren nicht ausdrücklich. Das funktionale Schutzziel aus § 36 Abs. 1 bleibt – Hausordnung und Arbeitsschutz sind separate Ebenen.",
        ],
      },
      {
        id: "sbauvo",
        title: "SBauVO NRW – bewegliche Brandlast im Betrieb",
        table: {
          caption: "Sonderbauten – gebundene und bewegliche Brandlast im Flur",
          headers: ["Sonderbau", "Gebunden (Baustoffe)", "Beweglich / Freihalten", "Norm"],
          rows: [
            [
              "Allgemein (nur BauO)",
              "§ 36 Abs. 6: nichtbrennbar / schwerentflammbar",
              "Keine ausdrückliche Regel zu Gegenständen",
              "BauO NRW",
            ],
            [
              "Verkaufsstätte",
              "§ 72: Flurwände ggf. feuerbeständig",
              "Keine Dekorationen, keine abgestellten Gegenstände in notwendigen Fluren",
              "§ 83 SBauVO",
            ],
            [
              "Beherbergung",
              "§ 52: Sonderregel Fußbodendämmung",
              "Rettungswege frei von Hindernissen",
              "§ 57 SBauVO",
            ],
            [
              "Versammlungsstätte",
              "§ 5: nichtbrennbare Flur-Bekleidungen; Boden mindestens schwerentflammbar",
              "Frei zu haltende Gänge (§ 6); Ausschmückungen nur nichtbrennbar, fest angebracht (§ 33)",
              "§§ 5, 6, 33 SBauVO",
            ],
            [
              "Hochhaus",
              "§ 97, § 100: raumabschließende Bauteile nichtbrennbar",
              "Keine Empfangsbereiche im Flur (§ 100 Abs. 5); Rettungswege ständig frei (§ 116)",
              "§§ 100, 116 SBauVO",
            ],
            [
              "Garage",
              "BauO/SBauVO-Bauteilanforderungen",
              "Keine Kraftfahrzeuge in Fluren",
              "§ 140 SBauVO",
            ],
          ],
        },
        paragraphs: [
          "§ 83 SBauVO NRW (Verkaufsstätten) ist die einzige ausdrückliche Flur-Regel zur beweglichen Brandlast: weder Dekorationen noch abgestellte Gegenstände in notwendigen Fluren, Treppenraumerweiterungen und notwendigen Treppenräumen. Verstoß kann ordnungswidrig sein (§ 91 SBauVO i. V. m. § 86 Abs. 1 Nr. 20 BauO NRW).",
          "§ 57 SBauVO: Rettungswege frei von Hindernissen – notwendige Flure sind Teil der Rettungswege. § 116 SBauVO (Hochhaus): Rettungswege ständig frei; in Vorräumen und notwendigen Treppenräumen keine abgestellten Gegenstände – Abs. 1 erfasst Flure als Rettungsweg-Teil.",
          "§ 33 SBauVO: Ausschmückungen in notwendigen Fluren nur aus nichtbrennbarem Material, fest angebracht. § 34: brennbares Material nur in Magazinen. § 140 SBauVO: Kraftfahrzeuge in Fluren und Kellergängen verboten – gilt für Flure allgemein, nicht nur notwendige.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung zu verwandten Themen",
        table: {
          caption: "Was Brandlast im Flur nicht ist",
          headers: ["Thema", "Abgrenzung"],
          rows: [
            [
              "Flurwände feuerhemmend (§ 36 Abs. 4)",
              "Schutz vor Brand aus angrenzenden Räumen – nicht vor Brandlast im Flur",
            ],
            [
              "Räume mit Brand-/Explosionsgefahr (§ 29 BauO)",
              "Trennwand-Pflicht; notwendige Flure ausgenommen – keine Flur-Brandlast-Regel",
            ],
            [
              "Ladenstraßen § 65 SBauVO",
              "„Brandlasten freigehalten“ nur für Ladenstraßen in Verkaufsstätten",
            ],
            [
              "Arbeitsschutz / Hausordnung",
              "Können Flure freihalten – nicht Gegenstand BauO/SBauVO-Wortlaut",
            ],
          ],
        },
        paragraphs: [
          "Räume mit erhöhter Brandgefahr: [§ 29 BauO NRW](/ratgeber/raeume-brand-explosionsgefahr-bauo-nrw). Verkaufsstätten: [Rettungswege SBauVO](/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw).",
        ],
      },
      {
        id: "nicht-im-gesetz",
        title: "Was das Gesetz nicht regelt",
        paragraphs: [],
        list: [
          "Brandlastberechnung (MJ/m²) oder maximal zulässige Brandlast im Flur",
          "Allgemeines Verbot: Mülltonnen, Fahrräder, Kinderwagen, Pflanzen, Möbel",
          "Pflicht zur regelmäßigen Flurkontrolle auf Brandlast (außer Sonderbau-Betriebsvorschriften)",
          "Technische Umsetzung „nichtbrennbar“ / „schwerentflammbar“ (DIN, VV TB)",
          "VV TB NRW, DIN-Normen und übliche Verwaltungspraxis",
        ],
      },
      {
        id: "matrix",
        title: "Anforderungsmatrix",
        paragraphs: [],
        table: {
          caption: "Brandlast-Typen in notwendigen Fluren – gesetzliche Pflichten",
          headers: ["Nr.", "Brandlast-Typ", "Pflicht", "Norm", "Gilt für"],
          rows: [
            ["1", "Gebunden: Bekleidungen, Putze, Dämmstoffe", "Nichtbrennbar", "§ 36 Abs. 6 Nr. 1 BauO", "Alle notwendigen Flure"],
            [
              "2",
              "Gebunden: Wände/Decken aus brennbaren Baustoffen",
              "Brandschutzbekleidung nichtbrennbar, ausreichende Dicke",
              "§ 36 Abs. 6 Nr. 2 BauO",
              "Alle notwendigen Flure",
            ],
            ["3", "Gebunden: Fußbodenbeläge", "Mindestens schwerentflammbar", "§ 36 Abs. 6 Nr. 3 BauO", "Alle notwendigen Flure"],
            [
              "4",
              "Gebunden: Lüftungsleitungen in Flurwänden",
              "Nichtbrennbar (Regelfall)",
              "§ 41 Abs. 2 BauO",
              "Wenn Leitungen zulässig (§ 40 Abs. 2)",
            ],
            ["5", "Beweglich: Abfall", "Nur in abgeschotteten Nebenräumen (GK 3–5)", "§ 44 BauO", "Nicht Flur als Lagerort"],
            [
              "6",
              "Beweglich: Gegenstände/Dekorationen",
              "Verbot abzustellen / keine Dekorationen",
              "§ 83 SBauVO",
              "Verkaufsstätten – notwendige Flure",
            ],
            ["7", "Beweglich: Hindernisse", "Rettungswege frei von Hindernissen", "§ 57 SBauVO", "Beherbergungsstätten"],
            [
              "8",
              "Beweglich: Ausschmückungen",
              "Nur nichtbrennbar, fest angebracht",
              "§ 33 SBauVO",
              "Versammlungsstätten",
            ],
            ["9", "Beweglich: Kraftfahrzeuge", "Abstellen in Fluren verboten", "§ 140 SBauVO", "Garagenrecht"],
            [
              "10",
              "Fest: Empfangsbereiche",
              "In notwendigen Fluren unzulässig (Regelfall)",
              "§ 100 Abs. 5 SBauVO",
              "Hochhäuser",
            ],
          ],
        },
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Brandlasten im notwendigen Flur – Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            ["1", "Ist der Flur ein notwendiger Flur (Rettungsweg)?", "§ 36 Abs. 1; § 33", "Nein → BauO-Fluranforderungen entfallen"],
            [
              "2",
              "Welche Baustoffe sind an Wänden/Decke/Boden fest verbaut?",
              "§ 36 Abs. 6; § 26",
              "Nichtbrennbar bzw. schwerentflammbar (Fußboden) prüfen",
            ],
            [
              "3",
              "Leitungs-/Lüftungsdurchführungen in Flurwänden?",
              "§§ 40 Abs. 2, 41 Abs. 2",
              "Zulässigkeit und nichtbrennbare Leitungen prüfen",
            ],
            [
              "4",
              "Abfallbehälter oder Lagergut im Flur?",
              "§ 44 BauO; § 36 Abs. 1",
              "Abfall nur in zulässigen Nebenräumen; Flur-Lagerung widerspricht Schutzziel",
            ],
            [
              "5",
              "Verkaufsstätte – Dekorationen oder Waren im Flur?",
              "§ 83 SBauVO",
              "Unzulässig – Betriebsverstoß",
            ],
            ["6", "Beherbergung – Rettungswege behindert?", "§ 57 Abs. 1 SBauVO", "Hindernisse entfernen"],
            [
              "7",
              "Versammlungsstätte – Ausschmückungen im Flur?",
              "§ 33 SBauVO",
              "Nur nichtbrennbar und fest angebracht",
            ],
            [
              "8",
              "Hochhaus – Empfang/Abstellungen im Flur?",
              "§ 100 Abs. 5; § 116 SBauVO",
              "Empfangsbereich regelmäßig unzulässig; Rettungswege freihalten",
            ],
            [
              "9",
              "Öffnung des Flurs zu Keller-Lagerbereich?",
              "§ 36 Abs. 4 Satz 4",
              "Feuerhemmende, dicht- und selbstschließende Abschlüsse",
            ],
            [
              "10",
              "Normales Büro-/Wohngebäude – Fahrräder/Möbel im Hausflur?",
              "—",
              "Keine ausdrückliche BauO/SBauVO-Regel; nur § 36 Abs. 1 Schutzziel",
            ],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst nur BauO NRW und SBauVO NRW zusammen – ohne VV TB, DIN-Normen, Brandlastberechnungen oder Hausordnungen. Technische Umsetzung der Baustoffklassen ergibt sich aus den Technischen Baubestimmungen, nicht aus dem Gesetzestext.",
          "Flurwände, Rauchabschnitte und Türen: [Wände notwendiger Flure](/ratgeber/waende-notwendige-flure-bauo-nrw). Rettungsweg-Grundlagen: [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/leitungsanlagen-bauo-sbauvo-nrw", label: "Leitungsanlagen Gesetz" },
      { href: "/ratgeber/notwendige-treppen-treppenraeume-bauo-sbauvo-nrw", label: "Treppenraum" },
      { href: "/ratgeber/waende-notwendige-flure-bauo-nrw", label: "Wände notwendiger Flure" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/tuerarten-brandschutz-bauo-nrw", label: "Brandschutztüren" },
      { href: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw", label: "Verkaufsstätten" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätten" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus" },
      { href: "/ratgeber/raeume-brand-explosionsgefahr-bauo-nrw", label: "Brandgefahr-Räume § 29" },
    ],
    faq: [
      {
        question: "Verbietet die BauO NRW Mülltonnen im Flur?",
        answer:
          "Nicht ausdrücklich im Wortlaut. § 44 BauO verlangt Abfall in GK 3–5 in abgeschotteten Nebenräumen – nicht im Flur. Für bewegliche Gegenstände gibt es in normalen Gebäuden keine allgemeine BauO-Regel; das Schutzziel folgt aus § 36 Abs. 1.",
      },
      {
        question: "Dürfen Fahrräder im notwendigen Flur stehen?",
        answer:
          "Baurechtlich in NRW ohne Sonderbau-Einschlägigkeit: keine ausdrückliche Verbotsnorm in BauO/SBauVO. In Verkaufsstätten (§ 83 SBauVO), Beherbergungen (§ 57), Hochhäusern (§ 116) und Garagen (§ 140) gelten strengere Betriebsvorschriften.",
      },
      {
        question: "Was regelt § 36 Abs. 6 zur Brandlast?",
        answer:
          "Gebundene Brandlast: Bekleidungen, Putze, Unterdecken und Dämmstoffe nichtbrennbar; brennbare Wände/Decken mit nichtbrennbarer Bekleidung in ausreichender Dicke; Fußbodenbeläge mindestens schwerentflammbar.",
      },
      {
        question: "Gibt es eine Brandlastgrenze in MJ/m² für Flure?",
        answer:
          "Nein. Das Gesetz kennt für notwendige Flure weder „Brandlast“ als Definition noch Brandlastdichten – nur Baustoffklassen und funktionales Schutzziel.",
      },
      {
        question: "Wann ist Abstellen im Flur gesetzlich verboten?",
        answer:
          "Ausdrücklich bei Verkaufsstätten in notwendigen Fluren (§ 83 SBauVO: keine Dekorationen, keine Gegenstände). Sonst bei Sonderbauten über Hindernis- und Freihaltungsvorschriften (§ 57, § 116) oder Kraftfahrzeug-Verbot in Garagen-Fluren (§ 140).",
      },
      {
        question: "Schützt die feuerhemmende Flurwand vor Kartons im Flur?",
        answer:
          "Nein. § 36 Abs. 4 schützt den Flur vor Brand aus angrenzenden Räumen. Brandlast im Flur selbst ist ein separates Thema – gebunden über § 36 Abs. 6, beweglich über SBauVO-Betrieb oder § 36 Abs. 1 Schutzziel.",
      },
      {
        question: "Was ist der Unterschied zu Ladenstraßen „Brandlasten freihalten“?",
        answer:
          "§ 65 SBauVO nutzt den Begriff nur für Ladenstraßen in Verkaufsstätten – ein eigenes Raumkonzept, nicht pauschal für jeden notwendigen Flur.",
      },
    ],
  },
];
