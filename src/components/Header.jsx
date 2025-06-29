import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMoon, HiSun, HiMenu, HiX } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { darkMode, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    open: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05
      }
    }
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <>
      <motion.header 
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out mobile-menu-container ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
        style={{ 
          paddingTop: 'env(safe-area-inset-top)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)'
        }}
      >
        <div className="container-custom">
          <div 
            className="flex items-center justify-between"
            style={{ 
              height: 'clamp(60px, 10vw, 80px)',
              paddingTop: isScrolled ? '0.75rem' : 'clamp(1rem, 3vw, 1.5rem)',
              paddingBottom: isScrolled ? '0.75rem' : 'clamp(1rem, 3vw, 1.5rem)'
            }}
          >
            {/* Enhanced responsive logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.a 
                href="#home" 
                className="font-bold text-primary-600 dark:text-primary-400 relative"
                style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
                whileHover={{ 
                  textShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
                }}
              >
                Raj<span className="text-secondary-600 dark:text-secondary-400">Srivastava</span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Enhanced desktop navigation */}
            <motion.nav 
              className="hidden md:flex items-center"
              style={{ gap: 'clamp(1rem, 3vw, 2rem)' }}
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {navLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  variants={linkVariants}
                  className="font-medium text-gray-700 dark:text-gray-300 relative group"
                  style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {link.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.nav>

            {/* Enhanced responsive controls */}
            <div className="flex items-center" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
              <motion.button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 relative overflow-hidden"
                style={{ 
                  width: 'clamp(2.5rem, 6vw, 3rem)', 
                  height: 'clamp(2.5rem, 6vw, 3rem)' 
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <HiSun style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <HiMoon style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <motion.button 
                className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300"
                style={{ 
                  width: 'clamp(2.5rem, 6vw, 3rem)', 
                  height: 'clamp(2.5rem, 6vw, 3rem)' 
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <HiX style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <HiMenu style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div 
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 mobile-menu-container"
              style={{ 
                paddingTop: `calc(env(safe-area-inset-top) + ${isScrolled ? '60px' : 'clamp(60px, 10vw, 80px)'})`,
                paddingLeft: 'env(safe-area-inset-left)',
                paddingRight: 'env(safe-area-inset-right)',
                paddingBottom: 'env(safe-area-inset-bottom)'
              }}
            >
              <div className="container-custom py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.href}
                    variants={mobileItemVariants}
                    className="block py-4 px-4 font-medium text-gray-700 dark:text-gray-300 rounded-lg relative overflow-hidden group"
                    style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header