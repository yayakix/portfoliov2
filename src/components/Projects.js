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
              <img
                src={`${process.env.PUBLIC_URL}/images/funkyshoes.png`}
                alt="funky shoes app"
              />
              <p>
                <h3>Funky Shoes</h3>
                This app will show you shoes like no other. This is an ecommerce
                site built with React and Firebase. It has user authentication
                that allows logged in users to add items their the cart and
                mimic the process of purchasing those items.
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
              <img
                src={`${process.env.PUBLIC_URL}/images/igclone.png`}
                alt="instagram clone"
              />
              <p>
                <h3>Instagram Clone</h3>A clone of the popular Instagram! I
                recreated the views for the home and profile pages of individual
                users. Users can sign up and post photos that are saved to their
                own accounts. This is a fullstack application created with the
                MERN stack.
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
              <img
                src={`${process.env.PUBLIC_URL}/images/calc.png`}
                alt="calculator app"
              />
              <p>
                <h3>Calculator</h3>This is a calculator that performs simple
                math operations. It performs 4 basic operations, in addition
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
              <img
                src={`${process.env.PUBLIC_URL}/images/simonsays.png`}
                alt="simon says game"
              />
              <p>
                <h3>Simon Says Game</h3>A pattern memory game. Press any key to
                start and correctly recreate the growing pattern of the game. If
                the pattern is guessed incorrectly the game will restart! How
                good is your memory?
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
                  <button class="button-52" id="skills">
                    View Code
                  </button>
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
