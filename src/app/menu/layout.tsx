import { Suspense } from 'react'
import Loading from './loading'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata = {
  title: 'Menú | Sol de Oro',
  description: 'Explora nuestro menú de platillos y bebidas tradicionales peruanos',
  keywords: ['restaurante', 'menu', 'comida peruana', 'sol de oro', 'cocina peruana'],
  openGraph: {
    title: 'Menú | Sol de Oro',
    description: 'Explora nuestro menú de platillos y bebidas tradicionales peruanos',
    type: 'website',
    locale: 'es_PE',
  },
}

interface MenuLayoutProps {
  children: React.ReactNode
}

export default function MenuLayout({ children }: MenuLayoutProps) {
  return (
    <Suspense fallback={<Loading />}>
      <main className={`min-h-screen bg-gradient-to-b from-gray-50 to-white ${inter.className} font-sans`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </main>
    </Suspense>
  )
}