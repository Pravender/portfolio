import React from 'react'
import { motion } from 'framer-motion'

interface Skill {
  category: string
  skills: Array<{ name: string; proficiency: number }>
}

const Skills: React.FC = () => {
  const skillsData: Skill[] = [
    {
      category: 'Technical Proficiency',
      skills: [
        { name: 'Machine Learning', proficiency: 85 },
        { name: 'Computer Vision', proficiency: 90 },
        { name: 'Optimization Techniques', proficiency: 85 },
        { name: 'Deep Learning', proficiency: 80 },
        { name: 'Generative AI', proficiency: 75 },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', proficiency: 95 },
        { name: 'C++', proficiency: 70 },
        { name: 'CPLEX', proficiency: 80 },
        { name: 'Gurobi', proficiency: 80 },
        { name: 'Google OR-Tools', proficiency: 75 },
      ],
    },
  ]

  const frameworksData = {
    'Computer Vision': ['OpenCV', 'YOLO (v9)', 'Dlib', 'face_recognition', 'Open3D'],
    'ML/DL': ['TensorFlow', 'PyTorch', 'ResNet50', 'Scikit-Learn'],
    'Data Science': ['Pandas', 'NumPy', 'Matplotlib', 'Scipy'],
    'Gen AI': ['Langchain', 'RAG (Retrieval Augmented Generation)'],
    'Developer Tools': ['Visual Studio', 'Google Colab', 'Jupyter Notebook', 'PyCharm', 'Git'],
  }

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
    <section id="skills" className="py-20 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading neon-glow">Technical Skills</h2>

        {/* Proficiency Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          {skillsData.map((section, sectionIdx) => (
            <motion.div key={sectionIdx} variants={itemVariants} className="mb-10">
              <h3 className="text-2xl font-bold text-secondary-cyan mb-6 hover:text-primary-purple transition-colors">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-40 text-text-secondary font-medium group-hover:text-secondary-cyan transition-colors">
                      {skill.name}
                    </span>
                    <div className="flex-1 h-3 bg-primary-blue/20 rounded-full overflow-hidden glass-effect">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary-blue via-primary-purple to-secondary-cyan glow"
                        whileHover={{ boxShadow: '0 0 20px rgba(124, 58, 237, 0.8)' }}
                      />
                    </div>
                    <motion.span 
                      className="w-12 text-right text-secondary-cyan font-bold"
                      whileHover={{ scale: 1.2, color: '#7c3aed' }}
                    >
                      {skill.proficiency}%
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Frameworks & Libraries */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-secondary-cyan mb-6">
            Frameworks & Libraries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(frameworksData).map(([category, tools]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="glass-effect p-6 rounded-lg hover:border-secondary-cyan transition-all"
              >
                <h4 className="text-primary-purple font-semibold mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <motion.span
                      key={tool}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 text-sm bg-primary-blue/30 text-secondary-cyan rounded-full hover:bg-primary-blue/50 transition-all"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Tools */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 glass-effect p-8 rounded-lg text-center"
        >
          <h3 className="text-xl font-bold text-text-primary mb-4">Developer Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {frameworksData['Developer Tools'].map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-purple text-text-primary rounded-full font-semibold cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
