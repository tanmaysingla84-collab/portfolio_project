import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)
  
  const [secondsElapsed, setSecondsElapsed] = useState(0)

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

    return () => {
      window.removeEventListener('scroll', handleScroll)
      console.log('Scroll listener removed')
    }
  }, []) 
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prevSeconds) => prevSeconds + 1)
    }, 1000)

  return () => clearInterval(interval)
  }, [])

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

      {showScrollButton && (
        <button className="back-to-top-btn" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

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
