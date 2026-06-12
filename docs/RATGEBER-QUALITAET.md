# Ratgeber-Qualität: 10-Punkte-Standard (Ziel 10/10)

Jeder Ratgeber-Artikel auf **brandschutzkoeln.com** soll Fachratgeber-Niveau haben – fundiert aus Handlungsvorlagen, BauO NRW und H&S+-Praxis, nicht generisches SEO.

**Ziel:** Alle **10 Kriterien erfüllt** = Artikel freigegeben (10/10).  
**Quellen:** `C:\Users\akork\OneDrive\H&S+\3. Handlungsvorlagen\Brandschutz` (190 HTML) → Extrakt `docs/handlungsvorlagen-brandschutz/` (gitignored). Fehlende Unterlagen beschaffen, dann Index aktualisieren (`scripts/extract-handlungsvorlagen-html.ps1`).

---

## Die 10 Kriterien (Pflicht je Artikel)

| # | Kriterium | Prüffrage | Typisch nicht erfüllt wenn … |
|---|-----------|-----------|------------------------------|
| **1** | **Rechtskern korrekt** | Stimmen §§/Schwellen/Wortlaut (BauO 2018/NRW, SBauVO, MVStättVO, IndBauR)? | Nur „BauO sagt …“ ohne Zahlen; veraltete MBO-Annahmen (z. B. 52,5 m Sprinkler in NRW) |
| **2** | **H&S+-Begriffe** | Nur baurechtliche Begriffe: Brandabschnitt, Rauchabschnitt, T30-RS, Rettungsweg – **kein** „Rauchwand“ | Pauschale Marketing-Begriffe, falsche Trennung GK vs. Sonderbau |
| **3** | **Praxis aus Vorlagen** | Mindestens **1** konkreter Praxisbezug (Musterfall, typische Behördenforderung, Fehler) – ohne erfundene Az./Adressen | Nur Gesetzesprosa, keine „was passiert im Verfahren“ |
| **4** | **Tiefe statt Fülltext** | ≥ **6** Abschnitte mit Substanz **oder** ≥ **5** FAQs mit konkreten Antworten; keine leeren Listen | 2 Absätze + „jetzt anfragen“ |
| **5** | **Abgrenzungen** | Mindestens **2** klare Grenzfälle (wann ja/nein, A vs. B) | Nur Definition, keine Einordnung |
| **6** | **Nachweis-Logik** | Klar: Konzept / Stellungnahme / Fortschreibung / BSO / Pläne – was wofür | „Brandschutz beachten“ ohne Dokument |
| **7** | **NRW-first, Köln sparsam** | Fließtext NRW/BauO; **max. 1×** lokaler Bezug (tab, BF, Vorgangsauskunft+) wenn nötig; Meta/Slug/Link-Labels „Köln“ ok | „In Köln“ in jeder H2, künstliche Lokalisierung |
| **8** | **Interne Verlinkung** | ≥ **3** `relatedLinks`; passender **Cluster** in `ratgeber-clusters.ts`; Verweis auf Grundlagen-Artikel wenn Spezialthema | Inselartikel, immer dieselben 4 Links |
| **9** | **Technisch sauber** | Keine `**`-Reste, keine leeren ``-Lücken; `npm run typecheck` ok | Batch-2-Lücken nach Markdown-Stripping |
| **10** | **Ehrlicher Hinweis** | Abschnitt oder Satz: ersetzt keine behördliche Einordnung / kein Nachweis | Rechtsberatungs-Anmutung |

**Freigabe:** Alle 10 = ✅ → Status **10/10** in der Tabelle unten.

---

## Arbeitsablauf pro Artikel (Reihenfolge)

1. **Thema & Quellen** – `_KI_WISSEN.html` im passenden Ordner + `Vorschr., TR & Infos\_KI_WISSEN.html` + ggf. 1–2 BSK/Stellungnahme-HTML aus Katalog.
2. **Bestand lesen** – `content/ratgeber.ts` oder `ratgeber-articles-batch2.ts`.
3. **Lücke notieren** – was fehlt in Vorlagen? → beschaffen oder in `docs/handlungsvorlagen-brandschutz/` nachziehen.
4. **Text schreiben/überarbeiten** – Checkliste 1–10 abhaken.
5. **Cluster & Links** – `ratgeber-clusters.ts`, Gegenartikel verlinken (Grundlagen ↔ Spezial).
6. **Prüfen** – `npm run typecheck`; Artikel im Dev (`/ratgeber/{slug}`) lesen.
7. **Status** in dieser Datei aktualisieren.

