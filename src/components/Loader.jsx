import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  const circleVariants = {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const textVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  }

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50"
    >
      <motion.div
        variants={circleVariants}
        className="relative w-20 h-20 mb-8"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-lg animate-pulse"></div>
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="relative w-full h-full rounded-full border-t-4 border-b-4 border-primary-500"
        ></motion.div>
      </motion.div>
      
      <motion.p
        variants={textVariants}
        className="text-gray-700 dark:text-gray-300 text-xl font-medium"
      >
        Loading amazing skills...
      </motion.p>
    </motion.div>
  )
}

export default Loader