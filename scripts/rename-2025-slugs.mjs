/**
 * Einmaliges Skript: 2025-Ratgeber-Slugs auf 5/5-Schema umbenennen.
 * Reihenfolge: längere Slugs zuerst (keine Teilersetzungen).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** @type {Record<string, string>} */
const SLUG_MAP = {
  "sonderbau-brandschutzanlagen-pruefung-maengel": "sonderbau-anlagen-pruefung-maengel-nrw",
  "versammlungsstaetten-brandschutz-betrieb": "versammlungsstaetten-betrieb-sbauvo-nrw",
  "feuerschutzabschluesse-bestand-maengel": "feuerschutzabschluesse-bestand-nrw",
  "pflegeeinrichtung-brandschutz-nrw-sonderbau": "pflegeeinrichtung-sonderbau-nrw",
  "mittelgrossgaragen-sbauvo-nrw-brandschutz": "mittelgrossgaragen-brandschutz-sbauvo-nrw",
  "hochhaeuser-sbauvo-nrw-brandschutz": "hochhaus-brandschutz-sbauvo-nrw",
  "brandschutzkonzept-baupruefvo-pflichtinhalte": "brandschutzkonzept-baupruefvo-nrw",
  "verkaufsstaetten-brandabschnitt-rettungswege": "verkaufsstaetten-rettungswege-sbauvo-nrw",
  "sonderbau-bestand-bestehende-gebaeude-sbauvo": "sonderbau-bestand-gebaeude-sbauvo-nrw",
  "bma-brandfallsteuerung-aufzug-sbauvo": "bma-brandfallsteuerung-aufzug-sbauvo-nrw",
  "loeschwasser-rueckhalteanlagen-konzept": "loeschwasser-rueckhalt-konzept-nrw",
  "geeg-uvo-nrw-anlagentechnik-brandschutz": "geeg-uvo-anlagentechnik-brandschutz-nrw",
  "fluktuationshaus-grossraumbuero-evakuierung": "fluktuationshaus-evakuierung-nrw",
  "handlungsempfehlung-gebaeudeklassen-grenzfaelle": "gebaeudeklassen-grenzfaelle-nrw",
  "brandsicherheitswache-grossveranstaltung-sbauvo": "brandsicherheitswache-veranstaltung-sbauvo-nrw",
  "ingenieurmethodischer-brandschutznachweis-din-18230": "brandschutznachweis-din-18230-nrw",
  "brandschutz-dokumentation-betrieb-nachweisarchiv": "brandschutz-dokumentation-betrieb-nrw",
  "hochhaus-rauchableitung-entrauchung-sbauvo": "hochhaus-entrauchung-sbauvo-nrw",
  "betriebliche-brandschutzuebung-pflichten-bsb": "brandschutzuebung-betrieb-nrw",
  "wassergefaehrdende-stoffe-lager-brandschutz-schnittstelle":
    "wassergefaehrdende-stoffe-lager-lau-nrw",
  "bauprodukte-ce-ue-zeichen-brandschutz-nrw": "bauprodukte-ce-kennzeichnung-nrw",
  "schulen-brandschutz-schulbaurichtlinie-nrw": "schulen-schulbaurichtlinie-nrw",
  "industriebau-indbaur-nrw-lagerhalle": "industriebau-lagerhalle-indbaur-nrw",
};

const SKIP_DIRS = new Set(["node_modules", ".git", ".next", "dist"]);

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else if (/\.(ts|tsx|md|mdc|mjs|json)$/.test(name)) files.push(full);
  }
  return files;
}

const entries = Object.entries(SLUG_MAP).sort((a, b) => b[0].length - a[0].length);
let changedFiles = 0;
let totalReplacements = 0;

for (const file of walk(root)) {
  if (file.endsWith("rename-2025-slugs.mjs")) continue;
  let text = fs.readFileSync(file, "utf8");
  let fileChanged = false;
  for (const [oldSlug, newSlug] of entries) {
    const before = text;
    text = text.split(oldSlug).join(newSlug);
    if (text !== before) {
      const count = (before.split(oldSlug).length - 1);
      totalReplacements += count;
      fileChanged = true;
    }
  }
  if (fileChanged) {
    fs.writeFileSync(file, text, "utf8");
    changedFiles++;
    console.log("updated:", path.relative(root, file));
  }
}

console.log(`\nDone: ${changedFiles} files, ${totalReplacements} replacements, ${entries.length} slug pairs.`);

// Verify no old slugs remain
let leftovers = [];
for (const [oldSlug] of entries) {
  for (const file of walk(root)) {
    if (file.endsWith("rename-2025-slugs.mjs")) continue;
    const text = fs.readFileSync(file, "utf8");
    if (text.includes(oldSlug)) leftovers.push(`${oldSlug} in ${path.relative(root, file)}`);
  }
}
if (leftovers.length) {
  console.error("\nLEFTOVER old slugs:");
  leftovers.forEach((l) => console.error(" -", l));
  process.exit(1);
}
