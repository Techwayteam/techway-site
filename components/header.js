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
