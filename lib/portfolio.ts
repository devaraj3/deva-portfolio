import fs from 'fs/promises'
import path from 'path'

export interface PortfolioData {
  owner: {
    name: string
    tagline: string
    role_modes: { key: string; label: string }[]
  }
  highlights: Record<string, any>
  segments: Array<any>
}

let cache: PortfolioData | null = null

export async function getPortfolio(): Promise<PortfolioData> {
  if (cache) return cache
  const file = path.join(process.cwd(), 'data', 'portfolio.content.json')
  try {
    const json = await fs.readFile(file, 'utf8')
    cache = JSON.parse(json)
    return cache
  } catch {
    return {
      owner: { name: '', tagline: '', role_modes: [] },
      highlights: {},
      segments: [],
    }
  }
}
