import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Identidade */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Techway</h3>
          <p>Transformando negócios com tecnologia eficiente e personalizada.</p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Fale Conosco</h3>
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
            >
              (21) 9 8034-3553
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
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
