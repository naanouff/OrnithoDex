# Maquettes OrnithoDex (Livrable B)

Prototypes **portrait** (~390×844) alignés sur [design.md](../design.md).

| Fichier | Contenu |
|---------|---------|
| [prototype.html](prototype.html) | Prototype interactif (4 écrans + fiche + quiz photo + **swipe fiches**) |
| `accueil.png` | Capture Accueil |
| `collection.png` | Capture Collection |
| `fiche.png` | Capture Fiche du naturaliste *(hint swipe à re-capturer après validation)* |
| `quiz.png` | Capture Quiz photo → nom |

Logo dans le prototype / captures : [`../assets/logo-ornithodex.jpg`](../assets/logo-ornithodex.jpg) — SVG encore en amélioration ([`logo-ornithodex.svg`](../assets/logo-ornithodex.svg)) ; DA / tokens inchangés.

## Swipe entre fiches (validé)

Réf. [plan-swipe-fiches.md](../plan-swipe-fiches.md) · [sprint-swipe-fiches.md](../sprint-swipe-fiches.md).

1. Ouvrir le prototype → Collection → une carte
2. **Glisser** horizontalement (tactile ou souris) : gauche = suivante, droite = précédente
3. Le parcours suit les filtres / recherche actifs
4. Index discret `n / N` ; pas de libellé « Glisser »
5. **Statut** : maquette validée → intégration React (sprint phases 1–4)

Ouvrir le prototype (racine du repo — médias `/public/...`) :

```bash
npx --yes serve . -p 4173
# puis http://localhost:4173/documentation/projet/maquettes/prototype.html
# Démo gabarit : Collection → Colin de Virginie
```
