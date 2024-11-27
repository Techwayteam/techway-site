import Head from 'next/head'
import Image from 'next/image'
import { CheckCircle, Award, Zap, BarChart2, Headphones } from 'lucide-react'
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
  Headphones
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
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
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{pageData.solution.solutionTitle}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{pageData.solution.solutionText}</p>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section id="solucoes" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Nossas Soluções</h2>
            <div className="space-y-6">
              {pageData.benefits.map((benefit, index) => {
                const IconComponent = iconComponents[benefit.icon]
                return (
                  <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 hover:bg-gray-700 flex items-center">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-blue-500 rounded-full p-3">
                        <IconComponent className="w-8 h-8 text-white" />
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
        <section id="contato" className="py-20 bg-gray-900">
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
