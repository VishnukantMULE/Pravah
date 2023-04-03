import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navbarh.css';
import Sidebar from '../screens/Sidebar';
// import User from '../screens/User';

export default function Navbarh({ setUsername, username }) {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('rcm'); // default selected tab
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const handleLogout = () => {
    setUsername('');
    // Perform logout functionality
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        Pravah Studio
      </div>
     
      {username ? (
        <>
        
        <div className="navbar__login">
          <Sidebar handleTabSelect={handleTabSelect} selectedTab={selectedTab} />
          <span></span>
          {/* <User selectedTab={selectedTab} /> */}
          <div className="navbar__username">{username}</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
        </>
      ) : (
        <>
         <ul className="navbar__links">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
        <div className="navbar__login">
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
        </>
      )}
    </nav>
  );
}