### Quellen-Priorität (bei Recherche)

1. `BauO NRW 2024.html`, `SBauV NRW vollständig.html`, Handlungsempfehlung 2018  
2. `1. Brandschutzkonzepte (BSK)\_KI_WISSEN*.html` / Fallbibliothek  
3. `2. Stellungnahmen\_KI_WISSEN.html` + passende Stellungnahme-HTML  
4. Themenordner (VStätt, Rettungswege, BSO, …)  
5. `Landesbauordnung_NRW_im_Bild` (Kommentar), IndBauR, tab_koeln (nur wenn lokal relevant)

---

## Systematik-Artikel (Referenzqualität)

Diese Artikel sind die **Latte** für alle anderen:

| Slug | Rolle |
|------|--------|
| `gebaeudeklassen-brandschutz-bauo-nrw` | GK, Bauteile, Sonderbau-Schnittstelle |
| `sonderbauten-brandschutz` | § 50, Schwellen, baulicher BS |
| `sonderbauten-geregelt-ungeregelt-bauo-nrw` | SBauVO ja/nein, Gastronomie-Dreiteilung |
| `brandschutzkonzept-wann-noetig` | Konzept / Stellungnahme / § 9 |
| `flucht-und-rettungswege-bauo-nrw` | § 33, Brand-/Rauchabschnitt |

Neue Spezialthemen: **verlinken** auf diese fünf, nicht wieder alles erklären.

---

## Köln-Regeln (Kurz)

- **Erlaubt:** Meta-Titel mit Köln, Slugs mit `-koeln`, Link-Labels zu Leistungsseiten (`/brandschutzkonzept-koeln`).
- **Sparsam:** BF Köln, Bauaufsicht Köln/tab, Vorgangsauskunft+ – **einmal** pro Artikel wenn behördlicher Ablauf Thema ist.
- **Vermeiden:** „Typische Fälle in Köln“, „in Köln und Umgebung“, „Praxis Köln“ in jedem Abschnitt; H2 „… in Köln“ ohne Sachgrund.

---

## Status aller Ratgeber-Artikel

Stand manuell pflegen. Skala: **—** offen | **~6** Basis | **~8** überarbeitet | **10** alle Kriterien ✅

### `content/ratgeber.ts` (19 Artikel)

| Slug | Status | Notiz |
|------|--------|-------|
| `gebaeudeklassen-brandschutz-bauo-nrw` | 10 | Referenz GK |
| `sonderbauten-brandschutz` | 10 | Referenz § 50 |
| `sonderbauten-geregelt-ungeregelt-bauo-nrw` | 10 | Referenz SBauVO ja/nein |
| `brandschutzkonzept-wann-noetig` | 10 | Referenz Nachweise |
| `flucht-und-rettungswege-bauo-nrw` | 10 | Referenz § 33, Pläne-Abgrenzung (Mai 2026) |
| `umbau-nutzungsaenderung-brandschutz` | 10 | Referenz-Umbau/Nutzungsänderung |
| `bauaufsicht-unterlagen-koeln` | 10 | Rollen, Nachweis, Praxis Zwischenbescheid |
| `sprinkler-trockenbau-nutzungsaenderung-bauo-nrw` | 10 | Studio UG, Varianten A–C |
| `feuerwehr-abstimmung-vor-bauamt-bauo-nrw` | 10 | FW vor BA, §§ 33/4–6, BMA-TAB-Abgrenzung |
| `escape-room-brandschutzordnung-fluchtplan` | 10 | BSO/Pläne, Verriegelungen, § 50 |
| `zweiter-rettungsweg-dachfenster-bauo-nrw` | 10 | § 33/34, FW-Begehung, Legalisierung |
| `fluchtplan-feuerwehrplan-aktualisieren-gewerbe` | 10 | BauO vs ASR A2.3 vs DIN 14095 |
| `arztpraxen-zusammenlegen-brandschutz-koeln` | 10 | GK 5, § 33, Stellungnahme oder BSK, Praxisfall 2. OG |
| `zwischenbescheid-brandschutz-bauamt-koeln` | 10 | Praxis+Lager, § 7 BauPrüfVO, 2 Fälle |
| `imbiss-ladenlokal-nutzungsaenderung-koeln` | 10 | Stellungnahme-Fall 65 m², § 29/64, Küche/Grill |
| `eilbegehung-brandschutz-restaurant-gewerbe-koeln` | 10 | Betrieb vs BA/FW, Fall 90 m² |
| `feuerloescher-gastronomie-koeln` | 10 | ASR A2.2 LE/F, Abgrenzung BauO |
| `teilsanierung-buero-brandschutz-koeln` | 10 | GK5/Sonderbau Büro, BMA, ASR A2.3 |
| `bestandsschutz-technische-sanierung-bauo-nrw` | 10 | § 59 vs § 83 vs Teilsanierung |

