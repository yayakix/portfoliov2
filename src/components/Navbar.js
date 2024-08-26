import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" md:block fixed top-0 left-0 w-full bg-white shadow-md z-20">
      <div className="max-w-7xl mx-auto sm:px-6  ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <img className="h-8 w-8" src={logo} alt="Logo" /> */}
            <div className=" md:block">
              <div className=" flex items-baseline space-x-4">
                <a
                  href="#home"
                  smooth
                  duration={500}
                  className="text-gray-800 hover:text-gray-600 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#projects"
                  className="text-gray-800 hover:text-gray-600  py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#technologies"
                  className="text-gray-800 hover:text-gray-600  py-2 rounded-md text-sm font-medium"
                >
                  Technologies
                </a>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-gray-600  py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
