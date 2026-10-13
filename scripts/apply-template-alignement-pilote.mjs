/**
 * Sprint alignement template scolaire — Lot A (12 pilotes) + Lot B (22 dimorphismes).
 * N’invente rien : UICN / répartition extraits des faits déjà dans les fiches.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fichesDir = path.resolve(__dirname, '../documentation/ornithologie/fiches-naturaliste')

const UICN_FR = {
  'Least Concern': 'Préoccupation mineure (LC)',
  'Near Threatened': 'Quasi menacé (NT)',
  Vulnerable: 'Vulnérable (VU)',
  Endangered: 'En danger (EN)',
  'Critically Endangered': 'En danger critique (CR)',
}

/** Données dérivées uniquement des descriptions / habitats déjà sourcés. */
const PILOTS = {
  'coturnix-chinensis': {
    uicn: { en: 'Least Concern', year: '2025', source: 'birdlife-synoicus-chinensis' },
    range: {
      regions: 'Asie du Sud-Est, Chine, Australie',
      hemisphere: 'multi',
      note: 'Aire très vaste (BirdLife)',
      source: 'birdlife-synoicus-chinensis',
    },
  },
  'gallus-gallus-domesticus': {
    uicn: {
      en: 'Least Concern',
      year: '2024',
      source: 'birdlife-gallus-gallus',
      noteCat: 'Statut du taxon sauvage *Gallus gallus* (forme domestique hors évaluation propre)',
    },
    range: {
      regions: 'Asie (origine sauvage bankiva)',
      hemisphere: 'AS',
      note: 'Forme domestique mondiale ; origine = coq bankiva',
      source: 'birdlife-gallus-gallus',
    },
  },
  'colinus-virginianus': {
    uicn: { en: 'Near Threatened', year: '2016', source: 'birdlife-colinus-virginianus' },
    range: {
      regions: 'Amérique du Nord',
      hemisphere: 'AM',
      note: 'Population en diminution (BirdLife)',
      source: 'birdlife-colinus-virginianus',
    },
  },
  'callipepla-californica': {
    uicn: { en: 'Least Concern', year: '2021', source: 'birdlife-callipepla-californica' },
    range: {
      regions: 'Amérique du Nord',
      hemisphere: 'AM',
      note: 'Tendance en augmentation (BirdLife)',
      source: 'birdlife-callipepla-californica',
    },
  },
  'aix-galericulata': {
    uicn: { en: 'Least Concern', year: '2018', source: 'birdlife-aix-galericulata' },
    range: {
      regions: 'Asie de l’Est',
      hemisphere: 'AS',
      note: 'Migrateur ; aires natives Asie de l’Est',
      source: 'birdlife-aix-galericulata',
    },
  },
  'aix-sponsa': {
    uicn: { en: 'Least Concern', year: '2021', source: 'birdlife-aix-sponsa' },
    range: {
      regions: 'Amérique du Nord',
      hemisphere: 'AM',
      note: 'Migrateur complet',
      source: 'birdlife-aix-sponsa',
    },
  },
  'geopelia-cuneata': {
    uicn: { en: 'Least Concern', year: '2024', source: 'birdlife-geopelia-cuneata' },
    range: {
      regions: 'Australie',
      hemisphere: 'AU',
      note: 'Endémique nicheur ; statut migratoire : nomade',
      source: 'birdlife-geopelia-cuneata',
    },
  },
  'geopelia-striata': {
    uicn: { en: 'Least Concern', year: '2025', source: 'birdlife-geopelia-striata' },
    range: {
      regions: 'Asie du Sud-Est',
      hemisphere: 'AS',
      note: 'Non migratrice ; largement répandue',
      source: 'birdlife-geopelia-striata',
    },
  },
  'oena-capensis': {
    uicn: { en: 'Least Concern', year: '2024', source: 'birdlife-oena-capensis' },
    range: {
      regions: 'Afrique',
      hemisphere: 'AF',
      note: 'Migrateur complet ; vaste EOO',
      source: 'birdlife-oena-capensis',
    },
  },
  'streptopelia-senegalensis': {
    uicn: { en: 'Least Concern', year: '2018', source: 'birdlife-spilopelia-senegalensis' },
    range: {
      regions: 'Afrique, Asie',
      hemisphere: 'multi',
      note: 'Très vaste EOO (BirdLife)',
      source: 'birdlife-spilopelia-senegalensis',
    },
  },
  'streptopelia-risoria': {
    uicn: {
      en: 'Least Concern',
      year: '2018',
      source: 'birdlife-streptopelia-roseogrisea',
      noteCat: 'Statut du taxon sauvage apparenté *S. roseogrisea*',
    },
    range: {
      regions: 'Afrique (origine sauvage)',
      hemisphere: 'AF',
      note: 'Forme domestique ; répartition sauvage = roseogrisea',
      source: 'birdlife-streptopelia-roseogrisea',
    },
  },
  'columba-livia': {
    uicn: { en: 'Least Concern', year: 'na', source: 'birdlife-columba-livia' },
    range: {
      regions: 'Europe, Afrique, Asie (formes naturelles et férales)',
      hemisphere: 'multi',
      note: 'Tendance globale inconnue (BirdLife)',
      source: 'birdlife-columba-livia',
    },
  },
}

