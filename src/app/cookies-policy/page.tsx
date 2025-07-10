"use client"

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, FileText, Shield, Cookie } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/contexts/LanguageContext'

export default function CookiesPolicyPage() {
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
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
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
                    className="flex items-center space-x-3 px-4 py-3 bg-gray-800 text-white rounded-lg"
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
                <h1 className="text-3xl font-bold mb-6">{t('cookies_policy_title')}</h1>
                <div>
                  {/* Capítulo 1 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_1')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_1_text')}</p>
                  
                  {/* Capítulo 2 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_2')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_2_text')}</p>
                  
                  {/* Capítulo 3 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_3')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_3_text')}</p>
                  
                  {/* Capítulo 4 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_4')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_4_text')}</p>
                  
                  {/* Capítulo 5 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_5')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_5_text')}</p>
                  
                  {/* Capítulo 6 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_6')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_6_text')}</p>
                  
                  {/* Capítulo 7 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_7')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_7_text')}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t('cookies_policy_chapter_7_necessary')}</h3>
                  <p className="mb-4">{t('cookies_policy_chapter_7_necessary_text')}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t('cookies_policy_chapter_7_functional')}</h3>
                  <p className="mb-4">{t('cookies_policy_chapter_7_functional_text')}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t('cookies_policy_chapter_7_preferences')}</h3>
                  <p className="mb-4">{t('cookies_policy_chapter_7_preferences_text')}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t('cookies_policy_chapter_7_statistics')}</h3>
                  <p className="mb-4">{t('cookies_policy_chapter_7_statistics_text')}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t('cookies_policy_chapter_7_optional')}</h3>
                  <p className="mb-4">{t('cookies_policy_chapter_7_optional_text')}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t('cookies_policy_chapter_7_marketing')}</h3>
                  <p className="mb-4">{t('cookies_policy_chapter_7_marketing_text')}</p>
                  
                  {/* Capítulo 8 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_8')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_8_text')}</p>
                  
                  {/* Capítulo 9 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_9')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_9_text')}</p>
                  
                  {/* Capítulo 10 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_10')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_10_text')}</p>
                  
                  {/* Capítulo 11 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_11')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_11_text')}</p>
                  
                  {/* Capítulo 12 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_12')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_12_text')}</p>
                  
                  {/* Capítulo 13 */}
                  <h2 className="text-xl font-semibold mt-8 mb-2">{t('cookies_policy_chapter_13')}</h2>
                  <p className="mb-4">{t('cookies_policy_chapter_13_text')}</p>
                  <p className="mb-4"><strong>{t('cookies_policy_effective_date')}</strong></p>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    {t('cookies_policy_last_update')}
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