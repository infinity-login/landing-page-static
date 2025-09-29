import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import FaviconSwitcher from "@/components/FaviconSwitcher"
import CookieConsentBanner from "@/components/CookieConsentBanner"
import ThirdPartyScripts from "@/components/ThirdPartyScripts"

const inter = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Arial'],
  adjustFontFallback: true, 
  preload: true,
})

export const metadata: Metadata = {
  title: "Blackfy Login - Múltiplos Perfis",
  description: "Baixe o Blackfy - Sistema avançado de navegação multi-perfil.",
  keywords: "marketing digital, cloaker, Blackfy, campanhas, segurança, navegação multi-perfil, soluções tecnológicas",
  authors: [{ name: "Blackfy" }],
  creator: "Blackfy",
  publisher: "Blackfy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://login.blackfy.tech"),
  alternates: {
    canonical: "https://login.blackfy.tech",
    languages: {
      "pt-BR": "https://login.blackfy.tech",
      "en-US": "https://login.blackfy.tech/en",
      "es-ES": "https://login.blackfy.tech/es",
    },
  },
  openGraph: {
    title: "Blackfy Login - Múltiplos Perfis",
    description: "Baixe o Blackfy - Sistema avançado de navegação multi-perfil;",
    url: "https://login.blackfy.tech",
    siteName: "Blackfy",
    images: [
      {
        url: "https://blackfy.tech/images/og-blackfy-login.jpg",
        width: 1200,
        height: 630,
        alt: "Blackfy - Soluções Tecnológicas em Marketing Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackfy Login - Múltiplos Perfis",
    description: "Baixe o Blackfy - Sistema avançado de navegação multi-perfil;",
    images: ["https://blackfy.tech/images/og-blackfy-login.jpg"],
    creator: "@blackfy",
    site: "@blackfy",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Business",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon.svg", type: "image/svg+xml", sizes: "32x32" },
      { url: "/images/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/images/favicon-192x192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
    ],
    shortcut: [{ url: "/favicon.ico" }],
  },
  other: {
    "msapplication-TileColor": "#0b0b0b",
    "theme-color": "#0b0b0b",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Blackfy",
    "application-name": "Blackfy",
    "mobile-web-app-capable": "yes",
  },
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
        <LanguageProvider>
          {children}
        </LanguageProvider>

        {/* Banner precisa vir antes dos scripts */}
        <CookieConsentBanner />

        {/* Scripts externos só rodam se o usuário aceitou */}
        <ThirdPartyScripts />
      </body>
    </html>
  )
}
