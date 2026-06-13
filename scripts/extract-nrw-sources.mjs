import fs from "fs";
import path from "path";

const BASE =
  "C:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/11_Brandschutz-NRW";

const files = {
  IndBauR:
    "99_Hinweise und Bücher/IndBauR-NRW-Erlaeuterung-Online-Version_2016_04.html",
  BFM2:
    "99_Hinweise und Bücher/20IR_MHKBG_BFM-2_Baulicher_Brandschutz_2021-01-11.html",
  TRGS800: "99_Hinweise und Bücher/TRGS-800 Brandschutzmaßnahmen.html",
  PruefVO:
    "01_NRW_Landesrecht_Gesetze_VOs/05_PruefVO-NRW-technische-Anlagen-Sonderbauten.html",
  FeuVO:
    "01_NRW_Landesrecht_Gesetze_VOs/07_FeuVO-NRW-Feuerungsverordnung.html",
  Handlungsempfehlung:
    "99_Hinweise und Bücher/BauO NRW Handlungsempfehlung_dienstbesprechung_bauaufsichtsbehoerden-2018.html",
  SBauV: "99_Hinweise und Bücher/SBauV NRW vollständig.html",
  MVVTB:
    "02_NRW_Richtlinien_Verwaltungsvorschriften/20_MVV-TB-2025-1-DIBt-Referenz.html",
  FBFHB024: "99_Hinweise und Bücher/FBFHB-024.html",
  DGUV205001: "99_Hinweise und Bücher/205-001.html",
};

function extractLines(filePath) {
  let html = fs.readFileSync(filePath, "utf8");
  html = html.replace(/<style[\s\S]*?<\/style>/gi, "");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  html = bodyMatch ? bodyMatch[1] : html;
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<[^>]+>/g, "\n");
  html = html
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

  return html
    .split(/\n+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 25 && !/^[\d\.\)\(\-\s]+$/.test(s));
}

for (const [key, rel] of Object.entries(files)) {
  const full = path.join(BASE, rel);
  const lines = extractLines(full);
  console.log(`=== ${key} (${lines.length} lines) ===`);
  for (const line of lines.slice(0, 40)) {
    console.log(line.slice(0, 220));
  }
  console.log("");
}
