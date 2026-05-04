import { CONTACT, SITE } from "@/lib/constants";
import { siteUrl } from "@/lib/seo";

type PageGeoJsonLdProps = {
  name: string;
  path: string;
  description: string;
  pageType?: "WebPage" | "ContactPage" | "AboutPage";
  serviceName?: string;
  serviceType?: string[];
};

export function PageGeoJsonLd({
  name,
  path,
  description,
  pageType = "WebPage",
  serviceName,
  serviceType = [],
}: PageGeoJsonLdProps) {
  const url = `${siteUrl}${path}`;
  const areaServed = [
    { "@type": "City", name: "Köln" },
    { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
    { "@type": "Country", name: "Deutschland" },
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    primaryImageOfPage: `${siteUrl}/opengraph-image`,
    publisher: { "@id": `${siteUrl}/#organization` },
    keywords: ["Brandschutz Köln", "Brandschutzsachverständiger", ...serviceType].join(", "),
  };

  const serviceSchema =
    serviceName &&
    serviceType.length > 0 && {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: serviceName,
      description,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed,
      serviceType,
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${siteUrl}/kontakt`,
      },
    };

  const contactSchema =
    pageType === "ContactPage"
      ? {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${url}#contact`,
          url,
          name,
          description,
          mainEntity: {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: SITE.name,
            email: CONTACT.email,
            telephone: CONTACT.phoneTel,
          },
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      {serviceSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      ) : null}
      {contactSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      ) : null}
    </>
  );
}
