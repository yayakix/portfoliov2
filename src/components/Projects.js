import "../css/Projects.css";

function Projects() {

  return (
    <div className="projectspage">
      <h2 className="projectintro" id="projects">
        Projects
      </h2>
      <div class="container overflow-hidden">
        <div class="row gy-5">
          <div class="col-sm-12 col-md-6 ">
            <div class="p-3 border bg-light">
              <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              <p>
                <h3>Funky Shoes</h3>
                This app will show you shoes like no other. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nunc nisl llis nec
                lobortis sit amet, volutpat sed tellus. Donec egestas malesuada
                turpis a malesuada. Aenean auctor ultrices nibh, nec vehicula
                eros tempus ac.
                <br></br>
              </p>
              <div className="buttoncontainer">
                <a href="https://funkyshoes.netlify.app/" target="blank">
                  <button class="button-52">Live Site </button>
                </a>
                <a
                  href="https://github.com/yayakix/Funky-Shoes-frontend"
                  target="blank"
                >
                  <button class="button-52">View Code</button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="p-3 border bg-light">
              <img src="https://images.unsplash.com/photo-1622929611233-bd6d58cbd4dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
              <p>
                <h3>Instagram Clone</h3>A clone of the popular Instagram! I
                recreated the home and profile pages. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nunc nislLorem ipsum dolor
                sit amet, consectetur
                <br></br>
              </p>
              <div className="buttoncontainer">
                <a href="https://insta-clone33.herokuapp.com/" target="blank">
                  <button class="button-52">Live site </button>
                </a>
                <a
                  href="https://github.com/yayakix/instagram-clone"
                  target="blank"
                >
                  <button class="button-52">View Code </button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 ">
            <div class="p-3 border bg-light">
              {" "}
              <img src="https://images.pexels.com/photos/6927334/pexels-photo-6927334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <p>
                <h3>calculator</h3>This is a calculator that performs simple
                math operations. It performs the 4 basic operations in addition
                to handling percents and negative numbers. This app was created
                with functional components, state and hooks.
                <br></br>
              </p>
              <div className="buttoncontainer">
                <a
                  href="https://simplecalculator-7d4924.netlify.app/"
                  target="blank"
                >
                  <button class="button-52">Live Site</button>
                </a>
                <a
                  href="https://github.com/yayakix/calculator-react"
                  target="blank"
                >
                  <button class="button-52">View Code </button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 ">
            <div class="p-3 border bg-light">
              <img src="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <p>
                <h3>Simon Says Game</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                nisl sem, mollis nec lobortis sit amet, volutpat sed tellus.
                Donec egestas malesuada turpis a malesuada. Aenean auctor
                ultrices nibh, nec vehicula eros tempus ac.
                <br></br>
              </p>
              <div className="buttoncontainer">
                <a
                  href="https://simonsaysgame23422.netlify.app/"
                  target="blank"
                >
                  <button class="button-52">Live Site </button>
                </a>
                <a href="https://github.com/yayakix/simonsays" target="blank">
                  <button class="button-52">View Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
