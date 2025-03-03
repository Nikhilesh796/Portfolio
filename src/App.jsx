import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-light"
          >
            Portfolio
          </motion.h1>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link capitalize"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm md:hidden"
            >
              {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-4 px-6 nav-link capitalize"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-primary py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/nikhilesh796" target="_blank" rel="noopener noreferrer" className="text-white hover:text-light">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/nikhilesh237" target="_blank" rel="noopener noreferrer" className="text-white hover:text-light">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:nikhilesh796@gmail.com" className="text-white hover:text-light">
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Nikhilesh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;