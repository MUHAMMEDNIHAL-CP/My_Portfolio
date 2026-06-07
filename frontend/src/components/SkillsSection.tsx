import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,


  SiTailwindcss,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiSqlite,
  SiGit
} from 'react-icons/si'

// small set of icons mapped by skill name
const skillIcons: Record<string, React.ReactNode> = {
  React: <SiReact />,
  JavaScript: <SiJavascript />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss />,
  'Tailwind CSS': <SiTailwindcss />,

  Python: <SiPython />,
  Django: <SiDjango />,
  'Django REST Framework': <SiDjango />,
  PostgreSQL: <SiPostgresql />,
  SQLite: <SiSqlite />,
  Git: <SiGit />
}

type Skill = { name: string; value: number }
const skills: Skill[] = [
  { name: 'Python', value: 94 },
  { name: 'Django', value: 90 },
  { name: 'React', value: 92 },
  { name: 'JavaScript', value: 90 },
  
  { name: 'HTML5', value: 90 },
  { name: 'CSS3', value: 88 },
  { name: 'Tailwind CSS', value: 86 },
  
  { name: 'Django REST Framework', value: 82 },
  { name: 'PostgreSQL', value: 78 },
  { name: 'SQLite', value: 80 },
  { name: 'Git', value: 80 }
]



function ProgressBar({ name, value }: { name: string; value: number }) {
  const icon = skillIcons[name]
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="text-lg text-cyan-300/90">{icon ?? null}</div>
          <div className="text-sm font-semibold text-neutral-100 truncate">{name}</div>
        </div>
        <div className="text-xs font-bold text-indigo-200 whitespace-nowrap">{value}%</div>
      </div>


      <div className="h-3 w-full overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-10 pt-16">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionHeading
          eyebrow="SKILLS"
          title="Modern skills for real-world builds"
          subtitle="Animated progress bars with a premium look."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-sm font-bold text-white">Core</div>
            <div className="mt-4 space-y-5">
              {skills.slice(0, 4).map((s) => (
                <ProgressBar key={s.name} name={s.name} value={s.value} />
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-sm font-bold text-white">Tools & Platform</div>
            <div className="mt-4 space-y-5">
              {skills.slice(4).map((s) => (
                <ProgressBar key={s.name} name={s.name} value={s.value} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

