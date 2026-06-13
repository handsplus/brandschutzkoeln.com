import fs from "fs";

const p = "content/ratgeber-articles-batch2.ts";
let lines = fs.readFileSync(p, "utf8").split("\n");

// Trim broken tail after bauantrag Betriebsbeschreibung
const endMarker = '        question: "Was ist eine Betriebsbeschreibung?",';
let endIdx = -1;
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes(endMarker)) {
    endIdx = i;
    break;
  }
}
if (endIdx < 0) throw new Error("betriebsbeschreibung not found");
// find closing of that FAQ (answer block ends with },)
let closeIdx = endIdx;
while (closeIdx < lines.length && !lines[closeIdx].trim().startsWith("},")) {
  closeIdx++;
}
if (closeIdx >= lines.length) throw new Error("faq close not found");
lines = [
  ...lines.slice(0, closeIdx + 1),
  "    ],",
  "  },",
  "];",
  "",
];
let t = lines.join("\n");

function insertFaqBeforeClose(slug, questionSnippet, faqBlock) {
  if (t.includes(questionSnippet)) return false;
  const slugLine = `    slug: "${slug}",`;
  const s = t.indexOf(slugLine);
  if (s < 0) throw new Error("slug " + slug);
  const faqPos = t.indexOf("    faq: [", s);
  const articleEnd = t.indexOf("\n  },\n  {", faqPos);
  const slice = t.slice(faqPos, articleEnd);
  const close = slice.lastIndexOf("    ],");
  if (close < 0) throw new Error("faq close " + slug);
  const abs = faqPos + close;
  t = t.slice(0, abs) + ",\n" + faqBlock + "\n" + t.slice(abs);
  return true;
}

const inserts = [
  [
    "kraftstoff-lagerung-halle-garage-brandschutz",
    "Darf ich Kanister im Technikraum lagern?",
    `      {
        question: "Darf ich Kanister im Technikraum lagern?",
        answer:
          "Lose Lagerung unterliegt TRGS 510 – ab 200 l Diesel gelten Zusatzmaßnahmen; nicht mit Fahrzeugtank verwechseln.",
      }`,
  ],
  [
    "loeschwasser-hydranten-gewerbe-koeln",
    "Reicht ein Sprinkler für Löschwasser?",
    `      {
        question: "Reicht ein Sprinkler für Löschwasser?",
        answer:
          "Nein pauschal – interne Anlage und Feuerwehr-Grundschutz sind getrennt im Konzept nachzuweisen.",
      }`,
  ],
  [
    "feuerwehrplan-fluchtplaene-pflicht-koeln",
    "Muss ASR A2.3 zum Konzept passen?",
    `      {
        question: "Muss ASR A2.3 zum Konzept passen?",
        answer:
          "Ja – Widersprüche zwischen genehmigten Rettungswegen und Aushangplänen sind Mängel bei Schau und Abnahme.",
      }`,
  ],
];

for (const [slug, q, block] of inserts) {
  if (insertFaqBeforeClose(slug, q, block)) console.log("faq", slug);
}

// technische praxis
if (!t.includes('slug: "technische-betriebsgebaeude-brandschutz-nrw"')) throw new Error("tech");
const techIdx = t.indexOf('slug: "technische-betriebsgebaeude-brandschutz-nrw"');
const hinweisIdx = t.indexOf('id: "hinweis",\n        title: "Grenzen",\n        paragraphs: [\n          "IndBauR', techIdx);
if (hinweisIdx > 0 && !t.slice(techIdx, hinweisIdx).includes('id: "praxis"')) {
  const block = `      {
        id: "praxis",
        title: "Praxis: Campus mit NEA und Trafostation",
        paragraphs: [
          "In einem Campus-Projekt (NRW): eingeschossiges Technikgebäude GK 1, Sonderbau wegen NEA und Diesel-Vorratsbehältern. Konzept: Feuerwehrzufahrt, Hydranten-Nachweis im Umfeld, innere F90-Trennung Aggregat/Schaltraum, natürliche Lüftung, Feuerlöscher ASR A2.2, Feuerwehrplan für Wartungspersonal.",
          "Diesel-Lagerung über TRGS und Kraftstoff-Ratgeber abgestimmt – nicht pauschal auf andere Standorte übertragbar.",
        ],
      },
      {
        id: "abgrenzung-gk",
        title: "GK 1 vs. Sonderbau",
        paragraphs: [
          "Gebäudeklasse 1 bedeutet nicht wenig Brandschutz. Sonderbau-Tatbestand (technische Betriebsgebäude, Stoffe/Energie) kann hohe Anforderungen an Trennung, Löschwasser und Dokumentation auslösen – unabhängig von der geringen Geschosszahl.",
        ],
      },
      `;
  t = t.slice(0, hinweisIdx) + block + t.slice(hinweisIdx);
  console.log("tech praxis");
}

// lagerhalle excerpt praxis
t = t.replace(
  "Gewerbehalle → Büro: Sonderbau, § 33 Rettungswege, Löschwasser – aus einem Konzept im Gewerbegebiet.",
  "Gewerbehalle → Büro: Sonderbau, § 33 Rettungswege, Löschwasser – Praxisfall Gewerbegebiet NRW.",
);

fs.writeFileSync(p, t);
console.log("done");
