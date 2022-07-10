import "../css/Home.css";

function Home() {
  return (
    <div class="container homepage">
      <div class="row">
        <div class="col-6">
          {" "}
          <h1 className="text" id="home">
            Hi. I'm Iyana<span className="hand">👋🏽</span>
          </h1>
          <p>
            Im a <span className="spectext"> Frontend </span> Developer
          </p>
        </div>
      </div>
      <div class="col-6">
        <img src="https://i.imgur.com/x7wCu69.jpg" />
      </div>
    </div>
  );
}

export default Home;
