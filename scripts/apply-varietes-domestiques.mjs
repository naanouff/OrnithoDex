/**
 * Case « Variétés domestiques » : paraphrase de l’annexe oiseaux
 * de l’arrêté du 11 août 2006. Relevé : documentation/ornithologie/cours/README.md
 * Ne pas relancer pour réécrire une phrase déjà posée.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const fichesDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../documentation/ornithologie/fiches-naturaliste',
)

const ABSENT =
  'Non cité dans l’annexe oiseaux de l’arrêté du 11 août 2006.'

const phrases = {
  'coturnix-chinensis':
    'Variétés domestiques de la caille peinte de Chine (Coturnix chinensis).',
  'gallus-gallus-domesticus':
    'Races et variétés domestiques du coq bankiva (Gallus gallus). Le programme nomme Gallus gallus domesticus.',
  'columba-livia':
    'Races et variétés domestiques du pigeon biset (Columba livia).',
  'streptopelia-risoria':
    'Variétés domestiques constituant la tourterelle domestique ou tourterelle rieuse (Streptopelia « risoria »), de la tourterelle rose et grise (Streptopelia roseogrisea).',
  'geopelia-cuneata':
    'Variétés domestiques de la colombe diamant (Geopelia cuneata).',
  'melopsittacus-undulatus':
    'Variétés domestiques de la perruche ondulée (Melopsittacus undulatus).',
  'agapornis-roseicollis':
    'Variétés domestiques de l’inséparable à face rose. L’annexe écrit Agapornis roseicolis.',
  'agapornis-fischeri':
    'Variétés domestiques de l’inséparable de Fischer (Agapornis fischeri).',
  'agapornis-personatus':
    'Variétés domestiques de l’inséparable masqué ou à tête noire (Agapornis personatus).',
  'psittacula-krameri-manillensis':
    'Variétés domestiques de la perruche à collier d’Asie (Psittacula krameri manillensis).',
  'nymphicus-hollandicus':
    'Variétés domestiques de la perruche calopsitte (Nymphicus hollandicus).',
  'lonchura-striata-domestiqua':
    'Variétés domestiques constituant le moineau du Japon, écrites Lonchura « domestica », du domino (Lonchura striata). L’identité programme reste Lonchura striata domestiqua.',
  'taeniopygia-guttata-castanotis':
    'Variétés domestiques du diamant mandarin (Taeniopygia guttata castanotis).',
  'erythrura-gouldiae':
    'Variétés domestiques du diamant de Gould. L’annexe écrit Eryhrura gouldiae.',
  'serinus-canaria':
    'Races et variétés domestiques, dites « canaris », du serin des Canaries (Serinus canaria).',
  'aix-sponsa': 'Variétés blonde et blanche du canard carolin (Aix sponsa).',
  'aix-galericulata':
    'Variété blanche du canard mandarin (Aix galericulata).',
  'platycercus-eximius-eximius':
    'Variétés pastel, cinnamon, lutino et opaline de la perruche omnicolore (Platycercus eximius eximius).',
  'platycercus-elegans':
    'Variétés bleue, jaune et cinnamon de la perruche de Pennant (Platycercus elegans).',
  'platycercus-adscitus':
    'Variété cinnamon de la perruche palliceps (Platycercus adscitus).',
  'psephotus-haematonotus-haematonotus':
    'Variétés cinnamon, lutino, vert de mer et opaline de la perruche à croupion rouge (Psephotus haematonotus haematonotus).',
  'cyanoramphus-novaezelandiae':
    'Variétés cinnamon, panaché, jaune aux yeux noirs, lutino et ailes en dentelles (lacewing) de la sous-espèce Cyanoramphus novaezelandiae novaezelandiae. L’annexe ne vise pas l’espèce entière du programme.',
  'cyanoramphus-auriceps':
    'Variétés cinnamon, panaché, lutino et ailes en dentelles (lacewing) du kakariki à front jaune (Cyanoramphus auriceps).',
  'neopsephotus-bourkii':
    'Variétés opaline (rose), jaune, fallow, ino et isabelle de la perruche de Bourke (Neopsephotus bourkii).',
  'neophema-elegans':
    'Variétés foncée, lutino, panaché et cinnamon de la perruche élégante (Neophema elegans).',
  'neophema-pulchella':
    'Variétés foncée, ventre rouge, poitrine et ventre rouges, jaune, opaline et grise de la perruche d’Edwards ou turquoisine (Neophema pulchella).',
  'neophema-splendida':
    'Variétés bleu de mer, bleue à poitrine blanche, ino, ventre rouge, cinnamon et grise de la perruche splendide (Neophema splendida).',
  'agapornis-lilianae':
    'Variété lutino de l’inséparable de Liliane (Agapornis lilianae).',
  'agapornis-nigrigenis':
    'Variétés foncée, bleue et violet de l’inséparable nigrigenis (Agapornis nigrigenis).',
  'psittacula-cyanocephala':
    'Variétés foncée et panachée de la perruche tête de prune (Psittacula cyanocephala).',
  'psittacula-eupatria':
    'Variétés grise, lutino et albino de la perruche grande alexandre (Psittacula eupatria).',
  'myiopsitta-monachus-monachus':
    'Variétés bleue, lutino et albino de la perruche souris (Myiopsitta monachus monachus).',
  'bolborhynchus-lineola-lineola':
    'Variétés vert foncé, bleue, foncé bleue, lutino et albino de la perruche rayée ou perruche catherine (Bolborhynchus lineola lineola).',
  'polytelis-alexandrae':
    'Variétés bleue, lutino et albino (bleue et lutino) de la perruche à calotte bleue ou perruche princesse de Galles (Polytelis alexandrae).',
  'forpus-coelestis':
    'Variétés bleue, fallow, lutino, albino et cinnamon de la perruche céleste (Forpus coelestis).',
  'pyrrhura-molinae':
    'Variétés bleue et cinnamon de la conure de Molina (Pyrrhura molinae).',
  'neochmia-modesta':
    'Variétés brune et isabelle du diamant modeste. L’annexe écrit Neochemia modesta.',
  'stagonopleura-guttata':
    'Variétés brune, à bec jaune, pastel et argenté du diamant à gouttelettes (Stagonopleura guttata). L’annexe écrit « goutelettes ».',
  'neochmia-ruficauda':
    'Variétés à masque jaune et pastel du diamant à queue rousse (Neochmia ruficauda).',
  'poephila-acuticauda':
    'Variétés brune, isabelle et crème ino du diamant à longue queue (Poephila acuticauda).',
  'erythrura-trichroa':
    'Variété lutino du diamant de Kittlitz (Erythrura trichroa).',
  'erythrura-psittacea':
    'Variété bleue du pape de Nouméa (Erythrura psittacea).',
  'lonchura-malabarica':
    'Variétés brune, opale et grise du bec de plomb (Lonchura malabarica).',
  'lonchura-cantans':
    'Variétés brune, pastel, ventre noir et crème ino du bec d’argent (Lonchura cantans).',
  'lonchura-oryzivora':
    'Variétés blanche, brune, opale et pastel du padda ou calfat (Lonchura oryzivora).',
  'amadina-fasciata':
    'Variétés blanche, brune et collier jaune du cou-coupé (Amadina fasciata).',
  'lonchura-striata':
    'Lonchura striata n’est cité que comme parent (domino) des variétés domestiques qui constituent le moineau du Japon (Lonchura « domestica »).',
}

for (const slug of [
  'colinus-virginianus',
  'callipepla-californica',
  'geopelia-striata',
  'oena-capensis',
  'streptopelia-senegalensis',
  'amazona-aestiva',
  'platycercus-icterotis',
  'poicephalus-senegalus',
  'polytelis-anthopeplus',
  'psittacus-erithacus',
  'eolophus-roseicapilla',
  'cacatua-alba',
  'cacatua-galerita',
  'gracula-religiosa',
  'passer-luteus',
  'ploceus-cucullatus',
  'euplectes-orix',
  'amandava-amandava',
  'amandava-subflava',
  'estrilda-astrild',
  'estrilda-caerulescens',
  'estrilda-melpoda',
  'estrilda-troglodytes',
  'lagonosticta-senegala',
  'lagonosticta-larvata-vinacea',
  'lonchura-malacca-malacca',
  'lonchura-malacca-atricapilla',
  'lonchura-cucullata',
  'lonchura-maja',
  'lonchura-punctulata',
  'taeniopygia-bichenovii',
  'uraeginthus-bengalus',
  'uraeginthus-cyanocephalus',
  'vidua-chalybeata',
  'vidua-macroura',
  'vidua-orientalis',
  'serinus-leucopygius',
  'serinus-mozambicus',
]) {
  phrases[slug] = ABSENT
}

const files = fs
  .readdirSync(fichesDir)
  .filter((name) => name.endsWith('.md') && !name.startsWith('_'))
const slugs = files.map((name) => name.replace(/\.md$/, ''))
const missing = slugs.filter((slug) => !phrases[slug])
const extra = Object.keys(phrases).filter((slug) => !slugs.includes(slug))
if (missing.length || extra.length || Object.keys(phrases).length !== 85) {
  console.error({ missing, extra, count: Object.keys(phrases).length })
  process.exit(1)
}

const sourceRow =
  '| arrete-11-aout-2006 | Arrêté du 11 août 2006 fixant la liste des animaux domestiques (NOR DEVN0650509A) | Journal officiel | 2006 | | Annexe oiseaux, 7 octobre 2006 |\n'

let written = 0
for (const slug of slugs) {
  const file = path.join(fichesDir, `${slug}.md`)
  let md = fs.readFileSync(file, 'utf8')
  if (md.includes('## Variétés domestiques')) continue
  const anchor = '## Alimentation en captivité'
  if (!md.includes(anchor)) {
    console.error(`ancre absente : ${slug}`)
    process.exit(1)
  }
  const block = `## Variétés domestiques\n\n${phrases[slug]}  \n*Source : arrete-11-aout-2006.*\n\n`
  md = md.replace(anchor, `${block}${anchor}`)
  if (!md.includes('| arrete-11-aout-2006 |')) {
    if (!md.endsWith('\n')) md += '\n'
    md += sourceRow
  }
  fs.writeFileSync(file, md)
  written += 1
}

console.log(`variétés domestiques : ${written} fiches`)
