import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Navbarh.css';

export default function Navbarh({ setUsername, username }) {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('rcm');
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
    setIsMobileMenuOpen(false);
    if (isMobile) {
      setIsSidebarOpen(false);
    }

    // Manually navigate to the selected tab
    navigate(`/${tab}`);
  };

  const handleLogout = () => {
    setUsername('');
    navigate('/login');
    setIsMobileMenuOpen(false);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          Pravah Studio
        </div>
        {isMobile && (
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
        )}
        {(isMobileMenuOpen || !isMobile) && (
          <div className={`navbar__menu${isMobile ? ' mobile' : ''}`}>
            {username ? (
              <div className="navbar__username">{username}</div>
            ) : (
              <>
                <div
                  className={`navbar__link-div${selectedTab === "login" ? ' selected' : ''}`}
                  onClick={() => {
                    navigate('/login');
                    handleTabSelect('login');
                  }}
                >
                  Login
                </div>
                <div
                  className={`navbar__link-div${selectedTab === "register" ? ' selected' : ''}`}
                  onClick={() => {
                    navigate('/register');
                    handleTabSelect('register');
                  }}
                >
                  Register
                </div>
              </>
            )}
            {username && (
              <ul className="navbar__links">
                <li>
                  <span className={`navbar__link-div${selectedTab === "movies" ? ' active' : ''}`} onClick={() => handleTabSelect("movies")}>
                    Movies
                  </span>
                </li>
                <li>
                  <span className={`navbar__link-div${selectedTab === "music" ? ' active' : ''}`} onClick={() => handleTabSelect("music")}>
                    Music
                  </span>
                </li>
                <li>
                  <button className="logout-button" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            )}
          </div>
        )}
      </nav>
      {isMobile && isSidebarOpen && (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul className='listp'>
            <li>
              {username}
            </li>
            <li>
              <span className={`navbar__link-div${selectedTab === "movies" ? ' active' : ''}`} onClick={() => handleTabSelect("movies")}>
                Movies
              </span>
            </li>
            <li>
              <span className={`navbar__link-div${selectedTab === "music" ? ' active' : ''}`} onClick={() => handleTabSelect("music")}>
                Music
              </span>
            </li>
            <li>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
