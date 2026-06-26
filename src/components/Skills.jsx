import React from 'react'

const Skills = () => {
  const engineeringSkills = ['Python', 'C++', 'JavaScript', 'React', 'Node.js', 'SQL']
  const securitySkills = ['Penetration Testing', 'Network Analysis', 'OWASP Top 10', 'Metasploit', 'Wireshark']
  const infrastructureSkills = ['Linux', 'Docker', 'Bash Scripting', 'Git', 'Packet Tracer']
  const certificationSkills = ['CEH V13', 'Google Cybersecurity', 'Ethical Hacking', 'Network Security']

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          
          <div className="skills-category">
            <h3 className="skills-category-title">
              <i className="fas fa-code"></i> Engineering
            </h3>
            <div className="skills-skill-list">
              {engineeringSkills.map((skill) => (
                <span key={skill} className="skills-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">
              <i className="fas fa-shield-alt"></i> Security
            </h3>
            <div className="skills-skill-list">
              {securitySkills.map((skill) => (
                <span key={skill} className="skills-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">
              <i className="fas fa-server"></i> Infrastructure
            </h3>
            <div className="skills-skill-list">
              {infrastructureSkills.map((skill) => (
                <span key={skill} className="skills-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">
              <i className="fas fa-award"></i> Certifications
            </h3>
            <div className="skills-skill-list">
              {certificationSkills.map((skill) => (
                <span key={skill} className="skills-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
