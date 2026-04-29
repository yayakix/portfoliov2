import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "../ThemeContext";

function LearningPage() {
  const { darkMode } = useTheme();

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  const learningTopics = [
    {
      category: "Networking",
      topics: [
        "TCP/IP fundamentals",
        "DNS and how domain resolution works",
        "HTTP/HTTPS protocols",
        "Load balancers and reverse proxies",
      ],
      status: "Currently exploring",
    },
    {
      category: "Linux & Systems",
      topics: [
        "Command line proficiency",
        "File systems and permissions",
        "Process management",
        "Shell scripting basics",
      ],
      status: "Ongoing practice",
    },
    {
      category: "Cloud Infrastructure",
      topics: [
        "AWS core services (EC2, S3, IAM)",
        "Container basics with Docker",
        "Infrastructure as code concepts",
        "Cloud networking",
      ],
      status: "Building foundations",
    },
    {
      category: "Observability",
      topics: [
        "Logging best practices",
        "Metrics and monitoring",
        "Distributed tracing concepts",
        "Alerting strategies",
      ],
      status: "Exploring",
    },
    {
      category: "Security Fundamentals",
      topics: [
        "Authentication vs authorization",
        "Common vulnerabilities (OWASP)",
        "Secure coding practices",
        "Network security basics",
      ],
      status: "Learning",
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <animated.div style={fadeIn} className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1
              className={`text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              What I'm Learning
            </h1>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Broadening my technical knowledge beyond day-to-day development
            </p>
          </div>

          {/* Why Section */}
          <div
            className={`mb-12 p-6 rounded-xl ${
              darkMode ? "bg-gray-800" : "bg-white shadow-sm"
            }`}
          >
            <h2
              className={`text-lg font-semibold mb-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Why I'm doing this
            </h2>
            <p
              className={`text-sm leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              As a software engineer, understanding the full stack (from
              application code down to infrastructure and networking) helps with
              debugging, designing systems, and coordinating with different
              teams. In spare time outside work, systematically plugging gaps in
              IT fundamentals, cloud infrastructure, and operations.
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {learningTopics.map((item, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.category}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      darkMode
                        ? "bg-pink-900/30 text-pink-300"
                        : "bg-pink-50 text-pink-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.topics.map((topic, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <span className="text-pink-500 mt-0.5">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note */}
          <p
            className={`mt-8 text-center text-sm ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          ></p>
        </div>
      </animated.div>
    </div>
  );
}

export default LearningPage;
