import type React from "react"
import Link from "next/link"
import Head from "next/head"
import { ArrowRight, CalendarClock, Check, MessageCircle, UserRound } from "lucide-react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Testimonials from "../components/Testimonials"
import WhatsAppLink from "../components/WhatsAppLink"
import WhatsAppDemo from "../components/WhatsAppDemo"
import useContactPage from "../hooks/useContactPage"
import { absoluteUrl, serializeJsonLd } from "../lib/seo"

const SITE_DESCRIPTION =
  "Funcionários digitais para pequenos negócios: atendimento e agendamentos pelo WhatsApp, adaptados à rotina da sua empresa para você ganhar tempo e crescer."

// Dados que identificam a marca e o site sem inventar loja física, endereço ou avaliações.
const HOMEPAGE_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://techway.one/#organization",
      name: "TECHWAY",
      url: "https://techway.one/",
      logo: "https://techway.one/logo_techway_semslogan_transparent.png",
      sameAs: ["https://www.instagram.com/techway.one/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://techway.one/#website",
      url: "https://techway.one/",
      name: "Techway",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://techway.one/#organization" },
    },
  ],
}

const LandingConversao: React.FC = () => {
  const contactPage = useContactPage()

  return (
    <div className="tw-revamp flex min-h-screen flex-col bg-white text-gray-900">
      <Head>
        <title>Atendimento e agendamentos pelo WhatsApp | Techway</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={absoluteUrl("/")} />
        <link rel="icon" href="/techway_favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="atendimento com IA, WhatsApp para empresas, funcionário digital, automação de atendimento"
        />
        <meta name="author" content="Techway Team" />
        <meta property="og:title" content="Atendimento e agendamentos pelo WhatsApp | Techway" />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="https://techway.one/og-techway.jpg" />
        <meta property="og:url" content={absoluteUrl("/")} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atendimento e agendamentos pelo WhatsApp | Techway" />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content="https://techway.one/og-techway.jpg" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(HOMEPAGE_STRUCTURED_DATA) }}
        />
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
                Seu funcionário digital
                <span> atende e agenda pelo WhatsApp.</span>
              </h1>
              <p className="tw-hero-description">
                A Techway cria funcionários digitais para ajudar pequenos negócios a ganhar tempo
                e espaço para crescer. Começamos pelo atendimento e pelos agendamentos no WhatsApp:
                seu funcionário responde dúvidas, organiza pedidos e ajuda a marcar horários
                conforme as regras da sua empresa. Sua equipe assume quando precisa — e seguimos
                juntos para evoluir o negócio.
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
                <span><b aria-hidden="true">✓</b> Evolui junto com seu negócio</span>
              </div>
            </div>
            <div className="tw-hero-art" aria-label="Ilustração de uma empreendedora e um funcionário digital">
              <div className="tw-art-orb" aria-hidden="true" />
              <div className="tw-art-ring" aria-hidden="true" />
              <img src="/illustrations/techway-empreendedora-hq.webp" alt="Empreendedora ilustrada em 3D usando um celular" className="tw-human" width={910} height={1236} loading="eager" decoding="async" />
              <img src="/illustrations/techway-assistente-hq.webp" alt="Mascote ilustrado em 3D representando a assistente digital" className="tw-bot" width={430} height={440} loading="eager" decoding="async" />
              <div className="tw-chat tw-chat-question" aria-hidden="true">
                <span className="tw-chat-bubble-icon">✦</span> Oi! Posso agendar um horário?
              </div>
              <div className="tw-chat tw-chat-answer" aria-hidden="true">
                <span className="tw-chat-bubble-icon">✦</span>
                <span>Claro! Vamos ver um horário que funcione para você. <small>✓✓</small></span>
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
                  title: "Respostas com os dados da sua empresa",
                  text: "Horários, endereço, serviços e dúvidas frequentes são respondidos com base nas informações aprovadas pelo seu negócio.",
                },
                {
                  title: "Pedidos organizados para sua equipe",
                  text: "O funcionário digital coleta as primeiras informações e mantém o contexto para que a conversa não recomece do zero.",
                },
                {
                  title: "Agendamentos pelo WhatsApp",
                  text: "Além de responder clientes, seu funcionário digital pode organizar agendamentos conforme os horários, serviços e regras configurados para a empresa.",
                },
                {
                  title: "Você assume quando precisa",
                  text: "Exceções e decisões importantes seguem para uma pessoa, conforme as regras combinadas na implantação.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{item.text}</p>
                </article>
              ))}
            </div>
            <Link
              href="/atendimento-agendamentos-whatsapp"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-50"
            >
              Entenda como funcionam o atendimento e os agendamentos
              <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
            </Link>
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
                Funcionário digital em ação
              </p>
              <h2 id="exemplo-titulo" className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Da primeira mensagem ao horário marcado.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Acompanhe uma conversa animada, inspirada na experiência do WhatsApp.
                Veja como o funcionário digital atende, entende o pedido e conduz
                o agendamento. Os horários e a reserva mostrados são apenas exemplos:
                esta simulação não consulta nem altera uma agenda real.
              </p>
              <WhatsAppLink
                message="Olá! Quero entender como um atendimento assim funcionaria na minha empresa."
                page={contactPage}
                cta="exemplo"
                className="mt-8 inline-flex items-center rounded-lg bg-gray-950 px-6 py-4 font-bold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                Quero isso no meu negócio
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </WhatsAppLink>
            </div>

            <WhatsAppDemo />
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
                  title: "Acompanhar e evoluir",
                  text: "Depois da implantação, acompanhamos o uso, ouvimos suas ideias e avaliamos melhorias conforme suas prioridades e a viabilidade de cada mudança.",
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
                O que seu funcionário digital já faz — e como colocá-lo em ação.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Atendimento e agendamentos já fazem parte das soluções que você pode
                contratar. Configuramos cada funcionário digital com os serviços,
                horários e regras da sua empresa antes de colocar o fluxo em operação.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-7">
                <MessageCircle className="h-7 w-7 text-green-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-gray-950">Atendimento disponível</h3>
                <p className="mt-3 leading-relaxed text-gray-700">
                  Respostas com informações da empresa, coleta de pedidos, contexto da conversa e passagem para a equipe.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
                <CalendarClock className="h-7 w-7 text-amber-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-gray-950">Agendamentos disponíveis</h3>
                <p className="mt-3 leading-relaxed text-gray-700">
                  Agendamento pelo WhatsApp faz parte da oferta. A solução contempla a agenda
                  e os fluxos de marcação e alteração, configurados e habilitados na implantação.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-300 bg-gray-50 p-7">
                <UserRound className="h-7 w-7 text-gray-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-gray-950">Crescer com você</h3>
                <p className="mt-3 leading-relaxed text-gray-700">
                  Nossa parceria não termina na implantação. Ouvimos o que seu negócio precisa
                  e avaliamos melhorias, sempre com escopo e condições combinados.
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
                Começamos com atendimento e agendamentos, soluções já disponíveis.
                Depois, seguimos perto para entender o que ajuda sua empresa a trabalhar
                melhor e crescer. A próxima funcionalidade da Techway pode até nascer
                de um desafio seu!
              </p>

              <ul className="mt-9 grid gap-4 md:grid-cols-2" aria-label="Benefícios do Early Access">
                {[
                  "Contato próximo com o desenvolvedor",
                  "Sua rotina ajuda a orientar nossas prioridades",
                  "Novas ideias avaliadas com você, caso a caso",
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
                Ideias e sugestões não são promessas de desenvolvimento. Escopo, viabilidade,
                integrações, valores e prazos são avaliados e definidos em cada proposta.
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
                  question: "A Techway já trabalha com agendamentos?",
                  answer: "Sim. Atendimento e agendamentos pelo WhatsApp já podem ser contratados. Configuramos serviços, horários, regras e permissões de cada empresa na implantação; a operação é habilitada após essa preparação. A solução já inclui gestão de reservas pela equipe.",
                },
                {
                  question: "Faz follow-up automático?",
                  answer: "Ainda não. Follow-up automático não integra a oferta atual. Novas funções são avaliadas com cada empresa, sem promessa prévia de prazo.",
                },
                {
                  question: "E se minha empresa precisar de uma função que ainda não existe?",
                  answer: "Queremos entender o que ajudaria seu negócio a evoluir. Sua necessidade pode inspirar uma próxima funcionalidade da Techway, mas cada ideia passa por avaliação de viabilidade, prioridades e condições antes de virar uma entrega.",
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
                A gente não quer só tirar mensagens da sua frente. Queremos ajudar
                você a cuidar melhor dos clientes, ganhar tempo e fazer o negócio evoluir.
                Hoje, começamos pelo atendimento e pela agenda no WhatsApp. Amanhã, o próximo passo
                pode nascer de uma necessidade sua. Se o seu negócio cresce, a Techway
                cresce junto.
              </p>
            </div>
            <div className="tw-vision-grid" aria-label="Como a Techway evolui com o seu negócio">
              {[
                { name: "Atendimento", icon: "✦", state: "Já em uso", active: true },
                { name: "Sua rotina", icon: "▤", state: "A gente escuta", active: false },
                { name: "Novas ideias", icon: "◈", state: "Avaliamos juntos", active: false },
                { name: "Evolução", icon: "▣", state: "Com propósito", active: false },
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
              Seu negócio tem planos. Vamos abrir espaço para eles?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
              Começamos pelo atendimento que já funciona no WhatsApp.
              Conte como é sua rotina, onde o tempo fica apertado e o que
              você gostaria de fazer melhor. Vamos pensar juntos no próximo passo.
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
