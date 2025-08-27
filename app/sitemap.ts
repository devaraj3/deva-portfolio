import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL || 'https://example.com'
  const pages = ['', '/work', '/case-studies', '/about', '/contact']
  return pages.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }))
}
