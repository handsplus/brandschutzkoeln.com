import type { NextConfig } from "next";

/**
 * Kanonische Produktions-URL (muss mit Vercel übereinstimmen: Apex = Production,
 * www per Vercel 308 → Apex. Keine Next-Redirects für brandschutzkoeln.com / www.)
 */
const canonicalBase = "https://brandschutzkoeln.com";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  async redirects() {
    return [
      // Nur alternative / alte Domains → kanonische www-URL.
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
