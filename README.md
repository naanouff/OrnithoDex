# OrnithoDex

Site pédagogique **open source** pour apprendre les oiseaux de cage et de volière du programme **MP6 – BAC PRO TCVA**, destiné en priorité aux élèves de **seconde professionnelle Technicien conseil vente en animalerie**.

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
- **[Plan pédagogie](documentation/projet/plan-pedagogie.md)** — cadre ingénieur pédagogue + points de cours
- [Vision](documentation/projet/vision.md) · [Cahier des charges](documentation/projet/cahier-des-charges.md) · [Architecture](documentation/projet/architecture.md)
- [Journal de développement](documentation/journal/)
- [Référentiel ornithologie](documentation/ornithologie/) · [Liste des espèces](documentation/ornithologie/especes.md)

## Statut

Sources : méthode [plan-sources.md](documentation/projet/plan-sources.md) · [01](documentation/projet/sprint-01-sources.md) · [02](documentation/projet/sprint-02-sources.md) · **[03a](documentation/projet/sprint-03a-sources.md)** (12 fiches `complete`) · suivi [suivi-sources.md](documentation/ornithologie/suivi-sources.md).  
Points de cours : plan consigné dans [plan-pedagogie.md](documentation/projet/plan-pedagogie.md) (exécution cadre + contenu à venir ; pas de polycopié enseignant). Développement applicatif (Vite / React / TypeScript / Tailwind) ensuite.

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
| `birdlife-datazone` | BirdLife DataZone | BirdLife International | https://datazone.birdlife.org/ | Habitat, population, écologie (principal) |
| `animal-diversity-web` | Animal Diversity Web | University of Michigan | https://animaldiversity.org/ | Dimorphisme, régime, comportement (complément) |
| `avibase` | Avibase | Denis Lepage / BSC-EOC | https://avibase.bsc-eoc.org/ | Contrôle taxonomique, synonymes |
| `xeno-canto` | Xeno-canto | Xeno-canto Foundation | https://xeno-canto.org/ | Enregistrement audio précis (auteur + licence) |
| `wikimedia-commons` | Wikimedia Commons | Wikimedia | https://commons.wikimedia.org/ | Images libres (licence par fichier) |

Fiches espèce BirdLife / ADW / Avibase (sprints 01–04) : détail dans chaque [fiche du naturaliste](documentation/ornithologie/fiches-naturaliste/).

### Médias retenus (sprints 01–04 — liens ; copie locale plus tard)

