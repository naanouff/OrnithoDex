# Sprint — Remédiation pédagogique 0.3 (P0 + fiche + feedback)

**Branche** : `feature/remediation-pedagogie-0.3` → PR vers `develop`  
**PR** : https://github.com/naanouff/OrnithoDex/pull/54  
**Dates** : préparation 2026-10-11 ; exécution 2026-10-11  
**Réf.** : [analyse-pedagogique-0.2.0.md](analyse-pedagogique-0.2.0.md) · [plan-remediation-pedagogie-0.3.md](plan-remediation-pedagogie-0.3.md) · [pedagogie.md](pedagogie.md) · [design.md](design.md)

## Objectif

Corriger les écarts **véracité** et les manques **fiche / feedback** identifiés en v0.2.0, sans encore livrer les séries de 10 ni le quiz ordre/famille (sprint suivant).

## Périmètre

| Inclus (ce sprint) | Exclu (plus tard) |
|--------------------|-------------------|
| P0.1 Sources sur fiche | P1.4 Séries de 10 + reprise |
| P0.2 Re-étiquetage 61 points | P1.5 Quiz nom → ordre / famille |
| P0.3 Contrôle illustrations (échantillon 12 + protocole 85) | P2.4 Filtre famille |
| P0.4 Embeds XC (4 espèces) | P2.1–P2.3 Langage massif (partiel OK si touché avec P0.2) |
| P1.1 Audio fiche | Regen illustrations massives |
| P1.2 Sections naturalistes (extrait) | Release tag 0.3.0 (après merge + QA) |
| P1.3 Feedback « Revoir la fiche » + contraste | |

## Tâches

### Contenu (fiches MD → data)

1. Pour chaque slug de l’annexe analyse (61) :
   - Contraste purement taxonomique (genre / famille / domestique) → garder `[programme]`
   - Plumage, UICN, habitat, synonyme BirdLife → `[sourcé]` avec `sourceIds` déjà présents dans la fiche
   - Scinder en 2 puces si besoin (toujours ≤ 5 puces totales)
2. Supprimer / réécrire au passage les points méta évidents (Gracula « premier du lot », note audio Moineau du Japon, « Paradise-whydah ») si rencontrés.
3. `npm run data:birds` ; vérifier 0 régression de statut `complete`.

### UI fiche — [`BirdSheetPage.tsx`](../../src/pages/BirdSheetPage.tsx)

4. Afficher les points avec niveau lisible (`programme` / `sourcé`) **et** source(s) compactes (id ou titre).
5. Bloc **Sources** en bas (liste `bird.sources` : titre, id, lien si URL).
6. Lecteur **audio** si `bird.audio` playable (local prioritaire ; pas d’iframe qui spoile en fiche — OK page espèce).
7. Sections : afficher les `sheet.sections` non vides (libellé court Description / Habitat / …) — masquer si texte vide.

### Quiz — [`QuizPage.tsx`](../../src/pages/QuizPage.tsx) + [`quiz.ts`](../../src/lib/quiz.ts)

8. Après réponse fausse : CTA « Revoir la fiche » → `/espece/{id}`.
9. Afficher si possible le 1er point de contraste `programme` ou `sourcé` de l’espèce (1 ligne max).
10. **P0.4** : pour les 4 embeds XC, tester en UI ; si spoiler → exclure du pool chant tant que l’audio n’est pas local (`birdsForMode('chant')`).

### Illustrations

11. Contrôle **échantillon 12** (les anciennes `partielle` / sprints 01–02) : illustration vs photo vs plumage sourcé → noter dans [plan-suivi-illustrations.md](plan-suivi-illustrations.md) ou tableau dédié `suivi-controle-illustrations.md`.
12. Définir le protocole pour les 73 restantes (même checklist) — exécution peut déborder sur un sprint illustrations.

## Checklist Definition of Done

- [x] P0.1 : sources points + bloc Sources sur fiche
- [x] P0.2 : points retraités (script `scripts/remediate-course-points.mjs` + overrides) ; `data:birds` OK
- [x] P0.4 : décision documentée ([suivi-controle-illustrations.md](suivi-controle-illustrations.md)) + quiz chant = audio local seul
- [x] P1.1 : audio sur fiche (fichier `/audio/` local)
- [x] P1.2 : sections non vides visibles (libellés via `data:birds`)
- [x] P1.3 : lien fiche + contraste après erreur quiz
- [x] P0.3 : échantillon 12 + protocole — [suivi-controle-illustrations.md](suivi-controle-illustrations.md)
- [x] Journal + liens docs
- [x] PR vers `develop` — https://github.com/naanouff/OrnithoDex/pull/54

## Fichiers touchés (prévision)

| Zone | Fichiers |
|------|----------|
| Contenu | `documentation/ornithologie/fiches-naturaliste/*.md` (lot 61+) |
| Data | `src/data/birds.ts` (via `npm run data:birds`) |
| UI | `BirdSheetPage.tsx`, styles associés |
| Quiz | `QuizPage.tsx`, `quiz.ts` |
| Docs | ce sprint, suivi illustrations, journal |

## Suite après ce sprint

- Sprint quiz : P1.4 + P1.5  
- Sprint langage / nav : P2  
- Sprint illustrations : reprise des `à reprendre` du contrôle 85
