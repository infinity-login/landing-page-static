'use client'

import CookieConsent from 'react-cookie-consent'

const STORAGE_KEY = 'bfy-consent'

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      buttonText="Aceitar"
      declineButtonText="Recusar"
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
      Usamos cookies para melhorar sua experiência e medir desempenho. Ao aceitar, carregaremos scripts de terceiros (GTM, Clarity) que podem definir cookies.
    </CookieConsent>
  )
}


