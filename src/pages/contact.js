import React from "react";
import '../assests/css/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1>CONTACT ME</h1>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p>You can also reach me at: <a href="mailto:yourname@example.com">eishanthpalanisamy2023aiml@sece.ac.in</a></p>
      </div>
      <div className="social-links">
        <a href="www.linkedin.com/in/eishanth-palanisamy-336b12316" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/eishanth" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
        </a>
        <a href="mailto:yourname@example.com">
         <i className="fas fa-envelope"></i>
        </a>
    </div>
     
    </section>
  );
};

export default Contact;
