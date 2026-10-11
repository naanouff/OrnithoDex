# Analyse pédagogique — OrnithoDex v0.2.0

Document de référence consigné le **2026-10-11**. Méthode : relecture du code au tag / version `0.2.0` + extraction scriptée de [`src/data/birds.ts`](../../src/data/birds.ts). Suite : [plan-remediation-pedagogie-0.3.md](plan-remediation-pedagogie-0.3.md) · [sprint-remediation-pedagogie-0.3.md](sprint-remediation-pedagogie-0.3.md).

## Méthode

| Élément | Détail |
|---------|--------|
| Version | `0.2.0` ([package.json](../../package.json)) |
| Public de référence | Seconde pro TCVA — [pedagogie.md](pedagogie.md) |
| Données | 85 espèces dans `birds.ts` (généré depuis les fiches) |
| UI lue | Accueil, Collection, Fiche, Entraînement, Quiz ([`src/pages/`](../../src/pages/)) |
| Quiz | [`src/lib/quiz.ts`](../../src/lib/quiz.ts) |

## Synthèse

Les **données** sont riches (85 fiches `complete`, 5 points de cours, photo + illustration + audio). L’**interface** en expose trop peu : la fiche masque sections naturalistes, audio et sources des points ; le quiz n’entraîne que le nom commun. Plusieurs points étiquetés `[programme]` portent des faits non programme — risque de confusion véracité pour l’élève.

## Points forts

1. **Distracteurs pertinents** — `buildQuestion` privilégie le même ordre taxonomique ([quiz.ts](../../src/lib/quiz.ts)).
2. **Format quiz conforme** — 1 question, 4 réponses, feedback immédiat, bonne réponse affichée si erreur.
3. **Couverture médias** — 85/85 photo, illustration, audio (81 locaux + 4 embeds XC).
4. **Contrastes utiles** — nombreux points qui opposent espèces proches du référentiel (Agapornis, Aix, Lonchura domestique / sauvage…).
5. **Parcours fluide** — swipe fiches dans la liste filtrée ; accueil sobre (2 CTA).

## Inventaire données (script)

| Indicateur | Valeur |
|------------|--------|
| Espèces | 85 |
| Statut `complete` | 85 |
| Photo / illustration / audio | 85 / 85 / 85 |
| Audio local `/audio/` | 81 |
| `wildRange` renseigné | 42 |
| `sheet.sections` non vides | 85 |
| Points de cours | 5 par espèce (85×5) |
| Au moins 1 point `sourcé` | 85 |
| Points `[programme]` avec contenu non programme (heuristique) | **61** |
| Points citant jargon UICN anglais | **92** (occurrences dans textes) |

## Grille objectifs d’apprentissage

| Objectif ([pedagogie.md](pedagogie.md)) | Couverture v0.2.0 |
|------------------------------------------|------------------|
| 1. Citer nom commun + binôme | **Partiel** — affiché en fiche ; quiz = commun seul |
| 2. Classer ordre + famille | **Partiel** — pills en fiche ; pas de quiz ni filtre famille |
| 3. Reconnaître photo → nom | **Oui** — quiz photo opérationnel |
| 4. Associer chant → espèce | **Partiel** — quiz chant OK ; pas d’écoute hors quiz |

## Constats

### Critique (véracité / transparence)

1. **Sources des points `[sourcé]` invisibles** — [`BirdSheetPage.tsx`](../../src/pages/BirdSheetPage.tsx) n’affiche qu’une ligne « Source identité » + crédit photo. Les `sourceIds` des points ne sont pas montrés. Contredit [pedagogie.md](pedagogie.md) et [design.md](design.md).
2. **Niveau `[programme]` mal attribué** — 61/85 points de contraste étiquetés `programme` contiennent plumage, statut UICN, habitat ou synonyme BirdLife (faits `sourcé`). L’élève ne peut pas distinguer référentiel et enrichissement.
3. **Illustrations = ancrage potentiellement faux** — règle de prompt « zones sans couleur nommée = crème » ([plan-suivi-illustrations.md](plan-suivi-illustrations.md) / prompts). La Collection mémorise l’illustration ; le quiz utilise la photo. Écart possible.
4. **Quiz chant / embed Xeno-canto** — 4 espèces audio distant (`cacatua-alba`, `gracula-religiosa`, `lonchura-oryzivora`, `taeniopygia-guttata-castanotis`). Le lecteur embed XC peut afficher le nom de l’espèce (à vérifier en UI ; si oui → fuite de réponse).

