import './index.css';

function App() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="./profile.jpg" alt="Kifayat Muaz" className="profile-picture" />
        <h1>Kifayat Muaz</h1>
        <p>
          Welcome! I am Kifayat Muaz, a passionate researcher in International Relations. My work revolves around
          analyzing global politics, exploring diplomacy, and fostering international cooperation. Through my research,
          I aim to contribute to a deeper understanding of global dynamics and policy-making.
        </p>
        <p>
          With a keen interest in geopolitics and technology’s role in international affairs, I bring a unique
          perspective to the field. Join me on this journey to explore and address the challenges of our interconnected
          world.
        </p>
        <div className="social-links">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Kifayat Muaz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
