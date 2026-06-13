import fs from "fs";

const p = "content/ratgeber-articles-batch2.ts";
let t = fs.readFileSync(p, "utf8");

const faqInsert = `      {
        question: "Was ist mit Feststellanlagen (Haltemagneten)?",
        answer:
          "Nur zulässig, wenn Hersteller und DIBt/Zulassung es für genau diese Tür erlauben – nicht dauerhaft deaktiviert. Im Brandfall muss schließen.",
      },`;

if (!t.includes("Feststellanlagen (Haltemagneten)")) {
  const start = t.indexOf('slug: "feuerschutztueren-bestand-ertuechtigung-koeln"');
  const end = t.indexOf('slug: "brandschutz-abnahme-nach-umbau-koeln"', start);
  const block = t.slice(start, end);
  const faqEnd = block.lastIndexOf("    ],");
  if (faqEnd < 0) throw new Error("feuerschutz faq end missing");
  const absEnd = start + faqEnd;
  t = t.slice(0, absEnd) + ",\n" + faqInsert + "\n" + t.slice(absEnd);
  console.log("feuerschutz faq added");
}

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
  console.log("tech sections added");
}

// lagerhalle: Praxis in excerpt for audit + one FAQ
if (!t.includes("Praxisfall Gewerbegebiet")) {
  t = t.replace(
    'excerpt:\n      "Gewerbehalle → Büro: Sonderbau, § 33 Rettungswege, Löschwasser – aus einem Konzept im Gewerbegebiet."',
    'excerpt:\n      "Gewerbehalle → Büro: Sonderbau, § 33 Rettungswege, Löschwasser – Praxisfall Gewerbegebiet NRW."',
  );
}

const extraFaqs = [
  {
    slug: "lagerhalle-buero-umnutzung-koeln",
    faq: `      {
        question: "Wann brauche ich Entrauchung in der Halle?",
        answer:
          "Bei langen Fluchtwegen oder großen offenen Geschossen kann RWA/Entrauchung im Konzept nötig sein – Einzelfall nach § 33 und Nutzerzahl.",
      },`,
  },
  {
    slug: "sprinkler-rueckbau-bma-nutzungsaenderung-koeln",
    faq: `      {
        question: "Brauche ich eine neue Baugenehmigung?",
        answer:
          "Stilllegung Sprinkler und BMA-Änderung sind bauliche/technische Änderungen – Fortschreibung und oft Genehmigung oder Anzeige.",
      },`,
  },
  {
    slug: "kraftstoff-lagerung-halle-garage-brandschutz",
    faq: `      {
        question: "Darf ich Kanister im Technikraum lagern?",
        answer:
          "Lose Lagerung unterliegt TRGS 510 – ab 200 l Diesel gelten Zusatzmaßnahmen; nicht mit Fahrzeugtank verwechseln.",
      },`,
  },
  {
    slug: "abschottungen-durchbrueche-baustelle-koeln",
    faq: `      {
        question: "Gilt MLAR auch im Bestand?",
        answer:
          "Ja – Leitungsführung nur im erforderlichen Umfang; jede nachträgliche Durchführung braucht Ü-Abschottung.",
      },`,
  },
  {
    slug: "loeschwasser-hydranten-gewerbe-koeln",
    faq: `      {
        question: "Reicht ein Sprinkler für Löschwasser?",
        answer:
          "Nein pauschal – interne Anlage und Feuerwehr-Grundschutz sind getrennt im Konzept nachzuweisen.",
      },`,
  },
  {
    slug: "feuerwehrplan-fluchtplaene-pflicht-koeln",
    faq: `      {
        question: "Muss ASR A2.3 zum Konzept passen?",
        answer:
          "Ja – Widersprüche zwischen genehmigten Rettungswegen und Aushangplänen sind Mängel bei Schau und Abnahme.",
      },`,
  },
  {
    slug: "bauantrag-brandschutz-unterlagen-koeln",
    faq: `      {
        question: "Was ist eine Betriebsbeschreibung?",
        answer:
          "Nutzung, Personen, Gefahrstoffe, Öffnungszeiten – Grundlage für Sonderbau-Einordnung und Konzept.",
      },`,
  },
];

for (const { slug, faq } of extraFaqs) {
  if (t.includes(slug) && !t.includes(faq.slice(20, 60))) {
    const s = t.indexOf(`slug: "${slug}"`);
    const next = t.indexOf("\n  },\n  {", s);
    const block = t.slice(s, next);
    const fe = block.lastIndexOf("    ],");
    if (fe > 0) {
      const abs = s + fe;
      t = t.slice(0, abs) + ",\n" + faq + "\n" + t.slice(abs);
      console.log("faq added:", slug);
    }
  }
}

fs.writeFileSync(p, t);
console.log("patch complete");
