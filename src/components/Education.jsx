import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Vishnu Institute of Technology',
    year: '2021–2025',
    score: 'CGPA: 8.14/10.0'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Tirumala Junior College',
    year: '2021',
    score: 'Percentage: 84.1%'
  },
  {
    degree: 'SSC (10th Grade)',
    institution: 'Ravindra Bharathi',
    year: '2019',
    score: 'GPA: 10.0/10.0'
  }
];

function Education() {
  return (
    <section id="education" className="bg-primary section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-light">{edu.degree}</h4>
              <p className="text-gray-300 mt-2">{edu.institution}</p>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>{edu.year}</span>
                <span>{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education