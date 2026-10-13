# Sprint — Fiche au gabarit de cours (maquette)

**Branche** : `feature/fiche-gabarit-cours` → PR vers `develop` (maquette d’abord ; React après validation propriétaire)  
**PR docs** : https://github.com/naanouff/OrnithoDex/pull/63  
**PR maquette** : https://github.com/naanouff/OrnithoDex/pull/64  
**Dates** : préparation 2026-10-13 ; exécution maquette 2026-10-13  
**Réf.** : [plan-fiche-gabarit-cours.md](plan-fiche-gabarit-cours.md)

## Objectif

Rattraper la fiche du prototype sur l’app, puis la réorganiser comme le polycopié TCVA — sans inventer les cases d’élevage.

## Gate

Maquette **validée** (PR #64) — portage React autorisé.

## Périmètre

| # | Tâche | DoD |
|---|--------|-----|
| 0 | Rattrapage | Fiche prototype = app actuelle, exemple Colin de Virginie (illustration, points, planisphère, audio, « En savoir plus », photo + crédit, sources, swipe, `n / N`) |
| 1 | Gabarit | Même ordre de cases que le polycopié ; paires courtes côte à côte ; photo grande ; case vide = « Non documenté » |
| 2 | Garde-fous | Régime sauvage hors « alimentation en captivité » ; Description statut hors « morphologie » ; UICN seulement si déjà écrit |
| 3 | Sync | `design.md` + recapture `fiche.png` + journal |
| 4 | Après validation | Portage React (hors ce gate) |

## Hors sprint

- Campagne taille / CITES / captivité
- Accueil, collection, quiz
- Grille A4 copiée telle quelle

## Checklist

### Maquette

- [x] Plan lu ([plan-fiche-gabarit-cours.md](plan-fiche-gabarit-cours.md))
- [x] Prototype fiche rattrapé sur l’app (Colin de Virginie)
- [x] Gabarit de cours empilé, cases vides « Non documenté »
- [x] Swipe + index conservés
- [x] Spec dans [design.md](design.md)
- [x] `fiche.png` recapturé
- [x] **Validation propriétaire**

### App (après validation)

- [x] Branche `feature/fiche-gabarit-cours` depuis `develop`
- [x] `BirdSheetPage` + `maquette.css`
- [ ] `npm run build` + PR → `develop`

## Espèce de démo

`colinus-virginianus` — déjà dans le prototype et dans les fiches.

## Documents liés

- [Plan](plan-fiche-gabarit-cours.md)
- [Audit](audit-template-fiche-scolaire.md)
- [Plan alignement données](plan-alignement-template-scolaire.md)
