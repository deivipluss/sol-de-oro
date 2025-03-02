'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUtensils, FaLeaf, FaAward, FaArrowDown } from 'react-icons/fa';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

// Interfaces para datos estructurados
interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Specialty {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface MenuCategory {
  id: string;
  name: string;
  image: string;
}

// Datos para la página principal
const features: Feature[] = [
  {
    icon: FaUtensils,
    title: "Cocina Artesanal",
    description: "Platos preparados con ingredientes frescos y técnicas tradicionales"
  },
  {
    icon: FaLeaf,
    title: "Ingredientes Premium",
    description: "Seleccionamos los mejores ingredientes locales para cada preparación"
  },
  {
    icon: FaAward,
    title: "Excelencia Culinaria",
    description: "Más de 20 años de experiencia en la gastronomía peruana"
  }
];

const specialties: Specialty[] = [
  {
    id: "pollo-brasa",
    title: "Pollo a la Brasa",
    description: "Nuestro plato estrella, marinado con especias secretas",
    image: "/images/specialties/pollo-brasa.jpg"
  },
  {
    id: "parrillada",
    title: "Parrillada Mixta",
    description: "Selección premium de cortes a la parrilla",
    image: "/images/specialties/parrillada.jpg"
  },
  {
    id: "criolla",
    title: "Comida Criolla",
    description: "Sabores auténticos de nuestra tierra",
    image: "/images/specialties/criolla.jpg"
  }
];

const menuCategories: MenuCategory[] = [
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

// Efectos de animación
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function HomePage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Verificar si estamos en el cliente para animaciones
  useEffect(() => {
    setMounted(true);
    
    // Simular carga de imágenes completada después de un tiempo
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-900 to-amber-800">
        <div className="absolute inset-0 overflow-hidden">
          <PlaceholderImage
            src="/images/hero/hero-background.jpg"
            category="background"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 drop-shadow-lg">
              Sol de Oro
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-12 font-light max-w-2xl mx-auto">
              Tradición y sabor en cada plato. La experiencia gastronómica peruana que cautivará tus sentidos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/menu" 
                className="btn-primary text-lg py-3 px-8"
              >
                Ver Menú
              </Link>
              <Link 
                href="/reservations" 
                className="btn-secondary text-lg py-3 px-8"
              >
                Reservar Mesa
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white"
          >
            <FaArrowDown className="text-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-amber-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Por qué elegirnos
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="text-2xl text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nuestras Especialidades
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Descubre los platos que nos han hecho famosos
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="aspect-[4/3] relative">
                  <PlaceholderImage
                    src={specialty.image}
                    category="food"
                    text={specialty.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-900">{specialty.title}</h3>
                  <p className="text-gray-600 mb-4">{specialty.description}</p>
                  <Link 
                    href={`/menu?specialty=${specialty.id}`}
                    className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center"
                  >
                    Ver en el menú
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Explora Nuestro Menú
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Categorías principales
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="relative group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/menu?category=${category.id}`} className="block h-full">
                  <div className="rounded-xl overflow-hidden shadow-md h-64 relative">
                    <PlaceholderImage
                      src={category.image}
                      category="food"
                      text={category.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6 group-hover:from-amber-900/70 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-100 transition-colors duration-300">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary inline-flex items-center">
              Ver menú completo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ¿Listo para vivir una experiencia culinaria inolvidable?
            </motion.h2>
            <motion.p
              className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reserva tu mesa y disfruta de los mejores sabores peruanos en un ambiente acogedor.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/reservations" className="bg-white text-amber-800 hover:bg-amber-100 py-3 px-8 rounded-lg font-medium text-lg inline-flex items-center">
                Reservar ahora
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}