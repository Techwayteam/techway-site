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
          <h3 className="text-lg font-bold text-white mb-2">Fale Conosco</h3>
          <address className="not-italic">
            <p>
              <span className="font-bold">E-mail:{" "}</span>
              <a
                href="mailto:contato@techway.com"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                contato@techway.com
              </a>
            </p>
            <p>
              <span className="font-bold">WhatsApp:{" "}</span>
              <a
                href="https://wa.me/5521980343553"
                className="hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                (21) 9 8034-3553
              </a>
            </p>
          </address>
          <div className="flex space-x-4 mt-4">
            {[
              { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
              { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
              { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                className="hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
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
