/**
 * About Section - "Player Profile"
 * Personal introduction with core values and technical expertise
 * Features football-themed language and championship mindset
 */

import { motion } from 'framer-motion';
import { Code, Zap, Database, Palette } from 'lucide-react';

// Technical skills showcased in the about section
const skills = [
  { name: 'HTML, CSS, Tailwind CSS', icon: Code },
  { name: 'JavaScript (ES6+)', icon: Zap },
  { name: 'React.js, Redux', icon: Code },
  { name: 'Node.js, Express.js', icon: Zap },
  { name: 'SQL, MongoDB', icon: Database },
  { name: 'Git & GitHub', icon: Code },
  { name: 'Figma, Postman', icon: Palette },
  { name: 'System Design fundamentals', icon: Zap },
  { name: 'Object-Oriented Programming (OOPs)', icon: Code },
];

/**
 * About Component
 * Player profile section highlighting technical expertise and championship values
 */
export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">Player Profile</h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Passionate Full Stack Developer who brings the same dedication and teamwork from the football field
            to every project. I score goals in code by building scalable solutions, collaborating with cross-functional
            teams, and constantly improving my game through continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-center mb-12 text-gold">
            Playing Style & Skills
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="skill-card group"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="mb-4 p-3 bg-gold/20 rounded-full"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-gold" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Goal Scorer",
              description: "I thrive on tackling complex challenges and scoring goals by finding elegant solutions that drive real impact."
            },
            {
              title: "Team Player",
              description: "Collaboration is key - I work seamlessly with cross-functional teams, adapting strategies and learning from every teammate."
            },
            {
              title: "Championship Mindset",
              description: "Every project is a championship match. I bring the same dedication, precision, and winning attitude to every codebase."
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center"
            >
              <h4 className="text-xl font-semibold mb-4 text-gold">{value.title}</h4>
              <p className="text-white">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}