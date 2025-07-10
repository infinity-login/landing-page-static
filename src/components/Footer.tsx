'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from '@/contexts/LanguageContext'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const { t, lang } = useTranslation()
  const pathname = usePathname()
  const isThankYouPage = pathname === '/thank-you'
  const isInfoPage = ['/terms-of-service', '/privacy-policy', '/cookies-policy'].includes(pathname ?? '');
  const isPricingPage = pathname === '/pricing'
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-start md:justify-items-center lg:justify-items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-start-1 md:col-end-2 md:order-1"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-36 h-16 relative">
                <Image
                  src="/images/logotipo.png"
                  alt="Blackfy Logo"
                  width={144}
                  height={64}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer_desc')}
            </p>
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400">{t('system_online')}</span>
            </div>
          </motion.div>

          {/* Produto */}
          {!(isThankYouPage || isInfoPage) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 md:col-start-2 md:col-end-3 md:order-2 md:justify-self-end"
            >
              <h3 className="text-lg font-semibold text-white">{t('footer_product')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#recursos" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {t('footer_link_features')}
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {t('footer_link_benefits')}
                  </a>
                </li>
                <li>
                  <a href="#video" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {t('footer_link_demo')}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {t('footer_link_faq')}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-start-3 md:col-end-4 md:order-3 md:justify-self-end"
          >
            <h3 className="text-lg font-semibold text-white">{t('footer_contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:contact@blackfy.tech" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('footer_email')}
                </a>
              </li>
              {lang === 'pt' && (
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white" />
                <a
                  href="https://wa.me/5534984296807?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t('footer_phone')}
                </a>
              </li>
              )}
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-gray-300 text-sm">
                  {t('footer_location')}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm">
                {t('footer_copyright')}
              </p>
            </motion.div>

            {/* Links legais */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer_link_terms')}
              </a>
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer_link_privacy')}
              </a>
              <a href="/cookies-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer_link_cookies')}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
} 