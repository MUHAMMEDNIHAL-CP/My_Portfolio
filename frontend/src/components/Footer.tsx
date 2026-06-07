import React from 'react'
import { FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 dark:border-white/5">

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-neutral-300">
          © {new Date().getFullYear()} Muhammed Nihal. Built with React + Django.
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/MUHAMMEDNIHAL-CP"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-neutral-100 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <FiGithub />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

