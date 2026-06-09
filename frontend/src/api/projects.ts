import type { AxiosInstance } from 'axios'

export type Project = {
  id: number | string
  title: string
  description: string
  technologies: string[]
  github_url?: string
  live_url?: string
  image_url?: string
}

export async function fetchProjects(client: AxiosInstance, opts?: { apiBaseUrl?: string }): Promise<Project[]> {
  // Axios baseURL is typically `${backendHost}` (no /api). In some setups it may already include /api.
  // Using the explicit path keeps behavior correct across environments.
  const apiBaseUrl = opts?.apiBaseUrl ?? ''
  const path = apiBaseUrl.includes('/api') ? '/projects/' : '/api/projects/'
  const res = await client.get(path)
  return res.data
}



