import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

interface MenuItem {
  href: string;
  label: string;
}

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const menuItems: MenuItem[] = [
    { href: "/#sobre", label: "Sobre" },
    { href: "/#solucoes", label: "Soluções" },
    { href: "/#depoimentos", label: "Depoimentos" },
    { href: "/#contato", label: "Contato" },
  ];

  return (
    <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_techway_semslogan_transparent.png"
            alt="Logo da TECHWAY"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-blue-400 transition-colors duration-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <ul className="flex flex-col items-center space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-blue-400 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
