export const formatPrice = (v) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

export const formatKm = (v) => `${v.toLocaleString('pt-BR')} km`

export function maskPhone(raw) {
  const d = raw.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  const cut = d.length > 10 ? 7 : 6
  return `(${d.slice(0, 2)}) ${d.slice(2, cut)}-${d.slice(cut)}`
}

export function todayISO() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export const formatLongDate = (iso) =>
  new Date(`${iso}T12:00`).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
