# Sprint — Swipe entre fiches du naturaliste

**Branche** (après validation maquette) : `feature/swipe-fiches` → PR vers `develop`  
**Dates** : 2026-10-11 → …  
**Réf.** : [plan-swipe-fiches.md](plan-swipe-fiches.md)

## Objectif

Parcourir les fiches par swipe horizontal sans revenir à Collection, en respectant la liste filtrée.

## Gate design (bloquant)

Aucune intégration React tant que la **proposition maquette** n’est pas **validée explicitement** par le propriétaire.

| Livrable maquette | Statut |
|-------------------|--------|
| Prototype interactif : swipe + index `n / N` | **Validé** 2026-10-11 — [`maquettes/prototype.html`](maquettes/prototype.html) |
| Spec écrite fiche (design.md) | **Validée** (geste + index ; pas de « Glisser ») |
| Capture `fiche.png` | Re-capturer quand l’index est figé en app |

## Périmètre

| # | Phase | Tâche | DoD |
|---|--------|--------|-----|
| 0 | **Maquette** | Étendue prototype + docs design | Geste jouable ; hint ; parcours = liste filtrée ; **validation propriétaire** |
| 1 | Contexte | Persister ids filtrés Collection → `sessionStorage` | Ouverture carte écrit `ornithodex.browse.ids` |
| 2 | Gesture | Prev/next + touch sur `BirdSheetPage` | Swipe change d’espèce ; `replace: true` ; extrémités no-op |
| 3 | Polish | Seuils scroll, `aria-live`, fallback catalogue | Deep link OK ; build vert |
| 4 | Sync | PNG + `design.md` + journal + PR | Référentiel = app |

## Hors sprint

- Carousel multi-slides / Embla
- Flèches desktop (sauf si maquette validée les ajoute)
- Filtre famille
- Nouvelle campagne Meshy / prompts

## Checklist d’exécution

### Phase 0 — Maquette

- [x] Plan consigné ([plan-swipe-fiches.md](plan-swipe-fiches.md))
- [x] Prototype : swipe gauche/droite sur fiche (liste filtrée)
- [x] Pas de chrome « Glisser » ; index `n / N` conservé / rétabli
- [x] Spec dans [design.md](design.md)
- [x] **Validation propriétaire** (fonctionnel + index, 2026-10-11)

### Phases 1–4 — App

- [x] Branche `feature/swipe-fiches` depuis `develop`
- [x] `lib/browse.ts` + écriture contexte depuis Collection
- [x] Gesture + navigate sur fiche (`useSheetBrowseSwipe`)
- [x] Polish a11y / extrémités / fallback + index `n / N`
- [x] `npm run build` + journal
- [ ] PR vers `develop`

## Notes maquette (validées)

- **Swipe gauche** (doigt vers la gauche) → espèce **suivante** dans la liste filtrée
- **Swipe droite** → espèce **précédente**
- Seuil ≈ 60 px ; ignore si scroll vertical dominant
- Aux extrémités : pas de boucle
- Indicateur `n / N` (position dans la liste filtrée)
- **Aucun** libellé « Glisser » ni boutons prev/next
- Retour « ← Collection » inchangé
- App React : touch ; flèches clavier hors scope
