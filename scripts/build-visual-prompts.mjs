/**
 * Génère documentation/ornithologie/prompts-visuels/{slug}.md
 * Prompts EN ; faits uniquement depuis les fiches (zéro invention).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  extractSection,
  parseIdentity,
  parseSourcedSection,
  stripMarkdownLite,
} from './lib/fiche-parse.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const fichesDir = path.join(root, 'documentation/ornithologie/fiches-naturaliste')
const outDir = path.join(root, 'documentation/ornithologie/prompts-visuels')

const SECTION_TITLES = [
  'Description',
  'Dimorphisme sexuel',
  'Habitat d’origine',
  "Habitat d'origine",
]

function loadFicheFacts(filePath) {
  const md = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n')
  const slug = md.match(/\*\*Slug\*\*\s*:\s*`([^`]+)`/)?.[1]
  if (!slug) throw new Error(`Slug manquant: ${filePath}`)
  const identity = parseIdentity(extractSection(md, 'Identité'))

  const parts = {}
  const sourceIds = new Set(['bac-pro-tcva-liste'])
  for (const title of SECTION_TITLES) {
    const sourced = parseSourcedSection(extractSection(md, title))
    if (!sourced) continue
    const key = title.startsWith('Habitat')
      ? 'habitat'
      : title.startsWith('Dimorphisme')
        ? 'dimorphisme'
        : 'description'
    if (!parts[key]) {
      parts[key] = stripMarkdownLite(sourced.text)
      for (const id of sourced.sourceIds) sourceIds.add(id)
    }
  }

  const plumage = [visualSentences(parts.description), visualSentences(parts.dimorphisme)]
    .filter(Boolean)
    .join(' ')
  const limited = !plumage
  return { slug, identity, parts, plumage, sourceIds: [...sourceIds], limited }
}

/** Mots entiers : « vert » ne doit pas matcher « couvert ». */
const VISUAL =
  /\b(verts?|vertes?|bleue?s?|bleut\w*|rouges?|oranges?|jaunes?|jaunât\w*|noire?s?|blancs?|blanches?|grise?s?|gris|roses?|rosé\w*|rosât\w*|bruns?|brunes?|marron|olive|turquoise|violets?|violettes?|pourpre|roux|huppe|collier|masque|gorge|ventre|croupion|calotte|joues?|poitrine|panache|crête|crete|dague|becs?|plumages?|iris|irisations?|corps|tachet\w*|striée?s?)\b/i

const NON_VISUAL_NOTE =
  /^(na\b|non détaill|non décrit|non decrit|sources consultées silencieuses)/i

/** Phrases qui décrivent vraiment le plumage / la morphologie. Le reste (IUCN, aire, commerce) est exclu. */
function visualSentences(text) {
  if (!text) return ''
  const parts = text
    .split(/(?<=[.!;])\s+/)
    .map((s) => s.replace(/\s+/g, ' ').trim())
    .filter((s) => s && !NON_VISUAL_NOTE.test(s) && VISUAL.test(s))
  return parts.join(' ')
}

const COLOR_LOCK =
  'Use only colors explicitly named in the plumage sentence. Do not add any other hue on the bird: no guessed bill, iris, breast, wing, or belly color. Areas without a named color stay the same cream as the background.'

const AVOID =
  'Avoid: text, watermark, logo, human, hand, cage, perch label, extra birds, invented subspecies colors, any color not named in the plumage sentence, cartoon eyes, blurry, low-res, black outlines, dark brown outlines, non-square aspect ratio.'

