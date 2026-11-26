import Link from "next/link"
import { ArrowRight, CalendarCheck2, CheckCircle2, ClipboardList, MessageCircle, UserRoundCheck } from "lucide-react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Seo from "../components/Seo"
import WhatsAppLink from "../components/WhatsAppLink"
import useContactPage from "../hooks/useContactPage"

const PATH = "/atendimento-agendamentos-whatsapp"
const TITLE = "Atendimento com IA e agendamentos pelo WhatsApp | Techway"
const DESCRIPTION =
  "A Techway oferece atendimento inteligente e agendamentos pelo WhatsApp para pequenos negócios. Entenda como funciona, o que já está disponível e como é a implantação."

// Esta identificação descreve apenas o serviço exibido nesta página.
// Não pressupõe preço fixo, disponibilidade imediata em qualquer empresa ou execução sem implantação.
const SERVICE_DATA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techway.one/atendimento-agendamentos-whatsapp#service",
  name: "Atendimento com IA e agendamentos pelo WhatsApp",
  description: DESCRIPTION,
  serviceType: "Atendimento inteligente e agendamentos pelo WhatsApp para pequenos negócios",
  url: "https://techway.one/atendimento-agendamentos-whatsapp",
  provider: { "@id": "https://techway.one/#organization" },
}

const answers = [
  {
    question: "O que é o funcionário digital da Techway?",
    answer:
      "É um atendimento com inteligência artificial configurado para conversar pelo WhatsApp da empresa, usando informações e regras aprovadas. Ele ajuda com dúvidas frequentes, coleta inicial e organização da conversa, com passagem para uma pessoa quando necessário.",
  },
  {
    question: "A Techway já oferece agendamentos pelo WhatsApp?",
    answer:
      "Sim. Atendimento e agendamentos já estão disponíveis para contratação. A implantação configura serviços, duração, horários, regras, recursos e permissões de cada empresa antes de habilitar os fluxos contratados.",
  },
  {
    question: "É preciso instalar outro aplicativo para o cliente?",
    answer:
      "Não. A experiência de conversa acontece no WhatsApp. A configuração do atendimento e da agenda é feita conforme a operação e os canais da empresa.",
  },
  {
    question: "Uma pessoa da equipe pode continuar o atendimento?",
    answer:
      "Sim. O funcionário digital cuida das tarefas combinadas e permite continuidade humana quando surgem exceções, decisões ou assuntos fora de seu escopo.",
  },
  {
    question: "O serviço tem preço fixo ou instalação automática?",
    answer:
      "Não há preço único publicado para todos os negócios. A proposta considera o fluxo, os serviços, a implantação e eventuais integrações. A operação é preparada e validada antes da habilitação.",
  },
  {
    question: "A Techway também faz follow-up automático?",
    answer:
      "Follow-up automático não integra a oferta atual. Ideias e novas funcionalidades podem ser avaliadas conforme a necessidade do cliente, sem promessa antecipada de desenvolvimento ou prazo.",
  },
]

