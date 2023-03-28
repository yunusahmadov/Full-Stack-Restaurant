import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getfoodByType } from '../../../action/MainAction'

function Select() {
    const dispatch=useDispatch()
    useEffect(()=>{
        // dispatch(getfoodByType())
    },[])
    return (
   <select>
    <option value="t"></option>
   </select>
  )
}

export default Select