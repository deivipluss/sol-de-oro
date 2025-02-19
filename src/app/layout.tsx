import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Sol de Oro',
    default: 'Sol de Oro Restaurant',
  },
  description: 'Restaurante de comida peruana tradicional',
  keywords: ['restaurante peruano', 'comida peruana', 'sol de oro', 'cocina peruana'],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    siteName: 'Sol de Oro Restaurant',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}