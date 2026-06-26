import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="experience-timeline">
          
          <div className="experience-item">
            <div className="experience-dot"></div>
            <span className="experience-period">2024 – Present</span>
            <h3 className="experience-role">BCA Cybersecurity</h3>
            <div className="experience-company">Geeta University, Panipat</div>
            <div className="experience-description">
              <ul>
                <li>Studying specialized coursework in Network Security, Ethical Hacking, Cyber Laws, and Operating Systems.</li>
                <li>Active participant in university coding competitions and local Capture The Flag (CTF) hackathons.</li>
                <li>Building and deploying full-stack applications and secure sandbox testing environments.</li>
                <li>Collaborating on security labs and documenting defensive strategy configurations.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
