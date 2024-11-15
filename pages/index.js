import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>TECHWAY - Seu Caminho para a Eficiência</title>
        <meta name="description" content="A TECHWAY resolve problemas de produtividade e organização com soluções personalizadas. Otimize processos, automatize tarefas e tome decisões baseadas em dados." />
        <link rel="icon" href="/techway-site/techway_favicon.ico" />
      </Head>

      <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/techway-site/logo_techway_semslogan_transparent.png"
              alt="Logo da TECHWAY"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#sobre" className="hover:text-blue-400">Sobre</a></li>
              <li><a href="#solucoes" className="hover:text-blue-400">Soluções</a></li>
              <li><a href="#depoimentos" className="hover:text-blue-400">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-blue-400">Contato</a></li>
            </ul>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-2">
            <ul className="flex flex-col items-center space-y-2">
              <li><a href="#sobre" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
              <li><a href="#solucoes" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Soluções</a></li>
              <li><a href="#depoimentos" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
            </ul>
          </div>
        )}
      </header>


      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 text-white py-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/techway-site/collaboration.webp"
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
              A TECHWAY <span className="text-blue-400">simplifica sua operação</span> com soluções tecnológicas sob medida <br />
              <span className="text-blue-400 font-bold">Mais produtividade</span> <br />
              <span className="font-bold">Menos dor de cabeça</span>
            </p>
            <a href="#contato" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Otimize Já os Seus Processos
            </a>
          </div>
        </section>

        <section id="about" className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Sobre <span className="text-blue-400">TECHWAY</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-4 text-center">
                Na TECHWAY, simplificamos o complexo. Fundada por três entusiastas de tecnologia, criamos soluções inteligentes sob medida para as necessidades de cada negócio – desde fluxos de trabalho automatizados até insights baseados em dados.
              </p>
              <p className="text-lg mb-4 text-center">
                Nossa missão é ser o caminho para a eficiência, oferecendo soluções tecnológicas ágeis, personalizadas e eficazes que geram resultados reais.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nossos <span className="text-blue-400">Serviços</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
                <h3 className="text-xl font-bold mb-4">Automação de Processos</h3>
                <p>Simplifique seus fluxos de trabalho com soluções de automação personalizadas</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
                <h3 className="text-xl font-bold mb-4">Soluções Digitais</h3>
                <p>Aplicações e ferramentas personalizadas para suas necessidades específicas</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
                <h3 className="text-xl font-bold mb-4">Insights de Dados</h3>
                <p>Transforme seus dados em insights acionáveis</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Entre em <span className="text-blue-400">Contato</span></h2>
            <p className="text-xl mb-8">Pronto para iniciar sua jornada para a eficiência? Entre em contato conosco hoje!</p>
            <a href="mailto:contact@techway.com" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Fale Conosco
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TECHWAY. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
