import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidenavbar.css';

export default function Sidenavbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sidenavbar">
      <div className="sidenavbar-header">
        <button className="sidenavbar-toggle" onClick={handleMenuClick}>
          <i className="fas fa-bars"></i>
        </button>
        <h3 className="sidenavbar-title">Movies</h3>
      </div>
      <ul className={`sidenavbar-menu ${showMenu ? 'show' : ''}`}>
        <li>
          <Link to="/movies/recommended">Recommended</Link>
        </li>
        <li>
          <Link to="/movies/saved">Saved</Link>
        </li>
        <li>
          <Link to="/movies/history">History</Link>
        </li>
        <li>
          <Link to="/movies/settings">Settings</Link>
        </li>
        <li>
          <Link to="/movies/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}
