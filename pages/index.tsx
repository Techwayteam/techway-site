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
  "Seu primeiro funcionário digital no WhatsApp: atendimento com IA para responder dúvidas, organizar o primeiro contato e liberar tempo para cuidar do negócio."

const LandingConversao: React.FC = () => {
  const contactPage = useContactPage()

  return (
    <div className="tw-revamp flex min-h-screen flex-col bg-white text-gray-900">
      <Head>
        <title>Funcionário digital para atender no WhatsApp | TECHWAY</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={absoluteUrl("/")} />
        <link rel="icon" href="/techway_favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="atendimento com IA, WhatsApp para empresas, funcionário digital, automação de atendimento"
        />
        <meta name="author" content="Techway Team" />
        <meta property="og:title" content="Funcionário digital para atender no WhatsApp | TECHWAY" />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="https://techway.one/og-techway.jpg" />
        <meta property="og:url" content={absoluteUrl("/")} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Funcionário digital para atender no WhatsApp | TECHWAY" />
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
        <section id="hero" className="tw-hero">
          <div className="tw-hero-glow" aria-hidden="true" />
          <div className="tw-hero-inner mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
            <div className="tw-hero-copy">
              <p className="tw-kicker-pill"><span aria-hidden="true">✦</span> Seu primeiro funcionário digital, no WhatsApp</p>
              <h1>
                Você cuida do seu negócio.
                <span> A Techway ajuda a cuidar do seu atendimento.</span>
              </h1>
              <p className="tw-hero-description">
                Enquanto você trabalha, um funcionário digital no WhatsApp responde dúvidas frequentes,
                organiza as primeiras informações dos clientes e mantém o contexto da conversa.
                Quando precisar, uma pessoa assume.
              </p>
              <div className="tw-hero-actions">
                <WhatsAppLink message="Olá! Quero conhecer o funcionário digital para o WhatsApp da minha empresa."
                  page={contactPage} cta="hero" className="tw-btn tw-btn-primary">
                  Quero melhorar meu atendimento <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </WhatsAppLink>
                <a href="#exemplo" className="tw-btn tw-btn-outline">
                  <span className="tw-play" aria-hidden="true">▶</span> Ver um exemplo
                </a>
              </div>
              <p className="tw-hero-note">A conversa abre no WhatsApp. Você decide quando enviar.</p>
              <div className="tw-trust-points" aria-label="Benefícios">
                <span><b aria-hidden="true">✓</b> Feito para pequenos negócios</span>
                <span><b aria-hidden="true">✓</b> Adaptado à sua rotina</span>
              </div>
            </div>
            <div className="tw-hero-art" aria-label="Ilustração de uma empreendedora e um funcionário digital">
              <div className="tw-art-orb" aria-hidden="true" />
              <div className="tw-art-ring" aria-hidden="true" />
              <img src="/illustrations/techway-empreendedora.webp" alt="Empreendedora ilustrada em 3D usando um celular" className="tw-human" width={380} height={520} />
              <img src="/illustrations/techway-assistente.webp" alt="Mascote ilustrado em 3D representando a assistente digital" className="tw-bot" width={150} height={154} />
              <div className="tw-chat tw-chat-question" aria-hidden="true">
                <span className="tw-chat-bubble-icon">✦</span> Oi! Vocês oferecem esse serviço?
              </div>
              <div className="tw-chat tw-chat-answer" aria-hidden="true">
                <span className="tw-chat-bubble-icon">✦</span>
                <span>Sim! Posso explicar as opções e anotar o que você precisa. <small>✓✓</small></span>
              </div>
              <p className="tw-art-note"><span aria-hidden="true" /> Seu atendimento em boas mãos</p>
            </div>
          </div>
          <div className="tw-hero-foot mx-auto max-w-6xl px-4">
            <span aria-hidden="true">✧</span> Mais tempo para o que importa.
            <i aria-hidden="true" />
            <span>O atendimento continua enquanto você trabalha.</span>
          </div>
        </section>

        <section id="solucoes" className="tw-solutions scroll-mt-24 bg-gray-50 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                O que muda no dia a dia
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Seu WhatsApp chama. Você nem sempre pode parar para responder.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Enquanto você atende um cliente, resolve um problema ou cuida da operação,
                outras mensagens continuam chegando. Seu funcionário digital ajuda
                nas conversas mais repetitivas, para você estar presente onde mais importa.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Perguntas que se repetem",
                  text: "Horário, endereço e informações sobre serviços não precisam interromper sua rotina toda vez que alguém pergunta.",
                },
                {
                  title: "Pedidos que chegam mais claros",
                  text: "O funcionário digital pede os dados iniciais combinados e ajuda sua equipe a entender o que cada cliente precisa.",
                },
                {
                  title: "Menos perguntas repetidas",
                  text: "O cliente pode continuar o assunto que já começou, sem ter de explicar tudo novamente na mesma conversa.",
                },
                {
                  title: "Você entra quando faz diferença",
                  text: "Quando surge uma exceção ou decisão importante, o atendimento segue para uma pessoa conforme o processo da sua empresa.",
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
          className="tw-demo scroll-mt-24 bg-white py-20 outline-none md:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Exemplo fictício
              </p>
              <h2 id="exemplo-titulo" className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Imagine seu salão atendendo mensagens enquanto você atende uma cliente.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Veja como um funcionário digital pode conversar com uma cliente usando
                informações do salão e chamar uma pessoa quando precisar.
                A conversa abaixo é fictícia e não representa um agendamento realizado.
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

        <section id="como-funciona" className="tw-process scroll-mt-24 bg-gray-950 py-20 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                Implantação em conjunto
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Começamos pelo atendimento que mais toma o seu tempo.
              </h2>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "1",
                  title: "Entender sua rotina",
                  text: "Você nos mostra as perguntas e situações que mais se repetem no WhatsApp da empresa.",
                },
                {
                  number: "2",
                  title: "Preparar seu funcionário digital",
                  text: "Configuramos as respostas, o jeito de conversar e os limites com informações aprovadas por você.",
                },
                {
                  number: "3",
                  title: "Começar e acompanhar",
                  text: "Definimos o escopo e as condições na proposta, colocamos em uso e acompanhamos os ajustes necessários.",
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

        <section id="limites" className="tw-limits scroll-mt-24 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                Limites claros
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Seu funcionário digital ajuda. As decisões importantes continuam com você.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Cada negócio tem sua rotina. Por isso, o atendimento começa com tarefas
                combinadas e informações da sua empresa. Também deixamos claro
                o que já está disponível e o que ainda depende de desenvolvimento.
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

        <section id="early-access" className="tw-early scroll-mt-24 bg-gray-50 py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Early Access</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                Comece pelo atendimento. Evolua com a Techway.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
                O Early Access é para quem quer colocar o primeiro funcionário digital
                em ação no WhatsApp e aperfeiçoar o atendimento com acompanhamento
                próximo da nossa equipe.
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

        <section id="faq" className="tw-faq scroll-mt-24 bg-white py-20 md:py-24">
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

        <section id="visao" className="tw-vision">
          <div className="tw-vision-inner mx-auto max-w-6xl px-4">
            <div>
              <p className="tw-label">NOSSA VISÃO</p>
              <h2>O atendimento é <span>só o começo.</span></h2>
              <p className="tw-vision-description">
                A Techway quer ajudar pequenos negócios a ganhar tempo e capacidade
                com uma equipe de funcionários digitais especializados.
                Hoje, começamos pelo atendimento no WhatsApp.
                Outros funcionários digitais fazem parte da nossa visão de futuro — não desta oferta atual.
              </p>
            </div>
            <div className="tw-vision-grid" aria-label="Presente e visão futura">
              {[
                { name: "Atendimento", icon: "✦", state: "Disponível agora", active: true },
                { name: "Financeiro", icon: "▤", state: "Visão futura", active: false },
                { name: "Marketing", icon: "◈", state: "Visão futura", active: false },
                { name: "Operações", icon: "▣", state: "Visão futura", active: false },
              ].map((module) => (
                <div key={module.name} className={`tw-module ${module.active ? "tw-module-now" : ""}`}>
                  <span className="tw-module-icon" aria-hidden="true">{module.icon}</span>
                  <strong>{module.name}</strong>
                  <small>{module.state}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="tw-contact scroll-mt-24 bg-blue-700 py-20 text-white md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              E se seu WhatsApp deixasse de depender de você para cada resposta?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
              Conte como funciona seu atendimento hoje. Vamos identificar quais
              tarefas repetitivas um funcionário digital pode assumir
              e o que faz sentido para o seu negócio.
            </p>
            <WhatsAppLink
              message="Olá! Quero entender como começar com um funcionário digital no atendimento da minha empresa."
              page={contactPage}
              cta="final"
              className="mt-9 inline-flex items-center rounded-lg bg-white px-7 py-4 font-bold text-blue-800 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Quero conversar sobre minha empresa
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
