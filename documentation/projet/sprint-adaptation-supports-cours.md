# Sprint — Variétés domestiques (arrêté du 11 août 2006)

**Branche** : `feature/varietes-domestiques` → PR vers `develop`  
**Date** : préparation 2026-10-14  
**Réf.** : [plan-adaptation-supports-cours.md](plan-adaptation-supports-cours.md)

## Objectif

Afficher, sur les 85 fiches, la paraphrase de l’annexe oiseaux de l’arrêté du 11 août 2006. Une case, une source, aucun fait inventé.

## Périmètre

| Inclus | Exclu |
|--------|-------|
| Case **Variétés domestiques** après UICN \| CITES | Poids, reproduction, prix, taille de cage, cases à cocher de régime |
| Section Markdown + parseur + `SchoolSheet.domesticVarieties` | Quiz sur cette case |
| 85 paraphrases, source `arrete-11-aout-2006` | Nouvelle puce de cours |
| `arrete-11-aout-2006` exclu de `biologyIds` | Règles de détention des arrêtés du 02 juillet 2009 (textes absents) |
| `npm run data:birds` | Changer les noms programme (*domestiqua*, *roseicollis*, *Gallus gallus domesticus*) |

## Phrases

Le relevé à recopier est [cours/README.md](../ornithologie/cours/README.md).

- Quarante-six taxons : variétés ou races écrites dans l’annexe.
- *Cyanoramphus novaezelandiae* : sous-espèce *novaezelandiae* seulement.
- *Gallus gallus domesticus* : races du coq bankiva *Gallus gallus*.
- Moineau du Japon : variétés domestiques ; graphie de l’arrêté *Lonchura* « *domestica* ».
- Capucin domino : parent du moineau du Japon, pas une variété domestique.
- Trente-huit absents : « Non cité dans l’annexe oiseaux de l’arrêté du 11 août 2006. »

## Tâches

1. Étendre [bird.ts](../../src/types/bird.ts), [build-birds.mjs](../../scripts/build-birds.mjs) et [BirdSheetPage.tsx](../../src/pages/BirdSheetPage.tsx). La section ne va pas dans « En savoir plus ».
2. Exclure `arrete-11-aout-2006` de `biologyIds`.
3. Écrire `## Variétés domestiques` et la ligne de source sur les 85 fiches. Ajouter la section au [modèle](../ornithologie/modele-fiche-naturaliste.md).
4. `npm run data:birds`.
5. Vérifier à l’écran : `aix-sponsa`, `lonchura-striata-domestiqua`, `lonchura-striata`, `psittacus-erithacus`. Filtre Famille **Cacatuidés** : quatre espèces.

## Checklist

- [x] Plan lu
- [x] Type, parseur, écran
- [x] Arrêté exclu des points `[sourcé]`
- [x] 85 fiches (phrase + source)
- [x] `data:birds` + contrôle écran
- [x] PR vers `develop`

## Documents liés

- [Plan](plan-adaptation-supports-cours.md)
- [Relevé de l’arrêté](../ornithologie/cours/README.md)
- [Gabarit de fiche](plan-fiche-gabarit-cours.md)
