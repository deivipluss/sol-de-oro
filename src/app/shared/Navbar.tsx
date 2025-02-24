import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-600">
          Sol de Oro
        </Link>
        <div className="flex space-x-4">
          <Link href="/menu" className="text-gray-700 hover:text-amber-600">
            Menú
          </Link>
          <Link href="/reservations" className="text-gray-700 hover:text-amber-600">
            Reservaciones
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-amber-600">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}