### `content/ratgeber-articles-batch2.ts` (13 Artikel)

| Slug | Status | Notiz |
|------|--------|-------|
| `feuerschutztueren-bestand-ertuechtigung-koeln` | 10 | T30-RS, DIBt, Gutachten GK5 (Mai 2026) |
| `brandschutz-abnahme-nach-umbau-koeln` | 10 | SV-Abnahme, Unterlagenpaket (Mai 2026) |
| `brandschau-koeln-feuerwehr` | 10 | Abgrenzung, Praxis-Mängel (Mai 2026) |
| `fachbauleitung-brandschutz-baustelle-koeln` | 10 | § 56, Bescheinigung (Mai 2026) |
| `lagerhalle-buero-umnutzung-koeln` | 10 | Halle→Büro, Stellungnahme oder Konzept (Mai 2026) |
| `sprinkler-rueckbau-bma-nutzungsaenderung-koeln` | 10 | Fortschreibung, Ablauf Abnahme (Mai 2026) |
| `kraftstoff-lagerung-halle-garage-brandschutz` | 10 | TRGS 510, Typische Fehler (Mai 2026) |
| `abschottungen-durchbrueche-baustelle-koeln` | 10 | Ü-Zulassung, Nachweise Abnahme (Mai 2026) |
| `loeschwasser-hydranten-gewerbe-koeln` | 10 | Versorger/FW-Ablauf (Mai 2026) |
| `feuerwehrplan-fluchtplaene-pflicht-koeln` | 10 | Verantwortlichkeiten Planarten (Mai 2026) |
| `praxis-umbau-brandschutz-koeln` | 10 | Bildgebung, Typische Fehler (Mai 2026) |
| `technische-betriebsgebaeude-brandschutz-nrw` | 10 | NEA-Campus, Typische Fehler (Mai 2026) |
| `bauantrag-brandschutz-unterlagen-koeln` | 10 | Checkliste, Musterfall, Inline-Links (Mai 2026) |
| `bestellung-brandschutzbeauftragter-nrw` | 10 | Bestellung, DGUV 205-003, Rahmen (Mai 2026) |
| `aufgaben-brandschutzbeauftragter-koeln` | 10 | 26 Aufgaben DGUV Kap. 3, Checkliste Bestellung (Jun 2026) |
| `externer-brandschutzbeauftragter-koeln` | 10 | Intern/extern, Vertrag, Qualifikation, Gastronomie-Praxis (Jun 2026) |
| `brandschutzberatung-koeln-auflagen-risiken` | 10 | Kostenlose Erstberatung, teure Fehler, Praxis Umnutzung (Jun 2026) |

**Gesamt: 36 Artikel · 36× 10/10** (Stand Jun 2026)

---

## Batch-2-Sanierung (Kriterium 9)

Vor Freigabe 10/10 in `ratgeber-articles-batch2.ts` suchen:

- Doppelte Leerzeichen / `` / `Ein  ` / fehlende Substantive nach `**`-Entfernung  
- `Grep` in Datei: `  ` (zwei Spaces), `` , `\.  `

---

## Wenn etwas in den Vorlagen fehlt

1. Thema benennen (z. B. „SBauVO Krankenhaus NRW“ – gibt es nicht → BauO + Konzept-Muster aus BSK Krankenhaus/Grundschule).  
2. HTML/PDF in `Handlungsvorlagen\Brandschutz` ablegen.  
3. `scripts/extract-handlungsvorlagen-html.ps1` ausführen.  
4. Optional `_KI_WISSEN.html` im Ordner ergänzen (wie andere Ordner).  
5. Artikel nachziehen.

---

## Commit-Hinweis

Ratgeber-Überarbeitungen **gebündelt** committen (z. B. „ratgeber: Sonderbau geregelt/ungeregelt + Qualitätsstandard“), wenn der Nutzer es wünscht – nicht pro Absatz.
