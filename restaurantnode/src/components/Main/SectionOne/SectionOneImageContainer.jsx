import React from 'react'
import img1 from '../../../images/sectionone1.jpg'
import img2 from '../../../images/sectionone2.jpg'
import './sectionOne.css'


function SectionOneImageContainer() {
  return (
    <div className='section-one-img-container'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
    </div>
  )
}

export default SectionOneImageContainer