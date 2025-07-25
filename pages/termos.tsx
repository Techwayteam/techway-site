import Head from 'next/head'
import { Book, Shield, Scale, Clock } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TermosDeUso: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Head>
        <title>TECHWAY - Termos de Uso</title>
        <meta name="description" content="Leia os Termos de Uso da TECHWAY e entenda como nossos serviços são oferecidos, garantindo transparência e segurança em nossa parceria." />
        <meta name="keywords" content="Termos de Uso, Política de Privacidade, TECHWAY, Condições de Uso, Regras do Serviço" />
        <meta name="author" content="TECHWAY" />
        <meta name="robots" content="noindex, follow" />
        
        <meta property="og:title" content="TECHWAY - Termos de Uso" />
        <meta property="og:description" content="Saiba mais sobre os Termos de Uso da TECHWAY e nossos compromissos com você." />
        <meta property="og:image" content="https://techway.one/og-techway.jpg" />
        <meta property="og:url" content="https://www.techway.com/termos-de-uso" />
        <meta property="og:type" content="website" />
        
        <link rel="icon" href="/techway_favicon.ico" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 text-white py-20" aria-label="Introdução aos Termos de Uso">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Termos de Uso</h1>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
              Bem-vindo aos Termos de Uso da TECHWAY. Este documento estabelece as condições para o uso dos nossos serviços e produtos. Por favor, leia atentamente.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-800" aria-label="Detalhes dos Termos de Uso">
          <div className="container mx-auto px-4 space-y-12">
            <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Book className="w-8 h-8 mr-2 text-blue-400" />
                1. Aceitação dos Termos
              </h2>
              <p className="text-center mb-4">
                Ao utilizar os serviços da TECHWAY, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com algum aspecto destes termos, por favor, não utilize nossos serviços.
              </p>
              <p className="text-center mb-4">
                Estes termos constituem um acordo legal entre você e a TECHWAY, regendo o uso de todos os nossos produtos e serviços. Ao acessar ou utilizar qualquer parte de nossa plataforma, você reconhece ter lido, entendido e concordado com estes termos.
              </p>
              <p className="text-center">
                Reservamo-nos o direito de atualizar ou modificar estes termos a qualquer momento, sem aviso prévio. É sua responsabilidade verificar periodicamente quaisquer alterações.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-2 text-blue-400" />
                2. Privacidade e Proteção de Dados
              </h2>
              <p className="text-center mb-4">
                Respeitamos sua privacidade e protegemos seus dados pessoais. Nossa Política de Privacidade descreve como coletamos, usamos e protegemos suas informações.
              </p>
              <p className="text-center mb-4">
                Comprometemo-nos a manter suas informações pessoais seguras e confidenciais. Utilizamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <p className="text-center">
                Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Para exercer esses direitos ou para quaisquer dúvidas sobre nossa política de privacidade, entre em contato conosco.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Scale className="w-8 h-8 mr-2 text-blue-400" />
                3. Propriedade Intelectual
              </h2>
              <p className="text-center mb-4">
                Todo o conteúdo e software associados aos serviços da TECHWAY são de nossa propriedade ou licenciados para nós. Você concorda em não copiar, modificar, distribuir ou criar trabalhos derivados sem nossa permissão expressa.
              </p>
              <p className="text-center mb-4">
                Isso inclui, mas não se limita a, textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software. O uso não autorizado deste material pode violar leis de direitos autorais, marcas registradas, privacidade e publicidade.
              </p>
              <p className="text-center">
                Respeitamos os direitos de propriedade intelectual de terceiros e esperamos que nossos usuários façam o mesmo. Se você acredita que seu trabalho foi copiado de uma maneira que constitui violação de direitos autorais, entre em contato conosco imediatamente.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Clock className="w-8 h-8 mr-2 text-blue-400" />
                4. Alterações nos Termos
              </h2>
              <p className="text-center mb-4">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações significativas serão notificadas aos usuários. O uso contínuo dos nossos serviços após as alterações constitui aceitação dos novos termos.
              </p>
              <p className="text-center mb-4">
                Recomendamos que você revise regularmente estes termos para estar ciente de quaisquer mudanças. Alterações substanciais podem incluir, mas não se limitam a, mudanças em nossa política de privacidade, alterações em nossos serviços ou novas obrigações legais.
              </p>
              <p className="text-center">
                Se você não concordar com os termos modificados, deve interromper o uso de nossos serviços. A continuação do uso após a publicação de quaisquer alterações indica sua aceitação desses termos revisados.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900" aria-label="Contato para dúvidas">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Dúvidas sobre nossos Termos de Uso?</h2>
            <p className="mb-8 text-xl">
              Entre em contato conosco para esclarecimentos adicionais.
            </p>
            <a href="/#contato" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Fale Conosco
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
};

export default TermosDeUso
