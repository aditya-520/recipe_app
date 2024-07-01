import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path_to_your_logo" alt="Logo" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-options">
        <a href="#option1">Option 1</a>
        <a href="#option2">Option 2</a>
        
      </div>
    </nav>
  );
}

export default Navbar;
