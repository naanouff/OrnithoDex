# Plan — Adaptation aux supports de cours

Consigné le **2026-10-14**.  
Sprint : [sprint-adaptation-supports-cours.md](sprint-adaptation-supports-cours.md).  
PDF : [cours/](../ornithologie/cours/README.md).

Les trois PDF sont déjà rangés. L’identité des 85 espèces est alignée, y compris **Cacatuidés**. Ce plan ne refait pas ce contrôle.

## Ce que les fichiers imposent

- La liste (`liste-oiseaux-bac-pro-tcva.pdf`) est déjà la source `bac-pro-tcva-liste`. Graphies conservées : *Lonchura striata domestiqua*, *Agapornis roseicollis*, *Gallus gallus domesticus*, « collier d'or ».
- Le formulaire ([fiche-oiseaux.pdf](../ornithologie/cours/fiche-oiseaux.pdf)) est vierge. Il n’y a aucun poids, aucune couvée, aucun prix à recopier.
- L’arrêté du 11 août 2006 est la source `arrete-11-aout-2006`. Il énumère des **variétés**, pas un statut « domestique / non domestique ». Quarante-six taxons ont une entrée. Le capucin domino n’est cité que comme parent du moineau du Japon. Trente-huit taxons sont absents de l’annexe oiseaux. Le relevé est dans [cours/README.md](../ornithologie/cours/README.md).
- Les arrêtés du 02 juillet 2009 cités en tête de liste ne sont pas dans les fichiers. Aucune règle de détention ne sera écrite à partir d’eux.

## Écran

La fiche smartphone reste celle du [plan gabarit](plan-fiche-gabarit-cours.md) : cases empilées, champ vide = « Non documenté », pas une grille A4. Objectif élève inchangé : identité, photo, chant ([pedagogie.md](pedagogie.md)).

Une case pleine largeur **Variétés domestiques**, après la paire UICN | CITES, dans [BirdSheetPage.tsx](../../src/pages/BirdSheetPage.tsx).

Hors écran (pas de nouvelle case vide) :

- poids, « Autres », cases granivore / insectivore / frugivore
- reproduction naturelle (période, nombre d’œufs, couvaison)
- comportement intra- et interspécifique séparés (le texte actuel reste « Comportement »)
- prix animalerie, prix internet, taille de cage, élevage des jeunes, reproduction en captivité

« Association » et « ne pas associer » restent la case Compatibilité. « Maintien » reste Conseils captivité. Ces cases gardent leur trace EAZA/AZA. L’arrêté de 2006 ne devient pas une ration.

## Contenu de la case

Section Markdown `## Variétés domestiques`, parsée comme les autres cases scolaires (`CitedField` dans `SchoolSheet`), sans entrer dans « En savoir plus ». Source unique : `arrete-11-aout-2006`.

- Entrée « variétés » ou « races et variétés » : une phrase, les noms de variétés tels qu’écrits dans l’annexe.
- Variétés énumérées : la liste courte déjà relevée (ex. canard carolin : blonde et blanche ; *Agapornis lilianae* : lutino seule).
- *Cyanoramphus novaezelandiae* : l’annexe vise la sous-espèce *novaezelandiae*, pas l’espèce entière du programme.
- *Gallus gallus domesticus* : l’annexe parle des races du coq bankiva *Gallus gallus*. Le nom programme ne change pas.
- Moineau du Japon : variétés domestiques du domino ; l’arrêté écrit *Lonchura* « *domestica* ». L’identité programme reste *Lonchura striata domestiqua*.
- Capucin domino : cité seulement comme parent, pas comme variété domestique.
- Absent de l’annexe : « Non cité dans l’annexe oiseaux de l’arrêté du 11 août 2006. » C’est un fait sur le texte. Ce n’est pas la phrase « espèce non domestique », et ce n’est pas le style « Non documenté ».

Dans [build-birds.mjs](../../scripts/build-birds.mjs), exclure `arrete-11-aout-2006` de `biologyIds`, comme `cites-appendices`. Sinon tous les points `[sourcé]` hériteraient de cet arrêté. Pas de nouvelle puce de cours : le plafond reste 3–5, et la case suffit.

Pas de quiz sur cette case.

## Fichiers

- [src/types/bird.ts](../../src/types/bird.ts) : `domesticVarieties` sur `SchoolSheet`.
- Parseur + filtre `biologyIds`.
- Écriture des 85 sections à partir du relevé déjà vérifié, puis `npm run data:birds`.
- Vérifier à l’écran : canard carolin, moineau du Japon, capucin domino, jaco. Le filtre Famille **Cacatuidés** reste sur les quatre cacatoès.
