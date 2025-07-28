import React from 'react'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  message?: string
}

const PHONE_NUMBER = '5521991673541'

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message = 'Olá! Vi o site de vocês e quero meu novo funcionário digital' }) => {
  const encodedMessage = encodeURIComponent(message)
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

export default WhatsAppButton
