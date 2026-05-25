/**
 * Remove STN abbreviation; use Stellungnahme / brandschutztechnische Stellungnahme.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const replacements = [
  ["Brandschutztechnische Stellungnahme (STN)", "Brandschutztechnische Stellungnahme"],
  ["brandschutztechnische STN", "brandschutztechnische Stellungnahme"],
  ["Konzept/STN/Fortschreibung", "Konzept, Stellungnahme oder Fortschreibung"],
  ["Konzept/STN", "Konzept oder Stellungnahme"],
  ["STN/Konzept", "Stellungnahme oder Konzept"],
  ["STN/BSK-Logik", "Stellungnahme- oder Konzept-Logik"],
  ["STN/BSK", "Stellungnahme oder Brandschutzkonzept"],
  ["STN/Pläne", "Stellungnahme und Pläne"],
  ["Pläne/STN", "Pläne und Stellungnahme"],
  ["Brandschutzkonzept / STN", "Brandschutzkonzept und Stellungnahme"],
  ["Brandschutzkonzept oder STN", "Brandschutzkonzept oder Stellungnahme"],
  ["Konzept oder STN?", "Konzept oder Stellungnahme?"],
  ["STN vs. Konzept", "Stellungnahme oder Konzept"],
  ["STN vs. BSK", "Stellungnahme oder Brandschutzkonzept"],
  ["STN vs", "Stellungnahme oder"],
  ["(Konzept/STN)", "(Konzept oder Stellungnahme)"],
  ["(Konzept, STN)", "(Konzept, Stellungnahme)"],
  ["Brandschutzkonzept, STN", "Brandschutzkonzept, Stellungnahme"],
  ["Vollnachweis, STN", "Vollnachweis, Stellungnahme"],
  ["Konzept, STN", "Konzept, Stellungnahme"],
  ["STN, Konzept", "Stellungnahme, Konzept"],
  ["Pläne, STN", "Pläne, Stellungnahme"],
  ["Dokumentation in STN", "Dokumentation in der Stellungnahme"],
  ["Ergebnis in STN", "Ergebnis in der Stellungnahme"],
  ["in STN und", "in der Stellungnahme und"],
  ["in STN ", "in der Stellungnahme "],
  ["in STN.", "in der Stellungnahme."],
  ["in STN,", "in der Stellungnahme,"],
  ["mit STN", "mit Stellungnahme"],
  ["Die STN deckt", "Die Stellungnahme deckt"],
  ["Die STN", "Die Stellungnahme"],
  ["eine STN", "eine brandschutztechnische Stellungnahme"],
  ["kurze STN", "kurze Stellungnahme"],
  ["interne STN", "interne Stellungnahme"],
  ["reichte eine STN", "reichte eine Stellungnahme"],
  ["oft STN", "oft Stellungnahme"],
  ["ggf. STN", "ggf. Stellungnahme"],
  ["STN beantwortet", "Stellungnahme beantwortet"],
  ["STN sagt", "Stellungnahme sagt"],
  ["Nachreichung STN", "Nachreichung Stellungnahme"],
  ["Architekt und STN", "Architekt und Stellungnahme"],
  ["Nutzungsänderung mit STN", "Nutzungsänderung mit Stellungnahme"],
  ["STN und", "Stellungnahme und"],
  ["STN,", "Stellungnahme,"],
  ["STN.", "Stellungnahme."],
  ["STN –", "Stellungnahme –"],
  ["STN —", "Stellungnahme —"],
  [" STN ", " Stellungnahme "],
  [" STN,", " Stellungnahme,"],
  [" STN.", " Stellungnahme."],
  [" STN)", " Stellungnahme)"],
  [" STN/", " Stellungnahme/"],
  ["/STN", "/Stellungnahme"],
  ["STN ", "Stellungnahme "],
  ["STN.", "Stellungnahme."],
  ["STN,", "Stellungnahme,"],
  ["STN)", "Stellungnahme)"],
  ["STN/", "Stellungnahme/"],
  ["STN-", "Stellungnahme-"],
  ["BSK/STN", "BSK/Stellungnahmen"],
  ["STN-HTML", "Stellungnahmen-HTML"],
  ["Konzept / STN", "Konzept / Stellungnahme"],
  ["Konzept/STN", "Konzept/Stellungnahme"],
];

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walk(p, files);
    } else if (/\.(ts|tsx|md)$/.test(name)) files.push(p);
  }
  return files;
}

const dirs = [
  path.join(root, "app"),
  path.join(root, "content"),
  path.join(root, "docs", "RATGEBER-QUALITAET.md"),
].flatMap((d) => (fs.existsSync(d) && fs.statSync(d).isFile() ? [d] : walk(d)));

let changed = 0;
for (const file of dirs) {
  let text = fs.readFileSync(file, "utf8");
  const orig = text;
  for (const [from, to] of replacements) {
    text = text.split(from).join(to);
  }
  if (text !== orig) {
    fs.writeFileSync(file, text, "utf8");
    changed++;
    console.log("updated:", path.relative(root, file));
  }
}

// Second pass: bare STN word boundaries
const stnRe = /\bSTN\b/g;
for (const file of dirs) {
  let text = fs.readFileSync(file, "utf8");
  if (!stnRe.test(text)) continue;
  stnRe.lastIndex = 0;
  const newText = text.replace(/\bSTN\b/g, "Stellungnahme");
  if (newText !== text) {
    fs.writeFileSync(file, newText, "utf8");
    console.log("STN pass:", path.relative(root, file));
    changed++;
  }
}

const remaining = [];
for (const file of dirs) {
  const text = fs.readFileSync(file, "utf8");
  if (/\bSTN\b/.test(text)) remaining.push(path.relative(root, file));
}
console.log(`\nFiles changed: ${changed}`);
if (remaining.length) {
  console.log("Still contains STN:", remaining);
  process.exit(1);
}
