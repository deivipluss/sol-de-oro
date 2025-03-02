'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Menú', href: '/menu' },
  { name: 'Sobre nosotros', href: '/about' },
  { name: 'Reservas', href: '/reservations' },
  { name: 'Contacto', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true); // Forzar modo sólido para depuración
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              <Image 
                src="/images/ui/logo.png" 
                alt="Sol de Oro" 
                fill
                className="object-contain"
              />
            </div>
            <span className={`font-display text-xl font-bold ${
              scrolled ? 'text-amber-900' : 'text-white'
            }`}>
              Sol de Oro
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors duration-200 ${
                pathname === item.href 
                  ? (scrolled ? 'text-amber-600' : 'text-amber-300') 
                  : (scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-200')
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute h-0.5 w-full transform transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}
            />
            <span 
              className={`absolute h-0.5 w-full top-2 transform transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span 
              className={`absolute h-0.5 w-full transform transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium px-2 py-2 rounded-md transition-colors duration-200 ${
                      pathname === item.href 
                        ? 'text-amber-600 bg-amber-50' 
                        : 'text-gray-800 hover:text-amber-600 hover:bg-amber-50/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}