import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          Game Showcase
        </Link>
 
        <button
          className={`hamburger ${menuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
 
        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/games" onClick={() => setMenuOpen(false)}>Games</Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;