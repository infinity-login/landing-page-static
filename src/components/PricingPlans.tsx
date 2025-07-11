"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/contexts/LanguageContext'

const plans = [
  {
    name: 'Básico',
    key: 'basic',
    mensal: {
      price: 'R$ 97,00',
      link: 'https://buy.stripe.com/cNi5kDdW81uk6VU3LwgQE00',
    },
    anual: {
      price: 'R$ 58,20/mês',
      link: 'https://buy.stripe.com/fZu14n6tG3Cs0xwbdYgQE04',
    },
    features: [
      { label: 'Navegador privado Blackfy', included: true },
      { label: 'Até 20 perfis', included: true },
      { label: 'Infinitas Fingerprints', included: true },
      { label: 'Integração com proxy', included: true },
      { label: 'Sincronização na nuvem', included: true },
      { label: 'Grupos', included: false },
      { label: 'Convites', included: false },
    ],
    highlight: false
  },
  {
    name: 'Padrão',
    key: 'standard',
    mensal: {
      price: 'R$ 197,00',
      link: 'https://buy.stripe.com/14A7sL9FSgpegwua9UgQE01',
    },
    anual: {
      price: 'R$ 118,20/mês',
      link: 'https://buy.stripe.com/bJe5kD2dqa0Qfsq3LwgQE05',
    },
    features: [
      { label: 'Navegador privado Blackfy', included: true },
      { label: 'Até 50 perfis', included: true },
      { label: 'Infinitas Fingerprints', included: true },
      { label: 'Integração com proxy', included: true },
      { label: 'Sincronização na nuvem', included: true },
      { label: 'Grupos', included: true },
      { label: 'Convites', included: true },
    ],
    highlight: true
  },
  {
    name: 'Equipe',
    key: 'team',
    mensal: {
      price: 'R$ 397,00',
      link: 'https://buy.stripe.com/6oU00j6tG7SI4NMfuegQE02',
    },
    anual: {
      price: 'R$ 238,20/mês',
      link: 'https://buy.stripe.com/5kQ6oH7xK3Cs5RQ95QgQE06',
    },
    features: [
      { label: 'Navegador privado Blackfy', included: true },
      { label: 'Até 200 perfis', included: true },
      { label: 'Infinitas Fingerprints', included: true },
      { label: 'Integração com proxy', included: true },
      { label: 'Sincronização na nuvem', included: true },
      { label: 'Grupos', included: true },
      { label: 'Convites', included: true },
    ],
    highlight: false
  },
  {
    name: 'Empresarial',
    key: 'enterprise',
    mensal: {
      price: 'R$ 997,00',
      link: 'https://buy.stripe.com/6oU8wP8BO5KA3JIci2gQE03',
    },
    anual: {
      price: 'R$ 598,20/mês',
      link: 'https://buy.stripe.com/aFabJ16tG4Gwfsqdm6gQE07',
    },
    features: [
      { label: 'Navegador privado Blackfy', included: true },
      { label: 'Perfis ilimitados', included: true },
      { label: 'Infinitas Fingerprints', included: true },
      { label: 'Integração com proxy', included: true },
      { label: 'Sincronização na nuvem', included: true },
      { label: 'Grupos', included: true },
      { label: 'Convites', included: true },
    ],
    highlight: false
  },
];

// Tabela de links de checkout para idiomas diferentes do português
const checkoutLinks = {
  anual: {
    enterprise: 'https://buy.stripe.com/fZu28rcS48WM942fuegQE0f',
    team: 'https://buy.stripe.com/8x27sL9FS5KA0xw3LwgQE0e',
    standard: 'https://buy.stripe.com/eVqeVdg4gb4Ucgea9UgQE0d',
    basic: 'https://buy.stripe.com/6oU4gzaJW1ukgwubdYgQE0c',
  },
  mensal: {
    enterprise: 'https://buy.stripe.com/aFadR93hu3Cs7ZYeqagQE0b',
    team: 'https://buy.stripe.com/cNi3cvbO07SI0xw95QgQE0a',
    standard: 'https://buy.stripe.com/14A6oH9FSb4Ua862HsgQE09',
    basic: 'https://buy.stripe.com/dRm14n3hudd21BA5TEgQE08',
  }
}

