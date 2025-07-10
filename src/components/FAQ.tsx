'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import DownloadModal from './DownloadModal'
import { useTranslation } from '@/contexts/LanguageContext'

const faqs = [
  { question: 'faq_q0', answer: 'faq_a0' },
  ...Array.from({ length: 10 }, (_, i) => ({
    question: `faq_q${i+1}`,
    answer: `faq_a${i+1}`
  }))
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const { t, lang } = useTranslation()

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {t('faq_title')} <span className="text-gradient">{t('faq_title_highlight')}</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('faq_subtitle')}
            </p>
          </motion.div>

          {/* FAQ Grid */}
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-gray-700 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200 px-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {t(faq.question)}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-4">
                        <p className="text-gray-300 leading-relaxed">
                          {t(faq.answer)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA após FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('faq_cta_title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('faq_cta_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="btn btn-primary"
                >
                  {t('cta_download')}
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => {
                    if (lang === 'pt') {
                      window.open('https://wa.me/5534984296807?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.', '_blank')
                    } else {
                      window.open('mailto:contact@blackfy.tech', '_blank')
                    }
                  }}
                >
                  {t('faq_cta_support')}
                </button>
              </div>
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