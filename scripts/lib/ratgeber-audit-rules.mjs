/**
 * Heuristische Prüfung gegen docs/RATGEBER-QUALITAET.md (10-Punkte-Standard).
 */

const FORBIDDEN_TERMS = [
  { pattern: /\bRauchwand\b/i, label: "Rauchwand" },
  { pattern: /Musterbauordnung|\bMBAO\b/i, label: "MBO/MBAO" },
  { pattern: /52[,.]5\s*m/i, label: "52,5-m-Sprinkler (MBO)" },
  { pattern: /ISO\s*23601|DIN\s*ISO\s*23601/i, label: "ISO 23601" },
];

export function countWords(block) {
  const excerpt =
    block.match(/excerpt:\s*\n\s*"((?:\\.|[^"\\])*)"/)?.[1]?.replace(/\\"/g, '"') ??
    "";
  const sections =
    block.match(/sections:\s*\[([\s\S]*?)\]\s*,\s*\n\s*relatedLinks:/)?.[1] ?? "";
  const faq =
    block.match(/faq:\s*\[([\s\S]*?)\]\s*,\s*\n\s*\},/)?.[1] ??
    block.match(/faq:\s*\[([\s\S]*?)\]\s*,\s*\n\s*\]/)?.[1] ??
    "";

  const combined = [excerpt, sections, faq].join(" ");
  const strings = [...combined.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((m) =>
    m[1].replace(/\\"/g, '"').replace(/\\n/g, " "),
  );

  const text = strings
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*/g, "");

  return text.split(/\s+/).filter(Boolean).length;
}

export function countKoelnInBody(block) {
  const sectionsMatch = block.match(/sections:\s*\[([\s\S]*?)\]\s*,\s*\n\s*relatedLinks:/);
  const faqMatch = block.match(/faq:\s*\[([\s\S]*?)\]\s*,?\s*\n/);
  const body = [sectionsMatch?.[1] ?? "", faqMatch?.[1] ?? ""].join(" ");
  return (body.match(/\bKöln\b/g) || []).length;
}

export function countRelatedLinks(block) {
  const rl = block.match(/relatedLinks:\s*\[([\s\S]*?)\]\s*,\s*\n\s*faq:/);
  if (!rl) return (block.match(/href:\s*"\/ratgeber\//g) || []).length;
  return (rl[1].match(/href:/g) || []).length;
}

export function auditRatgeberBlock(block) {
  const sections = (block.match(/\n        id: "/g) || []).length;
  const faq = (block.match(/\n        question:/g) || []).length;
  const links = countRelatedLinks(block);
  const words = countWords(block);
  const koelnCount = countKoelnInBody(block);

  const hasHinweis = /id: "(hinweis|grenzen)"/.test(block);
  const hasPraxis =
    /praxis|Praxisfall|Praxisbeispiel|Musterfall|anonym|Orientierungswert|Behördenforderung|Genehmigungspraxis/i.test(
      block,
    );
  const hasAbgrenzung =
    /abgrenzung|Abgrenzung|vs\.| versus |Unterschied|nicht dasselbe|nicht verwechseln|Abgrenzung zu/i.test(
      block,
    );
  const hasNachweis =
    /Konzept|Stellungnahme|Fortschreibung|BSO|§ 9|BauPrüfVO|Nachweis/i.test(block);
  const hasMarkdownArtifacts = /\*\*[^*]+\*\*|``/.test(block);
  const forbiddenHits = FORBIDDEN_TERMS.filter(({ pattern }) => pattern.test(block)).map(
    (t) => t.label,
  );

  const criteria = {
    tiefe:
      (sections >= 6 && words >= 350) ||
      (faq >= 5 && words >= 300) ||
      words >= 450,
    praxis: hasPraxis,
    abgrenzung: hasAbgrenzung,
    nachweis: hasNachweis,
    hinweis: hasHinweis,
    links: links >= 3,
    koeln: koelnCount <= 1,
    technik: !hasMarkdownArtifacts,
    begriffe: forbiddenHits.length === 0,
  };

  const criteriaPass = Object.values(criteria).filter(Boolean).length;

  let tier = 10;
  if (sections < 7 || faq < 6) tier = 9;
  if (sections < 6 || faq < 5 || links < 3 || !hasHinweis) tier = 8;
  if (sections < 5 || faq < 4 || words < 300) tier = 7;

  const gaps = [];
  if (sections < 7) gaps.push(`sec<7(${sections})`);
  if (faq < 6) gaps.push(`faq<6(${faq})`);
  if (links < 4) gaps.push(`links<4(${links})`);
  if (words < 450) gaps.push(`words<450(${words})`);
  if (!hasHinweis) gaps.push("no-hinweis");
  if (!hasPraxis) gaps.push("no-praxis");
  if (!hasAbgrenzung) gaps.push("weak-abgrenzung");
  if (!hasNachweis) gaps.push("weak-nachweis");
  if (koelnCount > 1) gaps.push(`koeln>${1}(${koelnCount})`);
  if (hasMarkdownArtifacts) gaps.push("markdown-artifacts");
  if (forbiddenHits.length) gaps.push(`forbidden:${forbiddenHits.join(",")}`);

  const status =
    criteriaPass >= 8 && tier >= 9 && gaps.length <= 2
      ? "OK"
      : tier >= 9
        ? "9?"
        : "UP";

  return {
    sections,
    faq,
    links,
    words,
    koelnCount,
    hasHinweis,
    hasPraxis,
    hasAbgrenzung,
    hasNachweis,
    hasMarkdownArtifacts,
    forbiddenHits,
    criteria,
    criteriaPass,
    tier,
    gaps,
    status,
  };
}
