'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Image from 'next/image'
import DownloadModal from './DownloadModal'
import Link from 'next/link'
import { useTranslation } from '@/contexts/LanguageContext'
import React from 'react'

interface HeaderProps {
  hideDownloadButton?: boolean
  showPlansButton?: boolean
  hideMenuItems?: boolean
  disableLogoLink?: boolean
}

export default function Header({ hideDownloadButton, showPlansButton = false, hideMenuItems = false, disableLogoLink = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const { t, lang } = useTranslation()

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 50
        setIsScrolled(prev => (prev === scrolled ? prev : scrolled))
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-glass border-b border-border/10' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {disableLogoLink ? (
              <div className="w-36 h-12 flex items-center relative select-none cursor-default">
                <Image
                  src="/LOGIN.svg"
                  alt="Blackfy Logo"
                  width={144}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </div>
            ) : (
              <Link href="/">
                <div className="w-36 h-12 flex items-center relative cursor-pointer">
                  <Image
                    src="/LOGIN.svg"
                    alt="Blackfy Logo"
                    width={144}
                    height={48}
                    className="rounded-lg object-contain"
                  />
                </div>
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!hideMenuItems && (
              <>
                <button
                  onClick={() => scrollToSection('recursos')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav_features')}
                </button>
                {lang === 'pt' && (
                  <button
                    onClick={() => scrollToSection('video')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t('nav_demo')}
                  </button>
                )}
                <button
                  onClick={() => scrollToSection('beneficios')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav_benefits')}
                </button>
                {showPlansButton && (
                  <button
                    onClick={() => {
                      const el = document.getElementById('planos');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white hover:text-amber-400 transition-colors font-semibold"
                    type="button"
                  >
                    {t('nav_plans')}
                  </button>
                )}
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav_faq')}
                </button>
              </>
            )}
            {!hideDownloadButton && (
              <button
                onClick={() => setIsDownloadModalOpen(true)}
                className="btn btn-primary"
              >
                <Download className="w-4 h-4 mr-2" />
                {t('nav_download')}
              </button>
            )}
            {/* Dropdown de idioma */}
            <LanguageDropdown />
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-glass border-t border-border/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col items-end">
              <nav className="flex flex-col space-y-4 items-end w-full">
                {!hideMenuItems && <>
                  <button
                    onClick={() => scrollToSection('recursos')}
                    className="text-gray-300 hover:text-white transition-colors text-right w-full"
                  >
                    {t('nav_features')}
                  </button>
                  {lang === 'pt' && (
                    <button
                      onClick={() => scrollToSection('video')}
                      className="text-gray-300 hover:text-white transition-colors text-right w-full"
                    >
                      {t('nav_demo')}
                    </button>
                  )}
                  <button
                    onClick={() => scrollToSection('beneficios')}
                    className="text-gray-300 hover:text-white transition-colors text-right w-full"
                  >
                    {t('nav_benefits')}
                  </button>
                  {showPlansButton && (
                    <button
                      onClick={() => {
                        const el = document.getElementById('planos');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-300 hover:text-white transition-colors text-right w-full"
                    >
                      {t('nav_plans')}
                    </button>
                  )}
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="text-gray-300 hover:text-white transition-colors text-right w-full"
                  >
                    {t('nav_faq')}
                  </button>
                </>}
                {!hideDownloadButton && (
                  <button
                    onClick={() => setIsDownloadModalOpen(true)}
                    className="btn btn-primary justify-end w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t('nav_download')}
                  </button>
                )}
                {/* Dropdown de idioma no mobile */}
                <div className="pt-2 w-full flex justify-end"><LanguageDropdown /></div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </header>
  )
}

// Dropdown de idioma
function LanguageDropdown() {
  const { lang, changeLang } = useTranslation()
  const [open, setOpen] = useState(false)
  const langs = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'ru', label: 'Русский' },
  ]
  const current = langs.find(l => l.code === lang) || langs[1]
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-white/20 bg-black/60 text-white hover:bg-white/10 transition-colors min-w-[90px]"
      >
        <span>{current.label}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-black border border-white/20 rounded-md shadow-lg z-50">
          {langs.map(l => (
            <button
              key={l.code}
              onClick={() => { changeLang(l.code); setOpen(false) }}
              className={`block w-full text-left px-4 py-2 hover:bg-white/10 ${lang === l.code ? 'font-bold text-amber-400' : 'text-white'}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 