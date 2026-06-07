import React, { useEffect, useState } from 'react'
import Button from './ui/Button'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
]
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [emoji, setEmoji] = useState<'😎' | '😉'>('😎')



  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'sticky top-0 z-50 border-b border-white/5 backdrop-blur transition ' +
          (scrolled
          ? 'bg-zinc-50/80 dark:bg-neutral-950/70'
          : 'bg-zinc-50/60 dark:bg-neutral-950/40')

      }
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white">Muhammed Nihal</span>
          <span className="rounded-full bg-indigo-500/15 px-2 py-1 text-[11px] font-semibold text-indigo-700 dark:text-indigo-200">
            Full-Stack
          </span>

        </a>


        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 dark:text-neutral-200/90 transition hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>


        <div className="flex items-center gap-3">
          <button
            type="button"
            className="!h-9 !w-9 !p-0 inline-flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-200 dark:bg-white/10 dark:text-neutral-100 dark:ring-white/20 dark:hover:bg-white/15"
            aria-label="Emoji button"
            title="Click me"
            onClick={() => setEmoji((e) => (e === '😎' ? '😉' : '😎'))}
          >
            <span className="text-base leading-none">{emoji}</span>
          </button>




          <div className="hidden sm:block">
            <Button
              variant="primary"
              as="a"
              href="#contact"
              className="shadow-glow"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

