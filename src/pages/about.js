import React from "react";
import '../assests/css/about.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1>ABOUT ME</h1>
        <p>
        Passionate about turning data into actionable insights and crafting seamless web experiences, 
        I specialize in machine learning and web development. With a keen interest in both fields, 
        I strive to bridge the gap between innovative algorithms and user-friendly web interfaces. 
        Continuously learning and adapting, I am driven by a desire to solve complex problems and enhance digital interactions. 
        Eager to collaborate on cutting-edge projects and bring creative solutions to life.
        </p>
        <h2>Skills & Tools</h2>
        <ul className="skills">
          <li>C,C++</li>
          <li>Python</li>
          <li>Java</li>
          <li>Figma</li>
          <li>GitHub</li>
          <li>VScode</li>
          <li>MySql Workbench</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
