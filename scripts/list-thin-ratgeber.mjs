import path from "path";
import { fileURLToPath } from "url";
import { loadAllRatgeberArticles } from "./lib/ratgeber-sources.mjs";
import { auditRatgeberBlock } from "./lib/ratgeber-audit-rules.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const { articles } = loadAllRatgeberArticles(path.join(root, "content"));
const thin = articles
  .map((a) => ({
    slug: a.slug,
    file: path.basename(a.file),
    words: auditRatgeberBlock(a.block).words,
    status: auditRatgeberBlock(a.block).status,
    hasVert: a.block.includes('id: "vertiefung"'),
    hasPraxisBetrieb: a.block.includes('id: "praxis-betrieb"'),
  }))
  .filter((a) => a.words < 450)
  .sort((a, b) => a.words - b.words);

console.log(JSON.stringify(thin, null, 2));
