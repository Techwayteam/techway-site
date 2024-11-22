import Head from 'next/head'
import Image from 'next/image'
import { CheckCircle, Award, Zap, BarChart2, Headphones } from 'lucide-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import { landingPages } from '../data/landingPages'
import { PageData } from '../types/PageData'

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
        <section className="relative h-screen flex items-center justify-center text-white">
          <Image
            src={pageData.hero.heroImage}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">{pageData.hero.heroTitle}</h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-300">{pageData.hero.heroSubtitle}</p>
              <a
                href="#contato"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-block"
              >
                {pageData.hero.heroCTA}
              </a>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="sobre" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src={pageData.story.storyImage}
                  alt="Nossa história"
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

        {/* Benefits Section */}
        <section id="solucoes" className="py-20 bg-gray-900">
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

        {/* Solution Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{pageData.solution.solutionTitle}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{pageData.solution.solutionText}</p>
            </div>
          </div>
        </section>

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
