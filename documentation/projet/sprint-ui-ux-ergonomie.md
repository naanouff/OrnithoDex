# Sprint — UI / UX / ergonomie (passe critique 0.2.0)

**Branche** : `feature/ui-ux-ergonomie` → PR vers `develop`  
**Dates** : 2026-10-11 → …  
**Réf.** : [plan-ui-ux-ergonomie.md](plan-ui-ux-ergonomie.md)

## Objectif

Livrer les 4 lots du plan dans l’ordre (quiz → fiche → collection → séries), en capturant chaque écran touché à 390 px avant/après.

## Périmètre

| # | Lot | Tâche | DoD |
|---|-----|--------|-----|
| 1 | Quiz fiable | Stimulus non écrasé ; indice contraste sans markdown brut ; barre score ; focus « suivante » ; retour fiche → quiz | Photo stable après réponse ; indice utile ou absent ; « ← Quiz » + swipe off |
| 2 | Fiche lisible | Header compact ; badges points ; « En savoir plus » ; flèches clavier | Nom visible sans scroll ; jargon masqué ; sections repliées ; ← → OK |
| 3 | Collection rapide | Reveal 1ʳᵉ rangée ; lazy ; recherche accents ; compteur/clear ; famille ; 4 cols lisibles | Plus de wait 85/85 ; « inseparable » trouve ; famille filtre |
| 4 | Séries + bilan | Effectifs modes ; série 10/20 ; compteur ; bilan + rejouer ratées ; reset score | Fin de série claire ; liens fiches seulement |

## Hors sprint

- Nouveaux modes de quiz / PWA / comptes
- Contenu biologique des fiches
- Redesign logo / hero accueil
- Boutons prev/next visibles sur fiche (interdit — swipe)

## Checklist d’exécution

### Préparation

- [x] Plan consigné ([plan-ui-ux-ergonomie.md](plan-ui-ux-ergonomie.md))
- [x] Sprint + index docs + journal
- [x] Branche `feature/ui-ux-ergonomie` depuis `develop`

### Lot 1 — Quiz fiable

- [x] `.stimulus { flex-shrink: 0 }` + score `nowrap` + « ← Modes » à gauche
- [x] `src/lib/text.tsx` (`renderInlineMarkdown`) partagé fiche / quiz
- [x] Indice = contraste uniquement ; sinon rien
- [x] Focus → « Question suivante »
- [x] `location.state.from` → « ← Quiz » ; swipe désactivé
- [ ] Capture 390 px quiz (avant/après réponse)

### Lot 2 — Fiche lisible

- [x] Hauteur illustration ~45 vh max
- [x] Badges programme / sourcé (icône + a11y) ; titres sources courts
- [x] `<details>` « En savoir plus » (fermé)
- [x] Flèches clavier → prev/next (pas de chrome)
- [ ] Capture 390 px fiche (premier viewport + détails)

### Lot 3 — Collection rapide

- [x] Reveal dès 1ʳᵉ rangée ; lazy hors 2 rangées
- [x] Recherche NFD ; compteur ; clear
- [x] Filtre Famille
- [x] 4 cols : pastille ordre masquée ; nom ≥ 0,75 rem
- [ ] Capture 390 px collection (2 + 4 cols)

### Lot 4 — Séries et bilan

- [x] Effectifs sur [TrainingPage](../../src/pages/TrainingPage.tsx)
- [x] Série 10 / 20 + compteur `k / N` + sans doublon
- [x] Écran bilan + « Rejouer les ratées »
- [x] Reset score cumulé depuis Entraînement
- [ ] Capture 390 px bilan

### Clôture

- [x] `npm run build`
- [ ] Parcours : Collection → Fiche → Quiz → Revoir fiche → retour Quiz
- [ ] Sync [design.md](design.md) si specs figées
- [ ] PR vers `develop`

## Vérification

- Captures téléphone 390 px par lot.
- Zéro fait inventé dans le bilan / indices (uniquement points de cours ou noms déjà en dataset).
- Respect swipe : pas de boutons prev/next sur fiche.
