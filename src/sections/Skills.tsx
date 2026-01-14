/**
 * Skills Section - "Team Formation"
 * Technical skills organized as a football team formation
 * Each position represents different areas of expertise
 */

import { motion } from 'framer-motion';
import { Shield, Users, Zap, Target, BookOpen } from 'lucide-react';

// Football formation positions with corresponding technical skills
const skillCategories = [
  {
    title: 'Goalkeeper - System Architecture',
    icon: Shield,
    color: 'text-gold',
    bgColor: 'bg-gold/10',
    borderColor: 'border-gold/30',
    jerseyColor: 'bg-navy',
    skills: [
      { name: 'System Design', level: 85 },
      { name: 'Security', level: 80 },
      { name: 'Architecture', level: 75 },
    ]
  },
  {
    title: 'Defenders - Backend & Databases',
    icon: Users,
    color: 'text-accent-green',
    bgColor: 'bg-accent-green/10',
    borderColor: 'border-accent-green/30',
    jerseyColor: 'bg-navy',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'SQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ]
  },
  {
    title: 'Midfielders - Tools & Frameworks',
    icon: Zap,
    color: 'text-team-red',
    bgColor: 'bg-team-red/10',
    borderColor: 'border-team-red/30',
    jerseyColor: 'bg-navy',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'React.js', level: 88 },
      { name: 'Redux', level: 80 },
      { name: 'Figma', level: 75 },
    ]
  },
  {
    title: 'Forwards - Frontend & UX',
    icon: Target,
    color: 'text-gold',
    bgColor: 'bg-gold/10',
    borderColor: 'border-gold/30',
    jerseyColor: 'bg-navy',
    skills: [
      { name: 'HTML & CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Postman', level: 80 },
    ]
  },
  {
    title: 'Captain - CS Fundamentals',
    icon: BookOpen,
    color: 'text-accent-green',
    bgColor: 'bg-accent-green/10',
    borderColor: 'border-accent-green/30',
    jerseyColor: 'bg-navy',
    skills: [
      { name: 'OOPs', level: 85 },
      { name: 'Data Structures', level: 80 },
    ]
  }
];

/**
 * Skills Component
 * Displays technical skills as football team formation
 * Each position represents different technical competencies
 */
export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">Team Formation</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            My technical skills organized like a championship football team - each position represents
            a key area of expertise working together to score goals in development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                {/* Football Jersey Design */}
                <div className={`${category.jerseyColor} rounded-2xl p-6 border-2 ${category.borderColor} shadow-2xl relative overflow-hidden`}>
                  {/* Jersey Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 right-4 h-1 bg-white rounded"></div>
                    <div className="absolute top-8 left-8 right-8 h-1 bg-white rounded"></div>
                    <div className="absolute top-12 left-12 right-12 h-1 bg-white rounded"></div>
                  </div>

                  {/* Position Badge */}
                  <div className={`absolute top-4 right-4 ${category.bgColor} px-3 py-1 rounded-full`}>
                    <IconComponent className={`w-4 h-4 ${category.color}`} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="bg-white/10 rounded-lg p-3"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-medium text-sm">{skill.name}</span>
                            <span className={`${category.color} text-sm font-bold`}>{skill.level}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden shadow-inner">
                            <motion.div
                              className={`h-full rounded-full shadow-sm ${
                                category.title.includes('Goalkeeper') || category.title.includes('Forwards') ? 'bg-gold' :
                                category.title.includes('Defenders') || category.title.includes('Captain') ? 'bg-accent-green' :
                                category.title.includes('Midfielders') ? 'bg-team-red' :
                                'bg-gold'
                              }`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 2.0,
                                delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.3,
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-accent-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gold">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'TypeScript', 'REST APIs', 'GraphQL', 'Docker', 'AWS',
              'Firebase', 'Vercel', 'Jest'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 glass-card text-sm font-medium text-white hover:text-gold transition-colors cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}