export default function AtendimentoEAgendamentos() {
  const page = useContactPage()

  return (
    <div className="tw-revamp flex min-h-screen flex-col bg-white text-gray-900">
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} structuredData={SERVICE_DATA} />
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-white via-[#f4f8ff] to-[#eaf2ff] pb-16 pt-16 md:pb-24 md:pt-20">
          <div className="mx-auto max-w-6xl px-4">
            <nav aria-label="Caminho de navegação" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <Link href="/" className="underline underline-offset-4 hover:text-blue-700">Início</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-slate-800">Atendimento e agendamentos</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
                  Solução Techway · WhatsApp para empresas
                </p>
                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#102047] md:text-5xl">
                  Atendimento com IA e agendamentos pelo WhatsApp
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                  A Techway cria funcionários digitais para pequenos negócios. Eles usam as informações
                  aprovadas da empresa para responder clientes, organizar pedidos e apoiar agendamentos
                  conforme serviços, horários e regras configurados. Tudo começa na conversa pelo WhatsApp,
                  e sua equipe continua no controle.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <WhatsAppLink
                    message="Olá! Quero entender como contratar atendimento e agendamentos pelo WhatsApp para minha empresa."
                    page={page}
                    cta="solucao-hero"
                    className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800"
                  >
                    Conversar com a Techway <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </WhatsAppLink>
                  <Link href="/#exemplo" className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-800 hover:bg-blue-50">
                    Ver a conversa ilustrativa
                  </Link>
                </div>
                <p className="mt-4 max-w-xl text-sm text-slate-600">
                  O atendimento e a agenda já podem ser contratados. A ativação depende da configuração
                  e da validação da operação de cada empresa.
                </p>
              </div>
              <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-[0_18px_55px_rgba(16,32,71,0.09)] md:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-700">Em poucas palavras</p>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-[#102047]">
                  Um funcionário digital que conversa e ajuda a resolver.
                </h2>
                <ul className="mt-7 space-y-5 text-slate-700">
                  <li className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-6 w-6 shrink-0 text-blue-700" aria-hidden="true" />
                    Responde dúvidas com os dados aprovados da empresa.
                  </li>
                  <li className="flex items-start gap-3">
                    <CalendarCheck2 className="mt-0.5 h-6 w-6 shrink-0 text-blue-700" aria-hidden="true" />
                    Apoia agendamentos conforme as regras da agenda.
                  </li>
                  <li className="flex items-start gap-3">
                    <UserRoundCheck className="mt-0.5 h-6 w-6 shrink-0 text-blue-700" aria-hidden="true" />
                    Organiza o contexto para a equipe assumir quando necessário.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20" aria-labelledby="tarefas-title">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-700">O que o produto faz</p>
            <h2 id="tarefas-title" className="mt-3 max-w-3xl text-3xl font-extrabold text-[#102047] md:text-4xl">
              Atendimento e agenda no mesmo fluxo de trabalho
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
              Não é uma lista de recursos futuros. Estes são os serviços que a Techway já oferece,
              com uma implantação ajustada à rotina de cada negócio.
            </p>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <MessageCircle className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-[#102047]">Atendimento com contexto</h3>
                <p className="mt-3 leading-relaxed text-slate-700">
                  Dúvidas sobre serviços, horários e informações do negócio; coleta inicial e continuidade
                  de conversas dentro do escopo configurado.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <CalendarCheck2 className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-[#102047]">Agendamentos</h3>
                <p className="mt-3 leading-relaxed text-slate-700">
                  Agenda configurada com serviços, duração, disponibilidade e regras de marcação e alteração.
                  O fluxo contratado é habilitado após preparação e testes.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <ClipboardList className="h-7 w-7 text-blue-700" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-[#102047]">Apoio à equipe</h3>
                <p className="mt-3 leading-relaxed text-slate-700">
                  O histórico da conversa orienta a continuidade humana. Exceções e decisões importantes
                  não precisam ser tratadas exclusivamente pelo agente.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f2f6ff] py-16 md:py-20" aria-labelledby="agenda-title">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-700">Da dúvida à ação</p>
              <h2 id="agenda-title" className="mt-3 text-3xl font-extrabold text-[#102047] md:text-4xl">
                Como funciona um agendamento pelo WhatsApp?
              </h2>
              <p className="mt-5 leading-relaxed text-slate-700">
                Em um fluxo habilitado, a conversa coleta as informações necessárias, consulta a
                disponibilidade conforme as regras da empresa e registra a reserva quando a operação
                de agendamento confirma o resultado. Não basta o assistente dizer que marcou:
                o registro precisa acontecer no sistema.
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                Essa é a diferença entre uma resposta genérica e uma tarefa executada.
                Na home, mostramos uma <Link className="font-semibold text-blue-700 underline underline-offset-4" href="/#exemplo">animação ilustrativa da experiência</Link>;
                ela não consulta nem grava dados reais.
              </p>
            </div>
            <ol className="space-y-4">
              {[
                ["1", "Entender o pedido", "Identificar serviço, preferência de dia e informações necessárias."],
                ["2", "Conferir as regras da agenda", "Verificar duração, horários, recursos e disponibilidade configurados."],
                ["3", "Registrar e retornar", "Concluir apenas após a operação de agenda confirmar o registro."],
              ].map(([number, heading, text]) => (
                <li key={number} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-100 font-bold text-blue-800">{number}</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#102047]">{heading}</h3>
                    <p className="mt-1 leading-relaxed text-slate-700">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 md:py-20" aria-labelledby="implantacao-title">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-700">Implantação sob medida</p>
              <h2 id="implantacao-title" className="mt-3 text-3xl font-extrabold text-[#102047] md:text-4xl">
                A solução se adapta à empresa, não o contrário.
              </h2>
              <p className="mt-5 leading-relaxed text-slate-700">
                Começamos pelas tarefas que mais interrompem sua rotina. Organizamos informações e regras
                autorizadas, configuramos os fluxos e validamos o funcionamento antes de habilitar a operação.
                Depois, acompanhamos ajustes e ouvimos novas necessidades.
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                A próxima ideia da Techway pode nascer da sua empresa, mas novas funcionalidades,
                integrações, valores e prazos são avaliados caso a caso — não fazem parte de uma
                promessa automática.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-bold text-[#102047]">O que você precisa saber antes de contratar</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" /> Atendimento e agendamentos já integram a oferta comercial.</li>
                <li className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" /> A configuração depende de serviços, horários, permissões e canais do negócio.</li>
                <li className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" /> Follow-up automático não faz parte da oferta atual.</li>
                <li className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" /> O preço é definido conforme o escopo e a implantação de cada empresa.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-16 md:py-20" aria-labelledby="perguntas-title">
          <div className="mx-auto max-w-4xl px-4">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-700">Respostas diretas</p>
            <h2 id="perguntas-title" className="mt-3 text-3xl font-extrabold text-[#102047] md:text-4xl">
              Dúvidas sobre atendimento e agendamentos com IA
            </h2>
            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {answers.map(({ question, answer }) => (
                <article className="py-6" key={question}>
                  <h3 className="text-lg font-bold text-[#102047]">{question}</h3>
                  <p className="mt-2 max-w-3xl leading-relaxed text-slate-700">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 py-12 md:py-16" aria-labelledby="guias-title">
          <div className="mx-auto max-w-4xl px-4">
            <h2 id="guias-title" className="text-2xl font-bold text-[#102047]">Guias para organizar sua operação</h2>
            <p className="mt-4 leading-relaxed text-slate-700">Antes de escolher uma solução, veja como preparar as informações e testar os processos do seu negócio.</p>
            <p className="mt-4 leading-relaxed"><Link className="font-semibold text-blue-700 underline underline-offset-4" href="/blog/como-automatizar-atendimento-whatsapp">Como automatizar o atendimento pelo WhatsApp</Link> — escolha as tarefas e os limites da IA.</p>
            <p className="mt-3 leading-relaxed"><Link className="font-semibold text-blue-700 underline underline-offset-4" href="/blog/agendamento-automatico-whatsapp">Agendamento automático pelo WhatsApp</Link> — organize duração, disponibilidade e confirmação.</p>
          </div>
        </section>

        <section className="bg-blue-800 py-16 text-white md:py-20" aria-labelledby="contato-solucao-title">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 id="contato-solucao-title" className="text-3xl font-extrabold md:text-4xl">
              Que parte do seu WhatsApp você gostaria de delegar?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
              Conte como funcionam seus atendimentos e seus horários hoje. Vamos identificar
              o que faz sentido automatizar e como preparar sua empresa para crescer.
            </p>
            <WhatsAppLink
              message="Olá! Quero conversar sobre atendimento e agendamentos com a Techway para minha empresa."
              page={page}
              cta="solucao-final"
              className="mt-8 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-blue-800 hover:bg-blue-50"
            >
              Falar com a Techway <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </WhatsAppLink>
            <p className="mt-4 text-sm text-blue-100">
              Prefere conhecer a visão da empresa? <Link className="font-semibold underline underline-offset-4" href="/#visao">Veja como a Techway cresce com seus clientes</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
