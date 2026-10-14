/**
 * Reste de la collection (73) — CITES, AnAge, ADW.
 * Ne remplace pas une taille ou une longévité déjà chiffrée, sauf correction explicite.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dir = path.join(root, 'documentation/ornithologie/fiches-naturaliste')
const fetched = JSON.parse(
  fs.readFileSync(path.join(process.env.TEMP, 'ornithodex-research', 'reste.json'), 'utf8'),
)
const bySlug = Object.fromEntries(fetched.map((row) => [row.slug, row]))

const captive =
  'Non documenté — bases consultées le 2026-10-14 : index EAZA Best Practice Guidelines (aucun guide d’espèce pour ce taxon ; pas de ration tirée du document « Virus Management for Parrots »), liste AZA Animal Care Manuals.'
const morphMiss =
  'Non documenté — bases consultées le 2026-10-14 : ADW (page absente ou non obtenue), BirdLife (fiche sans paragraphe d’identification).'
const sizeMiss =
  'Non documenté — bases consultées le 2026-10-14 : ADW (pas de longueur du corps), BirdLife (fiche sans paragraphe d’identification).'
const lifeMiss =
  'Non documenté — bases consultées le 2026-10-14 : AnAge (entrée absente).'

const psittaci = new Set([
  'agapornis-fischeri',
  'agapornis-lilianae',
  'agapornis-nigrigenis',
  'agapornis-personatus',
  'amazona-aestiva',
  'bolborhynchus-lineola-lineola',
  'cacatua-alba',
  'cacatua-galerita',
  'cyanoramphus-auriceps',
  'eolophus-roseicapilla',
  'forpus-coelestis',
  'myiopsitta-monachus-monachus',
  'neophema-elegans',
  'neophema-pulchella',
  'neophema-splendida',
  'neopsephotus-bourkii',
  'platycercus-adscitus',
  'platycercus-elegans',
  'platycercus-eximius-eximius',
  'platycercus-icterotis',
  'poicephalus-senegalus',
  'polytelis-alexandrae',
  'polytelis-anthopeplus',
  'psephotus-haematonotus-haematonotus',
  'psittacula-cyanocephala',
  'psittacula-eupatria',
  'pyrrhura-molinae',
])

const morph = {
  'agapornis-fischeri':
    'Petite perruche au plumage vif ; mâle et femelle d’apparence identique. Envergure 88 à 89 mm.',
  'agapornis-personatus':
    'Corps vert, tête et masque brun-noir, gorge noire, poitrine et collier jaune citron, pattes grises, bec corail, cercle blanc autour de l’œil.',
  'agapornis-roseicollis':
    'Environ 55 g et 15 cm ; les femelles sont un peu plus lourdes que les mâles.',
  'amandava-amandava':
    'Environ 10 cm. Mue annuelle du plumage nuptial ; mâle nuptial à couronne et dos rouge profond.',
  'amazona-aestiva':
    'Corps surtout vert vif ; plumes bleu vif sur la couronne, jaune autour de la face et à l’extrémité des scapulaires. Bec en grande partie noir. Sexes semblables à l’œil humain.',
  'cacatua-alba':
    'Grand oiseau blanc, dessous des ailes et de la queue jaunâtre, large huppe en éventail. Bec et pattes gris foncé. Iris brun sombre chez le mâle, rougeâtre chez la femelle.',
  'cacatua-galerita':
    'Grand oiseau blanc, 45 à 50 cm, masse moyenne 800 g, huppe jaune soufre.',
  'estrilda-astrild':
    'Petit passereau gris-brun, bec conique et zone de la face rouges.',
  'gracula-religiosa':
    '27 à 30 cm, plumage noir lustré (reflets pourpres sur la couronne, la nuque et la poitrine, reflets verts sur le corps, queue turquoise). Aile noire à miroir blanc. Bec rouge à pointe jaune, caroncules nues jusqu’à la nuque.',
  'melopsittacus-undulatus':
    'Petite perruche élancée, 18 à 20 cm, ailes et queue pointues.',
  'myiopsitta-monachus-monachus':
    'Taille moyenne, 11 à 13 pouces jusqu’au bout de la queue effilée. Vert et gris ; front bleu-gris, lores, joues et gorge gris pâle, bec brun-rose clair, pattes grises.',
  'neochmia-ruficauda':
    'Face rouge vif. Mâle : face rouge, dessous de la tête jaune-olive, taches blanches sur la poitrine, les flancs, le croupion et la queue. Femelle : face plus terne, rouge vif surtout sur les lores et le front.',
  'neopsephotus-bourkii':
    '18 à 23 cm, queue d’environ 9 cm, masse environ 42 à 49 g.',
  'nymphicus-hollandicus':
    'Plus petit des cacatoès, environ 80 g, silhouette élancée. Seule perruche à huppe dont la queue se termine en pointe ; cette queue, très longue (environ 15 cm), fait la moitié de la longueur.',
  'poicephalus-senegalus':
    'Tête et bec gris. Ailes, dos, rectrices et partie de la poitrine verts, le vert de la poitrine en « V ». Ventre du jaune vif à l’orange. Iris jaune chez l’adulte. Pattes grises ou roses.',
  'polytelis-alexandrae':
    'Mâle : couronne bleue, côtés de la tête bleu-gris, menton et gorge roses, corps vert-olive, dessus de l’aile vert vif, dessous de l’aile bleu-violet, œil et bec orange. Femelle : couronne gris-mauve, ailes plus ternes, queue plus courte.',
  'psittacula-krameri-manillensis':
    'Corps vert, bec rougeâtre, longue queue pointue (jusqu’à 25 cm, plus de la moitié du corps). Le mâle adulte a une teinte pourpre sombre autour du cou.',
  'psittacus-erithacus':
    'Plumage gris de plusieurs tons, rectrices rouges bien distinctes. Environ 33 cm, jusqu’à 407 g.',
  'pyrrhura-molinae':
    'Joues vertes, critère cité pour la distinguer des autres conures. Sous-espèce nominale : du front à la nuque, plumes brunes ou grises.',
  'serinus-mozambicus':
    'Environ 12 cm. Mâle adulte : face, ventre, flancs, croupion et couvertures caudales jaune d’or ; rayures malaire et oculaire brun à noir. Dos, cou et couronne brun à vert-olive.',
  'stagonopleura-guttata':
    'Mâle : dessus brun, couvertures sus-caudales cramoisies, queue, front et couronne noirs, nuque gris cendre, gorge blanche, poitrine et ventre blancs. Bec et iris rouges, pattes gris foncé. Femelle semblable, souvent plus petite, bande noire étroite sur le front.',
  'taeniopygia-guttata-castanotis':
    'Petit passereau, 10 à 11 cm, environ 12 g. Mâle et femelle diffèrent par la coloration.',
}

const life = {
  'agapornis-lilianae': '19,2 ans (captivité, maximum cité)',
  'amazona-aestiva': '49 ans (captivité, maximum cité)',
  'cyanoramphus-auriceps': '9,3 ans (captivité ; un individu encore vivant après cette durée)',
  'cyanoramphus-novaezelandiae': '12,4 ans (captivité ; un individu encore vivant après cette durée)',
  'eolophus-roseicapilla': '40 ans (captivité, maximum cité)',
  'erythrura-gouldiae': '6 ans (captivité, maximum cité)',
  'erythrura-trichroa':
    'longévité maximale non établie ; des individus ont vécu jusqu’à 2,2 ans (sauvage)',
  'forpus-coelestis': '10,4 ans (captivité, maximum cité)',
  'lonchura-oryzivora':
    'longévité maximale non établie ; espérance en captivité 2 à 3 ans, des individus jusqu’à 7 ans, au-delà de 9 ans seulement de façon anecdotique',
  'lonchura-striata': '10 ans (maximum cité ; milieu non précisé)',
  'lonchura-striata-domestiqua':
    '10 ans (maximum cité ; milieu non précisé ; page AnAge *Lonchura striata*)',
  'melopsittacus-undulatus': '21 ans (captivité, maximum cité)',
  'myiopsitta-monachus-monachus': '22,1 ans (captivité, maximum cité)',
  'neochmia-ruficauda':
    '3,4 ans (sauvage, maximum cité ; donnée jugée questionable, probablement sous-estimée)',
  'neophema-elegans':
    'longévité maximale non établie ; des individus ont vécu 2,9 ans (milieu non précisé)',
  'neophema-pulchella': '21 ans (captivité, maximum cité)',
  'neophema-splendida': '14 ans (captivité, maximum cité)',
  'neopsephotus-bourkii': '12,6 ans (captivité, maximum cité)',
  'platycercus-adscitus':
    'longévité maximale non établie ; des individus ont vécu 4,2 ans (milieu non précisé)',
  'platycercus-elegans':
    '26,8 ans (captivité ; un individu de la sous-espèce *adelaidae*)',
  'platycercus-eximius-eximius': '27,4 ans (captivité, maximum cité)',
  'platycercus-icterotis': '13,2 ans (captivité, maximum cité ; donnée jugée questionable)',
  'ploceus-cucullatus': '24 ans (captivité, maximum cité ; un mâle)',
  'poephila-acuticauda': '6 ans (sauvage, maximum cité)',
  'poicephalus-senegalus': '40 ans (captivité, maximum cité)',
  'polytelis-alexandrae': '23,9 ans (captivité ; une femelle)',
  'polytelis-anthopeplus': '13,8 ans (captivité ; un individu encore vivant après cette durée)',
  'psephotus-haematonotus-haematonotus': '12,2 ans (captivité, maximum cité)',
  'psittacula-cyanocephala': '18,8 ans (captivité, maximum cité ; donnée jugée questionable)',
  'psittacula-eupatria': '30 ans (captivité ; un individu encore vivant après cette durée)',
  'psittacula-krameri-manillensis': '34 ans (captivité, maximum cité)',
  'serinus-canaria': '24 ans (captivité, maximum cité)',
  'taeniopygia-bichenovii': '5,4 ans (sauvage, maximum cité ; donnée jugée questionable)',
}

const lifeForce = {
  'nymphicus-hollandicus':
    '10–14 ans (sauvage) ; captivité jusqu’à 25 ans, record 36 ans',
}
const sizeForce = {
  'cacatua-alba': '46 cm (longueur moyenne) ; envergure 25–31 cm',
}

function citesText(slug) {
  if (slug === 'psittacus-erithacus') return 'Annexe I (annexes CITES du 2026-03-05).'
  if (slug === 'cyanoramphus-novaezelandiae')
    return 'Annexe I (annexes CITES du 2026-03-05). *Cyanoramphus auriceps* relève de l’Annexe II (Psittaciformes spp.).'
  if (slug === 'agapornis-roseicollis')
    return 'Non inscrit : *Agapornis roseicollis* est exclu des Psittaciformes spp. (annexes du 2026-03-05).'
  if (slug === 'melopsittacus-undulatus')
    return 'Non inscrit : *Melopsittacus undulatus* est exclu des Psittaciformes spp. (annexes du 2026-03-05).'
  if (slug === 'nymphicus-hollandicus')
    return 'Non inscrit : *Nymphicus hollandicus* est exclu des Psittaciformes spp. (annexes du 2026-03-05).'
  if (slug === 'psittacula-krameri-manillensis')
    return 'Non inscrit : *Psittacula krameri* (donc la sous-espèce *manillensis*) est exclu des Psittaciformes spp. (annexes du 2026-03-05).'
  if (slug === 'lonchura-oryzivora')
    return 'Annexe II (*Lonchura oryzivora*, annexes du 2026-03-05).'
  if (slug === 'gracula-religiosa')
    return 'Annexe II (*Gracula religiosa*, annexes du 2026-03-05).'
  if (slug === 'cacatua-alba' || slug === 'cacatua-galerita')
    return 'Annexe II (Psittaciformes spp., annexes du 2026-03-05). *Cacatua goffiniana*, *haematuropygia*, *moluccensis* et *sulphurea* sont en Annexe I : ce n’est pas ce taxon.'
  if (slug.startsWith('neophema-'))
    return 'Annexe II (Psittaciformes spp., annexes du 2026-03-05). *Neophema chrysogaster* est en Annexe I : ce n’est pas ce taxon.'
  if (slug === 'pyrrhura-molinae')
    return 'Annexe II (Psittaciformes spp., annexes du 2026-03-05). *Pyrrhura cruentata* est en Annexe I : ce n’est pas ce taxon.'
  if (slug.startsWith('psephotus-'))
    return 'Annexe II (Psittaciformes spp., annexes du 2026-03-05). *Psephotellus chrysopterygius*, *dissimilis* et *pulcherrimus* sont en Annexe I : ce n’est pas ce taxon.'
  if (psittaci.has(slug))
    return 'Annexe II (Psittaciformes spp., annexes du 2026-03-05).'
  if (slug.startsWith('amandava-'))
    return 'Non inscrit (annexes du 2026-03-05). *Amandava formosa* est en Annexe II : ce n’est pas ce taxon.'
  if (slug === 'poephila-acuticauda')
    return 'Non inscrit (annexes du 2026-03-05). *Poephila cincta cincta* est en Annexe II : ce n’est pas ce taxon.'
  if (slug.startsWith('serinus-'))
    return 'Non inscrit (annexes du 2026-03-05). *Serinus serinus* (population d’Ukraine) est en Annexe III : ce n’est pas ce taxon.'
  return 'Non inscrit (annexes CITES du 2026-03-05, consultées le 2026-10-14).'
}

function section(title, body, src) {
  const label = src.includes(';') ? 'Sources' : 'Source'
  return `## ${title}\n\n${body}  \n*${label} : ${src}.*\n\n`
}

function sourceId(md, prefix) {
  const match = md.match(new RegExp(`\\| (${prefix}[^|\\s]+) \\|`))
  return match ? match[1].trim() : ''
}

function isEmptyCell(line, label) {
  const match = line.match(new RegExp(`\\| ${label} \\| ([^|]*) \\|`))
  if (!match) return false
  const value = match[1].trim()
  return value === '' || value === 'na' || value === '—'
}

function replaceCell(md, label, value, src) {
  const line = `| ${label} | ${value} | ${src} |`
  if (md.includes(`| ${label} |`)) {
    return md.replace(new RegExp(`\\| ${label} \\|[^\\n]*`), line)
  }
  return md
}

for (const slug of Object.keys(bySlug)) {
  const file = path.join(dir, `${slug}.md`)
  let md = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  if (md.includes('## Morphologie')) {
    console.log('skip', slug)
    continue
  }
  const row = bySlug[slug]
  const adwId = sourceId(md, 'adw-') || (row.adw.found ? `adw-${slug}` : '')
  const birdlifeId = sourceId(md, 'birdlife-')
  const morphBody = morph[slug] || morphMiss
  const morphSrc = morph[slug] ? adwId || `adw-${slug}` : birdlifeId || 'cites-appendices'
  const lifeBody = lifeForce[slug] || life[slug] || lifeMiss
  const lifeSrc = lifeForce[slug]
    ? adwId || `adw-${slug}`
    : life[slug]
      ? `anage-${slug}`
      : `anage-${slug}`
  const sizeBody = sizeForce[slug] || sizeMiss
  const sizeSrc = sizeForce[slug] ? adwId || `adw-${slug}` : morphSrc

  let measures = ''
  if (!md.includes('## Mensurations')) {
    measures =
      '## Mensurations\n\n| Champ | Valeur | Source |\n|-------|--------|--------|\n' +
      `| Taille adulte | ${sizeBody} | ${sizeSrc} |\n` +
      `| Longévité | ${lifeBody} | ${lifeSrc} |\n\n`
  }

  const block =
    measures +
    section('Morphologie', morphBody, morphSrc) +
    section('Statut CITES', citesText(slug), 'cites-appendices') +
    section('Alimentation en captivité', captive, 'eaza-bpg ; aza-acm') +
    section('Conseils captivité', captive, 'eaza-bpg ; aza-acm') +
    section('Compatibilité', captive, 'eaza-bpg ; aza-acm')

  if (!md.includes('## Dimorphisme sexuel')) throw new Error(`ancrage: ${slug}`)
  const hadEmptyLife = isEmptyCell(md, 'Longévité')
  md = md.replace('## Dimorphisme sexuel', `${block}## Dimorphisme sexuel`)

  if (md.includes('## Mensurations') && measures === '') {
    if (sizeForce[slug] || isEmptyCell(md, 'Taille adulte')) {
      md = replaceCell(md, 'Taille adulte', sizeBody, sizeSrc)
    }
    if (lifeForce[slug] || isEmptyCell(md, 'Longévité')) {
      md = replaceCell(md, 'Longévité', lifeBody, lifeSrc)
    }
  }

  md = md.replace(
    /\*\*Dernière vérification\*\* : \d{4}-\d{2}-\d{2}/,
    '**Dernière vérification** : 2026-10-14',
  )

  const extra = []
  if (!md.includes('| cites-appendices |')) {
    extra.push(
      '| cites-appendices | CITES Appendices I, II and III | CITES | 2026 | https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf | Consulté 2026-10-14 |',
    )
  }
  if (!md.includes('| eaza-bpg |')) {
    extra.push(
      '| eaza-bpg | EAZA Best Practice Guidelines (index) | EAZA | | https://www.eaza.net/bpg/ | Consulté 2026-10-14 ; aucun guide d’espèce |',
    )
  }
  if (!md.includes('| aza-acm |')) {
    extra.push(
      '| aza-acm | AZA Animal Care Manuals (liste publiée) | Association of Zoos & Aquariums | | https://www.aza.org/animal-care-manuals | Consulté 2026-10-14 ; aucun manuel pour cette espèce |',
    )
  }
  const willWriteLife = measures !== '' || Boolean(lifeForce[slug]) || hadEmptyLife
  if (willWriteLife && !lifeForce[slug] && !md.includes(`| anage-${slug} |`)) {
    const note = life[slug]
      ? 'Consulté 2026-10-14'
      : 'Consulté 2026-10-14 ; entrée absente'
    extra.push(
      `| anage-${slug} | ${row.sci} — AnAge | AnAge | | ${row.anage.url} | ${note} |`,
    )
  }
  if (row.adw.found && !md.includes(row.adw.url)) {
    extra.push(
      `| ${adwId || `adw-${slug}`} | ${row.sci} | Animal Diversity Web | | ${row.adw.url} | Consulté 2026-10-14 ; Physical Description |`,
    )
  }
  if (extra.length) md = md.trimEnd() + '\n' + extra.join('\n') + '\n'
  fs.writeFileSync(file, md, 'utf8')
  console.log('ok', slug)
}
