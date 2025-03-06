import { useTheme } from "../ThemeContext";

const Experience = () => {
  const { darkMode } = useTheme();
  const data = [
    {
      dates: "July 2024 - Present (Contract)",
      title: "Raise Robotics",
      role: "Frontend Software Engineer",
      link: "https://raiserobotics.ai/",
      description: `Created a user friendly GUI to interface with a Robotic Operating System (ROS). 
      Utilized Google Cloud to create a VM instance to run Ubuntu through remote desktop. Used Ubuntu's Advanced Packaging Tool (APT) to install ROS and other dependencies.
      Worked with roslibjs to allow for a Typescript web app to interface with ROS topics and services. `,
      tools: "React, Typescript, Python, Google Cloud, Ubuntu, ROS",
    },
    {
      dates: "October 2022 - June 2024",
      title: "Tenet Energy",
      role: "Software Engineer",
      link: "https://www.linkedin.com/company/tenetenergy/mycompany/",
      description: `Worked as a software engineer at an early Fintech startup.
       Contributed as a front-end developer by implementing new features from Figma designs and performing bug fixes. 
       Additionally, contributed as a QA engineer by creating and maintaining automated test scripts, performing QA to ensure software quality,
        and collaborating with development teams to identify and resolve defects. `,
      tools: "Typescript, React, Cypress, Node.js, Python, AWS",
    },
    {
      dates: "May 2022 - August 2022",
      title: "General Assembly",
      role: "Coding student",
      link: "https://generalassemb.ly/",
      description:
        "Full-stack software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects.",
    },
    {
      dates: "December 2021 - May 2022",
      title: "Quest Diagnostics",
      role: "Lab Assistant",
      link: "https://www.questdiagnostics.com/",
      description:
        "Worked as a Lab Assistant in multiple departments, responsible for handling and processing biological samples. Duties included maintaining and troubleshooting laboratory equipment, ensuring accurate sample tracking, and adhering to strict safety and quality protocols. Collaborated with lab technicians and other staff to support efficient lab operations.",
    },
  ];

  return (
    <section
      id="experience"
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            className={`text-3xl font-bold text-center ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-lg shadow-md 
                         transition-all duration-300 hover:shadow-lg ${
                           darkMode
                             ? "bg-gray-800 border-gray-700 hover:border-pink-800"
                             : "bg-white border-slate-100 hover:border-pink-100"
                         }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-pink-600 transition-colors"
                      >
                        {item.title}
                      </a>
                    </h3>
                    <span className="text-pink-500 font-semibold">•</span>
                    <span className="text-pink-500 font-medium">
                      {item.role}
                    </span>
                  </div>

                  <time
                    className={`text-sm mb-4 block ${
                      darkMode ? "text-gray-400" : "text-slate-500"
                    }`}
                  >
                    {item.dates}
                  </time>

                  <p
                    className={`whitespace-pre-line mb-4 ${
                      darkMode ? "text-gray-300" : "text-slate-700"
                    }`}
                  >
                    {item.description}
                  </p>

                  {item.tools && (
                    <div className="flex flex-wrap gap-2">
                      {item.tools.split(", ").map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className={`px-3 py-1 text-sm font-medium rounded-full ${
                            darkMode
                              ? "bg-pink-900/30 text-pink-300 border-pink-800"
                              : "bg-pink-50 text-pink-600 border-pink-100"
                          } border`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
