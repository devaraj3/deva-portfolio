'use client'

import { useState } from 'react'
import { LinkCard } from './LinkCard'

interface Group {
  label: string
  items: { title: string; url: string }[]
}

interface Segment {
  title: string
  groups: Group[]
}

export function WorkGrid({ segments }: { segments: Segment[] }) {
  const allGroups = segments.flatMap((s) => s.groups)
  const [filter, setFilter] = useState<string>('all')
  const groups = filter === 'all' ? allGroups : allGroups.filter((g) => g.label === filter)
  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button onClick={() => setFilter('all')} className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
          All
        </button>
        {allGroups.map((g) => (
          <button
            key={g.label}
            onClick={() => setFilter(g.label)}
            className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"
          >
            {g.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {groups.map((g) =>
          g.items.map((item) => (
            <LinkCard key={item.url} url={item.url} />
          ))
        )}
      </div>
    </div>
  )
}
