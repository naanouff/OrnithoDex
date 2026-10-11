# Suivi — Contrôle pédagogique des illustrations

Document du sprint [sprint-remediation-pedagogie-0.3.md](sprint-remediation-pedagogie-0.3.md) (P0.3).  
Objectif : vérifier que l’illustration Collection n’ancre pas une apparence **fausse** par rapport à la photo sourcée et au plumage documenté.

## Protocole (85 espèces)

Pour chaque slug :

1. Ouvrir `public/images/illustrations/{slug}.webp` (ou référence sous `prompts-visuels/references/`).
2. Comparer à `public/images/birds/{slug}.webp` (photo).
3. Relire le plumage dans la fiche / prompt (`prompts-visuels/{slug}.md` — bloc « Faits repris »).
4. Noter un statut :

| Statut | Signification |
|--------|----------------|
| `ok` | Silhouette + couleurs nommées cohérentes avec photo / fiche |
| `réserve` | Acceptable en Collection ; écart mineur (pose, fond crème sur zones non nommées) |
| `à reprendre` | Couleur inventée, espèce peu reconnaissable, ou crème dominant sur zones pourtant sourcées |

5. Si `à reprendre` : retirer temporairement de `public/images/illustrations/` **ou** régénérer (sprint illustrations) avant de laisser en Collection.

### Checklist visuelle

- [ ] Couleurs **uniquement** celles nommées dans le plumage sourcé
- [ ] Pas de confusion évidente avec l’espèce contrastée du point de cours
- [ ] Tête / silhouette lisibles en tuile dense (3–4 colonnes)
- [ ] Contours navy (pas noir) ; fond uni OK

## Échantillon 12 (sprints sources 01–02)

Contrôle initial 2026-10-11 — lecture assets locaux + plumage prompts.

| Slug | Statut | Note |
|------|--------|------|
| `coturnix-chinensis` | `réserve` | Dimorphisme fort : vérifier que la planche correspond au sexe / forme attendue vs photo |
| `gallus-gallus-domesticus` | `réserve` | Forme domestique très variable — illustration = type, pas toutes les races |
| `colinus-virginianus` | `ok` | Contraste Californie : panache / gorge à surveiller en reprise fine |
| `callipepla-californica` | `ok` | Panache caractéristique lisible |
| `aix-galericulata` | `ok` | Mâle nuptial distinct du carolin |
| `aix-sponsa` | `ok` | Idem contraste mandarin |
| `geopelia-cuneata` | `ok` | |
| `geopelia-striata` | `ok` | |
| `oena-capensis` | `ok` | |
| `streptopelia-senegalensis` | `ok` | |
| `streptopelia-risoria` | `réserve` | Forme domestique claire vs maillée |
| `columba-livia` | `réserve` | Type « biset » ; variabilité urbaine |

**Synthèse échantillon** : 0 `à reprendre` immédiat ; 4 `réserve` (formes domestiques / dimorphisme) — pas de retrait Collection. Suite : appliquer le même protocole aux 73 restantes (sprint illustrations dédié).

## Décision P0.4 (embeds XC)

Espèces sans audio local au 2026-10-11 : `cacatua-alba`, `gracula-religiosa`, `lonchura-oryzivora`, `taeniopygia-guttata-castanotis`.

**Décision** : exclues du pool quiz chant (`birdsForMode('chant')` = audio `/audio/` uniquement) tant qu’un fichier local n’est pas publié — risque de spoiler via le lecteur embed Xeno-canto.
