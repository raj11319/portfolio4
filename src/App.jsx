import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SkillsSection from './components/skills/SkillsSection'
import SkillsProgress from './components/skills/SkillsProgress'
import ProjectsSection from './components/projects/ProjectsSection'
import About from './components/About'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div className="min-h-screen relative">
          <ScrollProgress />
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 -z-10 opacity-50"></div>
          
          <Header />
          
          <main>
            <Hero />
            <SkillsSection />
            <SkillsProgress />
            <ProjectsSection />
            <About />
            <Certificates />
            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App