const DIM_NA = [
  'amadina-fasciata',
  'euplectes-orix',
  'geopelia-cuneata',
  'geopelia-striata',
  'gracula-religiosa',
  'lonchura-striata-domestiqua',
  'neophema-elegans',
  'neophema-pulchella',
  'neophema-splendida',
  'oena-capensis',
  'passer-luteus',
  'platycercus-adscitus',
  'platycercus-elegans',
  'platycercus-eximius-eximius',
  'platycercus-icterotis',
  'ploceus-cucullatus',
  'polytelis-alexandrae',
  'polytelis-anthopeplus',
  'psephotus-haematonotus-haematonotus',
  'psittacula-cyanocephala',
  'psittacula-eupatria',
  'streptopelia-senegalensis',
]

function upsertSection(md, title, body, afterTitle) {
  const re = new RegExp(
    `## ${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`,
  )
  const block = `## ${title}\n\n${body.trim()}\n\n`
  if (re.test(md)) return md.replace(re, block)
  if (afterTitle) {
    const afterRe = new RegExp(
      `(## ${afterTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n[\\s\\S]*?)(?=\\n## )`,
    )
    const m = md.match(afterRe)
    if (m) {
      const idx = m.index + m[0].length
      return `${md.slice(0, idx)}\n${block}${md.slice(idx)}`
    }
  }
  return md + '\n' + block
}

function buildUicnBlock(p) {
  const cat = UICN_FR[p.uicn.en] || p.uicn.en
  const year = p.uicn.year || 'na'
  return `| Champ | Valeur | Source |
|-------|--------|--------|
| Catégorie | ${cat} | ${p.uicn.source} |
| Année évaluation | ${year} | ${p.uicn.source} |
`
}

function buildMensurationsNa() {
  return `| Champ | Valeur | Source |
|-------|--------|--------|
| Taille adulte | na | |
| Longévité | na | |
`
}

function buildRangeBlock(r) {
  return `| Champ | Valeur | Source |
|-------|--------|--------|
| Régions / pays | ${r.regions} | ${r.source} |
| Hémisphère / realm | ${r.hemisphere} | ${r.source} |
| Note | ${r.note} | ${r.source} |
`
}

let nPilots = 0
for (const [slug, data] of Object.entries(PILOTS)) {
  const fp = path.join(fichesDir, `${slug}.md`)
  let md = fs.readFileSync(fp, 'utf8').replace(/\r\n/g, '\n')
  md = upsertSection(md, 'Statut UICN', buildUicnBlock(data), 'Description')
  md = upsertSection(md, 'Mensurations', buildMensurationsNa(), 'Statut UICN')
  md = upsertSection(
    md,
    'Répartition sauvage',
    buildRangeBlock(data.range),
    'Habitat d’origine',
  )
  if (!/## Répartition sauvage/.test(md)) {
    md = upsertSection(
      md,
      'Répartition sauvage',
      buildRangeBlock(data.range),
      "Habitat d'origine",
    )
  }
  md = md.replace(
    /\*\*Dernière vérification\*\*\s*:\s*\d{4}-\d{2}-\d{2}/,
    '**Dernière vérification** : 2026-10-13',
  )
  fs.writeFileSync(fp, md.replace(/\n/g, '\r\n'), 'utf8')
  nPilots += 1
  console.log('pilot', slug)
}

let nDim = 0
for (const slug of DIM_NA) {
  const fp = path.join(fichesDir, `${slug}.md`)
  let md = fs.readFileSync(fp, 'utf8').replace(/\r\n/g, '\n')
  const dim = md.match(/## Dimorphisme sexuel\s*\n([\s\S]*?)(?=\n## )/)
  if (!dim) continue
  const body = dim[1].trim()
  const alreadyFilled =
    body.length > 20 &&
    !/non détaillé|non documenté/i.test(body) &&
    /\bmâle\b|\bfemelle\b|sexes semblables|dimorphe|identique/i.test(body)
  if (alreadyFilled) {
    console.log('dim keep', slug)
    continue
  }
  const newDim = `## Dimorphisme sexuel

*Non détaillé dans les sources consultées pour ce sprint.*  
*Sources : na.*

`
  md = md.replace(/## Dimorphisme sexuel\s*\n[\s\S]*?(?=\n## )/, newDim)
  md = md.replace(
    /\*\*Dernière vérification\*\*\s*:\s*\d{4}-\d{2}-\d{2}/,
    '**Dernière vérification** : 2026-10-13',
  )
  fs.writeFileSync(fp, md.replace(/\n/g, '\r\n'), 'utf8')
  nDim += 1
  console.log('dim na', slug)
}

console.log(`Pilots ${nPilots} ; dimorphisme na explicite ${nDim}`)
