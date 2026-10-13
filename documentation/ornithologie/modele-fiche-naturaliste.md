# Modèle — Fiche du naturaliste

Chaque espèce a un fichier `fiches-naturaliste/{slug}.md` calqué sur ce gabarit.

Les sections sans source restent **vides** (ne pas inventer). Méthode : [plan-sources.md](../projet/plan-sources.md).  
Écart vs fiche scolaire TCVA : [audit-template-fiche-scolaire.md](../projet/audit-template-fiche-scolaire.md) · alignement : [sprint-alignement-template-scolaire.md](../projet/sprint-alignement-template-scolaire.md).

## Statuts

| Statut | Signification |
|--------|---------------|
| `liste_seule` | Identité programme uniquement |
| `partielle` | Au moins un champ texte ou un média sourcé |
| `complete` | Description, dimorphisme, habitat, régime, comportement, chant (fichier XC), médias (image+audio) tous `ok` ou `na` justifié. **Points de cours** peuvent rester en attente. |

```markdown
# {Nom commun}

- **Slug** : `{slug}`
- **Statut documentation** : `liste_seule` | `partielle` | `complete`
- **Dernière vérification** : YYYY-MM-DD

## Identité

| Champ | Valeur | Source |
|-------|--------|--------|
| Nom scientifique | … | bac-pro-tcva-liste |
| Nom commun | … | bac-pro-tcva-liste |
| Ordre | … | bac-pro-tcva-liste |
| Famille | … | bac-pro-tcva-liste |

## Description

<!-- Texte uniquement si sourcé. Sinon laisser vide. -->

## Dimorphisme sexuel

## Habitat d’origine

## Répartition sauvage

<!-- Optionnel. Uniquement régions/pays déjà sourcés (BirdLife / IUCN). Sinon laisser vide. -->

| Champ | Valeur | Source |
|-------|--------|--------|
| Régions / pays | … | … |
| Hémisphère / realm | AF \| AU \| AS \| AM \| EU \| multi \| na | … |
| Note | … | … |

## Régime alimentaire

## Comportement

## Chant et vocalisations

<!-- Préférer 1 enregistrement Xeno-canto précis (URL fichier + crédit), pas seule la page espèce. -->

## Points de cours à retenir

<!-- Aides à la mémorisation (pas un polycopié enseignant). Chaque puce : programme | sourcé. Charte : pedagogie.md -->

- **[programme]** Nom commun ↔ binôme ; ordre ; famille
- **[programme]** Confusion fréquente : … (même genre / noms proches / même famille dans le référentiel)
- **[sourcé]** … (uniquement si la section amont est remplie et sourcée)

## Médias

| Type | Fichier / URL | Crédit / licence | Source README |
|------|--------------|------------------|---------------|
| Image | URL Commons ou `/images/birds/{slug}.webp` | auteur — licence | media-{slug}-img |
| Audio | URL enregistrement Xeno-canto | auteur — licence | media-{slug}-audio |

## Sources

| Id | Titre | Éditeur / auteur | Année | URL | Note |
|----|-------|------------------|-------|-----|------|
| bac-pro-tcva-liste | Liste des oiseaux – BAC PRO TCVA (MP6) | Support de cours / arrêtés 02/07/2009 + domestiques | 2009 | | Identité programme |
```
