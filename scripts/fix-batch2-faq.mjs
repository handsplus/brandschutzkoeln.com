import fs from "fs";

const p = "content/ratgeber-articles-batch2.ts";
let t = fs.readFileSync(p, "utf8");

t = t.replace(/\n,\n      \{\n        question:/g, "\n      {\n        question:");
t = t.replace(/\n      \},\n,\n      \{/g, "\n      },\n      {");

function insertFaq(slug, faq) {
  if (t.includes(faq.slice(30, 80))) return false;
  const start = t.indexOf(`slug: "${slug}"`);
  if (start < 0) throw new Error("slug " + slug);
  const nextSlug = t.indexOf("\n  },\n  {", start + 10);
  const block = t.slice(start, nextSlug);
  const faqStart = block.indexOf("    faq: [");
  if (faqStart < 0) throw new Error("faq " + slug);
  const faqBlock = block.slice(faqStart);
  const fe = faqBlock.lastIndexOf("    ],");
  const abs = start + faqStart + fe;
  t = t.slice(0, abs) + ",\n" + faq + "\n" + t.slice(abs);
  return true;
}

const faqs = {
  "lagerhalle-buero-umnutzung-koeln": `      {
        question: "Wann brauche ich Entrauchung in der Halle?",
        answer:
          "Bei langen Fluchtwegen oder großen offenen Geschossen kann RWA/Entrauchung im Konzept nötig sein – Einzelfall nach § 33 und Nutzerzahl.",
      }`,
  "sprinkler-rueckbau-bma-nutzungsaenderung-koeln": `      {
        question: "Brauche ich eine neue Baugenehmigung?",
        answer:
          "Stilllegung Sprinkler und BMA-Änderung sind bauliche/technische Änderungen – Fortschreibung und oft Genehmigung oder Anzeige.",
      }`,
  "kraftstoff-lagerung-halle-garage-brandschutz": `      {
        question: "Darf ich Kanister im Technikraum lagern?",
        answer:
          "Lose Lagerung unterliegt TRGS 510 – ab 200 l Diesel gelten Zusatzmaßnahmen; nicht mit Fahrzeugtank verwechseln.",
      }`,
  "abschottungen-durchbrueche-baustelle-koeln": `      {
        question: "Gilt MLAR auch im Bestand?",
        answer:
          "Ja – Leitungsführung nur im erforderlichen Umfang; jede nachträgliche Durchführung braucht Ü-Abschottung.",
      }`,
  "loeschwasser-hydranten-gewerbe-koeln": `      {
        question: "Reicht ein Sprinkler für Löschwasser?",
        answer:
          "Nein pauschal – interne Anlage und Feuerwehr-Grundschutz sind getrennt im Konzept nachzuweisen.",
      }`,
  "feuerwehrplan-fluchtplaene-pflicht-koeln": `      {
        question: "Muss ASR A2.3 zum Konzept passen?",
        answer:
          "Ja – Widersprüche zwischen genehmigten Rettungswegen und Aushangplänen sind Mängel bei Schau und Abnahme.",
      }`,
  "praxis-umbau-brandschutz-koeln": `      {
        question: "Wann reicht eine STN statt BSK?",
        answer:
          "Bei klar abgegrenzten kleinen Umbauten ohne neue Großtechnik – Bildgebung mit MR/CT meist vollständiges Konzept.",
      }`,
};

for (const [slug, faq] of Object.entries(faqs)) {
  if (insertFaq(slug, faq)) console.log("inserted", slug);
}

// technische praxis sections
const techMarker = 'slug: "technische-betriebsgebaeude-brandschutz-nrw"';
const techIdx = t.indexOf(techMarker);
const hinweisMarker =
  'id: "hinweis",\n        title: "Grenzen",\n        paragraphs: [\n          "IndBauR kann zusätzliche';
const hIdx = t.indexOf(hinweisMarker, techIdx);
const praxisBlock = `      {
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
if (hIdx > 0 && !t.slice(techIdx, hIdx).includes('id: "praxis"')) {
  t = t.slice(0, hIdx) + praxisBlock + t.slice(hIdx);
  console.log("tech praxis added");
}

fs.writeFileSync(p, t);
console.log("fixed");
