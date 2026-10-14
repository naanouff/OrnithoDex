# Suivi — Alignement template scolaire

Valeurs : `ok` | `na` | `manquant` | `hors_perimetre`.  
Réf. : [audit-template-fiche-scolaire.md](../projet/audit-template-fiche-scolaire.md) · [sprint-alignement-template-scolaire.md](../projet/sprint-alignement-template-scolaire.md).  
Suite : [plan-recherche-champs-scolaires.md](../projet/plan-recherche-champs-scolaires.md) · [sprint-recherche-champs-scolaires.md](../projet/sprint-recherche-champs-scolaires.md).

## Pilotes Lot A (12) — 2026-10-13

| Slug | uicn | taille | longevite | repartition | dimorphisme | captivite |
|------|------|--------|-----------|-------------|-------------|-----------|
| coturnix-chinensis | ok | na | na | ok | ok | hors_perimetre |
| gallus-gallus-domesticus | ok | na | na | ok | ok | hors_perimetre |
| colinus-virginianus | ok | na | na | ok | ok | hors_perimetre |
| callipepla-californica | ok | na | na | ok | ok | hors_perimetre |
| aix-galericulata | ok | na | na | ok | ok | hors_perimetre |
| aix-sponsa | ok | na | na | ok | ok | hors_perimetre |
| geopelia-cuneata | ok | na | na | ok | na | hors_perimetre |
| geopelia-striata | ok | na | na | ok | na | hors_perimetre |
| oena-capensis | ok | na | na | ok | na | hors_perimetre |
| streptopelia-senegalensis | ok | na | na | ok | na | hors_perimetre |
| streptopelia-risoria | ok | na | na | ok | ok | hors_perimetre |
| columba-livia | ok | na | na | ok | ok | hors_perimetre |

## Lot B — Dimorphisme (22) — 2026-10-13

Tous passés en `na` explicite (« Non détaillé dans les sources consultées ») sauf s’ils étaient déjà remplis (aucun des 22 ne l’était).

`amadina-fasciata`, `euplectes-orix`, `geopelia-cuneata`, `geopelia-striata`, `gracula-religiosa`, `lonchura-striata-domestiqua`, `neophema-elegans`, `neophema-pulchella`, `neophema-splendida`, `oena-capensis`, `passer-luteus`, `platycercus-adscitus`, `platycercus-elegans`, `platycercus-eximius-eximius`, `platycercus-icterotis`, `ploceus-cucullatus`, `polytelis-alexandrae`, `polytelis-anthopeplus`, `psephotus-haematonotus-haematonotus`, `psittacula-cyanocephala`, `psittacula-eupatria`, `streptopelia-senegalensis`.

## Reste (après passe 2026-10-13)

| Champ | Résultat | Source |
|-------|----------|--------|
| UICN structuré | **85/85** | Phrase BirdLife déjà dans la Description — pas une nouvelle évaluation |
| Taille | **24** fiches (cm déjà écrit ou ADW) | BirdLife / ADW ; les autres restent `na` |
| Longévité | **15** fiches | ADW, libellé **sauvage** et/ou **captivité** |
| CITES, alimentation, conseils, compatibilité, morphologie dédiée | non remplis | Pas de source du catalogue qui donne ces faits sans les inventer |

Script : `scripts/apply-champs-manquants.mjs`. Les comptes ADW ajoutés ce jour sont dans la table Sources de la fiche (`Consulté 2026-10-13`).

## Pilote recherche — 2026-10-14

`ok` = fait cité. `trace` = case remplie par « Non documenté — bases consultées… », pas un fait. Script : `scripts/apply-recherche-pilote.mjs`.

| Slug | morphologie | taille | longevite | cites | captivite | conseils | compatibilite |
|------|-------------|--------|-----------|-------|-----------|----------|---------------|
| colinus-virginianus | ok | ok | ok | ok (espèce non inscrite ; *ridgwayi* Annexe I) | trace | trace | trace |
| coturnix-chinensis | ok | ok | ok | ok | trace | trace | trace |
| gallus-gallus-domesticus | ok (taxon sauvage) | ok (taxon sauvage) | ok (captivité, non prouvé) | ok | trace | trace | trace |
| callipepla-californica | ok | ok | ok (milieu non précisé) | ok | trace | trace | trace |
| aix-galericulata | ok | trace | ok | ok | trace | trace | trace |
| aix-sponsa | ok | ok | ok | ok | trace | trace | trace |
| geopelia-cuneata | trace | trace | ok (max. non établie) | ok | trace | trace | trace |
| geopelia-striata | trace | trace | ok | ok | trace | trace | trace |
| oena-capensis | trace | trace | trace | ok | trace | trace | trace |
| streptopelia-senegalensis | trace | trace | trace | ok | trace | trace | trace |
| streptopelia-risoria | ok (taxon sauvage) | ok (taxon sauvage) | ok | ok | trace | trace | trace |
| columba-livia | ok | trace | ok | ok | trace | trace | trace |

CITES : document [E-Appendices-2026-03-05](https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf). Les 12 taxons du programme n’y figurent pas ; seule la sous-espèce *Colinus virginianus ridgwayi* est en Annexe I, et *Gallus sonneratii* (autre espèce) en Annexe II.

Élevage : index [EAZA](https://www.eaza.net/bpg/) et [AZA](https://www.aza.org/animal-care-manuals) consultés le 2026-10-14, aucun guide nommé. Le régime sauvage n’a pas été recopié.

Comptes après ce pilote : taille chiffrée **26/85** ( + poule, taxon sauvage ; + tourterelle rieuse, taxon sauvage) ; longévité citée **24/85**. Les 73 espèces hors pilote ne sont pas encore passées.
