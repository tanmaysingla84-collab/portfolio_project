import React, { useState } from 'react'

const Contact = () => {
  // useState: to track contact form fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // useState: to track submission status (success alert/message)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    // Check if fields are empty
    if (!name || !email || !subject || !message) {
      setSubmitStatus('error')
      return
    }

    // Set success status
    setSubmitStatus('success')

    // Reset state inputs
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')

    // Reset status message after 4 seconds
    setTimeout(() => {
      setSubmitStatus('')
    }, 4000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-heading">Let's Connect</h2>
          <p className="contact-text">
            Looking for an entry-level Security Analyst or full-stack Developer? Let's discuss how I can contribute to your team's success.
          </p>

          <div className="contact-box">
            <div className="contact-header">
              <h2>Let's build something secure.</h2>
              <p>Available for internships and entry-level roles in 2026.</p>
            </div>
            
            <form id="contactForm" className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <input 
                type="text" 
                id="subject" 
                placeholder="Subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required 
              />
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Your message..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>

            {/* Display validation or success messages using state */}
            {submitStatus === 'success' && (
              <div style={{
                marginTop: '15px',
                padding: '10px',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid #10b981',
                borderRadius: '4px',
                color: '#10b981',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                Success! Your message was submitted (simulated).
              </div>
            )}
            {submitStatus === 'error' && (
              <div style={{
                marginTop: '15px',
                padding: '10px',
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid #ef4444',
                borderRadius: '4px',
                color: '#ef4444',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                Error! Please fill out all fields.
              </div>
            )}
          </div>

          <div className="contact-info-list">
            <a href="mailto:tanmaysingla84@gmail.com" className="contact-item">
              <i className="fas fa-envelope contact-icon"></i> tanmaysingla84@gmail.com
            </a>
          </div>

          <div className="contact-socials">
            <a href="#" className="contact-social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="contact-social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <footer className="contact-footer">
            © 2026 Tanmay Singla. All rights reserved. • Built with React &amp; Vanilla CSS
          </footer>
        </div>
      </div>
    </section>
  )
}

export default Contact
