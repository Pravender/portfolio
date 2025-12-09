import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const tagline = "Transforming surveillance systems and optimizing last-mile delivery with AI"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < tagline.length) {
        setDisplayText(tagline.substring(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-primary-blue to-primary-purple opacity-50"></div>
      
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-secondary-cyan to-primary-purple rounded-full opacity-60"
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 400 - 200],
              y: [Math.random() * 100 - 50, Math.random() * -600],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-purple to-secondary-cyan rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 0.8, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-4 text-text-primary"
        >
          Pravender Kumar
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-secondary-cyan to-primary-purple bg-clip-text text-transparent"
        >
          Senior Engineer | Computer Vision & ML Specialist
        </motion.h2>

        {/* Tagline with typewriter effect */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary mb-8 min-h-12"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/50 transition-all"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-secondary-cyan text-secondary-cyan font-semibold rounded-lg hover:bg-secondary-cyan/10 transition-all"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/Pravender', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/pravender-kumar-213463193', label: 'LinkedIn' },
            { icon: FaEnvelope, href: 'mailto:kumarpravender1999@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center rounded-full glass-effect hover:bg-secondary-cyan/20 transition-all"
              aria-label={label}
            >
              <Icon className="text-secondary-cyan text-xl" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary-cyan"
      >
        <FaChevronDown size={24} />
      </motion.div>
    </section>
  )
}

export default Hero
