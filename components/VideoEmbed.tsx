'use client'

interface Props {
  url: string
  type?: 'youtube' | 'hls'
}

export function VideoEmbed({ url, type = 'youtube' }: Props) {
  if (type === 'youtube') {
    const id = url.split('v=')[1] || url.split('/').pop()
    return (
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allowFullScreen
      />
    )
  }
  return (
    <video controls className="aspect-video w-full">
      <source src={url} />
    </video>
  )
}
