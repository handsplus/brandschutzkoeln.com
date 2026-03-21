# Exakte Punycode-Referenz (Node.js `url.domainToASCII`)

| Unicode (Anzeige) | Punycode (DNS / Host / Vercel) |
|-------------------|--------------------------------|
| **brandschutzköln.com** | `xn--brandschutzkln-6pb.com` |
| **www.brandschutzköln.com** | `www.xn--brandschutzkln-6pb.com` |
| **kölnbrandschutz.com** | `xn--klnbrandschutz-vpb.com` |
| **www.kölnbrandschutz.com** | `www.xn--klnbrandschutz-vpb.com` |

---

**Hinweis:** Für kölnbrandschutz.com wird vereinzelt auch `xn--klnbrandschutz-8eb.com` verwendet. In der `next.config.ts` sind beide Varianten (-vpb und -8eb) für Redirects berücksichtigt. Für DNS und Vercel den von deinem Registrar/Vercel angezeigten Wert verwenden; laut Node.js ist die exakte Form **-vpb**.
