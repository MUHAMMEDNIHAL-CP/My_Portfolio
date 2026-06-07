import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useTheme } from '../context/ThemeContext'
import { createHttpClient } from '../api/http'
import { postContact, type ContactPayload } from '../api/contact'
import Button from './ui/Button'

export default function ContactSection() {
  const { apiBaseUrl } = useTheme()
  const client = useMemo(() => createHttpClient(apiBaseUrl), [apiBaseUrl])

  const [form, setForm] = useState<ContactPayload>({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await postContact(client, form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 2500)
    } catch (err: any) {
      console.error('Contact submit failed:', err)
      // Try to log backend response (helps identify 404/400 etc)
      const resp = err?.response
      if (resp) {
        console.error('Response status:', resp.status)
        console.error('Response data:', resp.data)
        // Helpful when backend returns DRF validation errors.
        if (typeof resp.data === 'object' && resp.data?.message) {
          console.error('Response message field:', resp.data.message)
        }
      }


      setStatus('error')
      setTimeout(() => setStatus('idle'), 2500)
    }
  }





  return (
    <section id="contact" className="scroll-mt-10 pt-16 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionHeading
          eyebrow="CONTACT"
          title="Let’s build something premium"
          subtitle="Send a message — backend will validate and store it."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-sm font-bold text-white">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-neutral-300">
              <div>• Email: muhdnihal3200@gmail.com</div>
              <div>• Location: Kerala, India</div>
              <div>• Response time: Usually within 24 hours</div>
              <div className="pt-2 text-xs text-neutral-400">
                GitHub: <a className="underline" href="https://github.com/MUHAMMEDNIHAL-CP" target="_blank" rel="noreferrer">MUHAMMEDNIHAL-CP</a>
              </div>
              <div className="text-xs text-neutral-400">
                LinkedIn: <a className="underline" href="https://www.linkedin.com/in/muhammed-nihal-cp/" target="_blank" rel="noreferrer">muhammed-nihal-cp</a>
              </div>
              <div className="text-xs text-neutral-400">
                Twitter/X: <a className="underline" href="https://x.com/muhdnihhal" target="_blank" rel="noreferrer">@muhdnihhal</a>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-neutral-200">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-2 w-full rounded-2xl bg-neutral-950/40 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-indigo-400/30"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-neutral-200">Email</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-2 w-full rounded-2xl bg-neutral-950/40 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-indigo-400/30"
                  placeholder="you@example.com"
                  type="email"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-neutral-200">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-2 min-h-[130px] w-full rounded-2xl bg-neutral-950/40 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-indigo-400/30"
                  placeholder="Tell me about your project…"
                  required
                  minLength={10}
                />

              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  variant="primary"
                  as="button"
                  type="submit"
                  className="w-full sm:w-auto"
                >
                  {status === 'submitting'
                    ? 'Sending…'
                    : status === 'success'
                      ? 'Sent ✓'
                      : status === 'error'
                        ? 'Failed — try again'
                        : 'Send Message'}
                </Button>

                <div className="text-xs text-neutral-400">
                  By sending, you agree to be contacted back about your request.
                </div>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

