import type { AxiosInstance } from 'axios'

export type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function postContact(client: AxiosInstance, payload: ContactPayload) {
  // Backend route is mounted under: /api/ + contact/ (config/api_urls.py + contact/urls.py)
  // Axios baseURL is set in createHttpClient().
  // Use an absolute root path for axios: /api/contact/
  const res = await client.post('/api/contact/', payload)
  return res.data
}


