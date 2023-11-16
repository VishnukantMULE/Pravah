import React from 'react';
import Footer from './Footer';
import './style/Home.css'; 
import pravah from './style/PravahStudio (2).png'

export default function Home() {
  return (
    <div>
      <section className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1>Welcome to Pravah Studio</h1>
            <p>Discover a world of entertainment with music and video streaming at your fingertips.</p>
          </div>
          <img src={pravah} alt="WelcomeImage" className="welcome-image" />
        </div>
      </section>


      <div className="drawing"></div>

      <section className="section">
        <h2>Stream Music and Videos</h2>
        <p>Enjoy a vast library of music and videos covering various genres. Pravah Studio brings the best content to your screen.</p>
      </section>

      <div className="drawing"></div>

      <section className="section">
        <h2>Personalized Recommendations</h2>
        <p>Get personalized recommendations tailored to your taste. Our intelligent recommendation system ensures you never miss out on content you'll love.</p>
      </section>

      <div className="drawing"></div>

      <section className="section">
        <h2>Child Privacy Features</h2>
        <p>Pravah Studio prioritizes the safety of young users. Benefit from robust child privacy features, providing a secure and enjoyable experience for families.</p>
      </section>

      <div className="drawing"></div>

      <section className="section">
        <h2>Join Pravah Studio Today</h2>
        <p>Sign up now and unlock a world of entertainment. Experience seamless streaming, personalized recommendations, and a safe environment for all users.</p>
      </section>

      <Footer />
    </div>
  );
}
