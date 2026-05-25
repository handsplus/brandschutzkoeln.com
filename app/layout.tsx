import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const HOME_TITLE = "Brandschutzkonzept & Brandschutzordnung Köln | H&S+";

const defaultMetadata = createPageMetadata({
  title: HOME_TITLE,
  absoluteTitle: true,
  description:
    "Brandschutzkonzept, Stellungnahme und Brandschutzordnung in Köln und NRW. H&S+ – Erstberatung unverbindlich.",
  ogDescription:
    "Konzepte und Stellungnahmen nach BauO NRW, Brandschutzordnungen nach DIN 14096 – in Köln und NRW.",
  keywords: [
    "Brandschutz Köln",
    "Brandschutzsachverständiger Köln",
    "Brandschutzberatung Köln",
    "Brandschutzkonzept Köln",
  ],
  path: "/",
});

export const metadata: Metadata = {
  ...defaultMetadata,
  alternates: {
    ...defaultMetadata.alternates,
    languages: {
      "de-DE": "https://brandschutzkoeln.com/",
    },
  },
  metadataBase: new URL("https://brandschutzkoeln.com"),
  title: {
    default: HOME_TITLE,
    template: "%s | Brandschutz Köln | H&S+",
  },
  applicationName: SITE.name,
  icons: {
    icon: [
      { url: "/icon.svg?v=4", type: "image/svg+xml" },
      { url: "/icon.svg?v=4", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: [{ url: "/icon.svg?v=4", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg?v=4", type: "image/svg+xml" }],
  },
  keywords: [
    "Brandschutz Köln",
    "Brandschutzsachverständiger Köln",
    "Brandschutz Sachverständiger",
    "Brandschutz Gutachten Köln",
    "Brandschutzkonzept Köln",
    "Brandschutzberatung Köln",
    "Brandschutzhelfer Ausbildung Köln",
    "Feuerwehrplan Köln",
    "Brandschutzordnung",
    "Evakuierungskonzept",
  ],
  authors: [{ name: SITE.name, url: "https://brandschutzkoeln.com" }],
  creator: SITE.name,
  formatDetection: { telephone: false, email: false },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: defaultMetadata.description as string,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Brandschutz Köln | H&S+" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#9B2423", /* RAL 3000 Feuerrot (DIN Brandschutz) */
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={geistSans.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand-red focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Zum Inhalt springen
        </a>
        <JsonLd />
        <Header />
        <main id="main" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
