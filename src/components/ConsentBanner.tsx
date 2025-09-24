'use client'

import { useEffect, useState } from 'react'

type ConsentStatus = 'accepted' | 'rejected' | 'unknown'

const STORAGE_KEY = 'bfy-consent'

export default function ConsentBanner({ onChange }: { onChange?: (status: ConsentStatus) => void }) {
  const [status, setStatus] = useState<ConsentStatus>('unknown')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'accepted' || stored === 'rejected') {
        setStatus(stored)
        onChange?.(stored)
      }
    } catch {}
  }, [onChange])

  if (status !== 'unknown') return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto max-w-5xl m-4 p-4 rounded-lg border border-white/20 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm text-gray-200">
            Usamos cookies para melhorar sua experiência e medir desempenho. Ao aceitar, carregaremos
            scripts de terceiros (GTM, Clarity) que podem definir cookies.
          </p>
          <div className="flex gap-2">
            <button
              className="px-3 py-2 rounded-md border border-white/30 text-white hover:bg-white/10"
              onClick={() => {
                try { localStorage.setItem(STORAGE_KEY, 'rejected') } catch {}
                setStatus('rejected')
                onChange?.('rejected')
              }}
            >
              Recusar
            </button>
            <button
              className="px-3 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-100"
              onClick={() => {
                try { localStorage.setItem(STORAGE_KEY, 'accepted') } catch {}
                setStatus('accepted')
                onChange?.('accepted')
              }}
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function getConsent(): ConsentStatus {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'accepted' || v === 'rejected') return v
    return 'unknown'
  } catch {
    return 'unknown'
  }
}


