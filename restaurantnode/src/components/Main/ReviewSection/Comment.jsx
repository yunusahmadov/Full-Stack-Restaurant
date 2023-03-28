import React from 'react'
import './Review.css'

function Comment({name,comment,rating}) {
  return (
    <div className="comment">
            <h2>{name}</h2>
            <p className='commentText'>{comment}</p>
            <p className='stars'>{rating}</p>
    </div>
  )
}

export default Comment