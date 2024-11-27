import Head from 'next/head'
import Image from 'next/image'
import { CheckCircle, Award, Zap, BarChart2, Headphones, Wrench, Clock, Target, TrendingUp, Box } from 'lucide-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import { landingPages } from '../data/landingPages'
import type { PageData } from '../types/PageData'

const iconComponents = {
  CheckCircle,
  Award,
  Zap,
  BarChart2,
  Headphones, 
  Clock, 
  Target, 
  TrendingUp, 
  Box 
}

export default function DynamicLandingPage() {
  const router = useRouter()
  const [pageData, setPageData] = useState<PageData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const { variant = 'default' } = router.query
    const pageVariant = typeof variant === 'string' ? variant : 'default'

    // Simulate an API call or data fetching
    setTimeout(() => {
      const data = landingPages[pageVariant] || landingPages.default
      setPageData(data)
      setIsLoading(false)
    }, 500)
  }, [router.query])

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (!pageData) {
    return <div className="flex justify-center items-center h-screen">Error loading page data</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Head>
        <title>{pageData.seo.pageTitle}</title>
        <meta name="description" content={pageData.seo.pageDescription} />
        <meta name="keywords" content={pageData.seo.pageKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/techway_favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
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
              {pageData.hero.heroTitle}
            </h1>
            <p className="text-xl mb-8 text-center font-bold">
              {pageData.hero.heroSubtitle}
            </p>
            <a href="#contato" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              {pageData.hero.heroCTA}
            </a>
          </div>
        </section>

        {/* Story Section */}
        <section id="sobre" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src={pageData.story.storyImage}
                  alt={pageData.story.storyImageDescription}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{pageData.story.storyTitle}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{pageData.story.storyText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solucoes" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Veja como podemos transformar a sua rotina
            </h2>
            <p className="text-gray-300 mb-12 text-xl text-center max-w-5xl mx-auto">
              {pageData.solution.aboutsolution}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <Zap className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{pageData.solution.solutionTitle_1}</h3>
                <p className="text-gray-300 mb-6 text-center">
                  {pageData.solution.solutionText_1}
                </p>
                <div className="text-center">
                  <a 
                    href={pageData.solution.solutionctalink_1}
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-block relative group"
                  >
                    {pageData.solution.solutionctatext_1}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </div>
              </div>
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <BarChart2 className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{pageData.solution.solutionTitle_2}</h3>
                <p className="text-gray-300 mb-6 text-center">
                  {pageData.solution.solutionText_2}
                </p>
                <div className="text-center">
                  <a 
                    href={pageData.solution.solutionctalink_2}
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-block relative group"
                  >
                    {pageData.solution.solutionctatext_2}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </div>
              </div>
              <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                  <Wrench className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{pageData.solution.solutionTitle_3}</h3>
                <p className="text-gray-300 mb-6 text-center">
                  {pageData.solution.solutionText_3}
                </p>
                <div className="text-center">
                  <a 
                    href={pageData.solution.solutionctalink_3}
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-block relative group"
                  >
                    {pageData.solution.solutionctatext_3}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
     
        {/* Benefits Section */}
        <section id="beneficios" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Nossas Soluções</h2>
            <div className="space-y-6">
              {pageData.benefits.map((benefit, index) => {
                const IconComponent = iconComponents[benefit.icon]
                return (
                  <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-6 transition duration-300 hover:bg-gray-700 flex items-center">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-blue-500 rounded-full p-3">
                        {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section id="contato" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">{pageData.cta.ctaText}</h2>
            <a
              href={pageData.cta.ctaLink}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-block"
            >
              {pageData.cta.ctaButton}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
