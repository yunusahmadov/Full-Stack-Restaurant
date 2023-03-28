import React from 'react'

function MenuButton({onClick,label}) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default MenuButton