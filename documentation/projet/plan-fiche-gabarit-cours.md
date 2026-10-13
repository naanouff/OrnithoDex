# Plan — Fiche au gabarit de cours

Consigné le **2026-10-13**.  
Le polycopié TCVA (exemple Colin de Virginie) est une fiche d’élevage. L’app est une fiche naturaliste mobile.  
Données : [audit-template-fiche-scolaire.md](audit-template-fiche-scolaire.md) · [plan-alignement-template-scolaire.md](plan-alignement-template-scolaire.md).  
Sprint : [sprint-fiche-gabarit-cours.md](sprint-fiche-gabarit-cours.md).

## Verdict

La maquette fiche ([prototype.html](maquettes/prototype.html)) est **en retard** sur l’app : nom, pastilles, points, sources. Il manque illustration, « En savoir plus », audio, photo créditée, planisphère, retour quiz.

Aucun portage React tant que la maquette du nouveau gabarit n’est pas **validée**.

## Objectif

1. Rattraper la fiche du prototype sur l’app actuelle.
2. Réorganiser cette fiche dans l’**ordre des cases** du polycopié, lisible au pouce (~390 px).

## Décisions

| Sujet | Choix |
|-------|--------|
| Grille A4 | Non — cases empilées ; paires courtes côte à côte (taille \| longévité, UICN \| CITES) |
| Photo | Grande, sous le titre — pas une colonne minuscule |
| Cases sans source | Libellé visible + **Non documenté** (le gabarit de cours reste lisible) |
| Régime sauvage | Reste « régime » — **jamais** recopié dans « alimentation en captivité » |
| Description | Le texte statut / effectifs **n’est pas** une description morphologique |
| UICN | Affiché en case seulement si le statut est déjà écrit dans la fiche |
| Origine | Planisphère + pays de `wildRange` si documentés |
| Conservés hors polycopié | Points de cours (après le titre), audio, sources, swipe, index `n / N` |
| Écrans | Accueil, collection, quiz inchangés |

Cette règle d’affichage (case vide = « Non documenté ») **prime**, pour cet écran, sur « n’afficher un champ que s’il est rempli » du [plan d’alignement](plan-alignement-template-scolaire.md).

## Ordre des cases

Nom commun → nom scientifique → photo → description morphologique → taille | longévité → dimorphisme → comportement → habitat | origine géographique → UICN | CITES → alimentation en captivité → conseils captivité → compatibilité → sources.

## Correspondance

| Case | Déjà dans la fiche |
|------|--------------------|
| Nom + latin | Identité programme |
| Photo | Média sourcé |
| Dimorphisme | Section Dimorphisme |
| Comportement | Section Comportement |
| Habitat naturel | Habitat d’origine |
| Origine géographique | `wildRange` + planisphère |
| Statut UICN | Seulement si déjà écrit (pas une nouvelle évaluation) |
| Taille, longévité, CITES, captivité, conseils, compatibilité, morphologie | **Non documenté** tant qu’aucune source |

## Après validation

Branche `feature/fiche-gabarit-cours` : DOM validé dans `BirdSheetPage` + `maquette.css`, spec dans [design.md](design.md). Pas de campagne de sources dans ce sprint.

## Hors scope

- Inventer taille, CITES, rations, conseils
- Remplir le PDF papier
- Quiz sur les cases vides

## Documents liés

- [Sprint](sprint-fiche-gabarit-cours.md)
- [Audit template](audit-template-fiche-scolaire.md)
- [Plan alignement données](plan-alignement-template-scolaire.md)
- [Charte design](design.md)
- [Pédagogie](pedagogie.md)
