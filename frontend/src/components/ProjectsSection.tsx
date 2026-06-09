import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import ProjectCard, { ProjectCardData } from './ProjectCard'
import Button from './ui/Button'
import { fetchProjects } from '../api/projects'
import { createHttpClient } from '../api/http'
import { useTheme } from '../context/ThemeContext'

const fallbackProjects: ProjectCardData[] = [
  {
    title: 'Todo App',
    description: 'Fast task tracking with a clean UI and API integration.',
    technologies: ['React', 'Tailwind', 'DRF'],
    github_url: '#',
    live_url: '#'
  },
  {
    title: 'Employee Management System',
    description: 'CRUD for employees with filtering, sorting and admin management.',
    technologies: ['React', 'Django', 'SQLite/PG'],
    github_url: 'https://github.com/MUHAMMEDNIHAL-CP/E-CART',
    live_url: 'https://github.com/MUHAMMEDNIHAL-CP/E-CART'
  },
  {
    title: 'Dashboard App',
    description: 'Modern dashboard with charts-ready architecture and premium cards.',
    technologies: ['React', 'Axios', 'UI/UX'],
    github_url: 'https://github.com/MUHAMMEDNIHAL-CP/sales-dashboard',
    live_url: 'https://github.com/MUHAMMEDNIHAL-CP/sales-dashboard'
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio—premium glassmorphism design with smooth animations.',
    technologies: ['React', 'Django', 'Tailwind', 'Framer Motion'],
    github_url: 'https://github.com/MUHAMMEDNIHAL-CP/My_Portfo',
    live_url: 'https://github.com/MUHAMMEDNIHAL-CP/My_Portfo'
  }
]

export default function ProjectsSection() {
  const { apiBaseUrl } = useTheme()
  const [projects, setProjects] = useState<ProjectCardData[]>(fallbackProjects)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const client = createHttpClient(apiBaseUrl)
        const data = await fetchProjects(client)
        if (Array.isArray(data) && data.length) {
          setProjects(data as ProjectCardData[])
        }
      } catch {
        // keep fallback
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [apiBaseUrl])

  return (
    <section id="projects" className="scroll-mt-10 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionHeading
          eyebrow="PROJECTS"
          title="Showcasing selected work"
          subtitle={loading ? 'Loading projects…' : 'Premium cards with tech stacks and links.'}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Button variant="secondary" as="a" href="#contact">
            Want something similar? Let’s talk
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

