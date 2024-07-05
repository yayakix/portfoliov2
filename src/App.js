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
        <div className="relative z-10 px-4 md:pt-36 md:pt-16 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:overflow-hidden">
          <Home />
        </div>
        <div className="flex-1 lg:overflow-y-auto mt-16">
          <DisplaySection />
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
