/**
 * Zweiter Rettungsweg über Dachfenster – BauO NRW (Ausarbeitung Juni 2026).
 * Quelle: Zweiter_Rettungsweg_Dachfenster_BauO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_ZWEITER_RETTUNGSWEG_DACHFENSTER: RatgeberArticle[] = [
  {
    slug: "zweiter-rettungsweg-dachfenster-bauo-nrw",
    title: "Zweiter Rettungsweg über Dachfenster und Feuerwehr",
    excerpt:
      "Ein Dachfenster kann den zweiten Rettungsweg nur erfüllen, wenn § 33 Abs. 2 Satz 2, § 37 und die grundstücksbezogenen Pflichten der §§ 4 und 5 BauO NRW kumulativ erfüllt sind. Normkette, Anforderungstabelle und Prüfkatalog.",
    metaTitle: "Dachfenster als 2. Rettungsweg? § 33 BauO NRW | H&S+",
    metaDescription:
      "Zweiter Rettungsweg Dachfenster BauO NRW: § 33 Abs. 2, § 37 Maße und Lage, § 5 Feuerwehrzufahrt, Hubrettungsfahrzeug ab 8 m Brüstung – gesetzliche Prüfpunkte.",
    keywords: [
      "Zweiter Rettungsweg BauO NRW",
      "Rettungsweg Dachfenster Feuerwehr",
      "§ 33 BauO NRW Rettungsweg",
      "§ 37 BauO NRW Fenster",
      "Dachfenster Rettungsweg",
      "Anleiterbarkeit Feuerwehr",
    ],
    sections: [
      {
        id: "grundlage",
        title: "Normkette: vom Rettungsweg zum Dachfenster",
        paragraphs: [
          "Das Gesetz kennt den Begriff „Dachfenster“ nicht. Maßgeblich sind Fenster, die als Rettungswege nach § 33 Abs. 2 Satz 2 BauO NRW dienen (§ 37 BauO NRW). Ein Dachfenster in einem Dachgeschoss-Aufenthaltsraum kann diese Funktion übernehmen, wenn alle gesetzlichen Maße, Lagen und Erreichbarkeitsvoraussetzungen erfüllt sind.",
          "Für Nutzungseinheiten mit Aufenthaltsräumen gelten in jedem Geschoss mindestens zwei voneinander unabhängige Rettungswege ins Freie (§ 33 Abs. 1). Beide dürfen innerhalb des Geschosses über denselben notwendigen Flur führen.",
          "Liegt die Nutzungseinheit nicht zu ebener Erde, muss der erste Rettungsweg über eine notwendige Treppe führen (§ 33 Abs. 2 Satz 1). Der zweite Rettungsweg kann eine weitere notwendige Treppe oder eine mit Rettungsgeräten der Feuerwehr erreichbare Stelle der Nutzungseinheit sein (§ 33 Abs. 2 Satz 2).",
          "Der zweite Rettungsweg über Rettungsgeräte der Feuerwehr ist nur zulässig, wenn keine Bedenken wegen der Personenrettung bestehen (§ 33 Abs. 3). Grundlagen: [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw). Alternative ohne Feuerwehr-Anleitung: [Rettungsweg Innenhof](/ratgeber/zweiter-rettungsweg-innenhof-bauo-nrw).",
        ],
        list: [
          "§ 33 Abs. 1 – zwei voneinander unabhängige Rettungswege ins Freie",
          "§ 33 Abs. 2 Satz 1 – erster Rettungsweg über notwendige Treppe",
          "§ 33 Abs. 2 Satz 2 – zweiter Rettungsweg: Treppe oder Feuerwehr-erreichbare Stelle",
          "§ 33 Abs. 3 – Zulässigkeit nur ohne Bedenken wegen der Personenrettung",
          "§ 37 – Anforderungen an Fenster als Rettungsweg",
          "§ 33 Abs. 5 – ab 8 m Brüstung: Feuerwehr mit Hubrettungsfahrzeugen erforderlich",
          "§§ 4 Abs. 2, 5 – befahrbare Zufahrt, Feuerwehrzugang, Aufstellflächen",
        ],
      },
      {
        id: "fenster",
        title: "Anforderungen an das Fenster (§ 37 BauO NRW)",
        paragraphs: [
          "Alle Kriterien müssen kumulativ erfüllt sein. Spalte „Norm“ verweist auf die BauO NRW 2018.",
        ],
        table: {
          caption: "Dachfenster als Rettungsweg – gesetzliche Anforderungen",
          headers: ["Nr.", "Anforderung", "Gesetzlicher Wortlaut", "Norm"],
          rows: [
            [
              "1",
              "Funktionale Zuordnung",
              "Fenster, die als Rettungswege nach § 33 Abs. 2 Satz 2 dienen",
              "§ 37",
            ],
            [
              "2",
              "Lichtes Maß",
              "Im Lichten mindestens 0,90 m × 1,20 m",
              "§ 37",
            ],
            [
              "3",
              "Höhe über Fußboden",
              "Nicht höher als 1,20 m über der Fußbodenoberkante",
              "§ 37",
            ],
            [
              "4",
              "Lage in Dachschräge",
              "Unterkante oder davorliegender Auftritt horizontal max. 1 m von der Traufkante; Abstand kann mit Brandschutzdienststelle vergrößert werden",
              "§ 37",
            ],
            [
              "5",
              "Bemerkbarmachen",
              "Menschen müssen sich zu öffentlichen Verkehrsflächen oder Flächen für Einsatzkräfte der Gefahrenabwehr bemerkbar machen können",
              "§ 37",
            ],
            [
              "6",
              "Zulässigkeit Feuerwehr-Rettungsweg",
              "Nur zulässig, wenn keine Bedenken wegen der Personenrettung bestehen",
              "§ 33 Abs. 3",
            ],
            [
              "7",
              "Brüstung > 8 m",
              "Gebäude nur errichtbar, wenn Feuerwehr über erforderliche Rettungsgeräte wie Hubrettungsfahrzeuge verfügt",
              "§ 33 Abs. 5",
            ],
          ],
        },
      },
      {
        id: "grundstueck",
        title: "Grundstück und Feuerwehrzufahrt (§§ 4, 5 BauO NRW)",
        paragraphs: [
          "Der zweite Rettungsweg über ein Dachfenster setzt voraus, dass das Grundstück den Feuerwehreinsatz ermöglicht. Gesetzliche Systematik §§ 4–5 BauO: [Feuerwehrzufahrten und Bewegungsflächen](/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw). Aufstellfläche oft auf der öffentlichen Straße: [Aufstellfläche Hubrettung](/ratgeber/aufstell-bewegungsflaeche-strasse-hubrettung-bauo-nrw). Was Merkblätter nicht verlangen dürfen: [Feuerwehrzufahrt Runderlass 15.11.2024](/ratgeber/feuerwehrzufahrt-zugaenge-runderlass-bauo-nrw).",
        ],
        table: {
          caption: "Grundstückspflichten bei Rettungsweg über Feuerwehr",
          headers: ["Pflicht", "Gesetzlicher Wortlaut (Kern)", "Norm"],
          rows: [
            [
              "Befahrbare Zufahrt",
              "Grundstück an befahrbare öffentliche Verkehrsfläche oder befahrbare, öffentlich-rechtlich gesicherte Zufahrt (§ 4 Abs. 2)",
              "§ 4 Abs. 2",
            ],
            [
              "Feuerwehrzugang",
              "Geradliniger Zu- oder Durchgang, wenn zweiter Rettungsweg über Rettungsgeräte der Feuerwehr führt",
              "§ 5 Satz 1",
            ],
            [
              "Durchfahrt ab 8 m Brüstung",
              "Anstelle von Zu- oder Durchgang: Zu- oder Durchfahrt, wenn Brüstung > 8 m über Gelände",
              "§ 5 Satz 2",
            ],
            [
              "Hubrettungsfahrzeug-Flächen",
              "Aufstell- und Bewegungsflächen vorzusehen, wenn Hubrettungsfahrzeuge für Personenrettung erforderlich sind",
              "§ 5 Satz 3",
            ],
            [
              "Entfernung > 50 m",
              "Zufahrten oder Durchfahrten, wenn Gebäude ganz oder mit Teilen > 50 m von öffentlicher Verkehrsfläche entfernt",
              "§ 5 Satz 4",
            ],
            [
              "Öffentlich-rechtliche Sicherung",
              "Erforderliche Flächen außerhalb des Grundstücks müssen öffentlich-rechtlich gesichert sein",
              "§ 5 Satz 5",
            ],
            [
              "Befestigung und Freihaltung",
              "Zu- und Durchfahrten, Aufstell- und Bewegungsflächen befestigt, tragfähig, gekennzeichnet und ständig frei",
              "§ 5 Satz 6",
            ],
          ],
        },
      },
      {
        id: "dachraum",
        title: "Aufenthaltsraum im Dachgeschoss (§ 46 BauO NRW)",
        paragraphs: [
          "Führt der zweite Rettungsweg aus einem Aufenthaltsraum im Dachgeschoss, muss der Raum die Aufenthaltsraum-Definition erfüllen: lichte Raumhöhe mindestens 2,20 m über mindestens der Hälfte der Netto-Raumfläche (§ 46 Abs. 1 Satz 2). In Wohngebäuden der Gebäudeklassen 1 und 2 kann 2,30 m lichte Höhe gestattet werden (§ 46 Abs. 1 Satz 3).",
        ],
      },
      {
        id: "ausnahmen",
        title: "Wann kein zweiter Rettungsweg erforderlich ist",
        paragraphs: [
          "Nach § 33 Abs. 4 BauO NRW entfällt der zweite Rettungsweg – und damit auch die Pflicht eines zweiten Weges über ein Dachfenster – wenn die Rettung über einen Sicherheitstreppenraum möglich ist, in den Feuer und Rauch nicht eindringen können.",
          "Für zu ebener Erde liegende Räume entfällt der zweite Rettungsweg, wenn ein unmittelbarer Ausgang ins Freie von jeder Stelle des Raumes in höchstens 15 m Entfernung erreichbar ist (§ 33 Abs. 4 Satz 2).",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog für die Baugenehmigung",
        paragraphs: [
          "Checkliste nach gesetzlichen Prüfpunkten der BauO NRW – ohne technische Detailnormen.",
        ],
        table: {
          caption: "Prüfpunkte Dachfenster als zweiter Rettungsweg",
          headers: ["Nr.", "Prüffrage", "Rechtsgrundlage", "Nachweis"],
          rows: [
            ["1", "Zweiter Rettungsweg in jedem Geschoss mit Aufenthaltsräumen?", "§ 33 Abs. 1", "Flucht- und Rettungswegplan"],
            ["2", "Erster Rettungsweg über notwendige Treppe (wenn nicht zu ebener Erde)?", "§ 33 Abs. 2 Satz 1", "Grundriss, Treppenraum"],
            ["3", "Dachfenster als mit Rettungsgeräten der Feuerwehr erreichbare Stelle nachgewiesen?", "§ 33 Abs. 2 Satz 2", "Plan, Stellungnahme Brandschutzdienststelle"],
            ["4", "Keine Bedenken wegen der Personenrettung?", "§ 33 Abs. 3", "Stellungnahme Brandschutzdienststelle"],
            ["5", "Lichtes Fenstermaß mindestens 0,90 m × 1,20 m?", "§ 37", "Fensterdetail"],
            ["6", "Unterkante max. 1,20 m über Fußbodenoberkante?", "§ 37", "Schnitt Aufenthaltsraum"],
            ["7", "Bei Dachschräge: Unterkante/Auftritt max. 1 m von Traufkante (horizontal)?", "§ 37", "Dachschnitt; ggf. Abstimmung Brandschutzdienststelle"],
            ["8", "Bemerkbarmachen zu öffentlicher Verkehrsfläche oder Einsatzkräfte-Fläche?", "§ 37", "Lageplan"],
            ["9", "Brüstung ≤ 8 m über Gelände – oder Feuerwehr mit Hubrettungsfahrzeugen?", "§ 33 Abs. 5", "Höhenangaben, Stellungnahme"],
            ["10", "Feuerwehrzugang / -zufahrt auf dem Grundstück vorhanden und gesichert?", "§§ 4 Abs. 2, 5", "Lageplan, Flächenzeichnung"],
            ["11", "Aufstell- und Bewegungsflächen für Hubrettungsfahrzeuge?", "§ 5 Satz 3", "Feuerwehrplan / Stellungnahme"],
            ["12", "Zufahrten befestigt, tragfähig, gekennzeichnet, freigehalten?", "§ 5 Satz 6", "Hafenplan"],
          ],
        },
      },
      {
        id: "sonderbau",
        title: "Sonderbau Beherbergung (§ 49 SBauVO NRW)",
        paragraphs: [
          "Bei Beherbergungsstätten gelten ergänzend: In Beherbergungsstätten mit insgesamt nicht mehr als 60 Gastbetten genügt als zweiter Rettungsweg eine mit Rettungsgeräten der Feuerwehr erreichbare Stelle des Beherbergungsraumes – nicht jedoch, wenn in einem nicht zu ebener Erde liegenden Geschoss mehr als 30 Gastbetten vorhanden sind (§ 49 SBauVO NRW).",
          "Die Fensteranforderungen des § 37 BauO NRW bleiben maßgeblich, sofern der Rettungsweg über ein Fenster geführt wird.",
        ],
      },
      {
        id: "verfahren",
        title: "Nachweis im Genehmigungsverfahren",
        paragraphs: [
          "§ 33 Abs. 3 und § 37 BauO NRW setzen eine behördliche Prüfung voraus – insbesondere durch Brandschutzdienststelle und Bauaufsichtsbehörde. Wenn der zweite Weg über Rettungsgeräte begründet wird, gehört die schriftliche Stellungnahme der Brandschutzdienststelle zum Nachweis. Ablauf und Unterlagen: [Feuerwehr-Abstimmung vor dem Bauamt](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw).",
          "Innere Wohnungstreppe zum Spitzboden betrifft zusätzlich § 34 BauO NRW (verkehrssichere und benutzbare Anlagen) – getrennt von den Rettungswegen nach § 33.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst die gesetzlichen Vorschriften der BauO NRW und den SBauVO-Auszug zusammen – ohne VV TB NRW, DIN-Normen oder Feuerwehr-Übungswerte. Verbindlich sind Pläne, brandschutztechnischer Nachweis und Festlegung der Bauaufsicht.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/zweiter-rettungsweg-innenhof-bauo-nrw", label: "Rettungsweg Innenhof" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw", label: "Feuerwehr-Flächen § 5" },
      { href: "/ratgeber/aufstell-bewegungsflaeche-strasse-hubrettung-bauo-nrw", label: "Hubrettungs-Aufstellfläche" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr vor dem Bauamt" },
      { href: "/ratgeber/feuerwehrzufahrt-zugaenge-runderlass-bauo-nrw", label: "Feuerwehrzufahrt § 5" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
    ],
    faq: [
      {
        question: "Ersetzt ein Dachfenster die zweite Treppe?",
        answer:
          "Nach § 33 Abs. 2 Satz 2 BauO NRW kann der zweite Rettungsweg eine weitere notwendige Treppe oder eine mit Rettungsgeräten der Feuerwehr erreichbare Stelle sein. § 33 Abs. 3: nur zulässig, wenn keine Bedenken wegen der Personenrettung bestehen.",
      },
      {
        question: "Welche Maße muss das Fenster haben?",
        answer:
          "§ 37 BauO NRW: im Lichten mindestens 0,90 m × 1,20 m, Unterkante max. 1,20 m über Fußbodenoberkante. In Dachschrägen: Unterkante oder Auftritt horizontal max. 1 m von der Traufkante.",
      },
      {
        question: "Ab welcher Brüstungshöhe gilt Hubrettung?",
        answer:
          "§ 33 Abs. 5 BauO NRW: Liegt die Oberkante der Brüstung von zum Anleitern bestimmten Fenstern mehr als 8 m über Gelände, darf das Gebäude nur errichtet werden, wenn die Feuerwehr über Hubrettungsfahrzeuge verfügt. § 5 Satz 3: Aufstell- und Bewegungsflächen vorzusehen.",
      },
      {
        question: "Wann entfällt der zweite Rettungsweg?",
        answer:
          "§ 33 Abs. 4 BauO NRW: bei Sicherheitstreppenraum oder bei zu ebener Erde liegenden Räumen mit unmittelbarem Ausgang ins Freie in höchstens 15 m von jeder Stelle.",
      },
      {
        question: "Was ist mit Beherbergungsstätten?",
        answer:
          "§ 49 SBauVO NRW: bis 60 Gastbetten kann eine Feuerwehr-erreichbare Stelle als zweiter Rettungsweg genügen – nicht bei mehr als 30 Gastbetten in einem nicht zu ebener Erde liegenden Geschoss. § 37 bleibt für Fenster maßgeblich.",
      },
      {
        question: "Brauche ich eine Feuerwehr-Stellungnahme?",
        answer:
          "§ 33 Abs. 3 verlangt die Prüfung, ob Bedenken wegen der Personenrettung bestehen – im Verfahren durch Brandschutzdienststelle/Bauaufsicht. Die Stellungnahme der Brandschutzdienststelle gehört zum Nachweis im Antrag.",
      },
    ],
  },
];
