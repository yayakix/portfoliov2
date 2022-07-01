import "../css/Aboutme.css";

function Aboutme() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="aboutme">
      <div className="leftsection">
        <img src="https://images.pexels.com/photos/5332934/pexels-photo-5332934.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />

        <img src="https://images.pexels.com/photos/6927334/pexels-photo-6927334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

        <img src="https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>

      <div className="rightsection">
        <p>
          <h3>I like to eat</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl
          sem, mollis nec lobortis sit amet, volutpat sed tellus. Donec egestas
          malesuada turpis a malesuada. Aenean auctor ultrices nibh, nec
          vehicula eros tempus ac.
          <br></br>
          <a href="https://insta-clone33.herokuapp.com/" target="blank">
            <button class="button-52">Live site </button>
          </a>
          <a href="https://github.com/yayakix/instagram-clone" target="blank">
            <button class="button-52">View Code </button>
          </a>
        </p>
        <p>
          <h3>I learned</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl
          sem, mollis nec lobortis sit amet, volutpat sed tellus. Donec egestas
          malesuada turpis a malesuada. Aenean auctor ultrices nibh, nec
          vehicula eros tempus ac.
          <br></br>
          <a href="https://simplecalculator-7d4924.netlify.app/" target="blank">
            <button class="button-52">Live Site</button>
          </a>
          <a href="https://github.com/yayakix/calculator-react" target="blank">
            <button class="button-52">View Code </button>
          </a>
        </p>
        <p>
          <h3>My education</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl
          sem, mollis nec lobortis sit amet, volutpat sed tellus. Donec egestas
          malesuada turpis a malesuada. Aenean auctor ultrices nibh, nec
          vehicula eros tempus ac.
          <br></br>
          <a href="https://simonsaysgame23422.netlify.app/" target="blank">
            <button class="button-52">Live Site </button>
          </a>
          <a href="https://github.com/yayakix/simonsays" target="blank">
            <button class="button-52">View Code</button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
