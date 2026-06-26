/**
 * Nachbesserung der 21 UP-Ratgeber (Praxis-Abschnitt, FAQ, Markdown-Fix).
 * Usage: node scripts/apply-ratgeber-nachbessern.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadAllRatgeberArticles } from "./lib/ratgeber-sources.mjs";
import { RATGEBER_NACHBESSERN_UP21 } from "./data/ratgeber-nachbessern-up21.mjs";
import { RATGEBER_NACHBESSERN_ROUND2 } from "./data/ratgeber-nachbessern-round2.mjs";
import { RATGEBER_NACHBESSERN_THIN41 } from "./data/ratgeber-nachbessern-thin41.mjs";

const ALL_NACHBESSERN = [
  ...RATGEBER_NACHBESSERN_UP21,
  ...RATGEBER_NACHBESSERN_ROUND2,
  ...RATGEBER_NACHBESSERN_THIN41,
];

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "content");

function escapeString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatSection(section) {
  const paras = section.paragraphs
    .map((p) => `          "${escapeString(p)}",`)
    .join("\n");
  return `      {
        id: "${section.id}",
        title: "${escapeString(section.title)}",
        paragraphs: [
${paras}
        ],
      },`;
}

function insertPraxisSection(block, section) {
  const sectionId = section.id;
  if (block.includes(`id: "${sectionId}"`)) return block;
  const sectionText = formatSection(section);
  const re = /(\r?\n)(      \{\r?\n        id: "hinweis",)/;
  if (!re.test(block)) return null;
  return block.replace(re, `$1${sectionText}$1$2`);
}

function appendFaq(block, faqItem) {
  if (block.includes(faqItem.question.slice(0, 30))) return block;
  const entry = `      {
        question: "${escapeString(faqItem.question)}",
        answer:
          "${escapeString(faqItem.answer)}",
      },`;
  const re = /(faq: \[[\s\S]*?)(\r?\n    \],)/;
  const m = block.match(re);
  if (!m) return null;
  return block.replace(re, `$1\n${entry}$2`);
}

function stripMarkdownBold(block) {
  return block.replace(/\*\*/g, "");
}

let changed = 0;
let skipped = 0;

for (const [relFile, fileEdits] of Object.entries(
  groupByFile(ALL_NACHBESSERN),
)) {
  const filePath = path.join(contentDir, relFile.replace(/\\/g, "/"));
  let text = fs.readFileSync(filePath, "utf8");

  for (const edit of fileEdits) {
    const slugEsc = edit.slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const blockRe = new RegExp(
      `(slug: "${slugEsc}"[\\s\\S]*?)(\\r?\\n  \\},(?:\\r?\\n  \\{|\\r?\\n\\]))`,
    );
    const bm = text.match(blockRe);
    if (!bm) {
      console.warn("SKIP (slug not found):", edit.slug, relFile);
      skipped++;
      continue;
    }

    let block = bm[1];
    const original = block;
    if (edit.stripMarkdown) block = stripMarkdownBold(block);
    if (edit.praxisSection) {
      const next = insertPraxisSection(block, edit.praxisSection);
      if (!next) {
        console.warn("SKIP (no hinweis):", edit.slug);
        skipped++;
        continue;
      }
      block = next;
    }
    if (edit.extraSection) {
      const next = insertPraxisSection(block, edit.extraSection);
      if (!next) {
        console.warn("SKIP (extraSection):", edit.slug);
        skipped++;
        continue;
      }
      block = next;
    }
    if (edit.faq) {
      const next = appendFaq(block, edit.faq);
      if (!next) {
        console.warn("SKIP (no faq block):", edit.slug);
        skipped++;
        continue;
      }
      block = next;
    }

    if (block === original) {
      console.log("SKIP (already applied):", edit.slug);
      skipped++;
      continue;
    }

    text = text.replace(bm[0], block + (bm[2] ?? ""));
    changed++;
    console.log("OK:", edit.slug);
  }

  fs.writeFileSync(filePath, text, "utf8");
}

console.log(`\nGeändert: ${changed}, übersprungen: ${skipped}`);

function groupByFile(edits) {
  const byFile = {};
  for (const edit of edits) {
    if (!byFile[edit.file]) byFile[edit.file] = [];
    byFile[edit.file].push(edit);
  }
  return byFile;
}
