import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  const education = [
    {
      degree: 'M.Tech in Operations Research',
      institution: 'National Institute of Technology, Durgapur',
      year: '2024',
      cgpa: '8.21',
    },
    {
      degree: 'B.Tech in Mechanical Engineering',
      institution: 'Guru Gobind Singh Indraprastha University, Delhi',
      year: '2020',
      cgpa: '7.88',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-20 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading neon-glow">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture with hover effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-96 h-96 rounded-lg glass-effect-strong bg-gradient-to-br from-primary-blue to-primary-purple p-2 flex items-center justify-center overflow-hidden hover-glow shadow-2xl"
              animate={{ boxShadow: ['0 0 30px rgba(124, 58, 237, 0.6)', '0 0 60px rgba(6, 182, 212, 0.6)', '0 0 30px rgba(124, 58, 237, 0.6)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.08 }}
            >
              <motion.img 
                src="/profile_pic.png" 
                alt="Profile Picture" 
                className="w-full h-full object-cover rounded-md"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed mb-6"
            >
              M.Tech graduate in Operations Research from NIT Durgapur with expertise in Computer Vision, Deep Learning, and Optimization Techniques. Currently working at Tata Elxsi developing real-time surveillance and person re-identification systems.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="glass-effect p-4 rounded-lg hover:border-secondary-cyan transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-secondary-cyan font-semibold">{edu.degree}</h4>
                        <p className="text-text-secondary">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary-purple font-bold">{edu.year}</p>
                        <p className="text-text-secondary">CGPA: {edu.cgpa}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="glass-effect p-4 rounded-lg">
                <p className="text-text-secondary text-sm">Phone</p>
                <p className="text-secondary-cyan font-semibold">+91 7983002393</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <p className="text-text-secondary text-sm">Location</p>
                <p className="text-secondary-cyan font-semibold">Shikohabad, UP</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
