/**
 * Projects Section - "Match Highlights"
 * Showcases key projects as championship match highlights
 * Each project represents a significant achievement or victory
 */

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

// Featured projects with championship impact
const projects = [
  {
    id: 'career-companion',
    title: 'Career Companion Portal',
    description: 'An AI-powered career development platform that provides personalized interview preparation, job recommendations, and skill development guidance. Features intelligent resume analysis, mock interviews, and career path suggestions.',
    impact: 'Helps thousands of students land their dream jobs through personalized career guidance and interview preparation.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML', 'Tailwind CSS'],
    github: 'https://github.com/username/career-companion',
    demo: 'https://career-companion-demo.vercel.app',
    featured: true,
    category: 'Full-Stack Application'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Built with scalability and user experience in mind.',
    impact: 'Increased online sales conversion by 40% through optimized user flows and responsive design.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Redux'],
    github: 'https://github.com/username/ecommerce-platform',
    demo: 'https://ecommerce-platform-demo.vercel.app',
    featured: false,
    category: 'Full-Stack Application'
  },
  {
    id: 'task-management-app',
    title: 'Smart Task Manager',
    description: 'A productivity application with AI-powered task prioritization, deadline tracking, and collaborative features. Integrates with popular calendar and productivity tools.',
    impact: 'Improved team productivity by 35% through intelligent task management and automated reminders.',
    techStack: ['React Native', 'Firebase', 'AI/ML', 'GraphQL', 'TypeScript'],
    github: 'https://github.com/username/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    featured: false,
    category: 'Mobile Application'
  },
  {
    id: 'social-learning-platform',
    title: 'CodeShare',
    description: 'A collaborative coding platform where developers can share, review, and learn from code snippets. Includes live coding sessions and mentorship features.',
    impact: 'Built a community of 10,000+ developers through gamified learning and peer collaboration.',
    techStack: ['Next.js', 'Socket.io', 'MongoDB', 'Redis', 'AWS Lambda'],
    github: 'https://github.com/username/code-share',
    demo: 'https://codeshare-demo.vercel.app',
    featured: false,
    category: 'Social Platform'
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">Match Highlights</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Relive the greatest moments of my development career - projects that scored goals,
            broke records, and led to championship victories in the tech world
          </p>
        </motion.div>

        {/* Featured Project - Career Companion */}
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h3
                    className="text-3xl lg:text-4xl font-bold mb-4 text-electric-blue"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-lg text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gold font-semibold">🏆 Championship Impact: {project.impact}</p>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>

                <div className="relative">
                  <motion.div
                    className="aspect-video bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-electric-blue/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-electric-blue" />
                      </div>
                      <p className="text-gray-400">Project Preview</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="project-card"
            >
              <div className="mb-4">
                <span className="text-xs text-electric-blue bg-electric-blue/20 px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <h4 className="text-xl font-semibold mb-3 text-white hover:text-electric-blue transition-colors">
                {project.title}
              </h4>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-3 h-3" />
                  Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 p-2 btn-primary text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-3 h-3" />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}