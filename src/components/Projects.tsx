import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  type: string
  description: string
  features: string[]
  techStack: string[]
  tags: string[]
  github?: string
  demo?: string
  category: 'optimization' | 'computer-vision' | 'ml'
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'Airline Crew Scheduling Optimization',
      type: 'Optimization Project',
      category: 'optimization',
      description: 'Streamlit UI for optimizing airline crew scheduling with advanced algorithms for constraint satisfaction and cost minimization.',
      features: [
        'Interactive dashboard for crew assignment',
        'Constraint satisfaction algorithms',
        'Cost optimization and scheduling',
        'Real-time scheduling updates',
      ],
      techStack: ['Python', 'Streamlit', 'Optimization', 'Pandas', 'NumPy'],
      tags: ['#Optimization', '#Scheduling', '#Airlines'],
      github: 'https://github.com/Pravender/Airline-Crew-Scheduling-Optimization-Streamlit-UI',
    },
    {
      id: 2,
      title: 'ANN Classification - Churn Prediction',
      type: 'Machine Learning Project',
      category: 'ml',
      description: 'Artificial Neural Network implementation for predicting customer churn with comprehensive analysis and comprehensive evaluation metrics.',
      features: [
        'Deep neural network architecture design',
        'Customer churn classification',
        'Feature engineering and analysis',
        'Model performance optimization',
      ],
      techStack: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Scikit-learn'],
      tags: ['#MachineLearning', '#Classification', '#Churn'],
      github: 'https://github.com/Pravender/ANN-Classification-Churn',
    },
    {
      id: 3,
      title: 'Chatbot with OpenAI Integration',
      type: 'Gen AI Project',
      category: 'ml',
      description: 'Intelligent chatbot powered by OpenAI API with natural language processing and advanced conversation management.',
      features: [
        'OpenAI API integration',
        'Natural language processing',
        'Conversation memory and context',
        'Multi-turn dialogue handling',
      ],
      techStack: ['Python', 'OpenAI API', 'LangChain', 'NLP', 'REST APIs'],
      tags: ['#GenAI', '#Chatbot', '#NLP'],
      github: 'https://github.com/Pravender/Chatbot-with-openAI-',
    },
    {
      id: 4,
      title: 'ML Project with Deployment',
      type: 'Full-Stack ML Project',
      category: 'ml',
      description: 'Complete ML pipeline with data preprocessing, model training, comprehensive evaluation, and production-ready deployment.',
      features: [
        'End-to-end data pipeline',
        'Model training and tuning',
        'Deployment architecture',
        'API development for inference',
      ],
      techStack: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'Docker'],
      tags: ['#MachineLearning', '#Deployment', '#Pipeline'],
      github: 'https://github.com/Pravender/ML-project-with-deployment',
    },
    {
      id: 5,
      title: 'Smart Reorder System - EOQ',
      type: 'Optimization Project',
      category: 'optimization',
      description: 'Economic Order Quantity optimization system for inventory management with intelligent reorder point calculation and cost analysis.',
      features: [
        'EOQ algorithm implementation',
        'Inventory optimization',
        'Cost-benefit analysis',
        'Demand forecasting',
      ],
      techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Optimization'],
      tags: ['#Optimization', '#Inventory', '#Economics'],
      github: 'https://github.com/Pravender/smart-reorder-system-EOQ',
    },
  ]

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'optimization', label: 'Optimization' },
    { value: 'ml', label: 'Machine Learning' },
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Featured Projects</h2>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-primary-blue to-primary-purple text-text-primary'
                  : 'glass-effect text-text-secondary hover:text-secondary-cyan'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass-effect-strong rounded-lg overflow-hidden hover:border-secondary-cyan transition-all hover:shadow-lg hover:shadow-primary-purple/50 cursor-pointer"
            >
              {/* Header with animated background */}
              <motion.div 
                className="h-32 bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 p-6 flex flex-col justify-end relative overflow-hidden"
                whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.3)' }}
              >
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-blue/40 to-primary-purple/40"
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative z-10">
                  <motion.span 
                    className="text-xs text-secondary-cyan font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.type}
                  </motion.span>
                  <h3 className="text-xl font-bold text-text-primary mt-2 group-hover:text-secondary-cyan transition-colors">{project.title}</h3>
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <p className="text-text-secondary mb-4 group-hover:text-text-primary transition-colors">{project.description}</p>

                {/* Features with animation */}
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-sm font-semibold text-secondary-cyan mb-2 neon-glow">Key Features:</h4>
                  <ul className="text-xs text-text-secondary space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start group/feature"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="mr-2 text-secondary-cyan group-hover/feature:text-primary-purple transition-colors">▸</span>
                        <span className="group-hover/feature:text-text-primary transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                    {project.features.length > 2 && (
                      <li className="text-primary-purple font-semibold">
                        +{project.features.length - 2} more...
                      </li>
                    )}
                  </ul>
                </motion.div>

                {/* Tech Stack with glow */}
                <motion.div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-primary-blue/40 to-primary-purple/40 text-secondary-cyan rounded hover-glow cursor-pointer"
                        whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(124, 58, 237, 0.6)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-xs text-text-secondary">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-primary-purple">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-primary-purple/20">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-secondary-cyan hover:text-primary-purple transition-colors text-sm font-semibold"
                    >
                      <FaGithub /> GitHub
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-secondary-cyan hover:text-primary-purple transition-colors text-sm font-semibold"
                    >
                      <FaExternalLinkAlt /> Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
