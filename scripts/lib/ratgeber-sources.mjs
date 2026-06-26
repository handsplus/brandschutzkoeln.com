/**
 * Alle Ratgeber-Quelldateien und Artikel-Slugs (dedupliziert).
 */
import fs from "fs";
import path from "path";

export function listRatgeberContentFiles(contentDir) {
  return fs
    .readdirSync(contentDir)
    .filter(
      (f) =>
        f === "ratgeber.ts" ||
        (f.startsWith("ratgeber-articles-") && f.endsWith(".ts")),
    )
    .map((f) => path.join(contentDir, f))
    .sort();
}

export function extractArticlesFromFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const re = /slug:\s*"([^"]+)"/g;
  const hits = [...text.matchAll(re)];
  return hits.map((m, i) => {
    const from = m.index;
    const to = i + 1 < hits.length ? hits[i + 1].index : text.length;
    return {
      slug: m[1],
      block: text.slice(from, to),
      file: filePath,
    };
  });
}

export function loadAllRatgeberArticles(contentDir) {
  const files = listRatgeberContentFiles(contentDir);
  const bySlug = new Map();
  const duplicates = [];

  for (const file of files) {
    for (const article of extractArticlesFromFile(file)) {
      if (bySlug.has(article.slug)) {
        duplicates.push({
          slug: article.slug,
          fileA: path.basename(bySlug.get(article.slug).file),
          fileB: path.basename(file),
        });
      } else {
        bySlug.set(article.slug, article);
      }
    }
  }

  return {
    files,
    articles: [...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug)),
    duplicates,
  };
}

export function loadClusteredSlugs(clustersPath) {
  const text = fs.readFileSync(clustersPath, "utf8");
  const slugs = new Set();
  for (const m of text.matchAll(/slugs:\s*\[([\s\S]*?)\]/g)) {
    for (const s of m[1].matchAll(/"([a-z0-9-]+)"/g)) slugs.add(s[1]);
  }
  return slugs;
}
