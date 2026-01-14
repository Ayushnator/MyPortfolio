/**
 * Experience Section - "Career League"
 * Professional journey presented as football league seasons
 * Each experience represents matches won and championships earned
 */

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code, Users, Trophy } from 'lucide-react';

// Career experiences formatted as league seasons
const experiences = [
  {
    id: 1,
    type: 'internship',
    title: 'Summer Transfer - Software Engineering Intern',
    company: 'TechCorp Solutions',
    location: 'Remote Stadium',
    duration: 'Summer 2024 Transfer Window',
    description: 'Joined the development squad to build full-stack features for a SaaS platform. Played key role in improving team performance and mentoring young talent.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    icon: Code,
    achievements: [
      '⚽ Scored 40% improvement in API response time',
      '🏆 Implemented real-time notifications system',
      '👥 Mentored 2 junior developers'
    ]
  },
  {
    id: 2,
    type: 'project',
    title: 'Championship Season - Career Companion Platform',
    company: 'Captain & Founder',
    location: 'Home Ground',
    duration: 'Season 2024 - Present',
    description: 'Led the development of an AI-powered career platform from grassroots to championship level. Currently dominating the market with 1000+ active users.',
    skills: ['React', 'AI/ML', 'Node.js', 'MongoDB'],
    icon: Award,
    achievements: [
      '🏆 10,000+ lines of championship code',
      '⚡ 99.9% uptime record maintained',
      '📺 Featured in 3 tech league broadcasts'
    ]
  },
  {
    id: 3,
    type: 'hackathon',
    title: 'Champions League Final - HackIndia 2024',
    company: 'National Championship',
    location: 'Mumbai Arena',
    duration: 'March 2024',
    description: 'Captain of a 4-player squad that developed an AI-powered healthcare solution. Lifted the Champions League trophy against 500 competing teams.',
    skills: ['AI/ML', 'React Native', 'Python', 'FastAPI'],
    icon: Trophy,
    achievements: [
      '🥇 Champions League Winner',
      '🏅 Best Innovation Award',
      '👥 Beat 500 competing teams'
    ]
  },
  {
    id: 4,
    type: 'learning',
    title: 'Full Stack Development Bootcamp',
    company: 'Self-Learning & Practice',
    location: 'Online',
    duration: 'Sep 2023 - Dec 2023',
    description: 'Completed intensive self-paced learning covering modern web development technologies and best practices.',
    skills: ['JavaScript', 'React', 'Node.js', 'Database Design'],
    icon: Users,
    achievements: [
      'Built 15+ practice projects',
      'Completed 200+ coding challenges',
      'Achieved 95% on certification exam'
    ]
  },
  {
    id: 5,
    type: 'internship',
    title: 'Frontend Development Intern',
    company: 'StartupXYZ',
    location: 'Bangalore, India',
    duration: 'Jan 2024 - Mar 2024',
    description: 'Designed and implemented responsive user interfaces, optimized performance, and improved user engagement metrics.',
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'Figma'],
    icon: Code,
    achievements: [
      'Increased user engagement by 35%',
      'Reduced bundle size by 30%',
      'Implemented dark mode feature'
    ]
  },
  {
    id: 6,
    type: 'project',
    title: 'Open Source Contributions',
    company: 'GitHub Community',
    location: 'Global',
    duration: 'Ongoing',
    description: 'Active contributor to open source projects, focusing on React ecosystem and developer tools.',
    skills: ['React', 'TypeScript', 'Testing', 'Documentation'],
    icon: Award,
    achievements: [
      '50+ pull requests merged',
      'Mentored 10+ contributors',
      'Created 5 npm packages'
    ]
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'internship': return 'border-electric-blue';
    case 'project': return 'border-neon-cyan';
    case 'hackathon': return 'border-neon-purple';
    case 'learning': return 'border-green-400';
    default: return 'border-gray-400';
  }
};

const getTypeBgColor = (type: string) => {
  switch (type) {
    case 'internship': return 'bg-electric-blue/10';
    case 'project': return 'bg-neon-cyan/10';
    case 'hackathon': return 'bg-neon-purple/10';
    case 'learning': return 'bg-green-400/10';
    default: return 'bg-gray-400/10';
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">Career League</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            My professional journey through different seasons - from pre-season training to championship victories.
            Each experience represents a match won in the competitive world of technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue to-neon-purple"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric-blue rounded-full border-4 border-dark-bg z-10">
                    <div className="absolute inset-0 bg-electric-blue rounded-full animate-ping opacity-25"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`glass-card p-6 border-l-4 ${getTypeColor(experience.type)}`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-full ${getTypeBgColor(experience.type)}`}>
                          <IconComponent className={`w-6 h-6 ${getTypeColor(experience.type).replace('border-', 'text-')}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-1">{experience.title}</h3>
                          <p className="text-electric-blue font-medium mb-2">{experience.company}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {experience.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-electric-blue mb-2">Key Achievements:</h4>
                        {experience.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-electric-blue rounded-full"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for even layout */}
                  <div className="hidden md:block w-2/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}