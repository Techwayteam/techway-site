import contact from './contact.json'

export const WHATSAPP_PHONE_NUMBER = contact.whatsappPhoneNumber

export type ContactAttribution = {
  page: string
  cta: string
}

const normalizeContactCode = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9/-]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^[-/]+|[-/]+$/g, '')
    .slice(0, 100) || 'desconhecida'

export const getContactPage = (asPath: string): string => {
  const url = new URL(asPath || '/', 'https://techway.one')
  const path = url.pathname.replace(/\/+$/, '') || '/'

  if (path === '/') return 'home'
  if (path === '/din_page') {
    return url.searchParams.get('variant') === 'improvisation'
      ? 'landing-improvisation'
      : 'landing-default'
  }

  return normalizeContactCode(path)
}

export const getContactAttribution = ({ page, cta }: ContactAttribution): ContactAttribution => ({
  page: normalizeContactCode(page),
  cta: normalizeContactCode(cta),
})

export const getAttributedWhatsAppMessage = (
  message: string,
  attribution?: ContactAttribution,
): string => {
  const cleanMessage = message.trim()
  if (!attribution) return cleanMessage

  const { page, cta } = getContactAttribution(attribution)
  return `${cleanMessage}\n\nOrigem: ${page} | CTA: ${cta}`
}

export const getWhatsAppUrl = (message: string, attribution?: ContactAttribution): string =>
  `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(getAttributedWhatsAppMessage(message, attribution))}`
