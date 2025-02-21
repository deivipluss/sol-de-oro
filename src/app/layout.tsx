import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Providers } from '@/providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Sol de Oro Restaurant',
  description: 'Tradición y Sabor en Cerro de Pasco',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`min-h-screen bg-background ${inter.className} ${playfair.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}