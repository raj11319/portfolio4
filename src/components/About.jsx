import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <Parallax translateY={[30, -30]} className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <Parallax translateY={[-30, 30]} className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center mx-auto">
            About Me
          </motion.h2>
          
          <Parallax speed={-5}>
            <motion.div variants={itemVariants} className="card p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <Parallax rotateY={[-15, 15]}>
                    <div className="relative rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 animate-pulse-slow"></div>
                      <img 
                        src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                        alt="Raj Srivastava working" 
                        className="relative z-10 w-full h-full object-cover"
                      />
                    </div>
                  </Parallax>
                </div>
                
                <div className="md:w-2/3">
                  <Parallax translateX={[10, -10]}>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Passionate Technologist & Problem Solver
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      I'm Raj Srivastava, a multidisciplinary technologist with a passion for creating innovative solutions through code. With expertise spanning AI/ML, Data Science, Web Development, and more, I bring a unique blend of technical knowledge and creative problem-solving to every project.
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      My journey in technology has allowed me to work across various domains, from building intelligent systems with machine learning to creating intuitive user experiences with modern web technologies. I'm constantly exploring new technologies and approaches to expand my skill set and deliver exceptional results.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">Problem Solver</span>
                      <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full text-sm">Fast Learner</span>
                      <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm">Team Player</span>
                      <span className="px-3 py-1 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 rounded-full text-sm">Detail Oriented</span>
                    </div>
                  </Parallax>
                </div>
              </div>
            </motion.div>
          </Parallax>
        </motion.div>
      </div>
    </section>
  )
}

export default About