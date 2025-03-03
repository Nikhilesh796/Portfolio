import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['DevOps Engineer', 'Web Developer', 'Software Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Background stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: `star-${i}`,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden bg-primary"
    >
      {/* Background stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-light">Nikhilesh</span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            key={roles[roleIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            A passionate {roles[roleIndex]}
          </motion.p>
          <div className="flex space-x-4">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1fPssmANfu4HQNjlzxLtCZPtNNy1Z20FZ/view?usp=drive_link"
              target="_blank"
              className="border-2 border-accent hover:border-light text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-accent">
            <img
              src="https://i.ibb.co/rf3FGb7r/DSC-5604.jpg"
              alt="Nikhlesh"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
