import { STORE_PHONE } from '../data/store'

export const whatsappLink = (message) => `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(message)}`
