"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react"

type Language = "fr" | "en"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: Record<string, unknown>
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")
  const [translations, setTranslations] = useState<Record<string, unknown>>({})

  // Charger la langue sauvegardée
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Charger les traductions pour la langue courante
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${language}.json`)
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error("Failed to load translations:", error)
      }
    }

    loadTranslations()
    localStorage.setItem("language", language)
  }, [language])

  // Fonction utilitaire pour chercher une clé imbriquée
  function getNestedValue(
    obj: Record<string, unknown>,
    path: string[]
  ): unknown {
    return path.reduce<unknown>((acc, key) => {
      if (
        acc &&
        typeof acc === "object" &&
        key in (acc as Record<string, unknown>)
      ) {
        return (acc as Record<string, unknown>)[key]
      }
      return undefined
    }, obj)
  }

  // Fonction de traduction
  const t = (key: string): string => {
    const value = getNestedValue(translations, key.split("."))
    return typeof value === "string" ? value : key
  }

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage, t, translations }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