function buildIllustrationPrompt(f) {
  const { identity, parts, plumage, limited } = f
  if (limited) {
    return [
      `GENERATION BLOCKED for ${identity.commonName} (${identity.scientificName}).`,
      'The species sheet has no sourced plumage or morphology.',
      'Do not generate an illustration. Do not invent colors, bill, crest, or sexual dimorphism.',
    ].join(' ')
  }
  const bits = [
    `Square 1:1 naturalist field-guide illustration of ${identity.commonName} (${identity.scientificName}),`,
    `${identity.order}, ${identity.family}.`,
    'Side three-quarter view, clear readable silhouette, soft cream background,',
    'flat illustrative style, thick navy blue outlines only (color #1b365d, never black).',
    'Educational poster look, no photorealism.',
    `Plumage from sources only: ${plumage}`,
    COLOR_LOCK,
  ]
  if (parts.habitat) {
    bits.push(`Habitat props only (subtle branch or foliage, not a landscape): ${parts.habitat}`)
  }
  bits.push(AVOID)
  return bits.join(' ')
}

function buildModel3dPrompt(f) {
  const { identity, plumage, limited } = f
  if (limited) {
    return [
      `GENERATION BLOCKED for ${identity.commonName} (${identity.scientificName}).`,
      'No sourced plumage on the sheet. Do not generate a 3D model. Do not invent colors.',
    ].join(' ')
  }
  return [
    `Realistic 3D bird asset of ${identity.commonName} (${identity.scientificName}),`,
    `${identity.order}, ${identity.family}.`,
    'Single subject, perched pose, clean topology-friendly form, neutral studio background,',
    'photoreal feather textures, accurate proportions, game-ready prop, no base, no text, no watermark.',
    `Morphology from sources only: ${plumage}`,
    COLOR_LOCK,
  ].join(' ')
}

function renderMarkdown(f) {
  const { slug, identity, parts, sourceIds, limited } = f
  const neg =
    'text, watermark, logo, human, hand, cage, perch label, extra birds, invented subspecies colors, cartoon eyes, blurry, low-res'
  return `# ${identity.commonName}

- **Slug** : \`${slug}\`
- **Latin** : *${identity.scientificName}*
- **Ordre / famille** : ${identity.order} / ${identity.family}
- **Plumage sourcé** : ${limited ? 'non — génération bloquée (ne pas inventer)' : 'oui'}

## Prompt — illustration naturaliste (EN)

\`\`\`
${buildIllustrationPrompt(f)}
\`\`\`

## Prompt — modèle 3D réaliste (EN)

\`\`\`
${buildModel3dPrompt(f)}
\`\`\`

## Garde-fous (negative)

\`${neg}\`

## Faits repris (FR, source fiche)

| Bloc | Contenu |
|------|---------|
| Description | ${parts.description || '_non documenté_'} |
| Dimorphisme | ${parts.dimorphisme || '_non documenté_'} |
| Habitat | ${parts.habitat || '_non documenté_'} |

## Sources

${sourceIds.map((id) => `- \`${id}\``).join('\n')}
`
}

function main() {
  fs.mkdirSync(outDir, { recursive: true })
  const files = fs
    .readdirSync(fichesDir)
    .filter((f) => f.endsWith('.md') && f !== '_index.md')
    .sort()

  const rows = []
  for (const file of files) {
    const facts = loadFicheFacts(path.join(fichesDir, file))
    fs.writeFileSync(path.join(outDir, `${facts.slug}.md`), renderMarkdown(facts), 'utf8')
    rows.push(
      `| [\`${facts.slug}\`](${facts.slug}.md) | ${facts.identity.commonName} | ${facts.limited ? 'bloqué' : 'prêt'} |`,
    )
  }

  const index = `# Prompts visuels — index

Généré par \`npm run data:prompts\` — ne pas éditer les fiches espèces à la main.

| Slug | Nom commun | Illustration |
|------|------------|------------------|
${rows.join('\n')}

Plan : [plan-prompts-visuels.md](../../projet/plan-prompts-visuels.md).
`

  fs.writeFileSync(path.join(outDir, '_index.md'), index, 'utf8')
  // Keep folder README
  console.log(`OK — ${files.length} prompts → ${path.relative(root, outDir)}`)
}

main()
