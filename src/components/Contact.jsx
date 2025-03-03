import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:nikhilesh796@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Background animation shapes
  const shapes = Array.from({ length: 10 }, (_, i) => ({
    initial: {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotate: 0
    },
    animate: {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  }));

  return (
    <section id="contact" className="bg-secondary section-padding relative overflow-hidden">
      {/* Animated background shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={shape.initial}
          animate={shape.animate}
          className="absolute w-20 h-20 opacity-10 rounded-full bg-primary"
          style={{
            zIndex: 0
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-light text-xl" />
              <span>+91 7416180050</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-light text-xl" />
              <span>nikhilesh796@gmail.com</span>
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/nikhilesh796" target="_blank" rel="noopener noreferrer" className="text-white hover:text-light transition-colors">
                <FaGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/nikhilesh237" target="_blank" rel="noopener noreferrer" className="text-white hover:text-light transition-colors">
                <FaLinkedin size={28} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-light"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-light"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-light"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;