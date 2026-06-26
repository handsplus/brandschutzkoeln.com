/**
 * Baut Nachbesserungsdaten für Ratgeber unter 450 Wörter.
 * Usage: node scripts/build-thin41-data.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadAllRatgeberArticles } from "./lib/ratgeber-sources.mjs";
import { auditRatgeberBlock } from "./lib/ratgeber-audit-rules.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const CUSTOM = {
  "feuerschutzabschluesse-prueffristen-fstA": {
    stripMarkdown: true,
    paragraphs: [
      "In NRW werden Feststellanlagen und Rauchschutztüren bei Schau und Betriebsbegehung regelmäßig auf gültige Wartungsnachweise geprüft – fehlende FK-Protokolle führen zu Auflagen. Abgrenzung: Monatliche Betreiber-Sichtkontrolle ersetzt keine jährliche SK-Wartung nach DIN 14677.",
      "Praxisfall Bürogebäude: Dauerhaft geklemmte RS-Türen ohne genehmigte Feststellung – Mängel mit kurzer Frist. Nachweis: Wartungsbuch je Tür mit Standort, Hersteller und Prüfdatum führen.",
      "Vertiefung Bestand: [Feuerschutzabschlüsse Bestand](/ratgeber/feuerschutzabschluesse-bestand-nrw) – Ertüchtigung und Prüfzyklen getrennt bewerten.",
    ],
  },
};

const THEME = {
  prueffrist: {
    title: "Praxis: Prüfkalender und Nachweise",
    p: (topic) => [
      `${topic} verlangen in NRW einen schriftlichen Prüfkalender mit Verantwortlichen (B, SK, FK, SV-Bau) – nicht nur den Wartungsvertrag in der Schublade. Abgrenzung: Inspektion durch Sachkundigen ersetzt nicht die Sachverständigenprüfung im Sonderbau.`,
      `Praxisfall: Protokolle lückenhaft nach Personalwechsel – Behörde verlangte Nachweis der eingewiesenen Personen und Übergabe des Anlagenbuchs. Orientierungswert: Jährliche Terminplanung mit BMA-, RWA- und Türen-Fristen in einem Dokument.`,
      `Nachweis im Betrieb: Mängelliste mit Fristen, Freigabe nach Reparatur und Konzeptverweis bei wesentlichen Änderungen – Fortschreibung nach Umbau Pflicht.`,
    ],
  },
  brandschadensanierung: {
    title: "Praxis: Sanierung und Dokumentation",
    p: (topic) => [
      `Bei ${topic} in NRW greifen Arbeitsschutz, Gefahrstoffrecht und Brandschutz gleichzeitig – ein gemeinsames Sanierungskonzept verhindert Widersprüche zwischen Gewerbeaufsicht und Bauaufsicht. Abgrenzung: BSO ersetzt keine Gefährdungsbeurteilung nach DGUV; Entsorgungsnachweis ersetzt kein Freigabeprotokoll.`,
      `Praxisfall: Asbesthaltige Reste neben aktiver Produktion – Behörde verlangte Sperrzonen, Unterdruck und dokumentierte Freigabe vor Wiederinbetriebnahme. Typische Behördenforderung: ASP und Brandschutzplaner früh einbinden.`,
      `Nachweis: Arbeitssicherheitsplan, GBU-Abschnitt und Übergabeprotokoll an den Betreiber – nicht nur Rechnung des Entsorgers.`,
    ],
  },
  feuerloescher: {
    title: "Praxis: Baustelle und Betrieb",
    p: (topic) => [
      `${topic} nach ASR A2.2 verlangt in NRW nachweisbare Prüf- und Wartungsintervalle – auf Baustellen zusätzlich Abstimmung mit SiGeKo und Heißarbeit. Abgrenzung: Handfeuerlöscher ersetzen keinen baulichen Brandschutz; Prüfplakette ersetzt keine Unterweisung.`,
      `Praxisfall: Leihgeräte ohne Prüfnachweis auf der Baustelle – Baustellenkontrolle stoppte Arbeiten bis Nachweis vorlag. Orientierungswert: Register mit Standort, Typ, Prüfdatum und Prüfer je Löscher.`,
      `Nachweis in der BSO Teil B und bei Übergabe an Betreiber – Schnittstelle [Brandklassen](/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2).`,
    ],
  },
  sonderbau: {
    title: "Praxis: Genehmigung und Betrieb",
    p: (topic) => [
      `${topic} löst in NRW häufig ein Brandschutzkonzept oder eine Stellungnahme aus – auch wenn kein SBauVO-Typ exakt passt. Abgrenzung: Gebäudeklasse allein definiert den Sonderbau nicht; Bestandsschutz ersetzt keine Gefahrenabwehr bei Nutzungsänderung.`,
      `Praxisfall: Teilnutzung ohne Fortschreibung von Plänen und BSO – Abnahme verzögert bis Konzept und ASR-Pläne zum genehmigten Stand passten. Behördenforderung: Evakuierung und Anlagentechnik gemeinsam prüfen.`,
      `Nachweis: Genehmigungsunterlagen, Betriebsdokumentation und Übungsprotokolle im Ordner Sonderbau führen.`,
    ],
  },
  betrieb: {
    title: "Praxis: Betrieb und Nachweisführung",
    p: (topic) => [
      `${topic} gehört in NRW in die laufende Betriebsdokumentation – nicht nur in die Eröffnungsphase. Abgrenzung: Genehmigungskonzept ersetzt keine wiederkehrende Instandhaltung; Unterweisung ersetzt keine Übung.`,
      `Praxisfall: Bei Begehung fehlten Fortschreibungen nach Umbau – Auflage mit Frist bis zur Nachreichung aktualisierter Pläne oder Protokolle. Orientierungswert: Verantwortliche und Prüfintervalle schriftlich benennen.`,
      `Nachweis für Geschäftsführung und Versicherung: Ordner Brandschutz Betrieb mit Index und Versionsdatum.`,
    ],
  },
  checkliste: {
    title: "Kurz-Checkliste vor Begehung",
    p: (topic) => [
      `Vor Behörden- oder Versicherungsbegehung zu ${topic}: aktuelle Pläne, Prüfbücher, BSO Teil B, Übungsprotokolle und Mängelliste mit Fristen bereitlegen. Unterschied zur Erstabnahme: Betrieb muss laufende Instandhaltung belegen – nicht nur das genehmigte Konzept.`,
      `Typische Lücke in NRW: Umbau ist dokumentiert, Fortschreibung von Fluchtplan, Feuerwehrplan und Anlagenbuch fehlt. Verantwortliche schriftlich benennen und Übergaben nach Personalwechsel protokollieren.`,
    ],
  },
};

function themeFor(slug) {
  if (slug.includes("prueffrist") || slug.includes("pruefpflicht") || slug.includes("wartung-inspektion"))
    return "prueffrist";
  if (slug.includes("brandschadensanierung") || slug.includes("dguv-205-001"))
    return "brandschadensanierung";
  if (slug.includes("feuerloescher") || slug.includes("brandklassen-loesch"))
    return "feuerloescher";
  if (
    slug.includes("sonderbau") ||
    slug.includes("hochhaus") ||
    slug.includes("versammlungs") ||
    slug.includes("sport") ||
    slug.includes("kita") ||
    slug.includes("mehrzweck")
  )
    return "sonderbau";
  return "betrieb";
}

function titleFromBlock(block) {
  return block.match(/title:\s*\n\s*"([^"]+)"/)?.[1] ?? block.match(/title:\s*"([^"]+)"/)?.[1] ?? "Thema";
}

function sectionId(block) {
  if (block.includes('id: "checkliste"')) return null;
  if (block.includes('id: "betrieb-nachweis"')) return "checkliste";
  if (block.includes('id: "vertiefung"')) return "betrieb-nachweis";
  if (block.includes('id: "praxis-betrieb"')) return "vertiefung";
  return "vertiefung";
}

const { articles } = loadAllRatgeberArticles(path.join(root, "content"));
const edits = [];

for (const a of articles) {
  const audit = auditRatgeberBlock(a.block);
  if (audit.words >= 450) continue;

  const file = path.basename(a.file);
  const sid = sectionId(a.block);
  if (!sid) continue;

  const custom = CUSTOM[a.slug];
  const theme = themeFor(a.slug);
  const topic = titleFromBlock(a.block).replace(/ –.*$/, "").replace(/ \| H&S\+$/, "");
  const useCheckliste = sid === "checkliste";
  const themeKey = useCheckliste ? "checkliste" : theme;
  const paragraphs = custom?.paragraphs ?? THEME[themeKey].p(topic);
  const title = custom?.title ?? THEME[themeKey].title;

  const entry = {
    file,
    slug: a.slug,
    extraSection: { id: sid, title, paragraphs },
  };
  if (custom?.stripMarkdown) entry.stripMarkdown = true;
  edits.push(entry);
}

const out = `/** Auto-generated thin Ratgeber expansions (< 450 W). */\nexport const RATGEBER_NACHBESSERN_THIN41 = ${JSON.stringify(edits, null, 2).replace(/"([^"]+)":/g, "$1:")};\n`;

// JSON.stringify doesn't work well for export - build manually
const lines = [
  "/** Auto-generated: Ratgeber unter 450 Wörter – Vertiefungsabschnitte. */",
  "export const RATGEBER_NACHBESSERN_THIN41 = [",
];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

for (const e of edits) {
  lines.push("  {");
  lines.push(`    file: "${e.file}",`);
  lines.push(`    slug: "${e.slug}",`);
  if (e.stripMarkdown) lines.push(`    stripMarkdown: true,`);
  lines.push("    extraSection: {");
  lines.push(`      id: "${e.extraSection.id}",`);
  lines.push(`      title: "${esc(e.extraSection.title)}",`);
  lines.push("      paragraphs: [");
  for (const p of e.extraSection.paragraphs) {
    lines.push(`        "${esc(p)}",`);
  }
  lines.push("      ],");
  lines.push("    },");
  lines.push("  },");
}
lines.push("];");
lines.push("");

fs.writeFileSync(
  path.join(root, "scripts/data/ratgeber-nachbessern-thin41.mjs"),
  lines.join("\n"),
  "utf8",
);
console.log(`Wrote ${edits.length} expansions to scripts/data/ratgeber-nachbessern-thin41.mjs`);
