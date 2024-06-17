import "../css/Home.css";
import AnimationComponent from "./TypeAnimation.tsx";

function Home() {
  const titlesList = [
    {
      text: " QA Engineer",
    },
    {
      text: "Software Developer",
    },
  ];
  return (
    <div
      className="px-2 sm:px-6 relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 my-10 text-sm sm:text-xl"
      id="about"
    >
      <div className="flex flex-wrap justify-center">
        <div className="w-full flex justify-center">
          <img
            src="https://i.imgur.com/x7wCu69.jpg"
            className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] relative"
          />
        </div>
        <div className="flex justify-center mt-24 ">
          <AnimationComponent />

          {/* {titlesList.map((item) => {
            return (
              <div className="m-2 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  {item.text}{" "}
                </span>
              </div>
            );
          })} */}
        </div>
      </div>
      <div className="text-center mt-2">
        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
          Iyana Marquez <span className="hand wave">👋🏽</span>
        </h3>
        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
          Tampa, Florida
        </div>
      </div>
      <div className="mt-4 p-2 sm:p-10 border-t border-slate-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full ">
            <p className="font-light leading-relaxed text-slate-600 mb-4">
              Creative, detail-oriented, developer with a deep interest in
              solving common problems. Proven track record of creating and
              implementing successful front and back end web applications. I'm
              able to quickly pick up new technologies and enjoy the process of
              learning new things. I'm currently looking to bring my skills to a
              tech company where I can create modern, responsive, and
              user-friendly websites.
            </p>
            <a
              href="#projects"
              className="font-normal text-slate-700 hover:text-slate-400"
            >
              See My Work ⬇
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
