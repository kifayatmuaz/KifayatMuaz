import './index.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-menu">
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="about-container">
          <div className="about-content">
            <img src="./profile.jpg" alt="Kifayat Muaz" className="profile-picture" />
            <h1>Kifayat Muaz</h1>
            <p className="description">
              Welcome! I am Kifayat Muaz, a passionate researcher in International Relations. My work revolves around
              analyzing global politics, exploring diplomacy, and fostering international cooperation. Through my research,
              I aim to contribute to a deeper understanding of global dynamics and policy-making.
            </p>
            <p className="description">
              With a keen interest in geopolitics and technology’s role in international affairs, I bring a unique
              perspective to the field. Join me on this journey to explore and address the challenges of our interconnected
              world.
            </p>
            <div className="social-links">
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-container">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" required />
            <input type="email" placeholder="Your Email" className="form-input" required />
            <textarea placeholder="Your Message" className="form-textarea" rows="5" required></textarea>
            <button type="submit" className="form-button">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Kifayat Muaz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
