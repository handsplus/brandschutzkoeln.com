/**
 * 20.10.2024 – Feuerwehrzufahrten, Aufstell- und Bewegungsflächen (BauO / SBauVO NRW).
 * Quelle: Feuerwehrzufahrten_Bewegungsflaechen_BauO_SBauVO_NRW.html
 */
import type { RatgeberArticle } from "./ratgeber-types";

export const RATGEBER_ARTICLES_FEUERWEHRZUFARTEN: RatgeberArticle[] = [
  {
    slug: "feuerwehrzufahrten-bewegungsflaechen-bauo-sbauvo-nrw",
    title: "Feuerwehrzufahrt NRW: was § 5 BauO verlangt – Zugang, Zufahrt, Aufstellfläche",
    excerpt:
      "Zu- und Durchgänge, Zu- und Durchfahrten, Aufstell- und Bewegungsflächen: Die zentrale Norm für jedes Gebäude ist § 5 BauO NRW. Das Gesetz nennt keine festen Breiten – die Bemessung folgt aus Rettungswegkonzept und Tatbeständen.",
    metaTitle: "Feuerwehrzufahrt NRW § 5 BauO Anforderungen | H&S+",
    metaDescription:
      "Feuerwehrzufahrt NRW gesetzlich: § 4 und § 5 BauO, Aufstell- und Bewegungsfläche, §§ 33/37 Rettungsweg, SBauVO §§ 30/84/93. Prüfkatalog ohne Merkblatt-Maße.",
    keywords: [
      "Feuerwehrzufahrt NRW",
      "Feuerwehrzufahrt Anforderungen",
      "§ 5 BauO NRW",
      "Aufstellfläche Feuerwehr",
      "Bewegungsfläche Feuerwehr",
      "Feuerwehrzugang BauO",
      "Zu- und Durchfahrt Feuerwehr",
    ],
    sections: [
      {
        id: "frage",
        title: "§ 5 BauO NRW – zentrale Norm für jedes Gebäude",
        paragraphs: [
          "Planer fragen nach Breite, Wendekreis und Stellplatz – im Gesetz stehen andere Begriffe: Zu- und Durchgang (Zugang zu Fuß), Zu- und Durchfahrt (Befahrung mit Fahrzeugen), Aufstellfläche (Abstellen von Einsatzfahrzeugen) und Bewegungsfläche (Manövrieren).",
          "Die zentrale allgemeine Vorschrift für alle Gebäude ist § 5 BauO NRW (Zugänge und Zufahrten auf den Grundstücken). Sie ergänzt die Errichtungsvoraussetzung in § 4 Abs. 2 und verknüpft sich mit dem Rettungswegkonzept in §§ 33 und 37. SBauVO-Paragraphen verschärfen oder strukturieren – ersetzen § 5 nicht.",
          "Dieser Ratgeber fasst ausschließlich gesetzlich verbindliches Recht zusammen – ohne DIN 14090, FwDV, Planungsrichtlinien der Feuerwehr oder konkrete Breiten, sofern das Gesetz sie nicht nennt. Konkrete Maße und NRW-Auslegung: [Feuerwehrzufahrt Runderlass](/ratgeber/feuerwehrzufahrt-zugaenge-runderlass-bauo-nrw), [Aufstellfläche Straße](/ratgeber/aufstell-bewegungsflaeche-strasse-hubrettung-bauo-nrw).",
        ],
      },
      {
        id: "begriffe",
        title: "Gesetzliche Begriffe – nicht verwechseln",
        paragraphs: [
          "„Feuerwehrzufahrt“, „Wenderadius“ oder „Löschfahrzeug-Stellplatz“ haben keine Legaldefinition in BauO oder SBauVO. Maßgeblich sind die Formulierungen in § 5 BauO NRW.",
        ],
        table: {
          caption: "Begriffe im Gesetz",
          headers: ["Begriff", "Bedeutung", "Beispiel", "Norm"],
          rows: [
            ["Zu- und Durchgang", "Zugang zu Fuß, geradlinig von öffentlicher Verkehrsfläche", "Rückwärtiges Gebäude ohne Fahrzeugbedarf", "§ 5 Satz 1"],
            ["Zu- und Durchfahrt", "Befahrbare Verbindung für Feuerwehrfahrzeuge", "Brüstung > 8 m; Gebäude > 50 m von Straße", "§ 5 Sätze 2–4; § 93 SBauVO"],
            ["Aufstellfläche", "Abstellen/Positionieren von Einsatzfahrzeugen", "Hubrettung vor Fenster-Rettungsweg", "§ 5 Satz 3; § 30 SBauVO"],
            ["Bewegungsfläche", "Manövrieren von Einsatzfahrzeugen", "Rangieren Hubrettungsfahrzeug", "§ 5 Satz 3; § 93 SBauVO"],
            ["Öffentliche Verkehrsfläche", "Ausgangspunkt der Zufahrtsplanung", "Straße, Platz", "§ 4 Abs. 2"],
            ["Flächen für Einsatzkräfte", "Gerettete können sich bemerkbar machen", "Fenster als zweiter Rettungsweg", "§ 37 BauO"],
          ],
        },
      },
      {
        id: "normkette",
        title: "Normkette: von § 4 bis SBauVO",
        paragraphs: [
          "Die Prüflogik läuft vom Rettungswegkonzept aus: Zuerst §§ 33/37 → daraus folgt Gang, Fahrt oder Hubrettungsflächen nach § 5 → dann SBauVO-Sonderregeln und ggf. Brandschutzkonzept (BauPrüfVO § 9).",
        ],
        list: [
          "§ 3 Abs. 1 BauO NRW – Allgemeine Anforderungen; Brandschutz inkl. Löscharbeiten (§ 14)",
          "§ 4 Abs. 2 BauO NRW – Errichtungsvoraussetzung: befahrbare öffentliche Verkehrsfläche oder gesicherte Zufahrt plus Löschwasser",
          "§ 5 BauO NRW – Ausgestaltung auf dem Grundstück: Gänge, Fahrten, Aufstell- und Bewegungsflächen",
          "§§ 33, 37 BauO NRW – Rettungswege über Feuerwehrgeräte lösen erhöhte §-5-Anforderungen aus",
          "SBauVO NRW – Zusatz für Sonderbauten (Versammlungsstätte, Verkauf, Hochhaus, Stadion …)",
        ],
      },
      {
        id: "paragraph-5",
        title: "§ 5 BauO NRW – Tatbestände im Überblick",
        paragraphs: [
          "Von öffentlichen Verkehrsflächen ist insbesondere für die Feuerwehr ein geradliniger Zu- oder Durchgang zu rückwärtigen Gebäuden zu schaffen; zu anderen Gebäuden, wenn der zweite Rettungsweg über Rettungsgeräte der Feuerwehr führt. Ab Brüstung > 8 m an Anleitstellen: Zu- oder Durchfahrt statt Gang. Bei erforderlichem Hubrettungsfahrzeug: Aufstell- und Bewegungsflächen. Gebäude/teile > 50 m von öffentlicher Verkehrsfläche: Zufahrten und Bewegungsflächen zu vorderen und hinteren Grundstücksteilen, wenn für den Feuerwehreinsatz nötig.",
          "Flächen außerhalb des Grundstücks müssen öffentlich-rechtlich gesichert sein. Alle Flächen: befestigt, tragfähig, gekennzeichnet, ständig frei; Kennzeichnung von der Straße sichtbar; Fahrzeuge dürfen dort nicht abgestellt werden.",
        ],
        table: {
          caption: "§ 5 BauO NRW – systematische Auswertung",
          headers: ["Satz", "Tatbestand", "Erforderlich"],
          rows: [
            ["1", "Rückwärtige Gebäude", "Geradliniger Zu- oder Durchgang (Fußweg)"],
            ["1 Alt.", "2. Rettungsweg über Feuerwehrgeräte", "Zu- oder Durchgang auch zu anderen Gebäuden"],
            ["2", "Brüstung Anleitstellen > 8 m", "Zu- oder Durchfahrt statt Gang"],
            ["3", "Hubrettungsfahrzeug für Personenrettung", "Aufstell- und Bewegungsflächen"],
            ["4", "Gebäude/teile > 50 m von Verkehrsfläche", "Zufahrten/Durchfahrten + Bewegungsflächen"],
            ["5", "Flächen außerhalb Grundstück", "Öffentlich-rechtliche Sicherung"],
            ["6–8", "Alle Flächen nach Satz 1", "Befestigt, tragfähig, gekennzeichnet, frei; Parkverbot"],
          ],
        },
      },
      {
        id: "paragraph-4",
        title: "§ 4 Abs. 2 – Errichtungsvoraussetzung",
        paragraphs: [
          "Gebäude dürfen nur errichtet werden, wenn gesichert ist, dass ab Beginn der Nutzung das Grundstück in für Zufahrt und Einsatz von Feuerlösch- und Rettungsgeräten angemessener Breite an einer befahrbaren öffentlichen Verkehrsfläche liegt – oder eine befahrbare, öffentlich-rechtlich gesicherte Zufahrt zu einer befahrbaren öffentlichen Verkehrsfläche besteht und Löschwasser vorhanden und benutzbar ist.",
          "Erleichterung Wohnwege: An Wohnwegen, an denen nur Gebäude der Gebäudeklassen 1 bis 3 zulässig sind, brauchen sie nur befahrbar zu sein, wenn sie länger als 50 m sind (§ 4 Abs. 2 Satz 3). In GK 4 gilt die Befahrbarkeit von Anfang an. Mehr: [Gebäudeklasse 4](/ratgeber/gebaeudeklasse-4-brandschutz-bauo-nrw).",
        ],
      },
      {
        id: "rettungswege",
        title: "Verknüpfung mit Rettungswegen (§§ 33, 37)",
        paragraphs: [
          "Feuerwehr-Flächen sind eng mit dem Rettungswegkonzept verknüpft – nicht isoliert planbar.",
        ],
        table: {
          caption: "Rettungsweg → Folge für Grundstück",
          headers: ["Norm", "Inhalt", "Folge für § 5"],
          rows: [
            ["§ 33 Abs. 2 Satz 2", "2. Rettungsweg über Rettungsgeräte der Feuerwehr", "Zu-/Durchgang oder -fahrt erforderlich"],
            ["§ 33 Abs. 5", "2. RW über FW-Geräte + Brüstung > 8 m", "Durchfahrt + Aufstell-/Bewegungsflächen"],
            ["§ 37 Satz 4", "Fenster-RW: Gerettete bemerkbar zu Einsatzkräften", "Aufstell-/Bewegungsflächen unter Fenster"],
            ["§ 14 BauO", "Wirksame Löscharbeiten, Löschwasser", "Hydranten, Einspeise (vgl. § 93 SBauVO)"],
          ],
        },
      },
      {
        id: "sbauvo",
        title: "SBauVO NRW – Sonderbau-Zusätze",
        paragraphs: [
          "Allgemeine Versammlungsstätten (ohne Stadion): Keine eigene SBauVO-Bauvorschrift zu Zufahrtsmaßen außer § 30 – maßgeblich bleibt § 5 BauO NRW; § 31 SBauVO regelt Freihalten im Betrieb.",
        ],
        table: {
          caption: "SBauVO – Feuerwehr-Flächen",
          headers: ["SBauVO", "Sonderbau", "Kerninhalt"],
          rows: [
            ["§ 30", "Stadionanlagen", "Besondere Zufahrten, Aufstell-/Bewegungsflächen, Zufahrt Innenbereich, Kennzeichnung"],
            ["§ 31", "Versammlungsstätten (alle)", "Rettungswege, Zufahrten, Flächen ständig frei; Hinweis; Türen unverschlossen"],
            ["§ 84", "Verkaufsstätten", "Zufahrten, Durchfahrten, Aufstell-/Bewegungsflächen vorhanden; freihalten; Hinweis"],
            ["§ 93", "Hochhäuser", "Zu-/Durchfahrten, Bewegungsflächen; FW-Eingänge, NTR, FW-Aufzug, Löschwasser-Einspeise erreichbar"],
            ["§ 57 Abs. 1", "Beherbergungsstätten", "Rettungswege frei; Türen nicht versperrt (keine Flächenbemessung)"],
            ["§ 123", "Garagen", "Zu-/Abfahrt 3 m / 2,75 m – Verkehrssicherheit, nicht explizit Feuerwehr"],
          ],
        },
      },
      {
        id: "konzept",
        title: "BauPrüfVO § 9 – Brandschutzkonzept",
        paragraphs: [
          "Bei großen Sonderbauten (§ 50 Abs. 2 BauO NRW, § 70) muss das Brandschutzkonzept insbesondere Zu- und Durchfahrten sowie Aufstell- und Bewegungsflächen für die Feuerwehr enthalten – neben Löschwassermenge, Hydranten, Rettungswegen auf dem Baugrundstück und Feuerwehrplänen.",
          "Auch wenn Einzelmaße nicht im Gesetz stehen, sind Flächen im Konzept zu dokumentieren und zu begründen. Mehr: [Brandschutzkonzept wann nötig](/ratgeber/brandschutzkonzept-wann-noetig), [Fachplaner-Rollen](/ratgeber/brandschutzfachplaner-rollen-bauo-nrw).",
        ],
      },
      {
        id: "betrieb",
        title: "Betrieb: Freihalten und Kennzeichnung",
        paragraphs: [],
        table: {
          caption: "Dauerpflichten",
          headers: ["Pflicht", "Norm", "Wer"],
          rows: [
            ["Ständig frei; keine Fahrzeug-Abstellung", "§ 5 BauO", "Grundstückseigentümerin / Nutzerin"],
            ["Kennzeichnung; von Straße sichtbar", "§ 5 BauO", "Errichtung und Erhaltung"],
            ["Freihalten + Hinweis (Versammlungsstätte)", "§ 31 SBauVO", "Betreiberin während Betrieb"],
            ["Freihalten + Hinweis (Verkaufsstätte)", "§ 84 Abs. 3 SBauVO", "Betreiberin während Betrieb"],
            ["Ordnungswidrigkeit bei Nichtfreihalten", "§ 46 Nr. 1 SBauVO (VS); § 91 SBauVO (Verkauf)", "vorsätzlich/fahrlässig"],
          ],
        },
      },
      {
        id: "nutzung",
        title: "Übersicht nach Nutzung",
        paragraphs: [],
        table: {
          caption: "Typische gesetzliche Anforderungen",
          headers: ["Gebäude / Nutzung", "Allgemeine Norm", "SBauVO-Zusatz", "Flächen (gesetzlich)"],
          rows: [
            ["Alle Gebäude", "§ 4 Abs. 2, § 5", "—", "Zufahrt/Zugang, ggf. Durchfahrt, Aufstell-/Bewegungsfläche"],
            ["Wohngebäude GK 1–3 (Wohnweg)", "§ 4 Abs. 2 Satz 3", "—", "Wohnweg nur ab > 50 m befahrbar"],
            ["2. RW über FW-Fenster > 8 m", "§§ 5, 33, 37", "—", "Durchfahrt + Hubrettungs-Aufstell-/Bewegungsfläche"],
            ["Versammlungsstätte", "§ 5", "§ 31; § 30 (Stadion)", "Stadion: besondere Zufahrten + Innenbereich-Zufahrt"],
            ["Verkaufsstätte > 2.000 m²", "§ 5", "§ 84", "Explizit Zufahrten, Durchfahrten, Aufstell-/Bewegungsflächen"],
            ["Hochhaus > 22 m", "§ 5", "§ 93", "Zu-/Durchfahrten, Bewegungsflächen, FW-Eingänge, Löschwasser"],
            ["Großer Sonderbau", "§ 5", "SBauVO + BauPrüfVO § 9", "Dokumentation im Brandschutzkonzept"],
          ],
        },
      },
      {
        id: "grenzfaelle",
        title: "Grenzfälle – ja oder nein?",
        paragraphs: [
          "Grenzfall ja: Reihenhaus GK 2, zweiter Rettungsweg über Dachfenster mit Brüstung 9 m – Durchfahrt und Hubrettungs-Aufstell-/Bewegungsflächen nach § 5; Konzept oder Stellungnahme mit Feuerwehr. Grenzfall nein: Einfamilienhaus GK 1, beide Rettungswege über Treppe zur Straße – kein Tatbestand für Hubrettungsflächen; § 5 Satz 1 für rückwärtige Anbauten prüfen.",
          "Grenzfall ja: Versammlungsstätte ohne Stadion, 800 Besucher – § 5 für Bemessung, § 31 SBauVO für Betrieb (freihalten, Hinweis). Grenzfall nein: Stadionanlage – § 30 SBauVO zusätzlich mit Innenbereich-Zufahrt und besonderen Flächen.",
          "Grenzfall ja: Gewerbegrundstück, Gebäude 55 m hinter Straße – § 5 Satz 4: Zufahrten zu vorderen und hinteren Grundstücksteilen. Grenzfall nein: Wohnweg nur GK 1–3, Länge 40 m – Befahrbarkeit des Wohnwegs nach § 4 Abs. 2 Satz 3 nicht erforderlich.",
        ],
      },
      {
        id: "praxis",
        title: "Typische Planungsfälle",
        paragraphs: [
          "Neubau Geschäftshaus mit Fenster-Rettungsweg im 3. OG: Rettungswegplanung (§ 33) → Brüstung > 8 m → Durchfahrt und Hubrettungsflächen (§ 5) → im Lageplan und Konzept darstellen; [Feuerwehr-Abstimmung](/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw) vor Einreichung.",
          "Umnutzung Lagerhalle zu Verkaufsstätte > 2.000 m²: § 84 SBauVO ergänzt § 5 – Zufahrten müssen vorhanden und im Betrieb frei sein; Fortschreibung Brandschutzkonzept mit Flächennachweis.",
          "Hochhaus-Neubau: § 93 SBauVO strukturiert Erreichbarkeit von FW-Eingängen, NTR, FW-Aufzug und Löschwasser-Einspeise – parallel zu [Feuerwehrplänen](/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw), sofern Pflicht nach § 117 SBauVO.",
          "Bestand mit zweitem Rettungsweg über Feuerwehr: Nicht nur innen prüfen – Grundstückserschließung nach § 5 muss zum genehmigten Rettungswegkonzept passen; Blockade durch Container oder Parken verletzt Dauerpflicht.",
        ],
      },
      {
        id: "nicht-im-gesetz",
        title: "Was das Gesetz nicht regelt",
        paragraphs: [],
        list: [
          "Keine Mindestbreiten für Zufahrten in § 5 BauO NRW (anders § 123 SBauVO Garagen-Verkehr: 2,75 m)",
          "Keine Fahrzeugklassen (LF, DLK, RW) oder Achslasten im BauO-Wortlaut",
          "Keine Wenderadien oder Längen von Aufstellflächen in der BauO NRW",
          "Keine Legaldefinition von „Aufstellfläche“ und „Bewegungsfläche“ in § 2 BauO NRW",
          "Keine Bezugnahme auf DIN 14090 im Gesetzestext",
          "Keine einheitliche Kennzeichnungsvorschrift (Farbe, Schild) – nur „kennzeichnen“ / „sichtbar“",
        ],
      },
      {
        id: "pruefkatalog",
        title: "Prüfkatalog",
        paragraphs: [],
        table: {
          caption: "Feuerwehr-Flächen – gesetzliche Prüfpunkte",
          headers: ["Nr.", "Prüffrage", "Norm", "Ergebnis"],
          rows: [
            ["1", "Grundstück an befahrbare öffentliche Verkehrsfläche oder gesicherte Zufahrt?", "§ 4 Abs. 2", "Errichtungsvoraussetzung"],
            ["2", "2. Rettungsweg über Feuerwehrgeräte?", "§ 33 Abs. 2", "Ja → § 5 Satz 1: Zu-/Durchgang/-fahrt"],
            ["3", "Brüstung Anleitstellen > 8 m?", "§ 5 Satz 2", "Ja → Durchfahrt statt Gang"],
            ["4", "Hubrettungsfahrzeug für Personenrettung?", "§ 5 Satz 3; § 33 Abs. 5", "Aufstell- und Bewegungsflächen"],
            ["5", "Gebäude/teile > 50 m von Verkehrsfläche?", "§ 5 Satz 4", "Zufahrten zu Grundstücksteilen"],
            ["6", "Flächen außerhalb Grundstück?", "§ 5 Satz 5", "Öffentlich-rechtliche Sicherung"],
            ["7", "Befestigt, tragfähig, gekennzeichnet, frei?", "§ 5 Sätze 6–8", "Dauerpflicht; Parkverbot"],
            ["8", "Sonderbau VS, Verkauf, Hochhaus?", "§§ 30, 31, 84, 93 SBauVO", "Zusatzanforderungen prüfen"],
            ["9", "Großer Sonderbau?", "§ 70; BauPrüfVO § 9", "Flächen im Brandschutzkonzept"],
            ["10", "Löschwasserversorgung vorhanden?", "§ 4 Abs. 2; § 14", "Errichtungsvoraussetzung"],
          ],
        },
      },
      {
        id: "hinweis",
        title: "Grenzen dieser Übersicht",
        paragraphs: [
          "Dieser Ratgeber erklärt die gesetzliche Systematik zu Feuerwehr-Zugängen und -Flächen nach BauO NRW, SBauVO NRW und BauPrüfVO NRW – ohne Technische Baubestimmungen oder kommunale Merkblätter. Konkrete Bemessung ist tatbestandliche Feststellung im Genehmigungsverfahren; bei Sonderbauten dokumentiert im Brandschutzkonzept.",
          "NRW-Auslegung zu Maßen, Schotterrasen und Merkblatt-Grenzen: [Feuerwehrzufahrt Runderlass](/ratgeber/feuerwehrzufahrt-zugaenge-runderlass-bauo-nrw). Hubrettung auf Straße: [Aufstellfläche öffentliche Verkehrsfläche](/ratgeber/aufstell-bewegungsflaeche-strasse-hubrettung-bauo-nrw). Ersetzt keine behördliche Einordnung und keine Feuerwehr-Begehung.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ratgeber/feuerwehrzufahrt-zugaenge-runderlass-bauo-nrw", label: "Maße & Runderlass" },
      { href: "/ratgeber/aufstell-bewegungsflaeche-strasse-hubrettung-bauo-nrw", label: "Aufstellfläche Straße" },
      { href: "/ratgeber/zweiter-rettungsweg-dachfenster-bauo-nrw", label: "Rettungsweg Dachfenster" },
      { href: "/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw", label: "Feuerwehrpläne" },
      { href: "/ratgeber/flucht-und-rettungswege-bauo-nrw", label: "Rettungswege" },
      { href: "/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw", label: "Feuerwehr-Abstimmung" },
      { href: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw", label: "Hochhaus § 93" },
    ],
    faq: [
      {
        question: "Wo steht die Feuerwehrzufahrt im Gesetz?",
        answer:
          "Zentral in § 5 BauO NRW für alle Gebäude. Voraussetzung: § 4 Abs. 2 (befahrbare Verkehrsfläche oder gesicherte Zufahrt). Sonderbauten: ergänzend §§ 30, 31, 84, 93 SBauVO.",
      },
      {
        question: "Wie breit muss eine Feuerwehrzufahrt sein?",
        answer:
          "§ 5 BauO NRW nennt keine Mindestbreite. Das Gesetz verlangt „ausreichend“ befestigte und tragfähige Flächen. Konkrete Maße ergeben sich aus Rettungswegkonzept und Genehmigungsverfahren – nicht aus diesem Gesetzesüberblick.",
      },
      {
        question: "Was ist der Unterschied zwischen Aufstell- und Bewegungsfläche?",
        answer:
          "Aufstellfläche: Abstellen von Einsatzfahrzeugen (z. B. Hubrettung). Bewegungsfläche: Manövrieren/Rangieren. Bei Hubrettungspflicht verlangt § 5 Satz 3 beides.",
      },
      {
        question: "Ab wann brauche ich eine Durchfahrt statt eines Zugangs?",
        answer:
          "Wenn die Brüstung an anleiterbaren Stellen mehr als 8 m über Gelände liegt (§ 5 Satz 2) – oder wenn Hubrettungsfahrzeuge Aufstell- und Bewegungsflächen erfordern.",
      },
      {
        question: "Gilt § 5 nur für Sonderbauten?",
        answer:
          "Nein. § 5 BauO NRW gilt für jedes Gebäude. SBauVO-Paragraphen verschärfen oder strukturieren bei bestimmten Nutzungen – ersetzen § 5 nicht.",
      },
      {
        question: "Muss die Aufstellfläche auf dem Grundstück liegen?",
        answer:
          "§ 5 verlangt, dass erforderliche Flächen vorhanden und nutzbar sind; außerhalb des Grundstücks nur mit öffentlich-rechtlicher Sicherung. Ob die öffentliche Straße als Aufstellfläche genutzt werden darf, ist Gesetzesauslegung – siehe separater Ratgeber Aufstellfläche Straße.",
      },
      {
        question: "Was gehört ins Brandschutzkonzept?",
        answer:
          "Bei großen Sonderbauten nach BauPrüfVO § 9: Zu- und Durchfahrten, Aufstell- und Bewegungsflächen, Löschwasser, Hydranten, Rettungswege auf dem Grundstück – dokumentiert und begründet.",
      },
    ],
  },
];
