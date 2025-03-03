import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Profile',
    skills: ['Software Developer']
  },
  {
    title: 'Domain',
    skills: ['Information Technology']
  },
  {
    title: 'Education',
    skills: ['Bachelor of Technology']
  },
  {
    title: 'Language',
    skills: ['English', 'Telugu']
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'Javascript']
  },
  {
    title: 'DataBases',
    skills: ['MySQL', 'MongoDB']
  },
  {
    title: 'Full Stack',
    skills: ['MERN Stack']
  },
  {
    title: 'Cloud',
    skills: ['AWS Cloud Foundations']
  },
  {
    title: 'Other Skills',
    skills: ['Data Structures & Algorithms', 'PowerBI', 'MS Excel']
  }
];

function Skills() {
  return (
    <section id="skills" className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-light">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;