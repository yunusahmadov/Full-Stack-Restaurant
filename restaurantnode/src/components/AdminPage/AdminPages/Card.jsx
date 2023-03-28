import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteData } from '../../../action/MainAction'
import { img_path } from '../../../Api/MainApi'
import CloseBtn from './CloseBtn'
import EditBtn from './EditBtn'


function Card({name='',price='',comment='',rating='',getAfterChange,url='',deleteUrl='',ingredients='',type_id='',image=''}) {
    const dispatch=useDispatch()
    function deleteDataBtn(url) {
        dispatch(deleteData(url))
        .then(resp=>{
            getAfterChange()
        })
        openModalFunc()
    }
    const [openModal,setOpenModal]=useState(false)

    function openModalFunc() {
        setOpenModal(!openModal)
    }
  return (
    <div className="admin-card ">
            <div className="admin-top">
            <div className="admin-text">
 {
            name !=''?
            <h3>Name: <span>{name}</span></h3>:null
        }
        {
            price !=''?
            <h3>Price: <span>{price}₼</span></h3>:null
        }
        {
            ingredients !=''?
            <h3 className='ingr'>Ingredients: <span>{ingredients}</span></h3>:null
        }
        {
            type_id !=''?
            <h3>Type: <span>{type_id}</span></h3>:null
        }
        {
            comment !=''?
            <h3>Comment:<span>{comment}</span></h3>:null
        }
        {
            rating !=''?
            <h3>Rating:<span className='stars'>{rating}</span></h3>:null
        }
 </div>
<div className="admin-image">
{
            image !=''?
            <img src={img_path+image} />:null
        }
</div>
            </div>
    <div className="btn_cont">
        {
            url != ''?
            <EditBtn 
                title='Edit'
                url={url}
            />:null
        }
        
        <button onClick={()=>openModalFunc()} className='deleteBtn'>Delete</button>    
            {
                openModal?
                    <div className='background_shadow'>
    <div className="modal_body">
        <div className="modal_inp_container">
            Are you sure to delete:{name}
        </div>
        <div className="modal_btn_container">
            <button onClick={()=>openModalFunc()}>Close</button>
            <button onClick={()=>deleteDataBtn(deleteUrl)}>Delete</button>
            

        </div>
    </div>
</div>:null
            }


    </div>
</div>
  )
}

export default Card