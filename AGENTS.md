# AGENTS.md — Beitragsregeln für ip-website

Leitfaden für alle, die an dieser Website mitarbeiten. Die Seite ist der öffentliche Auftritt der **Ihre Pflege Zirndorf GmbH** (`www.ihre-pflege.de`).

## Stack & Deploy
- **Astro**, statisch gebaut, gehostet über **GitHub Pages**.
- Node-Version siehe `.nvmrc`. Setup: `npm ci`.
- Lokal: `npm run dev` · Build: `npm run build` (Output `dist/`).
- **Deploy ist automatisch:** jeder Push auf `main` triggert den Pages-Build (`.github/workflows/deploy.yml`). Darum: **nicht direkt auf `main` committen** — Branch + Pull Request, Review abwarten.
- Custom Domain via `CNAME` (`www.ihre-pflege.de`). `public/CNAME` nicht entfernen.

## Repo ist öffentlich
Dieses Repository ist **public**. Keine internen Notizen, keine personenbezogenen Daten Dritter, keine Zugangsdaten und keine internen Prozess-/Tooling-Hinweise in Code, Kommentaren oder Commit-Messages. Commit-Messages sachlich und knapp.

## Inhaltliche Konventionen
Die Website spricht **zwei Zielgruppen** an:
- **Bewerber / Pflegekräfte** (Jobs, Karriere): Anrede **Du**, kollegial und ehrlich.
- **Angehörige / Patienten** (Leistungen, Kontakt): Anrede **Sie**, respektvoll und klar.

In gemischten Übersichts-Sektionen (Hero) dürfen beide Gruppen gleichwertig angesprochen werden; in dedizierten Sektionen gilt konsequent die Anrede der jeweiligen Zielgruppe. Ton generell: warm, nahbar, ehrlich — kein Hochglanz-Marketing, keine englischen Buzzwords.

## Pflicht-Checks vor jedem PR
1. **Impressum** (§5 TMG) vollständig; **Datenschutzerklärung** aktuell, alle eingebundenen Drittdienste benannt (DSGVO).
2. **Kassenzulassung** (§72 SGB XI) korrekt dargestellt; **MD-Prüfnote** (§115 Abs. 1a SGB XI) aktuell, wo veröffentlicht/verlinkt.
3. **Keine Heilsversprechen / unzulässige Werbeaussagen** (HWG §3/§11 — kein „garantiert", „heilt", „kuriert").
4. **Pflegekosten-/Kassensätze** (falls genannt) jahresaktuell (§37 SGB XI).
5. **Fotos/Zitate von Personen** nur mit dokumentierter Einwilligung; keine Stockfotos als „unser Team".
6. **Stellenangebote:** `datePosted`/`validThrough` pflegen, besetzte Stellen depublizieren; strukturierte `JobPosting`-Daten konsistent zur sichtbaren Anzeige halten.

## Daten & Struktur
- Standorte: `src/data/locations.ts` · Stellen: `src/data/jobs.ts` · Testimonials: `src/data/testimonials.ts`.
- Diese Dateien sind die einzige Quelle für die jeweiligen Inhalte — neue Standorte/Stellen dort pflegen, nicht in Seiten hartkodieren.
- Strukturierte Daten (Schema.org LD+JSON) in `src/layouts/BaseLayout.astro` bzw. auf den Stellenseiten aktuell halten.

## Nicht tun
- ❌ Direkt auf `main` pushen.
- ❌ Anrede Du/Sie innerhalb eines Textes mischen.
- ❌ Stockfotos unbekannter Personen als echtes Team ausgeben.
- ❌ Heilsversprechen oder Garantien formulieren.
- ❌ Veraltete Kostensätze / besetzte Stellen stehen lassen.
- ❌ Interne oder personenbezogene Informationen ins öffentliche Repo schreiben.
