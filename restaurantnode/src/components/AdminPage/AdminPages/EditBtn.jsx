import React from 'react'
import { useDispatch } from 'react-redux'
import { getOneData } from '../../../action/MainAction'
import { changeStateValue } from '../../../reduxx/MainReducer'



function EditBtn({title,url}) {
    const dispatch =useDispatch()
    function editBtn(){

      dispatch(getOneData(url))
      .then(resp=>{
        if(resp == "success"){
          dispatch(changeStateValue({
            name: "modalVisible",
            value: true
          }))
        }
      })
    }
    
  return (
    <button onClick={editBtn}>{title}</button>
  )
}

export default EditBtn