import React from 'react';

const About = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-br from-gray-50 to-gray-200 text-center ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">About Me</h2>
        <p className="text-lg mt-4 leading-8 text-gray-800">
          I'm <span className="font-semibold">Teja</span>, a passionate <span className="font-semibold">Full Stack Developer</span> and a 3rd-year B.Tech student.
          I love building modern, fast, and responsive web applications that solve real-world problems.
          <br /><br />
          I'm self-driven, curious, and love exploring technologies like <span className="text-blue-600">React</span>, <span className="text-blue-600">Node.js</span>, <span className="text-blue-600">MongoDB</span>, and more.
        </p>
      </div>
    </section>
  );
};

export default About;

