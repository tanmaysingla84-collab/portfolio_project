import React from 'react'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Network Scanning and Vulnerability Assessment',
      description: 'Conducted comprehensive network discovery and vulnerability scanning across target environments using Nmap. Identified open ports, running services, and potential security weaknesses to formulate effective remediation strategies.',
      image: '/nmap.png',
      tags: ['Nmap', 'Vulnerability Assessment', 'Network Security']
    },
    {
      id: 2,
      title: 'OSINT Gathering using Maltego',
      description: 'Utilized Maltego for Open Source Intelligence (OSINT) gathering to map out digital footprints and uncover hidden relationships between entities. Executed complex transforms to analyze domains, emails, and infrastructure for threat intelligence.',
      image: '/maltego.png',
      tags: ['Maltego', 'OSINT', 'Threat Intel']
    },
    {
      id: 3,
      title: 'Mobile Screening & Control via Scrcpy & ADB',
      description: 'Leveraged ADB (Android Debug Bridge) and Scrcpy to establish remote administrative control and high-performance real-time screen mirroring for Android devices. Utilized for dynamic mobile application analysis and secure testing environments.',
      image: '/scrcpy.png',
      tags: ['ADB', 'Scrcpy', 'Mobile Security']
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="projects-card" key={project.id}>
              <div className="projects-image-placeholder">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projects-content">
                <h3 className="projects-title">{project.title}</h3>
                <p className="projects-desc">{project.description}</p>
                <div className="projects-tags">
                  {project.tags.map((tag) => (
                    <span className="projects-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="projects-links">
                  <a href="#" className="projects-link">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
