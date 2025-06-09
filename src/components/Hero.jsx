import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { Parallax } from 'react-scroll-parallax'

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const skills = [
    { text: 'AI/ML', color: 'text-sky-400' },
    { text: 'Data Science', color: 'text-gray-300' },
    { text: 'Web Development', color: 'text-yellow-400' }
  ]

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex]
    const fullText = currentSkill.text
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentSkillIndex, skills])

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay" />
        <motion.img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background"
          className="w-full h-full object-cover"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
      </motion.div>

      <div className="container-custom py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <Parallax translateY={[20, -20]}>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-600 dark:text-primary-400 font-medium text-lg"
              >
                Hello, I'm
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2 mb-4"
              >
                <span className="text-gradient">Raj Srivastava</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              >
                A passionate technologist with expertise in 
                <span className={`font-semibold ${skills[currentSkillIndex].color} ml-1`}>
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>,
                and more.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#skills" className="btn-primary">
                  Explore My Skills
                </a>
                <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Get In Touch
                </a>
              </motion.div>
            </Parallax>
          </motion.div>
          
          <Parallax translateY={[-20, 20]} className="lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full overflow-hidden p-2">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Raj Srivastava" 
                  className="w-full h-auto rounded-full"
                />
              </div>
            </motion.div>
          </Parallax>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
          <HiArrowDown className="w-5 h-5 text-primary-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero