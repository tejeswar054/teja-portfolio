import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, bg: 'bg-blue-100 text-blue-600' },
  { name: 'Node.js', icon: <FaNodeJs />, bg: 'bg-green-100 text-green-600' },
  { name: 'MongoDB', icon: <SiMongodb />, bg: 'bg-emerald-100 text-emerald-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, bg: 'bg-cyan-100 text-cyan-600' },
  { name: 'GitHub', icon: <FaGithub />, bg: 'bg-gray-200 text-gray-800' },
];

const Skills = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-200 to-pink-300 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 underline">Skills</h2>
      
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center gap-6 px-6 md:px-20 w-max mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`min-w-[160px] md:min-w-[200px] h-44 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-2 ${skill.bg} hover:scale-110 transition-all duration-300 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

