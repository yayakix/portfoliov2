import "../css/Projects.css";
import projectslist from "../projectslist";

function Projects() {
  return (
    <div className="my-36">
      <div className="flex justify-center items-center mb-20 ">
        <div class="flex-grow border-t border-gray-400"></div>
        <h2
          className=" font-black flex justify-center mx-4	text-3xl"
          id="projects"
        >
          Projects
        </h2>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>

      <div className="grid md:grid-cols-2 space-y-10 lg:columns-2 md:columns-1 flex row">
        {projectslist.map((x) => (
          <div className="max-w-md overflow-hidden shadow-lg flex flex-col gap-2 dark:border-white	dark:border-2 dark:rounded-xl">
            <img className="h-4/5 rounded-b-lg" src={x.img} alt={x.title} />

            <div className="font-bold text-xl mb-2">{x.title}</div>
            <p className="text-gray-700 text-base flex-1 dark:text-white">
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
