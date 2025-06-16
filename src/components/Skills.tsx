import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90, color: 'from-orange-500 to-pink-500' },
  { name: 'CSS', level: 85, color: 'from-blue-500 to-cyan-400' },
  { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', level: 75, color: 'from-blue-600 to-blue-400' },
  { name: 'React', level: 80, color: 'from-cyan-400 to-blue-600' },
  { name: 'Next.js', level: 70, color: 'from-gray-700 to-gray-900' },
  { name: 'Node.js', level: 70, color: 'from-green-500 to-green-700' },
  { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-cyan-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the technologies I've been working with recently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">And more...</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['Git', 'GitHub', 'REST APIs', 'Responsive Design', 'Figma', 'VS Code', 'npm', 'yarn'].map((tool, index) => (
              <span 
                key={tool}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:bg-gray-800 transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
