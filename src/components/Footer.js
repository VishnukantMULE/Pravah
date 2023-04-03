import React from 'react'
import '../css/Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We are a company that specializes in providing amazing products and services to our clients.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@company.com</p>  
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main St, City, State ZIP</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-media-icons">
              <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="/"><i className="fab fa-twitter"></i></a></li>
              <li><a href="/"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
