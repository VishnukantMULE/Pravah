import React from 'react';
import Footer from './Footer';
import './style/Home.css'; // You can create a separate CSS file for styling
import pravah from './style/PravahStudio (2).png'

export default function Home() {
  return (
    <div>
      {/* Section 1: Introduction */}
      <section className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1>Welcome to Pravah Studio</h1>
            <p>Discover a world of entertainment with music and video streaming at your fingertips.</p>
          </div>
          <img src={pravah} alt="WelcomeImage" className="welcome-image" />
        </div>
      </section>


      {/* Drawing-like transition */}
      <div className="drawing"></div>

      {/* Section 2: Stream Music and Videos */}
      <section className="section">
        <h2>Stream Music and Videos</h2>
        <p>Enjoy a vast library of music and videos covering various genres. Pravah Studio brings the best content to your screen.</p>
      </section>

      {/* Drawing-like transition */}
      <div className="drawing"></div>

      {/* Section 3: Personalized Recommendations */}
      <section className="section">
        <h2>Personalized Recommendations</h2>
        <p>Get personalized recommendations tailored to your taste. Our intelligent recommendation system ensures you never miss out on content you'll love.</p>
      </section>

      {/* Drawing-like transition */}
      <div className="drawing"></div>

      {/* Section 4: Child Privacy Features */}
      <section className="section">
        <h2>Child Privacy Features</h2>
        <p>Pravah Studio prioritizes the safety of young users. Benefit from robust child privacy features, providing a secure and enjoyable experience for families.</p>
      </section>

      {/* Drawing-like transition */}
      <div className="drawing"></div>

      {/* Section 5: Join Pravah Studio Today */}
      <section className="section">
        <h2>Join Pravah Studio Today</h2>
        <p>Sign up now and unlock a world of entertainment. Experience seamless streaming, personalized recommendations, and a safe environment for all users.</p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
