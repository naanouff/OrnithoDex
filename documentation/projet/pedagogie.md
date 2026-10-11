# Charte pédagogique — OrnithoDex

Document de référence du **Livrable A** ([plan-pedagogie.md](plan-pedagogie.md)). Toute évolution majeure → ce fichier + [journal](../journal/).

## Public et objectif

- **Public** : élèves de **seconde pro** BAC PRO **TCVA** (Technicien conseil vente en animalerie), MP6, usage **smartphone portrait**.
- **Objectif** : mémoriser ~**85** oiseaux de cage et de volière — identité (latin / commun / ordre / famille) + reconnaissance **photo** et **chant**.
- **Matériel enseignant** : liste programme uniquement — **pas** de polycopié. Les « points de cours » du projet sont des **aides à la rétention** (projet), **pas** des consignes d’examen inventées.

## Objectifs d’apprentissage mesurables

À la fin d’une session courte, l’élève doit pouvoir :

1. **Citer** le nom commun et le binôme d’une espèce vue
2. **Classer** l’espèce (ordre + famille du programme)
3. **Reconnaître** l’espèce sur une photo (quiz photo → nom)
4. **Associer** un chant à l’espèce quand l’audio est disponible (quiz chant → espèce)

## Parcours utilisateur pédagogique

```
Collection (ancrage visuel) → Fiche (identité + 3–5 points) → Entraînement (quiz)
```

| Étape | Rôle pédagogique |
|-------|------------------|
| Collection | Découverte ; carte = image + nom ; filtre / recherche |
| Fiche | Consolidation ; points de cours + sources visibles |
| Quiz | Rappel actif ; feedback immédiat ; boucle courte |

Progression V1 : `localStorage` comme **boucle de rappel**, pas de SRS.

## Charge cognitive

- 1 écran = **1** question (quiz)
- **4** réponses max
- Feedback **immédiat** (juste / faux + bonne réponse)
- Fiche : **3–5** puces max dans « Points de cours » — une idée par puce
- Ne jamais présenter un champ vide comme un fait

## Contrat « Points de cours »

Format dans chaque fiche (voir [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md)) :

```markdown
## Points de cours à retenir

<!-- Aides à la mémorisation (pas un polycopié enseignant). Chaque puce : programme | sourcé -->

- **[programme]** …
- **[sourcé]** …
```

| Niveau | Autorisé | Interdit |
|--------|----------|----------|
| `programme` | Latin, commun, ordre, famille ; contraste taxonomique dans le référentiel (même genre, noms proches) | Faits biologiques non dans le programme |
| `sourcé` | Reformulation courte d’un fait **déjà** écrit et sourcé dans la fiche | Nouveau fait ; « le prof a dit » ; mnémotechnique fausse |

Règles :

- **Contraste > liste** : privilégier ce qui évite les confusions
- **Zéro invention biologique** — aligné sur [plan.md](plan.md) et [sources.md](../ornithologie/sources.md)
- Statut naturaliste `complete` **indépendant** des points de cours
- Suivi : colonne `points_cours` = `attente` | `minimal` (identité seule) | `ok` (3–5 puces conformes)

## Brief — Architecte

- Données quiz limitées aux faits **présents** dans les fiches / data dérivées
- Progression `localStorage` = rappel, pas SRS V1
- Sources exposables (ids / URLs) depuis le modèle de données
- Pas de champ « inventé » pour remplir l’UI

## Brief — Développeurs

- Quiz photo / chant = **rappel actif**
- Ne jamais afficher un champ vide comme un fait (« Non documenté » ou masquer)
- Afficher les sources (fiche + registre README)
- Points de cours : rendre les niveaux `programme` / `sourcé` lisibles (pas d’amalgame)

## Brief — Designers

- Recto carte = ancrage **visuel** + identité (nom)
- Verso / fiche = **3–5** points max ; hiérarchie mobile (pouce)
- Photo dominante sur la fiche ; audio accessible sans clutter
- Une composition claire : pas de dashboard de stats sur l’écran d’apprentissage

## Documents liés

| Document | Rôle |
|----------|------|
| [plan-pedagogie.md](plan-pedagogie.md) | Plan d’exécution (cadre puis contenu) |
| [analyse-pedagogique-0.2.0.md](analyse-pedagogique-0.2.0.md) | Critique v0.2.0 |
| [plan-remediation-pedagogie-0.3.md](plan-remediation-pedagogie-0.3.md) | Remédiation 0.3.x |
| [plan.md](plan.md) | Feuille de route V1 |
| [plan-design.md](plan-design.md) | Direction artistique / écrans |
| [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md) | Gabarit fiche |
| Règle Cursor | `.cursor/rules/ingenieur-pedagogue.mdc` |
