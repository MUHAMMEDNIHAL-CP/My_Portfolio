import axios from 'axios'

function normalizeBaseUrl(apiBaseUrl: string) {
  // Remove trailing slashes, but keep internal path segments (e.g. /api).
  return apiBaseUrl.replace(/\/+$/, '')
}

export function createHttpClient(apiBaseUrl: string) {
  const instance = axios.create({
    // Make baseURL stable so caller-supplied paths work consistently.
    // If caller uses paths like /api/contact/ then apiBaseUrl should NOT include /api.
    // If caller uses paths like /contact/ then apiBaseUrl may include /api.
    // We handle both by normalizing baseURL and letting axios concatenate.
    baseURL: normalizeBaseUrl(apiBaseUrl),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return instance
}


