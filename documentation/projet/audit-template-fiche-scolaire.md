# Audit — Template fiche scolaire vs fiches OrnithoDex

Document de référence consigné le **2026-10-13**.  
Source template : fiche papier type « Colin de Virginie » (support scolaire TCVA).  
Suite données : [plan-alignement-template-scolaire.md](plan-alignement-template-scolaire.md) · [sprint-alignement-template-scolaire.md](sprint-alignement-template-scolaire.md).  
Suite écran : [plan-fiche-gabarit-cours.md](plan-fiche-gabarit-cours.md) · [sprint-fiche-gabarit-cours.md](sprint-fiche-gabarit-cours.md).

## Verdict

**Non conforme.** Les 85 fiches OrnithoDex ne disposent **pas** de toutes les informations attendues par le template scolaire. L’écart est surtout **structurel** (champs absents du [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md)), pas seulement un remplissage incomplet.

Exemple : [colinus-virginianus.md](../ornithologie/fiches-naturaliste/colinus-virginianus.md) couvre identité, description (UICN dans le texte), dimorphisme, habitat, régime sauvage, comportement, chant, photo — mais **pas** taille, longévité, CITES, alimentation / conseils / compatibilité en captivité, ni table « Répartition sauvage » renseignée.

## Champs du template scolaire

| # | Champ template | Présent dans le gabarit OrnithoDex ? |
|---|----------------|--------------------------------------|
| 1 | Nom commun (titre) | Oui — Identité |
| 2 | Nom scientifique | Oui — Identité |
| 3 | Description morphologique | Partiel — section `Description` (souvent UICN + traits, pas morphologie structurée) |
| 4 | Photo | Oui — Médias |
| 5 | Taille adulte | **Absent** |
| 6 | Longévité | **Absent** |
| 7 | Dimorphisme sexuel | Oui |
| 8 | Comportement général | Oui — `Comportement` |
| 9 | Habitat naturel | Oui — `Habitat d’origine` |
| 10 | Origine géographique (carte) | Partiel — `Répartition sauvage` + `wildRange` app ([plan-planisphere-fiche.md](plan-planisphere-fiche.md)) |
| 11 | Statut UICN | Non dédié (souvent dans Description) |
| 12 | Statut CITES | **Absent** |
| 13 | Alimentation en captivité (mélange / compléments) | **Absent** (régime = sauvage) |
| 14 | Conseils pour la captivité | **Absent** |
| 15 | Compatibilité avec d’autres espèces | **Absent** |

Extras OrnithoDex (hors template papier) : ordre, famille, points de cours, audio, sources visibles.

## Couverture mesurée (2026-10-13)

Script sur les 85 fichiers `fiches-naturaliste/*.md` (sections remplies = texte sourcé non « na / non détaillé »).

| Indicateur | Valeur |
|------------|--------|
| Total espèces | 85 |
| Description remplie | **85/85** |
| Habitat rempli | **85/85** |
| Comportement rempli | **85/85** |
| Chant rempli | **85/85** |
| Photo / audio en Médias | **85/85** |
| Dimorphisme rempli | **63/85** |
| Dimorphisme `na` / non détaillé | **22/85** (liste ci-dessous) |
| Régime alimentaire rempli | **~65/85** |
| Table `Répartition sauvage` MD | **0/85** |
| Mention UICN / IUCN dans le texte | **85/85** |
| Mention taille (cm…) | **11/85** |
| Mention longévité | **2/85** |
| Mention CITES | **2/85** |
| Contenu type captivité | **~1/85** |
| Compatibilité autres espèces | **0/85** |

### Dimorphisme non documenté (22)

`amadina-fasciata`, `euplectes-orix`, `geopelia-cuneata`, `geopelia-striata`, `gracula-religiosa`, `lonchura-striata-domestiqua`, `neophema-elegans`, `neophema-pulchella`, `neophema-splendida`, `oena-capensis`, `passer-luteus`, `platycercus-adscitus`, `platycercus-elegans`, `platycercus-eximius-eximius`, `platycercus-icterotis`, `ploceus-cucullatus`, `polytelis-alexandrae`, `polytelis-anthopeplus`, `psephotus-haematonotus-haematonotus`, `psittacula-cyanocephala`, `psittacula-eupatria`, `streptopelia-senegalensis`.

### Mentions fortuites (hors champ dédié)

| Champ | Slugs (échantillon / liste) |
|-------|-----------------------------|
| Taille (cm) | `agapornis-roseicollis`, `amandava-amandava`, `estrilda-astrild`, `gracula-religiosa`, `melopsittacus-undulatus`, `myiopsitta-monachus-monachus`, `neopsephotus-bourkii`, `nymphicus-hollandicus`, `poicephalus-senegalus`, `psittacus-erithacus`, `pyrrhura-molinae` |
| Longévité | `forpus-coelestis`, `psittacula-krameri-manillensis` |
| CITES | `lonchura-oryzivora`, `serinus-mozambicus` |
| Captivité | `serinus-canaria` |

## Règle d’intégrité

Aligné sur [pedagogie.md](pedagogie.md) et [sources.md](../ornithologie/sources.md) :

- **Interdit** de remplir taille, longévité, CITES, alimentation captivité, conseils captivité ou compatibilité **sans source** inscrite dans la fiche et le README racine.
- Champ sans source → vide / `na` / « Non documenté ».
- Le statut naturaliste `complete` actuel **ne couvre pas** le template scolaire.

## Documents liés

| Document | Rôle |
|----------|------|
| [plan-alignement-template-scolaire.md](plan-alignement-template-scolaire.md) | Plan d’alignement (champs sourçables d’abord) |
| [sprint-alignement-template-scolaire.md](sprint-alignement-template-scolaire.md) | Premier sprint d’exécution |
| [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md) | Gabarit actuel |
| [plan-planisphere-fiche.md](plan-planisphere-fiche.md) | Carte / répartition (déjà cadré) |
| [plan-sources.md](plan-sources.md) | Méthode d’enrichissement |
