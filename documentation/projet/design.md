# Charte design — OrnithoDex

Document de référence du **Livrable A** ([plan-design.md](plan-design.md)). Ancré sur le logo retenu (DA ludique type Duolingo). Toute évolution majeure → ce fichier + [journal](../journal/).

## Positionnement

- Outil de **mémorisation** animalerie (seconde pro TCVA), pas encyclopédie ni dashboard.
- Ton : clair, confiant, accessible ; une action par écran.
- Priorité : **smartphone portrait** (pouce) ; desktop = colonne centrée ~480–560 px.

## Identité

| Élément | Règle |
|---------|--------|
| Marque | **OrnithoDex** — signal hero sur l’**accueil uniquement** |
| Logo | Accueil (grand) + favicon / icône PWA ; ne pas réduire à un favicon seul sur le home |
| Assets versionnés | [`assets/logo-ornithodex.svg`](assets/logo-ornithodex.svg) · [`assets/logo-ornithodex.jpg`](assets/logo-ornithodex.jpg) |
| Style logo | Illustration plate, contours navy épais, palette vive (navy / orange / sky / lime) |

Asset de travail en app : **JPG**. Pas de passe Inkscape / redraw SVG pour l’instant.

## Tokens

Variables CSS cibles (à mapper en Tailwind theme) :

```css
:root {
  --navy: #1b365d;
  --navy-deep: #12243f;
  --sky: #2eb7e6;
  --sky-soft: #7ed4f5;
  --orange: #ff8a1f;
  --orange-deep: #f06a00;
  --yellow: #ffd84d;
  --lime: #7bcf3a;
  --leaf: #3d9e2e;
  --cream: #fff8e8;
  --ink: #1b365d;
  --muted: #5a6f8c;
  --white: #ffffff;
  --ok: #2f9e44;
  --ko: #e03131;
  --stroke: 3px;
  --radius: 22px;
  --radius-sm: 16px;
  --shadow: 0 8px 0 rgba(27, 54, 93, 0.18);
  --shadow-press: 0 3px 0 rgba(27, 54, 93, 0.18);

  --ordre-galliformes: #e6a817;
  --ordre-anseriformes: #2eb7e6;
  --ordre-columbiformes: #8b7ec8;
  --ordre-psittaciformes: #ff8a1f;
  --ordre-passeriformes: #7bcf3a;
}
```

### Fond

Pas de fond plat unique : dégradés légers sky → cream → lime (comme le brouillon `accueil-v0`), texture discrète. Ancrage visuel : **illustration** en Collection ; **photo** sourcée en Fiche / Quiz.

### Accents ordre (5)

Pastilles / filtres stables — une couleur par ordre du programme :

| Ordre | Token |
|-------|--------|
| Galliformes | `--ordre-galliformes` |
| Ansériformes | `--ordre-anseriformes` |
| Columbiformes | `--ordre-columbiformes` |
| Psittaciformes | `--ordre-psittaciformes` |
| Passériformes | `--ordre-passeriformes` |

### États quiz

| État | Token |
|------|--------|
| Correct | `--ok` |
| Incorrect | `--ko` |
| Neutre | bordure `--navy`, fond blanc / cream |

## Typographie

| Rôle | Famille | Usage |
|------|---------|--------|
| Display | **Fredoka** | Marque, titres d’écran, CTA |
| Corps | **Nunito** | Listes, fiche, quiz, sources |

Éviter Inter / Roboto / Arial / system comme face principale. Fallback : `system-ui, sans-serif`.

## Composants

| Composant | Spec |
|-----------|------|
| **Carte espèce** | Illustration pleine, sans voile ni texte par-dessus ; nom et pastille ordre dans un bandeau sous le dessin ; bordure, filet et fond du bandeau = couleur d’ordre |
| **Pastille** | Pill ordre **remplie** par le token ; famille en pill navy/blanc |
| **Nav basse** | 3 onglets : Accueil · Collection · Entraînement ; hauteur ~68 px + safe-area |
| **CTA** | Pleine largeur, min-height 56 px, bordure navy 3 px, ombre « pressable » |
| **CTA primaire** | Dégradé yellow → orange |
| **CTA secondaire** | Dégradé sky-soft → sky |
| **Feedback quiz** | Immediate ; fond/bordure `--ok` / `--ko` ; bonne réponse toujours affichée si erreur |
| **Bloc Sources** | Visible en bas de fiche ; compact ; liens externes ; jamais inventer un crédit |

## Ergonomie

- Zones tactiles ≥ **44 px** (CTA ≥ 56 px)
- **1 écran = 1 job**
- Quiz : 1 question + **4** réponses empilées pleine largeur
- Fiche : photo + identité + **3–5** points de cours max ([pedagogie.md](pedagogie.md))
- Safe-areas iOS ; images ratio ~**3:4**
- Desktop : cadre téléphone / colonne centrée, pas redesign large

## Specs des 4 écrans V1

### Accueil

- **Job** : choisir le mode
- Logo grand + **OrnithoDex** (marque = signal principal)
- 1 phrase courte (rétention / programme TCVA)
- 2 CTA : Collection / Entraînement
- Pas de stats, pas de liste d’espèces, pas de cards promo

