'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Info de contacto */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 mr-3">
                <PlaceholderImage
                  src="/images/ui/logo.png"
                  category="logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Sol de Oro</h3>
            </div>
            <p className="mb-6 opacity-90">
              Disfruta de la auténtica gastronomía peruana en un ambiente acogedor y familiar.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="mr-3 text-amber-300" />
                <span>(+51) 987-654-321</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-amber-300" />
                <span>info@soldeoro.pe</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-amber-300" />
                <span>Av. Principal 123, Cerro de Pasco</span>
              </div>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-amber-300 transition-colors">
                  Menú
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-amber-300 transition-colors">
                  Reservaciones
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Horarios de atención</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Lunes - Jueves:</span>
                <span>11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Viernes - Sábado:</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>12:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-300">
          <p>&copy; {currentYear} Sol de Oro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
