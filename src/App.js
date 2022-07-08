import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <About />
     
      <Projects />
      <Technologies />

      <Footer />
    </div>
  );
}

export default App;
