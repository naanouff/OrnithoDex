/**
 * Pilote 12 — champs scolaires sourcés (2026-10-14).
 * Faits paraphrasés depuis les annexes CITES, AnAge et ADW.
 * Pas de ration inventée.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dir = path.join(root, 'documentation/ornithologie/fiches-naturaliste')

const captive =
  'Non documenté — bases consultées le 2026-10-14 : index EAZA Best Practice Guidelines, liste AZA Animal Care Manuals (aucun guide nommé pour cette espèce).'

const citesOff =
  'Non inscrit (annexes CITES du 2026-03-05, consultées le 2026-10-14).'

const noMorph =
  'Non documenté — bases consultées le 2026-10-14 : BirdLife (fiche sans paragraphe d’identification), ADW (page non obtenue, erreur 503).'

const noSize =
  'Non documenté — bases consultées le 2026-10-14 : ADW (pas de longueur dans la description consultée), BirdLife (pas de paragraphe d’identification).'

const noSizeAdwDown =
  'Non documenté — bases consultées le 2026-10-14 : BirdLife (fiche sans paragraphe d’identification), ADW (page non obtenue, erreur 503).'

const noLife =
  'Non documenté — bases consultées le 2026-10-14 : AnAge (entrée absente), ADW (page non obtenue, erreur 503).'

const rows = {
  'colinus-virginianus': {
    morph:
      'Petit Galliforme (140 à 170 g), ailes arrondies, queue carrée. Dos brun-roux marbré (bords clairs et barres sombres), poitrine blanche.',
    morphSrc: 'adw-colinus-virginianus',
    cites:
      'Non inscrit à l’espèce ; sous-espèce *Colinus virginianus ridgwayi* en Annexe I (annexes du 2026-03-05).',
    size: null,
    life: '6,4 ans (sauvage, maximum cité) ; 10 ans évoqués mais non confirmés',
    lifeSrc: 'anage-colinus-virginianus',
    anage: [
      'anage-colinus-virginianus',
      'Colinus virginianus — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Colinus_virginianus',
    ],
  },
  'coturnix-chinensis': {
    morph:
      'Mâle brun sombre, poitrine gris-bleu ardoise, ventre roux à châtain, gorge noire bordée de blanc. Femelle brune, sans la poitrine grise, le ventre roux ni les marques noires du mâle.',
    morphSrc: 'adw-coturnix-chinensis',
    cites: citesOff,
    size: null,
    life: '5 ans (maximum cité ; milieu non précisé, donnée jugée questionable)',
    lifeSrc: 'anage-coturnix-chinensis',
    anage: [
      'anage-coturnix-chinensis',
      'Coturnix chinensis — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Coturnix_chinensis',
    ],
  },
  'gallus-gallus-domesticus': {
    morph:
      'Taxon sauvage *Gallus gallus* : plumage or, rouge, brun, marron, orange, avec du vert métallique et du gris ; deux taches blanches en forme d’oreille de chaque côté de la tête ; pattes grisâtres. Queue du mâle pouvant atteindre presque 28 cm.',
    morphSrc: 'adw-gallus-gallus',
    cites:
      'Non inscrit (*Gallus gallus*, forme domestique comprise). *Gallus sonneratii* est en Annexe II : ce n’est pas ce taxon (annexes du 2026-03-05).',
    size: 'jusqu’à 70 cm (taxon sauvage *Gallus gallus*)',
    sizeSrc: 'adw-gallus-gallus',
    life: '30 ans (captivité, maximum rapporté ; non prouvé, AnAge recommande 15 ou 20 ans pour les comparaisons)',
    lifeSrc: 'anage-gallus-gallus',
    anage: [
      'anage-gallus-gallus',
      'Gallus gallus — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Gallus_gallus',
    ],
  },
  'callipepla-californica': {
    morph:
      'Dessous d’aspect écailleux (pointes de plumes noires et brunes), plumage général bleu-gris et brun, couronne châtain, bec noir, pattes grises, huppe en goutte sur le front.',
    morphSrc: 'adw-callipepla-californica',
    cites: citesOff,
    size: null,
    life: '9,6 ans (maximum cité ; milieu non précisé)',
    lifeSrc: 'anage-callipepla-californica',
    anage: [
      'anage-callipepla-californica',
      'Callipepla californica — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Callipepla_californica',
    ],
  },
  'aix-galericulata': {
    morph:
      'Mâle en plumage complet : plumes « voile » dressées au-dessus du dos, crête orange et crème, large sourcil blanc. Femelle plus terne, grisâtre, avec une bande blanche courbe derrière l’œil et des taches blanches dessous. Miroir bleu-vert chez les deux sexes en vol.',
    morphSrc: 'adw-aix-galericulata',
    cites: citesOff,
    size: noSize,
    sizeSrc: 'adw-aix-galericulata',
    life: '10,4 ans (sauvage, maximum cité ; donnée jugée questionable, probablement sous-estimée) ; 20 ans cités comme chiffre anecdotique',
    lifeSrc: 'anage-aix-galericulata',
    anage: [
      'anage-aix-galericulata',
      'Aix galericulata — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Aix_galericulata',
    ],
  },
  'aix-sponsa': {
    morph:
      'Crête, queue rectangulaire, ventre blanc et lignes blanches au dos de l’aile. Mâle : tête irisée verte, bleue et violette, poitrine rouille, flancs bronze. Femelle : brun-gris, anneau oculaire blanc.',
    morphSrc: 'adw-aix-sponsa',
    cites: citesOff,
    size: 'mâle 48–54 cm ; femelle 47–51 cm',
    sizeSrc: 'adw-aix-sponsa',
    life: '22,5 ans (sauvage, maximum cité, AnAge) ; environ 15 ans (sauvage, maximum cité, ADW)',
    lifeSrc: 'anage-aix-sponsa ; adw-aix-sponsa',
    anage: [
      'anage-aix-sponsa',
      'Aix sponsa — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Aix_sponsa',
    ],
  },
  'geopelia-cuneata': {
    morph: noMorph,
    morphSrc: 'birdlife-geopelia-cuneata',
    cites: citesOff,
    size: noSizeAdwDown,
    sizeSrc: 'birdlife-geopelia-cuneata',
    life: 'longévité maximale non établie ; des individus ont vécu 1,8 an',
    lifeSrc: 'anage-geopelia-cuneata',
    anage: [
      'anage-geopelia-cuneata',
      'Geopelia cuneata — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Geopelia_cuneata',
    ],
  },
  'geopelia-striata': {
    morph: noMorph,
    morphSrc: 'birdlife-geopelia-striata',
    cites: citesOff,
    size: noSizeAdwDown,
    sizeSrc: 'birdlife-geopelia-striata',
    life: '18,7 ans (sauvage, maximum cité ; un individu bagué d’au moins 18,7 ans)',
    lifeSrc: 'anage-geopelia-striata',
    anage: [
      'anage-geopelia-striata',
      'Geopelia striata — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Geopelia_striata',
    ],
  },
  'oena-capensis': {
    morph: noMorph,
    morphSrc: 'birdlife-oena-capensis',
    cites: citesOff,
    size: noSizeAdwDown,
    sizeSrc: 'birdlife-oena-capensis',
    life: noLife,
    lifeSrc: 'anage-oena-capensis',
    anage: [
      'anage-oena-capensis',
      'Oena capensis — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Oena_capensis',
    ],
  },
  'streptopelia-senegalensis': {
    morph: noMorph,
    morphSrc: 'birdlife-spilopelia-senegalensis',
    cites: citesOff,
    size: noSizeAdwDown,
    sizeSrc: 'birdlife-spilopelia-senegalensis',
    life: noLife,
    lifeSrc: 'anage-spilopelia-senegalensis',
    anage: [
      'anage-spilopelia-senegalensis',
      'Spilopelia senegalensis — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Spilopelia_senegalensis',
    ],
  },
  'streptopelia-risoria': {
    morph:
      'Taxon sauvage *Streptopelia roseogrisea* : calotte, cou et nuque d’un fauve rose-gris pâle ; demi-collier noir étroit, bordé de blanc sur le bord supérieur ; dos et dessus de l’aile sable pâle.',
    morphSrc: 'adw-streptopelia-roseogrisea',
    cites: citesOff,
    size: '26–27 cm (taxon sauvage *Streptopelia roseogrisea*)',
    sizeSrc: 'adw-streptopelia-roseogrisea',
    life: '12 ans (maximum cité ; milieu non précisé) ; AnAge indique une durée peut-être nettement plus longue, jusqu’à 20 ans, sans mesure',
    lifeSrc: 'anage-streptopelia-risoria',
    anage: [
      'anage-streptopelia-risoria',
      'Streptopelia risoria — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Streptopelia_risoria',
    ],
  },
  'columba-livia': {
    morph:
      'Tête, cou et poitrine gris-bleu sombre, avec des irisations jaunâtres, verdâtres et pourpre rougeâtre sur le cou et les ailes. Bec gris-rose sombre. La plupart montrent deux bandes sombres sur l’aile et une bande gris-bleu sur la queue.',
    morphSrc: 'adw-columba-livia',
    cites: citesOff,
    size: noSize,
    sizeSrc: 'adw-columba-livia',
    life: '35 ans (captivité, maximum cité) ; 6 ans (sauvage, moyenne, ADW)',
    lifeSrc: 'anage-columba-livia ; adw-columba-livia',
    anage: [
      'anage-columba-livia',
      'Columba livia — AnAge',
      'https://genomics.senescence.info/species/entry.php?species=Columba_livia',
    ],
  },
}

function section(title, body, src) {
  const label = src.includes(';') ? 'Sources' : 'Source'
  return `## ${title}\n\n${body}  \n*${label} : ${src}.*\n\n`
}

function patch(slug, row) {
  const file = path.join(dir, `${slug}.md`)
  let md = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  if (md.includes('## Morphologie')) {
    console.log('skip', slug)
    return
  }
  const block =
    section('Morphologie', row.morph, row.morphSrc) +
    section('Statut CITES', row.cites, 'cites-appendices') +
    section('Alimentation en captivité', captive, 'eaza-bpg ; aza-acm') +
    section('Conseils captivité', captive, 'eaza-bpg ; aza-acm') +
    section('Compatibilité', captive, 'eaza-bpg ; aza-acm')
  if (!md.includes('## Dimorphisme sexuel')) throw new Error(`ancrage dimorphisme: ${slug}`)
  md = md.replace('## Dimorphisme sexuel', `${block}## Dimorphisme sexuel`)
  if (row.size) {
    md = md.replace(
      /\| Taille adulte \| [^|\n]* \| [^|\n]* \|/,
      `| Taille adulte | ${row.size} | ${row.sizeSrc} |`,
    )
  }
  md = md.replace(
    /\| Longévité \| [^|\n]* \| [^|\n]* \|/,
    `| Longévité | ${row.life} | ${row.lifeSrc} |`,
  )
  md = md.replace(
    /\*\*Dernière vérification\*\* : \d{4}-\d{2}-\d{2}/,
    '**Dernière vérification** : 2026-10-14',
  )
  const extra = [
    '| cites-appendices | CITES Appendices I, II and III | CITES | 2026 | https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf | Consulté 2026-10-14 |',
    '| eaza-bpg | EAZA Best Practice Guidelines (index) | EAZA | | https://www.eaza.net/bpg/ | Consulté 2026-10-14 ; aucun guide pour cette espèce |',
    '| aza-acm | AZA Animal Care Manuals (liste publiée) | Association of Zoos & Aquariums | | https://www.aza.org/animal-care-manuals | Consulté 2026-10-14 ; aucun manuel pour cette espèce |',
  ]
  if (row.anage) {
    const note = row.life.startsWith('Non documenté')
      ? 'Consulté 2026-10-14 ; entrée absente'
      : 'Consulté 2026-10-14'
    extra.push(
      `| ${row.anage[0]} | ${row.anage[1]} | AnAge | | ${row.anage[2]} | ${note} |`,
    )
  }
  md = md.trimEnd() + '\n' + extra.join('\n') + '\n'
  fs.writeFileSync(file, md, 'utf8')
  console.log('ok', slug)
}

function patchMeasures(slug, row) {
  const file = path.join(dir, `${slug}.md`)
  let md = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  if (row.size) {
    md = md.replace(
      /\| Taille adulte \|[^\n]*/,
      `| Taille adulte | ${row.size} | ${row.sizeSrc} |`,
    )
  }
  md = md.replace(
    /\| Longévité \|[^\n]*/,
    `| Longévité | ${row.life} | ${row.lifeSrc} |`,
  )
  fs.writeFileSync(file, md, 'utf8')
  console.log('measures', slug)
}

for (const [slug, row] of Object.entries(rows)) {
  patch(slug, row)
  patchMeasures(slug, row)
}
