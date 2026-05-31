/**
 * Ratgeber-Artikel: BauO NRW & Brandschutz (eigene Formulierungen, praxisnah für NRW).
 */

import { RATGEBER_ARTICLES_BATCH2 } from "./ratgeber-articles-batch2";

export type { RatgeberArticle, RatgeberSection } from "./ratgeber-types";
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES: RatgeberArticle[] = [
  {
    slug: "gebaeudeklassen-brandschutz-bauo-nrw",
    title: "Gebäudeklassen und Brandschutz nach BauO NRW",
    excerpt:
      "GK 1 bis 5: Nutzungseinheiten, OKF, feuerhemmend bis feuerbeständig (F 30–F 90 nach § 27 BauO NRW), Brandabschnitte und Rettungswege – mit Praxisbezug für Genehmigungsverfahren.",
    metaTitle: "Gebäudeklassen NRW | Brandschutz BauO | H&S+",
    metaDescription:
      "Gebäudeklassen 1–5 BauO NRW: NE, OKF, §§ 27–33, feuerhemmend/feuerbeständig, GK vs. Sonderbau. Praxisratgeber H&S+.",
    keywords: [
      "Gebäudeklassen NRW",
      "Gebäudeklasse Brandschutz",
      "BauO NRW Gebäudeklassen",
      "Brandschutz Gebäudeklasse",
      "Brandschutz Köln",
      "feuerhemmend feuerbeständig",
      "Nutzungseinheit BauO",
    ],
    sections: [
      {
        id: "was-sind-gk",
        title: "Was sind Gebäudeklassen?",
        paragraphs: [
          "Die BauO NRW ordnet jedes Gebäude einer von fünf Gebäudeklassen (GK 1 bis GK 5) zu. Maßgeblich sind Gebäudehöhe, Zahl und Größe der Nutzungseinheiten sowie die Freistehendheit – nicht die Branche. Ein Restaurant und ein Büro können dieselbe GK haben, wenn Höhe und Flächen gleich sind.",
          "Die GK steuert den baulichen Brandschutz nach §§ 26 bis 38 BauO NRW: Feuerwiderstand von Wänden und Decken (§ 27), Brandabschnitte und Brandwände (§§ 29–30), abschließende Bauteile wie Brandschutz- und Rauchschutzabschlüsse (§ 31), Abschottungen (§ 32) und Flucht- und Rettungswege (§ 33). Je höher die GK, desto höher die Mindestanforderungen und oft der Nachweisaufwand im Genehmigungsverfahren.",
          "Gebäudeklasse und Sonderbau sind getrennte Prüfungen: GK 3 allein macht noch keinen Imbiss genehmigungsfähig – eine Versammlungsstätte oder besucherintensive Nutzung kann zusätzlich Sonderbau-Regeln (§ 50 BauO NRW) und ein Brandschutzkonzept auslösen.",
        ],
      },
      {
        id: "nutzungseinheit",
        title: "Nutzungseinheit – der entscheidende Flächenmaßstab",
        paragraphs: [
          "Eine Nutzungseinheit (NE) ist ein in sich abgeschlossener Bereich mit eigenem Zugang – typisch eine Wohnung, ein Bürogeschoss für einen Mieter, eine Praxis oder ein Laden. Maßzahl ist die Brutto-Grundfläche (BGF); Kellergeschosse bleiben bei der GK-Zuordnung außer Betracht.",
          "Praxisrelevant: Zwei Wohnungen im Zweifamilienhaus = zwei NE (GK 1a/2). Ein Geschäftshaus mit vielen Mietern kann trotzdem GK 5 sein, wenn eine einzelne NE in einem Geschoss größer als 400 m² ist oder die OKF über 13 m liegt – nicht wegen der Mieterzahl allein.",
          "Umbauten, die NE zusammenlegen oder teilen (z. B. zwei Praxen zu einer Einheit), ändern die GK nur, wenn sich Höhe oder die 400-m²-Grenze pro Geschoss verschieben. Trotzdem müssen Brandabschnitte, Türen und Rettungswege neu bewertet werden.",
        ],
      },
      {
        id: "hoehe",
        title: "Gebäudehöhe (OKF) – woran gemessen wird",
        paragraphs: [
          "Höhe im Sinne der BauO NRW ist die Fußbodenoberkante des höchsten Geschosses, in dem ein Aufenthaltsraum möglich ist, bezogen auf die Geländeoberfläche im Mittel (§ 2 Abs. 3 BauO NRW).",
          "Oberirdisch ist ein Geschoss, wenn seine Deckenoberkante im Mittel mehr als 1,60 m über der Geländeoberfläche liegt – darunter gilt es als Keller. Ein ausgebautes Dachgeschoss mit Aufenthaltsräumen erhöht die OKF und damit die GK; ein reines Hohldach ohne nutzbare Räume zählt nicht als Geschoss.",
          "Typischer Planungsfehler: niedrige Fassade, aber voll ausgebautes DG – plötzlich GK 4 statt GK 3. Vor Antragstellung die OKF aus Grundriss und Schnitt nachrechnen.",
        ],
      },
      {
        id: "einordnung",
        title: "Einordnung GK 1 bis GK 5 (BauO NRW)",
        paragraphs: [
          "Reihenfolge der Prüfung in der Praxis: (1) Freistehend ja/nein? (2) OKF ≤ 7 m oder ≤ 13 m? (3) Wie viele NE und wie groß je Geschoss? (4) Landwirtschaftliche Nutzung (GK 1b)? (5) Sonst → GK 5.",
        ],
        list: [
          "GK 1a – freistehend, OKF ≤ 7 m, max. 2 NE, Summe BGF aller NE ≤ 400 m² (ohne Keller)",
          "GK 1b – land- oder forstwirtschaftliche Nutzung (freistehend, eigene Zuordnung in GK 1)",
          "GK 2 – nicht freistehend, sonst dieselben Grenzen wie GK 1a (Reihenhaus, Doppelhaus)",
          "GK 3 – OKF ≤ 7 m, aber weder GK 1 noch 2 (z. B. 3 NE, Gesamtfläche > 400 m², größeres Gewerbe)",
          "GK 4 – OKF ≤ 13 m und jede NE höchstens 400 m² in einem Geschoss",
          "GK 5 – alles Übrige: OKF > 13 m, mindestens eine NE > 400 m² in einem Geschoss, unterirdische Gebäude, große Hallen",
        ],
      },
      {
        id: "feuerwiderstand",
        title: "Feuerwiderstand nach Gebäudeklasse (§ 27 BauO NRW)",
        paragraphs: [
          "Die Mindest-Feuerwiderstandsklassen für tragende und aussteifende Bauteile ergeben sich aus der GK über Anlage 1 BauO NRW. Üblich in der Praxis:",
          "**Feuerhemmend** (Feuerwiderstandsklasse F 30): innere Trennwände, viele nichttragende Bauteile, Brandschutztüren und Rauchschutztüren T30-RS in GK 1–3.",
          "**Hochfeuerhemmend** (F 60): häufig tragende Bauteile in GK 4.",
          "**Feuerbeständig** (F 90): tragende Wände, Stützen, Decken und Brandwände in GK 5; auch Brandwände unter mechanischer Beanspruchung.",
          "Die genaue Zuordnung hängt vom Bauteil ab (Innenwand, Außenwand, Decke, Dach, Brandwand) – die Tabelle in Anlage 1 ist maßgeblich, nicht pauschale Merksätze.",
        ],
        list: [
          "GK 1 / 2: überwiegend feuerhemmende Innenbauteile; bei GK 2 stärkere Trennung zwischen den beiden NE (Nachbar-Schutz)",
          "GK 3: feuerhemmend im Inneren, an Brandwänden und tragenden Stellen oft feuerbeständig (F 90)",
          "GK 4: tragendes Skelett oft hochfeuerhemmend (F 60), Brandwände und kritische Außenbauteile feuerbeständig (F 90)",
          "GK 5: tragend und aussteifend in der Regel durchgängig feuerbeständig (F 90); Brandabschnittswände und -decken entsprechend hoch",
        ],
      },
      {
        id: "brandabschnitte",
        title: "Brandabschnitte, Rauchschutz, Abschottungen – unabhängig von der GK",
        paragraphs: [
          "Brandabschnitte (§ 30 BauO NRW) teilen Gebäude so, dass Feuer in einem Abschnitt begrenzt bleibt – mit Brandwänden, feuerhemmenden oder feuerbeständigen Trennwänden und abschließenden Bauteilen. Die Gebäudeklasse legt die Mindestanforderungen fest; die Abschnittsbildung ist die konkrete Planung im Grundriss.",
          "Rauchübertragung wird gesondert begrenzt: über Rauchabschnitte bzw. rauchabschnittsbildende Bauteile – in der Praxis vor allem Rauchschutztüren und -abschlüsse (z. B. T30-RS) in notwendigen Fluren und Treppenräumen. Ein baurechtlicher Begriff „Rauchwand“ existiert nicht; gemeint sind Brandabschnitte, Rauchabschnitte oder rauchdichte Türen.",
          "Brandschutzabschlüsse müssen selbstschließend sein und Feuerwiderstand sowie Rauchschutz ausweisen – feuerhemmend (T30) oder feuerbeständig (T90) je nach Lage, mit Rauchschutz (RS) z. B. T30-RS. Offenstehende oder aufgekeilte Türen sind der häufigste Begehungsmangel.",
          "Durchführungen für Kabel, Rohre und Lüftungskanäle durch feuerhemmende oder feuerbeständige Bauteile sind nach § 32 BauO NRW mit zugelassenen Abschottungen (System mit allgemeiner bauaufsichtlicher Zulassung) zu verschließen – jede nachträgliche Bohrung ist eine dokumentierte brandschutztechnische Änderung.",
        ],
      },
      {
        id: "rettungswege",
        title: "Rettungswege und Feuerwehr (§ 33, §§ 4–6 BauO NRW)",
        paragraphs: [
          "Jede Nutzungseinheit mit Aufenthaltsräumen braucht zwei voneinander unabhängige Rettungswege (§ 33 BauO NRW). Der erste führt in der Regel über die notwendige Treppe; der zweite über eine weitere Treppe, einen Sicherheitstreppenraum oder – nur mit Nachweis und Abstimmung Berufsfeuerwehr – über Rettung von außen.",
          "Feuerwehr-Rettung von außen über Leitern ist bei Brüstungshöhen über 8 m nur zulässig, wenn die Feuerwehr entsprechende Hubrettungsfahrzeuge einsetzen kann – deshalb die Praxisregel: bis OKF 7 m eher Steckleiter/Innenangriff (GK 1–3), ab mittlerer Höhe und bei GK 4/5 Drehleiter und Anleitbarkeit planen.",
          "Zusätzlich: Zufahrt, Aufstellflächen und Löschwasser (§§ 4–6, § 14 BauO NRW) – früh mit tab und Berufsfeuerwehr klären, nicht erst nach der Planungsfertigstellung.",
        ],
      },
      {
        id: "sonderbau-indbau",
        title: "Wenn Industrie oder Sonderbau dazukommen",
        paragraphs: [
          "Industrie- und Energiegebäude (Kraftwerk, Umspannwerk, große Lagerhallen) unterliegen oft der IndBauR NRW zusätzlich zur BauO. Dort können Rettungswege, Entrauchung (Simulation nach DIN 18232-2) und Brandabschnitte in Hallen strenger sein als die GK-Tabelle vermuten lässt.",
          "Sonderbauten nach § 50 BauO NRW (Versammlungsstätten, Krankenhäuser, Hochhäuser u. a.) verlangen häufig ein Brandschutzkonzept nach BauPrüfVO – unabhängig davon, ob das Gebäude formal GK 3, 4 oder 5 ist.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Fälle in der Praxis",
        paragraphs: [
          "Geschäftshäuser mit Wohnungen und Gewerbe im EG sind fast immer GK 5 (Höhe, große NE im EG oder OG). Hier sind Rettungswege, BMA-Aufschaltung, Feuerwehrpläne und oft ein umfangreicher brandschutztechnischer Nachweis Standard – nicht nur eine kurze Stellungnahme.",
          "Kleinere Gewerbe- und Gastronomieobjekte bis 7 m OKF landen häufig in GK 3; mit Sondernutzung kommen § 50, erhöhte Personenzahlen und Fluchtpläne hinzu, ohne dass sich die GK ändert.",
          "Teilsanierungen in Bürogebäuden (GK 5): GK bleibt, aber jede Änderung an Trennwänden, Fluren oder Technikräumen kann feuerbeständige Wände (F 90), Rauchschutztüren und Abschottungen berühren – Bestandsschutz (§ 59 BauO NRW) gilt nur, wenn keine Verschlechterung entsteht.",
          "Bei Nutzungsänderungen prüfen wir zuerst GK und Sonderbau, dann die betroffenen Bauteile nach §§ 27–33 – und bereiten die passende Stellungnahme oder das Konzept für die Bauaufsicht vor.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Abweichungen mit Kompensation, Bestandsschutz, Denkmalschutz und Versammlungsstätten-Verordnung können strengere Lösungen verlangen. Verbindlich sind Anlage 1 BauO NRW, der konkrete Grundriss und die Festlegung der Bauaufsicht Köln – diese Seite ist eine fachliche Orientierung aus der Praxis, kein Nachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten und Brandschutz" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Wer legt die Gebäudeklasse fest?",
        answer:
          "Die GK folgt aus § 2 Abs. 3 BauO NRW (Höhe, NE, Freistehendheit). Im Genehmigungsverfahren prüft die Bauaufsicht anhand der eingereichten Pläne und Flächenberechnungen; der Nachweis liegt beim Vorhabenträger.",
      },
      {
        question: "Kann sich die Gebäudeklasse durch Umbau ändern?",
        answer:
          "Nur wenn sich OKF, Zahl der NE oder die 400-m²-Grenze pro Geschoss ändert – z. B. Dachausbau mit Aufenthaltsräumen oder Zusammenlegung großer Flächen. Sonst bleibt die GK, aber Türen, Abschottungen und Rettungswege können neue Pflichten auslösen.",
      },
      {
        question: "Was bedeutet feuerhemmend vs. feuerbeständig?",
        answer:
          "Feuerhemmend (F 30): ca. 30 Minuten Feuerwiderstand – typisch für innere Trennwände und T30-Türen. Feuerbeständig (F 90): ca. 90 Minuten – Standard für tragende Bauteile in GK 5 und Brandwände. Hochfeuerhemmend (F 60) liegt dazwischen, häufig in GK 4.",
      },
      {
        question: "Was ist der Unterschied zwischen GK und Brandabschnitt?",
        answer:
          "Die GK ist die gesetzliche Einstufung des gesamten Gebäudes nach Größe und Höhe. Brandabschnitte teilen das Gebäude brandschutztechnisch in Abschnitte – auch ein GK-5-Gebäude hat mehrere Brandabschnitte mit Brandwänden, Türen und Abschottungen.",
      },
      {
        question: "Ist ein Zweifamilienhaus immer GK 2?",
        answer:
          "Nicht freistehend (Doppelhaus): GK 2 bei OKF ≤ 7 m, 2 NE, ≤ 400 m² gesamt. Freistehend: GK 1a. Abweichend, wenn OKF oder Flächen die Grenzen sprengen.",
      },
      {
        question: "Ab wann ist ein Gebäude GK 5?",
        answer:
          "Wenn es nicht in GK 1–4 fällt: typisch OKF über 13 m, mindestens eine NE über 400 m² in einem Geschoss, oder unterirdische Gebäude. Viele Verwaltungs- und Geschäftshäuser in Innenstädten sind GK 5.",
      },
      {
        question: "Brauche ich bei GK 5 immer ein Brandschutzkonzept?",
        answer:
          "Nicht automatisch nur wegen GK 5. Ein vollständiges Konzept ist vor allem bei Sonderbauten (§ 50), genehmigungspflichtigen Industriebauwerken oder wenn die Bauaufsicht es verlangt. Teile Sanierungen reichen oft eine brandschutztechnische Stellungnahme – im Einzelfall klären.",
      },
    ],
  },
  {
    slug: "sonderbauten-brandschutz",
    title: "Sonderbauten: Was das für den Brandschutz bedeutet",
    excerpt:
      "§ 50 BauO NRW: wann ein Gebäude Sonderbau ist, Abgrenzung zur Gebäudeklasse, MVStättVO, Brandschutzkonzept und typische Fälle in der Praxis.",
    metaTitle: "Sonderbauten Brandschutz | BauO NRW | H&S+",
    metaDescription:
      "Sonderbau § 50 BauO NRW: Versammlungsstätte, Gastronomie, Hochhaus, Lager. Konzeptpflicht, Abgrenzung GK. Praxisratgeber H&S+.",
    keywords: [
      "Sonderbau Brandschutz",
      "Sonderbauten BauO NRW",
      "Brandschutz Sonderbau Köln",
      "Versammlungsstätte Brandschutz",
      "§ 50 BauO NRW",
    ],
    sections: [
      {
        id: "definition",
        title: "Was ist ein Sonderbau nach BauO NRW?",
        paragraphs: [
          "Sonderbauten sind keine „besonders gefährlichen Gewerbe“ pauschal, sondern gesetzlich definierte bauliche Anlagen nach § 50 BauO NRW. Es zählen u. a. Hochhäuser (OKF über 22 m), großflächige Verkaufsstätten (Verkaufsräume über 2.000 m²), große Bürogebäude (über 3.000 m² Geschossfläche), Versammlungsstätten, Krankenhäuser, Schulen, große Garagen (über 1.000 m² Nutzfläche) und Anlagen mit Explosions- oder erhöhter Brandgefahr durch Stoffe.",
          "Entscheidend sind messbare Kriterien – Personenzahl, Flächen, Höhe, Nutzung – nicht die Branchenbezeichnung auf dem Schild. Ein Restaurant mit 80 Plätzen kann noch kein Sonderbau sein; ab 200 Gastplätzen im Gebäude ist es nach § 50 regelmäßig ein Sonderbau.",
          "Für Sonderbauten gelten die allgemeinen Vorschriften der BauO NRW (§§ 26 ff.), werden aber verschärft und ergänzt – u. a. durch die Bauprüfverordnung NRW (BauPrüfVO) mit brandschutztechnischen Nachweisen und oft einem Brandschutzkonzept.",
        ],
      },
      {
        id: "abgrenzung-gk",
        title: "Sonderbau und Gebäudeklasse – zwei getrennte Prüfungen",
        paragraphs: [
          "Die Gebäudeklasse (GK 1–5, § 2 BauO NRW) beschreibt Größe und Höhe des Gebäudes und steuert die Mindest-Feuerwiderstände. Die Sonderbau-Eigenschaft (§ 50) beschreibt die Nutzungsgefährdung. Beides wird parallel geprüft.",
          "Beispiel: Ein dreigeschossiges Geschäftshaus mit Mischnutzung ist oft GK 5 und gleichzeitig Sonderbau, wenn Verkaufsflächen oder Versammlungsräume die Schwellen von § 50 erreichen. Umgekehrt kann ein kleines Gewerbe in GK 3 liegen und trotzdem Sonderbau sein – etwa eine Lagerhalle mit erhöhter Brandgefahr.",
          "Konsequenz: Auch wenn die GK unverändert bleibt, kann eine Nutzungsänderung (Laden → Restaurant, Büro → Escape Room, Praxis → Pflege) den Sonderbau-Tatbestand neu auslösen und ein Brandschutzkonzept oder erweiterte Nachweise erforderlich machen.",
        ],
      },
      {
        id: "schwellen",
        title: "Häufige Sonderbau-Tatbestände in der Praxis",
        paragraphs: [
          "Auszug aus § 50 BauO NRW – maßgeblich ist immer der Wortlaut und die konkrete Planung:",
        ],
        list: [
          "Versammlungsstätte: Versammlungsraum für mehr als 200 Personen, oder mehrere Räume mit gemeinsamen Rettungswegen über 200 Personen gesamt",
          "Gastronomie: Schank- oder Speisegaststätte mit mehr als 200 Gastplätzen im Gebäude (im Freien ab 1.000 Plätze)",
          "Verkauf: Verkaufsstätte mit Verkaufsräumen und Ladenstraßen über 2.000 m² (innen)",
          "Büro: Büro- und Verwaltungsgebäude mit mehr als 3.000 m² Geschossfläche",
          "Hochhaus: Gebäude mit OKF über 22 m (Höhe nach § 2 Abs. 3 BauO NRW)",
          "Garage: Garagen mit mehr als 1.000 m² Nutzfläche",
          "Pflege: Pflege-/Betreuungsnutzungen ab bestimmten Personenzahlen je Einheit oder gemeinsamem Rettungsweg",
          "Industrie: Anlagen mit Explosions- oder erhöhter Brandgefahr durch Stoffe; große Regallager (Lagerguthöhe über 9 m)",
        ],
      },
      {
        id: "nachweise",
        title: "Welche Nachweise die Bauaufsicht typischerweise verlangt",
        paragraphs: [
          "Für Sonderbauten ist in der Regel ein brandschutztechnischer Nachweis nach BauPrüfVO NRW erforderlich. In der Praxis bedeutet das häufig ein Brandschutzkonzept mit Maßnahmenkatalog (baulich, anlagentechnisch, organisatorisch), Flucht- und Rettungswegnachweis, Angaben zur Brandmeldeanlage und Löschwasserversorgung sowie Abstimmung mit der Berufsfeuerwehr (Planungsgespräch, Feuerwehrpläne).",
          "Versammlungsstätten unterliegen zusätzlich der MVStättVO NRW und dem SBauVO NRW (Teil 1, Versammlungsstätten): Betreiberpflichten, Ordnungsdienst, Technik, Unterweisungen – brandschutzrelevant und getrennt vom baulichen Nachweis zu führen.",
          "Eine brandschutztechnische Stellungnahme reicht bei kleineren, klar abgegrenzten Fragen (z. B. einzelne bauliche Änderung, Bestandstüren). Sie ersetzt kein vollständiges Konzept, wenn die Bauaufsicht einen Sonderbau-Nachweis für das Gesamtvorhaben verlangt.",
        ],
      },
      {
        id: "baulich",
        title: "Baulicher Brandschutz bei Sonderbauten (§§ 26–38 BauO NRW)",
        paragraphs: [
          "Sonderbauten unterliegen denselben baurechtlichen Begriffen wie andere Gebäude – fachlich korrekt und in Begehungen relevant:",
        ],
        list: [
          "Brandabschnitt (§ 30): räumliche Abgrenzung gegen Feuerübertragung – Brandwände, Trennwände mit Feuerwiderstand, abschließende Bauteile",
          "Brandwand (§ 29): trennt Gebäude oder große Bauabschnitte – höchste Anforderung, in der Regel feuerbeständig (F 90)",
          "Rauchabschnitt / rauchabschnittsbildende Bauteile: Begrenzung der Rauchübertragung, z. B. notwendige Flure mit Rauchschutztüren (T30-RS) – kein Begriff „Rauchwand“",
          "Flucht- und Rettungswege (§ 33): zwei voneinander unabhängige Wege je Nutzungseinheit; bei vielen Personen größere Breiten nach ASR A2.3",
          "Entrauchung (§ 35): Treppenräume, große Räume – mechanische Rauch- und Wärmeabzugsanlagen (RWA) oder ingenieurmethodischer Nachweis",
          "Löschwasser, Feuerwehrzufahrt (§§ 4–6, § 14): früh mit tab und Berufsfeuerwehr abstimmen",
        ],
      },
      {
        id: "organisatorisch",
        title: "Organisatorischer Brandschutz und Betrieb",
        paragraphs: [
          "Sonderbauten brauchen im Betrieb nachweisbare Strukturen: Brandschutzordnung (Teil A/B/C nach DIN 14096), Brandschutzbeauftragter oder -helfer, Unterweisungen, Prüfungen von Türen und Anlagen, Evakuierungsübungen bei Versammlungsstätten.",
          "Bei Veranstaltungen kommen Veranstaltungsleitung, Ordnungsdienst, Personenkapazitäten, Bestuhlungspläne und dokumentierte Brandfall-Abläufe hinzu – auch in einem genehmigten Gebäude ist jede Abweichung (mehr Besucher, andere Bestuhlung, Dekoration) eine eigene brandschutzrechtliche Prüfung.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Sonderbau-Fälle in der Praxis",
        paragraphs: [
          "Gastronomie und Imbiss: ab 200 Gastplätzen im Gebäude regelmäßig Sonderbau – darunter fallen viele Restaurants und Betriebsgastronomien in größeren Gebäuden; darunter sind Fluchtwege, Küchenbrandlasten, Fettbrand-Risiken und BMA-Anbindung zu klären.",
          "Escape Rooms, Studios, Fitness mit vielen Besuchern: oft Versammlungsstätten-ähnliche Anforderungen, wenn Räume für viele Personen mit gemeinsamen Rettungswegen ausgelegt sind – unabhängig vom Marketing-Begriff.",
          "Verwaltungs- und Geschäftshäuser: große Geschossflächen können Büro-Sonderbau auslösen; Teilsanierungen ändern die Einordnung nicht, aber jede bauliche Maßnahme an Trennwänden, Fluren oder Technikräumen braucht brandschutztechnische Bewertung.",
          "Veranstaltungen in Bestandsgebäuden: auch mit bestehender Genehmigung sind Checkliste, Gefährdungsbeurteilung, Kapazitätsgrenze und Unterweisung vor dem Event üblich – Überbelegung ist ein häufiger Genehmigungs- und Versicherungsknackpunkt.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen und nächste Schritte",
        paragraphs: [
          "Ob ein Vorhaben Sonderbau ist, ergibt sich nur aus § 50 BauO NRW im Zusammenspiel mit Plänen, Nutzungsbeschreibung und Personenzahlen. Dieser Ratgeber ersetzt keine behördliche Einordnung und keinen brandschutztechnischen Nachweis.",
          "Wir prüfen für Ihr Objekt: Sonderbau ja/nein, erforderlicher Nachweis (Konzept, Stellungnahme, Fortschreibung), Schnittstellen zu Feuerwehr und Bauaufsicht – und erstellen die passenden Unterlagen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Sonderbau geregelt vs. ungeregelt" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen (GK 1–5)" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme?" },
      { href: "/ratgeber/escape-room-brandschutzordnung-fluchtplan", label: "Escape Room & Brandschutz" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept Köln" },
    ],
    faq: [
      {
        question: "Ist jedes Restaurant ein Sonderbau?",
        answer:
          "Nein. Entscheidend sind die Gastplätze im Gebäude: ab mehr als 200 Plätzen nach § 50 BauO NRW regelmäßig ja. Darunter können trotzdem erhöhte Anforderungen aus Nutzungsänderung, Küche oder Besucherzahl in der Prüfung entstehen.",
      },
      {
        question: "Was ist der Unterschied zwischen Sonderbau und Gebäudeklasse?",
        answer:
          "Die Gebäudeklasse (§ 2) regelt Größe/Höhe und Mindest-Feuerwiderstände. Der Sonderbau (§ 50) regelt die Nutzungsgefährdung. Ein Gebäude kann beides gleichzeitig sein – die Nachweise werden addiert, nicht ersetzt.",
      },
      {
        question: "Brauchen Sonderbauten immer ein Brandschutzkonzept?",
        answer:
          "Häufig verlangt die Bauaufsicht einen brandschutztechnischen Nachweis nach BauPrüfVO – praktisch oft ein Brandschutzkonzept. Bei kleinen, klar umrissenen Änderungen kann eine Stellungnahme genügen; bei Versammlungsstätten und Genehmigungsverfahren ist das Konzept die Regel.",
      },
      {
        question: "Gilt die MVStättVO nur für Konzertsäle?",
        answer:
          "Nein. Die MVStättVO NRW gilt für Versammlungsstätten nach § 50 BauO NRW – also auch viele Veranstaltungsräume, Betriebsveranstaltungen und temporäre Nutzungen, wenn die Schwellen erreicht sind. Zusätzlich kommen Betreiberpflichten aus dem SBauVO NRW.",
      },
      {
        question: "Was ist mit Escape Rooms – Sonderbau?",
        answer:
          "Oft ja, wenn Räume für viele gleichzeitig anwesende Personen mit gemeinsamen Rettungswegen ausgelegt sind (Versammlungsstätten-Logik). Entscheidend sind Personenzahl, Fluchtwege und Genehmigung – nicht die Bezeichnung „Escape Room“.",
      },
      {
        question: "Gibt es „Rauchwände“ bei Sonderbauten?",
        answer:
          "Nein. Baurechtlich relevant sind Brandabschnitte, Brandwände, Rauchabschnitte und Rauchschutzabschlüsse (z. B. Rauchschutztüren T30-RS). „Rauchwand“ ist kein Fachbegriff der BauO NRW.",
      },
    ],
  },
  {
    slug: "sonderbauten-geregelt-ungeregelt-bauo-nrw",
    title: "Sonderbauten: geregelt und ungeregelt nach BauO NRW",
    excerpt:
      "Sonderbau ja – aber mit oder ohne eigenen SBauVO-Teil? Wann Versammlungsstätte, Gaststätte oder Beherbergung greift, und was Schulen, Krankenhäuser und große Büros bedeuten.",
    metaTitle: "Sonderbau geregelt & ungeregelt | BauO NRW",
    metaDescription:
      "Sonderbau mit SBauVO-Teil (VStätt, Hotel, Verkauf, Hochhaus, Garage) vs. ohne (Schule, Krankenhaus, Gaststätte >200). Praxisratgeber NRW – H&S+.",
    keywords: [
      "Sonderbau geregelt ungeregelt",
      "SBauVO NRW Sonderbau",
      "Sonderbau ohne Verordnung",
      "Gaststätte Versammlungsstätte Unterschied",
      "Schule Sonderbau Brandschutz",
      "§ 50 BauO NRW",
    ],
    sections: [
      {
        id: "zwei-ebenen",
        title: "Zwei Fragen – zwei Antworten",
        paragraphs: [
          "Im Genehmigungsalltag stellt sich nicht nur die Frage: Ist das ein Sonderbau nach § 50 BauO NRW? Sondern auch: Gibt es dafür einen eigenen Teil in der Sonderbauverordnung (SBauVO NRW) mit detaillierten Bauvorschriften?",
          "In der Praxis sprechen wir deshalb von Sonderbauten mit typspezifischer SBauVO („geregelt“) und Sonderbauten ohne solchen Teil („ungeregelt“). Ungeregelt heißt nicht rechtsfrei – es gelten die allgemeinen Anforderungen der BauO NRW (§§ 26–38, Rettungswege, Löschwasser, …) und in der Regel ein brandschutztechnischer Nachweis nach BauPrüfVO NRW, praktisch oft ein Brandschutzkonzept.",
          "Die Gebäudeklasse (GK 1–5) wird unabhängig davon geprüft. Sonderbau und GK sind zwei getrennte Einordnungen.",
        ],
      },
      {
        id: "geregelt",
        title: "„Geregelt“: Sonderbau mit eigenem SBauVO-Teil",
        paragraphs: [
          "Für die folgenden Sonderbau-Typen enthält die SBauVO NRW eigene Bau- und Betriebsvorschriften. Zusätzlich zur BauO NRW gelten dann die Spezialregeln des jeweiligen Teils:",
          "Versammlungsstätten unterliegen zusätzlich der MVStättVO NRW für Betrieb, Ordnungsdienst und Technik – getrennt vom baulichen Nachweis, aber brandschutzrelevant.",
        ],
        list: [
          "Teil 1 – Versammlungsstätten (Versammlungsräume, Rettungswegbreiten, Bestuhlung, BMA, …)",
          "Teil 2 – Beherbergungsstätten (ab mehr als 30 Betten nach § 50)",
          "Teil 3 – Verkaufsstätten (Verkaufsräume über 2.000 m²)",
          "Teil 4 – Hochhäuser (OKF über 22 m)",
          "Teil 5 – Garagen (über 1.000 m² Nutzfläche)",
          "Teil 6 – Betriebsräume für elektrische Anlagen",
        ],
      },
      {
        id: "ungeregelt",
        title: "„Ungeregelt“: Sonderbau ohne SBauVO-Teil",
        paragraphs: [
          "Viele Tatbestände aus § 50 Abs. 2 BauO NRW sind Sonderbau, haben aber keinen eigenen SBauVO-Abschnitt in NRW. Der Nachweis wird dann aus BauO NRW, BauPrüfVO und einem projektspezifischen Brandschutzkonzept oder einer brandschutztechnischen Stellungnahme erbracht – mit mehr Einzelfall-Abstimmung mit der Bauaufsicht.",
          "Besonders häufig unterschätzt: Jede Schule ist nach § 50 Sonderbau – auch eine kleine Grundschule. Es gibt keinen SBauVO-Schulteil; der brandschutztechnische Nachweis muss trotzdem vollständig sein.",
        ],
        list: [
          "Schulen, Hochschulen und ähnliche Einrichtungen – Sonderbau ohne Größenschwelle",
          "Krankenhäuser, Pflege- und Betreuungseinrichtungen (ab bestimmten Personenzahlen)",
          "Büro- und Verwaltungsgebäude mit mehr als 3.000 m² Geschossfläche",
          "Schank- und Speisegaststätten mit mehr als 200 Gastplätzen im Gebäude",
          "Industrie- und Lagerbau mit Explosions- oder erhöhter Brandgefahr, Regallager über 9 m Lagerguthöhe",
          "Freizeit- und Vergnügungsparks, Campingplätze, Justizvollzug u. a.",
        ],
      },
      {
        id: "gastronomie",
        title: "Gastronomie: drei getrennte Wege",
        paragraphs: [
          "Restaurant, Hotel und Eventlocation werden in § 50 nicht über eine Schwelle „200“ zusammengefasst. Es gibt drei eigenständige Tatbestände:",
          "Über 200 Gastplätze machen ein Restaurant nicht automatisch zur Versammlungsstätte. Ein reines Speisegaststätten-Konzept mit 250 Plätzen ist typisch Sonderbau wegen Gaststätte – ohne SBauVO-Teil. Eine Eventlocation mit Versammlungscharakter kann dagegen Versammlungsstätten-Logik auslösen. Beides kann in Einzelfällen parallel geprüft werden.",
          "Unter 200 Gastplätzen und ohne Beherbergung über 30 Betten: kein Sonderbau aus diesen drei Tatbeständen. Trotzdem können Nutzungsänderung, Küchenbrandlast, Gebäudeklasse und Sonderbau aus anderen Gründen (z. B. Gebäude im Komplex) relevant sein.",
        ],
        list: [
          "Beherbergungsstätte: mehr als 30 Betten → Sonderbau, SBauVO Teil 2 (Hotel/Pension – Gastronomie im Haus folgt der Beherbergungsstätte)",
          "Schank- und Speisegaststätte: mehr als 200 Gastplätze im Gebäude → Sonderbau, kein SBauVO-Gaststätten-Teil („ungeregelt“)",
          "Versammlungsstätte: Versammlungsraum für mehr als 200 Personen, oder mehrere Räume über 200 mit gemeinsamen Rettungswegen → Sonderbau, SBauVO Teil 1 + MVStättVO",
        ],
      },
      {
        id: "tabelle",
        title: "Übersicht: Typ – Sonderbau – SBauVO",
        paragraphs: [
          "Die Tabelle dient der Orientierung; maßgeblich sind immer Planung, Nutzungsbeschreibung und die behördliche Einordnung.",
        ],
        list: [
          "Hotel, 50 Betten, Restaurant 80 Plätze → Sonderbau Beherbergung, SBauVO Teil 2 (geregelt)",
          "Restaurant, 250 Plätze, nur Gastronomie → Sonderbau Gaststätte, kein SBauVO-Teil (ungeregelt)",
          "Konzert-/Veranstaltungssaal, 300 Besucher → Sonderbau Versammlungsstätte, Teil 1 + MVStättVO (geregelt)",
          "Imbiss, 40 Plätze → meist kein Sonderbau aus § 50 Gastronomie/VStätt – ggf. andere Pflichten",
          "Grundschule Neubau → Sonderbau Schule, kein SBauVO-Teil (ungeregelt)",
          "Bürocampus, 4.500 m² pro Geschoss → Sonderbau Büro, kein SBauVO-Teil (ungeregelt)",
        ],
      },
      {
        id: "nachweise",
        title: "Welche Unterlagen typischerweise gefordert werden",
        paragraphs: [
          "SBauVO-geregelte Sonderbauten: Konzept oder Nachweis, der SBauVO-Teil und BauO NRW zusammenführt; bei Versammlungsstätten zusätzlich Betreiberkonzept nach MVStättVO.",
          "SBauVO-ungeregelte Sonderbauten: häufig Voll-Brandschutzkonzept (Kap. 1–4, Anhänge für Feuerwehr und Bauaufsicht) oder Fortschreibung nach § 9 BauPrüfVO bei Bestand. Kleine, klar abgegrenzte Änderungen können als brandschutztechnische Stellungnahme reichen – wenn die Bauaufsicht es akzeptiert.",
          "In beiden Fällen: Flucht- und Rettungswege nach § 33, Brandabschnitte und Rauchschutzabschlüsse (z. B. T30-RS) fachlich korrekt – nicht pauschal „Rauchwand“.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Kein Sonderbau – und der Vergleichsfall",
        paragraphs: [
          "Kein Sonderbau bedeutet: Kein Tatbestand aus § 50 Abs. 2 ist erfüllt. Das ist etwas anderes als „ungeregelt“: Ein normales Gewerbe in GK 3 braucht keinen Sonderbau-Nachweis, kann aber bei Nutzungsänderung trotzdem brandschutztechnische Unterlagen brauchen.",
          "§ 50 Abs. 1 erlaubt der Bauaufsicht im Einzelfall besondere oder erleichterte Anforderungen – das ist die Einzelfallsteuerung, nicht die Liste der Sonderbau-Typen. Eine Vergleichseinordnung („ähnlich wie …“) ist ein separates behördliches Thema und sollte nicht mit „ungeregelt“ verwechselt werden.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Dieser Beitrag erklärt die Systematik geregelt/ungeregelt in NRW. Er ersetzt keine behördliche Festlegung und keinen brandschutztechnischen Nachweis. Für die vollständige §-50-Liste und bauliche Details siehe den Ratgeber Sonderbauten und Brandschutz.",
          "Wir ordnen Vorhaben ein: Sonderbau ja/nein, SBauVO-Teil, erforderlicher Nachweis (Konzept, Stellungnahme, Fortschreibung) – und bereiten die Unterlagen für Genehmigung und Feuerwehr vor.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbauten: Grundlagen § 50" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme?" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen (GK 1–5)" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Ladenlokal zum Imbiss" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept erstellen" },
    ],
    faq: [
      {
        question: "Bedeutet „ungeregelt“, dass kein Brandschutz nötig ist?",
        answer:
          "Nein. Ungeregelt heißt nur: kein eigener SBauVO-Teil für diesen Sonderbau-Typ. Die BauO NRW, BauPrüfVO und meist ein Brandschutzkonzept oder eine Stellungnahme gelten vollständig.",
      },
      {
        question: "Ist ein Restaurant mit 250 Plätzen eine Versammlungsstätte?",
        answer:
          "Nicht automatisch. Ab 200 Gastplätzen ist es regelmäßig Sonderbau als Schank- und Speisegaststätte. Versammlungsstätte ist ein eigener Tatbestand (Versammlungscharakter, Räume, gemeinsame Rettungswege) – dann kommt SBauVO Teil 1 hinzu.",
      },
      {
        question: "Warum ist eine Schule Sonderbau, obwohl es keinen SBauVO-Schulteil gibt?",
        answer:
          "§ 50 Abs. 2 nennt Schulen ausdrücklich als Sonderbau – ohne Flächen- oder Personenschwelle. Der fehlende SBauVO-Teil macht die Schule zu einem „ungeregelt“ einzuordnenden Sonderbau im Sinne dieses Artikels; der Nachweis erfolgt über BauO und Konzept.",
      },
      {
        question: "Was ist der Unterschied zwischen Beherbergung und Gaststätte?",
        answer:
          "Beherbergungsstätte: mehr als 30 Betten, SBauVO Teil 2. Gaststätte: mehr als 200 Gastplätze im Gebäude, kein eigener SBauVO-Teil. Ein Hotelrestaurant mit weniger als 200 Plätzen fällt unter die Beherbergungsstätte, nicht unter den Gaststätten-Tatbestand.",
      },
      {
        question: "Braucht ein SBauVO-geregelter Sonderbau weniger Nachweis?",
        answer:
          "Nein, oft nicht weniger – aber klarer strukturiert. Die SBauVO konkretisiert bauliche Pflichten; das Brandschutzkonzept verknüpft SBauVO, BauO und Anlagentechnik. Ungeregelte Sonderbauten erfordern dieselbe Sorgfalt, mit mehr Einzelfall-Argumentation im Konzept.",
      },
      {
        question: "Kann ein Gebäude mehrere Sonderbau-Tatbestände haben?",
        answer:
          "Ja. Ein Hochhaus mit großer Verkaufsfläche und Versammlungsräumen kann mehrere Merkmale erfüllen. Die Nachweise werden addiert; maßgeblich sind die jeweils einschlägigen SBauVO-Teile und die Gesamtbewertung im Konzept.",
      },
      {
        question: "Was ist mit Krankenhäusern?",
        answer:
          "Krankenhäuser sind Sonderbau nach § 50, ohne eigenen SBauVO-Krankenhaus-Teil in NRW – also „ungeregelt“ im Sinne dieses Artikels. Der brandschutztechnische Nachweis ist in der Regel umfangreich (Konzept, ggf. Betrieb, BMA, Rettungswege, Hygiene- und Nutzungsschnittstellen).",
      },
    ],
  },
  {
    slug: "brandschutzkonzept-wann-noetig",
    title: "Wann brauche ich ein Brandschutzkonzept – oder reicht eine Stellungnahme?",
    excerpt:
      "Brandschutzkonzept, Brandschutznachweis, 18-Punkte-Fortschreibung oder Stellungnahme: wann welches Dokument nach BauPrüfVO NRW – mit Praxis aus Genehmigungsverfahren.",
    metaTitle: "Wann Brandschutzkonzept? Stellungnahme | H&S+",
    metaDescription:
      "Brandschutzkonzept vs. Nachweis vs. Stellungnahme: § 9 BauPrüfVO, Sonderbau, Nutzungsänderung. Wann Voll-BSK, wann Fortschreibung.",
    keywords: [
      "Brandschutzkonzept Pflicht",
      "Brandschutzkonzept wann",
      "Brandschutzkonzept Köln",
      "BauO NRW Brandschutzkonzept",
      "brandschutztechnische Stellungnahme",
      "BauPrüfVO NRW",
    ],
    sections: [
      {
        id: "unterschied",
        title: "Drei Dokumente – drei Funktionen",
        paragraphs: [
          "Brandschutznachweis (BauPrüfVO NRW): die baurechtliche Pflichtunterlage zur Genehmigung. Methodik u. a. nach VdS 3547. Er muss nachweisen, dass das Vorhaben die Anforderungen der BauO NRW erfüllt.",
          "Brandschutzkonzept (BSK): die praxisübliche, gesamtplanerische Darstellung – baulich, anlagentechnisch, organisatorisch – mit Maßnahmenkatalog, Plänen und Abstimmungen. In Sonderbau- und Industrieverfahren ist das Konzept faktisch der übliche Brandschutznachweis.",
          "Brandschutztechnische Stellungnahme: fokussierte fachliche Bewertung zu einem abgegrenzten Punkt (z. B. Türen im Bestand, Teilsanierung eines Geschosses, Nutzungsänderung UG). Sie beantwortet: Ist das mit Bestand und Genehmigung vereinbar – und welche Maßnahmen sind nötig? Sie ersetzt kein vollständiges Konzept, wenn die Bauaufsicht einen Gesamtnachweis verlangt.",
        ],
      },
      {
        id: "zwei-formate",
        title: "Voll-BSK oder 18-Punkte-Fortschreibung?",
        paragraphs: [
          "Für bestehende Anlagen mit laufenden Anpassungen ist in der Praxis oft die Fortschreibung nach § 9 BauPrüfVO ausreichend: 18 Prüfpunkte (Feuerwehrzufahrt, Löschwasser, Brandabschnitte, Fluchtwege, BMA, Feuerwehrpläne, betriebliche Maßnahmen, Abweichungen usw.) werden aktualisiert und mit dem genehmigten Voll-BSK verknüpft.",
          "Ein Voll-Brandschutzkonzept (Kap. 1–4 plus Anhänge A–D) ist typisch bei Neubau, wesentlicher Erweiterung, neuem Sonderbau oder wenn kein aktuelles Gesamtkonzept mehr vorliegt. Anhang A: Planungsgespräch Berufsfeuerwehr Köln; Anhang B: Bauaufsicht; Anhang C: farbige Brandabschnitts- und Rettungswegpläne; Anhang D: Löschwassernachweis.",
        ],
        list: [
          "Neubau / wesentliche bauliche Änderung → Voll-BSK mit Kap. 3 (Maßnahmenkatalog, oft 17 Abschnitte) und Anhängen A–D",
          "Betrieb, Umnutzung im Bestand, punktuelle Umbauten → §-9-Fortschreibung (18 Punkte), sofern Voll-BSK als Basis existiert",
          "Einzelmaßnahme ohne Gesamtbezug → Stellungnahme, aber: Risiko – andere Kap.-3-Punkte können mitbetroffen sein",
        ],
      },
      {
        id: "ausloeser",
        title: "Wann die Bauaufsicht ein vollständiges Konzept verlangt",
        paragraphs: [
          "Typische Auslöser aus Genehmigungsverfahren in NRW – früh prüfen, nicht erst nach Zwischenbescheid:",
        ],
        list: [
          "Sonderbau nach § 50 BauO NRW (Versammlungsstätte, große Gastronomie, Hochhaus, große Verkaufs-/Büroflächen, Industrie mit Stoffgefahr)",
          "Nutzungsänderung mit neuer Personenzahl oder neuen Aufenthaltsräumen (Laden → Restaurant, Praxiszusammenlegung, Studio/Spielstätte im UG)",
          "Wesentliche Änderung an Brandabschnitten: neue Trennwände, Durchbrüche, fehlende Abschottungen, aufgekeilte Brandschutz- oder Rauchschutztüren",
          "Technik mit brandschutzwirkung: Sprinkler/Trockenbau-Konflikt, BMA-Umbau, RWA, Löschwasser, Entrauchung",
          "Behördliche Nachforderung: „kein aktuelles BSK / keine Fortschreibung“ – Genehmigungsfähigkeit dann nicht belegbar",
        ],
      },
      {
        id: "ohne-konzept",
        title: "Wann Stellungnahme oder Bestandsschutz reichen kann",
        paragraphs: [
          "Teilsanierung ohne Nutzungsänderung (Büromodernisierung, Erneuerung BMA, Fassade): oft brandschutztechnische Stellungnahme plus Fachplanung TGA/Architekt – im umbauten Bereich gelten die Anforderungen der BauO NRW vollständig, auch ohne neues Gesamtkonzept.",
          "Rein technische Maßnahmen ohne Eingriff in tragende oder raumabschließende Bauteile: Bestandsschutz nach § 59 BauO NRW kann greifen, wenn keine neuen Gefahren entstehen und keine brandschutztechnische Verschlechterung eintritt (z. B. Leitungstausch ohne Schottänderung an Trennwänden).",
          "Ergänzung zu bestehendem genehmigtem BSK: kleine Änderung als Fortschreibung eines Punktes (z. B. neue Tür, aktualisierte Fluchtpläne) statt neuem Vollkonzept – mit Änderungsprotokoll und Datum.",
        ],
      },
      {
        id: "inhalt",
        title: "Was ein Voll-Brandschutzkonzept fachlich abdeckt",
        paragraphs: [
          "Kap. 2: Objekt, Nutzung, Gefährdungsanalyse, Rechtsgrundlagen (BauO NRW, ggf. IndBauR NRW bei Industrie), Einordnung Sonderbau.",
          "Kap. 3 (Auszug der 17 üblichen Abschnitte): Feuerwehrzufahrt und Aufstellflächen; Löschwasser; Abschottungen und Brandabschnitte; Rettungswege (erster/zweiter Weg); Nutzerzahl und Fluchtwegbreiten; brandrelevante Haustechnik; Lüftung und Entrauchung; RWA; Alarmierung/BMA; Löscheinrichtungen; Sicherheitsstrom; Hydranten innen; Feuerwehr- und Einsatzpläne; Betrieb und Wartung (BSO, Prüffristen); Abweichungen und Kompensationen; ggf. ingenieurmethodischer Nachweis (DIN 18232-2, 10-min-Rettungsweg).",
          "Kap. 4: Zusammenfassung, dokumentierte Abweichungen mit Kompensation – Abweichung ohne Nachweis ist in der Praxis nicht genehmigungsfähig.",
        ],
      },
      {
        id: "bso-abgrenzung",
        title: "Brandschutzordnung ersetzt kein Konzept",
        paragraphs: [
          "Die Brandschutzordnung nach DIN 14096 (Teil A Verhalten, Teil B Betrieb, Teil C Löschübungen) regelt den laufenden Betrieb und die Unterweisung. Sie belegt nicht die bauliche und anlagentechnische Genehmigungsfähigkeit eines Umbaus.",
          "In der Praxis sind beides parallel nötig: Konzept/Fortschreibung für die Bauaufsicht, BSO für den Betrieb. Flucht- und Rettungspläne nach DIN 14095 ergänzen die Rettungswege aus § 33 BauO NRW für Beschäftigte und Besucher.",
        ],
      },
      {
        id: "verfahren",
        title: "Ablauf im Genehmigungsverfahren",
        paragraphs: [
          "Vor Antragstellung: Sonderbau ja/nein, bestehendes BSK vorhanden, betroffene Brandabschnitte und Rettungswege in Grundrissen markieren. Planungsgespräch mit der Berufsfeuerwehr und Abstimmung mit der Bauaufsicht früh einplanen – nicht erst mit fertigem Bauantrag.",
          "Zwischenbescheid mit brandschutzlicher Mängelliste: typische Reihenfolge Stellungnahme einreichen → Nacharbeit → erneute Prüfung. Bei fehlendem Gesamtkonzept fordert die Behörde zuerst BSK oder §-9-Fortschreibung – punktuelle Antworten reichen dann nicht.",
          "Nach Genehmigung: Konzept fortgeschrieben halten (§ 9 BauPrüfVO), BSO und Pläne anpassen, Brandschutzabschlüsse und Abschottungen in Begehungen prüfen. Jede undokumentierte Abweichung vom genehmigten Zustand ist ein Risiko bei Versicherung und Behörde.",
        ],
      },
      {
        id: "hinweis",
        title: "Kurz-Entscheidungshilfe",
        paragraphs: [
          "Sonderbau oder wesentliche Nutzungsänderung → mit Voll-BSK oder zumindest Fortschreibung planen. Kleine, klar abgegrenzte Frage im Bestand → Stellungnahme. Unklar → vor Baubeginn klären; nachträgliche Nachforderungen verzögern Projekte um Monate.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept erstellen lassen" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau § 50 BauO NRW" },
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid Bauaufsicht" },
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung Büro" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz TGA" },
    ],
    faq: [
      {
        question: "Kann eine Stellungnahme ein Brandschutzkonzept ersetzen?",
        answer:
          "Nur bei klar abgegrenzten Fragen und wenn die Bauaufsicht es akzeptiert. Bei Sonderbau, Nutzungsänderung mit Personenzahl oder fehlendem Gesamtnachweis verlangt die Bauaufsicht in der Regel ein Konzept oder eine §-9-Fortschreibung mit 18 Punkten.",
      },
      {
        question: "Was ist der Unterschied zwischen Brandschutznachweis und Brandschutzkonzept?",
        answer:
          "Der Brandschutznachweis ist die behördliche Pflichtbezeichnung nach BauPrüfVO. Das Brandschutzkonzept ist die übliche inhaltliche Form – mit Kap. 1–4, Maßnahmenkatalog und Anhängen für Feuerwehr und Bauaufsicht.",
      },
      {
        question: "Wann reicht die 18-Punkte-Fortschreibung?",
        answer:
          "Bei bestehenden, genehmigten Anlagen mit vorhandenem Voll-BSK und laufenden Anpassungen (Umnutzung, Technik, kleinere Umbauten). Neubau oder fehlende Basis → Voll-BSK.",
      },
      {
        question: "Reicht eine Brandschutzordnung statt eines Konzepts?",
        answer:
          "Nein. Die BSO (DIN 14096) regelt Betrieb und Verhalten. Das Konzept belegt die bauliche und technische Genehmigungsfähigkeit. Beides wird oft parallel benötigt.",
      },
      {
        question: "Brauche ich ein neues Konzept bei jeder baulichen Änderung?",
        answer:
          "Nicht immer ein neues Vollkonzept – aber jede Änderung an Trennwänden, Fluchtwegen, BMA oder Löschwasser muss im BSK nachvollzogen werden. Einzelmaßnahmen ohne Fortschreibung riskieren widersprüchliche Kompensationen in Kap. 3.16.",
      },
      {
        question: "Was passiert ohne aktuelles Konzept bei einem Sonderbau?",
        answer:
          "Genehmigungsfähigkeit und Betriebssicherheit sind nicht nachweisbar. Die Bauaufsicht kann den Antrag zurückweisen oder über Zwischenbescheid ein vollständiges BSK oder eine Fortschreibung nach § 9 BauPrüfVO fordern.",
      },
    ],
  },
  {
    slug: "flucht-und-rettungswege-bauo-nrw",
    title: "Flucht- und Rettungswege nach BauO NRW",
    excerpt:
      "§ 33 BauO NRW: erster und zweiter Rettungsweg, Nutzerzahl, Brand- und Rauchabschnitte, T30-RS, Pläne nach DIN 14095 – baulich und im Betrieb.",
    metaTitle: "Flucht- und Rettungswege NRW | BauO | H&S+",
    metaDescription:
      "Flucht- und Rettungswege nach BauO NRW: erster/zweiter Weg, § 33, Nutzerzahl, Pläne DIN 14095. Praxisratgeber H&S+.",
    keywords: [
      "Fluchtweg Brandschutz",
      "Rettungsweg BauO NRW",
      "§ 33 BauO NRW",
      "Fluchtweg Gewerbe",
      "Rauchschutztür T30-RS",
    ],
    sections: [
      {
        id: "begriffe",
        title: "Fluchtweg, Rettungsweg, § 33 BauO NRW",
        paragraphs: [
          "Fluchtwege führen Personen aus Aufenthaltsräumen in sichere Bereiche. Rettungswege umfassen Fluchtwege und zusätzlich Wege, die der Feuerwehr den Zugang zu Brandabschnitten und Einsatzstellen ermöglichen (§ 33 BauO NRW).",
          "Für Nutzungseinheiten mit Aufenthaltsräumen sind in der Regel zwei voneinander unabhängige Rettungswege ins Freie erforderlich. Der erste Weg führt typischerweise über eine notwendige Treppe oder einen notwendigen Flur. Der zweite kann eine weitere Treppe oder – unter Voraussetzungen – eine mit Rettungsgeräten der Feuerwehr erreichbare Stelle sein.",
          "Fluchtwege und Rettungswege müssen jederzeit nutzbar, erkennbar und ausreichend dimensioniert sein. Blockierte Wege, fehlende Kennzeichnung, verriegelte Türen ohne Freigabe oder dauerhaft zugestellte Brandschutzabschlüsse sind häufige Mängel bei Begehungen und Genehmigungsverfahren.",
        ],
      },
      {
        id: "brand-rauch",
        title: "Brandabschnitte, Rauchabschnitte und Türen",
        paragraphs: [
          "Ein Brandabschnitt begrenzt die Ausbreitung von Feuer im Gebäude (Brandwände, feuerhemmende oder feuerbeständige Trennwände nach Gebäudeklasse). Ein Rauchabschnitt begrenzt die Rauchausbreitung innerhalb eines Brandabschnitts – z. B. in notwendigen Fluren oder großen Geschossen.",
          "Rauchschutzabschlüsse (häufig Rauchschutztüren T30-RS) sichern Öffnungen in Rauch- oder Brandabschnittswänden. Sie müssen selbstschließend wirken und dürfen im Betrieb nicht dauerhaft offen oder mit Keilen fixiert sein – außer mit genehmigter Feststellanlage.",
          "„Rauchwand“ ist kein Fachbegriff der BauO NRW. Maßgeblich sind Brandabschnitte, Rauchabschnitte und die zugehörigen Abschlüsse – nicht pauschale Bezeichnungen aus der Baupraxis.",
        ],
      },
      {
        id: "nutzerzahl",
        title: "Nutzerzahl, Wegbreite und Länge",
        paragraphs: [
          "Die zulässige Nutzerzahl und die erforderliche Fluchtwegbreite hängen von Nutzung, Geschosslage und Gebäudeklasse ab. In Versammlungsstätten und Sonderbauten (§ 50 BauO NRW) sind Personenzahlen, Bestuhlung und Fluchtweglängen zentraler Prüfpunkt – nicht nur die Grundfläche.",
          "Lange Fluchtwege ohne Zwischenaustritt können einen ingenieurmethodischen Nachweis erfordern (z. B. Entrauchung nach DIN 18232-2, 10-Minuten-Rettungsweg). Das ist kein Standardersatz für einen zweiten Rettungsweg, sondern eine Einzelfall-Lösung mit dokumentierter Kompensation.",
          "Notwendige Treppen und Flure sind bauliche Rettungswege; ihre Feuerwiderstandsklassen folgen aus der Gebäudeklasse (Anlage 1 BauO NRW). Jede bauliche Änderung an Trennwänden, Türen oder Durchbrüchen in diesen Bereichen ist brandschutzrechtlich zu bewerten.",
        ],
      },
      {
        id: "zweiter-weg",
        title: "Zweiter Rettungsweg – wann und wie",
        paragraphs: [
          "Zwei unabhängige Rettungswege bedeuten: Wenn ein Weg durch Rauch oder Brand unbenutzbar wird, bleibt der andere erreichbar. Sie müssen in verschiedene Richtungen führen und dürfen sich nicht in einem gemeinsamen Endabschnitt ohne Schutz vereinen.",
          "Der zweite Weg über Rettungsgeräte der Feuerwehr (z. B. anleiterbares Dachflächenfenster) setzt Begehung, Anleiterbarkeit und schriftliche Stellungnahme der Feuerwehr voraus – keine Formsache. Details: Ratgeber zum zweiten Rettungsweg über Dachfenster.",
        ],
        list: [
          "Zwei notwendige Treppen in verschiedenen Brandabschnitten",
          "Treppe plus zweiter Weg über genehmigte FW-Erreichbarkeit",
          "Bei Sonderbauten: oft strengere Anforderungen und dokumentierte Kapazitätsgrenzen",
        ],
      },
      {
        id: "plaene-bso",
        title: "Pläne, Kennzeichnung und Brandschutzordnung",
        paragraphs: [
          "Flucht- und Rettungspläne nach DIN 14095 machen Wege für Beschäftigte und Besucher verständlich – getrennt von Feuerwehrplänen, die Einsatzwege und Hydranten zeigen. Pläne müssen zum Ist-Zustand passen; nach Umbau, Nutzungsänderung oder neuen Räumen sind sie zu aktualisieren.",
          "Sicherheitsbeleuchtung, Fluchtwegkennzeichnung (ASR A1.3) und Beschilderung gehören zum baulichen und betrieblichen Paket. Die Brandschutzordnung nach DIN 14096 (Teil A Verhalten, Teil B Betrieb) regelt Unterweisung, Begehungen und Verhalten im Brandfall – sie ersetzt aber keine Genehmigung baulicher Rettungswege.",
        ],
        list: [
          "Fluchtwege freihalten – keine Lagerung, keine Stellflächen, keine neuen Einbauten ohne Prüfung",
          "Brandschutz- und Rauchschutztüren funktionsfähig halten",
          "Notbeleuchtung und Kennzeichnung prüfen und dokumentieren",
          "Mitarbeitende und Besucher unterweisen (BSO Teil A)",
          "Regelmäßige Begehungen mit Protokoll",
        ],
      },
      {
        id: "verfahren",
        title: "Genehmigung und typische Fehler",
        paragraphs: [
          "Bei Neubau, Umbau und Nutzungsänderung sind Rettungswege in Grundrissen, Brandschutzkonzept oder brandschutztechnischer Stellungnahme nachzuweisen. Die Bauaufsicht prüft Wege, Türen und Nutzerzahl; die Feuerwehr bewertet Erreichbarkeit und Einsatz.",
          "Typische Fehler: Umnutzung erhöht Personenzahl ohne neuen Nachweis; Trockenbau teilt Flure ohne Rauchschutz; Brandschutztüren werden entfernt oder verriegelt; Fluchtpläne zeigen alte Raumaufteilung; zweiter Rettungsweg fehlt bei neuen Aufenthaltsräumen im Dach oder UG.",
        ],
      },
      {
        id: "plaene-abgrenzung",
        title: "BauO-Nachweis vs. Fluchtplan vs. Feuerwehrplan",
        paragraphs: [
          "Drei getrennte Ebenen – häufig vermischt: (1) Genehmigung/Konzept: bauliche Rettungswege, Brand- und Rauchabschnitte in Grundrissen und Text. (2) DIN 14095 Feuerwehrplan: Einsatz, Hydranten, BMA, Brandabschnitte für die Feuerwehr. (3) ASR A2.3 Flucht- und Rettungspläne: Orientierung für Beschäftigte und Besucher im Betrieb – kein Ersatz für den bauordnungsrechtlichen Nachweis.",
          "ASR A1.3 Kennzeichnung und BSO DIN 14096 ergänzen den Betrieb. Nach Umbau alle betroffenen Dokumente fortschreiben – siehe [Pläne aktualisieren](/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieses Ratgebers",
        paragraphs: [
          "Weglängen, Nutzerzahlen und Sonderbau-Tatbestände sind immer einzelfallbezogen. Dieser Beitrag ersetzt keine behördliche Festlegung und keinen ingenieurmethodischen Nachweis (z. B. Entrauchung). Für den zweiten Rettungsweg über Dachfenster siehe den verlinkten Spezialratgeber.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw", label: "Zweiter Rettungsweg über Dachfenster" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen (GK 1–5)" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Fluchtpläne aktualisieren" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung" },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Fluchtweg und Rettungsweg?",
        answer:
          "Fluchtwege dienen der Selbstrettung der Nutzer. Rettungswege umfassen Fluchtwege und Wege für die Feuerwehr (§ 33 BauO NRW). In der Praxis werden beide zusammen geplant und in Konzepten nachgewiesen.",
      },
      {
        question: "Braucht jede Nutzungseinheit zwei Rettungswege?",
        answer:
          "Grundsätzlich ja, wenn Aufenthaltsräume vorhanden sind – mit Ausnahmen und Sonderlösungen im Einzelfall. Der zweite Weg kann eine zweite Treppe oder unter Voraussetzungen eine FW-erreichbare Stelle sein.",
      },
      {
        question: "Dürfen Fluchtwege durch Einbauten verengt werden?",
        answer:
          "Nein, wenn die zulässige Nutzerzahl oder Wegbreite unterschritten wird. Regale, Möbel, Trennwände ohne Prüfung oder neue Türen in notwendigen Fluren können genehmigungs- und versicherungsrelevant sein.",
      },
      {
        question: "Was bedeutet T30-RS an einer Tür?",
        answer:
          "Feuerwiderstandsklasse T30 (feuerhemmend, ca. 30 Minuten) mit Rauchschutzfunktion (RS). Solche Türen sichern Rauchabschnitte. Sie müssen schließen – Feststellanlagen nur mit Genehmigung.",
      },
      {
        question: "Wer darf Flucht- und Rettungspläne erstellen?",
        answer:
          "Pläne sollten auf Objektbegehung basieren und zum genehmigten baulichen Zustand passen. Wir erstellen und aktualisieren Pläne nach DIN 14095 im Abgleich mit BauO NRW und Betrieb.",
      },
      {
        question: "Wann müssen Pläne nach einem Umbau neu erstellt werden?",
        answer:
          "Wenn sich Raumaufteilung, Rettungswege, Nutzerzahl oder Kennzeichnung ändern – spätestens vor Inbetriebnahme neuer Nutzungen. Alte Pläne nach Umbau sind ein häufiger Mangel bei Begehungen.",
      },
      {
        question: "Reicht ein ASR-Fluchtplan für die Baugenehmigung?",
        answer:
          "Nein. Der ASR A2.3-Plan dient dem Arbeitsschutz im Betrieb. Die Genehmigung verlangt den bauordnungsrechtlichen Nachweis in Konzept und Plänen – beide müssen zum gleichen Ist-Zustand passen.",
      },
    ],
  },
  {
    slug: "umbau-nutzungsaenderung-brandschutz",
    title: "Brandschutz bei Umbau und Nutzungsänderung",
    excerpt:
      "Umbau und Nutzungsänderung in NRW: Genehmigung, Sonderbau, Konzept vs. Stellungnahme, Brandabschnitte und typische Fehler – bevor der Zwischenbescheid kommt.",
    metaTitle: "Umbau & Nutzungsänderung | Brandschutz NRW | H&S+",
    metaDescription:
      "Brandschutz bei Umbau und Nutzungsänderung BauO NRW: wesentliche Änderung, § 50 Sonderbau, Nachweise, Bestandsschutz. Praxisratgeber H&S+.",
    keywords: [
      "Nutzungsänderung Brandschutz",
      "Umbau Brandschutz NRW",
      "Brandschutz Genehmigung Umbau",
      "wesentliche Nutzungsänderung BauO",
      "Brandschutzkonzept Nutzungsänderung",
      "brandschutztechnische Stellungnahme Umbau",
    ],
    sections: [
      {
        id: "warum",
        title: "Warum Umbau und Nutzungsänderung brandschutzrechtlich heikel sind",
        paragraphs: [
          "Ein Umbau verändert nicht nur Optik und Technik – er verändert Brandabschnitte, Rettungswege, Personenströme und oft die Einordnung des Gebäudes. Viele Vorhaben starten mit Architektur und Gewerken; die brandschutztechnische Folge (neuer Sonderbau-Tatbestand, zweiter Rettungsweg, BMA, Sprinkler) wird erst sichtbar, wenn die Bauaufsicht oder die Sachversicherung nachfragt.",
          "Typischer Ablauf in der Praxis: geplante Nutzung (Laden → Gastronomie, Lager → Büro, zwei Praxen → eine Einheit), Trockenbau bis Decke, neue Küchentechnik – und im Genehmigungsverfahren eine Mängelliste zu Fluchtwegen, fehlenden Abschottungen oder fehlendem Brandschutznachweis. Wer vor Baubeginn GK, Sonderbau und Nachweisart klärt, spart Monate und teure Rückbau-Kosten.",
        ],
      },
      {
        id: "genehmigung",
        title: "Genehmigung, Anzeige oder „nur intern“?",
        paragraphs: [
          "Ob ein Vorhaben genehmigungspflichtig ist, richtet sich nach Art und Umfang der baulichen Änderung und der Nutzung (BauO NRW, ggf. Sonderbau- und Industrieregeln). Rein betriebliche Maßnahmen ohne baulichen Eingriff (z. B. neue BSO, Unterweisung) sind nicht dasselbe wie ein Umbau mit neuen Wänden oder geänderter Nutzung.",
          "Grenzfälle in der Praxis: reine Teilsanierung ohne Nutzungsänderung (Büromodernisierung, BMA-Erneuerung) kann ohne neues Gesamt-Brandschutzkonzept laufen – brandschutztechnische Anforderungen im umbauten Bereich gelten trotzdem vollständig. Sobald Aufenthaltsräume, Personenzahlen oder Sonderbau-Merkmale neu begründet werden müssen, ist ein Bauantrag mit Brandschutznachweis naheliegend.",
          "Die alte Baugenehmigung „überlebt“ den Umbau nur, wenn Nutzung und baulicher Zustand weiterhin den damaligen Voraussetzungen entsprechen. Wer still umbaut und später verkauft oder versichert, trägt das Risiko der nachträglichen Einordnung.",
        ],
        list: [
          "Vor Baubeginn: genehmigungsbedürftig ja/nein klären (nicht nur Mietvertrag)",
          "Bei Sonderbau: Brandschutznachweis früh einplanen (Konzept oder umfangreiche Stellungnahme)",
          "Bei Bestand: alte Pläne, BSK, Genehmigungen und Fortschreibungen beschaffen",
          "Mieterumbau: schriftlich klären, wer Antrag und Nachweise stellt",
        ],
      },
      {
        id: "wesentlich",
        title: "Wesentliche Nutzungsänderung vs. gleichartige Nutzung",
        paragraphs: [
          "Maßgeblich ist nicht die Marketing-Bezeichnung, sondern die tatsächliche Nutzung: Aufenthaltsräume, maximale Personenzahl, Gefahrstoffe (Küche, Lager), Öffnungszeiten und Erschließung. Ein Ladenlokal mit wenig Gastraum und überwiegend Mitnahme-Verkauf ist brandschutzrechtlich nicht dasselbe wie ein Imbiss mit Frittieren und Holzkohlegrill – auch bei ähnlicher Fläche.",
          "Zwei Praxen zu einer Gemeinschaftspraxis können ohne Eingriff in Treppenhaus und Flure formal harmlos wirken – dennoch prüft die Bauaufsicht Brandabschnitt, Nutzungseinheit und Bestandsschutz. Eine Lagerhalle zu Büroflächen ändert Personenströme, Brandlast und oft Löschwasser- sowie Feuerwehrzufahrtsnachweise.",
          "Abgrenzung Teilsanierung: gleiche Nutzungsart, keine neuen Aufenthaltsräume über dem bisherigen Rahmen → häufig Stellungnahme und Fachplanung. Nutzungsänderung mit neuen Schwellen (Gastronomie, Versammlungscharakter, Industrie) → regelmäßig Sonderbau und vollständigerer Nachweis.",
        ],
      },
      {
        id: "gk-sonderbau",
        title: "Gebäudeklasse und Sonderbau neu prüfen",
        paragraphs: [
          "Die Gebäudeklasse (GK 1–5) folgt aus Höhe, Nutzungseinheiten und Flächen – sie ändert sich nur, wenn sich OKF, NE-Zahl oder die 400-m²-Grenze verschiebt. Ein Dachausbau mit neuen Aufenthaltsräumen kann GK 3 in GK 4 oder 5 heben, ohne dass der Betreiber es bemerkt.",
          "Sonderbau nach § 50 BauO NRW ist eine separate Prüfung: Versammlungsstätte, große Gastronomie (>200 Gastplätze), Beherbergung (>30 Betten), Hochhaus, große Verkaufsflächen, Schulen, Krankenhäuser u. a. Ein Umbau kann einen Tatbestand neu erfüllen, ohne dass sich die GK ändert – dann sind Konzept, Fluchtpläne und ggf. SBauVO-Anforderungen (geregelt vs. ungeregelt) zu klären.",
          "Details: siehe Referenzartikel zu Gebäudeklassen, § 50 und geregelt/ungeregelt – hier nur die Pflicht, beide Ebenen vor dem Planungsstart zu durchdenken.",
        ],
      },
      {
        id: "nachweise",
        title: "Welches Dokument wann: Konzept, Stellungnahme, Fortschreibung",
        paragraphs: [
          "Brandschutznachweis nach § 9 BauPrüfVO NRW ist die baurechtliche Pflichtunterlage zur Genehmigung. In der Praxis wird er als Brandschutzkonzept (BSK) mit Kap. 1–4 und Anhängen (Pläne, Feuerwehr, Löschwasser) erbracht – besonders bei Sonderbau und wesentlicher Nutzungsänderung.",
          "Brandschutztechnische Stellungnahme: abgegrenzte Bewertung (z. B. Türen im Flur, Teilsanierung eines Geschosses, Zusammenlegung ohne Eingriff in Erschließung). Sie ersetzt kein vollständiges Konzept, wenn die Bauaufsicht einen Gesamtnachweis verlangt – im Zwischenbescheid kommt das regelmäßig nach.",
          "§-9-Fortschreibung (18 Punkte): sinnvoll, wenn ein aktuelles Voll-BSK existiert und nur einzelne Punkte (Fluchtpläne, BMA, Brandabschnitt) durch den Umbau betroffen sind. Fehlt die Basis, ist die Fortschreibung allein nicht genehmigungsfähig.",
        ],
        list: [
          "Neuer Sonderbau / wesentliche Nutzungsänderung / neues UG mit vielen Personen → Voll-BSK oder gleichwertiger Nachweis",
          "Teilsanierung, gleiche Nutzung, begrenzter baulicher Eingriff → Stellungnahme + Fachplanung (Architektur, TGA)",
          "Kleine Änderung an genehmigtem BSK → Fortschreibung des betroffenen Prüfpunkts mit Protokoll",
          "Betrieb: BSO DIN 14096 und Fluchtpläne parallel aktualisieren, wenn Personenströme sich ändern",
        ],
      },
      {
        id: "baulich",
        title: "Baulicher Brandschutz im Umbau (§§ 27–33 BauO NRW)",
        paragraphs: [
          "Jede neue oder geänderte innere Trennwand, jeder Durchbruch und jede Tür in notwendigen Fluren ist dokumentationspflichtig. Feuerwiderstand nach § 27 BauO NRW – feuerhemmend (F 30), hochfeuerhemmend (F 60) oder feuerbeständig (F 90) – und Rauchschutz (RS) müssen zum Raumbuch passen. Brandschutz- und Rauchschutzabschlüsse (z. B. feuerhemmende T30-RS) sind selbstschließend und dürfen nicht aufgekeilt werden.",
          "Brandabschnitte und Rauchabschnitte sind getrennt zu planen; ein baurechtlicher Begriff „Rauchwand“ existiert nicht. Durchführungen für Kabel, Rohre und Lüftung durch klassifizierte Bauteile brauchen zugelassene Abschottungen nach § 32 BauO NRW – nachträgliche Bohrungen ohne Nachweis sind der häufigste Abnahme-Mangel.",
          "Rettungswege: zwei voneinander unabhängige Wege pro Nutzungseinheit mit Aufenthaltsräumen (§ 33). Umbauten dürfen Weglängen, lichte Breiten (ASR A2.3 bei Arbeitsstätten) und den zweiten Rettungsweg nicht verschlechtern. Trockenbau bis Decke ohne Abstimmung kann Sprinklerwirkung und Entrauchung zerstören.",
        ],
      },
      {
        id: "technik",
        title: "Anlagentechnik: Sprinkler, BMA, Entrauchung",
        paragraphs: [
          "Bestehende Sprinkleranlage schützt nicht automatisch den Umbau: Trockenbau, der Spray-Muster abschneidet, oder neue Raumzellen ohne Köpfe erfordern Varianten (Ergänzungsköpfe, Teilhöhenwände, Fachplaner-Bestätigung) – nicht pauschal „neue Zentrale“.",
          "BMA-Erneuerung in großen Beständen ist ein eigenes Projekt: Zonierung, Handfeuermelder an Fluchtwegen, Abnahme durch Prüfsachverständigen nach DIN VDE 0833-1 – Verzögerung dort verzögert die Nutzungsaufnahme.",
          "Personenreiche Nutzungen im Untergeschoss brauchen früh Abstimmung zu Entrauchung und Lüftung; RWA und BMA müssen im Konzept mit den Fluchtwegen zusammenpassen.",
        ],
      },
      {
        id: "bestand",
        title: "Bestandsschutz und historische Unterlagen",
        paragraphs: [
          "§ 59 BauO NRW schützt den genehmigten Bestand, solange keine brandschutztechnische Verschlechterung entsteht und keine neuen Gefahren hinzukommen. Rein technische Maßnahmen ohne Eingriff in raumabschließende Bauteile können im Einzelfall ohne Nachrüstung der Holzdecke o. Ä. bleiben – sobald Wände, Flure oder Nutzung sich ändern, greifen die aktuellen Anforderungen im betroffenen Bereich.",
          "Vor Antrag: historisches Brandschutzkonzept, Baugenehmigungen, Fluchtpläne und Feuerwehrpläne sichten. Nicht alles muss neu erfunden werden – aber Lücken in der Dokumentation führen in der Praxis zu Zwischenbescheiden mit Nachforderungslisten.",
        ],
      },
      {
        id: "ablauf",
        title: "Sinnvoller Ablauf vor und während des Umbaus",
        paragraphs: [
          "In abgeschlossenen Verfahren (Praxiszusammenlegung, Imbiss-Umnutzung) lagen mehrere Monate zwischen Antrag und Genehmigung – mit Zwischenbescheid, brandschutztechnischer Nachreichung und Beantwortung der Mängelliste. Das ist kein Garantiewert, zeigt aber: Fristen aus der Vorgangsauskunft ernst nehmen und fachlich vollständig nachreichen lohnt sich.",
        ],
        list: [
          "Monat 0: Nutzung und Personenzahl schriftlich; Ist-Begehung; GK und § 50 prüfen",
          "Planung: Architektur und TGA mit brandschutztechnischer Leitplanung (Konzept oder Stellungnahme)",
          "Bauantrag: Pläne, Nachweis, ggf. Löschwasser und Feuerwehr-Anhang",
          "Zwischenbescheid: Mängelliste Punkt für Punkt (Türen, Abschottungen, Wege, Anlagen)",
          "Umsetzung und Abnahme: BMA, Pläne, BSO, Dokumentation der Ausführung",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler – und wie Sie sie vermeiden",
        paragraphs: [
          "Umbau starten, bevor geklärt ist, ob Nutzungsänderung genehmigungspflichtig ist. Trockenbau und Küchentechnik bestellen, bevor Sprinkler und Entrauchung bewertet sind. Fluchtpläne und BSO nicht an die neue Ist-Situation anpassen – dann scheitern Kontrollen und Brandschau trotz „fertigem“ Umbau.",
          "Bestandsschutz pauschal annehmen („Baujahr 1970, muss nichts mehr“) – bei geänderten Fluren oder zusammengelegten NE greifen neue Pflichten. Nur eine kurze Stellungnahme einreichen, obwohl Sonderbau neu begründet ist – Nachforderung Voll-BSK folgt fast immer.",
        ],
      },
      {
        id: "praxis",
        title: "Praxisbezug ohne Pauschalen",
        paragraphs: [
          "Ladenlokal zu Imbiss (ca. 65 m²): neue Küchengefährdung, Gaststätten-Tatbestand prüfen, BMA und Fluchtwege – separates Praxisfall-Ratgeber-Thema verlinkt unten.",
          "Zwei Arztpraxen zu einer Einheit im 2. OG: oft Fokus auf Brandabschnitt und Bestand; Verfahrensdauer hängt von Vollständigkeit der Nachreichung ab.",
          "Großes Büro, Teilsanierung ca. 50 % BGF: BMA-Neuplanung, ASR-Fluchtwegbreiten, Abschottungen – Konzept nicht immer nötig, Sorgfalt aber GK-5-Niveau.",
          "UG-Studio mit bis zu ca. 110 Personen: Sonderbau, Sprinkler/Trockenbau-Konflikt, Entrauchung – hier reicht selten eine Ein-Seiten-Stellungnahme.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Genehmigungsfreistellungen, Denkmalschutz, Arbeitsschutz (ASR) und Versicherungsbedingungen können zusätzliche Anforderungen setzen. Verbindlich sind Ihr konkretes Vorhaben, die BauO NRW 2018 und die Festlegung der zuständigen Bauaufsicht – dieser Ratgeber ersetzt keine behördliche Einordnung und keinen Brandschutznachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept, Nachweis oder Stellungnahme?" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen GK 1–5" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau § 50 BauO NRW" },
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Sonderbau geregelt vs. ungeregelt" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Ladenlokal zum Imbiss (Praxis)" },
      { href: "/ratgeber/lagerhalle-buero-umnutzung-koeln", label: "Lagerhalle zu Büro (Praxis)" },
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid Brandschutz" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept erstellen" },
    ],
    faq: [
      {
        question: "Gilt die alte Baugenehmigung nach Umbau weiter?",
        answer:
          "Nur, wenn Nutzung und baulicher Zustand weiterhin den Voraussetzungen der ursprünglichen Genehmigung entsprechen. Wesentliche Nutzungsänderung oder neue Sonderbau-Merkmale erfordern neue Nachweise – stillschweigende Weiternutzung ist riskant.",
      },
      {
        question: "Brauche ich bei jedem Umbau ein Brandschutzkonzept?",
        answer:
          "Nein. Teilsanierung ohne wesentliche Nutzungsänderung kann mit brandschutztechnischer Stellungnahme und Fachplanung auskommen. Bei Sonderbau, neuen Personenzahlen, UG-Nutzungen mit vielen Besuchern oder fehlendem Bestands-BSK verlangt die Bauaufsicht regelmäßig einen vollständigen Nachweis.",
      },
      {
        question: "Was ist der Unterschied zwischen Umbau und Nutzungsänderung?",
        answer:
          "Umbau = bauliche Änderung (Wände, Erschließung, Technik in Bauteilen). Nutzungsänderung = andere tatsächliche Nutzung (z. B. Lager → Büro, Laden → Gastronomie). Brandschutzrechtlich zählt oft beides zusammen: neue Gefährdung durch Nutzung plus neue Bauteile.",
      },
      {
        question: "Wann wird aus einem normalen Gewerbe ein Sonderbau?",
        answer:
          "Wenn ein Tatbestand des § 50 Abs. 2 BauO NRW erfüllt ist – z. B. Versammlungsstätte, Gaststätte mit mehr als 200 Gastplätzen, Beherbergung mit mehr als 30 Betten, Hochhaus, große Verkaufsfläche. Schwellen und SBauVO-Einordnung sind im Sonderbau-Referenzartikel beschrieben.",
      },
      {
        question: "Kann ich Bestandsschutz nutzen, um keine neuen Türen zu setzen?",
        answer:
          "Nur ohne Verschlechterung und ohne neue Gefahren. Wer Flure verengt, Türen aufkeilt oder Abschottungen entfernt, verliert den Bestandsschutz für diese Maßnahme. Die Behörde fordert dann Nachrüstung nach heutiger BauO NRW.",
      },
      {
        question: "Wer erstellt die Unterlagen – Architekt oder Brandschutzplaner?",
        answer:
          "Architektur und Statik liefern Pläne; der Brandschutznachweis (Konzept/Stellungnahme) kommt von einem qualifizierten Brandschutzplaner oder Ingenieur nach VdS 3547 bzw. behördlicher Erwartung. BMA und Sprinkler brauchen zusätzlich Fachplaner mit eigener Abnahme.",
      },
      {
        question: "Muss der Mieter die Brandschutzunterlagen zahlen?",
        answer:
          "Vertraglich zwischen Mieter, Vermieter und Planern regeln. Baurechtlich ist der Vorhabenträger (Antragsteller) verantwortlich. In Mietkomplexen sind Eigentümer, Verwaltung und Mieter früh abzustimmen – sonst fehlen Bestands-BSK und Sprinklerunterlagen.",
      },
    ],
  },
  {
    slug: "bauaufsicht-unterlagen-koeln",
    title: "Bauaufsicht und Brandschutzunterlagen in Köln",
    excerpt:
      "Wer in Köln was prüft, welcher Brandschutznachweis zur Baugenehmigung gehört und warum widersprüchliche Pläne zum Zwischenbescheid führen – aus Genehmigungspraxis.",
    metaTitle: "Bauaufsicht Köln | Brandschutz Unterlagen | H&S+",
    metaDescription:
      "Bauaufsicht Köln & Brandschutz: Nachweis § 9 BauPrüfVO, Feuerwehr-Beteiligung, Vorgangsauskunft+, typische Mängel. Praxisratgeber H&S+.",
    keywords: [
      "Bauaufsicht Köln Brandschutz",
      "Brandschutz Unterlagen Bauantrag",
      "Brandschutznachweis BauPrüfVO NRW",
      "Bauaufsichtsamt Köln Genehmigung",
      "Vorgangsauskunft Brandschutz",
    ],
    sections: [
      {
        id: "zustaendigkeit",
        title: "Wer in Köln über Brandschutz im Bauantrag entscheidet",
        paragraphs: [
          "Die untere Bauaufsichtsbehörde des Landes NRW – beim Bauaufsichtsamt der Stadt Köln – prüft genehmigungspflichtige Vorhaben auf Einhaltung der BauO NRW und erteilt oder versagt die Baugenehmigung. Brandschutz ist Teil dieser Prüfung, nicht ein separates „Feuerwehr-Genehmigungsverfahren“.",
          "Die Berufsfeuerwehr Köln wird bei brandschutzrelevanten Bauanträgen regelmäßig als Fachdienststelle beteiligt (Stellungnahme zu Rettungswegen, Löschwasser, Brandmeldeanlage, Feuerwehrplänen). Ihre fachliche Bewertung fließt in die Entscheidung der Bauaufsicht ein – genehmigen tut allein die Bauaufsicht.",
          "Zusätzlich können weitere Stellen beteiligt werden (z. B. Umwelt- und Verbraucherschutzamt, Arbeitsschutz über Bezirksregierung). Der Bauherr bzw. Entwurfsverfasser reicht den Antrag ein; brandschutztechnische Nachweise kommen in der Regel von einem qualifizierten Brandschutzplaner oder Sachverständigen nach BauPrüfVO NRW.",
        ],
      },
      {
        id: "nachweis",
        title: "Brandschutznachweis: Pflichtbezeichnung und übliche Form",
        paragraphs: [
          "Maßgeblich ist der brandschutztechnische Nachweis nach § 9 BauPrüfVO NRW – die baurechtliche Pflichtunterlage zur Genehmigung. Methodisch orientiert sich die Praxis an VdS 3547; inhaltlich wird der Nachweis fast immer als Brandschutzkonzept (Kap. 1–4, Maßnahmenkatalog, Anhänge) oder als brandschutztechnische Stellungnahme zu einem klar abgegrenzten Vorhaben erbracht.",
          "Abgrenzung: Ein vollständiges Brandschutzkonzept mit Anhängen (Feuerwehrplanungsgespräch, Bauaufsicht, Brandabschnittspläne, Löschwasser) ist bei Sonderbau und wesentlicher Nutzungsänderung die Regel. Eine kurze Stellungnahme reicht nur, wenn das Vorhaben klein ist und die Bauaufsicht es akzeptiert – Details im Referenzartikel Konzept vs. Stellungnahme.",
          "Betriebsunterlagen wie Brandschutzordnung DIN 14096 oder Fluchtpläne nach DIN 14095 sind für den laufenden Betrieb wichtig, ersetzen aber den Genehmigungsnachweis zum Bauantrag nicht.",
        ],
        list: [
          "Genehmigung: Brandschutznachweis (Konzept oder Stellungnahme) + passende Bauzeichnungen",
          "Betrieb: BSO, Flucht- und Rettungspläne, Prüfprotokolle BMA/Sprinkler",
          "Bestand: frühere Baugenehmigungen und ggf. altes BSK mit einbeziehen",
        ],
      },
      {
        id: "kohaerenz",
        title: "Was die Bauaufsicht an den Unterlagen prüft",
        paragraphs: [
          "Entscheidend ist Nachvollziehbarkeit: Pläne, Konzept und Antragsgegenstand müssen dieselbe Ist- und Soll-Situation beschreiben. In einem realen Zwischenbescheid der Bauaufsicht Köln zur Nutzungsänderung (Umspannwerk-Teilfläche zu Lager) wurden u. a. Abweichungen zwischen Rettungswegplänen und Konzept, unklare Nutzungsfläche und fehlende Altgenehmigungen beanstandet – plus baurechtliche Mängel wie fehlende feuerhemmende Rauchschutztüren (T30-RS) zum notwendigen Treppenraum (§ 37 Abs. 10 BauO NRW) und fehlende Absturzsicherung (§ 41 Abs. 1 BauO NRW).",
          "Solche Punkte sind keine „Formalia“ – ohne Bereinigung ist der Antrag nicht genehmigungsfähig und das Verfahren ruht bis zur Nachreichung.",
        ],
        list: [
          "Rettungswegführung in Bauzeichnungen weicht vom Brandschutzkonzept ab – „in Übereinstimmung zu bringen“",
          "Beantragte Nutzungsänderungsfläche im Grundriss nicht eindeutig (Raumbezeichnungen, Gesamtfläche fehlen)",
          "Aktuell gültige Baugenehmigung(en) des Grundstücks nicht als Kopie nachgewiesen",
          "Baurechtliche Beanstandungen zu Türen, Fluren, Absturzsicherung zusätzlich zum Brandschutznachweis",
        ],
      },
      {
        id: "zeichnungen",
        title: "Bauzeichnungen und Brandschutzeintragungen",
        paragraphs: [
          "Grundrisse, Schnitte und Lageplan müssen den Antragsgegenstand klar abgrenzen (welche Flächen, welche Geschosse, was bleibt unverändert). Brandschutzeintragungen in den Plänen oder ein separates Konzept eines Sachverständigen – beides ist möglich, aber nicht widersprüchlich.",
          "Bei Bestandsgebäuden verlangt die Praxis regelmäßig Nachweise zum ersten Rettungsweg über untere Geschosse (z. B. EG und 1. OG), auch wenn nur ein Obergeschoss umgebaut wird – weil die Erschließung dort liegt.",
          "Technische Anlagen (RWA, BMA, Sprinkler, Entrauchung) brauchen Nachweise, die zum Konzept passen – nicht nur Symbolik in den Architekturplänen.",
        ],
      },
      {
        id: "feuerwehr",
        title: "Feuerwehr-Beteiligung – nicht mit Genehmigung verwechseln",
        paragraphs: [
          "Vor Einreichung lohnt sich bei vielen Vorhaben die Abstimmung mit der Berufsfeuerwehr Köln (Planungsgespräch, Vorab-Paket zu Rettungswegen und Zufahrt) – besonders wenn der zweite Rettungsweg über Feuerwehrgeräte begründet wird. Das Konzept sollte die schriftliche Feuerwehr-Stellungnahme referenzieren, bevor der Bauantrag vollständig wird.",
          "Brandmeldeanlagen mit Aufschaltung unterliegen in Köln zusätzlich den Technischen Anschlussbedingungen (TAB) der Feuerwehr – Planungsgespräch, Abnahme und Aufschaltung sind ein eigenes Verfahren neben der Baugenehmigung.",
          "Wer zuerst beim Bauamt einreicht und die Feuerwehr-Antwort nachreicht, riskiert Widersprüche und längere Verfahren – siehe [Feuerwehr-Abstimmung vor dem Bauamt](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw).",
        ],
      },
      {
        id: "einreichung",
        title: "Einreichung, Fristen und Formalia in Köln",
        paragraphs: [
          "Genehmigungsunterlagen werden in Köln über das Online-Verfahren Vorgangsauskunft+ eingereicht und nachgereicht; Fristen aus Zwischenbescheiden laufen dort. Nachreichungen brauchen die Übereinstimmungserklärung des Entwurfsverfassers nach § 7 BauPrüfVO NRW – ohne sie wird das Paket nicht bearbeitet.",
          "Aus der Praxis: Unterlagen nicht heften oder klemmen – die Behörde scannt einzelne Blätter. Arbeitsschutzrechtliche Erklärungen des Entwurfsverfassers sind separat gefordert; Abweichungen ggf. bei der Bezirksregierung Köln (Arbeitsschutz).",
          "Eine konkrete Checkliste „was ins Paket gehört“ (Konzept, Betriebsbeschreibung, Löschwasser, Anlagen) steht im Ratgeber Bauantrag Brandschutz – dieser Artikel erklärt die Rollen und die Logik dahinter.",
        ],
      },
      {
        id: "verfahren",
        title: "Ablauf: Eingang, Beteiligungen, Zwischenbescheid",
        paragraphs: [
          "Nach Antragseingang prüft die Bauaufsicht Vollständigkeit und beanstandet ggf. baurechtliche Mängel. Gleichzeitig werden Fachdienststellen eingebunden – in einem dokumentierten Fall Berufsfeuerwehr und Umweltamt – bevor die Genehmigungsfähigkeit abschließend beurteilt wird.",
          "Fehlt etwas Wesentliches, kommt ein Zwischenbescheid mit Frist (häufig ein Monat) und Anhörung nach Verwaltungsverfahrensgesetz. Bis zur vollständigen Nachreichung ruht der Antrag. Wer die Mängelliste brandschutztechnisch sauber beantwortet, kann in die weitere Prüfung kommen – Dauer hängt von Vollständigkeit und Auslastung ab, nicht von der bloßen Einreichung.",
        ],
        list: [
          "Antrag + erste Unterlagen → formale und fachliche Erstprüfung",
          "Zwischenbescheid → Mängelliste (Brandschutz, Pläne, Nachweise)",
          "Nachreichung über Vorgangsauskunft+ → Beteiligungen laufen weiter",
          "Baugenehmigung mit Auflagen oder Ablehnung",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler vor der Einreichung",
        paragraphs: [
          "Konzept und Architekturpläne widersprechen sich bei Rettungswegen oder Nutzungsfläche. Bestandsgenehmigungen fehlen, obwohl das Gebäude aus den 1970er Jahren stammt. Sonderbau oder Nutzungsänderung wurde nicht eingeordnet – dann fehlt der Nachweis ganz.",
          "Feuerwehr-Stellungnahme fehlt, obwohl § 33 BauO NRW (zweiter Rettungsweg, Zufahrt) im Konzept behauptet wird. BMA-TAB wird mit Baugenehmigung verwechselt – beides ist nötig, aber getrennt.",
          "BSO und Fluchtpläne werden als Ersatz für den Genehmigungsnachweis mitgeschickt – hilft der Prüferin nicht bei der Baugenehmigung.",
        ],
      },
      {
        id: "praxis",
        title: "Was wir in der Vorbereitung tun – und was nicht",
        paragraphs: [
          "Wir strukturieren brandschutztechnische Inhalte für Bauaufsicht und Feuerwehr: Nachweis, Pläne, Abstimmungsprotokolle, Antworten auf Zwischenbescheide – nachvollziehbar und widerspruchsfrei. Wir ersetzen keine Behörde und stellen keine Genehmigung aus.",
          "Sinnvolle Reihenfolge: Nutzung und Sonderbau klären → Bestandsunterlagen beschaffen → Feuerwehr-Vorab wenn nötig → Konzept oder Stellungnahme finalisieren → mit Entwurfsverfasser und Bauantrag einreichen.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Welche Unterlagen im Einzelfall Pflicht sind, legt die Bauaufsicht am konkreten Vorhaben fest – dieser Ratgeber ist Orientierung aus der Praxis, kein behördliches Merkblatt und kein Brandschutznachweis. Verbindlich sind BauO NRW 2018, BauPrüfVO NRW und die Festlegungen im jeweiligen Verfahren.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept, Nachweis oder Stellungnahme?" },
      { href: "/ratgeber/bauantrag-brandschutz-unterlagen-koeln", label: "Unterlagen-Checkliste Bauantrag" },
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid verstehen" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr vor dem Bauamt" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau § 50" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept erstellen" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Genehmigt die Feuerwehr Köln den Brandschutz?",
        answer:
          "Nein. Die Berufsfeuerwehr Köln wird fachlich beteiligt und erstellt Stellungnahmen (z. B. zu BMA, Rettungswegen). Die Baugenehmigung erteilt das Bauaufsichtsamt der Stadt Köln als untere Bauaufsichtsbehörde.",
      },
      {
        question: "Reicht eine Brandschutzordnung für den Bauantrag?",
        answer:
          "Nein. Die BSO regelt den Betrieb (DIN 14096). Zur Genehmigung brauchen Sie einen brandschutztechnischen Nachweis nach § 9 BauPrüfVO NRW – in der Praxis meist ein Brandschutzkonzept oder eine Stellungnahme zum Vorhaben.",
      },
      {
        question: "Warum widerspricht die Bauaufsicht Konzept und Pläne?",
        answer:
          "Weil beide dieselbe Rettungswegführung, Nutzungsfläche und Maßnahmen abbilden müssen. Abweichungen führen in der Praxis zu Nachforderungen („in Übereinstimmung bringen“) und verzögern die Genehmigung.",
      },
      {
        question: "Was ist die Vorgangsauskunft+?",
        answer:
          "Das Online-Verfahren der Stadt Köln für Bauanträge und Nachreichungen. Fristen aus Zwischenbescheiden laufen dort; Unterlagen werden digital eingestellt, nicht als geheftetes Papierpaket.",
      },
      {
        question: "Brauche ich immer ein vollständiges Brandschutzkonzept?",
        answer:
          "Bei genehmigungspflichtigen Sonderbauten und wesentlichen Nutzungsänderungen in der Regel ja. Bei kleinen, klar abgegrenzten Bestandsfragen kann eine brandschutztechnische Stellungnahme genügen – wenn die Bauaufsicht es akzeptiert.",
      },
      {
        question: "Was passiert bei einem Zwischenbescheid?",
        answer:
          "Der Antrag ist eingegangen, aber nicht genehmigungsfähig. Sie müssen die genannte Mängelliste fristgerecht nachreichen; bis dahin ruht das Verfahren. Es ist keine Ablehnung, solange Sie fachlich nachbessern können.",
      },
      {
        question: "Übernehmen Sie die Kommunikation mit dem Bauamt?",
        answer:
          "Wir erstellen und strukturieren fachliche Unterlagen und helfen bei der technischen Beantwortung von Brandschutz-Mängeln. Antragsteller bleibt der Bauherr bzw. Entwurfsverfasser; behördliche Entscheidungen trifft die Bauaufsicht.",
      },
    ],
  },
  {
    slug: "sprinkler-trockenbau-nutzungsaenderung-bauo-nrw",
    title: "Sprinkler und Trockenbau bei Nutzungsänderung",
    excerpt:
      "Sprinkler im Bestand und Trockenbau bis Decke: Spray-Muster, drei Varianten, Sonderbau § 50 – wann keine Komplettsanierung nötig ist.",
    metaTitle: "Sprinkler & Trockenbau | Nutzungsänderung NRW | H&S+",
    metaDescription:
      "Sprinkleranlage Bestand + Trockenbau bei Nutzungsänderung: Wirksamkeit, Varianten A–C, § 50 BauO NRW, VdS 12845. Praxisratgeber H&S+.",
    keywords: [
      "Sprinkler Nutzungsänderung",
      "Trockenbau Sprinkler Brandschutz",
      "Sprinkler Spray-Muster Abdachfläche",
      "Sonderbau BauO NRW",
      "Brandschutzkonzept Nutzungsänderung",
    ],
    sections: [
      {
        id: "falltyp",
        title: "Typischer Fall: Studio im 2. UG mit bestehender Tiefgaragen-Sprinkleranlage",
        paragraphs: [
          "In einem laufenden Projekt soll eine große Fläche im zweiten Untergeschoss eines Wohn- und Gewerbekomplexes von Park-/Nebennutzfläche zu einem besucherintensiven Studio umgebaut werden – mit bis zu etwa 110 Personen gleichzeitig. Die Fläche war früher in die Sprinkleranlage der Tiefgarage einbezogen. Geplant sind Trockenbauwände für Umkleiden und Nebenräume, idealerweise bis zur Deckenhöhe von rund 3,60 m.",
          "Die zentrale Frage ist nicht, ob ein Brandschutzkonzept nötig ist – bei dieser Nutzungsänderung in der Regel ja –, sondern ob „Sprinkler vorhanden“ mit dem Trockenbau vereinbar bleibt, ohne Pumpe, Riser und Zentrale komplett zu ersetzen.",
        ],
      },
      {
        id: "recht",
        title: "Rechtliche Einordnung: BauO, Sonderbau, Versammlungsstätte",
        paragraphs: [
          "Öffentlich zugängliche, personenreiche Nutzungen unterliegen den allgemeinen Anforderungen der BauO NRW; häufig ist § 50 BauO NRW (Sonderbau) zu prüfen – mit Anforderungen an Flucht- und Rettungswege (§ 33), ggf. Entrauchung und brandschutztechnischem Nachweis nach § 9 BauPrüfVO NRW.",
          "Die Versammlungsstättenverordnung NRW gilt nur, wenn dauerhaft mindestens 200 Personen gleichzeitig anwesend sein können. Darunter bleibt die Einordnung über Sonderbau und BauO – nicht „weniger Brandschutz“, aber andere Nachweislogik als bei einer Versammlungsstätte mit SBauVO Teil 1.",
          "Sprinkler: Eine Nutzungsänderung begründet nicht automatisch eine neue Sprinklerpflicht für das gesamte Gebäude. Maßgeblich ist, ob die vorhandene Anlage nach Umbau dem ursprünglich nachgewiesenen Schutzniveau entspricht – baurechtlich im Konzept, technisch nach VdS CEA 4001 / DIN EN 12845 und in der Praxis auch für die Sachversicherung.",
        ],
      },
      {
        id: "spray",
        title: "Warum Trockenbau bis Decke das Spray-Muster stört",
        paragraphs: [
          "Sprinklerköpfe sind für eine konkrete Raumgeometrie berechnet: Deckenhöhe, Hindernisse, offene Fläche und das Abdach-Spray-Muster (Tropfenverteilung unterhalb des Kopfes). Schließt Trockenbau den Wirkraum ein, entstehen tote Zonen – der hydraulische Nachweis der bestehenden Anlage gilt dann nicht mehr für die neuen Raumzellen.",
          "Das Problem entsteht unabhängig davon, ob Pumpe und Steigleitung noch funktionieren. Auch eine frühere Einbindung in die Tiefgaragen-Sprinkleranlage hilft nur, wenn die Köpfe die neuen Räume nach dem Umbau weiterhin erreichen – sonst ist fachlich eine Anpassung nötig.",
          "Parallel: Trockenbauwände mit brandschutzrechtlicher Funktion (Brandabschnitt, Rauchabschnitt) brauchen klassifizierte Bauteile und Abschottungen an Durchführungen (§§ 27–32 BauO NRW) – das ist getrennt von der Sprinklerfrage, aber im selben Umbau zu planen.",
        ],
      },
      {
        id: "varianten",
        title: "Drei Varianten aus der Praxis – nicht pauschal „alles neu“",
        paragraphs: [
          "In der brandschutztechnischen Stellungnahme oder im Konzept werden die Wege gegenübergestellt und eine Variante mit Sprinkler-Instandhaltung oder Fachplaner bestätigt:",
        ],
        list: [
          "Variante A: Zusätzliche Sprinklerköpfe in neuen Raumzellen – Erweiterung des bestehenden Strangs, kein Ersatz der Zentrale; Meldebereiche ggf. nach VdS CEA 4001 (häufig max. 1.600 m² pro Ebene) abstimmen",
          "Variante B: Trockenbau nur bis ca. 2,50 m – oberer Sprinkler- und Lüftungswirkraum an der Decke bleibt offen; optisch weniger „Raumhöhe“, technisch oft die wirtschaftlichste Lösung",
          "Variante C: Vollhöhenwände bis Decke nur mit nachgewiesener Durchdringung (hydraulische Berechnung, ggf. verlängerte Köpfe) – Fachplaner Sprinkler/VdS, keine pauschale Freigabe durch Architektur allein",
          "Immer: schriftliche Bestätigung Instandhaltung oder Fachplaner für das Genehmigungspaket; Pläne Ist/geplant und Strangschema der Sprinkleranlage",
        ],
      },
      {
        id: "komplex",
        title: "Gebäudekomplex, Brandabschnitt, fehlendes Gesamtkonzept",
        paragraphs: [
          "In Komplexen mit gemeinsamer Tiefgarage fehlt oft ein aktuelles brandschutztechnisches Gesamtkonzept des Eigentümers. Für die Nutzungsänderung in einem Teilbereich müssen Brandabschnitt, Erschließung (notwendige Treppenräume, Flure) und die Einbindung in die bestehende Sprinkler-/BMA-Technik vor dem Bauantrag geklärt werden.",
          "Die Bauaufsicht prüft den Antragsgegenstand gegen den Bestand – wer nur den Studio-Grundriss einreicht, ohne Tiefgaragen-Erschließung und Altgenehmigungen, erhält Nachforderungen. Ein Übersichtskonzept oder eine §-9-Fortschreibung des Eigentümers beschleunigt das Verfahren.",
        ],
      },
      {
        id: "entrauchung",
        title: "Untergeschoss, Personenzahl, Entrauchung",
        paragraphs: [
          "Personenreiche Nutzungen im UG sind brandschutztechnisch anspruchsvoll: Fluchtweglängen, zweiter Rettungsweg, Beleuchtung und Entrauchung/Rauchableitung stehen im Konzept – unabhängig vom Sprinkler. Sprinkler ersetzt keine Entrauchung und keine Rettungswegnachweise nach § 33 BauO NRW.",
          "Lüftungsplanung und Brandschutzplanung müssen früh zusammenlaufen – nachträgliche Kanalführung durch Trockenbauwände ohne Abschottung ist ein klassischer Abnahme-Mangel.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung: Sprinkler ergänzen vs. Sprinkler zurückbauen",
        paragraphs: [
          "Dieser Artikel behandelt den Konflikt „Sprinkler bleibt, Trockenbau kommt dazu“. Das Gegenteil – Sprinkler soll bei Umnutzung entfallen (z. B. Lager zu Büro mit geringerer Gefährdung) – braucht einen nachgewiesenen Ausgleich im Konzept (BMA, Löschwasser, ggf. höhere Bauklassen) und ist ein eigenes Thema; siehe [Sprinkler-Rückbau und BMA](/ratgeber/sprinkler-rueckbau-bma-nutzungsaenderung-koeln).",
          "Beides erfordert Konzept-Fortschreibung oder neues BSK – nicht nur eine interne Abschaltung der Anlage.",
        ],
      },
      {
        id: "checkliste",
        title: "Checkliste vor dem Bauantrag",
        list: [
          "Nutzung, max. Personenzahl und Betriebszeiten schriftlich",
          "Pläne Ist und geplant (UG, Schnitte, Deckenhöhen, Trockenbau-Höhen)",
          "Sprinkler-Unterlagen: Strangschema, Einbindung Tiefgarage, letzte Inspektion",
          "Variante A/B/C fachlich wählen und schriftlich bestätigen lassen",
          "Flucht- und Rettungswege, Brandabschnitt, Erschließung zum Gesamtgebäude",
          "Entrauchung/Lüftung mit Brandschutz abstimmen",
          "Brandschutznachweis (Konzept oder Stellungnahme) inkl. Sprinkler-Nachweis",
          "Eigentümer/Mieter: Genehmigungsverantwortung und Bestands-BSK klären",
        ],
        paragraphs: [
          "Wer Sprinkler und Trockenbau vor der Einreichung klärt, vermeidet Planungsstopp nach Zwischenbescheid und Konflikte bei Abnahme durch Sprinkler-Sachverständigen und Bauaufsicht.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Trockenbau bis Decke bestellen, bevor der Sprinkler-Fachplaner die Variante bestätigt hat. Annahme „Tiefgarage hat Sprinkler, reicht schon“ – ohne Prüfung der neuen Raumzellen. Nur Architekturpläne ohne Sprinkler-Nachweis einreichen.",
          "Variante B (Teilhöhe) planen, aber Umkleiden mit Volldecke ausführen. BMA oder Entrauchung vergessen, weil nur Sprinkler diskutiert wurde. Kein Bezug zum Gesamt-Brandabschnitt des Komplexes.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Hydraulik, Kopfpositionen und Versicherungsbedingungen sind Einzelfall-Technik – dieser Ratgeber ersetzt keine Berechnung durch einen Sprinkler-Fachplaner und keine behördliche Genehmigung. Verbindlich sind Konzept, Bauaufsicht und die Bestätigung der für die Anlage zuständigen Fachfirma.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme?" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau § 50" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/bauaufsicht-unterlagen-koeln", label: "Bauaufsicht & Unterlagen" },
      { href: "/ratgeber/sprinkler-rueckbau-bma-nutzungsaenderung-koeln", label: "Sprinkler-Rückbau (Gegenteil)" },
      { href: "/ratgeber/abschottungen-durchbrueche-baustelle-koeln", label: "Abschottungen im Umbau" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept erstellen" },
    ],
    faq: [
      {
        question: "Muss bei Nutzungsänderung die Sprinkleranlage komplett erneuert werden?",
        answer:
          "Nein, nicht pauschal. Oft reicht Variante A (zusätzliche Köpfe) oder B (Trockenbau nur bis ca. 2,50 m) mit Bestätigung der Instandhaltung. Variante C oder eine neue Zentrale sind die Ausnahme, wenn der hydraulische Nachweis sonst nicht gelingt.",
      },
      {
        question: "Was ist das Spray-Muster und warum ist es wichtig?",
        answer:
          "Die Tropfenverteilung unterhalb des Sprinklerkopfes (Abdachfläche). Verdeckt Trockenbau bis Decke diesen Bereich in neuen Zellen, ist der Raum nicht mehr im nachgewiesenen Schutzzustand – auch wenn die Anlage ansonsten funktioniert.",
      },
      {
        question: "Wer darf die Variante Sprinkler/Trockenbau freigeben?",
        answer:
          "Ein Sprinkler-Fachplaner oder die zuständige Instandhaltungsfirma mit Nachweis nach VdS/DIN EN 12845 – nicht der Architekt allein. Die schriftliche Stellungnahme gehört in das Brandschutzkonzept für die Bauaufsicht.",
      },
      {
        question: "Brauche ich bei unter 200 Personen keinen Sonderbau?",
        answer:
          "Unter 200 Personen entfällt die Versammlungsstättenverordnung, nicht zwingend der Sonderbau nach § 50 BauO NRW. Ein besucherintensives Studio im UG kann Sonderbau sein – Fluchtwege, Entrauchung und Nachweis bleiben anspruchsvoll.",
      },
      {
        question: "Ersetzt Sprinkler Entrauchung oder Fluchtwege?",
        answer:
          "Nein. Sprinkler ist Löschtechnik; Rettungswege nach § 33 BauO NRW und Entrauchung sind separate Pflichten im Konzept – besonders im Untergeschoss.",
      },
      {
        question: "Was, wenn der Eigentümer kein Gesamt-Brandschutzkonzept hat?",
        answer:
          "Dann muss der Antragsteller den betroffenen Brandabschnitt, die Erschließung und die Technik (Sprinkler, BMA) für den Umbau nachweisen – oft mit höherem Aufwand und Zwischenbescheiden. Ein Eigentümer-BSK oder Fortschreibung nach § 9 BauPrüfVO hilft.",
      },
      {
        question: "Was ist der Unterschied zu „Sprinkler zurückbauen“?",
        answer:
          "Hier bleibt die Anlage und muss den Umbau abdecken. Beim Rückbau soll Sprinkler entfallen – dann braucht es einen Ausgleich (BMA, Konzept-Fortschreibung). Beides ist genehmigungs- und konzeptpflichtig, nicht nur interne Technik.",
      },
    ],
  },
  {
    slug: "feuerwehr-abstimmung-vor-bauamt-bauo-nrw",
    title: "Feuerwehr-Abstimmung vor dem Bauamt",
    excerpt:
      "§ 33 BauO NRW, Zufahrt, zweiter Rettungsweg: warum die schriftliche Feuerwehr-Stellungnahme vor der Bauaufsicht kommt – Ablauf, Inhalt, Grenzen.",
    metaTitle: "Feuerwehr vor Bauamt | § 33 BauO NRW | H&S+",
    metaDescription:
      "Feuerwehr-Abstimmung vor Bauaufsicht: Vorab-Paket, Rettungswege, Löschwasser, Planungsgespräch vs. Genehmigung. Praxisratgeber NRW.",
    keywords: [
      "Feuerwehr Brandschutz Genehmigung",
      "Brandschutzkonzept Feuerwehr",
      "Feuerwehr Stellungnahme Bauantrag",
      "§ 33 BauO NRW Feuerwehr",
      "zweiter Rettungsweg Feuerwehr",
    ],
    sections: [
      {
        id: "grund",
        title: "Warum die Reihenfolge Feuerwehr → Konzept → Bauaufsicht",
        paragraphs: [
          "Die Bauaufsicht genehmigt das Vorhaben nach BauO NRW – die Feuerwehr ist dabei regelmäßig beteiligt, erteilt aber keine Baugenehmigung. Wer ein Brandschutzkonzept zuerst einreicht und die Feuerwehr-Stellungnahme erst nach Zwischenbescheid nachliefert, riskiert Monate Verzug und widersprüchliche Bewertungen.",
          "Besonders kritisch: der zweite Rettungsweg über Rettungsgeräte der Feuerwehr (§ 33 BauO NRW), Feuerwehrzufahrten und Löschwasser (§§ 4–6, § 14 BauO NRW), anleiterbare Dachfenster im Bestand und Sonderbau-Vorhaben mit Feuerwehrplänen nach DIN 14095. Hier ist die schriftliche Feuerwehr-Position vor der finalen Einreichung fachlich Standard.",
          "Bewährter Ablauf: Vorab-Paket → Stellungnahme (ggf. nach Begehung) → Konzept anpassen und referenzieren → Bauantrag mit konsistentem Paket.",
        ],
      },
      {
        id: "zustaendigkeit",
        title: "Beteiligung ist nicht Genehmigung",
        paragraphs: [
          "Die untere Bauaufsichtsbehörde prüft den brandschutztechnischen Nachweis nach § 9 BauPrüfVO NRW und holt Stellungnahmen ein. Die Berufsfeuerwehr bewertet insbesondere alles, was den Einsatz und die Personenrettung betrifft: Erreichbarkeit, Anleitbarkeit, Aufstellflächen, Hydranten, Feuerwehrpläne, BMA-Aufschaltung (eigenes Verfahren über TAB).",
          "Im Brandschutzkonzept wird das in Anhang A (Planungsgespräch / Stellungnahme Feuerwehr) und Anhang D (Löschwasser) dokumentiert. Ohne diese Anhänge oder mit „FW folgt“ im Konzept ist das Paket für die Bauaufsicht oft nicht genehmigungsfähig.",
        ],
      },
      {
        id: "wann",
        title: "Wann Vorab-Abstimmung Pflicht ist – und wann nicht",
        paragraphs: [
          "Vorab-Abstimmung ist nahezu immer nötig, wenn der zweite Rettungsweg über Feuerwehrgeräte begründet wird, Zufahrt oder Löschwasser umstritten sind, oder das Konzept ausdrücklich eine Feuerwehr-Stellungnahme voraussetzt.",
          "Weniger aufwendig: reine Innenumbauten ohne Änderung der Rettungswege ins Freie, wenn beide Wege über Treppen des Gebäudes sicher nachgewiesen sind und die Feuerwehr im Verfahren keine Bedenken meldet – trotzdem kann die Bauaufsicht die Beteiligung anordnen.",
          "Brandmeldeanlage mit Aufschaltung: Planungsgespräch und Abnahme bei der Feuerwehr sind zusätzlich und vor Baubeginn der BMA nötig (DIN 14675, kommunale TAB) – das ersetzt nicht die bauordnungsrechtliche Abstimmung zu Rettungswegen im Konzept.",
        ],
      },
      {
        id: "ablauf",
        title: "Vier Phasen in der Praxis",
        list: [
          "Phase 1: Vorab-Paket an die zuständige Berufsfeuerwehr (Nutzung, Pläne, Fotos, Rettungswege, klare Fragestellung, ggf. Kostenübernahmeerklärung)",
          "Phase 2: Begehung vor Ort, wenn Anleiterbarkeit, Dachfenster oder Zufahrt zu prüfen sind",
          "Phase 3: Schriftliche Stellungnahme abwarten, im Konzept zitieren (Datum, keine Bedenken / Auflagen)",
          "Phase 4: Finalisiertes Konzept + Bauantrag über Entwurfsverfasser bei der Bauaufsicht",
        ],
        paragraphs: [
          "In Dachgeschoss- und Spitzboden-Fällen ist Phase 2 fast immer Pflicht – Details im Ratgeber zum zweiten Rettungsweg über Dachfenster.",
        ],
      },
      {
        id: "inhalt",
        title: "Inhalt des Vorab-Pakets",
        paragraphs: [
          "Unvollständige Pakete verzögern die Antwort. Die Feuerwehr braucht eine nachvollziehbare Frage, nicht nur Pläne ohne Kontext.",
        ],
        list: [
          "Kurzbeschreibung: Nutzung, max. Personenzahl, Betriebszeiten, Antragsgegenstand vs. unverändert",
          "Lageplan mit Zufahrt, Hydranten, öffentliche Verkehrsfläche, Aufstellflächen",
          "Grundrisse und Schnitte Ist/geplant mit 1. und 2. Rettungsweg (farbig oder nummeriert)",
          "Fotos: Rettungswege, Türen, Dachfenster, Hindernisse (Bäume, Poller, Parkplätze)",
          "Bei Dachmaßnahmen: Lichtöffnung, Brüstung, Traufabstand, Anleiterbarkeit von der Straße",
          "Bestand: frühere Genehmigungen, bestehendes BSK, bekannte Auflagen",
          "Transparent: „Genehmigung nur unter Voraussetzung FW-Zustimmung“",
          "Ansprechpartner, ggf. Erklärung zur Kostenübernahme behördlicher Prüfung",
        ],
      },
      {
        id: "konzept",
        title: "Was im Brandschutzkonzept stehen muss",
        paragraphs: [
          "Das Konzept darf den zweiten Rettungsweg über die Feuerwehr nicht nur behaupten – es muss die Stellungnahme als Anlage führen oder in Anhang A das Planungsgespräch mit Protokoll dokumentieren. Löschwasser und Feuerwehrzufahrten gehören in Kap. 3 und Anhang D mit nachvollziehbaren Plänen.",
          "Formulierungen wie „Feuerwehr wird noch abgestimmt“ führen in der Praxis zum Zwischenbescheid. Besser: Einreichung erst nach Datum der FW-Stellungnahme; im Konzept Verweis „abgestimmt mit BF [Ort] vom …, keine Bedenken / mit Auflagen …“.",
        ],
      },
      {
        id: "kosten",
        title: "Kosten und Bearbeitungszeit",
        paragraphs: [
          "Feuerwehr-Leistungen (Planungsgespräch, Begehung, Abnahmen BMA) können gebührenpflichtig sein – in Kommunen mit Feuerwehrgebührensatzung ist eine Kostenübernahmeerklärung des Bauherrn oft erforderlich, bevor Termine vergeben werden.",
          "Bearbeitungszeiten variieren stark (Wochen bis Monate). Vorlauf in den Projektplan einbauen; parallele Bauantrag-Einreichung ohne FW-Antwort blockiert das Verfahren regelmäßig.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Konzept beim Bauamt einreichen, obwohl dort „Feuerwehr-Stellungnahme folgt“ steht. Nur Architekturpläne ohne Rettungsweg-Darstellung. Keine Begehung, obwohl Anleiterbarkeit behauptet wird.",
          "BMA-Planungsgespräch mit bauordnungsrechtlicher FW-Abstimmung verwechseln – beides nötig, getrennte Abläufe. Feuerwehr-Stellungnahme und Konzept widersprechen sich bei Zufahrtsführung oder Personenzahl.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Zuständige Stelle und Anforderungen unterscheiden sich zwischen Städten und Kreisen in NRW – dieser Ratgeber beschreibt die übliche Logik, nicht das Merkblatt einer einzelnen Behörde. Verbindlich sind die Stellungnahme der örtlichen Feuerwehr und die Entscheidung der Bauaufsicht.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw", label: "Zweiter Rettungsweg Dachfenster" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege § 33" },
      { href: "/ratgeber/bauaufsicht-unterlagen-koeln", label: "Bauaufsicht & Unterlagen" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept & Anhänge A–D" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/loeschwasser-hydranten-gewerbe-koeln", label: "Löschwasser & Hydranten" },
      { href: "/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln", label: "Feuerwehrpläne & Fluchtpläne" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept erstellen" },
    ],
    faq: [
      {
        question: "Genehmigt die Feuerwehr mein Brandschutzkonzept?",
        answer:
          "Nein. Die Feuerwehr gibt eine fachliche Stellungnahme ab. Die Baugenehmigung erteilt die Bauaufsicht – unter Einbezug der FW-Stellungnahme.",
      },
      {
        question: "Kann ich das Konzept ohne Feuerwehr-Stellungnahme einreichen?",
        answer:
          "Nur, wenn das Vorhaben keine FW-relevanten Punkte enthält und das Konzept keine Abstimmung voraussetzt. Bei zweitem Rettungsweg über FW-Geräte, Löschwasser oder anleitbaren Dachfenstern: praktisch nein.",
      },
      {
        question: "Was ist der Unterschied zum BMA-Planungsgespräch?",
        answer:
          "Das BMA-Planungsgespräch (DIN 14675, TAB) betrifft Brandmeldeanlagen und Aufschaltung. Die bauordnungsrechtliche Abstimmung betrifft Rettungswege, Zufahrt und Löschwasser im Genehmigungskonzept – beides parallel, nicht identisch.",
      },
      {
        question: "Muss die Feuerwehr vor Ort begehen?",
        answer:
          "Bei Anleiterbarkeit, Dachfenster als zweitem Rettungsweg und vielen Bestandsfällen ja. Bei klarer zweiter Treppe im Neubau manchmal nicht – die Feuerwehr entscheidet nach Unterlagenlage.",
      },
      {
        question: "Was passiert bei widersprüchlichen Stellungnahmen?",
        answer:
          "Deshalb zuerst Feuerwehr, dann Konzept anpassen, dann Bauaufsicht. Wer umgekehrt vorgeht, muss oft Konzept und Pläne nachziehen – mit Zwischenbescheid und Verzug.",
      },
      {
        question: "Gilt das nur in Köln?",
        answer:
          "Nein. Die Reihenfolge gilt in NRW überall, wo § 33 und Feuerwehrbeteiligung relevant sind. Formulare, Gebühren und Bearbeitungszeiten sind kommunal unterschiedlich.",
      },
      {
        question: "Wer schickt das Vorab-Paket?",
        answer:
          "Üblich: Brandschutzplaner, Entwurfsverfasser oder Bauherr im Auftrag des Vorhabenträgers. Entscheidend ist Vollständigkeit und eine klare Fragestellung – nicht das Briefpapier.",
      },
    ],
  },
  {
    slug: "escape-room-brandschutzordnung-fluchtplan",
    title: "Escape Room und besucherintensive Nutzung: BSO & Pläne",
    excerpt:
      "Escape Room, Studio im UG: Genehmigung (§ 50, Konzept) und Betrieb (BSO DIN 14096, Fluchtpläne DIN 14095) – Verriegelungen, mehrere Bereiche.",
    metaTitle: "Escape Room Brandschutz | BSO & Fluchtplan | H&S+",
    metaDescription:
      "Escape Room Brandschutz NRW: Sonderbau, BSO Teil A–C, Fluchtpläne, Verriegelungen, Begehung. Organisatorischer + baulicher Brandschutz – H&S+.",
    keywords: [
      "Escape Room Brandschutz",
      "Brandschutzordnung Escape Room",
      "Fluchtplan besucherintensive Nutzung",
      "DIN 14096 Brandschutzordnung",
      "besucherintensive Nutzung Untergeschoss",
    ],
    sections: [
      {
        id: "zwei-ebenen",
        title: "Zwei Ebenen: Genehmigung und laufender Betrieb",
        paragraphs: [
          "Escape Rooms, Erlebnis-Studios oder Lounges im Untergeschoss betreffen zwei getrennte Pflichten: Zum Bauen und Betreiben braucht es in der Regel ein genehmigtes Vorhaben mit brandschutztechnischem Nachweis (Brandschutzkonzept, § 50 BauO NRW, Entrauchung, Türen, Alarmierung). Für den laufenden Betrieb sind Brandschutzordnung nach DIN 14096 und Flucht- und Rettungspläne nach DIN 14095 Pflicht – abgestimmt auf die genehmigte Ist-Situation.",
          "Wer nur Fluchtpläne hängt, aber kein gültiges Konzept oder keine passende BSO hat, erfüllt die Betriebspflichten nicht. Wer nur die Baugenehmigung hat, aber nach Umbau an Spielräumen weder Pläne noch BSO fortgeschrieben hat, riskiert Mängel bei Brandschau, Versicherung und Behördenkontrollen.",
        ],
      },
      {
        id: "besonderheit",
        title: "Was Escape Rooms und Studios brandschutztechnisch ausmacht",
        paragraphs: [
          "Hohe Besucherfrequenz, mehrere Spielbereiche, Gäste ohne Ortskenntnis – oft im UG mit gemeinsamem Flur oder Treppenhaus. Das ist nicht automatisch Versammlungsstätte nach MVStättVO NRW (Schwelle dauerhaft 200 Personen gleichzeitig), kann aber Sonderbau nach § 50 BauO NRW und versammlungsstätten-ähnliche Anforderungen an Fluchtwege, Entrauchung und Nachweis auslösen.",
          "Besonders kritisch: Verriegelungen, Rätselverschlüsse und Einengungen – sie dürfen Rettungswege im Brandfall nicht blockieren. Was im Spiel Spannung erzeugt, muss im Konzept und in der BSO als sicherer Fluchtweg mit Notentriegelung dokumentiert sein.",
          "Verwandte Fälle: besucherintensive Studios in Gewerbekomplexen (z. B. UG mit bis zu ca. 110 Personen) – baulich oft Sprinkler/Trockenbau-Thema, organisatorisch dieselbe Logik.",
        ],
      },
      {
        id: "baulich",
        title: "Baulich und technisch (vor der BSO)",
        paragraphs: [
          "Maßgeblich ist das genehmigte Brandschutzkonzept: Brandabschnitte und Rauchabschnitte, Brandschutz- und Rauchschutzabschlüsse (z. B. T30-RS) in Fluren, Entrauchung/RWA im UG, BMA/Alarmierung, ggf. Sprinkler aus dem Bestand. Jeder Umbau ohne Fortschreibung von Konzept und Plänen erzeugt eine Lücke zwischen Genehmigung und Betrieb.",
        ],
        list: [
          "Zwei Rettungswege pro Nutzungseinheit mit Aufenthaltsräumen (§ 33 BauO NRW)",
          "Entrauchung und Beleuchtung der Fluchtwege im UG im Konzept",
          "Türen in notwendigen Fluren: selbstschließend, nicht aufgekeilt",
          "Verriegelungen nur mit genehmigter Lösung (Notöffnung, Überwachung)",
        ],
      },
      {
        id: "bso",
        title: "Brandschutzordnung nach DIN 14096 (Teil A, B, C)",
        paragraphs: [
          "Die BSO regelt organisatorischen Brandschutz – getrennt von den Fluchtplänen. Inhaltlich muss sie mit genehmigtem Konzept, Entrauchung, Alarmierung und den Plänen übereinstimmen. Prüfpflicht: mindestens alle zwei Jahre durch eine fachkundige Person – bei Umbauten oder neuer Personenzahl sofort anpassen.",
        ],
        list: [
          "Teil A: Aushang für alle (auch Gäste) – kurz, verständlich, vor Betreten der Spielbereiche",
          "Teil B: für ortskundiges Personal ohne besondere Brandschutzaufgaben",
          "Teil C: Aufgaben Brandschutzhelfer, Leitung, Evakuierung",
        ],
      },
      {
        id: "plaene",
        title: "Flucht- und Rettungspläne nach DIN 14095",
        paragraphs: [
          "Pläne zeigen „Sie sind hier“, Fluchtweg, Sammelstelle, Feuerlöscher – in der Sprache der Besucher. Bei mehreren Spielbereichen sind in der Praxis oft acht bis zehn lagebezogene Pläne sinnvoll (je Bereich/Ebene), nicht ein einziger Plan fürs gesamte UG.",
          "Feuerwehrpläne nach DIN 14095 (Einsatz) sind zusätzlich und gehören zum genehmigten Paket – nicht mit Gäste-Fluchtplan verwechseln. Nach jedem Umbau an Spielräumen: Pläne und BSO Teil A aktualisieren.",
        ],
      },
      {
        id: "begehung",
        title: "Begehung: Was vor Ort geklärt wird",
        paragraphs: [
          "Typisches Vorgehen: Ist-Aufnahme mit Betriebsleitung, Fotos kritischer Stellen, dann BSO und Pläne auf einen Stand bringen. Die genaue Plananzahl ergibt sich aus Begehung – häufig ein Plan je Bereich und Ebene.",
        ],
        list: [
          "Tatsächliche Fluchtwege je Spielbereich – inkl. Notentriegelung bei Verriegelungen",
          "Verschlüsse, Einengungen, blockierende Einrichtung",
          "Beschilderung, Notbeleuchtung, Alarmierung hörbar/sichtbar",
          "Abgleich mit genehmigtem Konzept (Entrauchung, Türen, BMA)",
          "Unterweisung Personal, Übungen, Dokumentation",
          "Fortschreibung bei Umbau oder neuen Spielbereichen",
        ],
      },
      {
        id: "bsk",
        title: "Brandschutzbeauftragter und typisches Paket",
        paragraphs: [
          "Besucherintensive Betriebe profitieren von einem Brandschutzbeauftragten: Begehungen, Unterweisungen, Fortschreibung BSO/Pläne, Schnittstelle Behörde und Versicherer. Evakuierungsübungen und Nachweis der Unterweisungen sind Pflicht.",
          "Typisch nach Eröffnung: BSO erstellen, Pläne nach Begehung, Betreuung im ersten Jahr – damit Pläne, Ordnung und Ist-Zustand übereinstimmen; sonst scheitert die Nachweisführung bei Kontrollen.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Rätselverriegelung ohne genehmigte Notöffnung. Ein Fluchtplan für alles bei fünf unterschiedlichen Spielbereichen. BSO kopiert von anderer Location. Konzept sagt 80 Personen, Betrieb lässt 120 zu.",
          "Umbau neuer Spielraum ohne Anpassung von Plänen und BSO Teil A. Brandschutztüren im Flur dauerhaft offen. Kein sichtbarer Teil-A-Aushang für Gäste.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Arbeitsschutz, Spielstättenrecht und Versicherungsbedingungen können zusätzlich verlangen. Dieser Ratgeber ersetzt keine behördliche Einordnung und keinen brandschutztechnischen Nachweis zur Genehmigung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau § 50" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege" },
      { href: "/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw", label: "Studio/UG & Sprinkler" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept vs. BSO" },
      { href: "/ratgeber/brandschau-koeln-feuerwehr", label: "Brandschau" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung (Leistung)" },
      { href: "/brandschutzbeauftragter-koeln", label: "Brandschutzbeauftragter" },
    ],
    faq: [
      {
        question: "Ist ein Escape Room immer eine Versammlungsstätte?",
        answer:
          "Nein. Ab 200 Personen dauerhaft gleichzeitig greift die MVStättVO NRW. Darunter oft Sonderbau nach § 50 mit anspruchsvollen Fluchtwegen, aber ohne SBauVO Teil 1 (Versammlungsstätte).",
      },
      {
        question: "Reicht ein Fluchtplan ohne Brandschutzordnung?",
        answer:
          "Nein. Der Plan zeigt Wege; die BSO regelt Verhalten, Verantwortlichkeiten, Übungen und Evakuierung. Beides muss zur genehmigten baulichen Situation passen.",
      },
      {
        question: "Dürfen Rätselverschlüsse die Fluchtwege sperren?",
        answer:
          "Nur mit im Konzept und in der BSO nachgewiesener Notentriegelung im Brandfall und unterwiesenem Personal. Pauschale Spielverriegelung ohne Nachweis ist nicht zulässig.",
      },
      {
        question: "Wie viele Fluchtpläne brauche ich?",
        answer:
          "So viele, dass jeder Gast den Weg aus seinem Bereich versteht – in der Praxis oft acht bis zehn Pläne nach Begehung, nicht pauschal einer.",
      },
      {
        question: "Wie oft muss die BSO überprüft werden?",
        answer:
          "Mindestens alle zwei Jahre nach DIN 14096 – bei Umbauten, neuer Personenzahl oder neuen Räumen sofort anpassen und prüfen.",
      },
      {
        question: "Brauche ich zuerst ein Brandschutzkonzept?",
        answer:
          "Für Eröffnung und Nutzungsänderung im UG mit vielen Besuchern: in der Regel ja zur Genehmigung. BSO und Pläne bauen auf dem genehmigten Stand auf.",
      },
      {
        question: "Was prüft die Feuerwehr bei der Brandschau?",
        answer:
          "Ob Betrieb und Unterlagen zur Genehmigung passen: Wege frei, Türen funktionsfähig, Pläne und BSO aktuell, Personal unterwiesen.",
      },
    ],
  },
  {
    slug: "zweiter-rettungsweg-dachfenster-bauo-nrw",
    title: "Zweiter Rettungsweg über Dachfenster und Feuerwehr",
    excerpt:
      "§ 33 BauO NRW: zweiter Rettungsweg über Dachflächenfenster und Feuerwehr – Anleiterbarkeit, Spitzboden, GK 5, Legalisierung im Bestand.",
    metaTitle: "2. Rettungsweg Dachfenster | § 33 BauO NRW | H&S+",
    metaDescription:
      "Zweiter Rettungsweg per Dachfenster & Feuerwehr: § 33 BauO NRW, Begehung, FW-Stellungnahme, Spitzboden § 34. Praxisratgeber NRW.",
    keywords: [
      "Zweiter Rettungsweg BauO NRW",
      "Rettungsweg Dachfenster Feuerwehr",
      "§ 33 BauO NRW Rettungsweg",
      "Spitzboden Brandschutz Genehmigung",
      "Anleiterbarkeit Feuerwehr",
    ],
    sections: [
      {
        id: "grundlage",
        title: "§ 33 BauO NRW: zwei Wege, zwei Funktionen",
        paragraphs: [
          "Nutzungseinheiten mit Aufenthaltsräumen brauchen in der Regel zwei voneinander unabhängige Rettungswege ins Freie (§ 33 BauO NRW). Der erste Weg führt typischerweise über eine notwendige Treppe oder einen notwendigen Flur. Der zweite Weg ist entweder eine weitere notwendige Treppe in anderer Richtung – oder eine Stelle, die mit Rettungsgeräten der Feuerwehr erreichbar ist, wenn die Personenrettung fachlich vertretbar ist.",
          "Unabhängig bedeutet: Fällt ein Weg durch Brand oder Rauch aus, bleibt der andere nutzbar. Beide Wege dürfen sich nicht ungeschützt in einem gemeinsamen Endstück vereinen. Grundlagen zu Fluren, Türen und Nutzerzahl: Referenzartikel Flucht- und Rettungswege.",
        ],
      },
      {
        id: "feuerwehr-weg",
        title: "Wann der zweite Weg über die Feuerwehr geht",
        paragraphs: [
          "Typisch bei Wohnungen im Dachgeschoss oder ausgebautem Spitzboden in Geschäftshäusern (GK 5): Eine zweite notwendige Treppe im Bestand fehlt oder ist baulich nicht darstellbar. Dann kann ein straßenseitiges Dachflächenfenster den zweiten Rettungsweg bilden – nicht automatisch, sondern nach Einzelfallprüfung.",
          "Voraussetzungen in der Praxis: ausreichende Lichtöffnung und Erreichbarkeit vom Innenraum, Anleiterbarkeit von der öffentlichen Verkehrsfläche ohne dauerhafte Hindernisse (Bäume, Stromleitungen, enge Höfe), Abstand zur Traufkante, Einsatzfähigkeit der örtlichen Feuerwehr (Hubrettungsfahrzeuge bei größerer Brüstungshöhe).",
          "Ab Brüstungshöhen, die nur mit Hubrettungsfahrzeugen erreichbar sind, muss die Einsatzplanung der Berufsfeuerwehr das voraussehen – pauschale Annahmen ohne Stellungnahme scheitern in der Genehmigung.",
        ],
      },
      {
        id: "dachfenster",
        title: "Dachflächenfenster: was geprüft wird",
        paragraphs: [
          "Das Fenster muss als Rettungsöffnung vom Wohnraum aus nutzbar sein – nicht nur lichttechnisch geplant. In Konzept und Plänen werden Lage, Höhe, Umgebung und Bedienbarkeit im Notfall dargestellt.",
        ],
        list: [
          "Erreichbarkeit und Öffnungsmaße vom Innenraum",
          "Anleiterbarkeit von Straße/Hof – Fotos und Sichtbeziehung",
          "Baumkronen, Vordächer, Nachbarbalkone: ggf. Baumpflege oder Nachweise",
          "Brüstungshöhe, Abstand Traufe/Giebel – Schnitt im Antrag",
          "Schriftliche Feuerwehr-Stellungnahme vor Einreichung beim Bauamt",
        ],
      },
      {
        id: "ablauf",
        title: "Ablauf: Begehung vor dem Bauantrag",
        paragraphs: [
          "Reihenfolge: Vorab-Paket an die Feuerwehr → Begehung vor Ort → schriftliche Stellungnahme → brandschutztechnische Stellungnahme oder Konzept mit Verweis → Bauantrag bei der Bauaufsicht.",
          "Ohne FW-Stellungnahme im Konzept riskieren Sie Zwischenbescheid oder Ablehnung. Details: Ratgeber Feuerwehr-Abstimmung vor dem Bauamt.",
        ],
      },
      {
        id: "spitzboden",
        title: "Spitzboden, Dachkammern und § 34 BauO NRW",
        paragraphs: [
          "Zusammenführung von Dachkammern oder Ausbau eines Spitzbodens innerhalb einer Wohnung betrifft oft § 34 BauO NRW (verkehrssichere und benutzbare Anlagen) – nicht die gleichen Anforderungen wie eine notwendige Gebäudetreppe nach § 33.",
          "Eine engere Innentreppe im Bestand kann unter § 34 und Gebrauchstauglichkeit bewertet werden, solange zwei Rettungswege für die Wohnung nachweisbar bleiben – erster Weg über die notwendige Haustreppe, zweiter über genehmigtes Dachfenster mit FW-Abstimmung.",
          "Antrag: Dachbereich klar abgrenzen; übrige Geschosse unverändert – ersetzt nicht den Nachweis der beiden Rettungswege.",
        ],
      },
      {
        id: "legalisierung",
        title: "Legalisierung und Bestandsschutz",
        paragraphs: [
          "Bereits ausgebauter Spitzboden ohne Genehmigung: Nachweis, dass gegenüber dem früheren Zustand kein Brandschutz verschlechtert wird und zwei Rettungswege fachlich begründet sind. Außerhalb der Wohneinheit Treppenhaus und Flure unverändert lassen.",
          "Oft reicht eine brandschutztechnische Stellungnahme mit FW-Protokoll – kein vollständiges Neubau-Konzept bei klar begrenztem Vorhaben. Denkmalschutz: früh abstimmen.",
        ],
      },
      {
        id: "gk5",
        title: "Gebäudeklasse 5 und Geschäftshäuser",
        paragraphs: [
          "Geschäfts- und Wohnhäuser mit Gewerbe im EG und Wohnungen darüber sind häufig GK 5. Dachmaßnahmen ändern die GK oft nicht, erhöhen aber die Sorgfalt bei Treppenhaus, Brandabschnitt und dokumentierter FW-Abstimmung.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Konzept ohne Straßenansicht oder aktuelle Baumlage. Nur ein Weg über das Treppenhaus. FW-Stellungnahme erst nach Bauantrag. Hofseitiges Fenster ohne erreichbare Anleitung.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Zulässigkeit entscheiden Feuerwehr (fachlich) und Bauaufsicht (Genehmigung) im Einzelfall. Dieser Ratgeber ersetzt keine Begehung und keinen Nachweis.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Flucht- und Rettungswege (Grundlagen)" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr vor dem Bauamt" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklasse 5" },
      { href: "/ratgeber/bauaufsicht-unterlagen-koeln", label: "Bauaufsicht & Unterlagen" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau im Bestand" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept und Stellungnahme" },
      { href: "/kontakt", label: "Erstberatung anfragen" },
    ],
    faq: [
      {
        question: "Ersetzt ein Dachfenster immer die zweite Treppe?",
        answer:
          "Nein. Ausnahme-Lösung über § 33 mit Feuerwehr-Rettungsgeräten, wenn zwei Treppen nicht möglich sind und Anleiterbarkeit sowie FW-Stellungnahme positiv ausfallen.",
      },
      {
        question: "Reicht ein Fenster zur Hofseite?",
        answer:
          "Nur, wenn die Feuerwehr die Erreichbarkeit fachlich bestätigt – oft problematisch bei engen Höfen. Straßenseitige Anleiterbarkeit ist der häufigere Fall.",
      },
      {
        question: "Was ist bei Legalisierung eines Spitzbodens wichtig?",
        answer:
          "Zwei Rettungswege nachweisen, kein Verschlechtern des übrigen Brandschutzes, FW-Begehung und Stellungnahme, Antrag auf den Dachbereich begrenzen.",
      },
      {
        question: "Brauche ich eine Feuerwehr-Begehung?",
        answer:
          "Praktisch immer, wenn der zweite Weg über Rettungsgeräte begründet wird. Ohne schriftliche Stellungnahme ist die Genehmigung selten belegbar.",
      },
      {
        question: "Was ist der Unterschied zu § 34 BauO NRW?",
        answer:
          "§ 33 regelt Rettungswege ins Freie. § 34 betrifft verkehrssichere Nutzbarkeit – z. B. innere Wohnungstreppe zum Spitzboden. Beides muss im Gesamtnachweis passen.",
      },
      {
        question: "Welche Rolle spielt Denkmalschutz?",
        answer:
          "Zusätzliche Auflagen zu Fenstern und Dachform. Brandschutz und Denkmalschutz früh gemeinsam klären.",
      },
      {
        question: "Kann ich nur das Fenster tauschen?",
        answer:
          "Wenn das Fenster Teil des zweiten Rettungswegs ist, ist jede Änderung an Öffnung oder Erreichbarkeit nachweispflichtig – nicht nur Handwerkerarbeit.",
      },
    ],
  },
  {
    slug: "fluchtplan-feuerwehrplan-aktualisieren-gewerbe",
    title: "Flucht- und Rettungspläne vs. Feuerwehrpläne – drei getrennte Systeme",
    excerpt:
      "BauO, ASR A2.3 und DIN 14095: Was die Bauaufsicht, der Arbeitsschutz und die Feuerwehr jeweils von Plänen erwarten – und wann Sie aktualisieren.",
    metaTitle: "Flucht- vs. Feuerwehrplan | ASR A2.3 | H&S+",
    metaDescription:
      "Flucht- und Rettungspläne (ASR A2.3) ≠ Feuerwehrpläne (DIN 14095) ≠ BauO-Nachweis. Drei Systeme erklärt – Aktualisierung nach Umbau.",
    keywords: [
      "Flucht- und Rettungsplan ASR A2.3",
      "Feuerwehrplan DIN 14095",
      "Fluchtplan aktualisieren Gewerbe",
      "BauO Rettungswege Nachweis",
      "Arbeitsschutz Fluchtwegplan",
    ],
    sections: [
      {
        id: "drei-systeme",
        title: "Drei Systeme – nicht verwechseln",
        paragraphs: [
          "In Gewerbe und Industrie werden drei Planarten oft in einen Topf geworfen. Fachlich sind es getrennte Regelwerke, Zuständigkeiten und Zielgruppen. Wer nur „einen Fluchtplan“ austauscht, kann trotzdem gegen BauO, Arbeitsschutz oder Feuerwehr verstoßen – je nachdem, welches Dokument fehlt oder veraltet ist.",
        ],
        list: [
          "Bauordnung NRW (§ 33 BauO NRW, Genehmigung): Nachweis der baulichen Rettungswege in Konzept/Plänen – keine ASR-Fluchtpläne für Beschäftigte als Baugenehmigungsunterlage",
          "Arbeitsschutz (ArbStättV, ASR A2.3): Flucht- und Rettungspläne für Beschäftigte/Besucher – aushängen, aktuell, Übungen",
          "Feuerwehr (DIN 14095, Brandschau): Feuerwehrpläne für Einsatzkräfte – Zufahrt, Hydranten, Brandabschnitte, Technik",
          "Betrieb (DIN 14096 BSO): Verhalten, Verantwortlichkeiten – ergänzt Pläne, ersetzt sie nicht",
        ],
      },
      {
        id: "bauordnung",
        title: "Was die Bauaufsicht bei der Genehmigung sieht",
        paragraphs: [
          "Die untere Bauaufsichtsbehörde prüft, ob das Gebäude die baulichen Anforderungen der BauO NRW erfüllt – insbesondere zwei voneinander unabhängige Rettungswege pro Nutzungseinheit mit Aufenthaltsräumen (§ 33), Weglängen, lichte Breiten, Brandabschnitte, feuerhemmende Rauchschutztüren (T30-RS), Entrauchung, ggf. Löschwasser.",
          "Dafür reichen Grundrisse, Schnitte und ein brandschutztechnischer Nachweis (Brandschutzkonzept oder Stellungnahme nach § 9 BauPrüfVO NRW) – mit farbigen Rettungswegführungen, Nutzerzahlen und ggf. zweitem Rettungsweg über Feuerwehr. Die grün/gelb ausgehängten Flucht- und Rettungspläne nach ASR A2.3 sind dafür in der Regel nicht das Einreichungsdokument zur Baugenehmigung.",
          "Nach Umbau oder Nutzungsänderung: Wenn sich Wege, Türen oder Personenzahlen ändern, kann ein neuer bauordnungsrechtlicher Nachweis nötig sein – unabhängig davon, ob der Betrieb schon neue ASR-Pläne hängt.",
        ],
      },
      {
        id: "arbeitsschutz",
        title: "Flucht- und Rettungspläne – ASR A2.3 (Arbeitsschutz)",
        paragraphs: [
          "Die Technische Regel ASR A2.3 „Fluchtwege und Notausgänge“ (Neufassung März 2022, Bundesanstalt für Arbeitsschutz) konkretisiert die Arbeitsstättenverordnung. Der Arbeitgeber muss Fluchtwege betrieblich nutzbar halten und – wo Lage, Größe oder Nutzung es erfordern – Flucht- und Rettungspläne erstellen, aushängen und üben.",
          "Typische Auslöser für Pläne: unübersichtliche Wege, viele ortsunkundige Personen (Publikumsverkehr, Besucher), erhöhte Brandgefährdung, große Hallen. Gestaltung: Sicherheitsfarben, Rettungszeichen, lagerichtig, aktuell – oft mehrere Pläne je Halle oder Geschoss.",
          "Hinweis: ASR A2.2 betrifft Feuerlöscher und Brandbekämpfung im Entstehungsstadium – nicht die Flucht- und Rettungspläne. In den Plänen werden Feuerlöscher-Standorte nach A2.2 eingetragen, die Planpflicht kommt aus A2.3.",
          "Zuständig prüfen: Berufsgenossenschaft, Arbeitsschutzbehörde, ggf. Sicherheitsfachkraft – nicht die Bauaufsicht für die Aushangpflicht im Betrieb.",
        ],
      },
      {
        id: "feuerwehr",
        title: "Feuerwehrpläne – DIN 14095 (Einsatz)",
        paragraphs: [
          "Feuerwehrpläne nach DIN 14095 dienen der Berufsfeuerwehr: Zufahrten, Aufstellflächen, Hydranten, Brandabschnitte, Löschmittel, Technik (BMA, RWA, Sprinkler), Gefahren. Sie hängen nicht für Besucher aus, sondern liegen am Feuerwehr-Anlaufpunkt / in der BSK-Mappe und werden bei Brandschau und Einsatz vorausgesetzt.",
          "Im Genehmigungsverfahren sind Feuerwehrpläne oft Teil des Brandschutzkonzepts (Anhang C) und werden mit der Berufsfeuerwehr abgestimmt – parallel zur bauordnungsrechtlichen Rettungswegnachweisung, nicht identisch mit dem ASR-Fluchtplan.",
          "Nach Umbau: Feuerwehrpläne und ggf. Laufkarten (BMA) müssen zum neuen Grundriss passen – sonst Einsatzverzögerung und Mängel bei Kontrollen.",
        ],
      },
      {
        id: "bso",
        title: "Brandschutzordnung (DIN 14096) – viertes Dokument",
        paragraphs: [
          "Die BSO regelt organisatorisch: Alarmierung, Evakuierung, Brandschutzhelfer, Übungen. Sie ersetzt weder den bauordnungsrechtlichen Nachweis noch die ASR-Pläne oder Feuerwehrpläne. Alle vier Ebenen müssen nach Umbau zusammenpassen – ein aktualisierter Fluchtplan bei veralteter BSO ist wertlos.",
        ],
      },
      {
        id: "wann",
        title: "Wann was aktualisiert werden muss",
        paragraphs: [
          "Ein Umbau löst oft mehrere Pflichten gleichzeitig aus:",
        ],
        list: [
          "BauO: neuer/angepasster brandschutztechnischer Nachweis bei genehmigungspflichtigem Umbau oder geänderter Nutzung",
          "ASR A2.3: Flucht- und Rettungspläne in betroffenen Bereichen neu oder angepasst",
          "DIN 14095: Feuerwehrpläne und BMA-Laufkarten fortgeschrieben",
          "DIN 14096: BSO und Unterweisungen, ggf. neue Evakuierungsübung",
          "Kennzeichnung ASR A1.3: Fluchtweg-Schilder und Sicherheitsbeleuchtung zum neuen Weg",
        ],
      },
      {
        id: "ablauf",
        title: "Sinnvoller Ablauf: eine Begehung, drei Planstände",
        paragraphs: [
          "Zuerst Ist-Aufnahme mit Betrieb: Wege, Türen, Sammelstellen, Technik, Hindernisse. Dann Abgleich mit genehmigtem Konzept (BauO) – Wege dürfen nicht widersprechen. Daraus: Fortschreibung Feuerwehrplan, Neuerstellung/Anpassung Flucht- und Rettungspläne je Zone, Update BSO Teil A (Aushang für alle).",
          "In Industriehallen sind oft viele lagebezogene Pläne sinnvoll – die Stückzahl ergibt sich aus der Begehung, nicht aus „ein Plan pro Gebäude“.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Verwechslungen in der Praxis",
        paragraphs: [
          "Nur ASR-Fluchtplan neu, aber Konzept und Feuerwehrplan noch mit alter Raumaufteilung. Feuerwehrplan an der Wand für Mitarbeiter – falsche Zielgruppe. Bauantrag mit Betriebs-Fluchtplan ohne Rettungsweg-Nachweis in Grundrissen.",
          "ASR A2.2 mit A2.3 verwechselt (Löscher vs. Fluchtplan). Genehmigung 2010, Pläne 2024 ohne behördliche Anpassung – Versicherung und Brandschau beanstanden trotzdem.",
        ],
      },
      {
        id: "praxis",
        title: "Was wir in der Praxis tun",
        paragraphs: [
          "Wir trennen die Dokumente bewusst: bauordnungsrechtliche Rettungswegnachweise für die Bauaufsicht, ASR A2.3-Flucht- und Rettungspläne für den Betrieb, Feuerwehrpläne nach DIN 14095 mit Abstimmung – aus einer Begehung, damit alle drei zum gleichen Ist-Zustand gehören.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber ersetzt keine Gefährdungsbeurteilung nach ArbStättV und keine behördliche Einordnung. Sonderbauten (§ 50) und Versammlungsstätten können zusätzliche Planarten und Dichten verlangen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerwehrplan-fluchtplaene-pflicht-koeln", label: "Wann welche Planart Pflicht ist" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege § 33 BauO NRW" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr vor dem Bauamt" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept vs. Betriebspläne" },
      { href: "/ratgeber/brandschau-koeln-feuerwehr", label: "Brandschau" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung" },
      { href: "/ratgeber/escape-room-brandschutzordnung-fluchtplan", label: "Besucherintensive Nutzung" },
    ],
    faq: [
      {
        question: "Braucht die Bauaufsicht Flucht- und Rettungspläne nach ASR A2.3?",
        answer:
          "In der Regel nein als Genehmigungsunterlage. Sie erwartet den brandschutztechnischen Nachweis der baulichen Rettungswege (Grundrisse, Konzept). ASR-Pläne sind Arbeitsschutz für den laufenden Betrieb.",
      },
      {
        question: "Was ist der Unterschied zwischen Flucht- und Rettungsplan und Feuerwehrplan?",
        answer:
          "Flucht- und Rettungspläne (ASR A2.3): für Beschäftigte/Besucher, aushängen, Wege zur Sammelstelle. Feuerwehrpläne (DIN 14095): für Einsatzkräfte, Technik, Zufahrt. Beide müssen zum gleichen Gebäudestand passen, sind aber verschiedene Dokumente.",
      },
      {
        question: "Ist ASR A2.2 für Fluchtpläne zuständig?",
        answer:
          "Nein. ASR A2.2 regelt Feuerlöscher und Maßnahmen gegen Entstehungsbrände. Flucht- und Rettungspläne stehen in ASR A2.3 (Abschnitt 10).",
      },
      {
        question: "Wann muss ich die Pläne nach einem Umbau erneuern?",
        answer:
          "Sobald sich Wege, Türen, Nutzung oder Personenzahl ändern – für alle betroffenen Systeme: bauordnungsrechtlicher Nachweis (falls genehmigungspflichtig), ASR A2.3-Pläne, Feuerwehrpläne, BSO.",
      },
      {
        question: "Reicht ein alter Plan bei kleinen Änderungen?",
        answer:
          "Selten. Verschobene Regale, neue Türen oder ein zusätzlicher Raum können die Fluchtrichtung ändern. Kurze Begehung klärt, welche der drei Planarten betroffen sind.",
      },
      {
        question: "Wer prüft die ausgehängten Fluchtpläne?",
        answer:
          "Arbeitsschutz (Berufsgenossenschaft, Fachkraft für Arbeitssicherheit), nicht die Bauaufsicht im Betriebsalltag. Die Feuerwehr prüft bei Brandschau eher Feuerwehrpläne und Einsatzvoraussetzungen.",
      },
      {
        question: "Was ist mit der Brandschutzordnung?",
        answer:
          "BSO nach DIN 14096 ist organisatorisch (Verhalten, Verantwortliche, Übungen). Sie ergänzt ASR A2.3-Pläne und Feuerwehrpläne, ersetzt den bauordnungsrechtlichen Nachweis nicht.",
      },
    ],
  },
  {
    slug: "arztpraxen-zusammenlegen-brandschutz-koeln",
    title: "Arztpraxen zusammenlegen: Brandschutz im Bestand (GK 5)",
    excerpt:
      "Zwei Praxen zu einer Gemeinschaftspraxis: Rettungswege, Trennwand, Stellungnahme vs. Konzept – aus einem genehmigten Verfahren in NRW.",
    metaTitle: "Arztpraxen zusammenlegen Köln | Brandschutz",
    metaDescription:
      "Arztpraxen zusammenlegen: GK 5, § 33 Rettungswege, Stellungnahme zum Bestands-BSK. Nutzungsänderung BauO NRW – Ratgeber H&S+.",
    keywords: [
      "Arztpraxis zusammenlegen Brandschutz",
      "Gemeinschaftspraxis Nutzungsänderung",
      "Brandschutztechnische Stellungnahme Praxis",
      "Rettungswege Arztpraxis Bestand",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall aus der Praxis",
        paragraphs: [
          "In einem abgeschlossenen Genehmigungsverfahren (2025/2026) sollten zwei benachbarte Arztpraxen im 2. Obergeschoss eines Wohn- und Geschäftshauses aus den 1970er Jahren zu einer gemeinsamen Orthopädiepraxis zusammengelegt werden. Geplant war eine Öffnung in einer nichttragenden Trennwand – ohne Eingriffe in Treppenhaus, Flure oder technische Brandschutzanlagen.",
          "Das Gebäude ist der Gebäudeklasse 5 zuzuordnen (Mischnutzung Wohnen/Gewerbe, mehrere Nutzungseinheiten). Für die Genehmigung war entscheidend: Das Vorhaben darf das bestehende, bereits behördlich abgestimmte Brandschutzkonzept des Objekts nicht verschlechtern – und die Rettungswege für die zusammengelegte Nutzungseinheit müssen nachvollziehbar bleiben.",
        ],
      },
      {
        id: "einordnung",
        title: "Gebäudeklasse, Sonderbau, Genehmigungspflicht",
        paragraphs: [
          "Eine normale Facharzt- oder Gemeinschaftspraxis ist in der Regel kein Sonderbau nach § 50 BauO NRW (anders Krankenhäuser, große Pflegeeinrichtungen oder besondere Anlagen). Entscheidend sind hier Gebäudeklasse, Bestand und die bauliche Änderung – nicht die Fachrichtung auf dem Praxisschild.",
          "Die Zusammenlegung ist bauordnungsrechtlich relevant: Öffnung einer Trennwand, geänderte Nutzungseinheit, ggf. geänderte Personenströme und Wartebereiche. Das löst einen Bauantrag mit brandschutztechnischem Nachweis aus – auch wenn Treppenhaus und zentrale Brandschutzanlagen unangetastet bleiben.",
          "Abgrenzung: Nur organisatorische Fusion ohne bauliche Verbindung (zwei Mietverträge, zwei Eingänge) kann anders einzuordnen sein. Sobald eine Durchbruchswand geplant ist, ist Brandschutz Teil der Genehmigung.",
        ],
      },
      {
        id: "rettungswege",
        title: "Rettungswege – der eigentliche Prüfpunkt",
        paragraphs: [
          "§ 33 BauO NRW verlangt für Nutzungseinheiten mit Aufenthaltsräumen zwei voneinander unabhängige Rettungswege. Im Bestandsfall prüft die Bauaufsicht, ob die zusammengelegte Praxis das weiterhin erfüllt – nicht nur, ob die Fläche passt.",
          "Im dokumentierten Fall: Die straßenseitige Einheit (ca. 166 m²) hatte Fenster zur Straße; die hofseitige Einheit (ca. 87 m²) zunächst nur zum Innenhof. Durch die Verbindung erhält die Hofeinheit über die geöffnete Trennwand Zugang zu den straßenseitigen Fenstern – der zweite Rettungsweg wird damit fachlich begründbar, sofern Weglängen, Fensterabmessungen und Erreichbarkeit vom Feuerwehr-Rettungsgerät stimmen.",
          "Der erste Rettungsweg blieb der notwendige Flur zum notwendigen Treppenraum (unverändert). Deshalb forderte die Behörde Grundrisse auch aus EG und 1. OG: Der Weg vom Gebäudeeingang bis zur Praxis muss in der Gesamtkette nachvollziehbar sein.",
        ],
      },
      {
        id: "brandschutz",
        title: "Brandschutztechnische Kernthemen am Umbau",
        list: [
          "Zwei ehemalige Nutzungseinheiten werden zu einer Einheit (ca. 253 m² Gesamtfläche im 2. OG)",
          "Öffnung in der Trennwand: feuerhemmender, dichter und selbstschließender Abschluss (passend zum Bestand und zur Nutzung)",
          "Keine Änderung am notwendigen Flur, notwendigen Treppenraum, Druckbelüftung und bestehenden Rauchschutzabschlüssen (T30-RS)",
          "Brandschutztechnische Stellungnahme nur zu den durch die Zusammenlegung verursachten Änderungen – Bezug auf älteres, genehmigtes Gesamtkonzept des Objekts",
        ],
        paragraphs: [
          "Die innere Trennwand war nicht tragend – trotzdem brandschutzrelevant: Sie trennte zuvor zwei Nutzungsbereiche. Nach Öffnung entsteht ein zusammenhängender Brandabschnitts- bzw. Nutzungsbereich; der Abschluss in der Öffnung begrenzt die Brandübertragung wieder auf ein behördlich akzeptables Maß.",
        ],
      },
      {
        id: "nachweise",
        title: "Stellungnahme, Konzept oder Fortschreibung?",
        paragraphs: [
          "Nachweis-Logik in drei Stufen – die Bauaufsicht entscheidet im Einzelfall:",
          "Im Praxisfall reichte eine brandschutztechnische Stellungnahme, weil ein Gesamtkonzept des Gebäudes existierte und nur die Zusammenlegung neue Fragen zu Rettungswegen und Trennwand aufwarf. Ohne Konzeptakte hätte die Behörde ein vollständiges BSK nachgefordert – wie im Zwischenbescheid zunächst angedeutet.",
        ],
        list: [
          "Vollständiges Brandschutzkonzept: bei fehlendem Bestandsnachweis, Sonderbau, grundlegend neuer Nutzung oder wenn die Behörde es ausdrücklich verlangt",
          "Brandschutztechnische Stellungnahme: bei klar abgegrenztem Umbau und vorhandenem, genehmigtem Gesamtkonzept – nur die Änderung wird nachgewiesen",
          "Fortschreibung nach § 9 BauPrüfVO NRW: wenn ein altes Konzept formal fortgeführt und an den Ist-Zustand angepasst wird",
        ],
      },
      {
        id: "unterlagen",
        title: "Unterlagenpaket für die Bauaufsicht",
        list: [
          "Bauantrag mit einheitlichen, übereinstimmenden Plänen (alle betroffenen Geschosse, Schnitte)",
          "Lageplan mit korrekten Grundstücksgrenzen (BauPrüfVO NRW)",
          "Baubeschreibung und Betriebsbeschreibung (Wartebereich, Personen, Öffnungszeiten)",
          "Brandschutztechnische Stellungnahme oder Konzept mit Rettungswegnachweis § 33",
          "Bestandsnachweise: Entrauchung notwendiger Treppenraum (§ 35 Abs. 8 BauO NRW), feuerhemmende Wände notwendiger Flur (§ 36 Abs. 4 BauO NRW)",
          "Optional: Einordnung Barrierefreiheit (§ 49 BauO NRW) oder Unverhältnismäßigkeit im Bestand",
        ],
        paragraphs: [
          "Typischer Ablauf bei Mängeln: Zwischenbescheid mit Frist – Nachreichung Stellungnahme und Pläne – Genehmigung mit Auflagen (brandschutztechnische Umsetzung, Bauzustandsbesichtigung). Details zum Bescheid siehe den verlinkten Ratgeber; Fristen werden in vielen Verfahren digital über Vorgangsauskunft+ gesetzt.",
        ],
      },
      {
        id: "betrieb",
        title: "Nach der Genehmigung: Betrieb und Arbeitsschutz",
        paragraphs: [
          "Die Baugenehmigung regelt den baulichen Zustand. Für den laufenden Betrieb kommen zusätzlich Arbeitsschutz und Organisation: Flucht- und Rettungspläne nach ASR A2.3 (neue Wegführung durch die Praxis), Brandschutzordnung DIN 14096, Unterweisung, ggf. Feuerwehrplan-Fortschreibung – getrennt vom bauordnungsrechtlichen Nachweis, aber inhaltlich abgestimmt.",
          "Wer nur die Baugenehmigung feiert, aber keine betrieblichen Pläne anpasst, erfüllt die Anforderungen im Alltag nicht.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung zu anderen Praxisvorhaben",
        paragraphs: [
          "Zusammenlegen ≠ Praxisumbau mit Bildgebung: Röntgen/MRT, höhere Brandlasten Medizintechnik oder Nähe zum Krankenhaus können Sonderbau- oder Konzeptfragen auslösen – dafür siehe den Ratgeber Praxis-Umbau (Batch).",
          "Zusammenlegen ≠ reine Innenrenovierung ohne Wandöffnung: ohne bauliche Änderung oft kein neuer brandschutztechnischer Bauantrag – trotzdem Arbeitsschutz prüfen.",
          "Zusammenlegen mit OP-Bereich, Narkose oder stationären Betten: frühzeitig prüfen, ob Pflege-/Krankenhaustatbestände oder erhöhte Personenzahlen andere Anforderungen triggern.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Die häufigsten Verzögerungen entstehen, wenn der Umbau als „klein“ eingestuft wird, der Nachweis aber wie bei einem Neubau fehlt:",
        ],
        list: [
          "„Nur eine Wand“ – ohne Rettungswegnachweis für die neue Gesamteinheit",
          "Altes BSK nicht beschafft – Behörde verlangt dann Vollkonzept",
          "Pläne nur 2. OG – fehlende Geschosse für ersten Rettungsweg",
          "Öffnung ohne feuerhemmenden, selbstschließenden Abschluss",
          "Genehmigung erteilt, ASR-Fluchtpläne und BSO nicht angepasst",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber beschreibt ein konkretes Genehmigungsmuster in NRW (GK 5, Bestand). Er ersetzt keine behördliche Einordnung Ihres Objekts und keinen brandschutztechnischen Nachweis. Medizinrecht, Strahlenschutz und Hygiene sind separate Themen.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid Brandschutz" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege § 33" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme?" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne nach Umbau" },
      { href: "/ratgeber/praxis-umbau-brandschutz-koeln", label: "Praxis-Umbau Bildgebung" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept" },
    ],
    faq: [
      {
        question: "Brauche ich immer ein vollständiges Brandschutzkonzept?",
        answer:
          "Nein. Bei klar abgegrenzter Zusammenlegung und vorhandenem, genehmigtem Gesamtkonzept der Immobilie reicht oft eine brandschutztechnische Stellungnahme – wenn Rettungswege und Bestand nachvollziehbar belegt sind. Fehlt ein Konzept, fordert die Behörde regelmäßig ein vollständiges BSK.",
      },
      {
        question: "Muss die Öffnung zwischen den Praxen abgeschottet werden?",
        answer:
          "Ja, in der Regel mit einem feuerhemmenden, dichten und selbstschließenden Abschluss – abgestimmt auf Bestand, Nutzung und das bestehende Brandschutzkonzept des Gebäudes.",
      },
      {
        question: "Ist eine Arztpraxis ein Sonderbau?",
        answer:
          "Eine normale Praxis oder Gemeinschaftspraxis ist meist kein Sonderbau nach § 50 BauO NRW. Krankenhäuser, große Pflegeeinrichtungen oder besondere technische Anlagen sind andere Tatbestände – im Zweifel früh klären.",
      },
      {
        question: "Warum will die Behörde Pläne aus dem Erdgeschoss?",
        answer:
          "Für den ersten Rettungsweg: Weg vom öffentlichen Zugang über Flur und Treppenraum bis zur Praxis. Nur der 2.-OG-Plan reicht dafür nicht.",
      },
      {
        question: "Was ändert sich an den Rettungswegen durch die Zusammenlegung?",
        answer:
          "Aus zwei getrennten Nutzungsbereichen wird eine Einheit. Besonders kritisch: ob weiterhin zwei unabhängige Rettungswege zur Verfügung stehen – z. B. Treppenhaus plus Fenster/Notausgang mit erreichbarer Höhe.",
      },
      {
        question: "Reicht die Baugenehmigung für Fluchtpläne im Betrieb?",
        answer:
          "Nein. ASR A2.3-Flucht- und Rettungspläne und BSO sind Arbeitsschutz/Organisation – nach Umbau an die neue Wegführung anpassen, unabhängig vom bauordnungsrechtlichen Nachweis.",
      },
      {
        question: "Kann ich zwei Praxen nur organisatorisch zusammenlegen?",
        answer:
          "Ohne bauliche Verbindung entfällt oft der bauordnungsrechtliche Umbau-Nachweis – aber Mietrecht, Nutzungseinheiten und Arbeitsschutz bleiben zu klären. Mit Durchbruch in der Trennwand ist ein Bauantrag üblich.",
      },
    ],
  },
  {
    slug: "zwischenbescheid-brandschutz-bauamt-koeln",
    title: "Zwischenbescheid der Bauaufsicht: Brandschutz-Mängel verstehen",
    excerpt:
      "Vervollständigung, Fristen, typische Nachforderungen § 33/35/36 BauO NRW – und wie Sie aus zwei realen Verfahren in NRW antworten.",
    metaTitle: "Zwischenbescheid Brandschutz Köln | Bauamt",
    metaDescription:
      "Zwischenbescheid Bauaufsicht: Brandschutz-Mängel, Fristen Vorgangsauskunft+, § 35/36 BauO NRW. Antwort strukturieren – Ratgeber H&S+.",
    keywords: [
      "Zwischenbescheid Bauamt",
      "Brandschutz Baugenehmigung Mängel",
      "Vervollständigung Bauantrag",
      "Brandschutznachweis Nachreichung",
    ],
    sections: [
      {
        id: "was-ist",
        title: "Was ist ein Zwischenbescheid?",
        paragraphs: [
          "Ein Zwischenbescheid (häufig „Vervollständigung“ oder Mängelbescheid) bedeutet: Der Bauantrag ist eingegangen, aber noch nicht genehmigungsfähig. Die untere Bauaufsichtsbehörde listet fehlende oder unzureichende Unterlagen auf und setzt eine Frist – in vielen Verfahren in NRW digital, in Köln über die Vorgangsauskunft+.",
          "Das ist kein Ablehnungsbescheid und kein Baubescheid. Wer die Mängel fachlich und vollständig nachreicht, kann in die weitere Prüfung kommen. Wird die Frist versäumt, gilt der Antrag in der Regel als zurückgenommen; die Anhörung vorher ist Verwaltungsverfahren, kein „Nein“ zum Vorhaben.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Zwischenbescheid vs. Ablehnung vs. Genehmigung",
        paragraphs: [
          "Drei Ergebnisse verwechseln Betreiber leicht:",
          "Brandschutz steht in allen drei Phasen im Spiel – aber beim Zwischenbescheid geht es fast immer um Vollständigkeit und Widerspruchsfreiheit der Nachweise, nicht um die endgültige bauliche Bewertung.",
        ],
        list: [
          "Zwischenbescheid: Nachbesserung der Unterlagen – Verfahren läuft weiter nach Fristeinhaltung",
          "Ablehnung / Zurückweisung: Antrag nicht genehmigungsfähig, oft nach mehreren Runden oder bei unlösbaren Konflikten",
          "Baugenehmigung (Baubescheid): Vorhaben genehmigt, mit Auflagen (Umsetzung Brandschutz, Bauzustandsbesichtigung)",
        ],
      },
      {
        id: "typisch-praxis",
        title: "Fall 1: Praxiszusammenlegung (Bestand, GK 5)",
        paragraphs: [
          "In einem abgeschlossenen Verfahren zur Zusammenlegung von Arztpraxen im 2. OG forderte die Bauaufsicht unter anderem:",
          "Antwort: brandschutztechnische Stellungnahme mit Bezug auf bestehendes Gesamtkonzept, Bestandsfotos, EG/1.-OG-Pläne – danach Baugenehmigung (ca. neun Monate Antrag bis Genehmigung im dokumentierten Fall).",
        ],
        list: [
          "Brandschutzeintragungen in allen Plänen oder Brandschutzkonzept eines Sachverständigen",
          "Nachweis Entrauchung notwendiger Treppenraum (§ 35 Abs. 8 BauO NRW, Fenster mind. 0,50 m² freier Querschnitt)",
          "Nachweis feuerhemmende Wände notwendiger Flur (§ 36 Abs. 4 BauO NRW)",
          "Grundrisse EG und 1. OG für ersten Rettungsweg (§ 33 Abs. 2 BauO NRW)",
          "Überarbeiteter Lageplan (Grundstücksgrenzen)",
          "Barrierefreiheit (§ 49 BauO NRW) oder Unverhältnismäßigkeit im Bestand",
        ],
      },
      {
        id: "typisch-lager",
        title: "Fall 2: Nutzungsänderung (Umspannwerk-Teilfläche zu Lager)",
        paragraphs: [
          "In einem anderen Zwischenbescheid zur Nutzungsänderung (Technikgebäude zu Lager) ging es weniger um „fehlende Pläne“ als um Widersprüche und Bestandslücken:",
          "Lehre: Ein Zwischenbescheid kann den gesamten Antrag blockieren, wenn Konzept, Pläne und Betriebsbeschreibung nicht dieselbe Ist- und Soll-Situation beschreiben – auch wenn der Umbau „klein“ wirkt.",
        ],
        list: [
          "Abweichungen zwischen Rettungswegdarstellung in Plänen und Brandschutzkonzept",
          "Unklare oder widersprüchliche Nutzungsflächenangaben",
          "Fehlende oder nicht nachvollziehbare Altgenehmigungen zum Bestand",
          "Baurechtliche Mängel am Bestand: fehlende feuerhemmende Rauchschutztüren (T30-RS) zum notwendigen Treppenraum (§ 37 Abs. 10 BauO NRW)",
          "Weitere baurechtliche Punkte (z. B. Absturzsicherung § 41 Abs. 1 BauO NRW) – oft im selben Bescheid wie Brandschutz",
        ],
      },
      {
        id: "antwort",
        title: "Wie Sie fachlich antworten",
        paragraphs: [
          "Struktur, die in der Praxis funktioniert: Mängelliste nummeriert übernehmen → je Punkt Antwort mit Verweis (Planblatt, Konzept-Kapitel, Foto, Altgenehmigung) → klare Trennung Antragsgegenstand / nicht betroffen.",
          "Bei Bestand: frühere Genehmigungen und Brandschutzkonzept sichten. Was wurde für Entrauchung, Flure, Rettungswege damals festgelegt? Verändert das aktuelle Vorhaben diese Anlagen nicht, kann Bestandsschutz nach § 83 BauO NRW relevant sein – die Bewertung trifft die Behörde.",
          "Nachreichung nur mit Übereinstimmungserklärung des Entwurfsverfassers nach § 7 BauPrüfVO NRW – sonst wird das Paket nicht bearbeitet. Pläne, Stellungnahme und Konzept müssen denselben Stand zeigen.",
        ],
      },
      {
        id: "nachweise",
        title: "Welche Brandschutz-Nachweise nachgereicht werden",
        paragraphs: [
          "Die Behörde fordert selten „irgendwas zum Brandschutz“, sondern konkrete Dokumente:",
        ],
        list: [
          "Vollständiges Brandschutzkonzept oder brandschutztechnische Stellungnahme (wenn im Bescheid gefordert)",
          "Fortschreibung nach § 9 BauPrüfVO NRW bei vorhandenem Alt-Konzept",
          "Pläne mit einheitlichen Brandschutzeintragungen (Rettungswege, Brandabschnitte, feuerhemmende Rauchschutztüren T30-RS)",
          "Bestandsnachweise § 35/36 (Fotos, Protokolle Druckbelüftung, Wandaufbau Flur)",
          "Abstimmungsprotokolle Feuerwehr, wenn BMA oder Sonderbau im Verfahren",
        ],
      },
      {
        id: "ablauf",
        title: "Empfohlener Ablauf nach dem Bescheid",
        paragraphs: [
          "Parallel zum bauordnungsrechtlichen Nachweis die Fachbeteiligungen im Online-Verfahren prüfen (Brandschutz, ggf. Feuerwehr, Statik).",
        ],
        list: [
          "Mängelliste nach Gewerken trennen (Brandschutz, Architektur, Statik, TGA)",
          "Historisches BSK und Altgenehmigungen beschaffen",
          "Begehung: Treppenraum, Flur, Türen, Rettungswege fotografieren",
          "Stellungnahme oder Konzept und Pläne auf einen Stand bringen",
          "Fristgerechte Nachreichung inkl. § 7 BauPrüfVO-Erklärung",
        ],
      },
      {
        id: "timeline",
        title: "Typischer Verlauf in der Praxis",
        paragraphs: [
          "In der Praxiszusammenlegung (2. OG): etwa neun Monate zwischen Antrag und Genehmigung – mit Zwischenbescheid, Nachreichung und Auflagen zur brandschutztechnischen Umsetzung. Kein Garantiewert, aber realistische Größenordnung bei Bestand und Nacharbeit.",
        ],
        list: [
          "Monat 0: Bauantrag",
          "Zwischenbescheid + Frist",
          "Nachreichung Stellungnahme und Pläne/Bestand",
          "Fachprüfung, ggf. Rückfragen",
          "Baugenehmigung mit Auflagen",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler bei der Antwort",
        list: [
          "Nur eine E-Mail statt strukturierter Nachreichung in Vorgangsauskunft+",
          "Stellungnahme beantwortet Punkt 3, Pläne widersprechen in Punkt 5",
          "Frist verstreichen lassen",
          "Bestand behaupten ohne Altgenehmigung oder Foto",
          "Feuerwehr-Themen im Bescheid ignorieren, obwohl BMA betroffen",
        ],
        paragraphs: [
          "Wer früh vor Antrag Konzept, Pläne und Betriebsbeschreibung abstimmt, reduziert Zwischenbescheide auf das technisch Unvermeidbare – siehe [Bauaufsicht Unterlagen](/ratgeber/bauaufsicht-unterlagen-koeln).",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erklärt Muster aus Genehmigungsverfahren in NRW. Er ersetzt keine Rechtsberatung und keine behördliche Entscheidung. Fristen und Anforderungen können je nach Bezirk und Vorhaben variieren.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/bauaufsicht-unterlagen-koeln", label: "Unterlagen Bauaufsicht" },
      { href: "/ratgeber/arztpraxen-zusammenlegen-brandschutz-koeln", label: "Praxiszusammenlegung" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme?" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz § 83" },
      { href: "/brandschutzkonzept-koeln", label: "Brandschutzkonzept" },
    ],
    faq: [
      {
        question: "Ist ein Zwischenbescheid dasselbe wie eine Ablehnung?",
        answer:
          "Nein. Er fordert zur Nachbesserung auf. Eine Ablehnung kommt erst, wenn das Vorhaben nicht genehmigungsfähig ist oder Fristen verstreichen und der Antrag als zurückgenommen gilt.",
      },
      {
        question: "Muss ich jeden Brandschutz-Mangel selbst beantworten?",
        answer:
          "Sie können einen Sachverständigen oder Brandschutz-Ingenieur beauftragen. Die Stellungnahme geht im Namen des Bauherrn an die Behörde, meist über den Entwurfsverfasser mit § 7 BauPrüfVO-Erklärung.",
      },
      {
        question: "Wie lange dauert es nach dem Zwischenbescheid bis zur Genehmigung?",
        answer:
          "Abhängig von Vollständigkeit und Auslastung. Im dokumentierten Praxisfall etwa neun Monate vom Antrag bis zur Genehmigung – mit Zwischenbescheid und Nacharbeit.",
      },
      {
        question: "Warum fordert die Behörde Pläne aus anderen Geschossen?",
        answer:
          "Für den ersten Rettungsweg vom Gebäudeeingang bis zur Nutzungseinheit. Nur der Plan des Umbau-Geschosses reicht oft nicht (§ 33 BauO NRW).",
      },
      {
        question: "Reicht eine kurze E-Mail zur Mängelbehebung?",
        answer:
          "In der Regel nein. Nachreichung erfolgt strukturiert im Online-Verfahren mit übereinstimmenden Unterlagen und Erklärung nach § 7 BauPrüfVO NRW.",
      },
      {
        question: "Kann ich mit Bestandsschutz auf Nachweise verzichten?",
        answer:
          "Nur, wenn der Bestand nachvollziehbar belegt ist und das Vorhaben nicht verschlechtert. Die Behörde entscheidet; fehlende Altunterlagen führen fast immer zu Nachforderungen.",
      },
      {
        question: "Was, wenn Pläne und Konzept widersprechen?",
        answer:
          "Typischer Auslöser für Zwischenbescheide bei Nutzungsänderungen. Vor Nachreichung einen einheitlichen Stand erarbeiten – Rettungswege, Flächen, Nutzung.",
      },
    ],
  },
  {
    slug: "imbiss-ladenlokal-nutzungsaenderung-koeln",
    title: "Vom Ladenlokal zum Imbiss: Nutzungsänderung und Brandschutz",
    excerpt:
      "Ca. 65 m², Fritteuse und Holzkohlegrill: Was bei Nutzungsänderung, § 29 Trennwänden, § 64 Verfahren und Stellungnahme in der Praxis zählt.",
    metaTitle: "Ladenlokal zum Imbiss | Nutzungsänderung Köln",
    metaDescription:
      "Ladenlokal zu Imbiss: § 64 BauO NRW, Trennwände § 29, Küche/Grill, Stellungnahme. Sonderbau-Grenze – Ratgeber H&S+ NRW.",
    keywords: [
      "Nutzungsänderung Imbiss",
      "Ladenlokal Imbiss Genehmigung",
      "Brandschutz Gastronomie klein",
      "vereinfachtes Baugenehmigungsverfahren § 64",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall: Ladenlokal wird Imbiss",
        paragraphs: [
          "In einem abgeschlossenen Genehmigungsprojekt (NRW, 2024/2025) sollte ein ebenerdiges Ladenlokal (ca. 65 m²) in ein Imbissgeschäft umgewandelt werden: zwei Küchenbereiche (Backen, Frittieren, Spüle), Grillstation mit Holzkohle, kleiner Gastbereich mit Stehtischen (unter 20 m²) – überwiegend Mitnahme und kurzer Verzehr am Tresen.",
          "Die brandschutztechnische Stellungnahme beschrieb Raum für Raum Nutzung, Öffnungszeiten, Trennwände zum Nachbarn, Küchengefährdung und organisatorische Maßnahmen. Überschaubare Fläche – aber deutlich höhere Brandlast als im früheren Einzelhandel.",
        ],
      },
      {
        id: "einordnung",
        title: "Sonderbau, Gebäudeklasse, Nutzungsänderung",
        paragraphs: [
          "Ein kleiner Imbiss mit wenigen Sitzplätzen ist in der Regel kein Sonderbau nach § 50 Abs. 2 BauO NRW (Schwelle Schank- und Speisegaststätte: mehr als 200 Gastplätze im Gebäude). Das entbindet nicht von BauO-Anforderungen – nur von der Sonderbau-Konzeptpflicht.",
          "Maßgeblich ist die tatsächliche Nutzung: Küche mit Fett und offener Flamme, Abluft, Personen im Gastbereich, Öffnungszeiten. Ein reines Ladenlokal ohne Zubereitung ist brandschutzrechtlich ein anderes Risikoprofil – deshalb Nutzungsänderung und brandschutztechnischer Nachweis.",
          "Die Gebäudeklasse des Gebäudes (häufig GK 3 oder 5 in Geschäftshäusern) steuert Feuerwiderstände der Bauteile; die Imbissfläche allein bestimmt die GK nicht.",
        ],
      },
      {
        id: "verfahren",
        title: "§ 64 vereinfachtes Verfahren vs. Vollverfahren",
        paragraphs: [
          "Nach § 64 BauO NRW kann die Bauaufsicht ein vereinfachtes Baugenehmigungsverfahren zulassen, wenn das Vorhaben in Anlage 1 Abschnitt II Nr. 1.2.1 der BauPrüfVO NRW (Anlage I/2) eingereiht werden kann – typisch kleine Gewerbenutzungen ohne Sonderbau-Komplexität.",
          "Die Entscheidung trifft die Behörde: Lage im Gebäude, bauliche Eingriffe (Trennwände, Abluft, Elektro), Bestand und Nachbarschaft können das Vollverfahren erforderlich machen. Im dokumentierten Fall: Bauantrag mit Stellungnahme, einheitlichen Plänen und Betriebsbeschreibung.",
          "Abgrenzung: Nur „Gewerbeanmeldung“ ohne bauliche/Nutzungsänderung ersetzt keine Baugenehmigung, wenn Küche, Wände oder Abluft neu sind.",
        ],
      },
      {
        id: "trennwaende",
        title: "Trennwände zum Nachbarn – § 29 BauO NRW",
        paragraphs: [
          "§ 29 Abs. 2 BauO NRW verlangt Trennwände zwischen Nutzungseinheiten und zu anders genutzten Räumen (ausgenommen notwendige Flure). Beim Umbau Laden → Imbiss ist die Wand zum angrenzenden Mieter/Nachbarn oft der kritische Punkt – im Plan als Trennung zum „anderen Nutzungsbereich“ dargestellt.",
          "Im Praxisfall: Die Wand von Küche 2 bis zum Bürobereich war feuerhemmend (F 30) nachzurüsten oder zu ertüchtigen; Tür in Küche 2 feuerhemmend, dicht und selbstschließend. Eingangs- und WC-Bereich: Trennwände ebenfalls feuerhemmend auszuführen.",
          "Öffnungen in Trennwänden nur in erforderlicher Zahl und Größe – mit feuerhemmenden, dichten und selbstschließenden Abschlüssen. Das ist klassischer Brandabschnitts-Gedanke, nicht „Rauchwand“.",
        ],
      },
      {
        id: "kueche",
        title: "Küche, Grill, Fett – technischer Brandschutz",
        list: [
          "Oberhalb von Fritteusen und Grilleinrichtungen: Wand- und Deckenbekleidungen nichtbrennbar (keine tropfenden/gasenden Materialien im Brandfall)",
          "Frittier- und Bratgeräte auf nichtbrennbaren Unterlagen",
          "Abluftleitungen und Abzugshauben nichtbrennbar; Feuerschutzklappen, wo Brandübertragung in andere Bereiche möglich ist",
          "Fettbrandlöscher (Brandklasse F) an Fritteuse/Grill – ergänzend zur Grundausstattung nach ASR A2.2",
          "Brandschutz- und Evakuierungshelfer schulen (organisatorisch, DIN 14096 BSO)",
        ],
        paragraphs: [
          "Holzkohlegrill im Verkaufsraum erhöht Brandlast und Rauchrisiko – in der Stellungnahme und Betriebsbeschreibung klar benennen, Abluft und Reinigungsintervalle mitdenken.",
        ],
      },
      {
        id: "rettungswege",
        title: "Fluchtwege und Gastbereich",
        paragraphs: [
          "Ebenerdige Ladenlokale haben oft einen Hauptfluchtweg direkt zum Ausgang ins Freie – der Eingang ist zugleich Notausgang, Türen während Öffnungszeiten von innen ohne Hilfsmittel öffnen.",
          "Kleiner Gastbereich (< 20 m², Stehtische): trotzdem in Plänen und Stellungnahme Rettungsweg und Hindernisse darstellen – keine Einengung durch Kühltheken, Lager oder Bestuhlung.",
          "Bauordnung (Rettungswege in Genehmigung) und Arbeitsschutz (ASR A2.3 Flucht- und Rettungspläne im Betrieb) sind getrennte Ebenen – beide nach Eröffnung aktuell halten.",
        ],
      },
      {
        id: "stellungnahme",
        title: "Inhalt einer brandschutztechnischen Stellungnahme",
        paragraphs: [
          "Für kleine Nutzungsänderungen reicht oft eine brandschutztechnische Stellungnahme statt Voll-Brandschutzkonzept – wenn kein Sonderbau und der Bestand nachvollziehbar ist. Gliederung aus der Praxis:",
        ],
        list: [
          "Schutzziele § 14 BauO NRW (Vorbeugung, Brandausbreitung, Rettung, Löschangriff)",
          "Raumprogramm: Küche 1/2, Grill, Gast, Büro/Personal – Flächen und Öffnungszeiten",
          "Baulicher Brandschutz: feuerhemmende Trennwände (F 30), Türen, Notausgang",
          "Technisch/organisatorisch: Löscher LE, Abluft, Bekleidungen, Brandschutzhelfer",
          "Anlage: Übersichtsplan mit farbigen Eintragungen (feuerhemmende Wände)",
        ],
      },
      {
        id: "unterlagen",
        title: "Unterlagenpaket für die Bauaufsicht",
        list: [
          "Bauantrag (vereinfacht oder vollständig) mit einheitlichen Plänen",
          "Baubeschreibung und Betriebsbeschreibung (Abläufe, Küche, Personen)",
          "Brandschutztechnische Stellungnahme",
          "Lageplan mit Grundstücksgrenzen (BauPrüfVO NRW)",
          "Nachweise Trennwände/Türen, Fluchtwege; ggf. Abluft/Feuerwehr bei BMA",
        ],
        paragraphs: [
          "Widersprüchliche Pläne (Gastfläche, Küchengrenzen) führen zum Zwischenbescheid – vor Einreichung abstimmen. Fristen in digitalen Verfahren (z. B. Vorgangsauskunft+) einhalten.",
        ],
      },
      {
        id: "betrieb",
        title: "Nach Eröffnung: Betrieb und Arbeitsschutz",
        paragraphs: [
          "Genehmigung ≠ fertiger Betriebsbrandschutz: Feuerlöscher prüfen lassen (alle zwei Jahre), Fluchtwege freihalten, BSO Teil A aushängen, jährliche Unterweisung, ggf. Flucht- und Rettungsplan ASR A2.3 im Gastbereich.",
          "Erhöhte Brandgefährdung nach ASR A2.2 kann bei Imbiss mit Frittieren/Grill über Grundausstattung hinausgehen – Gefährdungsbeurteilung ArbStättV dokumentieren.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung: Imbiss vs. Restaurant vs. nur Löscher",
        paragraphs: [
          "Imbiss mit < 20 m² Gast und Mitnahme-Fokus ≠ Restaurant mit 120 Sitzplätzen (Sonderbau-Prüfung ab 200 Gastplätze im Gebäude).",
          "Nutzungsänderung mit Stellungnahme ≠ nachträglich nur Feuerlöscher kaufen ohne Genehmigung der Wand-/Abluft-Eingriffe.",
          "Baugenehmigung ≠ Feuerwehr-Brandschau ohne separate Voraussetzungen (BMA, FSD) – bei größeren Objekten relevant.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Die häufigsten Verzögerungen beim Laden-zu-Imbiss-Umbau:",
        ],
        list: [
          "Küche einbauen, Nachbarwand nicht auf feuerhemmende Ausführung (F 30) prüfen",
          "Fettbrandlöscher fehlt trotz Fritteuse",
          "Brennbare Bekleidung über Grill",
          "Gastbereich blockiert Fluchtweg",
          "Stellungnahme sagt eine Raumaufteilung, Plan eine andere",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber basiert auf einem dokumentierten NRW-Fall (ca. 65 m²). Andere Lagen (OG ohne zweiten Rettungsweg, Denkmal, Gaststätte im Komplex) können deutlich mehr Nachweise verlangen. Keine behördliche Einordnung, kein Ersatz für Lebensmittelhygiene oder Gewerberecht.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/sonderbauten-geregelt-ungeregelt-bauo-nrw", label: "Gastronomie & § 50" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln", label: "Zwischenbescheid" },
      { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Feuerlöscher Gastronomie" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne nach Umbau" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung" },
    ],
    faq: [
      {
        question: "Braucht ein kleiner Imbiss immer eine Baugenehmigung?",
        answer:
          "Bei Nutzungsänderung und baulichen Anpassungen (Wände, Küche, Abluft) in der Regel ja. Ob § 64 vereinfachtes Verfahren möglich ist, entscheidet die Bauaufsicht – vor Baubeginn klären.",
      },
      {
        question: "Ist ein Imbiss mit 65 m² ein Sonderbau?",
        answer:
          "Meist nein – die 200-Gastplätze-Schwelle im Gebäude ist nicht erreicht. Sonderbau-Regeln und vollständiges Konzept können trotzdem bei anderen Tatbeständen (z. B. Versammlungsstätte im Haus) greifen.",
      },
      {
        question: "Warum muss die Wand zum Nachbarn feuerhemmend sein?",
        answer:
          "§ 29 BauO NRW: Trennung von Nutzungseinheiten und anders genutzten Räumen. Küche mit Fett/Flamme erhöht das Risiko – die Trennwand begrenzt Brandübertragung (feuerhemmend, F 30; dichte, selbstschließende Türen).",
      },
      {
        question: "Reicht eine brandschutztechnische Stellungnahme statt Brandschutzkonzept?",
        answer:
          "Bei kleinen, klar abgegrenzten Nutzungsänderungen oft ja. Fehlt Bestandsnachweis oder liegt Sonderbau vor, fordert die Behörde ein vollständiges Konzept.",
      },
      {
        question: "Ist ein Holzkohlegrill im Laden zulässig?",
        answer:
          "Nicht pauschal verboten, aber brandschutzintensiv: nichtbrennbare Bekleidungen, Abluft, Fettbrandlöscher, Reinigung und Darstellung in Stellungnahme/Betriebsbeschreibung sind üblich.",
      },
      {
        question: "Welche Feuerlöscher brauche ich?",
        answer:
          "Grundausstattung nach ASR A2.2 (LE nach Grundfläche, mindestens 6 LE pro Gerät) plus Fettbrandlöscher an Fritteuse/Grill. Orientierung im verlinkten Ratgeber Feuerlöscher Gastronomie.",
      },
      {
        question: "Brauche ich Fluchtpläne?",
        answer:
          "Für die Genehmigung: Rettungswegnachweis in Plänen/Stellungnahme. Im Betrieb: Flucht- und Rettungspläne nach ASR A2.3, wo Lage oder Publikumsverkehr es erfordern – plus BSO.",
      },
    ],
  },
  {
    slug: "eilbegehung-brandschutz-restaurant-gewerbe-koeln",
    title: "Eilbegehung Brandschutz: laufenden Betrieb prüfen",
    excerpt:
      "Kurzbegehung vor Ort – Abgrenzung zu Genehmigung und Brandschau, Prüfpunkte Arbeitsschutz, Sofortmaßnahmen aus einem Restaurant-Fall (ca. 90 m²).",
    metaTitle: "Eilbegehung Brandschutz Köln | Gewerbe",
    metaDescription:
      "Eilbegehung Brandschutz: Fluchtwege, ASR A2.2/A2.3, keine Baugenehmigung. Gastronomie & Gewerbe – Ratgeber H&S+.",
    keywords: [
      "Eilbegehung Brandschutz",
      "Brandschutzbegehung Gastronomie",
      "Brandschutz vor Ort Gewerbe",
      "Arbeitsschutz Brandschutz Betrieb",
    ],
    sections: [
      {
        id: "was",
        title: "Was ist eine Eilbegehung?",
        paragraphs: [
          "Eine Eilbegehung ist eine kurzfristige, fokussierte Sichtprüfung des Ist-Zustands im laufenden Betrieb – mit schriftlichem Kurzbericht (Sofort- und mittelfristige Maßnahmen), aber ohne vollständiges Brandschutzkonzept oder Gutachten im Genehmigungsniveau.",
          "Typische Anlässe: Übernahme eines Restaurants oder Imbisses, Vorbereitung auf Behörden- oder Versicherungstermin, Mängelhinweis der Berufsgenossenschaft, vor geplantem Umbau („Was ist zuerst zu tun?“).",
        ],
      },
      {
        id: "abgrenzung",
        title: "Was eine Eilbegehung nicht ist",
        paragraphs: [
          "Drei Ebenen nicht verwechseln – ergänzt den Ratgeber zu Flucht-/Feuerwehrplänen und Nutzungsänderungen:",
          "Die Eilbegehung kann Lücken aufdecken, die später ein Genehmigungsverfahren oder eine brandschutztechnische Stellungnahme brauchen – sie ersetzt diese Nachweise aber nicht.",
        ],
        list: [
          "Bauaufsicht / Genehmigung: Brandschutzkonzept, Stellungnahme, Pläne § 33 – für Umbau und Nutzungsänderung, nicht für „Betrieb läuft weiter“",
          "Feuerwehr-Brandschau: Einsatzvoraussetzungen, Feuerwehrpläne DIN 14095, BMA – behördlich/feuerwehrlich, nicht identisch mit Arbeitgeber-Begehung",
          "Eilbegehung: Arbeitsschutz und organisatorischer Brandschutz (ASR A2.2, A2.3, BSO, DGUV V3) – Ist-Zustand, Prioritäten, Dokumentation",
        ],
      },
      {
        id: "wann",
        title: "Wann sich eine Eilbegehung lohnt",
        list: [
          "Betriebsübernahme ohne vollständige Brandschutz-Dokumentation",
          "Küche/Fritteuse neu oder unsicher, ob Löscher und Wege passen",
          "Flure voller Lager, Türen blockiert – vor Inspektion aufräumen wollen",
          "Geplanter Umbau: Bestand klären, bevor Architekt und Stellungnahme starten",
          "Nach Mahnung BG/SiFa – strukturierte Antwort vorbereiten",
        ],
        paragraphs: [
          "Weniger sinnvoll als Ersatz für: formale Brandschau, vollständiges BSK für Sonderbau, oder reine Bauantrags-Unterlagen ohne Vor-Ort-Ist.",
        ],
      },
      {
        id: "praxis",
        title: "Praxisfall: Restaurant (ca. 90 m²)",
        paragraphs: [
          "Bei einer Eilbegehung (2026) eines Restaurants mit Gastraum, Küche (zwei Fritteusen, keine offene Grillfläche), Nebenräumen, Treppenraum und Toilette im Untergeschoss (ca. 30 Sitzplätze, ca. 6 Beschäftigte) u. a.:",
          "Flächenangaben im Betrieb mit Grundriss/Nutzungsbewilligung abgleichen – abweichende Angaben führen zu falscher LE-Bemessung.",
        ],
        list: [
          "Feuerlöscher vorhanden, Prüfplaketten abgelaufen – Prüfstatus nicht nachweisbar",
          "Flure/Nebenbereiche teils eingeengt durch abgestellte Gegenstände",
          "Grundausstattung: mindestens ca. 9 LE (ASR A2.2, normale Brandgefährdung) – Empfehlung 2× 6-LE-Löscher (12 LE) zur Verteilung",
          "Küche: mindestens ein Fettbrandlöscher (Klasse F) an Frittierstelle",
          "UG/Toilette: Rauchwarnmelder mit im Betrieb hörbarer Alarmierung empfohlen",
          "Unterweisung mindestens jährlich; Betriebsanweisung Fettbrand (kein Wasser)",
          "Elektrische Betriebsmittel (Fritteuse, Kühlung, Mehrfachsteckdosen): DGUV Vorschrift 3 prüfen",
        ],
      },
      {
        id: "pruefpunkte",
        title: "Typische Prüfpunkte vor Ort",
        paragraphs: [
          "Checkliste orientiert sich an Arbeitsschutz und Betrieb – Details zu Löschmittelanzahl im verlinkten Feuerlöscher-Ratgeber:",
        ],
        list: [
          "Fluchtwege, Notausgänge, Kennzeichnung ASR A1.3 – frei und sichtbar?",
          "Feuerlöscher: Anzahl/LE, Standort, Prüfplakette, Klasse F in Küche",
          "Flucht- und Rettungspläne ASR A2.3: vorhanden, aktuell, lagerichtig?",
          "BSO DIN 14096 Teil A: Aushang, Zuständigkeiten, Alarmablauf",
          "Brandschutzhelfer benannt und geschult?",
          "Rauchwarnmelder in Nebenräumen/UG",
          "Sichtprüfung Elektro (DGUV V3) – keine beschädigten Leitungen",
          "Gefährdungsbeurteilung Brandschutz dokumentiert?",
        ],
      },
      {
        id: "sofort",
        title: "Sofortmaßnahmen nach der Begehung",
        paragraphs: [
          "Priorität 1 – ohne Wartezeit auf Genehmigung oder Gutachten:",
        ],
        list: [
          "Fluchtwege und Treppen sofort freiräumen",
          "Abgelaufene Löscher prüfen lassen oder ersetzen",
          "Fettbrandlöscher an Frittierstelle bereitstellen",
          "Kurzunterweisung Team: Wege, Alarm, kein Wasser bei Fettbrand",
          "Mängelliste intern mit Fristen und Verantwortlichen",
        ],
      },
      {
        id: "folge",
        title: "Mittelfristig: typische Folgeschritte",
        paragraphs: [
          "Der Kurzbericht dient intern, gegenüber Versicherern oder als Vorbereitung – bei konkreten behördlichen Forderungen Punkt für Punkt mit der Mängelliste abgleichen.",
        ],
        list: [
          "Feuerlöscher-Konzept und Wartungsnachweis (ASR A2.2)",
          "Flucht- und Rettungspläne und BSO fortschreiben",
          "Brandschutzhelfer-Ausbildung",
          "Bei Umbau: Stellungnahme oder Konzept und Baugenehmigung (Ratgeber Imbiss/Umbau)",
          "Bei Behördenauflage: formale Stellungnahme statt Kurzbericht",
        ],
      },
      {
        id: "ablauf",
        title: "Ablauf der Eilbegehung",
        paragraphs: [
          "Standardablauf von der Anfrage bis zum Kurzbericht:",
        ],
        list: [
          "Vorbereitung: Fläche, Nutzung, Beschäftigte, Öffnungszeiten, Vorgeschichte",
          "Begehung mit Betriebsleitung: alle relevanten Bereiche, Küche zugänglich",
          "Fotodokumentation kritischer Stellen (datenschutzkonform)",
          "Kurzbericht: Feststellungen, Sofortmaßnahmen, Empfehlungen, Fristen",
          "Optional: Folgeauftrag BSO, Pläne, Unterweisung, Genehmigungsbegleitung",
        ],
      },
      {
        id: "fehler",
        title: "Typische Missverständnisse",
        paragraphs: [
          "Häufige Fehler von Betreibern nach der Begehung:",
        ],
        list: [
          "Kurzbericht der Bauaufsicht als Nachweis einreichen",
          "Nur Löscher kaufen, Fluchtwege weiter blockieren",
          "LE-Bemessung mit falscher Fläche (z. B. nur Gastraum statt Gesamtnutzung)",
          "Keine Dokumentation von Unterweisung und Prüfungen",
          "Umbau starten ohne Klärung bauordnungsrechtlicher Pflichten",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Eilbegehung und Kurzbericht ersetzen keine behördliche Einordnung, kein vollständiges Brandschutzkonzept und keine rechtsverbindliche Gefährdungsbeurteilung durch die BG. Maßgeblich bleiben ArbStättV, ASR und die konkrete Betriebssituation.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerloescher-gastronomie-koeln", label: "Feuerlöscher (Tiefe)" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Imbiss & Genehmigung" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne BauO vs. ASR" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/brandschau-koeln-feuerwehr", label: "Brandschau Feuerwehr" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung" },
    ],
    faq: [
      {
        question: "Wie schnell kann eine Eilbegehung stattfinden?",
        answer:
          "Je nach Verfügbarkeit oft innerhalb weniger Tage. Der Kurzbericht folgt in der Regel kurz nach der Begehung.",
      },
      {
        question: "Reicht eine Eilbegehung für die Bauaufsicht?",
        answer:
          "Nein als alleiniger Nachweis. Für Genehmigungen sind Stellungnahme, Konzept und einheitliche Pläne nötig. Die Begehung hilft bei Bestandsklärung und Priorisierung vor dem Antrag.",
      },
      {
        question: "Ist das dasselbe wie eine Feuerwehr-Brandschau?",
        answer:
          "Nein. Brandschau prüft Einsatz- und bauordnungsrechtliche Voraussetzungen. Die Eilbegehung fokussiert Arbeitgeberpflichten im Betrieb (Löscher, Wege, Unterweisung).",
      },
      {
        question: "Brauche ich danach ein Brandschutzkonzept?",
        answer:
          "Nur wenn Umbau, Nutzungsänderung oder Sonderbau es erfordern. Für reinen Betriebsbetrieb reichen oft organisatorische Maßnahmen, BSO und Löscher-Nachweise – im Bericht benannt.",
      },
      {
        question: "Was kostet typischerweise eine Eilbegehung?",
        answer:
          "Abhängig von Fläche, Nutzung und Berichtsumfang – deutlich weniger als ein vollständiges BSK. Konkrete Angebote auf Anfrage.",
      },
      {
        question: "Muss die BG den Kurzbericht anerkennen?",
        answer:
          "Die BG führt eigene Prüfungen durch. Ein strukturierter Bericht mit umgesetzten Sofortmaßnahmen unterstützt die Diskussion, ersetzt aber keine BG-Festlegung.",
      },
      {
        question: "Restaurant oder Imbiss – gleiche Begehung?",
        answer:
          "Gleiche Methode, unterschiedliche Schwerpunkte: Imbiss oft Fett/Grill und kleiner Gastbereich; Restaurant zusätzlich Sitzplätze, UG, höhere LE. Beide Fälle im Gastronomie-Cluster verlinkt.",
      },
    ],
  },
  {
    slug: "feuerloescher-gastronomie-koeln",
    title: "Feuerlöscher in der Gastronomie: LE, Prüfung, Fettbrand",
    excerpt:
      "ASR A2.2 in Küche und Gastraum: Löschmitteleinheiten, Prüfplakette, Klasse F – mit Orientierung aus Imbiss- und Restaurant-Praxis.",
    metaTitle: "Feuerlöscher Gastronomie Köln | ASR A2.2",
    metaDescription:
      "Feuerlöscher Restaurant & Imbiss: LE-Bemessung, Prüfung alle 2 Jahre, Fettbrandlöscher. Arbeitsschutz – Ratgeber H&S+.",
    keywords: [
      "Feuerlöscher Gastronomie LE",
      "Fettbrandlöscher Pflicht Küche",
      "ASR A2.2 Feuerlöscher",
      "Feuerlöscher Prüfplakette",
    ],
    sections: [
      {
        id: "pflicht",
        title: "Arbeitsschutz – nicht Bauordnung",
        paragraphs: [
          "Feuerlöscher in Gastronomie und Imbiss sind Pflicht des Arbeitgebers nach ArbStättV und ASR A2.2 „Maßnahmen gegen Brände“ – unabhängig davon, ob gerade ein Umbau genehmigt wird.",
          "Die Bauaufsicht fordert Löscher nicht als „Feuerlöscher-Genehmigung“, sondern indirekt über Stellungnahme oder Konzept (organisatorische Maßnahmen, Standorte in Plänen). Im laufenden Betrieb prüfen BG und SiFa die ASR-A2.2-Umsetzung.",
          "Flucht- und Rettungspläne nach ASR A2.3 zeigen Löscherstandorte – A2.2 regelt Anzahl und Prüfung.",
        ],
      },
      {
        id: "gefaehrdung",
        title: "Normale vs. erhöhte Brandgefährdung",
        paragraphs: [
          "Büroähnliche Gastbereiche ohne offene Flamme: oft normale Brandgefährdung – Grundausstattung nach Tabelle ASR A2.2 (LE nach Grundfläche).",
          "Küche mit Frittieren, Grill, offener Flamme: häufig erhöhte Brandgefährdung – zusätzliche Löscher, Fettbrandlöscher (Klasse F), kürzere Wege zum nächsten Löscher, ggf. Brandschutzhelfer.",
          "Maßgeblich ist die Gefährdungsbeurteilung – nicht die Betriebsbezeichnung „Imbiss“ oder „Restaurant“.",
        ],
      },
      {
        id: "anzahl",
        title: "Löschmitteleinheiten (LE) – Orientierung",
        paragraphs: [
          "ASR A2.2 rechnet mit LE, nicht mit „ein Gerät pro Raum“. Jedes Gerät mindestens 6 LE; Gesamt-LE aus Grundfläche (Tabelle ASR A2.2, z. B. bis 100 m² → 9 LE). Laufweg zum nächsten Löscher möglichst max. 20 m.",
        ],
        list: [
          "Ca. 65 m² Imbiss (normal): mindestens ca. 6–7 LE Grundausstattung",
          "Ca. 90 m² Restaurant (normal): mindestens ca. 9 LE – Praxis: 2× 6-LE-Gerät (12 LE) für Verteilung",
          "Küche: zusätzlich mindestens 1× Fettbrandlöscher (F) an Frittier-/Grillstelle",
          "Tragegriff ca. 0,80–1,20 m; Kennzeichnung F005 wenn nicht gut sichtbar (ASR A1.3)",
        ],
      },
      {
        id: "arten",
        title: "Welche Löscher wo",
        paragraphs: [
          "Gastraum/Flur: meist ABC-Pulver oder Schaum (Brandklassen A/B) – auf Brandlast abstimmen.",
          "Küche an Fritteuse: Fettbrandlöscher Klasse F – Pulver allein reicht für Fettbrand nicht.",
          "Wandhydranten im Bestand: nur anrechnen, wenn Voraussetzungen ASR A2.2 erfüllt (Schulung, keine Verrauchung der Fluchtwege).",
        ],
      },
      {
        id: "pruefung",
        title: "Prüfplakette und Intervalle",
        paragraphs: [
          "In einem Restaurant-Eilbegehung-Fall waren Löscher montiert, Prüfkennzeichnungen abgelaufen – ordnungsgemäßer Zustand nicht nachweisbar.",
          "Mindestens alle zwei Jahre Prüfung durch Sachkundige; bei starker Beanspruchung (Feuchte, Küche, Mobilgerät) kürzer. Mängel → unverzüglich instand setzen oder ersetzen. Ergebnis dokumentieren und Plakette erneuern.",
          "Betriebssicherheitsverordnung kann zusätzliche Prüfungen verlangen – parallel zu ASR A2.2.",
        ],
      },
      {
        id: "fettbrand",
        title: "Fettbrand: kein Wasser, klare Abläufe",
        paragraphs: [
          "Fettbrand in Fritteusen ist das Hauptrisiko in Imbissen. Wasser und falscher Löscher verschlimmern den Brand.",
          "Betriebsanweisung sichtbar in Küche, jährliche Unterweisung, BSO Teil A mit Alarm und Räumung. Brandschutzhelfer nach ASR A2.2 (oft ca. 5 % der Beschäftigten, bei Küche eher mehr).",
        ],
      },
      {
        id: "dokumentation",
        title: "Was Betriebe vorhalten sollten",
        paragraphs: [
          "Dokumentation sichert den Nachweis bei BG-, Versicherungs- oder Eilbegehungs-Kontrollen:",
        ],
        list: [
          "Standortliste aller Löscher mit LE und Brandklassen",
          "Prüfprotokolle und Plaketten aktuell",
          "Gefährdungsbeurteilung Brandschutz (ArbSchG)",
          "Unterweisungsnachweise",
          "Eintrag in Flucht- und Rettungsplan ASR A2.3",
        ],
      },
      {
        id: "fehler",
        title: "Typische Mängel",
        paragraphs: [
          "Aus Eilbegehungen und BG-Kontrollen häufig:",
        ],
        list: [
          "Abgelaufene Plakette, kein Ersatz",
          "Nur ein kleiner Löscher für große Fläche",
          "Kein Fettbrandlöscher trotz Fritteuse",
          "Löscher hinter Tür oder Regal versteckt",
          "Fläche falsch bemessen (nur Gastraum ohne Küche/Lager)",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Orientierungswerte ersetzen keine Gefährdungsbeurteilung. Bei Umbau oder Nutzungsänderung kommen bauordnungsrechtliche Anforderungen (Stellungnahme, Abluft, Trennwände) hinzu – siehe [Imbiss](/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln) und [Eilbegehung](/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln).",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/eilbegehung-brandschutz-restaurant-gewerbe-koeln", label: "Eilbegehung (Ist-Prüfung)" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Imbiss Genehmigung" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne ASR A2.3" },
      { href: "/brandschutzordnung-koeln", label: "Brandschutzordnung" },
      { href: "/brandschutzhelfer-ausbildung-koeln", label: "Brandschutzhelfer" },
    ],
    faq: [
      {
        question: "Reicht ein Pulverlöscher in der Küche?",
        answer:
          "Für Fritteusen und Fett: Fettbrandlöscher (F) erforderlich. Pulver/Schaum können Gastraum und Flur ergänzen – Gefährdungsbeurteilung festlegen.",
      },
      {
        question: "Wer darf Feuerlöscher prüfen?",
        answer:
          "Sachkundige/Fachfirma mindestens alle zwei Jahre. Austausch und Instandsetzung bei negativem Prüfergebnis unverzüglich.",
      },
      {
        question: "Wie viele Löscher bei 65 m² Imbiss?",
        answer:
          "Orientierung: mindestens ca. 6–7 LE Grundausstattung plus Fettbrandlöscher in der Küche. Exakte Anzahl aus ASR A2.2-Tabelle und Löschergröße (mind. 6 LE pro Gerät).",
      },
      {
        question: "Was bedeutet die Prüfplakette?",
        answer:
          "Nachweis der letzten fachgerechten Prüfung. Abgelaufen = Zustand nicht nachweisbar – vor Kontrolle oder Behördentermin erneuern lassen.",
      },
      {
        question: "Brauche ich Löscher für die Baugenehmigung?",
        answer:
          "Im Betrieb ja (Arbeitsschutz). In der Genehmigung werden Standorte und organisatorische Maßnahmen in Stellungnahme oder Konzept beschrieben – nicht separat „Löscher-Genehmigung“.",
      },
      {
        question: "1 LE pro 10 m² – stimmt das?",
        answer:
          "Vereinfachte Faustregel bei normaler Gefährdung. Maßgeblich ist die ASR-A2.2-Tabelle nach Grundfläche und die 20-m-Laufweg-Regel.",
      },
      {
        question: "Wandhydrant statt Feuerlöscher?",
        answer:
          "Nur unter engen Voraussetzungen anrechenbar (Formschlauch, geschulte Beschäftigte, kein Versagen der Rauchschutztüren). In kleinen Gastronomien selten die alleinige Lösung.",
      },
    ],
  },
  {
    slug: "teilsanierung-buero-brandschutz-koeln",
    title: "Teilsanierung Büro: Brandschutz-Checkliste (GK 5, BMA)",
    excerpt:
      "Ca. 50 % BGF sanieren ohne Nutzungsänderung: Stellungnahme oder Konzept, BMA-Neuplanung, ASR A2.3, Abschottungen – aus einem Verwaltungsgebäude-Fall (1978).",
    metaTitle: "Teilsanierung Büro Brandschutz | Köln",
    metaDescription:
      "Teilsanierung Büro NRW: BMA, Trockenbau, Fluchtwege ASR A2.3, Feuerwehrpläne. Ohne Nutzungsänderung – Ratgeber H&S+.",
    keywords: [
      "Teilsanierung Büro Brandschutz",
      "Brandmeldeanlage Erneuerung Büro",
      "Fluchtwege ASR A2.3 Umbau",
      "Brandschutz Verwaltungsgebäude",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall: Teilsanierung statt Komplettumbau",
        paragraphs: [
          "In einem abgeschlossenen Beratungsprojekt (NRW) stand die Teilsanierung eines großen Büro- und Verwaltungsgebäudes an (Baujahr 1978, mehrere Geschosse, mehrere hundert Beschäftigte am Standort). Umbauten betrafen etwa die Hälfte der Bruttogrundfläche: Trockenbau, neue Türen, Technik, Umkleiden im Kellergeschoss, WC-Sanierung und vollständige Neuplanung der Brandmeldeanlage (BMA).",
          "Laut Planungsstand kein separates Brandschutzkonzept für die Bauaufsicht – dennoch greifen BauO NRW, Arbeitsschutz (ASR A2.2/A2.3) und betrieblicher Brandschutz in den betroffenen Zonen. Gebäudeklasse 5 und Sonderbau (großes Bürogebäude) erhöhen die Sorgfalt bei Nachweisen, BMA-Abstimmung und Plänen.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Teilsanierung vs. Nutzungsänderung vs. Bestandsschutz",
        paragraphs: [
          "Drei Fälle werden in der Praxis verwechselt:",
          "Im dokumentierten Fall blieb die Nutzung Büro/Verwaltung – entscheidend waren korrekte Umsetzung im Sanierungsabschnitt und interne Nachweise, nicht ein neues Gaststätten-Konzept.",
        ],
        list: [
          "Teilsanierung mit baulichen Eingriffen (Wände, BMA, Flure): brandschutztechnische Begleitung Pflicht im Umbau-Bereich – nicht automatisch vollständiges BSK für die Behörde",
          "Nutzungsänderung (z. B. Büro → Gastronomie): Genehmigung und meist Stellungnahme oder Konzept – siehe [Umbau & Nutzungsänderung](/ratgeber/umbau-nutzungsaenderung-brandschutz)",
          "Nur technische Sanierung ohne bauliche/Nutzungsänderung: Bestandsschutz § 59 BauO NRW kann greifen – siehe [Bestandsschutz § 59](/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw) (z. B. Leitungstausch ohne Decke)",
        ],
      },
      {
        id: "nachweise",
        title: "Brandschutzkonzept, Stellungnahme oder interner Leitfaden?",
        paragraphs: [
          "Ob die Bauaufsicht ein vollständiges Brandschutzkonzept verlangt, hängt von Genehmigungspflicht, Umfang und Sonderbau ab. Teilsanierung ohne wesentliche Nutzungsänderung löst nicht automatisch ein umfangreiches Genehmigungs-BSK aus.",
          "Praxis: brandschutztechnische Stellungnahme als Leitfaden für Architektur, TGA und Ausführung – mit Raumbuch, Wandklassen, BMA-Konzept, Fluchtwegnachweis in den betroffenen Geschossen. Bei behördlichem Verfahren oder Versicherer-Vorgaben kann ein formelles BSK trotzdem nötig werden.",
        ],
      },
      {
        id: "sonderbau",
        title: "Gebäudeklasse 5 und Sonderbau Büro",
        paragraphs: [
          "Große Bürogebäude sind oft GK 5 (hohe OKF oder große Nutzungseinheiten). Ab ca. 3.000 m² Geschossfläche im Gebäude ist das Bürogebäude regelmäßig Sonderbau nach § 50 Abs. 2 BauO NRW – „ungeregelt“ ohne eigenen SBauVO-Teil, aber mit vollem Konzept- oder Stellungnahme-Anspruch bei wesentlichen Änderungen.",
          "Teilsanierung in einem Sonderbau: Feuerwehrpläne, BMA-Aufschaltung und Rettungswege müssen zum Gesamtobjekt passen – punktuelle Sanierung ohne Abgleich führt zu Abnahme- und Brandschau-Mängeln.",
        ],
      },
      {
        id: "bma",
        title: "BMA-Erneuerung: Planung und Abnahme",
        paragraphs: [
          "Die vollständige Neuplanung der BMA war im Praxisfall zentral – kein Nebengewerk:",
          "Verzögerungen bei der Sachverständigenabnahme blockieren die Nutzungsaufnahme – Termine mit BMA-Planer und Errichter früh fixieren.",
        ],
        list: [
          "Automatische Melder in maßgeblichen Bereichen, Handfeuermelder an Fluchtwegen",
          "Zonierung, Alarmierung (ggf. Sprachalarmanlage), Aufschaltung Feuerwehr klären",
          "Abstimmung Elektro, RLT, Aufzug, Gebäudeleittechnik – Brandschutzklappen ansteuern",
          "Errichtung und Inbetriebnahme nach DIN VDE 0833-1, Abnahme Prüfsachverständiger",
          "Laufkarten und Feuerwehrplan-Fortschreibung nach DIN 14095",
        ],
      },
      {
        id: "bau",
        title: "Trockenbau, Türen, Abschottungen",
        paragraphs: [
          "Neue und geänderte Trennwände/Decken: Feuerwiderstand nach § 27 BauO NRW (feuerhemmend F 30 bis feuerbeständig F 90 je nach Lage) und Rauchdichtheit im Raumbuch dokumentieren. Durchbrüche nur mit zugelassenen Systemen abschotten – Übergang Bestand/Neu bei KMF-Decken ist ein häufiger Streitpunkt in der Abnahme.",
        ],
        list: [
          "Brandschutztüren (z. B. T30-RS) und Rauchschutzabschlüsse zum notwendigen Flur prüfen",
          "KG-Umkleiden/WC: Koordination Lüftung, Elektro, BMA",
          "Fachbauleitung Brandschutz bei kritischen Abschottungen empfohlen",
        ],
      },
      {
        id: "flucht",
        title: "Fluchtwege – ASR A2.3 und BauO § 33",
        paragraphs: [
          "Für Beschäftigte gilt ASR A2.3 (Haupt-/Nebenfluchtwege, lichte Breiten nach Personenzahl im Einzugsgebiet). Bauordnung § 33 prüft bauliche Rettungswege im Genehmigungskontext. Maßgeblich ist die Personenzahl je Einzugsgebiet – nicht pauschal „alle Mitarbeitenden im Gebäude“, wenn mehrere unabhängige Wege existieren.",
          "Der Umbau darf Weglängen, Breiten (z. B. ab 100 Personen im Einzugsgebiet: lichte Breiten nach ASR A2.3-Tabelle) und den zweiten Rettungsweg nicht verschlechtern. Nach Sanierung: Fluchtwegpläne und Einzugsgebiete aktualisieren.",
        ],
      },
      {
        id: "betrieb",
        title: "Löscher, Pläne, BSO – drei Ebenen",
        paragraphs: [
          "Nach wesentlicher Teilsanierung parallel aktualisieren:",
          "Bauordnungsrechtlicher Nachweis in der Genehmigung ≠ ASR-Pläne für Beschäftigte – beide müssen zum neuen Grundriss passen (siehe [Pläne aktualisieren](/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe)).",
        ],
        list: [
          "ASR A2.2: Feuerlöscher-Standorte und LE neu bewerten (Laufweg max. ca. 20 m, Teeküchen ggf. Fettbrandlöscher)",
          "ASR A2.3: Flucht- und Rettungspläne in betroffenen Bereichen",
          "DIN 14095: Feuerwehrpläne und BMA-Laufkarten",
          "DIN 14096: BSO und Unterweisung",
        ],
      },
      {
        id: "checkliste",
        title: "Kurz-Checkliste für Projektleitung",
        paragraphs: [
          "Vor Abnahme und Nutzungsaufnahme im Sanierungsabschnitt:",
        ],
        list: [
          "Genehmigungspflicht und Behördenumfang geklärt?",
          "Stellungnahme oder Brandschutzkonzept mit Architektur und TGA abgestimmt?",
          "BMA-Abnahme Termin mit Sachverständigem?",
          "Raumbuch/Wandliste und Abschottungsnachweise vollständig?",
          "Fluchtwege und Einzugsgebiete neu gerechnet?",
          "Feuerwehrplan und Fluchtpläne fortgeschrieben?",
          "Übergang Bestand/Neu in der Bauzustandsbesichtigung vorbereitet?",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "In Büro-Teilsanierungen häufig:",
        ],
        list: [
          "BMA erneuert, Feuerwehrplan veraltet",
          "Trockenbau ohne Abschottungsnachweise an Kabeltrassen",
          "Fluchtwegbreite nach Umbau nicht nachgerechnet",
          "„Kein Konzept nötig“ – aber keine interne Stellungnahme für Ausführung",
          "Nur ein Geschoss saniert, BMA-Zonierung Gesamtgebäude vergessen",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber beschreibt ein Großobjekt-Büro-Szenario in NRW. Kleine Büroumbauten oder Denkmalschutz können andere Anforderungen haben. Verbindlich sind Projektunterlagen, ASR-Fassung und die Festlegung der Bauaufsicht – keine Rechtsberatung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme?" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/bestandsschutz-technische-sanierung-bauo-nrw", label: "Bestandsschutz § 59" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege § 33" },
      { href: "/ratgeber/fluchtplan-feuerwehrplan-aktualisieren-gewerbe", label: "Pläne BauO vs. ASR" },
      { href: "/ratgeber/sonderbauten-brandschutz", label: "Sonderbau § 50" },
      { href: "/ratgeber/abschottungen-durchbrueche-baustelle-koeln", label: "Abschottungen Baustelle" },
      { href: "/ratgeber/brandschutz-abnahme-nach-umbau-koeln", label: "Abnahme nach Umbau" },
    ],
    faq: [
      {
        question: "Brauche ich bei Teilsanierung immer ein Brandschutzkonzept für die Behörde?",
        answer:
          "Nicht immer. Entscheidend: Genehmigungspflicht, Sonderbau, Nutzungsänderung. Oft reicht eine brandschutztechnische Stellungnahme als Umsetzungsleitfaden – bei behördlichem Verfahren oder Versicherer kann ein vollständiges BSK verlangt werden.",
      },
      {
        question: "Muss die BMA bei jedem Büroumbau erneuert werden?",
        answer:
          "Nur wenn geplant oder Bestand/Umbau es erfordern. Wird sie erneuert: Fachplanung, Gewerke-Abstimmung und Sachverständigenabnahme verbindlich einplanen.",
      },
      {
        question: "Gilt ASR A2.3 auch ohne Baugenehmigung?",
        answer:
          "Ja – Arbeitsschutz für Beschäftigte gilt unabhängig. Fluchtwegbreiten und Pläne müssen nach wesentlicher Sanierung zum Ist-Zustand passen.",
      },
      {
        question: "Was ist der Unterschied zu Bestandsschutz?",
        answer:
          "Bestandsschutz § 59: keine wesentliche bauliche Verschlechterung bei rein technischen Maßnahmen. Teilsanierung mit Trockenbau und BMA ist ein aktiver Umbau mit neuen Nachweispflichten.",
      },
      {
        question: "Wann ist ein Bürogebäude Sonderbau?",
        answer:
          "Unter anderem ab mehr als 3.000 m² Geschossfläche Büro im Gebäude (§ 50 Abs. 2 BauO NRW). Dann erhöhte Anforderungen an Konzept, BMA und Feuerwehrabstimmung.",
      },
      {
        question: "Müssen Feuerwehrpläne angepasst werden?",
        answer:
          "Bei wesentlicher Änderung von Fluchtwegen, Brandabschnitten oder BMA: ja – Fortschreibung nach DIN 14095 und Abstimmung mit der Feuerwehr, wo vorgesehen.",
      },
      {
        question: "Reicht die interne Stellungnahme für die BG?",
        answer:
          "Die BG prüft Arbeitsschutz (ASR). Eine Stellungnahme unterstützt die Dokumentation, ersetzt aber Gefährdungsbeurteilung und Umsetzung der Maßnahmen vor Ort.",
      },
    ],
  },
  {
    slug: "bestandsschutz-technische-sanierung-bauo-nrw",
    title: "Bestandsschutz: technische Sanierung ohne baulische Änderung",
    excerpt:
      "§ 59 BauO NRW: Wann Bestand bleibt – Holzdecke, Leitungstausch, keine Nachrüstung – und wann Teilsanierung oder Nutzungsänderung trotzdem auslöst.",
    metaTitle: "Bestandsschutz Brandschutz NRW | § 59",
    metaDescription:
      "Bestandsschutz § 59 BauO NRW: TGA ohne Umbau. Holzdecke, keine Verschlechterung – Abgrenzung Teilsanierung. Ratgeber H&S+.",
    keywords: [
      "Bestandsschutz BauO NRW",
      "§ 59 BauO Bestand",
      "technische Sanierung Brandschutz",
      "Bestand Holzdecke Nachrüstung",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall: nur Anlagen tauschen",
        paragraphs: [
          "In einem abgeschlossenen Projekt (NRW) ging es um ein eingeschossiges Technikgebäude (Baujahr 1971). Geplant war ausschließlich die Erneuerung von Anlagenteilen im Inneren (u. a. Austausch einer Leitung mit geringerer Nennweite) – ohne Änderung der baulichen Struktur, der Nutzung oder der Gebäudeklasse.",
          "Die Frage: Muss die Holzdecke im Zuge der Maßnahme an heutige Neubauanforderungen (Feuerwiderstand raumabschließender Bauteile) angepasst werden?",
        ],
      },
      {
        id: "recht",
        title: "§ 59 BauO NRW – Grundlogik",
        paragraphs: [
          "§ 59 BauO NRW: Bestehende bauliche Anlagen bleiben grundsätzlich zulässig, wenn durch Änderungen keine neuen öffentlich-rechtlichen Gefahren entstehen und sich das brandschutztechnische Niveau nicht verschlechtert.",
          "§ 14 BauO NRW (Schutzziele) gilt weiter – aber die Anforderungen an tragende und raumabschließende Bauteile nach §§ 26 ff. werden im Bestand nicht pauschal auf Neubauniveau nachgezogen, solange kein auslösender Eingriff vorliegt.",
          "Wichtig: § 59 ist nicht „kein Brandschutz“. Arbeitsschutz (ASR A2.2/A2.3) und betrieblicher Brandschutz bleiben vollständig.",
        ],
      },
      {
        id: "ausloeser",
        title: "Was Bestandsschutz beendet",
        paragraphs: [
          "Sobald einer dieser Tatbestände greift, ist brandschutztechnische Neubewertung nötig – oft mit Stellungnahme oder Konzept:",
        ],
        list: [
          "Wesentliche bauliche Änderung (Öffnungen, Trennwände, Decken)",
          "Nutzungsänderung oder deutlich mehr Personen",
          "Eingriff in raumabschließende/tragende Bauteile (Decke, Wand)",
          "Erhöhte Brandlast oder neue Gefahrstoffe durch die Maßnahme",
          "Behördliche Auflage oder Mängelbeseitigung (unabhängig von § 59)",
        ],
      },
      {
        id: "holzdecke",
        title: "Holzdecke im Technikgebäude – Ergebnis des Falls",
        paragraphs: [
          "Die Holzdecke war Bestandteil des genehmigten Gebäudezustands. Reiner Leitungstausch ohne Eingriff in die Decke: keine Pflicht zur Ertüchtigung auf heutiges Neubau-Feuerwiderstands-Niveau – vorausgesetzt, die Maßnahme verschlechtert den Brandschutz nicht (z. B. keine neuen Durchbrüche ohne Abschottung).",
          "Anders: Decke wird geöffnet, Nutzung wechselt, oder die Sanierung ist Teil einer Teilsanierung mit Trockenbau – dann § 59 allein trägt die Argumentation nicht.",
        ],
      },
      {
        id: "abgrenzung",
        title: "Abgrenzung: § 59 vs. § 83 vs. Teilsanierung",
        paragraphs: [
          "§ 59 BauO NRW: formeller Bestandsschutz bei fehlendem auslösenden Umbau.",
          "§ 83 BauO NRW: Erhaltungsgebot im Genehmigungsverfahren – „Bestand wurde damals so genehmigt, Vorhaben ändert Erschließung/Entrauchung nicht“ (häufig bei Praxiszusammenlegung, siehe andere Ratgeber).",
          "Teilsanierung mit Wänden/BMA: aktiver Umbau – § 59 hilft nicht für fehlende Abschottungen; eigene Stellungnahme- oder Konzept-Logik.",
        ],
      },
      {
        id: "stellungnahme",
        title: "Schriftliche Einordnung – wann sinnvoll",
        paragraphs: [
          "Gesetzlich nicht immer vorgeschrieben, in der Praxis aber wertvoll: kurze brandschutztechnische Stellungnahme mit Bezug auf § 59, Beschreibung der Maßnahme, Bestandsnachweise (Altgenehmigung, Konzept), Feststellung „keine Verschlechterung“.",
          "Nutzen: interne Freigabe, Versicherer, TGA-Planer, Abgrenzung gegenüber Behörde, die pauschal Nachrüstung fordert.",
        ],
      },
      {
        id: "arbeitsschutz",
        title: "Arbeitsschutz bleibt außen vor § 59",
        list: [
          "Feuerlöscher ASR A2.2 aktuell und geprüft",
          "Fluchtwege frei, Kennzeichnung ASR A1.3",
          "Flucht- und Rettungspläne ASR A2.3 wo erforderlich",
          "Gefährdungsbeurteilung Brandschutz",
          "Unterweisung der Beschäftigten",
        ],
        paragraphs: [
          "„Bestandsschutz bauordnungsrechtlich“ entbindet nicht von ArbStättV – besonders in Technikgebäuden mit Wartungspersonal.",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler",
        paragraphs: [
          "Missverständnisse im Bestand:",
        ],
        list: [
          "§ 59 pauschal für jeden Umbau zitiert – obwohl Trockenbau und Durchbrüche dabei sind",
          "Keine Dokumentation – Behörde oder Versicherer verlangen Nachweise",
          "Leitung durch Holzdecke ohne Abschottung → Verschlechterung",
          "Arbeitsschutz vernachlässigt, weil „Bestand“",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen",
        paragraphs: [
          "Dieser Ratgeber erläutert die Logik am Technikgebäude-Fall in NRW. Die endgültige Bewertung trifft die Bauaufsicht im Einzelfall. Denkmalschutz, Sonderbau und IndBauR können zusätzliche Pflichten setzen – unabhängig von § 59.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/teilsanierung-buero-brandschutz-koeln", label: "Teilsanierung (baulicher Umbau)" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/ratgeber/arztpraxen-zusammenlegen-brandschutz-koeln", label: "§ 83 im Genehmigungsfall" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/brandschutzkonzept-wann-noetig", label: "Konzept oder Stellungnahme?" },
      { href: "/ratgeber/technische-betriebsgebaeude-brandschutz-nrw", label: "Technische Betriebsgebäude" },
    ],
    faq: [
      {
        question: "Gilt Bestandsschutz in NRW überall gleich?",
        answer:
          "Die BauO NRW 2018 gilt landesweit einheitlich. Die Einzelfallbewertung durch die untere Bauaufsichtsbehörde kann in der Begründungstiefe variieren – bei Grenzfällen früh abstimmen.",
      },
      {
        question: "Brauche ich eine schriftliche Stellungnahme?",
        answer:
          "Nicht immer gesetzlich, aber sinnvoll für interne Freigabe, Versicherer und TGA – besonders bei älteren Beständen und wenn Beteiligte Nachrüstung verlangen.",
      },
      {
        question: "Muss jede Sanierung die Decke feuerbeständig (F 90) machen?",
        answer:
          "Nein, wenn § 59 BauO NRW greift und die Decke unverändert bleibt. Bei Eingriff in die Decke oder wesentlichem Umbau: neue Bewertung nach § 27 BauO NRW – ob feuerhemmend, hochfeuerhemmend oder feuerbeständig.",
      },
      {
        question: "Was ist der Unterschied zu § 83 BauO NRW?",
        answer:
          "§ 59: allgemeiner Bestandsschutz ohne auslösende Änderung. § 83: im Genehmigungsverfahren Erhaltung genehmigten Bestands gegenüber neuen Anforderungen – oft mit Nachweis „keine Verschlechterung“.",
      },
      {
        question: "Gilt § 59 für Büro-Teilsanierung?",
        answer:
          "Nur für Teile ohne wesentliche bauliche Änderung. Halbe BGF mit Trockenbau und BMA ist Teilsanierung – nicht reine TGA-Sanierung nach § 59.",
      },
      {
        question: "Entbindet Bestandsschutz von der BMA?",
        answer:
          "Nein. Bestehende BMA muss betriebsbereit bleiben; Erneuerung folgt eigenen Regeln (VDE 0833), nicht § 59 als „Befreiung“.",
      },
      {
        question: "Kann die Behörde trotz § 59 Nachrüstung verlangen?",
        answer:
          "Bei nachweislicher Verschlechterung, neuen Gefahren oder anderen Rechtsgrundlagen (Auflagen, Mängel) ja. § 59 ist kein Freibrief.",
      },
    ],
  },
  ...RATGEBER_ARTICLES_BATCH2,
];

export function getRatgeberArticle(slug: string): RatgeberArticle | undefined {
  return RATGEBER_ARTICLES.find((a) => a.slug === slug);
}

export function getAllRatgeberSlugs(): string[] {
  return RATGEBER_ARTICLES.map((a) => a.slug);
}
