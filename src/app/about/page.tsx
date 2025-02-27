'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/hero/about-hero.jpg"  // Ruta local
          alt="Sobre nosotros"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nuestra Historia
          </motion.h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={fadeIn.transition}
              viewport={{ once: true }}
              className="prose prose-lg lg:prose-xl mx-auto"
            >
              <h2>Un legado de tradición y sabor</h2>
              <p>
                Sol de Oro comenzó como un pequeño restaurante familiar en el corazón de Cerro de Pasco en 1998. 
                Fundado por la familia Rodríguez, nuestro restaurante nació del deseo de compartir las recetas 
                tradicionales peruanas que habían pasado de generación en generación.
              </p>
              
              <p>
                Durante más de dos décadas, nos hemos dedicado a perfeccionar cada plato, manteniendo la esencia 
                de la cocina peruana mientras incorporamos técnicas modernas que realzan los sabores y presentaciones.
              </p>

              <blockquote>
                "Nuestra misión es preservar la rica herencia culinaria del Perú mientras ofrecemos una experiencia 
                gastronómica que celebra los sabores auténticos de nuestra tierra."
              </blockquote>
              
              <h3>Compromiso con la calidad</h3>
              <p>
                En Sol de Oro, seleccionamos cuidadosamente cada ingrediente, trabajando de cerca con productores 
                locales para garantizar la frescura y calidad de nuestros platos. Creemos que la gastronomía peruana 
                merece ser representada con los más altos estándares.
              </p>
              
              <p>
                Nuestro equipo de chefs combina conocimientos tradicionales con innovación culinaria, creando platos 
                que rinden homenaje a las raíces peruanas mientras sorprenden con toques contemporáneos que cautivan 
                todos los sentidos.
              </p>
              
              <h3>Una experiencia inolvidable</h3>
              <p>
                Más allá de la excelencia culinaria, en Sol de Oro nos esforzamos por crear un ambiente acogedor donde 
                cada cliente se sienta como en casa. Nuestro servicio atento y personalizado complementa la experiencia 
                gastronómica, haciendo de cada visita un momento especial para recordar.
              </p>
              
              <p>
                Hoy, después de años de crecimiento y evolución, seguimos fieles a nuestros valores originales: 
                autenticidad, excelencia y pasión por la gastronomía peruana. Te invitamos a formar parte de nuestra 
                historia y disfrutar de la magia de Sol de Oro.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
