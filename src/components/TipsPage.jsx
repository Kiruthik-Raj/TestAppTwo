// TipsPage.jsx
import React from 'react';
import '../assets/shpp.css';

const TipsPage = () => {
  return (
    <section className="tips">
      <div className="tips-text">
        <h1>SKINCARE TIPS & ROUTINES</h1>
        <p>
          Elevate your beauty regimen with our expert tips and daily routines. From skincare 
          secrets to seasonal must-haves, find everything you need for a radiant glow.
        </p>
        <button>READ BLOG</button>
      </div>
      <div className="tips-img">
        <img
          src="https://i.pinimg.com/736x/ae/f4/06/aef406b27e44c8da51edba8efb81e3bc.jpg"
          alt="Skincare Tips"
        />
      </div>
    </section>
  );
};

export default TipsPage;
