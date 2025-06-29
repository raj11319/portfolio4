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
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time with smoother transition
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    
    return () => clearTimeout(timer)
  }, [])

  // Enhanced page transition variants
  const pageVariants = {
    initial: { 
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    animate: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div 
          key="main-content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-screen relative"
        >
          <ScrollProgress />
          
          {/* Enhanced background with better contrast */}
          <motion.div 
            className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"
            animate={{
              background: [
                "linear-gradient(135deg, #f9fafb, #ffffff, #f3f4f6)",
                "linear-gradient(135deg, #f3f4f6, #ffffff, #f9fafb)",
                "linear-gradient(135deg, #f9fafb, #ffffff, #f3f4f6)"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Subtle pattern overlay for texture */}
          <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05] -z-10" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                 backgroundSize: '20px 20px'
               }} 
          />
          
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App