import { motion } from 'framer-motion';

// Adding  projects
const projects = [
  {
    title: 'Placement Management Portal',
   description: 'Developed a web portal to streamline college ' +
                'placement drives, enabling real-time information sharing and automated result tracking. ' +
                'Engineered an automated email alert system to notify students about updates, reducing manual effort by 60%.',
    image: 'https://i.ibb.co/b5nZ05t6/Screenshot-2025-03-02-143131.png',
    technologies: ['MongoDB', 'Express.js', 'ReactJS', 'Node.js'],
    github: 'https://github.com/Nikhilesh796/Placements-portal',
  },
  {
    title: 'Mediface',
    description:'Developed a facial recognition'+
                'system integrated with a medical records database. Enhanced patient identification accuracy by 25% and streamlined'+
                'data retrieval in real-time.',
    image: 'https://i.ibb.co/pBkY26GV/Screenshot-2025-03-02-195537.png',
    technologies: ['Flask', 'Python', 'OpenCV', 'MongoDB', 'Machine Learning'],
    github: 'https://github.com/Nikhilesh796/MediFace'
  },
  {
    title: 'Portfolio',
    description: 'Developed a personal portfolio website to showcase my skills and projects. Implemented a dark mode feature and a contact form with email notification.',
    image: 'https://i.ibb.co/mC14B5hV/Screenshot-2025-03-02-205313.png',
    technologies: ['ReactJS', 'Tailwind CSS', 'Framer Motion'],
    github: '',
    Live: ''
  }

];

function Projects() {
  return (
    <section id="projects" className="bg-primary section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary rounded-lg overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    GitHub
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-accent hover:border-light text-white px-6 py-2 rounded-full transition-all duration-300"
                  >
                    Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;