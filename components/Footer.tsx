import React from 'react';
import Link from 'next/link';
import useContactPage from '../hooks/useContactPage';
import WhatsAppLink from './WhatsAppLink';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const contactPage = useContactPage();

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
              <WhatsAppLink
                message="Olá! Vi o site de vocês e quero falar com o time."
                page={contactPage}
                cta="rodape"
                className="hover:text-blue-400 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                (21) 99167-3541
              </WhatsAppLink>
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
