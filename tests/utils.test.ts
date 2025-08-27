import { describe, expect, it } from 'vitest'
import { formatNumber } from '../lib/utils'

describe('formatNumber', () => {
  it('formats numbers with commas', () => {
    expect(formatNumber(12345)).toBe('12,345')
  })
})
