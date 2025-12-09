import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'

interface NavigationProps {
  isDarkMode: boolean
  onThemeToggle: () => void
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-blue via-primary-purple to-secondary-cyan z-50 glow"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/90 backdrop-blur-md shadow-lg shadow-primary-purple/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with hover effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl font-bold gradient-text-cyan neon-glow cursor-pointer">PK</span>
            </motion.div>

            {/* Desktop Navigation with enhanced effects */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-text-secondary hover:text-secondary-cyan transition-all cursor-pointer font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-secondary-cyan group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={onThemeToggle}
                className="p-2 rounded-lg hover:bg-primary-purple/20 transition-all"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.15, rotate: 20 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? (
                  <FaSun className="text-secondary-cyan text-xl" />
                ) : (
                  <FaMoon className="text-primary-purple text-xl" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-primary-purple/20 transition-all"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? (
                  <FaTimes className="text-text-primary text-xl" />
                ) : (
                  <FaBars className="text-text-primary text-xl" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-text-secondary hover:text-secondary-cyan hover:bg-primary-purple/10 transition-all cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
    </>
  )
}

export default Navigation
