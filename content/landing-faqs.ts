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
        "Typisch bei Neubau, Umbau, Nutzungsänderung, Sonderbauten oder behördlichen Auflagen. Wir prüfen Ihr Vorhaben und nennen den passenden Nachweis.",
    },
    {
      question: "Was unterscheidet Konzept und Stellungnahme?",
      answer:
        "Je nach Vorhaben reicht eine Stellungnahme oder es wird ein vollständiges Konzept gefordert. Beides dokumentiert die Erfüllung brandschutzrechtlicher Anforderungen.",
    },
    {
      question: "Unterstützen Sie bei Rückfragen der Bauaufsicht?",
      answer:
        "Ja, wir begleiten fachlich bei Rückfragen und ergänzen Unterlagen nachvollziehbar für Prüfer.",
    },
  ],
  "/brandschutzordnung-koeln": [
    {
      question: "Was sind Teil A, B und C der Brandschutzordnung?",
      answer:
        "Teil A (Aushang) für alle, Teil B mit Verhaltensregeln für Nutzer, Teil C mit Aufgaben für Führungskräfte – nach DIN 14096, angepasst an Ihr Objekt.",
    },
    {
      question: "Wie oft muss die Ordnung fortgeschrieben werden?",
      answer:
        "Bei baulichen, organisatorischen oder nutzungsbezogenen Änderungen. Wir aktualisieren Inhalte und Aushänge.",
    },
    {
      question: "Können Sie Flucht- und Rettungspläne mit erstellen?",
      answer:
        "Ja, Pläne und Ordnung greifen ineinander – wir erstellen beides aus einer Objektbegehung.",
    },
  ],
  "/leistungen": [
    {
      question: "Welche Brandschutz-Leistungen bieten Sie in Köln an?",
      answer:
        "Konzepte und Stellungnahmen, Brandschutzordnungen, Evakuierungskonzepte, Feuerwehr- und Fluchtpläne, Brandschutzhelfer-Ausbildung sowie Beratung und externe Brandschutzbeauftragten-Unterstützung.",
    },
    {
      question: "Arbeiten Sie nur in Köln?",
      answer:
        "Schwerpunkt Köln und Umgebung; für größere Projekte auch darüber hinaus nach Absprache.",
    },
    {
      question: "Wie erhalte ich ein Angebot?",
      answer:
        "Kurz Ihr Objekt und Anliegen schildern – wir melden uns mit Einschätzung und nächsten Schritten zur Erstberatung.",
    },
  ],
};
