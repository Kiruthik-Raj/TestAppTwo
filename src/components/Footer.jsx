// Footer.jsx
import React from 'react';
import '../assets/shpp.css';

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        Welcome to our shopping blog! Discover the latest trends, product reviews,
        <br /> and shopping tips curated just for you.
      </p>
      <div className="icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-linkedin"></i>
      </div>
      <p>Made with ❤️ by Ashu</p>
    </section>
  );
};

export default Footer;
