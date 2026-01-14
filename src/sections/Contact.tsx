/**
 * Contact Section - "Team Huddle"
 * Contact information presented as a team formation
 * Social links and contact details for professional connections
 */

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

// Contact platforms and professional profiles
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aayushhsinghh001@gmail.com',
    href: 'mailto:aayushhsinghh001@gmail.com',
    color: 'text-electric-blue'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Ayushnator',
    href: 'https://github.com/Ayushnator',
    color: 'text-gray-300'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Ayush Singh',
    href: 'www.linkedin.com/in/ayush-singh-0b5ba0256',
    color: 'text-blue-400'
  }
];

const contactMethods = [
  {
    icon: MapPin,
    title: 'Location',
    description: 'Noida, India',
    color: 'text-green-400'
  },
  
  {
    icon: Mail,
    title: 'Email',
    description: 'your.email@example.com',
    color: 'text-electric-blue'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">Team Huddle</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join my squad! Whether you're looking for a new team player or want to discuss the next big match,
            I'm always ready to connect and bring winning ideas to the field.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Formation Ready</h3>

            {/* Social Links */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center justify-center gap-4 p-6 glass-card group hover:border-electric-blue/50 transition-all duration-300"
                  >
                    <div className={`p-4 rounded-full bg-gray-700 group-hover:bg-electric-blue/20 transition-colors`}>
                      <IconComponent className={`w-8 h-8 ${contact.color} group-hover:text-electric-blue`} />
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-medium group-hover:text-electric-blue transition-colors text-lg">
                        {contact.label}
                      </h4>
                      <p className="text-gray-400">{contact.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 glass-card"
                  >
                    <IconComponent className={`w-10 h-10 ${method.color} mx-auto mb-3`} />
                    <h4 className="text-white font-medium text-base mb-2">{method.title}</h4>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400">
            © 2026 Ayush Singh. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            {contactInfo.slice(1).map((contact) => {
              const IconComponent = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors ${contact.color}`}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}