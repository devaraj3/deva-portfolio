import { getPortfolio } from '../../lib/portfolio'
import { WorkGrid } from '../../components/WorkGrid'

export default async function WorkPage() {
  const data = await getPortfolio()
  return (
    <main className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">Work</h1>
      <WorkGrid segments={data.segments || []} />
    </main>
  )
}
