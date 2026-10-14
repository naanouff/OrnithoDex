# Plan — Recherche sourcée des champs absents du cours

Consigné le **2026-10-14**.  
Le polycopié TCVA ne donne pas taille, longévité, morphologie, CITES, alimentation, conseils ni compatibilité : l’élève doit les chercher. OrnithoDex fait la même collecte, avec une source nommée pour chaque fait.  
État : [suivi-template-scolaire.md](../ornithologie/suivi-template-scolaire.md). Sprint : [sprint-recherche-champs-scolaires.md](sprint-recherche-champs-scolaires.md).

## Verdict

UICN structuré **85/85**. Taille **24/85**, longévité **15/85**. CITES, morphologie dédiée, alimentation en captivité, conseils et compatibilité : vides. L’écran les affiche encore en dur (`value={null}`) dans [BirdSheetPage.tsx](../../src/pages/BirdSheetPage.tsx).

## Règle

Un fait entre dans la fiche seulement s’il est reformulé depuis une source nommée, avec URL et date. Wikipedia, blogs et forums animalerie ne sont pas une source unique ([catalogue-sources.md](../ornithologie/catalogue-sources.md)). Si la base consultée ne dit rien : `na` et « Non documenté — bases consultées le … ». La recherche est tracée ; le champ n’est pas inventé.

Le régime sauvage déjà écrit ne va **jamais** dans « alimentation en captivité ». Le paragraphe de statut UICN n’est **pas** une description morphologique.

## Sources à adopter avant d’écrire

À ajouter au catalogue, à [sources.md](../ornithologie/sources.md) et au README, puis URL espèce dans chaque fiche.

| Champ | Source | Usage |
|-------|--------|--------|
| CITES | Checklist CITES / Species+ (UNEP-WCMC) | Annexe I, II, III ou « non inscrit » |
| Taille, morphologie | BirdLife (identification) ou ADW (*Physical Description*) | Phrase déjà publiée, pas le texte de statut |
| Longévité | AnAge en priorité ; ADW si le chiffre est qualifié sauvage ou captivité | Pas une durée d’animalerie |
| Alimentation, conseils, compatibilité | Guide EAZA / AZA, article ou ouvrage cité | Une consigne nommée, sinon `na` |

## Gabarit et écran

Étendre [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md) : Morphologie, Statut CITES, Alimentation en captivité, Conseils captivité, Compatibilité (valeur + source, ou `na`).

Brancher [build-birds.mjs](../../scripts/build-birds.mjs). Remplacer les `value={null}` de la fiche. Une case sans source reste « Non documenté ».

## Exécution

1. Pilote : 12 espèces du template, colin de Virginie en premier.
2. Ensuite lots de 6 sur les 73 restantes.
3. Suivi : colonnes cites, morphologie, taille, longevite, captivite, conseils, compatibilite.

## Hors scope

- Quiz sur ces champs
- Inventer une ration, un conseil ou une compatibilité
- Grille A4 du polycopié

## Documents liés

- [Sprint](sprint-recherche-champs-scolaires.md)
- [Audit template](audit-template-fiche-scolaire.md)
- [Plan alignement données](plan-alignement-template-scolaire.md)
- [Plan fiche gabarit](plan-fiche-gabarit-cours.md)
- [Catalogue sources](../ornithologie/catalogue-sources.md)
