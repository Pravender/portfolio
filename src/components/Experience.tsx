import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  techStack: string[]
  badges: string[]
}

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  const experiences: Experience[] = [
    {
      id: 0,
      title: 'Senior Engineer',
      company: 'Tata Elxsi',
      period: 'Dec 2023 – Present',
      description: 'Real-Time Person Re-Identification and Unauthorized Access Detection System',
      achievements: [
        'Designed real-time surveillance system tracking individuals across multiple camera views',
        'Implemented YOLOv9 for person detection with Dlib + face_recognition',
        'Extracted facial/body embeddings using ResNet50 with cosine similarity matching',
        'Developed proximity-based alert mechanism for unauthorized vehicle access',
      ],
      techStack: ['Python', 'OpenCV', 'YOLOv9', 'ResNet50', 'Scipy', 'Real-time Video Streaming'],
      badges: ['Real-time Processing', 'Multi-camera Tracking', 'Security Enhancement'],
    },
    {
      id: 1,
      title: 'Intern',
      company: 'Tata Elxsi',
      period: 'June 2023 – April 2024',
      description: 'Fusion of Camera & LiDAR Sensors for Depth Estimation',
      achievements: [
        'Created fusion algorithm combining LiDAR point cloud (Open3D) with camera detections',
        'Applied YOLO for real-time object detection and depth estimation',
        'Optimized sensor fusion pipeline for real-time processing',
      ],
      techStack: ['Python', 'YOLO', 'Open3D', 'LiDAR Processing', 'OpenCV'],
      badges: ['Sensor Fusion', 'Depth Estimation', 'Real-time Detection'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading neon-glow">Professional Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-effect-strong rounded-lg overflow-hidden hover:border-secondary-cyan transition-all group hover-lift"
              whileHover={{ boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)' }}
            >
              {/* Header - Always visible */}
              <motion.button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-primary-purple/10 transition-all cursor-pointer"
                whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.1)' }}
              >
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                    <motion.h3 
                      className="text-xl font-bold text-secondary-cyan group-hover:text-primary-purple transition-colors neon-glow"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.span 
                      className="text-text-secondary font-semibold"
                      whileHover={{ color: '#06b6d4' }}
                    >
                      {exp.company}
                    </motion.span>
                  </div>
                  <p className="text-text-secondary group-hover:text-text-primary transition-colors">{exp.period}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                  className="text-secondary-cyan"
                >
                  <FaChevronDown className="text-secondary-cyan text-xl" />
                </motion.div>
              </motion.button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-primary-purple/20 px-6 py-4 bg-primary-purple/5"
                  >
                    <p className="text-text-secondary mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-text-secondary flex items-start">
                            <span className="text-secondary-cyan mr-3">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-primary-blue/30 text-secondary-cyan rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      {exp.badges.map((badge) => (
                        <motion.span
                          key={badge}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-primary-blue to-primary-purple text-text-primary rounded-full font-semibold"
                        >
                          {badge}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
