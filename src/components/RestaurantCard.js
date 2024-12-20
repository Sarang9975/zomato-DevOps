import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisine, rating, deliveryTime, minOrder, image } = restaurant;

  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={image} alt={name} />
        <div className="rating-badge">
          <span>★ {rating}</span>
        </div>
      </div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="cuisine-type">{cuisine}</p>
        <div className="restaurant-details">
          <span className="delivery-time">🕒 {deliveryTime} min</span>
          <span className="min-order">💰 Min ₹{minOrder}</span>
        </div>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};

export default RestaurantCard; 