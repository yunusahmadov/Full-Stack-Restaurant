import React from 'react'
import SectionOneImageContainer from './SectionOneImageContainer'
import SectionOneSignature from './SectionOneSignature'
import SectionOneText from './SectionOneText'
import './sectionOne.css'
import './SectionOneResponsive.css'


function SectionOne() {
  return (
    <section className='section-one'>
      <div className="section-one-container">
        <SectionOneText />
        <SectionOneImageContainer />
        <SectionOneSignature />
      </div>
    </section>
  )
}

export default SectionOne