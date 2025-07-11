'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import PricingPlans from '@/components/PricingPlans'
import { useTranslation } from '@/contexts/LanguageContext'
import React, { useRef } from 'react'

function ScrollToPlansButton() {
  const { t } = useTranslation()
  return (
    <button
      onClick={() => {
        const el = document.getElementById('planos')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }}
      className="btn btn-outline btn-lg"
    >
      {t('see_plans')}
    </button>
  )
}

export default function Pricing() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen bg-black">
      <Header hideDownloadButton showPlansButton={true} disableLogoLink />
      <Hero cta={<ScrollToPlansButton />} hideDownloadButton showVideoButton={true} />
      <VideoSection />
      <Features />
      <Benefits />
      <section className="w-full max-w-3xl mx-auto text-center mb-8 mt-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">{t('pricing_page_title')}</h1>
        <p className="text-gray-400 md:text-lg">{t('pricing_page_subtitle')}</p>
      </section>
      <PricingPlans />
      <FAQ />
      <Footer />
    </div>
  )
} 