import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <img 
              src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22:12:47.498Z" 
              alt="AISC UW Logo" 
              className="logo"
            />
          </Link>
          
          <nav className="nav">
            <a 
              href="https://humansforai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              Humans for AI
            </a>
            <Link to="/our-team" className="nav-link">
              Our Team
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;