| Espèce (slug) | Type | Auteur | Licence | URL |
|---------------|------|--------|---------|-----|
| `coturnix-chinensis` | Image | DickDaniels | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Chinese_Painted_Quail_RWD12a.jpg |
| `coturnix-chinensis` | Audio | Richard E. Webster | CC BY-NC-SA 4.0 | https://xeno-canto.org/1076265 |
| `gallus-gallus-domesticus` | Image | SimonWaldherr | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Rooster_and_Hen.jpg |
| `gallus-gallus-domesticus` | Audio | Maria Ulfah | CC BY-NC-SA 4.0 | https://xeno-canto.org/1181554 |
| `colinus-virginianus` | Image | DickDaniels | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Northern_Bobwhite_female_RWD.jpg |
| `colinus-virginianus` | Audio | FREDERIC Lionel | CC BY-NC-SA 4.0 | https://xeno-canto.org/919215 |
| `callipepla-californica` | Image | Nick Myatt / ODFW | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Valley_quail_myatt_(5489811278)_(cropped).jpg |
| `callipepla-californica` | Audio | Ron Overholtz | CC BY-NC-SA 4.0 | https://xeno-canto.org/570687 |
| `aix-galericulata` | Image | Alexis Lours | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Mandarin_duck_(Aix_galericulata).jpg |
| `aix-galericulata` | Audio | Simon Gillings | CC BY-NC-SA 4.0 | https://xeno-canto.org/1137635 |
| `aix-sponsa` | Image | Dick Daniels | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Wood_Duck_(Aix_sponsa).jpg |
| `aix-sponsa` | Audio | Don Profota | CC BY-NC-SA 4.0 | https://xeno-canto.org/1173163 |
| `geopelia-cuneata` | Image | Maurice van Bruggen | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Geopelia_cuneata.JPG |
| `geopelia-cuneata` | Audio | Nigel Jackett | CC BY-NC-SA 3.0 | https://xeno-canto.org/165147 |
| `geopelia-striata` | Image | Angah hfz | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Burung_Merbuk.JPG |
| `geopelia-striata` | Audio | Arend Wassink | CC BY-NC-SA 4.0 | https://xeno-canto.org/1081912 |
| `oena-capensis` | Image | Neil Strickland | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Oena_capensis_-Etosha_National_Park,_Namibia-8.jpg |
| `oena-capensis` | Audio | Stanislas Wroza | CC BY-NC-SA 4.0 | https://xeno-canto.org/951388 |
| `streptopelia-senegalensis` | Image | Zeynel Cebeci | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Spilopelia_senegalensis_-_Laughing_Dove_-_K%C3%BC%C3%A7%C3%BCk_kumru_02.JPG |
| `streptopelia-senegalensis` | Audio | African Bioacoustics Community | CC BY-NC-SA 4.0 | https://xeno-canto.org/1183962 |
| `streptopelia-risoria` | Image | Dick Daniels | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Barbary_Dove_(Streptopelia_risoria)_RWD.jpg |
| `streptopelia-risoria` | Audio | Zsombor Károlyi | CC BY-NC-SA 4.0 | https://xeno-canto.org/1163976 |
| `columba-livia` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Rock_dove_(Columba_livia).jpg |
| `columba-livia` | Audio | Pietro Bonanno | CC BY-NC-SA 4.0 | https://xeno-canto.org/977797 |
| `eolophus-roseicapilla` | Image | Tatiana Gerus | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Eolophus_roseicapilla_-_a_pair_of_Galahs_-Australia.jpg |
| `eolophus-roseicapilla` | Audio | Khristos Nizamis | CC BY-NC-ND 4.0 | https://xeno-canto.org/1181679 |
| `nymphicus-hollandicus` | Image | Zefry | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Cockatiel_Parakeet_(Nymphicus_hollandicus)9.jpg |
| `nymphicus-hollandicus` | Audio | Thierry THOMAS | CC BY-NC-SA 4.0 | https://xeno-canto.org/1163859 |
| `cacatua-alba` | Image | Kevin T | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Cacatua_alba_-Coconuts_Bar_-Cozumel_-Mexico-8a.jpg |
| `cacatua-alba` | Audio | Richard E. Webster | CC BY-NC-SA 4.0 | https://xeno-canto.org/1074294 |
| `cacatua-galerita` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Sulphur-crested_cockatoo_(Cacatua_galerita_galerita)_Sydney.jpg |
| `cacatua-galerita` | Audio | AK | CC BY-NC-SA 4.0 | https://xeno-canto.org/1177819 |
| `agapornis-roseicollis` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Rosy-faced_lovebird_(Agapornis_roseicollis_roseicollis)_flock.jpg |
| `agapornis-roseicollis` | Audio | African Bioacoustics Community | CC BY-NC-SA 4.0 | https://xeno-canto.org/1101865 |
| `agapornis-fischeri` | Image | Peter Békési | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Fischer%27s_Lovebird,_(Agapornis_fischeri)_perching_on_a_box.jpg |
| `agapornis-fischeri` | Audio | Peter Boesman | CC BY-NC-ND 4.0 | https://xeno-canto.org/947900 |
| `agapornis-personatus` | Image | Becky Matsubara | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Yellow-collared_Lovebird_(27582137244).jpg |
| `agapornis-personatus` | Audio | Peter Boesman | CC BY-NC-ND 4.0 | https://xeno-canto.org/509849 |
| `agapornis-lilianae` | Image | Lip Kee | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Lilian%27s_Lovebird_(Agapornis_lilianae)_(23710441211).jpg |
| `agapornis-lilianae` | Audio | Magnus Wadstein | CC BY-NC-SA 4.0 | https://xeno-canto.org/933097 |
| `agapornis-nigrigenis` | Image | Huub Veldhuijzen van Zanten / Naturalis | CC BY-SA | https://commons.wikimedia.org/wiki/File:Naturalis_Biodiversity_Center_-_ZMA.AVES.56942_-_Agapornis_nigrigenis_Sclater,_W.L.,_1906_-_Psittacidae_-_skin_specimen.jpeg |
| `agapornis-nigrigenis` | Audio | Dries Van de Loock | CC BY-NC-SA 4.0 | https://xeno-canto.org/585260 |
