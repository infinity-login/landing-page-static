'use client'

import { useEffect, useState } from 'react'

type ConsentStatus = 'accepted' | 'rejected' | 'unknown'
const STORAGE_KEY = 'bfy-consent'

function useConsent(): ConsentStatus {
  const [status, setStatus] = useState<ConsentStatus>('unknown')
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'accepted' || stored === 'rejected') setStatus(stored)
    } catch {}
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'accepted' || e.newValue === 'rejected')) {
        setStatus(e.newValue as ConsentStatus)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])
  return status
}

export default function ThirdPartyScripts() {
  const consent = useConsent()

  useEffect(() => {
    if (consent !== 'accepted') return
    if (process.env.NEXT_PUBLIC_ENABLE_GTM !== 'true') return
    const load = () => {
    // Initialize dataLayer and Consent Mode (analytics only; ads denied)
    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    ;(window as any).dataLayer.push({
      event: 'default_consent',
      consent: {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'granted',
        functionality_storage: 'granted',
        security_storage: 'granted'
      }
    })

    // Google Tag Manager
    ;(function(w: any, d: Document, s: string, l: string, i: string) {
      const f = d.getElementsByTagName(s)[0] as HTMLScriptElement;
      const j = d.createElement(s) as HTMLScriptElement;
      const dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode?.insertBefore(j, f);
    })(window as any, document, 'script', 'dataLayer', 'GTM-KWRX7DPL')
    }
    const idle = (window as any).requestIdleCallback
      ? (window as any).requestIdleCallback(load)
      : setTimeout(load, 0)
    return () => {
      if ((window as any).cancelIdleCallback) {
        try { (window as any).cancelIdleCallback(idle) } catch {}
      } else {
        clearTimeout(idle as any)
      }
    }
  }, [consent])

  if (consent !== 'accepted' || process.env.NEXT_PUBLIC_ENABLE_GTM !== 'true') return null

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KWRX7DPL"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}


