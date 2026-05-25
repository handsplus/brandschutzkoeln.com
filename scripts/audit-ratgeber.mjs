import fs from "fs";

function extractArticles(file) {
  const t = fs.readFileSync(file, "utf8");
  const start = t.indexOf("export const RATGEBER_ARTICLES");
  const body = start >= 0 ? t.slice(start) : t;
  const re = /slug: "([^"]+)"/g;
  const hits = [...body.matchAll(re)];
  return hits.map((m, i) => {
    const from = m.index;
    const to = i + 1 < hits.length ? hits[i + 1].index : body.length;
    return { slug: m[1], block: body.slice(from, to) };
  });
}

function audit(block) {
  const sections = (block.match(/\n        id: "/g) || []).length;
  const faq = (block.match(/\n        question:/g) || []).length;
  const links = (block.match(/href: "/g) || []).length;
  const hasHinweis = /id: "(hinweis|grenzen)"/.test(block);
  const hasPraxis =
    /praxis|Praxisfall|Praxisbeispiel|Musterfall|anonym|Orientierungswert/i.test(
      block,
    );
  const hasAbgrenzung =
    /abgrenzung|Abgrenzung|vs\.| versus |Unterschied|nicht dasselbe|nicht verwechseln/i.test(
      block,
    );
  const hasNachweis =
    /Konzept|Stellungnahme|Fortschreibung|BSO|§ 9|BauPrüfVO/i.test(block);
  let tier = 10;
  if (sections < 7 || faq < 6) tier = 9;
  if (sections < 6 || faq < 5 || links < 3 || !hasHinweis) tier = 8;
  if (sections < 5 || faq < 4) tier = 7;
  const gaps = [];
  if (sections < 7) gaps.push(`sec<7(${sections})`);
  if (faq < 6) gaps.push(`faq<6(${faq})`);
  if (links < 4) gaps.push(`links<4(${links})`);
  if (!hasHinweis) gaps.push("no-hinweis");
  if (!hasPraxis) gaps.push("no-praxis");
  if (!hasAbgrenzung) gaps.push("weak-abgrenzung");
  return { sections, faq, links, hasHinweis, hasPraxis, hasAbgrenzung, hasNachweis, tier, gaps };
}

const files = [
  "content/ratgeber.ts",
  "content/ratgeber-articles-batch2.ts",
];

for (const file of files) {
  const articles = extractArticles(file);
  console.log(`\n=== ${file} (${articles.length} articles) ===`);
  for (const { slug, block } of articles) {
    const a = audit(block);
    const mark = a.tier >= 9 && a.gaps.length <= 1 ? "OK" : a.tier >= 9 ? "9?" : "UP";
    console.log(
      `${mark}\t~${a.tier}\t${a.gaps.join(",") || "ok"}\t${slug}`,
    );
  }
}
