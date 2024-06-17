import "../css/Home.css";

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
      class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 my-10"
      id="about"
    >
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <img
              src="https://i.imgur.com/x7wCu69.jpg"
              class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] relative"
            />
          </div>
          <div class="flex justify-center mt-24 ">
            {titlesList.map((item) => {
              return (
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {item.text}{" "}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div class="text-center mt-2">
          <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
            Iyana Marquez <span className="hand wave">👋🏽</span>
          </h3>
          <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
            <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
            Tampa, Florida
          </div>
        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4">
              <p class="font-light leading-relaxed text-slate-600 mb-4">
                Creative, detail-oriented, developer with a deep interest in
                solving common problems. Proven track record of creating and
                implementing successful front and back end web applications. I'm
                able to quickly pick up new technologies and enjoy the process
                of learning new things. I'm currently looking to bring my skills
                to a tech company where I can create modern, responsive, and
                user-friendly websites.
              </p>
              <a
                href="#projects"
                class="font-normal text-slate-700 hover:text-slate-400"
              >
                See My Work ⬇
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
