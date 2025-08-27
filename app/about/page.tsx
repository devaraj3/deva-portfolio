import { getPortfolio } from '../../lib/portfolio'

export default async function AboutPage() {
  const data = await getPortfolio()
  return (
    <main className="prose dark:prose-invert mx-auto p-6">
      <h1>About</h1>
      <p>{data.owner.tagline}</p>
    </main>
  )
}
