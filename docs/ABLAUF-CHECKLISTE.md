# Ablauf-Checkliste – alles durchgeführt / was du prüfst

## Automatisch erledigt (Stand: Repo + Code)

| Schritt | Status |
|--------|--------|
| Git **main** = **origin/main** (`handsplus/brandschutzkoeln.com`) | ✓ |
| Redirect-Fix (**ERR_TOO_MANY_REDIRECTS**) in `next.config.ts` | ✓ |
| Kanonische URL **https://www.brandschutzkoeln.com** (SEO, Layout) | ✓ |
| `npm run build` (Production) | ✓ nach Bedarf `.next` löschen |
| `tsc --noEmit` (TypeScript) | ✓ |

### Build bei Windows/OneDrive-Fehler (`EINVAL` / `readlink` im Ordner `.next`)

```powershell
Remove-Item -Recurse -Force .next
npm run build
```

---

## Du im Browser / Vercel (kann ich nicht klicken)

1. **Vercel** → Projekt **brandschutzkoeln-com** → **Deployments** → letzter Build **Ready** (nach Git-Push automatisch).
2. **Test-URLs:**
   - `https://www.brandschutzkoeln.com`
   - `https://brandschutzkoeln.com` (Weiterleitung zu www ok)
   - `https://brandschutzkoeln-com.vercel.app`
3. **IONOS** → DNS nur wie **Vercel → Domains** anzeigt.
4. **Formspree** → „Restrict to Domain“ → `brandschutzkoeln.com` oder `www.brandschutzkoeln.com`.

---

## Befehle zum erneuten Prüfen (lokal)

```powershell
cd "C:\Users\akork\OneDrive\H&S+\1. Verwaltung\3. Webseiten\brandschutzköln.com"
git pull
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
node ./node_modules/typescript/bin/tsc --noEmit
git status
```

---

## Lint

`next lint` kann interaktiv nach Next.js 15 fragen. Migration zu ESLint CLI: https://nextjs.org/docs/app/api-reference/config/eslint – optional später.
