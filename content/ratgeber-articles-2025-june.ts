/**
 * Juni 2025 – 4 Artikel (Qualitätsrhythmus: 4/Monat).
 * Quellen: SBauVO NRW, Handlungsempfehlung BauO NRW 2018.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_JUNE: RatgeberArticle[] = [
  {
    slug: "beherbergungsstaetten-hotel-sonderbau-nrw",
    title: "Beherbergungsstätten und Hotels: Sonderbau ab 13 Gastbetten",
    excerpt:
      "Hotels, Pensionen und Gästehäuser mit mehr als zwölf Gastbetten folgen SBauVO Teil 2 – mit Rettungswegen pro Zimmer, BMA und besonderen Trennwandanforderungen. Abgrenzung zu Ferienwohnung und Pflege.",
    metaTitle: "Hotel Brandschutz NRW: Beherbergung | H&S+",
    metaDescription:
      "Beherbergungsstätte Sonderbau NRW: ab 13 Gastbetten, Rettungswege, BMA §55 SBauVO, Trennwände, Funkverstärkung ab 60 Betten – SBauVO Teil 2.",
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
        title: "Schwelle zwölf Gastbetten",
        paragraphs: [
          "SBauVO NRW Teil 2 gilt für Beherbergungsstätten mit mehr als zwölf Gastbetten. § 55 SBauVO gilt für alle Beherbergungsstätten: Alarmierungseinrichtungen immer; BMA erst ab mehr als 60 Gastbetten – darunter Rauchwarnmelder je Beherbergungsraum.",
          "Beherbergungsstätte: Gebäude oder Gebäudeteil für Gästebeherbergung – ausgenommen Ferienwohnungen. Hotel, Pension, Gästehaus, Boardinghouse mit dauerhafter Beherbergung fallen typischerweise herein; reine Ferienwohnvermietung nicht.",
          "Grenzfall ja: Hotel 90 Gastbetten (> 60), zwei Rettungswege je Beherbergungsraum, BMA und selbsttätige Alarmierung nach § 55, Konzept mit Feuerwehrzufahrt. Grenzfall nein: 40 Gastbetten – keine BMA, aber Rauchwarnmelder je Zimmer und Alarmierungseinrichtungen; Teil 2-Vollumfang erst ab 13 Betten.",
        ],
      },
      {
        id: "rettungswege",
        title: "Rettungswege und Flure",
        paragraphs: [
          "Jeder Beherbergungsraum (Suite = ein Raum): mindestens zwei voneinander unabhängige Rettungswege. Beide dürfen im Geschoss über denselben notwendigen Flur führen – anders als bei [Raumgruppen in Pflege](/ratgeber/pflegeeinrichtung-sonderbau-nrw).",
          "Erster Rettungsweg für Beherbergungsräume oberhalb des Erdgeschosses: in der Regel über notwendigen Treppenraum. Stichflure: Entfernung Tür Beherbergungsraum zu Treppenraum oder Ausgang ins Freie max. 15 m.",
          "Notwendige Treppen durchgehend in einem Zug; Wände notwendiger Treppenräume in Brandwand-Bauart – Erleichterungen bei max. zwei oberirdischen Geschossen bzw. kleinen Häusern mit bis 30 Gastbetten.",
        ],
      },
      {
        id: "bauteile",
        title: "Tragwerk, Trennwände, Brandwände",
        paragraphs: [
          "Tragende Wände, Stützen, Decken: feuerbeständig – Ausnahmen für oberste Dachgeschosse ohne Beherbergung und Erleichterungen bei kleinen Häusern (bis 3 OG, 30 Gastbetten).",
          "Trennwände zwischen Beherbergungsräumen und zu fremden Nutzungen: feuerhemmend, wo Tragwerk nur feuerhemmend sein darf. Brandwände feuerbeständig und nichtbrennbar – bei max. zwei OG Erleichterungen möglich.",
          "Fahrschachtwände feuerbeständig; Türen von notwendigen Fluren zu Beherbergungsräumen und Gasträumen: feuerhemmend und rauchdicht (RS) – bei BMA nach § 55 Abs. 3 genügen teils dichtschließende Türen.",
        ],
      },
      {
        id: "technik",
        title: "BMA, Aufzug, Funk",
        paragraphs: [
          "§ 55 SBauVO: Alarmierung immer; BMA und Brandfallsteuerung Aufzüge ab mehr als 60 Gastbetten – Gesamtübersicht [BMA-Pflicht](/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw). Abgestimmt mit [Brandschutzkonzept](/ratgeber/brandschutzkonzept-baupruefvo-nrw). Nach Inbetriebnahme [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
          "Ab 60 Gastbetten: Funkverstärkung, wenn bauliche Anlage Feuerwehr-Funk stört.",
          "Barrierefreie Beherbergung: § 56 SBauVO – Schnittstelle Barrierefrei-Konzept BauPrüfVO § 9a.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Hotel vs. Pflege vs. Ferienwohnung",
        paragraphs: [
          "[Pflegeeinrichtung](/ratgeber/pflegeeinrichtung-sonderbau-nrw): Pflege und Betreuung, Raumgruppen-Logik – nicht Hotel, auch wenn Zimmer ähnlich wirken.",
          "Ferienwohnung: ausdrücklich ausgenommen von Beherbergungsstätte – andere Einordnung.",
          "Betrieb: [BSO und Evakuierung](/ratgeber/alarmierung-evakuierung-betrieb) ergänzen baulichen Nachweis – Nachtbetrieb, Gäste ohne Ortskenntnis.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO NRW Teil 2 (Beherbergung) zusammen. Bestand: § 58 SBauVO. Er ersetzt kein genehmigungsfähiges Brandschutzkonzept und keine behördliche Einordnung bei Grenzfällen (Boardinghaus, Monteurzimmer).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandmeldeanlage-wann-pflicht-sbauvo-nrw", label: "BMA-Pflicht § 55" },
      { href: "/ratgeber/pflegeeinrichtung-sonderbau-nrw", label: "Pflegeeinrichtung" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
    ],
    faq: [
      {
        question: "Ab wann ist ein Hotel Sonderbau nach SBauVO Teil 2?",
        answer:
          "Beherbergungsstätte mit mehr als zwölf Gastbetten – Ferienwohnungen ausgenommen.",
      },
      {
        question: "Braucht jedes Hotel eine BMA?",
        answer:
          "Nein. Bis 60 Gastbetten: Rauchwarnmelder je Beherbergungsraum und Alarmierungseinrichtungen – keine BMA. Ab mehr als 60 Gastbetten: BMA mit selbsttätigen Meldern und Leitstelle (§ 55 SBauVO).",
      },
      {
        question: "Zwei Rettungswege pro Zimmer – wirklich?",
        answer:
          "Zwei bauliche/organisatorische Wege je Beherbergungsraum; im Geschoss darf der notwendige Flur gemeinsam genutzt werden.",
      },
      {
        question: "Was ist der Unterschied zur Pflege-RL?",
        answer:
          "Beherbergung = Übernachtung Gäste; Pflege-RL = Pflege und Betreuung Hilfsbedürftiger mit Raumgruppen und anderen Flächenschwellen.",
      },
      {
        question: "Gilt das für Hostels?",
        answer:
          "Wenn Beherbergungsstätte mit mehr als zwölf Gastbetten – ja. Schlafräume und Betten zählen.",
      },
      {
        question: "Was bei Umbau Pension zu Hotel?",
        answer:
          "Gastbettenzahl und SBauVO prüfen – Überschreitung 12 Betten löst vollen Teil-2-Nachweis und ggf. Konzept aus.",
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
