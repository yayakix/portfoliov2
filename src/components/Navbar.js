import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/journey", label: "Journey" },
    { to: "/experience", label: "Experience" },
    { to: "/learning", label: "Learning" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-10 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`text-xl font-semibold tracking-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Iyana Marquez
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.to)
                    ? "text-pink-500"
                    : darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-lg ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-5 w-5"
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
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden transition-all duration-300 ease-in-out pb-4`}
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.to)
                    ? "text-pink-500 bg-pink-50 dark:bg-pink-900/20"
                    : darkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
