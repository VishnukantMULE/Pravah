import React from 'react';
import './style/Footer.css'; // You can create a separate CSS file for styling

export default function Footer() {
  return (
    <div className="footer-container">

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Prvah Studio. All rights reserved.</p>
      </div>
    </div>
  );
}
