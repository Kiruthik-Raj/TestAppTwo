// FollowUs.jsx
import React from 'react';
import '../assets/shpp.css';
import { instagramImages } from '../assets/mediaLinks';

const FollowUs = () => {
  return (
    <section className="followus">
      <h1>Follow Us On Instagram</h1>
      <div className="insta-container">
        {instagramImages.map((img, index) => (
          <img key={index} src={img} alt={`Insta ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default FollowUs;
