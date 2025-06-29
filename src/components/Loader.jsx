import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  const containerVariants = {
    initial: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const circleVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotate: -180
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const textVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-gradient-to-br from-white via-primary-50 to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center z-50"
    >
      {/* Enhanced loading animation */}
      <motion.div
        variants={circleVariants}
        className="relative w-24 h-24 mb-8"
      >
        {/* Outer glow */}
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 blur-xl opacity-30"
        />
        
        {/* Main spinner */}
        <motion.div 
          className="relative w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-1"
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "linear" 
          }}
        >
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-900" />
        </motion.div>
        
        {/* Inner spinner */}
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-primary-300 dark:border-primary-700"
          animate={{ rotate: -360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "linear" 
          }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute inset-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Enhanced loading text */}
      <motion.div
        variants={textVariants}
        className="text-center"
      >
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-xl font-medium mb-2"
          animate={{ 
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading amazing skills...
        </motion.p>
        
        <motion.div
          className="flex justify-center space-x-1"
          animate={{
            transition: {
              staggerChildren: 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }
          }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-primary-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Loader