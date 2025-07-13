import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Agri Market Hub',
    description: 'A full-stack app for buying/selling agricultural tools and fertilizers.',
    tech: 'React, Node.js, MongoDB',
    github: '#',
    demo: '#',
  },
  {
    title: 'Price Tracker & Alert',
    description: 'Tracks product prices and sends email alerts on price drops.',
    tech: 'React, Express, MongoDB, Nodemailer',
    github: '#',
    demo: '#',
  },
  {
    title: 'Dropshipping Store',
    description: 'A dropshipping platform built for automated product listing & orders.',
    tech: 'Next.js, Stripe, MongoDB',
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal developer portfolio showcasing skills, resume, and projects.',
    tech: 'React, Tailwind CSS',
    github: '#',
    demo: '#',
  },
  {
    title: 'Resume Handler',
    description: 'ML tool to scan, analyze, and rank resumes for specific job profiles.',
    tech: 'Python, Flask, Scikit-learn, NLP',
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-green-100 to-blue-100 text-center">
      <h2 className="text-4xl font-bold mb-10 underline text-gray-800">Projects</h2>
      
      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 text-left max-w-[360px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <p className="text-sm text-gray-800 mb-4">
              <span className="font-medium">Tech:</span> {project.tech}
            </p>
            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
