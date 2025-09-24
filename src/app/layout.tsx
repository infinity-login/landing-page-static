import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import FaviconSwitcher from '@/components/FaviconSwitcher'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import ThirdPartyScripts from '@/components/ThirdPartyScripts'

const inter = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Arial'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Blackfy Login - Multiplos Perfis',
  description: 'Baixe o Blackfy - Sistema avançado de navegação multi-perfil',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/favicon.ico' },
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/images/favicon-192x192.svg', sizes: '192x192', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/images/favicon-192x192.svg', sizes: '192x192', type: 'image/svg+xml' }
    ],
    shortcut: [
      { url: '/favicon.ico' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <FaviconSwitcher />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <ThirdPartyScripts />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <CookieConsentBanner />
      </body>
    </html>
  )
} 