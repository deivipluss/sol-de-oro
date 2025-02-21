'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowUp, FaUtensils, FaLeaf, FaAward } from 'react-icons/fa';
import ScrollToTop from '@/components/ui/ScrollToTop';

interface Specialty {
  title: string;
  description: string;
  image: string;
}

interface MenuCategory {
  id: string;
  name: string;
  image: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const specialties: Specialty[] = [
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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/hero-background.jpg"
          alt="Sol de Oro Restaurant"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <motion.div 
          className="container mx-auto px-4 text-center relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Sol de Oro
          </h1>
          <p className="text-xl md:text-3xl text-amber-100 mb-8 font-light">
            Tradición y Sabor en Cerro de Pasco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-primary text-lg">
              Ver Menú
            </Link>
            <Link href="/reservations" className="btn-secondary text-lg">
              Reservar Mesa
            </Link>
          </div>
        </motion.div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowUp className="text-white text-2xl rotate-180" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <feature.icon className="text-4xl text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-xl text-gray-600">Descubre nuestros platos más populares</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{specialty.title}</h3>
                    <p className="text-amber-200">{specialty.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-4">
              Explora Nuestro Menú
            </h2>
            <p className="text-xl text-gray-600">Categorías principales</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/menu?category=${category.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                  transition-all duration-300"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                      flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 
                        transition-colors duration-300">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </main>
  );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowUp, FaUtensils, FaLeaf, FaAward } from 'react-icons/fa';
import ScrollToTop from '@/components/ui/ScrollToTop';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      {/* Hero Section con Video/Imagen de Fondo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <Image
          src="/images/hero-background.jpg"
          alt="Sol de Oro Restaurant"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <motion.div 
          className="container mx-auto px-4 text-center relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Sol de Oro
          </h1>
          <p className="text-xl md:text-3xl text-amber-100 mb-8 font-light">
            Tradición y Sabor en Cerro de Pasco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu"
              className="btn-primary text-lg"
            >
              Ver Menú
            </Link>
            <Link 
              href="/reservations"
              className="btn-secondary text-lg"
            >
              Reservar Mesa
            </Link>
          </div>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowUp className="text-white text-2xl rotate-180" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <feature.icon className="text-4xl text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-xl text-gray-600">Descubre nuestros platos más populares</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{specialty.title}</h3>
                    <p className="text-amber-200">{specialty.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Carousel */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-4">
              Explora Nuestro Menú
            </h2>
            <p className="text-xl text-gray-600">Categorías principales</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/menu?category=${category.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                  transition-all duration-300"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                      flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 
                        transition-colors duration-300">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </main>
  );
}

const features = [
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

// ...existing specialties and menuCategories arrays...
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';
import ScrollToTop from '@/components/ui/ScrollToTop';

interface Specialty {';
  title: string;
  description: string;
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
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Menú
          </Link>
        </div>
      </section>
          </h1>>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 animate-fade-in-delay">        </div>
            Tradición y Sabor en Cerro de Pasco
          </p>
          <Link href="/menu" className="btn-primary">
            Ver Menú
          </Link>x-auto px-4">
        </div>lassName="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
      </section>

      {/* Especialidades Section */}sName="grid grid-cols-1 md:grid-cols-3 gap-8">
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">ty, index) => (
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Nuestras Especialidades className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl 
          </h2>tion-all duration-300 transform hover:-translate-y-2"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty) => (
              <div lty.image}
                key={specialty.title}ty.title}
                className="card-hover group relative overflow-hidden rounded-2xl shadow-lg"
              >height={300}
                <Image
                  src={specialty.image}
                  alt={specialty.title}assName="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"className="text-xl font-semibold text-white mb-2">{specialty.title}</h3>
                /> className="text-amber-200">{specialty.description}</p>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">div>
                  <div> </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{specialty.title}</h3>div>
                    <p className="text-amber-200">{specialty.description}</p>}
                  </div>
                </div>        </div>
              </div>
            ))}
          </div>
        </div>
      </section>r mx-auto px-4">
lassName="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
      {/* Menu Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">sName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Explora Nuestro Menú
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category) => ( className="group bg-amber-50 rounded-xl p-6 hover:bg-amber-100 
              <Linkhadow-lg"
                href={`/menu?category=${category.id}`}
                key={category.id}quare relative mb-4">
                className="group bg-amber-50 rounded-xl p-6 hover:bg-amber-100 
                transition-all duration-300 shadow-md hover:shadow-lg"{category.image}
              >
                <div className="aspect-square relative mb-4">     fill
                  <Imageth: 1200px) 50vw, 25vw"
                    src={category.image}sName="object-cover rounded-lg"
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"sName="text-lg font-semibold text-amber-900 group-hover:text-amber-700">
                    className="object-cover rounded-lg"
                  />
                </div>>
                <h3 className="text-lg font-semibold text-amber-900 group-hover:text-amber-700">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>Top />
        </div>
      </section>

      <ScrollToTop />
    </main>
  );
}title: "Pollo a la Brasa",
   description: "Nuestro plato estrella, marinado con especias secretas",
const specialties: Specialty[] = [    image: "/images/pollo-brasa.jpg"
  {
    title: "Pollo a la Brasa",
    description: "Nuestro plato estrella, marinado con especias secretas",
    image: "/images/pollo-brasa.jpg"
  },
  {
    title: "Parrilladas",
    description: "Selección premium de cortes a la parrilla",a",
    image: "/images/parrillada.jpg"
  },
  {
    title: "Comida Criolla",
    description: "Sabores auténticos de nuestra tierra",
    image: "/images/criolla.jpg"
  }
]; id: "pollos",
  name: "Pollos a la Brasa",
const menuCategories: MenuCategory[] = [    image: "/images/categories/pollos.jpg"
  {
    id: "pollos",
    name: "Pollos a la Brasa",s",
    image: "/images/categories/pollos.jpg"a",
  },pg"
  {
    id: "parrillas",
    name: "Carnes a la Parrilla",
    image: "/images/categories/parrillas.jpg"
  },
  {
    id: "criollos",    name: "Platos Criollos",    image: "/images/categories/criollos.jpg"  },  {    id: "bebidas",
    name: "Bebidas",
    image: "/images/categories/bebidas.jpg"
  }
];