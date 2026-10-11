/**
 * Remédiation P0.2 — points de cours : [programme] = taxo uniquement.
 * Réécrit documentation/ornithologie/fiches-naturaliste/*.md puis à suivre : npm run data:birds
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fichesDir = path.resolve(__dirname, '../documentation/ornithologie/fiches-naturaliste')

const NON_PROG =
  /BirdLife|Least Concern|Near Threatened|Vulnerable|Endangered|\bNT\b|\bEN\b|\bVU\b|\bLC\b|EOO|endémique|désert|savane|nomade|migratrice|tendance|aire (plus|très|large|restreinte)|face |\btête |huppe|front |joues|ventre|plumage|mopane|Zambèze|Pacifique|Nouvelle-Calédonie|Tanzanie|Zambie|mallee|animalerie|Paradise-whydah|Premier Passériforme|Audio de référence|Sahel Paradise|\*\*orange\*\*|\*\*rose\*\*|\*\*jaune\*\*|\*\*blanc\*\*|\*\*rouge\*\*|\*\*noire\*\*|\*\*Vulnerable\*\*|\*\*Endangered\*\*|Euodice|Spermestes|Padda|Crithagra|Chloebia|Glaucestrilda|Synoicus|castanotis \(espèce\)/i

/** Overrides complets (≤5 puces) pour cas méta / ambigus. */
const OVERRIDES = {
  'gracula-religiosa': [
    ['programme', 'Mainate religieux ↔ *Gracula religiosa* ; Passériformes ; Sturnidés'],
    ['programme', 'Seul Sturnidé du référentiel — distinct des Cacatuides / Psittacidés'],
    ['sourcé', 'Préoccupation mineure ; tendance en diminution ; noir brillant + caroncules jaunes'],
    ['sourcé', 'Surtout frugivore arboricole ; forêts humides'],
    ['sourcé', 'Connu pour le mimétisme (sons, parole)'],
  ],
  'vidua-orientalis': [
    ['programme', "Veuve à collier d'or ↔ *Vidua orientalis* ; Passériformes ; Viduidés"],
    [
      'programme',
      'Confusion : *V. macroura* (programme) — *V. togoensis* hors programme',
    ],
    ['sourcé', 'Préoccupation mineure ; tendance stable ; forêts et savanes sèches'],
    ['sourcé', 'Non migratrice ; commerce signalé à forte prévalence'],
    ['sourcé', 'BirdLife la distingue explicitement de *V. togoensis*'],
  ],
  'lonchura-striata-domestiqua': [
    [
      'programme',
      'Moineau du Japon ↔ *Lonchura striata domestiqua* ; Passériformes ; Estrildidés',
    ],
    [
      'programme',
      'Forme **domestique** — ne pas confondre avec le capucin domino sauvage (*L. striata*)',
    ],
    [
      'sourcé',
      'Dérivée du taxon sauvage *L. striata* (préoccupation mineure, tendance stable)',
    ],
    ['sourcé', "Pas d'aire sauvage propre : élevage / compagnie"],
    [
      'sourcé',
      'En volière : même espèce biologique que le capucin domino ; chant de référence = forme sauvage',
    ],
  ],
  'amadina-fasciata': [
    [
      'programme',
      'Cou coupé ↔ *Amadina fasciata* ; Passériformes ; Estrildidés',
    ],
    [
      'programme',
      'Estrildidé — distinct des Ploceidae (*Ploceus*, *Euplectes*) du programme',
    ],
    ['sourcé', 'Préoccupation mineure ; tendance stable ; savane sèche (majeur)'],
    ['sourcé', 'Non migrateur ; EOO très vaste (≈ 23,9 M km²)'],
    ['sourcé', 'Commerce d’oiseaux signalé à prévalence élevée (BirdLife)'],
  ],
}

function parsePoints(block) {
  const points = []
  for (const line of block.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')) {
    const m = line.match(/^- \*\*\[(programme|sourcé)\]\*\*\s+(.+)$/)
    if (m) points.push({ level: m[1], text: m[2].trim() })
  }
  return points
}

