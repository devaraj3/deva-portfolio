import { motion } from 'framer-motion'

interface Props {
  url: string
}

async function getMeta(url: string) {
  const res = await fetch(url, { cache: 'no-cache' })
  const html = await res.text()
  const title = /<meta property="og:title" content="(.*?)"/i.exec(html)?.[1] ?? url
  const image = /<meta property="og:image" content="(.*?)"/i.exec(html)?.[1]
  return { title, image }
}

export async function LinkCard({ url }: Props) {
  const meta = await getMeta(url)
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      {meta.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={meta.image} alt="" className="h-48 w-full object-cover" />
      )}
      <div className="p-4 font-medium">{meta.title}</div>
    </motion.a>
  )
}
