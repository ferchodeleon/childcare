import React from "react";
import "../styles/Header.css";

const MobileMenu = ({ isOpen, onClose, activeSection, scrollToSection }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <button className="close-menu" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      <nav className="mobile-nav">
        <a
          className={`nav-link home ${
            activeSection === "home" ? "active" : ""
          }`}
          onClick={() => {
            scrollToSection("home");
            onClose();
          }}
        >
          Home
        </a>
        <a
          className={`nav-link about ${
            activeSection === "about" ? "active" : ""
          }`}
          onClick={() => {
            scrollToSection("about");
            onClose();
          }}
        >
          About us
        </a>
        <a
          className={`nav-link programs ${
            activeSection === "programs" ? "active" : ""
          }`}
          onClick={() => {
            scrollToSection("programs");
            onClose();
          }}
        >
          Our programs
        </a>
        <a
          className={`nav-link team ${
            activeSection === "team" ? "active" : ""
          }`}
          onClick={() => {
            scrollToSection("team");
            onClose();
          }}
        >
          Our team
        </a>
        <a
          className={`nav-link contact ${
            activeSection === "contact" ? "active" : ""
          }`}
          onClick={() => {
            scrollToSection("contact");
            onClose();
          }}
        >
          Contact us
        </a>
      </nav>
      <button className="sign-up-button mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
        <span>Sign up</span>
      </button>
    </div>
  );
};

export default MobileMenu;
