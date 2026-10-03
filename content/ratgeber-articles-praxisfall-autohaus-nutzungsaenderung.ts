/**
 * Praxisfall: Sport-/Trainingshalle → Autohaus (anonymisiert).
 * Stil wie Imbiss-/Arztpraxis-Praxisfälle: ganze Sätze, keine Mandantendaten, keine Preise.
 * Quelle intern: Ausarbeitungen Praxisfall_Prozess_Nutzungsaenderung_Autohaus_* (nicht veröffentlichen).
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_PRAXISFALL_AUTOHAUS_NUTZUNGSAENDERUNG: RatgeberArticle[] = [
  {
    slug: "autohaus-nutzungsaenderung-brandschutz-nrw",
    title: "Von der Sporthalle zum Autohaus: Nutzungsänderung und Brandschutz",
    excerpt:
      "Eine ehemalige Sport- und Trainingshalle soll Autohaus mit Ausstellung werden. Die Bauaufsicht fordert Gebäudeklasse, Betriebsbeschreibung, Trennung der Geschosse, Rettungswege und abwehrenden Brandschutz nach. Anonymisierter Praxisfall aus NRW: Stellungnahme und erteilte Baugenehmigung.",
    metaTitle: "Autohaus Nutzungsänderung Brandschutz Köln | NRW",
    metaDescription:
      "Nutzungsänderung Sporthalle zu Autohaus: brandschutztechnische Stellungnahme, Betriebsbeschreibung, Rettungswege, Baugenehmigung. Praxisfall Brandschutz Köln und NRW.",
    keywords: [
      "Autohaus Nutzungsänderung",
      "Nutzungsänderung Brandschutz Köln",
      "Sporthalle Autohaus Brandschutz",
      "brandschutztechnische Stellungnahme NRW",
      "Betriebsbeschreibung Brandschutz",
      "Nutzungsänderung Gewerbehalle NRW",
      "Rettungswege Außentreppe",
      "Brandschutz Köln",
    ],
    sections: [
      {
        id: "fall",
        title: "Typischer Fall: Sport- und Trainingshalle wird Autohaus",
        paragraphs: [
          "In einem abgeschlossenen Genehmigungsverfahren in NRW sollte eine zweigeschossige Gewerbehalle von der bisherigen Sport- und Trainingnutzung (unter anderem Fitness und Physio) zu einem Autohaus mit Ausstellung und Verkauf umgenutzt werden. Die Verkaufsflächen im Erdgeschoss lagen nach Plan im mittleren dreistelligen Quadratmeterbereich und damit unter typischen Verkaufsstätten-Schwellen.",
          "Nach Beteiligung der Brandschutzdienststelle forderte die Bauaufsicht Nachbesserungen. Erarbeitet wurde eine brandschutztechnische Stellungnahme zu den Nachforderungspunkten, gestützt auf Ortsbegehung, Betriebsbeschreibung und den vorliegenden Bauvorlagenplänen. Im dokumentierten Fall wurde die Baugenehmigung für die Nutzungsänderung erteilt. Solche Umnutzungen von Gewerbehallen sind in Köln und NRW häufig; die Logik der Nachforderung lässt sich auf vergleichbare Vorhaben übertragen.",
        ],
      },
      {
        id: "nachforderung",
        title: "Was die Bauaufsicht bei Nutzungsänderung typischerweise nachfordert",
        paragraphs: [
          "Im dokumentierten Fall betraf die Nachforderung sechs Themen: Gebäudeklasse, Betriebsbeschreibung, Trennung von Erdgeschoss und Obergeschoss, Rettungswege im Obergeschoss, Trennungen innerhalb der Ausstellung im Erdgeschoss sowie den abwehrenden Brandschutz.",
          "Solche Nachforderungen bestimmen den Gegenstand der Stellungnahme. Jede Feststellung sollte einem Nachforderungspunkt zugeordnet sein. Ausführungen ohne Bezug zur Nachforderung verlängern die Prüfung und helfen dem Verfahren selten.",
        ],
        table: {
          caption: "Sechs typische Nachforderungspunkte",
          headers: ["Punkt", "Frage der Bauaufsicht", "Was zu klären ist"],
          rows: [
            ["1", "Gebäudeklasse", "Welche Gebäudeklasse ist zugrunde zu legen?"],
            [
              "2",
              "Betriebsbeschreibung",
              "Ausstellung, Werkstatt, Aufbereitung, Laden, Lager, Gefahrstoffe?",
            ],
            ["3", "Trennung EG / OG", "Nutzungseinheiten, Decke, Abschlüsse?"],
            [
              "4",
              "Rettungswege OG",
              "Zwei unabhängige Wege, Außentreppen, Dachübergang?",
            ],
            ["5", "Trennungen EG", "Eine Nutzungseinheit Autohaus oder mehrere?"],
            [
              "6",
              "Abwehrender Brandschutz",
              "Zufahrt, Aufstellflächen, Angriffswege, Löschwasser?",
            ],
          ],
        },
      },
      {
        id: "gebaeudeklasse",
        title: "Gebäudeklasse: Antrag und Behördenbewertung",
        paragraphs: [
          "Im Antrag war zunächst eine niedrige Gebäudeklasse angegeben. Die Bauaufsicht bewertete das als nicht nachvollziehbar und legte eine Einstufung in Gebäudeklasse 3 nahe.",
          "Dieser Einstufung wurde gefolgt. Bei sonstigen Gebäuden mit einer Höhe bis zu 7 m kommt Gebäudeklasse 3 nach § 2 Abs. 3 BauO NRW in Betracht. Die Anforderungen der Stellungnahme sind dann die der Gebäudeklasse 3.",
          "Vertiefung: [Gebäudeklassen](/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw) und [Gesetzliche Einstufung](/ratgeber/gesetzliche-einstufung-gebaeude-bauo-nrw).",
        ],
      },
      {
        id: "betriebsbeschreibung",
        title: "Betriebsbeschreibung: beantragte und ausgeschlossene Nutzung",
        paragraphs: [
          "Ohne belastbare Nutzungsangaben können Werkstatt, Ladeeinrichtungen und Gefahrstofflagerung nicht ausgeschlossen werden. Die Betriebsbeschreibung ist deshalb oft der Schlüssel zur Nachforderung.",
          "Im Praxisfall wurde die Nutzung nach Ortsbegehung und Angabe des Nutzers festgelegt: Erdgeschoss Autohaus mit Ausstellung und Verkauf; keine Werkstatt, keine Aufbereitung vor Ort, keine E-Ladeplätze, kein separates Lager und keine Gefahrstofflagerung. Das Obergeschoss war leerstehend, nicht Bestandteil des Autohauses und für eine spätere Vermietung offen.",
          "Sowohl die beantragte Nutzung als auch die ausgeschlossenen Nutzungen gehören in die Stellungnahme. Jede spätere wesentliche Änderung ist der Bauaufsicht nachzutragen und brandschutztechnisch neu zu bewerten.",
        ],
      },
      {
        id: "begehung",
        title: "Ortsbegehung und Fotodokumentation",
        paragraphs: [
          "Die Ortsbegehung prüft die planlichen Angaben am Objekt. Im dokumentierten Fall waren die Ist-Nutzung beider Geschosse, das Fehlen von Werkstattausstattung und Ladesäulen, die Kennzeichnung der Brandschutzabschlüsse sowie zwei Außentreppen aus dem Obergeschoss entscheidend.",
          "Ohne Ortsbegehung bleiben Aussagen zum Obergeschoss, zu Außentreppen und zu bauzeitlich ausgebauten Abschlüssen oft unbelegt. Eine thematisch geordnete Fotodokumentation belegt die für die Nachforderung relevanten Bereiche.",
        ],
      },
      {
        id: "trennung",
        title: "Trennung Erdgeschoss und Obergeschoss",
        paragraphs: [
          "Maßgeblich sind unter anderem Decken feuerhemmend (§ 31 Abs. 2 BauO NRW), tragende Bauteile feuerhemmend (§ 27), Trennung von Nutzungseinheiten (§ 29) und Leitungsabschottungen (§ 40).",
          "Im Fall war planlich eine Decke F30 vorgesehen. Vor Ort wurden keine offenen Deckendurchbrüche festgestellt. Die Verbindung erfolgte über den Treppenraum mit T30-Abschlüssen. Eine bauzeitlich ausgebaute untere Brandschutztür war wiederherzustellen.",
          "Wichtig ist, dass Stellungnahme und Pläne denselben Ist-Zustand beschreiben. Zeigt der Obergeschossplan noch die alte Sportnutzung, obwohl das Geschoss leersteht, entsteht ein Widerspruch, der das Verfahren verzögert.",
        ],
      },
      {
        id: "rettungswege",
        title: "Rettungswege im Obergeschoss über Außentreppen",
        paragraphs: [
          "Nach § 33 Abs. 1 und 2 BauO NRW sind zwei voneinander unabhängige Rettungswege erforderlich. Außentreppen können unter den Voraussetzungen der §§ 34 und 35 zulässig sein.",
          "Im Praxisfall waren zwei Außentreppen aus verzinktem Stahl bzw. Gitterrost vorhanden: ein Weg über die Außentreppe am Treppenraum ohne Führung durch die Ausstellungshalle, ein weiterer Weg über die Dachfläche des eingeschossigen Gebäudeteils und eine zweite Außentreppe. Voraussetzungen waren unter anderem eine feuerhemmende Decke unter dem Gehweg, geeignete Gehfläche und Absturzsicherung sowie nichtbrennbare Baustoffe der Außentreppe.",
          "Die Entscheidung über die Genehmigung trifft die Bauaufsicht. Die Brandschutzdienststelle wird fachlich beteiligt. § 33 Abs. 3 BauO NRW betrifft vor allem den zweiten Rettungsweg über Rettungsgeräte der Feuerwehr bei Brüstungshöhen über 8 m. Dann müssen die erforderlichen Geräte, etwa Hubrettungsfahrzeuge, verfügbar sein. Im vorliegenden Fall waren zwei bauliche Außentreppen Gegenstand der Bewertung. Die Stellungnahme stellt Befund und bauliche Voraussetzungen dar. Vertiefung: [Zweiter Rettungsweg Wohnungsbestand](/ratgeber/zweiter-rettungsweg-wohnungsbestand-bauo-nrw).",
        ],
      },
      {
        id: "abwehrend",
        title: "Abwehrender Brandschutz",
        paragraphs: [
          "Nach § 5 BauO NRW sind Zu- oder Durchgang sowie Aufstell- und Bewegungsflächen für die Feuerwehr sicherzustellen. Lageplan und Ortsbegehung ergaben keine nachteilige Änderung gegenüber dem bisherigen Zustand.",
          "Aus einer klar begrenzten Ausstellung- und Verkaufsnutzung ohne Werkstatt und ohne Gefahrstoffe folgt nicht automatisch ein erhöhter Löschwasserbedarf.",
        ],
      },
      {
        id: "leistung",
        title: "Was im Praxisfall geleistet wurde",
        paragraphs: [
          "Erarbeitet wurde eine brandschutztechnische Stellungnahme zu den sechs Nachforderungspunkten der Bauaufsicht. Grundlage waren die vorliegenden Bauvorlagen, die Ortsbegehung mit Fotodokumentation und eine klar festgelegte Betriebsbeschreibung für Ausstellung und Verkauf ohne Werkstatt.",
          "Inhaltlich wurden Gebäudeklasse 3, die Trennung von Erdgeschoss und Obergeschoss, die zwei Außentreppen aus dem Obergeschoss, die Trennungen in der Ausstellung sowie der abwehrende Brandschutz nachvollziehbar dargestellt. Ergebnis: Die Baugenehmigung für die Nutzungsänderung wurde erteilt. Die Stellungnahme ist Bestandteil der Genehmigungsunterlagen.",
          "Zur Abgrenzung Konzept oder Stellungnahme: [Brandschutzkonzept](/ratgeber/brandschutzkonzept-bauo-sbauvo-nrw) und Hub [Nutzungsänderung](/ratgeber/nutzungsaenderung-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "fehler",
        title: "Typische Fehler in solchen Fällen",
        paragraphs: [
          "Häufig verzögert sich das Verfahren, wenn der Obergeschossplan noch die frühere Sportnutzung zeigt, obwohl das Geschoss leersteht. Stellungnahme und Pläne müssen denselben Ist-Zustand beschreiben.",
          "Fehlt eine belastbare Betriebsbeschreibung, können Werkstatt oder Ladeeinrichtungen unterstellt werden. Ein Rettungsweg über die Dachfläche darf nicht nur planlich behauptet werden; Außentreppen und Deckenqualität sind vor Ort zu prüfen. Bauzeitlich ausgebaute Brandschutztüren gehören als Wiederherstellungsgebot in die Stellungnahme. Der Gegenstand der Unterlage soll die Nachforderung der Bauaufsicht abdecken, ohne wesentliche Punkte auszulassen und ohne den Auftrag unnötig auszuweiten.",
        ],
      },
      {
        id: "hinweis",
        title: "Grenzen dieses Praxisfalls",
        paragraphs: [
          "Dieser Ratgeber beschreibt einen anonymisierten Fall aus NRW zur Nutzungsänderung von Sport- und Trainingnutzung zu Autohaus-Ausstellung. Andere Objekte mit Werkstatt, Gefahrstoffen, Ladeinfrastruktur, Sonderbau oder abweichenden Rettungswegen können deutlich mehr Nachweise verlangen. Maßgeblich bleiben der Einzelfall und die Festlegungen der Bauaufsicht.",
          "H&S+ unterstützt Bauherren, Entwurfsverfasser und Betreiber in Köln und NRW mit brandschutztechnischen Stellungnahmen und Konzepten bei Umnutzungen von Gewerbehallen, Autohäusern und vergleichbaren Vorhaben.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/nutzungsaenderung-brandschutz-bauo-nrw", label: "Nutzungsänderung Brandschutz (Hub)" },
      { href: "/ratgeber/imbiss-ladenlokal-nutzungsaenderung-koeln", label: "Praxisfall Laden → Imbiss" },
      { href: "/ratgeber/sportstaetten-fitnessstudios-brandschutz-nrw", label: "Sportstätten & Fitness" },
      { href: "/ratgeber/brandschutzkonzept-bauo-sbauvo-nrw", label: "Brandschutzkonzept" },
      { href: "/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw", label: "Gebäudeklassen" },
      { href: "/ratgeber/zweiter-rettungsweg-wohnungsbestand-bauo-nrw", label: "Zweiter Rettungsweg" },
      { href: "/ratgeber/umbau-nutzungsaenderung-brandschutz", label: "Umbau & Nutzungsänderung" },
      { href: "/kontakt", label: "Kontakt / Anfrage" },
    ],
    faq: [
      {
        question: "Reicht bei Nutzungsänderung Sporthalle zu Autohaus eine brandschutztechnische Stellungnahme?",
        answer:
          "In Köln und NRW oft ja, wenn die Nachforderung klar abgegrenzt ist, kein großer Sonderbau vorliegt und Bestand sowie Nutzung nachvollziehbar sind. Die Bauaufsicht entscheidet im Einzelfall, ob ein vollständiges Brandschutzkonzept verlangt wird.",
      },
      {
        question: "Wann brauche ich ein Brandschutzkonzept statt einer Stellungnahme?",
        answer:
          "Typisch bei großem Sonderbau nach § 50 BauO NRW oder wenn die Bauaufsicht eine umfassende Neubewertung verlangt. Bei begrenzter Umnutzung mit klarer Nachforderung reicht häufig die Stellungnahme. Siehe [Wann Brandschutzkonzept](/ratgeber/brandschutzkonzept-wann-noetig).",
      },
      {
        question: "Warum ist die Betriebsbeschreibung so wichtig?",
        answer:
          "Ohne klare Angabe zu Ausstellung, Werkstatt, Laden und Gefahrstoffen kann die Behörde ungünstige Annahmen treffen. Beantragte und ausgeschlossene Nutzungen gehören in die Stellungnahme.",
      },
      {
        question: "Muss das leere Obergeschoss mit dem Autohaus bewertet werden?",
        answer:
          "Wenn es eine eigene Nutzungseinheit ist und nicht dem Autohaus zugerechnet wird, ist es getrennt zu führen. Spätere Vermietung oder Sportnutzung lösen eine neue Bewertung aus.",
      },
      {
        question: "Sind zwei Außentreppen immer ausreichend?",
        answer:
          "Nicht pauschal. Entscheidend sind Unabhängigkeit der Wege, Baustoffe, Deckenqualität unter Dachübergängen und Weglängen. Die Bauaufsicht entscheidet unter Beteiligung der Brandschutzdienststelle.",
      },
      {
        question: "Was, wenn Pläne und Ist-Zustand nicht übereinstimmen?",
        answer:
          "Dann verzögert sich das Verfahren oft. Stellungnahme und Bauvorlagenpläne müssen denselben Zustand beschreiben. Zeigt der Obergeschossplan noch Sportnutzung, obwohl das Geschoss leersteht, entsteht ein Widerspruch zur Ortsbegehung.",
      },
      {
        question: "Was leistet die Stellungnahme in einem solchen Fall?",
        answer:
          "Sie beantwortet die Nachforderungspunkte der Bauaufsicht mit Befund aus Plan und Ortsbegehung sowie klaren Feststellungen zu Nutzung, Trennung, Rettungswegen und abwehrendem Brandschutz. Im dokumentierten Fall war die Stellungnahme Teil der Unterlagen, mit denen die Baugenehmigung für die Nutzungsänderung erteilt wurde.",
      },
    ],
  },
];
