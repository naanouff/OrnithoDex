# Conventions

## Nommage

| Usage | Valeur |
|-------|--------|
| Nom de code / marque | **OrnithoDex** |
| Dépôt GitHub | `OrnithoDex` |
| Projet Vercel | `OrnithoDex` |

Le dossier local peut rester `ornithologie` ; le remote et Vercel utilisent **OrnithoDex**.

## Gitflow

| Branche | Rôle |
|---------|------|
| `main` | Production (protégée) |
| `develop` | Intégration (protégée) |
| `feature/*` | Depuis `develop` → PR vers `develop` |
| `release/*` | Préparation version → merge `main` puis `develop` |
| `hotfix/*` | Depuis `main` → merge `main` et `develop` |

### Règles de travail (obligatoires)

1. **Tout travail se fait sur une branche `feature/*`** (ou `release/*` / `hotfix/*` selon le cas) — jamais de commit de feature directement sur `develop` ou `main`.
2. Intégration vers `develop` **uniquement par Pull Request**.
3. Naming features : `feature/<sujet-court>` (ex. `feature/sprint-02-columbiformes`, `feature/gitflow-workflow`).
4. Protections `main` / `develop` : PR obligatoire, status checks (CI) quand disponibles, pas de push direct (pas de bypass admin en routine).

Publication prod : tag `vX.Y.Z` + **GitHub Release** → déploiement Vercel.

## Assets

| Type | Chemin | Naming |
|------|--------|--------|
| Image | `public/images/birds/{slug}.webp` | slug = nom scientifique en kebab-case |
| Audio | `public/audio/birds/{slug}.mp3` | idem |

Exemple : `Coturnix chinensis` → `coturnix-chinensis`.

Tout nouvel asset : crédit (auteur, licence, URL) dans le **README racine** (section Sources).

## Fiches du naturaliste

- Fichier : `documentation/ornithologie/fiches-naturaliste/{slug}.md`
- Gabarit : [modele-fiche-naturaliste.md](../ornithologie/modele-fiche-naturaliste.md)
- Pas de fait sans source ; champs vides autorisés

## Journal

Une entrée Markdown datée par session significative sous `documentation/journal/YYYY-MM-DD.md` (suffixe `-2` si plusieurs le même jour).

## Licence

- Code : MIT
- Médias tiers : licence d’origine respectée + crédit README
