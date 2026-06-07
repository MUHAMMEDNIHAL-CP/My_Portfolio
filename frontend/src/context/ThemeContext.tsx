import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'dark'

type ThemeContextValue = {
  theme: Theme
  apiBaseUrl: string
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({
  children,
  apiBaseUrl
}: {
  children: React.ReactNode
  apiBaseUrl: string
}) {
  const [theme] = useState<Theme>('dark')

  useEffect(() => {
    // Force dark mode only.
    document.documentElement.classList.add('dark')
    document.documentElement.dataset.theme = 'dark'
  }, [])

  const value = useMemo<ThemeContextValue>(() => ({ theme, apiBaseUrl }), [theme, apiBaseUrl])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

