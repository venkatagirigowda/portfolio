import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbarr from "./components/Navbar";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbarr />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
