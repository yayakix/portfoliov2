import "../css/Home.css";
import { useSpring, animated } from "@react-spring/web";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import { useTheme } from "../ThemeContext";

function Home() {
  const { darkMode } = useTheme();
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const linkList = [
    {
      name: "Github",
      url: "https://github.com/yayakix",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/iyana-marquez/",
    },
    {
      name: "Resume",
      url: "https://docs.google.com/document/d/1dq3Ha8nyw1BNsVoW6hVOgXVS9kiMFIexM62yVxlVyS8/edit?usp=sharing",
    },
  ];

  return (
    <animated.div
      style={fadeIn}
      className={`pt-32 pb-16 flex items-center justify-center px-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 items-center">
        {/* Left Column - Profile */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          <div className="relative">
            <img
              src="https://i.imgur.com/x7wCu69.jpg"
              className="w-48 h-48 rounded-full shadow-2xl border-4 border-pink-500"
              alt="Profile"
            />
            <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm">
              Developer
            </div>
          </div>

          <div className="text-center md:text-right">
            <h1
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Iyana Marquez <span className="hand wave">👋🏽</span>
            </h1>
            <p
              className={`mt-2 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              <i className="fas fa-map-marker-alt mr-2"></i>
              Tampa, Florida
            </p>
          </div>

          <div className="flex space-x-6">
            {linkList.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                {index === 0 && (
                  <GitHubIcon
                    className={`text-pink-500 text-3xl ${
                      darkMode ? "hover:text-white" : "hover:text-slate-800"
                    }`}
                  />
                )}
                {index === 1 && (
                  <LinkedInIcon
                    className={`text-pink-500 text-3xl ${
                      darkMode ? "hover:text-white" : "hover:text-slate-800"
                    }`}
                  />
                )}
                {index === 2 && (
                  <DescriptionIcon
                    className={`text-pink-500 text-3xl ${
                      darkMode ? "hover:text-white" : "hover:text-slate-800"
                    }`}
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - About */}
        <div className="space-y-6">
          <div
            className={`rounded-2xl p-6 shadow-xl ${
              darkMode ? "bg-slate-800" : "bg-white"
            }`}
          >
            <h2 className="text-2xl font-bold text-pink-500 mb-4">About me</h2>
            <p
              className={`leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Full-stack developer with a unique background in Microbiology,
              bringing analytical thinking and scientific methodology to
              software development. Experienced in building end-to-end web
              applications and quality assurance automation using Cypress.
              Currently exploring cybersecurity while focusing on full-stack
              development. I combine my scientific background with technical
              skills to approach problem-solving from different angles, and I'm
              passionate about creating efficient, user-friendly solutions.
              Actively seeking a software engineering role where I can
              contribute my diverse skill set and continue growing as a
              developer.
            </p>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Home;
