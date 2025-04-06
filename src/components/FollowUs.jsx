// FollowUs.jsx
import React from 'react';
import '../styles/shpp.css';
import { InstagramImages } from '../assets/mediaLinks';

const FollowUs = () => {
  return (
    <section className="followus">
      <h1>Follow Us On Instagram</h1>
      <div className="insta-container">
        {InstagramImages.map((img, index) => (
          <img key={index} src={img} alt={`Insta ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default FollowUs;
