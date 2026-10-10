/**
 * Nobel-Ausarbeitungen HTML – Inhalt 1:1 aus ratgeber-articles-nobel-upgrade-2025.ts.
 * Maßstab: Nobel-Niveau (nicht ältere Ausarbeitungen im Ordner).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import vm from "vm";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcPath = path.join(root, "content", "ratgeber-articles-nobel-upgrade-2025.ts");
const outDir =
  "C:\\Users\\akork\\OneDrive\\H&S+\\4. Gesetze-Vorschriften\\11_Brandschutz-NRW\\Ausarbeitungen";

const FILE_MAP = {
  "sonderbau-anlagen-pruefung-maengel-nrw":
    "TUEV_Baurechtsreport_2025_Sonderbau_Anlagen_Maengel_NRW.html",
  "batteriespeicher-lithium-ionen-brandgefahren":
    "Batteriespeicher_Lithium_Ionen_Brandgefahren_NRW.html",
  "feuerloescher-entsorgung-pfas-abfall":
    "Feuerloescher_Entsorgung_PFAS_Abfall_NRW.html",
};

function loadArticles() {
  let src = fs.readFileSync(srcPath, "utf8");
  src = src.replace(/^[\s\S]*?export const RATGEBER_ARTICLES_NOBEL_UPGRADE_2025[^=]*=\s*/, "");
  src = src.replace(/;\s*$/, "");
  src = src.replace(/import[\s\S]*?;\s*/g, "");
  const sandbox = { result: null };
  vm.runInNewContext(`result = (${src})`, sandbox);
  return sandbox.result;
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(text) {
  return esc(text)
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      (_, label, href) => {
        const url = href.startsWith("http") ? href : `https://brandschutzkoeln.com${href}`;
        return `<a href="${esc(url)}">${label}</a>`;
      },
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function render(article) {
  const fileName = FILE_MAP[article.slug];
  const toc = article.sections
    .map((s, i) => `<li><a href="#${esc(s.id)}">${i + 1}. ${esc(s.title)}</a></li>`)
    .join("\n");

  const body = article.sections
    .map((s) => {
      const paras = s.paragraphs.map((p) => `<p>${inline(p)}</p>`).join("\n");
      const list =
        s.list?.length > 0
          ? `<ul>\n${s.list.map((li) => `<li>${inline(li)}</li>`).join("\n")}\n</ul>`
          : "";
      let table = "";
      if (s.table) {
        table = `${
          s.table.caption
            ? `<p class="table-caption">${esc(s.table.caption)}</p>`
            : ""
        }
<table class="data">
<thead><tr>${s.table.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
<tbody>
${s.table.rows
  .map((row) => `<tr>${row.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
  .join("\n")}
</tbody>
</table>`;
      }
      return `<section id="${esc(s.id)}">
  <h2>${esc(s.title)}</h2>
  ${paras}
  ${list}
  ${table}
</section>`;
    })
    .join("\n\n");

  const faq = article.faq
    .map(
      (f) => `<div class="faq-item">
  <h3>${esc(f.question)}</h3>
  <p>${inline(f.answer)}</p>
</div>`,
    )
    .join("\n");

  const related = (article.relatedLinks || [])
    .map(
      (l) =>
        `<li><a href="https://brandschutzkoeln.com${esc(l.href)}">${esc(l.label)}</a></li>`,
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(article.metaTitle || article.title)}</title>
  <meta name="description" content="${esc(article.metaDescription)}">
  <meta name="keywords" content="${esc(article.keywords.join(", "))}">
  <meta name="author" content="H&amp;S+ – Health and Safety +">
  <meta name="geo.region" content="DE-NW">
  <meta name="geo.placename" content="Köln">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="https://brandschutzkoeln.com/ratgeber/${esc(article.slug)}">
  <style>
    :root {
      --hs: #68BCA0;
      --ink: #0f172a;
      --muted: #475569;
      --line: #e2e8f0;
      --paper: #ffffff;
      --wash: #f8fafc;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0 auto;
      max-width: 48rem;
      padding: 2rem 1.25rem 4rem;
      font-family: "Segoe UI", Calibri, system-ui, sans-serif;
      line-height: 1.78;
      color: var(--ink);
      background: var(--wash);
    }
    header {
      background: #000;
      color: #fff;
      padding: 2rem 1.75rem;
      border-radius: 0;
      border-bottom: 6px solid var(--hs);
      margin: 0 0 1.5rem;
    }
    header h1 {
      margin: 0 0 0.75rem;
      font-size: 1.7rem;
      line-height: 1.3;
      font-weight: 700;
    }
    header .lead { margin: 0; font-size: 1.05rem; color: #e2e8f0; max-width: 40rem; }
    header .meta { margin: 1rem 0 0; font-size: 0.86rem; color: #94a3b8; }
    header .badge {
      display: inline-block;
      margin-bottom: 0.85rem;
      padding: 0.25rem 0.65rem;
      background: var(--hs);
      color: #000;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .note {
      background: var(--paper);
      border-left: 4px solid var(--hs);
      padding: 1rem 1.15rem;
      margin: 0 0 1.25rem;
      font-size: 0.95rem;
      color: var(--muted);
    }
    .tldr {
      background: var(--paper);
      border: 1px solid var(--line);
      padding: 1.15rem 1.25rem;
      margin: 0 0 1.5rem;
    }
    .tldr h2 {
      margin: 0 0 0.5rem;
      font-size: 1.05rem;
      color: var(--ink);
      border: 0;
    }
    nav.toc {
      background: var(--paper);
      border: 1px solid var(--line);
      padding: 1.15rem 1.25rem;
      margin: 0 0 2rem;
    }
    nav.toc h2 { margin: 0 0 0.65rem; font-size: 1.05rem; border: 0; }
    nav.toc ol { margin: 0; padding-left: 1.2rem; }
    nav.toc li { margin: 0.3rem 0; }
    nav.toc a { color: #0f766e; text-decoration: none; }
    nav.toc a:hover { text-decoration: underline; }
    section { margin: 0 0 2.5rem; }
    h2 {
      margin: 0 0 0.85rem;
      padding-bottom: 0.4rem;
      border-bottom: 2px solid var(--hs);
      font-size: 1.28rem;
      line-height: 1.35;
      color: var(--ink);
    }
    p { margin: 0.8rem 0; }
    ul { margin: 0.8rem 0; padding-left: 1.3rem; }
    li { margin: 0.35rem 0; }
    a { color: #0f766e; }
    .table-caption { font-weight: 600; margin: 1rem 0 0.4rem; font-size: 0.95rem; }
    table.data {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
      background: var(--paper);
      margin: 0.5rem 0 1rem;
    }
    table.data th, table.data td {
      border: 1px solid var(--line);
      padding: 0.65rem 0.7rem;
      vertical-align: top;
      text-align: left;
    }
    table.data th { background: #ecfdf5; color: var(--ink); }
    .faq-item {
      background: var(--paper);
      border: 1px solid var(--line);
      padding: 1rem 1.15rem;
      margin: 0.75rem 0;
    }
    .faq-item h3 { margin: 0 0 0.45rem; font-size: 1.02rem; }
    .related {
      background: var(--paper);
      border: 1px solid var(--line);
      padding: 1.15rem 1.25rem;
      margin: 0 0 1.5rem;
    }
    .related h2 { border: 0; margin: 0 0 0.65rem; font-size: 1.05rem; padding: 0; }
    .cta {
      background: #000;
      color: #fff;
      padding: 1.5rem 1.5rem;
      border-top: 6px solid var(--hs);
      margin: 2rem 0 1rem;
    }
    .cta h2 { color: #fff; border: 0; margin: 0 0 0.55rem; font-size: 1.15rem; padding: 0; }
    .cta p { margin: 0.4rem 0; color: #e2e8f0; }
    .cta code { background: rgba(255,255,255,.12); padding: .12rem .4rem; }
    footer {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid var(--line);
      font-size: 0.85rem;
      color: #64748b;
    }
    @media (max-width: 640px) {
      body { padding: 1rem 0.85rem 3rem; }
      header { padding: 1.4rem 1.1rem; }
      header h1 { font-size: 1.35rem; }
    }
  </style>
</head>
<body>

<header>
  <div class="badge">Nobel-Niveau · H&amp;S+</div>
  <h1>${esc(article.title)}</h1>
  <p class="lead">${esc(article.excerpt)}</p>
  <p class="meta">Ausarbeitung 10.10.2026 · Maßstab: Nobel-Ratgeber (nicht ältere Ordner-HTML) · brandschutzkoeln.com · Köln / NRW</p>
</header>

<div class="note">
  <strong>Qualitätsanspruch:</strong> Vollständiger Nobel-Text aus
  <code>ratgeber-articles-nobel-upgrade-2025.ts</code> – inhaltlich nicht an ältere Ausarbeitungen
  im Ordner angeglichen. SEO/GEO, Lesbarkeit und Sachverständigensprache wie im freigegebenen Ratgeber.
</div>

<div class="tldr">
  <h2>In Kürze</h2>
  <p>${esc(article.excerpt)}</p>
</div>

<nav class="toc" aria-label="Inhaltsverzeichnis">
  <h2>Inhalt</h2>
  <ol>
${toc}
    <li><a href="#faq">Häufige Fragen</a></li>
    <li><a href="#weiterlesen">Weiterlesen</a></li>
  </ol>
</nav>

${body}

<section id="faq">
  <h2>Häufige Fragen</h2>
  ${faq}
</section>

<section id="weiterlesen" class="related">
  <h2>Weiterlesen und Leistungen</h2>
  <ul>
${related}
  </ul>
</section>

<div class="cta">
  <h2>Ratgeber auf brandschutzkoeln.com</h2>
  <p>Slug: <code>/ratgeber/${esc(article.slug)}</code></p>
  <p>Stand der Fachquelle: 2025 · Ausarbeitung: 10.10.2026 · noch nicht zwingend deployed</p>
  <p>H&amp;S+ · Barcelona-Allee 12, 51103 Köln · brandschutzkoeln.com</p>
</div>

<footer>
  H&amp;S+ · Nobel-Ausarbeitung ·
  <code>4. Gesetze-Vorschriften\\11_Brandschutz-NRW\\Ausarbeitungen\\${esc(fileName)}</code> ·
  Inhalt = Nobel-Ratgeber · Design Marke #68BCA0.
</footer>
</body>
</html>
`;
}

const articles = loadArticles();
if (!Array.isArray(articles) || articles.length !== 3) {
  console.error("Expected 3 articles, got", articles?.length);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
for (const article of articles) {
  const fileName = FILE_MAP[article.slug];
  if (!fileName) {
    console.error("No filename for", article.slug);
    process.exit(1);
  }
  const out = path.join(outDir, fileName);
  fs.writeFileSync(out, render(article), "utf8");
  const words = JSON.stringify(article).split(/\s+/).length;
  console.log("OK", fileName, "sections=", article.sections.length, "faq=", article.faq.length, "~words=", words);
}
