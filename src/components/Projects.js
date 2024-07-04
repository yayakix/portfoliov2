import "../css/Projects.css";
import projectslist from "../projectslist";

function Projects() {
  return (
    <div className="">
      <h2
        className=" font-black flex justify-center mx-4	text-3xl text-pink-500"
        id="projects"
      >
        Projects
      </h2>

      <div className=" flex flex-row flex-wrap">
        {projectslist.map((x) => (
          <div className="bg-white max-w-md overflow-hidden shadow-sm flex flex-col gap-2 dark:border-white	dark:border-2 dark:rounded-xl my-4 p-2 rounded">
            <img
              className=" h-32 md:h-4/5 rounded border-4 border-white"
              src={x.img}
              alt={x.title}
            />

            <div className="font-bold text-xl mb-2">{x.title}</div>
            <p className="text-sm lg:text-md  text-gray-700  flex-1 dark:text-white">
              {x.description}{" "}
            </p>

            <div className="px-6 pt-4 pb-2 flex flex-row text-sm md:text-lg">
              <a href={x.livelink}>
                <button class="mx-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Live Link
                </button>
              </a>
              <a href={x.codelink}>
                <button class="mx-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  See Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
