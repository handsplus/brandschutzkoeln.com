/**
 * Mai 2025 – 4 Artikel (Qualitätsrhythmus ab Mai: 4/Monat).
 * Quellen: SBauVO NRW, BauPrüfVO NRW.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_MAY: RatgeberArticle[] = [
  {
    slug: "mittelgrossgaragen-brandschutz-sbauvo-nrw",
    title: "Mittel- und Großgaragen: Brandschutz nach SBauVO NRW",
    excerpt:
      "Ab 100 m² Nutzfläche gelten Sonderbau-Regeln für Garagen – mit Rauchabschnitten, Verbindungen zum Wohnbau und Betriebsvorschriften. Was Planer und Betreiber bei Mittel- und Großgaragen beachten müssen.",
    metaTitle: "Mittel- und Großgaragen: SBauVO NRW | H&S+",
    metaDescription:
      "Garagen Brandschutz NRW: Mittelgarage ab 100 m², Großgarage, Rauchabschnitt §132 SBauVO, offene vs. geschlossene Garage, PrüfVO – Planung und Betrieb.",
    keywords: [
      "Mittelgarage Brandschutz",
      "Großgarage SBauVO",
      "Garage Sonderbau NRW",
      "Rauchabschnitt Garage",
      "Tiefgarage Brandschutz",
      "SBauVO Teil 5 Garagen",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Ab wann eine Garage Sonderbau wird",
        paragraphs: [
          "Stellplätze und Garagen fallen unter Teil 5 der Sonderbauverordnung NRW (SBauVO), soweit sie nicht nur der privaten Nutzung einer Wohnung dienen. Entscheidend ist die Nutzfläche – nicht allein die Zahl der Stellplätze.",
          "Mittelgaragen: Nutzfläche über 100 m² bis 1.000 m². Großgaragen: über 1.000 m². Darunter gelten andere bauordnungsrechtliche Regeln – ab diesen Schwellen greifen Rauchabschnitte, Brandabschnitte, Verbindungsregeln zu anderen Nutzungen und Betriebsvorschriften nach SBauVO.",
          "Grenzfall ja: Geschlossene Tiefgarage 850 m² unter Wohnhaus, Rauchabschnitte nach § 132 SBauVO, getrennte Verbindung Wohn↔Garage, BMA und später [PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau). Grenzfall nein: Einzelgarage 28 m² am EFH – keine Mittelgarage, aber [Kraftstoff](/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz) und FeuVO bei Heizung/Nebenraum trotzdem prüfen.",
        ],
      },
      {
        id: "begriffe",
        title: "Offen, geschlossen, oberirdisch, automatisch",
        paragraphs: [
          "Die SBauVO unterscheidet Garagentypen mit unterschiedlichen Anforderungen:",
        ],
        list: [
          "Offene Mittel- und Großgaragen – in jedem Geschoss unverschließbare Öffnungen ≥ 1/3 der Umfassungswandfläche, mindestens eine Öffnung je 50 m Wandlänge",
          "Geschlossene Garagen – erfüllen die Offenheitskriterien nicht; strengere Anforderungen an Entrauchung und Abschnitte",
          "Oberirdische Garagen – Fußböden im Mittel nicht mehr als 1,50 m unter Geländeoberfläche",
          "Automatische Garagen – ohne Personen- und Fahrverkehr, mechanische Förderung; eigene Regelungen",
        ],
      },
      {
        id: "abschnitte",
        title: "Rauchabschnitte und Brandabschnitte (§ 132)",
        paragraphs: [
          "§ 132 SBauVO regelt die Unterteilung in Rauchabschnitte und Brandabschnitte – analog zur BauO-Logik, aber garagenspezifisch. Ziel: Rauchausbreitung in Fluren und Verbindungen begrenzen, Brandübertragung in angrenzende Nutzungen verhindern.",
          "Verbindungen zwischen Garagen und Wohnnutzungen (§ 133) sind kritisch: Sicherheitsschleusen, feuerbeständige oder feuerhemmende Trennungen, keine unkontrollierten Öffnungen in Rettungswege des Wohnbaus.",
          "Mehrgeschossige Garagen: Verbindungen zwischen Garagengeschossen und zu Aufzügen/Treppen müssen im Brandschutzkonzept dargestellt sein – typischer Planungsfehler bei Wohn-Tiefgaragen-Komplexen.",
        ],
      },
      {
        id: "betrieb",
        title: "Betriebsvorschriften und E-Fahrzeuge",
        paragraphs: [
          "§ 139 SBauVO: Betriebsvorschriften für Garagen – u. a. Kennzeichnung, Nutzung, technische Anlagen im Betrieb. § 140: Kraftfahrzeuge in anderen Räumen als Garagen – Werkstatt, Lager, Flur: grundsätzlich unzulässig oder nur mit Sonderregeln.",
          "E-Ladeinfrastruktur und LIB-Risiken ergänzen den baulichen Nachweis – [E-Fahrzeuge Tiefgarage](/ratgeber/e-fahrzeuge-tiefgarage-brandgefahren-fbfhb-024) betrieblich; SBauVO liefert die baulische Basis (Abschnitte, Lüftung, BMA).",
          "Bestand: § 142 regelt Anwendung auf bestehende Garagen – Umrüstung und Nutzungsänderung können Nachrüstung auslösen, auch ohne Neubau.",
        ],
      },
      {
        id: "pruefung",
        title: "Genehmigung, Konzept, PrüfVO",
        paragraphs: [
          "Mittel- und Großgaragen sind Sonderbauten – [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig) nach § 9 BauPrüfVO NRW bei genehmigungspflichtigen Vorhaben. Inhalt: Abschottungen, Rettungswege, BMA, Löschanlagen, Löschwasser.",
          "Nach Inbetriebnahme: PrüfVO NRW für BMA, Sprinkler, RWA in Mittel- und Großgaragen – Prüfsachverständiger alle 3 Jahre, Bericht an Bauaufsicht.",
          "Verknüpfung [Sonderbauten](/ratgeber/sonderbauten-brandschutz) und [Fluchtwege](/ratgeber/flucht-und-rettungswege-bauo-nrw) für Erschließung aus der Garage ins Freie.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO NRW Teil 5 (Garagen) für Planer und Betreiber zusammen. Einzelgaragen, Stellplätze unter 100 m² und reine PKW-Stellplätze am EFH folgen anderen Tatbeständen. Er ersetzt kein genehmigungsfähiges Brandschutzkonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/e-fahrzeuge-tiefgarage-brandgefahren-fbfhb-024", label: "E-Fahrzeuge Tiefgarage" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
      { href: "/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz", label: "Kraftstofflagerung" },
    ],
    faq: [
      {
        question: "Ab welcher Fläche ist eine Mittelgarage?",
        answer:
          "Nutzfläche über 100 m² bis 1.000 m² – SBauVO Teil 5. Darüber Großgarage. Maßgeblich ist die Garagen-Nutzfläche, nicht die gesamte Gebäude-BGF.",
      },
      {
        question: "Was ist eine offene Garage?",
        answer:
          "Garage mit unmittelbar ins Freie führenden, unverschließbaren Öffnungen von mindestens einem Drittel der Umfassungswandfläche – mit Mindestöffnungen je Wandlänge nach SBauVO.",
      },
      {
        question: "Braucht jede Tiefgarage ein Brandschutzkonzept?",
        answer:
          "Bei genehmigungspflichtiger Errichtung oder wesentlicher Änderung von Mittel-/Großgaragen in der Regel ja – als Teil des Sonderbau-Verfahrens nach BauPrüfVO § 9.",
      },
      {
        question: "Gilt PrüfVO in Garagen?",
        answer:
          "Ja für Mittel- und Großgaragen – u. a. BMA, Sprinkler, maschinelle RWA mit Prüfsachverständigen und Behördenberichtspflicht.",
      },
      {
        question: "Darf ich in der Werkstatt parken?",
        answer:
          "§ 140 SBauVO regelt Abstellen außerhalb von Garagen – grundsätzlich eingeschränkt. Werkstatt mit Fahrzeug ≠ Garage-Nachweis.",
      },
      {
        question: "Was bei Umbau Wohnhaus mit Bestandsgarage?",
        answer:
          "§ 142 und Nutzungsänderung prüfen – Verbindung Wohn/Garage, Abschnitte und BMA können nachgerüstet werden müssen.",
      },
    ],
  },
  {
    slug: "hochhaus-brandschutz-sbauvo-nrw",
    title: "Hochhäuser in NRW: Sonderbau ab 22 m mit Druckbelüftung",
    excerpt:
      "Gebäude mit mehr als 22 m Höhe sind Hochhäuser nach SBauVO – mit Sicherheitstreppenräumen, Druckbelüftung, BMA-Kopplung und besonderen Eigentümerpflichten. Orientierung für Planung und Betrieb.",
    metaTitle: "Hochhaus Brandschutz NRW: SBauVO | H&S+",
    metaDescription:
      "Hochhaus NRW ab 22 m: Sicherheitstreppenraum, Druckbelüftung Rettungswege, BMA-Auslösung, Funkverstärkung, Eigentümerpflichten – SBauVO Teil Hochhaus.",
    keywords: [
      "Hochhaus Brandschutz NRW",
      "Hochhaus Sonderbau",
      "Druckbelüftung Treppenraum",
      "Sicherheitstreppenraum",
      "22 Meter Hochhaus",
      "SBauVO Hochhaus",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Schwelle 22 m – nicht nur Gebäudeklasse 5",
        paragraphs: [
          "Hochhäuser sind Sonderbauten nach § 50 Abs. 2 Nr. 1 BauO NRW. Maßgeblich ist die Gebäudehöhe: Fußbodenoberkante des höchstgelegenen Geschosses mit Aufenthaltsraum über der Geländeoberfläche – Schwelle mehr als 22 m (§ 2 Abs. 3 BauO NRW, SBauVO Hochhaus-Teil).",
          "GK 5 allein beschreibt Bauteilanforderungen – der Hochhaus-Tatbestand löst zusätzliche SBauVO-Regeln aus: Sicherheitstreppenräume, Druckbelüftung, Aufzugs-Brandfallsteuerung, ggf. Funkunterstützung, erweiterte Eigentümerpflichten.",
          "Grenzfall ja: Bürohochhaus 28 m, innenliegender Sicherheitstreppenraum, Druckbelüftung über BMA, Prüfingenieur-Konzept, [PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) für Druckbelüftung alle 3 Jahre. Grenzfall nein: 24 m Gebäude, aber höchstes Aufenthaltsgeschoss bei 21 m – kein Hochhaus-Tatbestand, wenn Höhe korrekt nach § 2 berechnet.",
        ],
      },
      {
        id: "rettungswege",
        title: "Treppenräume und Sicherheitstreppenräume",
        paragraphs: [
          "Innenliegende notwendige Treppenräume oberirdischer Geschosse müssen als Sicherheitstreppenraum ausgebildet sein – oder es gelten Ersatzregelungen bei begrenzter Höhe (z. B. bis 30 m zwei innenliegende notwendige Treppenräume statt eines Sicherheitstreppenraums).",
          "Bei Höhen bis 60 m kann ein Sicherheitstreppenraum an Stelle von zwei notwendigen Treppenräumen genügen – projektspezifisch im Konzept. Abstände von Türen zu Sicherheitstreppenräumen mindestens 3 m.",
          "Fluchtweglängen: Aus Aufenthaltsräumen und Kellern Ausgang zu notwendigem Treppenraum, Sicherheitstreppenraum-Vorraum oder ins Freie in höchstens 35 m – Hochhausplanung ist retungsweggetrieben, nicht nur GK-Tabelle.",
        ],
      },
      {
        id: "druckbelueftung",
        title: "Druckbelüftung und BMA",
        paragraphs: [
          "Hochhäuser brauchen getrennte lüftungstechnische Anlagen (Druckbelüftungsanlagen) für notwendige Treppenräume und Sicherheitstreppenräume – Rauchfreihaltung der Rettungswege.",
          "Auslösung über Brandmeldeanlage, maximaler Luftvolumenstrom unverzüglich nach Alarm. Bei nur einem innenliegenden Sicherheitstreppenraum: Ausfallkonzept für die Druckbelüftung. Lüftungsanlagen dürfen den Druckbelüftungsbetrieb nicht beeinträchtigen.",
          "Wiederkehrende Prüfung durch Prüfsachverständigen nach [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) – nicht mit DGUV-Wartung verwechseln.",
        ],
      },
      {
        id: "technik",
        title: "Aufzüge, Funk, Versammlungsräume",
        paragraphs: [
          "Brandfallsteuerung der Aufzüge muss mit BMA und Druckbelüftung abgestimmt sein – selbsttätige Auslösung sicherstellen.",
          "Stört die Bauliche Anlage den Funk der Feuerwehr im Gebäude, sind technische Anlagen zur Funkunterstützung vorzusehen.",
          "Versammlungsräume mit Fußbodenebene über 22 m nur mit selbsttätiger Feuerlöschanlage zulässig. Verkaufsräume (ohne Gaststätten) dürfen mit Fußboden nicht über 22 m liegen – Nutzungsplanung und Höhe zusammen denken.",
        ],
      },
      {
        id: "betrieb",
        title: "Eigentümer- und Betreiberpflichten",
        paragraphs: [
          "Eigentümer trägt Verantwortung für öffentlich-rechtliche Vorschriften; Pflichten können schriftlich auf Betreiber übertragen werden, wenn diese mit Anlage vertraut sind.",
          "Ab bestimmter Höhe und Nutzungseinheitsgröße: geeignete Personen für Brandverhütung und Evakuierung – über [BSB/BSO](/ratgeber/bestellung-brandschutzbeauftragter-nrw) und [Alarmierung](/ratgeber/alarmierung-evakuierung-betrieb) hinausgehende Konzeptvorgaben.",
          "Technische Anlagen in Hochhäusern außerhalb von Wohnungen: wiederkehrende Prüfung elektrischer Anlagen nach PrüfVO – zusätzlich zu BMA und Druckbelüftung.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO NRW Hochhaus-Teil und Höhendefinition zusammen. Einzelfragen (Ersatzregelungen bis 30 m/60 m) gehören in das projektspezifische Brandschutzkonzept mit Prüfingenieur. Er ersetzt keine behördliche Festlegung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
    ],
    faq: [
      {
        question: "Ab wann ist ein Gebäude ein Hochhaus in NRW?",
        answer:
          "Wenn die Gebäudehöhe nach § 2 Abs. 3 BauO NRW mehr als 22 m beträgt – gemessen zur Fußbodenoberkante des höchsten Geschosses mit möglichem Aufenthaltsraum.",
      },
      {
        question: "Was ist ein Sicherheitstreppenraum?",
        answer:
          "Besonders ausgebildeter notwendiger Treppenraum gegen Rauch- und Wärmeeinwirkung – Pflicht für innenliegende Treppen in Hochhäusern, mit Druckbelüftung.",
      },
      {
        question: "Wer prüft die Druckbelüftung?",
        answer:
          "Prüfsachverständiger nach PrüfVO NRW alle 3 Jahre in Hochhäusern – parallel zu Errichter-Wartung, nicht identisch.",
      },
      {
        question: "Braucht jedes Hochhaus eine Sprinkleranlage?",
        answer:
          "Nicht pauschal für das gesamte Gebäude – aber Versammlungsräume über 22 m nur mit selbsttätiger Feuerlöschanlage. Gesamtentscheidung im Brandschutzkonzept.",
      },
      {
        question: "Kann ein 25 m hohes Gebäude kein Hochhaus sein?",
        answer:
          "Ja, wenn kein Aufenthaltsraum im obersten relevanten Geschoss die 22-m-Schwelle überschreitet – Höhenberechnung nach BauO genau dokumentieren.",
      },
      {
        question: "Wer ist verantwortlich im Betrieb?",
        answer:
          "Eigentümer grundsätzlich; Pflichten können auf Betreiber übertragen werden – schriftlich und nachweisbar mit Kenntnis der Anlagen.",
      },
    ],
  },
  {
    slug: "brandschutzkonzept-baupruefvo-nrw",
    title: "Brandschutzkonzept nach BauPrüfVO §9: Was wirklich rein muss",
    excerpt:
      "„Konzept beifügen“ heißt mehr als ein Lageplan. BauPrüfVO §9 listet Pflichtinhalte von Feuerwehrzufahrt über Abschottungen bis BMA – dreifach zum Bauantrag, geprüft vom Prüfingenieur.",
    metaTitle: "Brandschutzkonzept BauPrüfVO §9 | H&S+",
    metaDescription:
      "Brandschutzkonzept Pflichtinhalte NRW: §9 BauPrüfVO, Feuerwehrzufahrt, Rettungswege, BMA, Löschanlagen, Ausgleichsmaßnahmen – dreifach zum Antrag.",
    keywords: [
      "Brandschutzkonzept BauPrüfVO",
      "§ 9 Brandschutzkonzept NRW",
      "Pflichtinhalte Brandschutzkonzept",
      "Prüfingenieur Brandschutz",
      "Sonderbau Nachweis",
      "Brandschutzkonzept Inhalt",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Wann nötig vs. was rein muss",
        paragraphs: [
          "Ob ein Brandschutzkonzept erforderlich ist, regeln § 50 BauO NRW (Sonderbau) und [wann-Konzept](/ratgeber/brandschutzkonzept-wann-noetig) – Stellungnahme, Fortschreibung oder vollständiges Konzept. Dieser Artikel behandelt, was § 9 BauPrüfVO NRW im Konzept verlangt, wenn es eingereicht wird.",
          "Das Brandschutzkonzept ist eine zielorientierte Gesamtbewertung des baulichen und abwehrenden Brandschutzes bei Sonderbauten – aufgestellt vom in § 54 Abs. 3 BauO bestimmten Personenkreis (qualifizierter Entwurfsverfasser / Brandschutzingenieur).",
          "Grenzfall ja: Neues Hotel Sonderbau – Konzept mit Feuerwehrzufahrt, Brandabschnitten, BMA, Druckbelüftung, Nutzerzahl, Ausgleichsmaßnahmen, dreifach zum Bauantrag, Prüfingenieur bestätigt Vollständigkeit. Grenzfall nein: Nur Grundriss und „BMA kommt später“ – keine §-9-konforme Einreichung.",
        ],
      },
      {
        id: "pflichtinhalte",
        title: "Die Pflichtliste aus § 9",
        paragraphs: [
          "BauPrüfVO §9 verlangt insbesondere Angaben zu:",
        ],
        list: [
          "Feuerwehr: Zufahrten, Durchfahrten, Aufstell- und Bewegungsflächen",
          "Löschwasser: erforderliche Menge, Versorgungsnachweis, Hydrantenstandorte, Rückhalteanlagen",
          "Abschottungen: äußere/innere Brand- und Rauchabschnitte, FW der Bauteile, Brandverhalten Baustoffe",
          "Rettungswege: Lage, Bemessung, Kennzeichnung, Sicherheitsbeleuchtung, Schiebetüren, Verriegelungen",
          "Nutzerzahl, Mobilität, Grundzüge der Evakuierung",
          "Haustechnik an Rettungswegen und Aufzügen; Lüftung brandschutztechnisch",
          "RWA, Überdruckanlagen für Rauchfreihaltung von Rettungswegen",
          "Alarmierung; Löschanlagen, Hydranten, Steigeleitungen; Sicherheitsstromversorgung",
          "BMA mit Zentralen, Tableaus, Auslösestellen; funktionale Steuerungszusammenhänge",
          "Betriebliche Maßnahmen (BSO, Räumung); Abweichungen mit Ausgleichsmaßnahmen",
          "Ingenieurmethoden wo angewendet",
        ],
      },
      {
        id: "form",
        title: "Form und Beilage zum Antrag",
        paragraphs: [
          "Angaben in schriftlichem Erläuterungsbericht plus zeichnerische Darstellung der baulichen und technischen Anforderungen – nicht nur Prosa, nicht nur Pläne ohne Text.",
          "Dem Bauantrag nach § 65 BauO ist das Brandschutzkonzept in dreifacher Ausfertigung beizufügen – neben den Bauvorlagen nach § 10.",
          "Sonderbau-spezifische Ergänzungen in Bauvorlagen: z. B. Verkaufsstätten – Flächenberechnung Verkaufsräume und Brandabschnitte; Beherbergung – Gastbetten und Zuordnung zu Räumen.",
        ],
      },
      {
        id: "pruefingenieur",
        title: "Rolle des Prüfingenieurs Brandschutz",
        paragraphs: [
          "Die Prüfingenieurin oder der Prüfingenieur für Brandschutz prüft Vollständigkeit und Richtigkeit des Konzepts – unter Beachtung der Leistungsfähigkeit der örtlichen Feuerwehr. Zuständige Brandschutzdienststelle ist einzubeziehen.",
          "Keine Prüfung, wenn Prüfingenieur oder Mitarbeiter das Konzept selbst erstellt haben – Unabhängigkeit gewahrt.",
          "Unterschied [Wer darf prüfen?](/ratgeber/wer-darf-brandschutzanlagen-pruefen): Prüfingenieur = Genehmigungsverfahren; Prüfsachverständiger PrüfVO = wiederkehrende Betriebsprüfung.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Mängel bei Einreichung",
        paragraphs: [
          "Fehlende Nutzerzahl und Evakuierungslogik – besonders bei Nutzungsänderungen.",
          "Löschwasser und Hydranten „extern geklärt“ ohne Nachweis auf dem Grundstück.",
          "Technische Anlagen nur in Gewerkeplänen, nicht im Konzept verknüpft (BMA ↔ Druckbelüftung ↔ Aufzug).",
          "Abweichungen von BauO/SBauVO ohne dokumentierte Ausgleichsmaßnahmen – § 3 Abs. 1 Satz 3 BauO NRW ist kein Freifahrtschein ohne Nachweis.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst BauPrüfVO NRW § 9 zusammen. Ob für Ihr Vorhaben Konzept, Stellungnahme oder Fortschreibung genügt, ist gesondert zu klären. Er ersetzt kein Konzept und keine Prüfingenieur-Prüfung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Wann Konzept?" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/wer-darf-brandschutzanlagen-pruefen", label: "Wer darf prüfen?" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr-Abstimmung" },
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Bauantrag Unterlagen" },
    ],
    faq: [
      {
        question: "Brauche ich immer ein vollständiges Konzept?",
        answer:
          "Nicht bei jedem Sonderbau – manche Vorhaben reichen mit Stellungnahme oder Fortschreibung. Maßgeblich: Sonderbau-Tatbestand, Änderungsumfang, Behörde.",
      },
      {
        question: "Warum dreifach?",
        answer:
          "BauPrüfVO §9: drei Ausfertigungen zum Bauantrag – Behörde, Prüfingenieur, Projektunterlagen.",
      },
      {
        question: "Wer schreibt das Konzept?",
        answer:
          "Qualifizierter Entwurfsverfasser nach § 54 Abs. 3 BauO NRW – typisch Brandschutzingenieur, nicht der Architekt allein ohne Qualifikation.",
      },
      {
        question: "Was sind Ausgleichsmaßnahmen?",
        answer:
          "Wenn von BauO/SBauVO abgewichen wird: im Konzept dokumentieren, was nicht erfüllt ist und welche gleichwertigen Maßnahmen den Ausgleich schaffen.",
      },
      {
        question: "Reicht ein Brandschutzkonzept aus dem Nachbarland?",
        answer:
          "Nein – NRW-Verfahren mit BauPrüfVO §9, örtlicher Feuerwehr und Prüfingenieur NRW.",
      },
      {
        question: "Gilt §9 auch bei Umbau?",
        answer:
          "Bei genehmigungspflichtiger Änderung oder Nutzungsänderung von Sonderbauten in der Regel ja – Fortschreibung oder neues Konzept je nach Umfang.",
      },
    ],
  },
  {
    slug: "verkaufsstaetten-rettungswege-sbauvo-nrw",
    title: "Verkaufsstätten: Brandabschnitte und Rettungswege nach SBauVO",
    excerpt:
      "Einkaufsmarkt, Fachmarkt oder Ladenstraße ab 2.000 m² Verkaufsfläche: SBauVO Teil 3 regelt Brandabschnittsgrößen, Sprinklerfolgen und Rettungswege – unabhängig von der Gebäudeklasse.",
    metaTitle: "Verkaufsstätten Brandschutz SBauVO | H&S+",
    metaDescription:
      "Verkaufsstätte Sonderbau NRW: ab 2.000 m², Brandabschnitt 1.500–10.000 m², Sprinkler, Rettungswege §69 SBauVO – Planung für Handel und Gewerbe.",
    keywords: [
      "Verkaufsstätte Brandschutz",
      "SBauVO Verkaufsstätte",
      "Brandabschnitt Einkaufsmarkt",
      "Ladenstraße Sonderbau",
      "Verkaufsstätte Rettungsweg",
      "Sprinkler Verkaufsstätte NRW",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Ab 2.000 m² Verkaufsfläche",
        paragraphs: [
          "SBauVO NRW Teil 3 gilt für Verkaufsstätten, deren Verkaufsräume und Ladenstraßen einschließlich innerer Bauteile insgesamt mehr als 2.000 m² haben. Darunter können andere Tatbestände gelten – darüber ist es Sonderbau-Planung mit eigenen Brandabschnitts- und Rettungsweg-Regeln.",
          "Verkaufsstätte umfasst alle räumlich verbundenen Bereiche (Aufzüge, Ladenstraßen) – nicht nur die Verkaufsfläche auf dem Plan. Notwendige Treppenräume und Lager mit bestimmten Größen sind ausgenommen bzw. gesondert.",
          "Grenzfall ja: Fachmarkt 3.200 m², ohne Sprinkler, Brandabschnitte max. 1.500 m² (drei Geschosse), feuerbeständige Trennung zum angrenzenden Büro. Grenzfall nein: 2.400 m² als „ein Brandabschnitt reicht“ ohne SBauVO-Flächenprüfung und ohne Trennung zu Fremdnutzung.",
        ],
      },
      {
        id: "brandabschnitte",
        title: "Brandabschnittsgrößen und Sprinkler",
        paragraphs: [
          "Unterteilung durch innere Brandwände – zulässige Fläche je Geschoss u. a.:",
        ],
        list: [
          "Mit Sprinkler, erdgeschossig: bis 10.000 m²",
          "Mit Sprinkler, sonst: bis 5.000 m²",
          "Ohne Sprinkler, erdgeschossig: bis 3.000 m²",
          "Ohne Sprinkler, sonst: bis 1.500 m² (max. drei Geschosse, Gesamtfläche Brandabschnitt begrenzt)",
        ],
      },
      {
        id: "bauteile",
        title: "Bauteile und Nachbarnutzungen",
        paragraphs: [
          "Tragende Wände, Pfeiler, Stützen: feuerbeständig – bei erdgeschossigen Verkaufsstätten ohne Sprinkler mindestens feuerhemmend.",
          "Trennwände zwischen Verkaufsstätte und fremder Nutzung: feuerbeständig, ohne Öffnungen.",
          "Lagerräume über 100 m² und Werkräume mit erhöhter Brandgefahr (Schreinerei, Malerwerkstatt im Markt): feuerbeständig abtrennen – typisch bei Baumärkten und Möbelhäusern mit Werkstattbereich.",
          "Erdgeschossige Verkaufsstätte: Fußboden an keiner Stelle mehr als 1 m unter Gelände – Definition beeinflusst erlaubte Abschnittsgrößen.",
        ],
      },
      {
        id: "rettungswege",
        title: "Rettungswege § 69",
        paragraphs: [
          "§ 69 SBauVO regelt Rettungswege in Verkaufsstätten – Ergänzung zu [§ 33 BauO](/ratgeber/flucht-und-rettungswege-bauo-nrw): Weglängen, Ausgänge, Bestuhlung und Kundenverkehr.",
          "Hohe Nutzerzahl und wechselnde Besucherströme: Nutzerzahl und Evakuierung gehören ins [Brandschutzkonzept](/ratgeber/brandschutzkonzept-baupruefvo-nrw) – nicht nur Fläche.",
          "Verbindung zu [Versammlungsstätten-Betrieb](/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw) wenn Veranstaltungsflächen im Markt – unterschiedliche Rechtskreise prüfen.",
        ],
      },
      {
        id: "genehmigung",
        title: "Antrag, Bestand, Prüfung",
        paragraphs: [
          "Bauvorlagen nach BauPrüfVO: Flächenberechnung Verkaufsräume und Brandabschnitte beifügen. Bestand: § 90 SBauVO – Anwendung auf bestehende Verkaufsstätten.",
          "Nach Inbetriebnahme: [PrüfVO NRW](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) für BMA, Sprinkler, RWA. [Gastronomie im Markt](/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln) kann zusätzliche SBauVO-/Gaststätten-Tatbestände auslösen.",
          "Einordnung [geregelt/ungeregelt](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw): Verkaufsstätte ist geregelt in SBauVO Teil 3.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst SBauVO NRW Teil 3 (Verkaufsstätten) zusammen. Kleine Läden unter 2.000 m² folgen anderen Einordnungen – ggf. nur GK und Nutzungsänderung. Er ersetzt kein genehmigungsfähiges Brandschutzkonzept.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Geregelt/ungeregelt" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege BauO" },
      { href: "/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau", label: "PrüfVO NRW" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Ladenlokal" },
    ],
    faq: [
      {
        question: "Ab welcher Fläche gilt SBauVO Teil 3?",
        answer:
          "Verkaufsräume und Ladenstraßen zusammen über 2.000 m² – inklusive innerer Bauteile der Verkaufsbereiche.",
      },
      {
        question: "Wie groß darf ein Brandabschnitt ohne Sprinkler sein?",
        answer:
          "Bis 1.500 m² je Geschoss (nicht erdgeschossig, max. drei Geschosse) – oder 3.000 m² erdgeschossig ohne Sprinkler. Mit Sprinkler deutlich größer.",
      },
      {
        question: "Zählt die Ladenstraße zur Fläche?",
        answer:
          "Ja – Ladenstraßen innerhalb der Verkaufsstätte fließen in die 2.000-m²-Schwelle und Verbindungslogik ein.",
      },
      {
        question: "Was trennt Verkauf vom Büro nebenan?",
        answer:
          "Feuerbeständige Trennwand ohne Öffnungen zwischen Verkaufsstätte und nicht zur Verkaufsstätte gehörenden Räumen.",
      },
      {
        question: "Ist ein Baumarkt immer Sonderbau?",
        answer:
          "Bei über 2.000 m² Verkaufsfläche nach SBauVO-Definition ja – plus ggf. Lager/Werkstatt-Regeln für Brandgefahr.",
      },
      {
        question: "Brauche ich Sprinkler?",
        answer:
          "Nicht gesetzlich für jede Verkaufsstätte pauschal – aber ohne Sprinkler kleinere Brandabschnitte und höhere Bauteilanforderungen. Viele Märkte wählen Sprinkler für größere Abschnitte.",
      },
    ],
  },
];
