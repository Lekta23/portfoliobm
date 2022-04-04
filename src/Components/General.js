import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'


export default function General() {
    const resumeData = require('../resumeData.json');
  return (
      <div>
    <Header data={resumeData.main}/>
    <About data={resumeData.main}/>
    <Resume data={resumeData.resume}/>
    <Portfolio data={resumeData.portfolio}/>
    <Footer data={resumeData.main}/>
    </div>
  )
}

