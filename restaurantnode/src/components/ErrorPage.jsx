import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate=useNavigate()
  return (
    <div>ErrorPage 404

      <button onClick={()=>navigate('/admin')}>Go to login</button>

    </div>
  )
}

export default ErrorPage