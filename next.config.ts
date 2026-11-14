import type { NextConfig } from "next";

/**
 * Kanonische Produktions-URL (muss mit Vercel übereinstimmen: Apex = Production,
 * www per Vercel 308 → Apex. Keine Next-Redirects für brandschutzkoeln.com / www.)
 */
const canonicalBase = "https://brandschutzkoeln.com";

/**
 * Alte Ratgeber-Slugs → aktuelle Ziele (301).
 * Quellen: scripts/rename-2025-slugs.mjs + entfernte Gericht-SEO-Stubs (Aug 2026).
 */
const ratgeberSlugRedirects: { source: string; destination: string }[] = [
  // Bereits bestehend
  {
    source: "/ratgeber/sicherheitsbeleuchtung-rettungswege-bauo-nrw",
    destination: "/ratgeber/sicherheitsbeleuchtung-wann-pflicht-sbauvo-nrw",
  },

  // 2025-Slug-Vereinheitlichung (ohne Redirect → echte 404er in GSC)
  {
    source: "/ratgeber/sonderbau-brandschutzanlagen-pruefung-maengel",
    destination: "/ratgeber/sonderbau-anlagen-pruefung-maengel-nrw",
  },
  {
    source: "/ratgeber/versammlungsstaetten-brandschutz-betrieb",
    destination: "/ratgeber/versammlungsstaetten-betrieb-sbauvo-nrw",
  },
  {
    source: "/ratgeber/feuerschutzabschluesse-bestand-maengel",
    destination: "/ratgeber/feuerschutzabschluesse-bestand-nrw",
  },
  {
    source: "/ratgeber/pflegeeinrichtung-brandschutz-nrw-sonderbau",
    destination: "/ratgeber/pflegeeinrichtung-sonderbau-nrw",
  },
  {
    source: "/ratgeber/mittelgrossgaragen-sbauvo-nrw-brandschutz",
    destination: "/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw",
  },
  {
    source: "/ratgeber/hochhaeuser-sbauvo-nrw-brandschutz",
    destination: "/ratgeber/hochhaus-brandschutz-sbauvo-nrw",
  },
  {
    source: "/ratgeber/brandschutzkonzept-baupruefvo-pflichtinhalte",
    destination: "/ratgeber/brandschutzkonzept-baupruefvo-nrw",
  },
  {
    source: "/ratgeber/verkaufsstaetten-brandabschnitt-rettungswege",
    destination: "/ratgeber/verkaufsstaetten-rettungswege-sbauvo-nrw",
  },
  {
    source: "/ratgeber/sonderbau-bestand-bestehende-gebaeude-sbauvo",
    destination: "/ratgeber/sonderbau-bestand-gebaeude-sbauvo-nrw",
  },
  {
    source: "/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo",
    destination: "/ratgeber/bma-brandfallsteuerung-aufzug-sbauvo-nrw",
  },
  {
    source: "/ratgeber/loeschwasser-rueckhalteanlagen-konzept",
    destination: "/ratgeber/loeschwasser-rueckhalt-konzept-nrw",
  },
  {
    source: "/ratgeber/geeg-uvo-nrw-anlagentechnik-brandschutz",
    destination: "/ratgeber/geeg-uvo-anlagentechnik-brandschutz-nrw",
  },
  {
    source: "/ratgeber/fluktuationshaus-grossraumbuero-evakuierung",
    destination: "/ratgeber/fluktuationshaus-evakuierung-nrw",
  },
  {
    source: "/ratgeber/handlungsempfehlung-gebaeudeklassen-grenzfaelle",
    destination: "/ratgeber/gebaeudeklassen-grenzfaelle-nrw",
  },
  {
    source: "/ratgeber/brandsicherheitswache-grossveranstaltung-sbauvo",
    destination: "/ratgeber/brandsicherheitswache-veranstaltung-sbauvo-nrw",
  },
  {
    source: "/ratgeber/ingenieurmethodischer-brandschutznachweis-din-18230",
    destination: "/ratgeber/brandschutznachweis-din-18230-nrw",
  },
  {
    source: "/ratgeber/brandschutz-dokumentation-betrieb-nachweisarchiv",
    destination: "/ratgeber/brandschutz-dokumentation-betrieb-nrw",
  },
  {
    source: "/ratgeber/hochhaus-rauchableitung-entrauchung-sbauvo",
    destination: "/ratgeber/hochhaus-entrauchung-sbauvo-nrw",
  },
  {
    source: "/ratgeber/betriebliche-brandschutzuebung-pflichten-bsb",
    destination: "/ratgeber/brandschutzuebung-betrieb-nrw",
  },
  {
    source: "/ratgeber/wassergefaehrdende-stoffe-lager-brandschutz-schnittstelle",
    destination: "/ratgeber/wassergefaehrdende-stoffe-lager-lau-nrw",
  },
  {
    source: "/ratgeber/bauprodukte-ce-ue-zeichen-brandschutz-nrw",
    destination: "/ratgeber/bauprodukte-ce-kennzeichnung-nrw",
  },
  {
    source: "/ratgeber/schulen-brandschutz-schulbaurichtlinie-nrw",
    destination: "/ratgeber/schulen-schulbaurichtlinie-nrw",
  },
  {
    source: "/ratgeber/industriebau-indbaur-nrw-lagerhalle",
    destination: "/ratgeber/industriebau-lagerhalle-indbaur-nrw",
  },

  // Entfernte kurze Gericht-SEO-Stubs (Aug 2026) → thematisch nächste Live-Artikel
  {
    source: "/ratgeber/brandwand-fenster-abweichung-nachbarschutz-bauo-nrw",
    destination: "/ratgeber/brandwand-glasbaustein-fenster-bauo-nrw",
  },
  {
    source: "/ratgeber/kommunaler-brandschutz-bhkg-nrw-planvorhaben",
    destination: "/ratgeber/bhkg-hilfsfristen-gemeinde-klagebefugnis-nrw",
  },
  {
    source: "/ratgeber/brandschutz-planfeststellung-nachtrag-verfahren",
    destination: "/ratgeber/brandschutzkonzept-bauo-sbauvo-nrw",
  },
  {
    source: "/ratgeber/sachverstaendigenbescheinigung-abweichung-brandschutz-nrw",
    destination: "/ratgeber/abweichungen-paragraph-69-erlass-bauo-nrw",
  },
  {
    source: "/ratgeber/nutzungsaenderung-ohne-brandschutzkonzept-risiken-nrw",
    destination: "/ratgeber/nutzungsaenderung-brandschutz-bauo-nrw",
  },
  {
    source: "/ratgeber/treppenraum-entrauchung-nachweis-bauantrag-nrw",
    destination: "/ratgeber/entrauchung-rauchableitung-bauo-sbauvo-nrw",
  },
  {
    source: "/ratgeber/nachbarschutz-brandschutz-bauaufsicht-nrw",
    destination: "/ratgeber/nachbarschutz-brandwand-abweichung-welcher-nachbar-nrw",
  },
  {
    source: "/ratgeber/vertrauensschutz-altgenehmigung-brandschutz-nrw",
    destination: "/ratgeber/duldung-verwirkung-brandschutz-bauaufsicht-nrw",
  },
  {
    source: "/ratgeber/brandschutz-unterlagen-zwischenbescheid-nachreichen-nrw",
    destination: "/ratgeber/brandschutzkonzept-baupruefvo-nrw",
  },
  {
    source: "/ratgeber/feuerwehrstellungnahme-baugenehmigung-schnittstelle-nrw",
    destination: "/ratgeber/feuerwehrplaene-wann-pflicht-sbauvo-nrw",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  async redirects() {
    return [
      ...ratgeberSlugRedirects.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),

      // Kurze Alias-Pfade → kanonische SEO-Landings (sonst Soft-/Hard-404)
      {
        source: "/brandschutzhelfer",
        destination: "/brandschutzhelfer-ausbildung-koeln",
        permanent: true,
      },
      {
        source: "/brandschutzhelfer-ausbildung",
        destination: "/brandschutzhelfer-ausbildung-koeln",
        permanent: true,
      },
      {
        source: "/brandschutzkonzept",
        destination: "/brandschutzkonzept-koeln",
        permanent: true,
      },
      {
        source: "/brandschutzordnung",
        destination: "/brandschutzordnung-koeln",
        permanent: true,
      },
      {
        source: "/brandschutzbeauftragter",
        destination: "/brandschutzbeauftragter-koeln",
        permanent: true,
      },
      {
        source: "/feuerwehrplaene",
        destination: "/feuerwehrplaene-fluchtplaene-koeln",
        permanent: true,
      },
      {
        source: "/fluchtplaene",
        destination: "/feuerwehrplaene-fluchtplaene-koeln",
        permanent: true,
      },
      {
        source: "/feuerwehrplaene-fluchtplaene",
        destination: "/feuerwehrplaene-fluchtplaene-koeln",
        permanent: true,
      },
      {
        source: "/ratgeber/index",
        destination: "/ratgeber",
        permanent: true,
      },
      // P1-5: alte Garagen-URL
      {
        source: "/ratgeber/garagen-stellplaetze-brandschutz",
        destination: "/ratgeber/mittelgrossgaragen-brandschutz-sbauvo-nrw",
        permanent: true,
      },

      // Nur alternative / alte Domains → kanonische Apex-URL.
      // NICHT brandschutzkoeln.com / www / Punycode / .vercel.app hier umleiten – sonst Schleife mit Vercel.

      // kölnbrandschutz.com (Root + www)
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--klnbrandschutz-vpb.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--klnbrandschutz-vpb.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--klnbrandschutz-8eb.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--klnbrandschutz-8eb.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--k1nbrandschutz-vpb.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--k1nbrandschutz-vpb.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "kölnbrandschutz.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kölnbrandschutz.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--kinbrandschutz-vpb.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--kinbrandschutz-vpb.com" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "koelnbrandschutz.online" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.koelnbrandschutz.online" }],
        destination: `${canonicalBase}/:path*`,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
