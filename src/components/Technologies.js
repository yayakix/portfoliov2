import "../css/Tech.css";

function Technologies() {
  const iconList = [
    { id: 0, icon: "devicon-react-original-wordmark" },
    { id: 1, icon: "devicon-javascript-plain" },
    { id: 2, icon: "devicon-html5-plain-wordmark" },
    { id: 3, icon: "devicon-css3-plain-wordmark" },
    { id: 4, icon: "devicon-python-plain-wordmark" },
    { id: 5, icon: "devicon-django-plain-wordmark colored" },
    { id: 6, icon: "devicon-express-original-wordmark colored" },
    { id: 7, icon: "devicon-mongodb-plain-wordmark" },
    { id: 8, icon: "devicon-nodejs-plain-wordmark" },
    { id: 9, icon: "devicon-npm-original-wordmark" },
    { id: 10, icon: "devicon-jquery-plain-wordmark" },
    { id: 11, icon: "devicon-firebase-plain-wordmark" },
    { id: 12, icon: "devicon-materialui-plain" },
    { id: 13, icon: "devicon-sass-original" },
    { id: 14, icon: "devicon-postgresql-plain" },
    { id: 15, icon: "devicon-heroku-original-wordmark" },
    { id: 16, icon: "devicon-git-plain-wordmark" },
    { id: 17, icon: "devicon-figma-plain" },
    { id: 18, icon: "devicon-canva-original" },
    { id: 19, icon: "devicon-typescript-plain" },
  ];
  return (
    <div className="techpage my-10" id="skills shadow-2xl">
      <div className="flex justify-center items-center mb-8 ">
        <div class="flex-grow border-t border-gray-400"></div>
        <h2
          className=" font-black flex justify-center mx-4	text-3xl"
          id="projects"
        >
          Technologies
        </h2>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="techcontainer container">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {iconList.map((icon) => {
            return (
              <div class="col">
                <div class="col p-3 border bg-light">
                  <i class={icon.icon}></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
