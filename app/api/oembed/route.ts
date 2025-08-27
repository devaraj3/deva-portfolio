import { NextResponse } from 'next/server'

const cache = new Map<string, { html: string; ts: number }>()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')
  if (!url) return NextResponse.json({ error: 'url required' }, { status: 400 })
  const cached = cache.get(url)
  if (cached && Date.now() - cached.ts < 1000 * 60 * 60) {
    return NextResponse.json({ html: cached.html })
  }
  const provider = url.includes('instagram.com')
    ? `https://graph.facebook.com/v8.0/instagram_oembed?omitscript=true&url=${encodeURIComponent(url)}`
    : `https://www.linkedin.com/oembed?omit_script=true&url=${encodeURIComponent(url)}`
  const res = await fetch(provider)
  const data = await res.json()
  cache.set(url, { html: data.html, ts: Date.now() })
  return NextResponse.json({ html: data.html })
}
