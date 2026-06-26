import path from "path";
import { fileURLToPath } from "url";
import { loadAllRatgeberArticles } from "./lib/ratgeber-sources.mjs";
import { auditRatgeberBlock } from "./lib/ratgeber-audit-rules.mjs";
import { RATGEBER_NACHBESSERN_UP21 } from "./data/ratgeber-nachbessern-up21.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const { articles } = loadAllRatgeberArticles(path.join(root, "content"));
const slugs = RATGEBER_NACHBESSERN_UP21.map((x) => x.slug);
for (const s of slugs) {
  const a = articles.find((x) => x.slug === s);
  const r = auditRatgeberBlock(a.block);
  console.log(r.status, r.words + "W", "~" + r.tier, r.gaps.join(",") || "ok", s);
}
