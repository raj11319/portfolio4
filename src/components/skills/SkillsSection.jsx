import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'
import SkillCard from './SkillCard'
import { skillsData } from './skillsData'

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      {/* Background Elements */}
      <Parallax translateY={[40, -40]} className="absolute top-20 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <Parallax translateY={[-40, 40]} className="absolute bottom-20 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container-custom">
        <Parallax speed={-5}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              variants={titleVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-4"
            >
              My Skills
            </motion.h2>
            
            <motion.div
              variants={titleVariants}
              className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8 rounded-full"
            />
            
            <motion.p 
              variants={titleVariants}
              className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 text-lg font-medium leading-relaxed"
            >
              Explore my diverse skill set spanning multiple technology domains. 
              Hover over each skill to see a unique animation that visually represents it.
            </motion.p>
          </motion.div>
        </Parallax>
        
        <div className="skill-grid relative z-10">
          {skillsData.map((skill, index) => (
            <Parallax
              key={index}
              translateY={[10, -10]}
              scale={[0.98, 1.02]}
              easing="easeInQuad"
            >
              <SkillCard skill={skill} index={index} />
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection