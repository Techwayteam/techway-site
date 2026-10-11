export const WHATSAPP_PHONE_NUMBER = '5521991673541'

export const getWhatsAppUrl = (message: string): string =>
  `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`
