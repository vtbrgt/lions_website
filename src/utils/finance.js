export const DEFAULT_PLAN = { downPct: 0.3, months: 48, rate: 0.0149 } // 1,49% a.m.

export function installment(price, down, months, rate = DEFAULT_PLAN.rate) {
  const pv = price - down
  return pv <= 0 ? 0 : (pv * rate) / (1 - Math.pow(1 + rate, -months))
}

export const defaultDown = (price) => Math.round((price * DEFAULT_PLAN.downPct) / 1000) * 1000
