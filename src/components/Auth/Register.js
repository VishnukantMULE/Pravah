import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/Register.css';
import Loading from '../../system/Loading';


export default function Register({ setNavbarTab }) {
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://pravahstudio.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          dob,
          email,
          contact,
          password
        })
      });
      const data = await response.json();
      console.log(data);
      setNavbarTab('login');

      navigate('/login');
    } catch (err) {
      console.error(err);
      if (err.message.includes('Required fields')) {
        alert('Please fill in all required fields.');
      } else if (err.message.includes('Activation email')) {
        alert('Error sending activation email. Please try again later.');
      } else {
        alert(`Registration failed: ${err.message}`);
      }
    }
    
     finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Create an account</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Enter your date of birth"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="register-btn">Register</button>
      </form>
      <p className="register-login-text">
        Already registered? Please login <Link to='/login'>here</Link>.
      </p>
      {loading && <Loading />} {/* Show loading spinner when loading is true */}

    </div>
  );
}
