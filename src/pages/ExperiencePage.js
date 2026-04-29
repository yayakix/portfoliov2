import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "../ThemeContext";

function ExperiencePage() {
  const { darkMode } = useTheme();

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  const experiences = [
    {
      dates: "May 2025 - Present",
      title: "Software Engineer",
      company: "Early-Stage Startup",
      type: "Full-time",
      description: [
        "Building and maintaining quality frameworks for AI agent systems",
        "Designing and implementing automated testing infrastructure",
        "Supporting users and translating feedback into engineering improvements",
        "Collaborating cross-functionally to ship reliable features",
      ],
      tools: ["TypeScript", "Python", "Testing Frameworks", "Agent Systems"],
    },
    {
      dates: "July 2024 - April 2025",
      title: "Frontend Software Engineer",
      company: "Raise Robotics",
      link: "https://raiserobotics.ai/",
      type: "Contract",
      description: [
        "Built a user-friendly GUI to interface with a Robotic Operating System (ROS)",
        "Set up Google Cloud VM instances running Ubuntu for ROS development",
        "Integrated TypeScript web app with ROS topics and services using roslibjs",
      ],
      tools: ["React", "TypeScript", "Python", "Google Cloud", "Ubuntu", "ROS"],
    },
    {
      dates: "October 2022 - June 2024",
      title: "Software Engineer",
      company: "Tenet Energy",
      link: "https://www.linkedin.com/company/tenetenergy/",
      type: "Full-time",
      description: [
        "Implemented front-end features from Figma designs and resolved bugs",
        "Built and maintained automated test suites using Cypress",
        "Performed QA to ensure software quality before releases",
        "Collaborated with development teams to identify and resolve defects",
      ],
      tools: ["TypeScript", "React", "Cypress", "Node.js", "Python", "AWS"],
    },
    {
      dates: "May 2022 - August 2022",
      title: "Software Engineering Student",
      company: "General Assembly",
      link: "https://generalassemb.ly/",
      type: "Immersive Program",
      description: [
        "Completed 450+ hour intensive full-stack software engineering program",
        "Learned product development fundamentals and MVC frameworks",
        "Built individual and group projects using modern web technologies",
      ],
      tools: ["JavaScript", "React", "Node.js", "MongoDB", "Express", "Git"],
    },
    {
      dates: "December 2021 - May 2022",
      title: "Lab Assistant",
      company: "Quest Diagnostics",
      link: "https://www.questdiagnostics.com/",
      type: "Full-time",
      description: [
        "Handled and processed biological samples across multiple departments",
        "Maintained and troubleshot laboratory equipment",
        "Ensured accurate sample tracking and adherence to safety protocols",
      ],
      tools: ["Laboratory Equipment", "Quality Control", "Sample Processing"],
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <animated.div style={fadeIn} className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Experience
            </h1>
            <p className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Professional experience and education
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-200 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-white shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}>
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-medium hover:underline ${
                            darkMode ? "text-pink-400" : "text-pink-600"
                          }`}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className={`font-medium ${
                          darkMode ? "text-pink-400" : "text-pink-600"
                        }`}>
                          {exp.company}
                        </span>
                      )}
                      <span className={`text-sm ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}>
                        •
                      </span>
                      <span className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}>
                    {exp.dates}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <span className="text-pink-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default ExperiencePage;
