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
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.8, 0.3],
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
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex flex-col items-center justify-center z-50"
    >
      {/* Futuristic background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Enhanced loading animation */}
      <motion.div
        variants={circleVariants}
        className="relative w-28 h-28 mb-8"
      >
        {/* Multiple glow layers */}
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 blur-2xl opacity-20"
        />
        
        <motion.div
          className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Main spinner with futuristic design */}
        <motion.div 
          className="relative w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-1"
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "linear" 
          }}
          style={{
            background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #f59e0b, #3b82f6)',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
          }}
        >
          <div className="w-full h-full rounded-full bg-gray-900" />
        </motion.div>
        
        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-primary-300/50"
          animate={{ rotate: -360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "linear" 
          }}
          style={{
            boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.3)'
          }}
        />
        
        {/* Center pulsing core */}
        <motion.div
          className="absolute inset-8 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
          }}
        />
        
        {/* Orbiting particles */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: 360,
              x: Math.cos((index * 120 * Math.PI) / 180) * 40 - 4,
              y: Math.sin((index * 120 * Math.PI) / 180) * 40 - 4,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.3
            }}
          />
        ))}
      </motion.div>
      
      {/* Enhanced loading text with futuristic styling */}
      <motion.div
        variants={textVariants}
        className="text-center"
      >
        <motion.p
          className="text-gray-200 text-xl font-medium mb-4 neon-text"
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
        
        {/* Futuristic progress dots */}
        <motion.div
          className="flex justify-center space-x-2"
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
              className="w-3 h-3 bg-primary-400 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
              }}
            />
          ))}
        </motion.div>
        
        {/* Loading percentage simulation */}
        <motion.div
          className="mt-6 w-64 h-1 bg-gray-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              ease: "easeInOut"
            }}
            style={{
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Loader