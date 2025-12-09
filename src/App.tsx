import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navigation isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