### Collection

- **Job** : trouver une espèce
- Recherche + filtres Ordre / Famille
- Liste cartes en colonne (max 2 colonnes sur grand téléphone)
- **Illustration** naturaliste = ancrage de la tuile (pas la photo Commons) ; pas de collage hero
- **Ordre dans le bandeau** sous l’illustration (pastille remplie) ; bordure, filet et fond léger du bandeau = token `--ordre-*`. Le dessin reste entier : pas de voile, pas de pastille sur la tête, pas de bandeau sur les pattes
- Sans illustration validée : placeholder / dégradé ordre — ne pas inventer un visuel

### Fiche du naturaliste

- **Job** : mémoriser l’identité + lire le gabarit de cours (mobile)
- **Ordre des cases** (maquette 2026-10-13, [plan-fiche-gabarit-cours.md](plan-fiche-gabarit-cours.md)) :
  nom commun → latin → pastilles → points de cours → **photo grande** (crédit) → description morphologique → taille \| longévité → dimorphisme → comportement → habitat \| origine (planisphère si `wildRange`) → UICN \| CITES → alimentation captivité → conseils → compatibilité → audio → « En savoir plus » → sources
- Case sans source : libellé visible + **Non documenté** (ne pas masquer la case)
- Régime **sauvage** uniquement dans « En savoir plus » — jamais dans « alimentation en captivité »
- Texte statut / effectifs ≠ description morphologique
- UICN en case seulement si déjà écrit dans la fiche ; CITES / captivité / conseils / compatibilité / morphologie / taille / longévité → Non documenté tant qu’aucune source
- Pastille ordre **remplie** du token ; famille en pill neutre ; filet gauche des points = couleur d’ordre
- Quiz reste sur la **photo** (pas l’illustration Collection)
- **Swipe horizontal** (*validé 2026-10-11*, [plan-swipe-fiches.md](plan-swipe-fiches.md)) :
  - Gauche → espèce suivante ; droite → précédente
  - Parcours = liste filtrée Collection
  - Indicateur discret `n / N` (position dans la liste filtrée)
  - **Pas** de libellé « Glisser », ni boutons prev/next
  - Retour « ← Collection » inchangé (sauf arrivée depuis quiz → « ← Quiz », [plan-ui-ux-ergonomie.md](plan-ui-ux-ergonomie.md))
  - Flèches clavier ← → disponibles (pas de chrome visible)
  - Cibles interactives (`summary`, `audio`, liens) : hors capture swipe

### Quiz (photo → nom ; chant → espèce)

- **Job** : s’entraîner
- Stimulus (**photo** sourcée ou lecteur audio) — pas l’illustration de collection ; **ne pas écraser** après feedback
- 4 réponses empilées
- Feedback immédiat + score discret ; indice = contraste sourcé uniquement (ou rien)
- Pas de question si média / fait absent ([pedagogie.md](pedagogie.md))
- Séries + bilan : [plan-ui-ux-ergonomie.md](plan-ui-ux-ergonomie.md)

## Motion (présence, pas bruit)

Au moins 2–3 motions intentionnelles en V1 :

1. Entrée d’écran légère (fade / pop)
2. Press CTA (ombre → translateY)
3. Feedback quiz (pulse / shake discret)

## Maquettes (Livrable B)

Portraits ~390×844 sous [`maquettes/`](maquettes/) :

| Écran | Capture | Prototype |
|-------|---------|-----------|
| Accueil | [accueil.png](maquettes/accueil.png) | [prototype.html](maquettes/prototype.html)#accueil |
| Collection | [collection.png](maquettes/collection.png) | …#collection |
| Fiche | [fiche.png](maquettes/fiche.png) | ouvrir une carte ; glisser ←→ (*swipe validé, sans hint UI*) |
| Quiz photo | [quiz.png](maquettes/quiz.png) | …#entrainement → Photo → nom |

Prototype interactif : [`maquettes/README.md`](maquettes/README.md).  
Logo dans les captures : **JPG** versionné (SVG en cours d’amélioration — tokens / DA inchangés).

**Implémentation app** : l’UI React doit être l’équivalent de ce référentiel — [plan-ui-equiv-maquette.md](plan-ui-equiv-maquette.md) · [sprint-ui-equiv-maquette.md](sprint-ui-equiv-maquette.md). Aucun contrôle hors PNG / prototype.

## Documents liés

| Document | Rôle |
|----------|------|
| [plan-design.md](plan-design.md) | Plan d’exécution charte → maquettes |
| [plan-ui-equiv-maquette.md](plan-ui-equiv-maquette.md) | Porter le chrome maquette dans l’app |
| [plan-swipe-fiches.md](plan-swipe-fiches.md) | Swipe entre fiches (maquette → app) |
| [plan-ui-ux-ergonomie.md](plan-ui-ux-ergonomie.md) | Passe critique UI/UX / ergonomie |
| [plan.md](plan.md) | Feuille de route V1 + UI/UX |
| [pedagogie.md](pedagogie.md) | Charge cognitive / points de cours |
| [cahier-des-charges.md](cahier-des-charges.md) | Specs fonctionnelles |
