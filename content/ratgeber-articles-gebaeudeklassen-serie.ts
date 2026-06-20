/**
 * Gebäudeklassen-Serie – GK 1/2, GK 3, GK 4 und GK 5 (BauO NRW).
 * Quellen: Gebaeudeklasse_1_und_2 … Gebaeudeklasse_5_BauO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_GEBAEUDEKLASSEN_SERIE: RatgeberArticle[] = [
  {
    slug: "gebaeudeklasse-1-2-brandschutz-bauo-nrw",
    title: "Gebäudeklasse 1 und 2: Brandschutz und Erleichterungen nach BauO NRW",
    excerpt:
      "Zweifamilienhaus, Doppelhaus oder kleines Gewerbe bis sieben Meter Höhe: In Gebäudeklasse 1 und 2 gelten deutlich mildere brandschutztechnische Anforderungen – oft ohne eigenen Treppenraum, mit weniger Feuerwiderstand und häufig ohne Baugenehmigung.",
    metaTitle: "Gebäudeklasse 1 und 2 NRW Brandschutz | H&S+",
    metaDescription:
      "Gebäudeklasse 1 und 2 BauO NRW: Einordnung, Feuerwiderstand, Treppenraum, Rettungswege, Genehmigungsfreiheit §62 – Brandschutz für kleine Gebäude in NRW.",
    keywords: [
      "Gebäudeklasse 1",
      "Gebäudeklasse 2",
      "Gebäudeklasse 1 und 2",
      "GK 1 GK 2 NRW",
      "Gebäudeklasse 1 Brandschutz",
      "Zweifamilienhaus BauO",
      "Genehmigungsfrei GK 1",
      "feuerhemmend Keller",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Wann gilt Gebäudeklasse 1 oder 2?",
        paragraphs: [
          "Gebäudeklasse 1 und 2 sind die beiden niedrigsten Stufen der BauO NRW. Sie gelten für vergleichsweise kleine Gebäude: höchstens sieben Meter Höhe bis Oberkante Fußboden des obersten Geschosses, höchstens zwei Nutzungseinheiten und insgesamt höchstens 400 Quadratmeter Brutto-Grundfläche aller Nutzungseinheiten – Kellerflächen zählen dabei nicht mit (§ 2 Abs. 3 BauO NRW).",
          "Der Unterschied zwischen GK 1 und GK 2 liegt vor allem in der Lage auf dem Grundstück. GK 1a umfasst freistehende Gebäude, GK 1b land- oder forstwirtschaftliche Nutzungen in freistehenden Bauten. GK 2 gilt für nicht freistehende Gebäude mit denselben Grenzwerten – typisch ein Doppel- oder Reihenhaus mit zwei Wohnungen.",
          "Wer die Einordnung in allen fünf Klassen braucht, findet die Gesamtübersicht im Ratgeber [Gebäudeklassen GK 1–5](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw). Wichtig: Die Gebäudeklasse allein entscheidet nicht über alles. Eine Gaststätte mit 250 Plätzen kann trotz formaler GK 2 als Sonderbau nach § 50 gelten – und damit deutlich strengere Anforderungen auslösen.",
          "Ein freistehendes Zweifamilienhaus mit 6,8 Metern OKF und zwei Wohnungen à 180 Quadratmeter fällt klar in GK 1a. Anders ein Doppelhaus mit zwei Nutzungseinheiten, zu dem ein Anbau mit einer dritten Nutzungseinheit von 120 Quadratmetern kommt: Sobald die dritte Einheit dazukommt, ist das Gebäude GK 3 – nicht mehr GK 2.",
        ],
      },
      {
        id: "feuerwiderstand",
        title: "Feuerwiderstand: was GK 1 und 2 entlasten",
        paragraphs: [
          "In oberirdischen Geschossen verlangt § 27 Abs. 2 BauO NRW für tragende Wände und Stützen feuerhemmende Bauteile erst ab Gebäudeklasse 2 und 3. Für reine GK-1-Gebäude nennt dieser Absatz keine Mindestklasse. Ab GK 2 gelten tragende Bauteile oberirdisch als feuerhemmend (F 30). Das bedeutet weniger Aufwand bei Wänden und Stützen als in höheren Klassen – nicht aber „kein Brandschutz“.",
          "Im Kellergeschoss sieht es anders aus: Für GK 1 und 2 verlangt die BauO NRW dort feuerhemmende tragende Wände, Stützen und Decken (§ 27 Abs. 3, § 31 Abs. 3). In der Praxis ist der Keller bei kleinen Gebäuden oft der Bereich mit den strengeren Anforderungen.",
          "Trennwände zwischen Nutzungseinheiten nach § 29 entfallen in Wohngebäuden der GK 1 und 2 vollständig – die Absätze 1 bis 5 gelten hier nicht (§ 29 Abs. 6). In einem Zweifamilienhaus braucht man deshalb keine Trennwand nach § 29 zwischen den beiden Wohnungen. Beim Doppelhaus bleibt die gemeinsame Wand zum Nachbarn dennoch brandschutztechnisch relevant; Schallschutz und Gebäudeabschluss sind separat zu prüfen.",
          "Auch bei Außenwänden gibt es Erleichterungen: Die Absätze 2 bis 4 des § 28 BauO NRW – etwa zu nichtbrennbaren Außenwänden und schwerentflammbaren Oberflächen – gelten nicht für GK 1 bis 3. Bei kleinen Wohngebäuden bleibt damit mehr Gestaltungsspielraum, ohne dass der bauliche Brandschutz insgesamt entfällt.",
        ],
      },
      {
        id: "treppen-flure",
        title: "Treppen, Treppenräume und notwendige Flure",
        paragraphs: [
          "Einer der praktisch wichtigsten Vorteile von GK 1 und 2: Notwendige Treppen dürfen ohne eigenen Treppenraum auskommen (§ 35 Abs. 2 BauO NRW). Das ist möglich, wenn die Treppe höchstens zwei Geschosse innerhalb derselben Nutzungseinheit verbindet und die Fläche pro Geschoss 200 Quadratmeter nicht überschreitet – vorausgesetzt, in jedem Geschoss gibt es einen weiteren Rettungsweg. Auch eine Außentreppe oder eine Treppe innerhalb einer Wohnung erfüllt die Voraussetzungen.",
          "Notwendige Flure sind in Wohngebäuden der GK 1 und 2 nicht erforderlich (§ 36 BauO NRW). In sonstigen kleinen Gebäuden derselben Klassen entfallen sie außerhalb des Kellers ebenfalls oft. Auch innerhalb von Wohnungen und in kleinen Büronutzungseinheiten bis 400 Quadratmeter braucht man in der Regel keinen notwendigen Flur.",
          "Einschiebbare Treppen und Leitern zum Dachraum ohne Aufenthaltsraum sind in GK 1 und 2 zulässig (§ 34 Abs. 1 BauO NRW) – in höheren Gebäudeklassen nicht mehr.",
          "Zwei Rettungswege je Nutzungseinheit und Geschoss bleiben nach § 33 BauO NRW Pflicht. In GK 1 und 2 lässt sich das aber oft einfacher lösen als in größeren Gebäuden. Mehr dazu im Ratgeber [Flucht und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw).",
        ],
      },
      {
        id: "brandwand-dach",
        title: "Brandwände, Deckenöffnungen und Dach",
        paragraphs: [
          "Statt einer vollwertigen Brandwand genügen in GK 1 bis 3 häufig hochfeuerhemmende oder feuerhemmende Gebäudeabschlusswände (§ 30 BauO NRW). Beim Doppelhaus ist die gemeinsame Wand zum Nachbarn deshalb kein Formalismus, sondern ein zentrales brandschutztechnisches Thema.",
          "Deckenöffnungen für Treppen ohne umlaufenden Treppenraum sind in GK 1 und 2 innerhalb derselben Nutzungseinheit bis 400 Quadratmeter und in höchstens zwei Geschossen zulässig, wenn die Öffnungen in der Decke fachgerecht abgeschlossen sind (§ 31 Abs. 6 BauO NRW).",
          "Weiche Bedachung ist in GK 1 bis 3 unter bestimmten Abstandsvoraussetzungen erlaubt (§ 32 BauO NRW). Bei Wohngebäuden der GK 1 und 2 gelten dafür verkürzte Abstände zur Grundstücksgrenze – sechs, neun oder zwölf Meter statt zwölf Meter bei weicher Bedachung in höheren Klassen.",
          "Auch die Abstandsflächen vor dem Gebäude sind milder: Vor Wohngebäuden der GK 1 und 2 mit höchstens drei oberirdischen Geschossen genügt eine Abstandsflächentiefe von drei Metern (§ 6 BauO NRW), nicht die sonst übliche Regel 0,4-mal Gebäudehöhe.",
        ],
      },
      {
        id: "technik",
        title: "Aufzüge, Leitungen und Lüftung",
        paragraphs: [
          "In GK 1 und 2 sind Aufzüge ohne eigenen Fahrschacht zulässig (§ 39 BauO NRW) – in höheren Gebäudeklassen nur eingeschränkt. Für Fahrschachtwände verlangt § 39 Abs. 2 bei GK 1 und 2 keine erhöhte Feuerwiderstandsklasse.",
          "Auch bei Leitungsdurchführungen (§ 40) und Lüftungsanlagen (§ 41) entfallen die strengeren Abschottungs- und Nichtbrennbarkeitsregeln für GK 1 und 2 – ebenso innerhalb von Wohnungen und innerhalb derselben Nutzungseinheit bis 400 Quadratmeter in zwei Geschossen. Das reduziert den Installationsaufwand spürbar.",
          "Ein Zweifamilienhaus mit Aufzug in der Wohnungstreppe und Leitungen innerhalb einer Nutzungseinheit liegt typisch im erlaubten Rahmen. Anders zwei Gewerbenutzungseinheiten à 250 Quadratmeter im selben Gebäude: Damit ist man in GK 3 und unterliegt den vollen Anforderungen der §§ 40 und 41.",
        ],
      },
      {
        id: "verfahren",
        title: "Genehmigungsfreistellung und Bauüberwachung",
        paragraphs: [
          "Viele kleine Gebäude der GK 1 und 2 können nach § 62 BauO NRW genehmigungsfrei gestellt werden – Wohngebäude bis einschließlich GK 4, sonstige Gebäude in GK 1 und 2. Voraussetzung ist, dass Bebauungsplan und Erschließung nichts entgegenstehen, keine Abweichung nach § 69 nötig ist und die Gemeinde nicht das vereinfachte Verfahren wählt.",
          "Die Gebäudeklasse allein reicht nicht, wenn Sonderbau nach § 50 greift, Wohnflächen 5.000 Quadratmeter überschreiten, mehr als 100 Besucher öffentlich zugänglich sind oder Sicherheitsabstände nach dem Bundes-Immissionsschutzgesetz gelten. Dann bleibt das Vorhaben genehmigungspflichtig – unabhängig von GK 1 oder 2.",
          "Für GK 1 und 2 – einschließlich zugehöriger Nebengebäude – entfällt nach § 84 Abs. 2 Satz 1 BauO NRW die Bauüberwachung. Stattdessen genügt eine Erklärung der Entwurfsverfassenden zum Brandschutz. Eine Bescheinigung einer sachverständigen Person nach § 87 Abs. 2 braucht man für Wohngebäude der GK 1 und 2 nicht – die technischen Nachweise müssen dennoch eingereicht werden.",
          "Wer die Pläne erstellt, braucht nicht zwingend einen Architekten oder Ingenieur: Nach § 71 Abs. 4a BauO NRW dürfen für GK 1 und 2 auch eingeschränkt Bauvorlageberechtigte – etwa Maurer-, Betonbauer- oder Zimmerer-Meister bei der Ingenieurkammer-Bau NRW – die Bauvorlagen einreichen.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fälle und Stolpersteine",
        paragraphs: [
          "Ein Doppelhaus mit zwei Eigentümern ist formal GK 2. Trotzdem muss die gemeinsame Wand zum Nachbarn als Brandwand oder Gebäudeabschlusswand nach § 30 geprüft werden. Der häufige Fehler: „Kleines Haus, da braucht man keinen Brandschutz.“ Genau das Gegenteil ist oft der Fall.",
          "Ein Zweifamilienhaus mit Gewerbe im Erdgeschoss kann bei getrennten Nutzungseinheiten und einer Höhe bis sieben Meter weiterhin GK 1 oder 2 bleiben. Sobald jedoch eine Gaststätte oder ein Betrieb mit vielen Besuchern dazukommt, greift die Sonderbau-Logik nach § 50 – und die Erleichterungen der kleinen Gebäudeklasse reichen nicht mehr.",
          "Ein Dachausbau mit neuem Aufenthaltsraum erhöht die OKF und kann das Gebäude schnell in GK 3 oder 4 schieben. Mit der höheren Klasse entfallen die Erleichterungen für Treppenraum, Feuerwiderstand und Genehmigungsfreistellung.",
          "Wer zwei Wohnungen zu einer zusammenlegt, senkt die Zahl der Nutzungseinheiten – die Fläche einer Einheit wächst dafür. Die Gebäudeklasse kann gleich bleiben, aber Rettungswege und die Wand zum Nachbarn müssen neu bewertet werden.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst die BauO-NRW-Vorschriften für Gebäudeklasse 1 und 2 zusammen – ohne VV TB NRW, Denkmalschutz oder die Sonderregeln des § 50. Verbindlich sind die eingereichten Pläne und die Festlegung der Bauaufsicht. Die Übersicht ersetzt keinen brandschutztechnischen Nachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gebaeudeklasse-3-brandschutz-bauo-nrw", label: "GK 3" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen Überblick" },
      { href: "/ratgeber/gebaeudeklassen-grenzfaelle-nrw", label: "GK-Grenzfälle" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Sonderbau" },
      { href: "/ratgeber/genehmigungsfrei-garage-freischank-bauo-nrw", label: "Genehmigungsfrei" },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen GK 1 und GK 2?",
        answer:
          "GK 1a und 1b gelten für freistehende Gebäude – 1b speziell für land- oder forstwirtschaftliche Nutzungen. GK 2 gilt für nicht freistehende Gebäude mit denselben Grenzen: sieben Meter Höhe, höchstens zwei Nutzungseinheiten und 400 Quadratmeter gesamt. Die brandschutztechnischen Erleichterungen sind in beiden Klassen weitgehend gleich.",
      },
      {
        question: "Braucht ein Zweifamilienhaus einen Treppenraum?",
        answer:
          "In GK 1 und 2 oft nicht. Nach § 35 Abs. 2 BauO NRW darf die notwendige Treppe ohne eigenen Treppenraum auskommen, wenn sie höchstens zwei Geschosse verbindet, die Fläche pro Geschoss 200 Quadratmeter nicht überschreitet und in jedem Geschoss ein zweiter Rettungsweg möglich ist.",
      },
      {
        question: "Ist GK 1 genehmigungsfrei?",
        answer:
          "In vielen Fällen ja – nach § 62 BauO NRW, sofern Bebauungsplan und Erschließung nichts entgegenstehen. Ausnahmen greifen bei Sonderbau, Wohnflächen über 5.000 Quadratmetern oder öffentlich zugänglichen Bereichen mit mehr als 100 Besuchern.",
      },
      {
        question: "Gilt feuerhemmend im Keller bei GK 1?",
        answer:
          "Ja. Im Kellergeschoss verlangt die BauO NRW für GK 1 und 2 feuerhemmende tragende Wände, Stützen und Decken – unabhängig davon, dass oberirdisch oft mildere Regeln gelten (§ 27 Abs. 3, § 31 Abs. 3).",
      },
      {
        question: "Brauche ich Trennwände zwischen den Wohnungen?",
        answer:
          "In Wohngebäuden der GK 1 und 2 entfallen Trennwände nach § 29 zwischen den Nutzungseinheiten. Beim Doppelhaus muss die gemeinsame Wand zum Nachbarn dennoch als Gebäudeabschluss- oder Brandwand geprüft werden.",
      },
      {
        question: "Wann wird aus GK 2 schnell GK 3?",
        answer:
          "Sobald eine dritte Nutzungseinheit dazukommt, die Gesamtfläche 400 Quadratmeter überschreitet, die OKF über sieben Meter steigt oder größere Gewerbeeinheiten entstehen. Dann entfallen die Erleichterungen für Treppenraum, Feuerwiderstand und Genehmigungsfreistellung.",
      },
      {
        question: "Reicht GK 1 für ein Restaurant?",
        answer:
          "Formal kann die Gebäudeklasse passen. Ab 200 Gastplätzen oder anderen Tatbeständen des § 50 gilt das Restaurant jedoch als Sonderbau – dann braucht man ein eigenes brandschutztechnisches Konzept, unabhängig von GK 1 oder 2.",
      },
      {
        question: "Wer darf Pläne für GK 1 und 2 erstellen?",
        answer:
          "Neben Architekten und Ingenieuren dürfen nach § 71 Abs. 4a BauO NRW auch eingeschränkt Bauvorlageberechtigte die Pläne erstellen – etwa Maurer-, Betonbauer- oder Zimmerer-Meister bei der Ingenieurkammer-Bau NRW.",
      },
    ],
  },
  {
    slug: "gebaeudeklasse-3-brandschutz-bauo-nrw",
    title: "Gebäudeklasse 3: Brandschutz und Anforderungen nach BauO NRW",
    excerpt:
      "Mehr als zwei Nutzungseinheiten, mehr als 400 Quadratmeter oder Gewerbe bis sieben Meter Höhe: Gebäudeklasse 3 bedeutet Treppenraum, Trennwände und volle Fluranforderungen – mit Unterschieden zwischen Wohn- und Nichtwohngebäuden.",
    metaTitle: "Gebäudeklasse 3 NRW Brandschutz | H&S+",
    metaDescription:
      "Gebäudeklasse 3 BauO NRW: Einordnung, Treppenraum, Trennwände §29, Keller feuerbeständig, Genehmigung Gewerbe vs. Wohnen – Brandschutz für kleine Gebäude bis 7 m in NRW.",
    keywords: [
      "Gebäudeklasse 3",
      "GK 3 NRW",
      "Gebäudeklasse 3 Brandschutz",
      "Mehrfamilienhaus GK 3",
      "Treppenraum GK 3",
      "Gewerbegebäude 7 m",
      "Trennwände § 29",
      "Genehmigungsfrei Wohngebäude GK 3",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Wann gilt Gebäudeklasse 3?",
        paragraphs: [
          "Gebäudeklasse 3 ist die Restkategorie für kleine Gebäude bis sieben Meter Höhe. Sie gilt, wenn ein Gebäude weder in GK 1 noch in GK 2 fällt, aber die OKF-Grenze von sieben Metern nicht überschreitet (§ 2 Abs. 3 BauO NRW). Anders als bei GK 1 und 2 gibt es keine Begrenzung auf zwei Nutzungseinheiten oder 400 Quadratmeter Brutto-Grundfläche gesamt.",
          "Typische Fälle: ein Mehrfamilienhaus mit drei oder mehr Wohnungen, ein kleines Geschäftshaus mit mehreren Mietparteien, ein Gewerbebau mit mehr als 400 Quadratmetern Gesamtfläche – alles bei einer Höhe bis sieben Meter. Wer die Grenzen von GK 1 und 2 kennt, findet die Abgrenzung im Ratgeber [GK 1 und 2](/ratgeber/gebaeudeklasse-1-2-brandschutz-bauo-nrw). Die Gesamtübersicht steht unter [Gebäudeklassen GK 1–5](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw).",
          "Die Höhe bemisst sich nach der Fußbodenoberkante des höchstgelegenen Geschosses, in dem ein Aufenthaltsraum möglich ist – nicht nach der Dachkante. Ein Dachgeschoss ohne nutzbaren Aufenthaltsraum zählt für die GK-Einordnung nicht mit. Steigt die OKF durch einen Dachausbau über sieben Meter, springt das Gebäude in GK 4.",
          "Ein Reihenhaus mit drei Wohneinheiten und 5,5 Metern OKF ist GK 3, obwohl es nur sieben Meter hoch ist. Ein freistehendes Gebäude mit zwei Wohnungen und 380 Quadratmetern Gesamtfläche bleibt dagegen GK 1a – hier entscheidet die Zahl der Nutzungseinheiten und die Freistehendheit, nicht allein die Höhe.",
        ],
      },
      {
        id: "verschaerfung",
        title: "Was sich gegenüber GK 1 und 2 verschärft",
        paragraphs: [
          "Gebäudeklasse 3 ist der Wendepunkt in der Serie: Viele Erleichterungen, die GK 1 und 2 so planungsfreundlich machen, entfallen. Das betrifft vor allem die bauliche Trennung von Nutzungseinheiten, die Rettungswege und die technischen Installationen.",
          "Trennwände nach § 29 BauO NRW gelten in GK 3 vollständig – auch in Wohngebäuden. Zwischen Wohnungen, zwischen Wohnung und Gewerbe und in Kellern braucht man feuerhemmende oder feuerbeständige Trennwände, je nach Lage. In GK 1 und 2 entfielen diese Anforderungen in Wohngebäuden komplett.",
          "Notwendige Treppen brauchen in GK 3 einen eigenen Treppenraum (§ 35 Abs. 1 BauO NRW). Die Ausnahme ohne Treppenraum aus § 35 Abs. 2 gilt nur für GK 1 und 2. Ebenso sind notwendige Flure nach § 36 Pflicht – mit Rauchabschnitten, feuerhemmenden Wänden und rauchdichten, selbstschließenden Türen.",
          "Aufzüge ohne Fahrschacht, Leitungsdurchführungen ohne Abschottung und Lüftungsleitungen aus brennbaren Materialien sind in GK 3 nicht mehr erlaubt, soweit sie in GK 1 und 2 noch zulässig waren (§§ 39, 40, 41). Deckenöffnungen für offene Treppen innerhalb einer Nutzungseinheit sind nach § 31 Abs. 6 nur in GK 1 und 2 möglich.",
        ],
      },
      {
        id: "feuerwiderstand",
        title: "Feuerwiderstand: Keller wird strenger",
        paragraphs: [
          "Oberirdisch verlangt § 27 Abs. 2 BauO NRW für tragende Wände und Stützen in GK 3 feuerhemmende Bauteile (F 30) – wie bereits in GK 2. Decken zwischen den Geschossen sind ebenfalls feuerhemmend (§ 31 Abs. 2). Das ist der Normalfall für kleine Mehrparteienhäuser und Gewerbebauten.",
          "Der entscheidende Sprung liegt im Keller: In GK 3 müssen tragende Wände, Stützen und Decken im Kellergeschoss feuerbeständig sein (F 90) – nicht nur feuerhemmend wie in GK 1 und 2 (§ 27 Abs. 3, § 31 Abs. 3). Wer einen Keller mit Aufenthaltsräumen oder Gewerbenutzung plant, trifft in GK 3 deutlich höhere Anforderungen an die tragende Konstruktion.",
          "Trennwände zwischen Nutzungseinheiten müssen mindestens feuerhemmend sein, in Räumen mit Explosions- oder erhöhter Brandgefahr feuerbeständig (§ 29 Abs. 2 und 3). Bei einem kleinen Geschäftshaus mit Wohnungen im Obergeschoss und Laden im Erdgeschoss trennt eine feuerhemmende Wand die Nutzungseinheiten – in GK 1/2 wäre das in einem reinen Wohngebäude entbehrlich.",
          "In Räumen mit Explosions- oder erhöhter Brandgefahr verlangt § 31 Abs. 4 feuerbeständige Decken – die Ausnahme für Wohngebäude GK 1 und 2 gilt für GK 3 nicht, wenn es kein reines Wohngebäude dieser Klassen ist.",
        ],
      },
      {
        id: "treppen-flure",
        title: "Treppenräume, Flure und Rettungswege",
        paragraphs: [
          "Jede notwendige Treppe in GK 3 liegt in einem eigenen, durchgehenden Treppenraum (§ 35 Abs. 1 BauO NRW). Die Wände dieses Treppenraums sind feuerhemmend; im Keller feuerbeständig, wenn dort tragende Bauteile feuerbeständig sein müssen. Einschiebbare Treppen zum Dachraum sind in GK 3 unzulässig – anders als in GK 1 und 2 (§ 34 Abs. 1).",
          "Notwendige Flure verbinden die Wohnungen oder Büros mit dem Treppenraum und müssen in Rauchabschnitte unterteilt sein – maximal 30 Meter Länge pro Abschnitt, mit rauchdichten, selbstschließenden Abschlüssen (§ 36 BauO NRW). In der Praxis bedeutet das: T30-RS-Türen im Flur, durchdachte Flurführung und keine offenen Durchbrüche ohne brandschutztechnische Bewertung.",
          "Zwei Rettungswege je Nutzungseinheit und Geschoss bleiben Pflicht (§ 33 BauO NRW). Der erste führt über die notwendige Treppe, der zweite über eine weitere Treppe oder – mit Abstimmung mit der Feuerwehr – über Rettung von außen. Mehr zur Umsetzung im Ratgeber [Flucht und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw).",
          "Die tragenden Teile notwendiger Treppen müssen in GK 3 aus nichtbrennbaren Baustoffen oder feuerhemmend sein (§ 34 Abs. 3). Außentreppen als zweiter Rettungsweg brauchen in GK 3 nichtbrennbare tragende Teile – in GK 1 und 2 reichte teils feuerhemmend.",
        ],
      },
      {
        id: "aussen-dach",
        title: "Außenwände, Dach und Abstandsflächen",
        paragraphs: [
          "Für Außenwände gelten in GK 3 weiterhin die Erleichterungen der GK 1 bis 3: Die Absätze 2 bis 4 des § 28 BauO NRW zu nichtbrennbaren Außenwänden entfallen. Dagegen gilt für Balkonbekleidungen und Solaranlagen an Außenwänden die Schwerentflammbarkeitsregel des § 28 Abs. 4 Satz 2 – diese Erleichterung betrifft nur GK 1 und 2, nicht GK 3.",
          "Weiche Bedachung ist in GK 3 grundsätzlich möglich, aber mit den vollen Abständen nach § 32 BauO NRW: mindestens zwölf Meter zur Grundstücksgrenze, fünfzehn Meter zu Gebäuden mit harter Bedachung auf demselben Grundstück, 24 Meter zu Gebäuden mit weicher Bedachung. Die verkürzten Abstände von sechs, neun oder zwölf Metern gelten nur für Wohngebäude der GK 1 und 2.",
          "Abstandsflächen vor dem Gebäude bemisst sich in GK 3 nach der Regel 0,4-mal Wandhöhe, mindestens drei Meter (§ 6 BauO NRW). Die pauschale Drei-Meter-Regel ohne Höhenbezug gilt nur für Wohngebäude der GK 1 und 2 mit höchstens drei oberirdischen Geschossen.",
          "Brandwände und Gebäudeabschlusswände folgen in GK 1 bis 3 dem gleichen Muster: Statt voller Brandwänden genügen hochfeuerhemmende oder feuerhemmende Abschlusswände (§ 30). Brandwände müssen mindestens bis unter die Dachhaut geführt werden – nicht 30 Zentimeter darüber wie in höheren Klassen.",
        ],
      },
      {
        id: "technik",
        title: "Aufzüge, Leitungen und Lüftung",
        paragraphs: [
          "Fahrschachtwände von Aufzügen müssen in GK 3 feuerhemmend sein (§ 39 BauO NRW). Aufzüge ohne eigenen Fahrschacht sind nur noch in GK 1 und 2 zulässig – in GK 3 braucht jeder Aufzug einen Fahrschacht mit den entsprechenden Anforderungen an die Wände.",
          "Leitungsdurchführungen durch feuerhemmende oder feuerbeständige Bauteile erfordern in GK 3 Abschottungen oder andere brandschutztechnische Vorkehrungen (§ 40 BauO NRW). Die Erleichterung für Leitungen innerhalb von Wohnungen oder kleinen Nutzungseinheiten bis 400 Quadratmeter in zwei Geschossen gilt nicht. In notwendigen Treppenräumen und Fluren sind Leitungen nur zulässig, wenn der Rettungsweg im Brandfall ausreichend lang nutzbar bleibt.",
          "Lüftungsleitungen und deren Bekleidungen müssen in GK 3 aus nichtbrennbaren Baustoffen bestehen (§ 41 Abs. 2). Überbrückungen von feuerhemmenden oder feuerbeständigen Bauteilen durch Lüftungskanäle brauchen brandschutztechnische Vorkehrungen. Die Ausnahmen für GK 1 und 2 entfallen vollständig.",
          "Für Müll- und Abfallräume in GK 3 bis 5 gelten besondere Anforderungen: Trennwände und Decken mit der Feuerwiderstandsfähigkeit der tragenden Wände, feuerhemmende selbstschließende Abschlüsse und Entleerung direkt ins Freie (§ 44 BauO NRW).",
        ],
      },
      {
        id: "verfahren",
        title: "Genehmigung, Bauüberwachung und Planer",
        paragraphs: [
          "Bei der Genehmigungspflicht macht GK 3 einen wichtigen Unterschied zwischen Wohn- und Nichtwohngebäuden. Wohngebäude der GK 3 können nach § 62 BauO NRW – wie GK 4 – genehmigungsfrei gestellt sein, wenn Bebauungsplan, Erschließung und die üblichen Ausnahmen (Sonderbau, 5.000 Quadratmeter Wohnen, 100 Besucher, BImSchG) nicht greifen.",
          "Sonstige Gebäude der GK 3 – etwa kleine Gewerbebauten, Bürohäuser oder Mehrparteienhäuser, die formal keine Wohngebäude sind – unterliegen der Baugenehmigungspflicht. Sie fallen nicht unter die Kategorie „sonstige Gebäude der GK 1 und 2“.",
          "Für Wohngebäude der GK 3 genügt nach § 84 Abs. 2 Satz 1 BauO NRW eine Erklärung der Entwurfsverfassenden zum Brandschutz – keine vollständige Bauüberwachung. Für nicht verfahrensfreie Nichtwohngebäude der GK 3 gelten die Regeln der Bauüberwachung vollständig. Eine Bescheinigung einer sachverständigen Person nach § 87 Abs. 2 entfällt nur bei Wohngebäuden GK 1 und 2 – in GK 3 kann sie verlangt werden.",
          "Pläne für GK 3 dürfen nicht von eingeschränkt Bauvorlageberechtigten (Maurer-, Zimmerer-Meister) erstellt werden – das gilt nur für GK 1 und 2 (§ 71 Abs. 4a). Hier braucht man die allgemeine Bauvorlageberechtigung durch Architekten oder eingetragene Ingenieure. Ab drei oberirdischen Geschossen kann zudem ein Aufzug Pflicht werden (§ 39).",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fälle und Stolpersteine",
        paragraphs: [
          "Ein kleines Mehrfamilienhaus mit vier Wohnungen und 6,2 Metern OKF ist klassisch GK 3. Viele Bauherren erwarten die einfachen Regeln eines Zweifamilienhauses – tatsächlich braucht man Treppenraum, Trennwände zwischen den Wohnungen, notwendige Flure und feuerbeständige Kellerbauteile.",
          "Ein Geschäftshaus mit drei Mietparteien à 150 Quadratmeter und 6,5 Metern Höhe ist GK 3 und in der Regel genehmigungspflichtig. Hier kommen volle §-29-Trennwände, Treppenraum, Flure mit Rauchabschnitten und die Bauüberwachung nach § 84 hinzu – deutlich mehr Aufwand als bei einem genehmigungsfreien Wohngebäude derselben Klasse.",
          "Wer in einem bestehenden GK-2-Gebäude eine dritte Wohnung einbaut, wechselt in GK 3. Die baulichen Folgen sind erheblich: Trennwände nach § 29 nachrüsten, Treppenraum schaffen oder prüfen, Flure und Rettungswege neu bewerten, Keller auf feuerbeständige Bauteile umstellen.",
          "Ein Wohngebäude GK 3 mit Gastronomie im Erdgeschoss kann formal genehmigungsfrei bleiben – aber ab 200 Gastplätzen oder anderen Tatbeständen des § 50 wird der Gastronomiebereich Sonderbau. Dann braucht man ein eigenes Konzept, unabhängig von der günstigen GK-3-Einordnung des Wohnanteils. Mehr dazu unter [Sonderbau](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst die BauO-NRW-Vorschriften für Gebäudeklasse 3 zusammen – ohne VV TB NRW, Denkmalschutz, Barrierefreiheitsdetails nach § 49 oder Sonderbau-Regeln. Verbindlich sind die eingereichten Pläne und die Festlegung der Bauaufsicht. Die Übersicht ersetzt keinen brandschutztechnischen Nachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gebaeudeklasse-1-2-brandschutz-bauo-nrw", label: "GK 1 und 2" },
      { href: "/ratgeber/gebaeudeklasse-4-brandschutz-bauo-nrw", label: "GK 4" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen Überblick" },
      { href: "/ratgeber/gebaeudeklassen-grenzfaelle-nrw", label: "GK-Grenzfälle" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Sonderbau" },
    ],
    faq: [
      {
        question: "Ab wann ist ein Gebäude GK 3 statt GK 1 oder 2?",
        answer:
          "Sobald mehr als zwei Nutzungseinheiten vorhanden sind, die Gesamtfläche 400 Quadratmeter überschreitet oder das Gebäude nicht freistehend ist und gleichzeitig die GK-2-Grenzen sprengt – bei einer Höhe bis sieben Meter. GK 3 ist die Kategorie für alle übrigen kleinen Gebäude bis 7 m.",
      },
      {
        question: "Braucht GK 3 einen Treppenraum?",
        answer:
          "Ja, grundsätzlich. Die Ausnahme ohne eigenen Treppenraum nach § 35 Abs. 2 BauO NRW gilt nur für GK 1 und 2. In GK 3 muss jede notwendige Treppe in einem eigenen, durchgehenden Treppenraum liegen.",
      },
      {
        question: "Ist ein Wohngebäude GK 3 genehmigungsfrei?",
        answer:
          "In vielen Fällen ja – Wohngebäude der GK 3 bis 4 können nach § 62 BauO NRW genehmigungsfrei gestellt sein, wenn Bebauungsplan, Erschließung und Ausnahmen (Sonderbau, 5.000 m², 100 Besucher) nicht greifen. Gewerbegebäude der GK 3 sind dagegen genehmigungspflichtig.",
      },
      {
        question: "Warum ist der Keller in GK 3 strenger als in GK 1/2?",
        answer:
          "In GK 3 müssen tragende Wände, Stützen und Decken im Kellergeschoss feuerbeständig sein (F 90) – in GK 1 und 2 nur feuerhemmend (F 30). Das ist einer der wichtigsten technischen Unterschiede zwischen den Klassen.",
      },
      {
        question: "Brauche ich Trennwände zwischen Wohnungen in GK 3?",
        answer:
          "Ja. § 29 Abs. 6 entlastet nur Wohngebäude der GK 1 und 2. In GK 3 gelten Trennwände zwischen Nutzungseinheiten vollständig – mindestens feuerhemmend, in Brandgefahrräumen feuerbeständig.",
      },
      {
        question: "Darf ein Maurermeister Pläne für GK 3 erstellen?",
        answer:
          "Nein. Die eingeschränkte Bauvorlageberechtigung nach § 71 Abs. 4a gilt nur für GK 1 und 2. Für GK 3 braucht man die allgemeine Bauvorlageberechtigung – Architekt oder eingetragener Ingenieur bei der Ingenieurkammer-Bau NRW.",
      },
      {
        question: "Gilt weiche Bedachung in GK 3?",
        answer:
          "Ja, unter Abstandsvoraussetzungen nach § 32 BauO NRW – aber mit den vollen Abständen (mindestens 12 m zur Grundstücksgrenze). Die verkürzten Abstände für Wohngebäude GK 1/2 gelten nicht.",
      },
      {
        question: "Wann wird aus GK 3 schnell GK 4?",
        answer:
          "Sobald die OKF sieben Meter überschreitet – typisch durch Dachausbau mit Aufenthaltsraum. GK 4 gilt bis 13 Meter Höhe; dann steigen auch die Anforderungen an tragende Bauteile und Brandwände weiter.",
      },
    ],
  },
  {
    slug: "gebaeudeklasse-4-brandschutz-bauo-nrw",
    title: "Gebäudeklasse 4: Wann gilt sie? Brandschutz nach BauO NRW",
    excerpt:
      "Dachausbau, vier Geschosse oder Geschäftshaus bis 13 Meter: Gebäudeklasse 4 bedeutet hochfeuerhemmende (F 60) Bauteile, harte Bedachung und volle Außenwandregeln – mit Unterschieden zwischen Wohn- und Gewerbebau bei Genehmigung und Bauüberwachung.",
    metaTitle: "Gebäudeklasse 4: Ab wann? Dachausbau & 13 m | H&S+",
    metaDescription:
      "Ab wann GK 4 nach BauO NRW? Dachausbau, 4 Geschosse, bis 13 m: F60, harte Bedachung, Treppenraum – und wann Wohnen genehmigungsfrei ist, Gewerbe nicht.",
    keywords: [
      "Gebäudeklasse 4",
      "ab wann Gebäudeklasse 4",
      "GK 4 NRW",
      "Gebäudeklasse 4 Brandschutz",
      "Dachausbau Gebäudeklasse 4",
      "Unterschied GK 3 GK 4",
      "Gebäudeklasse 4 genehmigungsfrei",
      "Mehrfamilienhaus 4 Geschosse",
      "harte Bedachung GK 4",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Wann gilt Gebäudeklasse 4?",
        paragraphs: [
          "Gebäudeklasse 4 ist die Kategorie für mittelhohe Gebäude in NRW: Die Höhe nach § 2 Abs. 3 BauO NRW liegt über sieben Metern, aber bei höchstens 13 Metern – gemessen an der Fußbodenoberkante des höchstgelegenen Geschosses, in dem ein Aufenthaltsraum möglich ist. Jede Nutzungseinheit darf in einem Geschoss höchstens 400 Quadratmeter Brutto-Grundfläche haben; Kellerflächen zählen nicht mit.",
          "Anders als bei GK 1 und 2 gibt es keine Obergrenze von zwei Nutzungseinheiten. Ein viergeschossiges Mehrfamilienhaus mit acht Wohnungen à 95 Quadratmeter und 11,5 Metern OKF ist typisch GK 4. Ein Geschäftshaus mit drei Mietparteien pro Etage und 12 Metern Höhe ebenfalls – solange keine Nutzungseinheit in einem Geschoss die 400-Quadratmeter-Grenze sprengt.",
          "Die Abgrenzung zu GK 3 liegt an der Höhe: Bleibt die OKF bei sieben Metern oder darunter, gilt GK 3 – unabhängig von der Zahl der Wohnungen. Steigt sie durch Dachausbau oder zusätzliches Vollgeschoss über sieben Meter, springt das Gebäude in GK 4. Ab 13 Meter OKF beginnt Gebäudeklasse 5. Wer die niedrigeren Klassen kennt, findet die Vorstufen unter [GK 3](/ratgeber/gebaeudeklasse-3-brandschutz-bauo-nrw) und [GK 1 und 2](/ratgeber/gebaeudeklasse-1-2-brandschutz-bauo-nrw). Die Gesamtübersicht: [Gebäudeklassen GK 1–5](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw).",
          "Hochhäuser mit mehr als 22 Metern Höhe sind Sonderbauten und in der Regel GK 5 – nicht GK 4. Ein Gebäude der GK 4 kann dennoch Sonderbau werden, wenn es Tatbestände des § 50 erfüllt – etwa eine Verkaufsstätte über 2.000 Quadratmeter oder eine Versammlungsstätte. Dann kommen zusätzliche Anforderungen aus SBauVO und Brandschutzkonzept hinzu.",
        ],
      },
      {
        id: "verschaerfung",
        title: "Was sich gegenüber GK 3 verschärft",
        paragraphs: [
          "Gebäudeklasse 4 ist der nächste Sprung in der Feuerwiderstandskette. Oberirdisch verlangen tragende Wände, Stützen und Decken nicht mehr feuerhemmende, sondern hochfeuerhemmende (F 60) Bauteile (§ 27 Abs. 2, § 31 Abs. 2 BauO NRW). Im Kellergeschoss bleibt es bei feuerbeständig – wie bereits in GK 3.",
          "Außenwände unterliegen in GK 4 den vollen Regeln des § 28 BauO NRW: Nichttragende Außenwände aus nichtbrennbaren Baustoffen, Oberflächen schwerentflammbar, Balkonbekleidungen und mehrgeschossige Solaranlagen schwerentflammbar. Die Erleichterungen für GK 1 bis 3 entfallen. Hinterlüftete Fassaden aus normalentflammbaren Baustoffen nach § 28 Abs. 5 sind nur in den niedrigeren Klassen zulässig.",
          "Weiche Bedachung ist in GK 4 nicht mehr erlaubt – es gilt durchgehend harte Bedachung nach § 32 BauO NRW. In GK 3 war Bitumen oder Gründach noch unter Abstandsvoraussetzungen möglich; in GK 4 nicht mehr.",
          "Brandwände müssen mindestens 30 Zentimeter über die Bedachung geführt oder mit feuerbeständiger Platte abgeschlossen werden (§ 30 Abs. 5) – nicht nur bis unter die Dachhaut wie in GK 1 bis 3. Statt voller Brandwänden genügen in GK 4 hochfeuerhemmende Wände, die auch unter zusätzlicher mechanischer Beanspruchung standhalten (§ 30 Abs. 3).",
        ],
      },
      {
        id: "feuerwiderstand",
        title: "Feuerwiderstand: hochfeuerhemmend (F 60) oberirdisch",
        paragraphs: [
          "Tragende und aussteifende Wände und Stützen oberirdisch müssen in GK 4 hochfeuerhemmend sein (F 60) – nicht nur feuerhemmend wie in GK 3 (§ 27 Abs. 2). Im Dachraum gelten diese Anforderungen nur, wenn darüber noch Aufenthaltsräume möglich sind; Balkone und Altane sind ausgenommen, außer offene Gänge als notwendige Flure.",
          "Decken zwischen den Geschossen sind ebenfalls hochfeuerhemmend (F 60) nach § 31 Abs. 2 BauO NRW. Im Kellergeschoss bleiben tragende Wände, Stützen und Decken feuerbeständig (F 90) – wie in GK 3 bis 5. Räume mit Explosions- oder erhöhter Brandgefahr brauchen feuerbeständige Decken; die Ausnahme für reine Wohngebäude GK 1 und 2 gilt nicht.",
          "Trennwände nach § 29 gelten in GK 4 vollständig – die Erleichterung für Wohngebäude GK 1 und 2 entfällt. Zwischen Nutzungseinheiten, zu Brandgefahrräumen und zwischen Aufenthaltsräumen und Kellern braucht man feuerhemmende oder feuerbeständige Trennwände, je nach Lage.",
          "Die tragenden Teile notwendiger Treppen müssen in GK 4 aus nichtbrennbaren Baustoffen bestehen – die Alternative feuerhemmend wie in GK 3 gibt es nicht mehr (§ 34 Abs. 3). Außentreppen als zweiter Rettungsweg brauchen ebenfalls nichtbrennbare tragende Teile.",
        ],
      },
      {
        id: "treppen-flure",
        title: "Treppenräume, Flure und Rettungswege",
        paragraphs: [
          "Jede notwendige Treppe liegt in einem eigenen Treppenraum (§ 35 Abs. 1 BauO NRW). Die Ausnahme ohne Treppenraum aus § 35 Abs. 2 gilt nur für GK 1 und 2 – in GK 4 ist ein notwendiger Treppenraum Pflicht. Die Wände dieses Treppenraums sind hochfeuerhemmend (F 60), auch unter zusätzlicher mechanischer Beanspruchung (§ 35 Abs. 2 Satz 2 Nr. 2).",
          "In GK 4 und 5 sind besondere Vorkehrungen für die Nutzung als Rettungsweg erforderlich – etwa Rauchableitung mit mindestens einem Quadratmeter freiem Querschnitt je Treppenraum (§ 35 Abs. 3). In Geschossen mit mehr als vier Wohnungen müssen notwendige Flure angeordnet sein (§ 35 Abs. 4).",
          "Notwendige Flure nach § 36 BauO NRW gelten vollständig – mit Rauchabschnitten, feuerhemmenden Wänden und feuerbeständigen Wänden im Keller. Die Ausnahmen für Wohngebäude GK 1 und 2 entfallen. Zwei Rettungswege je Nutzungseinheit bleiben Pflicht (§ 33); Details im Ratgeber [Flucht und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw). Bei Dachgeschosswohnungen kann der zweite Weg über [Dachfenster und Feuerwehr](/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw) oder einen [Innenhof](/ratgeber/zweiter-rettungsweg-innenhof-bauo-nrw) führen.",
          "Einschiebbare Treppen und Rolltreppen sind in GK 4 unzulässig (§ 34 Abs. 1). Aufzüge ohne eigenen Fahrschacht sind nur in GK 1 und 2 erlaubt – in GK 4 braucht jeder Aufzug einen Fahrschacht mit hochfeuerhemmenden (F 60) Wänden (§ 39). Ab mehr als drei oberirdischen Geschossen kann ein Aufzug Pflicht werden.",
        ],
      },
      {
        id: "aussen-grundstueck",
        title: "Außenwände, Dach, Abstand und Erschließung",
        paragraphs: [
          "Harte Bedachung ist in GK 4 zwingend (§ 32 BauO NRW). Wer ein Dachgeschoss ausbaut und damit in GK 4 wechselt, muss oft die gesamte Dachkonstruktion auf harte Bedachung umstellen – nicht nur den neuen Bereich.",
          "Abstandsflächen bemisst sich nach 0,4-mal Wandhöhe, mindestens drei Meter (§ 6 BauO NRW). Die pauschale Drei-Meter-Regel ohne Höhenbezug gilt nur für Wohngebäude GK 1 und 2. Bei einem viergeschossigen Haus mit zwölf Metern OKF sind das mindestens 4,8 Meter Abstandsflächentiefe.",
          "Die Erleichterung für Wohnwege – Befahrbarkeit erst ab 50 Metern Länge – gilt nur für GK 1 bis 3 (§ 4 BauO NRW). In GK 4 muss die Feuerwehrzufahrt von Anfang an befahrbar sein. Mehr dazu: [Feuerwehrzufahrt und Zugang](/ratgeber/feuerwehrzufahrt-zugaenge-runderlass-bauo-nrw).",
          "Aufenthaltsräume brauchen mindestens 2,40 Meter lichte Raumhöhe (§ 46 BauO NRW). Die Erleichterung auf 2,30 Meter gilt nur für Wohngebäude GK 1 und 2. Im Dachraum und Keller genügen 2,20 Meter über der Hälfte der Netto-Raumfläche.",
        ],
      },
      {
        id: "technik",
        title: "Aufzüge, Leitungen und Lüftung",
        paragraphs: [
          "Fahrschachtwände von Aufzügen müssen in GK 4 hochfeuerhemmend sein (§ 39 BauO NRW) – nicht nur feuerhemmend wie in GK 3. Leitungsdurchführungen durch feuerwiderstandsfähige Bauteile erfordern brandschutztechnische Vorkehrungen; die Erleichterungen für GK 1 und 2 entfallen (§ 40).",
          "Lüftungsleitungen und Dämmstoffe müssen aus nichtbrennbaren Baustoffen bestehen (§ 41 Abs. 2). Die Ausnahmen für GK 1 und 2 gelten nicht. In notwendigen Treppenräumen und Fluren sind Leitungen nur zulässig, wenn der Rettungsweg im Brandfall ausreichend lang nutzbar bleibt.",
          "Müll- und Abfallräume in GK 3 bis 5 brauchen Trennwände und Decken mit entsprechender Feuerwiderstandsfähigkeit, feuerhemmende selbstschließende Abschlüsse und Entleerung ins Freie (§ 44 BauO NRW).",
          "Wintergärten bis 30 Quadratmeter und Installationsschächte, die Geschosse überbrücken, sind in GK 4 nicht genehmigungsfrei – die Erleichterungen nach § 79 gelten nur für GK 1 bis 3.",
        ],
      },
      {
        id: "verfahren",
        title: "Genehmigung, Bauüberwachung und Planer",
        paragraphs: [
          "Wohngebäude der GK 4 können nach § 62 BauO NRW genehmigungsfrei gestellt sein – wie GK 3 –, wenn Bebauungsplan, Erschließung und die üblichen Ausnahmen (Sonderbau § 50, 5.000 Quadratmeter Wohnen, 100 Besucher, BImSchG) nicht greifen.",
          "Sonstige Gebäude der GK 4 – Büro-, Gewerbe- oder Mehrzweckbauten – bedürfen der Baugenehmigung. Sie fallen nicht unter die Kategorie „sonstige Gebäude der GK 1 und 2“. Ein viergeschossiges Geschäftshaus mit Laden und Büros ist damit in der Regel genehmigungspflichtig, ein vergleichbares Wohnhaus oft nicht.",
          "Für Wohngebäude der GK 4 gilt die vollständige Bauüberwachung nach § 84 Abs. 2 Satz 1 BauO NRW – nicht die vereinfachte Erklärung der Entwurfsverfassenden wie bei Wohngebäuden GK 3. Eine Bescheinigung der sachverständigen Person nach § 87 Abs. 2 entfällt nur bei Wohngebäuden GK 1 und 2 – in GK 4 kann sie verlangt werden.",
          "Pläne dürfen nicht von eingeschränkt Bauvorlageberechtigten erstellt werden (§ 71 Abs. 4a). Für GK 4 braucht man die allgemeine Bauvorlageberechtigung – Architekt oder eingetragener Ingenieur bei der Ingenieurkammer-Bau NRW.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fälle und Stolpersteine",
        paragraphs: [
          "Ein viergeschossiges Mehrfamilienhaus mit 16 Wohnungen und 11 Metern OKF ist klassisch GK 4. Viele Bauherren kennen die Regeln aus einem dreigeschossigen GK-3-Haus – tatsächlich steigen Feuerwiderstand, Außenwandanforderungen und Dachkonstruktion deutlich. Hochfeuerhemmende Decken und Treppenraumwände sind der größte Kostenfaktor.",
          "Ein Dachausbau, der die OKF von 6,8 auf 8,2 Meter hebt, schiebt ein bisheriges GK-3-Gebäude in GK 4. Die Folgen: harte Bedachung, hochfeuerhemmende tragende Bauteile oberirdisch, volle §-28-Außenwandregeln und vollständige Bauüberwachung bei Wohngebäuden.",
          "Ein Geschäftshaus mit vier Etagen, drei Mietparteien pro Etage à 120 Quadratmeter und 12 Metern Höhe ist GK 4 und genehmigungspflichtig. Hier kommen neben den baulichen Anforderungen volle Bauüberwachung, Sachverständigenbescheinigung und Architektenpflicht hinzu.",
          "Ein Wohngebäude GK 4 mit Gastronomie im Erdgeschoss kann formal genehmigungsfrei bleiben – ab 200 Gastplätzen oder anderen Tatbeständen des § 50 wird der Gastronomiebereich jedoch Sonderbau. Mehr unter [Sonderbau](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst die BauO-NRW-Vorschriften für Gebäudeklasse 4 zusammen – ohne VV TB NRW, Denkmalschutz, Barrierefreiheitsdetails nach § 49 oder Sonderbau-Regeln. Verbindlich sind die eingereichten Pläne und die Festlegung der Bauaufsicht. Die Übersicht ersetzt keinen brandschutztechnischen Nachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gebaeudeklasse-3-brandschutz-bauo-nrw", label: "GK 3" },
      { href: "/ratgeber/gebaeudeklasse-5-brandschutz-bauo-nrw", label: "GK 5" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen Überblick" },
      { href: "/ratgeber/gebaeudeklassen-grenzfaelle-nrw", label: "GK-Grenzfälle" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw", label: "Rettungsweg Dachfenster" },
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Sonderbau" },
    ],
    faq: [
      {
        question: "Ab wann ist ein Gebäude GK 4 statt GK 3?",
        answer:
          "Sobald die OKF nach § 2 Abs. 3 BauO NRW sieben Meter überschreitet – typisch durch Dachausbau oder zusätzliches Vollgeschoss. GK 4 gilt bis 13 Meter Höhe, solange jede Nutzungseinheit in einem Geschoss höchstens 400 Quadratmeter hat.",
      },
      {
        question: "Was ist der wichtigste Unterschied zu GK 3?",
        answer:
          "Oberirdisch verlangt GK 4 hochfeuerhemmende tragende Wände, Stützen und Decken (F 60) statt feuerhemmend (F 30). Dazu kommen harte Bedachung, volle Außenwandregeln nach § 28 und Brandwände 30 cm über die Bedachung.",
      },
      {
        question: "Ist ein Wohngebäude GK 4 genehmigungsfrei?",
        answer:
          "In vielen Fällen ja – Wohngebäude der GK 4 können nach § 62 BauO NRW genehmigungsfrei gestellt sein, wenn Bebauungsplan, Erschließung und Ausnahmen (Sonderbau, 5.000 m², 100 Besucher) nicht greifen. Gewerbegebäude der GK 4 sind dagegen genehmigungspflichtig.",
      },
      {
        question: "Braucht GK 4 harte Bedachung?",
        answer:
          "Ja. Weiche Bedachung ist nur in GK 1 bis 3 unter Abstandsvoraussetzungen zulässig. In GK 4 ist durchgehend harte Bedachung nach § 32 BauO NRW erforderlich.",
      },
      {
        question: "Gilt volle Bauüberwachung in GK 4?",
        answer:
          "Für Wohngebäude der GK 4 ja – die vereinfachte Bauüberwachung nach § 84 Abs. 2 Satz 1 gilt nur für GK 1 und 2 sowie Wohngebäude GK 3. In GK 4 kann eine Bescheinigung der sachverständigen Person nach § 87 Abs. 2 verlangt werden.",
      },
      {
        question: "Darf ein Maurermeister Pläne für GK 4 erstellen?",
        answer:
          "Nein. Die eingeschränkte Bauvorlageberechtigung nach § 71 Abs. 4a gilt nur für GK 1 und 2. Für GK 4 braucht man die allgemeine Bauvorlageberechtigung – Architekt oder eingetragener Ingenieur.",
      },
      {
        question: "Wann wird aus GK 4 schnell GK 5?",
        answer:
          "Sobald die OKF 13 Meter überschreitet oder das Gebäude sonst in die Restkategorie „sonstige Gebäude“ fällt. Dann steigen die Anforderungen weiter – feuerbeständige tragende Bauteile oberirdisch und strengere Treppenraumwände.",
      },
      {
        question: "Kann GK 4 trotzdem Sonderbau sein?",
        answer:
          "Ja. Die Gebäudeklasse und der Sonderbau-Tatbestand nach § 50 sind unabhängig. Eine Verkaufsstätte über 2.000 m² oder Versammlungsstätte in einem formalen GK-4-Gebäude löst Sonderbau-Anforderungen aus – unabhängig von der günstigen Höheneinordnung.",
      },
    ],
  },
  {
    slug: "gebaeudeklasse-5-brandschutz-bauo-nrw",
    title: "Gebäudeklasse 5: Wann gilt sie? Brandschutz nach BauO NRW",
    excerpt:
      "Über 13 Meter Höhe, Nutzungseinheit über 400 Quadratmeter oder unterirdischer Bau: Gebäudeklasse 5 bedeutet feuerbeständige (F 90) Bauteile, volle Brandwände und Baugenehmigung – oft zugleich Sonderbau wie Hochhaus.",
    metaTitle: "Gebäudeklasse 5: Ab wann? Über 13 m & Hochhaus | H&S+",
    metaDescription:
      "Ab wann GK 5 nach BauO NRW? Über 13 m, große Geschosse, Tiefgarage: F90, feuerbeständige Brandwände, Baugenehmigung Pflicht – und wann Hochhaus & Sonderbau dazukommen.",
    keywords: [
      "Gebäudeklasse 5",
      "ab wann Gebäudeklasse 5",
      "GK 5 NRW",
      "Gebäudeklasse 5 Brandschutz",
      "Hochhaus Gebäudeklasse 5",
      "über 13 Meter Gebäudeklasse",
      "Unterschied GK 4 GK 5",
      "feuerbeständig F90",
      "Tiefgarage Gebäudeklasse",
    ],
    sections: [
      {
        id: "einordnung",
        title: "Wann gilt Gebäudeklasse 5?",
        paragraphs: [
          "Gebäudeklasse 5 ist die Restkategorie der BauO NRW – und zugleich die strengste. Sie gilt für alle Gebäude, die weder GK 1, 2, 3 noch 4 erfüllen (§ 2 Abs. 3 BauO NRW). Das sind vor allem drei Fälle: die Höhe über 13 Meter, eine Nutzungseinheit mit mehr als 400 Quadratmetern Brutto-Grundfläche in einem Geschoss oder ein unterirdisches Gebäude mit Aufenthaltsräumen.",
          "Typisch GK 5: ein fünfgeschossiges Wohnhaus mit 14 Metern OKF, ein Bürogebäude mit einer Etage à 600 Quadratmeter, eine Tiefgarage als Gebäude oder ein Hochhaus über 22 Meter – letzteres ist zugleich Sonderbau nach § 50. Die Höhe bemisst sich nach der Fußbodenoberkante des höchstgelegenen Geschosses mit möglichem Aufenthaltsraum; Kellerflächen zählen bei der 400-Quadratmeter-Grenze nicht mit.",
          "Die Abgrenzung zu GK 4 liegt an 13 Metern OKF und an der Fläche je Nutzungseinheit pro Geschoss. Ein Gebäude mit 12,5 Metern Höhe und Wohnungen à 180 Quadratmeter bleibt GK 4. Steigt die OKF auf 13,2 Meter oder wächst eine Nutzungseinheit auf 450 Quadratmeter in einem Geschoss, springt es in GK 5. Mehr zur Vorstufe: [GK 4](/ratgeber/gebaeudeklasse-4-brandschutz-bauo-nrw). Gesamtübersicht: [Gebäudeklassen GK 1–5](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw).",
          "GK 5 und Sonderbau sind nicht dasselbe, treffen aber häufig zusammen. Hochhäuser ab 22 Metern Höhe, Gebäude über 30 Meter, Verkaufsstätten über 2.000 Quadratmeter oder Versammlungsstätten über 200 Personen sind Sonderbauten – unabhängig von der formalen Gebäudeklasse. Ein vierzehn Meter hohes Geschäftshaus kann GK 5 sein, ohne Hochhaus-Sonderbau zu werden.",
        ],
      },
      {
        id: "verschaerfung",
        title: "Was sich gegenüber GK 4 verschärft",
        paragraphs: [
          "Gebäudeklasse 5 ist die höchste Stufe der Feuerwiderstandskette in der BauO NRW. Oberirdisch verlangen tragende Wände, Stützen, Decken, Treppenraumwände und Fahrschachtwände feuerbeständige (F 90) Bauteile – nicht mehr hochfeuerhemmend (F 60) wie in GK 4 (§§ 27, 31, 35, 39 BauO NRW).",
          "Brandwände müssen feuerbeständig sein und aus nichtbrennbaren Baustoffen bestehen (§ 30 Abs. 2 BauO NRW). Die hochfeuerhemmenden Ersatzwände der GK 1 bis 4 reichen nicht. Brandwände sind 30 Zentimeter über die Bedachung zu führen oder mit feuerbeständiger Platte abzuschließen; Außenwandbekleidungen an Gebäudeabschlusswänden inklusive Dämmstoffe müssen nichtbrennbar sein.",
          "Alle Erleichterungen niedrigerer Gebäudeklassen entfallen: keine weiche Bedachung, keine verkürzten Abstandsflächen, keine Ausnahmen bei Trennwänden, Leitungen oder Lüftung. GK 5 bedeutet in der Praxis: volle BauO-Anwendung ohne Abkürzungen.",
          "Verfahrensrechtlich fällt GK 5 aus der Genehmigungsfreistellung des § 62 BauO NRW heraus – auch Wohngebäude brauchen eine Baugenehmigung. Dazu kommen vollständige Bauüberwachung und die allgemeine Bauvorlageberechtigung durch Architekt oder Ingenieur.",
        ],
      },
      {
        id: "feuerwiderstand",
        title: "Feuerwiderstand: feuerbeständig (F 90) oberirdisch",
        paragraphs: [
          "Tragende und aussteifende Wände und Stützen oberirdisch müssen in GK 5 feuerbeständig (F 90) sein (§ 27 Abs. 2 BauO NRW) – der Sprung von hochfeuerhemmend (F 60) in GK 4. Im Kellergeschoss bleiben tragende Bauteile ebenfalls feuerbeständig – wie in GK 3 bis 5.",
          "Decken zwischen den Geschossen sind feuerbeständig (F 90) nach § 31 Abs. 2. Unter und über Räumen mit Explosions- oder erhöhter Brandgefahr gelten ohnehin feuerbeständige Decken – die Wohngebäude-Ausnahme der GK 1 und 2 entfällt.",
          "Trennwände nach § 29 gelten vollständig: zwischen Nutzungseinheiten mindestens feuerhemmend, in Brandgefahrräumen feuerbeständig. Die Ausnahme für Wohngebäude GK 1 und 2 gibt es nicht.",
          "Die tragenden Teile notwendiger Treppen müssen in GK 5 feuerhemmend und aus nichtbrennbaren Baustoffen sein (§ 34 Abs. 3) – strenger als in GK 4, wo nichtbrennbar ohne feuerhemmend genügte. Außentreppen als zweiter Rettungsweg brauchen in GK 3 bis 5 nichtbrennbare tragende Teile.",
        ],
      },
      {
        id: "treppen-flure",
        title: "Treppenräume, Flure und Rettungswege",
        paragraphs: [
          "Jede notwendige Treppe liegt in einem eigenen Treppenraum (§ 35 Abs. 1 BauO NRW). Die Wände sind feuerbeständig (F 90) – nicht hochfeuerhemmend wie in GK 4. In GK 4 und 5 sind besondere Vorkehrungen zur Rauchableitung erforderlich: Öffnungen mit mindestens einem Quadratmeter freiem Querschnitt, vom Erdgeschoss und obersten Treppenabsatz bedienbar (§ 35 Abs. 3).",
          "Notwendige Flure nach § 36 gelten vollständig – Rauchabschnitte, feuerhemmende Wände, im Keller feuerbeständig. In Geschossen mit mehr als vier Wohnungen müssen notwendige Flure angeordnet sein (§ 35 Abs. 4). Zwei Rettungswege je Nutzungseinheit bleiben Pflicht (§ 33); bei höheren Gebäuden wird die Feuerwehr-Abstimmung wichtiger – siehe [Flucht und Rettungswege](/ratgeber/flucht-und-rettungswege-bauo-nrw) und [Feuerwehr vor dem Bauamt](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw).",
          "Einschiebbare Treppen sind in GK 5 unzulässig. Aufzüge ohne Fahrschacht nur in GK 1 und 2 – in GK 5 braucht jeder Aufzug einen Fahrschacht mit feuerbeständigen, nichtbrennbaren Wänden (§ 39). Ab mehr als drei oberirdischen Geschossen kann ein Aufzug Pflicht werden. In Hochhäusern sind Aufzüge in notwendigen Treppenräumen ausnahmsweise zulässig.",
        ],
      },
      {
        id: "aussen-brandwand",
        title: "Außenwände, Brandwände und Dach",
        paragraphs: [
          "Außenwände unterliegen den vollen Regeln des § 28 BauO NRW: nichttragende Außenwände aus nichtbrennbaren Baustoffen, Oberflächen schwerentflammbar, Balkonbekleidungen und mehrgeschossige Solaranlagen schwerentflammbar. Hinterlüftete Bekleidungen aus normalentflammbaren Baustoffen sind nur in GK 1 bis 3 erlaubt.",
          "Harte Bedachung ist Pflicht (§ 32 BauO NRW) – weiche Bedachung nur in GK 1 bis 3. Abstandsflächen bemisst sich nach 0,4-mal Wandhöhe, mindestens drei Meter (§ 6) – bei 15 Metern OKF sind das mindestens sechs Meter Abstandsflächentiefe.",
          "Brandwände müssen feuerbeständig sein (§ 30) – keine hochfeuerhemmenden Ersatzlösungen wie in GK 4. Das betrifft Gebäudeabschlusswände zum Nachbarn ebenso wie innere Brandwände zwischen Brandabschnitten in größeren Bauten.",
          "Feuerwehrzugang, Durchfahrten und Hubrettungsflächen sind ab 8 Metern Brüstungshöhe besonders zu planen (§ 5 BauO NRW). Mehr: [Feuerwehrzufahrt](/ratgeber/feuerwehrzufahrt-zugaenge-runderlass-bauo-nrw).",
        ],
      },
      {
        id: "technik",
        title: "Aufzüge, Leitungen und Lüftung",
        paragraphs: [
          "Fahrschachtwände von Aufzügen müssen in GK 5 feuerbeständig und aus nichtbrennbaren Baustoffen sein (§ 39 BauO NRW). Fahrschächte sind zu lüften; Rauchaustrittsöffnungen brauchen mindestens 0,10 Quadratmeter freien Querschnitt.",
          "Leitungs- und Lüftungsdurchführungen durch feuerwiderstandsfähige Bauteile erfordern brandschutztechnische Vorkehrungen (§§ 40, 41). In notwendigen Treppenräumen und Fluren nur zulässig, wenn der Rettungsweg im Brandfall ausreichend lang nutzbar bleibt. Lüftungsleitungen aus nichtbrennbaren Baustoffen – keine Erleichterungen wie in GK 1 und 2.",
          "Müll- und Abfallräume in GK 3 bis 5 brauchen Trennwände und Decken mit entsprechender Feuerwiderstandsfähigkeit, feuerhemmende selbstschließende Abschlüsse und Entleerung ins Freie (§ 44 BauO NRW).",
          "Wintergärten bis 30 Quadratmeter und Installationsschächte über Geschosse hinweg sind in GK 5 nicht genehmigungsfrei – die Erleichterungen nach § 79 gelten nur für GK 1 bis 3.",
        ],
      },
      {
        id: "verfahren",
        title: "Genehmigung, Bauüberwachung und Planer",
        paragraphs: [
          "Gebäude der GK 5 fallen nicht unter die Genehmigungsfreistellung des § 62 BauO NRW – weder als Wohn- noch als sonstiges Gebäude. Jede Errichtung, Änderung und Nutzungsänderung bedarf der Baugenehmigung, sofern keine andere Ausnahme greift.",
          "Vollständige Bauüberwachung nach § 84 Abs. 2 Satz 1 BauO NRW gilt für GK 5. Eine Bescheinigung der sachverständigen Person nach § 87 Abs. 2 über bautechnische Nachweise kann verlangt werden – die Erleichterung für Wohngebäude GK 1 und 2 entfällt.",
          "Pläne dürfen nur von allgemein Bauvorlageberechtigten erstellt werden – Architekt, Innenarchitekt oder eingetragener Ingenieur (§ 71 BauO NRW). Die eingeschränkte Berechtigung für Handwerksmeister gilt nur für GK 1 und 2.",
          "In der Praxis brauchen GK-5-Vorhaben oft ein brandschutztechnisches Konzept oder eine Stellungnahme – besonders wenn zugleich Sonderbau-Tatbestände nach § 50 greifen. Mehr: [Brandschutzkonzept wann nötig](/ratgeber/brandschutzkonzept-wann-noetig) und [Sonderbauten](/ratgeber/sonderbauten-brandschutz).",
        ],
      },
      {
        id: "sonderbau",
        title: "Schnittmenge mit Sonderbau",
        paragraphs: [
          "Viele GK-5-Gebäude sind zugleich Sonderbauten. Hochhäuser ab 22 Metern Höhe nach § 2 Abs. 3 Satz 2 sind der bekannteste Fall – dann gelten die besonderen Anforderungen des § 50 BauO NRW und häufig die SBauVO NRW zusätzlich zu den GK-5-Regeln.",
          "Weitere Sonderbau-Tatbestände: bauliche Anlagen über 30 Meter Höhe, Gebäude mit mehr als 1.600 Quadratmetern Grundfläche im größten Geschoss (ausgenommen Wohngebäude), Verkaufsstätten über 2.000 Quadratmeter, Versammlungsstätten über 200 Personen. Die Liste in § 50 ist länger – Einordnung immer einzelfallbezogen.",
          "Ein 14 Meter hohes Wohnhaus ist GK 5, aber kein Hochhaus-Sonderbau. Ein 25 Meter hoher Wohnkomplex ist GK 5 und Hochhaus – mit Konzept, Prüfingenieur und oft deutlich höheren Anforderungen an Rettungswege, Brandabschnitte und Feuerwehrplanung. Details: [Sonderbau geregelt/ungeregelt](/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw).",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fälle und Stolpersteine",
        paragraphs: [
          "Ein fünfgeschossiges Mehrfamilienhaus mit 13,8 Metern OKF ist GK 5 – obwohl es formal noch kein Hochhaus ist. Viele Bauherren erwarten die Regeln von GK 4 – tatsächlich springen tragende Bauteile, Treppenraumwände und Brandwände auf feuerbeständig (F 90), und die Baugenehmigung ist Pflicht.",
          "Ein Bürogebäude mit vier Etagen à 500 Quadratmeter Nutzungsfläche pro Etage ist GK 5 wegen der 400-Quadratmeter-Grenze je Nutzungseinheit – nicht wegen der Höhe. Hier entscheidet die Fläche pro Geschoss, nicht die Geschosszahl.",
          "Eine Tiefgarage mit Aufenthaltsräumen im Untergeschoss kann als unterirdisches Gebäude GK 5 auslösen – mit feuerbeständigen Kellerbauteilen und besonderen Rettungsweg-Anforderungen.",
          "Wer in einem GK-4-Gebäude eine Nutzungseinheit auf über 400 Quadratmeter vergrößert oder die OKF über 13 Meter treibt, wechselt in GK 5. Die baulichen und verfahrensrechtlichen Folgen sind erheblich – frühzeitige brandschutztechnische Planung lohnt sich.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber fasst die BauO-NRW-Vorschriften für Gebäudeklasse 5 zusammen – ohne VV TB NRW, Denkmalschutz, SBauVO-Details oder ingenieurmethodische Nachweise. Verbindlich sind die eingereichten Pläne und die Festlegung der Bauaufsicht. Die Übersicht ersetzt keinen brandschutztechnischen Nachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/gebaeudeklasse-4-brandschutz-bauo-nrw", label: "GK 4" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen Überblick" },
      { href: "/ratgeber/gebaeudeklassen-grenzfaelle-nrw", label: "GK-Grenzfälle" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Brandschutzkonzept" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr-Abstimmung" },
    ],
    faq: [
      {
        question: "Ab wann ist ein Gebäude GK 5 statt GK 4?",
        answer:
          "Sobald die OKF 13 Meter überschreitet, eine Nutzungseinheit in einem Geschoss mehr als 400 m² hat oder das Gebäude unterirdisch mit Aufenthaltsräumen fällt. GK 5 ist die Restkategorie für alle Gebäude, die GK 1–4 nicht erfüllen.",
      },
      {
        question: "Was ist der wichtigste Unterschied zu GK 4?",
        answer:
          "Oberirdisch verlangt GK 5 feuerbeständige (F 90) tragende Bauteile, Decken, Treppenraumwände und Fahrschachtwände – statt hochfeuerhemmend (F 60) in GK 4. Brandwände müssen feuerbeständig sein, und jede Baugenehmigung ist Pflicht – auch für Wohngebäude.",
      },
      {
        question: "Ist GK 5 ein Hochhaus?",
        answer:
          "Nicht automatisch. Hochhäuser sind Sonderbauten ab 22 m Höhe nach § 50 BauO NRW. Ein Gebäude mit 14 m OKF kann GK 5 sein, ohne Hochhaus zu werden. Ab 22 m sind beide Tatbestände typischerweise erfüllt.",
      },
      {
        question: "Braucht GK 5 eine Baugenehmigung?",
        answer:
          "Ja, grundsätzlich immer. Die Genehmigungsfreistellung nach § 62 BauO NRW gilt nur für Wohngebäude GK 1–4 und sonstige Gebäude GK 1–2. GK 5 ist ausdrücklich nicht erfasst.",
      },
      {
        question: "Was bedeutet feuerbeständig in GK 5?",
        answer:
          "Feuerbeständige Bauteile (F 90) halten im Brandfall mindestens 90 Minuten stand. In GK 5 gelten sie oberirdisch für tragende Wände, Stützen, Decken, Treppenraumwände, Fahrschachtwände und Brandwände.",
      },
      {
        question: "Wann wird man GK 5 wegen der Fläche?",
        answer:
          "Wenn eine einzelne Nutzungseinheit in einem Geschoss mehr als 400 m² Brutto-Grundfläche hat – unabhängig von der Gebäudehöhe. Ein niedriges, aber breites Gewerbegebäude kann so in GK 5 fallen.",
      },
      {
        question: "Braucht GK 5 ein Brandschutzkonzept?",
        answer:
          "Nicht automatisch nach der Gebäudeklasse allein. Wenn zugleich Sonderbau nach § 50 greift – Hochhaus, große Verkaufsstätte, Versammlungsstätte – ist ein Konzept oder eine Stellungnahme in der Regel erforderlich.",
      },
      {
        question: "Darf ein Maurermeister Pläne für GK 5 erstellen?",
        answer:
          "Nein. Die eingeschränkte Bauvorlageberechtigung nach § 71 Abs. 4a gilt nur für GK 1 und 2. Für GK 5 braucht man Architekt oder eingetragenen Ingenieur.",
      },
    ],
  },
];
