# Sprint — UI/UX équivalente à la maquette

**Branche** : `feature/ui-equiv-maquette-impl` → PR vers `develop`  
**Dates** : 2026-10-10  
**Réf.** : [plan-ui-equiv-maquette.md](plan-ui-equiv-maquette.md)

## Objectif

Porter le chrome Livrable B (PNG + prototype) dans l’app React — **zéro écart** de structure / contrôles / copy UI.

## Périmètre

| # | Tâche | DoD |
|---|--------|-----|
| 1 | Remettre `prototype.html` aligné PNG (chips, 2 cols, logo bob) | Plus de combo / cols / parallax hors référentiel |
| 2 | Extraire CSS → `src/styles/maquette.css` + shell type phone | Mêmes classes que le prototype |
| 3 | Réécrire Accueil / Collection / Fiche / Entraînement / Quiz + nav | DOM + copy = maquette ; photos réelles dans le chrome |
| 4 | Retirer UI hors maquette (`ParallaxLogo`, combo, toggle cols, `WildRangeMap` fiche) | Aucun contrôle inventé |
| 5 | Sync `design.md` + journal | Liens OK |
| 6 | `npm run build` + PR | CI verte |

## Hors sprint

- Nouvelle campagne de captures PNG
- Meshy / catalogue prompts
- Réafficher carte répartition avant maquette à jour

## Checklist d’exécution

- [x] Plan lu ([plan-ui-equiv-maquette.md](plan-ui-equiv-maquette.md))
- [x] Branche `feature/ui-equiv-maquette-impl` depuis `develop`
- [x] Prototype resynchronisé PNG
- [x] CSS extrait + shell (`stage` / `phone` / `screens` / `tabbar`)
- [x] Pages / composants 1:1
- [x] Purge UI hors maquette (`WildRangeMap`, filtre famille, CTA custom)
- [x] Build + journal + PR

## Notes

- Comparer écran par écran aux PNG avant merge
- Données `wildRange` : conservées dans le dataset, hors fiche jusqu’à maquette
- Stash local éventuel (`wip-before-ui-maquette-plan`) : ne pas réintégrer les contrôles inventés
