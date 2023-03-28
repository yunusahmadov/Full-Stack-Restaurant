import React from 'react'
import logo from '../../images/logowhite.png'
import logoblack from '../../images/logo.png'
import { useSelector} from 'react-redux';
import './HeaderResponsive.css'

import './logo.css'

function Logo() {
  const nav=useSelector(state=>state.Data.nav)
  
  return (
    <div className="logo" >
      {
       <img style={nav ? { width:'90px',height:'50px' } : { width:'130px',height:'70px' }} src={
        nav?
        logoblack:logo
       } alt="" />
      }
        
    </div>
  )
}

export default Logo