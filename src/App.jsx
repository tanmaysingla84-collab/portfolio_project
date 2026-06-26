import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  // useState: to toggle visibility of the "Back to Top" button
  const [showScrollButton, setShowScrollButton] = useState(false)
  
  // useState: to track the user's session time in seconds
  const [secondsElapsed, setSecondsElapsed] = useState(0)

  // useEffect: registers a scroll listener to show/hide "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    console.log('Scroll listener registered')

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      console.log('Scroll listener removed')
    }
  }, []) // Empty dependency array runs this effect only once on mount

  // useEffect: registers a timer that increments every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prevSeconds) => prevSeconds + 1)
    }, 1000)

    // Cleanup timer on unmount
    return () => clearInterval(interval)
  }, [])

  // Function to scroll smoothly to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="app-root">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Show back-to-top button conditionally using state */}
      {showScrollButton && (
        <button className="back-to-top-btn" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      {/* Simple session status indicator using state */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        background: 'rgba(0,0,0,0.8)',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#888',
        border: '1px solid #333',
        zIndex: 99
      }}>
        Session Time: {secondsElapsed}s
      </div>
    </div>
  )
}

export default App
