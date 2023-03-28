import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStateValue } from '../reduxx/MainReducer';


function NewInput({text,name,value,type}) {
  const dispatch =useDispatch();
  function getInpValue(e) {
      dispatch(changeStateValue({
        name:e.target.name,
        value:e.target.value
      }))
    }
  return (
    <div className='input-card'>
        <p className='new-input-text'>{text}</p>
        <input onChange={(e)=>getInpValue(e)} name={name} value={value} className='new-input' type={type} />
    </div>
  )
}

export default NewInput