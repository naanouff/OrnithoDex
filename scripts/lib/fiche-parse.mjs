/** Parsing partagé fiches naturaliste → prompts / birds. */

export function splitTableRows(block) {
  return block
    .split('\n')
    .map((l) => l.trim())
    .filter(
      (l) =>
        l.startsWith('|') &&
        !/^\|\s*-+/.test(l) &&
        !/^\|\s*Champ\s*\|/i.test(l) &&
        !/^\|\s*Type\s*\|/i.test(l) &&
        !/^\|\s*Id\s*\|/i.test(l),
    )
}

export function cells(line) {
  return line
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim())
}

export function extractSection(md, title) {
  const re = new RegExp(
    `## ${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`,
  )
  const m = md.match(re)
  return m ? m[1].trim() : ''
}

export function parseIdentity(block) {
  const map = {}
  for (const line of splitTableRows(block)) {
    const [champ, valeur] = cells(line)
    if (!champ || valeur === undefined) continue
    map[champ] = valeur
  }
  const scientificName =
    map['Nom scientifique (programme)'] || map['Nom scientifique'] || ''
  return {
    scientificName,
    commonName: map['Nom commun'] || '',
    order: map['Ordre'] || '',
    family: map['Famille'] || '',
  }
}

export function parseSourcedSection(body) {
  if (!body) return null
  const sourceLine = body.match(/\*Sources? : ([^*]+)\.\*/)
  let text = body
  if (sourceLine) {
    text = body.slice(0, sourceLine.index).trim()
  }
  text = text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim()
  if (!text || /^na\b/i.test(text) || text === '—' || text === '-') {
    return null
  }
  const sourceIds = []
  if (sourceLine) {
    for (const part of sourceLine[1].split(/[;,]|\bet\b/)) {
      const id = part.trim().replace(/\.$/, '')
      if (id && id !== 'na') sourceIds.push(id)
    }
  }
  return { text, sourceIds }
}

export function stripMarkdownLite(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Toponymes / régions reconnus (liste contrôlée — pas d’invention hors mentions texte). */
export const PLACE_MARKERS = [
  { re: /\bTanzanie\b/i, label: 'Tanzanie', hemisphere: 'AF' },
  { re: /\bAfrique\b/i, label: 'Afrique', hemisphere: 'AF' },
  { re: /\bAfrique du Sud\b/i, label: 'Afrique du Sud', hemisphere: 'AF' },
  { re: /\bMadagascar\b/i, label: 'Madagascar', hemisphere: 'AF' },
  { re: /\bSénégal\b/i, label: 'Sénégal', hemisphere: 'AF' },
  { re: /\bÉthiopie\b|\bEthiopie\b/i, label: 'Éthiopie', hemisphere: 'AF' },
  { re: /\bNamibie\b/i, label: 'Namibie', hemisphere: 'AF' },
  { re: /\bAngola\b/i, label: 'Angola', hemisphere: 'AF' },
  { re: /\bAustralie\b/i, label: 'Australie', hemisphere: 'AU' },
  { re: /\bNouvelle[- ]Zélande\b/i, label: 'Nouvelle-Zélande', hemisphere: 'AU' },
  { re: /\bIndonésie\b/i, label: 'Indonésie', hemisphere: 'AS' },
  { re: /\bInde\b/i, label: 'Inde', hemisphere: 'AS' },
  { re: /\bChine\b/i, label: 'Chine', hemisphere: 'AS' },
  { re: /\bAsie\b/i, label: 'Asie', hemisphere: 'AS' },
  { re: /\bAsie du Sud[- ]Est\b/i, label: 'Asie du Sud-Est', hemisphere: 'AS' },
  { re: /\bAsie de l’Est\b|\bAsie de l'Est\b/i, label: 'Asie de l’Est', hemisphere: 'AS' },
  { re: /\bJapon\b/i, label: 'Japon', hemisphere: 'AS' },
  { re: /\bPhilippines\b/i, label: 'Philippines', hemisphere: 'AS' },
  { re: /\bMalaisie\b/i, label: 'Malaisie', hemisphere: 'AS' },
  { re: /\bThaïlande\b|\bThailande\b/i, label: 'Thaïlande', hemisphere: 'AS' },
  { re: /\bAmérique du Sud\b/i, label: 'Amérique du Sud', hemisphere: 'AM' },
  { re: /\bAmérique du Nord\b/i, label: 'Amérique du Nord', hemisphere: 'AM' },
  { re: /\bAmérique centrale\b/i, label: 'Amérique centrale', hemisphere: 'AM' },
  { re: /\bBrésil\b|\bBresil\b/i, label: 'Brésil', hemisphere: 'AM' },
  { re: /\bMexique\b/i, label: 'Mexique', hemisphere: 'AM' },
  { re: /\bÉtats[- ]Unis\b|\bEtats[- ]Unis\b/i, label: 'États-Unis', hemisphere: 'AM' },
  { re: /\bCanada\b/i, label: 'Canada', hemisphere: 'AM' },
  { re: /\bAmazonie\b/i, label: 'Amazonie', hemisphere: 'AM' },
  { re: /\bEurope\b/i, label: 'Europe', hemisphere: 'EU' },
  { re: /\bMéditerranée\b|\bMediterranee\b/i, label: 'Méditerranée', hemisphere: 'EU' },
  { re: /\bNouvelle[- ]Guinée\b|\bNouvelle[- ]Guinee\b/i, label: 'Nouvelle-Guinée', hemisphere: 'AU' },
]

export function extractWildRange(texts, sourceIds) {
  const regions = []
  const hemispheres = new Set()
  const joined = texts.join(' \n ')
  for (const marker of PLACE_MARKERS) {
    if (marker.re.test(joined) && !regions.includes(marker.label)) {
      regions.push(marker.label)
      hemispheres.add(marker.hemisphere)
    }
  }
  if (!regions.length) return undefined

  let hemisphere
  if (hemispheres.size === 1) hemisphere = [...hemispheres][0]
  else if (hemispheres.size > 1) hemisphere = 'multi'

  return {
    regions,
    ...(hemisphere ? { hemisphere } : {}),
    sourceIds: [...new Set(sourceIds.filter(Boolean))],
  }
}