### Majeur (rétention)

5. **Quiz = un seul objectif** — réponses toujours = nom commun ; pas de binôme / ordre / famille.
6. **Feedback pauvre** — « C’était : X » sans lien fiche ni point de contraste (pourtant en data).
7. **Pas de boucle de rappel** — tirage avec remise (hors question précédente) ; score cumulé à vie `ornithodex.quiz.score` ; `resetQuizScore` non branché ; pas de série courte ni reprise d’erreurs.
8. **Fiche sous-exploite les données** — ni `sheet.sections`, ni `wildRange`, ni lecteur audio hors quiz.
9. **Pas de filtre Famille** — demandé CDC / design ; seul filtre Ordre en Collection.

### Langage (seconde pro)

10. **Jargon anglais** — `Least Concern`, `Near Threatened`, `EOO`, `IUCN` dans les points.
11. **Synonymes BirdLife concurrents** — *Padda*, *Euodice*, *Crithagra*, *Chloebia*… en concurrence avec le latin programme.
12. **Points méta / non apprenables** — ex. Gracula « Premier Passériforme du lot » ; Moineau du Japon « Audio de référence = … » ; Veuve « Sahel Paradise-whydah ».
13. **Graphies familles** — programme : `Ploceidae`, `Cacatuides` ; points parfois « plocéidés » → double graphie.
14. **Contradiction docs** — [pedagogie.md](pedagogie.md) « photo dominante » vs [design.md](design.md) illustration en tête de fiche (implémenté = illustration haut, photo bas lazy).

## Annexe — 61 points `[programme]` à revoir

Heuristique : 2ᵉ puce `programme` contenant plumage / statut / habitat / BirdLife / couleurs marquées. Action type : scinder en contraste **taxonomique** (`programme`) + fait **sourcé**, ou re-étiqueter entièrement `sourcé` si le contraste n’est pas purement référentiel.

