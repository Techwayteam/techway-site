import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { UserCheck, TrendingUp, Zap, BarChart2, Wrench } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactChat from '../components/ContactChat';

const DynamicTestimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <p>Carregando depoimentos...</p>,
})

const SITE_NAME = 'TECHWAY'
const SITE_DESCRIPTION = 'A TECHWAY oferece soluções personalizadas para otimizar processos, automatizar tarefas e aumentar a produtividade da sua empresa. Descubra como podemos transformar a sua operação.'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>{`${SITE_NAME} - Seu Caminho para a Eficiência`}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href="/techway_favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="automação de processos, dashboards, KPIs, eficiência, tecnologia, produtividade, Techway" />
        <meta name="author" content="Techway Team" />
        <meta property="og:title" content={`${SITE_NAME} - Seu Caminho para a Eficiência`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="https://techway.one/og-techway.jpg" />
        <meta property="og:url" content="https://techway.one" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE_NAME} - Seu Caminho para a Eficiência`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content="https://techway.one/og-techway.jpg" />
        <meta name="robots" content="index, follow" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main className="flex-grow pt-16">
        <section id="hero" className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 text-white py-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/collaboration.webp"
              alt="Equipe colaborando em soluções tecnológicas personalizadas"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Chega de <span className="text-blue-400">perder tempo</span> <br />
              com processos manuais
            </h1>
            <p className="text-xl mb-8 text-center font-bold">
              A TECHWAY <span className="text-blue-400">simplifica sua operação</span> com soluções tecnológicas sob medida. <br />
              <span className="text-blue-400 font-bold">Mais produtividade.</span> <span className="font-bold">Menos dor de cabeça.</span>
            </p>
            <a href="#contato" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Otimize Já os Seus Processos
            </a>
          </div>
        </section>

        <section id="sobre" className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">SIMPLIFICANDO A TECNOLOGIA < br/> PARA IMPULSIONAR O SEU NEGÓCIO </h2>
            <p className="text-xl mb-4 text-center max-w-5xl mx-auto font-bold">
              Somos três amigos apaixonados por criar soluções tecnológicas que podem transformar a sua empresa.
                </p>
            <p className="text-xl mb-4 text-center max-w-5xl mx-auto">
              Nosso foco é tornar a tecnologia acessível e eficiente, adaptada às suas necessidades específicas. Com uma abordagem personalizada, ajudamos empresas como a sua a economizar tempo, simplificar processos e alcançar resultados extraordinários.
                </p>
            <p className="text-xl mb-12 text-center max-w-5xl mx-auto">
              Porque, no final, sua empresa merece o melhor da tecnologia, sem complicações.
                </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-700 p-6 rounded-lg text-center">
                <div className="mb-4 flex justify-center">
                  <UserCheck className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Atendimento Personalizado</h3>
                <p> <span className="mb-4"> Nós não trabalhamos com soluções prontas. Cada projeto é desenvolvido sob medida para a realidade da sua empresa, garantindo que suas necessidades específicas sejam atendidas com precisão. </span> </p> 
                <p> <span className="text-blue-400 font-bold"> Você merece uma solução que entenda o seu negócio. </span> </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg text-center">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Soluções Escaláveis</h3>
                <p> <span className="mb-4"> Seja você uma pequena empresa ou uma grande organização, nossas soluções crescem junto com o seu negócio. Projetamos ferramentas que se adaptam à sua evolução, oferecendo estabilidade e eficiência em qualquer etapa. </span> </p>
                <p> <span className="text-blue-400 font-bold"> Tecnologia feita para acompanhar o seu sucesso. </span> </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg text-center">
                <div className="mb-4 flex justify-center">
                  <Zap className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Resultados Rápidos</h3>
                <p> <span className="mb-4"> Sabemos que o tempo é precioso. Por isso, focamos em implementar soluções que gerem impacto imediato no seu dia a dia, eliminando gargalos e otimizando processos. Entregamos a primeira versão da sua solução em poucas semanas, não meses.</span> </p>
                <p> <span className="text-blue-400 font-bold"> Menos espera, mais resultados para o seu negócio. </span> </p>
              </div>
            </div>
            <p className="text-xl mb-8 text-center">Vamos juntos transformar seu negócio com soluções inteligentes.</p>
            <div className="text-center">
              <a href="#solucoes" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                Descubra Nossas Soluções
              </a>
            </div>
          </div>
        </section>

        <section id="solucoes" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Veja como podemos transformar a sua rotina
            </h2>
            <p className="text-gray-300 mb-12 text-xl text-center max-w-5xl mx-auto">
              Na TECHWAY, nosso foco está em entender profundamente o seu problema, porque é nele que encontramos as melhores oportunidades de transformação. Atuamos em diferentes níveis do seu negócio, desde o chão de fábrica até a sala de reuniões, entregando soluções que fazem sentido para cada etapa. Com uma equipe multidisciplinar, unimos diversas perspectivas para criar estratégias ricas e personalizadas, sempre voltadas para resultados reais.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <Zap className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Automação de Processos</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Elimine processos repetitivos e concentre-se no que realmente importa. Nossas automações se ajustarão perfeitamente às suas operações, economizando tempo e recursos.
                </p>
                <div className="text-center">
                  <a href="#contato" className="text-blue-400 hover:text-blue-300 font-semibold inline-block relative group">
                    &gt; Descubra como transformar sua operação &lt;
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </div>
              </div>
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <BarChart2 className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">KPIs e Dashboards Estratégicos</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Quem tem controle dos seus dados, está a um passo do sucesso. Elaboramos Dashboards sob medida para o seu negócio, que transformam números em decisões estratégicas.
                </p>
                <div className="text-center">
                  <a href="#contato" className="text-blue-400 hover:text-blue-300 font-semibold inline-block relative group">
                    &gt; Veja seus dados trabalhando por você &lt;
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </div>
              </div>
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <Wrench className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center"> Ferramentas Sob Medida </h3>
                <p className="text-gray-300 mb-6 text-center">
                  Criamos soluções tecnológicas sob medida, adaptadas à realidade e desafios do seu negócio. Nossas ferramentas certamente farão a diferença onde sua empresa mais precisa.
                </p>
                <div className="text-center">
                  <a href="#contato" className="text-blue-400 hover:text-blue-300 font-semibold inline-block relative group">
                    &gt; Descubra o impacto das nossas ferramentas &lt;
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DynamicTestimonials />
                      
        <Footer />

        <ContactChat />

      </main>
    </div>
  )
};

export default Home;
