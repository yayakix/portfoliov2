const Experience = () => {
  const data = [
    {
      dates: "October 2022 - Present",
      title: "Tenet",
      role: "QA Engineer",
      description:
        "The Christmas of 1989 wasn't the first time Harry and Marv crossed paths with the McCallisters. The real story starts in 1973, when Peter tripped Marv in the highschool locker room.",
    },
    {
      dates: "May 2022 - August 2022",
      title: "General Assembly",
      role: "Coding student",
      description:
        "The Christmas of 1989 wasn't the first time Harry and Marv crossed paths with the McCallisters. The real story starts in 1973, when Peter tripped Marv in the highschool locker room.",
    },
    {
      dates: "December 2021 - May 2022",
      title: "Quest Diagnostics",
      role: "Lab Assistant",
      description:
        "The Christmas of 1989 wasn't the first time Harry and Marv crossed paths with the McCallisters. The real story starts in 1973, when Peter tripped Marv in the highschool locker room.",
    },
  ];
  return (
    <div>
      <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
        <h1 class="text-2xl font-bold leading-7 text-slate-900">Experience</h1>
      </div>
      {data.map((item) => (
        <div class="py-4 divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100 text-left">
          <div class="flex flex-col items-start">
            <div class="w-full text-left">
              <time
                datetime="2022-02-10T00:00:00.000Z"
                class="font-mono text-sm leading-7 text-slate-500"
              >
                {item.dates}
              </time>
            </div>
            <h2
              id="episode-3-title"
              class="mt-2 text-lg font-bold text-slate-900 w-full text-left"
            >
              <a href="/experience">{item.title}</a>
            </h2>

            <div class="flex items-start gap-4 text-left">
              <button
                type="button"
                aria-label="Play episode 3: The Wet Bandits"
                class=" text-left gap-x-3 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              >
                <span aria-hidden="true">{item.role}</span>
              </button>
            </div>
            <p class="mt-1 text-base leading-7 text-slate-700">
              {item.description}
            </p>
          </div>
        </div>
      ))}
      <div class="py-4 divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-1000 text-left"></div>

      {/* section */}
    </div>
  );
};

export default Experience;