type PlanKey = 'enterprise' | 'team' | 'standard' | 'basic';

function getCheckoutLink(planKey: PlanKey, period: 'mensal' | 'anual', lang: string, defaultLink: string) {
  if (lang === 'pt') return defaultLink;
  if (checkoutLinks[period] && checkoutLinks[period][planKey]) {
    return checkoutLinks[period][planKey];
  }
  return defaultLink;
}

// Função para obter preços baseados no idioma
function getPlanPrice(planKey: PlanKey, period: 'mensal' | 'anual', lang: string, t: (key: string) => string) {
  if (lang === 'pt') {
    // Preços em português (mantém os originais)
    const ptPrices = {
      basic: {
        mensal: 'R$ 97,00',
        anual: 'R$ 58,20/mês'
      },
      standard: {
        mensal: 'R$ 197,00',
        anual: 'R$ 118,20/mês'
      },
      team: {
        mensal: 'R$ 397,00',
        anual: 'R$ 238,20/mês'
      },
      enterprise: {
        mensal: 'R$ 997,00',
        anual: 'R$ 598,20/mês'
      }
    };
    return ptPrices[planKey][period];
  } else {
    // Preços em dólares para outros idiomas
    const usPrices = {
      basic: {
        mensal: '$19.97',
        anual: 143.79
      },
      standard: {
        mensal: '$29.97',
        anual: 215.79
      },
      team: {
        mensal: '$64.97',
        anual: 467.79
      },
      enterprise: {
        mensal: '$149.99',
        anual: 1079.93
      }
    };
    if (period === 'anual') {
      // Calcular valor mensal a partir do anual
      const annualValue = usPrices[planKey].anual;
      const monthlyValue = (annualValue / 12).toFixed(2);
      return `$${monthlyValue}${t('per_month')}`;
    } else {
      return usPrices[planKey].mensal;
    }
  }
}

