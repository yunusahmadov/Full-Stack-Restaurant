import React from 'react'
import './textcontainer.css'
function TextContainer({text1,text2,text3}) {
  const handleClickScroll = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="text-container">
    <h1>{text1}</h1>
    <h2>{text2}</h2>
    <p>{text3}</p>
    <button onClick={()=>handleClickScroll()} className='view-menu'>VIEW OUR MENU</button>
  </div>
  )
}

export default TextContainer