import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅
import Footer from "./components/Footer"
import Home from "./home/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar /> {/* ✅ This will be shown on every route */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
