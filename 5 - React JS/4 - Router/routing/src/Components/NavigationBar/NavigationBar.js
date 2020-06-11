import React from 'react';
import './style.css' ;
import { Link } from'react-router-dom';
function NavigationBar() {
  return (
    <nav className="nav-links">
      <ul>
        <Link to="/shop" className="LinkStyle">
          <li>Shop</li>
        </Link>
        <Link to="/about" className="LinkStyle">
          <li>About</li>
        </Link>
        <Link to="/" className="LinkStyle">
            <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavigationBar;