export default function PricingPlans() {
  const [period, setPeriod] = useState<'mensal' | 'anual'>('mensal')
  const [openModal, setOpenModal] = useState<string | null>(null);
  const { t, lang } = useTranslation()

  // Nomes dos planos: português para pt, inglês para outros idiomas
  const planNames = {
    basic: lang === 'pt' ? 'Básico' : 'Kickstart',
    standard: lang === 'pt' ? 'Padrão' : 'Standard',
    team: lang === 'pt' ? 'Equipe' : 'Team',
    enterprise: lang === 'pt' ? 'Empresarial' : 'Business',
  }
  // Benefícios internacionalizados
  const featureLabels = {
    browser: t('feature_browser'),
    profiles_20: t('feature_profiles_20'),
    profiles_50: t('feature_profiles_50'),
    profiles_200: t('feature_profiles_200'),
    profiles_unlimited: t('feature_profiles_unlimited'),
    fingerprints: t('feature_fingerprints'),
    proxy: t('feature_proxy'),
    cloud: t('feature_cloud'),
    groups: t('feature_groups'),
    invites: t('feature_invites'),
  }

  // Novo array de planos internacionalizado
  const plansI18n = [
    {
      name: planNames.basic,
      key: 'basic',
      mensal: plans[0].mensal,
      anual: plans[0].anual,
      features: [
        { label: featureLabels.browser, included: true },
        { label: featureLabels.profiles_20, included: true },
        { label: featureLabels.fingerprints, included: true },
        { label: featureLabels.proxy, included: true },
        { label: featureLabels.cloud, included: true },
        { label: featureLabels.groups, included: false },
        { label: featureLabels.invites, included: false },
      ],
      highlight: false
    },
    {
      name: planNames.standard,
      key: 'standard',
      mensal: plans[1].mensal,
      anual: plans[1].anual,
      features: [
        { label: featureLabels.browser, included: true },
        { label: featureLabels.profiles_50, included: true },
        { label: featureLabels.fingerprints, included: true },
        { label: featureLabels.proxy, included: true },
        { label: featureLabels.cloud, included: true },
        { label: featureLabels.groups, included: true },
        { label: featureLabels.invites, included: true },
      ],
      highlight: true
    },
    {
      name: planNames.team,
      key: 'team',
      mensal: plans[2].mensal,
      anual: plans[2].anual,
      features: [
        { label: featureLabels.browser, included: true },
        { label: featureLabels.profiles_200, included: true },
        { label: featureLabels.fingerprints, included: true },
        { label: featureLabels.proxy, included: true },
        { label: featureLabels.cloud, included: true },
        { label: featureLabels.groups, included: true },
        { label: featureLabels.invites, included: true },
      ],
      highlight: false
    },
    {
      name: planNames.enterprise,
      key: 'enterprise',
      mensal: plans[3].mensal,
      anual: plans[3].anual,
      features: [
        { label: featureLabels.browser, included: true },
        { label: featureLabels.profiles_unlimited, included: true },
        { label: featureLabels.fingerprints, included: true },
        { label: featureLabels.proxy, included: true },
        { label: featureLabels.cloud, included: true },
        { label: featureLabels.groups, included: true },
        { label: featureLabels.invites, included: true },
      ],
      highlight: false
    },
  ]

  return (
    <section id="planos" className="w-full px-4 py-12">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('plans_title')}</h2>
        <p className="text-gray-400 text-center max-w-xl mb-6">{t('plans_subtitle')}</p>
        {/* Switch Mensal/Anual */}
        <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10">
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${period === 'mensal' ? 'bg-white text-black shadow' : 'text-white hover:bg-white/10'}`}
            onClick={() => setPeriod('mensal')}
          >
            {t('monthly')}
          </button>
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${period === 'anual' ? 'bg-white text-black shadow' : 'text-white hover:bg-white/10'}`}
            onClick={() => setPeriod('anual')}
          >
            {t('yearly')}
          </button>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 justify-center">
          {plansI18n.map(plan => {
            const price = getPlanPrice(plan.key as PlanKey, period, lang, t);
            const link = getCheckoutLink(plan.key as PlanKey, period, lang, plan[period].link);
            const isModalOpen = openModal === plan.key;
            // Separar valor e /mês se for anual (apenas para português)
            let priceValue = price;
            let priceSuffix = '';
            if (period === 'anual' && lang === 'pt' && price.includes('/mês')) {
              priceValue = price.replace('/mês', '').trim();
              priceSuffix = '/mês';
            }
            const isStandard = plan.key === 'standard';
            return (
              <div
                key={plan.key}
                className={`flex-1 border-2 rounded-2xl p-3 md:p-8 flex flex-col items-center transition-transform relative max-w-xs md:max-w-[420px] mx-auto
                  ${plan.highlight ? 'shadow-lg' : ''}
                  ${isStandard ? 'bg-white border-[#6B7280]' : 'bg-black border-white'}`}
              >
                {plan.highlight && (
                  <span className={`absolute -top-5 left-1/2 -translate-x-1/2 font-bold px-2 md:px-4 py-1 rounded-full shadow-lg border-2 whitespace-nowrap
                    ${isStandard ? 'bg-[#FBBF24] text-black border-[#FBBF24]' : 'bg-white text-black border-white'} text-[10px] md:text-xs`}
                  >
                    {t('most_sold')}
                  </span>
                )}
                <div className="flex items-center gap-2 mb-2 w-full justify-center">
                  <h3 className={`font-bold ${isStandard ? 'text-xl text-black' : 'text-sm md:text-xl text-white'}`}>{plan.name}</h3>
                  <button
                    type="button"
                    className={`inline-block md:hidden ${isStandard ? 'text-gray-500 hover:text-amber-500' : 'text-gray-400 hover:text-amber-400'} focus:outline-none`}
                    aria-label={`Ver detalhes do plano ${plan.name}`}
                    onClick={() => setOpenModal(plan.key)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                  </button>
                </div>
                <div className={`font-extrabold mb-1 flex items-baseline justify-center ${isStandard ? 'text-2xl md:text-3xl text-black' : 'text-2xl md:text-3xl text-white'}`}>
                  {/* Renderização do preço para todos os idiomas */}
                  {(() => {
                    // Para português anual, já existe lógica de priceSuffix
                    if (period === 'anual' && lang === 'pt' && priceSuffix) {
                      return <>
                  {priceValue}
                    <span className={`ml-1 text-xs md:text-sm font-normal ${isStandard ? 'text-black' : 'text-white'}`}>{priceSuffix}</span>
                      </>
                    }
                    // Para outros idiomas, detectar e estilizar o sufixo '/month' ou equivalente
                    if (period === 'anual' && lang !== 'pt' && typeof priceValue === 'string') {
                      const match = priceValue.match(/^(\$[\d.,]+)(.*)$/)
                      if (match) {
                        return <>
                          {match[1]}
                          <span className={`ml-1 text-xs md:text-sm font-normal ${isStandard ? 'text-black' : 'text-white'}`}>{match[2]}</span>
                        </>
                      }
                    }
                    // Mensal ou fallback
                    return priceValue
                  })()}
                </div>
                <div className={`mb-2 text-xs md:text-sm ${isStandard ? 'text-gray-600' : 'text-gray-400'}`}>{period === 'anual' ? t('billed_annually') : t('billed_monthly')}</div>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center rounded-lg px-3 md:px-4 py-2 md:py-3 font-semibold transition-colors border-2 flex items-center justify-center gap-2 mb-4 text-xs md:text-base whitespace-nowrap
                    ${isStandard ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700' : 'bg-black text-white border-white hover:bg-white hover:text-black'}`}
                >
                  {t('see_plans')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 hidden md:inline-block"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12m0 0l-4.5-4.5M18 12l-4.5 4.5" />
                  </svg>
                </Link>
                {/* Lista de benefícios: visível só no desktop */}
                <ul className={`mb-6 space-y-1 md:space-y-2 w-full hidden md:block text-xs md:text-base
                  ${isStandard ? 'text-black' : ''}`}>
                  {plan.features.map(f => (
                    <li
                      key={f.label}
                      className={`flex items-center text-sm ${f.included ? (isStandard ? 'text-black' : 'text-gray-200') : (isStandard ? 'text-gray-400' : 'text-gray-500')}`}
                    >
                      {f.included ? (
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isStandard ? 'bg-emerald-600' : 'bg-emerald-500'}`}></span>
                      ) : (
                        <span className="inline-block w-2 h-2 mr-2"></span>
                      )}
                      {f.label}
                    </li>
                  ))}
                </ul>
                {/* Modal mobile: visível só se openModal === plan.key */}
                {isModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 md:hidden">
                    <div className={`bg-white rounded-xl p-6 w-11/12 max-w-xs relative ${isStandard ? '' : 'bg-zinc-900'}`}>
                      <button
                        type="button"
                        className={`absolute top-2 right-2 ${isStandard ? 'text-gray-500 hover:text-amber-500' : 'text-gray-400 hover:text-amber-400'}`}
                        aria-label="Fechar"
                        onClick={() => setOpenModal(null)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <h4 className={`text-base md:text-lg font-bold mb-4 text-center ${isStandard ? 'text-black' : 'text-white'}`}>{t('modal_what_includes')} {plan.name}?</h4>
                      <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                        {(plan.features as {label: string; included: boolean}[]).map(f => (
                          <li
                            key={f.label}
                            className={`flex items-center text-sm ${f.included ? (isStandard ? 'text-black' : 'text-gray-200') : (isStandard ? 'text-gray-400' : 'text-gray-500')}`}
                          >
                            {f.included ? (
                              <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isStandard ? 'bg-emerald-600' : 'bg-emerald-500'}`}></span>
                            ) : (
                              <span className="inline-block w-2 h-2 mr-2"></span>
                            )}
                            {f.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
} 