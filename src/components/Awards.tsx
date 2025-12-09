import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaFileAlt } from 'react-icons/fa'

const Awards: React.FC = () => {
  const awards = [
    {
      id: 1,
      icon: FaTrophy,
      title: 'GATE 2022',
      description: 'AIR Rank 1726',
      year: '2022',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 2,
      icon: FaFileAlt,
      title: 'Published Research Paper',
      description: '"A Review Paper on Utility of Treadmill for Power Generation"',
      journal: 'International Journal for Technological Research in Engineering (IJTRE)',
      year: 'November 2019',
      volume: 'Volume 7, Issue 3',
      color: 'from-blue-400 to-blue-600',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="awards" className="py-20 px-4 gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading neon-glow">Awards & Recognition</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {awards.map((award) => {
            const IconComponent = award.icon
            return (
              <motion.div
                key={award.id}
                variants={itemVariants}
                className="glass-effect-strong rounded-lg p-6 hover:border-secondary-cyan transition-all group hover-lift"
                whileHover={{ 
                  boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)',
                  scale: 1.02
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`p-4 rounded-lg bg-gradient-to-br ${award.color} flex-shrink-0`}
                  >
                    <IconComponent className="text-white text-2xl" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {award.title}
                    </h3>
                    <p className="text-secondary-cyan font-semibold mb-2">
                      {award.description}
                    </p>

                    {'journal' in award && (
                      <div className="text-text-secondary space-y-1 text-sm">
                        <p>{award.journal}</p>
                        <p>{award.volume} | {award.year}</p>
                      </div>
                    )}

                    {'year' in award && !('journal' in award) && (
                      <p className="text-text-secondary text-sm">{award.year}</p>
                    )}
                  </div>

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center">
                      <span className="text-yellow-300 text-2xl">★</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Awards
