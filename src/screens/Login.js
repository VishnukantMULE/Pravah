import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'
import { Link } from 'react-router-dom';


export default function Login({ setUsername }) {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      alert(data.message);
      if (response.status === 200) {
        setUsername(data.username);
        navigate('/movies'); // Replace with your actual route
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
      <p>Dont have Account ? <Link to='/register'>Register</Link></p>

    </form>
  );


}

