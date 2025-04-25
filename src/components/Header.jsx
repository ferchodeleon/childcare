import { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "programs", "team", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-image" />
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Childcare Su Presencia" />
          </div>

          <div className="nav-menu-container">
            <nav className="nav-menu">
              <a
                className={`nav-link home ${
                  activeSection === "home" ? "active" : ""
                }`}
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
              <a
                className={`nav-link about ${
                  activeSection === "about" ? "active" : ""
                }`}
                onClick={() => scrollToSection("about")}
              >
                About us
              </a>
              <a
                className={`nav-link programs ${
                  activeSection === "programs" ? "active" : ""
                }`}
                onClick={() => scrollToSection("programs")}
              >
                Our programs
              </a>
              <a
                className={`nav-link team ${
                  activeSection === "team" ? "active" : ""
                }`}
                onClick={() => scrollToSection("team")}
              >
                Our team
              </a>
              <a
                className={`nav-link contact ${
                  activeSection === "contact" ? "active" : ""
                }`}
                onClick={() => scrollToSection("contact")}
              >
                Contact us
              </a>
            </nav>

            <button
              className="hamburger-menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="wave-bottom"></div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

export default Header;
