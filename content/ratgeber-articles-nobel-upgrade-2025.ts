/**
 * Nobel-Upgrade 2025 (lokal, noch nicht deployen):
 * TÜV-Baurechtsreport, Batteriespeicher Li-Ion, PFAS/Feuerlöscher-Entsorgung.
 * Sprache: sachverständig, menschlich, SEO/GEO – eigene Formulierungen.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_NOBEL_UPGRADE_2025: RatgeberArticle[] = [
  {
    slug: "sonderbau-anlagen-pruefung-maengel-nrw",
    title: "Brandschutzanlagen im Sonderbau: was der TÜV-Baurechtsreport 2025 wirklich zeigt",
    excerpt:
      "Mehr als jede vierte geprüfte Anlage mit wesentlichen Mängeln. Was der TÜV-Baurechtsreport 2025 zu BMA, Notstrom, RWA und Feuerlöschanlagen sagt, und worauf Betreiber in NRW konkret achten sollten.",
    metaTitle: "TÜV Baurechtsreport 2025: Mängel Sonderbau | H&S+",
    metaDescription:
      "TÜV Baurechtsreport 2025: 26,9 % wesentliche Mängel bei Sonderbau-Anlagen. Notstrom, BMA, RWA, Wirkprinzip-Prüfung und Betreiberpflichten in NRW verständlich erklärt.",
    keywords: [
      "TÜV Baurechtsreport 2025",
      "Sonderbau Prüfung Mängel",
      "Brandmeldeanlage Mängel",
      "Notstromanlage Prüfung",
      "Wirkprinzip Prüfung Brandschutz",
      "Gebäudetechnik Sonderbau NRW",
      "Brandschutz Prüfung Köln",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Worum es im Baurechtsreport geht",
        paragraphs: [
          "Wenn in einem Hotel, einer Schule oder einem großen Geschäftshaus die Brandmeldeanlage, die Notstromversorgung oder die Rauchableitung versagt, hilft der schönste Wartungsvertrag wenig. Der TÜV-Baurechtsreport 2025 wertet genau jene Prüfungen aus, die Landesbauordnungen für sicherheitsrelevante Gebäudetechnik in Sonderbauten vorschreiben: wiederkehrende Prüfungen und Prüfungen vor der ersten Inbetriebnahme. Es geht also nicht um freiwillige Servicebesuche, sondern um die baurechtlich geforderte Kontrolle.",
          "Datenbasis des Berichtsjahres 2024 sind 70.447 Anlagen im laufenden Betrieb und 13.053 Anlagen vor der ersten Inbetriebnahme. Darunter liegen Alarmierungsanlagen, Brandmeldeanlagen, Sicherheitsstromversorgung, Sicherheitsbeleuchtung, Starkstrom, Lüftung, Rauch- und Wärmeabzug, CO-Warnanlagen und Feuerlöschanlagen.",
          "In Nordrhein-Westfalen steuern § 50 BauO NRW und die BauPrüfverordnung, welche Sonderbauten und welche Anlagen dieser Prüfpflicht unterliegen. Typische Beispiele sind Hochhäuser ab 22 m, Kliniken, Schulen, Versammlungsstätten, größere Industriebauten, Parkhäuser, Hotels und Verkaufsstätten ab 2.000 m². Die Intervalle und Rechtsgrundlagen ordnen wir im Ratgeber [Prüfpflichten Sonderbauten](/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung) ein.",
          "In der Praxis trennt sich hier oft die Spreu vom Weizen. Wer Prüfbuch, Sachverständigen-Termine, Wartung durch befähigte Personen und die Wirkprinzip-Prüfung in einem System führt, steht bei Beanstandungen meist gut da. Wer nur sagen kann, die Brandmeldeanlage sei „letztes Jahr gewartet“ worden, ohne SV-Bau-Bericht und ohne Nachweis, dass Notstrom die Anlage im Stromausfall trägt, hat Lücken, die im Ernstfall teuer werden.",
        ],
      },
      {
        id: "zahlen",
        title: "Die Kennzahlen 2024, ohne Schönfärberei",
        paragraphs: [
          "Bei wiederkehrenden Prüfungen wies mehr als jede vierte Anlage wesentliche Mängel auf, genau 26,9 Prozent. Bei sechs der neun Anlagentypen stieg die Quote gegenüber dem Vorjahr. 44 Prozent hatten geringfügige Mängel, und nur 29,1 Prozent waren mängelfrei. Wesentlich heißt hier: Wirksamkeit oder Betriebssicherheit sind beeinträchtigt. Ein fehlendes Prüfschild allein ist das nicht.",
          "Der TÜV-Verband nennt als Ursachen Zeit- und Kostendruck, Fachkräftemangel, die steigende Komplexität der Gebäudetechnik sowie Versäumnisse bei Wartung und Dokumentation. Der Report 2025 rückt zusätzlich zwei Themen in den Vordergrund, die viele Betreiber noch unterschätzen: die Cybersicherheit vernetzter Sicherheitstechnik und die Wirkprinzip-Prüfung, also die Frage, ob BMA, RWA, Aufzug, Feststellanlagen und Notstrom im Ernstfall wirklich zusammenspielen.",
        ],
      },
      {
        id: "anlagentypen",
        title: "Wo die Mängel sitzen: Quoten nach Anlagentyp",
        paragraphs: [
          "Anteil wesentlicher Mängel bei wiederkehrender Prüfung 2024, in Klammern die Quote bei der Erstinbetriebnahme. Die Zahlen sind bundesweit und gelten ebenso für Sonderbauten in NRW.",
        ],
        table: {
          caption: "Wesentliche Mängel 2024 nach Anlagentyp (TÜV-Baurechtsreport 2025)",
          headers: ["Anlagentyp", "Wiederkehrend", "Erstinbetriebnahme", "Hinweis"],
          rows: [
            ["Lüftungsanlagen", "34,8 %", "27,9 %", "höchste Quote"],
            ["Feuerlöschanlagen", "30,4 %", "26,1 %", "häufig Auflagen"],
            ["Sicherheitsstromversorgung", "30,0 %", "22,0 %", "Trend verschlechtert"],
            ["Rauch- und Wärmeabzug", "27,5 %", "21,2 %", "siehe RWA-Prüffristen"],
            ["Alarmierungsanlagen", "26,4 %", "16,0 %", "große Lücke Erst/Betrieb"],
            ["Sicherheitsbeleuchtung", "25,2 %", "16,3 %", "oft Schnittstelle Notstrom"],
            ["Brandmeldeanlagen", "20,5 %", "20,1 %", "siehe BMA-Prüffristen"],
            ["Starkstrom-Elektroanlagen", "19,2 %", "10,4 %", "Betrieb kritischer"],
            ["CO-Warnanlagen", "13,4 %", "5,9 %", "niedrigste Quote"],
          ],
        },
      },
      {
        id: "notstrom",
        title: "Warum die Notstromversorgung so oft die Schwachstelle ist",
        paragraphs: [
          "Die Sicherheitsstromversorgung speist im Stromausfall Brandmeldeanlage, Alarmierung, Feuerlöschanlagen, Rauchableitung, Aufzugssteuerung und Sicherheitsbeleuchtung. Fällt sie aus, stehen Schutzsysteme still, obwohl Einzelkomponenten zuletzt noch „ohne Mängel“ geprüft wurden. Genau darin liegt die Tücke: Eine gute Einzelprüfung ersetzt keinen belastbaren Notstromnachweis unter realer Last.",
          "Fast jede zweite Notstromanlage wies 2024 mindestens geringfügige Mängel auf. Der Anteil wesentlicher Mängel stieg auf 30 Prozent, nach 25,1 Prozent im Vorjahr. Typische Ursachen sind veraltete Batterien, unzureichende Testläufe, fehlende Dokumentation und Technologiewandel ohne angepasste Wartung.",
          "Wer es sauber macht, dokumentiert monatliche Testläufe, führt eine jährliche Vollprüfung und prüft im Wirkprinzip, ob Brandmeldeanlage und Löschtechnik unter Notstrom wirklich weiterlaufen. Wer nur hofft, das Dieselaggregat werde schon anspringen, und die Brandmeldeanlage ohne Stromausfall-Simulation abnimmt, baut systematisch Blindheit ein.",
        ],
      },
      {
        id: "wirkprinzip",
        title: "Wirkprinzip-Prüfung: Einzelanlage reicht nicht",
        paragraphs: [
          "Die Wirkprinzip-Prüfung stellt eine einfache, aber entscheidende Frage: Meldet die Brandmeldeanlage, schließt die Feststellanlage, startet Rauchableitung und Sprachalarm, fährt der Aufzug auf Evakuierungsposition, leuchtet die Sicherheitsbeleuchtung, und zwar unter Notstrom?",
          "In vielen Betrieben werden Anlagen isoliert gewartet: eine Firma für die Brandmeldeanlage, eine für die Rauchableitung, eine für den Aufzug. Ohne gemeinsamen Prüfablauf bleiben Schnittstellenmängel unsichtbar, bis eine Übung oder ein Brand sie offenlegt. Der Baurechtsreport 2025 macht daraus zu Recht einen Schwerpunkt.",
          "Betrieblich lohnt ein Prüfplan, den Sachverständige, Brandschutzbeauftragte und Fachfirmen gemeinsam tragen. Die Ergebnisse gehören ins Prüfbuch und in die Brandschutzordnung Teil B. Nach Umbau oder Nutzungsänderung sollte das Wirkprinzip neu angesetzt werden. Orientierung: [Umbau und Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
        ],
      },
      {
        id: "energiewende",
        title: "Was der Report zur Energiewende offen lässt",
        paragraphs: [
          "Photovoltaik und Batteriespeicher nehmen zu. Für viele dieser Anlagen gibt es bisher keine vergleichbare gesetzliche wiederkehrende Prüfpflicht wie für Brandmeldeanlage oder Rauchableitung im Sonderbau. Das entbindet niemanden von der klassischen Sonderbau-Pflicht, und es entbindet auch nicht von Konzept, AwSV und Feuerwehrabstimmung beim Speicher.",
          "Wer PV und Lithium-Ionen-Speicher betreibt, sollte den Ratgeber [Batteriespeicher Li-Ion](/ratgeber/batteriespeicher-lithium-ionen-brandgefahren) parallel lesen. Der Report 2025 benennt außerdem Cybersicherheit vernetzter Gebäudetechnik als wachsende Gefahr für die Resilienz von Schutzsystemen. Wer Anlagen remote warten oder steuern lässt, braucht dafür klare Zuständigkeiten und dokumentierte Absicherung.",
        ],
      },
      {
        id: "massnahmen",
        title: "Was Betreiber und Brandschutzbeauftragte jetzt prüfen sollten",
        paragraphs: [
          "Zuerst das Prüfbuch: Stehen Sachverständigen-Fristen, Mängelbeseitigung und Wartung durch befähigte Personen in einem Überblick, oder liegen die Unterlagen in getrennten Ordnern ohne Querverweis? Dann die Notstromversorgung: Testprotokolle, Kraftstoff oder Batteriezustand, Lasttest unter realer Sicherheitsstrom-Last.",
          "Bei Brandmeldeanlage und Alarmierung zählen nicht nur Melder, sondern Alarmwege und Stromversorgung. Feuerlöschanlagen und Rauchableitung haben hohe Mängelquoten. Prüfberichte mit Fristen umsetzen, statt nur den nächsten Wartungstermin zu notieren. Bei der Lüftung gehören Brandschutzklappen und Abschaltungen im Brandfall zur Gesamtprüfung.",
          "Organisatorisch koordiniert der [Brandschutzbeauftragte](/ratgeber/aufgaben-brandschutzbeauftragter-koeln) die Schnittstellen. Eine [Brandschau](/ratgeber/brandschau-koeln-feuerwehr) ergänzt die baurechtliche Prüfung, ersetzt sie aber nicht. Wer in NRW unsicher ist, ob Prüfbuch und Wirkprinzip tragfähig sind, sollte das vor der nächsten Frist klären, nicht danach.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Text fasst die öffentlich kommunizierten Ergebnisse des TÜV-Baurechtsreports 2025 für Betreiber und Planer zusammen. Er ist keine vollständige Wiedergabe aller Landeskapitel und kein Ersatz für den konkreten Sachverständigenbericht. Maßgeblich bleiben BauPrüfVO NRW, Baugenehmigung und Prüfbuch. Für die Einordnung Ihres Objekts helfen [Brandschutzberatung](/brandschutzberatung-koeln) und bei Bedarf ein prüffähiges Konzept oder eine Stellungnahme.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/pruefpflichten-sonderbauten-muster-pruefverordnung", label: "Sonderbau-Prüfpflicht" },
      { href: "/ratgeber/bma-prueffristen-brandmeldeanlage", label: "BMA-Prüffristen" },
      { href: "/ratgeber/rwa-entrauchung-prueffristen", label: "RWA-Prüffristen" },
      { href: "/ratgeber/batteriespeicher-lithium-ionen-brandgefahren", label: "Batteriespeicher Li-Ion" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
      { href: "/leistungen", label: "Leistungen im Überblick" },
    ],
    faq: [
      {
        question: "Betrifft der TÜV-Baurechtsreport auch normale Bürogebäude?",
        answer:
          "Schwerpunkt sind Sonderbauten nach Landesbauordnung, etwa Hochhaus, Schule, Hotel oder Verkauf ab 2.000 m². Normale Büros unter diesen Schwellen fallen anders ein. Betriebliche Prüfungen nach DGUV und ASR können trotzdem gelten.",
      },
      {
        question: "Was ist ein wesentlicher Mangel?",
        answer:
          "Ein wesentlicher Mangel beeinträchtigt Wirksamkeit oder Betriebssicherheit. Die Anlage erfüllt ihren Schutzzweck im Ernstfall nicht zuverlässig. Das ist mehr als ein geringfügiger Mangel ohne unmittelbare Gefährdung.",
      },
      {
        question: "Warum steigen die Mängel bei der Notstromversorgung?",
        answer:
          "Der TÜV-Verband nennt Technologiewandel, Wartungs- und Dokumentationslücken sowie Kostendruck. Notstromanlagen werden oft erst bei Stromausfall kritisch. Ohne regelmäßige Belastungstests bleiben Defekte verborgen.",
      },
      {
        question: "Reicht die Wartung der Brandmeldeanlage durch eine befähigte Person statt der Sachverständigenprüfung?",
        answer:
          "Nein. Die betriebliche Wartung und die baurechtliche Sachverständigenprüfung haben unterschiedliche Zwecke. Im Sonderbau brauchen Sie beides, einschließlich Wirkprinzip.",
      },
      {
        question: "Was prüft die Wirkprinzip-Prüfung genau?",
        answer:
          "Sie prüft das Zusammenwirken der sicherheitstechnischen Anlagen. Beispiel: Die Brandmeldeanlage löst Rauchableitung, Feststellanlage und Alarmierung unter Notstrom aus. Es geht nicht nur um Einzelkomponenten.",
      },
      {
        question: "Gilt der Report auch für Sonderbauten in NRW und Köln?",
        answer:
          "Die Statistik ist bundesweit und enthält NRW-Sonderbauten. Die Umsetzung der Prüfpflicht läuft in NRW über die BauPrüfVO und die örtliche Sachverständigenorganisation.",
      },
    ],
  },
  {
    slug: "batteriespeicher-lithium-ionen-brandgefahren",
    title: "Lithium-Ionen-Batteriespeicher: Brandgefahren, die Betreiber und Planer kennen müssen",
    excerpt:
      "Hausspeicher, Gewerbespeicher und große BESS: thermisches Durchgehen, Ausgasen, Wasserkühlung, Löschwasserrückhaltung und AwSV. Was das vfdb-Merkblatt TWB-02 (Februar 2025) für den betrieblichen Brandschutz bedeutet.",
    metaTitle: "Batteriespeicher Li-Ion Brandschutz NRW | H&S+",
    metaDescription:
      "Brandschutz Lithium-Ionen-Speicher: Thermal Runaway, Ausgasen, Wasserkühlung, AwSV-Rückhaltung, Feuerwehrplan. Orientierung nach vfdb TWB-02 für Betreiber in NRW und Köln.",
    keywords: [
      "Batteriespeicher Brandschutz",
      "Lithium-Ionen Speicher Brand",
      "BESS Brandschutz NRW",
      "Photovoltaik Speicher Brandschutz",
      "Thermal Runaway Batterie",
      "vfdb TWB-02",
      "Löschwasserrückhaltung Batteriespeicher",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Warum stationäre Speicher eigene Regeln brauchen",
        paragraphs: [
          "Photovoltaik-Hausspeicher, Gewerbespeicher und Batteriespeicherkraftwerke gehören inzwischen zum Alltag vieler Betriebe und Grundstücke. Mit ihnen kommen Brand- und Havarierisiken, die sich nicht wie ein klassischer Technikraum behandeln lassen. Das vfdb-Merkblatt TWB-02 „Erkenntnisse zu Batteriespeicheranlagen mit Lithium-Ionen-Batterien“ vom Februar 2025 bündelt den aktuellen Erkenntnisstand. Es richtet sich an Einsatzkräfte, ist aber für Betreiber, Brandschutzbeauftragte und Planer ebenso tragfähig.",
          "Der Geltungsbereich reicht von Hausspeichern ab etwa 1 kWh bis zu Großanlagen ab 50 kWh. Zellen stecken in Modulen, Module in Gehäusen oder Regalen. Der Schwerpunkt liegt auf NMC-Kathoden (Nickel-Mangan-Cobalt). LFP (Lithium-Eisenphosphat) weicht im Detail ab, die Grundempfehlungen gelten dennoch.",
          "Die Gesamtkapazität ändert das chemische Reaktionsverhalten nicht grundlegend. Größere Anlagen erhöhen vor allem Wahrscheinlichkeit und Ausmaß eines Ereignisses. Zellen reagieren kaskadenartig, oft modulweise. Ein genehmigtes BESS mit Feuerwehrplan, Löschwasserrückhaltung, Temperaturüberwachung und abgestimmter Alarmierung ist etwas anderes als ein Hausspeicher im Technikraum, bei dem Beschäftigte „kurz mit dem Feuerlöscher“ eingreifen sollen.",
        ],
      },
      {
        id: "gefahren",
        title: "C-Gefahrstoffe, thermisches Durchgehen und elektrische Restgefahr",
        paragraphs: [
          "Im Brandfall gelten Lithium-Ionen-Speicher als C-Einsatz nach FwDV 500: Ausbreitung, Atemgifte, Explosion und Elektrizität. Noch vor dem sichtbaren Flammenbrand treten oft brennbare Elektrolyt- und Lösemitteldämpfe aus. Viele davon sind schwerer als Luft und sammeln sich in Bodennähe.",
          "Mechanische Beschädigung oder thermisches Durchgehen (thermal runaway) können Elektrolyt flüssig oder gasförmig freisetzen. Leitsalz mit Feuchtigkeit bildet Flusssäure, ätzend und hochgiftig. Kathodenmaterialien können bei hoher Temperatur exotherm zerfallen und Sauerstoff freisetzen. Die Reaktion beschleunigt sich dann von selbst.",
          "Auslöser sind äußere Hitze, defekte Kühlung, Kurzschluss, Zellfehler, Überladung oder Überentladung. In geschlossenen Räumen mit vielen Modulen können sich entzündliche Gasgemische bilden und explosionsartig reagieren. Nach dem Durchgehen können benachbarte Zellen noch unter Spannung stehen. Ersticken oder Sauerstoffverdrängung allein beendet die Zellreaktion nicht nachhaltig. Das unterscheidet Speicherbrände klar von vielen klassischen Feststoffbränden.",
        ],
      },
      {
        id: "ausgasen",
        title: "Ausgasen kommt oft vor dem sichtbaren Brand",
        paragraphs: [
          "Forschung und Praxis bestätigen: Bereits vor dem thermischen Durchgehen entstehen relevante Gasfreisetzungen. Bei voller Ladung sind sie heftiger als bei niedrigem Ladezustand. Ein frühes Warnzeichen kann eine Wölbung des Gehäuses sein, begleitet von Geruch oder Zischen.",
          "Häufig treten Methan, Ethen, Kohlenmonoxid und teils Wasserstoff auf. Gemische können die untere Explosionsgrenze einzelner Stoffe senken. Für Messungen zählt der Stoff mit der niedrigsten UEG. Ausgasungen sammeln sich oft bodennah.",
          "Für den Betrieb heißt das: Belüftung und Anlagentechnik gehören in den Genehmigungsrahmen. Räume mit Explosionsgefahr sind nach TRGS zu kennzeichnen und im Feuerwehrplan einzuzeichnen. Bei Verdacht auf Ausgasen verlassen Beschäftigte den Bereich, vermeiden Zündquellen und alarmieren die Feuerwehr unter 112. Löschen ist dann keine Aufgabe ungeschulter Mitarbeiter.",
        ],
      },
      {
        id: "brandverlauf",
        title: "Löschen und Kühlen: Wasser als Primärmittel, aber kein schneller Schlussstrich",
        paragraphs: [
          "Primäres Löschmittel ist Wasser. Es löscht Flammen und kühlt Zellen, um weitere Zersetzung zu bremsen. Durch den Modulbau ist vollständige Durchdringung oft nicht möglich. Optischer Löscherfolg bedeutet deshalb nicht das Ende der Gefahr. Gasaustritt und Durchgehen weiterer Zellen können Stunden, Tage oder sogar Wochen später wiederkehren.",
          "Für stationäre Speicheranlagen gilt: Ablöschen und Kühlen ist einem unkontrollierten Ausbrennen vorzuziehen. Bei einzelnen Fahrzeugen wird taktisch manchmal Ausbrennen erwogen. Bei fest installierten Speichern ist das in der Regel keine Option. Gas-Löschanlagen brauchen mindestens 30 Minuten Einwirkzeit, bevor Zugangstüren geöffnet werden.",
          "Als Orientierung für Kühlmaßnahmen gilt: Steigt die Oberflächentemperatur um etwa 1 K pro Minute und liegt sie über 60 °C, sind sofortige Kühlmaßnahmen nötig. Kühlung gilt als erfolgreich, wenn die Temperaturen ohne Kühlung dauerhaft unter 60 °C bleiben. Restwärme kann innerhalb von zehn Minuten weitere Zellreaktionen auslösen. Gehäuse nicht aufschneiden oder manipulieren, außer in zwingenden Fällen und nach Rücksprache mit Elektrofachkraft oder Hersteller.",
        ],
      },
      {
        id: "loeschwasser",
        title: "Löschwasser, Kontamination und AwSV-Rückhaltung",
        paragraphs: [
          "Löschwasser aus Speicherbränden enthält Fluoride, Sulfate, Schwermetalle, Lithium-Ionen und Brandfolgeprodukte. Es ist oft korrosiv und alkalisch, mit pH-Werten über 10, und gehört nicht in die Kanalisation. Kühlwasser aus Wasserbädern kann Trinkwassergrenzwerte um ein Vielfaches überschreiten.",
          "Die Löschwasserrückhaltung ist Aufgabe des Betreibers, nicht der Feuerwehr. Sie wird im Genehmigungsverfahren mit der Umweltbehörde festgelegt, gestützt auf die AwSV. Bei NMC-Zellen mit Kobalt und Nickel ist häufig Wassergefährdungsklasse 3 anzunehmen. Ist die Zellchemie unbekannt, sollte man gemäß AwSV ebenfalls von WGK 3 ausgehen und das Ergebnis im Feuerwehrplan festhalten.",
          "Rückhaltung kann über Auffangwannen oder über hallen- und containerböden mit flüssigkeitsundurchlässiger Fläche gelingen. Bei Heimspeichern in Wohngebäuden fehlt sie meist. Dort zählen Prävention und frühe Evakuierung besonders. Für Transport und Entsorgung havarierter Module bleibt die Gefahrgutklasse 9 (Kennzeichnung 9a) relevant.",
        ],
      },
      {
        id: "vorbeugung",
        title: "Was vor dem Ereignis geklärt sein muss",
        paragraphs: [
          "Die Gefährdungsbeurteilung muss Lagerung, Laden, Wartung und Havarie abdecken. Ergänzend hilft die DGUV-Schrift FBFHB-018 zur Lagerung von Lithium-Ionen-Akkus. Ungeschulte Beschäftigte bekommen keinen Löschauftrag. Evakuierung und Alarmierung folgen dem betrieblichen Konzept, siehe [Alarmierung und Evakuierung](/ratgeber/alarmierung-evakuierung-betrieb).",
          "Der Feuerwehrplan muss Anlagentechnik, Zugänge, Abschaltmöglichkeiten, Löschwasserrückhaltung und Explosionsbereiche zeigen. Die Abstimmung mit der örtlichen Feuerwehr gehört früh dazu, nicht erst nach der Inbetriebnahme. Für Großspeicher empfehlen vfdb und BVES Übungen.",
          "Technisch kommen Brandmeldeanlage, je nach Konzept Gaslöschanlage oder Sprinkler, Rauchableitung und Belüftung in Betracht. [Brandgase und Rauch](/ratgeber/brandgase-rauch-brandfall) bleiben relevant: Kohlenmonoxid kann angrenzende Bereiche über Bauteile erreichen. Nach einem Brand braucht es eine Freimessung. [Brandbegrenzungsdecken](/ratgeber/brandbegrenzungsdecken-lithiumbatterie) ersetzen kein Speicherkonzept. Ein betrieblicher Deckeneinsatz im Brandfall ist aus DGUV-Sicht kritisch.",
        ],
      },
      {
        id: "praxis",
        title: "Praxis in NRW: Konzept, Stellungnahme und Betriebsführung",
        paragraphs: [
          "Photovoltaik-Speicher und große Lithium-Ionen-Batterien lösen in NRW zunehmend Brandschutzkonzepte und Stellungnahmen aus, unabhängig von der reinen Gebäudeklasse. Der Unterschied zum klassischen Technikraum liegt im thermischen Durchgehen und in der Aerosolbildung. Abstände, Lüftung und Löschkonzepte, die für normale Elektroverteilungen reichen, reichen hier oft nicht.",
          "In einem anonymisierten Praxisfall aus dem Gewerbehof verlangte die Behörde räumliche Trennung des Speichers, Brandfrüherkennung und dokumentierte Notfallmaßnahmen im Betriebshandbuch. Die bloße CE-Kennzeichnung der Module reichte nicht. Bei Sonderbauten und großen Anlagen ist die Abstimmung mit Konzept und Feuerwehr der Normalfall, nicht die Ausnahme.",
          "Betreiber sollten Inspektion, Firmware-Updates und Auffälligkeiten wie Aufblähung oder Geruch in einem Speicher-Log führen. Die Schnittstelle zu Gefahrstoff- und Elektrosicherheit gehört dazu. Wer in NRW einen Speicher plant oder nachrüstet, klärt früh, ob eine Stellungnahme oder ein vollständiges Konzept nötig ist.",
        ],
      },
      {
        id: "nachbereitung",
        title: "Nach Brand oder Havarie",
        paragraphs: [
          "Ein Temperaturprotokoll nach vfdb MB 06-13 ist empfohlen. Die Übergabe an den Betreiber muss kontaminiertes Löschwasser, mögliche Spannung auf Modulen und Stromschienen sowie Kohlenmonoxid in Nachbarbereichen ansprechen. Umweltbehörde und fachgerechte Entsorgung liegen beim Betreiber.",
          "Auch unbeschädigte Module können unter Spannung stehen. Die Beurteilung gehört in die Hand einer Elektrofachkraft. Hygienemaßnahmen gegen Kontaminationsverschleppung (vfdb MB 10-13, DGUV 205-035) gelten für alle Beteiligten. Der Satz „Der Brand ist aus“ nach der ersten Wassermenge ist gefährlich, wenn Nachglühen und Ausgasen in der Nacht wiederkehren.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Ratgeber fasst vfdb MB TWB-02 für Betreiber und Planer zusammen. Er ersetzt keine Einsatzleitung, keine Gefährdungsbeurteilung und keine Abstimmung mit Feuerwehr und Umweltbehörde. Konkrete Abstände, Rückhaltung und Anlagentechnik ergeben sich aus Standort, AwSV, BauO NRW und dem behördlichen Brandschutzkonzept. Für die Einordnung Ihres Vorhabens: [Brandschutzberatung Köln](/brandschutzberatung-koeln).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandbegrenzungsdecken-lithiumbatterie", label: "Brandbegrenzungsdecken Li-Ion" },
      { href: "/ratgeber/sonderbau-anlagen-pruefung-maengel-nrw", label: "TÜV-Baurechtsreport / Anlagenmängel" },
      { href: "/ratgeber/brandgase-rauch-brandfall", label: "Brandgase und Rauch" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Alarmierung und Evakuierung" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
    ],
    faq: [
      {
        question: "Gilt das vfdb-Merkblatt auch für meinen PV-Hausspeicher?",
        answer:
          "Ja. TWB-02 gilt für stationäre Systeme ab etwa 1 kWh, einschließlich Hausspeicher für Photovoltaik. Die Reaktionsprinzipien sind dieselben. Das Risikoausmaß steigt mit Kapazität und Ladezustand.",
      },
      {
        question: "Dürfen Beschäftigte einen Speicherbrand löschen?",
        answer:
          "Bei fortgeschrittenem Brand oder Ausgasen: nein. Bereich verlassen und Feuerwehr alarmieren. Wasserkühlung ist Einsatzkräftetaktik mit PSA und Konzept, kein Standardauftrag für Lageristen oder Haustechnik ohne Ausbildung.",
      },
      {
        question: "Warum Wasser und nicht CO₂ oder Pulver?",
        answer:
          "Wasser kühlt die Zellen und verlangsamt das thermische Durchgehen. Erstickungslöschmittel beenden die interne Zellreaktion nicht nachhaltig. Der Modulbau erschwert zudem die vollständige Durchdringung.",
      },
      {
        question: "Brauche ich eine Löschwasserrückhaltung?",
        answer:
          "Bei gewerblichen und Großanlagen im Genehmigungsverfahren klären: AwSV, Wassergefährdungsklasse, Umweltbehörde. Das Ergebnis gehört in den Feuerwehrplan. Im Einfamilienhaus fehlt Rückhaltung meist. Dort zählen Prävention und Evakuierung besonders.",
      },
      {
        question: "Was ist der Unterschied zwischen NMC und LFP?",
        answer:
          "NMC (Nickel-Mangan-Cobalt) ist in vielen Speichern Standard. LFP (Lithium-Eisenphosphat) zeigt teils anderes Abbrandverhalten und kann zunächst ohne Flamme ausgasen. Die Gase bleiben gleichermaßen entzündlich.",
      },
      {
        question: "Wie lange bleibt Gefahr nach scheinbarem Löscherfolg?",
        answer:
          "Stunden bis Wochen sind möglich. Restwärme im Modulinneren kann weitere Zellen auslösen. Kühlung und Temperaturüberwachung laufen, bis die Temperaturen dauerhaft unter 60 °C ohne Kühlung bleiben.",
      },
    ],
  },
  {
    slug: "feuerloescher-entsorgung-pfas-abfall",
    title: "Feuerlöscher entsorgen: PFAS, Abfallrecht und was Betriebe jetzt planen müssen",
    excerpt:
      "Ausgesonderte Feuerlöscher sind Abfall, besonders Nass- und Schaumlöscher mit PFAS. AVV-Schlüssel, Abfallerzeugernummer, Nachweispflicht und der Umstieg nach der EU-Restriktion 2025/1988, verständlich für Gewerbe in NRW.",
    metaTitle: "Feuerlöscher entsorgen: PFAS & Abfallrecht | H&S+",
    metaDescription:
      "Feuerlöscher entsorgen mit PFAS-Bezug: gefährlicher Abfall, AVV, Erzeugernummer ab 2 t, EU 2025/1988, Umstieg bis 2030. Praxis für Betriebe in NRW und Köln nach bvfa-Merkblatt.",
    keywords: [
      "Feuerlöscher Entsorgung",
      "PFAS Feuerlöscher entsorgen",
      "PFAS Löschschaum Verbot",
      "gefährlicher Abfall Feuerlöscher",
      "Abfallerzeugernummer Feuerlöscher",
      "Schaumlöscher Entsorgung NRW",
      "bvfa Merkblatt Feuerlöscher",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Jeder ausgesonderte Löscher ist Abfall, nicht Restmüll",
        paragraphs: [
          "Wer Feuerlöscher austauscht, instandsetzt oder stilllegt, erzeugt Abfall im Sinne des Kreislaufwirtschaftsgesetzes. Das gilt für alle Löschertypen, nicht nur für PFAS-haltige Schaumgeräte. Verklappung in der Umwelt, Einleitung von Löschmittel in die Kanalisation oder mutwilliges Auslösen zum „Entleeren“ ohne genehmigtes Konzept sind keine Kavaliersdelikte. Sie können strafbar sein.",
          "Das bvfa-Merkblatt „Entsorgung von ausgesonderten Feuerlöschern“ der Fachgruppe Feuerlöschgeräte-Industrie beschreibt die fachlich und rechtlich korrekte Vorgehensweise. Der Schwerpunkt liegt auf PFAS-haltigen Schaumlöschern, weil diese „Ewigkeitschemikalien“ besondere Behandlung und steigende Entsorgungskosten mit sich bringen.",
          "Seit dem 23. Oktober 2025 gilt die EU-Restriktion zu PFAS in Löschschäumen (Verordnung (EU) 2025/1988). Sie begrenzt Inverkehrbringen und Nutzung fluorhaltiger Schäume in tragbaren Feuerlöschern. Spätestens bis zum 31. Dezember 2030 sollen PFAS-haltige Schäume aus dem Markt. Wer heute noch AFFF-Geräte im Bestand hat, sollte inventarisieren, Ersatz planen und Entsorgung rechtssicher organisieren, statt auf den Stichtag zu warten.",
        ],
      },
      {
        id: "einstufung",
        title: "Gefährlicher oder ungefährlicher Abfall?",
        paragraphs: [
          "Entscheidend ist die Abfallart nach Abfallverzeichnisverordnung, nicht die Marke des Löscherherstellers. Die folgende Übersicht folgt der bvfa-Systematik und hilft bei der ersten Einordnung im Betrieb.",
        ],
        table: {
          caption: "AVV-Orientierung für ausgesonderte Feuerlöscher und Löschmittel",
          headers: ["AVV-Schlüssel", "Typische Fraktion", "Einstufung"],
          rows: [
            ["16 05 04*", "Nasslöscher (Wasser, Fettbrand, Schaum, Metallbrand), Halon, gefährliche Gase in Druckbehältern", "gefährlicher Abfall"],
            ["16 10 01*", "flüssige Löschmittel und lose Schaumkonzentrate (Premix, Kanister, IBC)", "gefährlicher Abfall"],
            ["16 05 05", "ABC-/BC-Pulverlöscher und CO₂-Löscher", "in der Regel kein gefährlicher Abfall"],
            ["16 05 09", "loses Pulver (ABC/BC)", "kein gefährlicher Abfall"],
          ],
        },
      },
      {
        id: "einstufung-praxis",
        title: "Was die Einstufung für den Alltag bedeutet",
        paragraphs: [
          "Ein 6-Liter-Aufladeschaumlöscher wiegt grob etwa zehn Kilogramm. Zweihundert Nasslöscher entsprechen damit ungefähr zwei Tonnen gefährlichem Abfall. Ab dieser Schwelle greifen erweiterte Pflichten.",
          "Gefährlicher Abfall ist grundsätzlich nachweispflichtig. Ab mehr als zwei Tonnen gefährlichem Abfall pro Jahr und Standort braucht der Erzeuger eine Abfallerzeugernummer. Die Beantragung läuft über GADSYS der zuständigen Landesbehörde, in NRW über das Zentrale Kommunikationssystem Abfall (zks-abfall.de).",
          "Pulver- und CO₂-Löscher sind einfacher zu entsorgen, bleiben aber Abfall. Sie gehören an zugelassene Entsorgungsfachbetriebe, nicht in den Gewerbe-Restmüll und nicht in die private Tonne. Die Andienungspflicht gilt auch hier.",
        ],
      },
      {
        id: "mengen",
        title: "Kleinmengen, Sammelnachweis und elektronisches Verfahren",
        paragraphs: [
          "Die sogenannte Handwerkerregelung befreit Kleinmengen von besonderen Transportdokumentationspflichten: bis 20 Tonnen ungefährlicher Abfall und bis 2 Tonnen gefährlicher Abfall pro Jahr. Das entspricht etwa 200 Nasslöschern jährlich und ist für Brandschutzfachbetriebe schnell erreicht.",
          "Zwischen 2 und 20 Tonnen gefährlichem Abfall, grob 200 bis 2.000 Nasslöscher, kann oft ein Sammelnachweis des Entsorgers genutzt werden, sofern die Befreiung greift. Voraussetzung sind Abfallerzeugernummer des Erzeugers, ein Sammler mit Zugang zum elektronischen Verfahren und dokumentierte Übernahmescheine.",
          "Ab 20 Tonnen gefährlichem Abfall pro Jahr, etwa 2.000 Nasslöscher, wird die elektronische Nachweisführung mit Einzelentsorgungsnachweis und Signaturkarte Pflicht. Loses Löschmittel und andere gefährliche Fraktionen zählen mit. Wer Wartung und Austausch für viele Kunden organisiert, sollte die eigenen Mengen früh rechnen, nicht erst beim Jahresabschluss.",
        ],
      },
      {
        id: "handling",
        title: "Lagerung und Transport: geschlossen übergeben, nicht umfüllen",
        paragraphs: [
          "Flüssige Löschmittel lagern nach Gefahrstoffverordnung auf Auffangwannen, mindestens mit dem Rauminhalt des größten Gebindes. Bei tragbaren Löschern bis 9 Liter, bei IBC mindestens 1.000 Liter. Altlöscher stehen trocken und überdacht, ohne Staunässe unter Abdeckfolien, und ohne Fremdzugriff.",
          "Löschmittel aus Löschern abzapfen oder umzufüllen gilt als Abfallbehandlung am Betriebsstandort. Das ist genehmigungspflichtig und verlangt Bodenschutz sowie geeignete PSA. Der bvfa empfiehlt, Feuerlöscher als geschlossene Gesamteinheit zu übergeben. Behälter und Armaturen von PFAS-Schaum sind kontaminiert und nicht ohne Weiteres verwertbar.",
          "Beim Transport in Gitterboxen helfen Foliensäcke gegen Auslauf. Die Weitergabe ausgesonderter PFAS-Löscher an Dritte oder ein „Zweitleben“ ist unzulässig. Personal muss im Abfallrecht unterwiesen sein. Mengen und Typen gehören auf den Serviceauftrag oder einen vergleichbaren Nachweis.",
        ],
      },
      {
        id: "betreiber",
        title: "Pflichten für Arbeitgeber und Dienstleister",
        paragraphs: [
          "Der gewerbliche Abfallbesitzer muss Abfälle klassifizieren, nur an befähigte Entsorgungsfachbetriebe abgeben und den Weg nachweisen. Die Haftung bleibt bis zur endgültigen Beseitigung beim Erzeuger. Wer den Entsorger nicht prüft, trägt das Risiko mit.",
          "Dienstleister, die Löscher beim Kunden abholen, sollten dessen Abfallerzeugernummer nutzen. Der Kunde ist Verursacher. Große Mengen lassen sich oft direkt beim Endkunden durch einen zertifizierten Sammler abholen. Das begrenzt die eigenen Meldemengen.",
          "Entsorgung ist nicht kostenlos. Demontage, Stofftrennung, PFAS-Behandlung und Nachweisdokumentation gehören in Wartungs- und Austauschangebote. Zur betrieblichen Pflichtseite gehören außerdem [Prüfung und Wartung nach ASR A2.2](/ratgeber/feuerloescher-pruefen-wartung-asr-a22) und die [Löschmitteleinheiten am Arbeitsplatz](/ratgeber/loeschmitteleinheiten-feuerloescher-arbeitsplatz-asr-a22).",
        ],
      },
      {
        id: "pfas-umstieg",
        title: "PFAS-Restriktion: Fristen und sinnvoller Umstieg",
        paragraphs: [
          "Fluorhaltige Schaumlöscher, etwa mit AFFF, unterliegen der EU-Restriktion. Das Inverkehrbringen in tragbaren Feuerlöschern endet voraussichtlich ab dem 23. Oktober 2026. Für alkoholbeständige Schäume gilt eine längere Übergangsfrist bis zum 23. April 2027. Die Nutzung bestehender Geräte ist spätestens bis zum 31. Dezember 2030 begrenzt. Danach braucht es fluorfreie Alternativen oder andere Löschmittel, passend zur Brandklasse und zum Risiko. Abgrenzung: Die Restriktion trifft PFAS in Löschschäumen, nicht pauschal jeden Feuerlöscher. Pulver- und CO₂-Geräte bleiben betrieblich und abfallrechtlich relevant, stehen aber unter einem anderen Rechtsregime als AFFF-Schaum.",
          "Beim Umstieg Löschertyp und Brandklasse neu bewerten, siehe [Brandklassen und Löschertypen](/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2). Löschübungen mit Schaumlöschern ohne fachliche Freigabe sind weder sinnvoll noch zulässig. In der [Brandschutzhelfer-Ausbildung](/ratgeber/brandschutzhelfer-ausbildung-anforderungen) werden Übungslöscher kontrolliert eingesetzt.",
          "Ein belastbarer Weg sieht so aus: Bestand dokumentieren, Austausch bis 2030 planen, Entsorgung mit Nachweis beauftragen. Der schlechte Weg ist, AFFF-Geräte ohne Inventur und ohne Entsorgungskonzept bis zum Verbot weiterlaufen zu lassen. Für Betriebe in NRW lohnt die frühzeitige Abstimmung mit dem Wartungsdienstleister, bevor Preise und Kapazitäten unter Zeitdruck steigen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Ratgeber fasst das bvfa-Merkblatt zur Entsorgung ausgesonderter Feuerlöscher zusammen und ordnet den EU-PFAS-Rahmen ein. Abfallrecht ist Ländersache. Erzeugernummer, Befreiungen und Behördenzuständigkeit in NRW klären Sie über GADSYS und ZKS. Der Text ersetzt keine rechtliche Beratung, kein Abfallkonzept und keine Entsorgungsvertragsprüfung. Das Merkblatt selbst ist kostenlos über bvfa.de verfügbar.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerloescher-pruefen-wartung-asr-a22", label: "Feuerlöscher prüfen und warten" },
      { href: "/ratgeber/loeschmitteleinheiten-feuerloescher-arbeitsplatz-asr-a22", label: "Löschmitteleinheiten am Arbeitsplatz" },
      { href: "/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2", label: "Brandklassen und Löschertypen" },
      { href: "/ratgeber/brandschutzhelfer-ausbildung-anforderungen", label: "Brandschutzhelfer-Ausbildung" },
      { href: "/brandschutzhelfer-ausbildung-koeln", label: "Brandschutzhelfer Köln" },
      { href: "/brandschutzberatung-koeln", label: "Brandschutzberatung Köln" },
    ],
    faq: [
      {
        question: "Darf ich alte Feuerlöscher im Gewerbeabfall entsorgen?",
        answer:
          "Nein. Auch Pulver- und CO₂-Löscher sind gewerblicher Abfall und gehören nur über zugelassene Entsorgungsfachbetriebe mit Nachweis. Private Haushalte nutzen kommunale Sammelstellen. Im Betrieb gilt die Andienungspflicht.",
      },
      {
        question: "Ab wann brauche ich eine Abfallerzeugernummer?",
        answer:
          "Ab mehr als zwei Tonnen gefährlichem Abfall pro Jahr und Standort, grob ab etwa 200 Nasslöschern. Die Beantragung läuft über GADSYS bei der zuständigen Landesbehörde.",
      },
      {
        question: "Sind nur Schaumlöscher gefährlicher Abfall?",
        answer:
          "Nein. Alle Nasslöscher (Wasser, Fettbrand, Schaum, Metallbrand), Halon und flüssige Löschmittel fallen unter gefährliche AVV-Schlüssel. Pulver und CO₂ sind meist ungefährlicher Abfall, bleiben aber abfallrechtlich relevant.",
      },
      {
        question: "Darf ich Löschschaum zum Üben auslösen?",
        answer:
          "Nein. Die Freisetzung von Löschmittel ohne ordnungsgemäße Entsorgung ist strafbar und bei PFAS umweltschädlich. Übungen nur mit genehmigtem Konzept und geeigneten Übungsgeräten.",
      },
      {
        question: "Was kostet die Entsorgung von PFAS-Löschern?",
        answer:
          "Deutlich mehr als bei Pulver oder CO₂, wegen Demontage, Stofftrennung, Behandlungsgebühren und Nachweispflicht. Die Kosten gehören in den Wartungsvertrag oder das Austauschangebot.",
      },
      {
        question: "Bis wann müssen PFAS-Schaumlöscher aus dem Betrieb?",
        answer:
          "Die Nutzung bestehender Geräte ist spätestens bis zum 31. Dezember 2030 begrenzt. Neugeräte mit PFAS-Schaum dürfen voraussichtlich ab dem 23. Oktober 2026 nicht mehr in Verkehr gebracht werden (EU 2025/1988). Früh inventarisieren und umstellen.",
      },
    ],
  },
];
