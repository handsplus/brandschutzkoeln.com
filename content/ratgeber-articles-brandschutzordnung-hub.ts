/**
 * 05.09.2026 – Brandschutzordnung Hub: Pflicht + DIN 14096 Teil A/B/C.
 * Quelle: Ausarbeitungen/Brandschutzordnung_DIN_14096_NRW.html
 * Ergänzt (nicht ersetzt): brandschutzordnung-pflicht-sbauvo-nrw
 * Stil: ganze Sätze.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_BRANDSCHUTZORDNUNG_HUB: RatgeberArticle[] = [
  {
    slug: "brandschutzordnung-din-14096-nrw",
    title: "Brandschutzordnung: Pflicht, Teil A/B/C und was DIN 14096 wirklich leistet",
    excerpt:
      "Eine Brandschutzordnung regelt Verhalten und Organisation im Brandfall. Dieser Ratgeber erklärt, wann die SBauVO sie verlangt, was Teil A, B und C nach DIN 14096 bedeuten – und was Gesetz und Norm jeweils leisten.",
    metaTitle: "Brandschutzordnung NRW: DIN 14096 Teil A/B/C | H&S+",
    metaDescription:
      "Brandschutzordnung NRW: Pflicht nach SBauVO, Teil A/B/C nach DIN 14096, Aushang und Unterweisung. Verständlich für Betriebe in Köln und NRW.",
    keywords: [
      "Brandschutzordnung",
      "Brandschutzordnung DIN 14096",
      "Teil A B C Brandschutzordnung",
      "BSO Pflicht NRW",
      "Brandschutzordnung erstellen",
      "Brandschutzordnung Köln",
    ],
    sections: [
      {
        id: "kurz",
        title: "Was ist eine Brandschutzordnung?",
        paragraphs: [
          "Die Brandschutzordnung (BSO) regelt den organisatorischen Brandschutz im Betrieb: wer was tut, wie Alarmierung und Räumung ablaufen und welche Verhaltensregeln für Personen im Gebäude gelten. Sie ist eine Betriebsvorschrift – kein baulicher Nachweis und keine technische Anlagenbeschreibung.",
          "Die BauO NRW schreibt keine Brandschutzordnung für alle Gebäude vor. Die konkreten Pflichtfälle stehen in der SBauVO. Für große Sonderbauten kann die BSO zudem schon im Brandschutzkonzept der Genehmigung adressiert werden.",
          "H&S+ erstellt Brandschutzordnungen nach DIN 14096 mit Teil A, B und C für Objekte in Köln und NRW. Leistung: [Brandschutzordnung Köln](/brandschutzordnung-koeln).",
        ],
      },
      {
        id: "pflicht",
        title: "Wann ist die BSO gesetzlich Pflicht?",
        paragraphs: [
          "Vier Fälle der SBauVO NRW steuern die Pflicht: Versammlungsstätten (§ 42), Beherbergung über 60 Gastbetten (§ 57 Abs. 3), Verkaufsstätten über 2.000 m² Verkaufsfläche (§ 86) und Hochhäuser über 22 m (§ 117). Andere Nutzungen können aus anderen Gründen eine BSO brauchen – das ist dann keine automatische Pflicht aus genau diesen Paragraphen.",
          "Bei Beherbergung mit 13 bis 60 Betten verlangt § 57 Abs. 2 keinen BSO-Aufsatz nach Abs. 3, aber Rettungswegplan und Brandhinweise in jedem Beherbergungsraum. Das wird in der Praxis oft verwechselt.",
          "Die detaillierte Schwellen- und Pflichtübersicht bleibt im Ratgeber [Brandschutzordnung Pflicht](/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw).",
        ],
        table: {
          caption: "BSO-Pflicht nach Nutzung (Überblick)",
          headers: ["Nutzung", "BSO-Pflicht?", "Schwelle (Kern)", "Norm"],
          rows: [
            ["Versammlungsstätte", "Ja", "Erfasste VS (u. a. > 200 Besucher)", "§ 42 SBauVO"],
            ["Beherbergung", "Ja", "> 60 Gastbetten", "§ 57 Abs. 3"],
            ["Beherbergung 13–60 Betten", "Nein (diese Pflicht)", "Rettungswegplan im Zimmer", "§ 57 Abs. 2"],
            ["Verkaufsstätte", "Ja", "> 2.000 m² Verkaufsfläche", "§ 86 Abs. 1"],
            ["Hochhaus", "Ja", "Höhe > 22 m", "§ 117 Abs. 1"],
          ],
        },
      },
      {
        id: "din",
        title: "Teil A, B und C nach DIN 14096",
        paragraphs: [
          "Die DIN 14096 strukturiert die Brandschutzordnung in drei Teile mit unterschiedlichen Adressaten. Das erleichtert Aushang, Unterweisung und Organisation. Die SBauVO verlangt die BSO und nennt Mindestthemen; sie schreibt die DIN-Gliederung nicht wörtlich vor. In der Praxis ist DIN 14096 dennoch der übliche und von Behörden gut verständliche Aufbau.",
          "Teil A richtet sich an alle Personen und hängt als Aushang aus – oft als DIN-Vorlage mit Piktogrammen. Teil B richtet sich an Beschäftigte und regelt Brandverhütung, Alarmierung, Löschmittel und Räumung. Teil C richtet sich an Personen mit besonderen Aufgaben und beschreibt Organisation, Verantwortlichkeiten und Alarmplan.",
          "Nach Umbau, Nutzungsänderung oder geänderter Organisation muss die BSO zum Ist-Zustand passen. Veraltete Aushänge sind ein häufiger Mangel bei Begehungen.",
        ],
        table: {
          caption: "DIN 14096 – drei Teile",
          headers: ["Teil", "Adressat", "Inhalt (Kern)", "Form"],
          rows: [
            [
              "Teil A",
              "Alle Personen",
              "Verhalten im Brandfall",
              "Aushang",
            ],
            [
              "Teil B",
              "Beschäftigte",
              "Brandverhütung, Alarm, Räumung",
              "Regelwerk zur Unterweisung",
            ],
            [
              "Teil C",
              "Personen mit besonderen Aufgaben",
              "Organisation und Alarmplan",
              "Organisatorischer Teil",
            ],
          ],
        },
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung zu Konzept, Feuerwehrplan und Fluchtplan",
        paragraphs: [
          "Viele Auftraggeber bestellen „Brandschutzordnung“ und meinen manchmal Feuerwehrpläne oder Fluchtpläne – oder umgekehrt. Für Angebot und Abnahme muss klar sein, welches Dokument gemeint ist.",
          "Die Brandschutzordnung regelt Verhalten und Organisation. Das Brandschutzkonzept ist die Gesamtbewertung in der Genehmigung. Der Feuerwehrplan dient dem Einsatz der Feuerwehr. Der Flucht- und Rettungsplan zeigt Nutzern Wege und Orientierung.",
        ],
        table: {
          caption: "Vier Dokumente – unterschiedliche Rolle",
          headers: ["Dokument", "Für wen?", "Zweck"],
          rows: [
            ["Brandschutzordnung", "Betrieb / Beschäftigte", "Verhalten und Organisation"],
            ["Brandschutzkonzept", "Genehmigung", "Gesamtbewertung baulich und betrieblich"],
            ["Feuerwehrplan", "Feuerwehr", "Einsatzwege und Anlagen"],
            ["Flucht- und Rettungsplan", "Nutzer", "Selbstrettung und Orientierung"],
          ],
        },
      },
      {
        id: "verfahren",
        title: "Einvernehmen, Aushang und Unterweisung",
        paragraphs: [
          "Wo die SBauVO eine BSO verlangt, ist sie typischerweise im Einvernehmen mit der Brandschutzdienststelle aufzustellen. Bei Versammlungsstätten und Hochhäusern ist die Bekanntmachung durch Aushang ausdrücklich genannt.",
          "Das Betriebspersonal ist in den erfassten Fällen bei Arbeitsbeginn und danach mindestens einmal jährlich zu unterweisen – unter anderem über die Brandschutzordnung. Über die Unterweisung ist eine Niederschrift zu fertigen.",
          "Eine BSO, die nur in der Schublade liegt, erfüllt weder den Aushang noch die Unterweisung. Teil A sichtbar machen, Teil B und C unterweisen, Änderungen fortschreiben.",
        ],
      },
      {
        id: "grenzfall",
        title: "Grenzfall und typische Mängel",
        paragraphs: [
          "Ein typisches Ja-Beispiel: Hotel mit mehr als 60 Gastbetten – dann gehört eine Brandschutzordnung im Einvernehmen mit der Brandschutzdienststelle dazu, parallel oft Feuerwehrpläne. Ein typisches Nein-Beispiel für genau diese SBauVO-BSO-Pflicht: kleines Büro ohne Sonderbau-Tatbestand. Dort kann eine BSO nach DIN 14096 trotzdem sinnvoll sein – sie ist dann aber keine Pflicht aus §§ 42, 57, 86 oder 117.",
          "Häufige Mängel sind veraltete Aushänge nach Umbau, nur Teil A ohne Teil B und C, fehlendes Einvernehmen, Unterweisung ohne Niederschrift und die Verwechslung mit Feuerwehrplan oder Fluchtplan.",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [
          "Vor Beauftragung und Fortschreibung helfen die folgenden Fragen, Pflicht und Umfang zu treffen.",
        ],
        table: {
          caption: "Vor der Brandschutzordnung",
          headers: ["Nr.", "Prüffrage", "Worauf achten?"],
          rows: [
            ["1", "Greift § 42, 57, 86 oder 117 SBauVO?", "Schwellen und Ausnahmen prüfen."],
            ["2", "Reicht eine freiwillige / arbeitsschutzseitige BSO?", "Auch ohne SBauVO-Pflicht oft sinnvoll."],
            ["3", "Sind Teil A, B und C vorhanden und abgestimmt?", "DIN 14096 als Struktur nutzen."],
            ["4", "Ist Teil A ausgehängt?", "Sichtbar, aktuell, oft neben Fluchtplänen."],
            ["5", "Einvernehmen mit der Brandschutzdienststelle?", "Wo gesetzlich verlangt."],
            ["6", "Unterweisung dokumentiert?", "Beginn + jährlich; Niederschrift."],
            ["7", "Passt die BSO zum Ist-Zustand?", "Nach Umbau fortschreiben."],
            ["8", "Feuerwehrplan und Fluchtplan getrennt geklärt?", "Nicht vermischen."],
          ],
        },
      },
      {
        id: "grenzen",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Beitrag bündelt Pflicht, DIN-14096-Struktur und Abgrenzung zu verwandten Dokumenten. Vertiefung der reinen Pflichtfrage: [Brandschutzordnung Pflicht](/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw). Er ersetzt weder die Abstimmung mit der Brandschutzdienststelle noch die Einzelfallprüfung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzordnung-pflicht-sbauvo-nrw", label: "BSO-Pflicht (SBauVO)" },
      { href: "/ratgeber/flucht-und-rettungsplan-din-14095-nrw", label: "Flucht- und Rettungsplan" },
      { href: "/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw", label: "Feuerwehrpläne" },
      { href: "/ratgeber/brandschutzkonzept-bauo-sbauvo-nrw", label: "Brandschutzkonzept" },
      { href: "/ratgeber/brandschutzbeauftragter-pflicht-sbauvo-nrw", label: "Brandschutzbeauftragter" },
      { href: "/brandschutzordnung-koeln", label: "Leistung Brandschutzordnung" },
      { href: "/kontakt", label: "Kontakt / Anfrage" },
    ],
    faq: [
      {
        question: "Brauche ich immer eine Brandschutzordnung?",
        answer:
          "Nein. Die gesetzliche Pflicht knüpft an bestimmte Sonderbauten der SBauVO. Ohne diese Tatbestände kann eine BSO trotzdem sinnvoll sein – dann als betriebliche und arbeitsschutzseitige Organisation.",
      },
      {
        question: "Was bedeuten Teil A, B und C?",
        answer:
          "Nach DIN 14096: Teil A ist der Aushang für alle Personen, Teil B richtet sich an Beschäftigte, Teil C an Personen mit besonderen Brandschutzaufgaben.",
      },
      {
        question: "Ersetzt die DIN die gesetzliche Pflicht?",
        answer:
          "Nein. Die DIN strukturiert den Inhalt. Ob eine BSO vorgeschrieben ist, entscheidet die SBauVO beziehungsweise eine behördliche Auflage oder das Genehmigungskonzept.",
      },
      {
        question: "Was ist der Unterschied zum Flucht- und Rettungsplan?",
        answer:
          "Der Fluchtplan zeigt Wege und Orientierung. Die Brandschutzordnung regelt Verhalten und Organisation. Beides gehört oft zusammen, ist aber nicht dasselbe.",
      },
      {
        question: "Erstellt H&S+ Brandschutzordnungen?",
        answer:
          "Ja. H&S+ erstellt und fortschreibt Brandschutzordnungen nach DIN 14096 (Teil A, B und C) für Objekte in Köln und NRW – abgestimmt auf SBauVO, Brandschutzdienststelle und Betrieb.",
      },
    ],
  },
];
