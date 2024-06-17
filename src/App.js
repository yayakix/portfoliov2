import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App w-full dark:bg-black dark:text-white">
      <Header />
      <div className="mx-4 md:mx-10">
        <Home />
        <Projects />
        <Technologies />
      </div>
      <Footer />
    </div>
  );
}

export default App;
