import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../../../action/MainAction'
import AdminNav from '../AdminNav'
import Card from './Card'

function CommentPage() {
    
const comment=useSelector(state=>state.Data.comment)
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getComments())
},[])

const getAfterChange=()=>{
  dispatch(getComments())
}

  return (
    <>
   <AdminNav/>
   <div className='admin-container'>
    {
                comment.map((data,i)=>{
                    let str='★'
                    return(
                        <Card
                        key={i}
                        comment={data.comment}
                        name={data.name}
                        getAfterChange={getAfterChange}
                        rating={str.repeat(data.rating)}
                        deleteUrl={`delete-comment?id=${data.id}`}
                        />

                    )
                })
            }
    </div>
    </>

  )
}

export default CommentPage