'use client'

import { motion } from 'framer-motion'
import { Play, Users, Clock, Star } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'
import DownloadModal from './DownloadModal'
import { useState } from 'react'

export default function VideoSection() {
  const { lang, t } = useTranslation()
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  // Só exibe o vídeo para português
  if (lang !== 'pt') {
    return null
  }

  return (
    <section id="video" className="section bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t('video_title_1')} <span className="text-gradient">{t('video_title_2')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubra como revolucionar sua navegação com nosso sistema de perfis múltiplos
            </p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="gradient-border">
              <div className="video-container rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/JDfSNwq2jZQ?rel=0&modestbranding=1&showinfo=0"
                  title="Blackfy Login - Demonstração Completa"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Video stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">10.000+</h3>
              <p className="text-gray-400 text-sm">Usuários Ativos</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">2 Min</h3>
              <p className="text-gray-400 text-sm">Tempo de Setup</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">4.9/5</h3>
              <p className="text-gray-400 text-sm">Avaliação Média</p>
            </div>
          </motion.div>

          {/* CTA após o vídeo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para Baixar?
            </h3>
            <p className="text-gray-300 mb-6">
              Baixe agora e descubra a liberdade de navegar com total privacidade
            </p>
            <button className="btn btn-primary btn-lg animate-pulse-glow" onClick={() => setIsDownloadModalOpen(true)}>
              {t('cta_download')}
            </button>
          </motion.div>
        </div>
      </div>
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </section>
  )
} 