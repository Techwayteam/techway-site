import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Techway - Your Path to Efficiency</title>
        <meta name="description" content="Techway provides intelligent solutions tailored to the unique needs of each business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-400">TECHWAY</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Path to <span className="text-blue-400">Efficiency</span></h1>
            <p className="text-xl mb-8">Solutions that Save Time, Streamline Processes, and Drive Results</p>
            <div className="space-x-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Get Started
              </a>
              <a href="#services" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-800 text-white py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
      About <span className="text-blue-400">Techway</span>
    </h2>
    <div className="max-w-3xl mx-auto">
      <p className="text-lg mb-4 text-center">
        At Techway, we simplify the complex. Founded by three tech enthusiasts, we craft intelligent solutions tailored to each business's needs – from automated workflows to data-driven insights.
      </p>
      <p className="text-lg mb-4 text-center">
        Our mission is to be the guiding path to efficiency, delivering agile, personalized, and effective technological solutions that drive real results.
      </p>
    </div>
  </div>
</section>

        <section id="services" className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our <span className="text-blue-400">Services</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
                <h3 className="text-xl font-bold mb-4">Process Automation</h3>
                <p>Streamline your workflows with custom automation solutions</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
                <h3 className="text-xl font-bold mb-4">Digital Solutions</h3>
                <p>Custom applications and tools for your specific needs</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
                <h3 className="text-xl font-bold mb-4">Data Insights</h3>
                <p>Transform your data into actionable insights</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact <span className="text-blue-400">Us</span></h2>
            <p className="text-xl mb-8">Ready to start your journey to efficiency? Get in touch with us today!</p>
            <a href="mailto:contact@techway.com" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Techway. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
