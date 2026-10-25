import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { getContactAttribution, getWhatsAppUrl } from '../data/contact'

type WhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> & {
  message: string
  page: string
  cta: string
  children: ReactNode
}

export default function WhatsAppLink({ message, page, cta, children, ...props }: WhatsAppLinkProps) {
  const attribution = getContactAttribution({ page, cta })

  return (
    <a
      {...props}
      href={getWhatsAppUrl(message, attribution)}
      target="_blank"
      rel="noopener noreferrer"
      data-contact-page={attribution.page}
      data-contact-cta={attribution.cta}
    >
      {children}
    </a>
  )
}
