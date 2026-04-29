import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import JourneyPage from "./pages/JourneyPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import LearningPage from "./pages/LearningPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col transition-colors duration-300">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/journey" element={<JourneyPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/learning" element={<LearningPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
