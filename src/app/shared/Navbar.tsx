'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Menú', href: '/menu' },
  { name: 'Sobre nosotros', href: '/about' },
  { name: 'Reservas', href: '/reservations' },
  { name: 'Contacto', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Manejar el efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Inicializar
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-2">
              <PlaceholderImage
                src="/images/ui/logo.png"
                category="logo"
                text="Sol de Oro"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className={`font-display text-xl font-bold ${
              scrolled ? 'text-amber-800' : 'text-white'
            }`}>
              Sol de Oro
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href
                    ? scrolled ? 'text-amber-600' : 'text-amber-300'
                    : scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Menú"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span 
                className={`block h-0.5 w-full transition-all transform ${
                  scrolled ? 'bg-amber-900' : 'bg-white'
                } ${isOpen ? 'rotate-45 translate-y-2' : ''}`} 
              />
              <span 
                className={`block h-0.5 w-full transition-all ${
                  scrolled ? 'bg-amber-900' : 'bg-white'
                } ${isOpen ? 'opacity-0' : 'opacity-100'}`} 
              />
              <span 
                className={`block h-0.5 w-full transition-all transform ${
                  scrolled ? 'bg-amber-900' : 'bg-white'
                } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block py-2 px-3 rounded-md transition-colors ${
                        pathname === item.href
                          ? 'bg-amber-50 text-amber-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-amber-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}