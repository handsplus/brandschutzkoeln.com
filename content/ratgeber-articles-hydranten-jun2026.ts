/**
 * Juni 2026 – Löschwasserversorgung Hydranten (AGBF/DFV/DVGW W 405).
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_HYDRANTEN_JUN2026: RatgeberArticle[] = [
  {
    slug: "loeschwasserversorgung-hydranten-verkehrsflaeche-dvgw-w405",
    title: "Löschwasserversorgung aus Hydranten in öffentlichen Verkehrsflächen",
    excerpt:
      "Hydranten in öffentlichen Verkehrsflächen: 75-Meter-Lauflinie zur ersten Entnahme, 300-Meter-Radius, Grundschutz 48 oder 96 m³/h über zwei Stunden – Nachweis im Brandschutznachweis nach DVGW W 405 für Wohn-, Misch- und Gewerbebebauung.",
    metaTitle: "Löschwasserversorgung Hydranten Verkehrsfläche | H&S+",
    metaDescription:
      "Löschwasserversorgung aus Hydranten in öffentlichen Verkehrsflächen: DVGW W 405 Grundschutz, 75 m Lauflinie, 150 m Abstand, 96 m³/h, 1,5 bar – Brandschutznachweis NRW.",
    keywords: [
      "Löschwasserversorgung aus Hydranten",
      "Löschwasserversorgung Hydranten",
      "DVGW W 405",
      "öffentliche Verkehrsfläche",
      "Grundschutz Löschwasser",
      "Hydrantenabstand",
      "Löschwasserbedarf l/min",
      "Brandschutznachweis Löschwasser",
      "DVGW W 400-1",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Was Feuerwehr und Bauherr unter Grundschutz verstehen",
        paragraphs: [
          "Wer in NRW plant oder genehmigt, muss die Löschwasserversorgung aus Hydranten in öffentlichen Verkehrsflächen nachweisen – Grundschutz für die Feuerwehr, nicht nur „Hydrant in der Nähe“ auf dem Plan.",
          "Maßgeblich sind die Informationen von AGBF (Arbeitsgemeinschaft der Leiter der Berufsfeuerwehren) und DFV (Deutscher Feuerwehrverband) in Abstimmung mit dem DVGW sowie DVGW-Arbeitsblatt W 405.",
          "Gemeint ist der Grundschutz für Wohn-, Misch-, Gewerbe- und Industriegebiete ohne erhöhte Brandgefahr – nicht Sonderbauten mit Objektschutz, eigene Löschwasserbehälter oder Industrierisiken nach Muster-Industriebau-Richtlinie.",
          "Für Bauherren und Planer in NRW knüpft der Nachweis an § 14 BauO NRW (ausreichende Löschwasserversorgung) und den Brandschutznachweis im Genehmigungsverfahren an – ergänzend zum [Gewerbe-Ratgeber](/ratgeber/loeschwasser-hydranten-gewerbe-koeln) und [Löschwasser im Konzept](/ratgeber/loeschwasser-rueckhalt-konzept-nrw).",
          "Grenzfall ja: Neubau Geschosswohnhaus in geschlossener Bebauung, Hydrant 65 m Lauflinie vom Grundstückseingang, 96 m³/h im 300-m-Radius nachgewiesen, 1,5 bar Betriebsdruck dokumentiert. Grenzfall nein: Hydrant 90 m entfernt, aber „steht auf dem Plan“ – ohne Lauflinie und Versorgerbestätigung.",
        ],
      },
      {
        id: "erste-loeschwasserentnahme",
        title: "75 Meter: erste Löschwasserentnahme und Rettung",
        paragraphs: [
          "Für den ersten Löschangriff und die Rettung von Menschen muss die Feuerwehr innerhalb von 75 Metern Lauflinie vom Grundstückseingang bis in die öffentliche Verkehrsfläche eine Löschwasserentnahme erreichen.",
          "Lauflinie bedeutet: tatsächlich begehbarer Weg – nicht Luftlinie. Zäune, Bahngleise, Hochhauskomplexe oder Sackgassen können den Weg verlängern und den Nachweis scheitern lassen.",
          "Als Entnahmestelle gilt in der Regel ein Unterflurhydrant oder Oberflurhydrant in der öffentlichen Verkehrsfläche. Eine Entnahme mit 400 l/min (24 m³/h) ist zulässig, wenn die Gesamtmenge des Grundschutzes im 300-m-Radius aus höchstens zwei Entnahmestellen sichergestellt ist.",
          "Verknüpfung [Feuerwehrzufahrt](/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw): Zufahrt und Hydrantenerreichbarkeit sind getrennt, aber im Konzept gemeinsam darzustellen.",
        ],
      },
      {
        id: "radius-und-abstaende",
        title: "300-Meter-Radius und 150-Meter-Hydrantenabstand",
        paragraphs: [
          "Die für den Grundschutz erforderliche Löschwassermenge muss innerhalb eines Radius von 300 Metern um das betroffene Gebäude bzw. den betroffenen Bereich nachgewiesen werden. Ungüberwindbare Hindernisse (z. B. Eisenbahn, Autobahn, große Gebäudekomplexe) können den Radius faktisch einschränken – dann ist die Lauflinie zu prüfen, nicht nur der Kreis auf dem Plan.",
          "Im örtlichen Versorgungsnetz soll der Abstand zwischen Hydranten 150 Meter nicht überschreiten – das ist die feuerwehrseitige Planungsgröße für die Netzstruktur.",
          "Aus Sicht der Trinkwasserversorgung (DVGW-Arbeitsblatt W 400-1) gelten andere Richtwerte für die Hydrantenanzahl: möglichst wenige Hydranten, typischerweise zwischen zwei Absperrarmaturen. Empfohlene maximale Abstände nach Bebauungsdichte: offene Bebauung bis 400 m, geschlossene Bebauung bis 300 m.",
          "Grenzfall ja: Zwei Hydranten im 300-m-Radius liefern gemeinsam 96 m³/h über 2 Stunden, Versorger bestätigt Druck. Grenzfall nein: Ein Hydrant mit 96 m³/h in 280 m Luftlinie, aber hinter Gleisanlage nur mit 450 m Lauflinie erreichbar.",
        ],
      },
      {
        id: "mengen-grundschutz",
        title: "Löschwasserbedarf: 48 und 96 m³/h über zwei Stunden",
        paragraphs: [
          "Für den Grundschutz gelten mindestens folgende Schüttungen (DVGW W 405, Orientierung AGBF/DFV):",
        ],
        list: [
          "Niedrige, freistehende Gebäude bis drei volle Geschosse: 800 l/min = 48 m³/h",
          "Übrige Gebäude: mindestens 1.600 l/min = 96 m³/h",
          "Bezugsgröße: mindestens zwei Stunden – die Feuerwehr muss diese Menge über die geforderte Dauer sichern können",
        ],
      },
      {
        id: "richtwerte-bauNVO",
        title: "Anhang DVGW W 405: Richtwerte nach baulicher Nutzung",
        paragraphs: [
          "Der Anhang zu DVGW-Arbeitsblatt W 405:2008-02 enthält Richtwerte für den Löschwasserbedarf (l/min) nach baulicher Nutzung (BauNVO § 17) und Gefahr der Brandausbreitung. Die Werte gelten für Normalfälle im Bebauungsplan – begründete Ausnahmen für Einzelobjekte sind möglich.",
          "Wohngebiete (WR, WA, WB), Mischgebiete (MI, MD): bei bis zu drei Geschossen und GFZ 0,3–0,7 typisch 800 l/min (kleine Brandausbreitungsgefahr) bis 1.600 l/min (mittel/groß). Höhere Geschosszahl oder GFZ kann 1.600 bis 3.200 l/min erfordern.",
          "Gewerbe- (GE) und Kerngebiete (MK): abhängig von Geschosszahl und GFZ zwischen 800 und 3.200 l/min.",
          "Industriegebiete (GI): nach BMZ und Brandausbreitungsgefahr häufig 1.600 oder 3.200 l/min – Industriebau kann höhere Anforderungen nach M-IndBauR haben.",
          "Brandausbreitungsgefahr klein/mittel/groß richtet sich nach überwiegender Bauart (feuerbeständig, hart/weich bedacht, Holzrahmenbau, Brandübertragung über Dächer) – Definition nach DIN 14011 Teil 2.",
        ],
      },
      {
        id: "druck-hygiene",
        title: "Betriebsdruck 1,5 bar und Trinkwasser-Grenzen",
        paragraphs: [
          "Der Betriebsdruck an der Hydrantenentnahmestelle darf bei Nennfördermenge nicht unter 1,5 bar fallen. Fällt der Druck bei Entnahme darunter, muss das Wasserversorgungsunternehmen einen höheren Mindestbetriebsdruck vorgeben – das betrifft Planung und Netzhydraulik.",
          "Hygienische Anforderungen der Trinkwasserverordnung (Rohrdurchmesser, Stagnation) können die technisch verfügbaren Wassermengen begrenzen. Versorger und Gemeinde klären Umsetzung und Kostenverteilung, wenn Hydrantenabstände nach DVGW W 400-1 größer sind oder das Netz nicht ausreicht.",
          "Alternativen bei unzureichender Versorgung: unterirdische Löschwasserbehälter, Löschwasserbrunnen oder Löschwasserteiche – Abstimmung zwischen Gemeinde und Wasserversorgungsunternehmen.",
        ],
      },
      {
        id: "bauantrag",
        title: "Nachweis im Brandschutznachweis und Bauantrag",
        paragraphs: [
          "Für den Bauantrag muss der Brandschutznachweis mindestens enthalten:",
        ],
        list: [
          "Die erforderliche Löschwassermenge in l/min bzw. m³/h",
          "Den Nachweis der ersten Löschwasserentnahme innerhalb von 75 Metern Lauflinie",
          "Den Nachweis der Gesamtmenge innerhalb des 300-m-Radius (Karte, Hydrantenstandorte, Versorgerangabe)",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fehler in der Praxis",
        paragraphs: [
          "Diese Punkte führen in Genehmigung und Brandschau häufig zu Nachforderungen:",
        ],
        list: [
          "Hydrant im Lageplan, aber nicht in der öffentlichen Verkehrsfläche oder nicht betriebsbereit",
          "Nur Luftlinie statt Lauflinie für 75-m- und 300-m-Nachweis",
          "96 m³/h pauschal ohne Prüfung der Gebäudenutzung und Brandausbreitungsgefahr nach W 405-Anhang",
          "Keine schriftliche Stellungnahme des Versorgers – nur Annahme „stadtseitig vorhanden“",
          "Objektschutz (eigene Hydranten auf dem Grundstück) mit Grundschutz verwechselt – siehe [Löschwasser Gewerbe](/ratgeber/loeschwasser-hydranten-gewerbe-koeln)",
        ],
      },
      {
        id: "ablauf",
        title: "Abstimmung Versorger, Gemeinde und Feuerwehr",
        paragraphs: [
          "Bewährter Ablauf: Lageplan mit Grundstückseingang, Lauflinien und Hydranten → Anfrage beim Wasserversorgungsunternehmen (Schüttung, Druck, Hydrantenstatus) → Ergebnis in Anhang des Brandschutzkonzepts → Stellungnahme Feuerwehr vor Einreichung beim Bauamt.",
          "Details Unterlagenpaket: [Bauantrag Brandschutz](/ratgeber/bauantrag-brandschutz-unterlagen-koeln), Reihenfolge: [Feuerwehr vor Bauamt](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst die AGBF/DFV-Information zur Löschwasserversorgung aus Hydranten (Stand DVGW W 405/W 400-1) zusammen. Kommunale Netzlage, Sonderbauten und Industrieobjekte können abweichen – ersetzt keine Versorgerfestlegung und keine behördliche Einzelfallentscheidung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/loeschwasser-hydranten-gewerbe-koeln", label: "Löschwasser Gewerbe" },
      { href: "/ratgeber/loeschwasser-rueckhalt-konzept-nrw", label: "Löschwasser Konzept" },
      { href: "/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw", label: "Feuerwehrzufahrt" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag" },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen 75 m und 300 m?",
        answer:
          "75 m Lauflinie: erste Entnahme für Löschangriff und Rettung vom Grundstückseingang. 300 m Radius: Nachweis, dass die Gesamtmenge des Grundschutzes (48 oder 96 m³/h über 2 h) aus dem Netz verfügbar ist.",
      },
      {
        question: "Gilt 96 m³/h für jedes Gebäude?",
        answer:
          "Nein. Niedrige freistehende Gebäude bis drei volle Geschosse: 48 m³/h. Übrige Gebäude mindestens 96 m³/h. DVGW W 405-Anhang kann nach Nutzung und Brandausbreitungsgefahr höhere Werte verlangen.",
      },
      {
        question: "Was bedeutet öffentliche Verkehrsfläche?",
        answer:
          "Straßen, Wege und Plätze der öffentlichen Erschließung – dort stehen in der Regel die Hydranten des Versorgungsnetzes, nicht auf privatem Grundstück.",
      },
      {
        question: "Reicht ein Hydrant auf dem Nachbargrundstück?",
        answer:
          "Nur wenn er in der öffentlichen Verkehrsfläche liegt, betriebsbereit ist und die Lauflinie sowie Schüttung/Druck den Nachweis erfüllen – schriftlich durch Versorger belegen.",
      },
      {
        question: "Was ist, wenn der Druck unter 1,5 bar fällt?",
        answer:
          "Das Versorgungsunternehmen muss einen höheren Mindestbetriebsdruck festlegen oder das Netz anpassen – ohne das ist der Nachweis nicht belastbar.",
      },
      {
        question: "Ersetzt DVGW W 405 die BauO NRW?",
        answer:
          "Nein. § 14 BauO NRW verlangt ausreichende Löschwasserversorgung; W 405 und AGBF/DFV-Info konkretisieren den Grundschutz über Hydranten für die Feuerwehrplanung.",
      },
      {
        question: "Brauche ich eigene Hydranten auf dem Grundstück?",
        answer:
          "Für reinen Grundschutz in gut versorgten Gebieten oft nein – Objektschutz oder unzureichendes Netz können Löschwasserbehälter oder Flächenhydranten auf dem Grundstück erforderlich machen.",
      },
      {
        question: "Wo finde ich die Richtwerte nach Wohn- und Gewerbegebiet?",
        answer:
          "Im Anhang zu DVGW-Arbeitsblatt W 405:2008-02 – nach BauNVO-Nutzung, GFZ/BMZ und Brandausbreitungsgefahr (klein/mittel/groß).",
      },
    ],
  },
];
