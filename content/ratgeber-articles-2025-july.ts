/**
 * Juli 2025 – 3 Artikel (Qualitätsrhythmus: 4/Monat).
 * Quellen: SBauVO NRW Teil 6, DGUV 205-001, BauPAVO NRW, Sonderbau-Systematik.
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_2025_JULY: RatgeberArticle[] = [
  {
    slug: "dguv-205-001-gefaehrdungsbeurteilung-brandschutz",
    title: "DGUV 205-001: Gefährdungsbeurteilung Brandschutz im Betrieb",
    excerpt:
      "Genehmigter baulicher Brandschutz reicht im Betrieb nicht. DGUV Information 205-001 verlangt Gefährdungsbeurteilung, Maßnahmen gegen Entstehungsbrände und wirksame Organisation – mit Praxisbezug.",
    metaTitle: "DGUV 205-001: Brandschutz Betrieb | H&S+",
    metaDescription:
      "DGUV 205-001 betrieblicher Brandschutz: Gefährdungsbeurteilung, Entstehungsbrand, BSH, Maßnahmen prüfen – Arbeitgeberpflichten NRW.",
    keywords: [
      "DGUV 205-001",
      "Gefährdungsbeurteilung Brandschutz",
      "betrieblicher Brandschutz",
      "Entstehungsbrand verhindern",
      "Brandschutzorganisation",
      "Arbeitgeber Brandschutz",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Baurecht und Betrieb – zwei Pflichten",
        paragraphs: [
          "DGUV Information 205-001 „Betrieblicher Brandschutz in der Praxis“ (Aktualisierung der früheren 205-001 und BGHW-Merkblatt feuergefährliche Arbeiten) richtet sich an Arbeitgeber und Führungskräfte. Sie konkretisiert ArbSchG, BetrSichV und ASR A2.2 für den laufenden Betrieb.",
          "Baulicher Nachweis nach BauO/Sonderbau und betrieblicher Brandschutz nach Arbeitsschutz laufen parallel. Wer nur das BSK aus der Genehmigung archiviert, erfüllt die Arbeitgeberpflicht nicht.",
          "Grenzfall ja: Mittelständischer Betrieb mit GB Brandschutz, TRGS 800/EX wo nötig, BSH-Anteil ca. 5 %, jährliche Übung, BSB bestellt, Maßnahmen dokumentiert. Grenzfall nein: „Noch nie gebrannt“ ohne GB, keine Unterweisung, Heißarbeiten ohne Erlaubnis – gerichtlich als unzureichend eingestuft (Lebenserfahrung: Brand jederzeit möglich).",
        ],
      },
      {
        id: "gefaehrdungsbeurteilung",
        title: "Gefährdungsbeurteilung mit Brandbezug",
        paragraphs: [
          "§ 5 ArbSchG: Gefährdungsbeurteilung muss Brand- und Explosionsgefährdungen umfassen – für Arbeitsplätze, Prozesse, Stoffe, bauliche Gegebenheiten.",
          "Informationsquellen: Sicherheitsdatenblätter (Flammpunkt, Explosionsgrenzen), Begehungen, Unfallstatistik (DGUV: rund 2.000 meldepflichtige Arbeitsunfälle mit Brand/Explosion pro Jahr), Near-Miss.",
          "Ergebnis: technische, organisatorische und personenbezogene Maßnahmen – dokumentiert, mit Verantwortlichkeiten und Prüfintervallen.",
        ],
      },
      {
        id: "massnahmen",
        title: "Maßnahmen im Überblick",
        paragraphs: [
          "Entstehungsbrand verhindern: Ordnung, heiße Oberflächen, elektrische Anlagen, brennbare Stoffe, [Heißarbeiten](/ratgeber/heissarbeiten-brandwache-erlaubnisschein), [Putzlappen](/ratgeber/selbstentzuendung-putzlappen-metallspane).",
          "Technische Anlagen: Wartung, keine überlasteten Leitungen, EX-Zonen wo nötig – [Explosionsschutz](/ratgeber/explosionsschutz-brandschutz-schnittstelle).",
          "Organisation: [BSB](/ratgeber/bestellung-brandschutzbeauftragter-nrw), [Brandschutzhelfer](/ratgeber/brandschutzhelfer-ausbildung-anforderungen) (ca. 5 % ohne besondere Gefahr, mehr bei erhöhter Gefährdung), [Alarmierung](/ratgeber/alarmierung-evakuierung-betrieb).",
          "Wirksamkeit prüfen: Übungen, Begehungen, Mängel an Vorgesetzte melden und nachbessern.",
        ],
      },
      {
        id: "schnittstelle",
        title: "Schnittstelle baulich / organisatorisch",
        paragraphs: [
          "205-001 ergänzt [betrieblichen Überblick](/ratgeber/betrieblicher-brandschutz-praxis-ueberblick) mit GB-Tiefe – nicht doppeln, sondern vertiefen.",
          "Nutzungsänderung im Gebäude: neue GB und ggf. neues BSK – [Umbau](/ratgeber/umbau-nutzungsaenderung-brandschutz).",
          "[TRGS 800](/ratgeber/trgs-800-brandschutz-gefahrstoffe-betrieb) für brennbare Gefahrstoffe parallel.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Lücken in Audits",
        paragraphs: [
          "GB ohne Brandursachen-Analyse – nur Feuerlöscher-Liste.",
          "Keine Prüfung der Wirksamkeit (keine Übung, keine Auswertung).",
          "BSB ohne Befugnis, Mängel zu eskalieren.",
          "Betriebsanweisungen fehlen für Heißarbeit, Lithium-Laden, Gefahrstofflager.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst DGUV 205-001 für Arbeitgeber und BSB zusammen. Er ersetzt keine Gefährdungsbeurteilung, keine Rechtsberatung und keinen baulichen Nachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/betrieblicher-brandschutz-praxis-ueberblick", label: "Betrieb Überblick" },
      { href: "/ratgeber/bestellung-brandschutzbeauftragter-nrw", label: "BSB bestellen" },
      { href: "/ratgeber/brandschutzhelfer-ausbildung-anforderungen", label: "Brandschutzhelfer" },
      { href: "/ratgeber/alarmierung-evakuierung-betrieb", label: "Evakuierung" },
      { href: "/ratgeber/trgs-800-brandschutz-gefahrstoffe-betrieb", label: "TRGS 800" },
    ],
    faq: [
      {
        question: "Ist 205-001 gesetzlich bindend?",
        answer:
          "DGUV Information als anerkannte Regel der Technik und Auslegungshilfe – Arbeitgeber müssen wirksamen Brandschutz nach ArbSchG sicherstellen; 205-001 zeigt wie.",
      },
      {
        question: "Reicht das Brandschutzkonzept aus der Genehmigung?",
        answer:
          "Nein als Ersatz für betriebliche GB. BSK = baulich/genehmigung; GB = Arbeitsplätze und Prozesse im Betrieb.",
      },
      {
        question: "Wie viele Brandschutzhelfer?",
        answer:
          "Aus GB – oft ca. 5 % ohne besondere Brandgefahr; mehr bei erhöhter Gefährdung, Schichtbetrieb, großen Flächen.",
      },
      {
        question: "Was ist mit Entstehungsbrand?",
        answer:
          "Schwerpunkt 205-001: Brände verhindern, bevor BMA auslöst – Zündquellen, Stoffe, Wartung, Verhalten.",
      },
      {
        question: "Muss die GB schriftlich sein?",
        answer:
          "Ja, nach ArbSchG dokumentiert – mit Maßnahmen, Stand, Aktualisierung bei Änderungen.",
      },
      {
        question: "Überschneidung mit TRGS 800?",
        answer:
          "Ja bei Gefahrstoffen – TRGS 800 ist Stoff-Schwerpunkt, 205-001 Gesamtorganisation; eine kohärente GB.",
      },
    ],
  },
  {
    slug: "baupavo-nrw-bauarten-verwendbarkeitsnachweis",
    title: "BauPAVO NRW: Bauarten und Verwendbarkeitsnachweise",
    excerpt:
      "Nicht jedes Bauprodukt hat CE oder ein Standard-Ü-Zeichen. BauPAVO NRW regelt, wann Bauarten zugelassen werden müssen und wer überwacht wird – Ergänzung zum CE/Ü-Artikel.",
    metaTitle: "BauPAVO NRW: Bauarten & Nachweis | H&S+",
    metaDescription:
      "BauPAVO NRW: Bauarten, Verwendbarkeitsnachweis, Ü-Zeichen, Überwachung Hersteller, Abweichung – Bauprodukte jenseits CE.",
    keywords: [
      "BauPAVO NRW",
      "Bauart Brandschutz",
      "Verwendbarkeitsnachweis",
      "Übereinstimmungszeichen",
      "allgemeine bauaufsichtliche Zulassung",
      "Bauprodukt NRW",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Nach CE und Standard-Ü-Zeichen",
        paragraphs: [
          "Der [CE/Ü-Zeichen-Artikel](/ratgeber/bauprodukte-ce-kennzeichnung-nrw) erklärt harmonisierte Bauprodukte und Ü-Zeichen nach Technischen Baubestimmungen. Die Bauprodukte- und Bauartenverordnung NRW (BauPAVO) ergänzt: welche Bauarten Verwendbarkeitsnachweise brauchen, wer herstellt und anwendet, wie das Ü-Zeichen ausgestaltet ist.",
          "Bauart: nicht serienmäßig hergestelltes Bauprodukt, sondern bauliche Ausführung (z. B. Sonderabschottung, tragende Konstruktion aus nicht genormter Kombination) – brandschutzrelevant bei Durchbrüchen, Fassaden, Sonderkonstruktionen.",
          "Grenzfall ja: Sonder-Abschottung Kombination Rohr/Wand als Bauart mit abZ, Ü-Zeichen auf Bescheinigung, anerkannte Prüfstelle überwacht Anwender. Grenzfall nein: „Bewährtes System vom Monteur“ ohne Nachweis für diese Bauart – Abnahme scheitert.",
        ],
      },
      {
        id: "nachweise",
        title: "Verwendbarkeits- und Anwendbarkeitsnachweise",
        paragraphs: [
          "BauPAVO listet Bauprodukte und Bauarten, für die Verwendbarkeitsnachweise erforderlich sind – u. a. mit wasserrechtlichen Anforderungen bei LAU-Anlagen.",
          "CE-Produkte nach EU-Bauproduktenverordnung: BauPAVO § 1 findet keine Anwendung – Abgrenzung zum [CE-Artikel](/ratgeber/bauprodukte-ce-kennzeichnung-nrw).",
          "Allgemeine bauaufsichtliche Zulassung (aBG) oder Prüfzeugnis (abZ/abP) als Grundlage der Übereinstimmungsbestätigung.",
        ],
      },
      {
        id: "ue-zeichen",
        title: "Ü-Zeichen nach BauPAVO",
        paragraphs: [
          "§ 7 BauPAVO konkretisiert das Übereinstimmungszeichen nach § 24 Abs. 4 BauO NRW: Hersteller, ggf. Werk, Regelwerk, wesentliche Merkmale, Grundlage der Übereinstimmungsbestätigung.",
          "Planer und Ausführende: Ü-Bescheinigung zum Einbauort mitführen – nicht nur Katalogdatenblatt.",
          "[Abschottungen Baustelle](/ratgeber/abschottungen-durchbrueche-baustelle-koeln): jede Kombination kann eigene Bauart sein.",
        ],
      },
      {
        id: "ueberwachung",
        title: "Hersteller, Anwender, Überwachung",
        paragraphs: [
          "Hersteller und Anwender von Bauarten müssen vor erstmaliger Tätigkeit und in Intervallen (3 oder 5 Jahre je Tätigkeit) nachweisen, dass Fachkräfte und Vorrichtungen vorhanden sind – anerkannte Prüfstelle.",
          "Oberste Bauaufsicht kann Abweichungen gestatten, wenn Gefahren nachgewiesen abgewendet werden – nicht Standardweg.",
        ],
      },
      {
        id: "praxis",
        title: "Brandschutz-Praxis",
        paragraphs: [
          "Innovative Fassaden, modulare Hallen, kombinierte Durchdringungsabschottungen: früh klären ob Bauart oder serienfähiges Produkt.",
          "Umbau Bestand: alte abZ prüfen – noch gültig, noch passend zur Einbausituation?",
          "Dokumentation für Abnahme und [Feuerschutzabschlüsse](/ratgeber/feuerschutzabschluesse-bestand-nrw)-Prüfung.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber fasst BauPAVO NRW für Planer und ausführende Betriebe zusammen. Einzelfragen zu LAU/Wasserrecht nur bei entsprechenden Anlagen. Er ersetzt keinen Verwendbarkeitsnachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bauprodukte-ce-kennzeichnung-nrw", label: "CE vs. Ü-Zeichen" },
      { href: "/ratgeber/abschottungen-durchbrueche-baustelle-koeln", label: "Abschottungen" },
      { href: "/ratgeber/feuerschutztueren-bestand-ertuechtigung-koeln", label: "Feuerschutztüren" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
      { href: "/ratgeber/fachbauleitung-brandschutz-baustelle-koeln", label: "Fachbauleitung" },
    ],
    faq: [
      {
        question: "Was ist der Unterschied Bauprodukt und Bauart?",
        answer:
          "Bauprodukt: hergestelltes Element. Bauart: konkrete bauliche Ausführung, oft projektspezifisch oder nicht serienmäßig.",
      },
      {
        question: "Gilt BauPAVO für CE-Produkte?",
        answer:
          "Nein – § 1 BauPAVO ausgenommen für CE nach EU-Bauproduktenverordnung.",
      },
      {
        question: "Wer darf Bauarten anwenden?",
        answer:
          "Anwender mit nachgewiesenen Fachkräften und Überwachung durch anerkannte Prüfstelle in Intervallen.",
      },
      {
        question: "Reicht eine Herstellerbroschüre?",
        answer:
          "Nein – Übereinstimmungsbestätigung/Verwendbarkeitsnachweis für die konkrete Verwendung.",
      },
      {
        question: "Zusammenhang mit MVV TB?",
        answer:
          "Technische Baubestimmungen (MVV TB/VV TB) definieren Anforderungen; BauPAVO regelt Nachweis- und Überwachungsverfahren in NRW.",
      },
      {
        question: "Was bei Abweichung vom Standard?",
        answer:
          "Einzelfall-Gestattung oberste BA möglich – mit Nachweis gleicher Sicherheit, nicht stillschweigend.",
      },
    ],
  },
  {
    slug: "kita-krankenhaus-sonderbau-ungeregelt-nrw",
    title: "Kitas und Krankenhäuser: ungeregelt Sonderbau in NRW",
    excerpt:
      "Die NRW-SBauVO hat keinen eigenen Teil für Kindertageseinrichtungen oder Krankenhäuser – trotzdem Sonderbau nach § 50 BauO. Was „ungeregelt“ bedeutet und wie der Nachweis trotzdem anspruchsvoll ist.",
    metaTitle: "Kita & Krankenhaus: Sonderbau NRW | H&S+",
    metaDescription:
      "Kindertageseinrichtung Krankenhaus Brandschutz NRW: Sonderbau ungeregelt, kein SBauVO-Teil, Brandschutzkonzept, Abgrenzung SchulBauR Pflege.",
    keywords: [
      "Kita Brandschutz NRW",
      "Kindertageseinrichtung Sonderbau",
      "Krankenhaus Brandschutz",
      "ungeregelt Sonderbau",
      "Sonderbau Kita",
      "Krankenhaus Brandschutzkonzept",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Sonderbau ohne SBauVO-Teil",
        paragraphs: [
          "§ 50 Abs. 2 BauO NRW nennt Kindertageseinrichtungen und Krankenhäuser ausdrücklich als Sonderbauten. Die NRW-SBauVO enthält dafür jedoch keinen eigenen Teil (anders als Versammlungsstätten, Beherbergung, Verkaufsstätten, Hochhäuser, Garagen).",
          "Im System der [geregelt/ungeregelt-Einordnung](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw) sind Kitas und Krankenhäuser „ungeregelt“: volle BauO-Anforderungen plus in der Regel umfangreiches Brandschutzkonzept nach BauPrüfVO § 9 – nicht weniger Planung, sondern weniger Tabellen in der SBauVO.",
          "Grenzfall ja: Neubau Kita 120 Kinder, Konzept mit Nutzerzahl, Evakuierung mit Personal, BMA, Rettungswege § 33, Abstimmung Feuerwehr, Prüfingenieur. Grenzfall nein: „Nur kleine Kita, normale GK“ – § 50 Abs. 2 Kindertageseinrichtung trifft ohne Flächenschwelle zu.",
        ],
      },
      {
        id: "kita",
        title: "Kindertageseinrichtungen",
        paragraphs: [
          "Kitas: besondere Nutzer (Kinder), eingeschränkte Selbstrettung, hohe Aufsichtspflicht – Evakuierung und BSO im Konzept zentral.",
          "Abgrenzung [SchulBauR](/ratgeber/schulen-schulbaurichtlinie-nrw): Schulen haben eigene Richtlinie; Kitas nicht – allgemeine Sonderbau-Logik.",
          "Abgrenzung [Pflege-RL](/ratgeber/pflegeeinrichtung-sonderbau-nrw): Tagespflege in Einrichtungen der Kindertagespflege kann anders einzuordnen sein – Pflege-RL schließt Kindertageseinrichtungen aus.",
          "Betrieb: Personal unterweisung, Übungen mit Kindern altersgerecht, [Alarmierung](/ratgeber/alarmierung-evakuierung-betrieb).",
        ],
      },
      {
        id: "krankenhaus",
        title: "Krankenhäuser",
        paragraphs: [
          "Krankenhäuser: hohe Personenanzahl, bettlägerige Patienten, komplexe Erschließung, Technik (Sauerstoff, Medizintechnik), Funktionsbereiche mit erhöhter Brandgefahr.",
          "Nachweis typischerweise vollständiges Konzept mit Feuerwehrzufahrt, Brandabschnitten, Druckbelüftung Rettungswege, BMA, Löschanlagen, Sicherheitsstrom, ggf. Feuerwehraufzug (Krankentrage in Fahrkorb/Vorraum nach SBauVO-Versammlungs-/Hochhaus-Querverweisen im Projekt).",
          "Betrieb: Bettenführung im Brandfall, BSO, Übungen mit nicht-gehfähigen Personen – über baulichen Nachweis hinaus.",
        ],
      },
      {
        id: "nachweis",
        title: "Nachweislogik ungeregelt",
        paragraphs: [
          "[Brandschutzkonzept Pflichtinhalte](/ratgeber/brandschutzkonzept-baupruefvo-nrw): Feuerwehr, Abschottungen, Rettungswege, Nutzerzahl, Anlagen, Ausgleichsmaßnahmen.",
          "Kein SBauVO-Teil bedeutet: keine vorgefertigten Brandabschnitts-Tabellen – ingenieurmethodische Lösungen häufiger.",
          "Bestand/Umbau: Fortschreibung § 9, [PrüfVO](/ratgeber/pruefvo-nrw-wiederkehrende-pruefung-sonderbau) für BMA, Sprinkler, Druckbelüftung.",
        ],
      },
      {
        id: "vergleich",
        title: "Vergleich mit geregeltem Sonderbau",
        paragraphs: [
          "Hotel [Beherbergung](/ratgeber/beherbergungsstaetten-hotel-sonderbau-nrw): SBauVO Teil 2 mit Gastbetten-Schwellen.",
          "Schule: SchulBauR als besondere VwV, nicht SBauVO – ähnlich „ungeregelt“ in SBauVO, aber eigene Richtlinie.",
          "Krankenhaus/Kita: keine vergleichbare NRW-Kurzrichtlinie im lokalen SBauVO-Bestand – höchste Planungsdisziplin im Konzept.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erklärt die Sonderbau-Einordnung für Kitas und Krankenhäuser in NRW. Fachspezifische Hygiene-, Heim- und Krankenhaus-Bauverordnungen sind getrennt. Er ersetzt kein Brandschutzkonzept und keine behördliche Festlegung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Geregelt/ungeregelt" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/schulen-schulbaurichtlinie-nrw", label: "SchulBauR" },
      { href: "/ratgeber/pflegeeinrichtung-sonderbau-nrw", label: "Pflegeeinrichtung" },
      { href: "/ratgeber/brandschutzkonzept-baupruefvo-nrw", label: "Konzept §9" },
    ],
    faq: [
      {
        question: "Ist eine Kita immer Sonderbau?",
        answer:
          "Kindertageseinrichtung nach § 50 Abs. 2 BauO NRW – ohne zusätzliche Flächenschwelle in der Norm. Einzelfragen bei Tagespflege in Wohnungen.",
      },
      {
        question: "Warum kein SBauVO-Teil?",
        answer:
          "NRW-SBauVO deckt andere Typen ab; Kitas/Krankenhäuser folgen BauO plus Konzept – „ungeregelt“ im SBauVO-Sinne.",
      },
      {
        question: "Ist der Nachweis einfacher als beim Hotel?",
        answer:
          "Nein – oft anspruchsvoller wegen Nutzergruppe (Kinder/Patienten) und fehlender SBauVO-Tabellen.",
      },
      {
        question: "Was unterscheidet Kita von Schule?",
        answer:
          "Schule: SchulBauR als VwV. Kita: allgemeiner Sonderbau ohne diese Richtlinie.",
      },
      {
        question: "Braucht ein Krankenhaus PrüfVO?",
        answer:
          "Als Sonderbau mit BMA, Sprinkler, Druckbelüftung etc. – ja, wiederkehrende Prüfungen durch Prüfsachverständige.",
      },
      {
        question: "Reicht Stellungnahme statt Konzept?",
        answer:
          "Bei kleinen, klar abgegrenzten Änderungen möglich – bei Neubau Kita/Krankenhaus in der Regel vollständiges Konzept.",
      },
    ],
  },
];
