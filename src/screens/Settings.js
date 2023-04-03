import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../css/Settings.css'

function Settings(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/userdetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username: props.username })
        });
        const data = await response.json();
        setUser(data.user);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={classNames('profile-page', { 'dark-mode': true })}>
      <h1>Profile Page</h1>
      <div className="user-details">
        <div className="field">
          <div className="label">Username:</div>
          <div className="value">{user.username}</div>
        </div>
        <div className="field">
          <div className="label">Date of Birth:</div>
          <div className="value">{user.dob}</div>
        </div>
        <div className="field">
          <div className="label">Email:</div>
          <div className="value">{user.email}</div>
        </div>
        <div className="field">
          <div className="label">Contact:</div>
          <div className="value">{user.contact}</div>
        </div>
        <div className="field">
          <div className="label">Movie History:</div>
          <div className="value">{user.History.join(', ')}</div>
        </div>
        <div className="field">
          <div className="label">Saved Movies:</div>
          <div className="value">{user.Saved.join(', ')}</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
