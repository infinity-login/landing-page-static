'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Globe, 
  Lock, 
  Zap, 
  Eye, 
  Server, 
  Smartphone,
  Monitor,
  Fingerprint,
  Database
} from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from '@/contexts/LanguageContext'

export default function Features() {
  const { t } = useTranslation()
  const features = [
    {
      icon: null,
      title: t('feature_blackfy_technology'),
      description: t('feature_blackfy_technology_desc'),
      customIcon: true
    },
    {
      icon: Users,
      title: t('feature_profiles_unlimited'),
      description: t('feature_profiles_unlimited_desc')
    },
    {
      icon: Eye,
      title: t('feature_antidetect'),
      description: t('feature_antidetect_desc')
    },
    {
      icon: Globe,
      title: t('feature_proxy'),
      description: t('feature_proxy_desc')
    },
    {
      icon: Lock,
      title: t('feature_encryption'),
      description: t('feature_encryption_desc')
    },
    {
      icon: Zap,
      title: t('feature_performance'),
      description: t('feature_performance_desc')
    },
    {
      icon: Eye,
      title: t('feature_invisibility'),
      description: t('feature_invisibility_desc')
    },
    {
      icon: Server,
      title: t('feature_cloud'),
      description: t('feature_cloud_desc')
    },
    {
      icon: Smartphone,
      title: t('feature_mobile'),
      description: t('feature_mobile_desc')
    },
    {
      icon: Monitor,
      title: t('feature_multiwindow'),
      description: t('feature_multiwindow_desc')
    },
    {
      icon: Fingerprint,
      title: t('feature_fingerprint'),
      description: t('feature_fingerprint_desc')
    },
    {
      icon: Database,
      title: t('feature_management'),
      description: t('feature_management_desc')
    }
  ]

  return (
    <section id="recursos" className="section bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t('features_title')} <span className="text-gradient">{t('features_title_highlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('features_subtitle')}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 flex flex-col items-center text-center"
              >
                {feature.title === t('feature_blackfy_technology') ? (
                    <Image src="/images/Logoambar.svg" alt="Logo Blackfy Ambar" width={40} height={40} className="mb-4" style={{ filter: 'none' }} />
                ) : feature.customIcon ? (
                    <Image src="/images/Logoambar.svg" alt="Blackfy" width={40} height={40} className="mb-4" style={{ filter: 'none' }} />
                ) : (
                    feature.icon && <feature.icon className="w-10 h-10 text-amber-400 mb-4" />
                )}
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 