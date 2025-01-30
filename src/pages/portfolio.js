import React from "react";
import ProjectCard from "../components/projectcard";
import '../assests/css/portfolio.css';
import gym from '../assests/image-section/gym.jpeg';
import uiux from '../assests/image-section/uiux.jpeg';
import web from '../assests/image-section/web.jpeg';
import gymsrs from '../assests/certificates/gymsrs.docx';
import masterccc from '../assests/certificates/masterccc.pdf'
import Certificates from "./certificates";

const Portfolio = () => {
  const projects = [
    {
      title: "Gym Membership Management System",
      image: gym,
      description: "The Gym Membership Management System is designed to help gyms efficiently manage member details, membership plans, and attendance records. By organizing member information digitally, the system reduces manual work, minimizes errors, and ensures data consistency.",
      url: gymsrs,
    },
    {
      title: "Hospital Management System:",
      image: uiux,
      description: "A Hospital Management System is basically used to manage patients in the hospital. It is helpful to see which patients do not have a bed allotted or if there are any free beds or not. It makes sure that the discharged patients’ beds should not be free, they should be allotted to those who need them.",
    },
    {
      title: "Game Development",
      image: web,
      description: "A Computer game is an electronic game that involves interaction with a user interface to generate visual feedback on a video device. The feedback is generally interactive. Games are distinguished from non-game software by their interactive and/or competitive nature.",
    },
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <h1>PROJECTS</h1>
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
      <Certificates />
    </section>
  );
};

export default Portfolio;
