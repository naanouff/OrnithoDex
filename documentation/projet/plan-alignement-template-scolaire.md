# Plan — Alignement template fiche scolaire

Document de référence consigné le **2026-10-13**. Issu de [audit-template-fiche-scolaire.md](audit-template-fiche-scolaire.md).  
Exécution découpée en sprints ; premier : [sprint-alignement-template-scolaire.md](sprint-alignement-template-scolaire.md).

## Objectif

Rapprocher les fiches OrnithoDex du **template scolaire TCVA** (seconde pro) sans inventer de biologie ni de consignes captivité non sourcées.

## Principes

1. **Zéro invention** — captivité / CITES / taille / longévité uniquement si source validée.
2. **Champs structurés** plutôt que faits noyés dans `Description`.
3. **Compatibilité avec l’existant** — ne pas casser le statut `complete` naturaliste ; nouveaux champs = optionnels (`ok` / `na` / `manquant` dans un suivi dédié).
4. **UI** : n’afficher un champ que s’il est rempli (charte [pedagogie.md](pedagogie.md)).

## Lots

### Lot A — Gabarit + extraction (sprint 1)

Étendre [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md) avec sections optionnelles :

| Champ | Format | Source typique |
|-------|--------|----------------|
| Statut UICN | table : catégorie + année + source | BirdLife / IUCN (déjà souvent dans Description) |
| Taille adulte | texte court + unité + source | ADW / monographies si présentes |
| Longévité | texte court + source | ADW si présent |
| Répartition sauvage | table déjà prévue — la **remplir** | BirdLife (lié [plan-planisphere-fiche.md](plan-planisphere-fiche.md)) |

Pilote : **12** espèces Galliformes / Ansériformes / Columbiformes (dont colin de Virginie).

### Lot B — Dimorphisme backlog (22)

Relecture ADW / BirdLife pour les 22 slugs listés dans l’audit → `ok` ou `na` justifié (pas de silence ambigu).

### Lot C — Captivité / CITES / compatibilité (plus tard)

Nouveau lot **sources animalerie** (ouvrages / fiches CITES officielles). Hors sprint 1. Ne pas inventer à partir du template vide.

## Hors périmètre global

- Remplir le template papier PDF
- Inventer mélanges de graines « conseillés »
- Quiz sur les nouveaux champs tant qu’ils ne sont pas massivement remplis

## Critères de done (plan)

- [ ] Gabarit étendu documenté
- [ ] Suivi couverture template (colonnes) dans un tableau ou `suivi-template-scolaire.md`
- [ ] Sprint 1 livré (Lot A pilote + début Lot B)
- [ ] Lots C cadrés sans exécution forcée
