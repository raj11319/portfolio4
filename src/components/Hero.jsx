import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { Parallax } from 'react-scroll-parallax'

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const skills = [
    { text: 'AI/ML', color: 'text-blue-600 dark:text-blue-400' },
    { text: 'Data Science', color: 'text-emerald-600 dark:text-emerald-400' },
    { text: 'Web Development', color: 'text-purple-600 dark:text-purple-400' }
  ]

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex]
    const fullText = currentSkill.text
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Enhanced Background with better contrast */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/8 to-accent-500/10 mix-blend-overlay" />
        <motion.img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background"
          className="w-full h-full object-cover"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 0.5, 0] 
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
      </motion.div>

      <div className="container-custom py-16 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <Parallax translateY={[15, -15]} speed={-2}>
              <motion.span 
                variants={itemVariants}
                className="text-primary-700 dark:text-primary-400 font-semibold text-lg block mb-2"
              >
                Hello, I'm
              </motion.span>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-gray-900 via-primary-700 to-secondary-700 dark:from-white dark:via-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
                  Raj Srivastava
                </span>
              </motion.h1>
              
              <motion.div 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed font-medium"
              >
                <span>A passionate technologist with expertise in </span>
                <motion.span 
                  className={`font-bold ${skills[currentSkillIndex].color}`}
                  key={currentSkillIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {currentText}
                  <motion.span 
                    className="inline-block w-0.5 h-6 bg-current ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.span>
                <span>, and more.</span>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.a 
                  href="#skills" 
                  className="btn-primary group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 font-semibold">Explore My Skills</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-lg opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <motion.a 
                  href="#contact" 
                  className="px-6 py-3 border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-200 rounded-lg font-semibold relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10">Get In Touch</span>
                  <motion.div
                    className="absolute inset-0 bg-gray-800 dark:bg-gray-200 opacity-0 group-hover:opacity-10"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            </Parallax>
          </div>
          
          <Parallax translateY={[-10, 10]} speed={-1} className="lg:w-1/2 flex justify-center">
            <motion.div 
              variants={imageVariants}
              className="relative w-full max-w-md"
            >
              {/* Enhanced glow effect */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-full blur-lg opacity-40"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div 
                className="relative bg-white dark:bg-gray-800 rounded-full overflow-hidden p-2 backdrop-blur-sm shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                <motion.img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Raj Srivastava" 
                  className="w-full h-auto rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            </motion.div>
          </Parallax>
        </motion.div>
        
        {/* Enhanced scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.span 
            className="text-sm text-gray-700 dark:text-gray-300 mb-3 font-semibold"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
          
          <motion.div
            className="w-6 h-10 border-2 border-primary-600 dark:border-primary-400 rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-primary-600 dark:bg-primary-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1]
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero