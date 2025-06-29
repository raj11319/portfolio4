import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { Parallax } from 'react-scroll-parallax'

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const skills = [
    { text: 'AI/ML', color: 'text-blue-400' },
    { text: 'Data Science', color: 'text-emerald-400' },
    { text: 'Web Development', color: 'text-purple-400' }
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
                className="text-primary-400 font-semibold text-lg block mb-2"
              >
                Hello, I'm
              </motion.span>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="text-gradient">
                  Raj Srivastava
                </span>
              </motion.h1>
              
              <motion.div 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-medium"
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
                </motion.a>
                
                <motion.a 
                  href="#contact" 
                  className="px-6 py-3 border-2 border-gray-400 text-gray-200 rounded-lg font-semibold relative overflow-hidden group btn-professional"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10">Get In Touch</span>
                </motion.a>
              </motion.div>
            </Parallax>
          </div>
          
          <Parallax translateY={[-10, 10]} speed={-1} className="lg:w-1/2 flex justify-center">
            <motion.div 
              variants={imageVariants}
              className="relative w-full max-w-md"
            >
              {/* Subtle glow effect with reduced intensity */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full blur-xl opacity-15"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div 
                className="relative bg-gray-800/90 backdrop-blur-lg rounded-full overflow-hidden p-2 shadow-xl subtle-border"
                whileHover={{ 
                  scale: 1.03,
                  rotate: 1
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
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            </motion.div>
          </Parallax>
        </motion.div>
        
        {/* Professional scroll indicator */}
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
            className="text-sm text-gray-300 mb-3 font-semibold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
          
          <motion.div
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
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