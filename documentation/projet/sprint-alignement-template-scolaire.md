# Sprint — Alignement template fiche scolaire (Lot A pilote + Lot B)

**Branche** : `feature/alignement-template-scolaire` → PR vers `develop`  
**PR** : https://github.com/naanouff/OrnithoDex/pull/61  
**Dates** : préparation 2026-10-13 ; exécution à lancer (docs consignées)  
**Réf.** : [audit-template-fiche-scolaire.md](audit-template-fiche-scolaire.md) · [plan-alignement-template-scolaire.md](plan-alignement-template-scolaire.md) · [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md) · [plan-planisphere-fiche.md](plan-planisphere-fiche.md)

## Objectif

Étendre le gabarit aux champs scolaires **sourçables**, piloter sur 12 espèces (dont le colin de Virginie du template), et traiter le backlog dimorphisme (22). **Pas** de captivité / CITES inventés.

## Périmètre

| Inclus | Exclu |
|--------|-------|
| Mise à jour modèle fiche (UICN, taille, longévité optionnels) | Alimentation en captivité |
| Table `Répartition sauvage` remplie quand regions déjà connues | Conseils captivité |
| Extraction UICN dédiée (12 pilotes) | Compatibilité autres espèces |
| Dimorphisme : 22 slugs → `ok` ou `na` sourcé | CITES (sauf si source déjà en fiche) |
| `npm run data:birds` + affichage fiche si champ rempli | Remplir les 85 pour taille/longévité |
| Suivi `suivi-template-scolaire.md` | Quiz sur nouveaux champs |

## Espèces pilotes (Lot A — 12)

| Slug | Nom |
|------|-----|
| `coturnix-chinensis` | Caille peinte de Chine |
| `gallus-gallus-domesticus` | Poule domestique |
| `colinus-virginianus` | Colin de Virginie |
| `callipepla-californica` | Colin de Californie |
| `aix-galericulata` | Canard mandarin |
| `aix-sponsa` | Canard carolin |
| `geopelia-cuneata` | Colombe diamant |
| `geopelia-striata` | Colombe zébrée |
| `oena-capensis` | Tourterelle masque de fer |
| `streptopelia-senegalensis` | Colombe maillée |
| `streptopelia-risoria` | Tourterelle rieuse |
| `columba-livia` | Pigeon biset |

## Tâches

### 1. Gabarit + parseur

1. Étendre [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md) :

```markdown
## Statut UICN

| Champ | Valeur | Source |
|-------|--------|--------|
| Catégorie | … | … |
| Année évaluation | … | … |

## Mensurations

| Champ | Valeur | Source |
|-------|--------|--------|
| Taille adulte | … ou na | … |
| Longévité | … ou na | … |
```

2. Mettre à jour [`scripts/build-birds.mjs`](../../scripts/build-birds.mjs) + [`src/types/bird.ts`](../../src/types/bird.ts) pour exposer ces champs optionnels.
3. Afficher dans [`BirdSheetPage.tsx`](../../src/pages/BirdSheetPage.tsx) **uniquement** si valeur non vide / non `na`.

### 2. Contenu pilote (12)

Pour chaque slug pilote :

4. Créer / remplir **Statut UICN** à partir des faits déjà présents (BirdLife) — reformulation, pas nouveau fait.
5. Remplir **Répartition sauvage** si régions déjà documentées (Description / Habitat / wildRange).
6. **Mensurations** : remplir seulement si ADW/BirdLife le dit déjà dans les sources consultées ; sinon `na`.
7. Mettre à jour le registre README si nouvelle source.

### 3. Lot B — Dimorphisme (22)

8. Pour chaque slug de la liste audit : relecture ADW / BirdLife → phrase sourcée **ou** `na` explicite (« Non détaillé dans les sources consultées »).
9. Pas d’invention de dimorphisme.

### 4. Suivi + data

10. Créer [`suivi-template-scolaire.md`](../ornithologie/suivi-template-scolaire.md) (colonnes : uicn, taille, longevite, repartition, dimorphisme, captivite=`hors_perimetre`).
11. `npm run data:birds` ; vérifier build TypeScript.

## Checklist Definition of Done

- [ ] Gabarit + types + parseur + UI (champs optionnels)
- [ ] 12 fiches pilotes : UICN dédié + répartition si possible + mensurations `ok`/`na`
- [ ] 22 dimorphismes traités (`ok` ou `na` justifié)
- [ ] `suivi-template-scolaire.md` initialisé
- [ ] Journal + liens docs
- [ ] PR vers `develop`

## Suite après ce sprint

- Étendre UICN / répartition aux 73 restantes
- Lot C captivité / CITES uniquement avec catalogue de sources animalerie validé