| Slug | Texte actuel (extrait) | Action cible |
|------|------------------------|--------------|
| `agapornis-fischeri` | face orange, anneau oculaire blanc | plumage → `sourcé` ; garder contraste *personatus* en `programme` |
| `agapornis-lilianae` | NT, aire plus large | statut/aire → `sourcé` |
| `agapornis-nigrigenis` | Vulnerable, aire | statut → `sourcé` |
| `agapornis-personatus` | tête noire (masque) | plumage → `sourcé` ou contraste genre seul en `programme` |
| `agapornis-roseicollis` | face / poitrine rose | plumage → `sourcé` |
| `amadina-fasciata` | distinct Plocéidés | OK taxo si graphie programme `Ploceidae` |
| `amandava-amandava` | ventre orange | plumage → `sourcé` |
| `bolborhynchus-lineola-lineola` | sous-espèce *lineola* | garder `programme` (identité) |
| `cacatua-alba` | blanc, Endangered | statut → `sourcé` |
| `cacatua-galerita` | huppe jaune, Least Concern | statut/plumage → `sourcé` |
| `coturnix-chinensis` | colins Odontophoridés | OK `programme` (familles du référentiel) |
| `cyanoramphus-auriceps` | front rouge, statut | plumage/statut → `sourcé` |
| `cyanoramphus-novaezelandiae` | front jaune | plumage → `sourcé` |
| `erythrura-gouldiae` | endémique ; *Chloebia* | synonyme/habitat → `sourcé` |
| `erythrura-psittacea` | endémique NC | → `sourcé` |
| `erythrura-trichroa` | large aire | → `sourcé` |
| `estrilda-astrild` | joues orange… | noms vernaculaires OK `programme` ; couleurs → `sourcé` |
| `estrilda-caerulescens` | *Glaucestrilda* | synonyme → `sourcé` |
| `estrilda-melpoda` | joues orange | plumage → `sourcé` |
| `estrilda-troglodytes` | savane / fourrés secs | habitat → `sourcé` |
| `geopelia-cuneata` | plumage / aire | → scinder |
| `geopelia-striata` | même genre | OK `programme` |
| `lagonosticta-larvata-vinacea` | BirdLife *L. vinacea* | synonyme → `sourcé` |
| `lonchura-cantans` | *Euodice* | synonyme → `sourcé` |
| `lonchura-cucullata` | *Spermestes* | synonyme → `sourcé` |
| `lonchura-maja` | tête blanche | plumage → `sourcé` |
| `lonchura-malabarica` | *Euodice* | synonyme → `sourcé` |
| `lonchura-malacca-atricapilla` | BirdLife *atricapilla* | synonyme → `sourcé` |
| `lonchura-malacca-malacca` | BirdLife sépare | synonyme → `sourcé` |
| `lonchura-oryzivora` | *Padda*, Endangered | synonyme/statut → `sourcé` |
| `lonchura-punctulata` | tendance augmentation | → `sourcé` |
| `lonchura-striata-domestiqua` | forme domestique | OK `programme` |
| `lonchura-striata` | forme domestique | OK `programme` |
| `melopsittacus-undulatus` | courant animalerie | reformuler sans affirmation hors source |
| `myiopsitta-monachus-monachus` | vert + gris | plumage → `sourcé` |
| `neochmia-ruficauda` | même genre AU | genre OK ; AU → `sourcé` si besoin |
| `neophema-pulchella` | non migratrice | → `sourcé` |
| `neophema-splendida` | désert, nomade | → `sourcé` |
| `neopsephotus-bourkii` | vs *Neophema* | OK `programme` |
| `nymphicus-hollandicus` | huppe + joues orange | plumage → `sourcé` |
| `platycercus-adscitus` | tendance / aire | → `sourcé` |
| `platycercus-elegans` | tendance diminution | → `sourcé` |
| `platycercus-eximius-eximius` | même genre | OK `programme` |
| `platycercus-icterotis` | EOO | → `sourcé` |
| `polytelis-alexandrae` | Near Threatened, désert | → `sourcé` |
| `polytelis-anthopeplus` | NT / LC | → `sourcé` |
| `psittacula-cyanocephala` | tête colorée | plumage → `sourcé` |
| `psittacula-eupatria` | nomade | → `sourcé` |
| `psittacula-krameri-manillensis` | sous-espèce *manillensis* | OK `programme` |
| `psittacus-erithacus` | gris + queue rouge | plumage → `sourcé` |
| `serinus-leucopygius` | *Crithagra* | synonyme → `sourcé` |
| `serinus-mozambicus` | *Crithagra* | synonyme → `sourcé` |
| `stagonopleura-guttata` | Vulnerable vs *Neochmia* LC | statut → `sourcé` |
| `streptopelia-risoria` | forme domestique | OK `programme` |
| `streptopelia-senegalensis` | autre *Streptopelia* | OK `programme` |
| `taeniopygia-bichenovii` | même genre | OK `programme` |
| `taeniopygia-guttata-castanotis` | BirdLife *castanotis* | synonyme → `sourcé` |
| `uraeginthus-bengalus` | même genre Afrique | genre OK ; Afrique → `sourcé` si besoin |
| `uraeginthus-cyanocephalus` | déserts / fourrés | habitat → `sourcé` |
| `vidua-chalybeata` | même famille | OK `programme` |
| `vidua-macroura` | même genre | OK `programme` |

*Note : quelques lignes de l’heuristique sont déjà conformes (`programme` pur) ; les marquer « OK » lors du sprint et ne pas les forcer en `sourcé`.*

## Documents liés

| Document | Rôle |
|----------|------|
| [pedagogie.md](pedagogie.md) | Charte |
| [plan-pedagogie.md](plan-pedagogie.md) | Plan d’exécution points de cours |
| [plan-remediation-pedagogie-0.3.md](plan-remediation-pedagogie-0.3.md) | Backlog P0 / P1 / P2 |
| [sprint-remediation-pedagogie-0.3.md](sprint-remediation-pedagogie-0.3.md) | Sprint de correction |
| [design.md](design.md) | Specs écrans / sources |
