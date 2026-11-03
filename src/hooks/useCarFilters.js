import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CARS } from '../data/cars'

const KEYS = { q: 'q', brand: 'marca', type: 'tipo', max: 'max', sort: 'ordem' }
const SORTERS = {
  rel: (a, b) => a.id - b.id,
  pa: (a, b) => a.price - b.price,
  pd: (a, b) => b.price - a.price,
  km: (a, b) => a.km - b.km,
}

export function useCarFilters() {
  const [params, setParams] = useSearchParams()
  const filters = {
    q: params.get(KEYS.q) ?? '',
    brand: params.get(KEYS.brand) ?? '',
    type: params.get(KEYS.type) ?? '',
    max: Number(params.get(KEYS.max)) || 0,
    sort: params.get(KEYS.sort) ?? 'rel',
  }

  const cars = useMemo(() => {
    const q = filters.q.toLowerCase()
    return CARS.filter(
      (c) =>
        (!q || `${c.brand} ${c.name}`.toLowerCase().includes(q)) &&
        (!filters.brand || c.brand === filters.brand) &&
        (!filters.type || c.type === filters.type) &&
        (!filters.max || c.price <= filters.max),
    ).sort(SORTERS[filters.sort] ?? SORTERS.rel)
  }, [params])

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params)
    value ? next.set(KEYS[key], value) : next.delete(KEYS[key])
    setParams(next, { replace: true })
  }
  const clear = () => setParams({}, { replace: true })

  return { filters, cars, setFilter, clear }
}
