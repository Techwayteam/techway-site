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
  impact: string,
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Luciene Galdino",
    position: "Cabeleireira",
    company: "Salão Lu Galdino",
    image: "/logo_salao.jpeg",
    text: "A techway criou uma atendente que é a cara do nosso salão. Ela fica conversando com todas as clientes, enquanto faço os atendimentos. Agora, só perco tempo no whatsapp com quem realmente precisa falar comigo.",
    impact: "Redução de 80% de tempo nos atendimentos."
  },
  {
    id: 2,
    name: "Amanda Oliveira",
    position: "Arquiteta Fundadora",
    company: "Studio Criativo Móvi",
    image: "/logo_movi.png",
    text: "Entre meu MEI, meu CLT e meu filho, não sobrava tempo para nada. Agora tenho o atendimento dos clientes do MEI sob controle, mesmo enquanto estou trabalhando no CLT, garantindo até follow-up sobre propostas enviadas.",
    impact: "Total controle do processo comercial"
  },
  {
    id: 3,
    name: "Aqui pode ser você!",
    position: "CEO",
    company: "sua própria empresa",
    image: "/logo_placeholder.png",
    text: "Já imaginou ter mais tempo, menos estresse e clientes sendo atendidos até quando você tá dormindo? A automação certa transforma o jogo — e você só precisa dar o primeiro passo.",
    impact: "Essa decisão vai potencializar o seu negócio!"
  }
];

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
    <section id="depoimentos" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Pessoas que otimizaram seus processos
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Conheça alguns dos nossos clientes que desenvolveram soluções conosco e transformaram suas operações. Suas histórias de sucesso são nossa maior recompensa.
        </p>
        <div className="relative w-full mx-auto px-0 overflow-hidden">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden md:block w-[30%] transform scale-75 opacity-30 transition-all duration-300 ease-in-out -ml-10">
              <TestimonialCard testimonial={testimonials[getTestimonialIndex(-1)]} />
            </div>
            <div
              className="w-full md:w-[40%] z-10 transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} showImpact />
            </div>
            <div className="hidden md:block w-[30%] transform scale-75 opacity-30 transition-all duration-300 ease-in-out -mr-10">
              <TestimonialCard testimonial={testimonials[getTestimonialIndex(1)]} />
            </div>
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-[25%] top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-colors duration-200 z-20"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-[25%] top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-colors duration-200 z-20"
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
          <p className="text-gray-300">{testimonial.position} em {testimonial.company}</p>
        </div>
      </div>
      <p className="text-gray-100 mb-4 text-center md:text-left">{testimonial.text}</p>
      {showImpact && (
          <p className="font-bold text-blue-500">Impacto: {testimonial.impact}</p>
      )}
    </div>
  )
}
