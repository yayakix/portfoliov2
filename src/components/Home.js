import "../css/Home.css";

function Home() {
  return (
    <div class="container homepage">
      <div class="row">
        <div class="col-sm-12 col-md-6 homeintro">
          <h1 className="text" id="home">
            Hi. I'm Iyana<span className="hand wave">👋🏽</span>
          </h1>
          <p>
            Im a <span className="spectext"> Frontend </span> Developer
          </p>
        </div>
        <div class="col-sm-12 col-md-6">
          <img
            src="https://i.imgur.com/x7wCu69.jpg"
            id="about"
            alt="iyana marquez"
          />
        </div>
      </div>
    </div>

  );
}

export default Home;
