import React from 'react'
import { motion } from 'framer-motion'

const ChartsAnimation = () => {
  const barCount = 5
  
  return (
    <div className="w-full h-full flex items-end justify-center gap-4">
      {Array.from({ length: barCount }).map((_, index) => (
        <motion.div
          key={`bar-${index}`}
          className="w-6 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-md"
          initial={{ height: 0 }}
          animate={{ height: [20, 80, 40, 60, 30] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  )
}

export default ChartsAnimation