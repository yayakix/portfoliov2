import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function ProjectsPage() {
  const { darkMode } = useTheme();

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  const projects = [
    {
      title: "Aqua Crafts",
      description: "E-commerce site built for a local business owner.",
      learned: "Firebase authentication, Firestore database, Stripe payment integration",
      livelink: "https://aquacrafts-store.netlify.app/",
      codelink: "https://github.com/yayakix/aqua_crafts_store",
    },
    {
      title: "NVIDIA Landing Page Clone",
      description: "Pixel-perfect recreation of NVIDIA's landing page.",
      learned: "Translating designs to code, responsive layouts, attention to detail",
      livelink: "https://nvidia-clone-yaya.netlify.app/",
      codelink: "https://github.com/yayakix/nvidia-clone",
    },
    {
      title: "Tic Tac Toe (Multiplayer)",
      description: "Real-time multiplayer game with WebSocket connections.",
      learned: "WebSockets, real-time state synchronization, multiplayer architecture",
      livelink: "https://tictactoe-yaya.netlify.app/",
      codelink: "https://github.com/yayakix/tictactoe-websockets",
    },
    {
      title: "Calculator",
      description: "React calculator with basic math operations.",
      learned: "React fundamentals, state management, user input handling",
      livelink: "https://simplecalculator-7d4924.netlify.app/",
      codelink: "https://github.com/yayakix/calculator-react",
    },
    {
      title: "Todo List",
      description: "Task management app with local storage persistence.",
      learned: "Zustand state management, local storage, CRUD operations",
      livelink: "https://todolist-yaya.netlify.app/",
      codelink: "https://github.com/fractal-bootcamp/iyanamarquez.task-management",
    },
    {
      title: "Simon Says",
      description: "Pattern memory game built with vanilla JavaScript.",
      learned: "JavaScript fundamentals, jQuery, game logic, DOM manipulation",
      livelink: "https://simonsaysgame23422.netlify.app/",
      codelink: "https://github.com/yayakix/simonsays",
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <animated.div style={fadeIn} className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Learning Projects
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Projects I built while learning to code (2022-2023)
            </p>
          </div>

          {/* Context Note */}
          <div className={`mb-12 p-4 rounded-lg text-sm ${
            darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600 shadow-sm"
          }`}>
            <p>
              These projects represent my learning journey during my transition into software engineering. 
              They're not production-grade applications, but each one taught me something valuable. 
              For my professional work, please see my{" "}
              <Link to="/experience" className={`underline ${
                darkMode ? "text-pink-400" : "text-pink-600"
              }`}>
                experience page
              </Link>.
            </p>
          </div>

          {/* Projects Grid - Smaller Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-5 rounded-lg transition-all duration-200 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white shadow-sm hover:shadow-md"
                }`}
              >
                <h3 className={`text-base font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  {project.description}
                </p>
                
                <p className={`text-xs mb-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}>
                  <span className="font-medium">Learned:</span> {project.learned}
                </p>
                
                <div className="flex gap-3">
                  <a
                    href={project.codelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    <GitHubIcon style={{ fontSize: 14 }} />
                    Code
                  </a>
                  <a
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    <OpenInNewIcon style={{ fontSize: 14 }} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Back Link */}
          <div className="mt-12 text-center">
            <Link
              to="/journey"
              className={`text-sm font-medium ${
                darkMode ? "text-pink-400 hover:text-pink-300" : "text-pink-600 hover:text-pink-700"
              }`}
            >
              ← Back to My Journey
            </Link>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default ProjectsPage;
