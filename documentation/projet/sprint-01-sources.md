# Sprint 01 — Collecte de sources (lot pilote)

**Projet** : OrnithoDex  
**Dates** : démarrage 2026-10-10  
**Objectif** : mettre en place le dispositif de collecte et documenter le **lot pilote** (Galliformes + Ansériformes, 6 espèces) selon le [plan sources](plan-sources.md).

## But du sprint

1. Figer le **catalogue** des sources publiques approuvées.
2. Initialiser le **suivi** des 85 spécimens du programme TCVA.
3. Enrichir les **6 fiches pilotes** (texte sourcé + liens médias) pour valider la méthode.
4. Mettre à jour le **registre Sources** du README racine.

## Périmètre

| Inclus | Exclu |
|--------|--------|
| Identité programme (déjà faite) | Polycopié / points de cours |
| Description, dimorphisme, habitat, régime (si sourçable) | Scaffold app |
| Liens image Commons + audio Xeno-canto (crédits) | Copie locale dans `public/` |
| 6 espèces pilotes enrichies | Les 79 autres (squelette + suivi `manquant`) |

## Espèces du lot pilote

| Slug | Nom scientifique | Nom commun |
|------|------------------|------------|
| `coturnix-chinensis` | Coturnix chinensis | Caille peinte de Chine |
| `gallus-gallus-domesticus` | Gallus gallus domesticus | Poule domestique |
| `colinus-virginianus` | Colinus virginianus | Colin de Virginie |
| `callipepla-californica` | Callipepla californica | Colin de Californie |
| `aix-galericulata` | Aix galericulata | Canard mandarin |
| `aix-sponsa` | Aix sponsa | Canard carolin |

Note taxonomique : *Coturnix chinensis* est souvent traitée comme *Synoicus chinensis* (ex-caille peinte) — vérifier sur Avibase / IUCN et documenter le synonyme sans inventer.

## Definition of Done (sprint 01)

- [x] [`catalogue-sources.md`](../ornithologie/catalogue-sources.md) publié
- [x] [`suivi-sources.md`](../ornithologie/suivi-sources.md) initialisé (85 lignes)
- [x] 6 fiches pilotes en statut `partielle`
- [x] README : sources génériques + crédits médias retenus
- [x] Entrée journal du lot pilote

### Limites assumées du lot pilote

- Audio : pages espèce Xeno-canto liées ; **pas encore** d’enregistrement individuel créditée (protection anti-bot à la collecte).
- Dimorphisme / régime : souvent absents des fiches BirdLife → laissés vides (sauf colin de Virginie : régime).
- Habitat du colin de Californie : à compléter (chargement partiel BirdLife).

## Sprint suivant (aperçu)

**Sprint 02** — Columbiformes (6 espèces), même méthode.
