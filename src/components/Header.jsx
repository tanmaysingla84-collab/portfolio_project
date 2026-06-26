import React from 'react'

const Header = () => {
  return (
    <header className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-text-container">
          <div className="hero-badge">
            OPEN TO OPPORTUNITIES
          </div>
          <h1 className="hero-name">Tanmay Singla</h1>
          <h2 className="hero-role">Cybersecurity Engineered</h2>
          <p className="hero-description">
            I'm a security analyst and full-stack developer. I build resilient digital infrastructure and neutralize vulnerabilities before they are exploited.
          </p>
          <div className="hero-button-group">
            <button className="hero-btn-primary">
              Explore Work <i className="fas fa-arrow-right"></i>
            </button>
            <button className="hero-btn-secondary">
              Contact Me
            </button>
            <button className="hero-btn-secondary">
              Get Resume
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/mypic.jpeg" alt="Tanmay Singla" className="hero-profile-image" />
        </div>
      </div>
    </header>
  )
}

export default Header
