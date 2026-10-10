import { siteUrl } from "@/lib/seo";
import { SITE, CONTACT, LEGAL } from "@/lib/constants";

/**
 * Strukturierte Daten (JSON-LD): Organisation, WebSite, ProfessionalService + LocalBusiness.
 * LLMO/SEO: klare Entitäten (Firma ↔ Ort ↔ Leistung), konsistente @id-Verknüpfung.
 */
export function JsonLd() {
  /** Barcelona-Allee 12, 51103 Köln (Kalk/Deutz) – nicht Dom-Zentrum */
  const geo = {
    "@type": "GeoCoordinates",
    latitude: 50.9358,
    longitude: 7.0055,
  };
  const areaServed = [
    { "@type": "City", name: "Köln" },
    { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
    { "@type": "Country", name: "Deutschland" },
  ];
  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: LEGAL.addressStreet,
    postalCode: LEGAL.addressZip,
    addressLocality: LEGAL.addressCity,
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  };
  const logoUrl = `${siteUrl}/logo.svg`;
  const imageUrl = `${siteUrl}/opengraph-image`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: SITE.name,
    alternateName: [SITE.shortName, "Brandschutz Köln", "H&S+ Brandschutz Köln"],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    image: imageUrl,
    description: `${SITE.tagline} Professioneller Brandschutz für Unternehmen, Immobilien und Projekte in ${SITE.region} – ${SITE.expertRolePlural}.`,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    address: postalAddress,
    areaServed,
    founder: {
      "@type": "Person",
      name: LEGAL.owner,
      jobTitle: SITE.expertRole,
    },
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
      "BauO NRW",
    ],
    sameAs: [SITE.groupWebsite, SITE.googleReviewsUrl],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Brandschutz Köln | H&S+",
    url: siteUrl,
    description: `Professioneller Brandschutz für Unternehmen, Immobilien und Projekte in ${SITE.region}.`,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "de-DE",
  };

  /** ProfessionalService + LocalBusiness: Entität für KI und lokale Suche */
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteUrl}/#local-business`,
    name: `${SITE.name} – Brandschutz Köln`,
    alternateName: ["H&S+ Brandschutz Köln", "Brandschutz Köln"],
    description:
      "Brandschutzberatung, Brandschutzkonzepte, Brandschutzordnungen, Feuerwehrpläne, Brandschutzhelfer-Ausbildung und fachliche Einschätzungen durch Brandschutzsachverständige in Köln und NRW.",
    url: siteUrl,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    image: imageUrl,
    logo: logoUrl,
    address: postalAddress,
    geo,
    areaServed,
    availableLanguage: ["de-DE"],
    priceRange: "$$",
    parentOrganization: { "@id": `${siteUrl}/#organization` },
    founder: {
      "@type": "Person",
      name: LEGAL.owner,
      jobTitle: SITE.expertRole,
    },
    knowsAbout: [
      "Brandschutz",
      "Brandschutzkonzept",
      "Brandschutzordnung",
      "BauO NRW",
      "Sonderbauten",
    ],
    serviceType: [
      "Brandschutzsachverständiger",
      "Brandschutzberatung",
      "Brandschutzkonzept",
      "Brandschutzordnung",
      "Feuerwehrplan",
      "Brandschutzhelfer Ausbildung",
      "Brandschutzgutachten",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brandschutz-Leistungen Köln",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brandschutzkonzept & Stellungnahme",
            url: `${siteUrl}/brandschutzkonzept-koeln`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brandschutzordnung DIN 14096",
            url: `${siteUrl}/brandschutzordnung-koeln`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brandschutzberatung",
            url: `${siteUrl}/brandschutzberatung-koeln`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brandschutzhelfer-Ausbildung",
            url: `${siteUrl}/brandschutzhelfer-ausbildung-koeln`,
          },
        },
      ],
    },
    sameAs: [SITE.groupWebsite, SITE.googleReviewsUrl],
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
