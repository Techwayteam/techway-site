import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-700 text-white py-8 ${className}`}>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Identidade */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Techway</h3>
          <p>Transformando negócios com tecnologia eficiente e personalizada.</p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2 text-left md:text-right">Fale Conosco</h3>
          <address className="not-italic text-left md:text-right">
            <p>
              <span className="font-bold">E-mail:{" "}</span>
              <a
                href="mailto:leonardo@techway.one"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                leonardo@techway.one
              </a>
            </p>
            <p>
              <span className="font-bold">WhatsApp:{" "}</span>
              <a
                href="https://wa.me/5521991673541?text=Ol%C3%A1!%20Vi%20o%20site%20de%20voc%C3%AAs%20e%20quero%20falar%20com%20o%20time." 
                className="hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                (21) 99167-3541
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Informações Legais */}
      <div className="text-center mt-8 text-sm text-white">
        <p>© {new Date().getFullYear()} TECHWAY. Todos os direitos reservados.</p>
        <p>
          <Link href="/termos" className="hover:text-blue-400 transition-colors duration-300">
            Termos de Uso
          </Link>{" "}
          |{" "}
          <Link href="/privacidade" className="hover:text-blue-400 transition-colors duration-300">
            Política de Privacidade
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
