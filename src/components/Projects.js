import { useTheme } from "../ThemeContext";
import "../css/Projects.css";
import projectslist from "../projectslist";

function Projects() {
  const { darkMode } = useTheme();

  return (
    <div
      id="projects"
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-3xl font-extrabold sm:text-4xl ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Projects
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto text-xl ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Check out some of my recent work
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectslist.map((project) => (
            <div
              key={project.title}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={project.img}
                  alt={project.title}
                />
              </div>

              <div className="flex-1 p-6">
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mt-3 text-base ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {project.description}
                </p>
              </div>

              <div
                className={`px-6 py-4 ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                }`}
              >
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
                      darkMode
                        ? "bg-gray-600 text-white hover:bg-gray-500 border-gray-500"
                        : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                    }`}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
