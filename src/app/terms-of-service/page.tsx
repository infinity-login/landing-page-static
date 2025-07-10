'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, FileText, Shield, Cookie } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/contexts/LanguageContext'

export default function TermsOfService() {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Menu Lateral */}
            <div className="lg:w-64 flex-shrink-0 mt-8">
              <div className="sticky top-28">
                <h3 className="text-lg font-semibold text-white mb-4">{t('info_pages_title')}</h3>
                <nav className="space-y-2">
                  <Link 
                    href="/terms-of-service"
                    className="flex items-center space-x-3 px-4 py-3 bg-gray-800 text-white rounded-lg"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{t('terms_menu')}</span>
                  </Link>
                  <Link 
                    href="/privacy-policy"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    <span>{t('privacy_menu')}</span>
                  </Link>
                  <Link 
                    href="/cookies-policy"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <Cookie className="w-4 h-4" />
                    <span>{t('cookies_menu')}</span>
                  </Link>
                </nav>
                
                {/* Botão Voltar */}
                <div className="mt-8">
                  <Link 
                    href="/"
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('back_to_site')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="flex-1">
              <div className="max-w-3xl text-gray-200">
                <h1 className="text-3xl font-bold mb-6">{t('terms_title')}</h1>
                <p className="mb-4">{t('terms_intro')}</p>
                
                <h2 className="text-xl font-semibold mt-8 mb-2">{t('terms_section1_title')}</h2>
                <p className="mb-4">{t('terms_section1_text')}</p>
                
                <h2 className="text-xl font-semibold mt-8 mb-2">{t('terms_section2_title')}</h2>
                <p className="mb-4">{t('terms_section2_text')}</p>
                
                <h2 className="text-xl font-semibold mt-8 mb-2">{t('terms_section3_title')}</h2>
                <p className="mb-4">{t('terms_section3_text')}</p>
                
                <h2 className="text-xl font-semibold mt-8 mb-2">{t('terms_section4_title')}</h2>
                <p className="mb-4">{t('terms_section4_text')}</p>
                
                <h2 className="text-xl font-semibold mt-8 mb-2">{t('terms_section5_title')}</h2>
                <p className="mb-4">{t('terms_section5_text')}</p>
                
                <h2 className="text-xl font-semibold mt-8 mb-2">{t('terms_section6_title')}</h2>
                <p className="mb-4">{t('terms_section6_text')}</p>
                
                <h2 className="text-xl font-semibold mt-8 mb-2">{t('terms_section7_title')}</h2>
                <p className="mb-4">{t('terms_section7_text')}</p>
                
                <h2 className="text-xl font-semibold mt-8 mb-2">{t('terms_section8_title')}</h2>
                <p className="mb-4">{t('terms_section8_text')}</p>
                
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    {t('terms_last_update')} {new Date().toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 