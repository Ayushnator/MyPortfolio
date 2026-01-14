/**
 * Hero Section - "Kickoff"
 * Main landing section with animated introduction and call-to-action buttons
 * Features football-themed animations and championship branding
 */

import { motion } from 'framer-motion';
import { Download, Trophy, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import Mee from '../Assets/mee.jpeg';

/**
 * TypewriterText Component
 * Creates animated typing effect for text content
 */
const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Characters per second

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

/**
 * Hero Component
 * Championship kickoff section with animated elements and football theme
 */
export default function Hero() {
  /**
   * Smooth scroll to projects section
   */
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Download resume PDF file
   */
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Football Field Background Elements */}
      <div className="absolute inset-0">
        {/* Animated football with continuous motion */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 360, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 opacity-20"
        >
          <div className="w-16 h-16 bg-white rounded-full border-4 border-black flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
        </motion.div>

        {/* Goal post silhouettes */}
        <div className="absolute top-32 left-16 opacity-10">
          <div className="w-20 h-2 bg-white"></div>
          <div className="w-2 h-16 bg-white mx-auto"></div>
        </div>

        <div className="absolute top-32 right-16 opacity-10">
          <div className="w-20 h-2 bg-white"></div>
          <div className="w-2 h-16 bg-white mx-auto"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <Trophy className="w-16 h-16 text-gold mx-auto lg:mx-0" />
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 neon-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Scoring Goals in
              <br />
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Code & Technology
              </span>
            </motion.h1>

            <motion.div
              className="text-xl lg:text-2xl text-white mb-8 font-light h-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <TypewriterText text="Full Stack Developer | Problem Solver | Team Player" delay={1} />
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-0.5 h-6 bg-gold ml-1 align-middle"
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={downloadResume}
                className="btn-primary flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>

              <motion.button
                onClick={scrollToProjects}
                className="btn-secondary flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-5 h-5" />
                View Match Highlights
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-accent-green rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gold glow-border bg-white">
                <img src={Mee} alt="Ayush Singh" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
