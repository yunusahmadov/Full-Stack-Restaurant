import React from 'react'
import { useDispatch } from 'react-redux'
import {changeStateValue} from '../../../reduxx/MainReducer'

function AddBtn({title}) {
    const dispatch =useDispatch()
    function openModalBtn() {
        dispatch(changeStateValue({
            name:'modalVisible',
            value:true
        }))
    }
  return (
    <button onClick={()=>openModalBtn()} className='add_btn'>{title}</button>

  )
}

export default AddBtn