import "../css/Projects.css";
import projectslist from "../projectslist";

function Projects() {
  return (
    <div className=" ">
      <div className="flex justify-center items-center mb-8 ">
        <div class="flex-grow border-t border-gray-400"></div>
        <h2
          className=" font-black flex justify-center mx-4	text-3xl"
          id="projects"
        >
          Projects
        </h2>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>

      <div className="space-y-10 lg:columns-2 md:columns-1 flex row">
        {projectslist.map((x) => (
          <div className="max-w-md rounded overflow-hidden shadow-lg flex flex-col">
            <img className="h-4/5" src={x.img} alt={x.title} />

            <div className="font-bold text-xl mb-2">{x.title}</div>
            <p className="text-gray-700 text-base flex-1">{x.description} </p>

            <div className="px-6 pt-4 pb-2">
              <a href={x.livelink}>
                <button className="button-55 inline-block bg-sky-500 hover:bg-sky-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Live Link
                </button>
              </a>
              <a href={x.codelink}>
                <button className="button-55 inline-block bg-sky-500 hover:bg-sky-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
