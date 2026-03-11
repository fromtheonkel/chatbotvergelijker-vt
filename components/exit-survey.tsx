"use client"

import { useState, useEffect, useCallback } from "react"
import { X } from "lucide-react"

const options = [
  "Hoe veilig is lokaal AI eigenlijk?",
  "Hoe maak ik mijn lokale model slimmer? (skills, tools, eigen data)",
  "Hoe gebruik ik actuele informatie met een lokaal model?",
  "Hoe richt ik dit zakelijk in?",
  "Wanneer wint lokaal van commerciële modellen?",
]

export function ExitSurvey() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !submitted) {
      const dismissed = sessionStorage.getItem("exit-survey-dismissed")
      if (!dismissed) {
        setVisible(true)
      }
    }
  }, [submitted])

  useEffect(() => {
    document.addEventListener("mouseout", handleMouseLeave)
    return () => document.removeEventListener("mouseout", handleMouseLeave)
  }, [handleMouseLeave])

  function dismiss() {
    setVisible(false)
    sessionStorage.setItem("exit-survey-dismissed", "1")
  }

  function handleChoice(option: string) {
    setSubmitted(true)
    // Store the answer for future content planning
    try {
      const existing = JSON.parse(localStorage.getItem("exit-survey-results") || "[]")
      existing.push({ option, timestamp: new Date().toISOString() })
      localStorage.setItem("exit-survey-results", JSON.stringify(existing))
    } catch {
      // silently fail
    }
    setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem("exit-survey-dismissed", "1")
    }, 2000)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-dark transition-colors"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-xl font-bold text-dark mb-2 pr-8">
              Over welk onderwerp zou je meer willen weten?
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Help ons het volgende artikel te kiezen.
            </p>

            <div className="space-y-2.5">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleChoice(option)}
                  className="w-full text-left px-4 py-3 rounded-xl border border-border/60 text-sm text-dark hover:border-brand hover:bg-brand-light transition-all"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">&#10003;</span>
            </div>
            <h2 className="text-xl font-bold text-dark mb-1">Bedankt!</h2>
            <p className="text-sm text-muted-foreground">
              We nemen je keuze mee voor het volgende artikel.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
