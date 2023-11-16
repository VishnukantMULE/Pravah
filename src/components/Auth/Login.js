import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style/Login.css';
import Loading from '../../system/Loading';
import Alert from '../../system/Alert';
import { useAuth } from './AuthContext';

export default function Login() {
  const { setUsername } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setUsername(data.username);
        localStorage.setItem('username', data.username); // Save username to localStorage
        navigate('/movies');
      } else {
        setAlert({ message: data.message, type: 'error' });
        setError(data.message);
      }
    } catch (err) {
      setAlert({ message: 'An error occurred. Please try again later.', type: 'error' });
      console.error(err);
      setError('An error occurred. Please try again later.');

      // Navigate to the login page in case of an error
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Log In</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <p className="error-message">{error}</p>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
      {alert && <Alert message={alert.message} type={alert.type} />} {/* Show custom alert for errors */}
      {loading && <Loading />} {/* Show loading spinner when loading is true */}
    </div>
  );
}
