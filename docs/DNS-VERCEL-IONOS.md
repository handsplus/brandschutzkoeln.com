# DNS für Vercel (IONOS) – Checkliste

## Zwei Domains im Projekt

| Domain (Anzeige)     | Punycode (DNS/Host)        | Verwendung                    |
|----------------------|----------------------------|--------------------------------|
| **brandschutzköln.com**  | xn--brandschutzkln-6pb.com | Hauptdomain (kanonisch)       |
| **kölnbrandschutz.com**  | xn--klnbrandschutz-vpb.com | Leitet auf Hauptdomain weiter |

## In IONOS pro Domain einstellen

### Für kölnbrandschutz.com (xn--klnbrandschutz-vpb.com)

In IONOS unter **Domains & SSL → kölnbrandschutz.com → DNS**:

| Typ   | Hostname | Wert / Zeigt auf |
|-------|----------|-------------------|
| **A** | `@`      | `216.198.79.1`    |
| **CNAME** | `www` | `32c4130c6851ce22.vercel-dns-017.com` (mit oder ohne Punkt am Ende) |

- Nur **einen** A-Record für `@`, keinen zweiten (z. B. alter IONOS-A-Record löschen).
- Nur **einen** CNAME für `www` mit exakt diesem Ziel.

### Für brandschutzköln.com (xn--brandschutzkln-6pb.com)

Falls diese Domain auch bei IONOS liegt: dieselbe Logik – A für `@`, CNAME für `www` auf den von Vercel angezeigten Wert.

## Häufige Gründe für „Invalid Configuration“

1. **Falsche Domain in IONOS** – DNS bearbeiten für **kölnbrandschutz.com**, nicht für eine andere Domain.
2. **Nameserver** – Die Domain muss die **IONOS-Nameserver** nutzen (z. B. ns1.ionos.de, ns2.ionos.de). Wo die Domain registriert ist: unter Domain-Verwaltung prüfen.
3. **Laufzeit** – Nach Änderung 15–60 Min warten, dann in Vercel bei der Domain auf **Refresh** klicken.
4. **Doppelte Einträge** – Alte A- oder CNAME-Einträge für `@` bzw. `www` löschen.

## Prüfen, was das Internet sieht

- [dnschecker.org](https://dnschecker.org): **kölnbrandschutz.com** (A) und **www.kölnbrandschutz.com** (CNAME) prüfen.
- Sollte zeigen: A = `216.198.79.1`, CNAME = `32c4130c6851ce22.vercel-dns-017.com`.

## Nach erfolgreicher DNS-Änderung

- In Vercel: **Refresh** bei der Domain.
- Besucher von **kölnbrandschutz.com** und **www.kölnbrandschutz.com** werden automatisch auf **brandschutzköln.com** weitergeleitet (Redirect in `next.config.ts`).

---

## ERR_SSL_PROTOCOL_ERROR bei kölnbrandschutz.com

Wenn der Browser meldet: *„Diese Website kann keine sichere Verbindung bereitstellen“* / **ERR_SSL_PROTOCOL_ERROR**:

1. **Zuerst www testen**  
   Aufruf: **https://www.kölnbrandschutz.com** oder **https://www.xn--klnbrandschutz-vpb.com**  
   Für die www-Domain ist das SSL oft zuerst fertig; die Root-Domain (ohne www) braucht manchmal länger.

2. **SSL in Vercel prüfen**  
   Im Vercel-Dashboard unter **Domains** bei **xn--klnbrandschutz-vpb.com** schauen:  
   - Steht dort noch **„Generating SSL Certificate“** → 10–30 Min warten und Seite neu laden.  
   - Steht **„Valid Configuration“** und es geht trotzdem nicht → Domain entfernen und in Vercel erneut hinzufügen („Add“), dann erneut warten.

3. **DNS für die Root-Domain**  
   Die **Root-Domain** (kölnbrandschutz.com ohne www) muss per **A-Record** auf Vercel zeigen (z. B. `216.198.79.1`).  
   Zeigt der A-Record noch auf IONOS oder eine andere IP, antwortet ein anderer Server – dann kommt oft ERR_SSL_PROTOCOL_ERROR.  
   Prüfen unter: [dnschecker.org](https://dnschecker.org) → **kölnbrandschutz.com** (A) → Wert muss die von Vercel genannte IP sein.

4. **Punycode-URL testen**  
   Im Browser direkt aufrufen: **https://www.xn--klnbrandschutz-vpb.com**  
   Wenn das funktioniert, liegt das Problem an der Unicode-Darstellung (köln…) oder am SSL für die Root; Schritt 1–3 reichen dann.
