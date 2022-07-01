import "../css/Home.css";
import TypeAnimation from "react-type-animation";


function Home() {
   
  return (
    <div className="homepage">
      <h1 className="text" id="home">
        Hi. I'm 
      </h1>
      <TypeAnimation
        cursor={true}
        sequence={[
          1000,
          "Iyana",
          5000,
          "a frontend developer",
          3000,
          "fullstack developer",
          3000,
          "a nature lover",
          3000,
          'a turtle mom',
          4000,
          "Iyana"
        ]}
        wrapper="h1"
      />

   
    </div>
  );
}

export default Home;
