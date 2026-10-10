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
- **[Charte pédagogique](documentation/projet/pedagogie.md)** — objectifs, parcours, contrat points de cours (aides projet, pas polycopié enseignant)
- [Vision](documentation/projet/vision.md) · [Cahier des charges](documentation/projet/cahier-des-charges.md) · [Architecture](documentation/projet/architecture.md)
- [Journal de développement](documentation/journal/)
- [Référentiel ornithologie](documentation/ornithologie/) · [Liste des espèces](documentation/ornithologie/especes.md)

## Statut

Sources : méthode [plan-sources.md](documentation/projet/plan-sources.md) · sprints [01](documentation/projet/sprint-01-sources.md)–**[15](documentation/projet/sprint-15-sources.md)** — **85/85** fiches `complete` (biologie + médias) · suivi [suivi-sources.md](documentation/ornithologie/suivi-sources.md).  
Points de cours : [charte](documentation/projet/pedagogie.md) · **[18/85](documentation/projet/plan-pedagogie.md)** ([pilote 12](documentation/projet/sprint-pedagogie-pilote-12.md) + [lot 01](documentation/projet/sprint-pedagogie-lot-01.md)) — aides à la rétention du **projet**, pas un polycopié enseignant. Développement applicatif (Vite / React / TypeScript / Tailwind) ensuite.

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

Fiches espèce BirdLife / ADW / Avibase (sprints 01–07) : détail dans chaque [fiche du naturaliste](documentation/ornithologie/fiches-naturaliste/).

