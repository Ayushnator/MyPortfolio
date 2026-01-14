/**
 * Navigation Component
 * Fixed navigation bar with smooth scrolling to sections
 * Football-themed navigation labels for consistent branding
 */

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Mee from '../Assets/mee.jpeg';

// Navigation items with football-themed labels
const navItems = [
  { name: 'Kickoff', href: '#hero' },
  { name: 'Player Profile', href: '#about' },
  { name: 'Team Formation', href: '#skills' },
  { name: 'Match Highlights', href: '#projects' },
  { name: 'Career League', href: '#experience' },
  { name: 'Team Huddle', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-white/15'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection('#hero')} className="flex items-center gap-3">
            <img
              src={Mee}
              alt="Profile avatar"
              className="w-10 h-10 rounded-full border border-white/20 object-cover"
            />
            <motion.span className="text-xl font-bold neon-text hidden sm:inline-block" whileHover={{ scale: 1.05 }}>
              Ayush Singh
            </motion.span>
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-electric-blue'
                    : 'text-gray-300 hover:text-electric-blue'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-blue rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md border border-white/20 bg-dark-bg/60 backdrop-blur"
            >
              {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </motion.button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-dark-bg/90 backdrop-blur-lg border-t border-white/15">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  activeSection === item.href.substring(1) ? 'text-electric-blue bg-white/5' : 'text-gray-300 hover:text-electric-blue'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
