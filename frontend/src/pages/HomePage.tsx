import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 -z-10">
        {/* background animation (no light mood toggle) */}
        <div className="absolute inset-0 opacity-60 dark:opacity-40" />
      </div>
      <Navbar />

      <main className="relative mx-auto w-full max-w-6xl px-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}




