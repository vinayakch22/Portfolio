import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/FeaturedProjects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Education from './components/Education'
import SectionDivider from './components/SectionDivider'

const Portfolio = () => {
  return (
    <>
      <Header />
      <Home />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Footer />
    </>
  )
}

export default Portfolio 