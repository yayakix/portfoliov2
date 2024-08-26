import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import DisplaySection from "./components/DisplaySection";
import Navbar from "./components/Navbar"; // Import the Navbar component
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App w-full lg:flex h-screen scroll-smooth">
        <Navbar /> {/* Add the Navbar component */}
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/3 relative z-10 md:max-w-2xl md:px-4 lg:min-h-full lg:border-r lg:border-slate-200 lg:overflow-hidden pt-36 lg:pt-16">
            <Home />
          </div>
          <div className="w-full lg:w-2/3 flex-1 overflow-y-auto lg:pt-16">
            <DisplaySection />
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 lg:hidden right-4 bg-pink-200 text-white text-xl p-2 rounded-full shadow-lg w-10 h-10 flex justify-center items-center"
        >
          ↑
        </button>
      </div>
    </Router>
  );
}

export default App;
