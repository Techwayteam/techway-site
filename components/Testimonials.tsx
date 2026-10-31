import Image from "next/image"
import useContactPage from "../hooks/useContactPage"
import WhatsAppLink from "./WhatsAppLink"

const testimonials = [
  {
    name: "Luciene Galdino",
    position: "Cabeleireira",
    company: "Salão Lu Galdino",
    image: "/logo_salao.jpeg",
    text: "A Techway criou uma atendente que é a cara do nosso salão. Ela fica conversando com todas as clientes enquanto faço os atendimentos. Agora, só perco tempo no WhatsApp com quem realmente precisa falar comigo.",
    context: "Na percepção da cliente, o tempo dedicado ao atendimento caiu cerca de 80%.",
  },
  {
    name: "Amanda Oliveira",
    position: "Arquiteta fundadora",
    company: "Studio Criativo Móvi",
    image: "/logo_movi.png",
    text: "Entre meu MEI, meu CLT e meu filho, não sobrava tempo para nada. Agora tenho o atendimento dos clientes do MEI sob controle, mesmo enquanto estou trabalhando no CLT.",
    context: "Relato sobre mais controle do atendimento durante a rotina de trabalho.",
  },
]

export default function Testimonials() {
  const contactPage = useContactPage()

  return (
    <section id="depoimentos" className="scroll-mt-24 bg-gray-950 py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Relatos autorizados</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Atendimento que acompanha a rotina real.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            Experiências pessoais de clientes da Techway. Resultados dependem do contexto e da implantação de cada empresa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex h-full flex-col rounded-2xl border border-gray-700 bg-gray-900 p-7">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={`Logo da ${testimonial.company}`}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <figcaption>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">
                    {testimonial.position} · {testimonial.company}
                  </p>
                </figcaption>
              </div>
              <blockquote className="mt-6 flex-grow text-lg leading-relaxed text-gray-100">
                “{testimonial.text}”
              </blockquote>
              <p className="mt-6 border-t border-gray-700 pt-4 text-sm leading-relaxed text-blue-200">
                {testimonial.context}
              </p>
            </figure>
          ))}
        </div>

        <WhatsAppLink
          message="Olá! Quero entender como a Techway pode ajudar no atendimento da minha empresa."
          page={contactPage}
          cta="depoimentos"
          className="mt-10 inline-flex items-center rounded-lg bg-blue-500 px-6 py-4 font-bold text-white transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
        >
          Conversar sobre meu cenário
        </WhatsAppLink>
      </div>
    </section>
  )
}
