import fs from 'fs/promises'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content', 'case-studies')
  const files = await fs.readdir(dir)
  return files.filter((f) => f.endsWith('.mdx')).map((f) => ({ slug: f.replace(/\.mdx$/, '') }))
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const file = path.join(process.cwd(), 'content', 'case-studies', `${params.slug}.mdx`)
  const source = await fs.readFile(file, 'utf8')
  return (
    <article className="prose dark:prose-invert mx-auto p-6">
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={source} />
    </article>
  )
}
