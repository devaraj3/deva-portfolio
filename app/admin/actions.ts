'use server'

import fs from 'fs/promises'
import path from 'path'
import { cookies } from 'next/headers'

const ADMIN_COOKIE = 'admin'

export async function login(password: string) {
  if (password === process.env.ADMIN_PASSWORD) {
    cookies().set(ADMIN_COOKIE, 'true')
  }
}

export async function appendItem(item: any) {
  const file = path.join(process.cwd(), 'data', 'portfolio.content.json')
  const data = JSON.parse(await fs.readFile(file, 'utf8'))
  data.segments.push(item)
  await fs.writeFile(file, JSON.stringify(data, null, 2))
}

export async function createCaseStudy(slug: string) {
  const dir = path.join(process.cwd(), 'content', 'case-studies')
  await fs.mkdir(dir, { recursive: true })
  const file = path.join(dir, `${slug}.mdx`)
  await fs.writeFile(file, `# ${slug}\n`)
}
