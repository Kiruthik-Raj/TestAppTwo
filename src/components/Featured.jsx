// Featured.jsx
import React from 'react';
import '../assets/shpp.css';
import { featuredImages } from '../assets/mediaLinks';

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="container featured-boxes">
        {featuredImages.map((item, index) => (
          <div className="feature-box" key={index}>
            <img src={item.src} alt={item.alt} />
            <h6>{item.label}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
