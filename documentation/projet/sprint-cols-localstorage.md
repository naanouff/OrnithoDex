# Sprint — Densité Collection en `localStorage`

**Branche** : `feature/cols-localstorage` → PR vers `develop`  
**Dates** : 2026-10-11  
**Hors gate design** : pas de changement UI, uniquement la persistance.

## Objectif

Persister le nombre de colonnes de la grille Collection (`2` / `3` / `4`) dans **`localStorage`** pour survivre à la fermeture de l’onglet / du navigateur.

Aujourd’hui : `sessionStorage` (`ornithodex.collection.cols`).

## Périmètre

| # | Tâche | DoD |
|---|--------|-----|
| 1 | Lecture / écriture via `localStorage` | Préférence restaurée après reload + nouvel onglet même origine |
| 2 | Migration one-shot depuis `sessionStorage` | Ancienne valeur session récupérée puis clé session purgée |
| 3 | Sprint + journal | Docs à jour |
| 4 | `npm run build` + PR | CI verte |

## Hors sprint

- Persister recherche / filtre ordre
- Changer `sessionStorage` du parcours swipe (`ornithodex.browse.ids`) — volontairement session

## Checklist

- [x] Branche `feature/cols-localstorage`
- [x] `CollectionPage` → `localStorage` + migration
- [x] Journal + index docs
- [x] Build
- [ ] PR
