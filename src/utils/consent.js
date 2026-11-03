const KEY = 'lions-cookie-consent' // 'accepted' | 'rejected' | null (ainda não respondeu)

export const getConsent = () => {
  try { return localStorage.getItem(KEY) } catch { return null }
}

export const setConsent = (value) => {
  try { localStorage.setItem(KEY, value) } catch { /* modo privado: segue sem persistir */ }
}
