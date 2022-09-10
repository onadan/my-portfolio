import React from 'react'
import Contact from './sections/Contact'
import Main from './sections/Main'
import Project from './sections/Project'
import Skills from './sections/Skills'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <div>
        <Main />
        <Project />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
