# Plan — Direction design OrnithoDex (charte puis maquettes)

Document de référence consigné le **2026-10-10**. Complète le [plan projet V1](plan.md) (section UI/UX). Toute évolution majeure doit mettre à jour ce fichier et une entrée du [journal](../journal/).

## Vue d’ensemble

Institutionnaliser le rôle d’**agent graphiste / designer / ergonome** : écrans simples et efficaces au service de la pédagogie (seconde pro TCVA). Livraison en deux temps — **charte + specs**, puis **maquettes** — ancrée sur le logo nanobanana retenu pour la direction artistique.

## Contexte retenu

- Produit : **OrnithoDex**, PWA pédagogique (collection cartes + fiche du naturaliste + quiz).
- Cible prioritaire : élèves **seconde pro** BAC PRO TCVA (Technicien conseil vente en animalerie), usage **smartphone portrait** (pouce) ; desktop = colonne centrée, pas la cible de design.
- Stack UI prévue : Vite / React / TypeScript / Tailwind CSS ([plan.md](plan.md)).
- App **pas encore scaffoldée** — livrable de cette passe = documentation design + images de maquettes, **pas** le code.
- Choix utilisateur : charte + specs d’abord, **puis** maquettes.

Voir aussi : [vision.md](vision.md), [cahier-des-charges.md](cahier-des-charges.md), [plan.md](plan.md) (UI/UX).

## Prérequis logo

Logo NanoBanana retenu ; brouillon local (gitignored) : `documentation/mocup/logo-ornithodex.svg` (VTracer haute fidélité ~2 Mo, fond retiré) + `logo-ornithodex-hq.png` (aperçu net). Auto-trace ≠ redraw manuel — pour prod, reprise Inkscape / export vectoriel amont si dispo. Versionnement officiel plus tard sous [`assets/`](assets/).

Analyse du logo → tokens (couleurs, contrastes, style illustration). DA ludique type Duolingo (navy / orange-jaune / sky / lime).

## Livrable A — Charte + specs

Créer [`design.md`](design.md) et le lier depuis [README projet](README.md) + [plan.md](plan.md) (section UI/UX).

Contenu de la charte :

1. **Positionnement** — outil de mémorisation animalerie, pas encyclopédie ni dashboard ; ton clair, confiant, accessible seconde pro.
2. **Identité** — logo comme signal de marque (accueil + favicon/PWA) ; nom **OrnithoDex** en hero sur l’accueil uniquement.
3. **Tokens** (variables CSS / Tailwind) — palette primaire dérivée du logo ; neutres lisibles ; accents **ordre** (5 codes couleur stables pour filtres / pastilles carte) ; états quiz (correct / incorrect / neutre) ; rayons, ombres légères, texture de fond discrète.
4. **Typo** — une display expressive (marque / titres d’écran) + une sans lisible (corps, quiz) ; pas Inter / Roboto / Arial par défaut.
5. **Composants** — carte espèce (recto ancrage photo + identité), pastilles ordre/famille, barre nav basse, boutons CTA pleine largeur, feedback quiz, bloc Sources (visible, non intrusif).
6. **Ergonomie** — zones ≥ 44 px ; 1 écran = 1 job ; quiz = 1 question + 4 réponses empilées ; recto = photo + identité ; verso / fiche = 3–5 points max.

### Specs des 4 écrans V1

| Écran | Job unique | Contenu prioritaire |
|-------|------------|---------------------|
| **Accueil** | Choisir le mode | Logo + marque, 1 phrase, 2 CTA : Collection / Entraînement |
| **Collection** | Trouver une espèce | Recherche, filtres Ordre / Famille, liste cartes colonne (max 2 sur grand téléphone) |
| **Fiche** | Mémoriser l’identité | Photo dominante, noms, ordre/famille, points de cours, audio si dispo, Sources |
| **Quiz** | S’entraîner | Stimulus (photo ou audio), 4 réponses, feedback immédiat, score discret |

Navigation basse : Accueil · Collection · Entraînement (3 onglets max).

## Livrable B — Maquettes

Après la charte (même passe, ordre strict) :

- Générer **4 maquettes portrait** (~390×844) : Accueil, Collection, Fiche, Quiz photo.
- Les enregistrer sous [`maquettes/`](maquettes/) et les référencer dans `design.md`.
- Pas de collage hero, pas de cards inutiles hors interaction ; photo espèce = ancrage réel sur Collection / Fiche / Quiz.

**Brouillons locaux** (ignorés par git, pour ne pas croiser les sprints) : `documentation/mocup/` — [`accueil-v0.html`](../mocup/accueil-v0.html) + `logo-ornithodex.svg` (JPG source conservé).

## Hors périmètre de cette passe

- Scaffold React / implémentation Tailwind
- PDF cartes physiques
- Maquettes desktop détaillées

## Critères de done

- [`design.md`](design.md) + asset logo sous `assets/` + 4 maquettes sous `maquettes/`
- Liens docs mis à jour ; entrée journal
- Cohérence avec vision / cahier des charges (mobile, rétention, sources visibles)

## Checklist d’exécution

- [ ] Récupérer le logo nanobanana, l’analyser (palette / style), le versionner sous `documentation/projet/assets/`
- [ ] Rédiger `design.md` (DA, tokens, composants, specs 4 écrans, ergonomie TCVA)
- [ ] Lier `design.md` depuis README projet + `plan.md` ; entrée journal
- [ ] Produire 4 maquettes portrait dans `documentation/projet/maquettes/`

## Documents liés

| Document | Rôle |
|----------|------|
| [plan.md](plan.md) | Feuille de route V1 + contraintes UI/UX |
| [vision.md](vision.md) | Problème / public / principes |
| [cahier-des-charges.md](cahier-des-charges.md) | Specs fonctionnelles (quiz, cartes) |
| [plan-sources.md](plan-sources.md) | Enrichissement naturaliste (médias) |
| [design.md](design.md) | Charte (à créer à l’exécution) |
