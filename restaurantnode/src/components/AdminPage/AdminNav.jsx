import React from 'react'
import { Link } from 'react-router-dom'
import '../AdminPage/admin.css'
function AdminNav() {
  return (
    <nav className='admin-nav'>
        <ul>
            <li >
                <Link to={'/food-type'}>Food Type</Link>
            </li>
            <li>
            <Link to={'/foods'}>Foods</Link>
            </li>
               <li>
            <Link to={'/comments'}>Comments</Link>
            </li>
        </ul>
    </nav>
  )
}

export default AdminNav