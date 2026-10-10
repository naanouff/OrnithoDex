/** Convertit une page Commons File:… en URL d’image affichable. */
export function resolveBirdImageUrl(url?: string): string | undefined {
  if (!url) return undefined
  if (/\.(jpe?g|png|webp|gif)(\?|$)/i.test(url) && !url.includes('/wiki/File:')) {
    return url
  }
  const fileMatch = url.match(/\/wiki\/File:(.+)$/i)
  if (fileMatch) {
    const file = decodeURIComponent(fileMatch[1].replace(/_/g, ' '))
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`
  }
  return url
}
