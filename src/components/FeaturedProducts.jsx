// FeaturedProducts.jsx
import React from 'react';
import '../assets/shpp.css';
import { featuredProducts } from '../assets/mediaLinks';

const FeaturedProducts = () => {
  return (
    <section className="product-section">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="product-container">
        {featuredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.img} alt={product.name} />
            <div className="description">
              <span>{product.brand}</span>
              <h5>{product.name}</h5>
              <div className="stars">
                {Array(product.stars).fill().map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
              </div>
              <h4>${product.price}</h4>
            </div>
            <a href="#!">
              <i className="fas fa-shopping-cart cart"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
