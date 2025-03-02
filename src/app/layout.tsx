import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Providers } from '@/providers'
import Navbar from '@/app/shared/Navbar'
import Footer from '@/app/shared/Footer'
import './emergency.css'; // Importar CSS de emergencia

// Configuración de fuentes
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sol de Oro Restaurant',
  description: 'Restaurante de comida peruana en Cerro de Pasco',
  metadataBase: new URL('https://sol-de-oro.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-black antialiased">
        <Providers>
          <div className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-16 bg-white">
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}