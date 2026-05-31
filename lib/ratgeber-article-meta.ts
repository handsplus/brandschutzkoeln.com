/** Einheitlicher redaktioneller Stand für Ratgeber (E-E-A-T). */
export const RATGEBER_EDITORIAL = {
  standLabel: "Stand: Mai 2026",
  authorLabel: "H&S+ Köln – Brandschutz",
} as const;

/** Anzeige „Stand: TT.MM.JJJJ“ aus ISO-Datum oder Fallback. */
export function formatRatgeberStandLabel(publishedAt?: string): string {
  if (!publishedAt) return RATGEBER_EDITORIAL.standLabel;
  const [y, m, d] = publishedAt.split("-");
  if (!y || !m || !d) return RATGEBER_EDITORIAL.standLabel;
  return `Stand: ${d}.${m}.${y}`;
}
