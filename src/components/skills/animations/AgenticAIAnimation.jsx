import React from 'react'
import { motion } from 'framer-motion'

const AgenticAIAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-20 h-20">
        {/* Central brain/core */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Brain icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.91 1.47 2.2 2.59 3.68 3.16.74.29 1.52.44 2.31.44h1.2c.79 0 1.57-.15 2.31-.44 1.48-.57 2.77-1.69 3.68-3.16C20.5 12.37 21 10.74 21 9c0-3.87-3.13-7-7-7zm-3 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
            <path d="M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </motion.div>
        
        {/* Orbiting decision nodes */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={`orbit-${index}`}
            className="absolute w-3 h-3 bg-pink-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: 360,
              x: Math.cos((index * Math.PI) / 2) * 35 - 6,
              y: Math.sin((index * Math.PI) / 2) * 35 - 6,
            }}
            transition={{
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2
              },
              x: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2
              }
            }}
          />
        ))}
        
        {/* Pulsing reasoning waves */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-pink-400"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 0.2, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-400"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.1, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Decision pathways */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
          {[0, 1, 2].map((index) => (
            <motion.path
              key={`path-${index}`}
              d={`M40,40 Q${30 + index * 10},${20 + index * 5} ${50 + index * 5},${15 + index * 10}`}
              stroke="#ec4899"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}

export default AgenticAIAnimation