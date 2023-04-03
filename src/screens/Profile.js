import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../css/Profile.css'
import usericon from '../utils/icons/user.png'

function Profile(props) {
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
  }, [props.username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="profile-page">
    <div className="profile-container">
    <div className={classNames('profile-page')}>
      <div className="profile-header">
        <div className="profile-image">
          <img src={usericon} alt='userprofile' />
        </div>
        <div className="profile-info">
          <h1 className="username">{user.username}</h1>
          <div className="user-details">
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
          </div>
        </div>
      </div>
      
    </div>
    </div>
  </div>
  );
}

export default Profile;
