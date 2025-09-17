import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">GONPAVISTA</h1>

        {/* Hamburger menu button */}
        <button className="navbar-burger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Desktop links */}
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#monasteries">Monasteries</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile links */}
      {isOpen && (
        <ul className="navbar-links-mobile">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#monasteries">Monasteries</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

