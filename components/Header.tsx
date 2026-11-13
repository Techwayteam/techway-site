import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/router';
import WhatsAppLink from './WhatsAppLink';
import useContactPage from '../hooks/useContactPage';

interface MenuItem {
  href: string;
  label: string;
}

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contactPage = useContactPage();
  const isHome = useRouter().pathname === '/';
  const homePath = contactPage.startsWith('blog/')
    ? `/?origem=${encodeURIComponent(contactPage)}`
    : '/';

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const menuItems: MenuItem[] = [
    { href: `${homePath}#solucoes`, label: "Solução" },
    { href: `${homePath}#exemplo`, label: "Na prática" },
    { href: `${homePath}#como-funciona`, label: "Como funciona" },
    { href: `${homePath}#depoimentos`, label: "Clientes" },
    { href: `${homePath}#visao`, label: "Nossa visão" },
    { href: `${homePath}#faq`, label: "Dúvidas" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href={homePath}
          className={isHome ? "tw-brand-frame flex items-center" : "flex items-center"}
          aria-label="Techway — página inicial"
        >
          <Image
            src="/logo_techway_semslogan_transparent.png"
            alt="Logo oficial da Techway"
            width={120}
            height={40}
            priority={isHome}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden lg:block" aria-label="Navegação principal">
          <ul className="flex items-center space-x-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded hover:text-blue-400 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {isHome && (
          <WhatsAppLink
            message="Olá! Gostaria de conhecer o funcionário digital de atendimento da Techway."
            page={contactPage}
            cta="cabecalho"
            className="tw-header-cta"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Vamos conversar
          </WhatsAppLink>
        )}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="menu-mobile"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {isMenuOpen && (
        <nav id="menu-mobile" className="lg:hidden bg-gray-800 py-2" aria-label="Navegação móvel">
          <ul className="flex flex-col items-center space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-4 py-2 hover:text-blue-400 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
