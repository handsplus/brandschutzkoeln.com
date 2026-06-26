import Link from "next/link";
import { SITE, CONTACT, LEGAL } from "@/lib/constants";

export function DatenschutzContent() {
  return (
    <>
      <h2 className="text-2xl font-bold text-stone-900">Datenschutzerklärung</h2>

      <h3 className="mt-6 text-lg font-semibold text-stone-900">1. Datenschutz auf einen Blick</h3>
      <h4 className="mt-4 font-medium text-stone-900">Allgemeine Hinweise</h4>
      <p className="mt-2 text-stone-600">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
        personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
        sind alle Daten, mit denen Sie persönlich identifiziert werden können.
      </p>

      <h4 className="mt-4 font-medium text-stone-900">
        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
      </h4>
      <p className="mt-2 text-stone-600">
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
        Kontaktdaten können Sie dem Abschnitt „Impressum“ entnehmen.
      </p>

      <h4 className="mt-4 font-medium text-stone-900">Wie erfassen wir Ihre Daten?</h4>
      <p className="mt-2 text-stone-600">
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen – z. B. über das
        Kontaktformular. Andere Daten werden automatisch beim Besuch der Website durch unsere
        IT-Systeme erfasst (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
      </p>

      <h4 className="mt-4 font-medium text-stone-900">Wofür nutzen wir Ihre Daten?</h4>
      <p className="mt-2 text-stone-600">
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
        gewährleisten. Daten aus dem Kontaktformular nutzen wir zur Bearbeitung Ihrer Anfrage.
      </p>

      <h4 className="mt-4 font-medium text-stone-900">Welche Rechte haben Sie?</h4>
      <p className="mt-2 text-stone-600">
        Sie haben jederzeit das Recht auf unentgeltliche Auskunft, Berichtigung oder Löschung Ihrer
        gespeicherten personenbezogenen Daten, auf Einschränkung der Verarbeitung, auf
        Datenübertragbarkeit und auf Beschwerde bei einer Aufsichtsbehörde. Erteilte Einwilligungen
        können Sie jederzeit widerrufen.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-stone-900">2. Verantwortliche Stelle</h3>
      <p className="mt-2 text-stone-600">Die verantwortliche Stelle für die Datenverarbeitung ist:</p>
      <p className="mt-2 text-stone-600">
        {SITE.name}
        <br />
        {LEGAL.owner}
        <br />
        {LEGAL.addressStreet}
        <br />
        {LEGAL.addressZip} {LEGAL.addressCity}
        <br />
        Telefon: {CONTACT.phone}
        <br />
        E-Mail: {CONTACT.email}
      </p>

      <h3 className="mt-8 text-lg font-semibold text-stone-900">3. Hosting</h3>
      <p className="mt-2 text-stone-600">
        Beim Aufruf der Website können Zugriffs- und Server-Logdaten (u. a. IP-Adresse, Zeitpunkt,
        aufgerufene URL) beim Hosting-Anbieter <strong>Vercel Inc.</strong> anfallen. Rechtsgrundlage
        ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen:{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-red hover:underline"
        >
          Vercel Datenschutz
        </a>
        .
      </p>

      <h3 className="mt-8 text-lg font-semibold text-stone-900">4. Kontaktformular (Formspree)</h3>
      <p className="mt-2 text-stone-600">
        Über das Kontaktformular übermittelte Daten (Name, E-Mail, Nachricht etc.) werden über{" "}
        <strong>Formspree</strong> (Formspree, Inc., USA) an uns weitergeleitet. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Weitere Informationen:{" "}
        <a
          href="https://formspree.io/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-red hover:underline"
        >
          Formspree Datenschutz
        </a>
        .
      </p>

      <h3 className="mt-8 text-lg font-semibold text-stone-900">5. Speicherdauer</h3>
      <p className="mt-2 text-stone-600">
        Soweit keine speziellere Speicherdauer genannt wurde, verbleiben personenbezogene Daten bei
        uns, bis der Zweck entfällt oder Sie ein berechtigtes Löschersuchen geltend machen, sofern
        keine anderen rechtlich zulässigen Aufbewahrungsgründe entgegenstehen.
      </p>

      <p className="mt-8 text-sm text-stone-500">
        <Link href="/impressum" className="text-brand-red hover:underline">
          Impressum
        </Link>
        {" · "}
        <Link href="/" className="text-brand-red hover:underline">
          ← Zurück zur Startseite
        </Link>
      </p>
    </>
  );
}
