# Sprint — Focus tête des photos

**Branche** : travail en cours (outil local) → PR dédiée vers `develop`  
**Dates** : 2026-10-10  
**Réf.** : [plan-image-focus.md](plan-image-focus.md)

## Objectif

Outil local de labellisation **bbox + tête** + crop intelligent en lecture seule (fiche / quiz).

## Périmètre

| # | Tâche | DoD |
|---|--------|-----|
| 1 | `src/data/image-focus.json` schéma `{ head, bbox }` | Versionné |
| 2 | `imageFocus.ts` + `BirdImage` crop | BBox → zoom ; fallback cover+tête |
| 3 | `tools/image-focus/` modes BBox / Tête | Glisser + clic + save |
| 4 | Zéro route app | Vérifié |
| 5 | Docs + journal | Liens OK |

## Checklist

- [x] Plan consignré (bbox + tête)
- [x] JSON + helper + BirdImage crop
- [x] Outil local (modes BBox / Tête)
- [x] `tsc -b` OK
- [x] Journal
- [x] Labellisation des photos (contenu) — **85/85** bbox + tête
- [ ] PR vers `develop`

## Notes

- Collection = illustrations → focus surtout utile pour fiche / quiz
- Fallback : `center 12%`
