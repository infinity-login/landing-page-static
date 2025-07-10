'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Users, Clock } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from '@/contexts/LanguageContext'

export default function Benefits() {
  const { t } = useTranslation()
  const benefits = [
    {
      icon: null,
      title: t('benefit_0_title'),
      description: t('benefit_0_desc'),
      stats: t('benefit_0_stats'),
      customIcon: true
    },
    {
      icon: TrendingUp,
      title: t('benefit_1_title'),
      description: t('benefit_1_desc'),
      stats: t('benefit_1_stats')
    },
    {
      icon: CheckCircle,
      title: t('benefit_2_title'),
      description: t('benefit_2_desc'),
      stats: t('benefit_2_stats')
    },
    {
      icon: Users,
      title: t('benefit_3_title'),
      description: t('benefit_3_desc'),
      stats: t('benefit_3_stats')
    },
    {
      icon: Clock,
      title: t('benefit_4_title'),
      description: t('benefit_4_desc'),
      stats: t('benefit_4_stats')
    }
  ]

  const testimonials = [
    {
      name: t('testimonial_1_name'),
      role: t('testimonial_1_role'),
      content: t('testimonial_1_content'),
      avatar: 'CS',
    },
    {
      name: t('testimonial_2_name'),
      role: t('testimonial_2_role'),
      content: t('testimonial_2_content'),
      avatar: 'MS',
    },
    {
      name: t('testimonial_3_name'),
      role: t('testimonial_3_role'),
      content: t('testimonial_3_content'),
      avatar: 'JO',
    },
  ]

  return (
    <section id="beneficios" className="section bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t('benefits_title')} <span className="text-gradient">{t('benefits_title_highlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('benefits_subtitle')}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0,1,2,3,4].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card hover:border-white/30 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300 flex-shrink-0">
                      {index === 0 ? (
                        <Image src="/favicons/favicon-light.ico" alt="Favicon Blackfy" width={32} height={32} className="rounded" />
                      ) : index === 1 ? (
                        <TrendingUp className="w-8 h-8 text-white" />
                      ) : index === 2 ? (
                        <CheckCircle className="w-8 h-8 text-white" />
                      ) : index === 3 ? (
                        <Users className="w-8 h-8 text-white" />
                      ) : (
                        <Clock className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                        {t(`benefit_${index}_title`)}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        {t(`benefit_${index}_desc`)}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-3 py-1 text-sm font-medium">
                        <CheckCircle className="w-4 h-4" />
                        {t(`benefit_${index}_stats`)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('testimonials_title')}
              </h3>
              <p className="text-gray-300">
                {t('testimonials_subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card hover:border-white/30 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center mt-4 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('stats_users')}</h4>
                <p className="text-gray-300">{t('stats_users_label')}</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('stats_countries')}</h4>
                <p className="text-gray-300">{t('stats_countries_label')}</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('stats_support')}</h4>
                <p className="text-gray-300">{t('stats_support_label')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 