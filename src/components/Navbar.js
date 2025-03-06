import React, { useState } from "react";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-10 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-gray-800">
              Iyana Marquez
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#experience"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#experience"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
