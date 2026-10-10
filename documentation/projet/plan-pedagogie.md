# Plan — Cadre ingénieur pédagogue + points de cours

Document de référence consigné le **2026-10-10**. Exécution en deux livrables (cadre puis contenu). Toute évolution majeure doit mettre à jour ce fichier et une entrée du [journal](../journal/).

## Vue d’ensemble

Institutionnaliser le rôle d’**ingénieur pédagogue senior** (charte + règles Cursor + briefs archi / dev / design), puis combler les **« Points de cours à retenir »** à partir de la seule **liste programme** et des faits **déjà sourcés** — sans inventer de biologie ni de consignes d’examen absentes.

## Contexte retenu

- Public prioritaire : élèves de **seconde pro** BAC PRO **Technicien conseil vente en animalerie** (TCVA), MP6, smartphone ; objectif = **mémoriser ~85 espèces** (identité + ID visuelle / sonore).
- Matériel disponible : **liste des spécimens uniquement** (pas de polycopié enseignant). Les points de cours seront des **aides à la rétention** dérivées de l’identité programme + faits sourcés des fiches — explicitement **pas** des consignes d’un enseignant.
- État (après sprint 15 sources) : **85/85** fiches naturaliste en `complete` ; section « Points de cours » encore `attente` ; Livrable A (cadre) en cours / fait selon checklist ; app non scaffoldée.
- Ordre contenu (Livrable B) : pilote = les **12** premières (Galliformes / Ansériformes / Columbiformes), puis lots de ~6 sur le reste — même si toutes sont `complete` côté biologie.

Voir aussi : [vision.md](vision.md), [plan.md](plan.md), [plan-sources.md](plan-sources.md).

## Principes non négociables

1. **Zéro invention biologique** — aligné sur [plan.md](plan.md) et [sources.md](../ornithologie/sources.md).
2. **Points de cours = ancrage mémoriel**, pas encyclopédie : 3–5 puces max, langage élève, une idée par puce.
3. **Niveaux de confiance** marqués dans le gabarit :
   - `programme` : latin / commun / ordre / famille (source `bac-pro-tcva-liste`)
   - `sourcé` : reformulation courte d’un fait déjà écrit et sourcé dans la fiche
   - interdit : « le prof a dit », examens inventés, mnémotechniques qui affirment un faux fait
4. **Contraste > liste** : privilégier ce qui évite les confusions (espèces proches, même famille, noms proches).
5. Le statut naturaliste `complete` reste **indépendant** des points de cours (déjà prévu dans [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md)).

## Livrable A — Cadre (d’abord)

### A1. Charte pédagogique

Créer [`pedagogie.md`](pedagogie.md) :

- Objectifs d’apprentissage mesurables (citer, classer, reconnaître photo / chant)
- Parcours utilisateur pédagogique : Collection → Fiche → Entraînement
- Règles de charge cognitive (1 écran = 1 question ; 4 réponses ; feedback immédiat)
- Contrat « points de cours » (format, niveaux `programme` / `sourcé`, longueur)
- Briefs courts destinés à :
  - **Architecte** : données quiz limitées aux faits présents ; progression `localStorage` comme boucle de rappel, pas de SRS V1
  - **Développeurs** : quiz photo / chant = rappel actif ; ne jamais afficher un champ vide comme fait ; exposer sources
  - **Designers** : recto carte = ancrage visuel + identité ; verso / fiche = 3–5 points max ; hiérarchie mobile pouce
- Lien depuis [README projet](README.md) et [vision.md](vision.md)

### A2. Règle Cursor persistante

Créer [`.cursor/rules/ingenieur-pedagogue.mdc`](../../.cursor/rules/ingenieur-pedagogue.mdc) (`alwaysApply: true`) :

- Rôle : relire contenus, valider véracité, guider archi / dev / design pour la rétention simple
- Checklist de relecture fiche / UI / quiz
- Interdits (invention, surcharge, jargon inutile)
- Renvoi vers `pedagogie.md` et le gabarit fiche

### A3. Gabarit « Points de cours »

Mettre à jour [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md) et le [glossaire](../ornithologie/glossaire.md) :

Remplacer le placeholder « en attente supports » par un format stable, par exemple :

```markdown
## Points de cours à retenir

<!-- Aides à la mémorisation (pas un polycopié enseignant). Chaque puce : programme | sourcé -->

- **[programme]** Nom commun ↔ binôme ; ordre ; famille
- **[programme]** Confusion fréquente : …
- **[sourcé]** … (uniquement si la section amont est remplie et sourcée)
```

Mettre à jour [suivi-sources.md](../ornithologie/suivi-sources.md) : `points_cours` passe de `attente` à un statut traçable (`ok` / `minimal` = identité seule).

## Livrable B — Contenu (ensuite)

Ordre d’exécution pour limiter le risque et montrer le modèle :

1. **Pilote** : remplir les 12 fiches `partielle` (Galliformes / Ansériformes / Columbiformes) avec 3–5 puces selon le contrat.
2. **Lot identité** : les 73 `liste_seule` — points **programme uniquement** (identité + 1 puce de contraste taxonomique quand utile : même genre, noms proches, même famille dans le référentiel).
3. Entrée journal + mention dans le [README racine](../../README.md) : points de cours = aides projet, pas supports enseignants.

Exemple de cible pour une fiche riche (ex. [coturnix-chinensis.md](../ornithologie/fiches-naturaliste/coturnix-chinensis.md)) : identité programme + 1–2 puces reformulant habitat / IUCN déjà sourcés, sans ajouter de dimorphisme / régime absents.

## Hors périmètre de cette passe

- Scaffold Vite / React (reste après phase doc)
- Enrichissement naturaliste manquant (BirdLife, XC fichier, etc.) — reste aux [sprints sources](plan-sources.md)
- Flashcards / SRS (non prévu V1)
- Invention de critères d’examen non fournis

## Critères de done

- [x] [`pedagogie.md`](pedagogie.md) + règle Cursor + gabarit à jour (**Livrable A**)
- [ ] 85 fiches avec section points de cours conforme — **54/85** ; 31 restantes
- [x] Aucun fait nouveau non sourcé introduit (lots pédagogie à jour)
- [x] Journal + liens docs mis à jour (cadre)

## Checklist d’exécution

- [x] Créer `pedagogie.md` (objectifs, parcours, briefs archi / dev / design, contrat points de cours)
- [x] Ajouter `.cursor/rules/ingenieur-pedagogue.mdc` (`alwaysApply`)
- [x] Mettre à jour modèle fiche, glossaire, `suivi-sources.md` (format `programme` | `sourcé`)
- [x] Rédiger les points de cours du **pilote 12** (Galliformes / Ansériformes / Columbiformes) — [sprint-pedagogie-pilote-12.md](sprint-pedagogie-pilote-12.md)
- [ ] Rédiger les points de cours des **31** restantes (lots) — lots 01–07 faits ([01](sprint-pedagogie-lot-01.md)–[07](sprint-pedagogie-lot-07.md))
- [x] Journal + README : clarifier que les points de cours compensent l’absence de polycopié sans le remplacer

## Documents liés

| Document | Rôle |
|----------|------|
| [plan.md](plan.md) | Feuille de route V1 globale |
| [plan-sources.md](plan-sources.md) | Enrichissement naturaliste (biologie + médias) |
| [vision.md](vision.md) | Problème / public / principes |
| [cahier-des-charges.md](cahier-des-charges.md) | Specs fonctionnelles (quiz, cartes) |
| [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md) | Gabarit fiche |
