# OrnithoDex

Site pédagogique **open source** pour apprendre les oiseaux de cage et de volière du programme **MP6 – BAC PRO TCVA**.

**Nom de code** : OrnithoDex — utilisé pour le dépôt GitHub et le projet Vercel.

- Dépôt : [github.com/naanouff/OrnithoDex](https://github.com/naanouff/OrnithoDex) (public)
- Branches : `main` (prod), `develop` (intégration) — protégées (PR obligatoire)

- Collection type cartes + **fiche du naturaliste**
- Quiz (photo → nom, chant → espèce)
- Optimisé **smartphone portrait**
- Informations **sourcées** uniquement — aucune invention

## Documentation

Le cadrage et le plan complets sont dans [`documentation/`](documentation/) :

- **[Plan du projet](documentation/projet/plan.md)** — feuille de route V1
- **[Plan sources](documentation/projet/plan-sources.md)** — enrichissement des fiches (biologie + médias)
- [Vision](documentation/projet/vision.md) · [Cahier des charges](documentation/projet/cahier-des-charges.md) · [Architecture](documentation/projet/architecture.md)
- [Journal de développement](documentation/journal/)
- [Référentiel ornithologie](documentation/ornithologie/) · [Liste des espèces](documentation/ornithologie/especes.md)

## Statut

Sources : [sprint 01](documentation/projet/sprint-01-sources.md) (lot pilote) · [sprint 02](documentation/projet/sprint-02-sources.md) (Columbiformes) · suivi [suivi-sources.md](documentation/ornithologie/suivi-sources.md).  
Développement applicatif (Vite / React / TypeScript / Tailwind) ensuite.

Licence du code : **MIT** — voir [`LICENSE`](LICENSE).

## Sources

Registre public de **toutes** les sources utilisées dans le projet. Toute nouvelle source (fiche, photo, son) doit y être ajoutée.

- Politique : [`documentation/ornithologie/sources.md`](documentation/ornithologie/sources.md)
- Catalogue : [`documentation/ornithologie/catalogue-sources.md`](documentation/ornithologie/catalogue-sources.md)

### Programme et identité des espèces

| Id | Titre | Auteur / organisme | Année | URL | Usage |
|----|-------|--------------------|-------|-----|--------|
| `bac-pro-tcva-liste` | Liste des oiseaux – BAC PRO TCVA (MP6), arrêtés du 02 juillet 2009 + espèces domestiques | Support de cours transmis pour le projet (réf. arrêtés 02/07/2009) | 2009 | — | Noms scientifiques, noms communs, ordre, famille |

### Bases et sites (enrichissement)

| Id | Titre | Organisme | URL | Usage |
|----|-------|-----------|-----|--------|
| `iucn-redlist` | IUCN Red List of Threatened Species | IUCN | https://www.iucnredlist.org/ | Statut, traits (via fiches espèce) |
| `birdlife-datazone` | BirdLife DataZone | BirdLife International | https://datazone.birdlife.org/ | Habitat, population, écologie |
| `avibase` | Avibase | Denis Lepage / BSC-EOC | https://avibase.bsc-eoc.org/ | Contrôle taxonomique, synonymes |
| `xeno-canto` | Xeno-canto | Xeno-canto Foundation | https://xeno-canto.org/ | Pages espèce audio (fichier précis à créditer à la sélection) |
| `wikimedia-commons` | Wikimedia Commons | Wikimedia | https://commons.wikimedia.org/ | Images libres (licence par fichier) |

Fiches espèce BirdLife / IUCN / Avibase utilisées (sprints 01–02) : détail dans chaque [fiche du naturaliste](documentation/ornithologie/fiches-naturaliste/).

### Médias retenus (sprints 01–02 — liens ; copie locale plus tard)

| Espèce (slug) | Type | Auteur | Licence | URL |
|---------------|------|--------|---------|-----|
| `coturnix-chinensis` | Image | DickDaniels | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Chinese_Painted_Quail_RWD12a.jpg |
| `gallus-gallus-domesticus` | Image | SimonWaldherr | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Rooster_and_Hen.jpg |
| `colinus-virginianus` | Image | DickDaniels | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Northern_Bobwhite_female_RWD.jpg |
| `callipepla-californica` | Image | Nick Myatt / ODFW | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Valley_quail_myatt_(5489811278)_(cropped).jpg |
| `aix-galericulata` | Image | Alexis Lours | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Mandarin_duck_(Aix_galericulata).jpg |
| `aix-sponsa` | Image | Dick Daniels | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Wood_Duck_(Aix_sponsa).jpg |
| `geopelia-cuneata` | Image | Maurice van Bruggen | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Geopelia_cuneata.JPG |
| `geopelia-striata` | Image | Angah hfz | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Burung_Merbuk.JPG |
| `oena-capensis` | Image | Neil Strickland | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Oena_capensis_-Etosha_National_Park,_Namibia-8.jpg |
| `streptopelia-senegalensis` | Image | Zeynel Cebeci | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Spilopelia_senegalensis_-_Laughing_Dove_-_K%C3%BC%C3%A7%C3%BCk_kumru_02.JPG |
| `streptopelia-risoria` | Image | Dick Daniels | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Barbary_Dove_(Streptopelia_risoria)_RWD.jpg |
| `columba-livia` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Rock_dove_(Columba_livia).jpg |
