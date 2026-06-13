import fs from "fs";
const p = "content/ratgeber-articles-batch2.ts";
const lines = fs.readFileSync(p, "utf8").split("\n");
const idx = lines.findIndex((l) => l.includes('slug: "technische-betriebsgebaeude-brandschutz-nrw"'));
const hinweis = lines.findIndex(
  (l, i) => i > idx && l.trim() === 'id: "hinweis",' && lines[i + 1]?.includes("Grenzen"),
);
if (hinweis < 0) throw new Error("hinweis not found");
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
          "Gebäudeklasse 1 bedeutet nicht wenig Brandschutz. Sonderbau-Tatbestand (technische Betriebsgebäude, Stoffe/Energie) kann hohe Anforderungen an Trennung, Löschwasser und Dokumentation auslösen.",
        ],
      },`.split("\n");
if (lines[hinweis - 2]?.includes('id: "praxis"')) {
  console.log("already patched");
} else {
  lines.splice(hinweis, 0, ...block);
  fs.writeFileSync(p, lines.join("\n"));
  console.log("patched at", hinweis);
}
