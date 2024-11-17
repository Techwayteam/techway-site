"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Testimonial = {
  id: number,
  name: string,
  position: string,
  company: string,
  image: string,
  text: string,
  impact: string
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    position: "CFO",
    company: "TechCorp",
    image: "/techway-site/techway_favicon.ico",
    text: "Com a Techway, automatizamos 80% dos nossos processos financeiros. Hoje, economizamos mais de 15 horas por semana!",
    impact: "Redução de 30% nos custos operacionais"
  },
  {
    id: 2,
    name: "João Santos",
    position: "Gerente de Operações",
    company: "LogisTech",
    image: "/techway-site/techway_favicon.ico",
    text: "As soluções da Techway revolucionaram nossa logística. Reduzimos erros em 60% e aumentamos a eficiência em 40%.",
    impact: "Aumento de 40% na produtividade"
  },
  {
    id: 3,
    name: "Ana Rodrigues",
    position: "CEO",
    company: "StartupX",
    image: "/techway-site/techway_favicon.ico",
    text: "A Techway nos ajudou a escalar rapidamente. Seus dashboards nos dão insights valiosos para tomar decisões ágeis.",
    impact: "Crescimento de 200% em 6 meses"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startRotation = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }
    }, 5000)
  }

  useEffect(() => {
    startRotation()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    startRotation()
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    startRotation()
  }

  const getTestimonialIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length
  }

  return (
    <section id="depoimentos" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Pessoas que otimizaram seus processos
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Conheça alguns dos nossos clientes que desenvolveram soluções conosco e transformaram suas operações. Suas histórias de sucesso são nossa maior recompensa.
        </p>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="w-1/4 opacity-50 transform scale-75 transition-all duration-300 ease-in-out">
              <TestimonialCard testimonial={testimonials[getTestimonialIndex(-1)]} />
            </div>
            <div 
              className="w-1/2 z-10 transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} showImpact />
            </div>
            <div className="w-1/4 opacity-50 transform scale-75 transition-all duration-300 ease-in-out">
              <TestimonialCard testimonial={testimonials[getTestimonialIndex(1)]} />
            </div>
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-colors duration-200"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-colors duration-200"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="text-center mt-12">
          <a href="#contato" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            Quero resultados como esses
          </a>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, showImpact = false }: { testimonial: Testimonial, showImpact?: boolean }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <Image
          src={testimonial.image}
          alt={`Logo da ${testimonial.company}`}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <p className="text-gray-300">{testimonial.position} na {testimonial.company}</p>
        </div>
      </div>
      <p className="text-gray-100 mb-4">{testimonial.text}</p>
      {showImpact && (
          <p className="font-bold text-blue-600">Impacto: {testimonial.impact}</p>
      )}
    </div>
  )
}
