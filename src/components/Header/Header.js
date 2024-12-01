import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Zomato Clone</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#restaurants">Restaurants</a></li>
            <li><a href="#orders">Orders</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for food..." />
          <button type="submit">Search</button>
        </div>
        {/* New Feature: Dark Mode Toggle */}
        <div className="theme-toggle">
          <button className="theme-btn" aria-label="Toggle dark mode">
            🌙
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 