import React from 'react';

export default function Footer() {
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
            <a href="mailto:contato@techway.com" className="hover:text-blue-400">
              contato@techway.com
            </a>
          </p>
          <p>
            <span className="font-bold">WhatsApp:{" "}</span>
            <a
              href="https://wa.me/5521980343553"
              className="hover:text-blue-400"
            >
              (21) 9 8034-3553
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-blue-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Informações Legais */}
      <div className="text-center mt-8 text-sm text-white">
        <p>© {new Date().getFullYear()} TECHWAY. Todos os direitos reservados.</p>
        <p>
          <a href="/termos" className="hover:text-blue-400">
            Termos de Uso
          </a>{" "}
          |{" "}
          <a href="#privacidade" className="hover:text-blue-400">
            Política de Privacidade
          </a>
        </p>
      </div>
    </footer>
  );
}
