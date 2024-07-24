const Experience = () => {
  const data = [
    {
      dates: "October 2022 - Present",
      title: "Tenet Energy",
      role: "QA/FE Engineer",
      link: "https://www.linkedin.com/company/tenetenergy/mycompany/",
      description:
        "Worked as a QA Engineer at an early Fintech startup, primarily using Cypress for end-to-end testing. Responsibilities included creating and maintaining automated test scripts, performing manual QA to ensure software quality, and collaborating with development teams to identify and resolve defects. Additionally, contributed as a front-end developer by implementing Figma designs and performing bug fixes.",
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
    <div id="home">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0 mt-16">
        <h1 className="text-2xl font-bold leading-7 text-slate-900 text-center">
          Experience
        </h1>
      </div>
      {data.map((item) => (
        <div className="py-4 divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100 text-left">
          <div className="flex flex-col items-start">
            <div className="w-full text-left">
              <time
                dateTime="2022-02-10T00:00:00.000Z"
                className="font-mono text-sm leading-7 text-slate-500"
              >
                {item.dates}
              </time>
            </div>
            <h2
              id="episode-3-title"
              className="mt-2 text-lg font-bold text-slate-900 w-full text-left"
            >
              <a
                href={item.link ? item.link : null}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            </h2>

            <h3
              className=" gap-x-3 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              aria-hidden="true"
            >
              {item.role}
            </h3>
            <p className="mt-1 text-base leading-7 text-slate-700 text-left">
              {item.description}
            </p>
          </div>
        </div>
      ))}
      <div className="py-4 divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-1000 text-left"></div>

      {/* section */}
    </div>
  );
};

export default Experience;