### Médias retenus (sprints 01–07 — liens ; copie locale plus tard)

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
| `amazona-aestiva` | Image | H. Zell | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Amazona_aestiva_-_Maroparque_01.jpg |
| `amazona-aestiva` | Audio | Ricardo José Mitidieri | CC BY-NC-SA 4.0 | https://xeno-canto.org/554117 |
| `bolborhynchus-lineola-lineola` | Image | thibaudaronson | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Barred_Parakeet,_Oxapampa,_Pasco,_Peru_1.jpg |
| `bolborhynchus-lineola-lineola` | Audio | José | CC BY-NC-SA 4.0 | https://xeno-canto.org/1060162 |
| `cyanoramphus-novaezelandiae` | Image | Bernard Spragg. NZ | CC0 | https://commons.wikimedia.org/wiki/File:Kakariki,_the_red-crowned_parakeet.(Cyanoramphus_novaezelandiae)_(9118899767).jpg |
| `cyanoramphus-novaezelandiae` | Audio | Meena Haribal | CC BY-NC-SA 4.0 | https://xeno-canto.org/956617 |
| `cyanoramphus-auriceps` | Image | Alexeyevitch | Domaine public | https://commons.wikimedia.org/wiki/File:Yellow-crowned_parakeet_-_K%C4%81k%C4%81riki.jpg |
| `cyanoramphus-auriceps` | Audio | James Lidster | CC BY-NC-SA 4.0 | https://xeno-canto.org/526622 |
| `forpus-coelestis` | Image | Ruth Rogers | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Forpus_coelestis_(normal_and_American_white)_-AFA_show_bird-8a.jpg |
| `forpus-coelestis` | Audio | Hans Matheve | CC BY-NC-ND 4.0 | https://xeno-canto.org/512761 |
| `melopsittacus-undulatus` | Image | Lip Kee | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Budgerigars_at_water,_Karratha,_Western_Aaustralia_(7857257686).jpg |
| `melopsittacus-undulatus` | Audio | Samantha Aguirre | CC BY-NC-SA 4.0 | https://xeno-canto.org/940888 |
| `myiopsitta-monachus-monachus` | Image | Juan Emilio | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Myiopsitta_monachus_-Gran_Canaria,_Canary_Islands,_Spain-8.jpg |
| `myiopsitta-monachus-monachus` | Audio | Tanguy Loïs | CC BY-SA 4.0 | https://xeno-canto.org/1143450 |
| `neopsephotus-bourkii` | Image | Ljosa | Domaine public | https://commons.wikimedia.org/wiki/File:Bourkes_Parrot_(Neopsephotus_bourkii)9.jpg |
| `neopsephotus-bourkii` | Audio | Marc Anderson | CC BY-NC-ND 4.0 | https://xeno-canto.org/681342 |
| `neophema-elegans` | Image | Ron Knight | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Elegant_Parrot_(Neophema_elegans)_(8079612251).jpg |
| `neophema-elegans` | Audio | Eddy Smith | CC BY-NC-SA 4.0 | https://xeno-canto.org/755583 |
| `neophema-pulchella` | Image | stephen jones | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Neophema_pulchella_-Twycross_Zoo,_Leicestershire,_England-8a.jpg |
| `neophema-pulchella` | Audio | Andrew Spencer | CC BY-NC-ND 4.0 | https://xeno-canto.org/328216 |
| `neophema-splendida` | Image | Ltshears | Domaine public | https://commons.wikimedia.org/wiki/File:Scarlet_Chested_Parakeet.jpg |
| `neophema-splendida` | Audio | Louis Masarei | CC BY-NC-SA 4.0 | https://xeno-canto.org/924874 |
| `platycercus-eximius-eximius` | Image | Murdock Grewar | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Female_Eastern_Rosella_(Platycercus_eximius).jpg |
| `platycercus-eximius-eximius` | Audio | Romuald Mikusek | CC BY-NC-SA 4.0 | https://xeno-canto.org/1173636 |
| `platycercus-elegans` | Image | John Poulakis | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Platycercus_elegans_-Blue_Mountains_-side-8a.jpg |
| `platycercus-elegans` | Audio | Romuald Mikusek | CC BY-NC-SA 4.0 | https://xeno-canto.org/1173944 |
| `platycercus-icterotis` | Image | Robert Young | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Western_Rosella_(Platycercus_icterotis)_-eating_bread.jpg |
| `platycercus-icterotis` | Audio | Marc Anderson | CC BY-NC-ND 4.0 | https://xeno-canto.org/382800 |
| `platycercus-adscitus` | Image | JJ Harrison | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Pale-headed_Rosella_-_Herbaton.jpg |
| `platycercus-adscitus` | Audio | James Lambert | CC BY-NC-SA 4.0 | https://xeno-canto.org/593967 |
| `poicephalus-senegalus` | Image | ThomHasi / Thomas J. Haslam | CC BY 2.5 | https://commons.wikimedia.org/wiki/File:Senegal_Parrots_-two_on_branch_in_Africa.jpg |
| `poicephalus-senegalus` | Audio | Azens | CC BY-NC-SA 4.0 | https://xeno-canto.org/1093291 |
| `polytelis-alexandrae` | Image | PG Palmer | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Polytelis_alexandrae_-Australia-8.jpg |
| `polytelis-alexandrae` | Audio | Mark Carter | CC BY-NC-SA 4.0 | https://xeno-canto.org/488068 |
| `polytelis-anthopeplus` | Image | David Cook Wildlife Photography | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Polytelis_anthopeplus_-Wyperfeld_National_Park_-Australia-8.jpg |
| `polytelis-anthopeplus` | Audio | Drew Davison | CC BY-NC-SA 4.0 | https://xeno-canto.org/638864 |
| `psephotus-haematonotus-haematonotus` | Image | Toby Hudson | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Red_Rumped_Parrot_Males.jpg |
| `psephotus-haematonotus-haematonotus` | Audio | Marc Anderson | CC BY-NC-ND 4.0 | https://xeno-canto.org/692681 |
| `psittacula-krameri-manillensis` | Image | Bernard Spragg. NZ | CC0 | https://commons.wikimedia.org/wiki/File:Indian_Ringneck_parrot._(Psittacula_krameri),_(9779826796).jpg |
| `psittacula-krameri-manillensis` | Audio | Sam Hambly | CC BY-NC-SA 4.0 | https://xeno-canto.org/1180800 |
| `psittacula-cyanocephala` | Image | J.M.Garg | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Plum-headed_Parakeet_(Psittacula_cyanocephala)_in_Hyderabad_W_IMG_4536.jpg |
| `psittacula-cyanocephala` | Audio | Marc Anderson | CC BY-NC-ND 4.0 | https://xeno-canto.org/809699 |
| `psittacula-eupatria` | Image | Hari K Patibanda | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:A_Male_with_another_-_Alexandrine_Parakeets_(51005695606).jpg |
| `psittacula-eupatria` | Audio | David Darrell-Lambert | CC BY-NC-SA 4.0 | https://xeno-canto.org/1182205 |
| `psittacus-erithacus` | Image | Nasimahmed01 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:African-Grey-Parrot.jpg |
| `psittacus-erithacus` | Audio | Antoine Ede | CC BY-NC-SA 4.0 | https://xeno-canto.org/1137653 |
| `pyrrhura-molinae` | Image | Dan Muntz | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Green_Cheecked_Conure.jpg |
| `pyrrhura-molinae` | Audio | Bo Shunqi 薄顺奇 | CC BY-NC-SA 4.0 | https://xeno-canto.org/1180569 |
| `gracula-religiosa` | Image | Spencer Wright | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Hill_Myna_(Gracula_religiosa_intermedia),_Thrigby_Hall.jpg |
| `gracula-religiosa` | Audio | Ding Li Yong | CC BY-NC-ND 4.0 | https://xeno-canto.org/1157137 |
| `passer-luteus` | Image | Barry Stewart | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Passer_luteus_-_Barry_Stewart_-_661030168.jpeg |
| `passer-luteus` | Audio | Oscar Campbell | CC BY-NC-ND 4.0 | https://xeno-canto.org/985452 |
| `ploceus-cucullatus` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Village_weaver_(Ploceus_cucullatus_cucullatus)_female_and_male.jpg |
| `ploceus-cucullatus` | Audio | JJSUN | CC BY-NC-SA 4.0 | https://xeno-canto.org/1080073 |
| `euplectes-orix` | Image | Bernard DUPONT | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Southern_Red_Bishop_(Euplectes_orix)_male_..._(52656476541).jpg |
| `euplectes-orix` | Audio | African Bioacoustics Community | CC BY-NC-SA 4.0 | https://xeno-canto.org/1183523 |
| `amadina-fasciata` | Image | David Boettger | Domaine public | https://commons.wikimedia.org/wiki/File:Cut-throat_Finch_(Amadina_fasciata,_male_-_Djenn%C3%A9,_Mali,_2008).jpg |
| `amadina-fasciata` | Audio | Peter Boesman | CC BY-NC-ND 4.0 | https://xeno-canto.org/509854 |
| `amandava-amandava` | Image | Mike Prince | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Red_Avadavat_(26082788247).jpg |
| `amandava-amandava` | Audio | Ding Li Yong | CC BY-NC-ND 4.0 | https://xeno-canto.org/698326 |
| `amandava-subflava` | Image | Alan Manson | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Male_Zebra_Waxbill_(Sporaeginthus_subflavus).jpg |
| `amandava-subflava` | Audio | Dries Van de Loock | CC BY-NC-ND 4.0 | https://xeno-canto.org/872300 |
| `erythrura-gouldiae` | Image | Kym Nicolson | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Chloebia_gouldiae,_Elsey,_Northern_Territory,_Australia_1.jpg |
| `erythrura-gouldiae` | Audio | Louis Masarei | CC BY-NC-SA 4.0 | https://xeno-canto.org/960939 |
| `erythrura-trichroa` | Image | Peter Halasz | CC BY-SA 2.5 / 3.0 | https://commons.wikimedia.org/wiki/File:Blue-faced_Parrot-finch_Pengo.jpg |
| `erythrura-trichroa` | Audio | Chi-Hsuan Shao | CC BY-NC-SA 4.0 | https://xeno-canto.org/1003825 |
| `erythrura-psittacea` | Image | JJ Harrison | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Red-throated_Parrotfinch_0A2A5145.jpg |
| `erythrura-psittacea` | Audio | Patrik Åberg | CC BY-NC-SA 3.0 | https://xeno-canto.org/40164 |
| `estrilda-astrild` | Image | Derek Keats | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Common_waxbill_(26408344029).jpg |
| `estrilda-astrild` | Audio | Walter Wallner | CC BY-NC-SA 4.0 | https://xeno-canto.org/1155179 |
| `estrilda-caerulescens` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Lavender_waxbill_(Estrilda_caerulescens).jpg |
| `estrilda-caerulescens` | Audio | Peter Boesman | CC BY-NC-ND 4.0 | https://xeno-canto.org/1081214 |
| `estrilda-melpoda` | Image | Pearly85 | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Orange-cheeked_Waxbill.jpg |
| `estrilda-melpoda` | Audio | Peter Boesman | CC BY-NC-ND 4.0 | https://xeno-canto.org/1081191 |
| `estrilda-troglodytes` | Image | Francesco Veronesi | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Black-rumped_Waxbill_-_Gambia_(31806634704).jpg |
| `estrilda-troglodytes` | Audio | Sébastien Birard | CC BY-NC-SA 4.0 | https://xeno-canto.org/1154517 |
| `lagonosticta-senegala` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Red-billed_firefinch_(Lagonosticta_senegala_senegala)_male.jpg |
| `lagonosticta-senegala` | Audio | African Bioacoustics Community | CC BY-NC-SA 4.0 | https://xeno-canto.org/1145629 |
| `lagonosticta-larvata-vinacea` | Image | Francesco Veronesi | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Vinaceous_Firefinch.jpg |
| `lagonosticta-larvata-vinacea` | Audio | Bram Piot | CC BY-NC-SA 4.0 | https://xeno-canto.org/405752 |
| `lonchura-striata` | Image | Rison Thumboor | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:White-rumped_Munia_(Lonchura_striata)_(32024349690).jpg |
| `lonchura-striata` | Audio | Nishant Bhagwat | CC BY-NC-ND 4.0 | https://xeno-canto.org/1160466 |
| `lonchura-striata-domestiqua` | Image | Anil Kumar | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Society_Finch.jpg |
| `lonchura-striata-domestiqua` | Audio | Nishant Bhagwat | CC BY-NC-ND 4.0 | https://xeno-canto.org/1160466 |
| `lonchura-malacca-malacca` | Image | Photosynthesis85 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Tri_colored_munia.jpg |
| `lonchura-malacca-malacca` | Audio | Nishant Bhagwat | CC BY-NC-ND 4.0 | https://xeno-canto.org/1160217 |
| `lonchura-malacca-atricapilla` | Image | Batin E. Tuwuilu | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Bondol_rawa_(Lonchura_atricapilla).jpg |
| `lonchura-malacca-atricapilla` | Audio | Joan Theng | CC BY-NC-SA 4.0 | https://xeno-canto.org/1141729 |
| `lonchura-cantans` | Image | Edward Cwik | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Silberschn%C3%A4belchen_(Lonchura_cantans).JPG |
| `lonchura-cantans` | Audio | Zsombor Károlyi | CC BY-NC-SA 4.0 | https://xeno-canto.org/1163939 |
| `lonchura-cucullata` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Bronze_mannikin_(Lonchura_cucullata_cucullata).jpg |
| `lonchura-cucullata` | Audio | Jonathan Onongo | CC BY-NC-SA 4.0 | https://xeno-canto.org/1165783 |
| `lonchura-maja` | Image | Michael MK Khor | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Lonchura_maja_by_Michael_MK_Khor.jpg |
| `lonchura-maja` | Audio | Joan Theng | CC BY-NC-SA 4.0 | https://xeno-canto.org/1106789 |
| `lonchura-malabarica` | Image | Anagha devi | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Indian_silverbill-_Euodice_malabarica.jpg |
| `lonchura-malabarica` | Audio | David Darrell-Lambert | CC BY-NC-SA 4.0 | https://xeno-canto.org/1182208 |
| `lonchura-punctulata` | Image | Satdeep Gill | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Scaly-breasted_munia_or_spotted_munia_(Lonchura_punctulata)_at_Dehradun,_Uttarakhand_05.jpg |
| `lonchura-punctulata` | Audio | David Darrell-Lambert | CC BY-NC-SA 4.0 | https://xeno-canto.org/1069340 |
| `lonchura-oryzivora` | Image | Quartl | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Padda_oryzivora_qtl1.jpg |
| `lonchura-oryzivora` | Audio | Kim Chuah Lim | CC BY-NC-SA 4.0 | https://xeno-canto.org/793299 |
| `neochmia-modesta` | Image | Greg Miles | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Plum-headed_Finch-Neochmia_modesta.jpg |
| `neochmia-modesta` | Audio | Liam Manderson | CC BY-NC-SA 4.0 | https://xeno-canto.org/605889 |
| `neochmia-ruficauda` | Image | HaraldW1954 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Star_Finch_(Neochmia_ruficauda_subclarescens)_Wyndham_WA.jpg |
| `neochmia-ruficauda` | Audio | Marc Anderson | CC BY-NC-ND 4.0 | https://xeno-canto.org/436594 |
| `stagonopleura-guttata` | Image | JJ Harrison | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Stagonopleura_guttata_1_-_Glen_Alice.jpg |
| `stagonopleura-guttata` | Audio | Marc Anderson | CC BY-NC-ND 4.0 | https://xeno-canto.org/576505 |
| `taeniopygia-bichenovii` | Image | JJ Harrison | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Taeniopygia_bichenovii_2_-_Glen_Davis.jpg |
| `taeniopygia-bichenovii` | Audio | Marc Anderson | CC BY-NC-ND 4.0 | https://xeno-canto.org/816265 |
| `taeniopygia-guttata-castanotis` | Image | JJ Harrison | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Australian_Zebra_Finch_0A2A3013.jpg |
| `taeniopygia-guttata-castanotis` | Audio | Frank Lambert | CC BY-NC-ND 4.0 | https://xeno-canto.org/407796 |
| `uraeginthus-bengalus` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Red-cheeked_cordon-bleu_(Uraeginthus_bengalus_bengalus)_male.jpg |
| `uraeginthus-bengalus` | Audio | Bram Piot | CC BY-NC-SA 4.0 | https://xeno-canto.org/405791 |
| `uraeginthus-cyanocephalus` | Image | D. Gordon E. Robertson | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Blue-capped_Cordon-bleu,_Ngorongoro.jpg |
| `uraeginthus-cyanocephalus` | Audio | Martin Tlustos | CC BY-NC-SA 4.0 | https://xeno-canto.org/1030357 |
| `poephila-acuticauda` | Image | Lip Kee Yap | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Poephila_acuticauda_-Wulagi,_Darwin,_Australia-8a.jpg |
| `poephila-acuticauda` | Audio | James Lambert | CC BY-NC-ND 4.0 | https://xeno-canto.org/668759 |
| `vidua-chalybeata` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Village_indigobird_(Vidua_chalybeata_okavangoensis)_male_Zimbabwe.jpg |
| `vidua-chalybeata` | Audio | Julien Birard | CC BY-NC-SA 4.0 | https://xeno-canto.org/982686 |
| `vidua-macroura` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Pin-tailed_whydah_(Vidua_macroura)_breeding_male.jpg |
| `vidua-macroura` | Audio | African Bioacoustics Community | CC BY-NC-SA 4.0 | https://xeno-canto.org/1183545 |
| `vidua-orientalis` | Image | Pobpob11 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Sahel_Paradise_Whydah.jpg |
| `vidua-orientalis` | Audio | Bram Piot | CC BY-NC-SA 4.0 | https://xeno-canto.org/436008 |
| `serinus-leucopygius` | Image | Francesco Veronesi | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:White-rumped_Seedeater_-_Gambia_(32270398890).jpg |
| `serinus-leucopygius` | Audio | Bram Piot | CC BY-NC-SA 4.0 | https://xeno-canto.org/469496 |
| `serinus-mozambicus` | Image | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Yellow-fronted_canary_(Crithagra_mozambica_granti)_male_Kruger.jpg |
| `serinus-mozambicus` | Audio | Marna Buys | CC BY-NC-SA 4.0 | https://xeno-canto.org/1140446 |
| `serinus-canaria` | Image | Eduardo Martínez | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Serinus_canaria_-_Canary_-_Wild.jpg |
| `serinus-canaria` | Audio | Radek Grochowski | CC BY-NC-SA 4.0 | https://xeno-canto.org/1156694 |
