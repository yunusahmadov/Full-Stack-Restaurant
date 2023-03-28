import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStateValue } from '../../../reduxx/MainReducer';



function Input({type,placeholder,name,value}) {
    const dispatch =useDispatch();
    function getInpValue(e) {
        dispatch(changeStateValue({
          name:e.target.name,
          value:e.target.value
        }))
      }


  return (
    <div className='input'>
    <input onChange={(e)=>getInpValue(e)} type={type} name={name} value={value} className="comment-input" placeholder={placeholder} />
    </div>
  )
}

export default Input