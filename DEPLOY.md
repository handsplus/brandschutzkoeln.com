# brandschutzköln.com – Deploy (Vercel)

Next.js-Projekt – auf Vercel ohne extra Konfiguration deploybar.

**Neu von Null (alles gelöscht / frischer Start):** Schritt-für-Schritt in **`docs/NEUSTART-BRANDSCHUTZKOELN.md`**.

## Domain **brandschutzkoeln.com** mit Vercel verbinden

Kanonische Live-URL: **`https://www.brandschutzkoeln.com`**. Alternative Domains (z. B. kölnbrandschutz…) leiten in `next.config.ts` dorthin um – **ohne** Redirect der Hauptdomain auf eine zweite URL, damit es keine Schleife mit Vercel (apex ↔ www) gibt.

### Schritt 1: Code bei Vercel bereitstellen (empfohlen: GitHub)

1. **GitHub-Repository** anlegen (falls noch nicht): https://github.com/new  
   Ohne zusätzliches README, wenn das Repo schon Inhalt hat.

2. **Lokal pushen** (im Projektordner):
   ```bash
   git remote add origin https://github.com/DEIN-BENUTZERNAME/DEIN-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```
   (`git remote add` nur, wenn noch kein `origin` existiert.)

3. **Vercel**: https://vercel.com → anmelden (z. B. mit GitHub).

4. **Add New… → Project** → Repository importieren.

5. Einstellungen prüfen (meist Standard):
   - **Framework Preset:** Next.js  
   - **Build Command:** `next build`  
   - **Output Directory:** (leer / Standard)  
   - **Install Command:** `npm install`

6. **Deploy** klicken. Danach gibt es eine URL wie `…vercel.app`.

### Schritt 2: Domain in Vercel eintragen

1. Im Vercel-Projekt: **Settings → Domains**.

2. **Domain hinzufügen** und nacheinander eintragen:
   - `brandschutzkoeln.com`
   - `www.brandschutzkoeln.com`

3. Vercel zeigt dir die **DNS-Einträge**, die du beim Domain-Anbieter setzen musst (typisch):
   - **Root (`@`)**: A-Record auf die von Vercel genannte IP **oder** (je nach Anbieter) ein spezieller Eintrag wie `76.76.21.21` – **immer die Werte aus dem Vercel-Dashboard verwenden**, sie können sich ändern.
   - **`www`**: CNAME auf den von Vercel angegebenen Host (z. B. `cname.vercel-dns.com` oder ein projektspezifischer `*.vercel-dns-…` Wert).

4. Beim **Domain-Provider** (z. B. IONOS) unter DNS die alten A-/CNAME-Einträge für `@` und `www` entfernen, die zu einem anderen Hosting zeigen, und **genau** die Einträge eintragen, die Vercel anzeigt.

5. 15–60 Minuten warten, in Vercel bei der Domain auf **Refresh** klicken, bis **„Valid Configuration“** steht. SSL (HTTPS) stellt Vercel automatisch aus.

6. Ausführliche DNS-Hinweise für IONOS: siehe **`docs/DNS-VERCEL-IONOS.md`** (dort auch Punycode-Varianten erklärt).

### Schritt 3: Automatische Deploys

- Jeder **Push auf `main`** (bzw. den von dir gewählten Produktions-Branch) löst bei Vercel einen neuen Build aus.

---

## Option: Vercel CLI (ohne GitHub)

```bash
npm i -g vercel
vercel login
cd PFAD\ZUM\PROJEKT
vercel        # erstes Setup
vercel --prod # Produktion
```

Domain kannst du danach ebenfalls unter **Project → Settings → Domains** hinzufügen.

---

## Nach dem Deploy

- **Kontaktformular:** fest **https://formspree.io/f/mnjgpqoq** – unter Formspree → Settings → **Restrict to Domain** z. B. `brandschutzkoeln.com` (ohne `https://`) eintragen, damit nur deine Live-Seite senden darf.

- **Test:** `https://brandschutzkoeln.com` und `https://www.brandschutzkoeln.com` aufrufen – Weiterleitung zur kanonischen URL ist in der App vorgesehen.
