import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#0f1111' }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Teja</div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 items-center text-white font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="mailto:your.email@example.com"
            className="text-white hover:text-blue-400"
          >
            Email
          </a>

          <a
            href="/Teja-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="text-xl ml-4 hover:text-yellow-400"
            title="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f1111] text-white px-6 pb-4 space-y-3 text-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="mailto:your.email@example.com"
            className="block hover:text-blue-400"
          >
            Email
          </a>

          <a
            href="/Teja-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="text-xl mt-4 hover:text-yellow-400"
            title="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


