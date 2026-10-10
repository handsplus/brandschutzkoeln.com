import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { auditRatgeberBlock } from "./lib/ratgeber-audit-rules.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const text = fs.readFileSync(
  path.join(root, "content", "ratgeber-articles-nobel-upgrade-2025.ts"),
  "utf8",
);
const re =
  /\r?\n  \{\r?\n    slug: "([^"]+)"[\s\S]*?(?=\r?\n  \{\r?\n    slug: |\r?\n\];)/g;
let m;
while ((m = re.exec(text))) {
  const block = m[0];
  const a = auditRatgeberBlock(block);
  console.log(
    `${m[1]}\t${a.status}\t${a.words}W\t${a.criteriaPass}/9\t${a.gaps.join(",") || "ok"}`,
  );
}
console.log(
  "wired in 2025.ts:",
  fs
    .readFileSync(path.join(root, "content", "ratgeber-articles-2025.ts"), "utf8")
    .includes("RATGEBER_ARTICLES_NOBEL_UPGRADE_2025"),
);
