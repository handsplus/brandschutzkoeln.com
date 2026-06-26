/**
 * Ratgeber-Qualitätsaudit für alle Module (nicht nur Legacy-Batch).
 * Usage: node scripts/audit-ratgeber.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  loadAllRatgeberArticles,
  loadClusteredSlugs,
} from "./lib/ratgeber-sources.mjs";
import { auditRatgeberBlock } from "./lib/ratgeber-audit-rules.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "content");

const { files, articles, duplicates } = loadAllRatgeberArticles(contentDir);
const clusteredSlugs = loadClusteredSlugs(path.join(contentDir, "ratgeber-clusters.ts"));

const results = articles.map(({ slug, block, file }) => {
  const audit = auditRatgeberBlock(block);
  const inCluster = clusteredSlugs.has(slug);
  if (!inCluster) audit.gaps.push("no-cluster");
  const relFile = path.relative(root, file);
  return {
    slug,
    file: relFile,
    inCluster,
    ...audit,
  };
});

const byFile = new Map();
for (const r of results) {
  if (!byFile.has(r.file)) byFile.set(r.file, []);
  byFile.get(r.file).push(r);
}

const ok = results.filter((r) => r.status === "OK");
const needsWork = results.filter((r) => r.status === "UP");
const borderline = results.filter((r) => r.status === "9?");
const unclustered = results.filter((r) => !r.inCluster);
const thin = results.filter((r) => r.words < 450);
const noPraxis = results.filter((r) => !r.hasPraxis);

const wordsSorted = results.map((r) => r.words).sort((a, b) => a - b);
const medianWords = wordsSorted[Math.floor(wordsSorted.length / 2)];

const lines = [];
lines.push(`=== Ratgeber-Audit brandschutzkoeln.com ===`);
lines.push(`Datum: ${new Date().toISOString().slice(0, 10)}`);
lines.push(`Quelldateien: ${files.length}`);
lines.push(`Artikel gesamt: ${results.length}`);
lines.push(`Median Wörter: ${medianWords}`);
lines.push(`OK (≥9/10 Kriterien, Tier≥9): ${ok.length}`);
lines.push(`Grenzbereich (9?): ${borderline.length}`);
lines.push(`Nachbessern (UP): ${needsWork.length}`);
lines.push(`Unter 450 Wörter: ${thin.length}`);
lines.push(`Ohne Praxisbezug: ${noPraxis.length}`);
lines.push(`Ohne Cluster: ${unclustered.length}`);
if (duplicates.length) {
  lines.push(`DUPLIKAT-Slugs: ${duplicates.map((d) => d.slug).join(", ")}`);
}
lines.push("");

for (const [file, items] of [...byFile.entries()].sort()) {
  lines.push(`--- ${file} (${items.length}) ---`);
  for (const r of items.sort((a, b) => a.slug.localeCompare(b.slug))) {
    lines.push(
      `${r.status}\t~${r.tier}\t${r.words}W\t${r.criteriaPass}/9\t${r.gaps.join(",") || "ok"}\t${r.slug}`,
    );
  }
  lines.push("");
}

lines.push("=== Priorität: Nachbessern (UP) ===");
for (const r of needsWork.sort((a, b) => a.words - b.words)) {
  lines.push(`${r.words}W\t${r.slug}\t${r.file}\t${r.gaps.join(", ")}`);
}

const report = {
  generatedAt: new Date().toISOString(),
  sourceFiles: files.length,
  articleCount: results.length,
  medianWords,
  summary: {
    ok: ok.length,
    borderline: borderline.length,
    needsWork: needsWork.length,
    thin: thin.length,
    noPraxis: noPraxis.length,
    unclustered: unclustered.length,
    duplicates: duplicates.length,
  },
  duplicates,
  results,
  priority: needsWork.map((r) => ({
    slug: r.slug,
    file: r.file,
    words: r.words,
    tier: r.tier,
    gaps: r.gaps,
  })),
};

const outJson = path.join(root, "scripts/ratgeber-audit.json");
const outTxt = path.join(root, "scripts/ratgeber-audit-output.txt");
fs.writeFileSync(outJson, JSON.stringify(report, null, 2), "utf8");
fs.writeFileSync(outTxt, lines.join("\n"), "utf8");

console.log(lines.slice(0, 20).join("\n"));
console.log(`\n… vollständig in ${path.relative(root, outTxt)}`);
console.log(`JSON: ${path.relative(root, outJson)}`);
