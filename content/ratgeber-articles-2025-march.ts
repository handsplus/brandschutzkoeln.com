/**
 * März 2025 – Slots 11–29 (6 Artikel).
 * Wird in ratgeber-articles-2025.ts eingefügt.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_MARCH: RatgeberArticle[] = [
  {
    slug: "spezial-loeschanlagen-gefaehrdungsbeurteilung",
    title: "Spezial-Löschanlagen: Gefährdungsbeurteilung für Betreiber",
    excerpt:
      "Gas-, Schaum-, Pulver- und Aerosol-Löschanlagen unterliegen der Betriebssicherheitsverordnung. Wie die bvfa-Mustergefährdungsbeurteilung hilft, Gefahren, Prüffristen und Unterweisungen standortspezifisch festzulegen.",
    metaTitle: "Spezial-Löschanlagen: Gefährdungsbeurteilung | H&S+",
    metaDescription:
      "Gefährdungsbeurteilung Spezial-Löschanlagen: bvfa-Muster, BetrSichV, Unterweisung, Prüfungen durch befähigte Person – Orientierung für Betreiber in NRW.",
    keywords: [
      "Gefährdungsbeurteilung Löschanlage",
      "Spezial-Löschanlage Betrieb",
      "bvfa Mustergefährdungsbeurteilung",
      "BetrSichV Löschanlage",
      "VdS 3518 Betrieb",
      "befähigte Person Löschanlage",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Warum Betreiber eine eigene Gefährdungsbeurteilung brauchen",
        paragraphs: [
          "Ortsfeste Spezial-Löschanlagen – Löschgas (CO₂, Inertgas), Leichtschaum, Pulver, Aerosol, Kühlmittel oder ähnliche Systeme – sind Arbeitsmittel nach Betriebssicherheitsverordnung (BetrSichV). Der Betreiber muss vor Inbetriebnahme und bei wesentlichen Änderungen eine Gefährdungsbeurteilung durchführen und dokumentieren (§ 3 Abs. 8 BetrSichV).",
          "Fachlich fehlen Betreibern oft Detailkenntnisse zu Flutungszeiten, Löschmitteltoxizität, Druckgasflaschen und Ansteuerlogik. Die Fachgruppe Spezial-Löschanlagen im bvfa stellt deshalb eine Mustergefährdungsbeurteilung als kostenloses Informationsblatt bereit – allgemeine Zusammenstellung bekannter Gefährdungen, die für die konkrete Anlage und Arbeitsstätte anzupassen ist.",
          "Die Muster-Vorlage ersetzt keine fachkundige Beratung, sondern strukturiert typische Gefährdungsfaktoren, Relevanz je Löschanlagetyp, Maßnahmen, einschlägige Vorschriften und Hinweise zur Umsetzung. Darauf aufbauend legt der Betreiber Prüfumfang, Prüffristen und Unterweisungsinhalte fest.",
          "Grenzfall ja: Serverraum mit CO₂-Gesamtraumflutung – Muster heranziehen, Gefährdungsklasse aus Errichterdokumentation übernehmen, jährliche Unterweisung und Prüfplan dokumentieren. Grenzfall nein: Anlage seit Jahren im Betrieb ohne GB, ohne Betriebsanweisung und ohne Nachweis der wiederkehrenden Prüfung – das ist keine „Kleinigkeit“ bei Personengefährdung.",
        ],
      },
      {
        id: "pflichten",
        title: "Betreiberpflichten im Überblick",
        paragraphs: [
          "Aus BetrSichV, DGUV-Informationen (z. B. 205-026 für Löschgas, 205-027 ff. für Schaum/Pulver) und VdS 3518 ergeben sich wiederkehrende Pflichten:",
        ],
        list: [
          "Gefährdungsbeurteilung fachkundig erstellen oder erstellen lassen – bei fehlender Expertise Errichter oder Sachverständigen hinzuziehen",
          "Betriebsanweisung aus Herstellerunterlagen ableiten, mit sicherheitstechnischen Hinweisen ergänzen",
          "Personen mit Zutritt zu Lösch- und Gefährdungsbereichen vor Tätigkeitsbeginn und mindestens jährlich unterweisen – dokumentieren",
          "Prüfungen vor Inbetriebnahme und wiederkehrend durch befähigte Personen oder Sachverständige veranlassen – Umfang und Fristen aus der GB",
          "Anlage bestimmungsgemäß betreiben, Mängel unverzüglich beheben, Außerbetriebsetzung dokumentieren",
        ],
      },
      {
        id: "muster",
        title: "So nutzen Sie die bvfa-Mustergefährdungsbeurteilung",
        paragraphs: [
          "Das Informationsblatt listet Gefährdungen tabellarisch – z. B. unbeabsichtigte Auslösung, Verweilen im Flutungsbereich, Löschmittelreste, Druckgasleckage, Lärm bei Gasentladung (relevant für EDV-Massenspeicher), Wartungsarbeiten unter Restdruck. Je Zeile: Relevanz für Ihren Anlagentyp, Bewertung, Maßnahme, Normverweis.",
          "Vorgehen in der Praxis: Anlagenart und Schutzbereiche erfassen, Musterzeilen für irrelevante Gefahren streichen oder begründen, standortspezifische Zusatzgefahren ergänzen (Nachbaranlagen, gemeinsame Zutrittswege, Schichtbetrieb, Fremdfirmen). Ergebnis in interne GB übernehmen, mit Betriebsanweisung und Prüfplan verknüpfen.",
          "Bei Gaslöschanlagen sind Personenschutz-Themen zwingend mit Errichternachweis abzugleichen – siehe Cluster [Löschgas](/ratgeber/loeschgas-loeschanlagen-personenschutz), [Leichtschaum](/ratgeber/leichtschaum-loeschanlagen-personenschutz), [Aerosol](/ratgeber/aerosol-loeschanlagen-personenschutz), [Pulver](/ratgeber/pulver-loeschanlagen-personenschutz). Eine Generik-Betriebsanweisung für „alle Löschanlagen“ reicht nicht.",
        ],
      },
      {
        id: "pruefung",
        title: "Prüfungen: befähigte Person und Sachverständige",
        paragraphs: [
          "VdS 6007 beschreibt Qualifikation und Aufgaben der befähigten Person für automatische ortsfesten Feuerlöschanlagen. Prüftätigkeiten leiten sich aus der Gefährdungsbeurteilung ab – Anhang A in VdS 6007 enthält beispielhafte Tabellen für Gaslöschanlagen auf Basis einer Muster-GB.",
          "Umfang und Tiefe variieren nach Prüfgrundlage und Gefährdungsklasse. Bei Personengefährdung entsprechend Gefährdungsklasse I sind wiederkehrende Prüfungen durch Sachverständige vorgesehen; geringere Klassen können befähigte Personen übernehmen – aber nur, wenn die GB das so festlegt.",
          "Allgemeine [Löschanlagen-Prüffristen](/ratgeber/sprinkler-loeschanlagen-prueffristen) und [DGUV-205-040-Überblick](/ratgeber/prueffristen-brandschutz-dguv-205-040-ueberblick) ergänzen die spezifische BetrSichV-Logik. Sonderbauten: Prüfberichte gehören in die Gesamtbewertung – [Sonderbau-Mängel](/ratgeber/sonderbau-anlagen-pruefung-maengel-nrw).",
        ],
      },
      {
        id: "unterweisung",
        title: "Unterweisung und Brandfall",
        paragraphs: [
          "Unterweisung ist nicht „Feuerlöscher-Übung“, sondern Kenntnis der Löschmittelgefahr: Flutungsalarm ernst nehmen, Bereich sofort verlassen, Stopptaster nur im genehmigten Konzept, kein Wiederbetreten ohne Freigabe. Bei Schaum- und Pulveranlagen: Erstickungs- und Sichtrisiko, Verweildauer im Schutzbereich.",
          "Evakuierung und Alarmierung mit [Alarmierung im Betrieb](/ratgeber/alarmierung-evakuierung-betrieb) abstimmen. Wartung und Instandsetzung nur mit Freigabe, Absperrung und ggf. Freimessen – analog Personenschutz bei [Sprinkler-Wasserstoff](/ratgeber/sprinkler-verzinkung-wasserstoffgefahr) bei anderen Risiken, aber eigenes Regelwerk.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung: Baulich vs. betrieblich",
        paragraphs: [
          "Baulicher Nachweis (Brandschutzkonzept, Genehmigung) und BetrSichV-Betrieb sind getrennt. Eine genehmigte Gaslöschanlage kann im Betrieb dennoch mangelhaft sein, wenn GB, Unterweisung oder Prüfung fehlen. Umgekehrt ersetzt eine vollständige GB keine fehlende bauliche Zulassung bei Nutzungsänderung.",
          "Sprinkler- und Wasserlöschanlagen haben eigene Regelwerke (VdS CEA 4001, DIN EN 12845) – dieser Ratgeber zielt auf Spezial-Löschanlagen im bvfa-Sinne. Bei Umbauten im Schutzbereich: [Umbau & Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz) prüfen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst bvfa-Mustergefährdungsbeurteilung, BetrSichV und VdS-Hinweise für Betreiber zusammen. Konkrete Fristen und Prüftiefen stehen in Ihrer dokumentierten GB und im Prüfprotokoll. Er ersetzt keine Sachverständigenprüfung und keine behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/loeschgas-loeschanlagen-personenschutz", label: "Löschgas Personenschutz" },
      { href: "/ratgeber/sprinkler-loeschanlagen-prueffristen", label: "Löschanlagen-Prüffristen" },
      { href: "/ratgeber/prueffristen-brandschutz-dguv-205-040-ueberblick", label: "DGUV 205-040" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Alarmierung" },
      { href: "/ratgeber/betrieblicher-brandschutz-praxis-ueberblick", label: "Betrieblicher Brandschutz" },
    ],
    faq: [
      {
        question: "Wo finde ich die bvfa-Mustergefährdungsbeurteilung?",
        answer:
          "Als kostenloser PDF-Download auf bvfa.de unter Merkblätter/Positionspapiere der Fachgruppe Spezial-Löschanlagen (Informationsblatt, Stand 2020).",
      },
      {
        question: "Reicht die Muster-GB ohne Anpassung?",
        answer:
          "Nein. Sie ist eine allgemeine Vorlage. Der Betreiber muss Gefahren für seine konkrete Anlage und Arbeitsstätte bewerten und Maßnahmen festlegen.",
      },
      {
        question: "Wer darf die Gefährdungsbeurteilung erstellen?",
        answer:
          "Fachkundig – der Betreiber selbst nur mit entsprechender Qualifikation, sonst Errichter, Fachplaner oder Sachverständiger. Dokumentationspflicht nach § 3 Abs. 8 BetrSichV.",
      },
      {
        question: "Wie oft müssen Beschäftigte unterwiesen werden?",
        answer:
          "Vor Aufnahme der Tätigkeit im Gefährdungsbereich und danach mindestens jährlich – anhand der Betriebsanweisung, mit Nachweis.",
      },
      {
        question: "Gilt das auch für kleine Schaltschrank-Löschanlagen?",
        answer:
          "Ja, wenn es ortsfeste Arbeitsmittel nach BetrSichV sind. Umfang der GB und Prüfung kann geringer sein, wenn keine Personengefährdung vorliegt – aber dokumentiert werden muss es trotzdem.",
      },
      {
        question: "Unterschied zu DGUV 205-026?",
        answer:
          "205-026 regelt Personenschutz bei Löschgas-Anlagen technisch detailliert. Die bvfa-Muster-GB ist ein breiteres Hilfsmittel für alle Spezial-Löschanlagen und die Betreiber-GB nach BetrSichV.",
      },
    ],
  },
  {
    slug: "photovoltaik-brandrisiken-dach-anlage",
    title: "Photovoltaik auf dem Dach: Brandrisiken und Einsatzvorbereitung",
    excerpt:
      "PV-Anlagen sind selten Brandursache – aber im Brandfall bleiben Module unter Licht oft unter Spannung. Was Planung nach VDE-AR-E 2100-712, Kennzeichnung und Betrieb für Feuerwehr und Gebäudeeigentümer bedeuten.",
    metaTitle: "Photovoltaik Brandschutz: Dach & Einsatz | H&S+",
    metaDescription:
      "PV Brandrisiken: DC-Spannung im Brandfall, VDE-AR-E 2100-712, Feuerwehrschalter, Übersichtsplan – Orientierung für Betreiber und Planer in NRW.",
    keywords: [
      "Photovoltaik Brandschutz",
      "PV Anlage Brandgefahr",
      "VDE-AR-E 2100-712",
      "Feuerwehr Photovoltaik",
      "PV DC Spannung Brand",
      "Solaranlage Kennzeichnung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Geringes Eigenbrandrisiko – hohe Einsatzkomplexität",
        paragraphs: [
          "Statistisch gehen von fachgerecht geplanten und gewarteten Photovoltaikanlagen nur wenige Brände mit größerem Schaden aus – Fehlerhafte Installation, Defekte und minderwertige Komponenten sind die häufigeren Auslöser. Das ändert nichts an der besonderen Gefahr im Brandfall: Module auf dem Dach können bei Lichteinfall weiterhin Gleichstrom erzeugen, auch wenn der Wechselrichter abgeschaltet ist.",
          "Für Feuerwehr und technische Hilfe bedeutet das: elektrische Gefährdung bei Löschwasser, erschwerte Sicht auf Dachbrandstellen, ggf. erschwerte Zugänglichkeit. Für Betreiber und Planer: Kennzeichnung, Dokumentation und technische Maßnahmen nach VDE-AR-E 2100-712 (Maßnahmen DC-Bereich für Brandbekämpfung und technische Hilfe).",
          "Grenzfall ja: Neuanlage mit Übersichtsplan am Zählerschrank, DC-Freischaltung, geschützte Leitungsführung durch Brandwände. Grenzfall nein: Nachrüst-PV ohne Kennzeichnung, Kabel lose über Dachziegel, kein Hinweis im Notruf – Einsatz verzögert sich.",
        ],
      },
      {
        id: "ursachen",
        title: "Typische Schwachstellen in der Praxis",
        paragraphs: [
          "Häufige technische Auslöser: fehlerhafte Steckverbindungen und MC4-Kontakte, Lichtbögen bei beschädigter Isolation, defekte Wechselrichter, Überhitzung durch Verschattungskonzepte oder Brandlast am Dach. Organisatorisch: fehlende Wartung, Fremdhandwerker ohne PV-Kenntnis, nachträgliche Dachdurchdringungen ohne Abschottung.",
          "PV-Speicher und Batteriesysteme erhöhen die Komplexität – siehe [Batteriespeicher Li-Ion](/ratgeber/batteriespeicher-lithium-ionen-brandgefahren). Carport-PV über Stellplätzen verbindet Dachbrand mit Fahrzeugen – Brandlast und Rettungswege im Umfeld prüfen.",
        ],
      },
      {
        id: "vde",
        title: "VDE-AR-E 2100-712: Planung und Errichtung",
        paragraphs: [
          "Die Anwendungsregel gilt für PV-Systeme an oder auf Gebäuden. Sie bündelt Empfehlungen, um gefährliche Berührungsspannungen zu vermeiden, wenn die Schutzmaßnahme „doppelte oder verstärkte Isolierung“ im Brandfall versagt.",
          "Kernmaßnahmen:",
        ],
        list: [
          "Übersichtsplan mit Leitungsführung und spannungsführenden Teilen – für Einsatzkräfte zugänglich (z. B. neben Hausverteilung)",
          "Kennzeichnung der Anlage und DC-Leitungen nach anerkannten Regeln",
          "Geschützte Verlegung DC-Leitungen – metallische Kanäle, Brandschutzkanäle, besonders bei Durchführungen durch feuerbeständige oder feuerhemmende Bauteile",
          "Einrichtungen zum Unterbrechen oder Kurzschließen des DC-Stroms – Feuerwehr-Schalter, Wechselrichter mit Lichtbogenerkennung, Strangabschaltung je nach Konzept",
        ],
      },
      {
        id: "einsatz",
        title: "Was Feuerwehr und Betreiber im Ernstfall tun",
        paragraphs: [
          "Beim Notruf auf PV-Anlage, Speichergröße und Lage des Trennschalters hinweisen. Ansprechpartner vor Ort halten, Gefahrenbereich räumen – Module nicht mit Wasserstrahl unter Spannung berühren; Sicherheitsabstand einhalten (in der Praxis oft etwa ein Meter bei Sprühstrahl, abhängig von Einsatzleitung).",
          "Löschen vom Dach ist oft nur mit Moduldemontage oder speziellen Konzepten möglich – Wasser läuft an glatten Modulflächen ab. DC-Abschaltung reduziert Risiko im Gebäudeinneren, nicht zwingend auf dem Dach bei anhaltender Einstrahlung.",
          "Betriebliche Brandschutzordnung und Feuerwehrplan sollten PV-Standorte enthalten – Verknüpfung mit [Fluchtplan aktualisieren](/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe) und [Alarmierung](/ratgeber/alarmierung-evakuierung-betrieb).",
        ],
      },
      {
        id: "umbau",
        title: "Bestand, Umbau und Nutzungsänderung",
        paragraphs: [
          "PV-Nachrüstung auf gewerblichen Dächern kann brandschutztechnische Fragen auslösen: zusätzliche Durchdringungen, Lasten, Entfernung von Rettungswegen auf dem Dach, Nachweis der Feuerwehrzufahrt. Bei Sonderbau oder großflächiger Gewerbenutzung [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig) und [Umbau](/ratgeber/umbau-nutzungsaenderung-brandschutz) früh einbinden.",
          "Grenzfall ja: Teildach-PV mit dokumentierter Leitungsführung und Abstimmung mit Errichter. Grenzfall nein: PV über gesamter Fläche ohne Plan für Dachbegehung und ohne Abstimmung mit BMA-Zonen oder RWA-Lüftungsöffnungen.",
        ],
      },
      {
        id: "wartung",
        title: "Betrieb und Inspektion",
        paragraphs: [
          "Regelmäßige Sichtprüfung: Modulbruch, Kabelschäden, Korrosion an Halterungen, Vegetation, Marderschäden. Thermografie in Wartungsverträgen kann Hotspots finden. Nach Gewitter, Hagel oder Dacharbeiten Verbindungen prüfen.",
          "Dokumentation für Versicherer und Behörden: Errichtungsprotokoll, Plan, Wartungsnachweise. Bei Gewerbebetrieben in die Gefährdungsbeurteilung und BSO aufnehmen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber orientiert an VDE-AR-E 2100-712 und allgemeiner Praxis – keine Elektroinstallationsanleitung. Konkrete Schaltkonzepte gehören in die Planung durch Elektrofachkraft und Errichter. Er ersetzt kein Brandschutzkonzept und keine behördliche Festlegung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/batteriespeicher-lithium-ionen-brandgefahren", label: "Batteriespeicher" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Feuerwehrpläne" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Alarmierung" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzeptpflicht" },
    ],
    faq: [
      {
        question: "Sind PV-Anlagen häufige Brandursache?",
        answer:
          "Nein – bei fachgerechter Montage und Wartung ist das Eigenbrandrisiko statistisch gering. Die Einsatzherausforderung bei Bränden am oder am Gebäude mit PV ist dennoch hoch.",
      },
      {
        question: "Schaltet der Wechselrichter alle Spannung ab?",
        answer:
          "Nein. Der DC-Bereich zwischen Modulen und Wechselrichter kann bei Lichteinfall weiterhin Spannung führen. DC-Abschalteinrichtungen nach VDE-AR-E 2100-712 adressieren das.",
      },
      {
        question: "Was muss an der Hausverteilung hängen?",
        answer:
          "Typisch: normgerechtes Hinweisschild zur PV-Anlage und ein Übersichtsplan mit Leitungsführung und spannungsführenden Teilen – für Einsatzkräfte erkennbar.",
      },
      {
        question: "Brauche ich für private PV ein Brandschutzkonzept?",
        answer:
          "Einfamilienhaus-PV löst meist kein bauordnungsrechtliches Konzept aus. Bei Gewerbe, Sonderbau oder vielen Durchdringungen können Nachweise und Abstimmungen trotzdem nötig sein.",
      },
      {
        question: "Dürfen DC-Leitungen durch Brandwände?",
        answer:
          "Nur mit geeigneter, dokumentierter Leitungsführung und Abschottung nach anerkannten Regeln – Planung mit Brandschutz und Elektrofachkraft.",
      },
      {
        question: "PV und BMA – Fehlalarme?",
        answer:
          "PV-Anlage selbst löst selten BMA aus; eher relevant sind Staub bei Dacharbeiten oder falsche Melderwahl in Technikräumen – siehe [Fehlalarme BMA](/ratgeber/fehlalarme-brandmeldeanlage-mehrfachsensor).",
      },
    ],
  },
  {
    slug: "ladestation-stapler-brandgefahren",
    title: "Ladestationen für Stapler und E-Fahrzeuge: Brandgefahren im Lager",
    excerpt:
      "Lithium-Ionen-Akkus beim Laden können überhitzen und in Thermal Runaway geraten. Wie Ladezonen nach DGUV 205-041 planen, Abstände halten und Quarantäne organisieren.",
    metaTitle: "Stapler-Ladestation: Brandgefahren Li-Ion | H&S+",
    metaDescription:
      "Ladestation Stapler Brandschutz: DGUV 205-041, Abstand zu Brandlasten, Quarantäne defekter LIB, Ladegeräte – Orientierung für Logistik und Gewerbe in NRW.",
    keywords: [
      "Ladestation Stapler Brandgefahr",
      "Lithium Ionen Laden Lager",
      "DGUV 205-041",
      "Gabelstapler Akku laden",
      "Thermal Runaway Batterie",
      "Ladezone Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Ladeinfrastruktur als eigene Brandlast",
        paragraphs: [
          "In Logistik, Produktion und Werkstätten laden Staplerflotten, Hubwagen, interne E-Fahrzeuge und zunehmend Mitarbeiter-E-Bikes ihre Lithium-Ionen-Batterien (LIB) zentral. Die Brandgefahr beim Laden gilt als allgemein bekannt – Gerichte haben Arbeitgeber bei Unfällen zur Vorsorge verpflichtet.",
          "DGUV Information 205-041 (Brandschutz beim Umgang mit Lithium-Ionen-Batterien) bündelt Gefahren, Lagerung, Laden, Quarantäne und Brandfall. Es gibt keine eigene Baunorm nur für Ladestationen – die Einordnung läuft über Gefährdungsbeurteilung nach ArbSchG, ASR A2.2 und betriebliche Brandschutzorganisation.",
          "Grenzfall ja: Ausgewiesene Ladezone auf nicht brennbarem Boden, 2,5 m Freistreifen zu Kartonagen, Hersteller-Ladegerät, Beobachtung beim Laden, Quarantäne für defekte Akkus. Grenzfall nein: Lader in engem Flur zwischen Papierlagern, über Nacht unbeobachtet, gemischte Alt- und Neubatterien ohne Trennung.",
        ],
      },
      {
        id: "gefahren",
        title: "Warum Laden gefährlicher ist als Fahren",
        paragraphs: [
          "Beim Laden fließen hohe Ströme – Überladung, falsches Ladegerät, beschädigte Zellen oder zu hohe Umgebungstemperatur können Erwärmung und Thermal Runaway auslösen. Einmal angestoßen, ist der Brand schwer zu löschen; Wasser dient eher zum Kühlen benachbarter Zellen.",
          "Ursachen in der Praxis: mechanische Beschädigung am Stecker, falscher Ladespannungsbereich, Tiefentladung vor dem Laden, Lader neben brennbaren Stoffen, Laden in Rettungswegen, fehlende Sichtkontrolle.",
        ],
      },
      {
        id: "ladezone",
        title: "Ladezone planen",
        paragraphs: [
          "VDMA-Leitfaden und DGUV 205-041 nennen wiederkehrende Anforderungen:",
        ],
        list: [
          "Nur vom Hersteller freigegebene oder geprüfte Ladegeräte – Spannung und Strom zum Batterietyp passend",
          "Laden auf nicht brennbarem Untergrund, ausreichende Belüftung oder Abluft in geschlossenen Räumen",
          "Abstand zu brennbaren Lagern – bei LIB in Gebäuden oft 2,5 m Freistreifen oder brandschutztechnisch abgetrennter Bereich (Sicherheitsschrank, Container)",
          "Keine Ladeplätze in Flucht- und Rettungswegen, nicht in Pausenräumen oder unterhalb brennbarer Regallagen ohne Schutz",
          "Sichtbare Regeln: maximale Ladezeit, wer meldet Aufblähung oder Geruch, wer schaltet bei Rauch ab",
          "Rauch-/Wärmemelder und BMA-Zonen mit Brandschutzbeauftragtem abstimmen",
        ],
      },
      {
        id: "quarantaene",
        title: "Lager, Quarantäne und defekte Akkus",
        paragraphs: [
          "Volle und leere Staplerbatterien getrennt führen, wenn Hersteller oder Versicherer es verlangen. LIB außerhalb des Fahrzeugs lagern: Pole isolieren, Kurzschluss vermeiden, Ladezustand 40–60 % bei längerer Lagerung, trocken und frostfrei.",
          "Kritische LIB (Aufblähung, Geruch, nach Sturz, nach Wasser) in Quarantäne-Bereich – feuerbeständig abgeschottet oder sicherer Außenort, dokumentiert mit Verantwortlichkeit und Entsorgungsweg. Keine Mülltonne, nur zertifizierter Entsorgungsfachbetrieb.",
          "Verknüpfung mit [Batteriespeicher](/ratgeber/batteriespeicher-lithium-ionen-brandgefahren) und [Brandbegrenzungsdecken](/ratgeber/brandbegrenzungsdecken-lithiumbatterie) – Decken ersetzen kein Ladekonzept.",
        ],
      },
      {
        id: "brandfall",
        title: "Brandfall und Feuerwehr",
        paragraphs: [
          "Bei Rauch oder Hitze am Akku: Bereich räumen, Brandmeldeanlage auslösen, nicht selbst „löschen“ ohne Konzept. Feuerwehr informieren, dass Lithium-Ionen-Batterien betroffen sein können – Kühlung mit viel Wasser, nicht klassisches Abstickern.",
          "Zuständige Feuerwehr im Vorfeld über Ladezonen und Mengen informieren; Brandschutzhelfer schulen. Löschwasser und Zugang in Tiefgaragen-Ladebereichen mit [Löschwasser/Hydranten](/ratgeber/loeschwasser-hydranten-gewerbe-koeln) abstimmen, wo relevant.",
        ],
      },
      {
        id: "organisation",
        title: "BSO, Dokumentation, Umbau",
        paragraphs: [
          "Neue Ladestationen in Brandschutzordnung und Gefährdungsbeurteilung aufnehmen. Bei größeren Installationen Versicherer und ggf. VdS 3885-Grundsätze (Abstände, Überwachung) als Audit-Maßstab nutzen – auch ohne formale Zertifizierung.",
          "Umbau von Blei- auf Li-Ion-Flotte: elektrische Lasten, Kabelquerschnitt, Brandabschnitt und Fluchtwege prüfen – [Umbau Brandschutz](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst DGUV 205-041 und VDMA-Hinweise für Betreiber zusammen. Konkrete Ladeinfrastruktur gehört in Elektroplanung und Herstellerfreigabe. Er ersetzt keine Gefährdungsbeurteilung und keine behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/batteriespeicher-lithium-ionen-brandgefahren", label: "Batteriespeicher" },
      { href: "/ratgeber/brandbegrenzungsdecken-lithiumbatterie", label: "Brandbegrenzungsdecken" },
      { href: "/ratgeber/betrieblicher-brandschutz-praxis-ueberblick", label: "Betrieblicher Brandschutz" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Alarmierung" },
    ],
    faq: [
      {
        question: "Wie viel Abstand zu Kartonagen?",
        answer:
          "DGUV 205-041 empfiehlt bei Lagerung in Gebäuden oft 2,5 m Freistreifen zu anderen Gütern oder einen brandschutztechnisch abgetrennten Bereich – in der GB konkretisieren.",
      },
      {
        question: "Darf über Nacht geladen werden?",
        answer:
          "Nur wenn Gefährdungsbeurteilung, Beobachtung oder technische Überwachung das zulassen und Brandmelde/Früherkennung abgestimmt ist. Unbeobachtetes Laden in brandlastiger Umgebung ist kritisch.",
      },
      {
        question: "Reicht ein normaler Feuerlöscher?",
        answer:
          "Für kleine Entstehungsbrände am Ladegerät ggf. ja – bei Thermal Runaway an LIB oft unzureichend. Priorität: Alarmieren, räumen, Feuerwehr. Siehe [Feuerlöscher-Technik](/ratgeber/feuerloescher-richtig-loeschen-technik).",
      },
      {
        question: "Müssen Stapler-Lader elektrisch geprüft werden?",
        answer:
          "Ortsfeste elektrische Anlagen und Ladeinfrastruktur unterliegen Prüfpflichten nach DGUV Vorschrift 3 bzw. BetrSichV – Fristen in der GB festlegen.",
      },
      {
        question: "Was tun bei aufgeblähter Batterie?",
        answer:
          "Nicht laden, nicht transportieren ohne Konzept – Quarantänebereich, Hersteller/Entsorgungsfachbetrieb, dokumentieren. Brandgefahr auch ohne Flamme.",
      },
      {
        question: "Gilt das auch für E-Bike-Lader im Betrieb?",
        answer:
          "Ja – gleiche LIB-Logik, oft kleinere Energien, aber gleiche Pflicht zur GB und sicheren Ladezone, nicht im Flur oder an der Garderobe.",
      },
    ],
  },
  {
    slug: "versammlungsstaetten-betrieb-sbauvo-nrw",
    title: "Versammlungsstätten im Betrieb: BSO, Räumung und Ordnungsdienst",
    excerpt:
      "Über die Baugenehmigung hinaus regeln MVStättVO NRW und SBauVO Teil 1 den laufenden Betrieb: Brandschutzordnung, Räumungskonzept, Unterweisung und Ordnungsdienst bei Veranstaltungen.",
    metaTitle: "Versammlungsstätten: Betrieb & BSO | H&S+",
    metaDescription:
      "Versammlungsstätte Brandschutz Betrieb: MVStättVO § 42 BSO, Räumungskonzept, Ordnungsdienst, Brandsicherheitswache – Orientierung für Betreiber in NRW.",
    keywords: [
      "Versammlungsstätte Brandschutz Betrieb",
      "MVStättVO NRW",
      "Brandschutzordnung Veranstaltung",
      "Räumungskonzept Versammlungsstätte",
      "Ordnungsdienst Evakuierung",
      "SBauVO Teil 1",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Baulicher Nachweis ist nicht der Betrieb",
        paragraphs: [
          "Versammlungsstätten sind Sonderbauten nach § 50 Abs. 2 Nr. 6 BauO NRW – Versammlungsraum für mehr als 200 Personen oder mehrere Räume mit gemeinsamen Rettungswegen über 200 Personen gesamt. Der brandschutztechnische Nachweis bei Errichtung oder wesentlicher Änderung ist nur der Start.",
          "Für den Betrieb gelten MVStättVO NRW und SBauVO NRW Teil 1 (Versammlungsstätten) zusätzlich. Sie regeln organisatorischen Brandschutz: wer verantwortlich ist, wie geräumt wird, wer eingewiesen ist, wann der Betrieb ruhen muss. Das ist getrennt vom baulichen Konzept, aber bei Prüfungen und Versicherung gleich wichtig.",
          "Grenzfall ja: Konzertsaal mit 800 Plätzen – genehmigtes BSK, aktuelle BSO im Einvernehmen mit Brandschutzdienststelle, jährliche Unterweisung des Personals, Räumungskonzept. Grenzfall nein: Eventlocation mit 250 Besuchern, überfüllte Bestuhlung, Feststellanlagen an Brandschutzabschlüssen dauerhaft aus, kein anwesender Veranstaltungsleiter.",
        ],
      },
      {
        id: "verantwortung",
        title: "Betreiber, Veranstalter, Veranstaltungsleiter",
        paragraphs: [
          "§ 38 MVStättVO: Die Betreiberin oder der Betreiber trägt die Gesamtverantwortung für Sicherheit und Vorschriften. Während des Betriebs muss Betreiber oder beauftragter Veranstaltungsleiter ständig anwesend sein.",
          "Pflichten können schriftlich auf den Veranstalter übertragen werden – die Verantwortung des Betreibers bleibt. Zusammenarbeit von Ordnungsdienst, Brandsicherheitswache und Sanitätswache mit Polizei, Feuerwehr und Rettungsdienst muss gewährleistet sein.",
          "§ 38 Abs. 4: Betrieb einstellen, wenn erforderliche Anlagen nicht betriebsfähig sind oder Betriebsvorschriften nicht eingehalten werden können – z. B. BMA-Störung, RWA aus, Rettungswege blockiert, Feuerlöscher nicht vorhanden.",
        ],
      },
      {
        id: "bso",
        title: "§ 42 MVStättVO: Brandschutzordnung und Räumungskonzept",
        paragraphs: [
          "Im Einvernehmen mit der Brandschutzdienststelle sind aufzustellen:",
        ],
        list: [
          "Brandschutzordnung – Erforderlichkeit und Aufgaben von Brandschutzbeauftragtem und Brandschutzhelfern",
          "Maßnahmen für schnelle, geordnete Räumung – besonders für Menschen mit Behinderung",
          "Bei mehr als 1.000 Besuchern: Räumungskonzept gesondert, sofern nicht bereits im Sicherheitskonzept nach § 43",
          "Feuerwehrpläne im Einvernehmen mit Brandschutzdienststelle – örtlicher Feuerwehr zur Verfügung stellen",
        ],
      },
      {
        id: "unterweisung",
        title: "Unterweisung des Betriebspersonals",
        paragraphs: [
          "§ 42 Abs. 2 MVStättVO: Bei Arbeitsbeginn und mindestens jährlich unterweisen über Lage und Bedienung von Feuerlöscheinrichtungen, RWA, BMA und Zentrale; Brandschutzordnung und Verhalten im Brandfall; Betriebsvorschriften. Brandschutzdienststelle kann teilnehmen. Niederschrift auf Verlangen der Bauaufsicht.",
          "Das geht über allgemeine [Brandschutzhelfer-Ausbildung](/ratgeber/brandschutzhelfer-ausbildung-anforderungen) hinaus – ortsspezifische Anlagen, Zonenpläne, Sicherheitsdurchsagen. Verknüpfung mit DIN 14096-Teilen in der [BSO Escape Room](/ratgeber/escape-room-brandschutzordnung-fluchtplan)-Logik, aber mit höherer Personenzahl und Behördenbeteiligung.",
        ],
      },
      {
        id: "veranstaltung",
        title: "Ordnungsdienst, Sicherheitskonzept, Brandsicherheitswache",
        paragraphs: [
          "§ 43 MVStättVO: Erfordert die Veranstaltungsart ein Sicherheitskonzept und Ordnungsdienst – abhängig von Art, Besucherzahl und Gefährdung. Ab 5.000 Besucherplätzen: Sicherheitskonzept im Einvernehmen mit Polizei, Feuerwehr, Rettungsdienst – Mindestkräfte Ordnungsdienst, Sicherheitsdurchsagen, Evakuierung.",
          "Ordnungsdienst: Einlasskontrolle, maximale Besucherzahl, Bestuhlung, Verbote nach § 35 MVStättVO (Rauchen, offenes Feuer, pyrotechnische Gegenstände), geordnete Evakuierung. § 41: Brandsicherheitswache bei Großbühnen und Szenenflächen über 200 m² – Feuerwehr oder vom Betreiber nachgewiesene ausgebildete Kräfte.",
          "Dekobau, Bühnentechnik und pyrotechnische Effekte erhöhen Brandlast – DGUV Regel 17-002 für szenische Darstellung ergänzt Arbeitsschutz; brandschutzrelevant mit Veranstaltungstechnik und Heißarbeiten ([Heißarbeiten](/ratgeber/heissarbeiten-brandwache-erlaubnisschein)) abstimmen.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung zu Gastronomie und Event unter 200 Personen",
        paragraphs: [
          "Restaurant mit 250 Gastplätzen: Sonderbau als Gaststätte (§ 50 Abs. 2 Nr. 11), nicht automatisch Versammlungsstätte – andere SBauVO-Logik, siehe [Sonderbau geregelt/ungeregelt](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
          "Fitnessstudio, Escape Room oder Event unter 200 Personen dauerhaft: oft kein MVStättVO-Vollregime, aber Sonderbau und anspruchsvolle Fluchtwege möglich – [Sonderbauten](/ratgeber/sonderbauten-brandschutz). Grenzfall: temporäre Großveranstaltung im Freien – Anzeige, Sicherheitskonzept, Abstimmung mit Behörden auch ohne feste Versammlungsstätte.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst MVStättVO und SBauVO Teil 1 für den Betrieb zusammen – keine Rechtsberatung zu einzelnen Veranstaltungen. Verbindlich sind Genehmigung, Auflagen und Festlegung der Brandschutzdienststelle. Er ersetzt kein Brandschutzkonzept und keine behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten NRW" },
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "SBauVO geregelt" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Evakuierung" },
      { href: "/ratgeber/escape-room-brandschutzordnung-fluchtplan", label: "BSO & Fluchtplan" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
    ],
    faq: [
      {
        question: "Ab wann gilt die MVStättVO NRW?",
        answer:
          "Für Versammlungsstätten nach § 50 BauO NRW – typisch ab 200 Personen im Versammlungsraum oder über 200 mit gemeinsamen Rettungswegen. Zusätzlich SBauVO Teil 1.",
      },
      {
        question: "Was ist der Unterschied zwischen BSK und BSO?",
        answer:
          "Brandschutzkonzept: baulicher/technischer Nachweis bei Genehmigung. Brandschutzordnung: betriebliche Regeln im laufenden Betrieb nach § 42 MVStättVO – beides nötig, unterschiedliche Dokumente.",
      },
      {
        question: "Wann brauche ich ein Räumungskonzept?",
        answer:
          "Bei Versammlungsstätten für mehr als 1.000 Besucher gesondert, sofern Räumungsmaßnahmen nicht schon im Sicherheitskonzept nach § 43 stehen.",
      },
      {
        question: "Darf der Veranstalter alle Pflichten übernehmen?",
        answer:
          "Betriebspflichten können schriftlich übertragen werden, wenn der Veranstalter mit der Stätte vertraut ist – Gesamtverantwortung des Betreibers bleibt.",
      },
      {
        question: "Was passiert bei BMA-Störung während der Show?",
        answer:
          "§ 38 Abs. 4: Betrieb einstellen, wenn Sicherheitsanlagen nicht betriebsfähig sind – keine „weiter nur noch Act 2“ ohne Risikoabwägung mit Behörde.",
      },
      {
        question: "Braucht jede Bühne eine Feuerwehr-Brandsicherheitswache?",
        answer:
          "Bei Großbühnen und Szenenflächen über 200 m² grundsätzlich ja – es sei denn, die Brandschutzdienststelle bestätigt ausreichend eigene ausgebildete Kräfte.",
      },
    ],
  },
  {
    slug: "feuerschutzabschluesse-bestand-nrw",
    title: "Feuerschutzabschlüsse im Bestand: Betriebsmängel und zulässige Änderungen",
    excerpt:
      "Aufgekeilte Türen, defekte Feststellanlagen und Nachrüstungen ohne DIBt-Freigabe gefährden den Bestandsschutz. Was Betreiber sofort beheben müssen – abseits der Prüffristen.",
    metaTitle: "Feuerschutzabschlüsse Bestand: Mängel | H&S+",
    metaDescription:
      "Feuerschutzabschlüsse Bestand: Selbstschließung, Feststellanlage, DIBt-Änderungen, Betriebsmängel – nicht Prüffristen, sondern Sofortmaßnahmen für NRW-Betreiber.",
    keywords: [
      "Feuerschutzabschluss Bestand Mängel",
      "Brandschutztür aufgekeilt",
      "Feststellanlage außer Betrieb",
      "DIBt zulässige Änderungen",
      "T30 RS Betrieb",
      "Feuerschutzabschluss Selbstschließung",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Betriebsmangel schlägt Bestandsschutz",
        paragraphs: [
          "Feuerschutzabschlüsse – Feuerschutztüren, -tore, Rauchschutztüren (z. B. T30-RS) – sind nur im geschlossenen Zustand wirksam. Im Bestand sind viele Anlagen aus den 1970er bis 1990er Jahren mit T30 oder T30-RS nach damaligen DIN-Nachweisen und DIBt-Zulassungen (abZ/aBG) eingebaut.",
          "Behörden, Gutachter und Versicherer prüfen im Betrieb zuerst Funktion: Schließt die Tür? Ist sie aufgekeilt? Ist die Feststellanlage genehmigt betrieben? Fehlende Selbstschließung ist ein sofortiger Mangel – unabhängig von Bestandsschutz nach § 59 BauO NRW.",
          "Dieser Ratgeber fokussiert Betriebs- und Bestandsmängel sowie zulässige Änderungen nach DIBt-Hinweisen – nicht die [Prüffristen für Feuerschutzabschlüsse](/ratgeber/feuerschutzabschluesse-prueffristen-fstA) und nicht die Einzelfall-Ertüchtigung wie im [Feuerschutztüren-Gutachten](/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln).",
          "Grenzfall ja: T30-RS-Tür mit defektem Obertürschließer – sofort reparieren oder Tür sperren, bis Ertüchtigung nach Zulassung erfolgt. Grenzfall nein: Tür mit Bohrung für Kabelkanal ohne DIBt-Freigabe – kein „kleiner“ Mangel, sondern potenzieller Verlust der Klassifizierung.",
        ],
      },
      {
        id: "maengel",
        title: "Typische Betriebsmängel in der Praxis",
        paragraphs: [
          "Aus Gutachten und Begehungen in Technikgebäuden und Gewerbe:",
        ],
        list: [
          "Türblatt aufgekeilt oder mit Stopper dauerhaft offen – Selbstschließung ausgehebelt",
          "Feststellanlage (FSA) dauerhaft ausgeschaltet oder mit falschem Haltegriff – Tür bleibt offen",
          "Beschädigte Schließfolge, fehlende oder defekte Obertürschließer",
          "Fehlende oder unleserliche Kennzeichnung und Zulassungsplakette",
          "Bohrungen, Ausschnitte oder neue Verglasung ohne zulässigen Nachweis",
          "Falsche Beschläge oder Ersatzflügel „ähnlich“ ohne abZ/aBG",
        ],
      },
      {
        id: "dibt",
        title: "Zulässige Änderungen nach DIBt",
        paragraphs: [
          "Das DIBt hat wiederholt mitgeteilt: Änderungen an zugelassenen Feuerschutzabschlüssen sind nur zulässig, wenn sie in der Zulassung oder in DIBt-Mitteilungen vorgesehen oder freigegeben sind. Seit 2010 gilt ein strengerer Katalog – „gleichwertiger“ Ersatz ohne Nachweis hebt die Wirksamkeit auf.",
          "Typische zulässige Ertüchtigungen (wenn Zulassung es vorsieht): Obertürschließer nach Herstellerunterlage, Schließfolgenreparatur, zugelassene Füllungen, genehmigte Feststellanlagen mit Rauchmelder oder Brandmelder-Ansteuerung. Unzulässig ohne Freigabe: neue Griffe mit größerem Bohrbild, zusätzliche Kabeldurchführungen im Blatt, Austausch gegen „baugleiche“ Tür ohne dokumentierten Einbau.",
          "Vor jeder Nachrüstung Zulassungsunterlage und DIBt-Hinweise prüfen – ggf. Hersteller oder Sachverständigen einbinden. Ertüchtigung vs. Austausch vertieft im [Feuerschutztüren-Ratgeber](/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln).",
        ],
      },
      {
        id: "feststellung",
        title: "Feststellanlagen richtig betreiben",
        paragraphs: [
          "Feststellanlagen dürfen Türen nur halten, wenn die Ansteuerung (Rauchmelder, BMA, Magnetschloss mit Auslösung) den Vorgaben der Zulassung entspricht. Dauerhaftes Offenhalten per Keil oder dauerhaft unterbrochene Spannung ist nicht zulässig.",
          "Nach Umbau oder Nutzungsänderung: Prüfen, ob FSA noch zur geänderten Nutzung passt – z. B. neuer Flur als Aufenthaltsbereich, geänderte Rauchabschnittsgrenze. Siehe [Flucht- und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw) für notwendige Flure und Rauchabschnitte.",
        ],
      },
      {
        id: "organisation",
        title: "Kontrolle und Dokumentation im Betrieb",
        paragraphs: [
          "Monatliche Sichtkontrolle durch Betrieb: schließt jede Tür, Zustand der Dichtungen, keine Fremdkörper in der Schwelle, FSA-Anzeige. Jährliche fachliche Prüfung nach DIN 18095 für bestimmte Abschlüsse – Ergebnis in Bestandsliste mit Standort, Klasse, Zulassungsnummer.",
          "Bei Sonderbauten und behördlichen Begehungen zählen offene Brandschutzabschlüsse zu den häufigsten Beanstandungen – [Sonderbau-Mängel](/ratgeber/sonderbau-anlagen-pruefung-maengel-nrw). Liste führt der Brandschutzbeauftragte oder Facility Management.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Wann reicht Instandsetzung, wann Genehmigung?",
        paragraphs: [
          "Reine Betriebsbeseitigung (Keil entfernen, Schließer reparieren) ohne Bauteiländerung: sofort, ohne Baugenehmigung. Ertüchtigung mit zugelassenen Teilen: technisch dokumentieren, ggf. internes Gutachten. Neue Öffnung in Brandwand oder geänderte Abschnittsgrenze: Genehmigung und [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig).",
          "Grenzfall ja: Austausch T30-RS gegen gleichwertige CE-Tür mit dokumentiertem Einbau nach EN 16034. Grenzfall nein: nur Beschriftung „Feuerschutztür“ auf normaler Holztür ohne Nachweis.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber ersetzt kein Einzelgutachten und keine DIBt-Freigabe. Jeder Feuerschutzabschluss braucht eine Einzelfallbewertung. Bei Sonderbauten und Versammlungsstätten können strengere Anforderungen gelten.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln", label: "Ertüchtigung T30" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/sonderbau-anlagen-pruefung-maengel-nrw", label: "Sonderbau-Mängel" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz" },
    ],
    faq: [
      {
        question: "Ist eine aufgekeilte Feuerschutztür ein Ordnungsmangel?",
        answer:
          "Ja – sofortiger Betriebsmangel. Die Selbstschließung muss ohne Hilfsmittel funktionieren. Keil entfernen und Schließung instand setzen.",
      },
      {
        question: "Darf die Feststellanlage dauerhaft aus sein?",
        answer:
          "Nein, wenn die Tür dadurch offen bleibt und als Brandschutzabschluss dienen soll. Nur genehmigte Ansteuerung mit automatischer Schließung im Störfall.",
      },
      {
        question: "Kann ich selbst einen Obertürschließer tauschen?",
        answer:
          "Nur mit zulässigem, zum Türblatt passendem Bauteil laut Zulassung/Hersteller. Sonst Ertüchtigung durch Fachfirma mit Dokumentation.",
      },
      {
        question: "Was ist der Unterschied zu Prüffristen?",
        answer:
          "Prüffristen regeln wiederkehrende fachliche Prüfung nach DIN 18095. Dieser Artikel behandelt laufende Betriebsmängel und zulässige Änderungen – oft sofortige Pflicht ohne Warten auf den Prüftermin.",
      },
      {
        question: "Gilt T30-RS in jedem Flur?",
        answer:
          "In notwendigen Fluren und Treppenräumen typisch ja (§ 36 BauO NRW, Rauchabschnitt). Einzelfall hängt vom Nachweis und von Brand-/Rauchabschnittsgrenzen ab.",
      },
      {
        question: "Brauche ich bei Türtausch ein neues BSK?",
        answer:
          "Reiner 1:1-Tausch mit gleichwertigem Nachweis oft ohne Nutzungsänderung. Geänderte Abschnittsgrenzen oder neue Öffnungen: Genehmigung und Konzept.",
      },
    ],
  },
  {
    slug: "explosionsschutz-brandschutz-schnittstelle",
    title: "Explosionsschutz und Brandschutz: Schnittstellen im Betrieb",
    excerpt:
      "EX-Zonen, Explosionsschutzdokument und Brandabschnitte greifen ineinander. Was Brandschutzbeauftragte mit Fachkraft für Explosionsschutz abstimmen sollten.",
    metaTitle: "Explosionsschutz & Brandschutz | H&S+",
    metaDescription:
      "Explosionsschutz Brandschutz Schnittstelle: Explosionsschutzdokument, EX-Zonen, Fluchtwege, Feuerlöscher, Brandwände – DGUV 213-106 für Betreiber in NRW.",
    keywords: [
      "Explosionsschutz Brandschutz",
      "Explosionsschutzdokument",
      "EX Zone Brandabschnitt",
      "DGUV 213-106",
      "GefStoffV Explosion",
      "ATEX Zone Fluchtweg",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Zwei Regelwerke – ein Gebäude",
        paragraphs: [
          "Explosionsschutz folgt Arbeitsschutz und Gefahrstoffrecht (GefStoffV, ATEX-Betriebsrichtlinie 1999/92/EG umgesetzt). Baulicher Brandschutz folgt BauO NRW und Sonderbauvorschriften. In Lackierereien, Mühlen, Silos, Chemie- und Lebensmittelbetrieben betrifft beides dieselben Hallen, Flure und Türen.",
          "Eine Explosion löst häufig einen Brand aus – umgekehrt kann ein Brand explosionsfähige Atmosphäre verändern oder Anlagen beschädigen. Deshalb müssen Explosionsschutzdokument und Brandschutzkonzept bzw. betriebliche Brandschutzorganisation zusammenpassen.",
          "Grenzfall ja: Zone 1 um Abfüllanlage – EX-Kennzeichnung, zugelassene Geräte, Brandabschnitt mit feuerhemmenden Türen, Fluchtwege außerhalb der Zone dokumentiert. Grenzfall nein: Zone 20 im Inneren des Silos, aber Fluchtweg durch Staubzone ohne Notausgang – GB und BSK widersprechen sich.",
        ],
      },
      {
        id: "dokument",
        title: "Explosionsschutzdokument nach GefStoffV",
        paragraphs: [
          "§ 6 Abs. 9 GefStoffV: Wenn gefährliche explosionsfähige Gemische auftreten oder entstehen können, ist vor Aufnahme der Tätigkeit ein Explosionsschutzdokument zu erstellen – unabhängig von der Beschäftigtenzahl. DGUV Information 213-106 erläutert Inhalt und Struktur.",
          "Das Dokument ist Teil der umfassenden Gefährdungsbeurteilung nach § 5 ArbSchG. Es enthält Beurteilung der Explosionsgefahr, Explosionsschutzkonzept (Vermeidung von Gemischen, Zündquellen, Begrenzung der Auswirkungen) und Zoneneinteilung.",
          "Anlage 1 Nr. 1.7 GefStoffV definiert Zonen 0/1/2 für Gase, Dämpfe, Nebel und 20/21/22 für brennbare Stäube – nach Häufigkeit und Dauer der explosionsfähigen Atmosphäre.",
        ],
      },
      {
        id: "schnittstelle",
        title: "Wo Brandschutz EX-Zonen berührt",
        paragraphs: [
          "Forum-Verlag und DGUV-Leitfäden nennen typische Schnittstellen:",
        ],
        list: [
          "Flucht- und Rettungswege: Wege sollen explosionsgefährdete Bereiche möglichst vermeiden; Notausgänge aus Zone 1/21 dokumentieren",
          "Brandabschnitte und feuerbeständige/feuerhemmende Trennwände – Durchführungen gasdicht und brandschutztechnisch abschotten",
          "Feuerschutzabschlüsse in EX-Bereichen: funktionsfähige Selbstschließung plus EX-Anforderungen an Beschläge und Spalten",
          "Lüftung: Brandmelder, Brandschutzklappen und EX-Lüftung koordinieren",
          "Tragbare Feuerlöscher: Löschmittelwahl in EX-Zonen (z. B. kein Pulver in empfindlichen Bereichen ohne Bewertung)",
          "Heißarbeiten und Schweißen: Zündquellenfreigabe im Explosionsschutzdokument und Brandwache – [Heißarbeiten](/ratgeber/heissarbeiten-brandwache-erlaubnisschein)",
        ],
      },
      {
        id: "rollen",
        title: "Rollen im Betrieb",
        paragraphs: [
          "Fachkraft für Explosionsschutz (oder externer Dienstleister) erstellt und aktualisiert Zonenpläne und Explosionsschutzdokument. Brandschutzbeauftragter prüft Auswirkungen auf BSO, Fluchtpläne, Feuerwehrpläne und Abschottungen.",
          "Bei Sonderbau mit erhöhter Brand- oder Explosionsgefahr (§ 50 Abs. 2 Nr. 17 BauO NRW) sind baulicher Nachweis und Explosionsschutzdokument parallel zu führen – [Sonderbauten](/ratgeber/sonderbauten-brandschutz), [Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig).",
          "Änderungen an Anlagen, neuen Mühlenleitungen oder zusätzlichen Silos: Fortschreibung beider Dokumente, nicht nur EX oder nur BS.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fehler in der Praxis",
        paragraphs: [
          "Zone 2 auf Plan, aber Rettungsweg führt durch markierten Bereich ohne Notausgang. Brandabschnittstür in Zone 1 mit offener FSA – doppelter Mangel. Staubabsaugung außer Betrieb, Zone 22 aber keine Reinigungsfrequenz – Staubschicht über 21-Schwelle. Feuerlöscher nur nach Brandklasse A, nicht nach EX-Risiko bewertet.",
          "Behörden und Berufsgenossenschaft prüfen Explosionsschutzdokument; Bauaufsicht und Feuerwehr prüfen baulichen Brandschutz – Widersprüche fallen bei Begehungen auf.",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweis-Logik: welches Dokument wofür",
        paragraphs: [
          "Explosionsschutzdokument: Pflicht nach GefStoffV für explosionsfähige Gemische – Zonen, Geräte, Unterweisung, Instandhaltung. Brandschutzkonzept: bauordnungsrechtlich bei Genehmigung/Sonderbau. Brandschutzordnung: betrieblicher Ablauf im Brandfall (DIN 14096). Feuerwehrplan: Einsatzinformation.",
          "Lageplan mit Zonen und Brandabschnitten sollte konsistent sein – eine Plankopie für Beide, nicht zwei widersprüchliche Versionen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst DGUV 213-106 und Schnittstellenhinweise zusammen – keine EX-Planung und kein Brandschutznachweis. Konkrete Zonierung gehört in die Gefährdungsbeurteilung durch Fachkundige. Er ersetzt keine behördliche Einordnung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/betrieblicher-brandschutz-praxis-ueberblick", label: "Betrieblicher Brandschutz" },
      { href: "/ratgeber/heissarbeiten-brandwache-erlaubnisschein", label: "Heißarbeiten" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/kraftstoff-lagerung-halle-garage-brandschutz", label: "Kraftstofflagerung" },
    ],
    faq: [
      {
        question: "Ist das Explosionsschutzdokument Pflicht für jeden Betrieb?",
        answer:
          "Nur wenn bei der Gefährdungsbeurteilung explosionsfähige Gemische auftreten oder entstehen können – dann vor Aufnahme der Tätigkeit, unabhängig von der Beschäftigtenzahl.",
      },
      {
        question: "Wer erstellt das Dokument?",
        answer:
          "Die Unternehmensleitung – fachlich in der Regel Fachkraft für Explosionsschutz oder qualifizierter Berater. DGUV 213-106 als Leitfaden.",
      },
      {
        question: "Muss der Brandschutzbeauftragte EX-Zonen kennen?",
        answer:
          "Er sollte das Explosionsschutzdokument kennen und Auswirkungen auf Fluchtwege, BSO und Feuerwehrplan prüfen – enge Abstimmung mit der Fachkraft für Explosionsschutz.",
      },
      {
        question: "Beeinflussen EX-Zonen die Fluchtwegbreite?",
        answer:
          "Indirekt ja – Wege sollen EX-Bereiche möglichst vermeiden; Aufenthalts- und Räumungswege müssen im Gesamtkonzept stimmig sein, siehe BauO § 33 und Explosionsschutzdokument.",
      },
      {
        question: "Was ist der Unterschied Zone 2 und Brandabschnitt?",
        answer:
          "Zone 2: arbeitsschutzrechtliche Einteilung explosionsfähiger Atmosphäre (selten/kurz). Brandabschnitt: bauliche Brandübertragungsbegrenzung – verschiedene Zwecke, gleiche Tür kann beides betreffen.",
      },
      {
        question: "Gilt das auch für Holzstaub in der Schreinerei?",
        answer:
          "Ja, wenn brennbare Stäube in explosionsfähiger Konzentration auftreten können – dann Zonen 20/21/22 prüfen und mit Brandschutz (Absaugung, Staubschicht, Feuerlöscher) verzahnen.",
      },
    ],
  },
];
