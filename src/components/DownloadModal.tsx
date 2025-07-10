'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Monitor, Apple } from 'lucide-react'
import { useTranslation } from '@/contexts/LanguageContext'

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const { t } = useTranslation()
  const handleDownload = (platform: 'windows' | 'mac') => {
    // Aqui você pode adicionar a lógica de download real
    console.log(`Downloading for ${platform}`)
    
    // Links de download reais
    const downloadUrls = {
      windows: 'https://blackfy-login.s3.us-east-1.amazonaws.com/win/BlackfyLogin.exe',
      mac: 'https://blackfy-login.s3.us-east-1.amazonaws.com/mac_silicon/BlackfyLogin.zip'
    }
    
    window.open(downloadUrls[platform], '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-black border border-white/20 rounded-xl p-8 max-w-md w-full backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {t('download_modal_title')}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-gray-300 text-center">
                  {t('download_modal_choose_version')}
                </p>

                {/* Windows Download */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDownload('windows')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg p-4 flex items-center justify-between transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Windows</div>
                      <div className="text-sm opacity-90">{t('download_modal_windows_version')}</div>
                    </div>
                  </div>
                  <Download className="w-5 h-5" />
                </motion.button>

                {/* Mac Silicon Download */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDownload('mac')}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg p-4 flex items-center justify-between transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Apple className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Mac Silicon</div>
                      <div className="text-sm opacity-90">{t('download_modal_mac_version')}</div>
                    </div>
                  </div>
                  <Download className="w-5 h-5" />
                </motion.button>

                {/* System Requirements */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {t('download_modal_requirements_title')}
                  </h3>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• {t('download_modal_req_os')}</li>
                    <li>• {t('download_modal_req_ram')}</li>
                    <li>• {t('download_modal_req_disk')}</li>
                    <li>• {t('download_modal_req_internet')}</li>
                  </ul>
                </div>

                {/* Note */}
                <p className="text-xs text-gray-400 text-center">
                  {t('download_modal_note')}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 