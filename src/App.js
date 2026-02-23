import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import ProfJourny from "./components/ProfJourny/profjourny";
import Contact  from "./components/Contact/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
          <Router>
      <Navbar />
      <Routes>
        <Route path="/intro" element={<Intro/>} />
        <Route path="/skills" element={ <Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/experience-section" element={<ProfJourny/>} />
        <Route path="/contactPage" element={<Contact/>} />
      </Routes>
    </Router>

   
    
    
    
    </div>
  );
}

export default App;
