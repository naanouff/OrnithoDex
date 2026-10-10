/* eslint-disable */
/**
 * Dataset généré — ne pas éditer à la main.
 * Source : documentation/ornithologie/fiches-naturaliste/*.md
 * Régénérer : npm run data:birds
 */
import type { Bird } from '../types/bird'

export const birds: Bird[] = [
  {
    "id": "agapornis-fischeri",
    "scientificName": "Agapornis fischeri",
    "commonName": "Inséparable de Fischer",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Near Threatened** (2021 ; A2bd). Endémique nicheur Tanzanie nord-centrale ; EOO ≈ 206 000 km² ; population estimée ≈ 290 000–1 002 000 individus ; tendance **en diminution** (capture passée, hybridation possible). Face orange, corps vert vif, anneau oculaire blanc, bec orange-rouge.",
          "sourceIds": [
            "birdlife-agapornis-fischeri",
            "adw-agapornis-fischeri"
          ]
        },
        {
          "text": "Sexes semblables (plumage).",
          "sourceIds": [
            "adw-agapornis-fischeri"
          ]
        },
        {
          "text": "Bois semi-arides à *Acacia*, *Adansonia*, *Commiphora* (1 100–2 200 m) ; savane à palmiers, cultures, forêt riveraine en saison sèche ; savane sèche (major).",
          "sourceIds": [
            "birdlife-agapornis-fischeri",
            "adw-agapornis-fischeri"
          ]
        },
        {
          "text": "Surtout granivore (têtes de graines et sol) ; aussi graines d’*Acacia* en arbre ; fruits (petites figues) ; boit quotidiennement.",
          "sourceIds": [
            "birdlife-agapornis-fischeri",
            "adw-agapornis-fischeri"
          ]
        },
        {
          "text": "Non migrateur. Groupes serrés (10–20 à plusieurs centaines) ; couples à vie ; hybridation possible avec *A. personatus*.",
          "sourceIds": [
            "birdlife-agapornis-fischeri",
            "adw-agapornis-fischeri"
          ]
        },
        {
          "text": "Enregistrement XC947900 (Peter Boesman — CC BY-NC-ND 4.0) : https://xeno-canto.org/947900 ADW : séries de gazouillis aigus et forts.",
          "sourceIds": [
            "media-agapornis-fischeri-audio",
            "adw-agapornis-fischeri"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Inséparable de Fischer ↔ *Agapornis fischeri* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *A. personatus* (tête noire) — Fischer = face **orange**, anneau oculaire blanc",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "**Near Threatened** ; endémique Tanzanie ; population en diminution",
        "sourceIds": [
          "birdlife-agapornis-fischeri",
          "adw-agapornis-fischeri"
        ]
      },
      {
        "level": "sourcé",
        "text": "Sexes semblables ; granivore ; groupes serrés",
        "sourceIds": [
          "birdlife-agapornis-fischeri",
          "adw-agapornis-fischeri"
        ]
      },
      {
        "level": "sourcé",
        "text": "Hybridation possible avec *A. personatus*",
        "sourceIds": [
          "birdlife-agapornis-fischeri",
          "adw-agapornis-fischeri"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-agapornis-fischeri",
        "title": "Fischer's Lovebird Agapornis fischeri — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2021",
        "url": "https://datazone.birdlife.org/species/factsheet/fischers-lovebird-agapornis-fischeri",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-agapornis-fischeri",
        "title": "Agapornis fischeri (Fischer's lovebird)",
        "publisher": "Animal Diversity Web / Leah Blazek",
        "url": "https://animaldiversity.org/accounts/Agapornis_fischeri/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-agapornis-fischeri-img",
        "title": "File:Fischer's Lovebird, (Agapornis fischeri) perching on a box.jpg",
        "publisher": "Peter Békési / Wikimedia Commons",
        "year": "2007",
        "url": "https://commons.wikimedia.org/wiki/File:Fischer%27s_Lovebird,_(Agapornis_fischeri)_perching_on_a_box.jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-agapornis-fischeri-audio",
        "title": "XC947900",
        "publisher": "Peter Boesman / Xeno-canto",
        "url": "https://xeno-canto.org/947900",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Tanzanie"
      ],
      "hemisphere": "AF",
      "sourceIds": [
        "birdlife-agapornis-fischeri",
        "adw-agapornis-fischeri"
      ]
    },
    "imageCredit": "Peter Békési — CC BY-SA 2.0",
    "imageSourceId": "media-agapornis-fischeri-img",
    "image": "/images/birds/agapornis-fischeri.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Fischer%27s_Lovebird,_(Agapornis_fischeri)_perching_on_a_box.jpg",
    "audio": [
      "/audio/birds/agapornis-fischeri.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/947900"
    ]
  },
  {
    "id": "agapornis-lilianae",
    "scientificName": "Agapornis lilianae",
    "commonName": "Inséparable de Liliane",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Near Threatened** (2018 ; C1). EOO ≈ 539 000 km² ; ≈ 6 000–15 000 individus matures ; tendance **en diminution**. Vallée du Zambèze (Mozambique, Zimbabwe), Luangwa (Zambie, Tanzanie sud), Shire (Malawi).",
          "sourceIds": [
            "birdlife-agapornis-lilianae"
          ]
        },
        {
          "text": "`na` — non décrit dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-agapornis-lilianae"
          ]
        },
        {
          "text": "Forte association au mopane (*Colophospermum mopane*) au sud ; aussi *Acacia* sur alluvions, forêt riveraine, figuiers au nord ; à Liwonde (Malawi) surtout prairies humides. Habitats : savane sèche (major), forêts sèches et humides de basse altitude, cultures (suitable).",
          "sourceIds": [
            "birdlife-agapornis-lilianae"
          ]
        },
        {
          "text": "Graines de graminées (*Hyparrhenia*, mil, riz sauvage *Oryza perennis*) ; aussi fleurs, graines et fruits d’autres plantes.",
          "sourceIds": [
            "birdlife-agapornis-lilianae (citant del Hoyo",
            "al. 1997",
            "Mzumara",
            "al. 2014)"
          ]
        },
        {
          "text": "Non migrateur. Nid couvert dans crevasses de mopane ; reproduction janvier–mars et juin–juillet (Zambie). Menaces : capture pour le commerce, inondations de barrages, statut de ravageur agricole.",
          "sourceIds": [
            "birdlife-agapornis-lilianae"
          ]
        },
        {
          "text": "Enregistrement XC933097 (Magnus Wadstein — CC BY-NC-SA 4.0) : https://xeno-canto.org/933097",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Inséparable de Liliane ↔ *Agapornis lilianae* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *A. nigrigenis* (aussi mopane / Zambèze) — Liliane = NT, aire plus large",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "**Near Threatened** ; population ≈ 6 000–15 000 matures ; en diminution",
        "sourceIds": [
          "birdlife-agapornis-lilianae"
        ]
      },
      {
        "level": "sourcé",
        "text": "Forte association au mopane ; graines de graminées (+ fleurs / fruits)",
        "sourceIds": [
          "birdlife-agapornis-lilianae"
        ]
      },
      {
        "level": "sourcé",
        "text": "Menaces : commerce, barrages, statut de ravageur agricole",
        "sourceIds": [
          "birdlife-agapornis-lilianae"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-agapornis-lilianae",
        "title": "Nyasa Lovebird Agapornis lilianae — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/nyasa-lovebird-agapornis-lilianae",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-agapornis-lilianae-img",
        "title": "File:Lilian's Lovebird (Agapornis lilianae) (23710441211).jpg",
        "publisher": "Lip Kee / Wikimedia Commons",
        "year": "2015",
        "url": "https://commons.wikimedia.org/wiki/File:Lilian%27s_Lovebird_(Agapornis_lilianae)_(23710441211).jpg",
        "note": "CC BY-SA 2.0 ; Liwonde, Malawi"
      },
      {
        "id": "media-agapornis-lilianae-audio",
        "title": "XC933097",
        "publisher": "Magnus Wadstein / Xeno-canto",
        "url": "https://xeno-canto.org/933097",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Tanzanie"
      ],
      "hemisphere": "AF",
      "sourceIds": [
        "birdlife-agapornis-lilianae"
      ]
    },
    "imageCredit": "Lip Kee — CC BY-SA 2.0",
    "imageSourceId": "media-agapornis-lilianae-img",
    "image": "/images/birds/agapornis-lilianae.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Lilian%27s_Lovebird_(Agapornis_lilianae)_(23710441211).jpg",
    "audio": [
      "/audio/birds/agapornis-lilianae.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/933097"
    ]
  },
  {
    "id": "agapornis-nigrigenis",
    "scientificName": "Agapornis nigrigenis",
    "commonName": "Inséparable nigrigenis",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Vulnerable** (évaluation BirdLife 2025). EOO ≈ 19 800 km² ; ≈ 8 000–11 500 individus matures ; tendance **en diminution**. Distribution patchy sud-ouest Zambie (entre Kafue et Zambèze). Non migrateur ; 600–1 000 m.",
          "sourceIds": [
            "birdlife-agapornis-nigrigenis"
          ]
        },
        {
          "text": "`na` — non décrit dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-agapornis-nigrigenis"
          ]
        },
        {
          "text": "Bois décidus à mopane (*Colophospermum*) avec eau de surface permanente ; déplacements vers végétation riveraine et cultures pour s’alimenter et boire ; boit deux fois par jour. Habitats : forêt sèche et cultures (major).",
          "sourceIds": [
            "birdlife-agapornis-nigrigenis"
          ]
        },
        {
          "text": "Surtout graines de graminées annuelles et d’herbes, graines de cultures (mil, sorgho) ; aussi invertébrés, feuilles, fleurs, nectar, écorce, lichen, résine et sol.",
          "sourceIds": [
            "birdlife-agapornis-nigrigenis (citant Dodman",
            "Warburton & Perrin)"
          ]
        },
        {
          "text": "En saison sèche, rassemblements jusqu’à 800+ individus ; évite points d’eau régulièrement dérangés ; niche en cavités de mopanes matures (janvier–mai) ; dortoirs en cavités naturelles.",
          "sourceIds": [
            "birdlife-agapornis-nigrigenis"
          ]
        },
        {
          "text": "Enregistrement XC585260 (Dries Van de Loock — CC BY-NC-SA 4.0) : https://xeno-canto.org/585260",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Inséparable nigrigenis ↔ *Agapornis nigrigenis* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *A. lilianae* — nigrigenis = **Vulnerable**, aire très restreinte (Zambie)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "≈ 8 000–11 500 matures ; EOO ≈ 19 800 km² ; en diminution",
        "sourceIds": [
          "birdlife-agapornis-nigrigenis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Bois à mopane avec eau permanente ; niche en cavités",
        "sourceIds": [
          "birdlife-agapornis-nigrigenis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Régime surtout graines (graminées / cultures) ; grands rassemblements en saison sèche",
        "sourceIds": [
          "birdlife-agapornis-nigrigenis"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-agapornis-nigrigenis",
        "title": "Black-cheeked Lovebird Agapornis nigrigenis — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2025",
        "url": "https://datazone.birdlife.org/species/factsheet/black-cheeked-lovebird-agapornis-nigrigenis",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-agapornis-nigrigenis-img",
        "title": "File:Naturalis … skin specimen.jpeg",
        "publisher": "Huub Veldhuijzen van Zanten / Naturalis Biodiversity Center",
        "year": "1923 (spécimen)",
        "url": "https://commons.wikimedia.org/wiki/File:Naturalis_Biodiversity_Center_-_ZMA.AVES.56942_-_Agapornis_nigrigenis_Sclater,_W.L.,_1906_-_Psittacidae_-_skin_specimen.jpeg",
        "note": "Spécimen femelle ; pas de photo vivante libre trouvée"
      },
      {
        "id": "media-agapornis-nigrigenis-audio",
        "title": "XC585260",
        "publisher": "Dries Van de Loock / Xeno-canto",
        "url": "https://xeno-canto.org/585260",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Huub Veldhuijzen van Zanten / Naturalis — CC BY-SA",
    "imageSourceId": "media-agapornis-nigrigenis-img",
    "image": "/images/birds/agapornis-nigrigenis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Naturalis_Biodiversity_Center_-_ZMA.AVES.56942_-_Agapornis_nigrigenis_Sclater,_W.L.,_1906_-_Psittacidae_-_skin_specimen.jpeg",
    "audio": [
      "/audio/birds/agapornis-nigrigenis.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/585260"
    ]
  },
  {
    "id": "agapornis-personatus",
    "scientificName": "Agapornis personatus",
    "commonName": "Inséparable masqué ou à tête noire",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). Endémique nicheur Tanzanie ; EOO ≈ 226 000 km² ; localement commun ; tendance **stable**. Non migrateur. Elevation typique 1 100–1 800 m.",
          "sourceIds": [
            "birdlife-agapornis-personatus"
          ]
        },
        {
          "text": "`na` — non décrit dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-agapornis-personatus"
          ]
        },
        {
          "text": "Savane sèche (major).",
          "sourceIds": [
            "birdlife-agapornis-personatus"
          ]
        },
        {
          "text": "`na` — non détaillé dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-agapornis-personatus"
          ]
        },
        {
          "text": "Non migrateur ; population suspectée stable. Hybridation avec *A. fischeri* documentée (populations sauvages / échappés).",
          "sourceIds": [
            "birdlife-agapornis-personatus",
            "birdlife-agapornis-fischeri"
          ]
        },
        {
          "text": "Enregistrement XC509849 (Peter Boesman — CC BY-NC-ND 4.0) : https://xeno-canto.org/509849",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Inséparable masqué / à tête noire ↔ *Agapornis personatus* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *A. fischeri* — personatus = tête **noire** (masque)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; endémique Tanzanie ; tendance stable",
        "sourceIds": [
          "birdlife-agapornis-personatus",
          "birdlife-agapornis-fischeri"
        ]
      },
      {
        "level": "sourcé",
        "text": "Savane sèche ; non migrateur",
        "sourceIds": [
          "birdlife-agapornis-personatus",
          "birdlife-agapornis-fischeri"
        ]
      },
      {
        "level": "sourcé",
        "text": "Hybridation documentée avec *A. fischeri*",
        "sourceIds": [
          "birdlife-agapornis-personatus",
          "birdlife-agapornis-fischeri"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-agapornis-personatus",
        "title": "Yellow-collared Lovebird Agapornis personatus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/yellow-collared-lovebird-agapornis-personatus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "birdlife-agapornis-fischeri",
        "title": "Fischer's Lovebird Agapornis fischeri — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2021",
        "url": "https://datazone.birdlife.org/species/factsheet/fischers-lovebird-agapornis-fischeri",
        "note": "Hybridation"
      },
      {
        "id": "media-agapornis-personatus-img",
        "title": "File:Yellow-collared Lovebird (27582137244).jpg",
        "publisher": "Becky Matsubara / Wikimedia Commons",
        "year": "2016",
        "url": "https://commons.wikimedia.org/wiki/File:Yellow-collared_Lovebird_(27582137244).jpg",
        "note": "CC BY 2.0 ; Tarangire, Tanzanie"
      },
      {
        "id": "media-agapornis-personatus-audio",
        "title": "XC509849",
        "publisher": "Peter Boesman / Xeno-canto",
        "url": "https://xeno-canto.org/509849",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Tanzanie"
      ],
      "hemisphere": "AF",
      "sourceIds": [
        "birdlife-agapornis-personatus"
      ]
    },
    "imageCredit": "Becky Matsubara — CC BY 2.0",
    "imageSourceId": "media-agapornis-personatus-img",
    "image": "/images/birds/agapornis-personatus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Yellow-collared_Lovebird_(27582137244).jpg",
    "audio": [
      "/audio/birds/agapornis-personatus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/509849"
    ]
  },
  {
    "id": "agapornis-roseicollis",
    "scientificName": "Agapornis roseicollis",
    "commonName": "Inséparable à face rose",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 768 000 km² ; natif Angola, Namibie, Afrique du Sud ; tendance **en diminution** (exploitation). Localement commun près de l’eau. ≈ 15 cm, ≈ 55 g ; face et poitrine rose-rosé, corps vert, croupion bleu.",
          "sourceIds": [
            "birdlife-agapornis-roseicollis",
            "adw-agapornis-roseicollis"
          ]
        },
        {
          "text": "Faible : femelle un peu plus grande et plumage légèrement plus terne ; mâle un peu plus coloré.",
          "sourceIds": [
            "adw-agapornis-roseicollis"
          ]
        },
        {
          "text": "BirdLife : savane sèche (major), fourrés secs, zones rocheuses (suitable). ADW : régions sèches près d’eau permanente, lisières désertiques et boisements clairsemés, 0–1 500 m.",
          "sourceIds": [
            "birdlife-agapornis-roseicollis",
            "adw-agapornis-roseicollis"
          ]
        },
        {
          "text": "Surtout graines (*Albizia*, *Acacia*, etc.) au sol ou sur plantes ; aussi fleurs (pétales, étamines) ; boit plusieurs fois par jour.",
          "sourceIds": [
            "adw-agapornis-roseicollis"
          ]
        },
        {
          "text": "Non migrateur. Très social : groupes typiques 5–20, parfois ≈ 100 ; diurne ; dort dans nids de tisserins ; couples monogames précoces.",
          "sourceIds": [
            "birdlife-agapornis-roseicollis",
            "adw-agapornis-roseicollis"
          ]
        },
        {
          "text": "Enregistrement XC1101865 (African Bioacoustics Community — CC BY-NC-SA 4.0) : https://xeno-canto.org/1101865 ADW : cris aigus / séries de cris ; frottement de mandibules.",
          "sourceIds": [
            "media-agapornis-roseicollis-audio",
            "adw-agapornis-roseicollis"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Inséparable à face rose ↔ *Agapornis roseicollis* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : autres *Agapornis* du programme — repère = face / poitrine **rose**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance en diminution (exploitation)",
        "sourceIds": [
          "birdlife-agapornis-roseicollis",
          "adw-agapornis-roseicollis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Savane sèche près de l’eau ; surtout graines ; boit souvent",
        "sourceIds": [
          "birdlife-agapornis-roseicollis",
          "adw-agapornis-roseicollis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Très social (groupes) ; couples monogames ; dimorphisme faible",
        "sourceIds": [
          "birdlife-agapornis-roseicollis",
          "adw-agapornis-roseicollis"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-agapornis-roseicollis",
        "title": "Rosy-faced Lovebird Agapornis roseicollis — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/rosy-faced-lovebird-agapornis-roseicollis",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-agapornis-roseicollis",
        "title": "Agapornis roseicollis (rosy-faced lovebird)",
        "publisher": "Animal Diversity Web / Jessica Vonck",
        "url": "https://animaldiversity.org/accounts/Agapornis_roseicollis/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-agapornis-roseicollis-img",
        "title": "File:Rosy-faced lovebird (Agapornis roseicollis roseicollis) flock.jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2018",
        "url": "https://commons.wikimedia.org/wiki/File:Rosy-faced_lovebird_(Agapornis_roseicollis_roseicollis)_flock.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-agapornis-roseicollis-audio",
        "title": "XC1101865",
        "publisher": "African Bioacoustics Community / Xeno-canto",
        "url": "https://xeno-canto.org/1101865",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Afrique",
        "Afrique du Sud",
        "Namibie",
        "Angola"
      ],
      "hemisphere": "AF",
      "sourceIds": [
        "birdlife-agapornis-roseicollis",
        "adw-agapornis-roseicollis"
      ]
    },
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-agapornis-roseicollis-img",
    "image": "/images/birds/agapornis-roseicollis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Rosy-faced_lovebird_(Agapornis_roseicollis_roseicollis)_flock.jpg",
    "audio": [
      "/audio/birds/agapornis-roseicollis.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1101865"
    ]
  },
  {
    "id": "aix-galericulata",
    "scientificName": "Aix galericulata",
    "commonName": "Canard mandarin",
    "order": "Ansériformes",
    "family": "Anatidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). Migrateur complet. Population globale estimée ≈ 65 000–66 000 individus ; tendance **en diminution**. Aires natives Asie de l’Est ; populations introduites en Europe.",
          "sourceIds": [
            "birdlife-aix-galericulata"
          ]
        },
        {
          "text": "Fort : mâle en plumage nuptial avec « voiles » dorsales, crête orange/crème et bandeau oculaire blanc ; femelle plus terne, grise, avec trait blanc derrière l’œil.",
          "sourceIds": [
            "adw-aix-galericulata"
          ]
        },
        {
          "text": "Forêts tempérées et lacs d’eau douce (majeurs, BirdLife) ; ADW : étangs boisés et cours d’eau rocheux rapides en Chine/Japon.",
          "sourceIds": [
            "birdlife-aix-galericulata",
            "adw-aix-galericulata"
          ]
        },
        {
          "text": "Plantes aquatiques, riz et autres grains.",
          "sourceIds": [
            "adw-aix-galericulata"
          ]
        },
        {
          "text": "Migrateur en Extrême-Orient ; certaines populations britanniques sédentaires, d’autres capables de longs vols. Nidiation en cavité d’arbre ; parade nuptiale élaborée (ADW).",
          "sourceIds": [
            "adw-aix-galericulata",
            "birdlife-aix-galericulata (statut migrateur)"
          ]
        },
        {
          "text": "Enregistrement XC1137635 (Simon Gillings — CC BY-NC-SA 4.0) : https://xeno-canto.org/1137635",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Canard mandarin ↔ *Aix galericulata* ; Ansériformes ; Anatidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Même genre que le canard carolin (*Aix sponsa*) — ne pas confondre les mâles",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme fort : mâle à « voiles » dorsales et crête ; femelle grise + trait blanc",
        "sourceIds": [
          "birdlife-aix-galericulata",
          "adw-aix-galericulata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Migrateur (Asie) ; nid en cavité d’arbre ; forêts / lacs",
        "sourceIds": [
          "birdlife-aix-galericulata",
          "adw-aix-galericulata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance en diminution",
        "sourceIds": [
          "birdlife-aix-galericulata",
          "adw-aix-galericulata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-aix-galericulata",
        "title": "Mandarin Duck Aix galericulata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/mandarin-duck-aix-galericulata",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-aix-galericulata",
        "title": "Aix galericulata (Mandarin duck)",
        "publisher": "Animal Diversity Web / Marie S. Harris",
        "url": "https://animaldiversity.org/accounts/Aix_galericulata/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-aix-galericulata-img",
        "title": "File:Mandarin duck (Aix galericulata).jpg",
        "publisher": "Alexis Lours / Wikimedia Commons",
        "year": "2021",
        "url": "https://commons.wikimedia.org/wiki/File:Mandarin_duck_(Aix_galericulata).jpg",
        "note": "CC BY 4.0"
      },
      {
        "id": "media-aix-galericulata-audio",
        "title": "XC1137635",
        "publisher": "Simon Gillings / Xeno-canto",
        "url": "https://xeno-canto.org/1137635",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Chine",
        "Asie",
        "Asie de l’Est",
        "Japon",
        "Europe"
      ],
      "hemisphere": "multi",
      "sourceIds": [
        "birdlife-aix-galericulata",
        "adw-aix-galericulata"
      ]
    },
    "imageCredit": "Alexis Lours — CC BY 4.0",
    "imageSourceId": "media-aix-galericulata-img",
    "image": "/images/birds/aix-galericulata.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Mandarin_duck_(Aix_galericulata).jpg",
    "audio": [
      "/audio/birds/aix-galericulata.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1137635"
    ]
  },
  {
    "id": "aix-sponsa",
    "scientificName": "Aix sponsa",
    "commonName": "Canard carolin",
    "order": "Ansériformes",
    "family": "Anatidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2021). Migrateur complet. Population ≈ 4 600 000 individus matures ; tendance **en augmentation**.",
          "sourceIds": [
            "birdlife-aix-sponsa"
          ]
        },
        {
          "text": "Fort : mâle à tête irisée vert/bleu/violet, poitrine rouille, flancs bronze ; femelle brun-gris avec anneau oculaire blanc.",
          "sourceIds": [
            "adw-aix-sponsa"
          ]
        },
        {
          "text": "Forêts tempérées et lacs (majeurs, BirdLife) ; ADW : zones boisées le long de lacs, rivières, étangs et zones humides ; cavités de nidification près de l’eau.",
          "sourceIds": [
            "birdlife-aix-sponsa",
            "adw-aix-sponsa"
          ]
        },
        {
          "text": "Omnivore : glands, noix, graines, plantes aquatiques, insectes et autres invertébrés.",
          "sourceIds": [
            "adw-aix-sponsa"
          ]
        },
        {
          "text": "Diurne, social ; marche, nage et vol ; monogamie sérielle ; nid en cavité ; femelle seule élève les jeunes.",
          "sourceIds": [
            "adw-aix-sponsa"
          ]
        },
        {
          "text": "Enregistrement XC1173163 (Don Profota — CC BY-NC-SA 4.0) : https://xeno-canto.org/1173163",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Canard carolin ↔ *Aix sponsa* ; Ansériformes ; Anatidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : canard mandarin (*A. galericulata*) — même genre *Aix*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Mâle tête irisée vert/bleu/violet ; femelle anneau oculaire blanc",
        "sourceIds": [
          "birdlife-aix-sponsa",
          "adw-aix-sponsa"
        ]
      },
      {
        "level": "sourcé",
        "text": "Migrateur ; nid en cavité près de l’eau ; omnivore",
        "sourceIds": [
          "birdlife-aix-sponsa",
          "adw-aix-sponsa"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance en **augmentation**",
        "sourceIds": [
          "birdlife-aix-sponsa",
          "adw-aix-sponsa"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-aix-sponsa",
        "title": "Wood Duck Aix sponsa — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2021",
        "url": "https://datazone.birdlife.org/species/factsheet/wood-duck-aix-sponsa",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-aix-sponsa",
        "title": "Aix sponsa (wood duck)",
        "publisher": "Animal Diversity Web / Andrea Pope",
        "url": "https://animaldiversity.org/accounts/Aix_sponsa/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-aix-sponsa-img",
        "title": "File:Wood Duck (Aix sponsa).jpg",
        "publisher": "Dick Daniels / Wikimedia Commons",
        "year": "2009",
        "url": "https://commons.wikimedia.org/wiki/File:Wood_Duck_(Aix_sponsa).jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-aix-sponsa-audio",
        "title": "XC1173163",
        "publisher": "Don Profota / Xeno-canto",
        "url": "https://xeno-canto.org/1173163",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Dick Daniels — CC BY-SA 3.0",
    "imageSourceId": "media-aix-sponsa-img",
    "image": "/images/birds/aix-sponsa.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Wood_Duck_(Aix_sponsa).jpg",
    "audio": [
      "/audio/birds/aix-sponsa.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1173163"
    ]
  },
  {
    "id": "amadina-fasciata",
    "scientificName": "Amadina fasciata",
    "commonName": "Cou coupé",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 23 900 000 km² ; population non quantifiée, commune ou localement commune (Clement 1999 *via* BirdLife) ; tendance **stable**. Altitude 0–2 150 m. Commerce d’oiseaux signalé à prévalence élevée (Donald *et al.* 2024 *via* BirdLife).",
          "sourceIds": [
            "birdlife-amadina-fasciata"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche (majeur) ; prairies et fourrés secs (adaptés).",
          "sourceIds": [
            "birdlife-amadina-fasciata"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur.",
          "sourceIds": [
            "birdlife-amadina-fasciata"
          ]
        },
        {
          "text": "Enregistrement XC509854 (Peter Boesman — CC BY-NC-ND 4.0) : https://xeno-canto.org/509854",
          "sourceIds": [
            "media-amadina-fasciata-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Cou coupé ↔ *Amadina fasciata* ; Passériformes ; **Estrildidés**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Entrée Estrildidés — distinct des Plocéidés (*Ploceus*, *Euplectes*)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; savane sèche (majeur)",
        "sourceIds": [
          "birdlife-amadina-fasciata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; EOO très vaste (≈ 23,9 M km²)",
        "sourceIds": [
          "birdlife-amadina-fasciata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce d’oiseaux signalé à prévalence élevée (BirdLife)",
        "sourceIds": [
          "birdlife-amadina-fasciata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-amadina-fasciata",
        "title": "Cut-throat Finch Amadina fasciata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/cut-throat-finch-amadina-fasciata",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-amadina-fasciata-img",
        "title": "File:Cut-throat Finch (Amadina fasciata, male - Djenné, Mali, 2008).jpg",
        "publisher": "David Boettger / Wikimedia Commons",
        "year": "2008",
        "url": "https://commons.wikimedia.org/wiki/File:Cut-throat_Finch_(Amadina_fasciata,_male_-_Djenn%C3%A9,_Mali,_2008).jpg",
        "note": "Domaine public"
      },
      {
        "id": "media-amadina-fasciata-audio",
        "title": "XC509854",
        "publisher": "Peter Boesman / Xeno-canto",
        "url": "https://xeno-canto.org/509854",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "imageCredit": "David Boettger — Domaine public",
    "imageSourceId": "media-amadina-fasciata-img",
    "image": "/images/birds/amadina-fasciata.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Cut-throat_Finch_(Amadina_fasciata,_male_-_Djenn%C3%A9,_Mali,_2008).jpg",
    "audio": [
      "/audio/birds/amadina-fasciata.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/509854"
    ]
  },
  {
    "id": "amandava-amandava",
    "scientificName": "Amandava amandava",
    "commonName": "Bengali de Bombay",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 16 300 000 km² ; population non quantifiée, commune ou localement commune (Clement 1999 *via* BirdLife) ; tendance **stable**. ~10 cm ; mâle en nuptial : rouge vif à points blancs. Altitude 0–2 400 m.",
          "sourceIds": [
            "birdlife-amandava-amandava",
            "adw-amandava-amandava"
          ]
        },
        {
          "text": "Mâle nuptial plus coloré (rouge intense) ; femelle et mâle hors nuptial plus bruns / jaunâtres.",
          "sourceIds": [
            "adw-amandava-amandava"
          ]
        },
        {
          "text": "Non migrateur. Prairies et zones herbeuses, fourrés humides, marais, cultures, plantations, forêts humides de basse altitude.",
          "sourceIds": [
            "birdlife-amandava-amandava",
            "adw-amandava-amandava"
          ]
        },
        {
          "text": "Surtout granivore (graines au sol) ; insectes (larves, chenilles…) pour nourrir les jeunes.",
          "sourceIds": [
            "adw-amandava-amandava"
          ]
        },
        {
          "text": "Sédentaire et social ; grands groupes hors reproduction (jusqu’à ~100) ; diurne ; monogame saisonnier.",
          "sourceIds": [
            "birdlife-amandava-amandava",
            "adw-amandava-amandava"
          ]
        },
        {
          "text": "Enregistrement XC698326 (Ding Li Yong — CC BY-NC-ND 4.0) : https://xeno-canto.org/698326 ADW : cris de localisation longs ; cris aigus d’alarme.",
          "sourceIds": [
            "media-amandava-amandava-audio",
            "adw-amandava-amandava"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Bengali de Bombay ↔ *Amandava amandava* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : ventre orange (*A. subflava*) — même genre *Amandava*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; mâle nuptial rouge vif à points blancs",
        "sourceIds": [
          "birdlife-amandava-amandava",
          "adw-amandava-amandava"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme fort en nuptial ; surtout granivore au sol",
        "sourceIds": [
          "birdlife-amandava-amandava",
          "adw-amandava-amandava"
        ]
      },
      {
        "level": "sourcé",
        "text": "Social ; grands groupes hors reproduction ; non migrateur",
        "sourceIds": [
          "birdlife-amandava-amandava",
          "adw-amandava-amandava"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-amandava-amandava",
        "title": "Red Avadavat Amandava amandava — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/red-avadavat-amandava-amandava",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-amandava-amandava",
        "title": "Amandava amandava (red avadavat)",
        "publisher": "Animal Diversity Web / Sarah Weitzel",
        "url": "https://animaldiversity.org/accounts/Amandava_amandava/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-amandava-amandava-img",
        "title": "File:Red Avadavat (26082788247).jpg",
        "publisher": "Mike Prince / Wikimedia Commons",
        "year": "2018",
        "url": "https://commons.wikimedia.org/wiki/File:Red_Avadavat_(26082788247).jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-amandava-amandava-audio",
        "title": "XC698326",
        "publisher": "Ding Li Yong / Xeno-canto",
        "url": "https://xeno-canto.org/698326",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "imageCredit": "Mike Prince — CC BY 2.0",
    "imageSourceId": "media-amandava-amandava-img",
    "image": "/images/birds/amandava-amandava.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Red_Avadavat_(26082788247).jpg",
    "audio": [
      "/audio/birds/amandava-amandava.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/698326"
    ]
  },
  {
    "id": "amandava-subflava",
    "scientificName": "Amandava subflava",
    "commonName": "Ventre orange",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 20 800 000 km² ; population non quantifiée, décrite comme peu commune, parfois localement ou saisonnièrement commune (Clement 1999 *via* BirdLife) ; tendance **stable**. Altitude 250–2 000 m.",
          "sourceIds": [
            "birdlife-amandava-subflava"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Prairies (sèches ou saisonnièrement humides), savane sèche, zones humides intérieures (marais…), terres cultivées. Afrique subsaharienne (large répartition).",
          "sourceIds": [
            "birdlife-amandava-subflava"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Commerce international d’animaux de compagnie signalé.",
          "sourceIds": [
            "birdlife-amandava-subflava"
          ]
        },
        {
          "text": "Enregistrement XC872300 (Dries Van de Loock — CC BY-NC-ND 4.0) : https://xeno-canto.org/872300",
          "sourceIds": [
            "media-amandava-subflava-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Ventre orange ↔ *Amandava subflava* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : bengali de Bombay (*A. amandava*) — même genre, autre espèce",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; Afrique subsaharienne",
        "sourceIds": [
          "birdlife-amandava-subflava"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; prairies, savane sèche, zones humides, cultures",
        "sourceIds": [
          "birdlife-amandava-subflava"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce international d’animaux de compagnie signalé",
        "sourceIds": [
          "birdlife-amandava-subflava"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-amandava-subflava",
        "title": "Zebra Waxbill Amandava subflava — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/zebra-waxbill-amandava-subflava",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-amandava-subflava-img",
        "title": "File:Male Zebra Waxbill (Sporaeginthus subflavus).jpg",
        "publisher": "Alan Manson / Wikimedia Commons",
        "year": "2007",
        "url": "https://commons.wikimedia.org/wiki/File:Male_Zebra_Waxbill_(Sporaeginthus_subflavus).jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-amandava-subflava-audio",
        "title": "XC872300",
        "publisher": "Dries Van de Loock / Xeno-canto",
        "url": "https://xeno-canto.org/872300",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Afrique"
      ],
      "hemisphere": "AF",
      "sourceIds": [
        "birdlife-amandava-subflava"
      ]
    },
    "imageCredit": "Alan Manson — CC BY-SA 2.0",
    "imageSourceId": "media-amandava-subflava-img",
    "image": "/images/birds/amandava-subflava.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Male_Zebra_Waxbill_(Sporaeginthus_subflavus).jpg",
    "audio": [
      "/audio/birds/amandava-subflava.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/872300"
    ]
  },
  {
    "id": "amazona-aestiva",
    "scientificName": "Amazona aestiva",
    "commonName": "Amazone à front bleu",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Near Threatened** (2019 ; A2bcd+3bcd+4bcd). EOO ≈ 7 940 000 km² ; tendance **en diminution** (capture + perte d’habitat). Brésil, Bolivie, Paraguay, Argentine, etc.",
          "sourceIds": [
            "birdlife-amazona-aestiva"
          ]
        },
        {
          "text": "Sexes semblables (plumage).",
          "sourceIds": [
            "adw-amazona-aestiva"
          ]
        },
        {
          "text": "Fourrés (Cerrado, Chaco), savane, palmeraies, forêts-galeries, boisements subtropicaux, zones urbaines ; besoin de grands arbres pour nicher.",
          "sourceIds": [
            "birdlife-amazona-aestiva (citant Collar",
            "al. 2019)"
          ]
        },
        {
          "text": "Fruits et graines d’un large éventail de plantes (*Melia*, *Prosopis*, *Citrus*, etc.), fruits de cactus et de palmiers ; aussi maïs et tournesol. ADW : graines, fruits, noix, pousses, fleurs.",
          "sourceIds": [
            "birdlife-amazona-aestiva",
            "adw-amazona-aestiva"
          ]
        },
        {
          "text": "Surtout résident ; partie de la population du Chaco argentin migre vers les piémonts andins en hiver ; dortoirs collectifs ; couples monogames ; nidification en cavités.",
          "sourceIds": [
            "birdlife-amazona-aestiva",
            "adw-amazona-aestiva"
          ]
        },
        {
          "text": "Enregistrement XC554117 (Ricardo José Mitidieri — CC BY-NC-SA 4.0) : https://xeno-canto.org/554117",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Amazone à front bleu ↔ *Amazona aestiva* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Amazona* — distinct des *Agapornis* (inséparables) du même ordre",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "**Near Threatened** ; tendance en diminution (capture + habitat)",
        "sourceIds": [
          "birdlife-amazona-aestiva",
          "adw-amazona-aestiva"
        ]
      },
      {
        "level": "sourcé",
        "text": "Sexes semblables ; fruits et graines ; nid en cavités",
        "sourceIds": [
          "birdlife-amazona-aestiva",
          "adw-amazona-aestiva"
        ]
      },
      {
        "level": "sourcé",
        "text": "Surtout résident ; dortoirs collectifs ; Amérique du Sud",
        "sourceIds": [
          "birdlife-amazona-aestiva",
          "adw-amazona-aestiva"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-amazona-aestiva",
        "title": "Turquoise-fronted Amazon Amazona aestiva — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2019",
        "url": "https://datazone.birdlife.org/species/factsheet/turquoise-fronted-amazon-amazona-aestiva",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-amazona-aestiva",
        "title": "Amazona aestiva (blue-fronted parrot)",
        "publisher": "Animal Diversity Web / Kaila Huhtasaari",
        "url": "https://animaldiversity.org/accounts/Amazona_aestiva/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-amazona-aestiva-img",
        "title": "File:Amazona aestiva - Maroparque 01.jpg",
        "publisher": "H. Zell / Wikimedia Commons",
        "year": "2019",
        "url": "https://commons.wikimedia.org/wiki/File:Amazona_aestiva_-_Maroparque_01.jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-amazona-aestiva-audio",
        "title": "XC554117",
        "publisher": "Ricardo José Mitidieri / Xeno-canto",
        "url": "https://xeno-canto.org/554117",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Brésil"
      ],
      "hemisphere": "AM",
      "sourceIds": [
        "birdlife-amazona-aestiva",
        "birdlife-amazona-aestiva (citant Collar",
        "al. 2019)"
      ]
    },
    "imageCredit": "H. Zell — CC BY-SA 3.0",
    "imageSourceId": "media-amazona-aestiva-img",
    "image": "/images/birds/amazona-aestiva.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Amazona_aestiva_-_Maroparque_01.jpg",
    "audio": [
      "/audio/birds/amazona-aestiva.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/554117"
    ]
  },
  {
    "id": "bolborhynchus-lineola-lineola",
    "scientificName": "Bolborhynchus lineola lineola",
    "commonName": "Perruche Catherine ou rayée",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Taxon programme = sous-espèce *lineola*. Espèce *B. lineola* évaluée **Least Concern** (2022). EOO ≈ 6 810 000 km² ; ≈ 50 000–499 999 individus matures ; tendance **stable**. Mexique à Amérique du Sud andine.",
          "sourceIds": [
            "birdlife-bolborhynchus-lineola"
          ]
        },
        {
          "text": "`na` — non décrit dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-bolborhynchus-lineola"
          ]
        },
        {
          "text": "Forêts humides de montagne et de basse altitude, milieux fortement dégradés (suitable) ; 0–3 900 m ; aussi lisières et habitats secondaires.",
          "sourceIds": [
            "birdlife-bolborhynchus-lineola"
          ]
        },
        {
          "text": "`na` — non détaillé dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-bolborhynchus-lineola"
          ]
        },
        {
          "text": "Statut migratoire BirdLife : **nomade**. Pas de preuve de pression de capture significative.",
          "sourceIds": [
            "birdlife-bolborhynchus-lineola"
          ]
        },
        {
          "text": "Enregistrement XC1060162 (José — CC BY-NC-SA 4.0) : https://xeno-canto.org/1060162",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche Catherine / rayée ↔ *Bolborhynchus lineola lineola* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Sous-espèce programme *lineola* — genre seul dans le référentiel",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; Mexique → Andes",
        "sourceIds": [
          "birdlife-bolborhynchus-lineola"
        ]
      },
      {
        "level": "sourcé",
        "text": "Forêts humides / lisières ; 0–3 900 m",
        "sourceIds": [
          "birdlife-bolborhynchus-lineola"
        ]
      },
      {
        "level": "sourcé",
        "text": "Statut migratoire BirdLife : **nomade**",
        "sourceIds": [
          "birdlife-bolborhynchus-lineola"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-bolborhynchus-lineola",
        "title": "Barred Parakeet Bolborhynchus lineola — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2022",
        "url": "https://datazone.birdlife.org/species/factsheet/barred-parakeet-bolborhynchus-lineola",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-bolborhynchus-lineola-img",
        "title": "File:Barred Parakeet, Oxapampa, Pasco, Peru 1.jpg",
        "publisher": "thibaudaronson / Wikimedia Commons",
        "year": "2020",
        "url": "https://commons.wikimedia.org/wiki/File:Barred_Parakeet,_Oxapampa,_Pasco,_Peru_1.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-bolborhynchus-lineola-audio",
        "title": "XC1060162",
        "publisher": "José / Xeno-canto",
        "url": "https://xeno-canto.org/1060162",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Amérique du Sud",
        "Mexique"
      ],
      "hemisphere": "AM",
      "sourceIds": [
        "birdlife-bolborhynchus-lineola"
      ]
    },
    "imageCredit": "thibaudaronson — CC BY-SA 4.0",
    "imageSourceId": "media-bolborhynchus-lineola-img",
    "image": "/images/birds/bolborhynchus-lineola-lineola.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Barred_Parakeet,_Oxapampa,_Pasco,_Peru_1.jpg",
    "audio": [
      "/audio/birds/bolborhynchus-lineola-lineola.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1060162"
    ]
  },
  {
    "id": "cacatua-alba",
    "scientificName": "Cacatua alba",
    "commonName": "Cacatoès blanc",
    "order": "Psittaciformes",
    "family": "Cacatuides",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Endangered** (2021 ; critères A2bcd+4bcd). EOO ≈ 51 700 km² ; endémique nicheur ; non migrateur ; tendance **en diminution** (capture pour le commerce + déforestation). Population autrefois estimée ≈ 43 000–183 000 individus (Lambert 1993).",
          "sourceIds": [
            "birdlife-cacatua-alba"
          ]
        },
        {
          "text": "`na` — non décrit dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-cacatua-alba"
          ]
        },
        {
          "text": "Résident en forêt primaire, exploitée et secondaire jusqu’à 600 m ; aussi mangroves, plantations (dont cocotiers) et terres agricoles ; densités maximales en forêt primaire ; grands arbres pour nidification et dortoirs. Habitats BirdLife : forêt humide de basse altitude (major), mangrove, plantations, cultures (suitable).",
          "sourceIds": [
            "birdlife-cacatua-alba"
          ]
        },
        {
          "text": "Surtout graines et fruits arboricoles (Rowley et Boesman 2020 *via* BirdLife).",
          "sourceIds": [
            "birdlife-cacatua-alba"
          ]
        },
        {
          "text": "Résident (éventuels petits mouvements nomades) ; tolère une certaine modification d’habitat ; menace principale = capture non durable pour le commerce d’oiseaux de cage (légal et illégal), aggravée par l’accès via routes forestières.",
          "sourceIds": [
            "birdlife-cacatua-alba"
          ]
        },
        {
          "text": "Enregistrement XC1074294 (Richard E. Webster — CC BY-NC-SA 4.0) : https://xeno-canto.org/1074294",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Cacatoès blanc ↔ *Cacatua alba* ; Psittaciformes ; Cacatuides",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *C. galerita* (huppe jaune) — *alba* = entièrement blanc, **Endangered**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "EN ; endémique ; déclin (commerce + déforestation)",
        "sourceIds": [
          "birdlife-cacatua-alba"
        ]
      },
      {
        "level": "sourcé",
        "text": "Forêt primaire / secondaire ; graines et fruits arboricoles",
        "sourceIds": [
          "birdlife-cacatua-alba"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; menace principale = capture pour la cage",
        "sourceIds": [
          "birdlife-cacatua-alba"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-cacatua-alba",
        "title": "White Cockatoo Cacatua alba — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2021",
        "url": "https://datazone.birdlife.org/species/factsheet/white-cockatoo-cacatua-alba",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-cacatua-alba-img",
        "title": "File:Cacatua alba -Coconuts Bar -Cozumel -Mexico-8a.jpg",
        "publisher": "Kevin T / Wikimedia Commons",
        "year": "2009",
        "url": "https://commons.wikimedia.org/wiki/File:Cacatua_alba_-Coconuts_Bar_-Cozumel_-Mexico-8a.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-cacatua-alba-audio",
        "title": "XC1074294",
        "publisher": "Richard E. Webster / Xeno-canto",
        "url": "https://xeno-canto.org/1074294",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Kevin T — CC BY 2.0",
    "imageSourceId": "media-cacatua-alba-img",
    "image": "/images/birds/cacatua-alba.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Cacatua_alba_-Coconuts_Bar_-Cozumel_-Mexico-8a.jpg",
    "audio": [
      "https://xeno-canto.org/1074294"
    ]
  },
  {
    "id": "cacatua-galerita",
    "scientificName": "Cacatua galerita",
    "commonName": "Grand cacatoès à huppe jaune",
    "order": "Psittaciformes",
    "family": "Cacatuides",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 10 800 000 km² ; natif Australie, Indonésie, Papouasie-Nouvelle-Guinée ; tendance **en diminution** (destruction d’habitat) sans atteindre le seuil Vulnerable. Grand cacatoès blanc à bec gris-noir, huppe jaune soufre et lavage jaune sous les ailes.",
          "sourceIds": [
            "birdlife-cacatua-galerita",
            "birdlife-au-sulphur-crested"
          ]
        },
        {
          "text": "Plumage similaire ; à courte distance, iris rouge-brun chez la femelle, brun plus foncé chez le mâle.",
          "sourceIds": [
            "birdlife-au-sulphur-crested"
          ]
        },
        {
          "text": "BirdLife : forêts humides et sèches, cultures, milieux fortement dégradés (suitable) ; non migrateur. BirdLife Australia : habitats boisés variés et zones habitées (urbain, woodland, forest, wetland, coastal) ; sédentaire.",
          "sourceIds": [
            "birdlife-cacatua-galerita",
            "birdlife-au-sulphur-crested"
          ]
        },
        {
          "text": "Baies, graines, noix et racines ; accepte aussi des restes humains ; recherche au sol en groupes, avec sentinelles perchées.",
          "sourceIds": [
            "birdlife-au-sulphur-crested"
          ]
        },
        {
          "text": "Espèce grégaire : nourrissage et dortoirs collectifs ; sentinelles pendant l’alimentation ; peut endommager le bois en milieu urbain (bec puissant) ; coupe de rameaux sans les manger (entretien du bec).",
          "sourceIds": [
            "birdlife-au-sulphur-crested"
          ]
        },
        {
          "text": "Enregistrement XC1177819 (AK — CC BY-NC-SA 4.0) : https://xeno-canto.org/1177819 BirdLife Australia : cri fort caractéristique se terminant par une légère montée.",
          "sourceIds": [
            "media-cacatua-galerita-audio",
            "birdlife-au-sulphur-crested"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Grand cacatoès à huppe jaune ↔ *Cacatua galerita* ; Psittaciformes ; Cacatuides",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *C. alba* (EN, blanc) — galerita = huppe **jaune**, Least Concern",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "LC ; Australie / PNG / Indonésie ; tendance en diminution (habitat)",
        "sourceIds": [
          "birdlife-cacatua-galerita",
          "birdlife-au-sulphur-crested"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme discret : iris ♀ rouge-brun vs ♂ plus foncé",
        "sourceIds": [
          "birdlife-cacatua-galerita",
          "birdlife-au-sulphur-crested"
        ]
      },
      {
        "level": "sourcé",
        "text": "Grégaire ; baies, graines, noix ; sentinelles pendant l’alimentation",
        "sourceIds": [
          "birdlife-cacatua-galerita",
          "birdlife-au-sulphur-crested"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-cacatua-galerita",
        "title": "Sulphur-crested Cockatoo Cacatua galerita — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/sulphur-crested-cockatoo-cacatua-galerita",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "birdlife-au-sulphur-crested",
        "title": "Sulphur-crested Cockatoo — Bird profile",
        "publisher": "BirdLife Australia",
        "url": "https://birdlife.org.au/bird-profiles/sulphur-crested-cockatoo/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-cacatua-galerita-img",
        "title": "File:Sulphur-crested cockatoo (Cacatua galerita galerita) Sydney.jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2023",
        "url": "https://commons.wikimedia.org/wiki/File:Sulphur-crested_cockatoo_(Cacatua_galerita_galerita)_Sydney.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-cacatua-galerita-audio",
        "title": "XC1177819",
        "publisher": "AK / Xeno-canto",
        "url": "https://xeno-canto.org/1177819",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie",
        "Indonésie",
        "Nouvelle-Guinée"
      ],
      "hemisphere": "multi",
      "sourceIds": [
        "birdlife-cacatua-galerita",
        "birdlife-au-sulphur-crested"
      ]
    },
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-cacatua-galerita-img",
    "image": "/images/birds/cacatua-galerita.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Sulphur-crested_cockatoo_(Cacatua_galerita_galerita)_Sydney.jpg",
    "audio": [
      "/audio/birds/cacatua-galerita.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1177819"
    ]
  },
  {
    "id": "callipepla-californica",
    "scientificName": "Callipepla californica",
    "commonName": "Colin de Californie",
    "order": "Galliformes",
    "family": "Odontophoridés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2021). Population ≈ 5 800 000 individus matures ; tendance **en augmentation**. Non migrateur. EOO ≈ 2 790 000 km².",
          "sourceIds": [
            "birdlife-callipepla-californica"
          ]
        },
        {
          "text": "Oui : mâle à gorge noire ; femelle à gorge grisâtre striée de noir ; panache frontale caractéristique chez les deux sexes.",
          "sourceIds": [
            "adw-callipepla-californica"
          ]
        },
        {
          "text": "BirdLife : pâturages, terres cultivées, désert chaud, forêts et prairies tempérées, fourrés secs et végétation méditerranéenne (suitable). ADW : bois ouverts, contreforts buissonnants, vallées, banlieues, chaparral.",
          "sourceIds": [
            "birdlife-callipepla-californica",
            "adw-callipepla-californica"
          ]
        },
        {
          "text": "Surtout graines de plantes à feuilles larges ; aussi fruits, baies et insectes si disponibles.",
          "sourceIds": [
            "adw-callipepla-californica"
          ]
        },
        {
          "text": "Automne : compagnies sociales (souvent 25–40 oiseaux) ; au printemps les compagnies se dissocient pour la reproduction ; sédentaire ; territorial en saison nuptiale.",
          "sourceIds": [
            "adw-callipepla-californica"
          ]
        },
        {
          "text": "Enregistrement XC570687 (Ron Overholtz — CC BY-NC-SA 4.0) : https://xeno-canto.org/570687",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Colin de Californie ↔ *Callipepla californica* ; Galliformes ; Odontophoridés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : colin de Virginie (*Colinus*) — panache / gorge noire = Californie",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance en **augmentation** (contrairement au Virginie NT)",
        "sourceIds": [
          "birdlife-callipepla-californica",
          "adw-callipepla-californica"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme : mâle gorge noire ; femelle gorge grisâtre striée",
        "sourceIds": [
          "birdlife-callipepla-californica",
          "adw-callipepla-californica"
        ]
      },
      {
        "level": "sourcé",
        "text": "Compagnies sociales en automne ; surtout graines",
        "sourceIds": [
          "birdlife-callipepla-californica",
          "adw-callipepla-californica"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-callipepla-californica",
        "title": "California Quail Callipepla californica — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2021",
        "url": "https://datazone.birdlife.org/species/factsheet/california-quail-callipepla-californica",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-callipepla-californica",
        "title": "Callipepla californica (California quail)",
        "publisher": "Animal Diversity Web / Zebulon Price",
        "url": "https://animaldiversity.org/accounts/Callipepla_californica/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-callipepla-californica-img",
        "title": "File:Valley quail myatt (5489811278) (cropped).jpg",
        "publisher": "Nick Myatt / ODFW / Wikimedia Commons",
        "year": "2010",
        "url": "https://commons.wikimedia.org/wiki/File:Valley_quail_myatt_(5489811278)_(cropped).jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-callipepla-californica-audio",
        "title": "XC570687",
        "publisher": "Ron Overholtz / Xeno-canto",
        "url": "https://xeno-canto.org/570687",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Nick Myatt / ODFW — CC BY-SA 2.0",
    "imageSourceId": "media-callipepla-californica-img",
    "image": "/images/birds/callipepla-californica.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Valley_quail_myatt_(5489811278)_(cropped).jpg",
    "audio": [
      "/audio/birds/callipepla-californica.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/570687"
    ]
  },
  {
    "id": "colinus-virginianus",
    "scientificName": "Colinus virginianus",
    "commonName": "Colin de Virginie",
    "order": "Galliformes",
    "family": "Odontophoridés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Near Threatened**. Population ≈ 5 800 000 individus matures (2016) ; tendance **en diminution**. Non migrateur.",
          "sourceIds": [
            "birdlife-colinus-virginianus"
          ]
        },
        {
          "text": "Oui : mâle à face et gorge blanches contrastées ; femelle et juvéniles à gorge chamois ; couvertures alaires et base du bec diffèrent aussi.",
          "sourceIds": [
            "adw-colinus-virginianus"
          ]
        },
        {
          "text": "Végétation de début de succession (feu, agriculture, coupe) ; paysages agricoles, prairies, forêts ouvertes et fourrés.",
          "sourceIds": [
            "birdlife-colinus-virginianus",
            "adw-colinus-virginianus"
          ]
        },
        {
          "text": "Principalement graines ; insectes importants en été (BirdLife citant del Hoyo et al. 1994). ADW : ≈ 85 % végétaux / 15 % animal selon saison.",
          "sourceIds": [
            "birdlife-colinus-virginianus",
            "adw-colinus-virginianus"
          ]
        },
        {
          "text": "Diurne, surtout terrestre ; forme des compagnies (coveys) hors saison de reproduction ; hiérarchie sociale mâle ; populations généralement sédentaires.",
          "sourceIds": [
            "adw-colinus-virginianus"
          ]
        },
        {
          "text": "Enregistrement XC919215 (FREDERIC Lionel — CC BY-NC-SA 4.0) : https://xeno-canto.org/919215",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Colin de Virginie ↔ *Colinus virginianus* ; Galliformes ; **Odontophoridés**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : colin de Californie (*Callipepla*) — autre genre, même famille",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Statut BirdLife : **Near Threatened** ; population en diminution",
        "sourceIds": [
          "birdlife-colinus-virginianus",
          "adw-colinus-virginianus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme : mâle gorge blanche ; femelle gorge chamois",
        "sourceIds": [
          "birdlife-colinus-virginianus",
          "adw-colinus-virginianus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Terrestre ; compagnies (coveys) hors reproduction ; surtout graines",
        "sourceIds": [
          "birdlife-colinus-virginianus",
          "adw-colinus-virginianus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-colinus-virginianus",
        "title": "Northern Bobwhite Colinus virginianus — Species Factsheet",
        "publisher": "BirdLife International",
        "url": "https://datazone.birdlife.org/species/factsheet/northern-bobwhite-colinus-virginianus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-colinus-virginianus",
        "title": "Colinus virginianus (northern bobwhite)",
        "publisher": "Animal Diversity Web / Matthew Chumchal",
        "url": "https://animaldiversity.org/accounts/Colinus_virginianus/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-colinus-virginianus-img",
        "title": "File:Northern Bobwhite female RWD.jpg",
        "publisher": "DickDaniels / Wikimedia Commons",
        "year": "2012",
        "url": "https://commons.wikimedia.org/wiki/File:Northern_Bobwhite_female_RWD.jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-colinus-virginianus-audio",
        "title": "XC919215",
        "publisher": "FREDERIC Lionel / Xeno-canto",
        "url": "https://xeno-canto.org/919215",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "DickDaniels — CC BY-SA 3.0",
    "imageSourceId": "media-colinus-virginianus-img",
    "image": "/images/birds/colinus-virginianus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Northern_Bobwhite_female_RWD.jpg",
    "audio": [
      "/audio/birds/colinus-virginianus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/919215"
    ]
  },
  {
    "id": "columba-livia",
    "scientificName": "Columba livia",
    "commonName": "Pigeon biset",
    "order": "Columbiformes",
    "family": "Columbidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern**. Non migrateur. EOO ≈ 64 600 000 km² ; tendance globale **inconnue**. Formes naturelles et férales largement répandues.",
          "sourceIds": [
            "birdlife-columba-livia"
          ]
        },
        {
          "text": "Faible : femelles tendent à montrer moins d’irisations que les mâles (ADW). Nombreux phénotypes férals.",
          "sourceIds": [
            "adw-columba-livia"
          ]
        },
        {
          "text": "Habitat naturel : falaises, grottes, corniches ; forme férale urbaine (bâtiments comme falaises). BirdLife : zones rocheuses, grottes, terres agricoles.",
          "sourceIds": [
            "birdlife-columba-livia",
            "adw-columba-livia"
          ]
        },
        {
          "text": "Surtout graines au sol ; en ville aussi déchets alimentaires humains. BirdLife : grains, parfois invertébrés.",
          "sourceIds": [
            "birdlife-columba-livia",
            "adw-columba-livia"
          ]
        },
        {
          "text": "Diurne ; marche en hochement de tête ; vol direct ; vie en groupes pour repos et alimentation ; couples durables ; nidification coopérative (ADW).",
          "sourceIds": [
            "adw-columba-livia"
          ]
        },
        {
          "text": "Enregistrement XC977797 (Pietro Bonanno — CC BY-NC-SA 4.0) : https://xeno-canto.org/977797",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Pigeon biset ↔ *Columba livia* ; Columbiformes ; Columbidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Columba* — distinct des tourterelles / colombes *Geopelia* du programme",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; formes naturelles et **férales** urbaines",
        "sourceIds": [
          "birdlife-columba-livia",
          "adw-columba-livia"
        ]
      },
      {
        "level": "sourcé",
        "text": "Habitat type : falaises / corniches ; en ville = bâtiments",
        "sourceIds": [
          "birdlife-columba-livia",
          "adw-columba-livia"
        ]
      },
      {
        "level": "sourcé",
        "text": "Régime surtout graines au sol ; dimorphisme faible",
        "sourceIds": [
          "birdlife-columba-livia",
          "adw-columba-livia"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-columba-livia",
        "title": "Rock Dove Columba livia — Species Factsheet",
        "publisher": "BirdLife International",
        "url": "https://datazone.birdlife.org/species/factsheet/rock-dove-columba-livia",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-columba-livia",
        "title": "Columba livia (common pigeon)",
        "publisher": "Animal Diversity Web / Jennifer Roof",
        "url": "https://animaldiversity.org/accounts/Columba_livia/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-columba-livia-img",
        "title": "File:Rock dove (Columba livia).jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2016",
        "url": "https://commons.wikimedia.org/wiki/File:Rock_dove_(Columba_livia).jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-columba-livia-audio",
        "title": "XC977797",
        "publisher": "Pietro Bonanno / Xeno-canto",
        "url": "https://xeno-canto.org/977797",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-columba-livia-img",
    "image": "/images/birds/columba-livia.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Rock_dove_(Columba_livia).jpg",
    "audio": [
      "/audio/birds/columba-livia.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/977797"
    ]
  },
  {
    "id": "coturnix-chinensis",
    "scientificName": "Coturnix chinensis",
    "commonName": "Caille peinte de Chine",
    "order": "Galliformes",
    "family": "Phasianidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Espèce évaluée **Least Concern** (BirdLife 2025). Aire très vaste (EOO ≈ 35 200 000 km²) ; tendance suspectée **stable**. Non migratrice. Noms anglais : Asian Blue Quail, King Quail.",
          "sourceIds": [
            "birdlife-synoicus-chinensis"
          ]
        },
        {
          "text": "Oui : sexes colorés différemment ; femelle plus grande. Mâle : poitrine gris-bleu ardoise, ventre rouille/châtaigne, gorge noire bordée de blanc ; femelle brune sans ces motifs vifs.",
          "sourceIds": [
            "adw-coturnix-chinensis"
          ]
        },
        {
          "text": "Prairies subtropicales/tropicales sèches (majeur) ; fourrés humides, zones humides intérieures et terres cultivées (suitable). ADW : régions humides, herbes denses, rizières ; nidification au sol.",
          "sourceIds": [
            "birdlife-synoicus-chinensis",
            "adw-coturnix-chinensis"
          ]
        },
        {
          "text": "Omnivore : surtout graines de graminées ; aussi végétaux verts ; en quantité limitée vers et insectes (dont termites).",
          "sourceIds": [
            "adw-coturnix-chinensis"
          ]
        },
        {
          "text": "En couples ou compagnies ; mâles agressifs entre eux. Marche au sol, peu percheuse, vols peu fréquents ; bains de poussière. Difficile à débusquer.",
          "sourceIds": [
            "adw-coturnix-chinensis"
          ]
        },
        {
          "text": "Enregistrement XC1076265 (Richard E. Webster — CC BY-NC-SA 4.0) : https://xeno-canto.org/1076265",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Caille peinte de Chine ↔ *Coturnix chinensis* ; Galliformes ; Phasianidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Ne pas confondre avec les colins (Odontophoridés) du même ordre",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme fort : mâle poitrine gris-bleu / ventre rouille ; femelle brune",
        "sourceIds": [
          "birdlife-synoicus-chinensis",
          "adw-coturnix-chinensis",
          "avibase-synoicus-chinensis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Vit au sol (prairies, rizières) ; omnivore surtout graines",
        "sourceIds": [
          "birdlife-synoicus-chinensis",
          "adw-coturnix-chinensis",
          "avibase-synoicus-chinensis"
        ]
      },
      {
        "level": "sourcé",
        "text": "BirdLife : Least Concern ; taxonomie actuelle *Synoicus chinensis*",
        "sourceIds": [
          "birdlife-synoicus-chinensis",
          "adw-coturnix-chinensis",
          "avibase-synoicus-chinensis"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-synoicus-chinensis",
        "title": "Asian Blue Quail Synoicus chinensis — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2025",
        "url": "https://datazone.birdlife.org/species/factsheet/asian-blue-quail-synoicus-chinensis",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-coturnix-chinensis",
        "title": "Coturnix chinensis (blue-breasted quail or king quail)",
        "publisher": "Animal Diversity Web / Janice Pappas",
        "url": "https://animaldiversity.org/accounts/Coturnix_chinensis/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "avibase-synoicus-chinensis",
        "title": "Synoicus chinensis",
        "publisher": "Avibase",
        "url": "https://avibase.bsc-eoc.org/species.jsp?avibaseid=C2579CCB",
        "note": "Contrôle taxonomique"
      },
      {
        "id": "media-coturnix-chinensis-img",
        "title": "File:Chinese Painted Quail RWD12a.jpg",
        "publisher": "DickDaniels / Wikimedia Commons",
        "year": "2012",
        "url": "https://commons.wikimedia.org/wiki/File:Chinese_Painted_Quail_RWD12a.jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-coturnix-chinensis-audio",
        "title": "XC1076265",
        "publisher": "Richard E. Webster / Xeno-canto",
        "url": "https://xeno-canto.org/1076265",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "DickDaniels — CC BY-SA 3.0",
    "imageSourceId": "media-coturnix-chinensis-img",
    "image": "/images/birds/coturnix-chinensis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Chinese_Painted_Quail_RWD12a.jpg",
    "audio": [
      "/audio/birds/coturnix-chinensis.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1076265"
    ]
  },
  {
    "id": "cyanoramphus-auriceps",
    "scientificName": "Cyanoramphus auriceps",
    "commonName": "Kakariki à front jaune",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Near Threatened** (2022 ; A2ce). Endémique Nouvelle-Zélande ; EOO ≈ 550 000 km² ; ≈ 10 000–30 000 individus matures ; tendance **en diminution** (prédateurs introduits).",
          "sourceIds": [
            "birdlife-cyanoramphus-auriceps"
          ]
        },
        {
          "text": "`na` — non décrit dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-cyanoramphus-auriceps"
          ]
        },
        {
          "text": "Forêts mixtes *Nothofagus*-*Podocarpus*, souvent plus en altitude que *C. novaezelandiae* ; forêts denses ininterrompues sur petites îles ; rarement forêts secondaires. Habitats majeurs : forêts humides montagnardes et de basse altitude.",
          "sourceIds": [
            "birdlife-cyanoramphus-auriceps"
          ]
        },
        {
          "text": "Graines, baies, fleurs et racines ; insectes pris sur les arbres = part importante du régime (Greene 1998 *via* BirdLife) ; au sol en zones sans prédateurs.",
          "sourceIds": [
            "birdlife-cyanoramphus-auriceps"
          ]
        },
        {
          "text": "Non migrateur. Reproduction surtout octobre–décembre. Fluctuations liées aux cycles de mast de hêtre et aux pics de prédateurs.",
          "sourceIds": [
            "birdlife-cyanoramphus-auriceps"
          ]
        },
        {
          "text": "Enregistrement XC526622 (James Lidster — CC BY-NC-SA 4.0) : https://xeno-canto.org/526622",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Kakariki à front jaune ↔ *Cyanoramphus auriceps* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *C. novaezelandiae* (front rouge) — même genre, statut différent",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "**Near Threatened** ; endémique NZ ; ≈ 10 000–30 000 matures",
        "sourceIds": [
          "birdlife-cyanoramphus-auriceps"
        ]
      },
      {
        "level": "sourcé",
        "text": "Forêts mixtes, souvent plus en altitude que le front rouge",
        "sourceIds": [
          "birdlife-cyanoramphus-auriceps"
        ]
      },
      {
        "level": "sourcé",
        "text": "Régime : graines, baies, fleurs + insectes sur les arbres",
        "sourceIds": [
          "birdlife-cyanoramphus-auriceps"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-cyanoramphus-auriceps",
        "title": "Yellow-fronted Parakeet Cyanoramphus auriceps — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2022",
        "url": "https://datazone.birdlife.org/species/factsheet/yellow-fronted-parakeet-cyanoramphus-auriceps",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-cyanoramphus-auriceps-img",
        "title": "File:Yellow-crowned parakeet - Kākāriki.jpg",
        "publisher": "Alexeyevitch / Wikimedia Commons",
        "year": "2024",
        "url": "https://commons.wikimedia.org/wiki/File:Yellow-crowned_parakeet_-_K%C4%81k%C4%81riki.jpg",
        "note": "Domaine public"
      },
      {
        "id": "media-cyanoramphus-auriceps-audio",
        "title": "XC526622",
        "publisher": "James Lidster / Xeno-canto",
        "url": "https://xeno-canto.org/526622",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Nouvelle-Zélande"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-cyanoramphus-auriceps"
      ]
    },
    "imageCredit": "Alexeyevitch — domaine public",
    "imageSourceId": "media-cyanoramphus-auriceps-img",
    "image": "/images/birds/cyanoramphus-auriceps.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Yellow-crowned_parakeet_-_K%C4%81k%C4%81riki.jpg",
    "audio": [
      "/audio/birds/cyanoramphus-auriceps.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/526622"
    ]
  },
  {
    "id": "cyanoramphus-novaezelandiae",
    "scientificName": "Cyanoramphus novaezelandiae",
    "commonName": "Kakariki à front rouge",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern**. EOO ≈ 5 540 000 km² ; tendance **en diminution** sans atteindre le seuil Vulnerable. Nouvelle-Zélande et îles / taxons associés (ex. Norfolk, Nouvelle-Calédonie selon le traitement taxonomique BirdLife).",
          "sourceIds": [
            "birdlife-cyanoramphus-novaezelandiae"
          ]
        },
        {
          "text": "`na` — non décrit dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-cyanoramphus-novaezelandiae"
          ]
        },
        {
          "text": "Forêts denses à milieux boisés modifiés, cultures et zones ouvertes selon sous-espèces ; habitats majeurs : forêts humides de basse altitude, forêts tempérées, prairies subantarctiques, fourrés tempérés.",
          "sourceIds": [
            "birdlife-cyanoramphus-novaezelandiae"
          ]
        },
        {
          "text": "`na` — non détaillé dans le paragraphe écologie BirdLife consulté.",
          "sourceIds": [
            "birdlife-cyanoramphus-novaezelandiae"
          ]
        },
        {
          "text": "Menaces historiques et actuelles liées aux prédateurs introduits (rats, chats) sur certaines populations insulaires ; souvent plus commun que *C. auriceps* sur les îles.",
          "sourceIds": [
            "birdlife-cyanoramphus-novaezelandiae",
            "birdlife-cyanoramphus-auriceps"
          ]
        },
        {
          "text": "Enregistrement XC956617 (Meena Haribal — CC BY-NC-SA 4.0) : https://xeno-canto.org/956617",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Kakariki à front rouge ↔ *Cyanoramphus novaezelandiae* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : kakariki à front **jaune** (*C. auriceps*) — repère = couleur du front",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance en diminution (prédateurs introduits)",
        "sourceIds": [
          "birdlife-cyanoramphus-novaezelandiae",
          "birdlife-cyanoramphus-auriceps"
        ]
      },
      {
        "level": "sourcé",
        "text": "Nouvelle-Zélande et îles associées ; forêts / milieux boisés",
        "sourceIds": [
          "birdlife-cyanoramphus-novaezelandiae",
          "birdlife-cyanoramphus-auriceps"
        ]
      },
      {
        "level": "sourcé",
        "text": "Souvent plus commun que *C. auriceps* sur les îles",
        "sourceIds": [
          "birdlife-cyanoramphus-novaezelandiae",
          "birdlife-cyanoramphus-auriceps"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-cyanoramphus-novaezelandiae",
        "title": "Red-fronted Parakeet Cyanoramphus novaezelandiae — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/red-fronted-parakeet-cyanoramphus-novaezelandiae",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "birdlife-cyanoramphus-auriceps",
        "title": "Yellow-fronted Parakeet Cyanoramphus auriceps — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2022",
        "url": "https://datazone.birdlife.org/species/factsheet/yellow-fronted-parakeet-cyanoramphus-auriceps",
        "note": "Comparaison îles"
      },
      {
        "id": "media-cyanoramphus-novaezelandiae-img",
        "title": "File:Kakariki, the red-crowned parakeet…jpg",
        "publisher": "Bernard Spragg. NZ / Wikimedia Commons",
        "year": "2011",
        "url": "https://commons.wikimedia.org/wiki/File:Kakariki,_the_red-crowned_parakeet.(Cyanoramphus_novaezelandiae)_(9118899767).jpg",
        "note": "CC0"
      },
      {
        "id": "media-cyanoramphus-novaezelandiae-audio",
        "title": "XC956617",
        "publisher": "Meena Haribal / Xeno-canto",
        "url": "https://xeno-canto.org/956617",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Nouvelle-Zélande"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-cyanoramphus-novaezelandiae"
      ]
    },
    "imageCredit": "Bernard Spragg. NZ — CC0",
    "imageSourceId": "media-cyanoramphus-novaezelandiae-img",
    "image": "/images/birds/cyanoramphus-novaezelandiae.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Kakariki,_the_red-crowned_parakeet.(Cyanoramphus_novaezelandiae)_(9118899767).jpg",
    "audio": [
      "/audio/birds/cyanoramphus-novaezelandiae.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/956617"
    ]
  },
  {
    "id": "eolophus-roseicapilla",
    "scientificName": "Eolophus roseicapilla",
    "commonName": "Cacatoès rosalbin",
    "order": "Psittaciformes",
    "family": "Cacatuides",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). Endémique nicheur d’Australie ; EOO ≈ 10 100 000 km² ; tendance de population **en augmentation** (nouveaux habitats favorables). Tête, cou et parties inférieures rose-rosé ; dos, ailes et sous-queue gris ; plumage plus pâle à l’ouest.",
          "sourceIds": [
            "birdlife-eolophus-roseicapilla",
            "birdlife-au-galah"
          ]
        },
        {
          "text": "`na` — non décrit dans les sources consultées (BirdLife International, BirdLife Australia).",
          "sourceIds": [
            "birdlife-eolophus-roseicapilla",
            "birdlife-au-galah"
          ]
        },
        {
          "text": "BirdLife : milieux artificiels (urbain, jardins, plantations, pâturages, cultures), prairies sèches, fourrés secs et humides (suitable). BirdLife Australia : grands groupes dans habitats boisés variés, en général près de l’eau (woodland, forest, wetland, coastal, urban).",
          "sourceIds": [
            "birdlife-eolophus-roseicapilla",
            "birdlife-au-galah"
          ]
        },
        {
          "text": "Graines surtout au sol (graminées et cultures) ; peut être nuisible aux cultures ; déplacements parfois longs vers les zones d’alimentation.",
          "sourceIds": [
            "birdlife-au-galah"
          ]
        },
        {
          "text": "Non migrateur (BirdLife). Grands groupes bruyants ; couples durables ; abondance croissante près des habitations (nourriture et eau) ; repos diurne à l’ombre ; dortoirs nocturnes collectifs.",
          "sourceIds": [
            "birdlife-eolophus-roseicapilla",
            "birdlife-au-galah"
          ]
        },
        {
          "text": "Enregistrement XC1181679 (Khristos Nizamis — CC BY-NC-ND 4.0) : https://xeno-canto.org/1181679 BirdLife Australia : cri aigu caractéristique « chi-chi ».",
          "sourceIds": [
            "media-eolophus-roseicapilla-audio",
            "birdlife-au-galah"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Cacatoès rosalbin ↔ *Eolophus roseicapilla* ; Psittaciformes ; **Cacatuides**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Famille Cacatuides — distincte des Psittacidés (*Psittacula*, jaco, conure)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; Australie ; tendance en **augmentation**",
        "sourceIds": [
          "birdlife-eolophus-roseicapilla",
          "birdlife-au-galah"
        ]
      },
      {
        "level": "sourcé",
        "text": "Rose-rosé + gris ; grands groupes ; graines au sol",
        "sourceIds": [
          "birdlife-eolophus-roseicapilla",
          "birdlife-au-galah"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; dortoirs collectifs ; fréquent près des habitations",
        "sourceIds": [
          "birdlife-eolophus-roseicapilla",
          "birdlife-au-galah"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-eolophus-roseicapilla",
        "title": "Galah Eolophus roseicapilla — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/galah-eolophus-roseicapilla",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "birdlife-au-galah",
        "title": "Galah — Bird profile",
        "publisher": "BirdLife Australia",
        "url": "https://birdlife.org.au/bird-profiles/galah/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-eolophus-roseicapilla-img",
        "title": "File:Eolophus roseicapilla - a pair of Galahs -Australia.jpg",
        "publisher": "Tatiana Gerus / Wikimedia Commons",
        "year": "2008",
        "url": "https://commons.wikimedia.org/wiki/File:Eolophus_roseicapilla_-_a_pair_of_Galahs_-Australia.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-eolophus-roseicapilla-audio",
        "title": "XC1181679",
        "publisher": "Khristos Nizamis / Xeno-canto",
        "url": "https://xeno-canto.org/1181679",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-eolophus-roseicapilla",
        "birdlife-au-galah"
      ]
    },
    "imageCredit": "Tatiana Gerus — CC BY 2.0",
    "imageSourceId": "media-eolophus-roseicapilla-img",
    "image": "/images/birds/eolophus-roseicapilla.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Eolophus_roseicapilla_-_a_pair_of_Galahs_-Australia.jpg",
    "audio": [
      "/audio/birds/eolophus-roseicapilla.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1181679"
    ]
  },
  {
    "id": "erythrura-gouldiae",
    "scientificName": "Erythrura gouldiae",
    "commonName": "Diamant de Gould",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2022). BirdLife / IOC : *Chloebia gouldiae* (syn. *Erythrura gouldiae*). EOO ≈ 1 780 000 km² ; ~5 000–50 000 individus matures (meilleure estimation ~25 000, 2020) ; tendance **stable**. Endémique reproducteur d’Australie (nord). Altitude 0–370 m.",
          "sourceIds": [
            "birdlife-chloebia-gouldiae"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses sur le dimorphisme (polymorphisme de couleur de tête connu hors sources retenues ici).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Bois tropicaux ouverts à sous-bois herbeux ; nidification presque exclusivement dans des cavités d’arbres ; collines rocheuses avec *Eucalyptus* près de points d’eau permanents en saison sèche. Nord de l’Australie.",
          "sourceIds": [
            "birdlife-chloebia-gouldiae"
          ]
        },
        {
          "text": "Surtout graines de graminées toute l’année ; parfois invertébrés.",
          "sourceIds": [
            "birdlife-chloebia-gouldiae"
          ]
        },
        {
          "text": "Sédentaire (non migrateur) ; très mobile (déplacements de juvéniles bandés jusqu’à ~200 km) ; niche dans des cavités.",
          "sourceIds": [
            "birdlife-chloebia-gouldiae"
          ]
        },
        {
          "text": "Enregistrement XC960939 (Louis Masarei — CC BY-NC-SA 4.0) : https://xeno-canto.org/960939",
          "sourceIds": [
            "media-erythrura-gouldiae-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Diamant de Gould ↔ *Erythrura gouldiae* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *E. trichroa* (Kittlitz) — Gould = endémique nord AU ; BirdLife *Chloebia*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; ~5 000–50 000 matures ; tendance stable",
        "sourceIds": [
          "birdlife-chloebia-gouldiae"
        ]
      },
      {
        "level": "sourcé",
        "text": "Graines de graminées ; nid en cavités d’arbres",
        "sourceIds": [
          "birdlife-chloebia-gouldiae"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur mais très mobile (juvéniles jusqu’à ~200 km)",
        "sourceIds": [
          "birdlife-chloebia-gouldiae"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-chloebia-gouldiae",
        "title": "Gouldian Finch Chloebia gouldiae — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2022",
        "url": "https://datazone.birdlife.org/species/factsheet/gouldian-finch-chloebia-gouldiae",
        "note": "Consulté 2026-10-10 ; syn. Erythrura gouldiae"
      },
      {
        "id": "media-erythrura-gouldiae-img",
        "title": "File:Chloebia gouldiae, Elsey, Northern Territory, Australia 1.jpg",
        "publisher": "Kym Nicolson / Wikimedia Commons",
        "year": "2018",
        "url": "https://commons.wikimedia.org/wiki/File:Chloebia_gouldiae,_Elsey,_Northern_Territory,_Australia_1.jpg",
        "note": "CC BY 4.0"
      },
      {
        "id": "media-erythrura-gouldiae-audio",
        "title": "XC960939",
        "publisher": "Louis Masarei / Xeno-canto",
        "url": "https://xeno-canto.org/960939",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-chloebia-gouldiae"
      ]
    },
    "imageCredit": "Kym Nicolson — CC BY 4.0",
    "imageSourceId": "media-erythrura-gouldiae-img",
    "image": "/images/birds/erythrura-gouldiae.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Chloebia_gouldiae,_Elsey,_Northern_Territory,_Australia_1.jpg",
    "audio": [
      "/audio/birds/erythrura-gouldiae.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/960939"
    ]
  },
  {
    "id": "erythrura-psittacea",
    "scientificName": "Erythrura psittacea",
    "commonName": "Pape de Nouméa",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 22 600 km² ; population non quantifiée, décrite comme répandue et assez commune (Clement 1999 *via* BirdLife) ; tendance **stable**. Endémique reproducteur de Nouvelle-Calédonie. Dépendance forestière faible.",
          "sourceIds": [
            "birdlife-erythrura-psittacea"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Forêt humide de basse altitude, fourrés humides, plantations ; jardins ruraux (marginal). Nouvelle-Calédonie (France).",
          "sourceIds": [
            "birdlife-erythrura-psittacea"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Commerce international d’animaux de compagnie signalé.",
          "sourceIds": [
            "birdlife-erythrura-psittacea"
          ]
        },
        {
          "text": "Enregistrement XC40164 (Patrik Åberg — CC BY-NC-SA 3.0) : https://xeno-canto.org/40164",
          "sourceIds": [
            "media-erythrura-psittacea-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Pape de Nouméa ↔ *Erythrura psittacea* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : Gould / Kittlitz (*Erythrura*) — pape = **endémique Nouvelle-Calédonie**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; EOO petite (≈ 22 600 km²) ; tendance stable",
        "sourceIds": [
          "birdlife-erythrura-psittacea"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; forêt humide, fourrés, plantations",
        "sourceIds": [
          "birdlife-erythrura-psittacea"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce international d’animaux de compagnie signalé",
        "sourceIds": [
          "birdlife-erythrura-psittacea"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-erythrura-psittacea",
        "title": "Red-throated Parrotfinch Erythrura psittacea — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/red-throated-parrotfinch-erythrura-psittacea",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-erythrura-psittacea-img",
        "title": "File:Red-throated Parrotfinch 0A2A5145.jpg",
        "publisher": "JJ Harrison / Wikimedia Commons",
        "year": "2022",
        "url": "https://commons.wikimedia.org/wiki/File:Red-throated_Parrotfinch_0A2A5145.jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-erythrura-psittacea-audio",
        "title": "XC40164",
        "publisher": "Patrik Åberg / Xeno-canto",
        "url": "https://xeno-canto.org/40164",
        "note": "CC BY-NC-SA 3.0"
      }
    ],
    "imageCredit": "JJ Harrison — CC BY-SA 3.0",
    "imageSourceId": "media-erythrura-psittacea-img",
    "image": "/images/birds/erythrura-psittacea.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Red-throated_Parrotfinch_0A2A5145.jpg",
    "audio": [
      "/audio/birds/erythrura-psittacea.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/40164"
    ]
  },
  {
    "id": "erythrura-trichroa",
    "scientificName": "Erythrura trichroa",
    "commonName": "Diamant de Kittlitz",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 12 500 000 km² ; ~13 000 individus matures (estimation ≥ 20 000 individus totaux, S. T. Garnett *in litt.* 2008 *via* BirdLife) ; tendance **stable**. Altitude 1 000–3 000 m. Dépendance forestière moyenne.",
          "sourceIds": [
            "birdlife-erythrura-trichroa"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Forêts (humides de basse altitude, sèches, mangrove), fourrés humides, prairies sèches, cultures et pâturages. Australie, Indonésie, Papouasie-Nouvelle-Guinée, îles du Pacifique (Micronésie, Palau, Salomon, Vanuatu, Nouvelle-Calédonie…).",
          "sourceIds": [
            "birdlife-erythrura-trichroa"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Commerce international d’animaux de compagnie signalé.",
          "sourceIds": [
            "birdlife-erythrura-trichroa"
          ]
        },
        {
          "text": "Enregistrement XC1003825 (Chi-Hsuan Shao — CC BY-NC-SA 4.0) : https://xeno-canto.org/1003825",
          "sourceIds": [
            "media-erythrura-trichroa-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Diamant de Kittlitz ↔ *Erythrura trichroa* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : diamant de Gould (*E. gouldiae*) — Kittlitz = large aire Pacifique / AU",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; ~13 000 matures ; tendance stable",
        "sourceIds": [
          "birdlife-erythrura-trichroa"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; forêts et fourrés ; 1 000–3 000 m",
        "sourceIds": [
          "birdlife-erythrura-trichroa"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce international d’animaux de compagnie signalé",
        "sourceIds": [
          "birdlife-erythrura-trichroa"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-erythrura-trichroa",
        "title": "Blue-faced Parrotfinch Erythrura trichroa — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/blue-faced-parrotfinch-erythrura-trichroa",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-erythrura-trichroa-img",
        "title": "File:Blue-faced Parrot-finch Pengo.jpg",
        "publisher": "Peter Halasz / Wikimedia Commons",
        "year": "2006",
        "url": "https://commons.wikimedia.org/wiki/File:Blue-faced_Parrot-finch_Pengo.jpg",
        "note": "CC BY-SA 2.5 / 3.0"
      },
      {
        "id": "media-erythrura-trichroa-audio",
        "title": "XC1003825",
        "publisher": "Chi-Hsuan Shao / Xeno-canto",
        "url": "https://xeno-canto.org/1003825",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie",
        "Indonésie",
        "Nouvelle-Guinée"
      ],
      "hemisphere": "multi",
      "sourceIds": [
        "birdlife-erythrura-trichroa"
      ]
    },
    "imageCredit": "Peter Halasz — CC BY-SA 2.5 / 3.0",
    "imageSourceId": "media-erythrura-trichroa-img",
    "image": "/images/birds/erythrura-trichroa.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Blue-faced_Parrot-finch_Pengo.jpg",
    "audio": [
      "/audio/birds/erythrura-trichroa.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1003825"
    ]
  },
  {
    "id": "estrilda-astrild",
    "scientificName": "Estrilda astrild",
    "commonName": "Astrild de Sainte Hélène",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 22 200 000 km² ; population non quantifiée, répandue et commune (Clement 1999 *via* BirdLife) ; tendance **stable**. ~11,5 cm ; ~8,9 g ; bec conique rouge et masque rouge. Altitude 0–1 000 m.",
          "sourceIds": [
            "birdlife-estrilda-astrild",
            "adw-estrilda-astrild"
          ]
        },
        {
          "text": "Femelle plus pâle, moins de rouge sur le ventre ; mâle plus coloré.",
          "sourceIds": [
            "adw-estrilda-astrild"
          ]
        },
        {
          "text": "Non migrateur. Zones herbeuses humides près des zones humides, roseaux, cultures, jardins, plantations, savane sèche. Natif d’Afrique subsaharienne ; introduit ailleurs (Amériques, bassin méditerranéen, Océanie…).",
          "sourceIds": [
            "birdlife-estrilda-astrild",
            "adw-estrilda-astrild"
          ]
        },
        {
          "text": "Granivore (graines de graminées, millets…) ; fourrage en groupes.",
          "sourceIds": [
            "adw-estrilda-astrild"
          ]
        },
        {
          "text": "Très social ; vols diurnes de 20–40 ; monogame ; nid sphérique en herbes près du sol ; souvent parasité par *Vidua macroura*.",
          "sourceIds": [
            "birdlife-estrilda-astrild",
            "adw-estrilda-astrild"
          ]
        },
        {
          "text": "Enregistrement XC1155179 (Walter Wallner — CC BY-NC-SA 4.0) : https://xeno-canto.org/1155179 ADW : chant doux et simple ; parade avec « révérence » et exhibition du ventre rouge.",
          "sourceIds": [
            "media-estrilda-astrild-audio",
            "adw-estrilda-astrild"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Astrild de Sainte Hélène ↔ *Estrilda astrild* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : autres *Estrilda* (queue de vinaigre, joues orange, bec de corail)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; bec et masque rouges ; très répandue et introduite hors Afrique",
        "sourceIds": [
          "birdlife-estrilda-astrild",
          "adw-estrilda-astrild"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme : ♀ plus pâle, moins de rouge ventral",
        "sourceIds": [
          "birdlife-estrilda-astrild",
          "adw-estrilda-astrild"
        ]
      },
      {
        "level": "sourcé",
        "text": "Granivore ; social ; souvent parasité par *Vidua macroura*",
        "sourceIds": [
          "birdlife-estrilda-astrild",
          "adw-estrilda-astrild"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-estrilda-astrild",
        "title": "Common Waxbill Estrilda astrild — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/common-waxbill-estrilda-astrild",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-estrilda-astrild",
        "title": "Estrilda astrild (common waxbill)",
        "publisher": "Animal Diversity Web / Lauren Tarr",
        "url": "https://animaldiversity.org/accounts/Estrilda_astrild/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-estrilda-astrild-img",
        "title": "File:Common waxbill (26408344029).jpg",
        "publisher": "Derek Keats / Wikimedia Commons",
        "year": "2015",
        "url": "https://commons.wikimedia.org/wiki/File:Common_waxbill_(26408344029).jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-estrilda-astrild-audio",
        "title": "XC1155179",
        "publisher": "Walter Wallner / Xeno-canto",
        "url": "https://xeno-canto.org/1155179",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Afrique"
      ],
      "hemisphere": "AF",
      "sourceIds": [
        "birdlife-estrilda-astrild",
        "adw-estrilda-astrild"
      ]
    },
    "imageCredit": "Derek Keats — CC BY 2.0",
    "imageSourceId": "media-estrilda-astrild-img",
    "image": "/images/birds/estrilda-astrild.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Common_waxbill_(26408344029).jpg",
    "audio": [
      "/audio/birds/estrilda-astrild.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1155179"
    ]
  },
  {
    "id": "estrilda-caerulescens",
    "scientificName": "Estrilda caerulescens",
    "commonName": "Queue de vinaigre",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). BirdLife : *Glaucestrilda coerulescens* (syn. *Estrilda caerulescens*). EOO ≈ 2 360 000 km² ; population non quantifiée, peu commune à commune (Fry & Keith 2004 *via* BirdLife) ; tendance **stable**. Afrique de l’Ouest / Sahel.",
          "sourceIds": [
            "birdlife-glaucestrilda-coerulescens"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche, fourrés secs, pâturages et terres cultivées.",
          "sourceIds": [
            "birdlife-glaucestrilda-coerulescens"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Commerce international d’animaux de compagnie signalé.",
          "sourceIds": [
            "birdlife-glaucestrilda-coerulescens"
          ]
        },
        {
          "text": "Enregistrement XC1081214 (Peter Boesman — CC BY-NC-ND 4.0) : https://xeno-canto.org/1081214",
          "sourceIds": [
            "media-estrilda-caerulescens-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Queue de vinaigre ↔ *Estrilda caerulescens* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : autres *Estrilda* — BirdLife : *Glaucestrilda coerulescens*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; Afrique de l’Ouest / Sahel ; tendance stable",
        "sourceIds": [
          "birdlife-glaucestrilda-coerulescens"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; savane sèche, fourrés, cultures",
        "sourceIds": [
          "birdlife-glaucestrilda-coerulescens"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce international d’animaux de compagnie signalé",
        "sourceIds": [
          "birdlife-glaucestrilda-coerulescens"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-glaucestrilda-coerulescens",
        "title": "Lavender Waxbill Glaucestrilda coerulescens — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/lavender-waxbill-glaucestrilda-coerulescens",
        "note": "Consulté 2026-10-10 ; syn. Estrilda caerulescens"
      },
      {
        "id": "media-estrilda-caerulescens-img",
        "title": "File:Lavender waxbill (Estrilda caerulescens).jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2016",
        "url": "https://commons.wikimedia.org/wiki/File:Lavender_waxbill_(Estrilda_caerulescens).jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-estrilda-caerulescens-audio",
        "title": "XC1081214",
        "publisher": "Peter Boesman / Xeno-canto",
        "url": "https://xeno-canto.org/1081214",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Afrique"
      ],
      "hemisphere": "AF",
      "sourceIds": [
        "birdlife-glaucestrilda-coerulescens"
      ]
    },
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-estrilda-caerulescens-img",
    "image": "/images/birds/estrilda-caerulescens.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Lavender_waxbill_(Estrilda_caerulescens).jpg",
    "audio": [
      "/audio/birds/estrilda-caerulescens.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1081214"
    ]
  },
  {
    "id": "estrilda-melpoda",
    "scientificName": "Estrilda melpoda",
    "commonName": "Joues orange",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern**. EOO ≈ 9 820 000 km² ; tendance **stable**. Non migrateur. Commerce international d’animaux de compagnie signalé.",
          "sourceIds": [
            "birdlife-estrilda-melpoda"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche, prairies sèches, fourrés humides, forêts humides de basse altitude, jardins ruraux, zones humides intérieures (marais…).",
          "sourceIds": [
            "birdlife-estrilda-melpoda"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce international d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-estrilda-melpoda"
          ]
        },
        {
          "text": "Enregistrement XC1081191 (Peter Boesman — CC BY-NC-ND 4.0) : https://xeno-canto.org/1081191",
          "sourceIds": [
            "media-estrilda-melpoda-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Joues orange ↔ *Estrilda melpoda* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : bec de corail / Sainte Hélène — repère = joues **orange**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; non migrateur",
        "sourceIds": [
          "birdlife-estrilda-melpoda"
        ]
      },
      {
        "level": "sourcé",
        "text": "Savane, prairies, fourrés, forêts humides, jardins, marais",
        "sourceIds": [
          "birdlife-estrilda-melpoda"
        ]
      },
      {
        "level": "sourcé",
        "text": "Présent dans le commerce international d’animaux de compagnie",
        "sourceIds": [
          "birdlife-estrilda-melpoda"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-estrilda-melpoda",
        "title": "Orange-cheeked Waxbill Estrilda melpoda — Species Factsheet",
        "publisher": "BirdLife International",
        "url": "https://datazone.birdlife.org/species/factsheet/orange-cheeked-waxbill-estrilda-melpoda",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-estrilda-melpoda-img",
        "title": "File:Orange-cheeked Waxbill.jpg",
        "publisher": "Pearly85 / Wikimedia Commons",
        "year": "2009",
        "url": "https://commons.wikimedia.org/wiki/File:Orange-cheeked_Waxbill.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-estrilda-melpoda-audio",
        "title": "XC1081191",
        "publisher": "Peter Boesman / Xeno-canto",
        "url": "https://xeno-canto.org/1081191",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "imageCredit": "Pearly85 — CC BY 2.0",
    "imageSourceId": "media-estrilda-melpoda-img",
    "image": "/images/birds/estrilda-melpoda.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Orange-cheeked_Waxbill.jpg",
    "audio": [
      "/audio/birds/estrilda-melpoda.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1081191"
    ]
  },
  {
    "id": "estrilda-troglodytes",
    "scientificName": "Estrilda troglodytes",
    "commonName": "Bec de corail",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 8 660 000 km² ; tendance **stable**. Non migrateur. Commerce international d’animaux de compagnie signalé.",
          "sourceIds": [
            "birdlife-estrilda-troglodytes"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche et fourrés secs (majeurs) ; terres cultivées (marginal).",
          "sourceIds": [
            "birdlife-estrilda-troglodytes"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce international d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-estrilda-troglodytes"
          ]
        },
        {
          "text": "Enregistrement XC1154517 (Sébastien Birard — CC BY-NC-SA 4.0) : https://xeno-canto.org/1154517",
          "sourceIds": [
            "media-estrilda-troglodytes-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Bec de corail ↔ *Estrilda troglodytes* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : autres *Estrilda* — habitat surtout savane / fourrés **secs**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; non migrateur",
        "sourceIds": [
          "birdlife-estrilda-troglodytes"
        ]
      },
      {
        "level": "sourcé",
        "text": "Savane sèche et fourrés secs (majeurs) ; cultures marginales",
        "sourceIds": [
          "birdlife-estrilda-troglodytes"
        ]
      },
      {
        "level": "sourcé",
        "text": "Présent dans le commerce international d’animaux de compagnie",
        "sourceIds": [
          "birdlife-estrilda-troglodytes"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-estrilda-troglodytes",
        "title": "Black-rumped Waxbill Estrilda troglodytes — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/black-rumped-waxbill-estrilda-troglodytes",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-estrilda-troglodytes-img",
        "title": "File:Black-rumped Waxbill - Gambia (31806634704).jpg",
        "publisher": "Francesco Veronesi / Wikimedia Commons",
        "year": "2017",
        "url": "https://commons.wikimedia.org/wiki/File:Black-rumped_Waxbill_-_Gambia_(31806634704).jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-estrilda-troglodytes-audio",
        "title": "XC1154517",
        "publisher": "Sébastien Birard / Xeno-canto",
        "url": "https://xeno-canto.org/1154517",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Francesco Veronesi — CC BY-SA 2.0",
    "imageSourceId": "media-estrilda-troglodytes-img",
    "image": "/images/birds/estrilda-troglodytes.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Black-rumped_Waxbill_-_Gambia_(31806634704).jpg",
    "audio": [
      "/audio/birds/estrilda-troglodytes.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1154517"
    ]
  },
  {
    "id": "euplectes-orix",
    "scientificName": "Euplectes orix",
    "commonName": "Euplecte ignicolore",
    "order": "Passériformes",
    "family": "Ploceidae",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 7 870 000 km² ; population non quantifiée, commune à abondante (Fry & Keith 2004 *via* BirdLife) ; tendance **stable**.",
          "sourceIds": [
            "birdlife-euplectes-orix"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Cultures (majeur) et prairies sèches tropicales/subtropicales (majeur).",
          "sourceIds": [
            "birdlife-euplectes-orix"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur.",
          "sourceIds": [
            "birdlife-euplectes-orix"
          ]
        },
        {
          "text": "Enregistrement XC1183523 (African Bioacoustics Community — CC BY-NC-SA 4.0) : https://xeno-canto.org/1183523",
          "sourceIds": [
            "media-euplectes-orix-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Euplecte ignicolore ↔ *Euplectes orix* ; Passériformes ; Ploceidae",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : tisserin gendarme (*Ploceus*) — même famille des plocéidés, autre genre",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; commune à abondante",
        "sourceIds": [
          "birdlife-euplectes-orix"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; cultures et prairies sèches (majeurs)",
        "sourceIds": [
          "birdlife-euplectes-orix"
        ]
      },
      {
        "level": "sourcé",
        "text": "EOO vaste (≈ 7,9 M km²)",
        "sourceIds": [
          "birdlife-euplectes-orix"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-euplectes-orix",
        "title": "Southern Red Bishop Euplectes orix — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/southern-red-bishop-euplectes-orix",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-euplectes-orix-img",
        "title": "File:Southern Red Bishop (Euplectes orix) male ... (52656476541).jpg",
        "publisher": "Bernard DUPONT / Wikimedia Commons",
        "year": "2023",
        "url": "https://commons.wikimedia.org/wiki/File:Southern_Red_Bishop_(Euplectes_orix)_male_..._(52656476541).jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-euplectes-orix-audio",
        "title": "XC1183523",
        "publisher": "African Bioacoustics Community / Xeno-canto",
        "url": "https://xeno-canto.org/1183523",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Bernard DUPONT — CC BY-SA 2.0",
    "imageSourceId": "media-euplectes-orix-img",
    "image": "/images/birds/euplectes-orix.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Southern_Red_Bishop_(Euplectes_orix)_male_..._(52656476541).jpg",
    "audio": [
      "/audio/birds/euplectes-orix.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1183523"
    ]
  },
  {
    "id": "forpus-coelestis",
    "scientificName": "Forpus coelestis",
    "commonName": "Perruche céleste",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 277 000 km² ; natif Équateur et Pérou ; décrit comme commun ; tendance **en diminution** (perte de couvert forestier estimée 1–19 % / 10 ans, mesure de précaution).",
          "sourceIds": [
            "birdlife-forpus-coelestis"
          ]
        },
        {
          "text": "`na` — non décrit dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-forpus-coelestis"
          ]
        },
        {
          "text": "Forêt sèche (major) ; aussi forêts humides de basse altitude et de montagne, fourrés secs, milieux fortement dégradés (suitable).",
          "sourceIds": [
            "birdlife-forpus-coelestis"
          ]
        },
        {
          "text": "`na` — non détaillé dans la fiche BirdLife consultée.",
          "sourceIds": [
            "birdlife-forpus-coelestis"
          ]
        },
        {
          "text": "Non migrateur. Fortement présent dans le commerce d’oiseaux (Donald et al. 2024 *via* BirdLife).",
          "sourceIds": [
            "birdlife-forpus-coelestis"
          ]
        },
        {
          "text": "Enregistrement XC512761 (Hans Matheve — CC BY-NC-ND 4.0) : https://xeno-canto.org/512761",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche céleste ↔ *Forpus coelestis* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Forpus* — petit perroquet distinct des kakarikis / ondulée",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; natif Équateur et Pérou ; tendance en diminution",
        "sourceIds": [
          "birdlife-forpus-coelestis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Habitat majeur : forêt sèche",
        "sourceIds": [
          "birdlife-forpus-coelestis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; fort présence dans le commerce d’oiseaux",
        "sourceIds": [
          "birdlife-forpus-coelestis"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-forpus-coelestis",
        "title": "Pacific Parrotlet Forpus coelestis — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/pacific-parrotlet-forpus-coelestis",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-forpus-coelestis-img",
        "title": "File:Forpus coelestis (normal and American white) -AFA show bird-8a.jpg",
        "publisher": "Ruth Rogers / Wikimedia Commons",
        "year": "2002",
        "url": "https://commons.wikimedia.org/wiki/File:Forpus_coelestis_(normal_and_American_white)_-AFA_show_bird-8a.jpg",
        "note": "CC BY 2.0 ; individu vert à gauche"
      },
      {
        "id": "media-forpus-coelestis-audio",
        "title": "XC512761",
        "publisher": "Hans Matheve / Xeno-canto",
        "url": "https://xeno-canto.org/512761",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "imageCredit": "Ruth Rogers — CC BY 2.0",
    "imageSourceId": "media-forpus-coelestis-img",
    "image": "/images/birds/forpus-coelestis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Forpus_coelestis_(normal_and_American_white)_-AFA_show_bird-8a.jpg",
    "audio": [
      "/audio/birds/forpus-coelestis.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/512761"
    ]
  },
  {
    "id": "gallus-gallus-domesticus",
    "scientificName": "Gallus gallus domesticus",
    "commonName": "Poule domestique",
    "order": "Galliformes",
    "family": "Phasianidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "**Forme domestique** du coq bankiva (*Gallus gallus*). L’espèce sauvage est évaluée **Least Concern** (2024) ; population non quantifiée, tendance **en diminution** (habitat, chasse).",
          "sourceIds": [
            "birdlife-gallus-gallus. Ne pas confondre statut sauvage",
            "élevage domestique"
          ]
        },
        {
          "text": "Chez le taxon sauvage : mâle au plumage très coloré (or, rouge, marron, reflets métalliques) ; femelle plus svelte, plumage plus discret. Hiérarchie sociale distincte mâles/femelles.",
          "sourceIds": [
            "adw-gallus-gallus (taxon sauvage",
            "la forme domestique conserve un fort dimorphisme selon races)"
          ]
        },
        {
          "text": "Pour *Gallus gallus* sauvage : forêts secondaires denses / belukar ; clairières et zones ouvertes pour l’alimentation ; aussi plantations. Habitats BirdLife : forêts humides de basse altitude et de montagne, mangroves, pâturages (suitable).",
          "sourceIds": [
            "birdlife-gallus-gallus",
            "adw-gallus-gallus"
          ]
        },
        {
          "text": "Herbivore et insectivore : grains, soja, vers, herbes et divers graines au sol.",
          "sourceIds": [
            "adw-gallus-gallus"
          ]
        },
        {
          "text": "Système social de **hiérarchie de dominance** (« pecking order ») séparée pour mâles et femelles ; postures de dominance/soumission.",
          "sourceIds": [
            "adw-gallus-gallus"
          ]
        },
        {
          "text": "Enregistrement XC1181554 (*Gallus gallus*, Maria Ulfah — CC BY-NC-SA 4.0) : https://xeno-canto.org/1181554",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Poule domestique ↔ *Gallus gallus domesticus* ; Galliformes ; Phasianidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Forme domestique — distincte des cailles / colins du programme",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Issue du coq bankiva (*Gallus gallus*) ; ne pas confondre statut sauvage et élevage",
        "sourceIds": [
          "birdlife-gallus-gallus",
          "adw-gallus-gallus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Fort dimorphisme (mâle coloré / femelle plus discrète chez le taxon sauvage)",
        "sourceIds": [
          "birdlife-gallus-gallus",
          "adw-gallus-gallus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Hiérarchie sociale (« pecking order ») séparée mâles / femelles",
        "sourceIds": [
          "birdlife-gallus-gallus",
          "adw-gallus-gallus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-gallus-gallus",
        "title": "Red Junglefowl Gallus gallus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/red-junglefowl-gallus-gallus",
        "note": "Taxon sauvage"
      },
      {
        "id": "adw-gallus-gallus",
        "title": "Gallus gallus (red junglefowl)",
        "publisher": "Animal Diversity Web / Zoe Gautier",
        "url": "https://animaldiversity.org/accounts/Gallus_gallus/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-gallus-domesticus-img",
        "title": "File:Rooster and Hen.jpg",
        "publisher": "SimonWaldherr / Wikimedia Commons",
        "year": "2017",
        "url": "https://commons.wikimedia.org/wiki/File:Rooster_and_Hen.jpg",
        "note": "CC BY 4.0"
      },
      {
        "id": "media-gallus-domesticus-audio",
        "title": "XC1181554",
        "publisher": "Maria Ulfah / Xeno-canto",
        "url": "https://xeno-canto.org/1181554",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "SimonWaldherr — CC BY 4.0",
    "imageSourceId": "media-gallus-domesticus-img",
    "image": "/images/birds/gallus-gallus-domesticus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Rooster_and_Hen.jpg",
    "audio": [
      "/audio/birds/gallus-gallus-domesticus.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1181554"
    ]
  },
  {
    "id": "geopelia-cuneata",
    "scientificName": "Geopelia cuneata",
    "commonName": "Colombe diamant",
    "order": "Columbiformes",
    "family": "Columbidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évaluée **Least Concern** (2024). Endémique nicheur d’Australie ; statut migratoire BirdLife : **nomade**. EOO ≈ 7 860 000 km² ; population non quantifiée, décrite comme commune ; tendance suspectée **stable**.",
          "sourceIds": [
            "birdlife-geopelia-cuneata"
          ]
        },
        {
          "text": "*Non documenté dans BirdLife ni dans un compte-rendu ADW espèce (classification seule) — `na`.*",
          "sourceIds": []
        },
        {
          "text": "Désert chaud et zones humides intérieures (sources/oasis) — suitable (résident). Altitude 0–790 m.",
          "sourceIds": [
            "birdlife-geopelia-cuneata"
          ]
        },
        {
          "text": "*Non documenté dans les sources catalogue consultées (BirdLife sans paragraphe régime ; pas de fiche ADW complète) — `na`.*",
          "sourceIds": []
        },
        {
          "text": "Espèce **nomade** selon BirdLife ; décrite comme commune ; utilisée/commercialisée (animaux de compagnie, nourriture) à forte prévalence dans les jeux de données commerce évalués (Donald et al. 2024, cité BirdLife).",
          "sourceIds": [
            "birdlife-geopelia-cuneata"
          ]
        },
        {
          "text": "Enregistrement XC165147 (Nigel Jackett — CC BY-NC-SA 3.0) : https://xeno-canto.org/165147",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Colombe diamant ↔ *Geopelia cuneata* ; Columbiformes ; Columbidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Même genre que la colombe zébrée (*G. striata*) — distinguer au plumage / aire",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Endémique d’Australie ; BirdLife : statut **nomade**",
        "sourceIds": [
          "birdlife-geopelia-cuneata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; habitats désert chaud / oasis",
        "sourceIds": [
          "birdlife-geopelia-cuneata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Présente dans le commerce d’animaux de compagnie (donnée BirdLife)",
        "sourceIds": [
          "birdlife-geopelia-cuneata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-geopelia-cuneata",
        "title": "Diamond Dove Geopelia cuneata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/diamond-dove-geopelia-cuneata",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-geopelia-cuneata-img",
        "title": "File:Geopelia cuneata.JPG",
        "publisher": "Maurice van Bruggen / Wikimedia Commons",
        "year": "2009",
        "url": "https://commons.wikimedia.org/wiki/File:Geopelia_cuneata.JPG",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-geopelia-cuneata-audio",
        "title": "XC165147",
        "publisher": "Nigel Jackett / Xeno-canto",
        "url": "https://xeno-canto.org/165147",
        "note": "CC BY-NC-SA 3.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-geopelia-cuneata"
      ]
    },
    "imageCredit": "Maurice van Bruggen — CC BY-SA 3.0",
    "imageSourceId": "media-geopelia-cuneata-img",
    "image": "/images/birds/geopelia-cuneata.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Geopelia_cuneata.JPG",
    "audio": [
      "/audio/birds/geopelia-cuneata.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/165147"
    ]
  },
  {
    "id": "geopelia-striata",
    "scientificName": "Geopelia striata",
    "commonName": "Colombe zébrée",
    "order": "Columbiformes",
    "family": "Columbidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évaluée **Least Concern** (2025). Non migratrice. EOO ≈ 6 960 000 km² ; population non quantifiée, généralement commune ; tendance suspectée **stable**. Nombreuses introductions hors aire native.",
          "sourceIds": [
            "birdlife-geopelia-striata"
          ]
        },
        {
          "text": "*Non documenté dans BirdLife / ADW consultés — `na`.*",
          "sourceIds": []
        },
        {
          "text": "Fourrés secs et humides ; terres cultivées, jardins ruraux, zones urbaines, forêts dégradées (suitable, résident).",
          "sourceIds": [
            "birdlife-geopelia-striata"
          ]
        },
        {
          "text": "*Non documenté dans les sources catalogue consultées — `na`.*",
          "sourceIds": []
        },
        {
          "text": "Non migratrice ; associée aux habitats anthropisés (jardins, villes) comme aux fourrés ; présente dans le commerce d’animaux de compagnie (Donald et al. 2024, cité BirdLife).",
          "sourceIds": [
            "birdlife-geopelia-striata"
          ]
        },
        {
          "text": "Enregistrement XC1081912 (Arend Wassink — CC BY-NC-SA 4.0) : https://xeno-canto.org/1081912",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Colombe zébrée ↔ *Geopelia striata* ; Columbiformes ; Columbidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : colombe diamant (*G. cuneata*) — même genre *Geopelia*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; Least Concern ; tendance stable",
        "sourceIds": [
          "birdlife-geopelia-striata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Habitats anthropisés (jardins, villes) et fourrés",
        "sourceIds": [
          "birdlife-geopelia-striata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Nombreuses introductions hors aire native (BirdLife)",
        "sourceIds": [
          "birdlife-geopelia-striata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-geopelia-striata",
        "title": "Zebra Dove Geopelia striata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2025",
        "url": "https://datazone.birdlife.org/species/factsheet/zebra-dove-geopelia-striata",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-geopelia-striata-img",
        "title": "File:Burung Merbuk.JPG",
        "publisher": "Angah hfz / Wikimedia Commons",
        "year": "2009",
        "url": "https://commons.wikimedia.org/wiki/File:Burung_Merbuk.JPG",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-geopelia-striata-audio",
        "title": "XC1081912",
        "publisher": "Arend Wassink / Xeno-canto",
        "url": "https://xeno-canto.org/1081912",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Angah hfz — CC BY-SA 3.0",
    "imageSourceId": "media-geopelia-striata-img",
    "image": "/images/birds/geopelia-striata.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Burung_Merbuk.JPG",
    "audio": [
      "/audio/birds/geopelia-striata.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1081912"
    ]
  },
  {
    "id": "gracula-religiosa",
    "scientificName": "Gracula religiosa",
    "commonName": "Mainate religieux",
    "order": "Passériformes",
    "family": "Sturnidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 12 500 000 km² ; population non quantifiée, commune à abondante (Feare & Craig 1998 *via* BirdLife) ; tendance **en diminution** (perte de couvert forestier ~14 %, déclin suspecté 1–19 %). Noir brillant, caroncules jaunes, tache blanche alaire ; ~27–30 cm. Altitude 0–2 000 m.",
          "sourceIds": [
            "birdlife-gracula-religiosa",
            "adw-gracula-religiosa"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife ; ADW).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Forêts humides de basse altitude et montagnardes (majeurs) ; mangroves, plantations. Préfère jungles et forêts décidues humides, lisières et cultures (ex. café).",
          "sourceIds": [
            "birdlife-gracula-religiosa",
            "adw-gracula-religiosa"
          ]
        },
        {
          "text": "Surtout frugivore arboricole (figues, baies, graines) ; aussi nectar, insectes et parfois lézards.",
          "sourceIds": [
            "adw-gracula-religiosa"
          ]
        },
        {
          "text": "Presque entièrement arboricole ; couples monogames ; grands groupes hors reproduction ; connu pour le mimétisme (sons, parole humaine).",
          "sourceIds": [
            "birdlife-gracula-religiosa",
            "adw-gracula-religiosa"
          ]
        },
        {
          "text": "Enregistrement XC1157137 (Ding Li Yong — CC BY-NC-ND 4.0) : https://xeno-canto.org/1157137",
          "sourceIds": [
            "media-gracula-religiosa-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Mainate religieux ↔ *Gracula religiosa* ; **Passériformes** ; Sturnidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Premier Passériforme du lot — distinct des Cacatuides / Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance en diminution ; noir brillant + caroncules jaunes",
        "sourceIds": [
          "birdlife-gracula-religiosa",
          "adw-gracula-religiosa"
        ]
      },
      {
        "level": "sourcé",
        "text": "Surtout frugivore arboricole ; forêts humides",
        "sourceIds": [
          "birdlife-gracula-religiosa",
          "adw-gracula-religiosa"
        ]
      },
      {
        "level": "sourcé",
        "text": "Connu pour le mimétisme (sons, parole)",
        "sourceIds": [
          "birdlife-gracula-religiosa",
          "adw-gracula-religiosa"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-gracula-religiosa",
        "title": "Common Hill Myna Gracula religiosa — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/common-hill-myna-gracula-religiosa",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-gracula-religiosa",
        "title": "Gracula religiosa (hill myna)",
        "publisher": "Animal Diversity Web / Kelly Sims",
        "url": "https://animaldiversity.org/accounts/Gracula_religiosa/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-gracula-religiosa-img",
        "title": "File:Hill Myna (Gracula religiosa intermedia), Thrigby Hall.jpg",
        "publisher": "Spencer Wright / Wikimedia Commons",
        "year": "2009",
        "url": "https://commons.wikimedia.org/wiki/File:Hill_Myna_(Gracula_religiosa_intermedia),_Thrigby_Hall.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-gracula-religiosa-audio",
        "title": "XC1157137",
        "publisher": "Ding Li Yong / Xeno-canto",
        "url": "https://xeno-canto.org/1157137",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "imageCredit": "Spencer Wright — CC BY 2.0",
    "imageSourceId": "media-gracula-religiosa-img",
    "image": "/images/birds/gracula-religiosa.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Hill_Myna_(Gracula_religiosa_intermedia),_Thrigby_Hall.jpg",
    "audio": [
      "https://xeno-canto.org/1157137"
    ]
  },
  {
    "id": "lagonosticta-larvata-vinacea",
    "scientificName": "Lagonosticta larvata vinacea",
    "commonName": "Amaranthe vineuse",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "BirdLife traite *L. vinacea* comme espèce distincte (autrefois réunie sous *L. larvata*). Évalué **Least Concern** (2024). EOO ≈ 322 000 km² ; tendance **stable**. Altitude 0–1 700 m. Répartition : Sénégal, Gambie, Guinée-Bissau jusqu’au nord de la Guinée et à l’ouest du Mali.",
          "sourceIds": [
            "birdlife-lagonosticta-vinacea"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche (majeur) ; fourrés secs (suitable).",
          "sourceIds": [
            "birdlife-lagonosticta-vinacea"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Commerce international d’animaux de compagnie signalé à faible prévalence.",
          "sourceIds": [
            "birdlife-lagonosticta-vinacea"
          ]
        },
        {
          "text": "Enregistrement XC405752 (*Lagonosticta larvata*, Sénégal — Bram Piot — CC BY-NC-SA 4.0) : https://xeno-canto.org/405752 Xeno-canto suit la taxonomie IOC (lumping sous *L. larvata*) ; enregistrement de Kédougou (Sénégal), dans l’aire BirdLife de *L. vinacea*.",
          "sourceIds": [
            "media-lagonosticta-larvata-vinacea-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Amaranthe vineuse ↔ *Lagonosticta larvata vinacea* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : amaranthe à bec rouge (*L. senegala*) — vineuse = sous-espèce programme ; BirdLife *L. vinacea*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; EOO ≈ 322 000 km² ; tendance stable",
        "sourceIds": [
          "birdlife-lagonosticta-vinacea"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; savane sèche (majeur) ; Afrique de l’Ouest",
        "sourceIds": [
          "birdlife-lagonosticta-vinacea"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce international signalé à faible prévalence",
        "sourceIds": [
          "birdlife-lagonosticta-vinacea"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-lagonosticta-vinacea",
        "title": "Vinaceous Firefinch Lagonosticta vinacea — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/vinaceous-firefinch-lagonosticta-vinacea",
        "note": "Consulté 2026-10-10 ; syn. programme *L. larvata vinacea*"
      },
      {
        "id": "media-lagonosticta-larvata-vinacea-img",
        "title": "File:Vinaceous Firefinch.jpg",
        "publisher": "Francesco Veronesi / Wikimedia Commons",
        "year": "2017",
        "url": "https://commons.wikimedia.org/wiki/File:Vinaceous_Firefinch.jpg",
        "note": "CC BY-SA 2.0 ; *L. larvata vinacea*, Gambie"
      },
      {
        "id": "media-lagonosticta-larvata-vinacea-audio",
        "title": "XC405752",
        "publisher": "Bram Piot / Xeno-canto",
        "url": "https://xeno-canto.org/405752",
        "note": "CC BY-NC-SA 4.0 ; catalogué *L. larvata* (IOC)"
      }
    ],
    "wildRange": {
      "regions": [
        "Sénégal"
      ],
      "hemisphere": "AF",
      "sourceIds": [
        "birdlife-lagonosticta-vinacea"
      ]
    },
    "imageCredit": "Francesco Veronesi — CC BY-SA 2.0",
    "imageSourceId": "media-lagonosticta-larvata-vinacea-img",
    "image": "/images/birds/lagonosticta-larvata-vinacea.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Vinaceous_Firefinch.jpg",
    "audio": [
      "/audio/birds/lagonosticta-larvata-vinacea.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/405752"
    ]
  },
  {
    "id": "lagonosticta-senegala",
    "scientificName": "Lagonosticta senegala",
    "commonName": "Amaranthe à bec rouge",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern**. EOO ≈ 25 600 000 km² ; tendance **stable**. Non migrateur. Commerce d’animaux de compagnie signalé (échelle nationale / de subsistance).",
          "sourceIds": [
            "birdlife-lagonosticta-senegala"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses (image mâle choisie pour illustration).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche, fourrés secs ou humides, terres cultivées, pâturages, jardins ruraux et zones urbaines.",
          "sourceIds": [
            "birdlife-lagonosticta-senegala"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-lagonosticta-senegala"
          ]
        },
        {
          "text": "Enregistrement XC1145629 (African Bioacoustics Community — CC BY-NC-SA 4.0) : https://xeno-canto.org/1145629",
          "sourceIds": [
            "media-lagonosticta-senegala-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Amaranthe à bec rouge ↔ *Lagonosticta senegala* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Lagonosticta* — distinct des *Estrilda* (astrilds) du programme",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; EOO très vaste (≈ 25,6 M km²) ; tendance stable",
        "sourceIds": [
          "birdlife-lagonosticta-senegala"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; savane, fourrés, cultures, jardins, urbain",
        "sourceIds": [
          "birdlife-lagonosticta-senegala"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce d’animaux de compagnie signalé (échelle nationale / subsistance)",
        "sourceIds": [
          "birdlife-lagonosticta-senegala"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-lagonosticta-senegala",
        "title": "Red-billed Firefinch Lagonosticta senegala — Species Factsheet",
        "publisher": "BirdLife International",
        "url": "https://datazone.birdlife.org/species/factsheet/red-billed-firefinch-lagonosticta-senegala",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-lagonosticta-senegala-img",
        "title": "File:Red-billed firefinch (Lagonosticta senegala senegala) male.jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2016",
        "url": "https://commons.wikimedia.org/wiki/File:Red-billed_firefinch_(Lagonosticta_senegala_senegala)_male.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-lagonosticta-senegala-audio",
        "title": "XC1145629",
        "publisher": "African Bioacoustics Community / Xeno-canto",
        "url": "https://xeno-canto.org/1145629",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-lagonosticta-senegala-img",
    "image": "/images/birds/lagonosticta-senegala.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Red-billed_firefinch_(Lagonosticta_senegala_senegala)_male.jpg",
    "audio": [
      "/audio/birds/lagonosticta-senegala.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1145629"
    ]
  },
  {
    "id": "lonchura-cantans",
    "scientificName": "Lonchura cantans",
    "commonName": "Bec d'argent",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "BirdLife place l’espèce dans *Euodice* (ex-*Lonchura*). Évalué **Least Concern** (2018). EOO ≈ 16 600 000 km² ; tendance **stable**. Altitude 0–1 600 m. Commerce international d’animaux de compagnie signalé.",
          "sourceIds": [
            "birdlife-euodice-cantans"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche et fourrés secs (majeurs) ; terres cultivées et pâturages (suitable).",
          "sourceIds": [
            "birdlife-euodice-cantans"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce international d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-euodice-cantans"
          ]
        },
        {
          "text": "Enregistrement XC1163939 (Zsombor Károlyi — CC BY-NC-SA 4.0) : https://xeno-canto.org/1163939",
          "sourceIds": [
            "media-lonchura-cantans-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Bec d'argent ↔ *Lonchura cantans* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "BirdLife : *Euodice cantans* — distinct des *Lonchura malacca* / *striata*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; EOO vaste",
        "sourceIds": [
          "birdlife-euodice-cantans"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; savane sèche et fourrés secs (majeurs)",
        "sourceIds": [
          "birdlife-euodice-cantans"
        ]
      },
      {
        "level": "sourcé",
        "text": "Présent dans le commerce international d’animaux de compagnie",
        "sourceIds": [
          "birdlife-euodice-cantans"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-euodice-cantans",
        "title": "African Silverbill Euodice cantans — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/african-silverbill-euodice-cantans",
        "note": "Consulté 2026-10-10 ; syn. programme *Lonchura cantans*"
      },
      {
        "id": "media-lonchura-cantans-img",
        "title": "File:Silberschnäbelchen (Lonchura cantans).JPG",
        "publisher": "Edward Cwik / Wikimedia Commons",
        "year": "2012",
        "url": "https://commons.wikimedia.org/wiki/File:Silberschn%C3%A4belchen_(Lonchura_cantans).JPG",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-lonchura-cantans-audio",
        "title": "XC1163939",
        "publisher": "Zsombor Károlyi / Xeno-canto",
        "url": "https://xeno-canto.org/1163939",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Edward Cwik — CC BY-SA 3.0",
    "imageSourceId": "media-lonchura-cantans-img",
    "image": "/images/birds/lonchura-cantans.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Silberschn%C3%A4belchen_(Lonchura_cantans).JPG",
    "audio": [
      "/audio/birds/lonchura-cantans.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1163939"
    ]
  },
  {
    "id": "lonchura-cucullata",
    "scientificName": "Lonchura cucullata",
    "commonName": "Nonnette ou spermète",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "BirdLife place l’espèce dans *Spermestes* (ex-*Lonchura*). Évalué **Least Concern** (2024). EOO ≈ 23 600 000 km² ; commune et largement répandue (Clement 1999 *via* BirdLife) ; tendance **stable**. Altitude 0–2 150 m. Commerce signalé à forte prévalence.",
          "sourceIds": [
            "birdlife-spermestes-cucullata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Prairies sèches, fourrés secs, forêts sèches ou humides de basse altitude, terres cultivées, pâturages, zones humides intérieures.",
          "sourceIds": [
            "birdlife-spermestes-cucullata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Fortement présent dans le commerce.",
          "sourceIds": [
            "birdlife-spermestes-cucullata"
          ]
        },
        {
          "text": "Enregistrement XC1165783 (Jonathan Onongo — CC BY-NC-SA 4.0) : https://xeno-canto.org/1165783",
          "sourceIds": [
            "media-lonchura-cucullata-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Nonnette / spermète ↔ *Lonchura cucullata* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "BirdLife : *Spermestes cucullata* — distincte des *Lonchura* asiatiques du lot",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; EOO très vaste ; tendance stable",
        "sourceIds": [
          "birdlife-spermestes-cucullata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; prairies, fourrés, forêts, cultures, zones humides",
        "sourceIds": [
          "birdlife-spermestes-cucullata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Fortement présente dans le commerce",
        "sourceIds": [
          "birdlife-spermestes-cucullata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-spermestes-cucullata",
        "title": "Bronze Mannikin Spermestes cucullata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/bronze-mannikin-spermestes-cucullata",
        "note": "Consulté 2026-10-10 ; syn. programme *Lonchura cucullata*"
      },
      {
        "id": "media-lonchura-cucullata-img",
        "title": "File:Bronze mannikin (Lonchura cucullata cucullata).jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2016",
        "url": "https://commons.wikimedia.org/wiki/File:Bronze_mannikin_(Lonchura_cucullata_cucullata).jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-lonchura-cucullata-audio",
        "title": "XC1165783",
        "publisher": "Jonathan Onongo / Xeno-canto",
        "url": "https://xeno-canto.org/1165783",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-lonchura-cucullata-img",
    "image": "/images/birds/lonchura-cucullata.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Bronze_mannikin_(Lonchura_cucullata_cucullata).jpg",
    "audio": [
      "/audio/birds/lonchura-cucullata.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1165783"
    ]
  },
  {
    "id": "lonchura-maja",
    "scientificName": "Lonchura maja",
    "commonName": "Capucin à tête blanche",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2025). EOO ≈ 2 770 000 km² ; assez commune ou localement commune (Clement 1999 *via* BirdLife) ; tendance **stable**. Commerce signalé à forte prévalence.",
          "sourceIds": [
            "birdlife-lonchura-maja"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Zones humides intérieures (majeur) ; terres cultivées et plantations (suitable) ; jardins ruraux (marginal).",
          "sourceIds": [
            "birdlife-lonchura-maja"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-lonchura-maja"
          ]
        },
        {
          "text": "Enregistrement XC1106789 (Joan Theng — CC BY-NC-SA 4.0) : https://xeno-canto.org/1106789",
          "sourceIds": [
            "media-lonchura-maja-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Capucin à tête blanche ↔ *Lonchura maja* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : capucin à tête noire (*atricapilla*) — repère = tête **blanche**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; zones humides (majeur)",
        "sourceIds": [
          "birdlife-lonchura-maja"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; aussi cultures et plantations",
        "sourceIds": [
          "birdlife-lonchura-maja"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce signalé à forte prévalence",
        "sourceIds": [
          "birdlife-lonchura-maja"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-lonchura-maja",
        "title": "White-headed Munia Lonchura maja — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2025",
        "url": "https://datazone.birdlife.org/species/factsheet/white-headed-munia-lonchura-maja",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-lonchura-maja-img",
        "title": "File:Lonchura maja by Michael MK Khor.jpg",
        "publisher": "Michael MK Khor / Wikimedia Commons",
        "year": "2014",
        "url": "https://commons.wikimedia.org/wiki/File:Lonchura_maja_by_Michael_MK_Khor.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-lonchura-maja-audio",
        "title": "XC1106789",
        "publisher": "Joan Theng / Xeno-canto",
        "url": "https://xeno-canto.org/1106789",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Michael MK Khor — CC BY 2.0",
    "imageSourceId": "media-lonchura-maja-img",
    "image": "/images/birds/lonchura-maja.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Lonchura_maja_by_Michael_MK_Khor.jpg",
    "audio": [
      "/audio/birds/lonchura-maja.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1106789"
    ]
  },
  {
    "id": "lonchura-malabarica",
    "scientificName": "Lonchura malabarica",
    "commonName": "Bec de plomb",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "BirdLife place l’espèce dans *Euodice* (ex-*Lonchura*). Évalué **Least Concern** (2018). EOO ≈ 11 300 000 km² ; commune ou localement commune (Clement 1999 *via* BirdLife) ; tendance **stable**. Commerce (nourriture + animaux de compagnie) signalé à échelle nationale / de subsistance.",
          "sourceIds": [
            "birdlife-euodice-malabarica"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche, prairies sèches, fourrés secs, forêts sèches, terres cultivées, pâturages.",
          "sourceIds": [
            "birdlife-euodice-malabarica"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce.",
          "sourceIds": [
            "birdlife-euodice-malabarica"
          ]
        },
        {
          "text": "Enregistrement XC1182208 (David Darrell-Lambert — CC BY-NC-SA 4.0) : https://xeno-canto.org/1182208",
          "sourceIds": [
            "media-lonchura-malabarica-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Bec de plomb ↔ *Lonchura malabarica* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : bec d'argent (*L. cantans* / *Euodice cantans*) — BirdLife *Euodice malabarica*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; savane et fourrés secs",
        "sourceIds": [
          "birdlife-euodice-malabarica"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; aussi forêts sèches, cultures, pâturages",
        "sourceIds": [
          "birdlife-euodice-malabarica"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce (nourriture + compagnie) à échelle nationale / subsistance",
        "sourceIds": [
          "birdlife-euodice-malabarica"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-euodice-malabarica",
        "title": "Indian Silverbill Euodice malabarica — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/indian-silverbill-euodice-malabarica",
        "note": "Consulté 2026-10-10 ; syn. programme *Lonchura malabarica*"
      },
      {
        "id": "media-lonchura-malabarica-img",
        "title": "File:Indian silverbill- Euodice malabarica.jpg",
        "publisher": "Anagha devi / Wikimedia Commons",
        "year": "2019",
        "url": "https://commons.wikimedia.org/wiki/File:Indian_silverbill-_Euodice_malabarica.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-lonchura-malabarica-audio",
        "title": "XC1182208",
        "publisher": "David Darrell-Lambert / Xeno-canto",
        "url": "https://xeno-canto.org/1182208",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Anagha devi — CC BY-SA 4.0",
    "imageSourceId": "media-lonchura-malabarica-img",
    "image": "/images/birds/lonchura-malabarica.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Indian_silverbill-_Euodice_malabarica.jpg",
    "audio": [
      "/audio/birds/lonchura-malabarica.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1182208"
    ]
  },
  {
    "id": "lonchura-malacca-atricapilla",
    "scientificName": "Lonchura malacca atricapilla",
    "commonName": "Capucin à tête noire",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "BirdLife traite *L. atricapilla* (Chestnut Munia) comme espèce distincte de *L. malacca*. Évalué **Least Concern** (2024). EOO ≈ 13 200 000 km² ; tendance **stable**. Altitude 0–2 100 m.",
          "sourceIds": [
            "birdlife-lonchura-atricapilla"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Zones humides intérieures (majeur) ; fourrés humides, terres cultivées, plantations, canaux d’irrigation ; forêt humide de basse altitude (marginal).",
          "sourceIds": [
            "birdlife-lonchura-atricapilla"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur).",
          "sourceIds": [
            "birdlife-lonchura-atricapilla"
          ]
        },
        {
          "text": "Enregistrement XC1141729 (Joan Theng — CC BY-NC-SA 4.0) : https://xeno-canto.org/1141729",
          "sourceIds": [
            "media-lonchura-malacca-atricapilla-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Capucin à tête noire ↔ *Lonchura malacca atricapilla* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : tricolore (*L. malacca malacca*) — BirdLife : espèce *L. atricapilla*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; EOO large (≈ 13,2 M km²) ; tendance stable",
        "sourceIds": [
          "birdlife-lonchura-atricapilla"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; zones humides intérieures (majeur)",
        "sourceIds": [
          "birdlife-lonchura-atricapilla"
        ]
      },
      {
        "level": "sourcé",
        "text": "Habitats proches du tricolore (fourrés, cultures, canaux)",
        "sourceIds": [
          "birdlife-lonchura-atricapilla"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-lonchura-atricapilla",
        "title": "Chestnut Munia Lonchura atricapilla — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/chestnut-munia-lonchura-atricapilla",
        "note": "Consulté 2026-10-10 ; syn. programme *L. malacca atricapilla*"
      },
      {
        "id": "media-lonchura-malacca-atricapilla-img",
        "title": "File:Bondol rawa (Lonchura atricapilla).jpg",
        "publisher": "Batin E. Tuwuilu / Wikimedia Commons",
        "year": "2013",
        "url": "https://commons.wikimedia.org/wiki/File:Bondol_rawa_(Lonchura_atricapilla).jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-lonchura-malacca-atricapilla-audio",
        "title": "XC1141729",
        "publisher": "Joan Theng / Xeno-canto",
        "url": "https://xeno-canto.org/1141729",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Batin E. Tuwuilu — CC BY-SA 3.0",
    "imageSourceId": "media-lonchura-malacca-atricapilla-img",
    "image": "/images/birds/lonchura-malacca-atricapilla.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Bondol_rawa_(Lonchura_atricapilla).jpg",
    "audio": [
      "/audio/birds/lonchura-malacca-atricapilla.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1141729"
    ]
  },
  {
    "id": "lonchura-malacca-malacca",
    "scientificName": "Lonchura malacca malacca",
    "commonName": "Capucin tricolore",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 1 850 000 km² ; population non quantifiée, localement commune (Clement 1999 *via* BirdLife) ; tendance **stable**. Altitude 0–1 500 m. Commerce (nourriture humaine + animaux de compagnie) signalé.",
          "sourceIds": [
            "birdlife-lonchura-malacca"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Zones humides intérieures (majeur) ; fourrés humides, terres cultivées, plantations, canaux d’irrigation ; forêt humide de basse altitude (marginal).",
          "sourceIds": [
            "birdlife-lonchura-malacca"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce international d’animaux de compagnie et usage alimentaire.",
          "sourceIds": [
            "birdlife-lonchura-malacca"
          ]
        },
        {
          "text": "Enregistrement XC1160217 (Nishant Bhagwat — CC BY-NC-ND 4.0) : https://xeno-canto.org/1160217",
          "sourceIds": [
            "media-lonchura-malacca-malacca-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Capucin tricolore ↔ *Lonchura malacca malacca* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : capucin à tête noire (*L. malacca atricapilla*) — BirdLife sépare *L. atricapilla*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; zones humides (majeur)",
        "sourceIds": [
          "birdlife-lonchura-malacca"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; fourrés, cultures, plantations, canaux",
        "sourceIds": [
          "birdlife-lonchura-malacca"
        ]
      },
      {
        "level": "sourcé",
        "text": "Présent dans le commerce (compagnie + usage alimentaire)",
        "sourceIds": [
          "birdlife-lonchura-malacca"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-lonchura-malacca",
        "title": "Tricoloured Munia Lonchura malacca — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/tricoloured-munia-lonchura-malacca",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-lonchura-malacca-malacca-img",
        "title": "File:Tri colored munia.jpg",
        "publisher": "Photosynthesis85 / Wikimedia Commons",
        "year": "2015",
        "url": "https://commons.wikimedia.org/wiki/File:Tri_colored_munia.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-lonchura-malacca-malacca-audio",
        "title": "XC1160217",
        "publisher": "Nishant Bhagwat / Xeno-canto",
        "url": "https://xeno-canto.org/1160217",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "imageCredit": "Photosynthesis85 — CC BY-SA 4.0",
    "imageSourceId": "media-lonchura-malacca-malacca-img",
    "image": "/images/birds/lonchura-malacca-malacca.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Tri_colored_munia.jpg",
    "audio": [
      "/audio/birds/lonchura-malacca-malacca.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1160217"
    ]
  },
  {
    "id": "lonchura-oryzivora",
    "scientificName": "Lonchura oryzivora",
    "commonName": "Calfat ou padda",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Endangered** (2021). EOO ≈ 148 000 km² ; 1 000–2 499 individus matures ; tendance **en diminution**. Endémique nicheur de Java, Bali et probablement Madura ; largement introduit ailleurs. Déclin lié au piégeage pour le commerce d’oiseaux de cage. CITES Annexe II.",
          "sourceIds": [
            "birdlife-lonchura-oryzivora"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Zones urbaines, jardins ruraux, terres cultivées ; prairies sèches, savane sèche et fourrés secs. Espèce de basse altitude (surtout < 500 m, localement jusqu’à 1 500 m).",
          "sourceIds": [
            "birdlife-lonchura-oryzivora"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Grégaire hors reproduction ; mouvements locaux liés aux ressources alimentaires. Très présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-lonchura-oryzivora"
          ]
        },
        {
          "text": "Enregistrement XC793299 (Kim Chuah Lim — CC BY-NC-SA 4.0) : https://xeno-canto.org/793299",
          "sourceIds": [
            "media-lonchura-oryzivora-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Calfat / padda ↔ *Lonchura oryzivora* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "BirdLife : *Padda oryzivora* — seul **Endangered** du lot Lonchura",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "EN ; 1 000–2 499 matures ; déclin (piégeage cage)",
        "sourceIds": [
          "birdlife-lonchura-oryzivora"
        ]
      },
      {
        "level": "sourcé",
        "text": "Endémique Java / Bali (+ introductions) ; CITES Annexe II",
        "sourceIds": [
          "birdlife-lonchura-oryzivora"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; urbain, jardins, cultures ; grégaire hors reproduction",
        "sourceIds": [
          "birdlife-lonchura-oryzivora"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-lonchura-oryzivora",
        "title": "Java Sparrow Padda oryzivora — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2021",
        "url": "https://datazone.birdlife.org/species/factsheet/java-sparrow-padda-oryzivora",
        "note": "Consulté 2026-10-10 ; BirdLife: Padda"
      },
      {
        "id": "media-lonchura-oryzivora-img",
        "title": "File:Padda oryzivora qtl1.jpg",
        "publisher": "Quartl / Wikimedia Commons",
        "year": "2009",
        "url": "https://commons.wikimedia.org/wiki/File:Padda_oryzivora_qtl1.jpg",
        "note": "CC BY-SA 3.0 ; spécimen captif"
      },
      {
        "id": "media-lonchura-oryzivora-audio",
        "title": "XC793299",
        "publisher": "Kim Chuah Lim / Xeno-canto",
        "url": "https://xeno-canto.org/793299",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Quartl — CC BY-SA 3.0",
    "imageSourceId": "media-lonchura-oryzivora-img",
    "image": "/images/birds/lonchura-oryzivora.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Padda_oryzivora_qtl1.jpg",
    "audio": [
      "https://xeno-canto.org/793299"
    ]
  },
  {
    "id": "lonchura-punctulata",
    "scientificName": "Lonchura punctulata",
    "commonName": "Damier",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2025). EOO ≈ 23 000 000 km² ; population considérée > 50 000 000 individus matures (Partners in Flight 2024 *via* BirdLife) ; tendance **en augmentation**. Commerce signalé à forte prévalence.",
          "sourceIds": [
            "birdlife-lonchura-punctulata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Terres irriguées, cultures, jardins ruraux et zones urbaines ; forêts sèches ou humides de basse altitude ; prairies sèches ou saisonnièrement inondées ; fourrés humides.",
          "sourceIds": [
            "birdlife-lonchura-punctulata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-lonchura-punctulata"
          ]
        },
        {
          "text": "Enregistrement XC1069340 (David Darrell-Lambert — CC BY-NC-SA 4.0) : https://xeno-canto.org/1069340",
          "sourceIds": [
            "media-lonchura-punctulata-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Damier ↔ *Lonchura punctulata* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : autres *Lonchura* — damier = tendance en **augmentation**, très abondant",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; > 50 M matures estimés ; EOO énorme",
        "sourceIds": [
          "birdlife-lonchura-punctulata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; cultures, jardins, urbain, forêts, prairies",
        "sourceIds": [
          "birdlife-lonchura-punctulata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce signalé à forte prévalence",
        "sourceIds": [
          "birdlife-lonchura-punctulata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-lonchura-punctulata",
        "title": "Scaly-breasted Munia Lonchura punctulata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2025",
        "url": "https://datazone.birdlife.org/species/factsheet/scaly-breasted-munia-lonchura-punctulata",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-lonchura-punctulata-img",
        "title": "File:Scaly-breasted munia or spotted munia (Lonchura punctulata) at Dehradun, Uttarakhand 05.jpg",
        "publisher": "Satdeep Gill / Wikimedia Commons",
        "year": "2023",
        "url": "https://commons.wikimedia.org/wiki/File:Scaly-breasted_munia_or_spotted_munia_(Lonchura_punctulata)_at_Dehradun,_Uttarakhand_05.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-lonchura-punctulata-audio",
        "title": "XC1069340",
        "publisher": "David Darrell-Lambert / Xeno-canto",
        "url": "https://xeno-canto.org/1069340",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Satdeep Gill — CC BY-SA 4.0",
    "imageSourceId": "media-lonchura-punctulata-img",
    "image": "/images/birds/lonchura-punctulata.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Scaly-breasted_munia_or_spotted_munia_(Lonchura_punctulata)_at_Dehradun,_Uttarakhand_05.jpg",
    "audio": [
      "/audio/birds/lonchura-punctulata.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1069340"
    ]
  },
  {
    "id": "lonchura-striata-domestiqua",
    "scientificName": "Lonchura striata domestiqua",
    "commonName": "Moineau du Japon",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "**Forme domestique** (Society Finch / moineau du Japon), dérivée du capucin domino sauvage. Taxon sauvage *L. striata* : **Least Concern** (2024) ; EOO ≈ 14 500 000 km² ; tendance **stable**.",
          "sourceIds": [
            "birdlife-lonchura-striata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses pour le taxon sauvage ; forme domestique non détaillée.*",
          "sourceIds": []
        },
        {
          "text": "Taxon sauvage : non migrateur ; savane sèche, prairies sèches, fourrés secs, forêts sèches, terres cultivées. Forme domestique : animale d’élevage / de compagnie (pas d’aire sauvage propre).",
          "sourceIds": [
            "birdlife-lonchura-striata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Taxon sauvage sédentaire ; fortement présent dans le commerce d’animaux de compagnie — contexte historique de la forme domestique.",
          "sourceIds": [
            "birdlife-lonchura-striata"
          ]
        },
        {
          "text": "Enregistrement XC1160466 (*Lonchura striata* sauvage, Nishant Bhagwat — CC BY-NC-ND 4.0) : https://xeno-canto.org/1160466",
          "sourceIds": [
            "media-lonchura-striata-domestiqua-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Moineau du Japon ↔ *Lonchura striata domestiqua* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Forme **domestique** — ne pas confondre avec le capucin domino sauvage (*L. striata*)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dérivée du taxon sauvage *L. striata* (Least Concern, tendance stable)",
        "sourceIds": [
          "birdlife-lonchura-striata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Pas d’aire sauvage propre : élevage / compagnie",
        "sourceIds": [
          "birdlife-lonchura-striata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Audio de référence = enregistrement du taxon sauvage (même espèce)",
        "sourceIds": [
          "birdlife-lonchura-striata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-lonchura-striata",
        "title": "White-rumped Munia Lonchura striata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/white-rumped-munia-lonchura-striata",
        "note": "Taxon sauvage"
      },
      {
        "id": "media-lonchura-striata-domestiqua-img",
        "title": "File:Society Finch.jpg",
        "publisher": "Anil Kumar / Wikimedia Commons",
        "year": "2022",
        "url": "https://commons.wikimedia.org/wiki/File:Society_Finch.jpg",
        "note": "CC BY-SA 4.0 ; forme domestique"
      },
      {
        "id": "media-lonchura-striata-domestiqua-audio",
        "title": "XC1160466",
        "publisher": "Nishant Bhagwat / Xeno-canto",
        "url": "https://xeno-canto.org/1160466",
        "note": "CC BY-NC-ND 4.0 ; taxon sauvage"
      }
    ],
    "wildRange": {
      "regions": [
        "Japon"
      ],
      "hemisphere": "AS",
      "sourceIds": [
        "birdlife-lonchura-striata"
      ]
    },
    "imageCredit": "Anil Kumar — CC BY-SA 4.0",
    "imageSourceId": "media-lonchura-striata-domestiqua-img",
    "image": "/images/birds/lonchura-striata-domestiqua.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Society_Finch.jpg",
    "audio": [
      "/audio/birds/lonchura-striata-domestiqua.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1160466"
    ]
  },
  {
    "id": "lonchura-striata",
    "scientificName": "Lonchura striata",
    "commonName": "Capucin domino",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 14 500 000 km² ; population non quantifiée, commune ou localement commune (Clement 1999 *via* BirdLife) ; tendance **stable**. Altitude 0–2 500 m. Commerce signalé à forte prévalence (animaux de compagnie + usage alimentaire).",
          "sourceIds": [
            "birdlife-lonchura-striata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche, prairies sèches, fourrés secs, forêts sèches, terres cultivées.",
          "sourceIds": [
            "birdlife-lonchura-striata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses (usage alimentaire humain signalé dans le commerce, pas le régime de l’oiseau).*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Fortement présent dans le commerce (animaux de compagnie international ; nourriture humaine à échelle nationale / de subsistance).",
          "sourceIds": [
            "birdlife-lonchura-striata"
          ]
        },
        {
          "text": "Enregistrement XC1160466 (Nishant Bhagwat — CC BY-NC-ND 4.0) : https://xeno-canto.org/1160466",
          "sourceIds": [
            "media-lonchura-striata-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Capucin domino ↔ *Lonchura striata* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : moineau du Japon (*L. striata domestiqua*) — forme **domestique** du même taxon",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; savane / fourrés / cultures",
        "sourceIds": [
          "birdlife-lonchura-striata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; EOO vaste (≈ 14,5 M km²)",
        "sourceIds": [
          "birdlife-lonchura-striata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Fortement présent dans le commerce (compagnie + usage alimentaire)",
        "sourceIds": [
          "birdlife-lonchura-striata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-lonchura-striata",
        "title": "White-rumped Munia Lonchura striata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/white-rumped-munia-lonchura-striata",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-lonchura-striata-img",
        "title": "File:White-rumped Munia (Lonchura striata) (32024349690).jpg",
        "publisher": "Rison Thumboor / Wikimedia Commons",
        "year": "2017",
        "url": "https://commons.wikimedia.org/wiki/File:White-rumped_Munia_(Lonchura_striata)_(32024349690).jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-lonchura-striata-audio",
        "title": "XC1160466",
        "publisher": "Nishant Bhagwat / Xeno-canto",
        "url": "https://xeno-canto.org/1160466",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "imageCredit": "Rison Thumboor — CC BY 2.0",
    "imageSourceId": "media-lonchura-striata-img",
    "image": "/images/birds/lonchura-striata.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:White-rumped_Munia_(Lonchura_striata)_(32024349690).jpg",
    "audio": [
      "/audio/birds/lonchura-striata.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1160466"
    ]
  },
  {
    "id": "melopsittacus-undulatus",
    "scientificName": "Melopsittacus undulatus",
    "commonName": "Perruche ondulée",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). Endémique nicheur d’Australie ; EOO ≈ 7 160 000 km² ; abondant ; tendance **en augmentation**. ≈ 18–20 cm. Forme sauvage : front jaune, tête barrée jaune/noir, corps vert.",
          "sourceIds": [
            "birdlife-melopsittacus-undulatus",
            "adw-melopsittacus-undulatus"
          ]
        },
        {
          "text": "Léger : chez la femelle en reproduction, cire beige/brun clair ; sinon cire bleue (souvent associée au mâle / hors reproduction).",
          "sourceIds": [
            "adw-melopsittacus-undulatus (citant Forshaw 1977)"
          ]
        },
        {
          "text": "BirdLife : savane sèche, prairies, fourrés, désert chaud, forêts sèches, cultures, pâturages, jardins (suitable) ; statut **nomade**. ADW : semi-aride / intérieur australien.",
          "sourceIds": [
            "birdlife-melopsittacus-undulatus",
            "adw-melopsittacus-undulatus"
          ]
        },
        {
          "text": "Granivore au sol : graines de graminées (spinifex, touffes) et cultures ; boit ≈ 5,5 % de sa masse corporelle par jour.",
          "sourceIds": [
            "adw-melopsittacus-undulatus"
          ]
        },
        {
          "text": "Très social, grands vols ; diurne ; nomade ; reproduction liée à l’abondance de graines / pluies ; nid en cavités.",
          "sourceIds": [
            "birdlife-melopsittacus-undulatus",
            "adw-melopsittacus-undulatus"
          ]
        },
        {
          "text": "Enregistrement XC940888 (Samantha Aguirre — CC BY-NC-SA 4.0) : https://xeno-canto.org/940888",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche ondulée ↔ *Melopsittacus undulatus* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre seul dans le programme — très courant en animalerie (forme sauvage = base)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; endémique Australie ; tendance en **augmentation**",
        "sourceIds": [
          "birdlife-melopsittacus-undulatus",
          "adw-melopsittacus-undulatus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Nomade ; granivore au sol ; très social, grands vols",
        "sourceIds": [
          "birdlife-melopsittacus-undulatus",
          "adw-melopsittacus-undulatus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme léger : cire (beige/brun ♀ en repro. vs bleue souvent ♂)",
        "sourceIds": [
          "birdlife-melopsittacus-undulatus",
          "adw-melopsittacus-undulatus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-melopsittacus-undulatus",
        "title": "Budgerigar Melopsittacus undulatus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/budgerigar-melopsittacus-undulatus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-melopsittacus-undulatus",
        "title": "Melopsittacus undulatus (budgerigar)",
        "publisher": "Animal Diversity Web / Kelly Sims",
        "url": "https://animaldiversity.org/accounts/Melopsittacus_undulatus/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-melopsittacus-undulatus-img",
        "title": "File:Budgerigars at water, Karratha…jpg",
        "publisher": "Lip Kee / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Budgerigars_at_water,_Karratha,_Western_Aaustralia_(7857257686).jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-melopsittacus-undulatus-audio",
        "title": "XC940888",
        "publisher": "Samantha Aguirre / Xeno-canto",
        "url": "https://xeno-canto.org/940888",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-melopsittacus-undulatus",
        "adw-melopsittacus-undulatus"
      ]
    },
    "imageCredit": "Lip Kee — CC BY-SA 2.0",
    "imageSourceId": "media-melopsittacus-undulatus-img",
    "image": "/images/birds/melopsittacus-undulatus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Budgerigars_at_water,_Karratha,_Western_Aaustralia_(7857257686).jpg",
    "audio": [
      "/audio/birds/melopsittacus-undulatus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/940888"
    ]
  },
  {
    "id": "myiopsitta-monachus-monachus",
    "scientificName": "Myiopsitta monachus monachus",
    "commonName": "Perruche souris",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018) au rang d’espèce *M. monachus*. EOO ≈ 3 130 000 km² ; tendance **en augmentation** ; population non quantifiée, décrite comme commune à abondante. Forme programme : sous-espèce nominale. ≈ 28–33 cm ; vert et gris, front bleu-gris (nominate), pas de dimorphisme sexuel évident.",
          "sourceIds": [
            "birdlife-myiopsitta-monachus",
            "adw-myiopsitta-monachus"
          ]
        },
        {
          "text": "Absent (mâles et femelles non dimorphes).",
          "sourceIds": [
            "adw-myiopsitta-monachus (citant Greeson 1995)"
          ]
        },
        {
          "text": "Savane sèche, forêt tropicale humide de basse altitude (suitable), zones artificialisées majeures (forêt dégradée, cultures, pâturages, jardins, urbain). Natif Amérique du Sud (Argentine, Bolivie, Brésil, Paraguay, Uruguay) ; nombreuses populations introduites.",
          "sourceIds": [
            "birdlife-myiopsitta-monachus",
            "adw-myiopsitta-monachus"
          ]
        },
        {
          "text": "Varié : graines, fruits, fleurs, insectes, bourgeons, chardons, graminées ; près des humains aussi cultures (maïs, sorgho, agrumes, etc.).",
          "sourceIds": [
            "adw-myiopsitta-monachus"
          ]
        },
        {
          "text": "Très social ; construit ses propres nids collectifs en rameaux (unique chez les perroquets) ; non migrateur au sens BirdLife ; colonies urbaines et rurales.",
          "sourceIds": [
            "birdlife-myiopsitta-monachus",
            "adw-myiopsitta-monachus"
          ]
        },
        {
          "text": "Enregistrement XC1143450 (Tanguy Loïs — CC BY-SA 4.0) : https://xeno-canto.org/1143450",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche souris ↔ *Myiopsitta monachus monachus* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Sous-espèce nominale du programme — vert + gris, front bleu-gris",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance en **augmentation** ; pas de dimorphisme",
        "sourceIds": [
          "birdlife-myiopsitta-monachus",
          "adw-myiopsitta-monachus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Construit des **nids collectifs** en rameaux (unique chez les perroquets)",
        "sourceIds": [
          "birdlife-myiopsitta-monachus",
          "adw-myiopsitta-monachus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Natif Amérique du Sud ; nombreuses populations introduites ; régime varié",
        "sourceIds": [
          "birdlife-myiopsitta-monachus",
          "adw-myiopsitta-monachus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-myiopsitta-monachus",
        "title": "Monk Parakeet Myiopsitta monachus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/monk-parakeet-myiopsitta-monachus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-myiopsitta-monachus",
        "title": "Myiopsitta monachus (monk parakeet)",
        "publisher": "Animal Diversity Web / Lin Wang",
        "url": "https://animaldiversity.org/accounts/Myiopsitta_monachus/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-myiopsitta-monachus-monachus-img",
        "title": "File:Myiopsitta monachus -Gran Canaria…jpg",
        "publisher": "Juan Emilio / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Myiopsitta_monachus_-Gran_Canaria,_Canary_Islands,_Spain-8.jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-myiopsitta-monachus-monachus-audio",
        "title": "XC1143450",
        "publisher": "Tanguy Loïs / Xeno-canto",
        "url": "https://xeno-canto.org/1143450",
        "note": "CC BY-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Amérique du Sud",
        "Brésil"
      ],
      "hemisphere": "AM",
      "sourceIds": [
        "birdlife-myiopsitta-monachus",
        "adw-myiopsitta-monachus"
      ]
    },
    "imageCredit": "Juan Emilio — CC BY-SA 2.0",
    "imageSourceId": "media-myiopsitta-monachus-monachus-img",
    "image": "/images/birds/myiopsitta-monachus-monachus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Myiopsitta_monachus_-Gran_Canaria,_Canary_Islands,_Spain-8.jpg",
    "audio": [
      "/audio/birds/myiopsitta-monachus-monachus.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1143450"
    ]
  },
  {
    "id": "neochmia-modesta",
    "scientificName": "Neochmia modesta",
    "commonName": "Diamant modeste",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 1 850 000 km² ; population non quantifiée, décrite comme rare à localement commune (Clement 1999 *via* BirdLife) ; tendance **stable**. Endémique nicheur d’Australie. Commerce signalé à faible prévalence.",
          "sourceIds": [
            "birdlife-neochmia-modesta"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche et fourrés secs subtropicaux/tropicaux ; zones humides intérieures (marais, tourbières).",
          "sourceIds": [
            "birdlife-neochmia-modesta"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie (faible prévalence).",
          "sourceIds": [
            "birdlife-neochmia-modesta"
          ]
        },
        {
          "text": "Enregistrement XC605889 (Liam Manderson — CC BY-NC-SA 4.0) : https://xeno-canto.org/605889",
          "sourceIds": [
            "media-neochmia-modesta-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Diamant modeste ↔ *Neochmia modesta* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Neochmia* (Australie) — distinct des *Lonchura* / *Padda*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; endémique Australie ; tendance stable",
        "sourceIds": [
          "birdlife-neochmia-modesta"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; savane sèche, fourrés, zones humides",
        "sourceIds": [
          "birdlife-neochmia-modesta"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce signalé à faible prévalence",
        "sourceIds": [
          "birdlife-neochmia-modesta"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-neochmia-modesta",
        "title": "Plum-headed Finch Neochmia modesta — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/plum-headed-finch-neochmia-modesta",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-neochmia-modesta-img",
        "title": "File:Plum-headed Finch-Neochmia modesta.jpg",
        "publisher": "Greg Miles / Wikimedia Commons",
        "year": "2014",
        "url": "https://commons.wikimedia.org/wiki/File:Plum-headed_Finch-Neochmia_modesta.jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-neochmia-modesta-audio",
        "title": "XC605889",
        "publisher": "Liam Manderson / Xeno-canto",
        "url": "https://xeno-canto.org/605889",
        "note": "CC BY-NC-SA 4.0 ; XC: Aidemosyne modesta"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-neochmia-modesta"
      ]
    },
    "imageCredit": "Greg Miles — CC BY-SA 2.0",
    "imageSourceId": "media-neochmia-modesta-img",
    "image": "/images/birds/neochmia-modesta.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Plum-headed_Finch-Neochmia_modesta.jpg",
    "audio": [
      "/audio/birds/neochmia-modesta.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/605889"
    ]
  },
  {
    "id": "neochmia-ruficauda",
    "scientificName": "Neochmia ruficauda",
    "commonName": "Diamant à queue rousse",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 3 380 000 km² ; tendance **en diminution** mais populations importantes encore stables ; endémique nicheur d’Australie. Surpâturage près de l’eau cité comme menace principale pour certaines sous-espèces.",
          "sourceIds": [
            "birdlife-neochmia-ruficauda"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Terres irriguées, zones urbaines et cultivées ; savane humide et fourrés humides ; zones humides intérieures (marais, fourrés riverains).",
          "sourceIds": [
            "birdlife-neochmia-ruficauda"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur).",
          "sourceIds": [
            "birdlife-neochmia-ruficauda"
          ]
        },
        {
          "text": "Enregistrement XC436594 (Marc Anderson — CC BY-NC-ND 4.0) : https://xeno-canto.org/436594",
          "sourceIds": [
            "media-neochmia-ruficauda-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Diamant à queue rousse ↔ *Neochmia ruficauda* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : diamant modeste (*N. modesta*) — même genre *Neochmia*, AU",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; endémique Australie ; tendance en diminution",
        "sourceIds": [
          "birdlife-neochmia-ruficauda"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; zones irriguées, urbain, savane/fourrés humides",
        "sourceIds": [
          "birdlife-neochmia-ruficauda"
        ]
      },
      {
        "level": "sourcé",
        "text": "Menace citée : surpâturage près de l’eau (certaines sous-espèces)",
        "sourceIds": [
          "birdlife-neochmia-ruficauda"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-neochmia-ruficauda",
        "title": "Star Finch Neochmia ruficauda — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/star-finch-neochmia-ruficauda",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-neochmia-ruficauda-img",
        "title": "File:Star Finch (Neochmia ruficauda subclarescens) Wyndham WA.jpg",
        "publisher": "HaraldW1954 / Wikimedia Commons",
        "year": "2019",
        "url": "https://commons.wikimedia.org/wiki/File:Star_Finch_(Neochmia_ruficauda_subclarescens)_Wyndham_WA.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-neochmia-ruficauda-audio",
        "title": "XC436594",
        "publisher": "Marc Anderson / Xeno-canto",
        "url": "https://xeno-canto.org/436594",
        "note": "CC BY-NC-ND 4.0 ; XC: Bathilda ruficauda"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-neochmia-ruficauda"
      ]
    },
    "imageCredit": "HaraldW1954 — CC BY-SA 4.0",
    "imageSourceId": "media-neochmia-ruficauda-img",
    "image": "/images/birds/neochmia-ruficauda.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Star_Finch_(Neochmia_ruficauda_subclarescens)_Wyndham_WA.jpg",
    "audio": [
      "/audio/birds/neochmia-ruficauda.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/436594"
    ]
  },
  {
    "id": "neophema-elegans",
    "scientificName": "Neophema elegans",
    "commonName": "Perruche élégante",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). Endémique nicheur d’Australie ; EOO ≈ 3 240 000 km² ; tendance **en augmentation** ; rapportée commune.",
          "sourceIds": [
            "birdlife-neophema-elegans"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Prairies, savane sèche et fourrés tropicaux/subtropicaux secs ; statut **nomade**.",
          "sourceIds": [
            "birdlife-neophema-elegans"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Nomade ; endémique Australie ; population soupçonnée en hausse avec l’ouverture d’habitats.",
          "sourceIds": [
            "birdlife-neophema-elegans"
          ]
        },
        {
          "text": "Enregistrement XC755583 (Eddy Smith — CC BY-NC-SA 4.0) : https://xeno-canto.org/755583",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche élégante ↔ *Neophema elegans* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : autres *Neophema* (turquoisine, splendide) + Bourke (*Neopsephotus*)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; endémique Australie ; tendance en augmentation",
        "sourceIds": [
          "birdlife-neophema-elegans"
        ]
      },
      {
        "level": "sourcé",
        "text": "Nomade ; prairies, savane sèche, fourrés secs",
        "sourceIds": [
          "birdlife-neophema-elegans"
        ]
      },
      {
        "level": "sourcé",
        "text": "Population soupçonnée en hausse avec l’ouverture d’habitats",
        "sourceIds": [
          "birdlife-neophema-elegans"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-neophema-elegans",
        "title": "Elegant Parrot Neophema elegans — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/elegant-parrot-neophema-elegans",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-neophema-elegans-img",
        "title": "File:Elegant Parrot (Neophema elegans) (8079612251).jpg",
        "publisher": "Ron Knight / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Elegant_Parrot_(Neophema_elegans)_(8079612251).jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-neophema-elegans-audio",
        "title": "XC755583",
        "publisher": "Eddy Smith / Xeno-canto",
        "url": "https://xeno-canto.org/755583",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-neophema-elegans"
      ]
    },
    "imageCredit": "Ron Knight — CC BY 2.0",
    "imageSourceId": "media-neophema-elegans-img",
    "image": "/images/birds/neophema-elegans.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Elegant_Parrot_(Neophema_elegans)_(8079612251).jpg",
    "audio": [
      "/audio/birds/neophema-elegans.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/755583"
    ]
  },
  {
    "id": "neophema-pulchella",
    "scientificName": "Neophema pulchella",
    "commonName": "Perruche d'Edwards ou turquoisine",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). Endémique nicheur d’Australie (sud-est) ; EOO ≈ 771 000 km² ; tendance **stable** ; ≈ 20 000 individus (estimation). Aire historiquement contractée (Queensland, NSW, Victoria).",
          "sourceIds": [
            "birdlife-neophema-pulchella"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Forêt tropicale/subtropicale sèche, prairies et fourrés secs ; terres cultivées (non-breeding, suitable) ; 0–1 130 m ; non migrateur. Sous-bois herbeux requis (menaces : brûlis inadaptés, perte de cavités).",
          "sourceIds": [
            "birdlife-neophema-pulchella"
          ]
        },
        {
          "text": "BirdLife : en Victoria, adaptation à une nouvelle source alimentaire — graines de *cape weed* (rapporté dans le justifiant de tendance). Autres détails alimentaires non listés.",
          "sourceIds": [
            "birdlife-neophema-pulchella"
          ]
        },
        {
          "text": "Résident ; endémique Australie ; population globalement stable.",
          "sourceIds": [
            "birdlife-neophema-pulchella"
          ]
        },
        {
          "text": "Enregistrement XC328216 (Andrew Spencer — CC BY-NC-ND 4.0) : https://xeno-canto.org/328216",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche d'Edwards / turquoisine ↔ *Neophema pulchella* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *N. elegans* / *N. splendida* — turquoisine = sud-est AU, **non migratrice**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance **stable** ; ≈ 20 000 individus",
        "sourceIds": [
          "birdlife-neophema-pulchella"
        ]
      },
      {
        "level": "sourcé",
        "text": "Forêt sèche, prairies, fourrés ; besoin de sous-bois herbeux",
        "sourceIds": [
          "birdlife-neophema-pulchella"
        ]
      },
      {
        "level": "sourcé",
        "text": "Menaces citées : brûlis inadaptés, perte de cavités",
        "sourceIds": [
          "birdlife-neophema-pulchella"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-neophema-pulchella",
        "title": "Turquoise Parrot Neophema pulchella — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/turquoise-parrot-neophema-pulchella",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-neophema-pulchella-img",
        "title": "File:Neophema pulchella -Twycross Zoo…jpg",
        "publisher": "stephen jones / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Neophema_pulchella_-Twycross_Zoo,_Leicestershire,_England-8a.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-neophema-pulchella-audio",
        "title": "XC328216",
        "publisher": "Andrew Spencer / Xeno-canto",
        "url": "https://xeno-canto.org/328216",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-neophema-pulchella"
      ]
    },
    "imageCredit": "stephen jones — CC BY 2.0",
    "imageSourceId": "media-neophema-pulchella-img",
    "image": "/images/birds/neophema-pulchella.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Neophema_pulchella_-Twycross_Zoo,_Leicestershire,_England-8a.jpg",
    "audio": [
      "/audio/birds/neophema-pulchella.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/328216"
    ]
  },
  {
    "id": "neophema-splendida",
    "scientificName": "Neophema splendida",
    "commonName": "Perruche splendide",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). Endémique nicheur d’Australie ; EOO ≈ 1 280 000 km² ; tendance **stable** (population fluctuante selon conditions favorables).",
          "sourceIds": [
            "birdlife-neophema-splendida"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Mallee / mulga du sud semi-aride intérieur ; forêt et fourrés tropicaux/subtropicaux secs ; statut **nomade**. Cœur d’aire : Great Victoria Desert ; petite population résidente (Gluepot, Australie-Méridionale).",
          "sourceIds": [
            "birdlife-neophema-splendida"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Nomade ; irruptions hors du cœur d’aire possibles ; cohabite souvent avec la perruche de Bourke.",
          "sourceIds": [
            "birdlife-neophema-splendida"
          ]
        },
        {
          "text": "Enregistrement XC924874 (Louis Masarei — CC BY-NC-SA 4.0) : https://xeno-canto.org/924874",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche splendide ↔ *Neophema splendida* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : autres *Neophema* — splendide = mallee / désert, **nomade**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable (population fluctuante)",
        "sourceIds": [
          "birdlife-neophema-splendida"
        ]
      },
      {
        "level": "sourcé",
        "text": "Cœur d’aire : Great Victoria Desert ; irruptions possibles",
        "sourceIds": [
          "birdlife-neophema-splendida"
        ]
      },
      {
        "level": "sourcé",
        "text": "Cohabite souvent avec la perruche de Bourke",
        "sourceIds": [
          "birdlife-neophema-splendida"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-neophema-splendida",
        "title": "Scarlet-chested Parrot Neophema splendida — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/scarlet-chested-parrot-neophema-splendida",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-neophema-splendida-img",
        "title": "File:Scarlet Chested Parakeet.jpg",
        "publisher": "Ltshears / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Scarlet_Chested_Parakeet.jpg",
        "note": "Domaine public"
      },
      {
        "id": "media-neophema-splendida-audio",
        "title": "XC924874",
        "publisher": "Louis Masarei / Xeno-canto",
        "url": "https://xeno-canto.org/924874",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-neophema-splendida"
      ]
    },
    "imageCredit": "Ltshears — Domaine public",
    "imageSourceId": "media-neophema-splendida-img",
    "image": "/images/birds/neophema-splendida.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Scarlet_Chested_Parakeet.jpg",
    "audio": [
      "/audio/birds/neophema-splendida.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/924874"
    ]
  },
  {
    "id": "neopsephotus-bourkii",
    "scientificName": "Neopsephotus bourkii",
    "commonName": "Perruche de Bourke",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). Endémique nicheur d’Australie ; EOO ≈ 2 950 000 km² ; tendance **en augmentation** ; assez commune. ≈ 18–23 cm ; plumage brun-rosé / rose ventre ; bande frontale bleue plus marquée chez le mâle.",
          "sourceIds": [
            "birdlife-neopsephotus-bourkii",
            "adw-neopsephotus-bourkii"
          ]
        },
        {
          "text": "Présent : bande frontale bleue prononcée chez le mâle, réduite ou absente chez la femelle ; femelle un peu plus petite.",
          "sourceIds": [
            "adw-neopsephotus-bourkii"
          ]
        },
        {
          "text": "Savane sèche et fourrés tropicaux/subtropicaux secs ; mulga / acacia, plaines à spinifex ; statut **nomade**.",
          "sourceIds": [
            "birdlife-neopsephotus-bourkii",
            "adw-neopsephotus-bourkii"
          ]
        },
        {
          "text": "Granivore : graines de graminées, herbacées, acacias et pousses vertes ; se nourrit surtout à l’aube et au crépuscule.",
          "sourceIds": [
            "adw-neopsephotus-bourkii"
          ]
        },
        {
          "text": "Social (petits groupes à vols plus larges) ; vol bas et rapide ; souvent au sol ; sédentaire/nomade selon conditions ; nid en cavité (mulga/acacia).",
          "sourceIds": [
            "birdlife-neopsephotus-bourkii",
            "adw-neopsephotus-bourkii"
          ]
        },
        {
          "text": "Enregistrement XC681342 (Marc Anderson — CC BY-NC-ND 4.0) : https://xeno-canto.org/681342",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche de Bourke ↔ *Neopsephotus bourkii* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre seul — ne pas confondre avec les *Neophema* (élégante, turquoisine, splendide)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; Australie ; tendance en augmentation ; plumage brun-rosé",
        "sourceIds": [
          "birdlife-neopsephotus-bourkii",
          "adw-neopsephotus-bourkii"
        ]
      },
      {
        "level": "sourcé",
        "text": "Nomade ; savane / mulga ; granivore (aube et crépuscule)",
        "sourceIds": [
          "birdlife-neopsephotus-bourkii",
          "adw-neopsephotus-bourkii"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme : bande frontale bleue plus marquée chez le mâle",
        "sourceIds": [
          "birdlife-neopsephotus-bourkii",
          "adw-neopsephotus-bourkii"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-neopsephotus-bourkii",
        "title": "Bourke's Parrot Neopsephotus bourkii — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/bourkes-parrot-neopsephotus-bourkii",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-neopsephotus-bourkii",
        "title": "Neopsephotus bourkii (Bourke's parrot)",
        "publisher": "Animal Diversity Web / Janice Pappas",
        "url": "https://animaldiversity.org/accounts/Neopsephotus_bourkii/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-neopsephotus-bourkii-img",
        "title": "File:Bourkes Parrot (Neopsephotus bourkii)9.jpg",
        "publisher": "Ljosa / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Bourkes_Parrot_(Neopsephotus_bourkii)9.jpg",
        "note": "Domaine public"
      },
      {
        "id": "media-neopsephotus-bourkii-audio",
        "title": "XC681342",
        "publisher": "Marc Anderson / Xeno-canto",
        "url": "https://xeno-canto.org/681342",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-neopsephotus-bourkii",
        "adw-neopsephotus-bourkii"
      ]
    },
    "imageCredit": "Ljosa — Domaine public",
    "imageSourceId": "media-neopsephotus-bourkii-img",
    "image": "/images/birds/neopsephotus-bourkii.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Bourkes_Parrot_(Neopsephotus_bourkii)9.jpg",
    "audio": [
      "/audio/birds/neopsephotus-bourkii.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/681342"
    ]
  },
  {
    "id": "nymphicus-hollandicus",
    "scientificName": "Nymphicus hollandicus",
    "commonName": "Calopsitte",
    "order": "Psittaciformes",
    "family": "Cacatuides",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). Endémique nicheur d’Australie ; EOO ≈ 7 850 000 km² ; population décrite comme abondante ; tendance **stable**. Plus petit cacatoès (≈ 80–90 g) ; queue pointue longue (~15 cm) ; huppe ~5 cm ; plumage sauvage gris-brun avec taches auriculaires orange.",
          "sourceIds": [
            "birdlife-nymphicus-hollandicus",
            "adw-nymphicus-hollandicus"
          ]
        },
        {
          "text": "Oui : mâle à plumage plus contrasté, joues orange vif bordées de blanc ; femelle à joues orange terne sans bordure blanche ; dessous de queue plus barré chez la femelle.",
          "sourceIds": [
            "adw-nymphicus-hollandicus"
          ]
        },
        {
          "text": "BirdLife : savane sèche, forêts sèches, prairies, fourrés, milieux agricoles et jardins (suitable) ; statut migratoire **nomade**. ADW : intérieur australien près de l’eau douce ; bois ouverts et savanes ; cavités dans eucalyptus morts.",
          "sourceIds": [
            "birdlife-nymphicus-hollandicus",
            "adw-nymphicus-hollandicus"
          ]
        },
        {
          "text": "Presque exclusivement granivore au sol (graines de graminées, arbustes, arbres) ; aussi fruits, baies et parfois petits insectes.",
          "sourceIds": [
            "adw-nymphicus-hollandicus"
          ]
        },
        {
          "text": "Très social : couples précoces, groupes de quelques individus à plusieurs milliers ; nomade au nord, migrations saisonnières au sud ; fuite en vol face au danger ; huppe et plumage exprimant l’état émotionnel.",
          "sourceIds": [
            "adw-nymphicus-hollandicus"
          ]
        },
        {
          "text": "Enregistrement XC1163859 (Thierry THOMAS — CC BY-NC-SA 4.0) : https://xeno-canto.org/1163859 ADW : cris aigus pour le stress / alerte ; chants de parade chez le mâle ; imitation de mélodies possible, pas la voix humaine.",
          "sourceIds": [
            "media-nymphicus-hollandicus-audio",
            "adw-nymphicus-hollandicus"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Calopsitte ↔ *Nymphicus hollandicus* ; Psittaciformes ; **Cacatuides**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : rosalbin / *Cacatua* — calopsitte = plus petit cacatoès, huppe + joues orange",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; Australie ; tendance stable ; statut **nomade**",
        "sourceIds": [
          "birdlife-nymphicus-hollandicus",
          "adw-nymphicus-hollandicus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme : joues orange vif bordées de blanc (♂) vs terne sans bordure (♀)",
        "sourceIds": [
          "birdlife-nymphicus-hollandicus",
          "adw-nymphicus-hollandicus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Presque exclusivement granivore au sol ; très sociale",
        "sourceIds": [
          "birdlife-nymphicus-hollandicus",
          "adw-nymphicus-hollandicus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-nymphicus-hollandicus",
        "title": "Cockatiel Nymphicus hollandicus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/cockatiel-nymphicus-hollandicus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-nymphicus-hollandicus",
        "title": "Nymphicus hollandicus (cockatiel)",
        "publisher": "Animal Diversity Web / Brandon Newmyer",
        "url": "https://animaldiversity.org/accounts/Nymphicus_hollandicus/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-nymphicus-hollandicus-img",
        "title": "File:Cockatiel Parakeet (Nymphicus hollandicus)9.jpg",
        "publisher": "Zefry / Wikimedia Commons",
        "year": "2008",
        "url": "https://commons.wikimedia.org/wiki/File:Cockatiel_Parakeet_(Nymphicus_hollandicus)9.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-nymphicus-hollandicus-audio",
        "title": "XC1163859",
        "publisher": "Thierry THOMAS / Xeno-canto",
        "url": "https://xeno-canto.org/1163859",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-nymphicus-hollandicus",
        "adw-nymphicus-hollandicus"
      ]
    },
    "imageCredit": "Zefry — CC BY 2.0",
    "imageSourceId": "media-nymphicus-hollandicus-img",
    "image": "/images/birds/nymphicus-hollandicus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Cockatiel_Parakeet_(Nymphicus_hollandicus)9.jpg",
    "audio": [
      "/audio/birds/nymphicus-hollandicus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1163859"
    ]
  },
  {
    "id": "oena-capensis",
    "scientificName": "Oena capensis",
    "commonName": "Tourterelle masque de fer",
    "order": "Columbiformes",
    "family": "Columbidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évaluée **Least Concern** (2024). **Migrateur complet**. EOO ≈ 40 800 000 km² ; population non quantifiée, commune à abondante ; tendance suspectée **en augmentation**.",
          "sourceIds": [
            "birdlife-oena-capensis"
          ]
        },
        {
          "text": "*Non documenté en détail sur la fiche BirdLife consultée — `na`.*",
          "sourceIds": []
        },
        {
          "text": "Savane sèche, prairies tempérées et sèches, fourrés secs, terres cultivées et jardins (suitable).",
          "sourceIds": [
            "birdlife-oena-capensis"
          ]
        },
        {
          "text": "*Non documenté dans les sources catalogue consultées — `na`.*",
          "sourceIds": []
        },
        {
          "text": "Migrateur complet ; extension d’aire signalée (ex. Israël / Arabie depuis le milieu des années 1970, BirdLife citant del Hoyo et al. 1997).",
          "sourceIds": [
            "birdlife-oena-capensis"
          ]
        },
        {
          "text": "Enregistrement XC951388 (Stanislas Wroza — CC BY-NC-SA 4.0) : https://xeno-canto.org/951388",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Tourterelle masque de fer ↔ *Oena capensis* ; Columbiformes ; Columbidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Oena* seul dans le programme — distinct des *Geopelia* / *Streptopelia*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "**Migrateur complet** (contrairement à beaucoup de colombes du lot)",
        "sourceIds": [
          "birdlife-oena-capensis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance suspectée en augmentation",
        "sourceIds": [
          "birdlife-oena-capensis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Savane sèche, prairies, cultures et jardins",
        "sourceIds": [
          "birdlife-oena-capensis"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-oena-capensis",
        "title": "Namaqua Dove Oena capensis — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/namaqua-dove-oena-capensis",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-oena-capensis-img",
        "title": "File:Oena capensis -Etosha…",
        "publisher": "Neil Strickland / Wikimedia Commons",
        "year": "2006",
        "url": "https://commons.wikimedia.org/wiki/File:Oena_capensis_-Etosha_National_Park,_Namibia-8.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-oena-capensis-audio",
        "title": "XC951388",
        "publisher": "Stanislas Wroza / Xeno-canto",
        "url": "https://xeno-canto.org/951388",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Neil Strickland — CC BY 2.0",
    "imageSourceId": "media-oena-capensis-img",
    "image": "/images/birds/oena-capensis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Oena_capensis_-Etosha_National_Park,_Namibia-8.jpg",
    "audio": [
      "/audio/birds/oena-capensis.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/951388"
    ]
  },
  {
    "id": "passer-luteus",
    "scientificName": "Passer luteus",
    "commonName": "Moineau doré",
    "order": "Passériformes",
    "family": "Passéridés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 6 720 000 km² ; population non quantifiée, commune à abondante (Clement 1999 *via* BirdLife) ; tendance **stable**.",
          "sourceIds": [
            "birdlife-passer-luteus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Statut **nomade**. Savane sèche, fourrés et prairies secs, cultures, jardins, zones urbaines (habitats résidents adaptés).",
          "sourceIds": [
            "birdlife-passer-luteus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Nomade.",
          "sourceIds": [
            "birdlife-passer-luteus"
          ]
        },
        {
          "text": "Enregistrement XC985452 (Oscar Campbell — CC BY-NC-ND 4.0) : https://xeno-canto.org/985452",
          "sourceIds": [
            "media-passer-luteus-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Moineau doré ↔ *Passer luteus* ; Passériformes ; Passéridés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : tisserin gendarme (*Ploceus*) — autre famille (Plocéidés / Ploceidae)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; commune à abondante",
        "sourceIds": [
          "birdlife-passer-luteus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Statut **nomade** ; savane sèche, cultures, jardins, urbain",
        "sourceIds": [
          "birdlife-passer-luteus"
        ]
      },
      {
        "level": "sourcé",
        "text": "EOO très vaste (≈ 6,7 M km²)",
        "sourceIds": [
          "birdlife-passer-luteus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-passer-luteus",
        "title": "Sudan Golden Sparrow Passer luteus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/sudan-golden-sparrow-passer-luteus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-passer-luteus-img",
        "title": "File:Passer luteus - Barry Stewart - 661030168.jpeg",
        "publisher": "Barry Stewart / Wikimedia Commons",
        "year": "2026",
        "url": "https://commons.wikimedia.org/wiki/File:Passer_luteus_-_Barry_Stewart_-_661030168.jpeg",
        "note": "CC BY 4.0"
      },
      {
        "id": "media-passer-luteus-audio",
        "title": "XC985452",
        "publisher": "Oscar Campbell / Xeno-canto",
        "url": "https://xeno-canto.org/985452",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "imageCredit": "Barry Stewart — CC BY 4.0",
    "imageSourceId": "media-passer-luteus-img",
    "image": "/images/birds/passer-luteus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Passer_luteus_-_Barry_Stewart_-_661030168.jpeg",
    "audio": [
      "/audio/birds/passer-luteus.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/985452"
    ]
  },
  {
    "id": "platycercus-adscitus",
    "scientificName": "Platycercus adscitus",
    "commonName": "Perruche palliceps",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). Endémique nicheur d’Australie ; EOO ≈ 2 190 000 km² ; abondant sur une grande partie de l’aire ; tendance **en augmentation**. Non migrant. Deux sous-espèces reconnues.",
          "sourceIds": [
            "birdlife-platycercus-adscitus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Forêts dégradées, jardins, pâturages, cultures ; forêts marécageuses, humides de basse altitude et sèches ; savane sèche ; fourrés humides et secs.",
          "sourceIds": [
            "birdlife-platycercus-adscitus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur ; population soupçonnée en hausse avec l’ouverture / dégradation d’habitats.",
          "sourceIds": [
            "birdlife-platycercus-adscitus"
          ]
        },
        {
          "text": "Enregistrement XC593967 (James Lambert — CC BY-NC-SA 4.0) : https://xeno-canto.org/593967",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche palliceps ↔ *Platycercus adscitus* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *P. icterotis* (Stanley) — palliceps = tendance en **augmentation**, aire large",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; endémique Australie ; abondante",
        "sourceIds": [
          "birdlife-platycercus-adscitus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; forêts, savane, jardins, cultures",
        "sourceIds": [
          "birdlife-platycercus-adscitus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Hausse soupçonnée avec l’ouverture / dégradation d’habitats",
        "sourceIds": [
          "birdlife-platycercus-adscitus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-platycercus-adscitus",
        "title": "Pale-headed Rosella Platycercus adscitus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/pale-headed-rosella-platycercus-adscitus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-platycercus-adscitus-img",
        "title": "File:Pale-headed Rosella - Herbaton.jpg",
        "publisher": "JJ Harrison / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Pale-headed_Rosella_-_Herbaton.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-platycercus-adscitus-audio",
        "title": "XC593967",
        "publisher": "James Lambert / Xeno-canto",
        "url": "https://xeno-canto.org/593967",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-platycercus-adscitus"
      ]
    },
    "imageCredit": "JJ Harrison — CC BY-SA 4.0",
    "imageSourceId": "media-platycercus-adscitus-img",
    "image": "/images/birds/platycercus-adscitus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Pale-headed_Rosella_-_Herbaton.jpg",
    "audio": [
      "/audio/birds/platycercus-adscitus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/593967"
    ]
  },
  {
    "id": "platycercus-elegans",
    "scientificName": "Platycercus elegans",
    "commonName": "Perruche de Pennant",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 2 600 000 km² ; tendance **en diminution** (destruction d’habitat) sans atteindre les seuils de vulnérabilité.",
          "sourceIds": [
            "birdlife-platycercus-elegans"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Zones urbaines, jardins ruraux, plantations ; forêts humides montagnardes et de basse altitude, forêt sèche, fourrés humides (résident).",
          "sourceIds": [
            "birdlife-platycercus-elegans"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Population soupçonnée en déclin avec la destruction continue d’habitat.",
          "sourceIds": [
            "birdlife-platycercus-elegans"
          ]
        },
        {
          "text": "Enregistrement XC1173944 (Romuald Mikusek — CC BY-NC-SA 4.0) : https://xeno-canto.org/1173944",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche de Pennant ↔ *Platycercus elegans* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : omnicolore (*P. eximius*) — Pennant = tendance en **diminution**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; déclin soupçonné (destruction d’habitat)",
        "sourceIds": [
          "birdlife-platycercus-elegans"
        ]
      },
      {
        "level": "sourcé",
        "text": "Forêts, fourrés, aussi zones urbaines / jardins / plantations",
        "sourceIds": [
          "birdlife-platycercus-elegans"
        ]
      },
      {
        "level": "sourcé",
        "text": "Habitat résident (non détaillé comme migrateur)",
        "sourceIds": [
          "birdlife-platycercus-elegans"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-platycercus-elegans",
        "title": "Crimson Rosella Platycercus elegans — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/crimson-rosella-platycercus-elegans",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-platycercus-elegans-img",
        "title": "File:Platycercus elegans -Blue Mountains -side-8a.jpg",
        "publisher": "John Poulakis / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Platycercus_elegans_-Blue_Mountains_-side-8a.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-platycercus-elegans-audio",
        "title": "XC1173944",
        "publisher": "Romuald Mikusek / Xeno-canto",
        "url": "https://xeno-canto.org/1173944",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "John Poulakis — CC BY 2.0",
    "imageSourceId": "media-platycercus-elegans-img",
    "image": "/images/birds/platycercus-elegans.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Platycercus_elegans_-Blue_Mountains_-side-8a.jpg",
    "audio": [
      "/audio/birds/platycercus-elegans.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1173944"
    ]
  },
  {
    "id": "platycercus-eximius-eximius",
    "scientificName": "Platycercus eximius eximius",
    "commonName": "Perruche omnicolore",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024) au rang d’espèce *P. eximius*. Endémique nicheur d’Australie (introduite en Nouvelle-Zélande) ; EOO ≈ 1 580 000 km² ; tendance **en augmentation** ; extrêmement commune sur une grande partie de l’aire. Forme programme : sous-espèce nominale. Trois sous-espèces reconnues par BirdLife. 0–1 540 m.",
          "sourceIds": [
            "birdlife-platycercus-eximius"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Forêt sèche, savanes humides et sèches, fourrés, cultures, pâturages, plantations, jardins ruraux.",
          "sourceIds": [
            "birdlife-platycercus-eximius"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur ; très commun ; population soupçonnée en hausse avec la dégradation/ouverture d’habitats.",
          "sourceIds": [
            "birdlife-platycercus-eximius"
          ]
        },
        {
          "text": "Enregistrement XC1173636 (Romuald Mikusek — CC BY-NC-SA 4.0) : https://xeno-canto.org/1173636",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche omnicolore ↔ *Platycercus eximius eximius* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *P. elegans* (Pennant) — même genre *Platycercus*, sous-espèce nominale ici",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; Australie (+ introduite NZ) ; tendance en **augmentation**",
        "sourceIds": [
          "birdlife-platycercus-eximius"
        ]
      },
      {
        "level": "sourcé",
        "text": "Très commune ; forêts, savanes, jardins, cultures",
        "sourceIds": [
          "birdlife-platycercus-eximius"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; hausse liée à l’ouverture d’habitats",
        "sourceIds": [
          "birdlife-platycercus-eximius"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-platycercus-eximius",
        "title": "Eastern Rosella Platycercus eximius — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/eastern-rosella-platycercus-eximius",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-platycercus-eximius-eximius-img",
        "title": "File:Female Eastern Rosella (Platycercus eximius).jpg",
        "publisher": "Murdock Grewar / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Female_Eastern_Rosella_(Platycercus_eximius).jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-platycercus-eximius-eximius-audio",
        "title": "XC1173636",
        "publisher": "Romuald Mikusek / Xeno-canto",
        "url": "https://xeno-canto.org/1173636",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie",
        "Nouvelle-Zélande"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-platycercus-eximius"
      ]
    },
    "imageCredit": "Murdock Grewar — CC BY-SA 4.0",
    "imageSourceId": "media-platycercus-eximius-eximius-img",
    "image": "/images/birds/platycercus-eximius-eximius.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Female_Eastern_Rosella_(Platycercus_eximius).jpg",
    "audio": [
      "/audio/birds/platycercus-eximius-eximius.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1173636"
    ]
  },
  {
    "id": "platycercus-icterotis",
    "scientificName": "Platycercus icterotis",
    "commonName": "Perruche de Stanley",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). Endémique nicheur d’Australie ; EOO ≈ 308 000 km² ; relativement commun ; tendance **en diminution** (pertes d’habitat, extinctions locales). Non migrant.",
          "sourceIds": [
            "birdlife-platycercus-icterotis"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Forêts dégradées, jardins, plantations, pâturages, cultures, forêt sèche, savane sèche, fourrés secs.",
          "sourceIds": [
            "birdlife-platycercus-icterotis"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur ; déclin soupçonné lié à la perte d’habitat.",
          "sourceIds": [
            "birdlife-platycercus-icterotis"
          ]
        },
        {
          "text": "Enregistrement XC382800 (Marc Anderson — CC BY-NC-ND 4.0) : https://xeno-canto.org/382800",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche de Stanley ↔ *Platycercus icterotis* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : autres *Platycercus* (omnicolore, Pennant, palliceps) — Stanley = EOO plus restreinte",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; Australie ; tendance en **diminution** (habitat)",
        "sourceIds": [
          "birdlife-platycercus-icterotis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; forêts dégradées, jardins, pâturages, cultures",
        "sourceIds": [
          "birdlife-platycercus-icterotis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Extinctions locales signalées (BirdLife)",
        "sourceIds": [
          "birdlife-platycercus-icterotis"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-platycercus-icterotis",
        "title": "Western Rosella Platycercus icterotis — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/western-rosella-platycercus-icterotis",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-platycercus-icterotis-img",
        "title": "File:Western Rosella (Platycercus icterotis) -eating bread.jpg",
        "publisher": "Robert Young / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Western_Rosella_(Platycercus_icterotis)_-eating_bread.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-platycercus-icterotis-audio",
        "title": "XC382800",
        "publisher": "Marc Anderson / Xeno-canto",
        "url": "https://xeno-canto.org/382800",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-platycercus-icterotis"
      ]
    },
    "imageCredit": "Robert Young — CC BY 2.0",
    "imageSourceId": "media-platycercus-icterotis-img",
    "image": "/images/birds/platycercus-icterotis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Western_Rosella_(Platycercus_icterotis)_-eating_bread.jpg",
    "audio": [
      "/audio/birds/platycercus-icterotis.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/382800"
    ]
  },
  {
    "id": "ploceus-cucullatus",
    "scientificName": "Ploceus cucullatus",
    "commonName": "Tisserin gendarme",
    "order": "Passériformes",
    "family": "Ploceidae",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 23 900 000 km² ; population non quantifiée, généralement abondante (Fry & Keith 2004 *via* BirdLife) ; tendance **stable**.",
          "sourceIds": [
            "birdlife-ploceus-cucullatus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife ; ADW stub).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Jardins ruraux (majeur) ; plantations, cultures, forêts sèches et humides de basse altitude, savane sèche, cours d’eau.",
          "sourceIds": [
            "birdlife-ploceus-cucullatus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife ; ADW stub).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur.",
          "sourceIds": [
            "birdlife-ploceus-cucullatus"
          ]
        },
        {
          "text": "Enregistrement XC1080073 (JJSUN — CC BY-NC-SA 4.0) : https://xeno-canto.org/1080073",
          "sourceIds": [
            "media-ploceus-cucullatus-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Tisserin gendarme ↔ *Ploceus cucullatus* ; Passériformes ; Ploceidae",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : moineau doré (*Passer*) — tisserin = famille des plocéidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; généralement abondant",
        "sourceIds": [
          "birdlife-ploceus-cucullatus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; jardins ruraux (majeur), cultures, savane",
        "sourceIds": [
          "birdlife-ploceus-cucullatus"
        ]
      },
      {
        "level": "sourcé",
        "text": "EOO très vaste (≈ 23,9 M km²)",
        "sourceIds": [
          "birdlife-ploceus-cucullatus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-ploceus-cucullatus",
        "title": "Village Weaver Ploceus cucullatus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/village-weaver-ploceus-cucullatus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-ploceus-cucullatus-img",
        "title": "File:Village weaver (Ploceus cucullatus cucullatus) female and male.jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2021",
        "url": "https://commons.wikimedia.org/wiki/File:Village_weaver_(Ploceus_cucullatus_cucullatus)_female_and_male.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-ploceus-cucullatus-audio",
        "title": "XC1080073",
        "publisher": "JJSUN / Xeno-canto",
        "url": "https://xeno-canto.org/1080073",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-ploceus-cucullatus-img",
    "image": "/images/birds/ploceus-cucullatus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Village_weaver_(Ploceus_cucullatus_cucullatus)_female_and_male.jpg",
    "audio": [
      "/audio/birds/ploceus-cucullatus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1080073"
    ]
  },
  {
    "id": "poephila-acuticauda",
    "scientificName": "Poephila acuticauda",
    "commonName": "Diamant à longue queue",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 1 420 000 km² ; population non quantifiée ; tendance **stable**. Endémique nicheur d’Australie. Commerce signalé à forte prévalence.",
          "sourceIds": [
            "birdlife-poephila-acuticauda"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Forêts et savanes sèches subtropicales/tropicales.",
          "sourceIds": [
            "birdlife-poephila-acuticauda"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-poephila-acuticauda"
          ]
        },
        {
          "text": "Enregistrement XC668759 (James Lambert — CC BY-NC-ND 4.0) : https://xeno-canto.org/668759",
          "sourceIds": [
            "media-poephila-acuticauda-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Diamant à longue queue ↔ *Poephila acuticauda* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Poephila* — distinct des *Taeniopygia* / *Neochmia* australiens",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; endémique Australie ; tendance stable",
        "sourceIds": [
          "birdlife-poephila-acuticauda"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; forêts et savanes sèches",
        "sourceIds": [
          "birdlife-poephila-acuticauda"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce signalé à forte prévalence",
        "sourceIds": [
          "birdlife-poephila-acuticauda"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-poephila-acuticauda",
        "title": "Long-tailed Finch Poephila acuticauda — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/long-tailed-finch-poephila-acuticauda",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-poephila-acuticauda-img",
        "title": "File:Poephila acuticauda -Wulagi, Darwin, Australia-8a.jpg",
        "publisher": "Lip Kee Yap / Wikimedia Commons",
        "year": "2010",
        "url": "https://commons.wikimedia.org/wiki/File:Poephila_acuticauda_-Wulagi,_Darwin,_Australia-8a.jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-poephila-acuticauda-audio",
        "title": "XC668759",
        "publisher": "James Lambert / Xeno-canto",
        "url": "https://xeno-canto.org/668759",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-poephila-acuticauda"
      ]
    },
    "imageCredit": "Lip Kee Yap — CC BY-SA 2.0",
    "imageSourceId": "media-poephila-acuticauda-img",
    "image": "/images/birds/poephila-acuticauda.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Poephila_acuticauda_-Wulagi,_Darwin,_Australia-8a.jpg",
    "audio": [
      "/audio/birds/poephila-acuticauda.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/668759"
    ]
  },
  {
    "id": "poicephalus-senegalus",
    "scientificName": "Poicephalus senegalus",
    "commonName": "Youyou du Sénégal",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2019). EOO ≈ 3 590 000 km² ; abondant ; tendance **en diminution** soupçonnée. ≈ 20–25 cm ; tête grise, corps vert, ventre jaune à orange. Non endémique nicheur d’un seul pays.",
          "sourceIds": [
            "birdlife-poicephalus-senegalus",
            "adw-poicephalus-senegalus"
          ]
        },
        {
          "text": "Difficile à distinguer à coup sûr ; indices possibles (taille de tête/bec, étendue du « V » pectoral) — sexage ADN/chirurgical souvent requis.",
          "sourceIds": [
            "adw-poicephalus-senegalus"
          ]
        },
        {
          "text": "BirdLife : cultures, plantations, jardins, forêt sèche et humide de basse altitude, savane sèche. ADW : lisières de savane, nidification en arbres ; Afrique de l’Ouest / centre-ouest. Non migrant.",
          "sourceIds": [
            "birdlife-poicephalus-senegalus",
            "adw-poicephalus-senegalus"
          ]
        },
        {
          "text": "Fruits, graines et grains ; aussi caroubes (*locust beans*) et jeunes bourgeons ; peut fréquenter cultures (maïs, mil, arachides).",
          "sourceIds": [
            "adw-poicephalus-senegalus"
          ]
        },
        {
          "text": "Seul, en couple ou petits groupes (10–20 hors saison) ; cris courts / sifflements ; très commercialisé (commerce international massif signalé par BirdLife).",
          "sourceIds": [
            "birdlife-poicephalus-senegalus",
            "adw-poicephalus-senegalus"
          ]
        },
        {
          "text": "Enregistrement XC1093291 (Azens — CC BY-NC-SA 4.0) : https://xeno-canto.org/1093291",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Youyou du Sénégal ↔ *Poicephalus senegalus* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Poicephalus* — Afrique ; distinct des *Platycercus* / *Polytelis* australiens",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tête grise, corps vert, ventre jaune à orange",
        "sourceIds": [
          "birdlife-poicephalus-senegalus",
          "adw-poicephalus-senegalus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Fruits, graines, grains ; peut fréquenter les cultures",
        "sourceIds": [
          "birdlife-poicephalus-senegalus",
          "adw-poicephalus-senegalus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme difficile ; très commercialisé (BirdLife)",
        "sourceIds": [
          "birdlife-poicephalus-senegalus",
          "adw-poicephalus-senegalus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-poicephalus-senegalus",
        "title": "Senegal Parrot Poicephalus senegalus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2019",
        "url": "https://datazone.birdlife.org/species/factsheet/senegal-parrot-poicephalus-senegalus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-poicephalus-senegalus",
        "title": "Poicephalus senegalus (Senegal parrot)",
        "publisher": "Animal Diversity Web / Kristel Koehler",
        "url": "https://animaldiversity.org/accounts/Poicephalus_senegalus/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-poicephalus-senegalus-img",
        "title": "File:Senegal Parrots -two on branch in Africa.jpg",
        "publisher": "ThomHasi / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Senegal_Parrots_-two_on_branch_in_Africa.jpg",
        "note": "CC BY 2.5"
      },
      {
        "id": "media-poicephalus-senegalus-audio",
        "title": "XC1093291",
        "publisher": "Azens / Xeno-canto",
        "url": "https://xeno-canto.org/1093291",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Afrique"
      ],
      "hemisphere": "AF",
      "sourceIds": [
        "birdlife-poicephalus-senegalus",
        "adw-poicephalus-senegalus"
      ]
    },
    "imageCredit": "ThomHasi / Thomas J. Haslam — CC BY 2.5",
    "imageSourceId": "media-poicephalus-senegalus-img",
    "image": "/images/birds/poicephalus-senegalus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Senegal_Parrots_-two_on_branch_in_Africa.jpg",
    "audio": [
      "/audio/birds/poicephalus-senegalus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1093291"
    ]
  },
  {
    "id": "polytelis-alexandrae",
    "scientificName": "Polytelis alexandrae",
    "commonName": "Perruche princesse de Galles ou à calotte bleue",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Near Threatened** (2022, critère D1). Endémique nicheur d’Australie ; EOO ≈ 1 995 000 km² ; 900–10 000 adultes matures estimés ; population variable selon conditions, parfois < 1 000 au minimum ; tendance **stable**.",
          "sourceIds": [
            "birdlife-polytelis-alexandrae"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Désert chaud, prairies sèches (majeur), fourrés secs (majeur) ; statut **nomade**. Zone aride (Grands Déserts de Sable, Gibson, Tanami, Victoria, etc.) ; souvent dans les dépressions entre dunes.",
          "sourceIds": [
            "birdlife-polytelis-alexandrae"
          ]
        },
        {
          "text": "Variété de graines, fleurs, fruits et feuillage d’arbustes et d’arbres ; associé notamment aux gommier marbre (*Eucalyptus gongylocarpa*) dans le Grand Désert de Victoria.",
          "sourceIds": [
            "birdlife-polytelis-alexandrae"
          ]
        },
        {
          "text": "Nomade / irruptif ; nidification en cavités (ex. marble gums) ; se reproduit en années humides dans le cœur d’aire puis peut se disperser.",
          "sourceIds": [
            "birdlife-polytelis-alexandrae"
          ]
        },
        {
          "text": "Enregistrement XC488068 (Mark Carter — CC BY-NC-SA 4.0) : https://xeno-canto.org/488068",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche princesse de Galles / calotte bleue ↔ *Polytelis alexandrae* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *P. anthopeplus* (mélanure) — princesse = **Near Threatened**, désert",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "NT (D1) ; 900–10 000 adultes ; population parfois < 1 000",
        "sourceIds": [
          "birdlife-polytelis-alexandrae"
        ]
      },
      {
        "level": "sourcé",
        "text": "Nomade / irruptive ; déserts arides australiens",
        "sourceIds": [
          "birdlife-polytelis-alexandrae"
        ]
      },
      {
        "level": "sourcé",
        "text": "Régime : graines, fleurs, fruits, feuillage ; nid en cavités",
        "sourceIds": [
          "birdlife-polytelis-alexandrae"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-polytelis-alexandrae",
        "title": "Princess Parrot Polytelis alexandrae — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2022",
        "url": "https://datazone.birdlife.org/species/factsheet/princess-parrot-polytelis-alexandrae",
        "note": "Consulté 2026-10-10 ; NT"
      },
      {
        "id": "media-polytelis-alexandrae-img",
        "title": "File:Polytelis alexandrae -Australia-8.jpg",
        "publisher": "PG Palmer / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Polytelis_alexandrae_-Australia-8.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-polytelis-alexandrae-audio",
        "title": "XC488068",
        "publisher": "Mark Carter / Xeno-canto",
        "url": "https://xeno-canto.org/488068",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-polytelis-alexandrae"
      ]
    },
    "imageCredit": "PG Palmer — CC BY 2.0",
    "imageSourceId": "media-polytelis-alexandrae-img",
    "image": "/images/birds/polytelis-alexandrae.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Polytelis_alexandrae_-Australia-8.jpg",
    "audio": [
      "/audio/birds/polytelis-alexandrae.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/488068"
    ]
  },
  {
    "id": "polytelis-anthopeplus",
    "scientificName": "Polytelis anthopeplus",
    "commonName": "Perruche mélanure",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). Endémique nicheur d’Australie ; EOO ≈ 1 520 000 km² ; ≈ 21 500 individus (estimation) ; tendance globale **en diminution**. Deux populations disjointes : *anthopeplus* (sud-ouest OA) ≈ 20 000 ; *monarchoides* (sud-est) ≈ 1 500, peut-être en déclin.",
          "sourceIds": [
            "birdlife-polytelis-anthopeplus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Forêts marécageuses et sèches, savane humide, fourrés secs ; cultures en hors-reproduction ; statut **nomade**.",
          "sourceIds": [
            "birdlife-polytelis-anthopeplus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Nomade ; compétition pour cavités (abeilles férales, rosalbin) citée parmi les menaces.",
          "sourceIds": [
            "birdlife-polytelis-anthopeplus"
          ]
        },
        {
          "text": "Enregistrement XC638864 (Drew Davison — CC BY-NC-SA 4.0) : https://xeno-canto.org/638864",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche mélanure ↔ *Polytelis anthopeplus* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *P. alexandrae* (princesse NT) — mélanure = LC, deux populations disjointes",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; ≈ 21 500 individus ; tendance en diminution",
        "sourceIds": [
          "birdlife-polytelis-anthopeplus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Nomade ; sud-ouest (≈ 20 000) + sud-est (≈ 1 500)",
        "sourceIds": [
          "birdlife-polytelis-anthopeplus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Menace citée : compétition pour cavités (abeilles férales, rosalbin)",
        "sourceIds": [
          "birdlife-polytelis-anthopeplus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-polytelis-anthopeplus",
        "title": "Regent Parrot Polytelis anthopeplus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/regent-parrot-polytelis-anthopeplus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-polytelis-anthopeplus-img",
        "title": "File:Polytelis anthopeplus -Wyperfeld…jpg",
        "publisher": "David Cook / Wikimedia Commons",
        "url": "https://commons.wikimedia.org/wiki/File:Polytelis_anthopeplus_-Wyperfeld_National_Park_-Australia-8.jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-polytelis-anthopeplus-audio",
        "title": "XC638864",
        "publisher": "Drew Davison / Xeno-canto",
        "url": "https://xeno-canto.org/638864",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-polytelis-anthopeplus"
      ]
    },
    "imageCredit": "David Cook Wildlife Photography — CC BY 2.0",
    "imageSourceId": "media-polytelis-anthopeplus-img",
    "image": "/images/birds/polytelis-anthopeplus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Polytelis_anthopeplus_-Wyperfeld_National_Park_-Australia-8.jpg",
    "audio": [
      "/audio/birds/polytelis-anthopeplus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/638864"
    ]
  },
  {
    "id": "psephotus-haematonotus-haematonotus",
    "scientificName": "Psephotus haematonotus haematonotus",
    "commonName": "Perruche à croupion rouge",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). Endémique nicheur d’Australie ; EOO ≈ 1 930 000 km² ; population non quantifiée, rapportée commune à abondante (del Hoyo *et al.* 1997 *via* BirdLife) ; tendance **en augmentation** (dégradation d’habitat créant de nouvelles zones favorables). Altitude 0–1 100 m.",
          "sourceIds": [
            "birdlife-psephotus-haematonotus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife ; ADW stub).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche, fourrés et prairies secs, forêt sèche, mangroves, jardins et zones urbaines (habitats résidents adaptés).",
          "sourceIds": [
            "birdlife-psephotus-haematonotus"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife ; ADW stub).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur ; endémique nicheur Australie.",
          "sourceIds": [
            "birdlife-psephotus-haematonotus"
          ]
        },
        {
          "text": "Enregistrement XC692681 (Marc Anderson — CC BY-NC-ND 4.0) : https://xeno-canto.org/692681",
          "sourceIds": [
            "media-psephotus-haematonotus-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche à croupion rouge ↔ *Psephotus haematonotus haematonotus* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Psephotus* — sous-espèce nominale du programme ; distinct des *Platycercus*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; Australie ; tendance en **augmentation**",
        "sourceIds": [
          "birdlife-psephotus-haematonotus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; savane, fourrés, jardins, zones urbaines",
        "sourceIds": [
          "birdlife-psephotus-haematonotus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Hausse liée à de nouvelles zones favorables (dégradation d’habitat)",
        "sourceIds": [
          "birdlife-psephotus-haematonotus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme ; sous-esp. *haematonotus*"
      },
      {
        "id": "birdlife-psephotus-haematonotus",
        "title": "Red-rumped Parrot Psephotus haematonotus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/red-rumped-parrot-psephotus-haematonotus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-psephotus-haematonotus-img",
        "title": "File:Red Rumped Parrot Males.jpg",
        "publisher": "Toby Hudson / Wikimedia Commons",
        "year": "2010",
        "url": "https://commons.wikimedia.org/wiki/File:Red_Rumped_Parrot_Males.jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-psephotus-haematonotus-audio",
        "title": "XC692681",
        "publisher": "Marc Anderson / Xeno-canto",
        "url": "https://xeno-canto.org/692681",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-psephotus-haematonotus"
      ]
    },
    "imageCredit": "Toby Hudson — CC BY-SA 3.0",
    "imageSourceId": "media-psephotus-haematonotus-img",
    "image": "/images/birds/psephotus-haematonotus-haematonotus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Red_Rumped_Parrot_Males.jpg",
    "audio": [
      "/audio/birds/psephotus-haematonotus-haematonotus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/692681"
    ]
  },
  {
    "id": "psittacula-cyanocephala",
    "scientificName": "Psittacula cyanocephala",
    "commonName": "Perruche tête de prune",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024) sous le nom BirdLife *Himalayapsitta cyanocephala* (ex-*Psittacula cyanocephala*). EOO ≈ 4 010 000 km² ; population non quantifiée, généralement commune en Inde et assez commune au Népal (del Hoyo *et al.* 1997 *via* BirdLife) ; tendance **en diminution** (perte de couvert forestier ~6 % sur trois générations, déclin populationnel suspecté 1–19 %). Altitude 0–2 410 m.",
          "sourceIds": [
            "birdlife-himalayapsitta-cyanocephala"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Forêts humides de basse altitude et montagnardes ; terres cultivées (habitats résidents adaptés).",
          "sourceIds": [
            "birdlife-himalayapsitta-cyanocephala"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur.",
          "sourceIds": [
            "birdlife-himalayapsitta-cyanocephala"
          ]
        },
        {
          "text": "Enregistrement XC809699 (Marc Anderson — CC BY-NC-ND 4.0) : https://xeno-canto.org/809699",
          "sourceIds": [
            "media-psittacula-cyanocephala-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche tête de prune ↔ *Psittacula cyanocephala* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : collier d'Asie / grande alexandre — tête de prune = tête colorée distinctive",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; BirdLife : *Himalayapsitta cyanocephala* ; tendance en diminution",
        "sourceIds": [
          "birdlife-himalayapsitta-cyanocephala"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; forêts humides (basse altitude et montagnes)",
        "sourceIds": [
          "birdlife-himalayapsitta-cyanocephala"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commune en Inde ; déclin soupçonné (perte de couvert forestier)",
        "sourceIds": [
          "birdlife-himalayapsitta-cyanocephala"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-himalayapsitta-cyanocephala",
        "title": "Plum-headed Parakeet Himalayapsitta cyanocephala — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/plum-headed-parakeet-himalayapsitta-cyanocephala",
        "note": "Consulté 2026-10-10 ; ex-*Psittacula cyanocephala*"
      },
      {
        "id": "media-psittacula-cyanocephala-img",
        "title": "File:Plum-headed Parakeet (Psittacula cyanocephala) in Hyderabad W IMG 4536.jpg",
        "publisher": "J.M.Garg / Wikimedia Commons",
        "year": "2009",
        "url": "https://commons.wikimedia.org/wiki/File:Plum-headed_Parakeet_(Psittacula_cyanocephala)_in_Hyderabad_W_IMG_4536.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-psittacula-cyanocephala-audio",
        "title": "XC809699",
        "publisher": "Marc Anderson / Xeno-canto",
        "url": "https://xeno-canto.org/809699",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Inde"
      ],
      "hemisphere": "AS",
      "sourceIds": [
        "birdlife-himalayapsitta-cyanocephala"
      ]
    },
    "imageCredit": "J.M.Garg — CC BY-SA 4.0",
    "imageSourceId": "media-psittacula-cyanocephala-img",
    "image": "/images/birds/psittacula-cyanocephala.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Plum-headed_Parakeet_(Psittacula_cyanocephala)_in_Hyderabad_W_IMG_4536.jpg",
    "audio": [
      "/audio/birds/psittacula-cyanocephala.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/809699"
    ]
  },
  {
    "id": "psittacula-eupatria",
    "scientificName": "Psittacula eupatria",
    "commonName": "Perruche grande alexandre",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2025) sous le nom BirdLife *Palaeornis eupatria* (ex-*Psittacula eupatria*). EOO ≈ 9 010 000 km² ; taille de population inconnue ; localement commune et en forte hausse en Inde (SoIB 2023 *via* BirdLife) ; tendance globale **en augmentation** ; rare ou localisé en Indochine. Altitude 0–900 m.",
          "sourceIds": [
            "birdlife-palaeornis-eupatria"
          ]
        },
        {
          "text": "*Non détaillé dans les sources consultées (BirdLife).*",
          "sourceIds": []
        },
        {
          "text": "Statut **nomade**. Forêts sèches et humides de basse altitude (majeurs) ; mangroves, fourrés, plantations, jardins, forêt dégradée, désert chaud (adaptés).",
          "sourceIds": [
            "birdlife-palaeornis-eupatria"
          ]
        },
        {
          "text": "Fruits, graines, pétales, nectar et bourgeons foliaires (Juniper & Parr 1998, Rasmussen & Anderton 2012, Collar & Boesman 2020 *via* BirdLife) ; peut être ravageur des cultures (jusqu’à ~70 % du régime en zones agricoles du Pakistan).",
          "sourceIds": [
            "birdlife-palaeornis-eupatria"
          ]
        },
        {
          "text": "Nomade.",
          "sourceIds": [
            "birdlife-palaeornis-eupatria"
          ]
        },
        {
          "text": "Enregistrement XC1182205 (David Darrell-Lambert — CC BY-NC-SA 4.0) : https://xeno-canto.org/1182205",
          "sourceIds": [
            "media-psittacula-eupatria-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche grande alexandre ↔ *Psittacula eupatria* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : collier d'Asie (*krameri*) — grande alexandre = plus grande, statut **nomade**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; BirdLife : *Palaeornis eupatria* ; tendance en augmentation",
        "sourceIds": [
          "birdlife-palaeornis-eupatria"
        ]
      },
      {
        "level": "sourcé",
        "text": "Fruits, graines, nectar, bourgeons ; peut ravageur des cultures",
        "sourceIds": [
          "birdlife-palaeornis-eupatria"
        ]
      },
      {
        "level": "sourcé",
        "text": "Forêts sèches/humides de basse altitude (majeurs)",
        "sourceIds": [
          "birdlife-palaeornis-eupatria"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-palaeornis-eupatria",
        "title": "Alexandrine Parakeet Palaeornis eupatria — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2025",
        "url": "https://datazone.birdlife.org/species/factsheet/alexandrine-parakeet-palaeornis-eupatria",
        "note": "Consulté 2026-10-10 ; ex-*Psittacula eupatria*"
      },
      {
        "id": "media-psittacula-eupatria-img",
        "title": "File:A Male with another - Alexandrine Parakeets (51005695606).jpg",
        "publisher": "Hari K Patibanda / Wikimedia Commons",
        "year": "2021",
        "url": "https://commons.wikimedia.org/wiki/File:A_Male_with_another_-_Alexandrine_Parakeets_(51005695606).jpg",
        "note": "CC BY 2.0"
      },
      {
        "id": "media-psittacula-eupatria-audio",
        "title": "XC1182205",
        "publisher": "David Darrell-Lambert / Xeno-canto",
        "url": "https://xeno-canto.org/1182205",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Inde"
      ],
      "hemisphere": "AS",
      "sourceIds": [
        "birdlife-palaeornis-eupatria"
      ]
    },
    "imageCredit": "Hari K Patibanda — CC BY 2.0",
    "imageSourceId": "media-psittacula-eupatria-img",
    "image": "/images/birds/psittacula-eupatria.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:A_Male_with_another_-_Alexandrine_Parakeets_(51005695606).jpg",
    "audio": [
      "/audio/birds/psittacula-eupatria.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1182205"
    ]
  },
  {
    "id": "psittacula-krameri-manillensis",
    "scientificName": "Psittacula krameri manillensis",
    "commonName": "Perruche à collier d'Asie",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024) sous le nom BirdLife *Alexandrinus krameri* (ex-*Psittacula krameri*). EOO ≈ 28 400 000 km² ; population non quantifiée, commune à abondante dans l’aire naturelle (del Hoyo *et al.* 1997 *via* BirdLife) ; tendance **en augmentation**. Altitude 0–2 000 m. Corps vert, bec rougeâtre, longue queue ; mâle adulte : dague / collier rose-noir.",
          "sourceIds": [
            "birdlife-alexandrinus-krameri",
            "adw-psittacula-krameri"
          ]
        },
        {
          "text": "Mâle : collier / dague sombre à maturité (~3 ans) ; femelle et immatures sans collier rose ou avec ombre grise.",
          "sourceIds": [
            "adw-psittacula-krameri"
          ]
        },
        {
          "text": "Non migrateur. Savane sèche, fourrés et prairies secs, forêts humides de basse altitude, mangroves, cultures, jardins, zones humides (marais, tourbières).",
          "sourceIds": [
            "birdlife-alexandrinus-krameri",
            "adw-psittacula-krameri"
          ]
        },
        {
          "text": "Surtout granivore (~80 % graines/grains) ; aussi fruits, nectar et insectes.",
          "sourceIds": [
            "adw-psittacula-krameri"
          ]
        },
        {
          "text": "Sédentaire et social ; diurne ; nicheur secondaire en cavités (souvent trous de pics) ; couples monogames.",
          "sourceIds": [
            "birdlife-alexandrinus-krameri",
            "adw-psittacula-krameri"
          ]
        },
        {
          "text": "Enregistrement XC1180800 (Sam Hambly — CC BY-NC-SA 4.0) : https://xeno-canto.org/1180800 ADW : cris rapides « kew-kew-kew », cris de menace « krrrr », agrégatifs doux.",
          "sourceIds": [
            "media-psittacula-krameri-audio",
            "adw-psittacula-krameri"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perruche à collier d'Asie ↔ *Psittacula krameri manillensis* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *P. eupatria* (grande alexandre) / *P. cyanocephala* (tête de prune) — collier = sous-espèce *manillensis*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; BirdLife : *Alexandrinus krameri* ; tendance en augmentation",
        "sourceIds": [
          "birdlife-alexandrinus-krameri",
          "adw-psittacula-krameri"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme : mâle collier/dague à maturité ; ♀/immatures sans collier rose",
        "sourceIds": [
          "birdlife-alexandrinus-krameri",
          "adw-psittacula-krameri"
        ]
      },
      {
        "level": "sourcé",
        "text": "Surtout granivore ; social ; nicheur en cavités",
        "sourceIds": [
          "birdlife-alexandrinus-krameri",
          "adw-psittacula-krameri"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme ; sous-esp. *manillensis*"
      },
      {
        "id": "birdlife-alexandrinus-krameri",
        "title": "Rose-ringed Parakeet Alexandrinus krameri — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/rose-ringed-parakeet-alexandrinus-krameri",
        "note": "Consulté 2026-10-10 ; ex-*Psittacula krameri*"
      },
      {
        "id": "adw-psittacula-krameri",
        "title": "Psittacula krameri (rose-ringed parakeet)",
        "publisher": "Animal Diversity Web / Ashley Flory",
        "url": "https://animaldiversity.org/accounts/Psittacula_krameri/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-psittacula-krameri-img",
        "title": "File:Indian Ringneck parrot. (Psittacula krameri), (9779826796).jpg",
        "publisher": "Bernard Spragg. NZ / Wikimedia Commons",
        "year": "2008",
        "url": "https://commons.wikimedia.org/wiki/File:Indian_Ringneck_parrot._(Psittacula_krameri),_(9779826796).jpg",
        "note": "CC0"
      },
      {
        "id": "media-psittacula-krameri-audio",
        "title": "XC1180800",
        "publisher": "Sam Hambly / Xeno-canto",
        "url": "https://xeno-canto.org/1180800",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Bernard Spragg. NZ — CC0",
    "imageSourceId": "media-psittacula-krameri-img",
    "image": "/images/birds/psittacula-krameri-manillensis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Indian_Ringneck_parrot._(Psittacula_krameri),_(9779826796).jpg",
    "audio": [
      "/audio/birds/psittacula-krameri-manillensis.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1180800"
    ]
  },
  {
    "id": "psittacus-erithacus",
    "scientificName": "Psittacus erithacus",
    "commonName": "Perroquet gris du Gabon ou jaco",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Endangered** (2021 ; critères A2bcd+3bcd+4bcd). EOO ≈ 4 460 000 km² ; population globale estimée grossièrement 0,56–12,7 millions d’individus ; tendance **en diminution** (capture pour le commerce, perte d’habitat). Plumage gris à queue rouge distinctive ; ~33 cm, jusqu’à ~407 g. Altitude 0–2 200 m.",
          "sourceIds": [
            "birdlife-psittacus-erithacus",
            "adw-psittacus-erithacus"
          ]
        },
        {
          "text": "ADW indique un dimorphisme sexuel possible (sexes colorés/patternés différemment) ; détails du plumage peu marqués chez le jaco.",
          "sourceIds": [
            "adw-psittacus-erithacus"
          ]
        },
        {
          "text": "Non migrateur. Forêts humides de basse altitude et marécageuses (majeurs) ; aussi forêts sèches, mangroves, savane sèche, plantations, jardins, zones urbaines.",
          "sourceIds": [
            "birdlife-psittacus-erithacus",
            "adw-psittacus-erithacus"
          ]
        },
        {
          "text": "Herbivore : surtout noix et fruits (dont palmier à huile *Elaeis*), feuilles, écorce, fleurs ; aussi insectes. Sur le terrain : fruits et graines en petits groupes (≤ ~30).",
          "sourceIds": [
            "birdlife-psittacus-erithacus",
            "adw-psittacus-erithacus"
          ]
        },
        {
          "text": "Très social ; dortoirs bruyants (matins/soirs) ; couples monogames à vie ; nid en cavité d’arbre (10–30 m) ; diurne. Cognition complexe documentée (mimétisme, apprentissage social).",
          "sourceIds": [
            "birdlife-psittacus-erithacus",
            "adw-psittacus-erithacus"
          ]
        },
        {
          "text": "Enregistrement XC1137653 (Antoine Ede — CC BY-NC-SA 4.0) : https://xeno-canto.org/1137653 ADW : cris d’alarme, de contact, de mendicité alimentaire, agonistiques ; cohésion du groupe via cris de contact.",
          "sourceIds": [
            "media-psittacus-erithacus-audio",
            "adw-psittacus-erithacus"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Perroquet gris / jaco ↔ *Psittacus erithacus* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre seul — gris + queue **rouge** ; ne pas confondre avec les *Psittacula*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "**Endangered** ; déclin (commerce + perte d’habitat)",
        "sourceIds": [
          "birdlife-psittacus-erithacus",
          "adw-psittacus-erithacus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Forêts humides d’Afrique ; fruits/noix ; très social, dortoirs",
        "sourceIds": [
          "birdlife-psittacus-erithacus",
          "adw-psittacus-erithacus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Cognition / mimétisme documentés ; couples monogames",
        "sourceIds": [
          "birdlife-psittacus-erithacus",
          "adw-psittacus-erithacus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-psittacus-erithacus",
        "title": "Grey Parrot Psittacus erithacus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2021",
        "url": "https://datazone.birdlife.org/species/factsheet/grey-parrot-psittacus-erithacus",
        "note": "Consulté 2026-10-10 ; EN"
      },
      {
        "id": "adw-psittacus-erithacus",
        "title": "Psittacus erithacus (grey parrot)",
        "publisher": "Animal Diversity Web / Rachel Holman",
        "url": "https://animaldiversity.org/accounts/Psittacus_erithacus/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-psittacus-erithacus-img",
        "title": "File:African-Grey-Parrot.jpg",
        "publisher": "Nasimahmed01 / Wikimedia Commons",
        "year": "2017",
        "url": "https://commons.wikimedia.org/wiki/File:African-Grey-Parrot.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-psittacus-erithacus-audio",
        "title": "XC1137653",
        "publisher": "Antoine Ede / Xeno-canto",
        "url": "https://xeno-canto.org/1137653",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Nasimahmed01 — CC BY-SA 4.0",
    "imageSourceId": "media-psittacus-erithacus-img",
    "image": "/images/birds/psittacus-erithacus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:African-Grey-Parrot.jpg",
    "audio": [
      "/audio/birds/psittacus-erithacus.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1137653"
    ]
  },
  {
    "id": "pyrrhura-molinae",
    "scientificName": "Pyrrhura molinae",
    "commonName": "Conure de Molina",
    "order": "Psittaciformes",
    "family": "Psittacidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 1 290 000 km² ; population non quantifiée, décrite comme « commune » (Stotz *et al.* 1996 *via* BirdLife) ; tendance **en diminution**. Joues vertes caractéristiques ; queue rougeâtre ; ~26 cm, 62–81 g.",
          "sourceIds": [
            "birdlife-pyrrhura-molinae",
            "adw-pyrrhura-molinae"
          ]
        },
        {
          "text": "Sexes semblables (plumage).",
          "sourceIds": [
            "adw-pyrrhura-molinae"
          ]
        },
        {
          "text": "Forêt sèche tropicale/subtropicale (majeur) ; aussi forêt humide montagnarde et forêt dégradée. Nidification en cavités d’arbres ; forêts décidues, galeries, secondaires (Paraguay, Argentine, Bolivie, Brésil).",
          "sourceIds": [
            "birdlife-pyrrhura-molinae",
            "adw-pyrrhura-molinae"
          ]
        },
        {
          "text": "Fruits (figues, mangues, papaye, oranges…), graines, noix, nectar et fleurs.",
          "sourceIds": [
            "adw-pyrrhura-molinae"
          ]
        },
        {
          "text": "Social (groupes ~10–20) ; diurne, arboricole ; généralement non migrateur (migrations altitudinales locales possibles).",
          "sourceIds": [
            "birdlife-pyrrhura-molinae",
            "adw-pyrrhura-molinae"
          ]
        },
        {
          "text": "Enregistrement XC1180569 (Bo Shunqi 薄顺奇 — CC BY-NC-SA 4.0) : https://xeno-canto.org/1180569 ADW : cris aigus et graves, sifflements, cris, babils, claquements de langue ; mimétisme possible.",
          "sourceIds": [
            "media-pyrrhura-molinae-audio",
            "adw-pyrrhura-molinae"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Conure de Molina ↔ *Pyrrhura molinae* ; Psittaciformes ; Psittacidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre *Pyrrhura* (conure) — Amérique du Sud ; distinct des perruches asiatiques",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance en diminution ; sexes semblables",
        "sourceIds": [
          "birdlife-pyrrhura-molinae",
          "adw-pyrrhura-molinae"
        ]
      },
      {
        "level": "sourcé",
        "text": "Forêt sèche (majeur) ; fruits, graines, nectar",
        "sourceIds": [
          "birdlife-pyrrhura-molinae",
          "adw-pyrrhura-molinae"
        ]
      },
      {
        "level": "sourcé",
        "text": "Social (groupes ~10–20) ; généralement non migratrice",
        "sourceIds": [
          "birdlife-pyrrhura-molinae",
          "adw-pyrrhura-molinae"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-pyrrhura-molinae",
        "title": "Green-cheeked Parakeet Pyrrhura molinae — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/green-cheeked-parakeet-pyrrhura-molinae",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "adw-pyrrhura-molinae",
        "title": "Pyrrhura molinae (green-cheeked parakeet)",
        "publisher": "Animal Diversity Web / Ana Horvath",
        "url": "https://animaldiversity.org/accounts/Pyrrhura_molinae/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-pyrrhura-molinae-img",
        "title": "File:Green Cheecked Conure.jpg",
        "publisher": "Dan Muntz / Wikimedia Commons",
        "year": "2008",
        "url": "https://commons.wikimedia.org/wiki/File:Green_Cheecked_Conure.jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-pyrrhura-molinae-audio",
        "title": "XC1180569",
        "publisher": "Bo Shunqi 薄顺奇 / Xeno-canto",
        "url": "https://xeno-canto.org/1180569",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Brésil"
      ],
      "hemisphere": "AM",
      "sourceIds": [
        "birdlife-pyrrhura-molinae",
        "adw-pyrrhura-molinae"
      ]
    },
    "imageCredit": "Dan Muntz — CC BY-SA 2.0",
    "imageSourceId": "media-pyrrhura-molinae-img",
    "image": "/images/birds/pyrrhura-molinae.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Green_Cheecked_Conure.jpg",
    "audio": [
      "/audio/birds/pyrrhura-molinae.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1180569"
    ]
  },
  {
    "id": "serinus-canaria",
    "scientificName": "Serinus canaria",
    "commonName": "Serin des canaries",
    "order": "Passériformes",
    "family": "Fringillidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018) pour la forme sauvage (Island Canary). EOO ≈ 612 000 km² ; 3 000 000–5 050 000 individus matures ; tendance **stable**. Très largement élevé en captivité (formes domestiques) ; evaluation IUCN = taxon sauvage.",
          "sourceIds": [
            "birdlife-serinus-canaria"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Forêts tempérées ; fourrés secs et méditerranéens ; jardins, pâturages et cultures.",
          "sourceIds": [
            "birdlife-serinus-canaria"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce international d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-serinus-canaria"
          ]
        },
        {
          "text": "Enregistrement XC1156694 (Radek Grochowski — CC BY-NC-SA 4.0) : https://xeno-canto.org/1156694",
          "sourceIds": [
            "media-serinus-canaria-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Serin des canaries ↔ *Serinus canaria* ; Passériformes ; Fringillidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : serins africains (*Crithagra*) — canaria = forme sauvage des îles + élevage",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern (forme sauvage Island Canary) ; 3–5 M matures ; tendance stable",
        "sourceIds": [
          "birdlife-serinus-canaria"
        ]
      },
      {
        "level": "sourcé",
        "text": "IUCN = taxon **sauvage** ; formes domestiques très élevées en captivité",
        "sourceIds": [
          "birdlife-serinus-canaria"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; forêts tempérées, fourrés méditerranéens, jardins",
        "sourceIds": [
          "birdlife-serinus-canaria"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-serinus-canaria",
        "title": "Island Canary Serinus canaria — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/island-canary-serinus-canaria",
        "note": "Consulté 2026-10-10 ; forme sauvage"
      },
      {
        "id": "media-serinus-canaria-img",
        "title": "File:Serinus canaria - Canary - Wild.jpg",
        "publisher": "Eduardo Martínez / Wikimedia Commons",
        "year": "2008",
        "url": "https://commons.wikimedia.org/wiki/File:Serinus_canaria_-_Canary_-_Wild.jpg",
        "note": "CC BY 2.0 ; individu sauvage"
      },
      {
        "id": "media-serinus-canaria-audio",
        "title": "XC1156694",
        "publisher": "Radek Grochowski / Xeno-canto",
        "url": "https://xeno-canto.org/1156694",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Eduardo Martínez — CC BY 2.0",
    "imageSourceId": "media-serinus-canaria-img",
    "image": "/images/birds/serinus-canaria.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Serinus_canaria_-_Canary_-_Wild.jpg",
    "audio": [
      "/audio/birds/serinus-canaria.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1156694"
    ]
  },
  {
    "id": "serinus-leucopygius",
    "scientificName": "Serinus leucopygius",
    "commonName": "Chanteur d'Afrique",
    "order": "Passériformes",
    "family": "Fringillidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 7 330 000 km² ; population non quantifiée ; tendance **stable**. Commerce signalé à forte prévalence. BirdLife / HBW : *Crithagra leucopygia* (ex-*Serinus*).",
          "sourceIds": [
            "birdlife-serinus-leucopygius"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche (majeur) ; jardins ruraux, pâturages et cultures (suitable).",
          "sourceIds": [
            "birdlife-serinus-leucopygius"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-serinus-leucopygius"
          ]
        },
        {
          "text": "Enregistrement XC469496 (Bram Piot — CC BY-NC-SA 4.0) : https://xeno-canto.org/469496",
          "sourceIds": [
            "media-serinus-leucopygius-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Chanteur d'Afrique ↔ *Serinus leucopygius* ; Passériformes ; **Fringillidés**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : autres *Serinus* du programme — BirdLife *Crithagra leucopygia*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; savane sèche (majeur)",
        "sourceIds": [
          "birdlife-serinus-leucopygius"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; aussi jardins, pâturages, cultures",
        "sourceIds": [
          "birdlife-serinus-leucopygius"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce signalé à forte prévalence",
        "sourceIds": [
          "birdlife-serinus-leucopygius"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-serinus-leucopygius",
        "title": "White-rumped Seedeater Crithagra leucopygia — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/white-rumped-seedeater-crithagra-leucopygia",
        "note": "Consulté 2026-10-10 ; BirdLife: Crithagra"
      },
      {
        "id": "media-serinus-leucopygius-img",
        "title": "File:White-rumped Seedeater - Gambia (32270398890).jpg",
        "publisher": "Francesco Veronesi / Wikimedia Commons",
        "year": "2017",
        "url": "https://commons.wikimedia.org/wiki/File:White-rumped_Seedeater_-_Gambia_(32270398890).jpg",
        "note": "CC BY-SA 2.0"
      },
      {
        "id": "media-serinus-leucopygius-audio",
        "title": "XC469496",
        "publisher": "Bram Piot / Xeno-canto",
        "url": "https://xeno-canto.org/469496",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Francesco Veronesi — CC BY-SA 2.0",
    "imageSourceId": "media-serinus-leucopygius-img",
    "image": "/images/birds/serinus-leucopygius.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:White-rumped_Seedeater_-_Gambia_(32270398890).jpg",
    "audio": [
      "/audio/birds/serinus-leucopygius.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/469496"
    ]
  },
  {
    "id": "serinus-mozambicus",
    "scientificName": "Serinus mozambicus",
    "commonName": "Serin du Mozambique",
    "order": "Passériformes",
    "family": "Fringillidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 22 300 000 km² ; population non quantifiée ; tendance **en diminution** (suspectée, liée au commerce). Plus de 2,6 millions d’oiseaux sauvages déclarés dans le commerce international depuis 1985 (CITES *via* BirdLife). BirdLife : *Crithagra mozambica* (ex-*Serinus*).",
          "sourceIds": [
            "birdlife-serinus-mozambicus"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche (majeur) ; prairies et fourrés secs ; jardins, pâturages et cultures.",
          "sourceIds": [
            "birdlife-serinus-mozambicus"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-serinus-mozambicus"
          ]
        },
        {
          "text": "Enregistrement XC1140446 (Marna Buys — CC BY-NC-SA 4.0) : https://xeno-canto.org/1140446",
          "sourceIds": [
            "media-serinus-mozambicus-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Serin du Mozambique ↔ *Serinus mozambicus* ; Passériformes ; Fringillidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : chanteur d'Afrique / serin des canaries — BirdLife *Crithagra mozambica*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance en **diminution** (liée au commerce)",
        "sourceIds": [
          "birdlife-serinus-mozambicus"
        ]
      },
      {
        "level": "sourcé",
        "text": "> 2,6 M oiseaux sauvages déclarés au commerce depuis 1985 (CITES *via* BirdLife)",
        "sourceIds": [
          "birdlife-serinus-mozambicus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; savane sèche, prairies, jardins, cultures",
        "sourceIds": [
          "birdlife-serinus-mozambicus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-serinus-mozambicus",
        "title": "Yellow-fronted Canary Crithagra mozambica — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/yellow-fronted-canary-crithagra-mozambica",
        "note": "Consulté 2026-10-10 ; BirdLife: Crithagra"
      },
      {
        "id": "media-serinus-mozambicus-img",
        "title": "File:Yellow-fronted canary (Crithagra mozambica granti) male Kruger.jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2024",
        "url": "https://commons.wikimedia.org/wiki/File:Yellow-fronted_canary_(Crithagra_mozambica_granti)_male_Kruger.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-serinus-mozambicus-audio",
        "title": "XC1140446",
        "publisher": "Marna Buys / Xeno-canto",
        "url": "https://xeno-canto.org/1140446",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-serinus-mozambicus-img",
    "image": "/images/birds/serinus-mozambicus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Yellow-fronted_canary_(Crithagra_mozambica_granti)_male_Kruger.jpg",
    "audio": [
      "/audio/birds/serinus-mozambicus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1140446"
    ]
  },
  {
    "id": "stagonopleura-guttata",
    "scientificName": "Stagonopleura guttata",
    "commonName": "Diamant à gouttelettes",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Vulnerable** (2022). EOO ≈ 1 175 000 km² ; 68 000–272 000 individus matures ; tendance **en diminution**. Endémique nicheur d’Australie. Déclins récents liés au défrichement et à la dégradation des habitats.",
          "sourceIds": [
            "birdlife-stagonopleura-guttata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Prairies et savanes sèches (majeur) ; forêts sèches subtropicales/tropicales (suitable).",
          "sourceIds": [
            "birdlife-stagonopleura-guttata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur).",
          "sourceIds": [
            "birdlife-stagonopleura-guttata"
          ]
        },
        {
          "text": "Enregistrement XC576505 (Marc Anderson — CC BY-NC-ND 4.0) : https://xeno-canto.org/576505",
          "sourceIds": [
            "media-stagonopleura-guttata-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Diamant à gouttelettes ↔ *Stagonopleura guttata* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Genre seul dans le programme — **Vulnerable**, ne pas confondre avec *Neochmia* LC",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "VU ; 68 000–272 000 matures ; tendance en diminution",
        "sourceIds": [
          "birdlife-stagonopleura-guttata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Endémique Australie ; prairies et savanes sèches (majeur)",
        "sourceIds": [
          "birdlife-stagonopleura-guttata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Déclins liés au défrichement / dégradation d’habitats",
        "sourceIds": [
          "birdlife-stagonopleura-guttata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-stagonopleura-guttata",
        "title": "Diamond Firetail Stagonopleura guttata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2022",
        "url": "https://datazone.birdlife.org/species/factsheet/diamond-firetail-stagonopleura-guttata",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-stagonopleura-guttata-img",
        "title": "File:Stagonopleura guttata 1 - Glen Alice.jpg",
        "publisher": "JJ Harrison / Wikimedia Commons",
        "year": "2019",
        "url": "https://commons.wikimedia.org/wiki/File:Stagonopleura_guttata_1_-_Glen_Alice.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-stagonopleura-guttata-audio",
        "title": "XC576505",
        "publisher": "Marc Anderson / Xeno-canto",
        "url": "https://xeno-canto.org/576505",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-stagonopleura-guttata"
      ]
    },
    "imageCredit": "JJ Harrison — CC BY-SA 4.0",
    "imageSourceId": "media-stagonopleura-guttata-img",
    "image": "/images/birds/stagonopleura-guttata.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Stagonopleura_guttata_1_-_Glen_Alice.jpg",
    "audio": [
      "/audio/birds/stagonopleura-guttata.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/576505"
    ]
  },
  {
    "id": "streptopelia-risoria",
    "scientificName": "Streptopelia risoria",
    "commonName": "Tourterelle rieuse",
    "order": "Columbiformes",
    "family": "Columbidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "**Forme domestique** (Barbary / ringed turtle dove). Taxon sauvage apparenté *S. roseogrisea* : **Least Concern** (2018) ; population non quantifiée, commune à localement abondante ; tendance suspectée **stable**.",
          "sourceIds": [
            "birdlife-streptopelia-roseogrisea"
          ]
        },
        {
          "text": "Chez le taxon sauvage : mâle un peu plus grand (ailes légèrement plus longues) ; plumage globalement semblable.",
          "sourceIds": [
            "adw-streptopelia-roseogrisea"
          ]
        },
        {
          "text": "Taxon sauvage : savane sèche et prairies sèches (majeur) ; désert chaud, fourrés secs, terres cultivées (suitable). ADW : scrub aride à acacias près de points d’eau, aussi cultures, parcs, mangroves.",
          "sourceIds": [
            "birdlife-streptopelia-roseogrisea",
            "adw-streptopelia-roseogrisea"
          ]
        },
        {
          "text": "Taxon sauvage : graines de graminées et plantes cultivées au sol ; aussi baies, insectes et escargots.",
          "sourceIds": [
            "adw-streptopelia-roseogrisea"
          ]
        },
        {
          "text": "Taxon sauvage : social (dortoirs et abreuvoirs parfois en grands groupes) ; migrations saisonnières locales signalées (Gibbs et al. 2001 via ADW) ; monogame ; parade avec inclinaisons et vol nuptial. Forme domestique dérivée de ce stock sauvage (ADW citant Goodwin 1983).",
          "sourceIds": [
            "adw-streptopelia-roseogrisea",
            "birdlife-streptopelia-roseogrisea"
          ]
        },
        {
          "text": "Enregistrement XC1163976 (*Streptopelia roseogrisea*, Zsombor Károlyi — CC BY-NC-SA 4.0) : https://xeno-canto.org/1163976",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Tourterelle rieuse ↔ *Streptopelia risoria* ; Columbiformes ; Columbidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Forme **domestique** — ne pas confondre avec la colombe maillée (*S. senegalensis*)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Liée au taxon sauvage *S. roseogrisea* (Least Concern)",
        "sourceIds": [
          "birdlife-streptopelia-roseogrisea",
          "adw-streptopelia-roseogrisea"
        ]
      },
      {
        "level": "sourcé",
        "text": "Sauvage : savane / prairies sèches ; graines au sol",
        "sourceIds": [
          "birdlife-streptopelia-roseogrisea",
          "adw-streptopelia-roseogrisea"
        ]
      },
      {
        "level": "sourcé",
        "text": "Dimorphisme faible (taille) chez le sauvage ; plumage proche entre sexes",
        "sourceIds": [
          "birdlife-streptopelia-roseogrisea",
          "adw-streptopelia-roseogrisea"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-streptopelia-roseogrisea",
        "title": "African Collared-dove Streptopelia roseogrisea — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/african-collared-dove-streptopelia-roseogrisea",
        "note": "Taxon sauvage"
      },
      {
        "id": "adw-streptopelia-roseogrisea",
        "title": "Streptopelia roseogrisea (African collared dove)",
        "publisher": "Animal Diversity Web / Janice Pappas",
        "url": "https://animaldiversity.org/accounts/Streptopelia_roseogrisea/",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-streptopelia-risoria-img",
        "title": "File:Barbary Dove (Streptopelia risoria) RWD.jpg",
        "publisher": "Dick Daniels / Wikimedia Commons",
        "year": "2010",
        "url": "https://commons.wikimedia.org/wiki/File:Barbary_Dove_(Streptopelia_risoria)_RWD.jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-streptopelia-risoria-audio",
        "title": "XC1163976",
        "publisher": "Zsombor Károlyi / Xeno-canto",
        "url": "https://xeno-canto.org/1163976",
        "note": "CC BY-NC-SA 4.0 ; taxon sauvage"
      }
    ],
    "imageCredit": "Dick Daniels — CC BY-SA 3.0",
    "imageSourceId": "media-streptopelia-risoria-img",
    "image": "/images/birds/streptopelia-risoria.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Barbary_Dove_(Streptopelia_risoria)_RWD.jpg",
    "audio": [
      "/audio/birds/streptopelia-risoria.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1163976"
    ]
  },
  {
    "id": "streptopelia-senegalensis",
    "scientificName": "Streptopelia senegalensis",
    "commonName": "Colombe maillée",
    "order": "Columbiformes",
    "family": "Columbidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évaluée **Least Concern** (2018). EOO ≈ 64 400 000 km² ; population ≈ 2,4–8,2 millions d’individus matures ; tendance suspectée **stable**.",
          "sourceIds": [
            "birdlife-spilopelia-senegalensis"
          ]
        },
        {
          "text": "*Non documenté dans BirdLife / ADW consultés — `na`.*",
          "sourceIds": []
        },
        {
          "text": "Terres cultivées (majeur), jardins, zones urbaines, pâturages, prairies, savane sèche. Associée aux cultures, aux arbres (hors forêt dense) et à l’habitat humain.",
          "sourceIds": [
            "birdlife-spilopelia-senegalensis"
          ]
        },
        {
          "text": "Petites graines ; aussi fruits, nectar d’*Aloe* et quelques insectes.",
          "sourceIds": [
            "birdlife-spilopelia-senegalensis (citant Baptista",
            "al. 1997)"
          ]
        },
        {
          "text": "Espèce commensale des milieux agricoles et urbains ; tendance de population suspectée stable.",
          "sourceIds": [
            "birdlife-spilopelia-senegalensis"
          ]
        },
        {
          "text": "Enregistrement XC1183962 (African Bioacoustics Community — CC BY-NC-SA 4.0) : https://xeno-canto.org/1183962",
          "sourceIds": []
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Colombe maillée ↔ *Streptopelia senegalensis* ; Columbiformes ; Columbidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : tourterelle rieuse (*S. risoria*) — autre entrée *Streptopelia* du programme",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Taxonomie actuelle BirdLife : *Spilopelia senegalensis*",
        "sourceIds": [
          "birdlife-spilopelia-senegalensis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commensale : cultures, jardins, villes ; régime surtout petites graines",
        "sourceIds": [
          "birdlife-spilopelia-senegalensis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; population estimée en millions ; tendance stable",
        "sourceIds": [
          "birdlife-spilopelia-senegalensis"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-spilopelia-senegalensis",
        "title": "Laughing Dove Spilopelia senegalensis — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/laughing-dove-spilopelia-senegalensis",
        "note": "Syn. Streptopelia senegalensis"
      },
      {
        "id": "media-streptopelia-senegalensis-img",
        "title": "File:Spilopelia senegalensis…",
        "publisher": "Zeynel Cebeci / Wikimedia Commons",
        "year": "2015",
        "url": "https://commons.wikimedia.org/wiki/File:Spilopelia_senegalensis_-_Laughing_Dove_-_K%C3%BC%C3%A7%C3%BCk_kumru_02.JPG",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-streptopelia-senegalensis-audio",
        "title": "XC1183962",
        "publisher": "African Bioacoustics Community / Xeno-canto",
        "url": "https://xeno-canto.org/1183962",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Zeynel Cebeci — CC BY-SA 4.0",
    "imageSourceId": "media-streptopelia-senegalensis-img",
    "image": "/images/birds/streptopelia-senegalensis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Spilopelia_senegalensis_-_Laughing_Dove_-_K%C3%BC%C3%A7%C3%BCk_kumru_02.JPG",
    "audio": [
      "/audio/birds/streptopelia-senegalensis.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1183962"
    ]
  },
  {
    "id": "taeniopygia-bichenovii",
    "scientificName": "Taeniopygia bichenovii",
    "commonName": "Diamant de Bichenow",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 5 450 000 km² ; population non quantifiée ; tendance **stable**. Endémique nicheur d’Australie. Commerce signalé à forte prévalence.",
          "sourceIds": [
            "birdlife-taeniopygia-bichenovii"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Zones urbaines, jardins, cultures et pâturages ; forêts, savanes et fourrés secs ; prairies.",
          "sourceIds": [
            "birdlife-taeniopygia-bichenovii"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-taeniopygia-bichenovii"
          ]
        },
        {
          "text": "Enregistrement XC816265 (Marc Anderson — CC BY-NC-ND 4.0) : https://xeno-canto.org/816265",
          "sourceIds": [
            "media-taeniopygia-bichenovii-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Diamant de Bichenow ↔ *Taeniopygia bichenovii* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : diamant Mandarin (*T. guttata castanotis*) — même genre *Taeniopygia*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; endémique Australie ; tendance stable",
        "sourceIds": [
          "birdlife-taeniopygia-bichenovii"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; urbain, jardins, cultures, savanes sèches",
        "sourceIds": [
          "birdlife-taeniopygia-bichenovii"
        ]
      },
      {
        "level": "sourcé",
        "text": "Commerce signalé à forte prévalence",
        "sourceIds": [
          "birdlife-taeniopygia-bichenovii"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-taeniopygia-bichenovii",
        "title": "Double-barred Finch Taeniopygia bichenovii — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/double-barred-finch-taeniopygia-bichenovii",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-taeniopygia-bichenovii-img",
        "title": "File:Taeniopygia bichenovii 2 - Glen Davis.jpg",
        "publisher": "JJ Harrison / Wikimedia Commons",
        "year": "2019",
        "url": "https://commons.wikimedia.org/wiki/File:Taeniopygia_bichenovii_2_-_Glen_Davis.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-taeniopygia-bichenovii-audio",
        "title": "XC816265",
        "publisher": "Marc Anderson / Xeno-canto",
        "url": "https://xeno-canto.org/816265",
        "note": "CC BY-NC-ND 4.0 ; XC: Stizoptera bichenovii"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-taeniopygia-bichenovii"
      ]
    },
    "imageCredit": "JJ Harrison — CC BY-SA 4.0",
    "imageSourceId": "media-taeniopygia-bichenovii-img",
    "image": "/images/birds/taeniopygia-bichenovii.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Taeniopygia_bichenovii_2_-_Glen_Davis.jpg",
    "audio": [
      "/audio/birds/taeniopygia-bichenovii.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/816265"
    ]
  },
  {
    "id": "taeniopygia-guttata-castanotis",
    "scientificName": "Taeniopygia guttata castanotis",
    "commonName": "Diamant Mandarin",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 7 510 000 km² ; population non quantifiée, décrite comme commune ou localement abondante (Clement 1999 *via* BirdLife) ; tendance **stable**. Présent sur la plus grande partie de l’Australie continentale. Commerce signalé à faible prévalence. BirdLife traite *T. castanotis* comme espèce distincte de *T. guttata* (Timor).",
          "sourceIds": [
            "birdlife-taeniopygia-castanotis"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Cultures, pâturages, jardins et zones urbaines ; forêts, savanes et fourrés secs ; prairies ; marais salés (suitable).",
          "sourceIds": [
            "birdlife-taeniopygia-castanotis"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie (faible prévalence).",
          "sourceIds": [
            "birdlife-taeniopygia-castanotis"
          ]
        },
        {
          "text": "Enregistrement XC407796 (Frank Lambert — CC BY-NC-ND 4.0) : https://xeno-canto.org/407796",
          "sourceIds": [
            "media-taeniopygia-guttata-castanotis-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Diamant Mandarin ↔ *Taeniopygia guttata castanotis* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "BirdLife : *T. castanotis* (espèce) ≠ *T. guttata* (Timor) ; confusion Bichenow",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; vaste Australie continentale ; tendance stable",
        "sourceIds": [
          "birdlife-taeniopygia-castanotis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; cultures, urbain, savanes/fourrés secs",
        "sourceIds": [
          "birdlife-taeniopygia-castanotis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Très courant en animalerie ; commerce sauvage à faible prévalence",
        "sourceIds": [
          "birdlife-taeniopygia-castanotis"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-taeniopygia-castanotis",
        "title": "Australian Zebra Finch Taeniopygia castanotis — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/australian-zebra-finch-taeniopygia-castanotis",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-taeniopygia-guttata-castanotis-img",
        "title": "File:Australian Zebra Finch 0A2A3013.jpg",
        "publisher": "JJ Harrison / Wikimedia Commons",
        "year": "2022",
        "url": "https://commons.wikimedia.org/wiki/File:Australian_Zebra_Finch_0A2A3013.jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-taeniopygia-guttata-castanotis-audio",
        "title": "XC407796",
        "publisher": "Frank Lambert / Xeno-canto",
        "url": "https://xeno-canto.org/407796",
        "note": "CC BY-NC-ND 4.0"
      }
    ],
    "wildRange": {
      "regions": [
        "Australie"
      ],
      "hemisphere": "AU",
      "sourceIds": [
        "birdlife-taeniopygia-castanotis"
      ]
    },
    "imageCredit": "JJ Harrison — CC BY-SA 3.0",
    "imageSourceId": "media-taeniopygia-guttata-castanotis-img",
    "image": "/images/birds/taeniopygia-guttata-castanotis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Australian_Zebra_Finch_0A2A3013.jpg",
    "audio": [
      "https://xeno-canto.org/407796"
    ]
  },
  {
    "id": "uraeginthus-bengalus",
    "scientificName": "Uraeginthus bengalus",
    "commonName": "Cordon bleu",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 15 900 000 km² ; population non quantifiée, décrite comme commune à abondante (Clement 1999 *via* BirdLife) ; tendance **stable**. Signalé dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-uraeginthus-bengalus"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Jardins ruraux, pâturages et cultures ; prairies, savanes et fourrés secs.",
          "sourceIds": [
            "birdlife-uraeginthus-bengalus"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-uraeginthus-bengalus"
          ]
        },
        {
          "text": "Enregistrement XC405791 (Bram Piot — CC BY-NC-SA 4.0) : https://xeno-canto.org/405791",
          "sourceIds": [
            "media-uraeginthus-bengalus-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Cordon bleu ↔ *Uraeginthus bengalus* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : cap bleu (*U. cyanocephalus*) — même genre *Uraeginthus* (Afrique)",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; EOO très vaste ; tendance stable",
        "sourceIds": [
          "birdlife-uraeginthus-bengalus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; jardins, pâturages, cultures, savanes sèches",
        "sourceIds": [
          "birdlife-uraeginthus-bengalus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Présent dans le commerce d’animaux de compagnie",
        "sourceIds": [
          "birdlife-uraeginthus-bengalus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-uraeginthus-bengalus",
        "title": "Red-cheeked Cordon-bleu Uraeginthus bengalus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/red-cheeked-cordon-bleu-uraeginthus-bengalus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-uraeginthus-bengalus-img",
        "title": "File:Red-cheeked cordon-bleu (Uraeginthus bengalus bengalus) male.jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2016",
        "url": "https://commons.wikimedia.org/wiki/File:Red-cheeked_cordon-bleu_(Uraeginthus_bengalus_bengalus)_male.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-uraeginthus-bengalus-audio",
        "title": "XC405791",
        "publisher": "Bram Piot / Xeno-canto",
        "url": "https://xeno-canto.org/405791",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-uraeginthus-bengalus-img",
    "image": "/images/birds/uraeginthus-bengalus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Red-cheeked_cordon-bleu_(Uraeginthus_bengalus_bengalus)_male.jpg",
    "audio": [
      "/audio/birds/uraeginthus-bengalus.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/405791"
    ]
  },
  {
    "id": "uraeginthus-cyanocephalus",
    "scientificName": "Uraeginthus cyanocephalus",
    "commonName": "Cap bleu",
    "order": "Passériformes",
    "family": "Estrildidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 1 740 000 km² ; population non quantifiée ; tendance **stable**. Signalé dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-uraeginthus-cyanocephalus"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Déserts chauds ; prairies et fourrés secs subtropicaux/tropicaux.",
          "sourceIds": [
            "birdlife-uraeginthus-cyanocephalus"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-uraeginthus-cyanocephalus"
          ]
        },
        {
          "text": "Enregistrement XC1030357 (Martin Tlustos — CC BY-NC-SA 4.0) : https://xeno-canto.org/1030357",
          "sourceIds": [
            "media-uraeginthus-cyanocephalus-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Cap bleu ↔ *Uraeginthus cyanocephalus* ; Passériformes ; Estrildidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : cordon bleu (*U. bengalus*) — cap bleu = déserts / fourrés plus arides",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; EOO plus restreinte (≈ 1,7 M km²) ; tendance stable",
        "sourceIds": [
          "birdlife-uraeginthus-cyanocephalus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; déserts chauds, prairies et fourrés secs",
        "sourceIds": [
          "birdlife-uraeginthus-cyanocephalus"
        ]
      },
      {
        "level": "sourcé",
        "text": "Présent dans le commerce d’animaux de compagnie",
        "sourceIds": [
          "birdlife-uraeginthus-cyanocephalus"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-uraeginthus-cyanocephalus",
        "title": "Blue-capped Cordon-bleu Uraeginthus cyanocephalus — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/blue-capped-cordon-bleu-uraeginthus-cyanocephalus",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-uraeginthus-cyanocephalus-img",
        "title": "File:Blue-capped Cordon-bleu, Ngorongoro.jpg",
        "publisher": "D. Gordon E. Robertson / Wikimedia Commons",
        "year": "2009",
        "url": "https://commons.wikimedia.org/wiki/File:Blue-capped_Cordon-bleu,_Ngorongoro.jpg",
        "note": "CC BY-SA 3.0"
      },
      {
        "id": "media-uraeginthus-cyanocephalus-audio",
        "title": "XC1030357",
        "publisher": "Martin Tlustos / Xeno-canto",
        "url": "https://xeno-canto.org/1030357",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "D. Gordon E. Robertson — CC BY-SA 3.0",
    "imageSourceId": "media-uraeginthus-cyanocephalus-img",
    "image": "/images/birds/uraeginthus-cyanocephalus.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Blue-capped_Cordon-bleu,_Ngorongoro.jpg",
    "audio": [
      "/audio/birds/uraeginthus-cyanocephalus.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1030357"
    ]
  },
  {
    "id": "vidua-chalybeata",
    "scientificName": "Vidua chalybeata",
    "commonName": "Combassou",
    "order": "Passériformes",
    "family": "Viduidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 24 500 000 km² ; population non quantifiée, rapportée comme commune à locale ; tendance **stable**. Signalé dans le commerce international d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-vidua-chalybeata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Savane sèche (majeur) ; jardins, plantations, pâturages et cultures ; fourrés secs.",
          "sourceIds": [
            "birdlife-vidua-chalybeata"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-vidua-chalybeata"
          ]
        },
        {
          "text": "Enregistrement XC982686 (Julien Birard — CC BY-NC-SA 4.0) : https://xeno-canto.org/982686",
          "sourceIds": [
            "media-vidua-chalybeata-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Combassou ↔ *Vidua chalybeata* ; Passériformes ; **Viduidés**",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : veuves (*V. macroura*, *V. orientalis*) — même famille, autre espèce",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; EOO très vaste ; tendance stable",
        "sourceIds": [
          "birdlife-vidua-chalybeata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migrateur ; savane sèche (majeur), jardins, cultures",
        "sourceIds": [
          "birdlife-vidua-chalybeata"
        ]
      },
      {
        "level": "sourcé",
        "text": "Présent dans le commerce international d’animaux de compagnie",
        "sourceIds": [
          "birdlife-vidua-chalybeata"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-vidua-chalybeata",
        "title": "Village Indigobird Vidua chalybeata — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/village-indigobird-vidua-chalybeata",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-vidua-chalybeata-img",
        "title": "File:Village indigobird (Vidua chalybeata okavangoensis) male Zimbabwe.jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2018",
        "url": "https://commons.wikimedia.org/wiki/File:Village_indigobird_(Vidua_chalybeata_okavangoensis)_male_Zimbabwe.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-vidua-chalybeata-audio",
        "title": "XC982686",
        "publisher": "Julien Birard / Xeno-canto",
        "url": "https://xeno-canto.org/982686",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-vidua-chalybeata-img",
    "image": "/images/birds/vidua-chalybeata.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Village_indigobird_(Vidua_chalybeata_okavangoensis)_male_Zimbabwe.jpg",
    "audio": [
      "/audio/birds/vidua-chalybeata.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/982686"
    ]
  },
  {
    "id": "vidua-macroura",
    "scientificName": "Vidua macroura",
    "commonName": "Veuve dominicaine",
    "order": "Passériformes",
    "family": "Viduidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2018). EOO ≈ 26 600 000 km² ; population non quantifiée, décrite comme peu commune (Borrow & Demey 2001 *via* BirdLife) ; tendance **stable**. Signalé dans le commerce international d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-vidua-macroura"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Jardins ruraux et cultures (majeur) ; pâturages ; fourrés humides (majeur) ; cours d’eau permanents (suitable).",
          "sourceIds": [
            "birdlife-vidua-macroura"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-vidua-macroura"
          ]
        },
        {
          "text": "Enregistrement XC1183545 (African Bioacoustics Community — CC BY-NC-SA 4.0) : https://xeno-canto.org/1183545",
          "sourceIds": [
            "media-vidua-macroura-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Veuve dominicaine ↔ *Vidua macroura* ; Passériformes ; Viduidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : veuve à collier d'or (*V. orientalis*) / combassou — même genre *Vidua*",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; EOO très vaste",
        "sourceIds": [
          "birdlife-vidua-macroura"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; jardins et cultures (majeur), fourrés humides",
        "sourceIds": [
          "birdlife-vidua-macroura"
        ]
      },
      {
        "level": "sourcé",
        "text": "Présente dans le commerce international d’animaux de compagnie",
        "sourceIds": [
          "birdlife-vidua-macroura"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-vidua-macroura",
        "title": "Pin-tailed Whydah Vidua macroura — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2018",
        "url": "https://datazone.birdlife.org/species/factsheet/pin-tailed-whydah-vidua-macroura",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-vidua-macroura-img",
        "title": "File:Pin-tailed whydah (Vidua macroura) breeding male.jpg",
        "publisher": "Charles J. Sharp / Wikimedia Commons",
        "year": "2018",
        "url": "https://commons.wikimedia.org/wiki/File:Pin-tailed_whydah_(Vidua_macroura)_breeding_male.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-vidua-macroura-audio",
        "title": "XC1183545",
        "publisher": "African Bioacoustics Community / Xeno-canto",
        "url": "https://xeno-canto.org/1183545",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Charles J. Sharp — CC BY-SA 4.0",
    "imageSourceId": "media-vidua-macroura-img",
    "image": "/images/birds/vidua-macroura.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Pin-tailed_whydah_(Vidua_macroura)_breeding_male.jpg",
    "audio": [
      "/audio/birds/vidua-macroura.wav"
    ],
    "audioRemote": [
      "https://xeno-canto.org/1183545"
    ]
  },
  {
    "id": "vidua-orientalis",
    "scientificName": "Vidua orientalis",
    "commonName": "Veuve à collier d'or",
    "order": "Passériformes",
    "family": "Viduidés",
    "programSourceId": "bac-pro-tcva-liste",
    "sheet": {
      "status": "complete",
      "sections": [
        {
          "text": "Évalué **Least Concern** (2024). EOO ≈ 5 390 000 km² ; population non quantifiée ; tendance **stable**. Commerce signalé à forte prévalence. BirdLife : Sahel Paradise-whydah (*V. orientalis*), distincte de *V. togoensis* (Exclamatory).",
          "sourceIds": [
            "birdlife-vidua-orientalis"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Non migrateur. Forêts et savanes sèches (majeur) ; zones rocheuses (suitable).",
          "sourceIds": [
            "birdlife-vidua-orientalis"
          ]
        },
        {
          "text": "*na — sources consultées silencieuses.*",
          "sourceIds": []
        },
        {
          "text": "Sédentaire (non migrateur). Présent dans le commerce international d’animaux de compagnie.",
          "sourceIds": [
            "birdlife-vidua-orientalis"
          ]
        },
        {
          "text": "Enregistrement XC436008 (Bram Piot — CC BY-NC-SA 4.0) : https://xeno-canto.org/436008",
          "sourceIds": [
            "media-vidua-orientalis-audio"
          ]
        }
      ]
    },
    "coursePoints": [
      {
        "level": "programme",
        "text": "Veuve à collier d'or ↔ *Vidua orientalis* ; Passériformes ; Viduidés",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "programme",
        "text": "Confusion : *V. macroura* / *V. togoensis* (hors programme) — Sahel Paradise-whydah",
        "sourceIds": [
          "bac-pro-tcva-liste"
        ]
      },
      {
        "level": "sourcé",
        "text": "Least Concern ; tendance stable ; forêts et savanes sèches",
        "sourceIds": [
          "birdlife-vidua-orientalis"
        ]
      },
      {
        "level": "sourcé",
        "text": "Non migratrice ; commerce signalé à forte prévalence",
        "sourceIds": [
          "birdlife-vidua-orientalis"
        ]
      },
      {
        "level": "sourcé",
        "text": "BirdLife la distingue explicitement de *V. togoensis*",
        "sourceIds": [
          "birdlife-vidua-orientalis"
        ]
      }
    ],
    "sources": [
      {
        "id": "bac-pro-tcva-liste",
        "title": "Liste des oiseaux – BAC PRO TCVA (MP6)",
        "publisher": "Support de cours",
        "year": "2009",
        "note": "Identité programme"
      },
      {
        "id": "birdlife-vidua-orientalis",
        "title": "Sahel Paradise-whydah Vidua orientalis — Species Factsheet",
        "publisher": "BirdLife International",
        "year": "2024",
        "url": "https://datazone.birdlife.org/species/factsheet/sahel-paradise-whydah-vidua-orientalis",
        "note": "Consulté 2026-10-10"
      },
      {
        "id": "media-vidua-orientalis-img",
        "title": "File:Sahel Paradise Whydah.jpg",
        "publisher": "Pobpob11 / Wikimedia Commons",
        "year": "2021",
        "url": "https://commons.wikimedia.org/wiki/File:Sahel_Paradise_Whydah.jpg",
        "note": "CC BY-SA 4.0"
      },
      {
        "id": "media-vidua-orientalis-audio",
        "title": "XC436008",
        "publisher": "Bram Piot / Xeno-canto",
        "url": "https://xeno-canto.org/436008",
        "note": "CC BY-NC-SA 4.0"
      }
    ],
    "imageCredit": "Pobpob11 — CC BY-SA 4.0",
    "imageSourceId": "media-vidua-orientalis-img",
    "image": "/images/birds/vidua-orientalis.webp",
    "imageRemote": "https://commons.wikimedia.org/wiki/File:Sahel_Paradise_Whydah.jpg",
    "audio": [
      "/audio/birds/vidua-orientalis.mp3"
    ],
    "audioRemote": [
      "https://xeno-canto.org/436008"
    ]
  }
]
