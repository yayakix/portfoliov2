import "../css/Home.css";


function Home() {
   
  return (
    <div className="homepage">
      <div className="lefthome">
        <h1 className="text" id="home">
          Hi. I'm Iyana<span className="hand">👋🏽</span>
        </h1>
      </div>

      <div className="righthome">
        <img src="https://i.imgur.com/x7wCu69.jpg" />
      </div>
      <p>
        Im a <span className="spectext"> Frontend </span> Developer
      </p>
    </div>
  );
}

export default Home;
