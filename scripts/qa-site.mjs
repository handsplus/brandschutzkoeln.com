/**
 * Site-wide QA: internal links, slugs, landing FAQs, leistungen anchors.
 * Run: node scripts/qa-site.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  listRatgeberContentFiles,
  loadAllRatgeberArticles,
  loadClusteredSlugs,
} from "./lib/ratgeber-sources.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const STATIC_ROUTES = new Set([
  "/",
  "/leistungen",
  "/ratgeber",
  "/brandschutz-koeln",
  "/ueber-uns",
  "/kontakt",
  "/impressum",
  "/brandschutzkonzept-koeln",
  "/brandschutzordnung-koeln",
  "/brandschutzhelfer-ausbildung-koeln",
  "/brandschutzbeauftragter-koeln",
  "/brandschutzberatung-koeln",
]);

function extractSlugsFromFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const slugs = [];
  for (const m of text.matchAll(/slug:\s*["']([^"']+)["']/g)) slugs.push(m[1]);
  return slugs;
}

function extractHrefsFromFiles(dir, ext = ".tsx") {
  const hrefs = [];
  function walk(d) {
    for (const name of fs.readdirSync(d)) {
      const p = path.join(d, name);
      const st = fs.statSync(p);
      if (st.isDirectory() && name !== "node_modules") walk(p);
      else if (name.endsWith(ext) || name.endsWith(".ts")) {
        const text = fs.readFileSync(p, "utf8");
        for (const m of text.matchAll(/href=["'{](\/[^"'`#}?[^"'`#]*)/g)) hrefs.push({ href: m[1], file: path.relative(root, p) });
        for (const m of text.matchAll(/href:\s*["'](\/[^"']+)["']/g)) hrefs.push({ href: m[1], file: path.relative(root, p) });
      }
    }
  }
  walk(dir);
  return hrefs;
}

function extractLeistungIds() {
  const text = fs.readFileSync(path.join(root, "content/leistungen.ts"), "utf8");
  return [...text.matchAll(/id:\s*["']([^"']+)["']/g)].map((m) => m[1]);
}

function extractLandingFaqKeys() {
  const text = fs.readFileSync(path.join(root, "content/landing-faqs.ts"), "utf8");
  return [...text.matchAll(/"(\/[^"]+)":\s*\[/g)].map((m) => m[1]);
}

const contentDir = path.join(root, "content");
const { articles, duplicates } = loadAllRatgeberArticles(contentDir);
const ratgeberFiles = listRatgeberContentFiles(contentDir);
const slugs = articles.map((a) => a.slug);
const slugSet = new Set(slugs);
const dupSlugs = slugs.filter((s, i) => slugs.indexOf(s) !== i);

const ratgeberRoutes = new Set(slugs.map((s) => `/ratgeber/${s}`));
const leistungIds = extractLeistungIds();
const landingKeys = extractLandingFaqKeys();

const contentHrefs = extractHrefsFromFiles(path.join(root, "content"));
const appHrefs = extractHrefsFromFiles(path.join(root, "app"));
const componentHrefs = extractHrefsFromFiles(path.join(root, "components"));
const libHrefs = extractHrefsFromFiles(path.join(root, "lib"));
const allHrefs = [...contentHrefs, ...appHrefs, ...componentHrefs, ...libHrefs];

const broken = [];
const warnings = [];

for (const { href, file } of allHrefs) {
  const [pathname, hash] = href.split("#");
  if (pathname.startsWith("http") || pathname.startsWith("mailto:") || pathname.startsWith("tel:")) continue;

  if (pathname.startsWith("/ratgeber/")) {
    if (!ratgeberRoutes.has(pathname)) broken.push({ href, file, reason: "unknown ratgeber slug" });
    continue;
  }

  if (pathname === "/leistungen" && hash) {
    if (!leistungIds.includes(hash)) broken.push({ href, file, reason: `unknown leistungen anchor #${hash}` });
    continue;
  }

  if (!STATIC_ROUTES.has(pathname)) {
    broken.push({ href, file, reason: "unknown static route" });
  }
}

// Landing pages should have FAQ keys
const landingPages = [
  "/brandschutzberatung-koeln",
  "/brandschutzhelfer-ausbildung-koeln",
  "/brandschutzbeauftragter-koeln",
  "/brandschutzkonzept-koeln",
  "/brandschutzordnung-koeln",
  "/leistungen",
];
for (const p of landingPages) {
  if (!landingKeys.includes(p)) warnings.push(`LANDING_FAQS missing key: ${p}`);
}

// Forbidden terms in public content (not docs/)
const forbidden = [
  { pattern: /Musterbauordnung|MBAO\b/gi, label: "MBO/MBAO" },
  { pattern: /ISO\s*23601|DIN\s*ISO\s*23601/gi, label: "ISO 23601" },
];
for (const rel of ["content/leistungen.ts", "content/landing-faqs.ts"]) {
  const text = fs.readFileSync(path.join(root, rel), "utf8");
  for (const { pattern, label } of forbidden) {
    if (pattern.test(text)) warnings.push(`${rel}: contains ${label}`);
    pattern.lastIndex = 0;
  }
}

// Cluster coverage
const clusteredSlugs = loadClusteredSlugs(path.join(root, "content/ratgeber-clusters.ts"));
const unclustered = [...slugSet].filter((s) => !clusteredSlugs.has(s));
if (unclustered.length) {
  warnings.push(`Ratgeber ohne Cluster: ${unclustered.join(", ")}`);
}

// relatedLinks in ratgeber files
for (const file of ratgeberFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const m of text.matchAll(/href:\s*"(\/ratgeber\/[^"]+)"/g)) {
    if (!ratgeberRoutes.has(m[1])) {
      broken.push({ href: m[1], file: path.relative(root, file), reason: "relatedLink unknown slug" });
    }
  }
}

// Article count
console.log("=== QA brandschutzkoeln.com ===\n");
console.log(`Ratgeber articles: ${slugSet.size} (${ratgeberFiles.length} Quelldateien)`);
if (duplicates.length) {
  warnings.push(
    `Duplicate slugs: ${duplicates.map((d) => `${d.slug} (${d.fileA}/${d.fileB})`).join(", ")}`,
  );
}

if (dupSlugs.length) {
  console.log("DUPLICATE SLUGS:", [...new Set(dupSlugs)]);
} else {
  console.log("Duplicate slugs: none");
}

console.log(`Leistungen: ${leistungIds.length}`);
console.log(`Landing FAQ keys: ${landingKeys.join(", ")}`);

if (broken.length) {
  console.log(`\nBROKEN LINKS (${broken.length}):`);
  for (const b of broken.slice(0, 50)) console.log(`  ${b.href} in ${b.file} – ${b.reason}`);
  if (broken.length > 50) console.log(`  ... and ${broken.length -  50} more`);
} else {
  console.log("\nBroken internal links: none");
}

if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}):`);
  for (const w of warnings) console.log(`  - ${w}`);
} else {
  console.log("\nWarnings: none");
}

process.exit(broken.length > 0 ? 1 : warnings.length > 0 ? 0 : 0);
