import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Subtle glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/50 via-secondary-500/50 to-accent-500/50 origin-left z-40 blur-sm"
        style={{ scaleX }}
      />
    </>
  )
}

export default ScrollProgress