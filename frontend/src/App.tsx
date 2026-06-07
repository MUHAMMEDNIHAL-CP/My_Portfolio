import React, { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  const apiBaseUrl = useMemo(() => {
    // Vite env var: VITE_API_BASE_URL
    // Render backend base URL, e.g. https://myportfolio-api.onrender.com
    return import.meta.env.VITE_API_BASE_URL || 'https://myportfolio-api.onrender.com'
  }, [])


  return (
    <ThemeProvider apiBaseUrl={apiBaseUrl}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  )
}