function stripToTaxo(text) {
  if (/forme\s+\*\*domestique\*\*/i.test(text) && !/BirdLife|Least Concern|Audio/i.test(text)) {
    const head = text.split(/\s+[—–]\s+/)[0].trim()
    const rest = text.includes('—') || text.includes('–')
      ? text.split(/\s+[—–]\s+/).slice(1).join(' — ')
      : ''
    const candidate = rest
      ? `${head} — ${rest.replace(/BirdLife.*/i, '').trim()}`
      : head
    // Prefer full domestic contrast if only taxo
    if (!NON_PROG.test(text.replace(/\*\*domestique\*\*/gi, 'domestique'))) {
      return text
    }
    if (/ne pas confondre|forme/i.test(head)) return text.match(/.+domestique.+$/i)?.[0] || head
  }

  const conf = text.match(/^Confusion\s*:\s*(.+)$/i)
  if (conf) {
    let body = conf[1]
    const dash = body.split(/\s+[—–]\s+/)
    let left = dash[0]
      .replace(/\([^)]*(tête|face|huppe|front|joues|ventre|blanc|noir|orange|rose|jaune|rouge|gris|vert|masque)[^)]*\)/gi, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/\s+\/\s*$/g, '')
      .trim()
    // Drop English / BirdLife crumbs on the left
    left = left
      .replace(/\/\s*combassou/i, '')
      .replace(/BirdLife.*$/i, '')
      .replace(/\s{2,}/g, ' ')
      .trim()
    if (left && !NON_PROG.test(left)) {
      // Add même genre hint if only Latin binomials
      if (/\*[A-Z][a-z]+/.test(left) && !/même genre|même famille|forme|sous-espèce|genre/i.test(left)) {
        return `Confusion : ${left}`
      }
      return `Confusion : ${left}`
    }
  }

  if (/^(Genre|Famille|Sous-espèce|Même genre|Entrée )/i.test(text)) {
    const head = text.split(/\s+[—–]\s+/)[0].trim()
    if (head && !NON_PROG.test(head)) return head
  }

  if (/ne pas confondre/i.test(text) && /Odontophoridés|colins|Neophema|Geopelia/i.test(text)) {
    const head = text.split(/\s+[—–]\s+/)[0].trim()
    if (!NON_PROG.test(head)) return text.length < 120 && !NON_PROG.test(text) ? text : head
  }

  return null
}

function remediatePoints(slug, points) {
  if (OVERRIDES[slug]) {
    return OVERRIDES[slug].map(([level, text]) => ({ level, text }))
  }

  if (!points.length) return points

  const out = []
  const identity = points[0]
  out.push(identity)

  const sourcedExtra = []

  for (let i = 1; i < points.length; i += 1) {
    const p = points[i]
    if (p.level === 'sourcé') {
      sourcedExtra.push(p)
      continue
    }
    // programme beyond identity
    if (!NON_PROG.test(p.text.replace(/\*\*domestique\*\*/gi, 'domestique'))) {
      // Fix graphie Plocéidés → Ploceidae
      const text = p.text.replace(/Plocéidés/g, 'Ploceidae')
      out.push({ level: 'programme', text })
      continue
    }
    const taxo = stripToTaxo(p.text)
    if (taxo && !NON_PROG.test(taxo.replace(/\*\*domestique\*\*/gi, 'domestique'))) {
      out.push({ level: 'programme', text: taxo.replace(/Plocéidés/g, 'Ploceidae') })
      // Remainder after dash → sourcé if meaningful
      const parts = p.text.split(/\s+[—–]\s+/)
      if (parts.length > 1) {
        const rest = parts.slice(1).join(' — ').trim()
        if (rest && rest !== taxo) sourcedExtra.unshift({ level: 'sourcé', text: rest })
      } else if (p.text !== taxo) {
        sourcedExtra.unshift({ level: 'sourcé', text: p.text })
      }
    } else {
      sourcedExtra.unshift({ level: 'sourcé', text: p.text })
    }
  }

  // Cap programme at 2 (identity + 1 contrast)
  const prog = out.filter((p) => p.level === 'programme').slice(0, 2)
  let sourced = sourcedExtra

  // Dedupe similar texts
  const seen = new Set()
  sourced = sourced.filter((p) => {
    const key = p.text.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  const merged = [...prog, ...sourced]
  while (merged.length > 5) {
    // Merge last two sourced
    const last = merged.pop()
    const prev = merged[merged.length - 1]
    if (prev.level === 'sourcé') {
      prev.text = `${prev.text} ; ${last.text}`
    } else {
      merged.push({ level: 'sourcé', text: last.text })
      break
    }
  }

  // Ensure at least identity + something
  return merged.slice(0, 5)
}

function replaceCourseSection(md, points) {
  const lines = points.map((p) => `- **[${p.level}]** ${p.text}`)
  const section = `## Points de cours à retenir

<!-- Aides à la mémorisation (pas un polycopié enseignant). -->

${lines.join('\n')}
`
  return md.replace(
    /## Points de cours à retenir[\s\S]*?(?=\n## )/,
    `${section}\n`,
  )
}

let changed = 0
for (const file of fs.readdirSync(fichesDir).filter((f) => f.endsWith('.md') && f !== '_index.md')) {
  const slug = file.replace(/\.md$/, '')
  const fp = path.join(fichesDir, file)
  const md = fs.readFileSync(fp, 'utf8')
  const m = md.match(/## Points de cours à retenir[\s\S]*?(?=\n## )/)
  if (!m) continue
  const before = parsePoints(m[0])
  const after = remediatePoints(slug, before)
  const beforeKey = before.map((p) => `${p.level}|${p.text}`).join('\n')
  const afterKey = after.map((p) => `${p.level}|${p.text}`).join('\n')
  if (beforeKey === afterKey) continue
  fs.writeFileSync(fp, replaceCourseSection(md, after), 'utf8')
  changed += 1
  console.log(slug)
}

console.log(`Updated ${changed} fiches`)
