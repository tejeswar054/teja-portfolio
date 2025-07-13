import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-8">
      <div className="container mx-auto space-y-4">
        <div className="flex justify-center gap-6 text-xl">
          {/* Update with your real profiles */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Teja Panchireddy</span>. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;

