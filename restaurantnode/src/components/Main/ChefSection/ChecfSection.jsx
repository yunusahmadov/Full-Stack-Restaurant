import React from 'react'
import './chefSection.css'
import './ChefResponsive.css'
import yunuschef from "../../../images/chef.jpg"
function ChecfSection() {
    const handleClickScroll = () => {
        const element = document.getElementById('menu');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div className="chef-section">
        <div className="chef-container">
            <div className="chef-container-left">
                <h3>TASTY AND CRUNCHY</h3>
                <h4>OUR CHEF</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea commodo condor consectetur adipiscing elit, sed do eiusmod tempor incidition ullam</p>
                <button onClick={handleClickScroll} className='view-btn'>VIEW OUR MENU</button>
            </div>
            <div className="chef-container-right">
                <img src={yunuschef} alt="" />
                </div>
        </div>
    </div>
  )
}

export default ChecfSection