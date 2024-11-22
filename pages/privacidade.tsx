import Head from 'next/head'
import { Shield, Database, Eye, Lock } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PoliticaDePrivacidade: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Head>
        <title>TECHWAY - Política de Privacidade</title>
        <meta name="description" content="Conheça nossa Política de Privacidade e entenda como a TECHWAY protege e utiliza seus dados pessoais, garantindo sua segurança e confiança." />
        <meta name="keywords" content="Política de Privacidade, Proteção de Dados, TECHWAY, Segurança da Informação, LGPD" />
        <meta name="author" content="TECHWAY" />
        <meta name="robots" content="noindex, follow" />
        
        <meta property="og:title" content="TECHWAY - Política de Privacidade" />
        <meta property="og:description" content="Saiba como a TECHWAY protege seus dados pessoais e garante sua privacidade." />
        <meta property="og:image" content="/techway_logo.png" />
        <meta property="og:url" content="https://techway.one/politica-de-privacidade" />
        <meta property="og:type" content="website" />
        
        <link rel="icon" href="/techway_favicon.ico" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 text-white py-20" aria-label="Introdução à Política de Privacidade">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Política de Privacidade</h1>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
              Na TECHWAY, valorizamos sua privacidade e nos comprometemos a proteger seus dados pessoais. Esta política descreve como coletamos, usamos e protegemos suas informações.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-800" aria-label="Detalhes da Política de Privacidade">
          <div className="container mx-auto px-4 space-y-12">
            <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-2 text-blue-400" />
                1. Coleta de Dados
              </h2>
              <p className="text-center mb-4">
                Coletamos apenas os dados necessários para fornecer e melhorar nossos serviços. Isso pode incluir informações de contato, dados de uso do serviço e informações fornecidas voluntariamente por você.
              </p>
              <p className="text-center mb-4">
                Utilizamos tecnologias como cookies para melhorar sua experiência de navegação e coletar dados de uso anônimos. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
              <p className="text-center">
                Não coletamos dados sensíveis sem seu consentimento explícito e sempre informaremos o motivo da coleta.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Database className="w-8 h-8 mr-2 text-blue-400" />
                2. Uso de Dados
              </h2>
              <p className="text-center mb-4">
                Utilizamos seus dados para fornecer, manter e melhorar nossos serviços, bem como para comunicações relacionadas ao serviço e atualizações importantes.
              </p>
              <p className="text-center mb-4">
                Seus dados podem ser usados para personalizar sua experiência, realizar análises internas e desenvolver novos produtos ou recursos.
              </p>
              <p className="text-center">
                Não vendemos seus dados pessoais a terceiros. Compartilhamos dados apenas quando necessário para a prestação de serviços ou quando exigido por lei.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Eye className="w-8 h-8 mr-2 text-blue-400" />
                3. Seus Direitos
              </h2>
              <p className="text-center mb-4">
                Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Também pode solicitar a portabilidade de seus dados ou restringir seu processamento.
              </p>
              <p className="text-center mb-4">
                Para exercer esses direitos, entre em contato conosco através dos canais fornecidos ao final desta política. Responderemos a todas as solicitações dentro do prazo legal.
              </p>
              <p className="text-center">
                Você pode optar por não receber comunicações de marketing a qualquer momento, seguindo as instruções de cancelamento de inscrição em nossas mensagens.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Lock className="w-8 h-8 mr-2 text-blue-400" />
                4. Segurança de Dados
              </h2>
              <p className="text-center mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <p className="text-center mb-4">
                Utilizamos criptografia de ponta a ponta, firewalls avançados e monitoramento constante para garantir a integridade e confidencialidade de seus dados.
              </p>
              <p className="text-center">
                Regularmente revisamos e atualizamos nossas práticas de segurança para garantir a máxima proteção de seus dados pessoais.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900" aria-label="Contato para dúvidas">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Dúvidas sobre nossa Política de Privacidade?</h2>
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

export default PoliticaDePrivacidade
