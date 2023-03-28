import React from 'react'
import signature from "../../../images/imza.png"
import './sectionOne.css'

function SectionOneSignature() {
  return (
    <div className='signature-container'>
        <p>JOSEFINE HOELLER</p>
        <img src={signature} alt="" />
    </div>
  )
}

export default SectionOneSignature