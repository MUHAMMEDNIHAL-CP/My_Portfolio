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

export async function fetchProjects(client: AxiosInstance): Promise<Project[]> {
  const res = await client.get('/api/projects/')
  return res.data
}

