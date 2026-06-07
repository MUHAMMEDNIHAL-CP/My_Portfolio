import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-10 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionHeading
          eyebrow="ABOUT"
          title="Crafting clean full-stack solutions"
          subtitle="I focus on building scalable backends and modern, premium UIs."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm leading-relaxed text-neutral-300">
               Full-Stack Developer specializing in React (Vite) and Python Django REST APIs. Experienced in building modern, scalable, and responsive web applications with clean frontend design and secure backend architecture. Skilled in PostgreSQL, Tailwind CSS, Git/GitHub, and AWS. Built multiple projects including OLX Clone, ShopCart, E-CART, and Todo App. Passionate about creating efficient solutions, learning modern technologies, and improving development skills through real-world projects.

              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                My goal is to become a professional full-stack engineer and build impactful, scalable products that solve real-world problems.
              </p>

            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-bold">Education</div>
              <div className="mt-3 text-sm text-neutral-300">
                • BSc Computer Science — Jamia Hamdard
                <br />• Year: 2025
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-bold">Experience</div>
              <div className="mt-3 text-sm text-neutral-300">
                • Freelance Full-Stack — 2024–Present
                <br />• Building web apps with React + Django
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-white/5 to-cyan-500/10 p-6">
          <div className="text-sm font-bold">Technologies</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['React', 'JavaScript', 'Python', 'Django', 'DRF', 'PostgreSQL', 'Tailwind', 'Git'].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-200 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

