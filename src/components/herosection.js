
import React from "react";
import "../assests/css/herosection.css";
import img from "../assests/image-section/ml.jpeg";


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Eishanth P</span>
          </h1>
          <p className="hero-description">
            I am a <span className="highlight">Creative Designer</span> who specializes in
            building visually stunning and functional designs.
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Portfolio</button>
            <button className="btn secondary-btn">Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={img}
            alt="Hero"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
