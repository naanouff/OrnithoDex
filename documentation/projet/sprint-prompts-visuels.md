# Sprint — Prompts visuels + carte hémisphère

**Branche** : `feature/prompts-visuels-cartes` → PR vers `develop`  
**Dates** : 2026-10-10  
**Réf.** : [plan-prompts-visuels.md](plan-prompts-visuels.md)

## Objectif

Livrer le catalogue de prompts (85 × 2), les données `wildRange` sourcées, et le fond d’hémisphère sur la fiche — **sans** générer encore les assets Meshy.

## Périmètre

| # | Tâche | DoD |
|---|--------|-----|
| 1 | `scripts/build-visual-prompts.mjs` + `npm run data:prompts` | 85 MD + `_index.md` |
| 2 | Gabarit fiche + type `wildRange` + extraction toponymes dans `build-birds.mjs` | Régénération `birds.ts` OK |
| 3 | SVG `public/maps/hemisphere-*.svg` | 3 fichiers légers, tokens DA |
| 4 | `WildRangeMap` sur `BirdSheetPage` | Affiche régions ou « Non documenté » |
| 5 | Docs (architecture, ornithologie README) + journal | Liens OK |
| 6 | `npm run build` + PR | CI verte |

## Hors sprint

- Génération des 85 illustrations / 85 GLB
- Complétion manuelle BirdLife de toutes les répartitions
- Alignement UI sur maquettes non validées

## Checklist d’exécution

- [x] Plan lu ([plan-prompts-visuels.md](plan-prompts-visuels.md))
- [x] Branche `feature/prompts-visuels-cartes` depuis `develop`
- [x] Script prompts + génération 85 fichiers
- [x] `wildRange` + gabarit
- [x] SVG + composant fiche
- [x] Build + journal + PR

## Notes

- Prompts EN ; en-tête FR
- Zéro invention biologique / géographique
- Les 4 sons XC « restricted » (médias) n’impactent pas ce sprint
