'use client'

import React, { useState, useEffect } from 'react'
import { Cookie, Shield, CheckCircle, XCircle } from 'lucide-react'

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [consent, setConsent] = useState<string | null>(null)

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookieConsent')
    if (savedConsent) {
      setConsent(savedConsent)
      if (savedConsent === 'accepted') {
        enableGoogleAnalytics()
      }
    } else {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const enableGoogleAnalytics = () => {
    // Trigger GTM dataLayer events for consent
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent_granted',
        consent_analytics: true,
        consent_marketing: false
      })
      
      // Enable Google Analytics
      window.dataLayer.push({
        event: 'gtm_init'
      })
    }
  }

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setConsent('accepted')
    setShowBanner(false)
    enableGoogleAnalytics()
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setConsent('declined')
    setShowBanner(false)
    
    // Trigger GTM dataLayer event for consent declined
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent_declined',
        consent_analytics: false,
        consent_marketing: false
      })
    }
  }

  const resetConsent = () => {
    localStorage.removeItem('cookieConsent')
    setConsent(null)
    setShowBanner(true)
  }

  // Show consent status indicator when banner is hidden
  if (!showBanner && consent) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={resetConsent}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg ${
            consent === 'accepted' 
              ? 'bg-green-100 text-green-800 hover:bg-green-200 border border-green-300' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300'
          }`}
          title="Klik om cookie voorkeuren te wijzigen"
        >
          {consent === 'accepted' ? (
            <>
              <CheckCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Cookies geaccepteerd</span>
            </>
          ) : (
            <>
              <XCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Cookies geweigerd</span>
            </>
          )}
        </button>
      </div>
    )
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          <div className="flex items-start space-x-3 flex-1">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Cookie-instellingen
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wij gebruiken <strong>Google Analytics</strong> om anoniem websiteverkeer te analyseren. 
                Dit helpt ons onze service te verbeteren. Uw gegevens worden geanonimiseerd en er worden{' '}
                <strong>geen marketing cookies</strong> gebruikt.{' '}
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  Lees meer in ons privacybeleid
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={declineCookies}
              className="px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors border border-gray-300"
            >
              Weigeren
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Cookie className="h-4 w-4" />
              <span>Accepteren</span>
            </button>
          </div>
        </div>

        {/* Detailed info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500 space-y-1">
            <p><strong>Analytics cookies:</strong> Google Analytics voor anonieme websitestatistieken</p>
            <p><strong>Functionele cookies:</strong> Alleen voor het onthouden van uw cookie voorkeuren</p>
            <p><strong>Marketing cookies:</strong> Worden niet gebruikt</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[]
  }
}