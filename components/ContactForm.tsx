'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSent(true)
    form.reset()
  }
  if (sent) return <p>Thanks for your message!</p>
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="contact form">
      <input required name="name" placeholder="Name" className="rounded border p-2" />
      <input required type="email" name="email" placeholder="Email" className="rounded border p-2" />
      <textarea required name="message" placeholder="Message" className="rounded border p-2" />
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
        Send
      </button>
    </form>
  )
}
