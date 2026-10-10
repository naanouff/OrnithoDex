# Déploiement — OrnithoDex

## Prévisualisation

- Intégration Git Vercel sur le dépôt [naanouff/OrnithoDex](https://github.com/naanouff/OrnithoDex)
- Preview automatique sur PR / push vers `develop`
- Config app : [`vercel.json`](../../vercel.json) (Vite, `dist`, rewrite SPA)

## Production

Déclenchée **uniquement** par une **GitHub Release** (`release: published`) via [`.github/workflows/deploy-production.yml`](../../.github/workflows/deploy-production.yml).

Secrets GitHub (Settings → Secrets and variables → Actions) :

| Secret | Origine |
|--------|---------|
| `VERCEL_TOKEN` | Vercel → Account → Tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` → `orgId` (après `vercel link`) |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` → `projectId` |

## Branchement Vercel (une fois)

1. [vercel.com/new](https://vercel.com/new) → importer `naanouff/OrnithoDex`
2. Framework : Vite ; Build `npm run build` ; Output `dist`
3. Production Branch : `main` (ou laisser Git ; **désactiver** le déploiement prod auto sur push si possible — la prod passe par Actions + Release)
4. Preview : activer pour `develop` / PR
5. Renseigner les 3 secrets Actions ci-dessus

## CI

[`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) : `npm ci` + `npm run build` sur PR et push `develop` / `main`.

## Flux Gitflow rappel

`feature/*` → PR → `develop` (preview) → `release/x.y.z` → `main` → tag + Release → prod Vercel.
