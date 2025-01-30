import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/herosection";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.css";

const App = () => {
  
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
