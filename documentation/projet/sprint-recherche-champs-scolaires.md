# Sprint — Recherche champs scolaires (catalogue + gabarit + pilote 12)

**Branche** : `feature/recherche-champs-scolaires` → PR vers `develop`  
**Dates** : préparation 2026-10-14 ; exécution → …  
**Réf.** : [plan-recherche-champs-scolaires.md](plan-recherche-champs-scolaires.md)

## Objectif

Adopter les bases primaires, brancher les cases encore vides en dur, puis remplir le pilote 12 (colin de Virginie en premier) uniquement avec des faits cités.

## Périmètre

| Inclus | Exclu |
|--------|-------|
| Catalogue : CITES, AnAge, règle husbandry (EAZA / AZA / article / ouvrage) | Wikipedia, blogs, forums animalerie comme source unique |
| Sections fiche + parseur + `BirdSheetPage` | Quiz sur ces champs |
| Pilote 12, `na` tracé si la base ne dit rien | Lots 73 (sprint suivant) |
| `npm run data:birds` + suivi | Recopier le régime sauvage dans l’alimentation captive |

## Espèces pilotes

Mêmes 12 que [sprint-alignement-template-scolaire.md](sprint-alignement-template-scolaire.md) : `colinus-virginianus` en premier, puis `coturnix-chinensis`, `gallus-gallus-domesticus`, `callipepla-californica`, `aix-galericulata`, `aix-sponsa`, `geopelia-cuneata`, `geopelia-striata`, `oena-capensis`, `streptopelia-senegalensis`, `streptopelia-risoria`, `columba-livia`.

## Tâches

1. Ajouter les sources au [catalogue](../ornithologie/catalogue-sources.md), à [sources.md](../ornithologie/sources.md) et au README.
2. Étendre le [modèle de fiche](../ornithologie/modele-fiche-naturaliste.md) : Morphologie, Statut CITES, Alimentation en captivité, Conseils captivité, Compatibilité.
3. Parser ces sections dans [build-birds.mjs](../../scripts/build-birds.mjs) ; afficher la valeur dans [BirdSheetPage.tsx](../../src/pages/BirdSheetPage.tsx), sinon « Non documenté ».
4. Pour chaque pilote : CITES (checklist), taille / morphologie (BirdLife ou ADW), longévité (AnAge ou ADW qualifié), élevage seulement si une consigne est nommée. Sinon `na` + bases consultées et date.
5. Mettre à jour [suivi-template-scolaire.md](../ornithologie/suivi-template-scolaire.md). `npm run data:birds`.

## Checklist

- [ ] Plan lu
- [ ] Sources adoptées (catalogue + README)
- [ ] Gabarit + parseur + écran
- [ ] 12 pilotes traités (fait cité ou `na` tracé)
- [ ] Suivi + journal
- [ ] `npm run data:birds` + PR vers `develop`

## Suite

Lots de 6 sur les 73 espèces restantes, même barre de source.

## Documents liés

- [Plan](plan-recherche-champs-scolaires.md)
- [Suivi](../ornithologie/suivi-template-scolaire.md)
- [Audit](audit-template-fiche-scolaire.md)
