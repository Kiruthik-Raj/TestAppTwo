// Header.jsx
import React from 'react';
import '../assets/shpp.css'; // Assuming your main stylesheet is named shpp.css and contains relevant styles

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <p className="top-bar-message">Free shipping on orders over $50</p>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container nav-container">
          <h1 className="logo">Shopper</h1>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
          </ul>

          <div className="nav-icons">
            <a href="/" className="nav-icon"><i className="fas fa-search"></i></a>
            <a href="/" className="nav-icon"><i className="fas fa-user"></i></a>
            <a href="/" className="nav-icon"><i className="fas fa-shopping-cart"></i></a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
