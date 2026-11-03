import { getConsent } from '../utils/consent'

export async function submitLead(lead) {
  const payload = {
    ...lead,
    page: window.location.hash || '/',
    consent: getConsent(),
    utm: getConsent() === 'accepted' ? Object.fromEntries(new URLSearchParams(window.location.search)) : {},
    createdAt: new Date().toISOString(),
  }
  console.info('[lead]', payload)
  return { ok: true }
}
