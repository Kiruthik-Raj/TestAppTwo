// Hero.jsx
import React from 'react';
import '../styles/shpp.css';
import { heroImage } from '../assets/mediaLinks';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h4>Trade-in-offer</h4>
          <h1>Super value deals <br /><span>On all products</span></h1>
          <p>Save more with coupons & up to 70% off!</p>
          <button className="hero-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero banner" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
