'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Role = { key: string; label: string }

interface Props {
  roles: Role[]
}

export function RoleToggle({ roles }: Props) {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % roles.length)
  const current = roles[index]
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={next}
      className="rounded bg-gray-200 px-4 py-2 text-sm font-medium dark:bg-gray-800"
      aria-label="toggle role"
    >
      {current?.label ?? 'Role'}
    </motion.button>
  )
}
