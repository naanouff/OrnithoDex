# Déploiement — OrnithoDex

## Prévisualisation

- Workflow [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml) :
  - job `build` : `npm ci` + `npm run build` (PR et push `develop` / `main`)
  - job `preview` : déploiement Vercel **preview** après build réussi
    - déclenché sur **push `develop`** et sur **PR** (forks exclus)
    - CLI : `vercel pull` → `vercel build` → `vercel deploy --prebuilt`
- Config app : [`vercel.json`](../../vercel.json) (Vite, `dist`, rewrite SPA)
- URL de preview : résumé du job GitHub Actions (`Preview Vercel`)

Si l’intégration Git Vercel est aussi activée sur le dépôt, désactiver les déploiements Git en double (ou n’utiliser que Actions) pour éviter deux previews par push.

## Production

Déclenchée **uniquement** par une **GitHub Release** (`release: published`) via [`.github/workflows/deploy-production.yml`](../../.github/workflows/deploy-production.yml).

Flux CLI : `vercel pull --environment=production` → `vercel build --prod` → `vercel deploy --prebuilt --prod`.

Secrets GitHub (Settings → Secrets and variables → Actions) :

| Secret | Origine |
|--------|---------|
| `VERCEL_TOKEN` | Vercel → Account → Tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` → `orgId` (après `vercel link`) |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` → `projectId` |

Sans `VERCEL_TOKEN`, le job `preview` est **ignoré** (`if`) ; le job `build` reste obligatoire. La prod Release échoue tant que les 3 secrets ne sont pas renseignés.

## Branchement Vercel (une fois)

1. [vercel.com/new](https://vercel.com/new) → importer `naanouff/OrnithoDex`
2. Framework : Vite ; Build `npm run build` ; Output `dist` (déjà dans `vercel.json`)
3. **Désactiver** le déploiement production automatique sur push `main` — la prod passe par Actions + Release
4. Préférer les previews via Actions (ci.yml) ; sinon activer preview Git pour `develop` / PR uniquement
5. `vercel link` en local → récupérer `orgId` / `projectId` → renseigner les 3 secrets Actions

## Flux Gitflow rappel

`feature/*` → PR → `develop` (CI build + preview Vercel) → `release/x.y.z` → `main` → tag + Release → prod Vercel.
