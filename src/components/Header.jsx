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
    <motion.header 
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced animation */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.a 
              href="#home" 
              className="text-2xl font-bold text-primary-600 dark:text-primary-400 relative"
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

          {/* Desktop Navigation with staggered animations */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
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

          {/* Theme Toggle and Mobile Menu with enhanced animations */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 relative overflow-hidden"
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
                  >
                    <HiSun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiMoon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            
            <motion.button 
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300"
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
                  >
                    <HiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700"
          >
            <div className="container-custom py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  variants={mobileItemVariants}
                  className="block py-3 px-4 font-medium text-gray-700 dark:text-gray-300 rounded-lg relative overflow-hidden group"
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
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header