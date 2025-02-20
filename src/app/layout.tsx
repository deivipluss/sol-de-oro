import { Inter, Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Sol de Oro',
    default: 'Sol de Oro Restaurant',
  },
  description: 'Restaurante de comida peruana tradicional en Cerro de Pasco - Especialistas en pollos a la brasa y parrillas',
  keywords: [
    'restaurante peruano',
    'comida peruana',
    'sol de oro',
    'cerro de pasco',
    'pollo a la brasa',
    'parrillas',
    'comida criolla'
  ],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    siteName: 'Sol de Oro Restaurant',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sol de Oro Restaurant'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="es" 
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}