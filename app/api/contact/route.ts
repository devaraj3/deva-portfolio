import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: Request) {
  const body = await req.json()
  if (resend) {
    await resend.emails.send({
      from: 'portfolio@example.com',
      to: 'you@example.com',
      subject: `New message from ${body.name}`,
      html: `<p>${body.message}</p><p>From: ${body.email}</p>`,
    })
  }
  return NextResponse.json({ ok: true })
}
