import { todayISO } from '../../utils/format'

export function validateVisit(v) {
  const errors = {}
  if (v.name.trim().split(/\s+/).filter(Boolean).length < 2) errors.name = 'Informe nome e sobrenome.'
  if (v.phone.replace(/\D/g, '').length < 10) errors.phone = 'Informe um telefone com DDD.'
  if (!v.carId) errors.carId = 'Escolha um veículo.'
  if (!v.date || v.date < todayISO()) errors.date = 'Escolha uma data a partir de hoje.'
  else if (new Date(`${v.date}T12:00`).getDay() === 0) errors.date = 'A loja não abre aos domingos.'
  if (!v.time) errors.time = 'Escolha um horário.'
  return errors
}
