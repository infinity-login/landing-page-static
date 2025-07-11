'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Globe, Lock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import DownloadModal from './DownloadModal'
import { useTranslation } from '@/contexts/LanguageContext'

interface HeroProps {
  hideDownloadButton?: boolean
  cta?: React.ReactNode
  showVideoButton?: boolean
}

export default function Hero({ hideDownloadButton, cta, showVideoButton = true }: HeroProps) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const { t, lang, mounted } = useTranslation()

  const scrollToVideo = () => {
    const element = document.getElementById('video')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-full mt-32 flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-sm text-gray-300"
          >
            <span>{t('hero_subtitle')}</span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('hero_title_1')}
              <span className="text-gradient block">{t('hero_title_2')}</span>
            </h1>
            {/* Subtitle já está acima no badge */}
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Users className="w-6 h-6 text-white" />
              <span className="text-white font-medium">{t('feature_profiles_unlimited')}</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Globe className="w-6 h-6 text-white" />
              <span className="text-white font-medium">{t('feature_proxy')}</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Lock className="w-6 h-6 text-white" />
              <span className="text-white font-medium">{t('feature_antidetect')}</span>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-2 justify-center items-center"
          >
            {showVideoButton && lang === 'pt' && mounted && (
              <button
                onClick={scrollToVideo}
                className="btn btn-primary btn-lg animate-pulse-glow"
              >
                {t('cta_video')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            )}
            {!hideDownloadButton && (
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="btn btn-outline btn-lg"
              >
                {t('cta_download')}
              </button>
            )}
            {cta && cta}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-sm"
          >
            {/* Removido: 99.9% Uptime */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{t('support')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{t('encryption')}</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </section>
  )
} 