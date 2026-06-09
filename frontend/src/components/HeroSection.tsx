import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink, FiMail } from 'react-icons/fi'
import Button from './ui/Button'

export default function HeroSection() {
  return (
    <section className="relative pt-10">
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-indigo-200/90">
              FULL-STACK DEVELOPER
            </p>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', }} className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" > <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6, }} className="inline-block" > Muhammed Nihal </motion.span> <motion.span animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1], }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', }} className="text-indigo-400" > . </motion.span> </motion.h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-300 sm:text-lg">
              I am Muhammed Nihal, a passionate full-stack developer focused on building modern web
              applications using React and Python Django. I enjoy creating clean user interfaces,
              scalable backend systems, and real-world projects that solve problems.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button variant="primary" as="a" href="#projects">
                <FiExternalLink className="mr-2" />
                View Projects
              </Button>
              <Button
                variant="secondary"
                as="a"
                href="/../public/NihalResume.pdf"
                className="ring-1 ring-indigo-400/20"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </Button>

              <Button variant="secondary" as="a" href="#contact">
                <FiMail className="mr-2" />
                Contact Me
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/muhammed-nihal-cp/'
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/MUHAMMEDNIHAL-CP'
                },
                {
                  label: 'Twitter/X',
                  href: 'https://x.com/muhdnihhal'
                }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-neutral-200 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>



          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="mt-8 w-full lg:mt-0 lg:w-[360px]"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(99,102,241,0.08)',
                  '0 0 40px rgba(99,102,241,0.18)',
                  '0 0 20px rgba(99,102,241,0.08)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-sm font-semibold text-neutral-200">
                Quick Stats
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">

                {[
                  { title: '6+', subtitle: 'Projects' },
                  { title: '2+', subtitle: 'Years of Experience' },
                  { title: 'REST', subtitle: 'APIs' },
                  { title: 'UI/UX', subtitle: 'Modern' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.2,
                    }}
                    whileHover={{
                      scale: 1.04,
                      y: -4,
                    }}
                    className="rounded-2xl bg-neutral-900/40 p-4 ring-1 ring-white/10 transition-all"
                  >
                    <div className="text-2xl font-black text-white">
                      {item.title}
                    </div>

                    <div className="mt-1 text-xs text-neutral-300">
                      {item.subtitle}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
                className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/10 p-4 ring-1 ring-white/10"
              >
                <div className="text-sm font-semibold text-white">
                  Let’s build together</div>
                <div className="mt-1 text-xs text-neutral-200">
                  Available for freelance and full-time roles.
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

