/**
 * Juni 2025 – 4 Artikel (Qualitätsrhythmus: 4/Monat).
 * Quellen: SBauVO NRW, Handlungsempfehlung BauO NRW 2018.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_JUNE: RatgeberArticle[] = [
  {
    slug: "beherbergungsstaetten-hotel-sonderbau-nrw",
    title: "Hotel und Beherbergung NRW: Was gilt ab 12, 30 und 60 Gastbetten?",
    excerpt:
      "Rauchwarnmelder je Raum für alle; ab > 12 Gastbetten SBauVO Teil 2; ab > 30 Betten großer Sonderbau; ab > 60 Gastbetten BMA, BSO und Feuerwehrpläne.",
    metaTitle: "Hotel Brandschutz NRW: 12/30/60 Betten | H&S+",
    metaDescription:
      "Beherbergung NRW: Rauchwarnmelder für alle, SBauVO Teil 2 ab >12 Betten, großer Sonderbau ab >30, BMA ab >60 Gastbetten. Ferienwohnungen ausgenommen.",
    keywords: [
      "Beherbergungsstätte Brandschutz",
      "Hotel Sonderbau NRW",
      "Gastbetten Schwelle",
      "SBauVO Beherbergung",
      "Hotel Rettungsweg",
      "Pension Brandschutz NRW",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Welche Schwellen gelten für Hotels in NRW?",
        paragraphs: [
          "§ 55 Abs. 2 SBauVO (Rauchwarnmelder je Beherbergungsraum) gilt für alle Beherbergungsstätten – auch mit höchstens 12 Gastbetten. Mehr als 12 Gastbetten: SBauVO Teil 2 vollständig. Mehr als 30 Betten: großer Sonderbau nach § 50 Abs. 2 Nr. 11 BauO NRW und verschärftes § 56. Mehr als 60 Gastbetten: BMA mit Leitstelle, selbsttätige Alarmierung, Aufzug-Brandfallsteuerung, Brandschutzordnung und Feuerwehrpläne; zweiter Rettungsweg nicht über Feuerwehrleitern.",
          "Ferienwohnungen sind ausgenommen (§ 48). Erleichterungen der BauO für Gebäudeklassen 1 und 2 sind in Teil 2 unanwendbar. Eine Suite zählt als ein Beherbergungsraum. Stichflur: max. 15 m von der Tür des Beherbergungsraums zum notwendigen Treppenraum oder Ausgang ins Freie.",
        ],
        table: {
          caption: "Schwellen Beherbergung SBauVO / BauO",
          headers: ["Schwelle", "Folge"],
          rows: [
            ["alle / auch ≤ 12 Gastbetten", "Rauchwarnmelder je Beherbergungsraum (§ 55 Abs. 2; § 47 Satz 2)"],
            ["> 12 Gastbetten", "SBauVO Teil 2 vollständig (§ 47 Satz 1)"],
            ["> 30 Betten", "großer Sonderbau § 50 Abs. 2 Nr. 11 BauO; Konzept; verschärftes § 56"],
            ["> 60 Gastbetten", "BMA + Leitstelle, selbsttätige Alarmierung, Aufzugsteuerung, BSO, Feuerwehrpläne"],
            ["Funk", "nur > 60 Gastbetten UND Störung der Feuerwehr-Funkkommunikation – keine Pauschale"],
          ],
        },
      },
      {
        id: "rettungswege",
        title: "Rettungswege und Flure",
        paragraphs: [
          "Jeder Beherbergungsraum: mindestens zwei voneinander unabhängige Rettungswege. Beide dürfen im Geschoss über denselben notwendigen Flur führen.",
          "In Beherbergungsstätten mit insgesamt nicht mehr als 60 Gastbetten kann der zweite Weg über Rettungsgeräte der Feuerwehr genügen – nicht, wenn in einem nicht zu ebener Erde liegenden Geschoss mehr als 30 Gastbetten vorhanden sind (§ 49). Ab > 60 Gastbetten gilt das nicht mehr in dieser Form.",
          "Grenzfall ja: Pension 20 Betten mit Rauchwarnmeldern und Teil-2-Rettungswegen. Grenzfall nein: „ab 13 Betten braucht man eine BMA“ – falsch; BMA erst > 60 Gastbetten.",
        ],
      },
      {
        id: "bauteile",
        title: "Tragwerk, Trennwände, Brandwände",
        paragraphs: [
          "Tragende Wände, Stützen, Decken: feuerbeständig – mit Erleichterungen bei kleinen Häusern (bis 3 OG / 30 Gastbetten). Trennwände zwischen Beherbergungsräumen und zu fremden Nutzungen: feuerhemmend, wo Tragwerk nur feuerhemmend sein darf.",
          "Türen von notwendigen Fluren zu Beherbergungsräumen: feuerhemmend und rauchdicht (RS) – bei BMA nach § 55 Abs. 3 genügen teils dichtschließende Türen.",
        ],
      },
      {
        id: "technik",
        title: "Alarmierung, BMA, Funk",
        paragraphs: [
          "Alarmierungseinrichtungen: in Teil 2 vorgesehen. BMA mit Leitstelle und selbsttätiger Alarmierung: erst > 60 Gastbetten. Bis dahin: Rauchwarnmelder je Raum – das ist keine BMA. Gesamtüberblick Einbau: [BMA-Pflicht](/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw). Prüfung vorhandener Anlagen: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) (BMA max. 3 Jahre; Behördenprüfung § 10 erst > 60 Betten).",
          "Funkunterstützung: nur bei mehr als 60 Gastbetten, wenn die bauliche Anlage die Funkkommunikation der Feuerwehr stört – keine pauschale Funkpflicht ohne Störung.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Hotel vs. Pflege vs. Ferienwohnung",
        paragraphs: [
          "[Pflegeeinrichtung](/ratgeber/pflegeeinrichtung-sonderbau-nrw): Pflege und Betreuung – nicht Hotel. Ferienwohnung: ausgenommen (§ 48). Betrieb: [Alarmierung und Evakuierung](/ratgeber/alarmierung-evakuierung-betrieb).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO NRW Teil 2 zusammen. Bestand: § 58 SBauVO. Kein Ersatz für Brandschutzkonzept und behördliche Einordnung (Boardinghaus, Monteurzimmer).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw", label: "BMA-Pflicht § 55" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Prüffristen" },
      { href: "/ratgeber/pflegeeinrichtung-sonderbau-nrw", label: "Pflegeeinrichtung" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung" },
    ],
    faq: [
      {
        question: "Ab wann gilt SBauVO Teil 2 für Hotels?",
        answer:
          "Bei Beherbergungsstätten mit mehr als zwölf Gastbetten. Ferienwohnungen sind ausgenommen. Rauchwarnmelder je Beherbergungsraum gelten auch darunter.",
      },
      {
        question: "Braucht jedes Hotel eine BMA?",
        answer:
          "Nein. BMA mit Leitstelle erst bei mehr als 60 Gastbetten. Bis dahin: Rauchwarnmelder je Beherbergungsraum und Alarmierungseinrichtungen nach Teil 2 – keine BMA.",
      },
      {
        question: "Was ändert sich ab mehr als 30 Betten?",
        answer:
          "Großer Sonderbau nach § 50 Abs. 2 Nr. 11 BauO NRW, Brandschutzkonzept und verschärfte Barrierefreiheit nach § 56. Feuerwehr-Leiterrettung als zweiter Weg entfällt, wenn in einem OG mehr als 30 Gastbetten liegen.",
      },
      {
        question: "Ist Funkverstärkung immer Pflicht ab 60 Betten?",
        answer:
          "Nein. Nur wenn die bauliche Anlage die Funkkommunikation der Feuerwehr stört.",
      },
      {
        question: "Zählt eine Suite als mehrere Räume?",
        answer:
          "Nein. Eine Folge unmittelbar zusammenhängender Beherbergungsräume (Suite) gilt als ein Beherbergungsraum.",
      },
      {
        question: "Dürfen GK-1/2-Erleichterungen der BauO genutzt werden?",
        answer:
          "Nein – in SBauVO Teil 2 unanwendbar (§ 48 Abs. 4).",
      },
    ],
  },
  {
    slug: "versammlungsstaetten-baulich-sbauvo-nrw",
    title: "Versammlungsstätten baulich: SBauVO Teil 1 jenseits des Betriebs",
    excerpt:
      "Der März-Artikel regelt BSO und Räumung im Betrieb. Baulich verlangt SBauVO Teil 1 Trennwände, Bühnenabschlüsse, Rettungswegbreiten und Besucherplatz-Bemessung – ab 200 Personen.",
    metaTitle: "Versammlungsstätte baulich SBauVO | H&S+",
    metaDescription:
      "Versammlungsstätte baulicher Brandschutz NRW: SBauVO Teil 1, Bühnenhaus, feuerbeständige Trennwand, Rettungswege, Besucherplätze – Planung.",
    keywords: [
      "Versammlungsstätte baulich",
      "SBauVO Teil 1",
      "Bühnenhaus Brandschutz",
      "Versammlungsraum 200 Personen",
      "Besucherplätze Bemessung",
      "Theater Brandschutz NRW",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Baulich vs. Betrieb",
        paragraphs: [
          "Versammlungsstätten sind Sonderbauten nach § 50 Abs. 2 Nr. 6 BauO NRW. [Betrieb, BSO, Räumung](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw) regelt MVStättVO und SBauVO Kapitel 4 – dieser Artikel: bauliche Anforderungen SBauVO Teil 1 bei Planung und Genehmigung.",
          "Teil 1 gilt u. a. für Versammlungsräume einzeln über 200 Besucher oder mehrere Räume mit gemeinsamen Rettungswegen über 200 gesamt; Freiluft-VStätten mit Szenen/Tribünen ab 1.000 Besuchern.",
          "Wichtig: Ein Raum, der einmalig oder nur gelegentlich für Veranstaltungen mit mehr als 200 Besuchern genutzt wird, wird dadurch noch nicht zum Versammlungsraum nach § 50 Abs. 2 Nr. 6 a – siehe [gelegentliche Veranstaltung](/ratgeber/veranstaltung-gelegentliche-nutzungsaenderung-bauo-nrw) (RdErl. 17.06.2024).",
          "Grenzfall ja: Stadthalle 350 Plätze, feuerbeständige Trennwand Bühne/Zuschauerhaus, Rettungswege min. 1,20 m, Besucherplätze nach SBauVO-Bemessung im Konzept. Grenzfall nein: Eventlocation 220 Personen ohne bauliche Zweitwege – nur Betriebskonzept reicht nicht.",
        ],
      },
      {
        id: "begriffe",
        title: "Bühnenhaus, Zuschauerhaus, Besucherplätze",
        paragraphs: [
          "Zuschauerhaus: Versammlungsräume und baulich verbundene Räume. Bühnenhaus: Bühnen und zugehörige Räume. Bühnenöffnung: Öffnung zwischen Hauptbühne und Versammlungsraum.",
          "Besucherplätze bemessen nach Bestuhlung: z. B. Stehplätze mindestens zwei Personen je m² Grundfläche – nicht zugängliche Flächen nicht mitrechnen.",
          "Szenenfläche hinter Bühnenöffnung über 200 m² oder Oberbühne mit lichten Höhen über 2,5 m lösen zusätzliche Anforderungen aus – Theater und Konzerthäuser früh einbinden.",
        ],
      },
      {
        id: "trennung",
        title: "Trennwände und Bühnenbrand",
        paragraphs: [
          "Trennwände zum Abschluss von Versammlungsräumen und Bühnen – feuerbeständig, in kleineren VStätten mindestens feuerhemmend.",
          "Trennwand zwischen Bühne und Versammlungsraum: feuerbeständig in Brandwand-Bauart; Türen feuerbeständig und selbstschließend – Kernpunkt bei Bühnenbränden.",
          "Bühne: max. 30 m bis zum nächsten Ausgang; Gänge min. 1,20 m licht; Großbühnen zusätzliche Anforderungen.",
        ],
      },
      {
        id: "rettungswege",
        title: "Rettungswege und Breiten",
        paragraphs: [
          "Rettungswege von Versammlungsräumen: lichte Mindestbreite je Teil mindestens 1,20 m – bei bis 200 Plätzen und im Bühnenhaus teils 1,00 m.",
          "Verknüpfung [Fluchtwege BauO](/ratgeber/flucht-und-rettungswege-bauo-nrw) und [Konzept §9](/ratgeber/brandschutzkonzept-baupruefvo-nrw): Nutzerzahl, Entrauchung, Sicherheitsbeleuchtung.",
          "Feuerwehrzufahrten und Aufstellflächen für Einsatzfahrzeuge bei großen VStätten – [Feuerwehrzufahrt](/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw) gesondert.",
        ],
      },
      {
        id: "technik",
        title: "Technische Anlagen im Bau",
        paragraphs: [
          "BMA, RWA, Sprinkler je nach Konzept und Raumgröße – ab 1.000 m² Versammlungsraum zentrale Bedienung zusätzlich zu örtlichen Schaltern.",
          "Funkverstärkung bei Störung der Einsatzkommunikation; Wandhydranten Typ F gut sichtbar.",
          "Nach Inbetriebnahme: [PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau); Bestand § 45 SBauVO.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Genehmigung und Betrieb",
        paragraphs: [
          "Versammlungsstätten baulich: SBauVO Teil 1 jenseits des Betriebs löst in NRW häufig ein Brandschutzkonzept oder eine Stellungnahme aus – auch wenn kein SBauVO-Typ exakt passt. Abgrenzung: Gebäudeklasse allein definiert den Sonderbau nicht; Bestandsschutz ersetzt keine Gefahrenabwehr bei Nutzungsänderung.",
          "Praxisfall: Teilnutzung ohne Fortschreibung von Plänen und BSO – Abnahme verzögert bis Konzept und ASR-Pläne zum genehmigten Stand passten. Behördenforderung: Evakuierung und Anlagentechnik gemeinsam prüfen.",
          "Nachweis: Genehmigungsunterlagen, Betriebsdokumentation und Übungsprotokolle im Ordner Sonderbau führen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO NRW Teil 1 (baulich) zusammen – nicht MVStättVO-Betrieb. Fliegende Bauten und Freiluft-VStätten haben Zusatzregeln. Er ersetzt kein Brandschutzkonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/veranstaltung-gelegentliche-nutzungsaenderung-bauo-nrw", label: "Gelegentliche Veranstaltung" },
      { href: "/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw", label: "Betrieb & BSO" },
      { href: "/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw", label: "Feuerwehrzufahrt" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zum Betriebs-Artikel?",
        answer:
          "März-Artikel: MVStättVO, BSO, Räumung, Ordnungsdienst. Dieser Artikel: bauliche SBauVO Teil 1 bei Neubau/Umbau.",
      },
      {
        question: "Ab wann gilt SBauVO Teil 1?",
        answer:
          "Versammlungsraum über 200 Besucher einzeln oder mehrere Räume über 200 gesamt mit gemeinsamen Rettungswegen.",
      },
      {
        question: "Warum ist die Bühnenwand so streng?",
        answer:
          "Brand auf der Bühne soll nicht ungehindert ins Zuschauerhaus übertragen – feuerbeständige Trennwand in Brandwand-Bauart.",
      },
      {
        question: "Wie werden Besucherplätze gezählt?",
        answer:
          "Nach SBauVO-Bemessung – Bestuhlung, Stehplätze je m², ohne nicht zugängliche Flächen.",
      },
      {
        question: "Brauche ich ein vollständiges Konzept?",
        answer:
          "Bei genehmigungspflichtigem Sonderbau in der Regel ja – Besucherzahl, Wege, Anlagen nach BauPrüfVO §9.",
      },
      {
        question: "Gilt das für Escape Rooms?",
        answer:
          "Escape Room kann Versammlungsstätten- oder Sonderbau-Tatbestand auslösen – Einzelfall; baulich und betrieblich getrennt prüfen.",
      },
    ],
  },
  {
    slug: "genehmigungsfrei-garage-freischank-bauo-nrw",
    title: "Genehmigungsfreie Vorhaben: Garagen, Freischank und die Brandschutz-Falle",
    excerpt:
      "§ 62 BauO NRW erlaubt vieles ohne Baugenehmigung – aber nicht ohne Brandschutz. Garagen bis 30 m², Freischank bis 40 m²: wann genehmigungsfrei trotzdem Nachweis und Auflagen braucht.",
    metaTitle: "Genehmigungsfrei §62 BauO: Brandschutz | H&S+",
    metaDescription:
      "§ 62 BauO NRW genehmigungsfrei: Garage 30 m², Freischank 40 m², Wintergarten – Brandschutzpflichten bleiben. Handlungsempfehlung NRW.",
    keywords: [
      "genehmigungsfrei BauO NRW",
      "§ 62 BauO NRW",
      "Freischankfläche Brandschutz",
      "Garage 30 m² genehmigungsfrei",
      "Brandschutz ohne Baugenehmigung",
      "Wintergarten genehmigungsfrei",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Genehmigungsfrei ≠ brandschutzfrei",
        paragraphs: [
          "§ 62 BauO NRW listet genehmigungsfreie Bauvorhaben – isoliert, ohne funktionalen Zusammenhang mit größerem Vorhaben. Die Handlungsempfehlung der Bauaufsicht NRW (2018) präzisiert die Auslegung.",
          "Wichtig: Genehmigungsfreiheit entbindet nicht von öffentlich-rechtlichen Anforderungen – Brandschutz, Abstandsflächen, Stellplätze bleiben. Bauaufsicht kann eingreifen, wenn Vorschriften verletzt werden.",
          "Grenzfall ja: Freischank 35 m² an Gaststätte, genehmigungsfrei nach § 62 Abs. 1 Nr. 10 f), aber Räumungswege, Feuerlöscher, ggf. Sonderbau-Umfeld des Gastbetriebs bleiben relevant. Grenzfall nein: „Steht unter § 62, brauchen wir kein Brandschutz“ – Feuerwehrzufahrt blockiert, Rettungsweg fehlt.",
        ],
      },
      {
        id: "garagen",
        title: "Garagen und Stellplätze bis 30 m²",
        paragraphs: [
          "§ 62 Abs. 1 Nr. 1 b) BauO NRW: Garagen und überdachte Stellplätze genehmigungsfrei mit mittlerer Wandhöhe bis 3 m – Brutto-Grundfläche aller genehmigungsfrei errichteten Garagen/Stellplätze auf dem Grundstück zusammen max. 30 m².",
          "Mehrere kleine Garagen: Summe 30 m², nicht je Garage. Überschreitung → Genehmigungsbedürftigkeit und ggf. [Mittelgarage SBauVO](/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw) ab 100 m².",
          "In Abstandsflächen: § 6 Abs. 8 BauO – privilegierte Nebenanlagen nur bis 30 m³ bzw. eingeschränkter – Abstand und Brandwand-Thema bleibt.",
        ],
      },
      {
        id: "freischank",
        title: "Freischankflächen bis 40 m²",
        paragraphs: [
          "§ 62 Abs. 1 Nr. 10 f): Errichtung und Änderung von Freischankflächen bis 40 m² inkl. verbundener Nutzungsänderung Gaststätte oder Verkaufsstelle Lebensmittelhandwerk – genehmigungsfrei.",
          "Freischank: im Freien liegender Teil der Gaststätte/Verkaufsstelle zum Verzehr vor Ort – nicht jede Terrasse mit Tischen.",
          "Brandschutz: [Gastronomie](/ratgeber/feuerloescher-gastronomie-koeln), Fluchtwege aus dem Gastbetrieb, Heißarbeiten, Fettbrand – genehmigungsfrei heißt nicht MVStättVO/SBauVO-frei, wenn Sonderbau-Tatbestand des Hauptbetriebs besteht.",
        ],
      },
      {
        id: "weitere",
        title: "Weitere genehmigungsfreie Vorhaben mit BS-Bezug",
        paragraphs: [
          "Wintergarten bis 30 m² BGF (GK 1–3), Terrassenüberdachung, Balkonverglasung – brandschutztechnisch: Anbindung ans Gebäude, Brandabschnitt, ggf. Rauchübertragung.",
          "Aufschüttung/Abgrabung bis 30 m² (Außenbereich bis 400 m²) – Rettungswege und Entwässerung; nicht Brandschutz-Kern, aber bei Zufahrten relevant.",
          "Keine Bauvorlagen bei rein genehmigungsfreien Vorhaben – trotzdem Dokumentation für Versicherung und spätere Umbauten sinnvoll.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fehler",
        paragraphs: [
          "Freischank + Innenraum-Erweiterung als ein Vorhaben – funktionaler Zusammenhang kann Genehmigungspflicht für Gesamtvorhaben auslösen.",
          "Dritte Garage à 15 m² auf demselben Grundstück – Summe 45 m², § 62 überschritten.",
          "Genehmigungsfreier Wintergarten an GK-4-Gebäude – andere Grenzen als GK 1–3; Fachplanung prüfen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst § 62 BauO NRW und Handlungsempfehlung 2018 zusammen. Lokale Auslegung kann variieren. Er ersetzt keine Bauaufsichts-Anfrage und keinen Sonderbau-Nachweis des Hauptgebäudes.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw", label: "Mittel-/Großgaragen" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Ladenlokal" },
      { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Feuerlöscher Gastronomie" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzeptpflicht" },
    ],
    faq: [
      {
        question: "Heißt genehmigungsfrei ohne Brandschutz?",
        answer:
          "Nein. Öffentlich-rechtliche Anforderungen inkl. Brandschutz gelten weiter; nur das Genehmigungsverfahren entfällt bei §-62-Tatbestand.",
      },
      {
        question: "Wie viele Garagen à 20 m² sind erlaubt?",
        answer:
          "Summe aller genehmigungsfrei errichteten Garagen/Stellplätze max. 30 m² auf dem Grundstück – nicht pro Gebäude einzeln unbegrenzt.",
      },
      {
        question: "Was ist eine Freischankfläche?",
        answer:
          "Im Freien gelegener Verzehrbereich einer Gaststätte oder Lebensmittelhandwerks-Verkaufsstelle – bis 40 m² genehmigungsfrei änderbar.",
      },
      {
        question: "Brauche ich für Freischank ein Konzept?",
        answer:
          "Nicht wegen § 62 allein – aber der Hauptbetrieb kann Sonderbau sein; dann gilt dessen Nachweis inkl. Außenbereich.",
      },
      {
        question: "Wintergarten genehmigungsfrei – und Brandschutz?",
        answer:
          "Anbindung an Gebäudehülle prüfen: Brandabschnitt, Wärmedämmung, ggf. Rauch – unabhängig von § 62.",
      },
      {
        question: "Wer prüft bei genehmigungsfreien Vorhaben?",
        answer:
          "Kein Antragsverfahren – bei Verstößen dennoch Bauaufsicht; bei Schaden Versicherung und Haftung.",
      },
    ],
  },
  {
    slug: "feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw",
    title: "Feuerwehrzufahrt und Bewegungsflächen nach SBauVO § 93",
    excerpt:
      "Rettungswege im Gebäude nützen wenig, wenn Löschfahrzeuge nicht ranfahren. SBauVO § 93 und BauPrüfVO verlangen Zufahrten, Aufstell- und Bewegungsflächen – dauerhaft frei und gekennzeichnet.",
    metaTitle: "Feuerwehrzufahrt SBauVO §93 NRW | H&S+",
    metaDescription:
      "Feuerwehrzufahrt NRW: §93 SBauVO, Bewegungsflächen, Aufstellflächen, Kennzeichnung, Löschwasser – Planung Sonderbau und Gewerbe.",
    keywords: [
      "Feuerwehrzufahrt Brandschutz",
      "Bewegungsfläche Feuerwehr",
      "SBauVO § 93",
      "Aufstellfläche Löschfahrzeug",
      "Zufahrt Sonderbau",
      "Feuerwehrplan Zufahrt",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Grundstück und Gebäude zusammen",
        paragraphs: [
          "§ 33 BauO NRW regelt Rettungswege im Gebäude – § 5 BauO NRW und SBauVO § 93 ergänzen: Zufahrten, Durchfahrten, Aufstell- und Bewegungsflächen für die Feuerwehr auf dem Grundstück. Gesetzliche Übersicht: [Feuerwehrzufahrten § 5](/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw).",
          "Im Brandschutzkonzept nach [BauPrüfVO §9](/ratgeber/brandschutzkonzept-baupruefvo-nrw) sind Feuerwehrzufahrten Pflichtinhalt – mit Löschwassermenge, Hydranten, Rückhalteanlagen.",
          "Grenzfall ja: Neues Gewerbegebäude, Zufahrt 4 m breit, Wendemöglichkeit, Hydrant im Konzept, dauerhafte Kennzeichnung, keine Parkplatz-Überbauung. Grenzfall nein: Sonderbau genehmigt, Zufahrt zugeparkt und mit Müllcontainern – Betrieb verletzt § 93 und Betreiberpflichten.",
        ],
      },
      {
        id: "anforderungen",
        title: "Was § 93 verlangt",
        paragraphs: [
          "Ausreichende Zu- oder Durchfahrten und Bewegungsflächen für Einsatz- und Rettungsfahrzeuge der Feuerwehr – Größe und Anzahl projektspezifisch nach Konzept und Feuerwehrplanung.",
          "Kennzeichnung der Zufahrten und Bewegungsflächen – dauerhaft und gut sichtbar.",
          "Von Zufahrten und Aufstellflächen müssen Eingänge der baulichen Anlage erreichbar sein – besonders bei [Versammlungsstätten](/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw) und großen [Verkaufsstätten](/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw).",
        ],
      },
      {
        id: "betrieb",
        title: "Freihalten im laufenden Betrieb",
        paragraphs: [
          "Rettungswege auf dem Grundstück sowie Zufahrten und Aufstellflächen müssen ständig frei gehalten werden – dauerhafte Hinweisbeschilderung.",
          "Typische Verstöße: dauerhaftes Parken auf Feuerwehrzufahren, Container, Fahrradständer, Winterdienst-Schnee, Baustellenabsperrung ohne Ausweichkonzept.",
          "Betreiberhaftung: Versammlungsstätten-Betrieb und Hochhaus-Eigentümer müssen Zusammenarbeit mit Feuerwehr sicherstellen – Verknüpfung [Feuerwehrplan](/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln) und [BSO](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw).",
        ],
      },
      {
        id: "loeschwasser",
        title: "Löschwasser und Hydranten",
        paragraphs: [
          "Konzeptpflicht: Nachweis erforderliche Löschwassermenge und Versorgung, Hydrantenstandorte – [Löschwasser Gewerbe](/ratgeber/loeschwasser-hydranten-gewerbe-koeln).",
          "Zufahrt ohne Löschwasser reicht nicht – beides gehört zur abwehrenden Feuerwehrplanung.",
          "Bei Umbauten: Zufahrt darf durch Neubauten auf dem Grundstück nicht verschlechtert werden – Fortschreibung Konzept.",
        ],
      },
      {
        id: "planung",
        title: "Planung und Abstimmung",
        paragraphs: [
          "Frühzeitige [Feuerwehr-Abstimmung](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw) – Prüfingenieur Brandschutz prüft unter Beachtung der örtlichen Feuerwehr.",
          "Großbühnen und Stadien: besondere Zufahrten für Einsatz- und Rettungsfahrzeuge, Räume für Einsatzleitung.",
          "Bestand: bei Nutzungsänderung Zufahrt neu bewerten – nicht nur Innenraum-Umbau.",
        ],
      },
      {
        id: "vertiefung",
        title: "Praxis: Betrieb und Nachweisführung",
        paragraphs: [
          "Feuerwehrzufahrt und Bewegungsflächen nach SBauVO § 93 gehört in NRW in die laufende Betriebsdokumentation – nicht nur in die Eröffnungsphase. Abgrenzung: Genehmigungskonzept ersetzt keine wiederkehrende Instandhaltung; Unterweisung ersetzt keine Übung.",
          "Praxisfall: Bei Begehung fehlten Fortschreibungen nach Umbau – Auflage mit Frist bis zur Nachreichung aktualisierter Pläne oder Protokolle. Orientierungswert: Verantwortliche und Prüfintervalle schriftlich benennen.",
          "Nachweis für Geschäftsführung und Versicherung: Ordner Brandschutz Betrieb mit Index und Versionsdatum.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO § 93 und BauO-Grundstückslogik zusammen. Konkrete Maße (Breite, Tragfähigkeit, Wendekreis) sind projekt- und feuerwehrspezifisch im Konzept. Er ersetzt keinen Feuerwehrplan.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw", label: "Feuerwehr-Flächen § 5" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/loeschwasser-hydranten-gewerbe-koeln", label: "Löschwasser" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr-Abstimmung" },
      { href: "/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln", label: "Feuerwehrplan" },
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "Versammlungsstätte baulich" },
    ],
    faq: [
      {
        question: "Wo steht die Feuerwehrzufahrt im Gesetz?",
        answer:
          "§ 5 BauO NRW für alle Gebäude; SBauVO § 93 für Hochhäuser; im Konzept BauPrüfVO § 9 als Pflichtangabe.",
      },
      {
        question: "Wie breit muss eine Zufahrt sein?",
        answer:
          "Projektspezifisch nach Konzept und Abstimmung mit Feuerwehr – keine pauschale §-Millimeter-Angabe für alle Objekte.",
      },
      {
        question: "Darf auf der Zufahrt geparkt werden?",
        answer:
          "Nein dauerhaft – ständig freihalten, Kennzeichnung beachten. Kurzzeitiges Halten kann trotzdem Behinderung sein.",
      },
      {
        question: "Brauche ich das nur bei Sonderbauten?",
        answer:
          "Schwerpunkt Sonderbau-Konzept – aber jede bauliche Anlage braucht wirksame Feuerwehr-Erschließung des Grundstücks nach BauO-Logik.",
      },
      {
        question: "Was ist der Unterschied Zufahrt und Rettungsweg?",
        answer:
          "Rettungsweg = Weg für Personen im Gebäude. Zufahrt/Bewegungsfläche = Erschließung für Feuerwehrfahrzeuge auf dem Grundstück.",
      },
      {
        question: "Was bei Bestandsgebäuden ohne Zufahrt?",
        answer:
          "Ausgleichsmaßnahmen oder ingenieurmethodischer Nachweis im Konzept – nicht „Bestand, war schon immer so“ ohne Prüfung.",
      },
    ],
  },
];
