# Cahier des charges

Issu du cadrage **OrnithoDex** (cartes ornithologie) et des décisions consignées dans le [plan](plan.md).

## 1. Contexte et objectifs

Faciliter l’apprentissage et la mémorisation des espèces d’oiseaux de cage et de volière du programme MP6 – Ornithologie, pour les élèves de **seconde pro** du BAC PRO **Technicien conseil vente en animalerie** (TCVA).

Deux volets complémentaires (le volet physique est **hors V1** du site) :

1. Jeu de cartes physique (type cartes à collectionner) — *hors périmètre développement V1*
2. Version numérique (site) : cartes, fiches du naturaliste, audio, quiz — **périmètre V1**

## 2. Public cible

- **Prioritaire** : élèves de **seconde professionnelle** — BAC PRO **Technicien conseil vente en animalerie** (TCVA)
- Usage principal : **smartphone en portrait**
- Secondaire : autres niveaux TCVA ; toute personne souhaitant identifier ces espèces

## 3. Version physique (hors V1 site)

Référence pour la cohérence visuelle des cartes numériques :

- Format type carte à jouer (~63 × 88 mm)
- **Recto** : nom commun, **illustration** naturaliste (collection), codes couleur ordre / famille ; la **photo** sourcée reste sur la fiche / quiz
- **Verso** : nom scientifique, commun, ordre, famille, caractéristiques à retenir
- Livrables futurs : PDF HD, impression carton

## 4. Version numérique (V1)

### 4.1 Fonctionnalités

| Fonction | Description |
|----------|-------------|
| Collection | Galerie / défilement des cartes |
| Fiche du naturaliste | Détail espèce ; faits sourcés ; sources visibles |
| Audio | Bouton de lecture par espèce (si fichier présent) |
| Recherche / filtres | Nom, ordre, famille |
| Quiz | Photo → nom ; chant → espèce |

### 4.2 Contraintes qualité

- Mobile-first portrait ; PWA minimale (écran d’accueil)
- Interdiction d’inventer des données biologiques
- Toutes les sources listées dans le README racine

### 4.3 Évolutions possibles (après V1)

- PDF cartes physiques
- Autres modes quiz
- Enrichissement massif des fiches sourcées

## 5. Données

- 5 ordres, familles et ~85 espèces du guide programme
- Image et son par espèce (placeholders jusqu’à fourniture des assets)
- Fiches Markdown sous `documentation/ornithologie/fiches-naturaliste/`

## 6. Livrables V1

- Site statique déployé sur Vercel (prod via Release)
- Documentation projet + métier
- README open source avec registre des sources
- Repo GitHub public (Gitflow `main` / `develop`)
