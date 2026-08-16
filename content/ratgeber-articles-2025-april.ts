/**
 * April 2025 – 8 Artikel aus Quellen 11_Brandschutz-NRW.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_APRIL: RatgeberArticle[] = [
  {
    slug: "industriebau-lagerhalle-indbaur-nrw",
    title: "IndBauR NRW: Lagerhallen, Brandabschnitte und Brandbekämpfungsabschnitte",
    excerpt:
      "Logistik- und Produktionshallen folgen nicht nur der Gebäudeklasse. Die Industriebaurichtlinie NRW regelt Brandabschnittsgrößen, DIN 18230-1 und Sonderanforderungen für Lagergebäude.",
    metaTitle: "IndBauR NRW: Lagerhalle Brandschutz | H&S+",
    metaDescription:
      "Industriebaurichtlinie NRW: Brandabschnitt, Brandbekämpfungsabschnitt, Lagergebäude, DIN 18230-1, 60.000 m² – Orientierung für Planer und Betreiber in NRW.",
    keywords: [
      "IndBauR NRW",
      "Industriebaurichtlinie Brandschutz",
      "Lagerhalle Brandabschnitt",
      "Brandbekämpfungsabschnitt",
      "DIN 18230-1",
      "Industriebau Brandschutz NRW",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Warum die BauO allein für Hallen nicht reicht",
        paragraphs: [
          "Große Lager- und Produktionshallen sind oft formal Gebäudeklasse 1 bis 3 – mit vergleichsweise moderaten Anforderungen an tragende Bauteile. Trotzdem kann die Bauaufsicht strengere Lösungen verlangen: Industriebauten mit hoher Brandlast, geringer Personenanzahl und schwieriger Brandbekämpfung fallen unter die Richtlinie über den baulichen Brandschutz im Industriebau (IndBauR NRW, MBl. NRW 2015).",
          "Die IndBauR ist Technische Baubestimmung nach § 3 Abs. 3 BauO NRW und setzt Mindestanforderungen an Feuerwiderstand, Brandabschnittsgrößen, Brandbekämpfungsabschnitte und Rettungswege. Sie gilt für Industriebauten ohne Aufenthaltsräume in der in der Richtlinie beschriebenen Nutzung – typisch Logistik, Fertigung, Werkstätten mit Lageranteil.",
          "Grenzfall ja: Neue Halle 12.000 m² mit Regalhochlast, IndBauR-Nachweis mit Brandbekämpfungsabschnitten und Entrauchungskonzept nach DIN 18230-1. Grenzfall nein: „Nur GK 3, reicht schon“ – ohne IndBauR-Prüfung bei klarer Industrienutzung und hoher Brandlast.",
        ],
      },
      {
        id: "begriffe",
        title: "Brandabschnitt vs. Brandbekämpfungsabschnitt",
        paragraphs: [
          "In der IndBauR werden zwei Ebenen unterschieden:",
        ],
        list: [
          "Brandabschnitt – bauliche Trennung zur Begrenzung der Brandübertragung (analog zur BauO-Logik, mit indBauR-spezifischen Größen)",
          "Brandbekämpfungsabschnitt – Bereich, in dem die Feuerwehr einen Brand unter den dortigen Bedingungen bekämpfen kann; Grundfläche und Höhe sind begrenzt",
          "Brandsicherheitsklassen SK 1 bis SK 3 – abhängig von Geschossigkeit und Bedeutung tragender Bauteile für die Standsicherheit (DIN 18230-1)",
        ],
      },
      {
        id: "verfahren",
        title: "Zwei Nachweiswege",
        paragraphs: [
          "Verfahren ohne Brandlastermittlung: vereinfachte Tabellen für zulässige Brandabschnittsflächen und Bauteilanforderungen – für überschaubare, typische Hallen ohne extreme Stoffe.",
          "Rechenverfahren nach DIN 18230-1: bei größeren Brandbekämpfungsabschnitten und komplexer Brandlast – Simulation der Wärmeabzugsflächen, Entrauchung, ggf. ingenieurmethodischer Nachweis (Anhang 1 IndBauR).",
          "Besondere Regeln für Lagergebäude und zusammenhängende Lagerbereiche: erhöhte Anforderungen an Abschnittsbildung und Bauteile – relevant für E-Commerce-Logistik und Hochregallager.",
          "Ab mehr als 60.000 m² Brandbekämpfungsabschnittsfläche gelten zusätzliche Anforderungen an Bauteile und Sondernachweise – selten, aber planungsrelevant bei Mega-Distributionszentren.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Planungsfehler",
        paragraphs: [
          "Umnutzung Lager zu Büro ohne IndBauR-Neubewertung – [Lagerhalle Büro](/ratgeber/lagerhalle-buero-umnutzung-koeln) zeigt das Konzept-Thema; Industriebestand bleibt IndBauR-relevant, wenn Nutzung industriell bleibt.",
          "Teilweise IndBauR anwenden: Wird die Richtlinie gewählt, müssen alle sich ergebenden Anforderungen erfüllt werden – keine Cherry-Picking-Lösung.",
          "Abweichung nur im Brandschutzkonzept: § 3 Abs. 1 Satz 3 BauO NRW erlaubt gleichwertige Lösungen – aber nur mit nachgewiesenem Sicherheitsniveau, nicht mit Verweis allein auf GK.",
          "Sprinkler als Ersatz für Abschnitte: Löschanlagen können Kompensation sein, müssen aber im [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig) und gegenüber der Behörde begründet sein.",
        ],
      },
      {
        id: "schnittstelle",
        title: "Sonderbau, Betrieb, Prüfung",
        paragraphs: [
          "Industrie mit Stoffgefahr kann zusätzlich Sonderbau nach § 50 Abs. 2 BauO NRW auslösen – [Sonderbauten](/ratgeber/sonderbauten-brandschutz) und IndBauR laufen parallel, nicht alternativ.",
          "Technische Anlagen in genehmigten Hallen unterliegen später der [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) – Planung und Betrieb zusammen denken.",
          "Betrieblicher Brandschutz (Li-Ion-Lader, Heißarbeiten) ergänzt den baulichen Nachweis – [Betrieblicher Überblick](/ratgeber/betrieblicher-brandschutz-praxis-ueberblick).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst IndBauR NRW und Erläuterungen (Stand 2016) für Planer und Betreiber zusammen. Konkrete Abschnittsgrößen stehen im projektspezifischen Nachweis. Er ersetzt kein Brandschutzkonzept und keine behördliche Festlegung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/lagerhalle-buero-umnutzung-koeln", label: "Lagerhalle → Büro" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzeptpflicht" },
      { href: "/ratgeber/technische-betriebsgebaeude-brandschutz-nrw", label: "Technikgebäude" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
    ],
    faq: [
      {
        question: "Gilt IndBauR für jede Lagerhalle?",
        answer:
          "Für Industriebauten im Anwendungsbereich der Richtlinie – typisch Produktion und Lager ohne öffentliche Aufenthaltsnutzung. Kleine Gewerbehallen können anders einzuordnen sein; maßgeblich ist der Nachweis und die Behörde.",
      },
      {
        question: "Was ist der Unterschied Brandabschnitt und Brandbekämpfungsabschnitt?",
        answer:
          "Brandabschnitt begrenzt Brandübertragung baulich. Brandbekämpfungsabschnitt beschreibt den Bereich, in dem die Feuerwehr wirksam löschen kann – oft kleiner und mit eigenen Grenzflächen.",
      },
      {
        question: "Wann brauche ich DIN 18230-1?",
        answer:
          "Wenn das Rechenverfahren nach IndBauR für Brandbekämpfungsabschnitte gewählt wird – bei größeren Flächen, komplexer Brandlast oder wenn das vereinfachte Verfahren nicht ausreicht.",
      },
      {
        question: "Kann ich IndBauR und nur Gebäudeklasse nachweisen?",
        answer:
          "Nein. Wird IndBauR angewendet, gelten ihre Vorgaben vollständig. GK-Anforderungen der BauO bleiben parallel maßgeblich, ersetzen IndBauR aber nicht.",
      },
      {
        question: "Was ändert sich ab 60.000 m²?",
        answer:
          "Zusätzliche Anforderungen an Bauteile und Nachweise für sehr große Brandbekämpfungsabschnitte – Planung mit Brandschutzingenieur und früher Behördenabstimmung.",
      },
      {
        question: "Brauche ich ein vollständiges Brandschutzkonzept?",
        answer:
          "Bei genehmigungspflichtigem Neubau oder wesentlicher Änderung in der Regel ja – IndBauR liefert die fachlichen Mindestanforderungen, das Konzept bündelt den Nachweis nach § 9 BauPrüfVO NRW.",
      },
    ],
  },
  {
    slug: "pruefvo-nrw-wiederkehrende-pruefung-sonderbau",
    title: "PrüfVO NRW: Wie oft müssen BMA und Sprinkler geprüft werden?",
    excerpt:
      "Wiederkehrend nicht mehr als 3 Jahre für Anlagen Nr. 1–8 (u. a. BMA, selbsttätige Löschanlagen), 6 Jahre für Nr. 9–11. Gebäudekatalog, Betreiberpflichten und Abgrenzung zur Behördenprüfung § 10.",
    metaTitle: "PrüfVO NRW: 3 und 6 Jahre Fristen | H&S+",
    metaDescription:
      "PrüfVO NRW: BMA und Sprinkler wiederkehrend max. 3 Jahre (Nr. 1–8), Nr. 9–11 max. 6 Jahre. Gebäudekatalog § 1, Betreiberpflichten, § 10 ≠ Teil 1.",
    keywords: [
      "PrüfVO NRW",
      "Prüfverordnung Sonderbau",
      "Prüfsachverständiger Brandschutz",
      "wiederkehrende Prüfung BMA",
      "Sonderbau Prüfpflicht NRW",
      "technische Anlagen Prüfung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Wie oft prüft die PrüfVO NRW technische Anlagen?",
        paragraphs: [
          "Wiederkehrend nicht mehr als drei Jahre für Anlagen nach § 1 Abs. 1 Satz 2 Nr. 1 bis 8 (u. a. selbsttätige Feuerlöschanlagen, maschinelle RWA, Sicherheitsbeleuchtung, Brandmelde- und Alarmierungsanlagen) und nicht mehr als sechs Jahre für Nr. 9 bis 11 (elektrische Anlagen, natürliche Rauchabzugsanlagen, nicht-selbsttätige Feuerlöschanlagen) – § 2 Abs. 1 Satz 3 PrüfVO NRW (Fassung ab 26.11.2024).",
          "Die PrüfVO begründet keine Einbaupflicht: Sie regelt die Prüfung vorhandener oder bauordnungsrechtlich geforderter Anlagen durch Prüfsachverständige. DGUV 205-040, DIN und VdS sind Instandhaltung/Arbeitsschutz – nicht die bauordnungsrechtliche Frist.",
          "Grenzfall ja: Hotel mit BMA im Gebäudekatalog – Prüfsachverständiger alle 3 Jahre, Bericht, Mängelbeseitigung. Grenzfall nein: Nur Wartungsvertrag ohne Prüfsachverständigen in einem PrüfVO-pflichtigen Objekt.",
        ],
      },
      {
        id: "gebaeude",
        title: "Gebäudekatalog § 1 – wann Teil 1 greift",
        paragraphs: [
          "Teil 1 gilt für technische Anlagen in den in § 1 Abs. 1 Satz 1 genannten Gebäuden/Nutzungen – u. a. Verkaufs- und Versammlungsstätten (SBauVO), Krankenhäuser, Beherbergungsstätten im Sinne der SBauVO (> 12 Gastbetten), Hochhäuser, Mittel-/Großgaragen, Pflege/Betreuung > 500 m² BGF, allgemein- und berufsbildende Schulen, Hallen-/Messebauten > 2.000 m² GF, sowie bei Anordnung der Bauaufsicht.",
          "Liegt das Gebäude nicht in der Liste und fehlt eine Anordnung, begründet Teil 1 keine Prüfsachverständigen-Pflicht – auch wenn eine BMA freiwillig oder versicherungstechnisch existiert.",
        ],
        table: {
          caption: "Anlagenfristen PrüfVO NRW (Teil 1)",
          headers: ["Nr.", "Anlage (Auszug)", "Wiederkehrend"],
          rows: [
            ["1–8", "u. a. selbsttätige Löschanlagen, maschinelle RWA, BMA/Alarmierung, Sicherheitsbeleuchtung", "max. 3 Jahre"],
            ["2", "ortsfeste selbsttätige Feuerlöschanlagen (z. B. Sprinkler)", "max. 3 Jahre"],
            ["8", "Brandmelde- und Alarmierungsanlagen", "max. 3 Jahre"],
            ["9–11", "elektrische Anlagen (soweit erfasst), natürliche RWA, nicht-selbsttätige Löschanlagen", "max. 6 Jahre"],
            ["11", "ortsfeste nicht-selbsttätige Feuerlöschanlagen (z. B. Wandhydranten)", "max. 6 Jahre"],
          ],
        },
      },
      {
        id: "betreiber",
        title: "Betreiberpflichten § 2 Abs. 2",
        paragraphs: [
          "Wiederkehrende Prüfung auf Veranlassung und Kosten des Betreibers. Typisch: Prüfunterlagen bereithalten; konkrete Sicherheitsmängel unverzüglich, sonstige angemessen beseitigen; Beseitigung dem Prüfsachverständigen mitteilen; Berichte vor Erstinbetriebnahme und nach wesentlichen Änderungen an die Bauaufsicht senden; Prüftermine mitteilen; wiederkehrende Berichte mindestens 6 Jahre aufbewahren.",
          "Verknüpfung: [BMA-Prüffristen](/ratgeber/bma-prueffristen-brandmeldeanlage), [Sprinkler-Prüffristen](/ratgeber/sprinkler-loeschanlagen-prueffristen), [Sonderbau-Prüfung](/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung).",
        ],
      },
      {
        id: "teil2",
        title: "Teil 2 § 10 – Behördenprüfung ≠ Anlagentechnik",
        paragraphs: [
          "§ 10 ist eine Gebäude-/Betriebsprüfung der Bauaufsicht – nicht die Anlagentechnik-Prüfung nach Teil 1. Dabei wird auch geprüft, ob Anlagenprüfungen fristgerecht liefen. Intervalle höchstens 3 Jahre (u. a. Verkaufs-/Versammlungsstätten) bzw. 6 Jahre (u. a. Beherbergung erst mit mehr als 60 Betten, Schulen, Hochhäuser > 60 m).",
          "Schwellen nicht vermischen: Teil 1 erfasst Beherbergung ab > 12 Gastbetten für Anlagen; § 10 erst ab > 60 Betten für die behördliche Gebäudeprüfung.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "PrüfVO NRW ist Verordnung zum Bauordnungsrecht – getrennt von BauPrüfVO (Bauvorlagen/Konzept). Ob Ihr Objekt betroffen ist, ergibt sich aus Katalog, Baugenehmigung und Anordnung. Kein Ersatz für Prüfbericht oder Rechtsberatung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Prüffristen" },
      { href: "/ratgeber/sprinkler-loeschanlagen-prueffristen", label: "Sprinkler-Prüffristen" },
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "Sonderbau-Prüfung" },
      { href: "/ratgeber/wer-darf-brandschutzanlagen-pruefen", label: "Wer darf prüfen?" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Wie oft muss die BMA nach PrüfVO geprüft werden?",
        answer:
          "Brandmelde- und Alarmierungsanlagen = Nr. 8 → wiederkehrend nicht mehr als 3 Jahre (§ 2 Abs. 1 Satz 3), wenn Teil 1 greift. DIN/DGUV-Wartung ist zusätzlich, nicht die bauordnungsrechtliche Frist.",
      },
      {
        question: "Wie oft Sprinkler nach PrüfVO?",
        answer:
          "Ortsfeste selbsttätige Feuerlöschanlagen = Nr. 2 → max. 3 Jahre. Nicht-selbsttätige (Nr. 11) → max. 6 Jahre.",
      },
      {
        question: "Gilt PrüfVO in jedem Gewerbebetrieb?",
        answer:
          "Nein. Nur wenn das Gebäude im Katalog § 1 steht oder die Bauaufsicht Prüfung angeordnet hat.",
      },
      {
        question: "Ersetzt DGUV 205-040 die PrüfVO?",
        answer:
          "Nein. DGUV ist Arbeitsschutz/Instandhaltung. PrüfVO ist baurechtliche Prüfung durch Prüfsachverständige mit Betreiberpflichten.",
      },
      {
        question: "Was ist der Unterschied zu § 10?",
        answer:
          "Teil 1 = Anlagentechnik durch Prüfsachverständige. § 10 = wiederkehrende Behördenprüfung des Gebäudes/Betriebs – bei Beherbergung erst > 60 Betten.",
      },
      {
        question: "Ist BauPrüfVO dasselbe?",
        answer:
          "Nein. BauPrüfVO regelt Bauvorlagen und Brandschutzkonzept. Betriebliche Prüfsachverständigen-Prüfung = PrüfVO NRW.",
      },
    ],
  },
  {
    slug: "trgs-800-brandschutz-gefahrstoffe-betrieb",
    title: "TRGS 800: Brandschutz bei brennbaren Gefahrstoffen im Betrieb",
    excerpt:
      "Wer brennbare oder oxidierende Stoffe lagert oder verarbeitet, braucht über Explosionsschutz hinaus konkrete Brandschutzmaßnahmen – nach TRGS 800 in der Gefährdungsbeurteilung.",
    metaTitle: "TRGS 800: Brandschutz Gefahrstoffe | H&S+",
    metaDescription:
      "TRGS 800 Brandschutzmaßnahmen: Gefährdungsbeurteilung, Zündquellen, Feuerlöscher, Alarm, Evakuierung – betrieblich für NRW-Gewerbe.",
    keywords: [
      "TRGS 800 Brandschutz",
      "Gefahrstoff Brandschutz",
      "brennbare Stoffe Betrieb",
      "Zündquellen Gefährdungsbeurteilung",
      "Brandschutzmaßnahmen Gefahrstoffverordnung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Arbeitsschutz-Brandschutz, nicht nur BauO",
        paragraphs: [
          "TRGS 800 „Brandschutzmaßnahmen“ konkretisiert die Gefahrstoffverordnung für Tätigkeiten mit brennbaren oder oxidierenden Gefahrstoffen, bei denen Brandgefährdungen entstehen können. Sie ist Teil der umfassenden Gefährdungsbeurteilung nach § 5 ArbSchG und § 6 GefStoffV – parallel zum baulichen Nachweis nach BauO NRW.",
          "Wer nur an EX-Zonen denkt, übersieht oft klassische Brandlast: Lösemittel, Öle, Reiniger, Lacke, Gase in Flaschen, Staub neben brennbaren Flüssigkeiten. TRGS 800 strukturiert Maßnahmen für Betrieb, nicht Genehmigung.",
          "Grenzfall ja: Lackiererei mit GB nach TRGS 800, Zündquellenkatalog (Anlage 2), Feuerlöscher nach Brandklasse, BMA-Zonen abgestimmt, Heißarbeiten nur mit Erlaubnisschein. Grenzfall nein: Gefahrstofflager ohne GB, „steht eh im BSK“ – Arbeitsschutz-Pflicht bleibt.",
        ],
      },
      {
        id: "inhalt",
        title: "Was die TRGS verlangt",
        paragraphs: [
          "Kernpunkte der TRGS 800:",
        ],
        list: [
          "Informationsermittlung und Gefährdungsbeurteilung – inkl. Prüfliste Anlage 3",
          "Technische, organisatorische und personenbezogene Schutzmaßnahmen",
          "Zündquellen erkennen und vermeiden (Anlage 2 – offene Flammen, heiße Oberflächen, Funken, statische Elektrizität)",
          "Überprüfung der Wirksamkeit der Maßnahmen",
          "Fluchtwege, Notausgänge, Kennzeichnung, Betriebsanweisung und Unterweisung",
        ],
      },
      {
        id: "massnahmen",
        title: "Brandschutzmaßnahmen im Einzelnen",
        paragraphs: [
          "Typische Maßnahmen aus TRGS und Praxis: Mengenbegrenzung und Lagerung in zugelassenen Behältern; Lager getrennt von Zündquellen und Rettungswegen; ausreichende Löschmittel (Feuerlöscher-Typ nach Brandklasse B und ggf. C); Brandmeldeanlage oder manuelle Alarmierung; Rauchableitung und Lüftung; keine Heißarbeiten ohne [Erlaubnisschein](/ratgeber/heissarbeiten-brandwache-erlaubnisschein).",
          "Bei oxidierenden Stoffen: getrennt von brennbaren Material lagern – Verwechslung mit „normalen“ Lagerregeln ist ein häufiger Audit-Mangel.",
        ],
      },
      {
        id: "schnittstelle",
        title: "Schnittstelle Explosionsschutz und BauO",
        paragraphs: [
          "Explosionsfähige Gemische → [Explosionsschutzdokument](/ratgeber/explosionsschutz-brandschutz-schnittstelle). Brennbare Flüssigkeiten ohne EX-Zone → trotzdem TRGS 800.",
          "Baulicher Brandschutz (Brandabschnitt, Löschwasser) aus Genehmigung; TRGS 800 ergänzt Betrieb und Gefährdungsbeurteilung – beide Dokumente müssen zusammenpassen.",
          "[Kraftstofflagerung](/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz) und TRGS 800 überschneiden sich bei Tanks und Kanistern – einheitliche GB.",
        ],
      },
      {
        id: "organisation",
        title: "BSB, BSO und Dokumentation",
        paragraphs: [
          "Brandschutzbeauftragter sollte TRGS-800-Maßnahmen in BSO und Begehungen prüfen. Nach Unfällen oder Near-Miss: GB fortschreiben. Unterweisung aller Beschäftigten mit Zugang zu Gefahrstoffbereichen – nicht nur Lageristen.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Betrieb und Nachweisführung",
        paragraphs: [
          "TRGS 800: Brandschutz bei brennbaren Gefahrstoffen im Betrieb gehört in NRW in die laufende Betriebsdokumentation – nicht nur in die Eröffnungsphase. Abgrenzung: Genehmigungskonzept ersetzt keine wiederkehrende Instandhaltung; Unterweisung ersetzt keine Übung.",
          "Praxisfall: Bei Begehung fehlten Fortschreibungen nach Umbau – Auflage mit Frist bis zur Nachreichung aktualisierter Pläne oder Protokolle. Orientierungswert: Verantwortliche und Prüfintervalle schriftlich benennen.",
          "Nachweis für Geschäftsführung und Versicherung: Ordner Brandschutz Betrieb mit Index und Versionsdatum.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst TRGS 800 (GMBl 2011) für Betreiber zusammen. Stoffspezifische TRGS (Lösemittel, Lackierereien) können zusätzlich gelten. Er ersetzt keine Gefährdungsbeurteilung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/explosionsschutz-brandschutz-schnittstelle", label: "Explosionsschutz" },
      { href: "/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz", label: "Kraftstofflagerung" },
      { href: "/ratgeber/heissarbeiten-brandwache-erlaubnisschein", label: "Heißarbeiten" },
      { href: "/ratgeber/betrieblicher-brandschutz-praxis-ueberblick", label: "Betrieblicher Brandschutz" },
      { href: "/ratgeber/feuerloescher-richtig-loeschen-technik", label: "Löschtechnik" },
    ],
    faq: [
      {
        question: "Für wen gilt TRGS 800?",
        answer:
          "Für Arbeitgeber mit Tätigkeiten an brennbaren oder oxidierenden Gefahrstoffen, wenn Brandgefährdungen möglich sind – unabhängig von der Gebäudegröße.",
      },
      {
        question: "Reicht das Explosionsschutzdokument?",
        answer:
          "Nein als Ersatz. EX-Dokument deckt explosionsfähige Atmosphäre ab. TRGS 800 adressiert Brandschutz bei brennbaren/oxidierenden Stoffen breiter.",
      },
      {
        question: "Welche Anlagen gehören in die GB?",
        answer:
          "Lager, Abfüllung, Verarbeitung, Reinigung, Entsorgungsstellen – alles, wo Stoffe austreten oder sich entzünden können. Anlage 3 ist Prüfhilfe.",
      },
      {
        question: "Brauche ich eine BMA?",
        answer:
          "Abhängig von GB, Größe und Belegung – TRGS 800 verlangt wirksame Alarmierung; ob BMA oder organisatorische Lösung, ist einzelfallbezogen.",
      },
      {
        question: "Gilt TRGS 800 in Sonderbauten?",
        answer:
          "Ja zusätzlich. Sonderbau regelt baulich; TRGS 800 regelt betrieblichen Umgang mit Gefahrstoffen im genehmigten Gebäude.",
      },
      {
        question: "Was ist mit oxidierenden Stoffen?",
        answer:
          "Eigene Anforderungen – fördern Brand von anderen Materialien. Lagerung getrennt, Kennzeichnung, GB mit Zündquellen und Inkompatibilitäten.",
      },
    ],
  },
  {
    slug: "feuerungsanlagen-feuvo-nrw-betrieb",
    title: "Feuerungsanlagen nach FeuVO NRW: Aufstellung, Verbrennungsluft, Brennstoff",
    excerpt:
      "Heizungen, Blockheizkraftwerke und Gasfeuerstätten unterliegen der Feuerungsverordnung NRW – unabhängig vom brandschutztechnischen Konzept. Was Betreiber bei Aufstellung und Verbrennungsluft beachten müssen.",
    metaTitle: "FeuVO NRW: Feuerungsanlagen | H&S+",
    metaDescription:
      "Feuerungsverordnung NRW: Feuerstätten, 50-kW-Schwelle Verbrennungsluft, Garagenverbot, Brennstofflager – Orientierung für Betrieb und Umbau.",
    keywords: [
      "FeuVO NRW",
      "Feuerungsverordnung",
      "Feuerstätte Aufstellung",
      "Verbrennungsluft Heizung",
      "Brennstofflager FeuVO",
      "Blockheizkraftwerk Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Neben BauO § 14: eigene Verordnung",
        paragraphs: [
          "Die Feuerungsverordnung NRW (FeuVO, seit 01.01.2019) regelt Feuerstätten, Wärmepumpen und Blockheizkraftwerke, soweit sie Raumheizung oder Warmwasser dienen – sowie Gas-Haushaltskochgeräte. Sie ergänzt § 14 BauO NRW (Feuerungsanlagen) mit detaillierten Betriebs- und Aufstellungsregeln.",
          "Planer und Facility Manager kennen oft nur BMA und Sprinkler – FeuVO betrifft jeden Technikraum mit Gas- oder Ölheizung, jede Brennstofflagerung und jeden Konflikt zwischen Heizung und Abluftanlage.",
          "Grenzfall ja: Neuer Gas-Brennwertkessel im Heizungskeller, raumluftabhängig 80 kW, Verbrennungsluftöffnung nach FeuVO, keine gleichzeitige Dunstabzugshaube ohne Sicherheitskette. Grenzfall nein: Öltank im Flur, Zugluftöffnung zugestellt, Heizung läuft parallel zur abgeschalteten Lüftung ohne Verriegelung.",
        ],
      },
      {
        id: "verbrennungsluft",
        title: "Verbrennungsluft und 50-kW-Schwelle",
        paragraphs: [
          "Raumluftabhängige Feuerstätten brauchen ausreichende Verbrennungsluft aus dem Freien. Bis 50 kW Nennleistung gesamt: Öffnung mit Mindestquerschnitt je Aufstellraum. Über 50 kW: größere Öffnung oder Leitung nach FeuVO – oder anderweitiger Nachweis.",
          "Raumluftunabhängige Feuerstätten: Verbrennungsluft direkt von außen, kein Abgas in gefährlicher Menge im Aufstellraum. Verbrennungsluftöffnungen dürfen nicht verschlossen werden, außer mit Sicherheitseinrichtung.",
        ],
      },
      {
        id: "aufstellung",
        title: "Wo Feuerstätten nicht stehen dürfen",
        paragraphs: [
          "FeuVO verbietet Aufstellung u. a. in Garagen – ausgenommen raumluftunabhängige Feuerstätten mit Oberflächentemperatur bis 300 °C bei Nennleistung.",
          "Sicherer Betrieb raumluftabhängiger Feuerstätten darf nicht durch Lüftungsanlagen, Dunstabzugshauben oder Wäschetrockner gefährdet werden – Verriegelung, Abgasführung über Abluft oder technische Unterdruck-Vermeidung.",
          "Gasfeuerstätten ohne Flammenüberwachung nur mit mechanischer Lüftung während des Betriebs (Mindestluftwechsel nach FeuVO).",
        ],
      },
      {
        id: "brennstoff",
        title: "Brennstofflagerung",
        paragraphs: [
          "§§ 11–12 FeuVO: Lagerung in Brennstofflagerräumen und außerhalb – getrennt von [Kraftstoff-Thema](/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz), aber bauordnungsrechtlich über FeuVO konkretisiert. Öltanks, Gasflaschen, Pelletlager: Abstände, Belüftung, bauliche Trennung.",
          "Umbau und neue Lagerung: Genehmigung und brandschutztechnischer Nachweis prüfen – [Umbau](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb, Wartung, Übergang zu BMA",
        paragraphs: [
          "FeuVO-Compliance ist Voraussetzung für sicheren Betrieb – unabhängig von [Heißarbeiten](/ratgeber/heissarbeiten-brandwache-erlaubnisschein) in Nachbarräumen. Bei Defekten: Heizung stilllegen, nicht „weiterheizen bis der Schornsteinfeger kommt“.",
          "Technikgebäude mit Heizung und Lüftung: [Technische Betriebsgebäude](/ratgeber/technische-betriebsgebaeude-brandschutz-nrw) und FeuVO zusammen dokumentieren.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Betrieb und Nachweisführung",
        paragraphs: [
          "Feuerungsanlagen nach FeuVO NRW: Aufstellung, Verbrennungsluft, Brennstoff gehört in NRW in die laufende Betriebsdokumentation – nicht nur in die Eröffnungsphase. Abgrenzung: Genehmigungskonzept ersetzt keine wiederkehrende Instandhaltung; Unterweisung ersetzt keine Übung.",
          "Praxisfall: Bei Begehung fehlten Fortschreibungen nach Umbau – Auflage mit Frist bis zur Nachreichung aktualisierter Pläne oder Protokolle. Orientierungswert: Verantwortliche und Prüfintervalle schriftlich benennen.",
          "Nachweis für Geschäftsführung und Versicherung: Ordner Brandschutz Betrieb mit Index und Versionsdatum.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst FeuVO NRW für Betreiber und Planer zusammen. Schornsteinfeger-, Emissions- und immissionsschutzrechtliche Pflichten (BImSchG) sind getrennt. Er ersetzt keine behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz", label: "Kraftstofflagerung" },
      { href: "/ratgeber/technische-betriebsgebaeude-brandschutz-nrw", label: "Technikgebäude" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau" },
      { href: "/ratgeber/betrieblicher-brandschutz-praxis-ueberblick", label: "Betrieb" },
      { href: "/ratgeber/heissarbeiten-brandwache-erlaubnisschein", label: "Heißarbeiten" },
    ],
    faq: [
      {
        question: "Gilt FeuVO auch für Wärmepumpen?",
        answer:
          "Ja, soweit sie der Raumheizung oder Warmwasser dienen – im Anwendungsbereich der FeuVO NRW.",
      },
      {
        question: "Was bedeutet die 50-kW-Grenze?",
        answer:
          "Schwelle für erweiterte Anforderungen an Verbrennungsluftversorgung raumluftabhängiger Feuerstätten – Querschnitt der Außenluftöffnung.",
      },
      {
        question: "Darf ich die Heizung in der Garage betreiben?",
        answer:
          "Grundsätzlich nein für raumluftabhängige Feuerstätten. Ausnahme: raumluftunabhängig und max. 300 °C Oberflächentemperatur.",
      },
      {
        question: "Konflikt Heizung und Dunstabzug?",
        answer:
          "Raumluftabhängige Feuerstätten dürfen nicht durch Abluftanlagen gefährdet werden – Verriegelung oder alternative Abgasführung nach FeuVO.",
      },
      {
        question: "Brauche ich dafür ein Brandschutzkonzept?",
        answer:
          "FeuVO ist Betriebs-/Aufstellungsrecht. Bei Neubau/Umbau kann zusätzlich § 9 BauPrüfVO-Nachweis nötig sein – getrennte Dokumente.",
      },
      {
        question: "Wer prüft FeuVO-Compliance?",
        answer:
          "Bauaufsicht, Schornsteinfeger und ggf. Bezirksschornsteinfeger; im Betrieb auch Sachkundige Wartung und interne Begehung.",
      },
    ],
  },
  {
    slug: "e-fahrzeuge-tiefgarage-brandgefahren-fbfhb-024",
    title: "E-Fahrzeuge in Tiefgaragen: Brandgefahren und Planung nach FBFHB-024",
    excerpt:
      "Hybrid- und Elektrofahrzeuge in Parkhäusern bringen andere Brandverläufe mit – schwere Gase, Thermal Runaway, Ladekabel. Was Betreiber und Planer aus FBFHB-024 für Tiefgaragen ableiten.",
    metaTitle: "E-Fahrzeuge Tiefgarage: Brandgefahren | H&S+",
    metaDescription:
      "E-Autos Tiefgarage Brandschutz: LIB-Brandverlauf, Ladeinfrastruktur, Gasansammlung, Löschwasser, Evakuierung – Orientierung nach FBFHB-024 für NRW.",
    keywords: [
      "E-Auto Tiefgarage Brand",
      "Lithium-Ionen Tiefgarage",
      "FBFHB-024",
      "Parkhaus Elektrofahrzeug",
      "Hochvoltbatterie Brand",
      "Tiefgarage Ladeinfrastruktur",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Mehr E-Autos – andere Risiken in geschlossenen Räumen",
        paragraphs: [
          "Die Zahl der Feuerwehreinsätze bei Fahrzeugbränden mit Hybrid- und Elektroantrieb steigt. FBFHB-024 (Hinweise zur Brandbekämpfung von Lithium-Ionen-Akkus bei Fahrzeugbränden) richtet sich primär an Einsatzkräfte – für Tiefgaragen-Betreiber und Planer liefert sie aber zentrale Planungsimpulse: Brandverlauf, Gase, Ladekabel, Löschwasser.",
          "Grundsätzlich unterscheidet sich die Brandbekämpfung bei Serienfahrzeugen nicht wesentlich von konventionellen Fahrzeugen – solange die Hochvoltbatterie mechanisch nur unwesentlich beschädigt ist. In Tiefgaragen verschärft sich das: schwere, giftige und brennbare Dämpfe können sich ansammeln und explosionsfähige Gemische bilden.",
          "Grenzfall ja: Neubau-Tiefgarage mit E-Ladeplätzen, BMA-Zonen, Lüftung, Abstand Ladeinfrastruktur, Rettungsdatenblätter in BSO, Feuerwehr informiert. Grenzfall nein: Bestandsparkhaus ohne Lüftungskonzept, Ladekabel dauerhaft am Fahrzeug, „normale Garage reicht“.",
        ],
      },
      {
        id: "lib-brand",
        title: "Besonderheiten Lithium-Ionen-Brände",
        paragraphs: [
          "Hochvoltbatterien sitzen meist im Unterboden, geschützt in der Fahrzeugstruktur. Löschwasser erreicht den Brandherd bei nur leicht beschädigter Batterie oft nicht – externe Kühlung wirkt kaum, weil Zellen zum Gehäuse hin isoliert sind.",
          "Während des Brandes breitet sich das Feuer von Zelle zu Zelle aus (Thermal Runaway). Rauch wechselt hellgrau bis tiefschwarz; brennbare Elektrolytdämpfe und Graphitpartikel. Stichflammen und Durchzündung sind möglich – auch im Freien, in Garagen verstärkt.",
          "Wasser ist geeignetes Löschmittel; Zusätze sind nicht erforderlich. Brandverlauf hängt von Zellchemie, Bauform und Ladezustand ab – nicht zuverlässig vorhersehbar. Verweis auf [Brandbegrenzungsdecken](/ratgeber/brandbegrenzungsdecken-lithiumbatterie): kein Ersatz für Garagenkonzept.",
        ],
      },
      {
        id: "erkennung",
        title: "Erkennung und Ladeinfrastruktur",
        paragraphs: [
          "E-Kennzeichen, Ladeanschlüsse, orangefarbene Hochvoltkabel, fehlende Abgasanlage – äußere Indikatoren. Nicht jedes Hybridfahrzeug hat E-Kennzeichen; Kennzeichenabfrage über Leitstelle liefert Antriebsart und Rettungsdatenblatt.",
          "Brennendes Fahrzeug am Ladekabel: Verbindung zur AC-Ladeinfrastruktur im Brandfall trennen – Notentriegelung je Hersteller in Rettungsdatenblättern. Betreiber: Ladeplätze kennzeichnen, Notentriegelung in BSO und bei Hausmeister/BSB hinterlegen.",
          "Schnittstelle [Ladestation Stapler](/ratgeber/ladestation-stapler-brandgefahren) und E-PKW-Laden – einheitliche Gefährdungsbeurteilung im Objekt.",
        ],
      },
      {
        id: "tiefgarage",
        title: "Planung und Betrieb Tiefgarage",
        paragraphs: [
          "FBFHB-024 warnt ausdrücklich vor Gasansammlung in umschlossenen Räumen wie Tiefgaragen. Planerische Maßnahmen: ausreichende Entrauchung/Lüftung, Brandabschnitte und Rauchabschnitte nach BauO und Garagenverordnung, BMA mit schneller Alarmierung, klare Rettungswege.",
          "Löschwasser: ausreichende Versorgung und Zugang – [Hydranten/Löschwasser](/ratgeber/loeschwasser-hydranten-gewerbe-koeln). Bei Großgaragen [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) für BMA und Löschanlagen beachten.",
          "Betrieb: keine dauerhafte Ladekabel-Verbindung bei Abwesenheit; defekte Ladesäulen stilllegen; Übungen mit Feuerwehr inkl. E-Fahrzeug-Szenario; keine invasive Löschtechnik am intakten Batteriebereich durch untrainiertes Personal.",
        ],
      },
      {
        id: "evakuierung",
        title: "Alarmierung und Evakuierung",
        paragraphs: [
          "Atemgifte und Verbrennungsprodukte entstehen wie bei anderen Fahrzeugbränden – in Garagen schneller kritische Konzentration. [Alarmierung und Evakuierung](/ratgeber/alarmierung-evakuierung-betrieb) mit Sammelstelle außerhalb des Parkhauses.",
          "BSB und Facility: Kennzeichnung E-Ladezonen, Zugang für Feuerwehr, Unterlagen zu Ladeinfrastruktur (Stromführung, Abschaltung). Kleinserien- und Umrüstfahrzeuge: FBFHB nur als grobe Orientierung.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst FBFHB-024 für Planer und Betreiber von Tiefgaragen zusammen – nicht als Feuerwehr-Einsatzleitung. Baulicher Nachweis (Mittel-/Großgarage, Sonderbau) bleibt bei Genehmigung und Brandschutzkonzept. Er ersetzt keine behördliche Festlegung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandbegrenzungsdecken-lithiumbatterie", label: "Brandbegrenzungsdecken" },
      { href: "/ratgeber/ladestation-stapler-brandgefahren", label: "Ladestationen" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Evakuierung" },
      { href: "/ratgeber/batteriespeicher-lithium-ionen-brandgefahren", label: "Batteriespeicher" },
    ],
    faq: [
      {
        question: "Sind E-Auto-Brände in Tiefgaragen gefährlicher?",
        answer:
          "Der Brandverlauf kann länger und unberechenbarer sein. In geschlossenen Räumen besteht zusätzlich Gefahr durch schwere, brennbare Gase – Planung von Lüftung und Evakuierung ist entscheidend.",
      },
      {
        question: "Reicht Sprinkler in der Tiefgarage?",
        answer:
          "Sprinkler können Brandlast begrenzen, erreichen aber bei intakter Batterie im Unterboden den Herd oft nicht direkt. Sie sind Teil des Konzepts, kein Alleinstellungshebel für LIB-Brände.",
      },
      {
        question: "Muss ich Ladeplätze gesondert absichern?",
        answer:
          "Ja sinnvoll: Kennzeichnung, Abstände, Abschaltmöglichkeit, BMA, BSO-Unterlagen, Notentriegelung Ladestecker. Gefährdungsbeurteilung im Betrieb ergänzen.",
      },
      {
        question: "Kann Wasser LIB-Brände löschen?",
        answer:
          "FBFHB-024: Wasser ist geeignet und empfohlen – Kühlung und Löschen über Gehäuseöffnungen. Invasive Systeme am intakten Bereich können Kurzschluss auslösen.",
      },
      {
        question: "Gilt FBFHB-024 für alle E-Autos?",
        answer:
          "Für Serienfahrzeuge. Kleinserien und nachträgliche Umbauten nur grobe Orientierung – herstellerspezifische Rettungsdatenblätter maßgeblich.",
      },
      {
        question: "Wer ist zuständig – Betreiber oder Eigentümer?",
        answer:
          "Beide in der Praxis: Eigentümer für bauliche/technische Anlagen, Betreiber für täglichen Betrieb und BSO. Abgrenzung im Vertrag und gemeinsames Brandschutzkonzept bei Wohnanlagen mit Tiefgarage.",
      },
    ],
  },
  {
    slug: "bauprodukte-ce-kennzeichnung-nrw",
    title: "CE-Kennzeichnung vs. Ü-Zeichen: Bauprodukte im Brandschutz NRW",
    excerpt:
      "Feuerschutztüren, Abschottungen und Dämmstoffe: In NRW gilt BFM-2 und MVV TB – ob CE oder Ü-Zeichen entscheidet über die Verwendbarkeit im baulichen Brandschutz.",
    metaTitle: "CE vs. Ü-Zeichen Brandschutz NRW | H&S+",
    metaDescription:
      "Bauprodukte Brandschutz NRW: CE-Kennzeichnung, Leistungserklärung, Ü-Zeichen, Verwendbarkeitsnachweis, BFM-2 – Orientierung für Planer und Betreiber.",
    keywords: [
      "CE Kennzeichnung Brandschutz",
      "Ü-Zeichen Bauprodukt",
      "MVV TB 2025",
      "BFM-2 NRW",
      "Leistungserklärung Brandverhalten",
      "Verwendbarkeitsnachweis Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Zwei Wege zur Verwendbarkeit",
        paragraphs: [
          "Wer Brandschutzprodukte einbaut – Türen, Klappen, Abschottungen, Bekleidungen – braucht baurechtlich verwendbare Produkte. In NRW unterscheidet die Bauordnung zwischen harmonisierten Bauprodukten mit CE-Kennzeichnung und Leistungserklärung (EU-Bauproduktenverordnung) und nicht harmonisierten Produkten mit Verwendbarkeitsnachweis (Ü-Zeichen, abZ, allgemeine bauaufsichtliche Zulassung).",
          "MVV TB 2025/1 (DIBt) und BFM-2 des MHKBG NRW konkretisieren das für Planer und Bauaufsicht. Fehler in der Produktwahl führen zu Abnahme-Mängeln – unabhängig von fachgerechter Montage.",
          "Grenzfall ja: Feuerschutztür mit CE und Leistungserklärung, Brandverhalten EI 30-T wie gefordert, Montage nach Einbauanleitung, Dokumentation in der Baugenehmigung. Grenzfall nein: „Brandschutztür“ aus dem Baumarkt ohne Nachweis, nur Datenblatt-Herstellerversprechen.",
        ],
      },
      {
        id: "ce",
        title: "CE-Kennzeichnung und Leistungserklärung",
        paragraphs: [
          "Harmonisierte Normen (hEN) oder Europäische Technische Bewertung (ETA): Produkt trägt CE, Hersteller erklärt Leistungen in der Leistungserklärung (DoP). Verwendung nur zulässig, wenn deklarierte Leistungen den Anforderungen der BauO NRW genügen – z. B. Brandverhalten, Dichtheit, Wärmedurchgang.",
          "BFM-2: CE-Produkt darf verwendet werden, wenn Leistungen den bauordnungsrechtlichen Anforderungen entsprechen. Planer prüfen: Klasse (z. B. EI 30, REI 90), Einbauzustand, Randbedingungen.",
          "Nicht jedes CE-Produkt ist automatisch für jeden brandschutztechnischen Einbau geeignet – Verwendungszweck und Einbausituation aus DoP und Montageanleitung beachten.",
        ],
      },
      {
        id: "ue",
        title: "Ü-Zeichen und Verwendbarkeitsnachweise",
        paragraphs: [
          "Produkte ohne EU-Harmonisierung für den konkreten Verwendungszweck: Verwendbarkeitsnachweis über allgemeines bauaufsichtliches Prüfzeugnis (abP/abZ) oder allgemeine bauaufsichtliche Zulassung (aBG). Ü-Zeichen auf dem Produkt oder in der Übereinstimmungserklärung.",
          "MVV TB Teil C regelt nicht harmonisierte Bauprodukte und Bauarten. Bauarten ohne Produktnorm: gesonderte Zulassung oder Prüfzeugnis – typisch bei Sonderabschottungen oder innovativen Systemen.",
          "[Abschottungen Baustelle](/ratgeber/abschottungen-durchbrueche-baustelle-koeln): Durchbruchslösungen nur mit passendem Nachweis für die konkrete Kombination Rohr/Kabel/Wand.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fehler in Umbau und Bestand",
        paragraphs: [
          "Austausch Feuerschutztür: neues CE-Produkt mit gleicher Klasse, aber anderer Zulassung – Einbausituation (Wandtyp, Anschlag) prüfen. [Bestand Türen](/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln) und [Feuerschutzabschlüsse](/ratgeber/feuerschutzabschluesse-bestand-nrw).",
          "Fassadenbekleidung und Dämmung: Brandverhalten A2 vs. B – CE-Klasse muss zum Konzept passen, nicht nur zur Energieeffizienz.",
          "Dokumentation: Leistungserklärung, Ü-Zeichen-Bescheinigung, Einbauprotokoll für Abnahme und spätere Prüfungen aufbewahren.",
        ],
      },
      {
        id: "schnittstelle",
        title: "Genehmigung, Prüfung, Betrieb",
        paragraphs: [
          "Genehmigungsfähigkeit: Bauaufsicht prüft Produktwahl im Brandschutzkonzept. [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig) listet verwendete Bauprodukte und Nachweise.",
          "Nach Einbau: [Feuerschutzabschlüsse Prüffristen](/ratgeber/feuerschutzabschluesse-prueffristen-fstA) und [PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) in Sonderbauten – Montagequalität ohne gültigen Nachweis hilft nicht.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst BFM-2 und MVV TB 2025/1 für die Produktwahl zusammen. Einzelfragen (z. B. ETA, nationale Ergänzungen) gehören in den Entwurfsverfasser-Nachweis. Er ersetzt keine Produktzulassung und keine behördliche Prüfung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln", label: "Feuerschutztüren Bestand" },
      { href: "/ratgeber/feuerschutzabschluesse-bestand-nrw", label: "Feuerschutzabschlüsse" },
      { href: "/ratgeber/abschottungen-durchbrueche-baustelle-koeln", label: "Abschottungen" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
    ],
    faq: [
      {
        question: "CE reicht das für Brandschutz?",
        answer:
          "Nur wenn die in der Leistungserklärung angegebenen Leistungen (z. B. Brandverhalten) den Anforderungen des konkreten Einbaus nach BauO/Konzept genügen.",
      },
      {
        question: "Was ist das Ü-Zeichen?",
        answer:
          "Kennzeichen für Verwendbarkeit nicht harmonisierter Bauprodukte auf Basis abP/abZ oder aBG – staatlich anerkannte Prüfstelle.",
      },
      {
        question: "Darf ich CE und Ü-Zeichen mischen?",
        answer:
          "Im selben Bauvorhaben ja, je Einbauort passender Nachweis. Nicht: CE-Produkt ohne passende Leistung statt geforderter Zulassung.",
      },
      {
        question: "Wo finde ich MVV TB in NRW?",
        answer:
          "NRW übernimmt MVV TB über VV TB NRW und Anlage – aktuell MVV TB 2025/1 beim DIBt, Umsetzung über mhkbg.nrw Technische Baubestimmungen.",
      },
      {
        question: "Gilt das auch für BMA-Komponenten?",
        answer:
          "BMA unterliegt anderen Regelwerken (EN 54, VdS). CE dort über Produktnormen der EU-Harmonisierung – getrennt vom baulichen Brandschutz-Produktthema, aber ähnliche Logik.",
      },
      {
        question: "Was bei fehlender Dokumentation?",
        answer:
          "Produkt ohne nachweisbare Verwendbarkeit gilt nicht als bauordnungskonform – Nachbeschaffung der Unterlagen oder Austausch/Neuzulassung nötig.",
      },
    ],
  },
  {
    slug: "schulen-schulbaurichtlinie-nrw",
    title: "Schulbaurichtlinie NRW: Was gilt für Lernbereiche und Rettungswege?",
    excerpt:
      "Lernbereich max. 600 m², Summe im Brandabschnitt max. 1.200 m², zwei Rettungswege, Hausalarmierung – SchulBauR als Verwaltungsvorschrift für allgemeine Schulen, Berufskollegs und Förderschulen.",
    metaTitle: "Schulbaurichtlinie NRW: 600/1200 m² | H&S+",
    metaDescription:
      "Schulbaurichtlinie NRW: Lernbereich max. 600 m², Brandabschnitt 1.200 m², zwei Rettungswege, Hausalarmierung. Gilt für Schulen und Förderschulen – nicht Kita.",
    keywords: [
      "Schulbaurichtlinie NRW",
      "SchulBauR NRW",
      "Lernbereich Rettungsweg",
      "Schule Brandabschnitt",
      "Schulneubau Brandschutz NRW",
      "offene Lernlandschaft Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Was verlangt die Schulbaurichtlinie NRW?",
        paragraphs: [
          "Für allgemeine Schulen (allgemein bildende Schulen und Berufskollegs) und Förderschulen: im Geschoss mindestens zwei voneinander unabhängige Rettungswege; Lernbereiche höchstens 600 m² einzeln und höchstens 1.200 m² summiert in einem Brandabschnitt; Alarmierung als Hausalarmierung (Nr. 12) – keine Pflicht-BMA aus der SchulBauR.",
          "Die SchulBauR (RdErl. 17.11.2020, Az. 615-170, MBl. NRW. 2020 S. 822) ist besondere Verwaltungsvorschrift zu § 50 BauO NRW – kein Gesetz. Sie gilt nicht für Kitas und nicht für Hochschulen. Offene Lernlandschaften werden erleichtert, Brandschutz nicht ersetzt.",
          "Schulen sind großer Sonderbau. Die SchulBauR 2020 zitiert noch § 50 Abs. 2 Nr. 11; in der geltenden BauO stehen Schulen unter Nr. 16 (Beherbergung = Nr. 11). Der Tatbestand bleibt – die Nummer nicht falsch fortschreiben.",
        ],
      },
      {
        id: "begriffe",
        title: "Lernbereich, Unterrichtsraum, Brandgefahr",
        paragraphs: [
          "Unterrichtsraum: baulich abgeschlossen, außerhalb eines Lernbereichs. Lernbereich: abgeschlossener Bereich für Unterricht ohne notwendigen Flur – multifunktionale Zonen möglich.",
          "Räume mit gehobener Brandgefahr: z. B. Keramikbrennofen, Chemieraum ohne raumabschließende Digestorien – höhere Trennwandanforderungen. Hauptgänge erschließen den Lernbereich; von jeder Stelle max. 10 m zum Hauptgang.",
        ],
        table: {
          caption: "Kernmaße SchulBauR (Auszug)",
          headers: ["Thema", "Maß / Regel", "Quelle"],
          rows: [
            ["Lernbereich einzeln", "max. 600 m²", "SchulBauR"],
            ["Lernbereiche im Brandabschnitt", "max. 1.200 m² Summe", "SchulBauR"],
            ["Rettungswege im Geschoss", "mindestens zwei voneinander unabhängig", "SchulBauR"],
            ["Stichflur", "grundsätzlich max. 15 m (Ausnahmen mit 2. baulichem Weg)", "SchulBauR"],
            ["Alarmierung", "Hausalarmierung (Nr. 12) – keine BMA-Pflicht aus SchulBauR", "Nr. 12"],
            ["Löscheinrichtungen", "drei Optionen inkl. keine Einrichtung im Einvernehmen mit Brandschutzdienststelle", "Nr. 11"],
          ],
        },
      },
      {
        id: "abschnitte",
        title: "Brandabschnitte und Trennwände",
        paragraphs: [
          "Innere Brandwände alle 60 m (SchulBauR konkretisiert). Lernbereiche innerhalb eines Brandabschnitts: gesamt max. 1.200 m², einzelner Lernbereich max. 600 m².",
          "Trennwände zum Abschluss von Lernbereichen: mindestens feuerhemmend. Tragende Bauteile: abhängig von Gebäudehöhe – erdgeschossige Kleinschulen bis 400 m² können Erleichterungen haben.",
        ],
      },
      {
        id: "rettungswege",
        title: "Rettungswege – zwei Wege Pflicht",
        paragraphs: [
          "Unterrichtsräume: zwei voneinander unabhängige Rettungswege im Geschoss; einer darf über Halle führen (mit Einschränkungen). Stichflure max. 15 m, wenn kein zweiter baulicher Rettungsweg.",
          "Lernbereiche: zwei Rettungswege zu angrenzenden Lernbereichen, notwendigen Fluren, Treppen oder ins Freie. Notwendige Flure innerhalb des Lernbereichs nicht erforderlich – dafür Hauptgänge. Grundlagen BauO: [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw).",
        ],
      },
      {
        id: "technik",
        title: "Alarmierung und Löscheinrichtungen – was die SchulBauR sagt",
        paragraphs: [
          "Nr. 12: Hausalarmierung – nicht gleichzusetzen mit einer Brandmeldeanlage. Eine BMA kann sich aus Konzept oder Abweichung ergeben; sie ist dann Konzeptinhalt, nicht SchulBauR-Standard. Keine Sprinkler-Pflicht aus der SchulBauR.",
          "Nr. 11: eine von drei Optionen – (a) Wandhydranten Typ F, (b) trockene Löschwasserleitungen im Einvernehmen mit der Brandschutzdienststelle, (c) keine Löscheinrichtung im Einvernehmen mit der Brandschutzdienststelle.",
          "Vorhandene Anlagen in Schulen können unter [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) fallen – das ist Prüfung, nicht Einbaupflicht aus der SchulBauR.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "SchulBauR = Verwaltungsvorschrift. Nicht für Kitas/Hochschulen. Kein Ersatz für genehmigungsfähiges Brandschutzkonzept und behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege BauO" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Für wen gilt die Schulbaurichtlinie NRW?",
        answer:
          "Für allgemeine Schulen (allgemein bildend und Berufskollegs) und Förderschulen – nicht für Kitas und nicht für Hochschulen. Sie ist Verwaltungsvorschrift zu § 50 BauO NRW.",
      },
      {
        question: "Wie groß darf ein Lernbereich sein?",
        answer:
          "Max. 600 m² pro Lernbereich, max. 1.200 m² Lernbereiche summiert innerhalb eines Brandabschnitts.",
      },
      {
        question: "Braucht jede Schule eine BMA nach SchulBauR?",
        answer:
          "Nein. Die SchulBauR verlangt Hausalarmierung (Nr. 12), keine Pflicht-BMA. Eine BMA kann sich aus Konzept oder Abweichung ergeben.",
      },
      {
        question: "Brauchen Lernbereiche notwendige Flure?",
        answer:
          "Nein innerhalb des Lernbereichs – stattdessen Hauptgänge und zwei Rettungswege nach SchulBauR.",
      },
      {
        question: "Welche Löscheinrichtungen sind Pflicht?",
        answer:
          "Nr. 11 nennt drei Optionen – darunter auch keine Löscheinrichtung, wenn die Brandschutzdienststelle einverstanden ist. Keine pauschale Sprinklerpflicht aus der SchulBauR.",
      },
      {
        question: "Ist die SchulBauR strenger als die BauO?",
        answer:
          "Sie konkretisiert und erleichtert schultypisch (z. B. Sichtbeziehungen), ersetzt aber Rettungsweg- und Abschnittsregeln nicht.",
      },
    ],
  },
  {
    slug: "pflegeeinrichtung-sonderbau-nrw",
    title: "Pflegeeinrichtungen NRW: Sonderbau nach Pflege-Betreuungsrichtlinie",
    excerpt:
      "Pflegeheime und betreutes Wohnen über 200 m² sind Sonderbauten mit eigenen Anforderungen: Raumgruppen, Brandabschnitte, breite Türen und flächendeckende BMA.",
    metaTitle: "Pflegeheim Brandschutz NRW | H&S+",
    metaDescription:
      "Pflege-Betreuungsrichtlinie NRW: Sonderbau, Raumgruppe, Brandabschnitt 500 m², Rettungswege 0,90 m, BMA – Planung für Pflegeeinrichtungen.",
    keywords: [
      "Pflegeheim Brandschutz NRW",
      "Pflege Betreuungsrichtlinie",
      "Sonderbau Pflegeeinrichtung",
      "Raumgruppe Brandschutz",
      "Wohn-Pflege-Bereich",
      "BMA Pflegeheim",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Sonderbau jenseits normaler Wohnnutzung",
        paragraphs: [
          "Die Richtlinie über bauaufsichtliche Anforderungen an Einrichtungen mit Pflege- und Betreuungsleistungen (Pflege-Betreuungsrichtlinie, MBl. NRW) ist besondere Verwaltungsvorschrift nach § 85 BauO NRW. Sie gilt für Einrichtungen mit Pflege und Betreuung, die über Standard-Wohnanforderungen hinausgehen – mit erhöhter Brandgefahr durch hilfsbedürftige Bewohner.",
          "Anwendungsbereich: Einrichtungen einzeln größer als 200 m² oder insgesamt über 200 m² mit gemeinsamen Rettungswegen. Sonderbau nach § 50 BauO NRW – Genehmigung und Brandschutzkonzept Pflicht.",
          "Grenzfall ja: Wohn-Pflege-Bereich 600 m², zwei Brandabschnitte mit feuerbeständiger Brandwand, BMA flächendeckend, Türen 0,90 m im Rettungsweg. Grenzfall nein: Betreutes Wohnen 250 m² mit einem Treppenhaus und ohne BMA, „reine Wohnnutzung“ ohne Richtlinienprüfung.",
        ],
      },
      {
        id: "struktur",
        title: "Raumgruppen und Wohn-Pflege-Bereiche",
        paragraphs: [
          "Wohn-Pflege-Bereich: baulich abgeschlossen mit notwendigem Flur. Raumgruppe: abgeschlossen ohne notwendigen Flur – gemeinschaftliche Zone (Essen, Aufenthalt) mit Privaträumen (Schlafen/Wohnen) drumherum.",
          "Privaträume: Wohn- und Schlafräume der Bewohner. Trennwände zwischen Raumgruppen und zu Wohn-Pflege-Bereichen: raumabschließend mit FW der tragenden Bauteile, mindestens feuerhemmend.",
          "Wände innerhalb Raumgruppe feuerhemmend, nichtbrennbar – Ausnahmen für Sanitärzellen der Privaträume. Betriebsräume (Hauswirtschaft) innerhalb der Gruppe mit gleichen Anforderungen.",
        ],
      },
      {
        id: "abschnitte",
        title: "Brandabschnitte und Brandwände",
        paragraphs: [
          "Brandwandabstand bis 50 m zulässig bei Brandabschnittsfläche bis 2.000 m² (Abweichung von § 32 BauO). Wohn-Pflege-Bereiche über 500 m² (außer ebenerdig): mindestens zwei Brandabschnitte pro Geschoss, getrennt durch feuerbeständige Brandwände.",
          "Brandabschnitte über Rettungswege mit Nachbarabschnitten verbunden – jeder führt zu notwendigem Treppenraum. Verknüpfung [Sonderbauten](/ratgeber/sonderbauten-brandschutz) und [Gebäudeklassen](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "rettungswege",
        title: "Rettungswege und Türen",
        paragraphs: [
          "Nicht ebenerdige Aufenthaltsräume: zwei unabhängige bauliche Rettungswege ins Freie. Beide dürfen über denselben notwendigen Flur – nicht in Raumgruppen. Zweiter Weg über Balkon/Dachterrasse/Außentreppe möglich, wenn im Brandfall sicher.",
          "Türen im Rettungsweg: lichte Breite mindestens 0,90 m, bei Bettrettung im Konzept 1,25 m. Aufschlag in Fluchtrichtung, keine Schwellen, von innen leicht öffnenbar.",
          "Privatraumtüren selbstschließend mit Freilauftürschließer; Raumgruppen-Türen zum Flur ggf. mit Feststellanlage. Kennzeichnung mit Sicherheitszeichen – nicht am Privatraumausgang.",
        ],
      },
      {
        id: "technik",
        title: "BMA und Betrieb",
        paragraphs: [
          "Flächendeckende selbsttätige BMA Pflicht – Betriebsart mit Maßnahmen gegen Falschalarme. Melder in Rettungswegen, Gemeinschaftszonen, hinter feuerhemmenden Wänden in Raumgruppen, bei selbstschließenden Türen.",
          "Nach Genehmigung: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) für BMA und weitere Anlagen. Betrieb: BSO, Evakuierung hilfsbedürftiger Personen [Alarmierung](/ratgeber/alarmierung-evakuierung-betrieb), Übungen mit Personal, nicht nur Brandschutzhelfer.",
          "Umbau und Erweiterung: [Umbau Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz) mit Fortschreibung des Konzepts.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst die Pflege-Betreuungsrichtlinie NRW zusammen. Nicht für Kindertageseinrichtungen oder reine Tagespflege mit Ausgang ins Freie ohne notwendige Treppen. Krankenhäuser folgen anderen Regelwerken. Er ersetzt kein genehmigungsfähiges Brandschutzkonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Evakuierung" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Prüffristen" },
    ],
    faq: [
      {
        question: "Ab wann gilt die Pflege-Richtlinie?",
        answer:
          "Einrichtungen mit Pflege und Betreuung einzeln über 200 m² oder gesamt über 200 m² mit gemeinsamen Rettungswegen – Sonderbau.",
      },
      {
        question: "Was ist der Unterschied Raumgruppe und Wohn-Pflege-Bereich?",
        answer:
          "Raumgruppe ohne notwendigen Flur mit gemeinschaftlicher Zone; Wohn-Pflege-Bereich mit notwendigem Flur – unterschiedliche Erschließungs- und Türenlogik.",
      },
      {
        question: "Ist eine BMA immer Pflicht?",
        answer:
          "Ja, flächendeckende selbsttätige BMA mit Falschalarm-Vermeidung nach Richtlinie – für im Anwendungsbereich liegende Einrichtungen.",
      },
      {
        question: "Wie breit müssen Türen sein?",
        answer:
          "Mindestens 0,90 m licht im Rettungsweg; 1,25 m wenn Bettrettung im Brandschutzkonzept vorgesehen ist.",
      },
      {
        question: "Gilt das für betreutes Wohnen?",
        answer:
          "Wenn Pflege- und Betreuungsleistungen und Flächenschwellen erfüllt sind – im Zweifel früh mit Bauaufsicht und Konzeptautor klären.",
      },
      {
        question: "Was bei Umbau im laufenden Betrieb?",
        answer:
          "Genehmigung, Brandschutzkonzept-Fortschreibung, ggf. Teilabschnitte und Interimsmaßnahmen – Abstimmung mit Träger, Behörde und Feuerwehr.",
      },
    ],
  },
];
