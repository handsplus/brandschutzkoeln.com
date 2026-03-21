# Neu starten: **brandschutzkoeln.com** online (GitHub + Vercel + IONOS)

Diese Reihenfolge einmal von oben nach unten abarbeiten. **Nicht** DNS bei IONOS ändern, bevor Vercel die genauen Werte anzeigt.

---

## Voraussetzungen

- Domain **brandschutzkoeln.com** liegt bei **IONOS** (oder wo auch immer – dann dieselbe Logik mit den Werten von Vercel).
- Zugriff auf **GitHub-Organisation/Konto** `handsplus` (oder dein Konto).
- Zugriff auf **Vercel** (Team `handsplus` empfohlen, einheitlicher Login).

---

## Schritt 1 – GitHub-Repository anlegen

1. Öffnen: https://github.com/new  
2. **Repository name:** z. B. `brandschutzkoeln.com` oder `brandschutzkoeln` (nur Kleinbuchstaben, keine Leerzeichen).  
3. **Public** oder **Private** wie gewünscht.  
4. **Ohne** README / .gitignore / Lizenz anlegen (Projekt bringt den Code mit).  
5. **Create repository**.

---

## Schritt 2 – Lokal mit GitHub verbinden und pushen

Im **Projektordner** (PowerShell oder Terminal):

```powershell
cd "C:\Users\akork\OneDrive\H&S+\1. Verwaltung\3. Webseiten\brandschutzköln.com"

# Falls noch ein alter Remote existiert:
git remote remove origin

# Neuen Remote setzen (URL aus GitHub kopieren):
git remote add origin https://github.com/handsplus/DEIN-REPO-NAME.git

git branch -M main
git add -A
git status
git commit -m "Initial: Brandschutz Köln Website"
git push -u origin main
```

Falls `origin` schon existiert und nur die URL wechseln soll:

```powershell
git remote set-url origin https://github.com/handsplus/DEIN-REPO-NAME.git
git push -u origin main
```

---

## Schritt 3 – Vercel: Projekt neu anlegen

1. https://vercel.com → mit **demselben** Konto wie GitHub anmelden.  
2. Oben das **richtige Team** wählen (z. B. **handsplus**).  
3. **Add New… → Project**.  
4. **Import** das Repository aus Schritt 1.  
5. **Project Name:** z. B. `brandschutzkoeln` (nur Kleinbuchstaben, Zahlen, `-`, `_`).  
6. **Framework:** Next.js (automatisch).  
7. **Root Directory:** `./` (Standard).  
8. **Build & Output:** Standard lassen (`next build`).  
9. **Environment Variables:** keine nötig für den Standard-Build (Formspree-ID steckt im Code).  
10. **Deploy** klicken und warten, bis der Build **grün** ist.

**Test:** Die angezeigte URL `https://brandschutzkoeln.vercel.app` (oder dein Projektname) im Browser öffnen – **Seite muss laden**.

Erst wenn das funktioniert → weiter mit der Domain.

---

## Schritt 4 – Domain in Vercel eintragen (noch kein IONOS!)

1. Projekt öffnen → **Settings → Domains**.  
2. **`brandschutzkoeln.com`** hinzufügen → **Add**.  
3. **`www.brandschutzkoeln.com`** hinzufügen (optional Redirect auf Apex in Vercel einstellen).  
4. Vercel zeigt jetzt die **konkreten DNS-Einträge** (A für `@`, CNAME für `www`).  
5. **Diese Werte notieren oder offen lassen** – sie sind die einzigen, die bei IONOS eingetragen werden.

---

## Schritt 5 – IONOS DNS (exakt nach Vercel)

1. IONOS → **Domains & SSL** → **brandschutzkoeln.com** → **DNS verwalten**.  
2. **Alle** alten Einträge entfernen, die mit dem Web zu tun haben, falls noch vorhanden:
   - doppelte **A**-Einträge für `@`
   - **A** auf fremde IPs
   - **CNAME** für `www`, die nicht zu Vercel zeigen  
   - **Web-Weiterleitung** / Parking, falls es mit der Website kollidiert  
3. **Nur** die Einträge eintragen, die **Vercel in Schritt 4** anzeigt (häufig z. B.):
   - **Typ A**, Host **`@`**, Ziel **IP von Vercel** (oft `76.76.21.21` – **trotzdem Vercel-Anzeige verwenden**)
   - **Typ CNAME**, Host **`www`**, Ziel **`cname.vercel-dns.com`** oder der projektspezifische Host von Vercel  
4. Speichern.  
5. In Vercel bei den Domains auf **Refresh** klicken, bis **„Valid Configuration“ / Gültige Konfiguration** erscheint (oft 15–60 Minuten).

---

## Schritt 6 – Prüfen

| Test | Erwartung |
|------|-----------|
| `https://DEIN-PROJEKT.vercel.app` | Seite lädt |
| `https://brandschutzkoeln.com` | Seite lädt, HTTPS |
| `https://www.brandschutzkoeln.com` | Leitet auf Hauptdomain (wie in Vercel eingestellt) |

---

## Schritt 7 – Formspree (Kontaktformular)

- Formspree → Formular → **Restrict to Domain** → `brandschutzkoeln.com` (ohne `https://`).

---

## Schritt 8 – Vercel CLI (optional, nur lokal)

Wenn du lokal deployen willst, **nach** dem ersten erfolgreichen GitHub-Deploy:

```powershell
npm i -g vercel
vercel login
cd "C:\Users\akork\OneDrive\H&S+\1. Verwaltung\3. Webseiten\brandschutzköln.com"
vercel link --yes --project brandschutzkoeln
vercel --prod -y
```

Der Ordner `.vercel` ist in `.gitignore` und wird **nicht** ins Repo gepusht.

---

## Typische Fehler

| Problem | Lösung |
|--------|--------|
| `DEPLOYMENT_NOT_FOUND` auf der eigenen Domain | Domain in **diesem** Vercel-Projekt hinzufügen; DNS exakt wie Vercel; warten + Refresh. |
| Build schlägt auf Vercel fehl | **Deployments → Logs** lesen; lokal `npm run build` testen. |
| `npm run dev` lokal kaputt (Windows-Pfad mit `&`) | Im Projekt: `npm run dev` nutzt `scripts\start-dev.cmd`. |

---

## Referenz im Repo

- Allgemein: **`DEPLOY.md`**
- IONOS / Punycode: **`docs/DNS-VERCEL-IONOS.md`**
