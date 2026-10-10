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

  const limited = !parts.description && !parts.dimorphisme
  return { slug, identity, parts, sourceIds: [...sourceIds], limited }
}

/** Retire stats non visuelles (EOO, IUCN, population) pour des prompts plus propres. */
function visualFocus(text) {
  if (!text) return ''
  return text
    .replace(/\bÉvaluée?\b[^.]*\./gi, '')
    .replace(/\bEOO\b[^.]*\./gi, '')
    .replace(/\bpopulation[^.]*\./gi, '')
    .replace(/\btendance[^.]*\./gi, '')
    .replace(/\([^)]*A\d[a-z0-9]*\)/gi, '')
    .replace(/\s*[.;]\s*[.;]+/g, '. ')
    .replace(/^\s*[.;]\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function buildIllustrationPrompt(f) {
  const { identity, parts, limited } = f
  const appearance = visualFocus(parts.description)
  const habitat = visualFocus(parts.habitat)
  const bits = [
    `Naturalist field-guide illustration of ${identity.commonName} (${identity.scientificName}),`,
    `${identity.order}, ${identity.family}.`,
    'Side three-quarter view, clear readable silhouette, soft cream background,',
    'flat illustrative style with bold navy outlines, vivid but accurate plumage,',
    'educational poster look, no photorealism, no text, no watermark, no cage.',
  ]
  if (appearance) bits.push(`Appearance from sources: ${appearance}`)
  if (parts.dimorphisme) bits.push(`Sexual dimorphism note: ${parts.dimorphisme}`)
  if (habitat) bits.push(`Habitat context (subtle, not a landscape scene): ${habitat}`)
  if (limited) {
    bits.push(
      'Limited sourced morphology: keep plumage generic for the named taxon; do not invent subspecies colors.',
    )
  }
  return bits.join(' ')
}

function buildModel3dPrompt(f) {
  const { identity, parts, limited } = f
  const appearance = visualFocus(parts.description)
  const bits = [
    `Realistic 3D bird asset of ${identity.commonName} (${identity.scientificName}),`,
    `${identity.order}, ${identity.family}.`,
    'Single subject, perched pose, clean topology-friendly form, neutral studio background,',
    'photoreal feather textures, accurate proportions, game-ready prop, no base, no text, no watermark.',
  ]
  if (appearance) bits.push(`Morphology from sources: ${appearance}`)
  if (parts.dimorphisme) bits.push(`Dimorphism note: ${parts.dimorphisme}`)
  if (limited) {
    bits.push(
      'Limited sourced morphology: do not invent distinctive color patterns beyond the species name.',
    )
  }
  return bits.join(' ')
}

function renderMarkdown(f) {
  const { slug, identity, parts, sourceIds, limited } = f
  const neg =
    'text, watermark, logo, human, hand, cage, perch label, extra birds, invented subspecies colors, cartoon eyes, blurry, low-res'
  return `# ${identity.commonName}

- **Slug** : \`${slug}\`
- **Latin** : *${identity.scientificName}*
- **Ordre / famille** : ${identity.order} / ${identity.family}
- **Faits limités** : ${limited ? 'oui — ne pas enrichir hors fiche' : 'non'}

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
      `| [\`${facts.slug}\`](${facts.slug}.md) | ${facts.identity.commonName} | ${facts.limited ? 'limité' : 'ok'} |`,
    )
  }

  const index = `# Prompts visuels — index

Généré par \`npm run data:prompts\` — ne pas éditer les fiches espèces à la main.

| Slug | Nom commun | Couverture faits |
|------|------------|------------------|
${rows.join('\n')}

Plan : [plan-prompts-visuels.md](../../projet/plan-prompts-visuels.md).
`

  fs.writeFileSync(path.join(outDir, '_index.md'), index, 'utf8')
  // Keep folder README
  console.log(`OK — ${files.length} prompts → ${path.relative(root, outDir)}`)
}

main()
