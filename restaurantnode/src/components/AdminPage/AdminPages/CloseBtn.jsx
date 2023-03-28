import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStateValue } from '../../../reduxx/MainReducer'


function CloseBtn() {
    const dispatch =useDispatch()
    function closeModalBtn() {
        dispatch(changeStateValue({
            name:'modalVisible',
            value:false
        }))
        dispatch(changeStateValue({
            name: "oneData",
            value: ''
        }))
    }
  return (
    <button onClick={closeModalBtn}>Close</button>
  )
}

export default CloseBtn