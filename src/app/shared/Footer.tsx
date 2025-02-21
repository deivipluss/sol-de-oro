import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Sol de Oro</h3>
            <p className="text-amber-200">Tradición y Sabor en Cerro de Pasco</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/menu">Menú</Link></li>
              <li><Link href="/about">Nosotros</Link></li>
              <li><Link href="/contact">Contacto</Link></li>
              <li><Link href="/reservations">Reservaciones</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-amber-300 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-amber-300 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-amber-300 transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300">
          <p>&copy; {new Date().getFullYear()} Sol de Oro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
