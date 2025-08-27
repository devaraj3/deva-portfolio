import { formatNumber } from '../lib/utils'

type Stat = { label: string; value: number; suffix?: string }
interface Props {
  stats: Stat[]
}

export function StatsChips({ stats }: Props) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="statistics">
      {stats.map((s) => (
        <li key={s.label} className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
          <span className="font-semibold">{formatNumber(s.value)}</span>
          {s.suffix && <span className="ml-1">{s.suffix}</span>} {s.label}
        </li>
      ))}
    </ul>
  )
}
