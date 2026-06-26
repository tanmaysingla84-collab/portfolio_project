import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div>
            <h2 className="about-heading">About Me</h2>
            <p className="about-text">
              With a deep understanding of offensive security and modern software development, I bridge the gap between building applications and tearing them down. My methodology ensures that security is integrated into the architecture from day one, not treated as an afterthought.
            </p>
            <p className="about-text">
              I focus on building secure infrastructure, conducting threat assessments, and engineering robust backend systems that stand up against modern threat vectors.
            </p>
          </div>
          
          <div className="about-stat-grid">
            <div className="about-stat-card">
              <span className="about-stat-number">15+</span>
              <span className="about-stat-label">Projects Completed</span>
            </div>
            <div className="about-stat-card">
              <span className="about-stat-number">2</span>
              <span className="about-stat-label">Certifications</span>
            </div>
            <div className="about-stat-card">
              <span className="about-stat-number">50+</span>
              <span className="about-stat-label">CTFs Solved</span>
            </div>
            <div className="about-stat-card">
              <span className="about-stat-number">100%</span>
              <span className="about-stat-label">Security Mindset</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
