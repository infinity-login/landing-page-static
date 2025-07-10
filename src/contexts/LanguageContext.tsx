'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import pt from '../locales/pt.json'
import en from '../locales/en.json'
import es from '../locales/es.json'
import ru from '../locales/ru.json'

const translations: Record<string, Record<string, string>> = { pt, en, es, ru }
const supported = ['pt', 'en', 'es', 'ru']

function detectLang(): string {
  if (typeof window === 'undefined') return 'pt'
  const nav = navigator.language.split('-')[0]
  if (supported.includes(nav)) return nav
  if (nav === 'es') return 'es'
  if (nav === 'ru') return 'ru'
  if (nav === 'pt') return 'pt'
  return 'pt'
}

interface LanguageContextType {
  lang: string
  changeLang: (l: string) => void
  t: (key: string) => string
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('pt')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // 1. Prioridade: localStorage
    const saved = localStorage.getItem('lang')
    if (saved && supported.includes(saved)) {
      setLang(saved)
      return
    }
    // 2. Detectar idioma do navegador
    const detected = detectLang()
    setLang(detected)
  }, [])

  const t = (key: string) => {
    // During SSR or before mount, use Portuguese as default
    const currentLang = mounted ? lang : 'pt'
    const translation = translations[currentLang]?.[key] || translations['pt']?.[key] || key
    return translation
  }

  const changeLang = (l: string) => {
    if (!supported.includes(l)) return
    setLang(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
} 