import React, { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  const apiBaseUrl = useMemo(() => {
    // Vite env var: VITE_API_BASE_URL
    return import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'
  }, [])

  return (
    <ThemeProvider apiBaseUrl={apiBaseUrl}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  )
}

