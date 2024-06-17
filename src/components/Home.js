import "../css/Home.css";
import AnimationComponent from "./TypeAnimation.tsx";
import { useSpring, animated } from "@react-spring/web";

function Home() {
  const titlesList = [
    {
      text: " QA Engineer",
    },
    {
      text: "Software Developer",
    },
  ];
  const springs = useSpring({
    from: { x: 500, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: 500,
  });
  return (
    <div
      className="px-2 sm:px-6 relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 w-full mb-6 shadow-lg rounded-xl mt-16 my-10 text-sm sm:text-xl dark:bg-black"
      id="about"
    >
      <div className="flex flex-wrap justify-center">
        <div className="w-full flex justify-center ">
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
      <div className="text-center mt-2 ">
        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 dark:text-white">
          Iyana Marquez <span className="hand wave">👋🏽</span>
        </h3>
        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase dark:text-white">
          <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75 "></i>
          Tampa, Florida
        </div>
      </div>
      <div className="mt-4 p-2 sm:p-10 border-t border-slate-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full ">
            <animated.div
              style={{
                ...springs,
              }}
            >
              <p className="font-light leading-relaxed text-slate-600 mb-4 dark:text-white">
                Creative, detail-oriented, developer with a deep interest in
                solving common problems. Proven track record of creating and
                implementing successful front and back end web applications. I'm
                able to quickly pick up new technologies and enjoy the process
                of learning new things. I'm currently looking to bring my skills
                to a tech company where I can create modern, responsive, and
                user-friendly websites.
              </p>
            </animated.div>

            <a
              href="#projects"
              className="font-normal text-slate-700 hover:text-slate-400 dark:text-white"
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
