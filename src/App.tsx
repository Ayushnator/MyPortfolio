import { useEffect } from 'react';
import Lenis from 'lenis';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

// Components
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  lerp: 0.1,
});


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg to-dark-bg-secondary">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;
