
import './App.css';

const App = () => {
  return (
    <div className="landing-page">
      <header className="hero-section parallax">
        <nav className="navbar">
          <h1>Project Manager</h1>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h2>Manage Your Projects with Ease</h2>
          <p>Streamline your workflow and stay organized with our project management app.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      {/* Features Section with images */}
      <section id="features" className="features-section">
        <h3>Features</h3>

        <div className="feature-section">
          <div className="feature-content">
            <img src="https://via.placeholder.com/400" alt="Task Management" className="feature-image" />
            <div className="feature-text">
              <h4>Task Management</h4>
              <p>Keep track of tasks, deadlines, and progress to ensure everything stays on schedule.</p>
            </div>
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-content reverse">
            <img src="https://via.placeholder.com/400" alt="Team Collaboration" className="feature-image" />
            <div className="feature-text">
              <h4>Team Collaboration</h4>
              <p>Collaborate with your team in real-time, assign tasks, and track performance for improved teamwork.</p>
            </div>
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-content">
            <img src="https://via.placeholder.com/400" alt="Project Insights" className="feature-image" />
            <div className="feature-text">
              <h4>Project Insights</h4>
              <p>Gain valuable insights into your project’s performance with detailed reports and analytics.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="parallax parallax-about"></div> {/* Parallax for About Section */}
      
      <section id="about" className="about-section">
  <h3>About Us</h3>

  <div className="about-content">
    <img src="4942219.jpg" alt="Our Mission" className="about-image" />
    <div className="about-text">
      <p><strong>Our Mission</strong></p>
      <p>We aim to simplify project management, helping teams of all sizes work more efficiently and stay organized.</p>
    </div>
  </div>

  <div className="about-content reverse">
    <img src="10989905.jpg" alt="Our App" className="about-image" />
    <div className="about-text">
      <p><strong>What We Offer</strong></p>
      <p>An intuitive platform with real-time collaboration, customizable workflows, and detailed insights into project progress.</p>
    </div>
  </div>

  <div className="about-content">
    <img src="7457039.jpg" alt="Join Us" className="about-image" />
    <div className="about-text">
      <p><strong>Join Us</strong></p>
      <p>Be part of a community dedicated to making project management smarter, faster, and more effective.</p>
    </div>
  </div>
</section>




      <div className="parallax parallax-contact"></div> {/* Parallax for Contact Section */}
      
      

      <section id="contact" className="contact-section">
        <h3>Contact Us</h3>
        <p>Email us at support@projectmanager.com</p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
           
          </a>
        </div>
      </section>


      <footer className="footer">
        <p>&copy; 2024 Project Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

     