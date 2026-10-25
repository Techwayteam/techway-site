import React from 'react'
import { MessageCircle } from 'lucide-react'
import useContactPage from '../hooks/useContactPage'
import WhatsAppLink from './WhatsAppLink'

interface WhatsAppButtonProps {
  message?: string
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message = 'Olá! Vi o site de vocês e quero meu novo funcionário digital' }) => {
  const contactPage = useContactPage()

  return (
    <WhatsAppLink
      message={message}
      page={contactPage}
      cta="flutuante"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </WhatsAppLink>
  )
}

export default WhatsAppButton
