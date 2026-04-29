import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "../ThemeContext";

function HomePage() {
  const { darkMode } = useTheme();

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  const whatIDoFade = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: { duration: 600 },
  });

  const impactFade = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 400,
    config: { duration: 600 },
  });

  const nowFade = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 600,
    config: { duration: 600 },
  });

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/yayakix", icon: GitHubIcon },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/iyana-marquez/",
      icon: LinkedInIcon,
    },
  ];

  const whatIDo = [
    {
      title: "AI Agent Quality",
      description:
        "Building and maintaining quality standards for AI agent systems, ensuring reliable and consistent behavior.",
    },
    {
      title: "Testing Infrastructure",
      description:
        "Designing automated test suites and QA processes that catch issues before they reach production.",
    },
    {
      title: "Support Engineering",
      description:
        "Bridging the gap between users and engineering teams, turning feedback into actionable improvements.",
    },
  ];

  const recentImpact = [
    "Helping ship EMR integrations, implementations, and bug fixes while stress-testing AI-to-EMR workflows so scheduling and patient updates stay dependable. Putting monitoring around agent behavior, surfacing drift early, and driving issues to closure.",
    "Customer-facing liaison between clinics and engineering, helping prioritize high-impact defects and feature requests and staying embedded through rollout and implementation.",
    "Guiding clinics through stubborn edge cases with plain-language troubleshooting, plus documenting repeatable patterns so the same escalation does not keep looping through support.",
    "Building internal tooling for onboarding and support: lightweight UIs that make managing customers and AI agents practical for everyday support work.",
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Hero Section */}
      <animated.section style={fadeIn} className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={`${process.env.PUBLIC_URL}/images/mepic.png`}
              className="w-28 h-28 rounded-full mx-auto shadow-lg border-2 border-pink-500/30"
              alt="Iyana Marquez"
            />
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Iyana Marquez
          </h1>

          <p
            className={`text-xl md:text-2xl mb-6 font-medium ${
              darkMode ? "text-pink-400" : "text-pink-600"
            }`}
          >
            Software Engineer
          </p>

          <p
            className={`text-lg max-w-2xl mx-auto mb-8 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Focused on agent quality, testing, and support at an early-stage
            startup. Bringing scientific rigor from my microbiology background
            to building reliable software.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-200 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-pink-400"
                    : "bg-white hover:bg-gray-100 text-gray-600 hover:text-pink-500 shadow-sm"
                }`}
                aria-label={link.name}
              >
                <link.icon className="text-xl" />
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Link
              to="/journey"
              className="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors"
            >
              Read My Journey
            </Link>
            <a
              href="https://www.linkedin.com/in/iyana-marquez/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                darkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-white text-gray-900 hover:bg-gray-100 shadow-sm"
              }`}
            >
              Connect
            </a>
          </div>
        </div>
      </animated.section>

      {/* What I Do Section */}
      <animated.section
        style={whatIDoFade}
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-2xl font-bold mb-12 text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whatIDo.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-200 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    darkMode ? "text-pink-400" : "text-pink-600"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </animated.section>

      {/* Recent Impact Section */}
      <animated.section
        style={impactFade}
        className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Recent Impact
          </h2>

          <ul className="space-y-4">
            {recentImpact.map((item, index) => (
              <li
                key={index}
                className={`flex items-start gap-3 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span className="text-pink-500 mt-1.5 flex-shrink-0">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </animated.section>

      {/* Now Section */}
      <animated.section
        style={nowFade}
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Now
          </h2>

          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <div className="space-y-4">
              <div>
                <h3
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Work
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Building and maintaining agent quality systems at an
                  early-stage startup. Focused on testing infrastructure and
                  support engineering.
                </p>
              </div>

              <div>
                <h3
                  className={`font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Learning
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Exploring technical and IT topics to broaden my knowledge:
                  networking fundamentals, Linux administration, cloud
                  infrastructure, and observability.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/learning"
              className={`text-sm font-medium ${
                darkMode
                  ? "text-pink-400 hover:text-pink-300"
                  : "text-pink-600 hover:text-pink-700"
              }`}
            >
              See what I'm learning →
            </Link>
          </div>
        </div>
      </animated.section>
    </div>
  );
}

export default HomePage;
