import type React from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import { ArrowRight, Check } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const DynamicTestimonials = dynamic(() => import("../components/Testimonials"), {
  loading: () => <p>Carregando depoimentos...</p>,
})

const SITE_NAME = "TECHWAY"
const SITE_DESCRIPTION =
  "Transforme IA em força de trabalho. Funcionários digitais inteligentes, treináveis e prontos para ajudar no WhatsApp."

const LandingConversao: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Head>
        <title>Funcionário Digital com IA | TECHWAY</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href="/techway_favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="funcionário digital, inteligência artificial, automação, WhatsApp, atendimento automatizado, IA"
        />
        <meta name="author" content="Techway Team" />
        <meta property="og:title" content="Funcionário Digital com IA | TECHWAY" />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="/techway_favicon.ico" />
        <meta property="og:url" content="https://techway.one" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Funcionário Digital com IA | TECHWAY" />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content="/techway_favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section id="hero" className="py-20 bg-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Tá difícil tocar o <br />negócio <span className="text-blue-600">sozinho?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-1 max-w-3xl mx-auto leading-relaxed">
              Queria contratar alguém, mas o custo é alto demais?
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Se sente travado porque não consegue dar conta de tudo?
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 text-center">
              Conheça seu primeiro funcionário digital:
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-center text-blue-600 font-semibold mb-10">
              <span className="px-4 py-2 border border-blue-600 rounded-2xl">
                Não falta
              </span>
              <span className="px-4 py-2 border border-blue-600 rounded-2xl">
                Não reclama
              </span>
              <span className="px-4 py-2 border border-blue-600 rounded-2xl">
                Custa bem menos que um salário
              </span>
              <span className="px-4 py-2 border border-blue-600 rounded-2xl">
                Aprende com você
              </span>
            </div>
            <a
              href="#solucoes"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded transition duration-300 inline-flex items-center text-lg"
            >
              Quero saber mais
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Problema Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
              Você não tá só sobrecarregado,<br />
              <span className="text-blue-600">você tá travado...</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl mb-12 text-gray-600 leading-relaxed">
              <p>
                Você atende, vende, organiza, resolve pepino, <br />apaga incêndio, tenta divulgar, tenta crescer… <br />
                <strong className="text-gray-900">Faz de tudo, o tempo todo!</strong>
              </p>
              <p>
                E por mais que você tente, parece que nunca é o suficiente...
              </p>
              <p className="text-xl md:text-2xl font-bold text-blue-600 underline underline-offset-4">
                TÁ NA HORA DE MUDAR ISSO!
              </p>
            </div>
          </div>
        </section>

        {/* Solução Section */}
        <section id="sobre" className="py-20 bg-gray-200">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center leading-tight">
              Funcionários digitais com
              <br />
              <span className="text-blue-600">inteligência artificial</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-gray-600 text-center leading-relaxed">
              <p>
                A Techway cria funcionários digitais treinados com o seu jeito, os seus serviços e a sua rotina. Eles
                assumem tarefas reais do dia a dia — e trabalham direto no WhatsApp da sua empresa.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-blue-600 text-center py-8">
                Nada de aplicativo. Nada de curva de aprendizado.
                <br />
                Mais tempo pra você, mais organização e mais profissionalismo.
              </p>
            </div>
          </div>
        </section>

        {/* Funcionalidades Section */}
        <section id="solucoes" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center leading-tight">
              O que seu funcionário digital
              <br />
              <span className="text-blue-600">pode fazer por você?</span>
            </h2>
            <div className="space-y-16">
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Atendimento automático com toque humano</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Seu assistente responde os clientes com agilidade, educação e inteligência. Sabe o que você oferece,
                  como funciona, e até faz triagem de atendimento. Tudo com uma IA treinada para parecer humana — do
                  jeitinho que seu negócio pede.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Respostas inteligentes, personalizadas</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cada resposta é pensada com base no seu serviço, seu jeito de falar e suas condições. Sem texto
                  genérico. É como se fosse você, mas sem sobrecarga.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Conhecimento sobre o cliente, sem esforço</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Seu funcionário digital guarda o histórico das conversas, entende quem é quem e lembra dos detalhes.
                  É como se fosse uma memória viva do seu atendimento — sem precisar anotar nada.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Follow-up automático e inteligente</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lembra o cliente, retoma conversas paradas, reforça um agendamento, ou sugere o próximo passo. Tudo
                  com base no histórico — de forma natural e eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Prova Social Section */}
        <section className="py-20 bg-gray-200">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
              Tem vários negócios pequenos <br /> 
              parecendo <span className="text-blue-600">empresa grande.</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed">
              <p>
                Com atendimento automático, histórico organizado e respostas inteligentes, 
                essas empresas estão profissionalizando a operação <strong className="text-gray-900">sem precisar contratar ninguém</strong>.
              </p>
              <p>
                <strong className="text-blue-600">Usando automações com IA, o céu é o limite.</strong>
              </p>
              <p className="text-xl md:text-2xl font-semibold text-gray-900">
                A próxima empresa de sucesso pode ser a sua.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
              <div className="border-2 border-blue-600 rounded-xl py-10 px-5">
                <div className="text-3xl font-bold text-blue-600 mb-2">Até 5h</div>
                <p className="text-gray-600">economizadas por dia</p>
              </div>
              <div className="border-2 border-blue-600 rounded-xl py-10 px-5">
                <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
                <p className="text-gray-600">de trabalho</p>
              </div>
              <div className="border-2 border-blue-600 rounded-xl py-10 px-5">
                <div className="text-3xl font-bold text-blue-600 mb-2">Até 2x</div>
                <p className="text-gray-600">mais conversão</p>
              </div>
            </div>
          </div>
        </section>


        <DynamicTestimonials />

        {/* CTA Final Section */}
        <section id="contato" className="py-20 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
              Conheça seu primeiro
              <br />
              <span className="text-blue-200">funcionário digital</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              <p>
                Você já entendeu como funciona.
                <br />
                Agora é só decidir se sua empresa vai continuar igual, < br/>
                <strong className="text-white"> ou vai dar o próximo passo.</strong>
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                A mudança começa com um clique.
              </p>
            </div>

            <a
              href="https://wa.me/5521991673541"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-6 px-12 rounded transition duration-300 inline-flex items-center text-xl"
            >
              Quero meu funcionário digital
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LandingConversao
