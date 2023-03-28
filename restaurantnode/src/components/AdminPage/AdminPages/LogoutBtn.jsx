import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



function LogoutBtn() {
  
    const navigate=useNavigate()


function logoutFunc() {
    localStorage.removeItem('token');
    
    navigate('/admin')
    
    window.location.reload(false);

    
}
  return (
    <button className='logout-btn' onClick={logoutFunc}><i class="fa-solid fa-right-from-bracket"></i></button>
  )
}

export default LogoutBtn