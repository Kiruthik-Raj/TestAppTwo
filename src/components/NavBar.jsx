// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/shpp.css';

const Navbar = () => {
  return (
    <nav id="desktop-nav">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li className="drop-down-menu-nav-shop-main">
          <a href="/">SHOP <i className="ri-arrow-down-s-line"></i></a>
          <ul className="drop-down-menu-nav-shop">
            <li><Link to="/skincare">SKINCARE</Link></li>
            <li><Link to="/apparel">APPAREL</Link></li>
            <li><Link to="/accessories">ACCESSORIES</Link></li>
            <li><Link to="/bestseller">BESTSELLER</Link></li>
            <li><Link to="/collections">ALL COLLECTIONS</Link></li>
          </ul>
        </li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
