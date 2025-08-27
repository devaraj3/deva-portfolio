import { cookies } from 'next/headers'
import { appendItem, createCaseStudy, login } from './actions'

export default function AdminPage() {
  const isAuthed = cookies().get('admin')?.value === 'true'
  if (!isAuthed) {
    return (
      <form action={async (formData) => {
        'use server'
        const password = formData.get('password') as string
        await login(password)
      }} className="mx-auto mt-20 flex max-w-sm flex-col gap-4">
        <input type="password" name="password" placeholder="Password" className="rounded border p-2" />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
          Login
        </button>
      </form>
    )
  }
  return (
    <main className="mx-auto max-w-xl space-y-8 p-6">
      <form
        action={async (formData) => {
          'use server'
          const title = formData.get('title') as string
          const url = formData.get('url') as string
          await appendItem({ title, url })
        }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold">Add Item</h2>
        <input name="title" placeholder="Title" className="rounded border p-2" />
        <input name="url" placeholder="URL" className="rounded border p-2" />
        <button type="submit" className="rounded bg-green-600 px-4 py-2 text-white">
          Save
        </button>
      </form>
      <form
        action={async (formData) => {
          'use server'
          const slug = formData.get('slug') as string
          await createCaseStudy(slug)
        }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold">Create Case Study</h2>
        <input name="slug" placeholder="slug" className="rounded border p-2" />
        <button type="submit" className="rounded bg-purple-600 px-4 py-2 text-white">
          Create
        </button>
      </form>
    </main>
  )
}
