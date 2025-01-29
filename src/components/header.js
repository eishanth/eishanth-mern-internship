import React from "react";
import { Link } from "react-router-dom";
import '../assests/css/header.css';
// import DarkModeToggle from "./darkmode";

const Header = () => {

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="header">
      <div className="logo">EISHANTH PALANISAMY</div>
      <nav className="nav">
        <Link to="/" onClick={(e) => handleSmoothScroll(e, 'home')}>HOME</Link>
        <Link to="/about" onClick={(e) => handleSmoothScroll(e, 'about')}>ABOUT</Link>
        <Link to="/portfolio" onClick={(e) => handleSmoothScroll(e, 'portfolio')}>PROJECTS</Link>
        <Link to="/contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>CONTACT</Link>
      </nav>
      {/* <DarkModeToggle /> */}
    </header>
  );
};

export default Header;
