import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kumarpravender1999@gmail.com',
      href: 'mailto:kumarpravender1999@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 7983002393',
      href: 'tel:+917983002393',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Shikohabad, Uttar Pradesh, India',
    },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Pravender',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/pravender-kumar-213463193',
      label: 'LinkedIn',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:kumarpravender1999@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 gradient-mesh relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-r from-primary-purple to-secondary-cyan rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-secondary-cyan to-primary-blue rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading neon-glow">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 glass-effect-strong p-4 rounded-lg hover:border-secondary-cyan transition-all group hover-lift"
                    whileHover={{ boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)' }}
                  >
                    <motion.div 
                      className="p-3 rounded-lg bg-gradient-to-br from-primary-blue to-primary-purple glow"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <IconComponent className="text-text-primary text-xl" />
                    </motion.div>
                    <div className="group-hover:translate-x-2 transition-transform">
                      <p className="text-text-secondary text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-secondary-cyan hover:text-primary-purple transition-colors font-semibold"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-secondary-cyan font-semibold">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-text-primary mb-4 neon-glow">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link, idx) => {
                  const IconComponent = link.icon
                  return (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg glass-effect-colored hover-glow transition-all"
                      whileHover={{ 
                        scale: 1.2, 
                        boxShadow: '0 0 25px rgba(124, 58, 237, 0.8)',
                        y: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      aria-label={link.label}
                    >
                      <IconComponent className="text-secondary-cyan text-2xl" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-text-secondary text-sm font-medium mb-2 neon-glow">
                  Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-secondary-cyan transition-all neon-border"
                  placeholder="Your name"
                  whileFocus={{ boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)' }}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-text-secondary text-sm font-medium mb-2 neon-glow">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-secondary-cyan transition-all neon-border"
                  placeholder="your@email.com"
                  whileFocus={{ boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)' }}
                />
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-text-secondary text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-secondary-cyan transition-all"
                  placeholder="Project inquiry"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-text-secondary text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-secondary-cyan transition-all resize-none"
                  placeholder="Tell me more about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-purple/50 transition-all disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
