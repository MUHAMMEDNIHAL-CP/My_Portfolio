import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

export type ProjectCardData = {
  title: string
  description: string
  technologies: string[]
  github_url?: string
  live_url?: string
  image_url?: string
}

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  const technologies = Array.isArray(project.technologies) ? project.technologies : []

  return (

    <motion.article
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((t) => (

            <span
              key={t}
              className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-200 ring-1 ring-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {project.github_url ? (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-neutral-100 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              GitHub
            </a>
          ) : null}

          {project.live_url ? (
            <a
              href={project.live_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/15 px-3 py-2 text-sm font-semibold text-indigo-200 ring-1 ring-indigo-400/20 transition hover:bg-indigo-500/25"
            >
              <FiExternalLink />
              Live Demo
            </a>
          ) : null}

        </div>
      </div>
    </motion.article>
  )
}

