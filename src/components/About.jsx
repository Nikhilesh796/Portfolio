import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-300"
        >
          <p className="mb-6">
            Hello! I'm Nikhilesh, a passionate developer with a strong foundation in web development
            and cloud foundations as well.
            I love creating beautiful and functional applications that solve real-world problems.
          </p>
          
          <p className="mb-6">
            With a background in Information Technology, I bring a unique perspective to every project
            I work on. I'm constantly learning and staying up-to-date with the latest technologies and best practices
            in the ever-evolving world of web development.
          </p>
          
          <p>
            When I'm not coding, you can find me learning about the latest tech. I believe in maintaining a
            healthy work-life balance and bringing creativity to everything I do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About