import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './style/Navbarh.css';
import { useAuth } from './../Auth/AuthContext'; // Adjust the path accordingly

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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            {!username ? (
              <>
                {location.pathname === '/register' && (
                  <div
                    className={`navbar__link-div`}
                    onClick={() => {
                      navigate('/login');
                    }}
                  >
                    Login
                  </div>
                )}
                {location.pathname === '/login' && (
                  <div
                    className={`navbar__link-div`}
                    onClick={() => {
                      navigate('/register');
                    }}
                  >
                    Register
                  </div>
                )}
              </>
            ) : (
              <>
                {/* <div className="navbar__username"></div> */}
                <ul className="navbar__links">
                  <li>
                    <span className={` usernameli`}>
                    {username}
                    </span>
                  </li>
                  <li>
                    <span className={`navbar__link-div`} onClick={() => navigate('/movies')}>
                      Movies
                    </span>
                  </li>
                  <li>
                    <span className={`navbar__link-div`} onClick={() => navigate('/music')}>
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
      {!username ? (
        <>
          {location.pathname === '/register' && (
            <li>
              <span
                className={`navbar__link-div`}
                onClick={() => {
                  navigate('/login');
                }}
              >
                Login
              </span>
            </li>
          )}
          {location.pathname === '/login' && (
            <li>
              <span
                className={`navbar__link-div`}
                onClick={() => {
                  navigate('/register');
                }}
              >
                Register
              </span>
            </li>
          )}
        </>
      ) : (
        <>
          <li>{username}</li>
          <li>
            <span className={`navbar__link-div`} onClick={() => navigate('/movies')}>
              Movies
            </span>
          </li>
          <li>
            <span className={`navbar__link-div`} onClick={() => navigate('/music')}>
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
