import { Metadata } from 'next'
import Script from 'next/script'
import { getPortfolio } from '../lib/portfolio'
import { RoleToggle } from '../components/RoleToggle'
import { StatsChips } from '../components/StatsChips'

export const metadata: Metadata = {
  openGraph: {
    images: ['/api/og'],
  },
}

export default async function HomePage() {
  const data = await getPortfolio()
  const stats = data.highlights?.social
    ? [
        { label: 'followers', value: data.highlights.social.followers },
        { label: 'impressions', value: data.highlights.social.impressions },
      ]
    : []
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.owner.name,
    url: process.env.SITE_URL || 'https://example.com',
  }
  return (
    <main className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">{data.owner.name}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">{data.owner.tagline}</p>
      {data.owner.role_modes && data.owner.role_modes.length > 0 && (
        <RoleToggle roles={data.owner.role_modes} />
      )}
      {stats.length > 0 && <StatsChips stats={stats} />}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
