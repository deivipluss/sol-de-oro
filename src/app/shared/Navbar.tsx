'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-display font-bold text-amber-900">
            Sol de Oro
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/menu" className="text-gray-700 hover:text-amber-600 transition-colors">
              Menú
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">
              Nosotros
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contacto
            </Link>
            <Link href="/reservations" className="btn-primary">
              Reservar
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
