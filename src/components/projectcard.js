import React from "react";
import "../assests/css/projectcard.css";
const ProjectCard = ({ title, image, description, link }) => {
  return (
    <div className="project-card" onClick={() => window.open(link, "_blank")}>
      <img src={image} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
