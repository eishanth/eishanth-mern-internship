import React, { useState, useEffect } from "react";
import "../assests/css/darkmode.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle-container">
      <button
        className={`dark-mode-toggle ${darkMode ? "active" : ""}`}
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
