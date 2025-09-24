'use client'

import CookieConsent from 'react-cookie-consent'

const STORAGE_KEY = 'bfy-consent'

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      buttonText="Aceitar"
      declineButtonText="Somente essenciais"
      enableDeclineButton
      onAccept={() => {
        try { localStorage.setItem(STORAGE_KEY, 'accepted') } catch {}
      }}
      onDecline={() => {
        try { localStorage.setItem(STORAGE_KEY, 'rejected') } catch {}
      }}
      location="bottom"
      cookieName="bfy-consent-cookie"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'saturate(180%) blur(8px)', color: 'white' }}
      buttonStyle={{ background: 'white', color: 'black', fontWeight: 700, borderRadius: 8, padding: '8px 12px' }}
      declineButtonStyle={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 8, padding: '8px 12px' }}
      contentStyle={{ margin: 0, textAlign: 'left' }}
    >
      Usamos cookies essenciais para funcionamento e cookies de medição. Ao clicar em "Aceitar", carregaremos scripts de terceiros (ex.: Google Tag Manager) que podem definir cookies. Em "Somente essenciais", bloqueamos todos os de terceiros.
    </CookieConsent>
  )
}


