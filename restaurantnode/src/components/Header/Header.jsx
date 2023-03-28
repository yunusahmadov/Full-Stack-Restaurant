import React from 'react'
import SliderHeader from '../SliderHeader/SliderHeader'
import Nav from './Nav'
import './nav.css'
import RightMenu from './RightMenu'
import './HeaderResponsive.css'
import RightCart from './RightCart'
function Header() {
  
  return (
    <div >
        <Nav/>
        <RightMenu/>
        <RightCart/>
    <SliderHeader/>
    </div>
  )
}

export default Header