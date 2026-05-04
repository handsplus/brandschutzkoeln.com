import { siteUrl } from "@/lib/seo";
import { SITE, CONTACT, LEGAL } from "@/lib/constants";

/**
 * Strukturierte Daten (JSON-LD) für Organisation und lokales Geschäft.
 * Wird von Suchmaschinen für Rich Snippets genutzt.
 */
export function JsonLd() {
  const geo = { "@type": "GeoCoordinates", latitude: 50.9375, longitude: 6.9603 };
  const areaServed = [
    { "@type": "City", name: "Köln" },
    { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
    { "@type": "Country", name: "Deutschland" },
  ];

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: SITE.name,
    alternateName: [SITE.shortName, "Brandschutz Köln"],
    url: siteUrl,
    description: `${SITE.tagline} Professioneller Brandschutz für Unternehmen, Immobilien und Projekte in ${SITE.region} – ${SITE.expertRolePlural}.`,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT.email,
      telephone: CONTACT.phoneTel,
      areaServed,
      availableLanguage: ["de-DE"],
    },
    knowsAbout: [
      "Brandschutz",
      "Brandschutzberatung",
      "Brandschutzkonzept",
      "Brandschutzordnung",
      "Feuerwehrplan",
      "Brandschutzhelfer-Ausbildung",
      "Brandschutzgutachten",
    ],
    sameAs: [SITE.groupWebsite, SITE.googleReviewsUrl],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    /** Fokus nur Brandschutz (kein „Arbeitsschutz“ im Seitennamen für Suchmaschinen) */
    name: "Brandschutz Köln | H&S+",
    url: siteUrl,
    description: `Professioneller Brandschutz für Unternehmen, Immobilien und Projekte in ${SITE.region}.`,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "de-DE",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/kontakt?anfrage={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#local-business`,
    isPartOf: { "@id": `${siteUrl}/#organization` },
    name: `${SITE.name} – Brandschutz Köln`,
    description:
      "Brandschutzberatung, Brandschutzkonzepte, Brandschutzordnungen, Feuerwehrpläne, Brandschutzhelfer-Ausbildung und fachliche Einschätzungen durch Brandschutzsachverständige in Köln.",
    url: siteUrl,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: LEGAL.addressStreet,
      postalCode: LEGAL.addressZip,
      addressLocality: LEGAL.addressCity,
      addressCountry: "DE",
    },
    geo,
    areaServed,
    availableLanguage: ["de-DE"],
    priceRange: "$$",
    serviceType: [
      "Brandschutzsachverständiger",
      "Brandschutzberatung",
      "Brandschutzkonzept",
      "Brandschutzordnung",
      "Feuerwehrplan",
      "Brandschutzhelfer Ausbildung",
      "Brandschutzgutachten",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}

