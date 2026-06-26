/**
 * Dezember 2025 – 3 neue Artikel (Slot 1: feuerloescher-entsorgung-pfas-abfall in ratgeber-articles-2025.ts).
 * Quellen: SBauVO NRW, Betrieb, LAU-Schnittstelle.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_DECEMBER: RatgeberArticle[] = [
  {
    slug: "hochhaus-entrauchung-sbauvo-nrw",
    title: "Hochhaus-Rauchableitung: Entrauchung nach SBauVO § 110",
    excerpt:
      "Jedes Geschoss und Installationsschächte in Hochhäusern müssen entrauchbar sein – Druckbelüftung, RWA und Betrieb nach SBauVO und Konzept.",
    metaTitle: "Hochhaus Rauchableitung SBauVO | H&S+",
    metaDescription:
      "Hochhaus Entrauchung §110 SBauVO: Rauchableitung Geschoss, Installationsschacht, Druckbelüftung, Treppenraum, Betrieb NRW.",
    keywords: [
      "Hochhaus Entrauchung",
      "Rauchableitung SBauVO",
      "§110 SBauVO",
      "Druckbelüftung Treppenraum",
      "Installationsschacht Rauch",
      "Hochhaus RWA",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Rauch in Treppen und Schächten",
        paragraphs: [
          "§ 110 SBauVO NRW Hochhäuser: jedes Geschoss und Installationsschächte müssen entrauchbar sein – zentral für sichere Rettungswege über 22 m.",
          "Ergänzt [Hochhaus baulich](/ratgeber/hochhaus-brandschutz-sbauvo-nrw) und [Betrieb](/ratgeber/hochhaus-betriebsvorschriften-sbauvo-nrw).",
          "Grenzfall ja: Wohnhochhaus, Druckbelüftung Treppenraum gewartet, RWA Schächte funktionsfähig, BMA-Kopplung getestet. Grenzfall nein: Entrauchungsklappen defekt, Druckbelüftung ausgeschaltet, keine Wartung.",
        ],
      },
      {
        id: "geschosse",
        title: "Geschossweise Entrauchung",
        paragraphs: [
          "Rauchableitung je Geschoss – Fenster, RWA-Anlagen oder Überdrucksysteme nach Konzept.",
          "Treppenräume: Druckbelüftung häufig – Überdruck bei Brand.",
          "[BMA Brandfallsteuerung](/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw).",
        ],
      },
      {
        id: "schaeche",
        title: "Installationsschächte",
        paragraphs: [
          "Schächte für Leitungen/Lüftung: eigene Entrauchung oder Abschottung – Brandübertragung verhindern.",
          "Durchbrüche: [Abschottungen](/ratgeber/abschottungen-durchbrueche-baustelle-koeln) und Wartung.",
          "Prüfung im [PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau)-Zyklus.",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb und Wartung",
        paragraphs: [
          "Eigentümer/Betreiber: Anlagen betriebsbereit halten – [Hochhaus Betrieb](/ratgeber/hochhaus-betriebsvorschriften-sbauvo-nrw).",
          "Probeauslösung dokumentieren.",
          "Störungen unverzüglich beheben – ggf. Nutzungseinschränkung.",
        ],
      },
      {
        id: "bestand",
        title: "Bestandshochhäuser",
        paragraphs: [
          "Kapitel 4 SBauVO bestehende Hochhäuser – Nachrüstung gestaffelt.",
          "[Sonderbau Bestand](/ratgeber/sonderbau-bestand-gebaeude-sbauvo-nrw).",
          "Umbau: Entrauchung anpassen.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Hochhaus, Entrauchung und Abgrenzung",
        paragraphs: [
          "Hochhäuser nach SBauVO Teil 4 verbinden Treppenraumentrauchung, RDA und Aufzugs-Brandfallsteuerung – in der Genehmigungspraxis in NRW werden diese Systeme gemeinsam im Brandschutzkonzept nachgewiesen. Abgrenzung: Natürliche RWA auf Fluchtwegen ist nicht dasselbe wie maschinische Treppenraumentrauchung; Aufzugs-RWA ersetzt keinen Feuerwehraufzug.",
          "Praxisfall Wohnhochhaus: Ausfall der RDA im Probelauf vor Abnahme – Nachbesserung an Differenzdruckregelung und Notstrom. Behördenforderung: Abstimmungsnachweis BMA, RDA und Aufzug in einem Funktionskonzept.",
          "Wiederkehrende Prüfung nach DGUV 205-040 und SV-Bau im Sonderbau – Protokolle im Anlagenbuch. Vertiefung: [RWA Prüffristen](/ratgeber/rwa-entrauchung-prueffristen).",
        ],
      },
      {
        id: "vertiefung",
        title: "Instandhaltung und Abnahme",
        paragraphs: [
          "Hochhaus-Entrauchung wird in NRW bei wiederkehrenden Prüfungen genauso kritisch gesehen wie BMA und RDA – fehlende Protokolle führen zu Nutzungseinschränkungen im Versammlungs- und Wohnkontext. Abgrenzung: Wartungsvertrag Aufzug ersetzt keine jährliche SK-Prüfung der Entrauchungsklappen im Treppenraum.",
          "Praxisfall: RDA-Druckstützung fiel im Winterbetrieb aus, weil Türdichtungen und Filter nicht im Wartungsplan standen – Nachweis der Instandhaltung war lückenhaft. Genehmigungspraxis: Funktionsmatrix BMA–RDA–Aufzug bei jeder größeren Anlagenänderung aktualisieren.",
          "Anlagenbuch mit Prüfberichten, Mängeln und Freigaben führen – [Prüffristen RWA](/ratgeber/rwa-entrauchung-prueffristen) und Hochhaus-Sonderbau gemeinsam planen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst § 110 SBauVO zusammen. Konkrete Auslegung im genehmigten Brandschutzkonzept maßgeblich.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/entrauchung-rauchableitung-bauo-sbauvo-nrw", label: "Entrauchung Hub" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus baulich" },
      { href: "/ratgeber/hochhaus-betriebsvorschriften-sbauvo-nrw", label: "Betrieb" },
      { href: "/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw", label: "BMA" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO" },
      { href: "/ratgeber/rwa-entrauchung-prueffristen", label: "RWA Prüfung" },
    ],
    faq: [
      {
        question: "Was verlangt § 110?",
        answer:
          "Entrauchbarkeit jedes Geschosses und der Installationsschächte in Hochhäusern.",
      },
      {
        question: "Druckbelüftung Pflicht?",
        answer:
          "Häufig für Treppenräume im Hochhaus – genau im Konzept.",
      },
      {
        question: "Wer wartet?",
        answer:
          "Eigentümer/Betreiber – oft Facility mit Fachfirma.",
      },
      {
        question: "Defekte Klappe?",
        answer:
          "Unverzüglich reparieren – Sicherheit Rettungsweg gefährdet.",
      },
      {
        question: "Bürohochhaus gleich?",
        answer:
          "Ja über 22 m – SBauVO Hochhaus.",
      },
      {
        question: "Bestand ohne Druckbelüftung?",
        answer:
          "Bestandskapitel prüfen – Nachrüstung bei Änderung/ Fristen.",
      },
    ],
  },
  {
    slug: "brandschutzuebung-betrieb-nrw",
    title: "Betriebliche Brandschutzübungen: Pflichten für BSB und Betrieb",
    excerpt:
      "Übungen und Unterweisungen sind Kern betrieblichen Brandschutzes – für Sonderbauten, Fluktuationshäuser und Gewerbe mit dokumentierter Evakuierung.",
    metaTitle: "Brandschutzübung Betrieb BSB | H&S+",
    metaDescription:
      "Brandschutzübung Betrieb: Evakuierungsübung, BSB Pflicht, Unterweisung, Dokumentation, Sonderbau, ASR, Brandschutzordnung.",
    keywords: [
      "Brandschutzübung",
      "Evakuierungsübung Pflicht",
      "BSB Übung",
      "betrieblicher Brandschutz Übung",
      "Brandschutzunterweisung",
      "Übungsprotokoll",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Üben statt nur Pläne haben",
        paragraphs: [
          "Betrieblicher Brandschutz verlangt Unterweisung und Übungen – [BSB](/ratgeber/bestellung-brandschutzbeauftragter-nrw), Brandschutzordnung, Gefährdungsbeurteilung.",
          "Sonderbauten und [Fluktuationshaus](/ratgeber/fluktuationshaus-evakuierung-nrw): Übungen besonders wichtig.",
          "Grenzfall ja: Hotel 80 Zimmer, jährliche Evakuierungsübung Nacht/Tag dokumentiert, Mängel nachgebessert. Grenzfall nein: VStätte 2.000 Plätze, letzte Übung vor fünf Jahren, Personal wechselt ständig.",
        ],
      },
      {
        id: "pflichten",
        title: "Was ist zu tun?",
        paragraphs: [
          "Regelmäßige Evakuierungsübungen – Häufigkeit objekt- und risikoabhängig.",
          "Unterweisung bei Eintritt und bei wesentlicher Änderung.",
          "[Alarmierung](/ratgeber/alarmierung-evakuierung-betrieb) praktisch testen.",
        ],
      },
      {
        id: "rollen",
        title: "BSB und Brandschutzhelfer",
        paragraphs: [
          "BSB plant und wertet Übungen aus.",
          "[Brandschutzhelfer](/ratgeber/brandschutzhelfer-ausbildung-anforderungen) unterstützen Räumung.",
          "Verantwortliche je Etage/ Schicht benennen.",
        ],
      },
      {
        id: "dokumentation",
        title: "Protokoll und Nachweise",
        paragraphs: [
          "Teilnehmer, Ablauf, Schwachstellen, Maßnahmen – [Dokumentation](/ratgeber/brandschutz-dokumentation-betrieb-nrw).",
          "Behörde und Versicherer können Nachweise anfordern.",
          "[Brandschau](/ratgeber/brandschau-koeln-feuerwehr) und [Eilbegehung](/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln).",
        ],
      },
      {
        id: "sonderbau",
        title: "Sonderbau und VStätte",
        paragraphs: [
          "[Versammlungsstätten Betrieb](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw): Übungen mit Veranstalter abstimmen.",
          "Hochhaus: [Betriebsvorschriften](/ratgeber/hochhaus-betriebsvorschriften-sbauvo-nrw) Evakuierungskonzept.",
          "Nicht nur BMA-Probe ohne Räumung.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: Übungen, Nachweis und Abgrenzung",
        paragraphs: [
          "Brandschutzübungen sind in Sonderbauten und größeren Betrieben in NRW oft Auflageninhalt im Brandschutzkonzept oder in der BSO – nicht nur freiwillige Best Practice. Abgrenzung: Evakuierungsübung ersetzt keine wiederkehrende Prüfung von BMA, RWA oder Feuerlöscher; Arbeitsschutz-Unterweisung ersetzt keine vollständige Evakuierung mit Feuerwehrkontakt.",
          "Praxisfall Versammlungsstätte: Jährliche Übung mit dokumentierten Zeiten, Sammelplatz und Rollen (Brandschutzhelfer, Evakuierungshelfer) – ohne Protokoll kein Nachweis bei Schau. Typische Behördenforderung: Abstimmung mit Alarmplan und Aufzugs-Brandfallsteuerung vor Übungstag.",
          "Protokolle mit Mängelliste und Fristen in die Betriebsdokumentation übernehmen – Fortschreibung der BSO Teil B bei geänderten Rettungswegen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst Übungspflichten betrieblich zusammen. Keine starre gesetzliche Jahresfrist für alle Betriebe – Gefährdungsbeurteilung und Sonderbau maßgeblich.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bestellung-brandschutzbeauftragter-nrw", label: "BSB" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Evakuierung" },
      { href: "/ratgeber/fluktuationshaus-evakuierung-nrw", label: "Fluktuationshaus" },
      { href: "/ratgeber/brandschutz-dokumentation-betrieb-nrw", label: "Dokumentation" },
      { href: "/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw", label: "VStätte Betrieb" },
    ],
    faq: [
      {
        question: "Wie oft Evakuierungsübung?",
        answer:
          "Risikoabhängig – jährlich oder in kürzeren Abständen bei hoher Nutzerzahl empfohlen.",
      },
      {
        question: "Ohne Ankündigung?",
        answer:
          "Übungen können angekündigt oder unangekündigt sein – Konzept mit BSB.",
      },
      {
        question: "Nur Feuerwehr kommt?",
        answer:
          "Nein – eigene Räumung durch Betrieb trainieren.",
      },
      {
        question: "Kleines Gewerbe?",
        answer:
          "Unterweisung Pflicht – volle Übung je nach Größe.",
      },
      {
        question: "Protokoll Pflicht?",
        answer:
          "Dokumentation dringend empfohlen und oft verlangt.",
      },
      {
        question: "Übung mit Gästen?",
        answer:
          "VStätte: mit Veranstalter und Behörde abstimmen – nicht störende Betriebszeiten.",
      },
    ],
  },
  {
    slug: "wassergefaehrdende-stoffe-lager-lau-nrw",
    title: "Wassergefährdende Stoffe: Brandschutz und LAU-Schnittstelle",
    excerpt:
      "Lager wassergefährdender Stoffe braucht parallel Brandschutz und Gewässerschutz – Rückhalt, Löschwasser, Abstände und Konzept.",
    metaTitle: "Wassergefährdende Stoffe Brandschutz | H&S+",
    metaDescription:
      "Wassergefährdende Stoffe Lager: Brandschutz LAU Schnittstelle, Rückhalteanlage, Löschwasser, TRGS 800, Gefahrstoff Lager NRW.",
    keywords: [
      "wassergefährdende Stoffe",
      "LAU Brandschutz",
      "Rückhalteanlage Lager",
      "Löschwasser Kontaminanten",
      "Gefahrstofflager Brandschutz",
      "TRGS 800 Lager",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Zwei Risiken, eine Lagerhalle",
        paragraphs: [
          "Lager wassergefährdender Stoffe (WGS): Brandgefahr plus Einleitungsgefahr ins Gewässer – LAU und Brandschutz parallel.",
          "Schnittstelle zu [Löschwasser Rückhalt](/ratgeber/loeschwasser-rueckhalt-konzept-nrw) und [TRGS 800](/ratgeber/trgs-800-brandschutz-gefahrstoffe-betrieb).",
          "Grenzfall ja: Chemielager mit Wandhydranten-Nachweis, Rückhaltebecken dimensioniert, LAU-Anzeige, BMA, BSO WGS. Grenzfall nein: Löschwasser läuft ungehindert in Kanal, kein Rückhalt bei WGS-Menge.",
        ],
      },
      {
        id: "lager",
        title: "Lagerung und Brandschutz",
        paragraphs: [
          "Brandabschnitte, Lagerhöhen, Zündquellen – [Industriebau](/ratgeber/industriebau-lagerhalle-indbaur-nrw).",
          "Abstände, Sprinkler/Löschanlage konzeptabhängig.",
          "Elektro und Heißarbeiten kontrollieren.",
        ],
      },
      {
        id: "rueckhalt",
        title: "Rückhalt und Löschwasser",
        paragraphs: [
          "Bei Brand: Löschwasser mit WGS aufgefangen – Volumen im Konzept.",
          "Verbindung zu [Löschwasser-Konzept](/ratgeber/loeschwasser-rueckhalt-konzept-nrw).",
          "Abpumpung und Entsorgung im Einsatzplan.",
        ],
      },
      {
        id: "lau",
        title: "LAU und Genehmigung",
        paragraphs: [
          "Anzeige/Genehmigung nach Wasserrahmenrichtlinie-Landesrecht – nicht nur Brandschutzgenehmigung.",
          "Fachplaner Gewässerschutz früh einbinden.",
          "Dokumentation für Behörden.",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb und Unterweisung",
        paragraphs: [
          "Leckage-Management, Wannen, Überfüllschutz.",
          "[DGUV Gefährdungsbeurteilung](/ratgeber/dguv-205-001-gefaehrdungsbeurteilung-brandschutz).",
          "Einsatzkräfte: WGS-Kennzeichnung und Löschmittelwahl.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis: LAU, Brandschutz und Abgrenzung",
        paragraphs: [
          "Wassergefährdende Stoffe (WGK) verbinden Gewässerschutzrecht mit betrieblichem Brandschutz – Lagerung in Rettungswegen oder ohne Auffangwannen ist in Begehungen ein Standardbefund. Abgrenzung: TRGS 510 und LAU regeln Mengen und Behälter; baulicher Brandschutz und Rauchableitung bleiben über BauO und Betrieb getrennt zu bewerten – ein WGK-Konzept ersetzt kein Brandschutzkonzept.",
          "Praxisfall Werkstatt: Kleinstmengen in offenen Behältern neben Heißarbeit – Behörde verlangte geschlossene Systeme, LAU-Register und Trennung von Zündquellen. In NRW prüfen Gewerbeaufsicht und Untere Wasserbehörde unterschiedliche Aspekte; ein gemeinsames Begehungsprotokoll spart Doppelarbeit.",
          "Nachweis: Betriebsanweisungen, Lagerplan mit WGK-Klassen und Wartungsnachweise für Auffangflächen gehören zur Dokumentation – Fortschreibung nach Umbau Pflicht.",
        ],
      },
      {
        id: "vertiefung",
        title: "Checkliste Lager und Behördenkontakt",
        paragraphs: [
          "Vor einer Begehung sollten Lagerliste mit WGK-Klassen, Auffangvolumen, Entwässerungsschutz und Abstand zu Zündquellen vorliegen – nicht nur das Sicherheitsdatenblatt in der Mappe. Unterschied zur reinen Gefahrstoffunterweisung: LAU verlangt mengen- und ortsbezogene Nachweise, die in der GBU oft nur pauschal erwähnt werden.",
          "Typische Behördenforderung bei gemischten Lagern: Trennung entzündbarer WGK-Stoffe von Oxidationsmitteln, Kennzeichnung nach TRGS 201 und Versiegelung von Bodenflächen. Praxisfall Chemielager: Rückhaltewanne undicht, Feuerlöscher direkt daneben – gemeinsame Maßnahmenliste Brandschutz und Gewässerschutz verhindert Widersprüche.",
          "Fortschreibung nach Umbau oder neuem Lieferantenstrom – Schnittstelle [Gefahrstofflagerung](/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz) und Betriebsanweisungen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber skizziert die Schnittstelle. LAU-Fachrecht und Betriebssicherheitsrecht sind eigenständig – Gesamtplanung nötig.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/loeschwasser-rueckhalt-konzept-nrw", label: "Löschwasser" },
      { href: "/ratgeber/trgs-800-brandschutz-gefahrstoffe-betrieb", label: "TRGS 800" },
      { href: "/ratgeber/industriebau-lagerhalle-indbaur-nrw", label: "Industriebau" },
      { href: "/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz", label: "Kraftstoff" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept" },
    ],
    faq: [
      {
        question: "Brandschutz oder LAU zuerst?",
        answer:
          "Parallel von Planungsbeginn – Schnittstellen Rückhalt/Löschwasser.",
      },
      {
        question: "Rückhaltebecken immer?",
        answer:
          "Bei relevantem WGS-Risiko und Löschwassermenge – Konzept/LAU.",
      },
      {
        question: "Kleines Labor?",
        answer:
          "Weniger Menge, aber gleiche Logik – Einzelfall.",
      },
      {
        question: "Welches Löschmittel?",
        answer:
          "WGS- und Stoffart beachten – nicht jedes Wasser löscht sinnvoll.",
      },
      {
        question: "Sonderbau?",
        answer:
          "Große Lager oft Sonderbau/IndBauR – Konzeptpflicht.",
      },
      {
        question: "Dokumentation?",
        answer:
          "LAU-Nachweise plus Brandschutz-Unterlagen – siehe Dokumentations-Ratgeber.",
      },
    ],
  },
];
