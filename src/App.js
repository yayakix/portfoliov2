import React from "react";
import "./App.css";
import Home from "./components/Home";
import DisplaySection from "./components/DisplaySection";
import Navbar from "./components/Navbar"; // Import the Navbar component
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className={`min-h-screen transition-colors duration-300`}>
          <Navbar />
          <Home />
          <DisplaySection />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
