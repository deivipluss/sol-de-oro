'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-amber-100/70 to-white/30 animate-pulse-slow" />
        <Image
          src="/images/hero-background.jpg"
          alt="Sol de Oro Restaurant"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="z-[-1]"
        />
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 animate-fade-in">
            Sol de Oro
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 animate-fade-in-delay">
            Tradición y Sabor en Cerro de Pasco
          </p>
          <Link 
            href="/menu"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full
            transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Menú
          </Link>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Nuestras Especialidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div 
                key={specialty.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-2"
              >
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{specialty.title}</h3>
                    <p className="text-amber-200">{specialty.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Explora Nuestro Menú
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <Link
                href={`/menu?category=${category.id}`}
                key={category.id}
                className="group bg-amber-50 rounded-xl p-6 hover:bg-amber-100 
                transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="aspect-square relative mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-amber-900 group-hover:text-amber-700">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </main>
  );
}

const specialties = [
  {
    title: "Pollo a la Brasa",
    description: "Nuestro plato estrella, marinado con especias secretas",
    image: "/images/pollo-brasa.jpg"
  },
  {
    title: "Parrilladas",
    description: "Selección premium de cortes a la parrilla",
    image: "/images/parrillada.jpg"
  },
  {
    title: "Comida Criolla",
    description: "Sabores auténticos de nuestra tierra",
    image: "/images/criolla.jpg"
  }
];

const menuCategories = [
  {
    id: "pollos",
    name: "Pollos a la Brasa",
    image: "/images/categories/pollos.jpg"
  },
  {
    id: "parrillas",
    name: "Carnes a la Parrilla",
    image: "/images/categories/parrillas.jpg"
  },
  {
    id: "criollos",
    name: "Platos Criollos",
    image: "/images/categories/criollos.jpg"
  },
  {
    id: "bebidas",
    name: "Bebidas",
    image: "/images/categories/bebidas.jpg"
  }
];