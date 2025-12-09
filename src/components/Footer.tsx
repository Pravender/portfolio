import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Pravender', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/pravender-kumar-213463193', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:kumarpravender1999@gmail.com', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-dark-bg border-t border-primary-purple/20 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 0% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="group">
            <div className="mb-4">
              <motion.span 
                className="text-3xl font-bold gradient-text-cyan neon-glow"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                PK
              </motion.span>
            </div>
            <motion.p 
              className="text-text-secondary group-hover:text-text-primary transition-colors"
              whileHover={{ x: 10 }}
            >
              Senior Engineer | Computer Vision & ML Specialist
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-text-primary mb-4 neon-glow">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={`#${link.to}`}
                  className="text-text-secondary hover:text-secondary-cyan transition-colors block relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-secondary-cyan group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-text-primary mb-4 neon-glow">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-effect-colored flex items-center justify-center hover:bg-secondary-cyan/20 transition-all hover-glow"
                    aria-label={link.label}
                    whileHover={{ 
                      scale: 1.3, 
                      boxShadow: '0 0 20px rgba(124, 58, 237, 0.8)',
                      y: -3
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="text-secondary-cyan text-lg" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider with animation */}
        <motion.div 
          className="border-t border-gradient-to-r from-primary-purple/20 via-secondary-cyan/20 to-primary-purple/20 my-8"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-text-secondary"
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Pravender Kumar. Built with{' '}
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              <FaHeart className="text-secondary-cyan" />
            </motion.span>{' '}
            React & Tailwind CSS
          </p>
          <motion.p 
            className="text-xs mt-2 neon-glow"
            whileHover={{ scale: 1.05 }}
          >
            Designed & Developed for AI/ML Excellence
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
