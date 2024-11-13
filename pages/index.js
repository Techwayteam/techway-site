import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Techway - Seu Caminho para a Eficiência</title>
        <meta name="description" content="A Techway fornece soluções inteligentes sob medida para as necessidades únicas de cada negócio." />
        <link rel="icon" href="/techway-site/techway_favicon.ico" />
      </Head>

      <header className="bg-gray-900 text-white py-4">
  <div className="container mx-auto px-4 flex justify-between items-center">
    <div className="flex items-center">
      <Image
        src="/techway-site/logo_techway_semslogan_transparent.png"
        alt="TECHWAY Logo"
        width={674}
        height={109}
        className="h-8 w-auto"
      />
    </div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#sobre" className="hover:text-blue-400">About</a></li>
        <li><a href="#serviços" className="hover:text-blue-400">Services</a></li>
        <li><a href="#contato" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Seu Caminho para a <span className="text-blue-400">Eficiência</span></h1>
            <p className="text-xl mb-8">Soluções que economizam tempo, simplificam processos e geram resultados</p>
            <div className="space-x-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Comece Agora
              </a>
              <a href="#services" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded">
                Saiba Mais
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Sobre <span className="text-blue-400">Techway</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-4 text-center">
                Na Techway, simplificamos o complexo. Fundada por três entusiastas de tecnologia, criamos soluções inteligentes sob medida para as necessidades de cada negócio – desde fluxos de trabalho automatizados até insights baseados em dados.
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
          <p>&copy; {new Date().getFullYear()} Techway. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
