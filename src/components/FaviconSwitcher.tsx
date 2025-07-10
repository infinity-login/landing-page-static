"use client"
import { useEffect } from "react"

export default function FaviconSwitcher() {
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const favicon = (document.querySelector("link[rel='icon']") as HTMLLinkElement) || document.createElement('link') as HTMLLinkElement
    favicon.rel = 'icon'
    favicon.type = 'image/x-icon'
    favicon.href = isDark
      ? '/favicons/favicon-light.ico'
      : '/favicons/favicon-dark.ico'
    document.head.appendChild(favicon)
    // Atualiza ao mudar o tema do sistema
    const listener = (e: MediaQueryListEvent) => {
      favicon.href = e.matches
        ? '/favicons/favicon-light.ico'
        : '/favicons/favicon-dark.ico'
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener)
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener)
    }
  }, [])
  return null
} 