import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './style/Navbarh.css';
import { useAuth } from './../Auth/AuthContext';

export default function Navbarh() {
  const { username, setUsername } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Retrieve username from localStorage when the component mounts
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setUsername]);

  const handleLogout = () => {
    setUsername('');
    localStorage.removeItem('username'); // Remove username from localStorage on logout
    navigate('/login');
    setIsMobileMenuOpen(false);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check if the user is not on the "Login" or "Register" page and is not authenticated
  const showLoginRegisterOptions =
    !username &&
    location.pathname !== '/login' &&
    location.pathname !== '/register';

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="company-logo">
          <h3>Pravah Studio</h3>
        </Link>
        {isMobile && (
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
        )}
        {(isMobileMenuOpen || !isMobile) && (
          <div className={`navbar__menu${isMobile ? ' mobile' : ''}`}>
            {showLoginRegisterOptions && (
              <>
                <div
                  className={`navbar__link-div`}
                  onClick={() => navigate('/login')}
                >
                  Login
                </div>
                <div
                  className={`navbar__link-div`}
                  onClick={() => navigate('/register')}
                >
                  Register
                </div>
              </>
            )}
            {username && (
              <>
                <ul className="navbar__links">
                  <li>
                    <span className={` usernameli`}>{username}</span>
                  </li>
                  <li>
                    <span
                      className={`navbar__link-div`}
                      onClick={() => navigate('/movies')}
                    >
                      Movies
                    </span>
                  </li>
                  <li>
                    <span
                      className={`navbar__link-div`}
                      onClick={() => navigate('/music')}
                    >
                      Music
                    </span>
                  </li>
                  <li>
                    <button className="logout-button" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            )}
          </div>
        )}
      </nav>
      {isMobile && (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul className="listp">
            {showLoginRegisterOptions && (
              <>
                <li>
                  <span
                    className={`navbar__link-div`}
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </span>
                </li>
                <li>
                  <span
                    className={`navbar__link-div`}
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </span>
                </li>
              </>
            )}
            {username && (
              <>
                <li>{username}</li>
                <li>
                  <span
                    className={`navbar__link-div`}
                    onClick={() => navigate('/movies')}
                  >
                    Movies
                  </span>
                </li>
                <li>
                  <span
                    className={`navbar__link-div`}
                    onClick={() => navigate('/music')}
                  >
                    Music
                  </span>
                </li>
                <li>
                  <button className="logout-button" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
