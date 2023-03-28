import React from 'react'
import './Footer.css'
import logo from '../../images/logowhite.png'
function Footer() {
  return (
    <footer>
      <div className="footer-container">
            <img src={logo} alt="" />
            <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</h3>
            <h4>+387648592568</h4>
            <h5>savory@qodeinteractive.com</h5>
            <p>Eighth Avenue 487, New York</p>
      </div>
    </footer>
  )
}

export default Footer