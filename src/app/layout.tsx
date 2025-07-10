import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import FaviconSwitcher from '@/components/FaviconSwitcher'

const inter = Inter({ subsets: ['latin'] })

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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KWRX7DPL');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWRX7DPL"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 