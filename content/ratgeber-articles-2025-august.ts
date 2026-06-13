/**
 * August 2025 – 4 Artikel (4/Monat).
 * Quellen: SBauVO NRW, Sonderbau-Systematik.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_AUGUST: RatgeberArticle[] = [
  {
    slug: "mehrzweckhallen-sportstaetten-sbauvo-nrw",
    title: "Mehrzweckhallen und Sportstätten: SBauVO Teil 1 Spezialregeln",
    excerpt:
      "Turnhallen, Arenen und Mehrzweckhallen sind Versammlungsstätten mit eigenen Regeln – Lautsprecherzentrale, Einsatzräume, Abschrankungen und Brandsicherheitswache bei Großevents.",
    metaTitle: "Mehrzweckhallen Brandschutz SBauVO | H&S+",
    metaDescription:
      "Mehrzweckhalle Sportstätte NRW: SBauVO Versammlungsstätte, Lautsprecherzentrale, Feuerwehrraum, Stehplätze, Sportstadion 10.000 Plätze.",
    keywords: [
      "Mehrzweckhalle Brandschutz",
      "Sportstätte Sonderbau",
      "SBauVO Versammlungsstätte",
      "Sportstadion Brandschutz",
      "Stehplätze Abschrankung",
      "Turnhalle Sonderbau NRW",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Versammlungsstätte für wechselnde Nutzung",
        paragraphs: [
          "Mehrzweckhallen sind überdachte Versammlungsstätten für verschiedene Veranstaltungsarten – SBauVO NRW Teil 1. Sportstadien und große Hallen lösen zusätzliche Regeln aus (Abschrankung, Blockbildung, Einsatzräume).",
          "Ergänzt [Versammlungsstätte baulich](/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw) und [Betrieb](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw) – hier Schwerpunkt Mehrzweck/Sport-Infrastruktur.",
          "Grenzfall ja: Sporthalle 3.500 Besucher Konzert, Lautsprecherzentrale, Feuerwehr- und Sanitätsraum, Zufahrt Einsatzfahrzeuge, Abschrankung Stehfläche vor Bühne. Grenzfall nein: Vereinsheim 180 Personen ohne SBauVO-Mehrzweck-Logik – anderer Tatbestand prüfen.",
        ],
      },
      {
        id: "raeume",
        title: "Lautsprecherzentrale und Einsatzräume",
        paragraphs: [
          "Mehrzweckhallen und Sportstadien: Raum für Lautsprecherzentrale mit Überblick Besucher- und Innenbereich; Benachrichtigung Polizei, Feuerwehr, Rettungsdienst, Sanitätswachdienst.",
          "Ausreichend große Räume für Polizei und Feuerwehr; Einsatzleitung Polizei mit Verbindung zur Lautsprecherzentrale und Anschlüssen.",
          "Mindestens ein großer Raum für Sanitätswachdienst.",
        ],
      },
      {
        id: "stehplaetze",
        title: "Stehplätze, Stufen, Abschrankungen",
        paragraphs: [
          "Stufengänge: Steigung 0,10–0,19 m, Auftritt min. 0,26 m. Rettungswege min. 1,20 m licht (bis 200 Plätze teils 1,00 m).",
          "Sportstadien über 10.000 Besucherplätze: Abschrankung und Blockbildung nach § 27 SBauVO.",
          "Abschrankung Stehflächen vor Szenenflächen nach § 29 – auch unter 5.000 Stehplätzen wenn veranstaltungsbedingt erforderlich.",
        ],
      },
      {
        id: "betrieb",
        title: "Großbühnen und Brandsicherheitswache",
        paragraphs: [
          "Auf-/Abbau bühnentechnischer Einrichtungen Großbühne oder Szenenfläche über 200 m² oder Mehrzweckhalle über 5.000 Plätze: qualifiziertes Personal.",
          "Bei Veranstaltungen auf Großbühnen/Szenen über 200 m² oder Mehrzweckhallen über 5.000 Plätze: mindestens eine Brandsicherheitswache der Feuerwehr anwesend – Anweisungen sind zu befolgen.",
          "Verknüpfung [Feuerwehrzufahrt](/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw) und [PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
        ],
      },
      {
        id: "technik",
        title: "BMA, Entrauchung, Bestand",
        paragraphs: [
          "Versammlungsräume über 1.000 m²: zentrale Bedienung RWA/BMA zusätzlich zu örtlichen Schaltern.",
          "Magazine und Lagerräume in VStätten: abgetrennt, ggf. Sprinkler/Lüftungsverriegelung.",
          "Bestehende Anlagen: § 45 SBauVO – [Sonderbau Bestand](/ratgeber/sonderbau-bestand-gebaeude-sbauvo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO NRW Mehrzweckhallen/Sportstätten zusammen. Freiluft-VStätten und fliegende Bauten haben Zusatzregeln. Er ersetzt kein Brandschutzkonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/versammlungsstaetten-baulich-sbauvo-nrw", label: "VStätte baulich" },
      { href: "/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw", label: "VStätte Betrieb" },
      { href: "/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw", label: "Feuerwehrzufahrt" },
      { href: "/ratgeber/brandsicherheitswache-veranstaltung-sbauvo-nrw", label: "Brandsicherheitswache" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
    ],
    faq: [
      {
        question: "Ist jede Turnhalle eine Mehrzweckhalle?",
        answer:
          "Nur wenn sie als überdachte Versammlungsstätte für verschiedene Veranstaltungsarten gilt und SBauVO-Tatbestand erfüllt – Einzelfall bei reiner Schulnutzung.",
      },
      {
        question: "Ab wann Brandsicherheitswache?",
        answer:
          "Großbühnen/Szenen über 200 m² oder Mehrzweckhallen über 5.000 Plätze bei entsprechenden Veranstaltungen.",
      },
      {
        question: "Was ist eine Lautsprecherzentrale?",
        answer:
          "Zentrale mit Überblick und Anbindung an Hilfsorganisationen – Pflicht in Mehrzweckhallen und Sportstadien.",
      },
      {
        question: "10.000 Besucher – was ändert sich?",
        answer:
          "Sportstadien: zusätzliche Abschrankung/Blockbildung nach § 27 SBauVO.",
      },
      {
        question: "Brauche ich ein Konzept?",
        answer:
          "Als Versammlungsstätte Sonderbau in der Regel ja – Nutzerzahl, Wege, Einsatzräume im Konzept.",
      },
      {
        question: "Unterschied zur normalen Halle?",
        answer:
          "Reine Lager/Industriehalle: IndBauR oder GK. Besucherbetrieb mit Veranstaltungscharakter: VStätten-Logik.",
      },
    ],
  },
  {
    slug: "hochhaus-betriebsvorschriften-sbauvo-nrw",
    title: "Hochhaus-Betrieb: Eigentümerpflichten nach SBauVO Teil 4",
    excerpt:
      "Nach der Genehmigung bleibt der Hochhaus-Betrieb geregelt: Rauchableitung, Aufzüge, Funk, Evakuierungskonzept und verantwortliche Personen – Kapitel 3 SBauVO Hochhäuser.",
    metaTitle: "Hochhaus Betrieb SBauVO NRW | H&S+",
    metaDescription:
      "Hochhaus Betriebsvorschriften NRW: Eigentümer, Rauchableitung §110, Aufzüge §111, Evakuierung, Funk – nach Genehmigung.",
    keywords: [
      "Hochhaus Betrieb",
      "SBauVO Hochhaus Betrieb",
      "Rauchableitung Hochhaus",
      "Hochhaus Eigentümerpflicht",
      "Aufzug Brandfall Hochhaus",
      "Evakuierung Hochhaus",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Nach der Abnahme ist der Betrieb maßgeblich",
        paragraphs: [
          "[Hochhaus baulich](/ratgeber/hochhaus-brandschutz-sbauvo-nrw) regelt Planung – SBauVO Teil 4 Kapitel 3 die laufenden Betriebsvorschriften. Eigentümer und Betreiber müssen technische Anlagen und Organisation aufrechterhalten.",
          "Hochhäuser über 22 m: komplexe Technik (Druckbelüftung, BMA, Aufzugs-Brandfallsteuerung) versagt im Brand ohne Wartung und Betriebskonzept.",
          "Grenzfall ja: Wohnhochhaus 28 m, dokumentierte Wartung Druckbelüftung, BMA-Probe, Aufzugs-Brandfahrt, Evakuierungsübung, freie Feuerwehrzufahrt. Grenzfall nein: Druckbelüftung defekt, Feststellanlagen dauerhaft aus, kein Evakuierungskonzept für Bewohner.",
        ],
      },
      {
        id: "eigentuemer",
        title: "Verantwortung Eigentümer und Betreiber",
        paragraphs: [
          "Eigentümer verantwortlich für öffentlich-rechtliche Vorschriften; Pflichten können schriftlich auf Betreiber übertragen werden, wenn diese mit Anlage vertraut sind.",
          "Ab bestimmter Höhe/Nutzungseinheitsgröße: geeignete Personen für Brandverhütung und Evakuierung – über [BSB](/ratgeber/bestellung-brandschutzbeauftragter-nrw) hinaus im Konzept.",
          "WEG/Mieter: Zuständigkeiten im Vertrag klären – Lüftung, Türen, Flure.",
        ],
      },
      {
        id: "technik",
        title: "Rauchableitung, Aufzüge, Funk",
        paragraphs: [
          "§ 110 SBauVO: jedes Geschoss und Installationsschächte entrauchbar. § 111: Geschosse mit Aufenthaltsräumen von mindestens zwei Aufzügen; Feuerwehraufzug-Vorräume nach SBauVO.",
          "Druckbelüftung und BMA-Kopplung im Betrieb prüfen – [PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau).",
          "Funkverstärkung warten, wenn vorgeschrieben.",
        ],
      },
      {
        id: "organisation",
        title: "Evakuierung und Anweisungen",
        paragraphs: [
          "Evakuierungskonzept für Bewohner und Nutzer – besonders nicht-gehfähige Personen, [Alarmierung](/ratgeber/alarmierung-evakuierung-betrieb).",
          "Hausmeister/Facility: keine Lagerung in Rettungswegen, keine Blockade Feuerwehrzufahrt.",
          "Übungen und Unterweisung – nicht nur BMA-Probe.",
        ],
      },
      {
        id: "bestand",
        title: "Bestehende Hochhäuser",
        paragraphs: [
          "Kapitel 4 SBauVO: besondere Regeln für bestehende Hochhäuser – Nachrüstung bei wesentlicher Änderung.",
          "§ 45-Logik Bestand: [Sonderbau Bestand](/ratgeber/sonderbau-bestand-gebaeude-sbauvo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO NRW Betriebsvorschriften Hochhaus zusammen. Wohnungsrecht und DGUV ergänzen. Er ersetzt kein Betriebskonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus baulich" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Evakuierung" },
      { href: "/ratgeber/hochhaus-entrauchung-sbauvo-nrw", label: "Rauchableitung" },
      { href: "/ratgeber/feuerwehrzufahrt-bewegungsflaeche-sbauvo-nrw", label: "Zufahrt" },
    ],
    faq: [
      {
        question: "Wer ist im WEG verantwortlich?",
        answer:
          "Eigentümergemeinschaft grundsätzlich; Verwaltung/Betreiber nach Vertrag – technische Anlagen und Rettungswege dokumentiert zuweisen.",
      },
      {
        question: "Reicht PrüfVO für Wartung?",
        answer:
          "PrüfVO ergänzt, ersetzt nicht täglichen Betrieb und BSO/Übungen.",
      },
      {
        question: "Müssen Aufzüge in Brandfall fahren?",
        answer:
          "Brandfallsteuerung nach Konzept – in der Regel keine Personenbeförderung im Brand; Feuerwehraufzug gesondert.",
      },
      {
        question: "Was bei defekter Druckbelüftung?",
        answer:
          "Unverzüglich reparieren; ggf. Nutzung einschränken – konkrete Gefahr im Brandfall.",
      },
      {
        question: "Gilt das für Bürohochhäuser?",
        answer:
          "Ja für Hochhäuser über 22 m – Betriebsteil parallel zu Wohnhochhaus.",
      },
      {
        question: "Bestand vor 2016?",
        answer:
          "Kapitel 4 Bestandshochhäuser – Nachrüstung bei Änderung, nicht alles sofort.",
      },
    ],
  },
  {
    slug: "sonderbau-bestand-gebaeude-sbauvo-nrw",
    title: "Bestehende Sonderbauten: SBauVO-Übergang und Nachrüstung",
    excerpt:
      "§ 45, § 58, § 90, § 142 SBauVO regeln, wann alte Versammlungsstätten, Hotels, Garagen und Verkaufsstätten welche neuen Anforderungen erfüllen müssen – zentral für Umbau und Betrieb.",
    metaTitle: "Sonderbau Bestand SBauVO NRW | H&S+",
    metaDescription:
      "Bestehende Sonderbauten NRW: SBauVO Übergang, Nachrüstung BMA, Umbau, §45 Versammlungsstätte, §58 Hotel, §142 Garage.",
    keywords: [
      "Sonderbau Bestand",
      "bestehende Versammlungsstätte",
      "SBauVO Übergang",
      "Nachrüstung Brandschutz",
      "Bestandsschutz Sonderbau",
      "Umbau Sonderbau NRW",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Neubau-Regeln gelten nicht immer sofort",
        paragraphs: [
          "Jeder Sonderbau-Typ in SBauVO NRW hat Bestandsregeln: Versammlungsstätten § 45, Beherbergung § 58, Verkaufsstätten § 90, Garagen § 142, Hochhäuser Kapitel 4 – wann welche Betriebs- und Bauvorschriften auf Altbestand anwendbar sind.",
          "Verwechslung mit [Bestandsschutz BauO](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw): SBauVO-Übergang ist sonderbau-spezifisch; BauO-Bestandsschutz parallel prüfen.",
          "Grenzfall ja: Alte Eventlocation, wesentliche Umbau mit Nutzungsänderung – neue SBauVO-Anforderungen und Konzept-Fortschreibung. Grenzfall nein: „Bestand, muss nichts tun“ bei geänderter Personenzahl und blockierten Rettungswegen.",
        ],
      },
      {
        id: "typen",
        title: "Bestandsregeln je Sonderbau-Typ",
        paragraphs: [
          "Versammlungsstätten § 45: welche Betriebsvorschriften Kapitel 4 und ausgewählte Bauvorschriften für Bestand.",
          "Beherbergung § 58, Verkaufsstätten § 90, Garagen § 142: analoge Übergangslogik.",
          "Hochhäuser Kapitel 4 „Bestehende Hochhäuser“.",
        ],
      },
      {
        id: "umbau",
        title: "Wesentliche Änderung und Nachrüstung",
        paragraphs: [
          "Wesentliche Änderung oder Nutzungsänderung: Anforderungen wie Neubau oder gestaffelte Nachrüstung – [Umbau](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
          "Typisch: BMA nachrüsten, Rettungswege herstellen, Druckbelüftung, Feuerschutzabschlüsse.",
          "Behörde kann Fristen setzen bei Gefahr.",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb ohne Umbau",
        paragraphs: [
          "Auch ohne Umbau: Betriebsvorschriften (BSO, Freihalten Wege, Wartung Anlagen) gelten oft voll.",
          "[PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) wenn Anlagen vorhanden.",
          "[Versammlungsstätten Betrieb](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw) unabhängig vom Baujahr.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Bestandsfälle",
        paragraphs: [
          "Altes Kino zu Event: Personenzahl, Bühnenwand, BMA.",
          "Hotel-Nachrüstung: Rauchschutztüren, Fluchttüren 0,90 m.",
          "Tiefgarage ohne aktuelle Prüfberichte: PrüfVO-Lücke schließen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO-Bestandskapitel zusammen. Konkrete Übergangsfristen sind projekt- und behördenabhängig. Er ersetzt keine behördliche Festlegung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz BauO" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau" },
      { href: "/ratgeber/feuerschutzabschluesse-bestand-nrw", label: "Feuerschutzabschlüsse" },
      { href: "/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw", label: "VStätte Betrieb" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzeptpflicht" },
    ],
    faq: [
      {
        question: "Gilt SBauVO sofort für alte Gebäude?",
        answer:
          "Nein pauschal – Übergangs- und Bestandskapitel je Typ; wesentliche Änderung triggert oft volle Anforderungen.",
      },
      {
        question: "Was ist eine wesentliche Änderung?",
        answer:
          "Umfang und Wirkung auf Brandschutz – behördenabhängig; Nutzungsänderung mit mehr Personen typischer Trigger.",
      },
      {
        question: "Brauche ich bei Bestand ein neues Konzept?",
        answer:
          "Bei wesentlicher Änderung Fortschreibung oder neues Konzept nach § 9 BauPrüfVO – nicht nur Bauantrag.",
      },
      {
        question: "Hilft Bestandsschutz BauO?",
        answer:
          "Parallel prüfen – SBauVO-Bestand und BauO § 62/64 Bestandsschutz sind getrennte Ebenen.",
      },
      {
        question: "PrüfVO auch im Altbau?",
        answer:
          "Wenn Sonderbau und prüfpflichtige Anlagen existieren – ja, unabhängig vom Baujahr.",
      },
      {
        question: "Darf ich Feststellanlagen dauerhaft offen lassen?",
        answer:
          "Nein – auch im Bestand; ggf. genehmigte Feststellanlage, nicht Keil.",
      },
    ],
  },
  {
    slug: "gaststaette-sonderbau-ungeregelt-nrw",
    title: "Große Gaststätten: Sonderbau ohne eigenen SBauVO-Teil",
    excerpt:
      "Mehr als 200 Gastplätze im Gebäude machen aus der Gastronomie einen ungeregelt Sonderbau – ohne SBauVO-Gaststätten-Kapitel in NRW, aber mit vollem Konzept und MVStättVO-Schnittstelle.",
    metaTitle: "Gaststätte Sonderbau NRW | H&S+",
    metaDescription:
      "Gaststätte über 200 Gastplätze Sonderbau NRW: ungeregelt, Brandschutzkonzept, Abgrenzung Beherbergung Verkaufsstätte, MVStättVO.",
    keywords: [
      "Gaststätte Sonderbau",
      "200 Gastplätze",
      "Restaurant Brandschutz NRW",
      "ungeregelt Gastronomie",
      "Gastbetrieb Brandschutzkonzept",
      "Schankwirtschaft Sonderbau",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Schwelle 200 Gastplätze",
        paragraphs: [
          "§ 50 Abs. 2 BauO NRW: Schank- und Speisewirtschaften mit mehr als 200 Gastplätzen im Gebäude sind Sonderbau. NRW-SBauVO hat keinen eigenen Gaststätten-Teil – Einordnung „ungeregelt“ wie [Systematik-Artikel](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
          "Abgrenzung: [Beherbergung](/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw) (>12 Gastbetten, SBauVO Teil 2), [Verkaufsstätte](/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw) (>2.000 m² Verkauf), reine Gaststätte >200 Plätze ohne SBauVO-Tabelle.",
          "Grenzfall ja: Restaurant 280 Plätze, Konzept mit Nutzerzahl, zwei Rettungswege, Küchenbrandabschnitt, BMA, BSO. Grenzfall nein: 210 Plätze bei Umbauprojekt ohne Konzept – nur Gewerbe angenommen.",
        ],
      },
      {
        id: "nachweis",
        title: "Konzept und Genehmigung",
        paragraphs: [
          "[Brandschutzkonzept §9](/ratgeber/brandschutzkonzept-baupruefvo-nrw): Feuerwehr, Rettungswege, Nutzerzahl, Küche/Fettbrand, Löschanlagen.",
          "Fettabscheider, Lüftung, [Feuerlöscher Gastronomie](/ratgeber/feuerloescher-gastronomie-koeln) betrieblich.",
          "Freischank bis 40 m² kann [genehmigungsfrei](/ratgeber/genehmigungsfrei-garage-freischank-bauo-nrw) – Hauptbetrieb bleibt sonderbau-relevant.",
        ],
      },
      {
        id: "betrieb",
        title: "MVStättVO und BSO",
        paragraphs: [
          "Ab bestimmten Größen MVStättVO-Schnittstelle – [Versammlungsstätten Betrieb](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw) bei Veranstaltungscharakter.",
          "Küche: Heißarbeiten, Fettbrand, [Heißarbeiten](/ratgeber/heissarbeiten-brandwache-erlaubnisschein).",
          "[Eilbegehung](/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln) zeigt Praxis-Mängel.",
        ],
      },
      {
        id: "umbau",
        title: "Umbau und Plätze zählen",
        paragraphs: [
          "Gastplätze im gesamten Gebäude summieren – Terrasse mit festen Plätzen einbeziehen wenn relevant.",
          "Umnutzung Lokal zu Event: Personenzahl und VStätten-Tatbestand zusätzlich prüfen.",
          "[Imbiss/Ladenlokal](/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln) unter Schwelle anders.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fehler",
        paragraphs: [
          "Nur Küche brandschutztechnisch betrachtet – Gastraum und Rettungswege vergessen.",
          "Bestuhlung über Konzept-Nutzerzahl ohne Nachweis.",
          "Feststellanlagen an Küchen-T30-RS dauerhaft aus.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst Gaststätten-Sonderbau in NRW zusammen. Steuer- und gaststättenrechtliche Plätze können abweichen – brandschutzrechtlich maßgeblich ist die Konzept-/Behördenfestlegung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Geregelt/ungeregelt" },
      { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Feuerlöscher Gastronomie" },
      { href: "/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln", label: "Eilbegehung" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw", label: "Hotel" },
    ],
    faq: [
      {
        question: "Ab wann ist Gaststätte Sonderbau?",
        answer:
          "Mehr als 200 Gastplätze im Gebäude nach § 50 Abs. 2 BauO NRW.",
      },
      {
        question: "Gilt SBauVO Teil für Gastronomie?",
        answer:
          "Nein eigenen Teil in NRW – ungeregelt, Konzept nach BauO.",
      },
      {
        question: "Zählen Biergarten-Plätze?",
        answer:
          "Wenn zum Betrieb gehörend und fest – im Einzelfall mit Behörde/Konzept klären.",
      },
      {
        question: "Unterschied Hotelrestaurant?",
        answer:
          "Hotel mit >12 Betten: SBauVO Beherbergung zusätzlich; Gastplätze können kumulieren.",
      },
      {
        question: "Reicht Stellungnahme?",
        answer:
          "Bei kleiner Änderung möglich – Neubau/ große Umbauten meist Vollkonzept.",
      },
      {
        question: "MVStättVO immer?",
        answer:
          "Bei Versammlungscharakter und Schwellen – parallel prüfen, nicht automatisch bei jedem Restaurant.",
      },
    ],
  },
];
