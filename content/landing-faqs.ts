/**
 * FAQ für SEO-Landingpages – Nutzer & FAQPage-Schema.
 */

export type LandingFaqItem = { question: string; answer: string };

export const LANDING_FAQS: Record<string, LandingFaqItem[]> = {
  "/brandschutzberatung-koeln": [
    {
      question: "Was umfasst eine Brandschutzberatung in Köln?",
      answer:
        "Wir analysieren Ihre Situation (Objekt, Nutzung, Dokumentation), priorisieren Maßnahmen und geben umsetzbare Empfehlungen zu baulichem, technischem und organisatorischem Brandschutz – abgestimmt auf BauO NRW und Arbeitsschutz.",
    },
    {
      question: "Brauche ich eine Beratung oder gleich ein Brandschutzkonzept?",
      answer:
        "Bei kleineren Fragen reicht oft eine Beratung. Bei Genehmigung, Nutzungsänderung oder Sonderbau ist häufig ein Konzept nötig. In der Erstberatung klären wir, welcher Nachweis sinnvoll ist.",
    },
    {
      question: "Wie schnell erhalte ich eine Rückmeldung?",
      answer:
        "Nach Ihrer Anfrage melden wir uns zeitnah mit den nächsten Schritten – per Formular, Telefon oder WhatsApp.",
    },
  ],
  "/brandschutzhelfer-ausbildung-koeln": [
    {
      question: "Wie viele Brandschutzhelfer brauche ich?",
      answer:
        "Die ASR A2.2 verlangt eine ausreichende Anzahl – abhängig von Personenanzahl, Gefährdung und Schichtmodell. Wir helfen bei der Bedarfseinschätzung.",
    },
    {
      question: "Findet die Schulung bei uns vor Ort statt?",
      answer:
        "Ja, Inhouse in Köln und Umgebung ist üblich. Theorie, Verhalten im Brandfall und praktische Löschübung sind enthalten; Teilnehmer erhalten einen Nachweis.",
    },
    {
      question: "Wie oft muss die Ausbildung wiederholt werden?",
      answer:
        "Regelmäßige Auffrischung ist vorgesehen. Wir planen Erst- und Folgeschulungen und binden sie sinnvoll in Ihre Brandschutzordnung ein.",
    },
  ],
  "/brandschutzbeauftragter-koeln": [
    {
      question: "Muss jedes Unternehmen einen Brandschutzbeauftragten haben?",
      answer:
        "Nicht pauschal – es hängt von Gefährdung, Größe und Vorgaben ab. Externe Unterstützung ist sinnvoll, wenn intern keine Kapazität oder Qualifikation vorhanden ist.",
    },
    {
      question: "Was macht ein externer Brandschutzbeauftragter in Köln?",
      answer:
        "Begehungen, Maßnahmenverfolgung, Unterweisungen, Dokumentation und Abstimmung mit Verantwortlichen, Behörden und Versicherern – passend zu Ihrem Betrieb.",
    },
    {
      question: "Ergänzt das eine Brandschutzordnung?",
      answer:
        "Ja, oft arbeiten wir parallel an Ordnung, Plänen und Schulungen – als schlüssiges Gesamtpaket.",
    },
  ],
  "/brandschutzkonzept-koeln": [
    {
      question: "Wann ist ein Brandschutzkonzept in Köln Pflicht?",
      answer:
        "Typisch bei genehmigungspflichtigem Neubau, Umbau, Nutzungsänderung und Sonderbauten nach § 50 BauO NRW. Die Bauaufsicht legt fest, ob Vollkonzept, Stellungnahme oder Fortschreibung nach § 9 BauPrüfVO NRW reicht – wir ordnen Ihr Vorhaben ein.",
    },
    {
      question: "Was unterscheidet Konzept und brandschutztechnische Stellungnahme?",
      answer:
        "Das Konzept ist der vollständige Nachweis mit Plänen, Nutzung, baulichem und anlagentechnischem Brandschutz. Die STN deckt überschaubare, klar abgegrenzte Änderungen ab, wenn die Behörde keinen Vollnachweis verlangt.",
    },
    {
      question: "Was ist eine Fortschreibung nach § 9 BauPrüfVO NRW?",
      answer:
        "Wenn sich Nutzung, Technik oder Schutzniveau am genehmigten Stand ändert, wird der bestehende Nachweis angepasst – z. B. nach Umbau, Abschaltung von Anlagen oder Teilumnutzung.",
    },
    {
      question: "Arbeiten Sie nur in Köln?",
      answer:
        "Standort und Schwerpunkt: Köln und Umgebung. Größere oder genehmigungsrelevante Projekte in NRW (z. B. Bonn, Rhein-Sieg) übernehmen wir nach Absprache – einheitlicher Planstand mit Ihrer Architektur.",
    },
    {
      question: "Unterstützen Sie bei Rückfragen der Bauaufsicht?",
      answer:
        "Ja, fachlich bei Zwischenbescheiden, Nachforderungen und Abstimmung mit Feuerwehr – keine anwaltliche Vertretung, aber nachvollziehbare Ergänzungen zum Konzept.",
    },
    {
      question: "Ersetzt das Konzept Flucht- und Feuerwehrpläne?",
      answer:
        "Nein. Bauordnungsrechtlicher Nachweis (Konzept/STN) und betriebliche Pläne (ASR A2.3, DIN 14095) sind getrennt – wir können beides, klar abgegrenzt.",
    },
  ],
  "/brandschutzordnung-koeln": [
    {
      question: "Was sind Teil A, B und C der Brandschutzordnung?",
      answer:
        "Nach DIN 14096: Teil A als Aushang für alle Personen, Teil B mit Pflichten für Beschäftigte und Nutzer, Teil C mit Aufgaben für Personen mit besonderen Brandschutzaufgaben – angepasst an Ihren Betrieb.",
    },
    {
      question: "Brauche ich eine BSO ohne Bauantrag?",
      answer:
        "Oft ja: im laufenden Betrieb, nach Umbau, wegen Versicherer oder interner Vorgaben – unabhängig vom genehmigungsrechtlichen Konzept.",
    },
    {
      question: "Wie oft muss die Ordnung fortgeschrieben werden?",
      answer:
        "Bei baulichen, organisatorischen oder nutzungsbezogenen Änderungen, neuen Fluchtwegen oder geänderten Zuständigkeiten. Teil A muss dann sichtbar aktualisiert werden.",
    },
    {
      question: "Was ist der Unterschied zur Flucht- und Rettungsplan?",
      answer:
        "Die BSO regelt Verhalten und Zuständigkeiten (DIN 14096). Der Fluchtplan nach ASR A2.3 zeigt Orientierung und Wege für Beschäftigte – beides wird oft gemeinsam fortgeschrieben, ist aber nicht dasselbe Dokument.",
    },
    {
      question: "Können Sie Flucht- und Feuerwehrpläne mit erstellen?",
      answer:
        "Ja, aus einer Begehung – getrennt nach ASR A2.3 und DIN 14095. Die BSO verweist darauf, ersetzt sie aber nicht.",
    },
    {
      question: "Arbeiten Sie nur in Köln?",
      answer:
        "Schwerpunkt Köln und Umgebung; BSO und Schulungen für weitere Standorte in NRW nach Projektumfang und Absprache.",
    },
  ],
  "/leistungen": [
    {
      question: "Welche Brandschutz-Leistungen bieten Sie in Köln an?",
      answer:
        "Schwerpunkt: brandschutztechnische Konzepte und Stellungnahmen sowie Brandschutzordnungen nach DIN 14096. Ergänzend: Pläne, Evakuierung, Brandschutzhelfer, Beratung und Begleitung bei behördlichen Anordnungen.",
    },
    {
      question: "Arbeiten Sie nur in Köln?",
      answer:
        "Standort und Schwerpunkt: Köln und Umgebung. Genehmigungsrelevante Konzepte und größere Vorhaben in NRW (z. B. Bonn, Rhein-Sieg) nach Absprache.",
    },
    {
      question: "Wie erhalte ich ein Angebot?",
      answer:
        "Kurz Ihr Objekt und Anliegen schildern – wir melden uns mit Einschätzung und nächsten Schritten zur Erstberatung.",
    },
  ],
};
