import React from 'react'
import ingrImg from '../../../images/ingredients.jpg'
import './sectionthree.css'
import './SectionThreeResponsive.css'

function SectionThree() {
  return (
      <div className="sectionThree" >
          <div className="ingredients-container">
              <div className="ingredients-container-left">
                    <h2>TASTY AND CRUNCHY</h2>
                    <h3>INGREDIENTS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea commodo condor consectetur adipiscing elit, sed do eiusmod tempor incidition ullam.</p>
              </div>
              <div className="ingredients-container-right">
                    <img src={ingrImg}/>
              </div>
              
          </div>
      </div>
  )
}

export default SectionThree