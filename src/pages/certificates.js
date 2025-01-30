import React, { useState } from "react";
import "../assests/css/certificates.css";
import introtoml from '../assests/certificates/introtoml.png';
import matplot from '../assests/certificates/matplot.png';
import supervised from '../assests/certificates/super1.pdf'
import datavis from '../assests/certificates/datavis.pdf'
import sawit from '../assests/certificates/sawit.png'
import masterds from '../assests/certificates/masterds.jpg'
import adv from '../assests/certificates/adv.pdf'
import masterccc from '../assests/certificates/masterccc.pdf'

const Certificates = () => {
  const certificates = [
    { name: "Introduction to Machine Learning ", file: " ", image:introtoml},
    { name: "Data Visualization using Python ", file: " " , image:datavis},
    { name: "Matplotlib", file: " " , image:matplot},
    { name: "Supervised Machine Learning: Regression and Classification ", file: " ", image:supervised},
    { name: "SAWIT.AI Learnathon ", file: " " , image:sawit},
    { name: "Mastering Data Structure and Algorithms Using C and C++ ", file: " ", image:masterds},
    { name: "Advanced Learning Algorithms ", file: " " , image:adv},
    { name: "Machine Learning with Python ", file: " ", image:masterccc},
    
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCertificates = certificates.slice(startIndex, startIndex + 5);

  const handleNext = () => {
    if (startIndex + 5 < certificates.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="certificates-section">
      <h2>CERTIFICATES</h2>
      <div className="certificates-container">
        <button
          className={`arrow arrow-left ${startIndex === 0 ? "disabled" : ""}`}
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          &#9664;
        </button>
        <div className="certificates-slider">
          {visibleCertificates.map((certificate, index) => (
            <div
              className="certificate-item"
              key={index}
              onClick={() => window.open(certificate.image, "_blank")}
            >
              <div className="icon">📁</div>
              <div className="certificate-name">{certificate.name}</div>
            </div>
          ))}
        </div>
        <button
          className={`arrow arrow-right ${
            startIndex + 5 >= certificates.length ? "disabled" : ""
          }`}
          onClick={handleNext}
          disabled={startIndex + 5 >= certificates.length}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Certificates;
