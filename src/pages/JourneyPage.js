import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

function JourneyPage() {
  const { darkMode } = useTheme();

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  const timeline = [
    {
      year: "2018 - 2021",
      title: "Microbiology Foundation",
      subtitle: "Bachelor's Degree in Microbiology",
      description:
        "Earned my B.S. in Microbiology, developing a strong foundation in scientific methodology, analytical thinking, and rigorous problem-solving. Worked in laboratory settings where precision and attention to detail were essential.",
      highlight: "This background taught me how to approach complex problems systematically and validate hypotheses with evidence.",
    },
    {
      year: "2021 - 2022",
      title: "Lab Work & Early Exploration",
      subtitle: "Quest Diagnostics",
      description:
        "Worked as a Lab Assistant handling biological samples and troubleshooting laboratory equipment. While valuable, I began exploring software development on the side, drawn to the problem-solving aspects that reminded me of lab work.",
      highlight: "Started learning to code in my free time, discovering a new passion.",
    },
    {
      year: "2022",
      title: "The Transition",
      subtitle: "General Assembly Bootcamp",
      description:
        "Made the decision to transition into tech. Enrolled in General Assembly's intensive 12-week software engineering immersive. Learned full-stack development fundamentals, built projects, and discovered I loved the craft of building software.",
      highlight: "450+ hours of hands-on coding, building everything from calculators to full-stack applications.",
    },
    {
      year: "2022 - 2024",
      title: "First Engineering Role",
      subtitle: "Software Engineer at Tenet Energy",
      description:
        "Joined an early-stage fintech startup as a software engineer. Contributed as both a front-end developer and QA engineer. Implemented features from Figma designs, built automated test suites with Cypress, and collaborated closely with the development team to ensure software quality.",
      highlight: "Developed expertise in testing infrastructure and learned the importance of quality at every stage.",
    },
    {
      year: "2024 - 2025",
      title: "Robotics & New Challenges",
      subtitle: "Frontend Engineer at Raise Robotics (Contract)",
      description:
        "Built a user-friendly GUI to interface with a Robotic Operating System (ROS). Set up cloud infrastructure using Google Cloud and Ubuntu VMs. Worked with roslibjs to connect a TypeScript web app with ROS topics and services.",
      highlight: "Expanded into robotics and cloud infrastructure.",
    },
    {
      year: "May 2025 - Present",
      title: "Agent Quality & Support",
      subtitle: "Startup Focus",
      description:
        "Currently working at an early-stage startup focused on agent quality, testing, and support. Building quality frameworks for AI agent systems, designing testing infrastructure, and bridging the gap between users and engineering through support engineering.",
      highlight: "Combining my scientific background with software engineering to ensure AI systems are reliable and trustworthy.",
    },
    {
      year: "Ongoing",
      title: "Continuous Learning",
      subtitle: "Broadening Technical Knowledge",
      description:
        "In my free time, I'm exploring technical and IT topics to become a more well-rounded engineer. Currently diving into networking fundamentals, Linux administration, cloud infrastructure, security basics, and observability.",
      highlight: "Building the foundational knowledge that makes senior engineers effective.",
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <animated.div style={fadeIn} className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              My Journey
            </h1>
            <p className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              From microbiology to software engineering
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`} />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-pink-500 rounded-full transform -translate-x-1/2 mt-6" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}>
                    <div className={`p-6 rounded-xl ${
                      darkMode ? "bg-gray-800" : "bg-white shadow-sm"
                    }`}>
                      <span className={`text-sm font-medium ${
                        darkMode ? "text-pink-400" : "text-pink-600"
                      }`}>
                        {item.year}
                      </span>
                      
                      <h3 className={`text-xl font-bold mt-2 mb-1 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}>
                        {item.title}
                      </h3>
                      
                      <p className={`text-sm font-medium mb-3 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {item.subtitle}
                      </p>
                      
                      <p className={`text-sm mb-4 leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {item.description}
                      </p>
                      
                      <p className={`text-sm italic ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {item.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Projects Archive Link */}
          <div className={`mt-20 p-8 rounded-xl text-center ${
            darkMode ? "bg-gray-800" : "bg-white shadow-sm"
          }`}>
            <h2 className={`text-xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Learning Projects Archive
            </h2>
            <p className={`mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              During my transition into tech, I built various projects to learn different concepts and technologies. 
              These represent my learning journey, not polished production work.
            </p>
            <Link
              to="/projects"
              className={`inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              View Learning Projects →
            </Link>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default JourneyPage;
