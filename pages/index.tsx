import type React from "react"
import Head from "next/head"
import { ArrowRight, CalendarClock, Check, MessageCircle, UserRound } from "lucide-react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Testimonials from "../components/Testimonials"
import WhatsAppLink from "../components/WhatsAppLink"
import useContactPage from "../hooks/useContactPage"
import { absoluteUrl } from "../lib/seo"

const SITE_DESCRIPTION =
  "Atendimento com IA no WhatsApp para pequenos negócios responderem dúvidas, organizarem pedidos iniciais e continuarem cada conversa com contexto."

const LandingConversao: React.FC = () => {
  const contactPage = useContactPage()

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Head>
        <title>Atendimento com IA no WhatsApp | TECHWAY</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={absoluteUrl("/")} />
        <link rel="icon" href="/techway_favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="atendimento com IA, WhatsApp para empresas, funcionário digital, automação de atendimento"
        />
        <meta name="author" content="Techway Team" />
        <meta property="og:title" content="Atendimento com IA no WhatsApp | TECHWAY" />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="https://techway.one/og-techway.jpg" />
        <meta property="og:url" content={absoluteUrl("/")} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atendimento com IA no WhatsApp | TECHWAY" />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content="https://techway.one/og-techway.jpg" />
        <meta name="robots" content="index, follow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main className="flex-grow pt-16">
        <section id="hero" className="bg-gray-950 text-white">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                Atendimento com IA no WhatsApp
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Seus clientes recebem resposta. Você mantém o controle.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                A Techway configura um funcionário digital para responder dúvidas,
                coletar as primeiras informações e manter o contexto da conversa no
                WhatsApp do seu negócio.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsAppLink
                  message="Olá! Quero conversar sobre o atendimento no WhatsApp da minha empresa."
                  page={contactPage}
                  cta="hero"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                >
                  Conversar sobre meu atendimento
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </WhatsAppLink>
                <a
                  href="#exemplo"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-4 font-semibold text-white transition hover:border-blue-300 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                >
                  Ver um exemplo
                </a>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-400">
                A conversa abre no WhatsApp. Nenhuma mensagem é enviada sem você confirmar.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-2xl md:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
                Para negócios que atendem pelo WhatsApp
              </p>
              <ul className="mt-6 space-y-5" aria-label="Capacidades disponíveis">
                {[
                  "Responde dúvidas com as informações aprovadas pela sua empresa",
                  "Coleta os dados iniciais para entender o pedido",
                  "Mantém o contexto ao longo da conversa",
                  "Passa o atendimento para uma pessoa quando necessário",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-200">
                    <Check className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="solucoes" className="scroll-mt-24 bg-gray-50 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                O que muda no dia a dia
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Menos interrupção para você. Mais continuidade para o cliente.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                A primeira implantação começa por tarefas delimitadas. A Techway configura
                as informações, os limites e a participação humana de acordo com a realidade
                da empresa.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Dúvidas frequentes",
                  text: "O cliente pergunta sobre serviços, funcionamento e orientações. O atendimento usa somente o conteúdo aprovado pela empresa.",
                },
                {
                  title: "Pedido inicial organizado",
                  text: "O funcionário digital coleta as informações combinadas para que o pedido chegue mais claro à próxima etapa.",
                },
                {
                  title: "Conversa com contexto",
                  text: "Perguntas relacionadas continuam dentro do assunto já informado, sem obrigar o cliente a recomeçar a conversa.",
                },
                {
                  title: "Continuidade humana",
                  text: "Quando o assunto sair do escopo ou precisar de decisão, uma pessoa pode assumir pelo procedimento definido na implantação.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="exemplo"
          tabIndex={-1}
          aria-labelledby="exemplo-titulo"
          className="scroll-mt-24 bg-white py-20 outline-none md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Exemplo fictício
              </p>
              <h2 id="exemplo-titulo" className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Uma dúvida simples não precisa esperar você parar tudo.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Neste exemplo ilustrativo, as respostas foram configuradas com informações
                fornecidas pelo próprio negócio. Não há agendamento confirmado nem ação
                externa simulada.
              </p>
              <WhatsAppLink
                message="Olá! Quero entender como um atendimento assim funcionaria na minha empresa."
                page={contactPage}
                cta="exemplo"
                className="mt-8 inline-flex items-center rounded-lg bg-gray-950 px-6 py-4 font-bold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                Quero ver isso no meu negócio
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </WhatsAppLink>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-100 p-4 shadow-xl sm:p-7">
              <div className="mb-5 flex items-center gap-3 border-b border-gray-200 pb-4">
                <div className="rounded-full bg-blue-600 p-2 text-white">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-gray-950">Atendimento do Salão Exemplo</p>
                  <p className="text-sm text-gray-500">Conversa ilustrativa</p>
                </div>
              </div>
              <ol className="space-y-4" aria-label="Exemplo fictício de conversa no WhatsApp">
                <li className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-blue-600 px-4 py-3 text-white">
                  Oi! Vocês fazem hidratação para cabelo cacheado?
                </li>
                <li className="max-w-[90%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-gray-800 shadow-sm">
                  Fazemos, sim. O salão oferece hidratação e reconstrução para diferentes
                  tipos de curvatura. Você quer conhecer as opções ou já sabe qual tratamento procura?
                </li>
                <li className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-blue-600 px-4 py-3 text-white">
                  Ainda não sei. Meu cabelo está bem ressecado.
                </li>
                <li className="max-w-[90%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-gray-800 shadow-sm">
                  Posso anotar essa informação para a equipe orientar você. Prefere continuar
                  por aqui com uma pessoa?
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-24 bg-gray-950 py-20 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                Implantação em conjunto
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Começamos pequeno, testamos e evoluímos com o negócio.
              </h2>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "1",
                  title: "Entender",
                  text: "Escolhemos a primeira tarefa, as informações necessárias e quando uma pessoa deve assumir.",
                },
                {
                  number: "2",
                  title: "Configurar e testar",
                  text: "Ajustamos respostas, tom, coleta inicial, contexto e limites com exemplos reais da operação.",
                },
                {
                  number: "3",
                  title: "Colocar em uso e evoluir",
                  text: "Escopo, valor e possíveis integrações ficam claros na proposta. Depois, a consultoria acompanha a evolução.",
                },
              ].map((step) => (
                <li key={step.number} className="rounded-2xl border border-gray-700 bg-gray-900 p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-300">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="limites" className="scroll-mt-24 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Limites claros
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                O atendimento sabe o que fazer — e quando precisa de alguém.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Não vendemos uma automação genérica que promete fazer tudo. Cada implantação
                define fontes, tarefas, exceções e responsáveis.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-7">
                <MessageCircle className="h-7 w-7 text-green-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-gray-950">Disponível agora</h3>
                <p className="mt-3 leading-relaxed text-gray-700">
                  Dúvidas, coleta inicial, contexto da conversa e continuidade com uma pessoa.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
                <CalendarClock className="h-7 w-7 text-amber-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-gray-950">Em desenvolvimento</h3>
                <p className="mt-3 leading-relaxed text-gray-700">
                  Agendamentos pelo WhatsApp, sujeitos ao fluxo e à integração de cada empresa.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-300 bg-gray-50 p-7">
                <UserRound className="h-7 w-7 text-gray-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-gray-950">Fora da oferta atual</h3>
                <p className="mt-3 leading-relaxed text-gray-700">
                  Follow-up automático. Lembretes, CRM e outras integrações são avaliados por caso.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <section id="early-access" className="scroll-mt-24 bg-gray-50 py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Early Access</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                Tecnologia próxima de quem vive a operação.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
                O Early Access é para empresas que querem construir a solução junto com a
                Techway e evoluir o atendimento conforme aprendemos com o uso real.
              </p>

              <ul className="mt-9 grid gap-4 md:grid-cols-2" aria-label="Benefícios do Early Access">
                {[
                  "Contato próximo com o desenvolvedor",
                  "Participação nas prioridades do roadmap",
                  "Avaliação de funcionalidades para a realidade da empresa",
                  "Isenção da taxa de implantação",
                  "Consultoria mensal para evolução do negócio",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl bg-gray-50 p-4 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-relaxed text-gray-500">
                Funcionalidades, integrações, valor mensal e prazos são definidos na proposta de cada empresa.
              </p>
              <WhatsAppLink
                message="Olá! Quero entender se o Early Access faz sentido para minha empresa."
                page={contactPage}
                cta="early-access"
                className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                Conversar sobre o Early Access
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </WhatsAppLink>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Perguntas frequentes</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">Antes de começar</h2>
            <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {[
                {
                  question: "O atendimento substitui totalmente uma pessoa?",
                  answer: "Não. Ele cuida das tarefas definidas na implantação e permite que uma pessoa continue a conversa quando houver exceção, decisão ou assunto fora do escopo.",
                },
                {
                  question: "Como o atendimento aprende sobre minha empresa?",
                  answer: "A configuração usa informações, regras e exemplos aprovados pela sua empresa. Mudanças nessas informações precisam ser atualizadas e testadas.",
                },
                {
                  question: "Já faz agendamentos e follow-up?",
                  answer: "Agendamentos estão em desenvolvimento e dependem do fluxo e da integração de cada empresa. Follow-up automático não faz parte da oferta atual.",
                },
                {
                  question: "Quanto custa?",
                  answer: "A proposta é definida depois de entendermos a primeira tarefa, os limites, a implantação e possíveis integrações. No Early Access, a taxa de implantação é isenta e há uma consultoria mensal.",
                },
              ].map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
                    {item.question}
                  </summary>
                  <p className="mt-3 max-w-3xl leading-relaxed text-gray-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-24 bg-blue-700 py-20 text-white md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Vamos escolher a primeira tarefa do seu atendimento?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
              Conte como sua empresa atende hoje. A conversa serve para entender o cenário,
              os limites e se a Techway faz sentido para o seu negócio.
            </p>
            <WhatsAppLink
              message="Olá! Quero conversar sobre a primeira tarefa do atendimento da minha empresa."
              page={contactPage}
              cta="final"
              className="mt-9 inline-flex items-center rounded-lg bg-white px-7 py-4 font-bold text-blue-800 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Conversar sobre meu atendimento
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LandingConversao
