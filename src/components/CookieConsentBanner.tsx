"use client"

import CookieConsent from "react-cookie-consent"

const STORAGE_KEY = "bfy-consent"
const COOKIE_NAME = "bfy-consent-cookie"

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      buttonText="Aceitar"
      declineButtonText="Somente essenciais"
      enableDeclineButton
      overlay
      expires={180}
      onAccept={() => {
        try {
          localStorage.setItem(STORAGE_KEY, "accepted")
        } catch {}
        try {
          document.cookie = `${COOKIE_NAME}=accepted; Max-Age=${
            180 * 24 * 60 * 60
          }; Path=/; SameSite=Lax`
        } catch {}
      }}
      onDecline={() => {
        try {
          localStorage.setItem(STORAGE_KEY, "rejected")
        } catch {}
        try {
          document.cookie = `${COOKIE_NAME}=rejected; Max-Age=${
            180 * 24 * 60 * 60
          }; Path=/; SameSite=Lax`
        } catch {}
      }}
      location="bottom"
      cookieName={COOKIE_NAME}
      style={{
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "saturate(180%) blur(8px)",
        color: "white",
      }}
      buttonStyle={{
        background: "white",
        color: "black",
        fontWeight: 700,
        borderRadius: 8,
        padding: "8px 12px",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "white",
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: 8,
        padding: "8px 12px",
      }}
      contentStyle={{ margin: 0, textAlign: "left" }}
    >
      Usamos cookies essenciais para funcionamento e cookies de medição. Ao
      clicar em "Aceitar", carregaremos scripts de terceiros (ex.: Google Tag
      Manager) que podem definir cookies. Em "Somente essenciais", bloqueamos
      terceiros. Leia nossa{" "}
      <a href="/privacy-policy" className="underline">
        Política de Privacidade
      </a>
      .
    </CookieConsent>
  )
}
