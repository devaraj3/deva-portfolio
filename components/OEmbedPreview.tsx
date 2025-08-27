'use client'

import { useEffect, useState } from 'react'

export function OEmbedPreview({ url }: { url: string }) {
  const [html, setHtml] = useState<string | null>(null)
  useEffect(() => {
    fetch(`/api/oembed?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => setHtml(data.html))
      .catch(() => setHtml(null))
  }, [url])
  if (!html) return null
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
